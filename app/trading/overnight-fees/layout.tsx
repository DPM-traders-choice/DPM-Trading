import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Overnight Fees",
  description:
    "View DPM's overnight position rates for all instruments. Understand holding conditions and plan your trading strategy accordingly.",
  keywords: ["overnight fees", "rollover", "CFD overnight", "DPM overnight", "position holding"],
  alternates: { canonical: "https://www.dpmtrade.com/trading/overnight-fees" },
  openGraph: {
    title: "Overnight Fees | DPM",
    description:
      "View overnight position holding conditions for all DPM instruments and plan your trading strategy with confidence.",
    url: "https://www.dpmtrade.com/trading/overnight-fees",
  },
}

export default function OvernightFeesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
