import { NextResponse } from 'next/server'
import { verifyToken, hasPermission, type AdminRole } from '@/lib/admin-auth'
import { getAllBadges } from '@/lib/verification-service'

function getAuthUser(request: Request) {
  const cookie = request.headers.get('cookie') || ''
  const match = cookie.match(/fundraise-admin-session=([^;]+)/)
  if (!match) return null
  return verifyToken(match[1])
}

export async function GET(request: Request) {
  const user = getAuthUser(request)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  if (!hasPermission(user.role as AdminRole, 'verification', 'read')) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') || undefined
  const type = searchParams.get('type') || undefined

  const badges = await getAllBadges({ status, type })
  return NextResponse.json({ success: true, data: badges })
}
