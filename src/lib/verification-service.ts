import { db } from './db'
import {
  type VerificationLayer,
  type VerificationStatusResult,
  type VerificationLayerStatus,
  type PublicBadge,
  type AwardLayerParams,
  type RevokeLayerParams,
  KNOWN_LAYERS,
  VERIFICATION_LAYER_LABELS,
  VERIFICATION_LAYER_DESCRIPTIONS,
  PREREQUISITE_CHAINS,
  BADGE_EXPIRY_YEARS,
} from './badge-types'

function addYears(date: Date, years: number): Date {
  const result = new Date(date)
  result.setFullYear(result.getFullYear() + years)
  return result
}

export async function getVerificationStatus(campaignId: string): Promise<VerificationStatusResult> {
  const badges = await db.verificationBadge.findMany({
    where: { campaignId },
    orderBy: { requestedAt: 'desc' },
  })

  const badgeByType = new Map<string, (typeof badges)[0]>()
  for (const badge of badges) {
    if (!badgeByType.has(badge.type)) {
      badgeByType.set(badge.type, badge)
    }
  }

  const layers: VerificationLayerStatus[] = KNOWN_LAYERS.map((layer) => {
    const badge = badgeByType.get(layer)
    const isExpired = badge?.expiresAt ? new Date(badge.expiresAt) < new Date() : false
    const isRevoked = badge?.isRevoked === true
    return {
      layer,
      label: VERIFICATION_LAYER_LABELS[layer] || layer,
      completed: badge?.status === 'APPROVED' && !isExpired && !isRevoked,
      completedAt: badge?.issuedAt ?? null,
      verifiedBy: badge?.verifiedBy ?? null,
    }
  })

  const completedCount = layers.filter((l) => l.completed).length
  const overallLevel = Math.min(completedCount, 5)

  const publicBadges: PublicBadge[] = layers
    .filter((l) => l.completed)
    .map((l) => ({
      type: l.layer,
      label: l.label,
      description: VERIFICATION_LAYER_DESCRIPTIONS[l.layer] || '',
    }))

  const canShowTrustBadge = layers.find((l) => l.layer === 'IDENTITY_VERIFIED')?.completed ?? false
  const trustBadgeLabel =
    canShowTrustBadge && publicBadges.length > 0
      ? `Verified: ${publicBadges.map((b) => b.label).join(', ')}`
      : null

  return { layers, overallLevel, publicBadges, canShowTrustBadge, trustBadgeLabel }
}

export async function awardVerificationLayer(params: AwardLayerParams) {
  const { campaignId, layer, awardedBy, evidence, notes } = params

  if (!KNOWN_LAYERS.includes(layer)) {
    throw new Error(`Unknown verification layer: ${layer}`)
  }

  const prerequisites = PREREQUISITE_CHAINS[layer] || []
  if (prerequisites.length > 0) {
    for (const prereq of prerequisites) {
      const prereqBadge = await db.verificationBadge.findFirst({
        where: {
          campaignId,
          type: prereq,
          status: 'APPROVED',
          isRevoked: false,
        },
      })
      if (!prereqBadge) {
        throw new Error(`Prerequisite not met: ${prereq} must be completed before ${layer}`)
      }
    }
  }

  const existing = await db.verificationBadge.findFirst({
    where: {
      campaignId,
      type: layer,
      isRevoked: false,
      status: { notIn: ['REJECTED', 'EXPIRED'] },
    },
  })

  if (existing) {
    throw new Error(`Active badge already exists for layer ${layer} on this campaign`)
  }

  const expiryYears = BADGE_EXPIRY_YEARS[layer]
  const now = new Date()

  const badge = await db.verificationBadge.create({
    data: {
      campaignId,
      type: layer,
      status: 'APPROVED',
      issuedAt: now,
      expiresAt: addYears(now, expiryYears),
      verifiedBy: awardedBy,
      requestNotes: notes,
      prerequisiteMet: prerequisites.length === 0,
    },
  })

  return badge
}

export async function revokeVerificationLayer(params: RevokeLayerParams) {
  const { campaignId, layer, revokedBy, reason } = params

  const badge = await db.verificationBadge.findFirst({
    where: {
      campaignId,
      type: layer,
      isRevoked: false,
      status: 'APPROVED',
    },
  })

  if (!badge) {
    throw new Error(`No active badge found for layer ${layer} on this campaign`)
  }

  const updated = await db.verificationBadge.update({
    where: { id: badge.id },
    data: {
      isRevoked: true,
      revokedAt: new Date(),
      revokedBy,
      revokedReason: reason,
      status: 'EXPIRED',
    },
  })

  return updated
}

export async function getBadgesForCampaign(campaignId: string) {
  return db.verificationBadge.findMany({
    where: { campaignId },
    orderBy: { requestedAt: 'desc' },
  })
}

export async function getAllBadges(filters?: { status?: string; type?: string }) {
  const where: Record<string, unknown> = {}
  if (filters?.status) where.status = filters.status
  if (filters?.type) where.type = filters.type
  return db.verificationBadge.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  })
}

export async function getBadgeById(id: string) {
  return db.verificationBadge.findUnique({ where: { id } })
}

export async function updateBadge(id: string, data: { status?: string; requestNotes?: string; rejectionReason?: string }) {
  return db.verificationBadge.update({ where: { id }, data })
}
