import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/blog-posts - List all blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')

    const where: Record<string, unknown> = {}
    if (published !== null) where.published = published === 'true'
    if (category) where.category = category
    if (featured !== null) where.featured = featured === 'true'

    const posts = await db.blogPost.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

// POST /api/blog-posts - Create a new blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      slug,
      title,
      category,
      excerpt,
      content,
      author,
      authorRole,
      readTime,
      published,
      featured,
    } = body

    if (!slug || !title || !category || !excerpt || !content || !author || !authorRole || !readTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check for duplicate slug
    const existing = await db.blogPost.findUnique({ where: { slug } })
    if (existing) {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 409 })
    }

    const post = await db.blogPost.create({
      data: {
        slug,
        title,
        category,
        excerpt,
        content: typeof content === 'string' ? content : JSON.stringify(content),
        author,
        authorRole,
        readTime,
        published: published ?? false,
        featured: featured ?? false,
        publishedAt: published ? new Date() : null,
      },
    })

    return NextResponse.json({ post }, { status: 201 })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 })
  }
}
