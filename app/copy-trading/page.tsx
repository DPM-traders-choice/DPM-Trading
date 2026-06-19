'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const TABS = {
  followers: {
    label: 'For Followers',
    heading: 'For Followers',
    sub: 'Get started today in 3 easy steps',
    steps: [
      {
        n: '1',
        title: 'Sign Up',
        body: (
          <><strong>Register a BBS Markets Account</strong> and open any MT5 Trading Account</>
        ),
      },
      {
        n: '2',
        title: 'Register as a Follower',
        body: (
          <>Visit the <strong>User Portal</strong> and register as a <strong>Follower</strong></>
        ),
      },
      {
        n: '3',
        title: 'Start Copying',
        body: (
          <>Choose to copy a Provider found at our <strong>Ratings Page Here</strong></>
        ),
      },
    ],
  },
  provider: {
    label: 'For Provider',
    heading: 'For Providers',
    sub: 'Get started in just 3 simple steps',
    steps: [
      {
        n: '1',
        title: 'Sign Up',
        body: (
          <><strong>Register a BBS Markets Account</strong> and open any MT5 Trading Account</>
        ),
      },
      {
        n: '2',
        title: 'Fund Your Account',
        body: <>Make a minimum deposit of $1,000 to activate your account.</>,
      },
      {
        n: '3',
        title: 'Become a Provider',
        body: (
          <>Visit the <strong>User Portal</strong> and register as a <strong>Provider</strong></>
        ),
      },
    ],
  },
}

function HowItWorksBanner() {
  const [active, setActive] = useState<'followers' | 'provider'>('followers')
  const tab = TABS[active]

  return (
    <section
      className="relative px-6 md:px-12 py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #080f1f 0%, #0c1a38 100%)',
        borderBottomLeftRadius: '5rem',
        borderBottomRightRadius: '5rem',
      }}
    >
      {/* Decorative image — bottom right */}
      <div className="absolute bottom-0 right-0 w-48 md:w-64 lg:w-80 pointer-events-none select-none">
        <Image
          src="/copyTrading/card-3-428w.webp"
          alt=""
          width={428}
          height={428}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">

        {/* Tab switcher */}
        <div
          className="flex items-center p-1.5 rounded-full gap-1"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          {(['followers', 'provider'] as const).map(key => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={
                active === key
                  ? { background: '#1d4ed8', color: '#fff', boxShadow: '0 2px 12px rgba(29,78,216,0.5)' }
                  : { color: '#93c5fd', background: 'transparent' }
              }
            >
              {TABS[key].label}
            </button>
          ))}
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-3">
          <h2
            className="text-3xl text-white font-bold text-center md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            For <span style={{ color: '#60a5fa' }}>{active === 'followers' ? 'Followers' : 'Providers'}</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg">{tab.sub}</p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {tab.steps.map((step, i) => (
            <div
              key={step.n}
              className="step-card ct-reveal relative flex flex-col items-center text-center gap-5 rounded-3xl px-8 overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(16px)',
                height: '274px',
                justifyContent: 'center',
                ['--d' as string]: `${i * 120}ms`,
              }}
            >
              {/* Background glow behind badge */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top, rgba(59,130,246,0.18) 0%, transparent 70%)' }}
              />

              {/* Number badge */}
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl font-black"
                style={{
                  background: 'linear-gradient(145deg, #3b82f6 0%, #2563eb 100%)',
                  boxShadow: '0 8px 24px rgba(37,99,235,0.55), inset 0 1px 0 rgba(255,255,255,0.30)',
                }}
              >
                {step.n}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3
                  className="font-bold text-2xl text-white"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
              </div>

              {/* Bottom edge glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }}
              />
            </div>
          ))}
        </div>

        <style>{`
          .step-card {
            transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease, border-color 0.4s ease;
          }
          .step-card:hover {
            transform: translateY(-6px);
            border-color: rgba(59,130,246,0.3);
            box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.15);
          }
          @media (prefers-reduced-motion: reduce) {
            .step-card { transition: none; }
          }
        `}</style>

        {/* CTA */}
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-xl px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}
        >
          Click Here For In Depth Walkthrough
        </a>

      </div>
    </section>
  )
}

export default function CopyTradingPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.ct-reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('ct-visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="bg-white min-h-screen overflow-hidden">

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
              DPM Markets
            </p>

            <h1
              className="banner-item py-3 md:pb-5 lg:pt-4 lg:pb-6 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-left xl:text-6xl xl:rtl:text-right text-[#101829] line-height-headings-override"
              style={{
                fontFamily: 'var(--font-inter)',
                ['--i' as string]: 1,
              }}
            >
              Trade Like the Professionals,<br />Or Become One
            </h1>

            <p
              className="banner-item text-base lg:gap-4 lg:text-lg xl:gap-5 text-gray-500 pb-6 lg:pb-8 max-w-lg"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              Welcome to Social Trading, where trading becomes collaborative.
              Our platform allows experienced traders to share their strategies and earn
              performance fees, while investors can automatically copy trades from successful
              traders in real time.
            </p>

            <div
              className="banner-item"
              style={{ '--i': 3 } as React.CSSProperties}
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-[#101829] text-white hover:bg-[#1a2540] transition-colors duration-300 px-7 py-3.5 text-base font-semibold"
              >
                Sign Up Now
              </Link>
            </div>
          </div>

          {/* Right — hero image */}
          <div
            className="banner-item flex items-center justify-center lg:justify-end"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            <Image
              src="/copyTrading/copy-trading-hero-623w.webp"
              alt="Copy Trading"
              width={623}
              height={623}
              className="w-full max-w-xs md:max-w-sm lg:max-w-lg h-auto object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* ── How It Works Banner ── */}
      <HowItWorksBanner />

      {/* ── Advanced Copy Trading Settings ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div
            className="ct-reveal flex flex-col gap-6"
            style={{ ['--d' as string]: '0ms' }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#0f1e3c]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Advanced Copy Trading Settings
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              BBS Market&apos;s Copy Trading system offers Followers complete flexibility to customize their
              strategy, manage risk levels, and choose their preferred copying style. Whether you are following
              trading signals or adjusting risk exposure, BBS Market allows you to fine-tune every setting to
              match your objectives.
            </p>
          </div>

          {/* Right — bullet list */}
          <div className="flex flex-col gap-4">
            {[
              'Copying modes available by equity, margin, or multiplier.',
              'Proportional copying for balanced risk management.',
              'Built-in tools to help reduce overexposure.',
              'Settings designed to suit traders of any skill level.',
            ].map((item, i) => (
              <div
                key={i}
                className="ct-reveal flex items-start gap-4 rounded-2xl px-6 py-5"
                style={{
                  background: '#F0F4F9',
                  border: '1px solid #e2e8f0',
                  ['--d' as string]: `${i * 100}ms`,
                }}
              >
                <span
                  className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)', boxShadow: '0 2px 8px rgba(37,99,235,0.35)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="text-[#0f1e3c] font-medium text-base leading-relaxed">{item}</p>
              </div>
            ))}
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

        /* Scroll reveal */
        .ct-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms);
        }
        .ct-reveal.ct-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .ct-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </main>
  )
}
