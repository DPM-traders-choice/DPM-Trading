'use client'

const ITEMS = [
  { label: 'New',    text: 'Zero commission on all trades this weekend' },
  { label: 'Offer',  text: 'Welcome bonus up to $500 on first deposit'  },
  { label: 'VIP',    text: 'Priority accounts now open — limited slots' },
  { label: 'Update', text: 'Instant withdrawals available 24/7'         },
  { label: 'Promo',  text: 'Refer a friend and earn $200 per referral'  },
  { label: 'Live',   text: '50+ crypto pairs added to the platform'     },
]

export default function AnnouncementBar() {
  const content = ITEMS.flatMap((item, i) => [
    <span key={i} className="inline-flex items-center gap-2.5 whitespace-nowrap">
      <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/90">{item.label}</span>
      <span className="w-px h-3 bg-white/20 shrink-0" />
      <span className="text-[11px] text-white/45">{item.text}</span>
    </span>,
    <span key={`s${i}`} className="mx-8 text-white/15 select-none" aria-hidden>—</span>,
  ])

  return (
    <div
      className="fixed left-0 right-0 z-40 overflow-hidden"
      style={{
        top: 'var(--header-height, 88px)',
        height: '34px',
        background: '#07101f',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #07101f, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #07101f, transparent)' }} />

      <div className="flex items-center h-full">
        <div className="marquee-track flex items-center">
          {content}
          {content}
        </div>
      </div>
    </div>
  )
}
