import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Your Bonus",
  description:
    "DPM partners can create custom bonus offers for their referred clients. Tailor bonus structures to attract and retain traders through your partnership portal.",
  keywords: ["create bonus", "IB bonus", "partner bonus", "custom bonus", "DPM IB"],
  alternates: { canonical: "https://www.dpmtrade.com/partners/create-your-bonus" },
  openGraph: {
    title: "Create Your Bonus | DPM Partners",
    description:
      "Design custom bonus packages for your clients as a DPM introducing broker.",
    url: "https://www.dpmtrade.com/partners/create-your-bonus",
  },
}

export default function CreateYourBonusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
