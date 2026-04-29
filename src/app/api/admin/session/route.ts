import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, getCookieName } from '@/lib/admin-auth'

export async function GET(request: NextRequest) {
  const token = request.cookies.get(getCookieName())?.value

  if (!token) {
    return NextResponse.json({ error: 'No session' }, { status: 401 })
  }

  const payload = verifyToken(token)

  if (!payload) {
    const response = NextResponse.json({ error: 'Invalid session' }, { status: 401 })
    response.cookies.delete(getCookieName())
    return response
  }

  return NextResponse.json({
    admin: {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      role: payload.role,
    },
  })
}

export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({ message: 'Logged out' })
  response.cookies.delete(getCookieName())
  return response
}
