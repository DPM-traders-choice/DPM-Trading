import HeroSection from "@/app/components/HeroSection"
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
