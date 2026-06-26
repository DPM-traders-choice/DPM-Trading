'use client'

import { useEffect, useState } from 'react'

type Analytics = {
  facebook: number
  tiktok: number
  youtube: number
  telegram: number
  other: number
  total: number
}

const PLATFORMS = [
  {
    key: 'facebook' as const,
    label: 'Facebook',
    color: '#1877f2',
    glow: 'rgba(24,119,242,0.35)',
    bg: 'rgba(24,119,242,0.08)',
    border: 'rgba(24,119,242,0.18)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    key: 'tiktok' as const,
    label: 'TikTok',
    color: '#ff0050',
    glow: 'rgba(255,0,80,0.35)',
    bg: 'rgba(255,0,80,0.08)',
    border: 'rgba(255,0,80,0.18)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
  {
    key: 'youtube' as const,
    label: 'YouTube',
    color: '#ff0000',
    glow: 'rgba(255,0,0,0.35)',
    bg: 'rgba(255,0,0,0.08)',
    border: 'rgba(255,0,0,0.18)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    key: 'telegram' as const,
    label: 'Telegram',
    color: '#229ed9',
    glow: 'rgba(34,158,217,0.35)',
    bg: 'rgba(34,158,217,0.08)',
    border: 'rgba(34,158,217,0.18)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
]

/* ─── Copy Link Row ─── */
function CopyLinkRow({ platform, color, icon }: { platform: string; color: string; icon: React.ReactNode }) {
  const [copied, setCopied] = useState(false)
  const [origin, setOrigin] = useState('')

  useEffect(() => { setOrigin(window.location.origin) }, [])

  const url = `${origin}?ref=${platform}`

  function handleCopy() {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <span style={{ color }} className="shrink-0">{icon}</span>
      <span className="flex-1 text-xs text-white/35 font-mono truncate">{url}</span>
      <button
        onClick={handleCopy}
        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
        style={copied
          ? { background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.22)' }
          : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.08)' }
        }
      >
        {copied ? (
          <>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Copied!
          </>
        ) : (
          <>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Copy
          </>
        )}
      </button>
    </div>
  )
}

/* ─── Stat Card ─── */
function StatCard({ p, count, pct, rank }: { p: typeof PLATFORMS[0]; count: number; pct: number; rank: number }) {
  const [bar, setBar] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setBar(pct), 100)
    return () => clearTimeout(t)
  }, [pct])

  return (
    <div
      className="relative rounded-2xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300"
      style={{
        background: `linear-gradient(145deg, ${p.bg}, rgba(255,255,255,0.015))`,
        border: `1px solid ${p.border}`,
      }}
    >
      {/* Rank badge */}
      {rank === 1 && count > 0 && (
        <div
          className="absolute top-4 right-4 text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-md"
          style={{ background: 'rgba(250,204,21,0.12)', color: '#fbbf24', border: '1px solid rgba(250,204,21,0.2)' }}
        >
          #1
        </div>
      )}

      {/* Glow blob */}
      <div
        className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: p.glow, filter: 'blur(40px)', opacity: 0.25 }}
      />

      {/* Icon + label */}
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ background: `${p.color}20`, color: p.color, boxShadow: `0 0 16px ${p.glow}` }}
        >
          {p.icon}
        </div>
        <div>
          <p className="text-sm font-bold text-white/80">{p.label}</p>
          <p className="text-[10px] text-white/25 font-medium tracking-wide">Social traffic</p>
        </div>
      </div>

      {/* Count */}
      <div>
        <p className="text-4xl font-black text-white tracking-tight">{count.toLocaleString()}</p>
        <p className="text-xs text-white/30 mt-0.5">visits</p>
      </div>

      {/* Progress bar */}
      <div className="flex flex-col gap-2">
        <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${bar}%`, background: `linear-gradient(90deg, ${p.color}aa, ${p.color})`, boxShadow: `0 0 8px ${p.glow}` }}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-white/25">{pct}% of total</p>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 rounded-full transition-all duration-700"
                style={{
                  height: `${6 + i * 2}px`,
                  background: i < Math.ceil(pct / 20) ? p.color : 'rgba(255,255,255,0.08)',
                  opacity: i < Math.ceil(pct / 20) ? 0.7 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Dashboard ─── */
export default function AdminDashboard() {
  const [data, setData]       = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/track')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const sorted = data
    ? [...PLATFORMS].sort((a, b) => (data[b.key] ?? 0) - (data[a.key] ?? 0))
    : PLATFORMS

  return (
    <div className="p-8 md:p-10 min-h-screen" style={{ background: '#070d1a' }}>

      {/* ── Header ── */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-blue-400">Admin</span>
            <span className="text-white/15 text-xs">›</span>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30">Dashboard</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Dashboard</h1>
          <p className="text-sm text-white/30 mt-1">Social media traffic overview.</p>
        </div>

        <button
          onClick={() => { setLoading(true); fetch('/api/track').then(r => r.json()).then(d => { setData(d); setLoading(false) }) }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
          style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-white/5" />
            <div className="absolute inset-0 rounded-full border-2 border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          </div>
          <p className="text-sm text-white/25">Loading analytics…</p>
        </div>
      ) : data ? (
        <>
          {/* ── Total Banner ── */}
          <div
            className="relative rounded-2xl p-6 mb-8 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.12), rgba(96,165,250,0.05))',
              border: '1px solid rgba(96,165,250,0.18)',
            }}
          >
            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'rgba(59,130,246,0.2)', filter: 'blur(50px)' }} />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(96,165,250,0.15)', boxShadow: '0 0 24px rgba(96,165,250,0.3)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-400/70 mb-1">Total Social Visits</p>
                  <p className="text-5xl font-black text-white tracking-tight">{data.total.toLocaleString()}</p>
                </div>
              </div>

              {/* Mini breakdown */}
              <div className="hidden md:flex items-center gap-6">
                {PLATFORMS.map(p => (
                  <div key={p.key} className="flex flex-col items-center gap-1">
                    <span style={{ color: p.color }}>{p.icon}</span>
                    <span className="text-sm font-black text-white">{(data[p.key] ?? 0).toLocaleString()}</span>
                    <span className="text-[10px] text-white/25">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Platform Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
            {sorted.map((p, i) => {
              const count = data[p.key] ?? 0
              const pct = data.total > 0 ? Math.round((count / data.total) * 100) : 0
              return <StatCard key={p.key} p={p} count={count} pct={pct} rank={i + 1} />
            })}
          </div>

          {/* ── Tracking Links ── */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/25">Tracking Links</p>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
            </div>
            <div className="flex flex-col gap-2">
              {PLATFORMS.map(p => (
                <CopyLinkRow key={p.key} platform={p.key} color={p.color} icon={p.icon} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 gap-3">
          <p className="text-white/20 text-sm">Failed to load analytics.</p>
          <button
            onClick={() => window.location.reload()}
            className="text-xs text-blue-400 underline underline-offset-2"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  )
}
