'use client'

const TICKERS = [
  { symbol: 'EUR/USD', price: '1.08432', change: '+0.23%', up: true  },
  { symbol: 'GBP/USD', price: '1.27185', change: '-0.14%', up: false },
  { symbol: 'BTC/USD', price: '67,245',  change: '+2.81%', up: true  },
  { symbol: 'ETH/USD', price: '3,512',   change: '+1.47%', up: true  },
  { symbol: 'XAU/USD', price: '2,341',   change: '+0.56%', up: true  },
  { symbol: 'USD/JPY', price: '154.820', change: '-0.09%', up: false },
  { symbol: 'S&P 500', price: '5,248',   change: '+0.32%', up: true  },
  { symbol: 'NASDAQ',  price: '16,428',  change: '+0.61%', up: true  },
  { symbol: 'OIL/USD', price: '78.45',   change: '-0.88%', up: false },
  { symbol: 'USD/CAD', price: '1.36540', change: '+0.11%', up: true  },
  { symbol: 'AUS/USD', price: '0.65210', change: '-0.19%', up: false },
  { symbol: 'DOW',     price: '38,996',  change: '+0.28%', up: true  },
]

function TickerItem({ symbol, price, change, up }: typeof TICKERS[0]) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
      {/* Symbol */}
      <span className="text-[11px] font-bold tracking-[0.08em] text-white/90">
        {symbol}
      </span>
      {/* Price */}
      <span className="text-[11px] font-medium text-white/55">
        {price}
      </span>
      {/* Arrow + Change */}
      <span
        className="inline-flex items-center gap-0.5 text-[10px] font-bold"
        style={{ color: up ? '#4ade80' : '#f87171' }}
      >
        <svg width="7" height="7" viewBox="0 0 7 7" fill="currentColor" aria-hidden>
          {up
            ? <path d="M3.5 0L7 7H0L3.5 0Z"/>
            : <path d="M3.5 7L0 0H7L3.5 7Z"/>
          }
        </svg>
        {change}
      </span>
    </span>
  )
}

function Divider() {
  return (
    <span className="mx-6 text-white/10 select-none text-[10px]" aria-hidden>|</span>
  )
}

export default function AnnouncementBar() {
  const content = TICKERS.flatMap((t, i) => [
    <TickerItem key={i} {...t} />,
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
