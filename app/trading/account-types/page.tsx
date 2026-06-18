'use client'

import { useState } from 'react'
import Image from 'next/image'
import Testimonials from '@/app/components/Testimonials'

type Spec = { label: string; value: string }

const ACCOUNT_TYPES = [
  {
    name: 'Standard',
    subtitle: 'Account',
    image: '/accounttype/blue.webp',
    description: 'Open our most popular account to get bonuses that boost your trading power and reduce the cost of trading.',
    color: '#2563eb',
    specs: [
      { label: 'Spreads', value: 'Variable' },
      { label: 'Swap Free*', value: 'Yes' },
      { label: 'Minimum Deposit', value: '$10' },
      { label: 'Base Currency', value: 'EUR, USD' },
      { label: 'Commissions', value: '$0' },
      { label: 'Leverage****', value: 'up to 1:5000' },
      { label: 'Execution Model', value: 'Market Execution' },
      { label: 'Platforms', value: 'Webtrader, Mobile App, Desktop' },
      { label: 'Margin Call', value: '100%' },
      { label: 'Stop Out Level', value: '20%' },
      { label: 'Max NOP**', value: '200' },
      { label: 'Max Trade size***', value: '100' },
      { label: 'Min Trade Size', value: '0.01' },
    ] as Spec[],
  },
  {
    name: 'VIP',
    subtitle: 'Account',
    image: '/accounttype/green.webp',
    description: 'The ideal choice for trading high volumes. Reduce your costs with low spreads and even tighter conditions.',
    color: '#f97316',
    specs: [
      { label: 'Spreads', value: 'Variable' },
      { label: 'Swap Free*', value: 'Yes' },
      { label: 'Minimum Deposit', value: '$1000' },
      { label: 'Base Currency', value: 'EUR, USD' },
      { label: 'Commissions', value: '$0' },
      { label: 'Leverage****', value: 'up to 1:1000' },
      { label: 'Execution Model', value: 'Market Execution' },
      { label: 'Platforms', value: 'Webtrader, Mobile App, Desktop' },
      { label: 'Margin Call', value: '100%' },
      { label: 'Stop Out Level', value: '20%' },
      { label: 'Max NOP**', value: '200' },
      { label: 'Max Trade size***', value: '100' },
      { label: 'Min Trade Size', value: '0.01' },
    ] as Spec[],
  },
  {
    name: 'Bonus',
    subtitle: 'Account',
    image: '/accounttype/red.webp',
    description: 'Claim exclusive bonuses and promotions designed to maximize your trading capital from the start.',
    color: '#dc2626',
    specs: [
      { label: 'Spreads', value: 'Variable' },
      { label: 'Swap Free*', value: 'Yes' },
      { label: 'Minimum Deposit', value: '$10' },
      { label: 'Base Currency', value: 'EUR, USD' },
      { label: 'Commissions', value: '$0' },
      { label: 'Leverage****', value: 'up to 1:100' },
      { label: 'Execution Model', value: 'Market Execution' },
      { label: 'Platforms', value: 'Webtrader, Mobile App, Desktop' },
      { label: 'Margin Call', value: '100%' },
      { label: 'Stop Out Level', value: '50%' },
      { label: 'Max NOP**', value: '200' },
      { label: 'Max Trade size***', value: '100' },
      { label: 'Min Trade Size', value: '0.01' },
    ] as Spec[],
  },
  {
    name: 'CENT',
    subtitle: 'Account',
    image: '/accounttype/blue.webp',
    description: 'Perfect for beginners. Trade in cent lots to practice strategies with minimal risk and real market conditions.',
    color: '#7c3aed',
    specs: [
      { label: 'Spreads', value: 'Variable' },
      { label: 'Swap Free*', value: 'Yes' },
      { label: 'Minimum Deposit', value: '$10' },
      { label: 'Base Currency', value: 'USC' },
      { label: 'Commissions', value: '$0' },
      { label: 'Leverage****', value: 'up to 1:5000' },
      { label: 'Max Balance', value: '$1000' },
      { label: 'Platforms', value: 'Webtrader, Mobile App, Desktop' },
      { label: 'Max Daily Orders', value: '200' },
      { label: 'Stop Out Level', value: '50%' },
      { label: 'Max NOP**', value: '50 open positions' },
      { label: 'Max Trade size***', value: '100' },
      { label: 'Min Trade Size', value: '0.01' },
    ] as Spec[],
  },
]

