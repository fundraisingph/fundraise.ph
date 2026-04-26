import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// POST /api/admin/login - Admin login
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const admin = await db.adminUser.findUnique({ where: { email } })

    if (!admin || admin.password !== password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Simple session: return admin info (in production, use proper auth with JWT/sessions)
    return NextResponse.json({
      admin: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    })
  } catch (error) {
    console.error('Error during admin login:', error)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
