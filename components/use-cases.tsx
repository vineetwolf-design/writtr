import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeUp, fadeIn, stagger } from "@/lib/animation"

export function UseCases() {
  const useCases = [
    {
      badge: "FOUNDERS",
      title: "Build in Public",
      description: "Sties por journey affimatty without haurs roaming the perfset episels.",
      image: "/laptop-workspace-with-coffee-and-notebook-vintage-.jpg",
    },
    {
      badge: "CREATORS",
      title: "Scalv Your Niche",
      description: "Turn one thoughtful blog post in a week of engiqing platform, giattic devol content.",
      image: "/creative-desk-setup-with-plants-and-stationery-vin.jpg",
    },
    {
      badge: "TEAMS",
      title: "Content Harmony",
      description: "Maintain s constante. high quality fand mice anlelet of hamtinrricos and chematals.",
      image: "/team-collaboration-workspace-with-papers-vintage-s.jpg",
    },
  ]

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll variant={fadeIn}>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Who is Writtr for?</h2>
            <p className="text-muted-foreground">Tools designed for the thoughtful digital economy.</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant={stagger}>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <AnimateOnScroll key={index} variant={fadeUp}>
                <Card className="bg-card border-border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 bg-muted">
                    <img
                      src={useCase.image || "/placeholder.svg"}
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary/80 text-primary-foreground text-xs">
                      {useCase.badge}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{useCase.description}</p>
                  </div>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
