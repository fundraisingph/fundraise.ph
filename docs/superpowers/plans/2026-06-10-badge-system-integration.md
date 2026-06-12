# Badge System Integration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the full verification badge system from the fundraising.ph platform codebase into the fundraise.ph trust organization site, adding database models, API routes, services, and a reusable badge component system.

**Architecture:** The fundraising.ph codebase (`/proj/www/fundraising.ph`) has a production-grade 8-layer verification badge system with Prisma models, repository pattern, service classes, and admin API routes. The fundraise.ph codebase (`/proj/www/fundraise.ph`) currently has only static badge content in page components and a generic shadcn `<Badge>` UI primitive. We will port the badge system in layers: types/config → database → repository → service → API routes → UI components, adapting the patterns to fundraise.ph's simpler auth and project structure.

**Tech Stack:** Next.js 16, TypeScript, Prisma 6, PostgreSQL, Tailwind CSS, shadcn/ui, lucide-react, JWT auth (existing)

---

## Gap Analysis

### What fundraising.ph has that fundraise.ph lacks:

| Feature | fundraising.ph | fundraise.ph |
|---------|---------------|--------------|
| `VerificationBadge` Prisma model | Yes (with full lifecycle fields) | No |
| `VerificationLog` Prisma model | Yes | No |
| `VerificationStatus` enum | Yes (8 states) | No |
| `VerificationBadgeRepository` | Yes (CRUD + filters) | No |
| `TrustVerificationService` (8-layer) | Yes (award, revoke, status, prerequisites) | No |
| `VerificationService` (legacy 3-tier) | Yes | No |
| `TrustSafetyService` (risk screening) | Yes | No |
| API: `POST /api/admin/verification` | Yes (award layer) | No |
| API: `DELETE /api/admin/verification` | Yes (revoke layer) | No |
| API: `GET /api/campaigns/[id]` (badges) | Yes | No |
| API: `POST /api/campaigns/[id]/lgu-endorse` | Yes (auto-badge) | No |
| Admin UI: `AdminCampaignModeration` | Yes (award badges) | No |
| Admin UI: `AdminIdentityVerifier` | Yes (verify queue) | No |
| Reusable `VerificationBadge` component | No (hardcoded in pages) | No |
| Badge type definitions / constants | Yes (`compliance-types.ts`) | No |
| Badge expiry management | Yes (per-layer defaults) | No |
| Prerequisite chain enforcement | Yes | No |
| Compliance case auto-creation on revocation | Yes | No |
| Test coverage (2000+ lines) | Yes | No |

### What fundraise.ph already has (partial/reusable):

1. Generic shadcn `<Badge>` component at `src/components/ui/badge.tsx`
2. Static `verificationTiers` array in `src/components/pages/verified-standards-page.tsx`
3. Static `verificationBadges` array in `src/components/pages/verification-framework-page.tsx`
4. Prisma setup with PostgreSQL (`src/lib/db.ts`)
5. Admin auth with JWT + role-based permissions (`src/lib/admin-auth.ts`)
6. Existing admin API pattern (`src/app/api/admin/`)
7. Seed script (`src/scripts/seed.ts`)

---

## File Structure

### New files to create:

```
src/
  lib/
    badge-types.ts                    # VerificationLayer, badge constants, labels, prerequisite chains
    badge-config.ts                   # Badge display config (colors, icons, descriptions, expiry defaults)
  components/
    badges/
      VerificationBadgeDisplay.tsx    # Renders a single badge with icon, label, status
      VerificationBadgeList.tsx       # Renders badge collection for a campaign/entity
      VerificationStatusBadge.tsx     # Status-aware badge (pending, approved, revoked, expired)
      BadgeAwardForm.tsx             # Admin form to award a verification layer
  app/
    api/
      admin/
        verification/
          route.ts                    # POST award / DELETE revoke verification layer
        badges/
          route.ts                    # GET list badges with filters
          [id]/
            route.ts                  # GET single badge / PATCH update badge
```

### Existing files to modify:

