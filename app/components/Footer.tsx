'use client'

import Image from 'next/image'
import Link from 'next/link'

const NAV = [
  {
    heading: 'Trading',
    links: [
      { label: 'Account Types',          href: '/trading/account-types' },
      { label: 'Instruments',            href: '/trading/instruments' },
      { label: 'Overnight Fees',         href: '/trading/overnight-fees' },
      { label: 'Deposits & Withdrawals', href: '/trading/deposits-withdrawals' },
      { label: 'Calendar',               href: '/trading/calendar' },
      { label: 'Advantages',             href: '/trading/advantages' },
      { label: 'Platforms',              href: '/trading/platforms' },
    ],
  },
  {
    heading: 'Promotions',
    links: [
      { label: 'Welcome Bonus', href: '/promotions/welcome-bonus' },
      { label: 'Copy Trading',  href: '/copy-trading' },
    ],
  },
  {
    heading: 'Partners',
    links: [
      { label: 'Partner',           href: '/partners/partner' },
      { label: 'Create Your Bonus', href: '/partners/create-your-bonus' },
    ],
  },
  {
    heading: 'About Us',
    links: [
      { label: 'About DPM',       href: '/about-us/about-dpm' },
      { label: 'Contact Us',      href: '/about-us/contact-us' },
      { label: 'Complaints',      href: '/about-us/complaints' },
      { label: 'Legal Documents', href: '/about-us/legal-documents' },
      { label: 'FAQs',            href: '/about-us/faqs' },
    ],
  },
]

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/dprimemyanmar',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@dpmmyanmar2023',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@PrimeDMyanmar',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/DPMServiceTeam',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      className="relative "
      style={{ background: '#060d1c', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5) 40%, rgba(139,92,246,0.4) 60%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Main grid */}
        <div className="pt-36 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">

          {/* Brand col — spans 2 */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="w-fit">
              <div className="relative h-16 w-52">
                <Image src="/logoGold.png" alt="DPM" fill className="object-contain object-left" />
              </div>
            </Link>

            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              A multicultural board of professionals delivering bespoke trading solutions to a global clientele.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-1">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 transition-all duration-200 hover:text-white hover:bg-white/8"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/25">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] font-medium text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Risk disclaimer */}
        <div className="py-6 flex flex-col gap-4">
          <p className="text-[11px] text-white/50 leading-relaxed">
            <span className="font-semibold text-white/70">Risk Warning:</span> Trading Leveraged Products such as Forex and Derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investments objectives and level of experience, before trading, and if necessary, seek independent advice. Please read the full Risk Disclosure.
          </p>
          <p className="text-[11px] text-white/50 leading-relaxed">
            <span className="font-semibold text-white/70">Regional Restrictions:</span> DPM Markets does not provide services to residents of the USA, Sudan, Syria, North Korea.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} DPM. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="/about-us/legal-documents"
                className="text-[11px] text-white/20 hover:text-white/50 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
