'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import MarketOverviewWidget from '@/app/components/MarketOverviewWidget'

const INSTRUMENTS = [
  {
    label: 'Currency Pairs',
    title: 'Forex',
    dir: 'from-left',
    description: 'Trade hundreds of currency pairs via contracts for difference (CFDs). From Majors to Minors to Exotics.',
    dark: false,
    bg: '#FFFFFF',
    glow: '',
    image: '/instruments/forex.png',
    imageSize: 'w-56 h-56',
    patternId: 'inst-p-fx',
    span: 'col-span-1',
  },
  {
    label: 'Fast Execution',
    title: 'Commodities',
    dir: 'from-right',
    description: 'A number of commodities are available including Gold, Oil and Natural Gas. Take advantage of both upward and downward moving prices.',
    dark: true,
    bg: 'linear-gradient(135deg, #1535a0 0%, #0d1b5e 60%, #0a1440 100%)',
    glow: 'radial-gradient(ellipse at bottom right, rgba(99,130,246,0.4) 0%, transparent 65%)',
    image: '/instruments/rocket.png',
    imageSize: 'w-56 h-56',
    patternId: 'inst-p-cm',
    span: 'col-span-1 md:col-span-2',
  },
  {
    label: 'Silver · Gold',
    title: 'Metals',
    dir: 'from-left',
    description: 'Diversify your Portfolio by using safe haven instruments such as metals, including Silver and Gold. Commonly steady at times of uncertainty.',
    dark: true,
    bg: 'linear-gradient(135deg, #0d3b4d 0%, #082535 100%)',
    glow: 'radial-gradient(ellipse at bottom right, rgba(16,185,129,0.25) 0%, transparent 65%)',
    image: '/instruments/gold.png',
    imageSize: 'w-56 h-56',
    patternId: 'inst-p-mt',
    span: 'col-span-1 md:col-span-2',
  },
  {
    label: 'NASDAQ · DOW · S&P',
    title: 'Indices',
    dir: 'from-right',
    description: 'Invest in a collective set of companies via Indices trading including NASDAQ, DOW Jones, S&P 500 and many more.',
    dark: false,
    bg: '#F5F6F9',
    glow: '',
    image: '/instruments/s&p.png',
    imageSize: 'w-56 h-56',
    patternId: 'inst-p-ix',
    span: 'col-span-1',
  },
  {
    label: 'Digital Assets',
    title: 'CFDs Crypto',
    dir: 'from-bottom',
    description: 'Crypto Currencies have been with us for more than a decade and are as popular as ever. Trade the most commonly used Cryptos via DPM.',
    dark: false,
    bg: '#EEF2F8',
    glow: '',
    image: '/instruments/crypto.png',
    imageSize: 'w-56 h-56',
    patternId: 'inst-p-cr',
    span: 'col-span-1 md:col-span-3',
  },
]

