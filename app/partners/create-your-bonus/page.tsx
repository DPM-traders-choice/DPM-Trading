'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function CreateYourBonusPage() {
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      bbsId:       fd.get('bbsId') as string,
      bonusName:   fd.get('bonusName') as string,
      cashBack:    fd.get('cashBack') as string,
      loseable:    fd.get('loseable') as string,
      rebates:     fd.get('rebates') as string,
      description: fd.get('description') as string,
    }

    try {
      const res = await fetch('/api/bonus-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error((await res.json()).error ?? 'Submission failed')
      setStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setStatus('error')
    }
  }

  useEffect(() => {
    const els = document.querySelectorAll('.cyb-reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('cyb-visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main className="overflow-hidden">

      {/* ── Hero wrapper — relative so peeking image can escape section clip ── */}
      <div className="relative">

      {/* ── Hero ── */}
      <section
        className="relative px-6 md:px-12 pb-40 overflow-hidden"
        style={{
          background: '#0B111E',
          paddingTop: '180px',
          minHeight: '100svh',
          borderBottomLeftRadius: '4rem',
          borderBottomRightRadius: '4rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Dot-wave SVG background */}
        <svg
          className="absolute left-0 w-full pointer-events-none"
          viewBox="0 0 1440 200"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
          style={{ bottom: '15%' }}
        >
          {(() => {
            let seed = 42
            const rand = () => { seed = (seed * 16807 + 0) % 2147483647; return (seed - 1) / 2147483646 }
            const dots = []
            const cols = 80
            const rows = 20
            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                const t = c / (cols - 1)
                const x = t * 1440
                const waveY = 60 - Math.sin(t * Math.PI * 1.3) * 100 - r * 9
                const jitter = rand() * 6 - 3
                const y = waveY + jitter
                if (y > 202 || y < 0) { rand(); rand(); continue }
                const opacityBase = Math.max(0, 1 - t * 0.4) * Math.max(0, 1 - (200 - y) / 200)
                const opacity = Math.min(0.75, opacityBase * (0.5 + rand() * 0.4))
                const radius = 1.2 + rand() * 1.4
                dots.push(
                  <circle key={`${r}-${c}`} cx={+x.toFixed(1)} cy={+y.toFixed(1)} r={+radius.toFixed(1)} fill="#94a3b8" opacity={+opacity.toFixed(2)} />
                )
              }
            }
            return dots
          })()}
        </svg>

        <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text column */}
          <div className="flex flex-col gap-8 flex-1">
            <p
              className="banner-item text-sm font-bold tracking-[0.18em] uppercase text-blue-400"
              style={{ ['--i' as string]: 0 }}
            >
              DPM Markets
            </p>

            <h1
              className="banner-item text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              style={{ ['--i' as string]: 1 }}
            >
              Own Bonus Promotion
            </h1>

            <p
              className="banner-item text-lg md:text-xl font-semibold text-white/90"
              style={{ ['--i' as string]: 2 }}
            >
              Create Your Very Own Bonus Promotion with DPM Markets.
            </p>

            <p
              className="banner-item text-base text-gray-400 leading-relaxed"
              style={{ ['--i' as string]: 3 }}
            >
              Over the years some of the best ideas have often come from our Partners and Industry
              Colleagues! As such we are smart enough to recognize that the best results are achieved
              together as a Group and not as one.
            </p>

            <p
              className="banner-item text-base text-gray-400 leading-relaxed"
              style={{ ['--i' as string]: 4 }}
            >
              DPM Markets offers the chance to its Eligible Partners* to propose their own bespoke
              Bonus Promotion which will be used Exclusively** for their network.
            </p>

            <div
              className="banner-item"
              style={{ ['--i' as string]: 5 }}
            >
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-lg bg-white text-[#0B111E] hover:bg-white/90 transition-colors duration-300 px-7 py-3.5 text-base font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Hero image — right side */}
          <div
            className="banner-item shrink-0 hidden lg:flex items-end justify-center self-stretch"
            style={{ ['--i' as string]: 2 }}
          >
            <Image
              src="/bonus/ourbonus-hero.png"
              alt="Our Bonus Hero"
              width={520}
              height={480}
              className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>

        </div>

      </section>

      </div>{/* end hero wrapper */}

      {/* ── How to Create My Bonus ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#F0F4F9' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">

          <div className="cyb-reveal flex flex-col items-center text-center gap-4 max-w-2xl" style={{ ['--d' as string]: '0ms' }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#0f1e3c]">
              How to Create My Bonus?
            </h2>
            <p className="text-base md:text-lg text-gray-500">
              Creating your own bonus promotion is simple and fully supported by our team. Follow the steps below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { n: '01', body: 'Register and become an Eligible Partner.' },
              { n: '02', body: "Fill out the 'Create My Bonus Promotion' form further below." },
              { n: '03', body: 'DPM Markets Partners Department will contact you to discuss.' },
              { n: '04', body: 'Your Bonus Promotion will be Activated Exclusively** for you.' },
            ].map((step, i) => (
              <div
                key={step.n}
                className="cyb-reveal relative flex flex-col gap-4 rounded-2xl bg-white p-8 overflow-hidden"
                style={{ border: '1px solid #e2e8f0', ['--d' as string]: `${i * 100}ms` }}
              >
                <span
                  className="text-5xl font-black leading-none"
                  style={{
                    background: 'linear-gradient(180deg, #2563eb 0%, #93c5fd 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.n}
                </span>
                <p className="text-base text-gray-500 leading-relaxed">{step.body}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Create Your Bonus Form ── */}
      <section
        className="py-24 md:py-32 px-6 md:px-12"
        style={{ background: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-14">

          {/* Heading */}
          <div className="cyb-reveal flex flex-col gap-3" style={{ ['--d' as string]: '0ms' }}>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f1e3c]">
              Create{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #fde68a 70%, #ca8a04 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Your Bonus
              </span>
            </h2>
            <p className="text-gray-500 text-base">Fill in the details below and our team will reach out to discuss.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="cyb-reveal flex flex-col gap-8" style={{ ['--d' as string]: '100ms' }}>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">BBS Markets ID</label>
                <input
                  type="number"
                  name="bbsId"
                  required
                  className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                  style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                  placeholder="Enter your ID"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">Name Your Bonus Promotion</label>
                <input
                  type="text"
                  name="bonusName"
                  required
                  className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                  style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                  placeholder="e.g. Summer Cashback Bonus"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">Does Your Bonus Promotion involve Cash Back?</label>
                <select
                  name="cashBack"
                  className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500"
                  style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">Is Your Bonus Promotion Lose-able?</label>
                <select
                  name="loseable"
                  className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500"
                  style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">Does Your Bonus Promotion Involve Rebates?</label>
                <select
                  name="rebates"
                  className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500"
                  style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Describe Your Bonus Promotion</label>
              <textarea
                name="description"
                rows={6}
                required
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500 resize-none placeholder:text-gray-400"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                placeholder="Describe your bonus promotion in detail…"
              />
            </div>

            {/* Status messages */}
            {status === 'success' && (
              <div
                className="relative rounded-2xl px-6 py-5 overflow-hidden flex items-center gap-4"
                style={{
                  background: 'linear-gradient(135deg, #0B111E 0%, #12213a 100%)',
                  border: '1.5px solid rgba(212,168,67,0.4)',
                  boxShadow: '0 4px 24px rgba(212,168,67,0.15)',
                }}
              >
                {/* Gold shimmer line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4A843, transparent)' }}
                />
                {/* Icon */}
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{ background: 'linear-gradient(135deg, #F0CC70, #C49030)', color: '#1a0f00' }}
                >
                  ✓
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold" style={{ color: '#F0CC70' }}>Submission Received</p>
                  <p className="text-xs text-gray-400">Your bonus proposal has been submitted. Our team will contact you shortly.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div
                className="relative rounded-2xl px-6 py-5 overflow-hidden flex items-center gap-4"
                style={{
                  background: 'linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)',
                  border: '1.5px solid rgba(239,68,68,0.35)',
                  boxShadow: '0 4px 24px rgba(239,68,68,0.1)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #ef4444, transparent)' }} />
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'rgba(239,68,68,0.2)', color: '#f87171' }}>
                  ✕
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-red-400">Submission Failed</p>
                  <p className="text-xs text-gray-400">{errorMsg || 'Something went wrong. Please try again.'}</p>
                </div>
              </div>
            )}

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center rounded-xl px-10 py-4 text-base font-bold transition-opacity duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
                  color: '#1a0f00',
                  boxShadow: '0 4px 20px rgba(212,168,67,0.4)',
                }}
              >
                {status === 'loading' ? 'Submitting…' : 'Submit'}
              </button>
            </div>

            {/* Footnotes */}
            <div className="flex flex-col gap-1 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">* An Eligible Partner is one who has introduced a minimum of 5 Clients with a minimum deposit of $100 per Client.</p>
              <p className="text-xs text-gray-500 leading-relaxed">** Exclusivity will be for a 3 month period. After which BBS Markets may or may not provide the said Bonus Promotion publicly.</p>
            </div>

          </form>

        </div>
      </section>

      <style>{`
        @keyframes bannerFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .banner-item {
          opacity: 0;
          animation: bannerFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: calc(var(--i) * 120ms + 80ms);
        }
        .cyb-reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1) var(--d, 0ms);
        }
        .cyb-reveal.cyb-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .banner-item { animation: none; opacity: 1; }
          .cyb-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>

    </main>
  )
}
