import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DPM's support team. We offer 24/5 live chat, email, and phone support for all trading and account enquiries.",
  keywords: ["contact DPM", "DPM support", "trading support", "customer service", "DPM help"],
  alternates: { canonical: "https://www.dpmtrade.com/about-us/contact-us" },
  openGraph: {
    title: "Contact Us | DPM",
    description:
      "Reach DPM's 24/5 support team via live chat, email, or phone. We're here to help.",
    url: "https://www.dpmtrade.com/about-us/contact-us",
  },
}

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
