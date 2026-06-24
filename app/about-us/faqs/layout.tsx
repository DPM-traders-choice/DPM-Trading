import type { Metadata } from "next"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is DPM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DPM is a comprehensive CFD trading provider serving retail, professional, and institutional clients. We offer access to global markets through MetaTrader 5, with instruments including Forex, Commodities, Metals, Stocks, and Futures.",
      },
    },
    {
      "@type": "Question",
      name: "What account types does DPM offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DPM offers multiple account types including Standard, Gold, and Platinum accounts, each designed for different trading styles and experience levels.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Find answers to the most frequently asked questions about DPM — account opening, trading conditions, deposits, withdrawals, MetaTrader 5, and more.",
  keywords: ["DPM FAQ", "trading FAQ", "CFD questions", "how to open account", "DPM help"],
  alternates: { canonical: "https://www.dpmtrade.com/about-us/faqs" },
  openGraph: {
    title: "FAQs | DPM",
    description:
      "Everything you need to know about trading with DPM — answered clearly.",
    url: "https://www.dpmtrade.com/about-us/faqs",
  },
}

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  )
}
