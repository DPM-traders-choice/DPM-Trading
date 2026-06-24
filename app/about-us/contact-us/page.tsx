'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactUsPage() {
  const [status, setStatus]     = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      name:           fd.get('name') as string,
      email:          fd.get('email') as string,
      phone:          fd.get('phone') as string,
      existingClient: fd.get('existingClient') as string,
      message:        fd.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact-submission', {
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

  return (
    <main className="min-h-screen px-6 md:px-12 py-36" style={{ background: '#ffffff' }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-14">

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold tracking-[0.18em] uppercase" style={{ color: '#D4A843' }}>About Us</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f1e3c]">
            Let&apos;s{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            We are here to help you easily find the exact answers to your questions and offer you
            continued support throughout your trading journey. Feel free to reach out via the form
            below, live chat, or at{' '}
            <a href="mailto:DPM@bbsmarkets.com" className="font-semibold hover:underline" style={{ color: '#D4A843' }}>
              DPM@bbsmarkets.com
            </a>
            .
          </p>
        </div>

        {/* Contact info row */}
        <div className="flex flex-col sm:flex-row gap-6 flex-wrap">

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(212,168,67,0.12)' }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M2 4.5A1.5 1.5 0 013.5 3h11A1.5 1.5 0 0116 4.5v9A1.5 1.5 0 0114.5 15h-11A1.5 1.5 0 012 13.5v-9z" stroke="#D4A843" strokeWidth="1.4"/>
                <path d="M2 5l7 5 7-5" stroke="#D4A843" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email</p>
              <a href="mailto:DPM@bbsmarkets.com" className="text-sm font-semibold transition-opacity hover:opacity-75" style={{ color: '#D4A843' }}>DPM@bbsmarkets.com</a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(212,168,67,0.12)' }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.485-2.015-4.5-4.5-4.5z" stroke="#D4A843" strokeWidth="1.4"/>
                <circle cx="9" cy="6" r="1.5" stroke="#D4A843" strokeWidth="1.4"/>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Address</p>
              <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                7 James Bruce Drive,<br />
                Falkirk, United Kingdom.
              </p>
            </div>
          </div>

          {/* Telegram */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(212,168,67,0.12)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21.8 3.1L2.4 10.5c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 11.3-7.1c.5-.3 1 0 .6.4L8.7 16.4l-.4 5c.6 0 .9-.3 1.2-.6l2.9-2.8 5 3.7c.9.5 1.6.2 1.8-.8L22.9 4.3c.4-1.3-.5-1.9-1.1-1.2z" fill="#D4A843"/>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Telegram</p>
              <a
                href="https://t.me/DPMServiceTeam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold transition-opacity hover:opacity-75"
                style={{ color: '#D4A843' }}
              >
                @DPMServiceTeam
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-all duration-200 placeholder:text-gray-400"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                onFocus={e => (e.target.style.border = '1.5px solid #D4A843')}
                onBlur={e => (e.target.style.border = '1.5px solid #cbd5e1')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-all duration-200 placeholder:text-gray-400"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                onFocus={e => (e.target.style.border = '1.5px solid #D4A843')}
                onBlur={e => (e.target.style.border = '1.5px solid #cbd5e1')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 000 000 0000"
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-all duration-200 placeholder:text-gray-400"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                onFocus={e => (e.target.style.border = '1.5px solid #D4A843')}
                onBlur={e => (e.target.style.border = '1.5px solid #cbd5e1')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Are You An Existing Client?</label>
              <select
                name="existingClient"
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-all duration-200"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
                onFocus={e => (e.target.style.border = '1.5px solid #D4A843')}
                onBlur={e => (e.target.style.border = '1.5px solid #cbd5e1')}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 tracking-wide">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="How can we help you?"
              className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-all duration-200 resize-none placeholder:text-gray-400"
              style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
              onFocus={e => (e.target.style.border = '1.5px solid #D4A843')}
              onBlur={e => (e.target.style.border = '1.5px solid #cbd5e1')}
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
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4A843, transparent)' }} />
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'linear-gradient(135deg, #F0CC70, #C49030)', color: '#1a0f00' }}>
                ✓
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-bold" style={{ color: '#F0CC70' }}>Message Received</p>
                <p className="text-xs text-gray-400">Thank you for reaching out. Our team will get back to you shortly.</p>
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
              {status === 'loading' ? 'Sending…' : 'Contact Us Now'}
            </button>
          </div>

        </form>

      </div>
    </main>
  )
}
