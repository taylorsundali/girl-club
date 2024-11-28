import Hero from '@/components/hero'
import About from '@/components/about'
import PricingSection from '@/components/pricing/pricing-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PricingSection />
      <Footer />
    </main>
  )
}
