'use client'

import { useEffect, useRef, useState } from 'react'

const FAQS_ABOUT = [
  {
    q: 'Who We Are',
    a: 'DPM is a comprehensive CFD trading provider serving retail, professional, and institutional clients. We offer access to global markets through the advanced MetaTrader 5 platform, with instruments including Forex, Commodities, Metals, Stocks, and Futures. By delivering competitive trading conditions, deep liquidity, and flexible trading styles, DPM is committed to supporting traders with reliable tools, transparent conditions, and dedicated service for long-term success.',
  },
  {
    q: 'What Markets Can I Trade At DPM?',
    a: 'DPM provides access to a wide range of global markets, including Forex, Indices, Commodities, Metals, Energies, Equities, and Cryptocurrencies. Each market is supported by competitive pricing, deep liquidity, and fast execution to help traders diversify and capitalize on global opportunities.',
  },
  {
    q: 'Which Trading Platforms Does DPM Offer?',
    a: 'DPM offers the MetaTrader 5; a high-performance trading platform designed for speed, flexibility, and ease of use. Traders can choose between desktop, mobile, or web-based versions to suit their individual trading preferences.',
  },
  {
    q: 'How Do I Deposit And Withdraw Funds?',
    a: 'DPM supports multiple secure deposit and withdrawal methods. Simply log in to your account, select your preferred payment option, and follow the on-screen instructions. Processing times may vary depending on the selected payment method.',
  },
  {
    q: 'Does DPM Provide Educational Resources?',
    a: 'Yes. DPM offers educational materials to help beginners understand trading fundamentals, market analysis, and platform functionality, enabling them to build confidence before trading in live markets.',
  },
]

const FAQS_SUPPORT = [
  {
    q: 'How Can I Contact DPM?',
    a: 'DPM offers 24/6 customer support to assist you throughout your trading journey. Our multilingual support team is available via email at DPM@bbsmarkets.com.',
  },
  {
    q: 'What Are Support Operating Hours?',
    a: 'Live chat is available around the clock, while full support services operate during standard business hours. Response times may vary depending on inquiry volume.',
  },
  {
    q: 'Is Support Available Outside Standard Hours?',
    a: 'Yes. Basic support is available 24/7, while more complex inquiries are handled during active support hours.',
  },
]


const FAQS_ACCOUNT = [
  {
    q: 'How Do I Open An Account With DPM?',
    a: 'Opening an account with DPM is quick and straightforward. Visit our website and click "Sign Up." Complete the registration form with your personal and financial details, submit the required documents for verification, and once approved, fund your account to begin trading.',
  },
  {
    q: 'What Is The Minimum Age Requirement?',
    a: 'You must be at least 18 years old to open an account with DPM.',
  },
  {
    q: 'What Account Types Are Available?',
    a: 'DPM offers multiple account types to suit different trading needs and experience levels:\n\nStandard Account: $20 minimum deposit, zero commission, leverage up to 1:5000. Ideal for beginners.\nVIP Account: $1,000 minimum deposit, $7 commission, tighter spreads. Suitable for active or professional traders.\nBonus (Bull) Account: $20 minimum deposit, $7 commission, leverage up to 1:100, includes promotional bonuses.\nCENT Account: $20 minimum deposit, zero commission, leverage up to 1:5000. Designed for smaller trades with better risk control and flexible trading.',
  },
  {
    q: 'Are Swap Fees Charged On Overnight Positions?',
    a: 'Yes. Swap fees apply to positions held overnight. These fees vary by instrument, market conditions, and position direction. Current swap rates are available on the trading platform.',
  },
  {
    q: 'How Can I Update My Personal Information?',
    a: 'Personal details can usually be updated by logging into your account. In some cases, verification may be required by contacting our support team.',
  },
  {
    q: 'How Long Do Withdrawals Take?',
    a: 'DPM typically processes withdrawal requests within one hour. The final arrival time depends on your bank or payment provider\'s processing schedule.',
  },
  {
    q: 'What If My Deposit Or Withdrawal Is Delayed?',
    a: 'If your deposit or withdrawal is delayed, please contact the DPM support team with your transaction details. Our team will investigate and resolve the issue as quickly as possible.',
  },
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
      el.style.maxHeight = '0px'
      el.style.opacity = '0'
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.maxHeight = el.scrollHeight + 'px'
          el.style.opacity = '1'
        })
      })
    } else {
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
          style={{ color: isOpen ? '#d97706' : undefined }}
        >
          <span className={!isOpen ? 'text-[#101829] group-hover:text-blue-600 transition-colors duration-300' : ''}>
            {faq.q}
          </span>
        </span>

        <span
          className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-300"
          style={{
            borderColor: isOpen ? '#d97706' : '#cbd5e1',
            color: isOpen ? '#d97706' : '#94a3b8',
          }}
        >
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

export default function FAQsPage() {
  const [openAbout, setOpenAbout] = useState<number>(-1)
  const [openAccount, setOpenAccount] = useState<number>(-1)
  const [openSupport, setOpenSupport] = useState<number>(-1)

  return (
    <main className="min-h-screen bg-white pt-36 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.18em] uppercase text-blue-500 mb-4">About Us</p>
          <h1
            className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight"
          >
            <span className="text-[#101829]">About </span>
            <span
              style={{
                background: 'linear-gradient(90deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              DPM
            </span>
          </h1>
        </div>

        {/* About DPM accordion */}
        <div className="flex flex-col">
          {FAQS_ABOUT.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openAbout === i}
              onToggle={() => setOpenAbout(openAbout === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Customer Support section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#101829] mb-10">
            Customer Support
          </h2>
          <div className="flex flex-col">
            {FAQS_SUPPORT.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openSupport === i}
                onToggle={() => setOpenSupport(openSupport === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        {/* Account Opening section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#101829] mb-10">
            Account Opening
          </h2>
          <div className="flex flex-col">
            {FAQS_ACCOUNT.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openAccount === i}
                onToggle={() => setOpenAccount(openAccount === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
