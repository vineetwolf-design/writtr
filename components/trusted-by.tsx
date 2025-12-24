import { Mountain, Triangle, Circle, Hexagon, Zap } from "lucide-react"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeUp, stagger } from "@/lib/animation"

export function TrustedBy() {
  const companies = [
    { name: "ACME", icon: Mountain },
    { name: "Vertex", icon: Triangle },
    { name: "Loop", icon: Circle },
    { name: "Mosaic", icon: Hexagon },
    { name: "Flash", icon: Zap },
  ]

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <AnimateOnScroll variant={fadeUp}>
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by 10,000+ Mindful Creators
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll variant={stagger}>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <AnimateOnScroll key={company.name} variant={fadeUp}>
              <div className="flex items-center gap-2 text-muted-foreground/70 hover:text-muted-foreground transition-colors">
                <company.icon className="w-5 h-5" />
                <span className="font-medium">{company.name}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  )
}
