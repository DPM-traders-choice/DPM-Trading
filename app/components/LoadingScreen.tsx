'use client'

import { useEffect, useState } from 'react'

const W = 220
const H = 120

// [x, bodyY, bodyH, wickTop, wickBottom, isGreen]
const CANDLES: [number, number, number, number, number, boolean][] = [
  [12,  92, 14,  86, 112, false],
  [30,  75, 16,  68,  98, true ],
  [48,  68, 18,  62,  94, false],
  [66,  55, 20,  48,  84, true ],
  [84,  48, 16,  42,  78, true ],
  [102, 35, 22,  28,  66, true ],
  [120, 38, 14,  32,  58, false],
  [138, 22, 24,  16,  52, true ],
  [156, 18, 16,  12,  44, true ],
  [174, 10, 20,   4,  38, true ],
]

const GREEN = '#D4A843'
const RED   = '#F0CC70'

export default function LoadingScreen() {
  const [visible, setVisible]   = useState(0)
  const [showLine, setShowLine] = useState(false)
  const [exit, setExit]         = useState(false)
  const [gone, setGone]         = useState(false)

  useEffect(() => {
    // Skip animation on subsequent visits within the same session
    if (sessionStorage.getItem('intro-shown')) {
      window.dispatchEvent(new CustomEvent('hero:ready'))
      setGone(true)
      return
    }
    sessionStorage.setItem('intro-shown', '1')

    const timers: ReturnType<typeof setTimeout>[] = []

    // Reveal candles one by one
    CANDLES.forEach((_, i) => {
      timers.push(setTimeout(() => setVisible(i + 1), 300 + i * 140))
    })

    const allDone = 300 + CANDLES.length * 140
    timers.push(setTimeout(() => setShowLine(true), allDone + 100))
    timers.push(setTimeout(() => {
      setExit(true)
      window.dispatchEvent(new CustomEvent('hero:ready'))
    }, allDone + 700))
    timers.push(setTimeout(() => setGone(true),     allDone + 700 + 1000))

    return () => timers.forEach(clearTimeout)
  }, [])

  if (gone) return null

  const pricePoints = CANDLES
    .map(([x, bodyY, bodyH, , , isGreen]) => `${x},${isGreen ? bodyY : bodyY + bodyH}`)
    .join(' ')

  return (
    <>
      <style>{`
        @keyframes candle-in {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes line-draw {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0;   }
        }
        @keyframes panel-exit {
          to { transform: translateY(-100%); }
        }
      `}</style>

      <div
        className="fixed inset-0 z-200 bg-[#0B111E] flex items-center justify-center"
        style={exit ? {
          animation: 'panel-exit 0.9s cubic-bezier(0.76, 0, 0.24, 1) forwards',
          pointerEvents: 'none',
        } : {}}
      >
        <svg
          width="352"
          height="192"
          viewBox={`0 0 ${W} ${H}`}
          fill="none"
          style={{ animation: 'fade-in 0.4s ease 0.1s both' }}
        >
          {/* Grid lines */}
          {[30, 60, 90].map(y => (
            <line key={y} x1="0" y1={y} x2={W} y2={y}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.5"
            />
          ))}

          {/* Candles */}
          {CANDLES.map(([x, bodyY, bodyH, wickTop, wickBottom, isGreen], i) => {
            if (i >= visible) return null
            const color = isGreen ? GREEN : RED
            return (
              <g key={i} style={{ animation: 'candle-in 0.2s ease both' }}>
                <line x1={x} y1={wickTop} x2={x} y2={wickBottom}
                  stroke={color} strokeWidth="1" />
                <rect x={x - 5} y={bodyY} width="10" height={bodyH}
                  fill={color} rx="1" />
              </g>
            )
          })}

          {/* Price trend line */}
          {showLine && (
            <polyline
              points={pricePoints}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="0.75"
              strokeDasharray="600"
              strokeDashoffset="0"
              fill="none"
              style={{ animation: 'line-draw 0.5s ease both' }}
            />
          )}

          {/* Latest price dot */}
          {showLine && (
            <circle
              cx={CANDLES[CANDLES.length - 1][0]}
              cy={CANDLES[CANDLES.length - 1][1]}
              r="3"
              fill={GREEN}
              style={{ animation: 'fade-in 0.3s ease 0.3s both' }}
            />
          )}
        </svg>
      </div>
    </>
  )
}
