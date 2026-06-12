'use client'

import { useEffect, useRef } from 'react'

export default function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Inject script once
    if (!document.querySelector('script[data-tv-ticker]')) {
      const s = document.createElement('script')
      s.type = 'module'
      s.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js'
      s.setAttribute('data-tv-ticker', '1')
      document.head.appendChild(s)
    }

    // Create the web component element
    const el = document.createElement('tv-ticker-tape')
    el.setAttribute('symbols', 'FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD')
    el.setAttribute('theme', 'light')
    el.setAttribute('transparent', '')
    container.appendChild(el)

    return () => { el.remove() }
  }, [])

  return <div ref={containerRef} />
}
