'use client'

import Link from 'next/link'
import EconomicCalendarWidget from '@/app/components/EconomicCalendarWidget'

export default function CalendarPage() {
  return (
    <main className="bg-white">

      {/* ── Hero banner ── */}
      <section
        className="px-6 md:px-12 pb-20 flex items-center"
        style={{
          background: '#EEF2F8',
          paddingTop: '160px',
          minHeight: '55svh',
          borderBottomLeftRadius: '4rem',
          borderBottomRightRadius: '4rem',
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-6">

          <p
            className="banner-item text-sm font-bold tracking-[0.18em] uppercase text-blue-500"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            DPM
          </p>

          <h1
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
            Economic Calendar
          </h1>

          <p
            className="banner-item text-base md:text-lg text-slate-500 font-normal max-w-2xl leading-relaxed"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            Track market-moving announcements, important data releases, and global economic indicators
            to help you plan trades more effectively and stay ahead of market volatility.
          </p>

          <p
            className="banner-item text-sm md:text-base text-slate-400 font-normal max-w-xl leading-relaxed"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            Register today and stay up to date with key economic events through your personalized members area.
          </p>

          <Link
            href="https://my.dpmtrade.com/register/"
              target="_blank"
              rel="noopener noreferrer"
            className="banner-item mt-2 group relative flex gap-2 w-fit overflow-hidden cursor-pointer transition-colors duration-300 text-center justify-center items-center rounded-lg focus:outline-none border-solid focus:ring-4 border bg-[#101829] border-[#101829] text-white focus:ring-gray-800 hover:bg-[#1a2540] px-6 py-3 text-base lg:text-lg font-medium"
            style={{ '--i': 4 } as React.CSSProperties}
          >
            Sign up now
          </Link>

        </div>
      </section>

      {/* ── Economic Calendar Widget ── */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden">
            <EconomicCalendarWidget />
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
          animation-delay: calc(var(--i) * 120ms + 100ms);
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-item { animation: none; opacity: 1; }
        }
      `}</style>

    </main>
  )
}
