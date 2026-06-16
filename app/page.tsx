import HeroSection from "@/app/components/HeroSection"
import WhyChooseUs from "@/app/components/WhyChooseUs"
import Testimonials from "@/app/components/Testimonials"
import AccountTypes from "@/app/components/AccountTypes"
import CTABanner from "@/app/components/CTABanner"
import WaveBar from "@/app/components/WaveBar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
<WhyChooseUs />
<AccountTypes />
      <WaveBar />
      <Testimonials />
      <CTABanner />
    </main>
  )
}
