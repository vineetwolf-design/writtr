import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeIn, fadeUp, stagger } from "@/lib/animation"

export function PricingSection() {
  const plans = [
    {
      name: "Seedling",
      price: "$0",
      period: "/month",
      description: "Perfect for testing your content strategy and exploring Writtr's capabilities.",
      features: ["3 Generations/month", "Single platform per generation", "Professional & Casual tones coming soon"],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Evergreen",
      price: "$19",
      period: "/month",
      description: "For creators scaling their presence across multiple platforms consistently.",
      features: [
        "Unlimited Generations",
        "Professional & Casual Tone Options",
        "Multi-platform Generation",
        "Generation History & Analytics",
      ],
      cta: "Get Started",
      popular: true,
    },
  ]

  return (
    <section id="pricing" className="py-16 px-6 relative">
      <div className="absolute left-10 top-20 hidden xl:block opacity-15">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-primary">
          <circle cx="20" cy="40" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="20" cy="40" rx="15" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="40" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="40" cy="25" rx="15" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <text x="17" y="44" fontSize="12" fill="currentColor">
            $
          </text>
          <text x="37" y="29" fontSize="12" fill="currentColor">
            $
          </text>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground font-sans">Start for free, upgrade with your audience grows.</p>
        </div>

        <AnimateOnScroll variant={stagger}>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, index) => (
              <AnimateOnScroll variant={fadeUp} key={index}>
                <Card
                  className={`bg-card border-border p-6 relative rounded-2xl ${plan.popular ? "ring-2 ring-primary" : ""}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground rounded-full px-3 font-sans">
                      POPULAR
                    </Badge>
                  )}

                  <h3 className="font-serif text-xl text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-serif text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm font-sans">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 font-sans">{plan.description}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground font-sans">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full rounded-full font-sans ${plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      <div className="absolute right-10 bottom-10 hidden xl:block opacity-15">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className="text-primary">
          <path d="M30 80V50" stroke="currentColor" strokeWidth="2" />
          <path d="M30 65C20 60 15 50 20 40C25 45 30 55 30 65Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M30 55C40 50 45 40 40 30C35 35 30 45 30 55Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="30" cy="80" rx="15" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </section>
  )
}
