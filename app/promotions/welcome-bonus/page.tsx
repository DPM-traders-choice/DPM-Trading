'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function WelcomeBonusPage() {
  useEffect(() => {
    const cards = document.querySelectorAll('.stat-card')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)'
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    cards.forEach(c => obs.observe(c))
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

          {/* Left — text */}
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
                href="#"
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

          {/* Right — 3D image */}
          <div
            className="banner-item flex items-center justify-center lg:justify-end"
            style={{ ['--i' as string]: 1 }}
          >
            <Image
              src="/bonus/bonus.webp"
              alt="Welcome Bonus"
              width={680}
              height={620}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* ── Stat Cards — overlap hero bottom ── */}
      <section className="-mt-16 relative z-10 px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { value: '75+',  label: 'Professional Experience.' },
            { value: '24/7', label: 'Online Support.' },
            { value: '10k+', label: 'Satisfied Customers.' },
          ].map((s, i) => (
            <div
              key={i}
              className="stat-card flex flex-col gap-2 rounded-2xl px-8 py-7"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`,
              }}
            >
              <span className="text-4xl font-black text-[#0f1e3c]">{s.value}</span>
              <span className="text-base text-gray-500">{s.label}</span>
            </div>
          ))}
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
        @media (prefers-reduced-motion: reduce) {
          .banner-item { animation: none; opacity: 1; }
        }
      `}</style>
    </main>
  )
}
