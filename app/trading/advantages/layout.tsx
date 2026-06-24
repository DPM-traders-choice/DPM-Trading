import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trading Advantages",
  description:
    "Discover DPM's trading advantages — ultra-fast execution, deep liquidity, and 24/5 professional support for every trader.",
  keywords: ["trading advantages", "fast execution", "deep liquidity", "DPM benefits", "DPM trading"],
  alternates: { canonical: "https://www.dpmtrade.com/trading/advantages" },
  openGraph: {
    title: "Trading Advantages | DPM",
    description:
      "Fast execution, deep liquidity, and 24/5 professional support — the DPM trading edge.",
    url: "https://www.dpmtrade.com/trading/advantages",
  },
}

export default function AdvantagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
