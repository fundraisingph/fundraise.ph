import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/blog-posts/[id] - Get a single blog post
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const post = await db.blogPost.findUnique({ where: { id } })

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 })
  }
}

// PATCH /api/blog-posts/[id] - Update a blog post
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    const updateData: Record<string, unknown> = {}
    const allowedFields = ['slug', 'title', 'category', 'excerpt', 'content', 'author', 'authorRole', 'readTime', 'published', 'featured']
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        if (field === 'content' && typeof body[field] !== 'string') {
          updateData[field] = JSON.stringify(body[field])
        } else {
          updateData[field] = body[field]
        }
      }
    }

    // If publishing for the first time
    if (body.published === true) {
      const existing = await db.blogPost.findUnique({ where: { id } })
      if (existing && !existing.publishedAt) {
        updateData.publishedAt = new Date()
      }
    }

    // Check slug uniqueness if slug is being changed
    if (body.slug) {
      const existing = await db.blogPost.findFirst({
        where: { slug: body.slug, NOT: { id } },
      })
      if (existing) {
        return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 409 })
      }
    }

    const post = await db.blogPost.update({
      where: { id },
      data: updateData,
    })

    return NextResponse.json({ post })
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 })
  }
}

// DELETE /api/blog-posts/[id] - Delete a blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await db.blogPost.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 })
  }
}
