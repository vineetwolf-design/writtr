import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AppPreview } from "@/components/app-preview"
import { TrustedBy } from "@/components/trusted-by"
import { FeaturesSection } from "@/components/features-section"
import { UseCases } from "@/components/use-cases"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AppPreview />
      <TrustedBy />
      <FeaturesSection />
      <UseCases />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
