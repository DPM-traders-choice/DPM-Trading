'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import StatCards from './StatCards'
import SplitText from './SplitText'

const SLIDES = [
  {
    trust: 'Trusted by over 20 Million Traders',
    headline: ['Top Tier Brokerage', 'Conditions'],
    desc: null,
    features: [
      ['Withdrawals in Minutes'],
      ['Leverage up to 1:5000', 'Spreads from 0 pips'],
      ['Crypto friendly broker', 'Up to 14 Days Swap Free'],
    ],
  },
  {
    trust: 'Access 300+ Instruments Across 6 Asset Classes',
    headline: ['Multi Asset', 'Brokerage!'],
    desc: 'Trade with confidence in a powerful environment featuring seamless execution, advanced tools, and flexible conditions built for every trader and spanning a wide selection of global markets below.',
    features: [
      ['Forex', 'Futures', 'Shares'],
      ['Cryptos', 'Metals', 'Indices'],
    ],
  },
  {
    trust: 'Industry-Leading Trading Technology',
    headline: ['World Leading MT5', 'Trading Platform!'],
    desc: 'MetaTrader 5 delivers lightning-fast execution, intuitive navigation, and advanced charting tools, making it ideal for traders of all experience levels.',
    features: [
      ['Available on WebTrader, iOS, Android and Desktop'],
      ['Trade Stocks as they should be traded'],
    ],
  },
  {
    trust: 'Exclusive Offer for New Traders',
    headline: ['Start Your Trading Journey', 'With A Bonus From Us!'],
    desc: null,
    features: [
      ['20% Welcome Bonus'],
      ['All profits may be withdrawn'],
      ['Claim up to $500'],
    ],
  },
]

const INTERVAL = 7000
const EXIT_MS  = 700
const ENTER_MS = 1100

export default function HeroSection() {
  const [ready, setReady]         = useState(false)
  const [current, setCurrent]     = useState(0)
  const [slideClass, setSlideClass] = useState('hero-slide-enter')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let done = false
    const trigger = () => { if (!done) { done = true; setReady(true) } }
    window.addEventListener('hero:ready', trigger)
    const fallback = setTimeout(trigger, 2700)
    return () => { window.removeEventListener('hero:ready', trigger); clearTimeout(fallback) }
  }, [])

  useEffect(() => {
    if (!ready) return
    const advance = () => {
      // Exit
      setSlideClass('hero-slide-exit')
      timerRef.current = setTimeout(() => {
        setCurrent(c => (c + 1) % SLIDES.length)
        setSlideClass('hero-slide-enter')
      }, EXIT_MS)
    }
    const id = setInterval(advance, INTERVAL)
    return () => { clearInterval(id); if (timerRef.current) clearTimeout(timerRef.current) }
  }, [ready])

  const r     = ready ? 'is-ready' : ''
  const slide = SLIDES[current]

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B111E]"
      style={{ borderBottomLeftRadius: '5rem', borderBottomRightRadius: '5rem' }}
    >
      {/* Background with Ken Burns drift */}
      <div className={`hero-bg ${r} absolute inset-0 overflow-hidden`}>
        <div className="hero-kenburns absolute inset-[-6%] w-[112%] h-[112%]">
          <Image src="/bgnew.png" alt="Hero background" fill priority quality={90}
            className="object-cover object-right" style={{ opacity: 0.9 }} />
        </div>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0B111E]/40" />
      <div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-[#0B111E]/80 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-[#0B111E]/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-[#0B111E] via-[#0B111E]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-[#0B111E] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="shrink-0 pt-50" />

        <div className="flex-1 flex flex-col justify-center pt-6 pb-24">
          <div className="max-w-360 mx-auto w-full px-6 md:px-10">

            {/* Fixed-height stage — prevents layout shift between slides */}
            <div className="relative" style={{ height: 'clamp(480px, 56vh, 580px)' }}>
              <div
                key={current}
                className={`absolute inset-x-0 top-0 flex flex-col items-start text-left gap-6 ${slideClass}`}
              >
                {/* Trust line */}
                <p className="text-sm md:text-base font-semibold text-white/55 tracking-wide">
                  {slide.trust}
                </p>

                {/* Headline — SplitText per line */}
                <h1 className="tracking-tight leading-[1.1] flex flex-col items-start">
                  {slide.headline.map((line, li) => (
                    <SplitText
                      key={`${current}-${li}-${line}`}
                      text={line}
                      tag="span"
                      splitType="chars"
                      delay={22}
                      duration={0.85}
                      ease="power3.out"
                      from={{ opacity: 0, y: 36 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0}
                      rootMargin="0px"
                      textAlign="left"
                      startDelay={li * 0.15}
                      style={{
                        fontSize: 'clamp(2.8rem, 4.8vw, 4.4rem)',
                        fontFamily: 'var(--font-inter)',
                        fontWeight: 900,
                        color: '#ffffff',
                        letterSpacing: '-0.03em',
                        textShadow: '0 2px 40px rgba(255,255,255,0.12)',
                        lineHeight: 1.1,
                      }}
                    />
                  ))}
                </h1>

                {/* Description (optional) */}
                {slide.desc && (
                  <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-lg">
                    {slide.desc}
                  </p>
                )}

                {/* Features */}
                <div className="flex flex-col items-start gap-2.5">
                  {slide.features.map((row, ri) => (
                    <div key={ri} className="flex items-center gap-6 flex-wrap">
                      {row.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-blue-600/20 shrink-0">
                            <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
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

                {/* CTA */}
                <div className="flex flex-col items-start gap-1.5">
                  <Link
                    href="#"
                    className="px-8 py-4 text-base font-bold rounded-lg transition-opacity duration-200 tracking-wide hover:opacity-90"
                    style={{
                      background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
                      color: '#1a0f00',
                      boxShadow: '0 8px 32px rgba(212,168,67,0.55)',
                    }}
                  >
                    Register Now
                  </Link>
                  <span className="text-xs text-white/30 font-medium tracking-wide">*Limited-Time Offer</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stat Cards */}
        <div className={`hero-item ${r} shrink-0 pb-8`}
          style={{ '--hero-delay': '860ms' } as React.CSSProperties}>
          <StatCards />
        </div>
      </div>
    </section>
  )
}
