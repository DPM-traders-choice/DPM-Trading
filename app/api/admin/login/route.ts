import { NextRequest, NextResponse } from 'next/server'

const ADMIN_EMAIL    = process.env.ADMIN_EMAIL    ?? 'admin@dpm.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'dpm@admin2024'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  })
  return res
}
