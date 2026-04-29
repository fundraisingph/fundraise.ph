import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, getCookieName, hasPermission } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  const token = request.cookies.get(getCookieName())?.value
  const auth = token ? verifyToken(token) : null

  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { to, subject, body } = await request.json()

    if (!to || !subject || !body) {
      return NextResponse.json({ error: 'Missing required fields: to, subject, body' }, { status: 400 })
    }

    console.log(`[notification] Email to: ${to}`)
    console.log(`[notification] Subject: ${subject}`)
    console.log(`[notification] Body:\n${body}`)
    console.log(`[notification] Status: logged (email delivery requires SendGrid/SMTP configuration)`)

    return NextResponse.json({
      success: true,
      message: 'Notification logged',
      to,
      subject,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process notification' }, { status: 500 })
  }
}
