'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Testimonials from '@/app/components/Testimonials'

function useReveal(delay = 0) {
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
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return {
    ref,
    style: {
      opacity: 0,
      transform: 'translateY(36px)',
      transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    } as React.CSSProperties,
  }
}

export default function AboutDPMPage() {
  const r0 = useReveal(0)
  const r1 = useReveal(80)
  const r2 = useReveal(160)
  const r3 = useReveal(240)
  const r4 = useReveal(320)
  const r5 = useReveal(400)

  // Built On section
  const builtHead  = useReveal(0)
  const builtC1    = useReveal(80)
  const builtC2    = useReveal(180)
  const builtC3    = useReveal(280)

  // Why Choose section
  const whyText  = useReveal(0)
  const whyImg   = useReveal(150)

  // What We Provide section
  const provideImg  = useReveal(0)
  const provideText = useReveal(150)

  // Advanced Trading section
  const advHead = useReveal(0)
  const advC1   = useReveal(80)
  const advC2   = useReveal(160)
  const advC3   = useReveal(240)
  const advC4   = useReveal(320)

  // Team section
  const teamBlock = useReveal(0)

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="px-6 md:px-12 pt-36 pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

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
            <p className="of-item text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg" style={{ '--i': 2 } as React.CSSProperties}>
              DPM is a turnkey solution for all your CFD trading needs for Retail, Professional and
              Institutional Clients. DPM provides CFD trading via the award winning MetaTrader 5
              trading platforms in instruments ranging from Forex, Commodities, Metals, Stocks and
              Futures.
            </p>
            <p className="of-item text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg" style={{ '--i': 3 } as React.CSSProperties}>
              Through its best practises of providing the best possible conditions to clients and
              permitting all trading styles with unrestricted access to its liquidity, DPM has
              positioned itself as the forex broker of choice for traders worldwide.
            </p>
            <p className="of-item text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg" style={{ '--i': 4 } as React.CSSProperties}>
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

          <div className="of-item shrink-0 flex items-center justify-center" style={{ '--i': 2 } as React.CSSProperties}>
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

      {/* ── Built On Experience & Expertise ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#0B111E', borderRadius: '2.5rem 2.5rem 0 0' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">

          <div ref={builtHead.ref} style={builtHead.style} className="flex flex-col items-center text-center gap-4 max-w-3xl">
            <h2 className="text-white text-3xl font-black md:text-4xl lg:text-5xl leading-tight">
              Built On
            </h2>
            <h2
              className="text-3xl font-black md:text-4xl lg:text-5xl leading-tight"
              style={{
                background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experience And Expertise
            </h2>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed mt-2">
              With seasoned industry professionals, multi-asset market access, and decades of combined
              experience, DPM is structured to support informed trading decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            <div ref={builtC1.ref} style={{ ...builtC1.style, background: '#131d2e', border: '1px solid rgba(255,255,255,0.07)', minHeight: '320px' }}
              className="rounded-2xl p-8 flex flex-col items-center text-center gap-5">
              <svg width="72" height="72" viewBox="0 0 36 36" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="8" width="18" height="20" rx="2"/>
                <path d="M5 13h18"/>
                <rect x="8" y="17" width="4" height="4" rx="0.5"/>
                <rect x="15" y="17" width="4" height="1.5" rx="0.5"/>
                <rect x="15" y="20" width="4" height="1.5" rx="0.5"/>
                <circle cx="27" cy="14" r="4"/>
                <path d="M22 28c0-3 2-5 5-5s5 2 5 5"/>
              </svg>
              <h3 className="text-base font-bold text-white">Financial Industry Professionals</h3>
              <p className="text-white/50 text-base leading-relaxed">
                Our team of financial industry professionals applies deep market knowledge, disciplined
                strategies, and a commitment to delivering reliable financial solutions.
              </p>
            </div>

            <div ref={builtC2.ref} style={{ ...builtC2.style, background: '#131d2e', border: '1px solid rgba(255,255,255,0.07)', minHeight: '320px' }}
              className="rounded-2xl p-8 flex flex-col items-center text-center gap-5">
              <svg width="72" height="72" viewBox="0 0 36 36" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="10" r="3"/>
                <circle cx="24" cy="10" r="3"/>
                <circle cx="18" cy="24" r="3"/>
                <line x1="12" y1="13" x2="18" y2="21"/>
                <line x1="24" y1="13" x2="18" y2="21"/>
                <rect x="6" y="26" width="4" height="4" rx="1" strokeOpacity="0.4"/>
                <rect x="26" y="26" width="4" height="4" rx="1" strokeOpacity="0.4"/>
              </svg>
              <h3 className="text-base font-bold text-white">Multiple Asset Classes</h3>
              <p className="text-white/50 text-base leading-relaxed">
                DPM provides access to multiple asset classes, enabling diversified strategies and
                flexible opportunities across global financial markets and trading environments.
              </p>
            </div>

            <div ref={builtC3.ref} style={{ ...builtC3.style, background: '#131d2e', border: '1px solid rgba(255,255,255,0.07)', minHeight: '320px' }}
              className="rounded-2xl p-8 flex flex-col items-center text-center gap-5">
              <svg width="72" height="72" viewBox="0 0 36 36" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="10" width="20" height="14" rx="2"/>
                <path d="M4 15h20"/>
                <path d="M8 19h4M16 19h4" strokeOpacity="0.6"/>
                <path d="M26 14h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4"/>
                <circle cx="30" cy="22" r="1.5" fill="#D4A843" stroke="none"/>
                <path d="M10 24v3M14 24v3" strokeOpacity="0.4"/>
              </svg>
              <h3 className="text-base font-bold text-white">75+ Years of Combined Experience</h3>
              <p className="text-white/50 text-base leading-relaxed">
                With more than 75 years of combined experience, DPM leverages proven expertise and
                practical insight to navigate evolving market conditions effectively.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Why Choose DPM? ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div ref={whyText.ref} style={whyText.style} className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-black md:text-4xl lg:text-5xl leading-tight">
              <span style={{ background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Why Choose{' '}
              </span>
              <span style={{ background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                DPM?
              </span>
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              As the DPM brand contains a multicultural board of professionals we are able to approach
              the requirements of our global clientele in a bespoke and local way.
            </p>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Our world-leading trading platform, available via a number of mediums, coupled with our
              bespoke trading conditions allow us to accommodate any and all Client and Partner needs.
            </p>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              Our philosophy is to place bespoke focus on our Clients and Partners (from all aspects of
              trading, including instruments, methods of funding, remuneration packages, etc) and all
              else will follow. We do not treat our Clients and Partners as numbers but instead strive
              to build a sustainable long-term relation through ensuring we listen and attend to their
              needs in order to gain their loyalty.
            </p>
            <Link
              href="/register"
              className="mt-2 w-fit flex items-center justify-center rounded-lg px-6 py-3 text-base font-bold tracking-wide transition-opacity duration-200 hover:opacity-85"
              style={{ background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)', color: '#1a0f00', boxShadow: '0 4px 20px rgba(212,168,67,0.4)' }}
            >
              Sign Up Now
            </Link>
          </div>

          <div ref={whyImg.ref} style={whyImg.style} className="shrink-0 flex items-center justify-center lg:w-105">
            <Image src="/awards/award-888w.webp" alt="DPM Award" width={420} height={420} className="object-contain w-full" />
          </div>

        </div>
      </section>

      {/* ── What We Provide ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#F0F4F9' }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div ref={provideImg.ref} style={provideImg.style} className="shrink-0 flex items-center justify-center lg:w-105">
            <Image src="/awards/experienced-trade-690w.webp" alt="Experienced Trade at DPM" width={420} height={420} className="object-contain w-full" />
          </div>

          <div ref={provideText.ref} style={provideText.style} className="flex-1 flex flex-col gap-6">
            <h2
              className="text-3xl font-black md:text-4xl lg:text-5xl leading-tight"
              style={{ background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              What we provide at{' '}
              <span style={{ background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                DPM?
              </span>
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              DPM provides a range of account types, trading platforms and tools to facilitate from the
              smallest to the largest trading client. All this is provided via desktop, Android or iPhone
              for MetaTrader 5.
            </p>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
              For our partners we offer a suite of services including a variety of remuneration packages,
              IB partnerships, Joint Venture opportunities and Affiliate opportunities.
            </p>
            <Link
              href="/register"
              className="mt-2 w-fit flex items-center justify-center rounded-lg px-6 py-3 text-base font-bold tracking-wide transition-opacity duration-200 hover:opacity-85"
              style={{ background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)', color: '#1a0f00', boxShadow: '0 4px 20px rgba(212,168,67,0.4)' }}
            >
              Sign Up Now
            </Link>
          </div>

        </div>
      </section>

      {/* ── Advanced Trading Environment ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#0B111E', borderRadius: '2.5rem 2.5rem 0 0' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">

          <div ref={advHead.ref} style={advHead.style} className="flex flex-col items-center text-center gap-4 max-w-3xl">
            <h2 className="text-white text-3xl font-black md:text-4xl lg:text-5xl leading-tight">Advanced</h2>
            <h2
              className="text-3xl font-black md:text-4xl lg:text-5xl leading-tight -mt-3"
              style={{ background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Trading Environment
            </h2>
            <p className="text-white/55 text-base lg:text-lg leading-relaxed mt-2">
              DPM delivers a powerful trading experience through the MT5 platform, offering access to
              over 300 instruments, transparent brokerage practices, and bespoke partner solutions
              designed to meet diverse trading and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">

            <div ref={advC1.ref} style={{ ...advC1.style, background: '#131d2e', border: '1px solid rgba(255,255,255,0.07)' }}
              className="rounded-2xl p-7 flex flex-col items-center text-center gap-5">
              <svg width="60" height="60" viewBox="0 0 36 36" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="22" height="16" rx="2"/><path d="M3 17h22"/><path d="M14 21v4M10 25h8"/>
                <rect x="20" y="14" width="13" height="18" rx="2"/><path d="M23 19h7M23 22h7M23 25h4"/>
              </svg>
              <h3 className="text-base font-bold text-white">MT5 Platform</h3>
              <p className="text-white/50 text-sm leading-relaxed">Trade using the MT5 platform with advanced tools and reliable execution.</p>
            </div>

            <div ref={advC2.ref} style={{ ...advC2.style, background: '#131d2e', border: '1px solid rgba(255,255,255,0.07)' }}
              className="rounded-2xl p-7 flex flex-col items-center text-center gap-5">
              <svg width="60" height="60" viewBox="0 0 36 36" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="18" r="13"/>
                <path d="M13 18c0-1.5.6-3 1.8-4 1.2-1 2.8-1.3 4.2-.8"/><path d="M14 22l2-2 2 2 4-5"/>
              </svg>
              <h3 className="text-base font-bold text-white">Partner Solutions</h3>
              <p className="text-white/50 text-sm leading-relaxed">Tailored partner solutions designed to support long-term business growth.</p>
            </div>

            <div ref={advC3.ref} style={{ ...advC3.style, background: '#131d2e', border: '1px solid rgba(255,255,255,0.07)' }}
              className="rounded-2xl p-7 flex flex-col items-center text-center gap-5">
              <svg width="60" height="60" viewBox="0 0 36 36" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 4L6 9v10c0 6 5.4 10.8 12 13 6.6-2.2 12-7 12-13V9L18 4z"/>
                <path d="M13 18l3 3 7-7"/>
              </svg>
              <h3 className="text-base font-bold text-white">Transparent Broker</h3>
              <p className="text-white/50 text-sm leading-relaxed">Clear and transparent brokerage practices focused on trust and reliability.</p>
            </div>

            <div ref={advC4.ref} style={{ ...advC4.style, background: '#131d2e', border: '1px solid rgba(255,255,255,0.07)' }}
              className="rounded-2xl p-7 flex flex-col items-center text-center gap-5">
              <svg width="60" height="60" viewBox="0 0 36 36" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="18" r="5"/>
                <path d="M18 4v4M18 28v4M4 18h4M28 18h4"/>
                <path d="M8.1 8.1l2.8 2.8M25.1 25.1l2.8 2.8M25.1 8.1l-2.8 2.8M8.1 25.1l2.8 2.8" strokeOpacity="0.5"/>
              </svg>
              <h3 className="text-base font-bold text-white">300+ Instruments</h3>
              <p className="text-white/50 text-sm leading-relaxed">Access over 300 instruments across global and diversified financial markets.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── The Team Behind DPM ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#F0F4F9' }}>
        <div ref={teamBlock.ref} style={teamBlock.style} className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

          <h2
            className="text-3xl font-black md:text-4xl lg:text-5xl leading-tight"
            style={{ background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            The Team Behind{' '}
            <span style={{ background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              DPM
            </span>
          </h2>

          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            Founded by Trading Professionals, the DPM Brand Management and Board of Directors team
            consist of over 75 years of professional experience in the financial markets including
            first hand experience in Stocks and CFD trading.
          </p>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            DPM is built on a foundation of integrity, transparency, and a deep understanding of
            global financial markets. Our leadership team applies disciplined risk management,
            strategic insight, and a client-focused approach to support informed trading across
            multiple asset classes.
          </p>
          <Link
            href="/register"
            className="mt-2 flex items-center justify-center rounded-lg px-6 py-3 text-base font-bold tracking-wide transition-opacity duration-200 hover:opacity-85"
            style={{ background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)', color: '#1a0f00', boxShadow: '0 4px 20px rgba(212,168,67,0.4)' }}
          >
            Sign Up Now
          </Link>

        </div>
      </section>

      <Testimonials />

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
