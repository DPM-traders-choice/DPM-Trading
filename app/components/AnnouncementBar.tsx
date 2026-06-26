'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

type Announcement = { id: string; text: string }

function Divider() {
  return <span className="mx-8 select-none text-white/15" aria-hidden>✦</span>
}

export default function AnnouncementBar() {
  const pathname              = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [items, setItems]       = useState<Announcement[]>([])

  // Fetch active announcements from admin API
  useEffect(() => {
    fetch('/api/announcements')
      .then(r => r.json())
      .then(setItems)
      .catch(() => {})
  }, [pathname])

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Don't render on admin pages or when no announcements
  if (pathname.startsWith('/admin')) return null
  if (items.length === 0) return null

  // Pad so there are always at least 5 entries — prevents marquee gaps when few items
  const padded = Array.from({ length: Math.max(5, items.length) }, (_, i) => items[i % items.length])

  const content = padded.flatMap((a, i) => [
    <span key={i} className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="text-amber-400 text-xs">✦</span>
      <span className="text-[11px] text-white/70 font-light">{a.text}</span>
    </span>,
    <Divider key={`d${i}`} />,
  ])

  return (
    <div
      className="fixed left-0 right-0 z-40 overflow-hidden transition-all duration-500"
      style={{
        top: 'var(--header-height, 88px)',
        height: scrolled ? '34px' : '0px',
        opacity: scrolled ? 1 : 0,
        background: '#07101f',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #07101f 40%, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #07101f 40%, transparent)' }} />

      <div className="flex items-center h-full">
        <div className="marquee-track flex items-center">
          {content}
          {content}
        </div>
      </div>
    </div>
  )
}