```
prisma/schema.prisma                 # Add VerificationBadge, VerificationLog, VerificationStatus enum
src/lib/admin-auth.ts                # Add 'verification' to ROLE_PERMISSIONS
src/scripts/seed.ts                  # Add seed data for sample badges
src/components/pages/verified-standards-page.tsx  # Replace static tiers with dynamic badge system
```

---

### Task 1: Badge Type Definitions and Configuration

**Files:**
- Create: `src/lib/badge-types.ts`
- Create: `src/lib/badge-config.ts`

**Reference:** `/proj/www/fundraising.ph/src/lib/compliance-types.ts` (lines 31-139)

- [ ] **Step 1: Create `src/lib/badge-types.ts`**

```typescript
export type VerificationLayer =
  | 'IDENTITY_VERIFIED'
  | 'EMAIL_VERIFIED'
  | 'MOBILE_VERIFIED'
  | 'BENEFICIARY_VERIFIED'
  | 'DOCUMENTS_VERIFIED'
  | 'PERMIT_VERIFIED'
  | 'PAYOUT_DESTINATION_VERIFIED'
  | 'ENHANCED_REVIEW_COMPLETED'

export type VerificationStatus =
  | 'NOT_STARTED'
  | 'PENDING'
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'REJECTED'
  | 'EXPIRED'
  | 'REQUIRES_UPDATE'

export interface VerificationLayerStatus {
  layer: VerificationLayer
  label: string
  completed: boolean
  completedAt: Date | null
  verifiedBy: string | null
}

export interface PublicBadge {
  type: string
  label: string
  description: string
}

export interface VerificationStatusResult {
  layers: VerificationLayerStatus[]
  overallLevel: number
  publicBadges: PublicBadge[]
  canShowTrustBadge: boolean
  trustBadgeLabel: string | null
}

export interface AwardLayerParams {
  campaignId: string
  layer: VerificationLayer
  awardedBy: string
  evidence?: string
  notes?: string
}

export interface RevokeLayerParams {
  campaignId: string
  layer: VerificationLayer
  revokedBy: string
  reason: string
}

export const KNOWN_LAYERS: VerificationLayer[] = [
  'IDENTITY_VERIFIED',
  'EMAIL_VERIFIED',
  'MOBILE_VERIFIED',
  'BENEFICIARY_VERIFIED',
  'DOCUMENTS_VERIFIED',
  'PERMIT_VERIFIED',
  'PAYOUT_DESTINATION_VERIFIED',
  'ENHANCED_REVIEW_COMPLETED',
]

export const VERIFICATION_LAYER_LABELS: Record<VerificationLayer, string> = {
  IDENTITY_VERIFIED: 'Organizer identity verified',
  EMAIL_VERIFIED: 'Email verified',
  MOBILE_VERIFIED: 'Mobile verified',
  BENEFICIARY_VERIFIED: 'Beneficiary verified',
  DOCUMENTS_VERIFIED: 'Required documents reviewed',
  PERMIT_VERIFIED: 'Permit reviewed',
  PAYOUT_DESTINATION_VERIFIED: 'Payout destination verified',
  ENHANCED_REVIEW_COMPLETED: 'Enhanced compliance review completed',
}

export const VERIFICATION_LAYER_DESCRIPTIONS: Record<VerificationLayer, string> = {
  IDENTITY_VERIFIED: 'Organizer has been verified with government ID',
  EMAIL_VERIFIED: 'Organizer email address has been confirmed',
  MOBILE_VERIFIED: 'Organizer mobile number has been confirmed',
  BENEFICIARY_VERIFIED: 'Beneficiary identity confirmed',
  DOCUMENTS_VERIFIED: 'Supporting documents have been reviewed by our team',
  PERMIT_VERIFIED: 'Required government permits have been reviewed',
  PAYOUT_DESTINATION_VERIFIED: 'Bank or e-wallet destination has been confirmed',
  ENHANCED_REVIEW_COMPLETED: 'This campaign has undergone additional compliance review',
}

export const PREREQUISITE_CHAINS: Record<string, VerificationLayer[]> = {
  DOCUMENTS_VERIFIED: ['IDENTITY_VERIFIED'],
  BENEFICIARY_VERIFIED: ['IDENTITY_VERIFIED'],
  PERMIT_VERIFIED: ['DOCUMENTS_VERIFIED'],
  PAYOUT_DESTINATION_VERIFIED: ['BENEFICIARY_VERIFIED'],
  ENHANCED_REVIEW_COMPLETED: ['PERMIT_VERIFIED'],
}

export const BADGE_EXPIRY_YEARS: Record<VerificationLayer, number> = {
  IDENTITY_VERIFIED: 1,
  EMAIL_VERIFIED: 1,
  MOBILE_VERIFIED: 1,
  BENEFICIARY_VERIFIED: 2,
  DOCUMENTS_VERIFIED: 2,
  PERMIT_VERIFIED: 2,
  PAYOUT_DESTINATION_VERIFIED: 2,
  ENHANCED_REVIEW_COMPLETED: 2,
}
```

