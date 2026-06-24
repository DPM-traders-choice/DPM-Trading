import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trading Instruments",
  description:
    "Trade over 300+ instruments on DPM — Forex currency pairs, Commodities, Precious Metals, Global Stocks, and Futures. All accessible from a single MetaTrader 5 account.",
  keywords: ["forex pairs", "commodities", "metals trading", "stock CFDs", "futures contracts", "trading instruments", "DPM markets"],
  alternates: { canonical: "https://www.dpmtrade.com/trading/instruments" },
  openGraph: {
    title: "Trading Instruments | DPM",
    description:
      "300+ instruments including Forex, Commodities, Metals, Stocks & Futures — all on MetaTrader 5.",
    url: "https://www.dpmtrade.com/trading/instruments",
  },
}

export default function InstrumentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
