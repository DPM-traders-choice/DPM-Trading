import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DPM — a trusted CFD broker serving retail, professional, and institutional traders worldwide with transparent conditions and dedicated support.",
  alternates: { canonical: "https://www.dpmtrade.com/about-us" },
  openGraph: {
    title: "About Us | DPM",
    description:
      "DPM is a trusted global CFD broker with transparent trading conditions and a commitment to trader success.",
    url: "https://www.dpmtrade.com/about-us",
  },
}

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
