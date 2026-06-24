'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const FAQS = [
  {
    q: 'What Is DPM Markets MT5?',
    a: 'DPM Markets MT5 is a powerful multi-asset trading platform available on desktop, web, and mobile, offering advanced charting, real-time execution, and full strategy support.',
  },
  {
    q: 'Which Devices Are Compatible With DPM Markets MT5?',
    a: 'You can trade using DPM Markets MT5 on Windows, MacOS, Android, and iOS, ensuring seamless access across desktop and mobile devices.',
  },
  {
    q: 'Can I Use Automated Trading On DPM Markets MT5?',
    a: 'Yes! MT5 supports Expert Advisors (EAs), custom indicators, and automated strategies to help you trade efficiently.',
  },
  {
    q: 'How Secure Is Trading On DPM Markets MT5?',
    a: 'DPM Markets MT5 uses segregated client funds, encrypted data, and secure servers, providing a safe and reliable trading environment.',
  },
  {
    q: 'What Instruments Can I Trade On DPM Markets MT5?',
    a: 'You can access Forex, Commodities, Indices, Futures, Metals, and more, all within a single MT5 account.',
  },
  {
    q: 'Does DPM Markets MT5 Offer Real-Time Charts And Analysis Tools?',
    a: 'Absolutely. MT5 provides advanced charts, technical indicators, and market analysis tools to support every trading strategy.',
  },
]

const PLATFORMS = [
  {
    label: 'For Windows',
    desc: 'Download DPM Markets MT5 for Windows and enjoy fast, stable, and fully-featured trading with advanced charts and strategy support.',
    btnLabel: 'Download',
    btnIcon: 'windows',
    dark: true,
    bg: 'linear-gradient(135deg, #1535a0 0%, #0d1b5e 60%, #0a1440 100%)',
    glow: 'radial-gradient(ellipse at bottom right, rgba(99,130,246,0.4) 0%, transparent 65%)',
    patternId: 'mt5-p-win',
    patternType: 'windows',
    span: 'col-span-1 md:col-span-2',
    dir: 'from-left',
    downloadHref: 'https://download.terminal.free/cdn/web/bbs.markets.ltd/mt5/bbsmarkets5setup.exe',
  },
  {
    label: 'WebTrader',
    desc: 'Trade directly from your browser with MT5 WebTrader — no downloads or installations required. Access real-time market quotes, advanced charting tools, and seamless order execution anytime, anywhere.',
    btnLabel: 'Access Now',
    btnIcon: 'web',
    dark: true,
    bg: 'linear-gradient(135deg, #0d3b4d 0%, #082535 100%)',
    glow: 'radial-gradient(ellipse at bottom right, rgba(16,185,129,0.25) 0%, transparent 65%)',
    patternId: 'mt5-p-web',
    patternType: 'web',
    span: 'col-span-1',
    dir: 'from-right',
    downloadHref: 'https://webtrader.bbsmarkets.com/terminal',
  },
  {
    label: 'For MacOS',
    desc: 'Get DPM Markets MT5 on MacOS for smooth, reliable trading with complete tools and real-time market access.',
    btnLabel: 'Download',
    btnIcon: 'apple',
    dark: true,
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
    glow: 'radial-gradient(ellipse at bottom right, rgba(139,92,246,0.3) 0%, transparent 65%)',
    patternId: 'mt5-p-mac',
    patternType: 'apple-mac',
    span: 'col-span-1',
    dir: 'from-left',
    downloadHref: 'https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip?utm_source=support.metaquotes.net&utm_campaign=download.mt5.macos',
  },
  {
    label: 'For Android',
    desc: 'Trade anywhere with DPM Markets MT5 for Android, offering precise charts, full strategy capabilities, and real-time execution.',
    btnLabel: 'Download',
    btnIcon: 'android',
    dark: true,
    bg: 'linear-gradient(135deg, #0d4a2e 0%, #062a1a 100%)',
    glow: 'radial-gradient(ellipse at bottom right, rgba(34,197,94,0.25) 0%, transparent 65%)',
    patternId: 'mt5-p-and',
    patternType: 'android',
    span: 'col-span-1 md:col-span-2',
    dir: 'from-right',
    downloadHref: 'https://download.terminal.free/cdn/mobile/mt5/android?server=BBSMarkets-Trade',
  },
  {
    label: 'For Apple (IOS)',
    desc: 'Download DPM Markets MT5 for iPhone and iPad for seamless, on-the-go trading with advanced tools and stable performance.',
    btnLabel: 'Download',
    btnIcon: 'apple',
    dark: true,
    bg: 'linear-gradient(135deg, #3b1f6e 0%, #1e0f40 100%)',
    glow: 'radial-gradient(ellipse at bottom right, rgba(168,85,247,0.3) 0%, transparent 65%)',
    patternId: 'mt5-p-ios',
    patternType: 'ios',
    span: 'col-span-1',
    dir: 'from-bottom',
    downloadHref: 'https://download.terminal.free/cdn/mobile/mt5/ios?server=BBSMarkets-Trade',
  },
]

