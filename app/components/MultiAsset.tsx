'use client'

import { useRef, useEffect } from 'react'
import { TrendingUp, BarChart3, Building2, Cpu, Gem, AreaChart } from 'lucide-react'

const ASSETS = [
  {
    icon: TrendingUp,
    name: 'Forex',
    desc: '70+ major, minor & exotic currency pairs with ultra-tight spreads.',
    accent: '#3b82f6',
  },
  {
    icon: BarChart3,
    name: 'Futures',
    desc: 'Diversify your portfolio with global commodity and financial futures.',
    accent: '#8b5cf6',
  },
  {
    icon: Building2,
    name: 'Shares',
    desc: "Access top-tier stocks from the world's leading exchanges.",
    accent: '#10b981',
  },
  {
    icon: Cpu,
    name: 'Cryptos',
    desc: '50+ digital assets available for trading around the clock, 24/7.',
    accent: '#f59e0b',
  },
  {
    icon: Gem,
    name: 'Metals',
    desc: 'Trade gold, silver and precious metals with precision execution.',
    accent: '#D4A843',
  },
  {
    icon: AreaChart,
    name: 'Indices',
    desc: 'Major world indices — S&P 500, NASDAQ, DAX and more.',
    accent: '#ef4444',
  },
]

export default function MultiAsset() {
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs  = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Header observer
    const headerObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ma-header-visible')
          headerObs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (headerRef.current) headerObs.observe(headerRef.current)

    // Card observer
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ma-card-visible')
            cardObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    cards.forEach((c) => cardObs.observe(c))

    return () => { headerObs.disconnect(); cardObs.disconnect() }
  }, [])

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ── */}
        <div ref={headerRef} className="ma-header max-w-3xl mb-16 md:mb-20">

          <p className="ma-label text-sm font-semibold tracking-[0.18em] uppercase mb-5"
             style={{ color: '#D4A843' }}>
            Markets We Cover
          </p>

          <h2 className="ma-heading tracking-tight leading-[1.08] mb-7"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                fontFamily: 'var(--font-inter)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #0c1422 0%, #1e3a6e 50%, #0c1422 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
            Multi Asset Brokerage!
          </h2>

          <p className="ma-desc text-base md:text-lg leading-relaxed"
             style={{ color: '#64748b', maxWidth: '620px' }}>
            Trade with confidence in a powerful environment featuring seamless execution,
            advanced tools, and flexible conditions built for every trader and spanning a
            wide selection of global markets below.
          </p>
        </div>

        {/* ── Asset grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {ASSETS.map((asset, i) => {
            const Icon = asset.icon
            const fromX = i % 2 === 0 ? '-36px' : '36px'
            return (
              <div
                key={asset.name}
                ref={(el) => { cardRefs.current[i] = el }}
                className="ma-card group relative rounded-2xl p-6 md:p-8 cursor-default select-none overflow-hidden"
                style={
                  {
                    '--from-x': fromX,
                    '--card-delay': `${i * 90}ms`,
                    background: 'linear-gradient(145deg, #0c1828 0%, #0d1d36 100%)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  } as React.CSSProperties
                }
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 40%, ${asset.accent}22 0%, transparent 65%)` }}
                />

                {/* Icon */}
                <div
                  className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${asset.accent}18`, border: `1px solid ${asset.accent}35` }}
                >
                  <Icon size={22} strokeWidth={1.8} style={{ color: asset.accent }} />
                </div>

                {/* Name */}
                <h3 className="font-bold mb-2.5 tracking-tight"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '1.15rem', color: '#f1f5f9' }}>
                  {asset.name}
                </h3>

                {/* Desc */}
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
                  {asset.desc}
                </p>

                {/* Bottom shimmer line on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${asset.accent}80, transparent)` }}
                />
              </div>
            )
          })}
        </div>

      </div>

      <style>{`
        /* Header pieces start hidden */
        .ma-header .ma-label,
        .ma-header .ma-heading,
        .ma-header .ma-desc {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1),
                      transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .ma-header .ma-label  { transition-delay: 0ms; }
        .ma-header .ma-heading { transition-delay: 120ms; }
        .ma-header .ma-desc   { transition-delay: 240ms; }

        /* Visible state */
        .ma-header-visible .ma-label,
        .ma-header-visible .ma-heading,
        .ma-header-visible .ma-desc {
          opacity: 1;
          transform: none;
        }

        /* Cards start hidden */
        .ma-card {
          opacity: 0;
          transform: translateX(var(--from-x, 0)) translateY(24px);
          transition:
            opacity 0.7s cubic-bezier(0.16,1,0.3,1) var(--card-delay,0ms),
            transform 0.7s cubic-bezier(0.16,1,0.3,1) var(--card-delay,0ms),
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }
        .ma-card-visible {
          opacity: 1;
          transform: none;
        }
        .ma-card:hover {
          border-color: rgba(255,255,255,0.12) !important;
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
        }
      `}</style>
    </section>
  )
}
