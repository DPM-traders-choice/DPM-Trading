import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcome Bonus",
  description:
    "Claim DPM's exclusive welcome bonus and boost your starting capital. Trade more with extra funds on your first deposit — available for new DPM accounts.",
  keywords: ["welcome bonus", "trading bonus", "forex bonus", "deposit bonus", "DPM promotion"],
  alternates: { canonical: "https://www.dpmtrade.com/promotions/welcome-bonus" },
  openGraph: {
    title: "Welcome Bonus | DPM",
    description:
      "Boost your trading capital with DPM's welcome bonus. Claim on your first deposit and trade with more power.",
    url: "https://www.dpmtrade.com/promotions/welcome-bonus",
  },
}

export default function WelcomeBonusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
