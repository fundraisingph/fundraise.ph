import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { hashPassword, verifyToken, getCookieName, hasPermission } from '@/lib/admin-auth'

function getAuthPayload(request: NextRequest) {
  const token = request.cookies.get(getCookieName())?.value
  return token ? verifyToken(token) : null
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = getAuthPayload(request)
  if (!auth || !hasPermission(auth.role, 'user', 'update')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()

  const data: Record<string, any> = {}
  if (body.name) data.name = body.name
  if (body.role && ['admin', 'editor', 'viewer'].includes(body.role)) data.role = body.role
  if (body.status && ['active', 'suspended'].includes(body.status)) data.status = body.status
  if (body.password) data.password = await hashPassword(body.password)

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 })
  }

  if (id === auth.sub && data.status === 'suspended') {
    return NextResponse.json({ error: 'Cannot suspend your own account' }, { status: 400 })
  }

  const user = await db.adminUser.update({
    where: { id },
    data,
    select: { id: true, email: true, name: true, role: true, status: true },
  })

  return NextResponse.json({ user })
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const auth = getAuthPayload(request)
  if (!auth || !hasPermission(auth.role, 'user', 'delete')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  if (id === auth.sub) {
    return NextResponse.json({ error: 'Cannot delete your own account' }, { status: 400 })
  }

  await db.adminUser.delete({ where: { id } })

  return NextResponse.json({ message: 'User deleted' })
}
