'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function WelcomeBonusPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.wb-reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('wb-visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="overflow-hidden" style={{ background: '#ffffff' }}>

      {/* ── Hero ── */}
      <section
        className="px-6 md:px-12 pb-40"
        style={{
          background: '#0B111E',
          paddingTop: '180px',
          minHeight: '100svh',
          borderBottomLeftRadius: '4rem',
          borderBottomRightRadius: '4rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1
              className="banner-item text-4xl mb-6 text-white font-extrabold md:text-5xl lg:text-6xl line-height-headings-override"
              style={{ ['--i' as string]: 0 }}
            >
              Use your bonus to<br />trade better.
            </h1>
            <p
              className="banner-item text-gray-300 mb-6 text-base lg:mb-8 lg:text-lg leading-relaxed max-w-lg"
              style={{ ['--i' as string]: 1 }}
            >
              A bonus is more than a perk. It&apos;s a trading advantage that boosts your
              profits when the markets move with you and protects your position
              when the market reverses.
            </p>
            <div className="banner-item" style={{ ['--i' as string]: 2 }}>
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-lg bg-white text-[#0B111E] hover:bg-white/90 transition-colors duration-300 px-7 py-3.5 text-base font-semibold"
              >
                Get Your Bonus
              </Link>
            </div>
            <p
              className="banner-item text-gray-500 text-xs mt-4 md:mt-5 md:text-sm xl:mt-6"
              style={{ ['--i' as string]: 3 }}
            >
              Bonus availability and percentage vary by region. Bonuses are not withdrawable. T&amp;Cs apply.
            </p>
          </div>
          <div
            className="banner-item flex items-center justify-center lg:justify-end"
            style={{ ['--i' as string]: 1 }}
          >
            <Image
              src="/aboutus/bonus.webp"
              alt="Welcome Bonus"
              width={680}
              height={620}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Stat Cards ── */}
      <section className="-mt-16 relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { value: '75+',  label: 'Professional Experience.' },
            { value: '24/7', label: 'Online Support.' },
            { value: '10k+', label: 'Satisfied Customers.' },
          ].map((s, i) => (
            <div
              key={i}
              className="wb-reveal flex flex-col gap-2 rounded-2xl px-8 py-7"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                ['--d' as string]: `${i * 100}ms`,
              }}
            >
              <span className="text-4xl font-black text-[#0f1e3c]">{s.value}</span>
              <span className="text-base text-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Body Content ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div className="wb-reveal flex flex-col gap-6" style={{ ['--d' as string]: '0ms' }}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#0f1e3c]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Trade Bigger with a<br />
              <span style={{
                background: 'linear-gradient(90deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                20% Margin Bonus
              </span>
            </h2>
            <p className="text-lg md:text-xl font-semibold text-[#0f1e3c]">
              Amplify your trading potential with a 20% Margin Bonus on us!
            </p>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              BBS Markets is pleased to offer its Clients a Margin bonus Account to help them start
              their trading journey. Claim yours today through your members area.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Get instantly 20% extra Credit to trade with.',
                'Your 20% Bonus may be lost.',
                'Claim up to $500.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-base text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-lg bg-[#0f1e3c] text-white hover:bg-[#1a2f5e] transition-colors duration-300 px-8 py-3.5 text-base font-semibold"
              >
                Sign Up Now
              </a>
            </div>
          </div>

          <div
            className="wb-reveal relative rounded-3xl p-10 flex flex-col gap-6 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0f1e3c 0%, #1535a0 60%, #0d1b5e 100%)',
              ['--d' as string]: '150ms',
            }}
          >
            {/* Decorative image — bottom right */}
            <div className="absolute bottom-0 right-0 w-44 md:w-52 pointer-events-none select-none">
              <Image
                src="/copyTrading/card-2-428w.webp"
                alt=""
                width={428}
                height={428}
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-blue-300 text-sm font-bold tracking-[0.15em] uppercase">Welcome Bonus</p>
            <p className="text-white text-4xl font-black">20%</p>
            <p className="text-white/70 text-base leading-relaxed">
              A bonus is more than a perk. It&apos;s a trading advantage that boosts your profits
              when the markets move with you.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {['Up to $500 bonus credit', 'Commission-free trading', 'Available on all account types'].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-white/80 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Steps Section ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#F0F4F9' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">

          <div className="wb-reveal flex flex-col items-center text-center gap-4 max-w-2xl" style={{ ['--d' as string]: '0ms' }}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#0f1e3c]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Ready to enhance your<br />trading power?
            </h2>
            <p className="text-base md:text-lg text-gray-500">Get started in just a few simple steps:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { n: '01', body: 'Log in to your BBS Markets account or register a new one.' },
              { n: '02', body: 'Make a minimum deposit of $100 to qualify for the bonus.' },
              { n: '03', body: 'Access your Members Area, select the 20% Bonus Account type, and activate it.' },
              { n: '04', body: 'The bonus is credited instantly—start trading with increased margin right away.' },
            ].map((step, i) => (
              <div
                key={step.n}
                className="wb-reveal flex flex-col gap-4 rounded-2xl bg-white p-8"
                style={{ border: '1px solid #e2e8f0', ['--d' as string]: `${i * 100}ms` }}
              >
                <span
                  className="text-5xl font-black leading-none"
                  style={{
                    background: 'linear-gradient(180deg, #2563eb 0%, #93c5fd 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.n}
                </span>
                <p className="text-base text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="wb-reveal" style={{ ['--d' as string]: '200ms' }}>
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-lg bg-[#0f1e3c] text-white hover:bg-[#1a2f5e] transition-colors duration-300 px-10 py-4 text-base font-semibold"
            >
              Sign Up Now
            </a>
          </div>

        </div>
      </section>

      {/* ── Eligibility Section ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="wb-reveal flex flex-col gap-6" style={{ ['--d' as string]: '0ms' }}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#0f1e3c]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              20% Welcome Bonus<br />Eligibility &amp; Conditions
            </h2>
          </div>

          <div className="wb-reveal flex flex-col gap-6" style={{ ['--d' as string]: '150ms' }}>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Unlock extra trading power with BBS Markets by taking advantage of our 20% Welcome Bonus.
              This promotion is available to both new and existing clients with specific Welcome bonus trading
              accounts in any supported currency, allowing you to enhance your margin and trading potential from the start.
            </p>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Clients can receive up to $500 in bonus credit with a minimum deposit of $100. The bonus applies
              to all BBS Markets trading instruments. Terms and Conditions apply please review them carefully
              to ensure eligibility before participating in this offer.
            </p>
            <div>
              <a
                href="/about-us/legal-documents"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#0f1e3c] text-[#0f1e3c] hover:bg-[#0f1e3c] hover:text-white transition-colors duration-300 px-8 py-3.5 text-base font-semibold"
              >
                Learn More
              </a>
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
          animation-delay: calc(var(--i) * 140ms + 80ms);
        }

        /* Scroll reveal */
        .wb-reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms);
        }
        .wb-reveal.wb-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .banner-item { animation: none; opacity: 1; }
          .wb-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </main>
  )
}
