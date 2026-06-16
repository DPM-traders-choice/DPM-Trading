'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'my', label: 'Myanmar', flag: '🇲🇲' },
  { code: 'th', label: 'Thai',    flag: '🇹🇭' },
]

type NavChild  = { label: string; href: string }
type NavColumn = NavChild[]
type NavItem   = {
  label:   string
  href:    string
  align?:  'left' | 'right'
  columns: NavColumn[] | null
}

const NAV_ITEMS: NavItem[] = [
  {
    label:  'Trading',
    href:   '#',
    columns: [
      [
        { label: 'Account Types',          href: '#' },
        { label: 'Instruments',            href: '#' },
        { label: 'Overnight Fees',         href: '#' },
        { label: 'Deposits & Withdrawals', href: '#' },
      ],
      [
        { label: 'Calendar',   href: '#' },
        { label: 'Advantages', href: '#' },
        { label: 'Platforms',  href: '#' },
      ],
    ],
  },
  {
    label:  'Promotions',
    href:   '#',
    columns: [
      [{ label: 'Welcome Bonus', href: '#' }],
    ],
  },
  {
    label:   'Copy Trading',
    href:    '#',
    columns: null,
  },
  {
    label:  'Partners',
    href:   '#',
    columns: [
      [
        { label: 'Partner',           href: '#' },
        { label: 'Create Your Bonus', href: '#' },
      ],
    ],
  },
  {
    label:  'About Us',
    href:   '#',
    align:  'right',
    columns: [
      [
        { label: 'About BBS Markets', href: '#' },
        { label: 'Contact Us',        href: '#' },
        { label: 'Complaints',        href: '#' },
      ],
      [
        { label: 'Legal Documents', href: '#' },
        { label: 'FAQs',            href: '#' },
      ],
    ],
  },
]

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="relative h-16 w-52">
      {/* Gold logo — visible on dark background */}
      <Image
        src="/logoGold.png"
        alt="BBS Markets"
        fill
        className="object-contain object-left transition-opacity duration-300"
        style={{ opacity: scrolled ? 0 : 1 }}
        priority
      />
      {/* White logo — visible on light background after scroll */}
      <Image
        src="/logo.png"
        alt="BBS Markets"
        fill
        className="object-contain object-left transition-opacity duration-300"
        style={{ opacity: scrolled ? 1 : 0 }}
        priority
      />
    </div>
  )
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [langOpen, setLangOpen]             = useState(false)
  const [selectedLang, setSelectedLang]     = useState(LANGUAGES[0])
  const [scrolled, setScrolled]             = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const langRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current) }
  }, [])

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 130)
  }
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  const handleLanguageSelect = (lang: typeof LANGUAGES[0]) => {
    setSelectedLang(lang)
    setLangOpen(false)
    if (lang.code === 'en') {
      window.location.href = window.location.origin + window.location.pathname
      return
    }
    const url = encodeURIComponent(window.location.href)
    window.location.href = `https://translate.google.com/translate?sl=auto&tl=${lang.code}&u=${url}`
  }

  const navTextClass = scrolled
    ? 'text-[#1a1a2e] hover:text-[#1a1a2e]/60'
    : 'text-white hover:text-white/70'

  const navActiveClass = scrolled ? 'text-[#1a1a2e]' : 'text-white'
  const underlineBg    = scrolled ? 'bg-[#1a1a2e]'   : 'bg-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_2px_24px_rgba(0,0,0,0.08)]'
          : 'bg-[#0B111E] after:absolute after:inset-x-0 after:top-full after:h-16 after:bg-linear-to-b after:from-[#0B111E] after:to-transparent after:pointer-events-none'
      }`}
    >

      {/* ── Main navigation bar ── */}
      <div className="max-w-345 mx-auto px-6 md:px-12 h-22 flex items-center justify-between">

        {/* ── Left: Logo + Nav ── */}
        <div className="flex items-center gap-6">
          <Link href="/" className="shrink-0 outline-none">
            <Logo scrolled={scrolled} />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isOpen = activeDropdown === item.label
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.columns ? openDropdown(item.label) : undefined}
                  onMouseLeave={item.columns ? scheduleClose : undefined}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 px-3.5 py-2 text-base font-semibold tracking-wide rounded-md transition-all duration-200 select-none ${
                      isOpen ? navActiveClass : navTextClass
                    }`}
                  >
                    {item.label}
                    {item.columns && (
                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    )}
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full transition-all duration-200 ${underlineBg} ${
                        isOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      }`}
                    />
                  </Link>

                  {item.columns && (
                    <div
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      className={`absolute top-[calc(100%+10px)] z-50 ${
                        item.align === 'right' ? 'right-0' : 'left-0'
                      } transition-all duration-200 ease-out origin-top ${
                        isOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="rounded-3xl bg-white overflow-hidden font-sans shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                        <div className={`flex ${item.columns.length > 1 ? 'divide-x divide-gray-100' : ''}`}>
                          {item.columns.map((col, colIdx) => (
                            <div key={colIdx} className="py-4 px-3 min-w-50">
                              {col.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block px-4 py-3 text-[15px] font-semibold text-[#2d3748] hover:text-[#0c1422] hover:bg-gray-50 rounded-2xl transition-all duration-150 whitespace-nowrap"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>

        {/* ── Right: Login ── */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#"
            className="px-6 py-2.5 text-sm font-bold rounded-lg transition-opacity duration-200 tracking-wide hover:opacity-85"
            style={{
              background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
              color: '#1a0f00',
              boxShadow: '0 4px 20px rgba(212,168,67,0.45)',
            }}
          >
            Login
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden flex items-center justify-center w-10 h-10 shrink-0 transition-colors duration-300 ${
            scrolled ? 'text-[#0c1422]' : 'text-white'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          scrolled ? 'bg-white' : 'bg-[#0B111E]'
        } ${mobileOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="max-w-345 mx-auto px-6 py-3 flex flex-col">
          {NAV_ITEMS.map((item, idx) => {
            const flatItems = item.columns?.flat() ?? []
            const textClass = scrolled ? 'text-[#1a1a2e]' : 'text-white'
            const subTextClass = scrolled ? 'text-[#1a1a2e]/60' : 'text-white/70'
            const dividerClass = scrolled ? 'border-gray-100' : 'border-white/5'
            return (
              <div key={item.label} className={idx !== 0 ? `border-t ${dividerClass}` : ''}>
                {item.columns ? (
                  <>
                    <button
                      className={`w-full flex items-center justify-between py-3.5 text-base font-semibold transition-colors duration-200 ${textClass}`}
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        strokeWidth={2.5}
                        className={`transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-250 ease-in-out ${
                        mobileExpanded === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className={`pl-4 pb-3 border-l ml-2 flex flex-col gap-0.5 ${scrolled ? 'border-gray-200' : 'border-white/8'}`}>
                        {flatItems.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`py-2 text-base transition-colors duration-150 ${subTextClass} hover:${textClass}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center py-3.5 text-base font-semibold transition-colors duration-200 ${textClass}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            )
          })}

          {/* Mobile language selector */}
          <div className={`border-t pt-3 pb-1 flex gap-2 ${scrolled ? 'border-gray-100' : 'border-white/5'}`}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-colors duration-150 ${
                  selectedLang.code === lang.code
                    ? scrolled ? 'bg-gray-100 text-[#0c1422]' : 'bg-white/10 text-white'
                    : scrolled ? 'text-[#1a1a2e]/50 hover:text-[#0c1422]' : 'text-white/50 hover:text-white'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 pb-4">
            <Link
              href="#"
              className="block w-full py-2.5 text-center text-sm font-bold rounded-lg transition-opacity duration-200 hover:opacity-85"
              style={{
                background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
                color: '#1a0f00',
                boxShadow: '0 4px 20px rgba(212,168,67,0.45)',
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
