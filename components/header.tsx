import { Button } from "@/components/ui/button"
import { Feather } from "lucide-react"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeIn, fadeUp, stagger } from "@/lib/animation"

export function Header() {
  return (
    <AnimateOnScroll variant={fadeIn} inView={false}>
      <header className="w-full py-4 px-6 flex items-center justify-between max-w-7xl mx-auto">
        <AnimateOnScroll variant={fadeUp} inView={false}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Feather className="w-4 h-4 text-primary" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">Writtr</span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant={stagger} inView={false}>
          <nav className="hidden md:flex items-center gap-8">
            <AnimateOnScroll variant={fadeUp} inView={false}>
              <a href="#features" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
            </AnimateOnScroll>
            <AnimateOnScroll variant={fadeUp} inView={false}>
              <a
                href="#how-it-works"
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </a>
            </AnimateOnScroll>
            <AnimateOnScroll variant={fadeUp} inView={false}>
              <a href="#pricing" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
            </AnimateOnScroll>
          </nav>
        </AnimateOnScroll>

        <AnimateOnScroll variant={fadeUp} inView={false}>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
            >
              Sign in
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-sm px-5">
              Start Writing Free
            </Button>
          </div>
        </AnimateOnScroll>
      </header>
    </AnimateOnScroll>
  )
}
