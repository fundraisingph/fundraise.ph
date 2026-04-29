import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { partnerReviewSchema } from '@/lib/validations/partner-application'
import { provisionPartnerOnFundraising, sendPartnerApprovalNotifications } from '@/lib/cross-platform'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const application = await db.partnerApplication.findUnique({
      where: { id },
    })

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 })
    }

    return NextResponse.json({ application })
  } catch (error) {
    console.error('Error fetching partner application:', error)
    return NextResponse.json({ error: 'Failed to fetch application' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    const parsed = partnerReviewSchema.safeParse(body)
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

    const { status, reviewNotes, reviewedBy } = parsed.data

    if (!status && reviewNotes === undefined && reviewedBy === undefined) {
      return NextResponse.json(
        { error: 'At least one field must be provided' },
        { status: 400 }
      )
    }

    const updateData: Record<string, unknown> = {}
    if (status) updateData.status = status
    if (reviewNotes !== undefined) updateData.reviewNotes = reviewNotes
    if (reviewedBy !== undefined) updateData.reviewedBy = reviewedBy
    if (status === 'approved' || status === 'rejected') {
      updateData.reviewedAt = new Date()
    }

    const application = await db.partnerApplication.update({
      where: { id },
      data: updateData,
    })

    if (status === 'approved') {
      const provisioningResult = await provisionPartnerOnFundraising({
        organizationName: application.organizationName,
        contactPerson: application.contactPerson,
        email: application.email,
        phone: application.phone,
        partnerType: application.partnerType,
        website: application.website,
        description: application.description,
        mission: application.mission,
      })

      await sendPartnerApprovalNotifications(
        {
          organizationName: application.organizationName,
          contactPerson: application.contactPerson,
          email: application.email,
          phone: application.phone,
          partnerType: application.partnerType,
          website: application.website,
          description: application.description,
          mission: application.mission,
        },
        provisioningResult,
        reviewedBy || 'Admin',
      ).catch((err) => {
        console.error('Failed to send approval notifications:', err)
      })

      return NextResponse.json({
        application,
        provisioning: {
          provisioned: provisioningResult.success,
          userId: provisioningResult.userId,
          partnerId: provisioningResult.partnerId,
          tempPassword: provisioningResult.tempPassword,
          correlationId: provisioningResult.correlationId,
          mappedType: provisioningResult.mappedType,
          typeWarning: provisioningResult.typeWarning,
          error: provisioningResult.error,
        },
      })
    }

    return NextResponse.json({ application })
  } catch (error) {
    console.error('Error updating partner application:', error)
    return NextResponse.json({ error: 'Failed to update application' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await db.partnerApplication.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting partner application:', error)
    return NextResponse.json({ error: 'Failed to delete application' }, { status: 500 })
  }
}
