import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deposits & Withdrawals",
  description:
    "Fund your DPM trading account via bank transfer, credit/debit card, and e-wallets. Fast and secure deposit and withdrawal options available.",
  keywords: ["deposit trading account", "withdrawal", "fund account", "payment methods", "DPM deposit"],
  alternates: { canonical: "https://www.dpmtrade.com/trading/deposits-withdrawals" },
  openGraph: {
    title: "Deposits & Withdrawals | DPM",
    description:
      "Multiple payment methods, fast deposits and withdrawals — managing your DPM account funds is simple and secure.",
    url: "https://www.dpmtrade.com/trading/deposits-withdrawals",
  },
}

export default function DepositsWithdrawalsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
