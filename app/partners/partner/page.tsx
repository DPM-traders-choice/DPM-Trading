'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function PartnerPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.pp-reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('pp-visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="bg-white overflow-hidden">

      {/* ── Hero Banner ── */}
      <section
        className="px-6 md:px-12 flex items-center"
        style={{
          background: '#ffffff',
          paddingTop: '160px',
          paddingBottom: '80px',
          minHeight: '80svh',
          borderBottomLeftRadius: '4rem',
          borderBottomRightRadius: '4rem',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-6">

          <p
            className="banner-item text-sm font-bold tracking-[0.18em] uppercase text-blue-500"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            DPM Markets
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
            Join our Partnership<br />Program today
          </h1>

          <p
            className="banner-item text-base md:text-lg text-slate-500 font-normal max-w-2xl leading-relaxed"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            The DPM Markets Partner program is designed to suit all partner types. If you want to earn
            a guaranteed income by attracting (be it online or offline) potential clients (or partners)
            to DPM Markets simply register below and our experienced Business Developers will reach out
            to assist you in maximizing your partnership potential.
          </p>

          <p
            className="banner-item text-base md:text-lg text-slate-500 font-normal max-w-2xl leading-relaxed"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            Whether you are an individual or a business, the DPM Markets Partner Program offers
            flexible models, competitive rewards, and full support. Join our global partner network
            and start building a long-term income.
          </p>

          <div
            className="banner-item flex flex-wrap items-center justify-center gap-3 mt-2"
            style={{ '--i': 4 } as React.CSSProperties}
          >
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-lg bg-[#101829] text-white hover:bg-[#1a2540] transition-colors duration-300 px-7 py-3.5 text-base font-semibold"
            >
              Become a Partner
            </Link>
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
        .pp-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms),
                      transform 0.9s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms);
        }
        .pp-reveal.pp-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-item { animation: none; opacity: 1; }
          .pp-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

    </main>
  )
}
