import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Join the DPM partnership program. Access dedicated IB tools, real-time tracking, and a transparent structure designed for long-term partner success.",
  keywords: ["IB program", "forex partner", "introducing broker", "affiliate program", "DPM partners"],
  alternates: { canonical: "https://www.dpmtrade.com/partners" },
  openGraph: {
    title: "Partners | DPM",
    description:
      "Grow with DPM's partnership program. Real-time tracking, dedicated IB tools, and full partner support.",
    url: "https://www.dpmtrade.com/partners",
  },
}

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
