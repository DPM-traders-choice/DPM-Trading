'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutDPMPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 pt-36 pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — text */}
          <div className="flex-1 flex flex-col gap-6">

            <p className="of-item text-sm font-bold tracking-[0.18em] uppercase text-blue-500" style={{ '--i': 0 } as React.CSSProperties}>
              About Us
            </p>

            <h1
              className="of-item text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-tight"
              style={{
                '--i': 1,
                background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingBottom: '0.15em',
              } as React.CSSProperties}
            >
              Who is DPM?
            </h1>

            <p
              className="of-item text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              DPM is a turnkey solution for all your CFD trading needs for Retail, Professional and
              Institutional Clients. DPM provides CFD trading via the award winning MetaTrader 5
              trading platforms in instruments ranging from Forex, Commodities, Metals, Stocks and
              Futures.
            </p>

            <p
              className="of-item text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ '--i': 3 } as React.CSSProperties}
            >
              Through its best practises of providing the best possible conditions to clients and
              permitting all trading styles with unrestricted access to its liquidity, DPM has
              positioned itself as the forex broker of choice for traders worldwide.
            </p>

            <p
              className="of-item text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ '--i': 4 } as React.CSSProperties}
            >
              We strive to offer our members the opportunity to become sustainably successful in
              their online trading.
            </p>

            <Link
              href="/register"
              className="of-item w-fit flex items-center justify-center rounded-lg bg-black border border-black text-white hover:bg-gray-900 transition-colors duration-300 px-6 py-3 text-base font-medium"
              style={{ '--i': 5 } as React.CSSProperties}
            >
              Open an Account
            </Link>

          </div>

          {/* Right — image */}
          <div
            className="of-item shrink-0 flex items-center justify-center"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            <Image
              src="/bonus/invest-success-623w.webp"
              alt="DPM Investment Success"
              width={460}
              height={380}
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>

      <style>{`
        @keyframes ofFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .of-item {
          opacity: 0;
          animation: ofFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: calc(var(--i) * 100ms + 60ms);
        }
        @media (prefers-reduced-motion: reduce) {
          .of-item { animation: none; opacity: 1; }
        }
      `}</style>

    </main>
  )
}