function PatternWindows({ id }: { id: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="0"  cy="0"  r="1.5" fill="white" opacity="0.07"/>
          <circle cx="40" cy="0"  r="1.5" fill="white" opacity="0.07"/>
          <circle cx="0"  cy="40" r="1.5" fill="white" opacity="0.07"/>
          <circle cx="40" cy="40" r="1.5" fill="white" opacity="0.07"/>
          <circle cx="20" cy="20" r="1"   fill="white" opacity="0.04"/>
          <line x1="0"  y1="0"  x2="10" y2="0"  stroke="white" strokeWidth="0.5" opacity="0.05"/>
          <line x1="0"  y1="0"  x2="0"  y2="10" stroke="white" strokeWidth="0.5" opacity="0.05"/>
          <line x1="40" y1="0"  x2="30" y2="0"  stroke="white" strokeWidth="0.5" opacity="0.05"/>
          <line x1="40" y1="0"  x2="40" y2="10" stroke="white" strokeWidth="0.5" opacity="0.05"/>
          <line x1="0"  y1="40" x2="10" y2="40" stroke="white" strokeWidth="0.5" opacity="0.05"/>
          <line x1="0"  y1="40" x2="0"  y2="30" stroke="white" strokeWidth="0.5" opacity="0.05"/>
          <line x1="40" y1="40" x2="30" y2="40" stroke="white" strokeWidth="0.5" opacity="0.05"/>
          <line x1="40" y1="40" x2="40" y2="30" stroke="white" strokeWidth="0.5" opacity="0.05"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  )
}

function PatternWebTrader({ id }: { id: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={id} width="80" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M0 20 C10 5, 30 5, 40 20 C50 35, 70 35, 80 20"
            stroke="white" strokeWidth="0.6" fill="none" opacity="0.07"
          />
          <path
            d="M0 30 C10 15, 30 15, 40 30 C50 45, 70 45, 80 30"
            stroke="white" strokeWidth="0.4" fill="none" opacity="0.04"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  )
}

