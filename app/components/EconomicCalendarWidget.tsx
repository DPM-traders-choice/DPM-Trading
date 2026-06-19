'use client'

import { useEffect, useRef, memo } from 'react'

function EconomicCalendarWidget() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = JSON.stringify({
      colorTheme: 'light',
      isTransparent: false,
      locale: 'en',
      countryFilter: 'ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu',
      importanceFilter: '-1,0,1',
      width: '100%',
      height: 680,
    })
    container.current.appendChild(script)
  }, [])

  return (
    <div className="tradingview-widget-container w-full" ref={container}>
      <div className="tradingview-widget-container__widget" />
      <div className="tradingview-widget-copyright text-xs text-slate-400 mt-2 text-center">
        <a
          href="https://www.tradingview.com/economic-calendar/"
          rel="noopener nofollow"
          target="_blank"
          className="hover:underline text-blue-500"
        >
          Economic Calendar
        </a>
        {' '}by TradingView
      </div>
    </div>
  )
}

export default memo(EconomicCalendarWidget)