export default function AccountTypesPage() {
  const [selected, setSelected] = useState(0)
  const active = ACCOUNT_TYPES[selected]

  return (
    <main className="min-h-screen bg-white">

      {/* Hero dark banner */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 md:px-12 overflow-hidden"
        style={{
          height: '90svh',
          background: '#101829',
          paddingTop: '10px',
          borderBottomLeftRadius: '5rem',
          borderBottomRightRadius: '5rem',
        }}
      >
        {/* Bottom dot-wave pattern */}
        <svg
          className="absolute left-0 w-full pointer-events-none"
          viewBox="0 0 1440 200"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
          style={{ bottom: '15%' }}
        >
          {(() => {
            let seed = 42
            const rand = () => { seed = (seed * 16807 + 0) % 2147483647; return (seed - 1) / 2147483646 }
            const dots = []
            const cols = 80
            const rows = 20
            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                const t = c / (cols - 1)
                const x = t * 1440
                const waveY = 60 - Math.sin(t * Math.PI * 1.3) * 100 - r * 9
                const jitter = rand() * 6 - 3
                const y = waveY + jitter
                if (y > 202 || y < 0) { rand(); rand(); continue }
                const opacityBase = Math.max(0, 1 - t * 0.4) * Math.max(0, 1 - (200 - y) / 200)
                const opacity = Math.min(0.75, opacityBase * (0.5 + rand() * 0.4))
                const radius = 1.2 + rand() * 1.4
                dots.push(
                  <circle key={`${r}-${c}`} cx={+x.toFixed(1)} cy={+y.toFixed(1)} r={+radius.toFixed(1)} fill="#94a3b8" opacity={+opacity.toFixed(2)} />
                )
              }
            }
            return dots
          })()}
        </svg>

        {/* Content */}
        <div className="relative flex flex-col items-center gap-5 max-w-4xl w-full -mt-24">
          <p className="at-item font-semibold text-blue-400 text-base mb-0 md:text-base lg:text-lg leading-[1.2]" style={{ '--i': 0 } as React.CSSProperties}>
            Account Types
          </p>
          <h1
            className="at-item text-center text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight pb-1"
            style={{ fontFamily: 'var(--font-inter)', ['--i' as string]: 1 }}
          >
            DPM Accounts Built for Every Trader
          </h1>
          <p className="at-item text-white/55 text-base lg:text-lg max-w-2xl leading-relaxed" style={{ '--i': 2 } as React.CSSProperties}>
            Choose from DPM available account types, designed to suit everyone&apos;s needs.
          </p>
          <button
            className="at-item mt-4 group relative flex gap-2 w-fit overflow-hidden cursor-pointer transition-colors duration-300 text-center justify-center items-center rounded-lg focus:outline-none border-solid focus:ring-4 border bg-white border-gray-300 text-gray-700 focus:ring-gray-200 disabled:bg-white disabled:cursor-not-allowed disabled:text-gray-400 disabled:border-gray-200 hover:bg-gray-50 hover:text-gray-900 px-3.5 py-2.5 lg:px-4 lg:py-3 text-base lg:text-lg font-medium max-w-[20.938rem] md:max-w-max md:w-max"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            Choose Your Account Plan
          </button>
        </div>

      </div>

      {/* Account Type Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-36 relative z-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {ACCOUNT_TYPES.map((account, i) => (
            <div
              key={account.name}
              className="flex flex-col bg-[#f4f6f9] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              style={{ border: '2px solid transparent' }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.border = `2px solid ${account.color}55`}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.border = '2px solid transparent'}
            >
              {/* Card top */}
              <div className="flex flex-col items-center text-center px-8 pt-10 pb-6">
                <div className="relative w-20 h-20 mb-6">
                  <Image src={account.image} alt={account.name} fill className="object-contain" />
                </div>
                <p className="text-2xl font-bold mb-0.5" style={{ color: account.color }}>
                  {account.name}
                </p>
                <p className="text-base font-semibold text-[#1a1a2e] mb-3">{account.subtitle}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{account.description}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mx-4" />

              {/* Specs */}
              <div className="divide-y divide-gray-200">
                {account.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col items-center text-center py-3 px-6">
                    <span className="text-xs text-gray-400 mb-0.5">{spec.label}</span>
                    <span className="text-sm font-semibold text-[#1a1a2e]">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Sign Up button */}
              <div className="px-6 py-5">
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300"
                  style={{ background: 'transparent', color: account.color, border: `2px solid ${account.color}` }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = account.color
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                    ;(e.currentTarget as HTMLButtonElement).style.color = account.color
                  }}
                >
                  Sign Up Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Leverage Table */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-center text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-inter)' }}>
            DPM Dynamic Leverage
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-gray-200">
          {/* Header row */}
          <div className="grid grid-cols-2 bg-white px-6 py-4 border-b border-gray-200">
            <span className="text-sm font-bold text-[#1a1a2e]">Asset Class</span>
            <span className="text-sm font-bold text-[#1a1a2e]">Leverage (Max NOP in Lots*)</span>
          </div>

          {/* Rows */}
          {[
            { asset: 'Forex (Standard and CENT)',    leverage: '1:5000 (0-0.5), 1:1000 (0.5-3), 1:500 (3-5), 1:200 (5+)' },
            { asset: 'Forex (VIP and Bonus)',         leverage: '1:1000 (0-3), 1:500 (3-5), 1:200 (5+)' },
            { asset: 'Crypto',                        leverage: '1:10, except for BTC 1:100 (0-0.1), 1:50 (0.1-0.3), 1:10 (0.3+)' },
            { asset: 'Stocks',                        leverage: '1:20' },
            { asset: 'Commodities (Standard and CENT)', leverage: '1:5000 (0-0.5), 1:1000 (0.5-1), 1:500 (1-3), 1:100 (3+)' },
            { asset: 'Commodities (VIP and Bonus)',   leverage: '1:1000 (0-1), 1:500 (1-3), 1:100 (3+)' },
            { asset: 'Indices**',                     leverage: '1:500 (0-1), 1:200 (1-5), 1:100 (5+)' },
          ].map((row, i) => (
            <div
              key={row.asset}
              className={`grid grid-cols-2 px-6 py-4 text-sm ${i % 2 === 0 ? 'bg-[#f7f8fa]' : 'bg-white'}`}
            >
              <span className="text-[#374151] font-medium">{row.asset}</span>
              <span className="text-[#374151]">{row.leverage}</span>
            </div>
          ))}
        </div>

        {/* Footnotes */}
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-xs text-gray-500 leading-relaxed">
            *Only volumes opened beyond the NOP limits will be subject to the lower leverage
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            **Leverage on new positions on commodities and Indices will be temporarily reduced approximately three (3) hour prior to the close of business each Friday (around 23:00 server time). The reduction in leverage will be to that of 1:50. Please make sure you have enough funds in your account to support positions on commodities and index products. Leverage will go back to normal one hour after markets open on Monday.
          </p>
        </div>

      </div>

      {/* Payments Section */}
      <div className="bg-[#EEF4FB] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>
            Seamless Funding Infrastructure<br />
            At DPM
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed">
            Add funds quickly and safely through trusted payment channels<br />
            and start trading without delays.
          </p>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex gap-6 animate-marquee-at">
            {[...Array(2)].flatMap(() => [
              { src: '/payments/mastercard.png', alt: 'Mastercard',    w: 90,  h: 70 },
              { src: '/payments/usdt.png',       alt: 'USDT',          w: 60,  h: 60 },
              { src: '/payments/visa.png',       alt: 'Visa',          w: 100, h: 45 },
              { src: '/payments/banktransfer.png', alt: 'Bank Transfer', w: 90, h: 70 },
              { src: '/payments/applepay.jpeg',  alt: 'Apple Pay',     w: 80,  h: 45 },
              { src: '/payments/gpay.jpeg',      alt: 'Google Pay',    w: 80,  h: 45 },
            ]).map((p, i) => (
              <div
                key={i}
                className="shrink-0 bg-white rounded-2xl flex items-center justify-center"
                style={{ width: 220, height: 100, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
              >
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee-at {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .animate-marquee-at {
            animation: marquee-at 22s linear infinite;
            will-change: transform;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee-at { animation: none; }
          }

          @keyframes atFadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .at-item {
            opacity: 0;
            animation: atFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
            animation-delay: calc(var(--i) * 130ms + 100ms);
          }
        `}</style>
      </div>

      {/* Testimonials */}
      <Testimonials />

    </main>
  )
}