function PatternMacOS({ id }: { id: string }) {
  const h = 26 * Math.sin(Math.PI / 3)
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={id} width="52" height={h * 2} patternUnits="userSpaceOnUse">
          {[
            [26, h * 0.5],
            [0,  h * 1.5],
            [52, h * 1.5],
          ].map(([cx, cy], k) => (
            <polygon
              key={k}
              points={[0,1,2,3,4,5].map(n => {
                const a = (Math.PI / 180) * (60 * n - 30)
                return `${cx + 14 * Math.cos(a)},${cy + 14 * Math.sin(a)}`
              }).join(' ')}
              fill="none" stroke="white" strokeWidth="0.5" opacity="0.07"
            />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  )
}

function PatternAndroid({ id }: { id: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={id} width="36" height="36" patternUnits="userSpaceOnUse">
          <line x1="18" y1="6"  x2="18" y2="30" stroke="white" strokeWidth="0.5" opacity="0.07"/>
          <line x1="6"  y1="18" x2="30" y2="18" stroke="white" strokeWidth="0.5" opacity="0.07"/>
          <circle cx="18" cy="18" r="2" fill="white" opacity="0.04"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  )
}

function PatternIOS({ id }: { id: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="8"  fill="none" stroke="white" strokeWidth="0.5" opacity="0.08"/>
          <circle cx="30" cy="30" r="16" fill="none" stroke="white" strokeWidth="0.5" opacity="0.05"/>
          <circle cx="30" cy="30" r="24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.03"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`}/>
    </svg>
  )
}

function CardPattern({ type, id }: { type: string; id: string }) {
  if (type === 'windows') return <PatternWindows id={id} />
  if (type === 'web')     return <PatternWebTrader id={id} />
  if (type === 'apple-mac') return <PatternMacOS id={id} />
  if (type === 'android') return <PatternAndroid id={id} />
  return <PatternIOS id={id} />
}

function PlatformIcon({ type }: { type: string }) {
  if (type === 'windows') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851"/>
    </svg>
  )
  if (type === 'apple') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.22 1.3-2.2 3.88.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.64M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
  if (type === 'android') return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.341a.876.876 0 01-.877.877.876.876 0 01-.876-.877V10.66a.876.876 0 01.876-.877.876.876 0 01.877.877v4.681zm-10.17 0a.876.876 0 01-.877.877.876.876 0 01-.876-.877V10.66a.876.876 0 01.876-.877.876.876 0 01.877.877v4.681zM14.98 5.792l1.19-2.188a.243.243 0 00-.096-.33.245.245 0 00-.33.096l-1.205 2.211A7.315 7.315 0 0012 5.03a7.315 7.315 0 00-2.54.551L8.256 3.37a.245.245 0 00-.33-.096.243.243 0 00-.095.33L9.02 5.792C7.1 6.79 5.793 8.756 5.793 11.02h12.414c0-2.264-1.307-4.23-3.228-5.228zM9.949 9.005a.617.617 0 01-.618-.617.618.618 0 111.236 0 .617.617 0 01-.618.617zm4.103 0a.617.617 0 01-.617-.617.618.618 0 111.235 0 .617.617 0 01-.618.617z"/>
    </svg>
  )
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 010 20m0-20a14.5 14.5 0 000 20M2 12h20" stroke="white" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

function MT5FaqItem({
  faq, index, isOpen, onToggle,
}: {
  faq: { q: string; a: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    if (isOpen) {
      el.style.maxHeight = '0px'
      el.style.opacity = '0'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.maxHeight = el.scrollHeight + 'px'
          el.style.opacity = '1'
        })
      })
    } else {
      el.style.maxHeight = el.scrollHeight + 'px'
      requestAnimationFrame(() => {
        el.style.maxHeight = '0px'
        el.style.opacity = '0'
      })
    }
  }, [isOpen])

  return (
    <div className={`border-b ${index === 0 ? 'border-t' : ''} border-slate-100`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="text-base md:text-lg font-semibold leading-snug transition-colors duration-300"
          style={{ color: isOpen ? '#d97706' : undefined }}
        >
          <span className={!isOpen ? 'text-[#101829] group-hover:text-blue-600 transition-colors duration-300' : ''}>
            {faq.q}
          </span>
        </span>

        <span
          className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300"
          style={{
            borderColor: isOpen ? '#d97706' : '#cbd5e1',
            color: isOpen ? '#d97706' : '#94a3b8',
          }}
        >
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              style={{ transition: 'opacity 0.3s', opacity: isOpen ? 0 : 1 }}
            />
            <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <div
        ref={bodyRef}
        style={{
          maxHeight: '0px',
          opacity: 0,
          overflow: 'hidden',
          transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <p className="text-base text-slate-500 leading-relaxed pb-6 pr-4">
          {faq.a}
        </p>
      </div>
    </div>
  )
}

function MT5FAQs() {
  const [open, setOpen] = useState<number>(-1)

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight"
          >
            <span className="text-[#101829]">MT5 </span>
            <span style={{
              background: 'linear-gradient(90deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>FAQs</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {FAQS.map((faq, i) => (
            <MT5FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default function MT5Page() {
  const platRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = platRef.current?.querySelectorAll('.plat-card')
    if (!cards) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero banner — same style as Account Types ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden"
        style={{
          height: '90svh',
          background: '#101829',
          borderBottomLeftRadius: '5rem',
          borderBottomRightRadius: '5rem',
        }}
      >
        {/* Dot-wave SVG background */}
        <svg
          className="absolute left-0 w-full pointer-events-none"
          viewBox="0 0 1440 200"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
          style={{ bottom: '15%' }}
        >
          {(() => {
            let seed = 99
            const rand = () => { seed = (seed * 16807 + 0) % 2147483647; return (seed - 1) / 2147483646 }
            const dots = []
            const cols = 80
            const rows = 20
            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                const t = c / (cols - 1)
                const x = t * 1440
                const waveY = 60 - Math.sin(t * Math.PI * 1.3) * 100 - r * 9
                const jitter = rand() * 6 - 3
                const y = waveY + jitter
                if (y > 202 || y < 0) { rand(); rand(); continue }
                const opacityBase = Math.max(0, 1 - t * 0.4) * Math.max(0, 1 - (200 - y) / 200)
                const opacity = Math.min(0.75, opacityBase * (0.5 + rand() * 0.4))
                const radius = 1.2 + rand() * 1.4
                dots.push(
                  <circle key={`${r}-${c}`} cx={+x.toFixed(1)} cy={+y.toFixed(1)} r={+radius.toFixed(1)} fill="#94a3b8" opacity={+opacity.toFixed(2)} />
                )
              }
            }
            return dots
          })()}
        </svg>

        {/* Content */}
        <div className="relative flex flex-col items-start gap-6 max-w-4xl w-full -mt-16 px-6 md:px-12">
          <h1
            className="at-item text-left text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight"
            style={{ fontFamily: 'var(--font-inter)', ['--i' as string]: 0 }}
          >
            DPM MT5 Platform
          </h1>

          <p className="at-item text-white/65 text-base md:text-lg max-w-2xl leading-relaxed text-left" style={{ '--i': 1 } as React.CSSProperties}>
            Trade over 300 instruments including Forex, Stock, Equities, Futures and CFDs!
          </p>

          <div className="at-item flex flex-col items-start gap-2 mt-2" style={{ '--i': 2 } as React.CSSProperties}>
            <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-2">DPM MT5 features include:</p>
            {[
              'Interbank sourced Liquidity.',
              '50+ Technical Indicators and Tools.',
              'Spreads starting from 0 pips.',
              'EA, Hedging, Scalping friendly.',
              'Market Execution (NO Slippage, NO Re-quotes).',
              'View Multiple Charts Simultaneously.',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span className="text-white/70 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/register"
            className="at-item mt-2 inline-flex items-center justify-center rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 px-8 py-3 text-base font-semibold"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            Sign Up Now
          </Link>
        </div>
      </div>

      {/* ── Download / Platform Bento Grid ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-14">

          <div className="flex flex-col items-center text-center gap-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight"
              style={{
                background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Download MT5 Platform
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-xl leading-relaxed">
              Available across all major platforms — desktop, browser, and mobile.
            </p>
          </div>

          <div ref={platRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLATFORMS.map((p, i) => (
              <div
                key={i}
                className={`plat-card ${p.dir} ${p.span} relative rounded-4xl overflow-hidden p-10 flex flex-col justify-between`}
                style={{ background: p.bg, ['--plat-delay' as string]: `${i * 100}ms`, minHeight: '300px' }}
              >
                {/* Unique SVG pattern per card */}
                <CardPattern type={p.patternType} id={p.patternId} />

                {/* Glow */}
                {p.glow && (
                  <div className="plat-glow absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
                    style={{ background: p.glow }} />
                )}

                {/* Content */}
                <div className="relative flex flex-col gap-4 max-w-[75%]">
                  <h3 className="font-bold text-2xl xl:text-3xl leading-[1.2] tracking-tight inline-block bg-clip-text text-transparent bg-linear-to-b from-5% from-white to-90% to-gray-300">
                    {p.label}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-white/55">
                    {p.desc}
                  </p>
                </div>

                {/* Button */}
                <div className="relative mt-8">
                  <a
                    href={(p as typeof p & { downloadHref?: string }).downloadHref ?? '/register'}
                    {...((p as typeof p & { downloadHref?: string }).downloadHref ? { download: true, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
                  >
                    <PlatformIcon type={p.btnIcon} />
                    {p.btnLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MT5 FAQs ── */}
      <MT5FAQs />

      <style>{`
        @keyframes atFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .at-item {
          opacity: 0;
          animation: atFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: calc(var(--i) * 130ms + 100ms);
        }
        .plat-card {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.9s cubic-bezier(0.22,1,0.36,1) var(--plat-delay, 0ms),
            transform 0.9s cubic-bezier(0.22,1,0.36,1) var(--plat-delay, 0ms),
            box-shadow 0.4s ease;
        }
        .plat-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .plat-card:hover {
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12);
        }
        .plat-glow {
          transition: opacity 0.6s ease;
        }
        .plat-card:hover .plat-glow {
          opacity: 1.4;
        }
        @media (prefers-reduced-motion: reduce) {
          .at-item { animation: none; opacity: 1; }
          .mt5-card { opacity: 1; transform: none; transition: none; }
          .plat-card { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

    </main>
  )
}
