'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'


const METHODS = [
  { id: 'all',          label: 'All Methods' },
  { id: 'card',         label: 'Cards' },
  { id: 'bank',         label: 'Bank Transfer' },
  { id: 'crypto',       label: 'Crypto' },
  { id: 'ewallet',      label: 'E-Wallets' },
]

const PAYMENT_CARDS = [
  {
    id: 'card',
    name: 'Credit / Debit Cards',
    logos: ['/payments/visa.png', '/payments/mastercard.png'],
    logoW: [72, 56],
    dark: false,
    bg: 'linear-gradient(135deg, #ffffff 0%, #eef2ff 100%)',
    span: 'md:col-span-2',
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    logos: ['/payments/banktransfer.png'],
    logoW: [72],
    dark: true,
    bg: 'linear-gradient(135deg, #1535a0 0%, #0d1b5e 60%, #0a1440 100%)',
    span: 'md:col-span-1',
  },
  {
    id: 'crypto',
    name: 'USDT / Crypto',
    logos: ['/payments/usdt.png'],
    logoW: [56],
    dark: true,
    bg: 'linear-gradient(135deg, #0d3b4d 0%, #082535 100%)',
    span: 'md:col-span-1',
  },
  {
    id: 'ewallet',
    name: 'Apple Pay',
    logos: ['/payments/applepay.jpeg'],
    logoW: [80],
    dark: false,
    bg: 'linear-gradient(135deg, #f8faff 0%, #e8edf8 100%)',
    span: 'md:col-span-2',
  },
  {
    id: 'ewallet',
    name: 'Google Pay',
    logos: ['/payments/gpay.jpeg'],
    logoW: [80],
    dark: false,
    bg: 'linear-gradient(135deg, #f4f7fd 0%, #dde6f5 100%)',
    span: 'md:col-span-2',
  },
]

const FAQS = [
  {
    q: 'What Deposit Methods Are Available At DPM Markets?',
    a: 'DPM Markets offers multiple funding options, including bank wire transfers, credit and debit cards, leading e-wallets, and selected cryptocurrencies. All transactions are handled securely and processed promptly.',
  },
  {
    q: 'What Is The Minimum Deposit To Start Trading With DPM Markets?',
    a: 'The minimum deposit varies depending on the account type selected. Entry-level accounts require a smaller initial deposit, while higher-tier accounts may have higher minimum requirements.',
  },
  {
    q: 'How Long Do Withdrawals Take At DPM Markets?',
    a: 'Withdrawal requests are usually processed by DPM Markets within 1 hour. The time for funds to reach your account depends on your bank or chosen payment provider.',
  },
  {
    q: 'Does DPM Markets Charge Any Withdrawal Fees?',
    a: 'DPM Markets does not apply withdrawal fees. However, third-party banks or payment providers may charge processing fees, so clients are advised to verify this with their provider.',
  },
  {
    q: 'Can I Withdraw Funds Using A Different Payment Method Than I Used To Deposit?',
    a: 'To comply with security and regulatory requirements, withdrawals are typically processed via the same method used for the initial deposit. If this option is no longer available, DPM Markets will assist you in arranging an approved alternative solution.',
  },
  {
    q: 'How Can I Check The Status Of My Withdrawal Request?',
    a: 'You can monitor your withdrawal status directly from your client portal. For additional support or real-time updates, the DPM Markets customer support team is available 24/7 to assist you.',
  },
]

const STEPS = [
  { n: '01', title: 'Register', body: 'Set up your trading account quickly, easily, and securely online.' },
  { n: '02', title: 'Fund',     body: 'Deposit and withdraw funds using your preferred payment method.' },
  { n: '03', title: 'Trade',    body: 'Access a wide range of global financial instruments and markets.' },
]

