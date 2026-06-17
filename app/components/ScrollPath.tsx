'use client'

import { useEffect, useRef } from 'react'

function buildPath(w: number, h: number): string {
  const cx = w / 2
  const amp = w * 0.28
  const dropEnd = h * 0.18
  const winding = h - dropEnd
  const segs = 4
  const sh = winding / segs

  let d = `M ${cx} 0 L ${cx} ${dropEnd}`
  for (let i = 0; i < segs; i++) {
    const y0 = dropEnd + i * sh
    const dir = i % 2 === 0 ? 1 : -1
    d += ` C ${cx + dir * amp} ${y0 + sh * 0.22},`
    d += `   ${cx + dir * amp} ${y0 + sh * 0.78},`
    d += `   ${cx} ${y0 + sh}`
  }
  return d
}

export default function ScrollPath() {
  const outerRef = useRef<HTMLDivElement>(null)   // scroll progress anchor
  const clipRef  = useRef<HTMLDivElement>(null)   // clip-path target (GPU composited)
  const svgRef   = useRef<SVGSVGElement>(null)
  const pathRef  = useRef<SVGPathElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    const clip  = clipRef.current
    const svg   = svgRef.current
    const path  = pathRef.current
    if (!outer || !clip || !svg || !path) return

    let raf: number | null = null

    const build = () => {
      const w = outer.offsetWidth
      const h = outer.offsetHeight
      svg.setAttribute('width',  String(w))
      svg.setAttribute('height', String(h))
      path.setAttribute('d', buildPath(w, h))
    }

    const tick = () => {
      raf = null
      const scrollable = outer.offsetHeight - window.innerHeight
      const progress   = Math.max(0, Math.min(1, window.scrollY / Math.max(1, scrollable)))
      // Reveal from top by shrinking the bottom inset — GPU composited, zero paint
      clip.style.clipPath = `inset(0 0 ${(1 - progress) * 100}% 0)`
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(tick)
    }

    const onResize = () => { build(); tick() }

    build()
    setTimeout(onResize, 350)
    tick()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      ref={outerRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden
    >
      {/* clip-path on this div — GPU composited, no repaint on scroll */}
      <div
        ref={clipRef}
        className="absolute inset-0"
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <svg
          ref={svgRef}
          className="absolute top-0 left-0"
          style={{
            overflow: 'visible',
            // drop-shadow painted once, not re-applied on scroll
            filter: 'drop-shadow(0 0 3px rgba(245,158,11,0.6))',
          }}
        >
          <path
            ref={pathRef}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
