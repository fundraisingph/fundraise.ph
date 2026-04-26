import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/settings - Get all settings
export async function GET() {
  try {
    const settings = await db.siteSetting.findMany()
    const settingsMap: Record<string, string> = {}
    settings.forEach(s => { settingsMap[s.key] = s.value })
    return NextResponse.json({ settings: settingsMap })
  } catch (error) {
    console.error('Error fetching settings:', error)
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
  }
}

// PUT /api/settings - Update settings
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { settings } = body as { settings: Record<string, string> }

    if (!settings || typeof settings !== 'object') {
      return NextResponse.json({ error: 'Invalid settings data' }, { status: 400 })
    }

    const updates = Object.entries(settings).map(([key, value]) =>
      db.siteSetting.upsert({
        where: { key },
        update: { value },
        create: { key, value },
      })
    )

    await Promise.all(updates)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating settings:', error)
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 })
  }
}
