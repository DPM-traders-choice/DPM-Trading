'use client'

import { useEffect, useState, useCallback, useRef } from 'react'

type BonusContent = {
  heading: string
  subheading: string
  bodyText: string
  bullets: string[]
  cardLabel: string
  cardPercent: string
  cardDesc: string
  cardFeatures: string[]
}

const DEFAULT: BonusContent = {
  heading: 'Trade Bigger with a 20% Margin Bonus',
  subheading: 'Amplify your trading potential with a 20% Margin Bonus on us!',
  bodyText: 'DPM is pleased to offer its Clients a Margin bonus Account to help them start their trading journey. Claim yours today through your members area.',
  bullets: ['Get instantly 20% extra Credit to trade with.', 'Your 20% Bonus may be lost.', 'Claim up to $500.'],
  cardLabel: 'Welcome Bonus',
  cardPercent: '20%',
  cardDesc: "A bonus is more than a perk. It's a trading advantage that boosts your profits when the markets move with you.",
  cardFeatures: ['Up to $500 bonus credit', 'Commission-free trading', 'Available on all account types'],
}

/* ── Autosave ── */
function useAutosave(data: BonusContent, enabled: boolean) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const timer    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isFirst  = useRef(true)

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    if (!enabled) return
    if (timer.current) clearTimeout(timer.current)
    setStatus('saving')
    timer.current = setTimeout(async () => {
      try {
        await fetch('/api/bonus-content', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        setStatus('saved')
        setTimeout(() => setStatus('idle'), 3000)
      } catch { setStatus('error') }
    }, 900)
    return () => { if (timer.current) clearTimeout(timer.current) }
  }, [data, enabled])

  return status
}

/* ── Status chip ── */
function StatusChip({ status }: { status: 'idle' | 'saving' | 'saved' | 'error' }) {
  if (status === 'idle') return null
  const map = {
    saving: { color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.2)', label: 'Saving…',
      icon: <svg className="animate-spin" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity="0.3"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> },
    saved:  { color: '#4ade80', bg: 'rgba(74,222,128,0.08)',  border: 'rgba(74,222,128,0.2)',  label: 'Saved',
      icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> },
    error:  { color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)', label: 'Error',
      icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> },
  }
  const m = map[status]
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold"
      style={{ background: m.bg, color: m.color, border: `1px solid ${m.border}` }}>
      {m.icon} {m.label}
    </div>
  )
}

/* ── Inline field ── */
function InlineField({ label, value, onChange, multiline = false, mono = false }: {
  label: string; value: string; onChange: (v: string) => void
  multiline?: boolean; mono?: boolean
}) {
  const [focused, setFocused] = useState(false)
  const charLimit = multiline ? 400 : 120
  const over = value.length > charLimit

  const style: React.CSSProperties = {
    width: '100%',
    background: focused ? 'rgba(96,165,250,0.04)' : 'rgba(255,255,255,0.02)',
    border: `1px solid ${over ? 'rgba(239,68,68,0.4)' : focused ? 'rgba(96,165,250,0.35)' : 'rgba(255,255,255,0.07)'}`,
    borderRadius: '10px',
    color: over ? '#fca5a5' : 'rgba(255,255,255,0.85)',
    padding: '11px 14px',
    fontSize: mono ? '13px' : '14px',
    outline: 'none',
    resize: 'vertical' as const,
    fontFamily: mono ? 'var(--font-geist-mono), monospace' : 'inherit',
    lineHeight: '1.65',
    transition: 'border-color 0.15s, background 0.15s',
    WebkitAppearance: 'none',
  }

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <label className="text-[10px] font-bold tracking-[0.15em] uppercase shrink-0"
          style={{ color: focused ? '#60a5fa' : 'rgba(255,255,255,0.3)', transition: 'color 0.15s' }}>
          {label}
        </label>
        <span className={`text-[10px] tabular-nums shrink-0 ${over ? 'text-red-400' : 'text-white/20'}`}>
          {value.length}/{charLimit}
        </span>
      </div>
      {multiline ? (
        <textarea rows={3} value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={style} />
      ) : (
        <input type="text" value={value} onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={style} />
      )}
    </div>
  )
}

