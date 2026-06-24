import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Documents",
  description:
    "Access DPM's full suite of legal documents including Terms & Conditions, Privacy Policy, Risk Disclosure, Client Agreement, and AML Policy.",
  keywords: ["legal documents", "terms and conditions", "privacy policy", "risk disclosure", "DPM legal"],
  alternates: { canonical: "https://www.dpmtrade.com/about-us/legal-documents" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Legal Documents | DPM",
    description:
      "Review DPM's Terms & Conditions, Privacy Policy, Risk Disclosure, and all regulatory documentation.",
    url: "https://www.dpmtrade.com/about-us/legal-documents",
  },
}

export default function LegalDocumentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
