import Image from 'next/image'
import Link from 'next/link'

export default function OvernightFeesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 md:px-12 pt-36 pb-8 md:pb-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — text */}
          <div className="flex-1 flex flex-col gap-6">
            <h1
              className="of-item text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight"
              style={{
                '--i': 0,
                fontFamily: 'var(--font-inter)',
                background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingBottom: '0.15em',
              } as React.CSSProperties}
            >
              Keeping Your Positions Open Overnight
            </h1>

            <p
              className="of-item text-gray-500 mb-6 text-base lg:mb-8 lg:text-lg leading-relaxed max-w-lg"
              style={{ '--i': 1 } as React.CSSProperties}
            >
              Trading positions may be rolled overnight. This is the process whereby your open position has its settlement date extended. At DPM Markets you may keep your positions open as per the company&apos;s Terms and Conditions.
            </p>

            <Link
              href="/register"
              className="of-item w-fit group relative flex gap-2 overflow-hidden cursor-pointer transition-colors duration-300 text-center justify-center items-center rounded-lg focus:outline-none border-solid focus:ring-4 border bg-black border-black text-white focus:ring-gray-800 hover:bg-gray-900 px-3.5 py-2.5 lg:px-4 lg:py-3 text-base lg:text-lg font-medium"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              Sign Up Now
            </Link>
          </div>

          {/* Right — image */}
          <div
            className="of-item flex items-center justify-center shrink-0"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            <Image
              src="/instruments/Overnight Fees.png"
              alt="Overnight Fees"
              width={623}
              height={515}
              className="object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* ── Body text ── */}
      <section className="px-6 md:px-12 pt-0 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            Positions held open overnight may be charged or credited rollover interest (commonly referred to as swap fees). This charge or credit will depend on the position taken (buy or sell of the respective financial instrument) and the volume traded.
          </p>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            As overnight fees are subject to change due to their nature, please sign up and download the MT5 trading platform where you can see the live Overnight Fee rates per instrument. We provide up to 14 days swap free on selected instruments, including Gold and EURUSD.
          </p>
        </div>
      </section>

      {/* ── Trading Conditions section ── */}
      <section className="py-24 md:py-32 px-6 md:px-12" style={{ background: '#F0F4F9' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
            <p className="text-xl font-bold text-blue-500">DPM Markets</p>
            <h2 className="text-gray-900 text-2xl font-black md:text-4xl lg:text-5xl leading-tight">Top-Tier Trading Conditions, Worldwide</h2>
            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed">
              DPM Markets&apos; transparent fees deliver competitive spreads across all instruments.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">

            {/* Card 1 */}
            <div className="rounded-2xl p-8 flex flex-col items-center text-center gap-5" style={{ background: '#ffffff', minHeight: '305px', maxWidth: '410px', margin: '0 auto', width: '100%', border: '1px solid #e2e8f0' }}>
              <div>
                <svg width="80" height="80" viewBox="0 0 36 36" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="5" width="26" height="26" rx="3"/>
                  <rect x="9" y="9" width="4" height="3" rx="0.5"/>
                  <rect x="16" y="9" width="4" height="3" rx="0.5"/>
                  <rect x="23" y="9" width="4" height="3" rx="0.5"/>
                  <rect x="9" y="15" width="4" height="3" rx="0.5"/>
                  <rect x="16" y="15" width="4" height="3" rx="0.5"/>
                  <rect x="23" y="15" width="4" height="3" rx="0.5"/>
                  <rect x="9" y="21" width="4" height="3" rx="0.5"/>
                  <rect x="16" y="21" width="4" height="3" rx="0.5"/>
                  <rect x="23" y="21" width="11" height="3" rx="0.5"/>
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#0f1e3c]">0% Commission</h3>
              <p className="text-gray-500 mt-3 text-base leading-relaxed">Trade with zero commission to reduce costs and maximize potential returns on every trade.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl p-8 flex flex-col items-center text-center gap-5" style={{ background: '#ffffff', minHeight: '305px', maxWidth: '410px', margin: '0 auto', width: '100%', border: '1px solid #e2e8f0' }}>
              <div>
                <svg width="80" height="80" viewBox="0 0 36 36" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="10" r="3"/>
                  <circle cx="24" cy="10" r="3"/>
                  <circle cx="18" cy="22" r="3"/>
                  <line x1="12" y1="13" x2="18" y2="19"/>
                  <line x1="24" y1="13" x2="18" y2="19"/>
                  <path d="M18 25v4M16 29h4"/>
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#0f1e3c]">Competitive Spreads</h3>
              <p className="text-gray-500 mt-3 text-base leading-relaxed">Trade with tight spreads to lower costs and focus on optimizing returns across every trading opportunity.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl p-8 flex flex-col items-center text-center gap-5" style={{ background: '#ffffff', minHeight: '305px', maxWidth: '410px', margin: '0 auto', width: '100%', border: '1px solid #e2e8f0' }}>
              <div>
                <svg width="80" height="80" viewBox="0 0 36 36" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="10" width="28" height="18" rx="3"/>
                  <path d="M4 15h28"/>
                  <path d="M10 22h4M18 22h4"/>
                  <path d="M20 6l4 4-4 4M16 6l-4 4 4 4" strokeOpacity="0.5"/>
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#0f1e3c]">Free Deposits & Withdrawals</h3>
              <p className="text-gray-500 mt-3 text-base leading-relaxed">Deposit and withdraw funds with no fees to aim for maximum value from every executed trade.</p>
            </div>

          </div>

        </div>
      </section>

      <style>{`
        @keyframes ofFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .of-item {
          opacity: 0;
          animation: ofFadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: calc(var(--i) * 130ms + 100ms);
        }
        @media (prefers-reduced-motion: reduce) {
          .of-item { animation: none; opacity: 1; }
        }
      `}</style>

    </main>
  )
}
