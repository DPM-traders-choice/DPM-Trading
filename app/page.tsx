import type { Metadata } from "next"
import HeroSection from "@/app/components/HeroSection"

export const metadata: Metadata = {
  title: "DPM | Premium CFD Trading Platform — Forex, Metals & More",
  description:
    "Trade Forex, Commodities, Precious Metals, Stocks, and Futures with DPM. Access global markets through MetaTrader 5 with professional-grade tools and dedicated support.",
  keywords: [
    "CFD broker",
    "forex trading platform",
    "MetaTrader 5 broker",
    "online trading",
    "forex broker",
    "commodities broker",
    "metals trading",
    "stock CFDs",
    "DPM trading",
  ],
  alternates: { canonical: "https://www.dpmtrade.com" },
  openGraph: {
    title: "DPM | Premium CFD Trading Platform — Forex, Metals & More",
    description:
      "Trade Forex, Commodities, Precious Metals, Stocks, and Futures with DPM. Access global markets through MetaTrader 5.",
    url: "https://www.dpmtrade.com",
  },
}

import WhyChooseUs from "@/app/components/WhyChooseUs"
import AccountTypes from "@/app/components/AccountTypes"
import WaveBar from "@/app/components/WaveBar"
import PartnersSection from "@/app/components/PartnersSection"
import Testimonials from "@/app/components/Testimonials"
import ScrollPath from "@/app/components/ScrollPath"
import TradingViewTicker from "@/app/components/TradingViewTicker"
import PaymentsMarquee from "@/app/components/PaymentsMarquee"

export default function Home() {
  return (
    <main className="bg-white">
      {/* Relative wrapper so ScrollPath can span hero → partners */}
      <div className="relative">
        <ScrollPath />
        <HeroSection />
        <WhyChooseUs />
        <TradingViewTicker />
        <AccountTypes />
        <WaveBar />
        <PartnersSection />
        <PaymentsMarquee />
      </div>
      <Testimonials />
    </main>
  )
}
