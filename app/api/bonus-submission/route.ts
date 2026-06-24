import { NextRequest, NextResponse } from 'next/server'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID!

export async function POST(req: NextRequest) {
  if (!BOT_TOKEN || !CHAT_ID) {
    return NextResponse.json({ error: 'Telegram not configured' }, { status: 500 })
  }

  const body = await req.json()
  const { bbsId, bonusName, cashBack, loseable, rebates, description } = body

  if (!bbsId || !bonusName || !description) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const flag = (val: string) => val === 'yes' ? '✅ Yes' : val === 'no' ? '❌ No' : '—'

  const text = [
    '🎁 *New Bonus Submission*',
    '',
    `📋 *BBS Markets ID:* ${bbsId}`,
    `🏷️ *Bonus Name:* ${bonusName}`,
    `💵 *Cash Back:* ${flag(cashBack)}`,
    `📉 *Loseable:* ${flag(loseable)}`,
    `🔄 *Rebates:* ${flag(rebates)}`,
    '',
    `📝 *Description:*`,
    description,
  ].join('\n')

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' }),
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('Telegram error:', err)
    return NextResponse.json({ error: 'Failed to send to Telegram' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
