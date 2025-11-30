import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ServicesSection />
    </main>
  )
}
