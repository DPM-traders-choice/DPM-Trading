import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Become a DPM introducing broker or affiliate partner. Get dedicated support and access professional IB tools to grow your business.",
  keywords: ["become IB", "introducing broker", "forex affiliate", "DPM partner signup"],
  alternates: { canonical: "https://www.dpmtrade.com/partners/partner" },
  openGraph: {
    title: "Become a Partner | DPM",
    description:
      "Grow your business with DPM's IB program. Dedicated partner support and professional tools.",
    url: "https://www.dpmtrade.com/partners/partner",
  },
}

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
