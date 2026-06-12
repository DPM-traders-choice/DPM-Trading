'use client'

import { useEffect, useRef } from 'react'

const BAR_COUNT = 55

// Deterministic pseudo-random so server and client produce identical values
function seeded(i: number) {
  const x = Math.sin(i + 1) * 10000
  return x - Math.floor(x)
}

const BASE_HEIGHTS = Array.from({ length: BAR_COUNT }, (_, i) =>
  Math.floor(seeded(i) * 36) + 10
)

export default function WaveBar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const barsRef      = useRef<(HTMLDivElement | null)[]>([])
  const mouseXRef    = useRef<number | null>(null)

  const baseHeights = BASE_HEIGHTS

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      // Map global mouse X to container-local X (can be outside 0..width)
      mouseXRef.current = e.clientX - rect.left
    }

    window.addEventListener('mousemove', onMove)

    let rafId: number

    const tick = () => {
      const mx = mouseXRef.current
      const w  = container.offsetWidth
      const bw = w / BAR_COUNT

      barsRef.current.forEach((bar, i) => {
        if (!bar) return
        const cx   = (i + 0.5) * bw
        const dist = mx !== null ? Math.abs(mx - cx) : Infinity
        const radius = w * 0.22
        const t      = Math.max(0, 1 - dist / radius)
        const eased  = t * t * (3 - 2 * t)
        const h      = baseHeights[i] + (72 - baseHeights[i]) * eased
        bar.style.height = `${h}px`
      })

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [baseHeights])

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-end justify-between overflow-hidden"
      style={{ height: '88px' }}
    >
      {baseHeights.map((h, i) => (
        <div
          key={i}
          ref={el => { barsRef.current[i] = el }}
          className="rounded-full"
          style={{
            width: '6px',
            height: `${h}px`,
            background: 'rgba(59,130,246,0.25)',
            transition: 'height 80ms ease-out',
            flexShrink: 0,
          }}
        />
      ))}

      {/* Bottom fade into section bg */}
      <div
        className="absolute bottom-0 inset-x-0 h-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />
    </div>
  )
}
