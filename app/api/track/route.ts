import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const ALLOWED = ['facebook', 'tiktok', 'youtube', 'telegram'] as const

// GET — return all platform counts + total
export async function GET() {
  const rows = await prisma.socialTraffic.findMany()

  const result: Record<string, number> = {
    facebook: 0, tiktok: 0, youtube: 0, telegram: 0, other: 0, total: 0,
  }
  for (const row of rows) {
    result[row.platform] = row.count
    result.total += row.count
  }

  return NextResponse.json(result)
}

// POST — increment platform count
export async function POST(req: NextRequest) {
  const { ref } = await req.json()
  const platform = (ALLOWED as readonly string[]).includes(ref) ? ref : 'other'

  await prisma.socialTraffic.upsert({
    where:  { platform },
    update: { count: { increment: 1 } },
    create: { platform, count: 1 },
  })

  return NextResponse.json({ ok: true })
}
