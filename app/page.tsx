import HeroSection from "@/app/components/HeroSection"
import WhyChooseUs from "@/app/components/WhyChooseUs"
import AccountTypes from "@/app/components/AccountTypes"
import WaveBar from "@/app/components/WaveBar"
import PartnersSection from "@/app/components/PartnersSection"
import Testimonials from "@/app/components/Testimonials"
import CTABanner from "@/app/components/CTABanner"
import ScrollPath from "@/app/components/ScrollPath"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Relative wrapper so ScrollPath can span hero → partners */}
      <div className="relative">
        <ScrollPath />
        <HeroSection />
        <WhyChooseUs />
        <AccountTypes />
        <WaveBar />
        <PartnersSection />
      </div>
      <Testimonials />
      <CTABanner />
    </main>
  )
}
