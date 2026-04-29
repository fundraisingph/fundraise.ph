import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hashPassword, verifyToken, getCookieName, hasPermission, signToken, getCookieName as _cn, getCookieOptions } from '@/lib/admin-auth'

function getAuthPayload(request: NextRequest) {
  const token = request.cookies.get(getCookieName())?.value
  return token ? verifyToken(token) : null
}

export async function GET(request: NextRequest) {
  const auth = getAuthPayload(request)
  if (!auth || !hasPermission(auth.role, 'user', 'read')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const users = await db.adminUser.findMany({
    select: { id: true, email: true, name: true, role: true, status: true, lastLoginAt: true, createdAt: true, createdBy: true },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ users })
}

export async function POST(request: NextRequest) {
  const auth = getAuthPayload(request)
  if (!auth || !hasPermission(auth.role, 'user', 'create')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { email, name, password, role } = await request.json()

  if (!email || !name || !password || !role) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  }

  if (!['admin', 'editor', 'viewer'].includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
  }

  const existing = await db.adminUser.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
  }

  const hashed = await hashPassword(password)

  const user = await db.adminUser.create({
    data: { email, name, password: hashed, role, createdBy: auth.sub },
    select: { id: true, email: true, name: true, role: true, status: true, createdAt: true },
  })

  return NextResponse.json({ user }, { status: 201 })
}
