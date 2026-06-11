'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StatCards from './StatCards'

const FEATURES = [
  ['Withdrawals in Minutes'],
  ['Leverage up to 1:5000', 'Spreads from 0 pips'],
  ['Crypto friendly broker', 'Up to 14 Days Swap Free'],
]

export default function HeroSection() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let done = false
    const trigger = () => { if (!done) { done = true; setReady(true) } }

    window.addEventListener('hero:ready', trigger)

    // Fallback: LoadingScreen exits at ~2400ms; fire at 2700ms if event missed
    const fallback = setTimeout(trigger, 2700)

    return () => {
      window.removeEventListener('hero:ready', trigger)
      clearTimeout(fallback)
    }
  }, [])

  const r = ready ? 'is-ready' : ''

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B111E]"
      style={{ borderBottomLeftRadius: '5rem', borderBottomRightRadius: '5rem' }}
    >

      {/* Background — zoom-in reveal */}
      <div className={`hero-bg ${r} absolute inset-0`}>
        <Image
          src="/homeBackground.png"
          alt="Hero background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          style={{ opacity: 0.8 }}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0B111E]/40" />
      <div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-[#0B111E]/80 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-[#0B111E]/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-[#0B111E] via-[#0B111E]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-[#0B111E] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="shrink-0 pt-51.5" />

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 gap-7 pt-4 pb-28">

          {/* Trust line */}
          <p
            className={`hero-item ${r} text-sm md:text-base font-semibold text-white/60 tracking-wide`}
            style={{ '--hero-delay': '0ms' } as React.CSSProperties}
          >
            Trusted by over <span className="text-white">20 Million Traders</span>
          </p>

          {/* Headline — clip-path wipe */}
          <h1
            className={`hero-headline ${r} chrome-text font-black tracking-tight leading-[1.1]`}
            style={{ fontSize: '5rem' }}
          >
            Top Tier Brokerage<br />Conditions
          </h1>

          {/* Feature list — staggered */}
          <div className="flex flex-col items-center gap-3 mt-1">
            {FEATURES.map((row, ri) => (
              <div key={ri} className="flex items-center justify-center gap-8">
                {row.map((item, ii) => (
                  <div
                    key={item}
                    className={`hero-item ${r} flex items-center gap-2.5`}
                    style={{ '--hero-delay': `${340 + ri * 90 + ii * 50}ms` } as React.CSSProperties}
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600/20 shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm md:text-base text-white/80 font-medium whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* CTA — spring scale-in */}
          <div className={`hero-cta ${r} flex flex-col items-center gap-2 mt-1`}>
            <Link
              href="#"
              className="px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-900/40 tracking-wide"
            >
              Register Now
            </Link>
            <span className="text-xs text-white/30 font-medium tracking-wide">
              *Limited-Time Offer
            </span>
          </div>

        </div>

        {/* Stat Cards */}
        <div
          className={`hero-item ${r} shrink-0 pb-16`}
          style={{ '--hero-delay': '860ms' } as React.CSSProperties}
        >
          <StatCards />
        </div>

      </div>
    </section>
  )
}
