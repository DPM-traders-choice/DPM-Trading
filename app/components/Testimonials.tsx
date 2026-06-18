'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const TESTIMONIALS = [
  {
    text: 'Trading crypto on DPM is seamless and secure. The platform is fast, easy to use, and supports smooth order execution even during high volatility. I feel confident managing my crypto trades here.',
    name: 'Daniel R',
    role: 'Crypto Trader',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    text: 'DPM has completely changed the way I trade. Their platform is smooth, fast, and reliable, even during high-volatility market hours. Customer support is responsive and genuinely helpful, which gives me confidence as a trader.',
    name: 'Rahul S',
    role: 'Active Trader',
    avatar: 'https://i.pravatar.cc/80?img=52',
  },
  {
    text: 'The leverage options and tight spreads at DPM give me a real edge. Withdrawals are instant and I never worry about my funds. Best brokerage I have used in five years of trading.',
    name: 'Mei L',
    role: 'Forex Trader',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    text: 'I switched to DPM six months ago and have not looked back. The swap-free account and fast execution make it perfect for my trading style. Highly recommended for serious traders.',
    name: 'Ahmed K',
    role: 'Swing Trader',
    avatar: 'https://i.pravatar.cc/80?img=57',
  },
  {
    text: 'DPM offers one of the best trading environments I have experienced. The charting tools are powerful, execution is lightning fast, and the support team is always available when I need them.',
    name: 'Sofia M',
    role: 'Day Trader',
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    text: 'What sets DPM apart is the transparency. No hidden fees, no requotes. I can trust my trades go through at the price I see. That kind of reliability is rare in this industry.',
    name: 'James T',
    role: 'Futures Trader',
    avatar: 'https://i.pravatar.cc/80?img=15',
  },
  {
    text: 'The DPM mobile app is outstanding. I manage my entire portfolio on the go without missing a beat. The interface is clean, intuitive, and just as powerful as the desktop platform.',
    name: 'Priya N',
    role: 'Options Trader',
    avatar: 'https://i.pravatar.cc/80?img=44',
  },
]

export default function Testimonials() {
  const outerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const visibleRef = useRef(false)
  const reducedMotion = useRef(false)

  // Entrance fade-in
  useEffect(() => {
    const el = stickyRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visibleRef.current) {
          visibleRef.current = true
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Sticky horizontal scroll
  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const outer = outerRef.current
    const sticky = stickyRef.current
    const track = trackRef.current
    if (!outer || !sticky || !track) return

    let maxOffset = 0
    let raf: number | null = null
    // Header (h-22 = 88px) + AnnouncementBar (34px)
    const NAV_H = 122

    const setup = () => {
      if (reducedMotion.current) return
      // Align card strip left edge with max-w-7xl mx-auto container
      const px = window.innerWidth < 768 ? 24 : 48
      const containerLeft = Math.max(px, (window.innerWidth - 1280) / 2 + px)
      track.style.paddingLeft = `${containerLeft}px`
      track.style.paddingRight = `${containerLeft}px`

      const sectionH = window.innerHeight - NAV_H
      maxOffset = track.scrollWidth - window.innerWidth
      if (maxOffset < 0) maxOffset = 0
      outer.style.minHeight = `${sectionH + maxOffset}px`
    }

    const tick = () => {
      raf = null
      if (reducedMotion.current || maxOffset <= 0) return
      const sectionH = window.innerHeight - NAV_H
      const top = outer.getBoundingClientRect().top
      const scrolled = NAV_H - top
      const scrollable = outer.offsetHeight - sectionH
      const progress = Math.max(0, Math.min(1, scrolled / scrollable))
      track.style.transform = `translateX(${-progress * maxOffset}px)`
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(tick)
    }

    setup()
    // Recompute after fonts/images settle
    const t = setTimeout(setup, 300)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', setup)

    return () => {
      clearTimeout(t)
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', setup)
    }
  }, [])

  return (
    // Outer: tall enough to store scroll progress equal to horizontal card travel
    <div ref={outerRef} className="relative bg-white">
      {/* Sticky viewport-height panel */}
      <section
        ref={stickyRef}
        className="sticky top-30.5 h-[calc(100vh-122px)] overflow-hidden bg-white flex flex-col"
        style={{
          opacity: 0,
          transform: 'translateY(40px)',
          transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
        }}
      >

        {/* Header */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-10 pb-6 shrink-0">
          <h2
            className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(160deg, #020202 0%, #080808 15%, #0f0f0f 28%, #1c1c1c 42%, #3a3a3a 52%, #111111 64%, #050505 78%, #080808 90%, #020202 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Trusted By Traders<br />Globally
          </h2>
          <p className="text-sm md:text-base font-semibold text-slate-500 max-w-lg leading-relaxed">
            Real experiences from clients who rely on DPM for fast
            execution, secure trading, and expert market insights.
          </p>
        </div>

        {/* Horizontal card strip */}
        <div className="flex-1 flex items-center overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-5 will-change-transform"
            style={{ transition: 'none' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="shrink-0 w-[85vw] md:w-125 relative rounded-3xl p-10 md:p-12 flex flex-col justify-between gap-10"
                style={{
                  background: 'linear-gradient(135deg, #eef4ff 0%, #e8f0fe 100%)',
                  minHeight: '360px',
                }}
              >
                {/* Quote text */}
                <p className="text-slate-500 font-normal text-base md:text-lg lg:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {t.text}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 ring-2 ring-white">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-800">{t.name}</p>
                      <p className="text-sm text-slate-400 font-medium">{t.role}</p>
                    </div>
                  </div>

                  <svg width="48" height="38" viewBox="0 0 36 28" fill="none" aria-hidden="true">
                    <path
                      d="M0 28V17.6C0 12.267 1.333 8.133 4 5.2 6.667 2.267 10.533 0.533 15.6 0L17.2 3.6C14.267 4.267 12.067 5.6 10.6 7.6 9.133 9.533 8.467 11.8 8.6 14.4H15.6V28H0ZM20 28V17.6C20 12.267 21.333 8.133 24 5.2 26.667 2.267 30.533 0.533 35.6 0L37.2 3.6C34.267 4.267 32.067 5.6 30.6 7.6 29.133 9.533 28.467 11.8 28.6 14.4H35.6V28H20Z"
                      fill="#f97316"
                      fillOpacity="0.35"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}
