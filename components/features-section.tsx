import { Card } from "@/components/ui/card"
import { Smartphone, Shield, UserCheck, TrendingUp } from "lucide-react"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeUp, fadeIn, stagger } from "@/lib/animation"

export function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "Platform-Perfect Content",
      description:
        "Each platform gets content optimized for its format, audience, and algorithm. Twitter threads, Instagram captions, LinkedIn posts—all from one draft.",
    },
    {
      icon: Shield,
      title: "Your Voice, Amplified",
      description:
        "Choose between professional and casual tones. Your core message stays intact while we optimize the delivery for each platform's vibe.",
    },
    {
      icon: UserCheck,
      title: "SEO Smart Content",
      description:
        "Every piece is optimized for search and discovery. Hashtags, CTAs, and formatting follow best practices for organic reach.",
    },
    {
      icon: TrendingUp,
      title: "Save Hours, Every Week",
      description: "Turn a blog draft or rough idea into multi-platform ready content in seconds. Spend time on ideas, not formatting.",
    },
  ]

  return (
    <section id="features" className="py-16 px-6 relative">
      <div className="absolute right-0 top-10 hidden xl:block opacity-15">
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none" className="text-primary">
          <rect x="20" y="10" width="70" height="100" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="35" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="1.5" />
          <line x1="35" y1="45" x2="80" y2="45" stroke="currentColor" strokeWidth="1.5" />
          <line x1="35" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="1.5" />
          <line x1="35" y1="75" x2="75" y2="75" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15" cy="30" r="3" fill="currentColor" />
          <circle cx="15" cy="50" r="3" fill="currentColor" />
          <circle cx="15" cy="70" r="3" fill="currentColor" />
          <circle cx="15" cy="90" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Decorative background elements */}
      <div className="absolute right-20 top-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2"></div>
      <div className="absolute left-10 bottom-20 w-16 h-16 bg-primary/10 rounded-full"></div>

      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll variant={fadeIn}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why Top Creators
              <br />
              Choose Writtr
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto font-sans">
              Focus on your ideas. We handle the formatting, tone optimization, and platform-specific strategy.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant={stagger}>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <AnimateOnScroll key={index} variant={fadeUp}>
                <Card className="bg-card border-border p-6 hover:shadow-md transition-shadow rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{feature.description}</p>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* Decorative swirls */}
      <div className="absolute left-4 bottom-10 hidden lg:block">
        <svg width="60" height="80" viewBox="0 0 60 80" className="text-primary/20">
          <path d="M30 0C30 40 10 50 10 80" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M40 10C40 45 20 55 20 80" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="absolute left-20 top-20 hidden xl:block opacity-15">
        <svg width="50" height="70" viewBox="0 0 50 70" fill="none" className="text-primary">
          <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M18 45H32" stroke="currentColor" strokeWidth="2" />
          <path d="M20 50H30" stroke="currentColor" strokeWidth="2" />
          <path d="M22 55H28" stroke="currentColor" strokeWidth="2" />
          <path
            d="M18 45V35C18 32 20 28 25 28C30 28 32 32 32 35V45"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          {/* Rays */}
          <line x1="25" y1="0" x2="25" y2="5" stroke="currentColor" strokeWidth="1.5" />
          <line x1="45" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="25" x2="5" y2="25" stroke="currentColor" strokeWidth="1.5" />
          <line x1="40" y1="10" x2="43" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="7" y1="43" x2="10" y2="40" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </section>
  )
}
