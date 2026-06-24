import { NextResponse } from 'next/server'

// Helper route: send /getUpdates to find your chat_id
// Usage: message your bot on Telegram, then visit /api/telegram-setup
export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN
  if (!token) return NextResponse.json({ error: 'No TELEGRAM_BOT_TOKEN set' }, { status: 500 })

  const res  = await fetch(`https://api.telegram.org/bot${token}/getUpdates`)
  const data = await res.json()

  const updates = (data.result ?? []).map((u: Record<string, unknown>) => {
    const msg  = (u.message ?? u.channel_post) as Record<string, unknown> | undefined
    const chat = msg?.chat as Record<string, unknown> | undefined
    return { chat_id: chat?.id, type: chat?.type, name: chat?.title ?? chat?.username ?? chat?.first_name }
  })

  return NextResponse.json({ hint: 'Copy the chat_id into TELEGRAM_CHAT_ID in .env.local', updates })
}
