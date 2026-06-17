'use client'

import { Gift, Megaphone, BadgePercent, Users, Zap, ShieldCheck, BarChart2, UserPlus } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ANNOUNCEMENTS: { icon: LucideIcon; label: string; text: string }[] = [
  { icon: Gift,         label: 'Welcome Bonus',      text: 'Get up to $500 on your first deposit'                },
  { icon: Megaphone,    label: 'New Promotion',       text: 'Zero-commission trading on all FX pairs this week'   },
  { icon: BadgePercent, label: 'Deposit Bonus',       text: '50% bonus on every deposit — limited time offer'     },
  { icon: Users,        label: 'Copy Trading',        text: 'Follow top traders and earn automatically'           },
  { icon: Zap,          label: 'Fast Withdrawals',    text: 'Withdraw your funds in under 24 hours'               },
  { icon: ShieldCheck,  label: 'Swap-Free Accounts',  text: 'Islamic accounts available with zero overnight fees' },
  { icon: BarChart2,    label: 'New Instruments',     text: 'Trade gold, oil & indices with tight spreads'        },
  { icon: UserPlus,     label: 'Refer & Earn',        text: 'Invite friends and earn $50 per successful referral' },
]

function AnnouncementItem({ icon: Icon, label, text }: typeof ANNOUNCEMENTS[0]) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <Icon size={12} className="text-amber-400 shrink-0" strokeWidth={2.5} />
      <span className="text-[11px] font-light tracking-widest text-amber-300/90 uppercase">
        {label}
      </span>
      <span className="text-[11px] text-white/40 font-light">
        {text}
      </span>
    </span>
  )
}

function Divider() {
  return (
    <span className="mx-8 select-none text-white/15" aria-hidden>✦</span>
  )
}

export default function AnnouncementBar() {
  const content = ANNOUNCEMENTS.flatMap((a, i) => [
    <AnnouncementItem key={i} {...a} />,
    <Divider key={`d${i}`} />,
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
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #07101f 40%, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #07101f 40%, transparent)' }} />

      <div className="flex items-center h-full">
        <div className="marquee-track flex items-center">
          {content}
          {content}
        </div>
      </div>
    </div>
  )
}
