'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import StatCards from './StatCards'
import SplitText from './SplitText'

const SLIDES = [
  {
    trust: 'Industry-Leading Trading Technology',
    headline: ['World Leading MT5', 'Trading Platform!'],
    cta: 'Learn More',
    desc: 'MetaTrader 5 delivers lightning-fast execution, intuitive navigation, and advanced charting tools, making it ideal for traders of all experience levels.',
    features: [
      ['Available on WebTrader, iOS, Android and Desktop'],
      ['Trade Stocks as they should be traded'],
    ],
  },
  {
    trust: 'Trusted by over 20 Million Traders',
    headline: ['Top Tier Brokerage', 'Conditions'],
    cta: 'Register Now',
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
    cta: 'Learn More',
    desc: 'Trade with confidence in a powerful environment featuring seamless execution, advanced tools, and flexible conditions built for every trader and spanning a wide selection of global markets below.',
    features: [
      ['Forex', 'Futures', 'Shares'],
      ['Cryptos', 'Metals', 'Indices'],
    ],
  },
  {
    trust: 'Exclusive Offer for New Traders',
    headline: ['Start Your Trading Journey', 'With A Bonus From Us!'],
    cta: 'Learn More',
    desc: null,
    features: [
      ['20% Welcome Bonus'],
      ['All profits may be withdrawn'],
      ['Claim up to $500'],
    ],
  },
]

const EXIT_MS = 700

export default function HeroSection() {
  const [ready, setReady]           = useState(false)
  const [current, setCurrent]       = useState(0)
  const [slideClass, setSlideClass] = useState('hero-slide-enter')
  const transitioning               = useRef(false)
  const timerRef                    = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let done = false
    const trigger = () => { if (!done) { done = true; setReady(true) } }
    window.addEventListener('hero:ready', trigger)
    const fallback = setTimeout(trigger, 2700)
    return () => { window.removeEventListener('hero:ready', trigger); clearTimeout(fallback) }
  }, [])

  const go = useCallback((dir: 'prev' | 'next') => {
    if (transitioning.current) return
    transitioning.current = true
    setSlideClass('hero-slide-exit')
    timerRef.current = setTimeout(() => {
      setCurrent(c => dir === 'next'
        ? (c + 1) % SLIDES.length
        : (c - 1 + SLIDES.length) % SLIDES.length
      )
      setSlideClass('hero-slide-enter')
      transitioning.current = false
    }, EXIT_MS)
  }, [])

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  const r     = ready ? 'is-ready' : ''
  const slide = SLIDES[current]

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B111E]"
      style={{ borderBottomLeftRadius: '5rem', borderBottomRightRadius: '5rem' }}
    >
      {/* Background chart image — centered, faded edges */}
      <div className={`hero-bg ${r} absolute inset-0 overflow-hidden`}>
        {/* Chart image: positioned right-center, moderate size */}
        <div
          className="absolute"
          style={{
            right: '-23%',
            top: '44%',
            transform: 'translateY(-50%)',
            width: 'clamp(1100px, 120vw, 1800px)',
            height: 'clamp(780px, 105vh, 1300px)',
          }}
        >
          <Image
            src="/homeBackground.png"
            alt="Hero background"
            fill
            priority
            quality={90}
            sizes="55vw"
            className="object-contain object-center"
            style={{ opacity: 0.7 }}
          />
          {/* Radial vignette — fades all 4 edges, keeps center sharp */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 65% at 50% 50%,
                transparent 30%,
                rgba(11,17,30,0.55) 60%,
                rgba(11,17,30,0.92) 80%,
                #0B111E 100%
              )`,
            }}
          />
        </div>
      </div>

      {/* Global dark overlay */}
      <div className="absolute inset-0 bg-[#0B111E]/30" />
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#0B111E] to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-[#0B111E] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="shrink-0 pt-36" />

        <div className="flex-1 flex flex-col justify-center pt-4 pb-24">
          <div className="max-w-345 mx-auto w-full px-6 md:px-12">

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
                <h1 className="hero-chrome-text tracking-tight leading-[1.2] flex flex-col items-start">
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
                        letterSpacing: '-0.03em',
                        lineHeight: 1.2,
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
                    className="px-6 py-2.5 text-base font-bold rounded-lg transition-opacity duration-200 tracking-wide hover:opacity-90"
                    style={{
                      background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
                      color: '#1a0f00',
                      boxShadow: '0 8px 32px rgba(212,168,67,0.55)',
                    }}
                  >
                    {slide.cta}
                  </Link>
                  <span className="text-xs text-white/30 font-medium tracking-wide">*Limited-Time Offer</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Chevron navigation */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-20"
          style={{ top: '50%', transform: 'translateY(-50%)', height: '0' }}>
          <button
            onClick={() => go('prev')}
            aria-label="Previous slide"
            className="pointer-events-auto ml-4 md:ml-8 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.13)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
          >
            <ChevronLeft size={20} className="text-white/70" strokeWidth={2} />
          </button>
          <button
            onClick={() => go('next')}
            aria-label="Next slide"
            className="pointer-events-auto mr-4 md:mr-8 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.13)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
          >
            <ChevronRight size={20} className="text-white/70" strokeWidth={2} />
          </button>
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
