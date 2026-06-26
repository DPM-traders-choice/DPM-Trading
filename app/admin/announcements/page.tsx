'use client'

import { useEffect, useState, FormEvent, useRef } from 'react'

type Announcement = {
  id: string
  text: string
  active: boolean
  createdAt: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default function AdminAnnouncements() {
  const [list, setList]       = useState<Announcement[]>([])
  const [text, setText]       = useState('')
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const inputRef              = useRef<HTMLInputElement>(null)

  async function load() {
    const res = await fetch('/api/announcements?all=1')
    setList(await res.json())
  }

  useEffect(() => {
    load().then(() => setMounted(true))
  }, [])

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    setLoading(true)
    await fetch('/api/announcements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    })
    setText('')
    await load()
    setLoading(false)
    inputRef.current?.focus()
  }

  async function toggleActive(item: Announcement) {
    await fetch('/api/announcements', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: item.id, active: !item.active }),
    })
    await load()
  }

  async function handleDelete(id: string) {
    await fetch('/api/announcements', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    await load()
  }

  const activeCount = list.filter(a => a.active).length

  return (
    <div className="min-h-screen p-5 md:p-8 lg:p-10" style={{ background: '#070d1a' }}>

      {/* ── Page Header ── */}
      <div className="flex items-start justify-between mb-8 md:mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-blue-400">Admin</span>
            <span className="text-white/15 text-xs">›</span>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30">Announcements</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Announcements</h1>
          <p className="text-xs md:text-sm text-white/30 mt-1">Manage marquee messages shown below the site header.</p>
        </div>

        {/* Live count pill */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: activeCount > 0 ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.04)',
            border: activeCount > 0 ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: activeCount > 0 ? '#22c55e' : 'rgba(255,255,255,0.15)',
              boxShadow: activeCount > 0 ? '0 0 6px rgba(34,197,94,0.6)' : 'none',
              animation: activeCount > 0 ? 'pulse 2s infinite' : 'none',
            }}
          />
          <span
            className="text-xs font-semibold"
            style={{ color: activeCount > 0 ? '#4ade80' : 'rgba(255,255,255,0.25)' }}
          >
            {activeCount} Live
          </span>
        </div>
      </div>

      {/* ── Add Form ── */}
      <form onSubmit={handleAdd} className="mb-10">
        <div
          className="relative rounded-2xl p-1"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Megaphone icon */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l19-9-9 19-2-8-8-2z"/>
            </svg>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Write an announcement…"
            className="w-full bg-transparent pl-10 pr-36 py-4 text-sm text-white placeholder-white/20 outline-none"
          />

          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 disabled:opacity-30"
            style={{
              background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
              boxShadow: text.trim() ? '0 4px 20px rgba(37,99,235,0.4)' : 'none',
            }}
          >
            {loading ? (
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeOpacity="0.3"/>
                <path d="M12 2a10 10 0 0 1 10 10"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            )}
            Publish
          </button>
        </div>
      </form>

      {/* ── List ── */}
      {!mounted ? null : list.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </div>
          <p className="text-white/20 text-sm">No announcements yet</p>
          <p className="text-white/10 text-xs">Publish your first message above</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {/* Column labels */}
          <div className="hidden md:flex items-center gap-4 px-5 pb-1">
            <div className="w-10 shrink-0" />
            <p className="flex-1 text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">Message</p>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 w-32 text-right">Published</p>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 w-16 text-center">Status</p>
            <div className="w-8 shrink-0" />
          </div>

          {list.map((item, idx) => (
            <div
              key={item.id}
              className="group flex items-center gap-3 md:gap-4 rounded-2xl px-4 md:px-5 py-4 transition-all duration-300"
              style={{
                background: item.active
                  ? 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(96,165,250,0.04))'
                  : 'rgba(255,255,255,0.025)',
                border: item.active
                  ? '1px solid rgba(96,165,250,0.18)'
                  : '1px solid rgba(255,255,255,0.06)',
                animationDelay: `${idx * 60}ms`,
              }}
            >
              {/* Toggle Switch */}
              <button
                onClick={() => toggleActive(item)}
                className="shrink-0 w-10 h-6 rounded-full relative transition-all duration-300 focus:outline-none"
                style={{
                  background: item.active
                    ? 'linear-gradient(135deg, #1d4ed8, #3b82f6)'
                    : 'rgba(255,255,255,0.08)',
                  boxShadow: item.active ? '0 0 12px rgba(59,130,246,0.4)' : 'none',
                }}
                title={item.active ? 'Deactivate' : 'Activate'}
              >
                <span
                  className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300"
                  style={{ left: item.active ? '22px' : '4px' }}
                />
              </button>

              {/* Message text */}
              <p className="flex-1 text-sm text-white/70 leading-relaxed">{item.text}</p>

              {/* Date */}
              <p className="text-xs text-white/25 w-32 text-right hidden md:block shrink-0">
                {formatDate(item.createdAt)}
              </p>

              {/* Status badge */}
              <div className="w-16 flex justify-center shrink-0">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                  style={item.active
                    ? { background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }
                    : { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.07)' }
                  }
                >
                  {item.active && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-green-400"
                      style={{ animation: 'pulse 2s infinite' }}
                    />
                  )}
                  {item.active ? 'Live' : 'Off'}
                </span>
              </div>

              {/* Delete */}
              <button
                onClick={() => handleDelete(item.id)}
                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.2)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = '#f87171'
                  el.style.background = 'rgba(239,68,68,0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = 'rgba(255,255,255,0.2)'
                  el.style.background = 'transparent'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6l-1 14H6L5 6"/>
                  <path d="M10 11v6M14 11v6"/>
                  <path d="M9 6V4h6v2"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
