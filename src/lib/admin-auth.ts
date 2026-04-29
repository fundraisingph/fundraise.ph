import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'fundraise-admin-secret-change-in-production'
const JWT_EXPIRY = '24h'
const COOKIE_NAME = 'fundraise-admin-session'

export type AdminRole = 'admin' | 'editor' | 'viewer'

export interface AdminTokenPayload {
  sub: string
  email: string
  name: string
  role: AdminRole
}

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

export function signToken(payload: AdminTokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY })
}

export function verifyToken(token: string): AdminTokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AdminTokenPayload
  } catch {
    return null
  }
}

export function getCookieName(): string {
  return COOKIE_NAME
}

export function getCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 60 * 60 * 24,
  }
}

export const ROLE_PERMISSIONS: Record<AdminRole, Record<string, string[]>> = {
  admin: {
    blog: ['create', 'read', 'update', 'delete', 'publish'],
    newsletter: ['create', 'read', 'update', 'delete', 'approve'],
    correspondence: ['create', 'read', 'update', 'delete', 'approve'],
    template: ['create', 'read', 'update', 'delete'],
    partner: ['create', 'read', 'update', 'delete'],
    settings: ['create', 'read', 'update', 'delete'],
    user: ['create', 'read', 'update', 'delete'],
    dashboard: ['read'],
  },
  editor: {
    blog: ['create', 'read', 'update', 'publish'],
    newsletter: ['create', 'read', 'update'],
    correspondence: ['create', 'read', 'update'],
    template: ['create', 'read', 'update'],
    partner: ['read'],
    settings: ['read'],
    user: [],
    dashboard: ['read'],
  },
  viewer: {
    blog: ['read'],
    newsletter: ['read'],
    correspondence: ['read'],
    template: ['read'],
    partner: ['read'],
    settings: ['read'],
    user: [],
    dashboard: ['read'],
  },
}

export function hasPermission(role: AdminRole, resource: string, action: string): boolean {
  const permissions = ROLE_PERMISSIONS[role]?.[resource]
  return permissions ? permissions.includes(action) : false
}

export function requirePermission(role: AdminRole, resource: string, action: string): void {
  if (!hasPermission(role, resource, action)) {
    throw new Error(`Permission denied: ${role} cannot ${action} ${resource}`)
  }
}
