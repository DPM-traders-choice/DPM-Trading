'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function CTABanner() {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.querySelector('.cta-card')?.classList.add('cta-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative z-10 max-w-7xl mx-auto px-6 md:px-12"
      style={{ marginBottom: '-120px' }}
    >
      <div
        className="cta-card relative rounded-2xl overflow-hidden px-8 md:px-12 py-10 flex flex-col md:flex-row items-center md:items-center gap-8"
        style={{
          minHeight: '240px',
          background: 'linear-gradient(135deg, #0a1628 0%, #0f2050 60%, #0a1628 100%)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)',
        }}
      >

        {/* SVG pattern — hex grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="cta-hex" width="34" height="60" patternUnits="userSpaceOnUse">
              <polygon points="17,10 34,20 34,40 17,50 0,40 0,20" fill="none" stroke="white" strokeWidth="0.5"/>
              <polygon points="0,-20 17,-10 17,10 0,20 -17,10 -17,-10" fill="none" stroke="white" strokeWidth="0.5"/>
              <polygon points="34,-20 51,-10 51,10 34,20 17,10 17,-10" fill="none" stroke="white" strokeWidth="0.5"/>
              <polygon points="0,40 17,50 17,70 0,80 -17,70 -17,50" fill="none" stroke="white" strokeWidth="0.5"/>
              <polygon points="34,40 51,50 51,70 34,80 17,70 17,50" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-hex)" fillOpacity="0.04"/>
        </svg>

        {/* SVG pattern — diagonal stripes (right side) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
          <defs>
            <pattern id="cta-diag" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="24" stroke="white" strokeWidth="0.4"/>
            </pattern>
            <linearGradient id="cta-diag-mask" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="black" stopOpacity="0"/>
              <stop offset="60%"  stopColor="black" stopOpacity="0"/>
              <stop offset="100%" stopColor="black" stopOpacity="1"/>
            </linearGradient>
            <mask id="cta-diag-m">
              <rect width="100%" height="100%" fill="url(#cta-diag-mask)"/>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-diag)" fillOpacity="0.06" mask="url(#cta-diag-m)"/>
        </svg>

        {/* Glow — pulse */}
        <div className="absolute inset-0 pointer-events-none cta-glow-pulse"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.2) 0%, transparent 60%)' }}
        />

        {/* Glow — drift */}
        <div className="absolute -bottom-16 -left-16 w-72 h-72 pointer-events-none cta-glow-drift"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)' }}
        />

        {/* Shimmer sweep */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="cta-shimmer absolute inset-y-0 w-24"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)' }}
          />
        </div>

        {/* Accent top line */}
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(99,130,246,0.6) 40%, rgba(139,92,246,0.5) 60%, transparent)' }}
        />

        {/* Coin — staggered entrance */}
        <div
          className="cta-item relative w-36 h-36 shrink-0"
          style={{ '--cta-delay': '100ms' } as React.CSSProperties}
        >
          <Image src="/Coin.png" alt="Start Trading" fill className="object-contain drop-shadow-2xl" />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px self-stretch bg-white/8 shrink-0" />

        {/* Text */}
        <div
          className="cta-item relative flex flex-col gap-3 flex-1 items-center text-center md:items-start md:text-left"
          style={{ '--cta-delay': '220ms' } as React.CSSProperties}
        >
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-400">
            Get Started Today
          </p>
          <h2
            className="text-2xl md:text-3xl font-black leading-[1.15] tracking-tight"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #c8d8ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Start Your Journey<br />With Just $10
          </h2>
          <p className="text-xs text-white/40 font-medium leading-relaxed max-w-sm">
            Trade global markets with tight spreads, fast execution, and zero hidden fees.
          </p>
        </div>

        {/* CTA button */}
        <div
          className="cta-item relative shrink-0 flex justify-center md:block"
          style={{ '--cta-delay': '360ms' } as React.CSSProperties}
        >
          <Link
            href="#"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04] whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #D4A843 0%, #B8882A 100%)',
              boxShadow: '0 6px 20px rgba(212,168,67,0.4)',
              color: '#0B111E',
            }}
          >
            Sign Up Now <ArrowUpRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

      </div>
    </div>
  )
}
