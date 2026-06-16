'use client'

import { useEffect, useRef } from 'react'

const BAR_COUNT = 60

function rand(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453
  return x - Math.floor(x)
}

const FREQS  = Array.from({ length: BAR_COUNT }, (_, i) => 0.3 + rand(i, 1) * 0.8)
const PHASES = Array.from({ length: BAR_COUNT }, (_, i) => rand(i, 2) * Math.PI * 2)
// Initial heights: 80–180px  (clearly tall on first render)
const BASES  = Array.from({ length: BAR_COUNT }, (_, i) => Math.round(20 + rand(i, 3) * 50))

export default function WaveBar() {
  const barsRef  = useRef<(HTMLDivElement | null)[]>([])
  const timeRef  = useRef(0)
  const boostRef = useRef(0)
  const lastPos  = useRef({ x: -1, y: -1 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (lastPos.current.x >= 0) {
        const dx = e.clientX - lastPos.current.x
        const dy = e.clientY - lastPos.current.y
        boostRef.current = Math.min(boostRef.current + Math.sqrt(dx * dx + dy * dy) * 0.06, 1.5)
      }
      lastPos.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', onMove)

    let rafId: number
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now

      timeRef.current  += dt * (0.8 + boostRef.current * 0.5)
      boostRef.current *= 0.94

      barsRef.current.forEach((bar, i) => {
        if (!bar) return
        const sin    = Math.sin(timeRef.current * FREQS[i] + PHASES[i])
        const amp    = 15 + boostRef.current * 30
        // sin * 0.5 + 0.5 maps -1..1 → 0..1
        const h = BASES[i] + amp * (sin * 0.5 + 0.5)
        bar.style.height = `${Math.round(h)}px`
      })

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden flex items-end justify-between bg-white"
      style={{ height: '110px' }}
    >
      {BASES.map((h, i) => (
        <div
          key={i}
          ref={el => { barsRef.current[i] = el }}
          suppressHydrationWarning
          style={{
            width: '7px',
            height: `${h}px`,
            background: 'rgba(212,168,67,0.5)',
            borderRadius: '3px 3px 0 0',
            flexShrink: 0,
            transition: 'height 80ms ease-out',
          }}
        />
      ))}

      {/* Bottom fade — softens the base of the bars */}
      <div
        className="absolute bottom-0 inset-x-0 pointer-events-none"
        style={{
          height: '36px',
          background: 'linear-gradient(to bottom, transparent, white)',
        }}
      />
    </div>
  )
}
