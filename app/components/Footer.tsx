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
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.942z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
          <p className="text-[11px] text-white/20 leading-relaxed">
            <span className="font-semibold text-white/30">Risk Warning:</span> Trading Leveraged Products such as Forex and Derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investments objectives and level of experience, before trading, and if necessary, seek independent advice. Please read the full Risk Disclosure.
          </p>
          <p className="text-[11px] text-white/20 leading-relaxed">
            Regional Restrictions: DPM Markets does not provide services to residents of the USA, Sudan, Syria, North Korea.
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
                href="#"
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
