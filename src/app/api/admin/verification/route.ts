import { NextResponse } from 'next/server'
import { verifyToken, hasPermission, type AdminRole } from '@/lib/admin-auth'
import {
  awardVerificationLayer,
  revokeVerificationLayer,
  getVerificationStatus,
} from '@/lib/verification-service'
import type { VerificationLayer } from '@/lib/badge-types'

function getAuthUser(request: Request) {
  const cookie = request.headers.get('cookie') || ''
  const match = cookie.match(/fundraise-admin-session=([^;]+)/)
  if (!match) return null
  return verifyToken(match[1])
}

export async function POST(request: Request) {
  const user = getAuthUser(request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!hasPermission(user.role as AdminRole, 'verification', 'create')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await request.json()
  const { campaignId, layer, evidence, notes } = body

  if (!campaignId || !layer) {
    return NextResponse.json({ error: 'campaignId and layer are required' }, { status: 400 })
  }

  try {
    const badge = await awardVerificationLayer({
      campaignId,
      layer: layer as VerificationLayer,
      awardedBy: user.sub,
      evidence,
      notes,
    })
    return NextResponse.json({ success: true, data: badge })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

export async function DELETE(request: Request) {
  const user = getAuthUser(request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!hasPermission(user.role as AdminRole, 'verification', 'delete')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await request.json()
  const { campaignId, layer, reason } = body

  if (!campaignId || !layer || !reason) {
    return NextResponse.json({ error: 'campaignId, layer, and reason are required' }, { status: 400 })
  }

  try {
    const badge = await revokeVerificationLayer({
      campaignId,
      layer: layer as VerificationLayer,
      revokedBy: user.sub,
      reason,
    })
    return NextResponse.json({ success: true, data: badge })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

export async function GET(request: Request) {
  const user = getAuthUser(request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!hasPermission(user.role as AdminRole, 'verification', 'read')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const campaignId = searchParams.get('campaignId')

  if (!campaignId) {
    return NextResponse.json({ error: 'campaignId is required' }, { status: 400 })
  }

  const status = await getVerificationStatus(campaignId)
  return NextResponse.json({ success: true, data: status })
}
