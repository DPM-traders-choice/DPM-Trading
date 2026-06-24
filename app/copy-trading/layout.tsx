import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Copy Trading",
  description:
    "Automatically copy the trades of expert traders on DPM. Follow top performers, mirror their strategies, and grow your portfolio with zero manual effort.",
  keywords: ["copy trading", "social trading", "mirror trading", "follow traders", "DPM copy trading"],
  alternates: { canonical: "https://www.dpmtrade.com/copy-trading" },
  openGraph: {
    title: "Copy Trading | DPM",
    description:
      "Follow elite traders and automatically copy their trades in real time. Start copy trading on DPM today.",
    url: "https://www.dpmtrade.com/copy-trading",
  },
}

export default function CopyTradingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
