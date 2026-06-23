'use client'

export default function ComplaintsPage() {
  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section
        className="px-6 md:px-12 pb-32 flex items-center"
        style={{
          background: '#EEF2F8',
          paddingTop: '160px',
          minHeight: '100svh',
          borderBottomLeftRadius: '4rem',
          borderBottomRightRadius: '4rem',
        }}
      >
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-8">

          <p
            className="banner-item text-sm font-bold tracking-[0.18em] uppercase text-blue-500"
            style={{ ['--i' as string]: 0 }}
          >
            About Us
          </p>

          <h1
            className="banner-item text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight"
            style={{
              background: 'linear-gradient(160deg, #020202 0%, #0f0f0f 28%, #3a3a3a 52%, #050505 78%, #020202 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              ['--i' as string]: 1,
            }}
          >
            We Value Your Feedback
          </h1>

          <p
            className="banner-item text-base md:text-lg text-slate-500 leading-relaxed"
            style={{ ['--i' as string]: 2 }}
          >
            Should you find something dissatisfying or wish to make a complaint of any nature with
            regards to our service provided please feel free to reach out to us at{' '}
            <a
              href="mailto:complaints@bbsmarkets.com"
              className="text-blue-600 font-semibold hover:underline"
            >
              complaints@bbsmarkets.com
            </a>
            .
          </p>

          <p
            className="banner-item text-base md:text-lg text-slate-500 leading-relaxed"
            style={{ ['--i' as string]: 3 }}
          >
            We strive to provide the best and most bespoke service and trading conditions for all
            our clients. Naturally we understand that from time to time this may not always be the
            case. Should you feel you have been the recipient of service which has been under par we
            look forward to receiving your message with as much detail as possible as it in turn
            assists us in being able to find, adjust and rectify for future instances.
          </p>

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
        @media (prefers-reduced-motion: reduce) {
          .banner-item { animation: none; opacity: 1; }
        }
      `}</style>

    </main>
  )
}
