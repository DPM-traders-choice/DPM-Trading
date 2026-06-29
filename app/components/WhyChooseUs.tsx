'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const PARTNER_FEATURES = [
  '4 unique remuneration schemes',
  'Competitive rebates per lot traded',
  'Unlimited tier of partners',
  'Earn from clients and sub-partners alike',
  'Guaranteed income, no downside',
  'World class suite for monitoring revenues',
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.bento-card')
    if (!cards) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )
    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white pt-24 md:pt-32 pb-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Card 1 — Trophy */}
          <div
            className="wcu-card bento-card from-left relative rounded-4xl overflow-hidden p-10 flex flex-col justify-between min-h-80"
            style={{ backgroundImage: 'linear-gradient(135deg, #0a1628 0%, #0f2050 100%)' }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
              <defs>
                <pattern id="wcu-p1" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="28" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wcu-p1)" fillOpacity="0.05"/>
            </svg>
            <div className="wcu-glow absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.35) 0%, transparent 70%)' }} />

            <div className="relative flex flex-col gap-5 max-w-[55%]">
              <p className="bento-label text-xs font-semibold tracking-widest text-blue-400 uppercase">Our Story</p>
              <h2 className="bento-heading inline-block bg-clip-text text-transparent bg-linear-to-b from-5% from-white to-90% to-gray-400 font-bold text-3xl xl:text-4xl leading-[1.15] tracking-tight">
                Why Choose<br />DPM?
              </h2>
              <p className="bento-body text-sm font-medium text-white/55 leading-relaxed">
                A multicultural board of professionals approaching global clientele in a bespoke and local way.
              </p>
            </div>
            <Link href="/about-us/about-dpm" className="bento-cta relative flex items-center gap-1.5 text-base font-bold text-white hover:text-blue-300 transition-colors duration-200 w-fit">
              Learn More <ArrowUpRight size={18} strokeWidth={2.5} />
            </Link>

            <div className="bento-img absolute bottom-0 right-0 w-32 h-40 md:w-52 md:h-64 pointer-events-none">
              <div className="wcu-img-inner w-full h-full" style={{ transformOrigin: 'bottom right' }}>
                <Image src="/Trophy.png" alt="Trophy" fill sizes="(max-width:768px) 100vw, 33vw" className="object-contain object-bottom drop-shadow-2xl" />
              </div>
            </div>
          </div>

          {/* Card 2 — Philosophy */}
          <div
            className="wcu-card bento-card from-right relative rounded-4xl overflow-hidden p-10 flex flex-col justify-between min-h-80"
            style={{ backgroundImage: 'linear-gradient(135deg, #0f2050 0%, #0a1628 100%)' }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
              <defs>
                <pattern id="wcu-p2" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect x="0.5" y="0.5" width="31" height="31" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wcu-p2)" fillOpacity="0.05"/>
            </svg>
            <div className="wcu-glow absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 70%)' }} />

            <div className="relative flex flex-col gap-5 max-w-[60%]">
              <p className="bento-label text-xs font-semibold tracking-widest text-blue-400 uppercase">Our Philosophy</p>
              <h2 className="bento-heading inline-block bg-clip-text text-transparent bg-linear-to-b from-5% from-white to-90% to-gray-400 font-bold text-3xl xl:text-4xl leading-[1.15] tracking-tight">
                Clients First,<br />Always.
              </h2>
              <p className="bento-body text-sm font-medium text-white/55 leading-relaxed">
                We do not treat our Clients and Partners as numbers but strive to build sustainable long-term relationships.
              </p>
            </div>
            <Link href="https://my.dpmtrade.com/register/"
              target="_blank"
              rel="noopener noreferrer" className="bento-cta relative flex items-center gap-1.5 text-base font-bold text-white hover:text-blue-300 transition-colors duration-200 w-fit">
              Join Now <ArrowUpRight size={18} strokeWidth={2.5} />
            </Link>

            <div className="bento-img absolute bottom-0 right-0 w-24 h-36 md:w-40 md:h-52 pointer-events-none">
              <div className="wcu-img-inner w-full h-full" style={{ transformOrigin: 'bottom right' }}>
                <Image src="/client.png" alt="Clients" fill sizes="(max-width:768px) 100vw, 33vw" className="object-contain object-bottom drop-shadow-2xl" />
              </div>
            </div>
          </div>

          {/* Card 3 — Partner */}
          <div
            className="wcu-card bento-card from-bottom md:col-span-2 relative rounded-4xl p-10 flex flex-col md:flex-row gap-10 min-h-70"
            style={{ backgroundImage: 'linear-gradient(135deg, #0a1628 0%, #0f2050 60%, #0a1628 100%)' }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
              <defs>
                <pattern id="wcu-p3" width="40" height="40" patternUnits="userSpaceOnUse">
                  <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="0.5"/>
                  <line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wcu-p3)" fillOpacity="0.04"/>
            </svg>
            <div className="wcu-glow absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(59,130,246,0.12) 0%, transparent 65%)' }} />

            <div className="relative flex flex-col justify-between gap-6 md:w-2/5 shrink-0">
              <div className="flex flex-col gap-3">
                <p className="bento-label text-xs font-semibold tracking-widest text-blue-400 uppercase">Partnership</p>
                <h2 className="bento-heading inline-block bg-clip-text text-transparent bg-linear-to-b from-5% from-white to-90% to-gray-400 font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight" style={{ fontFamily: 'var(--font-inter)' }}>
                  Become a Partner<br />Today
                </h2>
                <p className="bento-body text-sm font-medium text-white/55 leading-relaxed">
                  Partner with a flexible bespoke partner and unlock exclusive earning opportunities.
                </p>
              </div>
              <Link href="https://my.dpmtrade.com/register/"
              target="_blank"
              rel="noopener noreferrer" className="bento-cta flex items-center gap-1.5 text-base font-bold text-white hover:text-blue-300 transition-colors duration-200 w-fit">
                Get Started <ArrowUpRight size={18} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 content-center">
              {PARTNER_FEATURES.map((item, i) => (
                <div key={item} className="bento-feature flex items-start gap-2.5" style={{ transitionDelay: `${480 + i * 80}ms` }}>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600/20 shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-white/65 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="bento-img absolute -bottom-10 -right-10 w-24 h-24 md:w-44 md:h-44 pointer-events-none">
              <div className="wcu-img-inner w-full h-full" style={{ transformOrigin: 'bottom right' }}>
                <Image src="/prsentbox.png" alt="Partnership" fill sizes="(max-width:768px) 100vw, 33vw" className="object-contain object-bottom drop-shadow-2xl" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* Card hover — box-shadow only, no transform conflict */
        .wcu-card {
          transition:
            box-shadow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) var(--bento-delay, 0ms),
            transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) var(--bento-delay, 0ms);
        }
        .wcu-card:hover {
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.09);
        }

        /* Glow intensifies on hover */
        .wcu-glow {
          transition: opacity 0.9s ease;
          opacity: 1;
        }
        .wcu-card:hover .wcu-glow {
          opacity: 1.6;
          filter: blur(2px);
        }

        /* Image inner — smooth parallax scale */
        .wcu-img-inner {
          transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .wcu-card:hover .wcu-img-inner {
          transform: scale(1.08) translateY(-10px);
        }
      `}</style>
    </section>
  )
}
