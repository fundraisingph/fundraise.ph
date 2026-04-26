import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/partners/[id] - Get a single partner application
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

// PATCH /api/partners/[id] - Update a partner application (review/approve/reject)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { status, reviewNotes, reviewedBy } = body

    const validStatuses = ['pending', 'under_review', 'approved', 'rejected']
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const updateData: Record<string, unknown> = {}
    if (status) updateData.status = status
    if (reviewNotes !== undefined) updateData.reviewNotes = reviewNotes
    if (reviewedBy) updateData.reviewedBy = reviewedBy
    if (status === 'approved' || status === 'rejected') {
      updateData.reviewedAt = new Date()
    }

    const application = await db.partnerApplication.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json({ application })
  } catch (error) {
    console.error('Error updating partner application:', error)
    return NextResponse.json({ error: 'Failed to update application' }, { status: 500 })
  }
}

// DELETE /api/partners/[id] - Delete a partner application
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
