import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { partnerApplicationSchema } from '@/lib/validations/partner-application'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const partnerType = searchParams.get('type')

    const where: Record<string, unknown> = {}
    if (status) where.status = status
    if (partnerType) where.partnerType = partnerType

    const applications = await db.partnerApplication.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ applications })
  } catch (error) {
    console.error('Error fetching partners:', error)
    return NextResponse.json({ error: 'Failed to fetch partner applications' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const parsed = partnerApplicationSchema.safeParse(body)
    if (!parsed.success) {
      const fieldErrors = parsed.error.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      }))
      return NextResponse.json(
        { error: 'Validation failed', fields: fieldErrors },
        { status: 400 }
      )
    }

    const data = parsed.data

    const application = await db.partnerApplication.create({
      data: {
        organizationName: data.organizationName,
        contactPerson: data.contactPerson,
        email: data.email,
        phone: data.phone,
        partnerType: data.partnerType,
        website: data.website ?? null,
        description: data.description,
        mission: data.mission ?? null,
        howHeard: data.howHeard ?? null,
        agreedToTerms: true,
        status: 'pending',
      },
    })

    return NextResponse.json({ application }, { status: 201 })
  } catch (error) {
    console.error('Error creating partner application:', error)
    return NextResponse.json({ error: 'Failed to submit partner application' }, { status: 500 })
  }
}
