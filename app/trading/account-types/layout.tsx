import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Account Types",
  description:
    "Compare DPM trading accounts — Standard, Gold, and Platinum. Find the account that fits your trading style and experience level.",
  keywords: ["trading account types", "standard account", "gold account", "platinum account", "CFD account", "DPM account"],
  alternates: { canonical: "https://www.dpmtrade.com/trading/account-types" },
  openGraph: {
    title: "Account Types | DPM",
    description:
      "Choose from DPM's range of trading accounts — Standard, Gold, and Platinum — designed for every level of trader.",
    url: "https://www.dpmtrade.com/trading/account-types",
  },
}

export default function AccountTypesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
