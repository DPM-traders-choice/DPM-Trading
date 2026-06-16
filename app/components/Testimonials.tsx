'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    text: 'Trading crypto on BBS Markets is seamless and secure. The platform is fast, easy to use, and supports smooth order execution even during high volatility. I feel confident managing my crypto trades here.',
    name: 'Daniel R',
    role: 'Crypto Trader',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    text: 'BBS Markets has completely changed the way I trade. Their platform is smooth, fast, and reliable, even during high-volatility market hours. Customer support is responsive and genuinely helpful, which gives me confidence as a trader.',
    name: 'Rahul S',
    role: 'Active Trader',
    avatar: 'https://i.pravatar.cc/80?img=52',
  },
  {
    text: 'The leverage options and tight spreads at BBS Markets give me a real edge. Withdrawals are instant and I never worry about my funds. Best brokerage I have used in five years of trading.',
    name: 'Mei L',
    role: 'Forex Trader',
    avatar: 'https://i.pravatar.cc/80?img=47',
  },
  {
    text: 'I switched to BBS Markets six months ago and have not looked back. The swap-free account and fast execution make it perfect for my trading style. Highly recommended for serious traders.',
    name: 'Ahmed K',
    role: 'Swing Trader',
    avatar: 'https://i.pravatar.cc/80?img=57',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  const total = TESTIMONIALS.length
  const perPage = 2

  function go(dir: 'next' | 'prev') {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setIndex(i =>
        dir === 'next'
          ? (i + perPage) % total
          : (i - perPage + total) % total
      )
      setAnimating(false)
    }, 320)
  }

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pair = [
    TESTIMONIALS[index % total],
    TESTIMONIALS[(index + 1) % total],
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-white py-14 md:py-20"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(40px)',
        transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-14">

        {/* Header row */}
        <div className="flex items-start justify-between gap-6 mb-10">

          {/* Title + subtitle */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(20px)',
              transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 200ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 200ms',
            }}
          >
            <h2
              className="text-4xl md:text-5xl font-black leading-[1.15] tracking-tight mb-4"
              style={{
                background: 'linear-gradient(180deg, #0f172a 0%, #334155 35%, #64748b 55%, #334155 75%, #0f172a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Trusted By Traders<br />Globally
            </h2>
            <p className="text-sm md:text-base font-semibold text-slate-600 max-w-lg leading-relaxed">
              Real experiences from clients who rely on BBS Markets for fast
              execution, secure trading, and expert market insights.
            </p>
          </div>

          {/* Nav arrows */}
          <div
            className="flex items-center gap-3 shrink-0 mt-2"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.8s ease 500ms',
            }}
          >
            <button
              onClick={() => go('prev')}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              onClick={() => go('next')}
              aria-label="Next"
              className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-200"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${direction === 'next' ? '-20px' : '20px'})`
              : 'none',
            transition: 'opacity 0.28s ease, transform 0.28s ease',
          }}
        >
          {pair.map((t, i) => (
            <div
              key={`${index}-${i}`}
              className="relative rounded-3xl p-10 md:p-12 flex flex-col justify-between gap-12 min-h-72"
              style={{
                background: 'linear-gradient(135deg, #eef4ff 0%, #e8f0fe 100%)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(24px)',
                transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${400 + i * 120}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${400 + i * 120}ms`,
              }}
            >
              {/* Quote text */}
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
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

                {/* Quote icon */}
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

        {/* Dot indicators */}
        <div
          className="flex justify-center gap-2 mt-8"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 700ms',
          }}
        >
          {Array.from({ length: total / perPage }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index / perPage ? 'next' : 'prev'); setIndex(i * perPage) }}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === Math.floor(index / perPage) ? '24px' : '8px',
                height: '8px',
                background: i === Math.floor(index / perPage) ? '#2563eb' : '#cbd5e1',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