function FaqItem({
  faq, index, isOpen, onToggle,
}: {
  faq: { q: string; a: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    if (isOpen) {
      // start from 0, then animate to full height
      el.style.maxHeight = '0px'
      el.style.opacity = '0'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.maxHeight = el.scrollHeight + 'px'
          el.style.opacity = '1'
        })
      })
    } else {
      // pin current height first so transition has a from-value
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

        {/* Icon button — rotates and changes color */}
        <span
          className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300"
          style={{
            borderColor: isOpen ? '#f97316' : '#cbd5e1',
            color: isOpen ? '#f97316' : '#94a3b8',
          }}
        >
          {/* Single cross SVG that rotates to become minus */}
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{
              transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              style={{ transition: 'opacity 0.3s', opacity: isOpen ? 0 : 1 }}
            />
            <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        ref={bodyRef}
        style={{
          maxHeight: '0px',
          opacity: 0,
          overflow: 'hidden',
          transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <p className="text-base text-slate-500 leading-relaxed pb-6 pr-4">
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function DepositsWithdrawalsPage() {
  const [active, setActive] = useState('all')
  const [openFaq, setOpenFaq] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.pay-card')
    if (!cards) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [active])

  const visible = active === 'all'
    ? PAYMENT_CARDS
    : PAYMENT_CARDS.filter(c => c.id === active)

  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          background: '#EEF2F8',
          paddingTop: '160px',
          paddingBottom: '140px',
          minHeight: '85svh',
          borderBottomLeftRadius: '4rem',
          borderBottomRightRadius: '4rem',
        }}
      >
        {/* Left floating icons */}
        <div
          className="pointer-events-none absolute left-0 bottom-0 select-none"
          style={{ width: 'clamp(200px, 28vw, 371px)', opacity: 0.92 }}
          aria-hidden="true"
        >
          <Image
            src="/bannerIcons/icons-left.svg"
            alt=""
            width={371}
            height={657}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Right floating icons */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 select-none"
          style={{ width: 'clamp(160px, 22vw, 291px)', opacity: 0.92 }}
          aria-hidden="true"
        >
          <Image
            src="/bannerIcons/icons-right.svg"
            alt=""
            width={291}
            height={487}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6 max-w-3xl mx-auto">

          <p
            className="banner-item text-sm font-bold tracking-[0.18em] uppercase text-blue-500"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            DPM Markets
          </p>

          <h1
            className="banner-item text-4xl md:text-5xl lg:text-[3.75rem] font-black leading-[1.1] tracking-tight"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ['--i' as string]: 1,
            }}
          >
            Deposits &amp; Withdrawals
          </h1>

          <p
            className="banner-item text-base md:text-lg text-slate-500 font-normal max-w-xl leading-relaxed"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            Fast, secure, and fee-free funding. Deposit instantly and withdraw with confidence using a wide range of trusted payment methods.
          </p>

          <Link
            href="/register"
            className="banner-item mt-2 group relative flex gap-2 w-fit overflow-hidden cursor-pointer transition-colors duration-300 text-center justify-center items-center rounded-lg focus:outline-none border-solid focus:ring-4 border bg-[#101829] border-[#101829] text-white focus:ring-gray-800 hover:bg-[#1a2540] px-6 py-3 text-base lg:text-lg font-medium"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            Open an Account
          </Link>

          {/* Method filter tabs */}
          <div
            className="banner-item flex flex-wrap justify-center gap-2 mt-4"
            style={{ '--i': 4 } as React.CSSProperties}
          >
            {METHODS.map(m => (
              <button
                key={m.id}
                onClick={() => setActive(m.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  active === m.id
                    ? 'bg-[#101829] text-white border-[#101829]'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── Payment method bento grid ── */}
      <section
        ref={sectionRef}
        className="-mt-16 relative z-10 pb-24 md:pb-32 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {visible.map((item, i) => (
              <div
                key={i}
                className={`pay-card relative rounded-4xl overflow-hidden flex flex-col justify-between p-10 ${item.span}`}
                style={{
                  background: item.bg,
                  ['--pay-delay' as string]: `${i * 80}ms`,
                  minHeight: '220px',
                  boxShadow: item.dark ? 'none' : '0 2px 16px rgba(16,24,41,0.06)',
                }}
              >

                {/* Logo(s) */}
                <div className="relative flex items-center gap-3 mb-6">
                  {item.logos.map((src, li) => (
                    <div
                      key={li}
                      className="rounded-xl bg-white flex items-center justify-center"
                      style={{ width: 72, height: 48, padding: '6px 10px', boxShadow: '0 1px 6px rgba(0,0,0,0.10)' }}
                    >
                      <Image
                        src={src}
                        alt=""
                        width={item.logoW?.[li] ?? 52}
                        height={36}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Name */}
                <h3
                  className={`relative font-bold text-xl leading-tight tracking-tight mt-auto ${
                    item.dark
                      ? 'text-white'
                      : 'text-[#101829]'
                  }`}
                >
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seamless Funding Infrastructure ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#EEF4FB' }}>
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2
            className="text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Seamless Funding Infrastructure<br />
            At DPM Markets
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed">
            Add funds quickly and safely through trusted payment channels<br />
            and start trading without delays.
          </p>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex gap-6 animate-marquee-dw">
            {[...Array(2)].flatMap(() => [
              { src: '/payments/gpay.jpeg',        alt: 'Google Pay',    w: 80,  h: 45 },
              { src: '/payments/applepay.jpeg',    alt: 'Apple Pay',     w: 80,  h: 45 },
              { src: '/payments/mastercard.png',   alt: 'Mastercard',    w: 90,  h: 70 },
              { src: '/payments/usdt.png',         alt: 'USDT',          w: 60,  h: 60 },
              { src: '/payments/visa.png',         alt: 'Visa',          w: 100, h: 45 },
              { src: '/payments/banktransfer.png', alt: 'Bank Transfer', w: 90,  h: 70 },
            ]).map((p, i) => (
              <div
                key={i}
                className="shrink-0 bg-white rounded-2xl flex items-center justify-center"
                style={{ width: 240, height: 110, boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
              >
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How To Start ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="flex flex-col items-center text-center mb-4">
            <h2
              className="text-4xl md:text-5xl lg:text-[3rem] font-black leading-[1.1] tracking-tight"
              style={{ fontFamily: 'var(--font-inter)', color: '#101829' }}
            >
              How To Start
            </h2>
          </div>

          {/* Steps — big numbers + labels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-10">
            {STEPS.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">

                {/* Number with bottom white fade */}
                <div className="relative flex items-center justify-center overflow-hidden" style={{ height: 160, width: '100%' }}>
                  <span
                    className="step-num font-black select-none leading-none"
                    style={{
                      fontSize: 'clamp(120px, 16vw, 180px)',
                      fontFamily: 'var(--font-inter)',
                      background: 'linear-gradient(180deg, #2563eb 0%, #3b82f6 55%, #93c5fd 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                      ['--step-i' as string]: i,
                    }}
                  >
                    {s.n}
                  </span>
                  {/* White bottom fade that cuts the number */}
                  <div
                    className="absolute bottom-0 left-0 w-full pointer-events-none"
                    style={{
                      height: '52%',
                      background: 'linear-gradient(to bottom, transparent 0%, #ffffff 100%)',
                    }}
                  />
                </div>

                {/* Title + description */}
                <div className="flex flex-col items-center gap-1 mt-3 px-4">
                  <p className="text-base font-bold text-[#101829]">{s.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed text-center mt-2 max-w-52">{s.body}</p>
                </div>

              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-14">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-[#101829] border border-[#101829] text-white hover:bg-[#1a2540] transition-colors duration-300 px-10 py-4 text-base font-semibold"
            >
              Start Trading
            </Link>
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
                  Deposits &amp; Withdrawals
                </span>
                <br />
                <span className="text-[#101829]">FAQs</span>
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

      {/* ── Bottom CTA ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <p className="text-sm font-bold tracking-[0.18em] uppercase text-blue-500">Get Started</p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight max-w-2xl"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ready to Start Trading?
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-md leading-relaxed">
            Open a DPM account today and enjoy instant deposits with no hidden fees.
          </p>
          <Link
            href="/register"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#101829] border border-[#101829] text-white hover:bg-[#1a2540] transition-colors duration-300 px-8 py-3.5 text-base font-medium"
          >
            Open an Account
          </Link>
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
        .pay-card {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.9s cubic-bezier(0.22,1,0.36,1) var(--pay-delay, 0ms),
            transform 0.9s cubic-bezier(0.22,1,0.36,1) var(--pay-delay, 0ms),
            box-shadow 0.3s ease;
        }
        .pay-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .pay-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        /* Payment marquee */
        @keyframes marquee-dw {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee-dw {
          animation: marquee-dw 24s linear infinite;
          will-change: transform;
        }

        /* Step number entrance */
        @keyframes stepNumIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .step-num {
          opacity: 0;
          animation: stepNumIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: calc(var(--step-i) * 150ms + 200ms);
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-item { animation: none; opacity: 1; }
          .pay-card { transition: none; }
          .step-num { animation: none; opacity: 1; }
          .animate-marquee-dw { animation: none; }
        }
      `}</style>

    </main>
  )
}
