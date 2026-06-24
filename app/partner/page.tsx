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
          paddingBottom: '140px',
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
            className="banner-item text-4xl md:text-5xl lg:text-6xl font-black leading-normal tracking-tight max-w-3xl"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ['--i' as string]: 1,
            }}
          >
            Join our Partnership Program today
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

      {/* ── Partner With DPM ── */}
      <section className="relative z-10 -mt-20 pb-24 md:pb-32 px-6 md:px-12" style={{ background: 'transparent' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">

          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {[
              {
                n: '1', title: 'Sign Up', body: 'Complete the quick partner registration form.',
                bg: 'linear-gradient(135deg, #1535a0 0%, #0d1b5e 100%)',
                glow: 'rgba(59,130,246,0.3)',
                numColor: 'rgba(255,255,255,0.15)',
              },
              {
                n: '2', title: 'Get Approved', body: 'Our team reviews and activates your application.',
                bg: 'linear-gradient(135deg, #0d3b4d 0%, #082535 100%)',
                glow: 'rgba(16,185,129,0.3)',
                numColor: 'rgba(255,255,255,0.15)',
              },
              {
                n: '3', title: 'Start Earning', body: 'Refer clients and earn competitive commissions.',
                bg: 'linear-gradient(135deg, #2d1b69 0%, #1a0f40 100%)',
                glow: 'rgba(139,92,246,0.3)',
                numColor: 'rgba(255,255,255,0.15)',
              },
            ].map((step, i) => (
              <div
                key={step.n}
                className="pp-reveal relative flex flex-col items-center text-center gap-5 rounded-2xl px-8 py-10 overflow-hidden"
                style={{
                  background: step.bg,
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: `0 8px 32px rgba(0,0,0,0.2)`,
                  ['--d' as string]: `${i * 100}ms`,
                }}
              >
                {/* SVG diagonal lines pattern */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
                  <defs>
                    <pattern id={`pp-pat-${i}`} width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="28" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#pp-pat-${i})`} fillOpacity="0.05"/>
                </svg>

                {/* Bottom corner glow */}
                <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none rounded-full"
                  style={{ background: `radial-gradient(circle at bottom right, ${step.glow} 0%, transparent 70%)` }} />

                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }} />

                {/* Number */}
                <span
                  className="relative text-7xl font-black leading-none"
                  style={{
                    fontFamily: 'Georgia, serif',
                    background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.35) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.n}
                </span>

                <h3 className="relative font-bold text-xl text-white">{step.title}</h3>
                <p className="relative text-white/55 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center text-center gap-4">
            <h2
              className="pp-reveal text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-[#0f1e3c]"
              style={{ fontFamily: 'var(--font-inter)', ['--d' as string]: '300ms' }}
            >
              Partner With<br />DPM In Just Minutes
            </h2>
            <p
              className="pp-reveal text-base md:text-lg text-slate-500 max-w-xl leading-relaxed"
              style={{ ['--d' as string]: '400ms' }}
            >
              Sign up easily and start earning by partnering with DPM Markets in just a few minutes.
            </p>
          </div>

        </div>
      </section>

      {/* ── Key Benefits ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#F0F4F9' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
            <p
              className="pp-reveal text-sm font-bold tracking-[0.18em] uppercase text-blue-600"
              style={{ ['--d' as string]: '0ms' }}
            >
              Partner Program
            </p>
            <h2
              className="pp-reveal text-gray-900 text-3xl lg:text-4xl font-bold mb-5"
              style={{ ['--d' as string]: '80ms' }}
            >
              Key Benefits of Our Partner Program
            </h2>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full">
            {[
              {
                title: 'Flexible Remuneration',
                body: 'Reach out to us to discuss various options available to you based on your business model.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                ),
              },
              {
                title: 'Instant Remuneration',
                body: 'Receive your remuneration within 10 minutes and instantly withdrawable.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                ),
              },
              {
                title: 'Instant Withdrawal Methods',
                body: 'Instantly withdraw from a number of payment providers.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
                  </svg>
                ),
              },
              {
                title: 'Revenue Friendly',
                body: 'Reach out to us to discuss various options available to you. Bespoke revenues per partner.',
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                  </svg>
                ),
              },
            ].map((b, i) => (
              <div
                key={b.title}
                className="pp-reveal flex items-start gap-4"
                style={{ ['--d' as string]: `${i * 100}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-slate-500"
                  style={{ background: '#fff', border: '1px solid #e2e8f0' }}
                >
                  {b.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="mb-2 text-gray-900 text-lg xl:text-xl font-semibold">{b.title}</h3>
                  <p className="text-gray-600 text-base font-normal">{b.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/register"
            className="pp-reveal inline-flex items-center justify-center rounded-xl px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:opacity-85"
            style={{
              background: '#101829',
              ['--d' as string]: '400ms',
            }}
          >
            Become a Partner
          </a>

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
