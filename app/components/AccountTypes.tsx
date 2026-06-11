'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Crown, Gift, Coins, Zap } from 'lucide-react'

const ACCOUNTS = [
  {
    id: 'standard',
    label: 'Standard Account',
    description: 'Simple And Reliable Trading With Competitive Spreads And Smooth Execution.',
    accent: '#60a5fa',
    glow: 'rgba(59,130,246,0.25)',
    pattern: 'diag',
    Icon: Zap,
  },
  {
    id: 'vip',
    label: 'VIP Account',
    description: 'Advanced Trading Conditions With Tighter Spreads And Priority Execution.',
    accent: '#a78bfa',
    glow: 'rgba(139,92,246,0.25)',
    pattern: 'hex',
    Icon: Crown,
  },
  {
    id: 'bonus',
    label: 'Bonus Account',
    description: 'Trade With The Extra Margin Support Through Flexible Bonus Benefits.',
    accent: '#fbbf24',
    glow: 'rgba(245,158,11,0.2)',
    pattern: 'diamond',
    Icon: Gift,
  },
  {
    id: 'cent',
    label: 'CENT Account',
    description: 'Trade With Cent-Based Balance For Better Control, Lower Risk, And Flexible Trading Conditions.',
    accent: '#34d399',
    glow: 'rgba(16,185,129,0.2)',
    pattern: 'cross',
    Icon: Coins,
  },
]

function SvgPattern({ pattern, id, color }: { pattern: string; id: string; color: string }) {
  const pId = `at-${id}-pat`

  if (pattern === 'diag') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={pId} width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="26" stroke={color} strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pId})`} fillOpacity="0.07"/>
    </svg>
  )

  if (pattern === 'hex') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        {/* Pointy-top hex tile: r=20, tile 34×60 */}
        <pattern id={pId} width="34" height="60" patternUnits="userSpaceOnUse">
          <polygon points="17,10 34,20 34,40 17,50 0,40 0,20" fill="none" stroke={color} strokeWidth="0.6"/>
          <polygon points="0,-20 17,-10 17,10 0,20 -17,10 -17,-10" fill="none" stroke={color} strokeWidth="0.6"/>
          <polygon points="34,-20 51,-10 51,10 34,20 17,10 17,-10" fill="none" stroke={color} strokeWidth="0.6"/>
          <polygon points="0,40 17,50 17,70 0,80 -17,70 -17,50" fill="none" stroke={color} strokeWidth="0.6"/>
          <polygon points="34,40 51,50 51,70 34,80 17,70 17,50" fill="none" stroke={color} strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pId})`} fillOpacity="0.07"/>
    </svg>
  )

  if (pattern === 'diamond') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={pId} width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect x="0.5" y="0.5" width="29" height="29" fill="none" stroke={color} strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pId})`} fillOpacity="0.07"/>
    </svg>
  )

  if (pattern === 'cross') return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={pId} width="36" height="36" patternUnits="userSpaceOnUse">
          <line x1="18" y1="0" x2="18" y2="36" stroke={color} strokeWidth="0.6"/>
          <line x1="0" y1="18" x2="36" y2="18" stroke={color} strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pId})`} fillOpacity="0.07"/>
    </svg>
  )

  return null
}

export default function AccountTypes() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.bento-card')
    if (!cards) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )
    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-black leading-[1.15] tracking-tight mb-4"
            style={{
              background: 'linear-gradient(180deg, #0f172a 0%, #334155 35%, #64748b 55%, #334155 75%, #0f172a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Account Types<br />We Offer
          </h2>
          <p className="text-slate-500 text-base font-medium max-w-md leading-relaxed">
            BBS Markets Accounts Built to Match Every Trading Style.
          </p>
        </div>

        {/* 2×2 Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACCOUNTS.map((acc, i) => {
            const dir = i % 2 === 0 ? 'from-left' : 'from-right'
            const isHovered = hovered === i

            return (
              <div
                key={acc.id}
                className={`bento-card ${dir} relative rounded-3xl overflow-hidden flex flex-col justify-between`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  minHeight: '220px',
                  background: 'linear-gradient(135deg, #080f1f 0%, #0c1a38 100%)',
                  border: `1px solid ${isHovered ? acc.accent + '40' : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: isHovered ? `0 0 40px ${acc.accent}18` : 'none',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                  '--bento-delay': `${i * 80}ms`,
                } as React.CSSProperties}
              >
                {/* SVG pattern — unique per card */}
                <SvgPattern pattern={acc.pattern} id={acc.id} color={acc.accent} />

                {/* Accent top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${acc.accent}80, transparent)`,
                    opacity: isHovered ? 1 : 0.4,
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Glow — top right corner */}
                <div
                  className="absolute -top-10 -right-10 w-64 h-64 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${acc.glow} 0%, transparent 65%)`,
                    opacity: isHovered ? 1 : 0.6,
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Layout: left content + right visual */}
                <div className="relative flex items-center justify-between gap-6 p-8 md:p-10 h-full">

                  {/* Left — text */}
                  <div className="flex flex-col gap-4 flex-1 min-w-0">

                    {/* Accent dot + label */}
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: acc.accent, boxShadow: `0 0 8px ${acc.accent}` }}
                      />
                      <span
                        className="text-xs font-bold tracking-widest uppercase"
                        style={{ color: acc.accent }}
                      >
                        {acc.id}
                      </span>
                    </div>

                    <h3 className="chrome-text text-xl md:text-2xl font-black tracking-tight leading-tight">
                      {acc.label}
                    </h3>

                    <p className="text-sm text-white/45 font-medium leading-relaxed max-w-[260px]">
                      {acc.description}
                    </p>

                    <Link
                      href="#"
                      className="flex items-center gap-1.5 text-sm font-bold w-fit mt-1 transition-all duration-300"
                      style={{
                        color: isHovered ? acc.accent : 'rgba(255,255,255,0.7)',
                      }}
                    >
                      Open Account <ArrowUpRight size={15} strokeWidth={2.5} />
                    </Link>
                  </div>

                  {/* Right — icon */}
                  <div className="shrink-0 relative flex items-center justify-center w-36 h-36">

                    {/* Icon glow bg */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${acc.glow} 0%, transparent 70%)`,
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />

                    <div
                      style={{
                        transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
                        transform: isHovered ? 'scale(1.15) translateY(-4px)' : 'scale(1) translateY(0)',
                      }}
                    >
                      <acc.Icon
                        size={72}
                        strokeWidth={1}
                        style={{
                          color: acc.accent,
                          filter: `drop-shadow(0 0 16px ${acc.accent}60)`,
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
