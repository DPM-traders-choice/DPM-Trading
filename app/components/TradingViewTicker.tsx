'use client'

import { useEffect, useRef } from 'react'

export default function TradingViewTicker() {
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true
    const script = document.createElement('script')
    script.src = 'https://widgets.tradingview-widget.com/w/en/tv-ticker-tape.js'
    script.type = 'module'
    document.head.appendChild(script)
  }, [])

  return (
    <div
      className="mt-16"
      dangerouslySetInnerHTML={{
        __html: '<tv-ticker-tape symbols="FOREXCOM:SPXUSD,FOREXCOM:NSXUSD,FOREXCOM:DJI,FX:EURUSD,BITSTAMP:BTCUSD,BITSTAMP:ETHUSD,CMCMARKETS:GOLD" theme="light" transparent></tv-ticker-tape>',
      }}
    />
  )
}
