'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const FEATURES = [
  '4 Unique Remuneration Schemes.',
  'Competitive Rebates Per Lot Traded.',
  'Unlimited Tier Of Partners.',
  'Earn From Clients and Sub-Partners Alike.',
  'Guaranteed Income, No Downside.',
  'World Class Suite For Monitoring Your Revenues.',
]

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const rightRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean) as HTMLDivElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('ps-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text ── */}
          <div ref={leftRef} className="ps-left flex-1 flex flex-col gap-8">

            {/* Heading */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase" style={{ color: '#D4A843' }}>
                Partnership Program
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    background: 'linear-gradient(160deg, #020202 0%, #080808 15%, #0f0f0f 28%, #1c1c1c 42%, #3a3a3a 52%, #111111 64%, #050505 78%, #080808 90%, #020202 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                Partner With A Flexible<br />
                Bespoke Partner.{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #1e3a6e 0%, #2563eb 50%, #1e3a6e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Become<br />A Partner Today!
                </span>
              </h2>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3.5">
              {FEATURES.map((feat, i) => (
                <li key={i} className="ps-feat flex items-start gap-3"
                    style={{ '--feat-delay': `${i * 70}ms` } as React.CSSProperties}>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5"
                        style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)' }}>
                    <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#2563eb" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm md:text-base font-medium" style={{ color: '#374151' }}>
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="ps-cta flex items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-opacity duration-200 hover:opacity-85"
                style={{
                  background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
                  color: '#1a0f00',
                  boxShadow: '0 6px 24px rgba(212,168,67,0.45)',
                }}
              >
                Learn More <ArrowUpRight size={15} strokeWidth={2.5} />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                style={{ color: '#2563eb' }}
              >
                View All Benefits <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* ── Right: Illustration ── */}
          <div ref={rightRef}
               className="ps-right relative w-full lg:w-[480px] shrink-0 flex items-center justify-center">

            {/* Background circle */}
            <div className="absolute w-[380px] h-[380px] rounded-full pointer-events-none"
                 style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />

            {/* Stat card */}
            <div className="absolute top-4 right-0 lg:right-[-20px] bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                 style={{ minWidth: '180px', zIndex: 10 }}>
              <p className="text-2xl font-black" style={{ color: '#0c1422' }}>100%</p>
              <p className="text-sm font-medium mt-0.5" style={{ color: '#64748b' }}>Satisfied Clients</p>
              <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: '#e2e8f0' }}>
                <div className="h-full rounded-full" style={{ width: '100%', background: 'linear-gradient(90deg, #2563eb, #60a5fa)' }} />
              </div>
            </div>

            {/* Main illustration */}
            <div className="relative w-[340px] h-[340px]">
              <Image
                src="/prsentbox.png"
                alt="Partner"
                fill
                sizes="340px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* Left side — slide from left */
        .ps-left {
          opacity: 0;
          transform: translateX(-48px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                      transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .ps-left.ps-visible {
          opacity: 1;
          transform: none;
        }

        /* Right side — slide from right */
        .ps-right {
          opacity: 0;
          transform: translateX(48px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1) 120ms,
                      transform 0.85s cubic-bezier(0.16,1,0.3,1) 120ms;
        }
        .ps-right.ps-visible {
          opacity: 1;
          transform: none;
        }

        /* Feature items stagger */
        .ps-feat {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1) var(--feat-delay,0ms),
                      transform 0.6s cubic-bezier(0.16,1,0.3,1) var(--feat-delay,0ms);
        }
        .ps-visible .ps-feat {
          opacity: 1;
          transform: none;
        }

        /* CTA */
        .ps-cta {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 500ms, transform 0.6s ease 500ms;
        }
        .ps-visible .ps-cta {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </section>
  )
}
