import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Economic Calendar",
  description:
    "Stay ahead of market-moving events with DPM's economic calendar. Track key announcements, earnings reports, central bank decisions, and global economic data releases.",
  keywords: ["economic calendar", "forex calendar", "market events", "central bank", "economic data", "DPM calendar"],
  alternates: { canonical: "https://www.dpmtrade.com/trading/calendar" },
  openGraph: {
    title: "Economic Calendar | DPM",
    description:
      "Real-time economic calendar covering global market events, central bank decisions, and key economic releases.",
    url: "https://www.dpmtrade.com/trading/calendar",
  },
}

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
