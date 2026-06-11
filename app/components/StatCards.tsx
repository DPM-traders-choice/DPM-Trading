'use client'

import { useState } from 'react'
import { Gauge, Globe, TrendingUp, Gift } from 'lucide-react'

const STATS = [
  { Icon: Gauge,      value: '0 Pips',  label: 'Ultra Low Spreads'   },
  { Icon: Globe,      value: '300+',    label: 'Trading Instruments' },
  { Icon: TrendingUp, value: '1:5000',  label: 'Maximum Leverage'    },
  { Icon: Gift,       value: '$500',    label: 'Welcome Bonus'       },
]

export default function StatCards() {
  const [paused, setPaused] = useState(false)
  const items = [...STATS, ...STATS, ...STATS, ...STATS]

  return (
    <>
      <style>{`
        @keyframes stat-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>

      <div className="max-w-345 mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden">

          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0B111E, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0B111E, transparent)' }}
          />

          <div
            className="flex gap-3 w-max py-1"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{
              animation: 'stat-scroll 20s linear infinite',
              animationPlayState: paused ? 'paused' : 'running',
              willChange: 'transform',
            }}
          >
            {items.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 py-4 rounded-2xl shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #0c1828 0%, #0d1d36 100%)',
                  minWidth: '210px',
                }}
              >
                <stat.Icon size={28} strokeWidth={1.6} className="text-blue-400 shrink-0" />

                {/* Text */}
                <div>
                  <p className="text-xl font-bold text-white leading-none tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40 font-medium mt-1.5 whitespace-nowrap">
                    {stat.label}
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
