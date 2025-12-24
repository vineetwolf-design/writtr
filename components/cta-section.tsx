import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeIn, fadeUp, stagger } from "@/lib/animation"

export function CTASection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll variant={fadeIn}>
          <Card className="bg-[#5c4d3f] text-white p-8 md:p-12 relative overflow-hidden rounded-3xl">
            <div className="absolute left-4 top-4 opacity-30">
              <svg width="100" height="100" viewBox="0 0 100 100" className="text-white">
                {/* Document stack */}
                <rect x="10" y="20" width="50" height="60" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="20" y="10" width="50" height="60" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="30" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="1.5" />
                <line x1="30" y1="40" x2="55" y2="40" stroke="currentColor" strokeWidth="1.5" />
                <line x1="30" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="absolute right-4 bottom-4 opacity-30">
              <svg width="120" height="120" viewBox="0 0 120 120" className="text-white">
                {/* Person writing */}
                <circle cx="60" cy="30" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                <path
                  d="M40 60C40 50 50 45 60 45C70 45 80 50 80 60V90H40V60Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Desk */}
                <rect x="30" y="90" width="60" height="5" stroke="currentColor" strokeWidth="2" fill="none" />
                {/* Paper on desk */}
                <rect x="45" y="75" width="20" height="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
                {/* Pen in hand */}
                <line x1="75" y1="70" x2="90" y2="85" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Additional floating elements */}
            <div className="absolute left-1/4 bottom-8 opacity-20">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-white">
                <path d="M20 5L23 15L33 15L25 22L28 32L20 25L12 32L15 22L7 15L17 15Z" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute right-1/4 top-8 opacity-20">
              <svg width="30" height="30" viewBox="0 0 30 30" className="text-white">
                <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M15 8V15L20 18" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <AnimateOnScroll variant={stagger}>
              <AnimateOnScroll variant={fadeUp}>
                <div className="relative z-10 text-center">
                  <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to stop formatting?</h2>
                  <p className="text-white/80 mb-8 max-w-md mx-auto font-sans">
                    Join the new wave of creatore using AI to antite ther voice, not replace it.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant={fadeUp}>
                <div className="relative z-10 text-center">
                  <Button className="bg-white text-[#5c4d3f] hover:bg-white/90 px-8 py-6 text-base rounded-full font-sans">
                    Start Writing Free
                  </Button>

                  <p className="text-xs text-white/60 mt-4 font-sans">No credit card required. Cancel anytime.</p>
                </div>
              </AnimateOnScroll>
            </AnimateOnScroll>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