- [ ] **Step 2: Create `src/lib/badge-config.ts`**

```typescript
import {
  ShieldCheck,
  Mail,
  Smartphone,
  UserCheck,
  FileCheck,
  Stamp,
  Landmark,
  ScanSearch,
  type LucideIcon,
} from 'lucide-react'
import type { VerificationLayer } from './badge-types'

export interface BadgeDisplayConfig {
  layer: VerificationLayer
  icon: LucideIcon
  color: string
  bgColor: string
  borderColor: string
  textColor: string
  shortName: string
}

export const BADGE_DISPLAY_CONFIG: Record<VerificationLayer, BadgeDisplayConfig> = {
  IDENTITY_VERIFIED: {
    layer: 'IDENTITY_VERIFIED',
    icon: ShieldCheck,
    color: 'blue',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    shortName: 'Identity',
  },
  EMAIL_VERIFIED: {
    layer: 'EMAIL_VERIFIED',
    icon: Mail,
    color: 'sky',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    textColor: 'text-sky-700',
    shortName: 'Email',
  },
  MOBILE_VERIFIED: {
    layer: 'MOBILE_VERIFIED',
    icon: Smartphone,
    color: 'cyan',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-700',
    shortName: 'Mobile',
  },
  BENEFICIARY_VERIFIED: {
    layer: 'BENEFICIARY_VERIFIED',
    icon: UserCheck,
    color: 'emerald',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
    shortName: 'Beneficiary',
  },
  DOCUMENTS_VERIFIED: {
    layer: 'DOCUMENTS_VERIFIED',
    icon: FileCheck,
    color: 'amber',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
    shortName: 'Documents',
  },
  PERMIT_VERIFIED: {
    layer: 'PERMIT_VERIFIED',
    icon: Stamp,
    color: 'purple',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    shortName: 'Permit',
  },
  PAYOUT_DESTINATION_VERIFIED: {
    layer: 'PAYOUT_DESTINATION_VERIFIED',
    icon: Landmark,
    color: 'teal',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-700',
    shortName: 'Payout',
  },
  ENHANCED_REVIEW_COMPLETED: {
    layer: 'ENHANCED_REVIEW_COMPLETED',
    icon: ScanSearch,
    color: 'gold',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-700',
    shortName: 'Enhanced Review',
  },
}

export const STATUS_DISPLAY: Record<string, { label: string; color: string; bgColor: string }> = {
  NOT_STARTED: { label: 'Not Started', color: 'text-slate-500', bgColor: 'bg-slate-100' },
  PENDING: { label: 'Pending', color: 'text-amber-600', bgColor: 'bg-amber-100' },
  SUBMITTED: { label: 'Submitted', color: 'text-blue-600', bgColor: 'bg-blue-100' },
  UNDER_REVIEW: { label: 'Under Review', color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
  APPROVED: { label: 'Approved', color: 'text-green-600', bgColor: 'bg-green-100' },
  REJECTED: { label: 'Rejected', color: 'text-red-600', bgColor: 'bg-red-100' },
  EXPIRED: { label: 'Expired', color: 'text-slate-500', bgColor: 'bg-slate-100' },
  REQUIRES_UPDATE: { label: 'Requires Update', color: 'text-orange-600', bgColor: 'bg-orange-100' },
}
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/badge-types.ts src/lib/badge-config.ts
git commit -m "feat: add badge type definitions and display configuration"
```

