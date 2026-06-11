import HeroSection from "@/app/components/HeroSection"
import WhyChooseUs from "@/app/components/WhyChooseUs"
import Testimonials from "@/app/components/Testimonials"
import AccountTypes from "@/app/components/AccountTypes"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhyChooseUs />
      <AccountTypes />
      <Testimonials />
    </main>
  )
}
