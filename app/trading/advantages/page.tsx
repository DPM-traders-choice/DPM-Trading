'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const CARDS = [
  { icon: '/advantages/calculator.svg', title: 'Commission Free Accounts', body: 'Trade on a Standard Account with $0 commissions!' },
  { icon: '/advantages/rate.svg', title: 'Ultra Low Spreads', body: 'Open an ECN account and experience Ultra Low Spreads.' },
  { icon: '/advantages/stock-market.svg', title: 'Market Execution', body: 'Every order is filled! Get real Market Execution deriving from Tier 1 Liquidity.' },
  { icon: '/advantages/languages.svg', title: 'Multilingual Support', body: 'DPM support in over 15 languages!' },
  { icon: '/advantages/cryptocurrency.svg', title: '300+ Instruments', body: 'Choose from Forex, Commodities, Indices, Futures, Metals and more.' },
  { icon: '/advantages/medal.svg', title: 'MT5 Trading platform', body: 'At DPM we provide the World Leading MT5 trading platform.' },
  { icon: '/advantages/responsive.svg', title: 'Web and Mobile Trading', body: 'Trade with the leading MetaTrader platforms on Desktop, Smartphone or Web.' },
  { icon: '/advantages/payment.svg', title: 'Withdrawals', body: 'Many Withdrawal are processed Instantly and 99% under 2 hours.' },
  { icon: '/advantages/timer.svg', title: 'Leverage up to 1:1000', body: 'Amplify your trading potential by up to 1000 times!' },
  { icon: '/advantages/funding.svg', title: 'Segregation of Client Funds', body: 'Segregation of capital and 3rd party monitoring of funds!' },
]

const FAQS = [
  {
    q: 'What Instruments Can I Trade With DPM?',
    a: 'You can trade 300+ instruments at DPM, including Forex, commodities, indices, futures, metals, and more.',
  },
  {
    q: 'Which Trading Platforms Does DPM Support?',
    a: 'DPM offers the world-leading MetaTrader 5 (MT5) platform, available on desktop, web, and mobile devices.',
  },
  {
    q: 'Does DPM Offer Commission-Free Trading?',
    a: 'Yes. DPM provides commission-free trading on Standard Accounts, allowing you to trade with $0 commissions.',
  },
  {
    q: 'What Spreads Can I Expect At DPM?',
    a: 'DPM offers ultra-low spreads on ECN accounts, giving traders access to highly competitive pricing sourced from Tier 1 liquidity providers.',
  },
  {
    q: 'How Fast Is Trade Execution At DPM?',
    a: 'All trades at DPM are executed using true market execution, with no requotes and no trade rejections.',
  },
  {
    q: 'How Secure Are My Funds With DPM?',
    a: 'Client funds at DPM are fully segregated, with third-party monitoring to ensure transparency and security.',
  },
]

function AdvantageCard({ icon, title, body, index }: { icon: string; title: string; body: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(32px)',
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        minHeight: '280px',
      }}
      className="flex flex-col items-center text-center gap-5 rounded-2xl p-8"
    >
      <Image
        src={icon}
        alt={title}
        width={72}
        height={72}
        className="object-contain"
        style={{ filter: 'brightness(0) saturate(100%) invert(29%) sepia(89%) saturate(1690%) hue-rotate(210deg) brightness(95%) contrast(102%)' }}
      />
      <h3 className="text-base font-bold text-[#0f1e3c]">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed">{body}</p>
    </div>
  )
}

function FaqItem({ faq, index, isOpen, onToggle }: { faq: { q: string; a: string }; index: number; isOpen: boolean; onToggle: () => void }) {
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
          style={{ color: isOpen ? '#f97316' : undefined }}
        >
          <span className={!isOpen ? 'text-[#101829] group-hover:text-blue-600 transition-colors duration-300' : ''}>
            {faq.q}
          </span>
        </span>
        <span
          className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300"
          style={{ borderColor: isOpen ? '#f97316' : '#cbd5e1', color: isOpen ? '#f97316' : '#94a3b8' }}
        >
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              style={{ transition: 'opacity 0.3s', opacity: isOpen ? 0 : 1 }}
            />
            <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        ref={bodyRef}
        style={{ maxHeight: '0px', opacity: 0, overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s cubic-bezier(0.4,0,0.2,1)' }}
      >
        <p className="text-base text-slate-500 leading-relaxed pb-6 pr-4">{faq.a}</p>
      </div>
    </div>
  )
}

export default function AdvantagesPage() {
  const [openFaq, setOpenFaq] = useState<number>(0)

  return (
    <main className="bg-white min-h-screen">

      {/* ── Hero ── */}
      <section
        className="px-6 md:px-12 flex items-center"
        style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100svh' }}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <p
              className="banner-item text-sm font-bold tracking-[0.18em] uppercase text-blue-500"
              style={{ '--i': 0 } as React.CSSProperties}
            >
              DPM
            </p>

            <h1
              className="banner-item text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
              style={{ fontFamily: 'var(--font-inter)', color: '#101829', ['--i' as string]: 1 }}
            >
              Why Traders Choose<br />DPM
            </h1>

            <p
              className="banner-item text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-lg"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              Experience smooth, flexible trading with DPM, featuring tight spreads,
              fast execution, and access to a wide range of instruments on web and mobile platforms.
            </p>

            <div className="banner-item" style={{ '--i': 3 } as React.CSSProperties}>
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-lg bg-[#101829] border border-[#101829] text-white hover:bg-[#1a2540] transition-colors duration-300 px-7 py-3.5 text-base font-semibold"
              >
                Get Full Access
              </Link>
            </div>
          </div>

          {/* Right — 3D illustration */}
          <div className="banner-item flex items-center justify-center" style={{ '--i': 2 } as React.CSSProperties}>
            <Image
              src="/bannerIcons/public/bannerIcons/advantages.webp"
              alt="Trading Advantages"
              width={680}
              height={600}
              className="w-full max-w-lg xl:max-w-xl h-auto object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* ── Advantage Cards ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARDS.map((card, i) => (
              <AdvantageCard key={card.title} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                <span
                  style={{
                    background: 'linear-gradient(90deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Frequently Asked
                </span>
                <br />
                <span className="text-[#101829]">Questions</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed">
                Have questions? Explore our FAQ below or reach out to our support team for help.
              </p>
            </div>

            {/* Accordion */}
            <div className="flex flex-col">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes bannerFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .banner-item {
          opacity: 0;
          animation: bannerFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: calc(var(--i) * 130ms + 100ms);
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-item { animation: none; opacity: 1; }
        }
      `}</style>

    </main>
  )
}