---

### Task 2: Prisma Schema — VerificationBadge and VerificationLog Models

**Files:**
- Modify: `prisma/schema.prisma`

**Reference:** `/proj/www/fundraising.ph/prisma/schema.prisma` (lines 854, 1055, 1477)

- [ ] **Step 1: Add VerificationStatus enum and models to `prisma/schema.prisma`**

Append to the end of the file (after `model SiteSetting`):

```prisma
enum VerificationStatus {
  NOT_STARTED
  PENDING
  SUBMITTED
  UNDER_REVIEW
  APPROVED
  REJECTED
  EXPIRED
  REQUIRES_UPDATE
}

model VerificationBadge {
  id              String             @id @default(cuid())
  campaignId      String
  type            String
  status          VerificationStatus @default(NOT_STARTED)
  permitNumber    String?
  issuedAt        DateTime?
  expiresAt       DateTime?
  verifiedBy      String?
  requestedAt     DateTime?          @default(now())
  requestNotes    String?
  rejectionReason String?
  prerequisiteMet Boolean            @default(true)
  isRevoked       Boolean            @default(false)
  revokedAt       DateTime?
  revokedBy       String?
  revokedReason   String?
  createdAt       DateTime           @default(now())
  updatedAt       DateTime           @updatedAt

  @@index([campaignId])
  @@index([type])
  @@index([status])
  @@map("verification_badges")
}

model VerificationLog {
  id          String   @id @default(cuid())
  entityType  String
  entityId    String
  verifierId  String
  location    String?
  verifiedAt  DateTime @default(now())
  createdAt   DateTime @default(now())

  @@index([entityType, entityId])
  @@index([verifierId])
  @@map("verification_logs")
}
```

- [ ] **Step 2: Run prisma migration**

```bash
npx prisma migrate dev --name add_verification_badges
```

Expected: Migration file created, schema applied to database.

- [ ] **Step 3: Generate Prisma client**

```bash
npx prisma generate
```

Expected: Prisma client regenerated with new models.

- [ ] **Step 4: Commit**

```bash
git add prisma/schema.prisma prisma/migrations/
git commit -m "feat: add VerificationBadge and VerificationLog models to Prisma schema"
```

---

### Task 3: Verification Badge Service

**Files:**
- Create: `src/lib/verification-service.ts`

**Reference:** `/proj/www/fundraising.ph/src/services/compliance/TrustVerificationService.ts` (411 lines)

- [ ] **Step 1: Create `src/lib/verification-service.ts`**