/* ── Bullet editor (touch-friendly) ── */
function BulletEditor({ label, items, onChange, color = '#60a5fa' }: {
  label: string; items: string[]; onChange: (v: string[]) => void; color?: string
}) {
  const dragIdx = useRef<number | null>(null)
  const [dragOver, setDragOver] = useState<number | null>(null)

  function update(i: number, v: string) {
    const next = [...items]; next[i] = v; onChange(next)
  }
  function remove(i: number) { onChange(items.filter((_, idx) => idx !== i)) }
  function add() { onChange([...items, '']) }
  function onDragStart(i: number) { dragIdx.current = i }
  function onDrop(i: number) {
    if (dragIdx.current === null || dragIdx.current === i) return
    const next = [...items]
    const [moved] = next.splice(dragIdx.current, 1)
    next.splice(i, 0, moved)
    onChange(next)
    dragIdx.current = null
    setDragOver(null)
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/30">{label}</label>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div
            key={i}
            draggable
            onDragStart={() => onDragStart(i)}
            onDragOver={e => { e.preventDefault(); setDragOver(i) }}
            onDragLeave={() => setDragOver(null)}
            onDrop={() => onDrop(i)}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-150"
            style={{
              background: dragOver === i ? 'rgba(96,165,250,0.06)' : 'rgba(255,255,255,0.025)',
              border: `1px solid ${dragOver === i ? 'rgba(96,165,250,0.25)' : 'rgba(255,255,255,0.07)'}`,
            }}
          >
            {/* Drag handle — hidden on touch, shown on pointer devices */}
            <span className="hidden sm:flex shrink-0 cursor-grab touch-none">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round">
                <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </span>

            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />

            <input
              type="text"
              value={item}
              onChange={e => update(i, e.target.value)}
              style={{
                flex: 1, minWidth: 0,
                background: 'transparent', border: 'none',
                color: 'rgba(255,255,255,0.8)', fontSize: '13px',
                outline: 'none', fontFamily: 'inherit',
                WebkitAppearance: 'none',
              }}
            />

            {/* Delete — always visible (mobile needs tap, not hover) */}
            <button
              type="button"
              onClick={() => remove(i)}
              className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-150 active:scale-95"
              style={{ background: 'rgba(239,68,68,0.08)', color: '#f87171' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={add}
        className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold w-full sm:w-fit transition-all duration-150 active:scale-95"
        style={{ background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.35)', border: '1px dashed rgba(255,255,255,0.1)' }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        Add item
      </button>
    </div>
  )
}

/* ── Live Preview ── */
function Preview({ content }: { content: BonusContent }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'pulse 2s infinite' }} />
        <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">Live Preview</span>
        <span className="ml-auto text-[10px] text-white/20 truncate">/promotions/welcome-bonus</span>
      </div>

      <div className="p-5 flex flex-col gap-5" style={{ background: '#fff' }}>
        {/* Left */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-lg font-black leading-tight" style={{ color: '#0f1e3c' }}>
            {content.heading.split(/(\d+%[^,]*)/).map((part, i) =>
              /\d+%/.test(part) ? (
                <span key={i} style={{ background: 'linear-gradient(90deg,#1d4ed8,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{part}</span>
              ) : part
            )}
          </h2>
          <p className="text-sm font-semibold" style={{ color: '#0f1e3c' }}>{content.subheading}</p>
          <p className="text-xs leading-relaxed" style={{ color: '#6b7280' }}>{content.bodyText}</p>
          <ul className="flex flex-col gap-1.5">
            {content.bullets.filter(Boolean).map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-xs" style={{ color: '#4b5563' }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right card */}
        <div className="rounded-xl p-4 flex flex-col gap-2.5" style={{ background: 'linear-gradient(135deg,#0f1e3c 0%,#1535a0 60%,#0d1b5e 100%)' }}>
          <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#93c5fd' }}>{content.cardLabel}</p>
          <p className="text-2xl font-black text-white">{content.cardPercent}</p>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{content.cardDesc}</p>
          <div className="flex flex-col gap-1.5">
            {content.cardFeatures.filter(Boolean).map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.7)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Section wrapper ── */
function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-2.5 px-4 py-3.5" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span className="text-white/40">{icon}</span>
        <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/40">{title}</span>
      </div>
      <div className="p-4 md:p-5 flex flex-col gap-4 md:gap-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
        {children}
      </div>
    </div>
  )
}

/* ── Main page ── */
export default function AdminBonusContent() {
  const [form, setForm]       = useState<BonusContent>(DEFAULT)
  const [loading, setLoading] = useState(true)
  const [ready, setReady]     = useState(false)
  const [tab, setTab]         = useState<'editor' | 'preview'>('editor')

  const status = useAutosave(form, ready)

  useEffect(() => {
    fetch('/api/bonus-content')
      .then(r => r.json())
      .then(d => { setForm(d); setLoading(false); setTimeout(() => setReady(true), 100) })
      .catch(() => setLoading(false))
  }, [])

  const set = useCallback(<K extends keyof BonusContent>(key: K, value: BonusContent[K]) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#070d1a' }}>

      {/* ── Top bar ── */}
      <div
        className="sticky top-14 lg:top-0 z-30"
        style={{ background: 'rgba(7,13,26,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Row 1: title + view page */}
        <div className="flex items-center justify-between px-4 md:px-6 pt-3 pb-2">
          <div>
            <div className="hidden sm:flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">Admin</span>
              <span className="text-white/15 text-xs">›</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">Bonus Content</span>
            </div>
            <h1 className="text-base md:text-lg font-black text-white tracking-tight">Welcome Bonus Editor</h1>
          </div>

          <div className="flex items-center gap-2">
            <StatusChip status={status} />
            <a
              href="/promotions/welcome-bonus"
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span className="hidden sm:inline">View page</span>
            </a>
          </div>
        </div>

        {/* Row 2: Editor / Preview tabs (full width on mobile) */}
        <div className="flex xl:hidden px-4 md:px-6 pb-3 gap-2">
          {(['editor', 'preview'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 py-2.5 rounded-xl text-xs font-bold capitalize transition-all duration-200"
              style={tab === t
                ? { background: 'rgba(96,165,250,0.15)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.25)' }
                : { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.07)' }
              }
            >
              {t === 'editor' ? '✏️ Editor' : '👁 Preview'}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 rounded-full border-2 border-white/5" />
            <div className="absolute inset-0 rounded-full border-2 border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          </div>
          <p className="text-sm text-white/25">Loading content…</p>
        </div>
      ) : (
        <div className="p-4 md:p-6 xl:p-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">

            {/* ── Editor panel ── */}
            <div className={`flex flex-col gap-4 ${tab === 'preview' ? 'hidden xl:flex' : 'flex'}`}>

              <Section title="Left Column" icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="8" height="18" rx="1"/><rect x="13" y="3" width="8" height="10" rx="1"/>
                </svg>
              }>
                <InlineField label="Heading" value={form.heading} onChange={v => set('heading', v)} />
                <InlineField label="Subheading" value={form.subheading} onChange={v => set('subheading', v)} />
                <InlineField label="Body Text" value={form.bodyText} onChange={v => set('bodyText', v)} multiline />
                <BulletEditor label="Bullet Points" items={form.bullets} onChange={v => set('bullets', v)} color="#2563eb" />
              </Section>

              <Section title="Right Card" icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 10h8M8 14h4"/>
                </svg>
              }>
                <div className="grid grid-cols-2 gap-3">
                  <InlineField label="Card Label" value={form.cardLabel} onChange={v => set('cardLabel', v)} />
                  <InlineField label="Percentage" value={form.cardPercent} onChange={v => set('cardPercent', v)} mono />
                </div>
                <InlineField label="Card Description" value={form.cardDesc} onChange={v => set('cardDesc', v)} multiline />
                <BulletEditor label="Card Features" items={form.cardFeatures} onChange={v => set('cardFeatures', v)} color="#60a5fa" />
              </Section>

              <p className="text-[11px] text-white/20 text-center pb-2">
                ✦ Auto-saved 0.9s after you stop typing
              </p>
            </div>

            {/* ── Preview panel ── */}
            <div className={`${tab === 'editor' ? 'hidden xl:block' : 'block'}`}>
              <div className="xl:sticky xl:top-28">
                <Preview content={form} />
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        textarea, input[type="text"] { transition: border-color 0.15s, background 0.15s; }
        /* Prevent iOS zoom on input focus */
        @media (max-width: 768px) {
          input[type="text"], textarea { font-size: 16px !important; }
        }
      `}</style>
    </div>
  )
}
