import crypto from 'crypto'

const FUNDRAISING_PH_URL = process.env.FUNDRAISING_PH_URL || 'http://localhost:3020'
const FUNDRAISING_PH_API_KEY = process.env.FUNDRAISING_PH_API_KEY || ''
const INTEGRATION_HMAC_SECRET = process.env.INTEGRATION_HMAC_SECRET || ''

const PARTNER_TYPE_MAP: Record<string, string> = {
  NGO: 'NGO',
  School: 'CORPORATE',
  Supplier: 'LOGISTICS',
  Church: 'CORPORATE',
  LGU: 'CORPORATE',
  'Corporate Sponsor': 'CORPORATE',
  'Diaspora Organization': 'CORPORATE',
  'Technology Partner': 'CORPORATE',
  'Legal/Compliance': 'CORPORATE',
}

const VALID_PARTNER_TYPES = ['POD_PROVIDER', 'LOGISTICS', 'PAYMENT_GATEWAY', 'NGO', 'CORPORATE']

function generateHmacSignature(secret: string, timestamp: string, body: string): string {
  const message = `${timestamp}.${body}`
  return crypto.createHmac('sha256', secret).update(message).digest('hex')
}

function generateCorrelationId(): string {
  return `ctx_${Date.now()}_${crypto.randomBytes(8).toString('hex')}`
}

function generateTempPassword(): string {
  const chars = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let pw = ''
  for (let i = 0; i < 12; i++) pw += chars[Math.floor(Math.random() * chars.length)]
  return `Fp!${pw}`
}

async function fundraisingProvisionApi(payload: object): Promise<any> {
  if (!FUNDRAISING_PH_API_KEY) {
    throw new Error('FUNDRAISING_PH_API_KEY not configured')
  }

  const url = `${FUNDRAISING_PH_URL}/api/integration/provision`
  const body = JSON.stringify(payload)
  const timestamp = new Date().toISOString()
  const correlationId = generateCorrelationId()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'x-api-key': FUNDRAISING_PH_API_KEY,
    'X-Request-Id': correlationId,
  }

  if (INTEGRATION_HMAC_SECRET) {
    headers['X-Signature'] = generateHmacSignature(INTEGRATION_HMAC_SECRET, timestamp, body)
    headers['X-Timestamp'] = timestamp
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body,
      signal: controller.signal,
    })

    const data = await res.json()

    if (!res.ok) {
      const errMsg = data.error || `HTTP ${res.status}`
      const corrId = data.correlationId || correlationId
      throw new Error(`Provisioning API error: ${errMsg} (ref: ${corrId})`)
    }

    return { ...data, correlationId }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Provisioning API timeout after 15s')
    }
    throw error
  } finally {
    clearTimeout(timeout)
  }
}

export interface PartnerApplicationData {
  organizationName: string
  contactPerson: string
  email: string
  phone: string
  partnerType: string
  website?: string | null
  description: string
  mission?: string | null
}

export interface ProvisioningResult {
  success: boolean
  userId?: string
  partnerId?: string
  tempPassword?: string
  correlationId?: string
  isNewUser?: boolean
  isNewPartner?: boolean
  mappedType?: string
  error?: string
  typeWarning?: string
}

export async function provisionPartnerOnFundraising(data: PartnerApplicationData): Promise<ProvisioningResult> {
  if (!FUNDRAISING_PH_API_KEY) {
    return { success: false, error: 'FUNDRAISING_PH_API_KEY not configured' }
  }

  const mappedType = PARTNER_TYPE_MAP[data.partnerType]
  let typeWarning: string | undefined

  if (!mappedType) {
    typeWarning = `Unmapped partner type "${data.partnerType}" — defaulting to CORPORATE`
    console.warn(`[cross-platform] ${typeWarning}`)
  }

  const finalType = mappedType || 'CORPORATE'

  try {
    const nameParts = data.contactPerson.trim().split(/\s+/)
    const firstName = nameParts[0] || 'Partner'
    const lastName = nameParts.slice(1).join(' ') || 'User'
    const tempPassword = generateTempPassword()

    const result = await fundraisingProvisionApi({
      sourcePlatform: 'fundraise.ph',
      user: {
        firstName,
        lastName,
        email: data.email,
        phone: data.phone,
        password: tempPassword,
        organizationDetails: data.organizationName,
      },
      partner: {
        name: data.organizationName,
        type: finalType,
        description: data.description || data.mission || '',
        websiteUrl: data.website || null,
        contactEmail: data.email,
        contactPhone: data.phone,
      },
    })

    return {
      success: true,
      userId: result.user?.id,
      partnerId: result.partner?.id,
      tempPassword,
      correlationId: result.correlationId,
      isNewUser: result.user?.isNew,
      isNewPartner: result.partner?.isNew,
      mappedType: finalType,
      typeWarning,
    }
  } catch (error: any) {
    console.error('[cross-platform] Provisioning failed:', error.message)
    return {
      success: false,
      error: error.message,
      mappedType: finalType,
      typeWarning,
    }
  }
}

