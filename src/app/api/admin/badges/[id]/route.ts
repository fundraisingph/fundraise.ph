import { NextResponse } from 'next/server'
import { verifyToken, hasPermission, type AdminRole } from '@/lib/admin-auth'
import { getBadgeById, updateBadge } from '@/lib/verification-service'

function getAuthUser(request: Request) {
  const cookie = request.headers.get('cookie') || ''
  const match = cookie.match(/fundraise-admin-session=([^;]+)/)
  if (!match) return null
  return verifyToken(match[1])
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = getAuthUser(_request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!hasPermission(user.role as AdminRole, 'verification', 'read')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const badge = await getBadgeById(id)
  if (!badge) return NextResponse.json({ error: 'Badge not found' }, { status: 404 })
  return NextResponse.json({ success: true, data: badge })
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = getAuthUser(request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!hasPermission(user.role as AdminRole, 'verification', 'update')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const body = await request.json()

  try {
    const badge = await updateBadge(id, body)
    return NextResponse.json({ success: true, data: badge })
  } catch {
    return NextResponse.json({ error: 'Badge not found' }, { status: 404 })
  }
}
