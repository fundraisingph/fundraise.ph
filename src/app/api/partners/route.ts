import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/partners - List all partner applications (admin)
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

// POST /api/partners - Submit a partner application (public)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      organizationName,
      contactPerson,
      email,
      phone,
      partnerType,
      website,
      description,
      mission,
      howHeard,
      agreedToTerms,
    } = body

    // Validate required fields
    if (!organizationName || !contactPerson || !email || !phone || !partnerType || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const validTypes = ['NGO', 'School', 'Church', 'LGU', 'Corporate Sponsor', 'Supplier', 'Diaspora Organization', 'Technology Partner', 'Legal/Compliance']
    if (!validTypes.includes(partnerType)) {
      return NextResponse.json(
        { error: 'Invalid partner type' },
        { status: 400 }
      )
    }

    const application = await db.partnerApplication.create({
      data: {
        organizationName,
        contactPerson,
        email,
        phone,
        partnerType,
        website: website || null,
        description,
        mission: mission || null,
        howHeard: howHeard || null,
        agreedToTerms: agreedToTerms || false,
        status: 'pending',
      },
    })

    return NextResponse.json({ application }, { status: 201 })
  } catch (error) {
    console.error('Error creating partner application:', error)
    return NextResponse.json({ error: 'Failed to submit partner application' }, { status: 500 })
  }
}
