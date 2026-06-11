'use client'

import { useState } from 'react'

const INSTRUMENTS = [
  { icon1: '🇪🇺', icon2: '🇺🇸', name: 'EURUSD',  desc: 'Euro vs U.S. Dollar',    bg1: '#003399', bg2: '#B22234' },
  { icon1: '🇺🇸', icon2: '📈',   name: 'US500',   desc: 'S&P 500 Index',           bg1: '#1a3a6b', bg2: '#1a4a2a' },
  { icon1: '🥇',  icon2: null,   name: 'GOLD',    desc: 'Spot Gold (XAU/USD)',     bg1: '#7a5c00', bg2: null      },
  { icon1: '🇬🇧', icon2: '🇺🇸', name: 'GBPUSD',  desc: 'British Pound vs USD',    bg1: '#012169', bg2: '#B22234' },
  { icon1: '₿',   icon2: '🇺🇸', name: 'BTCUSD',  desc: 'Bitcoin vs U.S. Dollar',  bg1: '#3d2000', bg2: '#1a3a6b' },
  { icon1: '🇯🇵', icon2: '🇺🇸', name: 'USDJPY',  desc: 'U.S. Dollar vs Yen',      bg1: '#BC002D', bg2: '#1a3a6b' },
  { icon1: '🍎',  icon2: null,   name: 'AAPL',    desc: 'Apple Inc (AAPL)',        bg1: '#1c1c2e', bg2: null      },
  { icon1: '🛢️',  icon2: null,   name: 'OIL',     desc: 'Crude Oil WTI',           bg1: '#0e2e1a', bg2: null      },
  { icon1: '🇪🇺', icon2: '🇯🇵', name: 'EURJPY',  desc: 'Euro vs Japanese Yen',    bg1: '#003399', bg2: '#BC002D' },
  { icon1: '📊',  icon2: null,   name: 'NAS100',  desc: 'NASDAQ 100',              bg1: '#0e1e3d', bg2: null      },
]

export default function MarqueeTicker() {
  const [paused, setPaused] = useState(false)
  const items = [...INSTRUMENTS, ...INSTRUMENTS]

  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="max-w-345 mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-semibold text-white/40 tracking-wide mb-3">
          Easy Access to 1,400+ Global Assets
        </p>

        {/* Outer clip boundary */}
        <div className="relative overflow-hidden rounded-xl">

          {/* Left fade overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #0B111E 0%, #0B111E 20%, transparent 100%)',
            }}
          />

          {/* Right fade overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, #0B111E 0%, #0B111E 20%, transparent 100%)',
            }}
          />

          {/* Scrolling track */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex gap-3 w-max py-2"
            style={{
              animation: 'ticker-scroll 40s linear infinite',
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-5 py-3.5 rounded-2xl shrink-0 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Dual overlapping icons */}
                <div className="relative shrink-0" style={{ width: 48, height: 40 }}>
                  <div
                    className="absolute bottom-0 left-0 w-8 h-8 rounded-xl flex items-center justify-center text-lg border-2 border-[#0B111E]"
                    style={{ backgroundColor: item.bg1, zIndex: 1 }}
                  >
                    {item.icon1}
                  </div>
                  {item.icon2 ? (
                    <div
                      className="absolute top-0 right-0 w-7 h-7 rounded-xl flex items-center justify-center text-base border-2 border-[#0B111E]"
                      style={{ backgroundColor: item.bg2 ?? '#1a2a3a', zIndex: 2 }}
                    >
                      {item.icon2}
                    </div>
                  ) : (
                    <div
                      className="absolute top-0 right-0 w-7 h-7 rounded-xl flex items-center justify-center text-base border-2 border-[#0B111E]"
                      style={{ backgroundColor: item.bg1, zIndex: 2, opacity: 0.55 }}
                    >
                      {item.icon1}
                    </div>
                  )}
                </div>

                {/* Label */}
                <div>
                  <p className="text-sm font-bold text-white leading-tight tracking-wider">
                    {item.name}
                  </p>
                  <p className="text-xs text-white/45 font-medium mt-0.5 whitespace-nowrap">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
