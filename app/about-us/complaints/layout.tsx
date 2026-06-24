import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Complaints",
  description:
    "DPM takes all client complaints seriously. Learn how to submit a formal complaint and understand our resolution process and timelines.",
  keywords: ["DPM complaints", "broker complaint", "client complaint", "dispute resolution"],
  alternates: { canonical: "https://www.dpmtrade.com/about-us/complaints" },
  openGraph: {
    title: "Complaints | DPM",
    description:
      "Submit a formal complaint to DPM and understand our transparent resolution process.",
    url: "https://www.dpmtrade.com/about-us/complaints",
  },
}

export default function ComplaintsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