export default function InstrumentsPage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.inst-card')
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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-white">

      {/* ── Hero banner ── */}
      <section
        className="px-6 md:px-12 pb-56 flex items-center"
        style={{
          background: '#EEF2F8',
          paddingTop: '160px',
          minHeight: '85svh',
          borderBottomLeftRadius: '4rem',
          borderBottomRightRadius: '4rem',
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-6">

          <p className="banner-item text-base md:text-lg font-bold tracking-[0.18em] uppercase text-blue-500" style={{ '--i': 0 } as React.CSSProperties}>
            DPM
          </p>

          <h2
            className="banner-item text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight max-w-3xl"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ['--i' as string]: 1,
            }}
          >
            Trade Smart Trade More
          </h2>

          <p className="banner-item text-base md:text-lg text-slate-500 font-normal max-w-2xl leading-relaxed" style={{ '--i': 2 } as React.CSSProperties}>
            Over 300 Instruments available through multiple platforms! See below a list of Securities
            containing the most sought after instruments by our Clientele.
          </p>

          <Link
            href="https://my.dpmtrade.com/register/"
              target="_blank"
              rel="noopener noreferrer"
            className="banner-item mt-2 group relative flex gap-2 w-fit overflow-hidden cursor-pointer transition-colors duration-300 text-center justify-center items-center rounded-lg focus:outline-none border-solid focus:ring-4 border bg-[#101829] border-[#101829] text-white focus:ring-gray-800 hover:bg-[#1a2540] px-4 py-3 text-base lg:text-lg font-medium"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            Open an Account
          </Link>

        </div>
      </section>

      {/* ── Bento grid ── */}
      <section ref={sectionRef} className="-mt-48 relative z-10 pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {INSTRUMENTS.map((item, i) => (
              <div
                key={i}
                className={`inst-card ${item.dir} ${item.span} relative rounded-4xl overflow-hidden p-10 flex flex-col justify-between`}
                style={{ background: item.bg, ['--inst-delay' as string]: `${i * 100}ms`, minHeight: '350px' }}
              >
                {/* SVG pattern (dark cards only) */}
                {item.dark && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                    <defs>
                      <pattern id={item.patternId} width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="28" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#${item.patternId})`} fillOpacity="0.05"/>
                  </svg>
                )}

                {/* Glow (dark cards only) */}
                {item.dark && item.glow && (
                  <div className="inst-glow absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
                    style={{ background: item.glow }} />
                )}

                {/* Card image */}
                {item.image && (
                  <div className={`absolute bottom-0 right-0 pointer-events-none ${item.imageSize ?? 'w-56 h-56'}`}>
                    <div className="inst-img-inner w-full h-full" style={{ transformOrigin: 'bottom right' }}>
                      <Image src={item.image} alt={item.title} fill className="object-contain object-bottom" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative flex flex-col gap-5 max-w-[70%]">
                  <p className={`text-xs font-semibold tracking-widest uppercase ${item.dark ? 'text-blue-300' : 'text-blue-500'}`}>
                    {item.label}
                  </p>
                  <h3
                    className={`font-bold text-3xl xl:text-4xl leading-[1.15] tracking-tight ${
                      item.dark
                        ? 'inline-block bg-clip-text text-transparent bg-linear-to-b from-5% from-white to-90% to-gray-300'
                        : 'text-[#101829]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={`text-sm font-medium leading-relaxed ${item.dark ? 'text-white/55' : 'text-slate-500'}`}>
                    {item.description}
                  </p>
                </div>


              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TradingView Market Overview ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight max-w-3xl" style={{ fontFamily: 'var(--font-inter)', color: '#101829' }}>
              Trade Global Markets with{' '}
              <span style={{ color: '#1a56db' }}>DPM</span>
            </h2>
            <p className="text-base md:text-lg text-slate-500 font-normal max-w-xl leading-relaxed">
              Access forex, indices, commodities, metals, and cryptocurrencies all from one platform.
            </p>
          </div>

          {/* Widget */}
          <div className="rounded-3xl overflow-hidden">
            <MarketOverviewWidget />
          </div>

        </div>
      </section>

      <style>{`
        /* Banner entrance */
        @keyframes bannerFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .banner-item {
          opacity: 0;
          animation: bannerFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: calc(var(--i) * 120ms + 100ms);
        }

        /* Entrance */
        .inst-card {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.9s cubic-bezier(0.22,1,0.36,1) var(--inst-delay, 0ms),
            transform 0.9s cubic-bezier(0.22,1,0.36,1) var(--inst-delay, 0ms),
            box-shadow 0.4s ease;
        }
        .inst-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover */
        .inst-card:hover {
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
        }

        /* Glow */
        .inst-glow {
          transition: opacity 0.6s ease;
        }
        .inst-card:hover .inst-glow {
          opacity: 1.3;
        }

        /* Image — gentle float */
        .inst-img-inner {
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .inst-card:hover .inst-img-inner {
          transform: translateY(-6px);
        }
      `}</style>

    </main>
  )
}
