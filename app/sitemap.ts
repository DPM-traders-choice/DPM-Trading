import type { MetadataRoute } from "next"

const BASE = "https://www.dpmtrade.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { url: "",                               priority: 1.0,  changeFrequency: "weekly" },
    { url: "/copy-trading",                  priority: 0.9,  changeFrequency: "weekly" },
    { url: "/trading/account-types",         priority: 0.9,  changeFrequency: "monthly" },
    { url: "/trading/instruments",           priority: 0.9,  changeFrequency: "monthly" },
    { url: "/trading/advantages",            priority: 0.8,  changeFrequency: "monthly" },
    { url: "/trading/deposits-withdrawals",  priority: 0.8,  changeFrequency: "monthly" },
    { url: "/trading/overnight-fees",        priority: 0.7,  changeFrequency: "monthly" },
    { url: "/trading/calendar",              priority: 0.7,  changeFrequency: "daily" },
    { url: "/promotions/welcome-bonus",      priority: 0.8,  changeFrequency: "monthly" },
    { url: "/partners",                      priority: 0.8,  changeFrequency: "monthly" },
    { url: "/partners/partner",              priority: 0.7,  changeFrequency: "monthly" },
    { url: "/partners/create-your-bonus",    priority: 0.7,  changeFrequency: "monthly" },
    { url: "/partner",                       priority: 0.7,  changeFrequency: "monthly" },
    { url: "/about-us/about-dpm",            priority: 0.8,  changeFrequency: "monthly" },
    { url: "/about-us/contact-us",           priority: 0.7,  changeFrequency: "yearly" },
    { url: "/about-us/faqs",                 priority: 0.7,  changeFrequency: "monthly" },
    { url: "/about-us/legal-documents",      priority: 0.6,  changeFrequency: "monthly" },
    { url: "/about-us/complaints",           priority: 0.5,  changeFrequency: "yearly" },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
