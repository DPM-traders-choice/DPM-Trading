import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trading",
  description:
    "Explore DPM's full suite of trading products — Forex, Commodities, Metals, Stocks, and Futures — all accessible through MetaTrader 5 with deep liquidity.",
  alternates: { canonical: "https://www.dpmtrade.com/trading" },
  openGraph: {
    title: "Trading | DPM",
    description:
      "Access global markets with DPM. Trade Forex, Commodities, Metals, Stocks & Futures on MetaTrader 5.",
    url: "https://www.dpmtrade.com/trading",
  },
}

export default function TradingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
