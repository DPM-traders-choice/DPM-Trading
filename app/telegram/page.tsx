import Image from 'next/image'
import Link from 'next/link'

const TELEGRAM_URL     = 'https://t.me/DPMServiceTeam'
const TELEGRAM_WEB_URL = 'https://web.telegram.org/k/#@DPMServiceTeam'

export default function TelegramPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden bg-white">

      {/* SVG dot-grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#D4A843" fillOpacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="relative flex flex-col items-center gap-6 w-full max-w-sm">

        {/* Logo */}
        <Image
          src="/DPM Logo Final-22.jpg"
          alt="DPM"
          width={112}
          height={112}
          className="object-contain"
          priority
        />

        {/* Greeting bubble */}
        <div
          className="w-full rounded-2xl px-6 py-4 text-center text-gray-500 text-base"
          style={{ background: '#f1f5f9', border: '1px solid #e2e8f0' }}
        >
          👋 Hey! How can we help you today?
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3 w-full mt-2">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 rounded-full py-3.5 text-base font-bold transition-opacity duration-200 hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, #F0CC70 0%, #D4A843 40%, #F5D060 60%, #C49030 100%)',
              color: '#1a0f00',
              boxShadow: '0 4px 24px rgba(212,168,67,0.4)',
            }}
          >
            <Image src="/Telegram_logo.svg.png" alt="Telegram" width={20} height={20} />
            Open in Telegram
          </a>

          <a
            href={TELEGRAM_WEB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 rounded-full py-3.5 text-base font-semibold text-[#0f1e3c] transition-colors duration-200 hover:bg-gray-100"
            style={{ border: '1.5px solid #cbd5e1' }}
          >
            Continue to Telegram Web
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 w-full mt-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Back home */}
        <Link
          href="/"
          className="text-sm font-semibold transition-opacity duration-200 hover:opacity-70"
          style={{ color: '#D4A843' }}
        >
          ← Back to DPM
        </Link>

      </div>
    </main>
  )
}