export interface EmailNotification {
  to: string
  subject: string
  body: string
}

export async function sendPartnerApprovalNotifications(
  data: PartnerApplicationData,
  provisioningResult: ProvisioningResult,
  reviewedBy: string,
): Promise<void> {
  const notifications: EmailNotification[] = []

  const approvedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  notifications.push({
    to: data.email,
    subject: `Your Fundraise.ph Partner Application Has Been Approved`,
    body: [
      `Dear ${data.contactPerson},`,
      ``,
      `Your partner application for "${data.organizationName}" has been approved on ${approvedDate}.`,
      ``,
      provisioningResult.success
        ? [
            `An account has been created for you on Fundraising.ph:`,
            `  Email: ${data.email}`,
            `  Temporary Password: ${provisioningResult.tempPassword}`,
            `  Partner Type: ${provisioningResult.mappedType}`,
            ``,
            `Please log in at ${FUNDRAISING_PH_URL} and change your password immediately.`,
          ].join('\n')
        : `Note: Account provisioning on Fundraising.ph is pending. You will receive a separate email with your login credentials.`,
      ``,
      `Reviewed by: ${reviewedBy}`,
      ``,
      `Thank you for partnering with Fundraise.ph.`,
      ``,
      `Best regards,`,
      `The Fundraise.ph Team`,
    ].join('\n'),
  })

  notifications.push({
    to: 'admin@fundraise.ph',
    subject: `[Internal] Partner Approved: ${data.organizationName}`,
    body: [
      `Partner application approved and processed:`,
      ``,
      `  Organization: ${data.organizationName}`,
      `  Contact: ${data.contactPerson} (${data.email})`,
      `  Type: ${data.partnerType} → ${provisioningResult.mappedType || 'N/A'}`,
      `  Reviewed by: ${reviewedBy}`,
      ``,
      provisioningResult.success
        ? [
            `Cross-Platform Provisioning: SUCCESS`,
            `  User ID: ${provisioningResult.userId}`,
            `  Partner ID: ${provisioningResult.partnerId}`,
            `  New User: ${provisioningResult.isNewUser ? 'Yes' : 'No (existing)'}`,
            `  New Partner: ${provisioningResult.isNewPartner ? 'Yes' : 'No (existing)'}`,
            `  Correlation: ${provisioningResult.correlationId || 'N/A'}`,
          ].join('\n')
        : [
            `Cross-Platform Provisioning: FAILED`,
            `  Error: ${provisioningResult.error}`,
          ].join('\n'),
      ``,
      provisioningResult.typeWarning ? `⚠ WARNING: ${provisioningResult.typeWarning}` : '',
    ].join('\n'),
  })

  notifications.push({
    to: 'support@fundraising.ph',
    subject: `[Fundraise.ph Integration] Partner Provisioned: ${data.organizationName}`,
    body: [
      `A partner has been approved on fundraise.ph and provisioned on fundraising.ph.`,
      ``,
      `  Organization: ${data.organizationName}`,
      `  Contact: ${data.contactPerson} (${data.email})`,
      `  Partner Type: ${data.partnerType} → ${provisioningResult.mappedType || 'CORPORATE'}`,
      ``,
      provisioningResult.success
        ? `Provisioning completed successfully. User ID: ${provisioningResult.userId}, Partner ID: ${provisioningResult.partnerId}.`
        : `Provisioning FAILED: ${provisioningResult.error}. Manual intervention required.`,
      ``,
      `Source: fundraise.ph admin dashboard`,
      `Date: ${approvedDate}`,
    ].join('\n'),
  })

  for (const notification of notifications) {
    try {
      await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(notification),
      })
    } catch (err) {
      console.error(`[email] Failed to send notification to ${notification.to}:`, err)
    }
  }
}
