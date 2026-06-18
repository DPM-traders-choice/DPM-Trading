import Link from 'next/link'

export default function AboutUsPage() {
  return (
      <main className="min-h-screen bg-[#0B111E] pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-blue-400 mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-12"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(160deg, #ffffff 0%, #ffffff 40%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            About Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'About DPM',       href: '/about-us/about-dpm' },
              { label: 'Contact Us',      href: '/about-us/contact-us' },
              { label: 'Complaints',      href: '/about-us/complaints' },
              { label: 'Legal Documents', href: '/about-us/legal-documents' },
              { label: 'FAQs',            href: '/about-us/faqs' },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                className="flex items-center justify-between px-6 py-5 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all duration-200 text-white font-semibold text-base">
                {l.label}
                <span className="text-white/30">→</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
  )
}
