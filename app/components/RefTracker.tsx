'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ALLOWED = ['facebook', 'tiktok', 'youtube', 'telegram']

export default function RefTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname.startsWith('/admin')) return
    if (sessionStorage.getItem('ref_tracked')) return

    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')?.toLowerCase() ?? ''
    if (!ALLOWED.includes(ref)) return

    sessionStorage.setItem('ref_tracked', '1')
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref }),
    }).catch(() => {})
  }, [pathname])

  return null
}
