import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About DPM",
  description:
    "DPM is a comprehensive CFD trading provider serving retail, professional, and institutional clients globally. We offer MetaTrader 5, deep liquidity, and a wide range of instruments.",
  keywords: ["about DPM", "DPM broker", "who is DPM", "DPM trading company", "CFD provider"],
  alternates: { canonical: "https://www.dpmtrade.com/about-us/about-dpm" },
  openGraph: {
    title: "About DPM | DPM",
    description:
      "Discover DPM — a global CFD broker committed to reliable tools, transparent conditions, and long-term trader success.",
    url: "https://www.dpmtrade.com/about-us/about-dpm",
  },
}

export default function AboutDPMLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
