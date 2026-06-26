import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET — active announcements (public) or all (?all=1 for admin)
export async function GET(req: NextRequest) {
  const all = new URL(req.url).searchParams.get('all') === '1'
  const data = await prisma.announcement.findMany({
    where: all ? undefined : { active: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(data)
}

// POST — create announcement
export async function POST(req: NextRequest) {
  const { text } = await req.json()
  if (!text?.trim()) {
    return NextResponse.json({ error: 'Text required' }, { status: 400 })
  }
  const item = await prisma.announcement.create({
    data: { text: text.trim() },
  })
  return NextResponse.json(item)
}

// PATCH — toggle active or update text
export async function PATCH(req: NextRequest) {
  const { id, active, text } = await req.json()
  const item = await prisma.announcement.update({
    where: { id },
    data: {
      ...(active !== undefined && { active }),
      ...(text !== undefined && { text: text.trim() }),
    },
  })
  return NextResponse.json(item)
}

// DELETE — remove announcement
export async function DELETE(req: NextRequest) {
  const { id } = await req.json()
  await prisma.announcement.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
