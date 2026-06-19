'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '/flags/english.png' },
  { code: 'my', label: 'Myanmar', flag: '/flags/Flag_of_Myanmar.svg.png' },
  { code: 'th', label: 'Thai',    flag: '/flags/thailand.svg' },
]

type NavChild  = { label: string; href: string }
type NavColumn = NavChild[]
type NavItem   = {
  label:      string
  href:       string
  align?:     'left' | 'right'
  columns:    NavColumn[] | null
  noNavigate?: boolean
}

const NAV_ITEMS: NavItem[] = [
  {
    label:  'Trading',
    href:   '#',
    columns: [
      [
        { label: 'Account Types',          href: '/trading/account-types' },
        { label: 'Instruments',            href: '/trading/instruments' },
        { label: 'Overnight Fees',         href: '/trading/overnight-fees' },
        { label: 'Deposits & Withdrawals', href: '/trading/deposits-withdrawals' },
      ],
      [
        { label: 'Calendar',   href: '/trading/calendar' },
        { label: 'Advantages', href: '/trading/advantages' },
      ],
    ],
  },
  {
    label:  'Promotions',
    href:   '#',
    columns: [
      [{ label: 'Welcome Bonus', href: '/promotions/welcome-bonus' }],
    ],
  },
  {
    label:   'Copy Trading',
    href:    '/copy-trading',
    columns: null,
  },
  {
    label:      'Partners',
    href:       '/partners',
    noNavigate: true,
    columns: [
      [
        { label: 'Partner',           href: '/partner' },
        { label: 'Create Your Bonus', href: '/partners/create-your-bonus' },
      ],
    ],
  },
  {
    label:  'About Us',
    href:   '/about-us',
    align:  'right',
    columns: [
      [
        { label: 'About DPM',       href: '/about-us/about-dpm' },
        { label: 'Contact Us',      href: '/about-us/contact-us' },
        { label: 'Complaints',      href: '/about-us/complaints' },
      ],
      [
        { label: 'Legal Documents', href: '/about-us/legal-documents' },
        { label: 'FAQs',            href: '/about-us/faqs' },
      ],
    ],
  },
]