This service provides the core badge lifecycle: award, revoke, status check. Adapted from the fundraising.ph `TrustVerificationService` but simplified for fundraise.ph's architecture (no separate repository layer — uses Prisma directly via `db`).

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/verification-service.ts
git commit -m "feat: add verification badge service with award, revoke, and status"
```

---

### Task 4: Admin Auth — Add Verification Permissions

**Files:**
- Modify: `src/lib/admin-auth.ts`

- [ ] **Step 1: Add verification permissions to `ROLE_PERMISSIONS` in `src/lib/admin-auth.ts`**

In the `ROLE_PERMISSIONS` object, add a `verification` resource to each role:

```typescript
export const ROLE_PERMISSIONS: Record<AdminRole, Record<string, string[]>> = {
  admin: {
    // ... existing entries ...
    verification: ['create', 'read', 'update', 'delete'],
  },
  editor: {
    // ... existing entries ...
    verification: ['read'],
  },
  viewer: {
    // ... existing entries ...
    verification: ['read'],
  },
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/admin-auth.ts
git commit -m "feat: add verification resource to admin role permissions"
```

---

### Task 5: API Routes — Admin Verification Endpoints

**Files:**
- Create: `src/app/api/admin/verification/route.ts`
- Create: `src/app/api/admin/badges/route.ts`
- Create: `src/app/api/admin/badges/[id]/route.ts`

**Reference:** `/proj/www/fundraising.ph/src/app/api/admin/verification/route.ts`

- [ ] **Step 1: Create `src/app/api/admin/verification/route.ts`**

```typescript
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
```

- [ ] **Step 2: Create `src/app/api/admin/badges/route.ts`**

```typescript
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
```

- [ ] **Step 3: Create `src/app/api/admin/badges/[id]/route.ts`**

```typescript
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
```

- [ ] **Step 4: Commit**

```bash
git add src/app/api/admin/verification/ src/app/api/admin/badges/
git commit -m "feat: add admin verification and badge API endpoints"
```

---

### Task 6: UI Components — Reusable Badge Display Components

**Files:**
- Create: `src/components/badges/VerificationBadgeDisplay.tsx`
- Create: `src/components/badges/VerificationBadgeList.tsx`
- Create: `src/components/badges/VerificationStatusBadge.tsx`

- [ ] **Step 1: Create `src/components/badges/VerificationBadgeDisplay.tsx`**

Renders a single verification badge with its icon, label, and optional description. Used in campaign pages, sample pages, and admin views.

```tsx
import { CheckCircle2 } from 'lucide-react'
import { BADGE_DISPLAY_CONFIG } from '@/lib/badge-config'
import type { VerificationLayer } from '@/lib/badge-types'

interface VerificationBadgeDisplayProps {
  layer: VerificationLayer
  showDescription?: boolean
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function VerificationBadgeDisplay({
  layer,
  showDescription = false,
  showIcon = true,
  size = 'md',
}: VerificationBadgeDisplayProps) {
  const config = BADGE_DISPLAY_CONFIG[layer]
  if (!config) return null

  const Icon = config.icon
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  }
  const iconSizes = { sm: 'h-3 w-3', md: 'h-4 w-4', lg: 'h-5 w-5' }

  return (
    <span
      className={`inline-flex items-center ${config.bgColor} ${config.textColor} ${config.borderColor} border rounded-full font-semibold ${sizeClasses[size]}`}
    >
      {showIcon && (
        <>
          <Icon className={iconSizes[size]} />
          <CheckCircle2 className={iconSizes[size]} />
        </>
      )}
      {config.shortName}
    </span>
  )
}
```

- [ ] **Step 2: Create `src/components/badges/VerificationBadgeList.tsx`**

Renders a collection of verification badges for a given set of layers. Used in campaign detail pages and admin views.

```tsx
import { VerificationBadgeDisplay } from './VerificationBadgeDisplay'
import { BADGE_DISPLAY_CONFIG } from '@/lib/badge-config'
import type { VerificationLayer } from '@/lib/badge-types'

interface VerificationBadgeListProps {
  completedLayers: VerificationLayer[]
  allLayers?: VerificationLayer[]
  showIncomplete?: boolean
  layout?: 'grid' | 'inline'
}

export function VerificationBadgeList({
  completedLayers,
  allLayers,
  showIncomplete = true,
  layout = 'grid',
}: VerificationBadgeListProps) {
  const layers = allLayers || completedLayers
  const completedSet = new Set(completedLayers)

  if (layout === 'inline') {
    return (
      <div className="flex flex-wrap gap-2">
        {completedLayers.map((layer) => (
          <VerificationBadgeDisplay key={layer} layer={layer} size="sm" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {layers.map((layer) => {
        const config = BADGE_DISPLAY_CONFIG[layer]
        const completed = completedSet.has(layer)
        const Icon = config?.icon

        if (!completed && !showIncomplete) return null

        return (
          <div
            key={layer}
            className={`flex items-center gap-3 rounded-xl p-3 border transition-all ${
              completed
                ? `${config?.bgColor} ${config?.borderColor} border`
                : 'bg-slate-50 border-slate-200 border-dashed opacity-50'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                completed ? `${config?.bgColor} ${config?.textColor}` : 'bg-slate-100 text-slate-400'
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
            </div>
            <div>
              <p className={`text-sm font-semibold ${completed ? 'text-slate-900' : 'text-slate-400'}`}>
                {config?.shortName || layer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
```

- [ ] **Step 3: Create `src/components/badges/VerificationStatusBadge.tsx`**

Renders a status-aware badge showing the verification state (pending, approved, expired, etc.).

```tsx
import { STATUS_DISPLAY } from '@/lib/badge-config'

interface VerificationStatusBadgeProps {
  status: string
  size?: 'sm' | 'md'
}

export function VerificationStatusBadge({ status, size = 'md' }: VerificationStatusBadgeProps) {
  const config = STATUS_DISPLAY[status] || STATUS_DISPLAY.NOT_STARTED
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${config.bgColor} ${config.color} ${sizeClasses}`}
    >
      {config.label}
    </span>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/badges/
git commit -m "feat: add reusable verification badge display components"
```

---

### Task 7: Admin Badge Award Form Component

**Files:**
- Create: `src/components/badges/BadgeAwardForm.tsx`

**Reference:** `/proj/www/fundraising.ph/src/components/AdminCampaignModeration.tsx`

- [ ] **Step 1: Create `src/components/badges/BadgeAwardForm.tsx`**

```tsx
'use client'

import { useState } from 'react'
import { ShieldCheck, X } from 'lucide-react'
import { KNOWN_LAYERS, VERIFICATION_LAYER_LABELS } from '@/lib/badge-types'
import { BADGE_DISPLAY_CONFIG } from '@/lib/badge-config'
import type { VerificationLayer } from '@/lib/badge-types'

interface BadgeAwardFormProps {
  campaignId: string
  onComplete?: () => void
}

export function BadgeAwardForm({ campaignId, onComplete }: BadgeAwardFormProps) {
  const [selectedLayer, setSelectedLayer] = useState<VerificationLayer | ''>('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (action: 'award' | 'revoke') => {
    if (!selectedLayer) return
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const res = await fetch('/api/admin/verification', {
        method: action === 'award' ? 'POST' : 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          action === 'award'
            ? { campaignId, layer: selectedLayer, notes }
            : { campaignId, layer: selectedLayer, reason: notes },
        ),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Request failed')
      setSuccess(true)
      setSelectedLayer('')
      setNotes('')
      onComplete?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">Award Verification Layer</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Campaign ID</label>
          <input
            type="text"
            value={campaignId}
            disabled
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Verification Layer</label>
          <select
            value={selectedLayer}
            onChange={(e) => setSelectedLayer(e.target.value as VerificationLayer | '')}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          >
            <option value="">Select a layer...</option>
            {KNOWN_LAYERS.map((layer) => (
              <option key={layer} value={layer}>
                {VERIFICATION_LAYER_LABELS[layer]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            placeholder="Optional notes or evidence description..."
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-lg p-3">
            <X className="h-4 w-4" />
            {error}
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 rounded-lg p-3">
            <ShieldCheck className="h-4 w-4" />
            Layer awarded successfully
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => handleSubmit('award')}
            disabled={!selectedLayer || loading}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Award Layer'}
          </button>
          <button
            onClick={() => handleSubmit('revoke')}
            disabled={!selectedLayer || loading}
            className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Revoke
          </button>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/badges/BadgeAwardForm.tsx
git commit -m "feat: add admin badge award form component"
```

---

### Task 8: Seed Data for Badges

**Files:**
- Modify: `src/scripts/seed.ts`

- [ ] **Step 1: Add badge seed data to `src/scripts/seed.ts`**

Read the existing seed file to find the right insertion point. Add after the existing seed data (blog posts, etc.):

```typescript
import { KNOWN_LAYERS, BADGE_EXPIRY_YEARS } from '../lib/badge-types'

async function seedBadges() {
  console.log('Seeding verification badges...')

  const sampleCampaignId = 'sample-campaign-medical-001'

  const layers: typeof KNOWN_LAYERS = ['IDENTITY_VERIFIED', 'EMAIL_VERIFIED', 'MOBILE_VERIFIED', 'DOCUMENTS_VERIFIED']
  const now = new Date()

  for (const layer of layers) {
    const years = BADGE_EXPIRY_YEARS[layer]
    const expiresAt = new Date(now)
    expiresAt.setFullYear(expiresAt.getFullYear() + years)

    await db.verificationBadge.upsert({
      where: { id: `seed-${sampleCampaignId}-${layer}` },
      update: {},
      create: {
        id: `seed-${sampleCampaignId}-${layer}`,
        campaignId: sampleCampaignId,
        type: layer,
        status: 'APPROVED',
        issuedAt: now,
        expiresAt,
        verifiedBy: 'seed-admin',
        requestNotes: 'Seeded for demonstration',
        prerequisiteMet: true,
      },
    })
  }

  console.log(`Seeded ${layers.length} verification badges`)
}
```

Then call `seedBadges()` from the main seed function.

- [ ] **Step 2: Commit**

```bash
git add src/scripts/seed.ts
git commit -m "feat: add verification badge seed data"
```

---

### Task 9: Update Static Pages to Use Badge Components

**Files:**
- Modify: `src/components/pages/verified-standards-page.tsx`
- Modify: `src/components/pages/verification-framework-page.tsx`

- [ ] **Step 1: Replace hardcoded verification tiers in `verified-standards-page.tsx`**

Replace the static `verificationTiers` array with imports from the badge system:

```typescript
import { KNOWN_LAYERS, VERIFICATION_LAYER_LABELS } from '@/lib/badge-types'
import { BADGE_DISPLAY_CONFIG } from '@/lib/badge-config'
```

Update the `verificationTiers` array to derive from badge config:

```typescript
const verificationTiers = [
  {
    level: 'Tier 1',
    title: 'Basic Verified',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    badges: [VERIFICATION_LAYER_LABELS.IDENTITY_VERIFIED, VERIFICATION_LAYER_LABELS.EMAIL_VERIFIED],
  },
  {
    level: 'Tier 2',
    title: 'Documented',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    badges: [VERIFICATION_LAYER_LABELS.DOCUMENTS_VERIFIED, VERIFICATION_LAYER_LABELS.BENEFICIARY_VERIFIED],
  },
  {
    level: 'Tier 3',
    title: 'Fully Verified',
    color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    badges: [
      VERIFICATION_LAYER_LABELS.PAYOUT_DESTINATION_VERIFIED,
      VERIFICATION_LAYER_LABELS.PERMIT_VERIFIED,
      VERIFICATION_LAYER_LABELS.ENHANCED_REVIEW_COMPLETED,
    ],
  },
]
```

- [ ] **Step 2: Replace hardcoded badge list in `verification-framework-page.tsx`**

Replace the static `verificationBadges` array with dynamic content from badge config:

```typescript
import { KNOWN_LAYERS, VERIFICATION_LAYER_LABELS, VERIFICATION_LAYER_DESCRIPTIONS } from '@/lib/badge-types'
import { BADGE_DISPLAY_CONFIG } from '@/lib/badge-config'

const verificationBadges = KNOWN_LAYERS.map((layer) => {
  const config = BADGE_DISPLAY_CONFIG[layer]
  return {
    name: VERIFICATION_LAYER_LABELS[layer],
    description: VERIFICATION_LAYER_DESCRIPTIONS[layer],
    color: `${config.bgColor} ${config.textColor} ${config.borderColor}`,
  }
})
```

- [ ] **Step 3: Commit**

```bash
git add src/components/pages/verified-standards-page.tsx src/components/pages/verification-framework-page.tsx
git commit -m "feat: update static pages to use badge type system"
```

---

### Task 10: Build Verification and Integration Test

**Files:**
- Create: `src/app/api/admin/verification/test-route.ts` (temporary, for manual testing)

- [ ] **Step 1: Verify the build compiles**

```bash
npx prisma generate && npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 2: Run database migration**

```bash
npx prisma db push
```

Expected: Schema applied to database.

- [ ] **Step 3: Test award API endpoint**

```bash
curl -X POST http://localhost:3018/api/admin/verification \
  -H "Content-Type: application/json" \
  -H "Cookie: fundraise-admin-session=<jwt-token>" \
  -d '{"campaignId":"test-001","layer":"IDENTITY_VERIFIED","notes":"Test award"}'
```

Expected: `{"success":true,"data":{...}}`

- [ ] **Step 4: Test GET verification status**

```bash
curl "http://localhost:3018/api/admin/verification?campaignId=test-001" \
  -H "Cookie: fundraise-admin-session=<jwt-token>"
```

Expected: `{"success":true,"data":{"layers":[...],"overallLevel":1,...}}`

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete badge system integration with verification and tests"
```
