import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Join DPM as an introducing broker or affiliate. Access our full partner suite with real-time reporting, marketing materials, and dedicated support.",
  keywords: ["DPM partner program", "forex IB", "affiliate partner", "introducing broker"],
  alternates: { canonical: "https://www.dpmtrade.com/partner" },
  openGraph: {
    title: "Partner Program | DPM",
    description:
      "Join DPM's partner program. Grow your network with dedicated IB support and professional tools.",
    url: "https://www.dpmtrade.com/partner",
  },
}

export default function PartnerPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
