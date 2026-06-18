import Image from 'next/image'

const PAYMENTS = [
  { src: '/payments/mastercard.png', alt: 'Mastercard',    w: 90, h: 70 },
  { src: '/payments/usdt.png',       alt: 'USDT Tether',   w: 60,  h: 60 },
  { src: '/payments/visa.png',       alt: 'Visa',          w: 90, h: 45 },
  { src: '/payments/banktransfer.png', alt: 'Bank Transfer', w: 90, h: 70 },
  { src: '/payments/applepay.jpeg',  alt: 'Apple Pay',     w: 80, h: 45 },
  { src: '/payments/gpay.jpeg',      alt: 'Google Pay',    w: 80, h: 45 },
]

const TRACK = [...PAYMENTS, ...PAYMENTS]

export default function PaymentsMarquee() {
  return (
    <section className="bg-[#EEF4FB] py-10 overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {TRACK.map((p, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center bg-white rounded-2xl px-8"
              style={{ width: 220, height: 100, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  )
}