export default function Header() {
  const pathname = usePathname()
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
      // eslint-disable-next-line react-hooks/immutability
      window.location.href = window.location.origin + window.location.pathname
      return
    }
    const url = encodeURIComponent(window.location.href)
    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `https://translate.google.com/translate?sl=auto&tl=${lang.code}&u=${url}`
  }

  const isNavActive = (href: string) =>
    href !== '/' && pathname.startsWith(href)

  const LIGHT_PAGES = [
    '/trading/advantages',
    '/trading/overnight-fees',
    '/trading/deposits-withdrawals',
    '/trading/instruments',
    '/trading/calendar',
    '/promotions/welcome-bonus',
    '/copy-trading',
    '/partners',
    '/partner',
  ]
  const SCROLL_WHITE_PAGES = ['/trading/account-types']
  const isLight = LIGHT_PAGES.some(p => pathname === p || pathname.startsWith(p + '/'))
  const isWhite = isLight || (pathname === '/' && scrolled) || (SCROLL_WHITE_PAGES.some(p => pathname === p || pathname.startsWith(p + '/')) && scrolled)

  const navTextClass   = isWhite ? 'text-[#101829]/70 hover:text-[#101829]' : 'text-white/75 hover:text-white'
  const navActiveClass = isWhite ? 'text-[#101829]' : 'text-white'
  const underlineBg    = 'bg-[#D4A843]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? isWhite
            ? 'shadow-[0_2px_28px_rgba(0,0,0,0.08)]'
            : 'shadow-[0_2px_28px_rgba(0,0,0,0.35)]'
          : ''
      }`}
      style={{
        background: isWhite
          ? '#ffffff'
          : pathname === '/'
            ? '#0B111E'
            : '#101829',
      }}
    >

      {/* ── Main navigation bar ── */}
      <div className="max-w-345 mx-auto px-6 md:px-12 h-22 flex items-center justify-between">

        {/* ── Left: Logo + Nav ── */}
        <div className="flex items-center gap-6">
          <Link href="/" className="shrink-0 outline-none">
            <div className="relative h-14 w-44">
              <Image
                src={isWhite ? '/logo.png' : '/logoGold.png'}
                alt="DPM"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
                const isOpen   = activeDropdown === item.label
                const isActive = isNavActive(item.href)
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.columns ? openDropdown(item.label) : undefined}
                    onMouseLeave={item.columns ? scheduleClose : undefined}
                  >
                    {item.noNavigate ? (
                      <button
                        onClick={() => openDropdown(item.label)}
                        className={`relative flex items-center gap-1.5 px-3.5 py-2 text-base font-semibold tracking-wide rounded-md transition-all duration-200 select-none ${
                          isOpen || isActive ? navActiveClass : navTextClass
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          strokeWidth={2.5}
                          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                        <span
                          className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full transition-all duration-200 ${underlineBg} ${
                            isActive || isOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative flex items-center gap-1.5 px-3.5 py-2 text-base font-semibold tracking-wide rounded-md transition-all duration-200 select-none ${
                          isOpen || isActive ? navActiveClass : navTextClass
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
                            isActive || isOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                          }`}
                        />
                      </Link>
                    )}

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

        {/* ── Right: Language + Login ── */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150 ${isWhite ? 'text-[#101829]/70 hover:text-[#101829]' : 'text-white/80 hover:text-white'}`}
            >
              <span className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 block"><Image src={selectedLang.flag} alt={selectedLang.label} width={18} height={18} className="w-full h-full object-cover" /></span>
              <span>{selectedLang.label}</span>
              <ChevronDown size={12} strokeWidth={2.5} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.14)] overflow-hidden min-w-36 py-1.5 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors duration-100 ${
                      selectedLang.code === lang.code
                        ? 'text-[#D4A843] bg-[#D4A843]/8'
                        : 'text-[#2d3748] hover:bg-gray-50'
                    }`}
                  >
                    <span className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 block"><Image src={lang.flag} alt={lang.label} width={18} height={18} className="w-full h-full object-cover" /></span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

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
          className={`lg:hidden flex items-center justify-center w-10 h-10 shrink-0 ${isWhite ? 'text-[#101829]' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#101829] ${
          mobileOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-345 mx-auto px-6 py-3 flex flex-col">
          {NAV_ITEMS.map((item, idx) => {
            const flatItems    = item.columns?.flat() ?? []
            const isActive     = isNavActive(item.href)
            const textClass    = 'text-white'
            const dividerClass = 'border-white/5'
            return (
              <div key={item.label} className={idx !== 0 ? `border-t ${dividerClass}` : ''}>
                {item.columns ? (
                  <>
                    <button
                      className={`w-full flex items-center justify-between py-3.5 text-base font-semibold transition-colors duration-200 ${
                        isActive ? 'text-[#D4A843]' : textClass
                      }`}
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] shrink-0" />}
                        {item.label}
                      </span>
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
                      <div className="pl-4 pb-3 border-l border-white/8 ml-2 flex flex-col gap-0.5">
                        {flatItems.map((child) => {
                          const childActive = pathname === child.href
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`py-2 text-base transition-colors duration-150 font-medium ${
                                childActive
                                  ? 'text-[#D4A843]'
                                  : 'text-white/70'
                              }`}
                            >
                              {child.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 py-3.5 text-base font-semibold transition-colors duration-200 ${
                      isActive ? 'text-[#D4A843]' : textClass
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] shrink-0" />}
                    {item.label}
                  </Link>
                )}
              </div>
            )
          })}

          {/* Mobile language selector */}

          <div className="border-t border-white/5 pt-3 pb-1 flex gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-colors duration-150 ${
                  selectedLang.code === lang.code
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <span className="w-4.5 h-4.5 rounded-full overflow-hidden shrink-0 block"><Image src={lang.flag} alt={lang.label} width={18} height={18} className="w-full h-full object-cover" /></span>
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
