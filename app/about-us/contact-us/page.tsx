'use client'

export default function ContactUsPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-36" style={{ background: '#ffffff' }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-14">

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold tracking-[0.18em] uppercase text-blue-500">About Us</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f1e3c]">
            Let&apos;s{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
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
            <a href="mailto:support@bbsmarkets.com" className="text-blue-600 font-semibold hover:underline">
              support@bbsmarkets.com
            </a>
            .
          </p>
        </div>

        {/* Contact info row */}
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M2 4.5A1.5 1.5 0 013.5 3h11A1.5 1.5 0 0116 4.5v9A1.5 1.5 0 0114.5 15h-11A1.5 1.5 0 012 13.5v-9z" stroke="#2563eb" strokeWidth="1.4"/>
                <path d="M2 5l7 5 7-5" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <a href="mailto:support@bbsmarkets.com" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">support@bbsmarkets.com</a>
              <a href="mailto:trading@bbsmarkets.com" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">trading@bbsmarkets.com</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5C6.515 1.5 4.5 3.515 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.485-2.015-4.5-4.5-4.5z" stroke="#2563eb" strokeWidth="1.4"/>
                <circle cx="9" cy="6" r="1.5" stroke="#2563eb" strokeWidth="1.4"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-700 leading-relaxed">
              Ground Floor, The Sotheby Building,<br />
              Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Form */}
        <form className="flex flex-col gap-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 000 000 0000"
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 tracking-wide">Are You An Existing Client?</label>
              <select
                className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500"
                style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
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
              rows={6}
              placeholder="How can we help you?"
              className="w-full rounded-xl px-5 py-3.5 text-gray-900 text-sm outline-none transition-colors duration-200 focus:ring-2 focus:ring-blue-500 resize-none placeholder:text-gray-400"
              style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1' }}
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-10 py-4 text-base font-bold text-white transition-opacity duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' }}
            >
              Contact Us Now
            </button>
          </div>

        </form>

      </div>
    </main>
  )
}
