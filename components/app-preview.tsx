import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Sparkles } from "lucide-react"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeIn, stagger } from "@/lib/animation"

export function AppPreview() {
  return (
    <section className="py-8 px-6 max-w-5xl mx-auto relative">
      {/* Decorative curly brackets */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block text-primary/30">
        <svg width="40" height="200" viewBox="0 0 40 200">
          <path d="M35 10C20 10 20 50 10 100C20 150 20 190 35 190" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block text-primary/30">
        <svg width="40" height="200" viewBox="0 0 40 200">
          <path d="M5 10C20 10 20 50 30 100C20 150 20 190 5 190" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <AnimateOnScroll variant={fadeIn}>
        <Card className="bg-card border-border shadow-lg overflow-hidden rounded-2xl">
          {/* Browser header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-background/80 rounded-full px-4 py-1 text-xs text-muted-foreground flex items-center gap-2 font-sans">
                <span>writtr.ai/repurpose/free</span>
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="p-6 grid md:grid-cols-2 gap-6">
            {/* Input side */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plus className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs uppercase tracking-wide text-muted-foreground font-medium font-sans">
                  Input: Raw Thoughts
                </span>
              </div>

              <AnimateOnScroll variant={stagger}>
                <AnimateOnScroll variant={fadeIn}>
                  <Card className="bg-background border-border p-4 min-h-[200px] rounded-xl relative">
                    <p className="text-sm text-foreground font-medium mb-3 font-sans">
                      Idea: Building in public creates creatic connections.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc font-sans">
                      <li>Beilds trust + corqoratality</li>
                      <li>habit feedback ways</li>
                      <li>Early feedback msm</li>
                      <li>Community billore product</li>
                    </ul>
                    <p className="text-sm text-foreground mt-4 italic font-sans">
                      Key takeaway: Don't wait for perfection. Plant early.
                    </p>

                    {/* Decorative scribble */}
                    <svg className="absolute bottom-2 right-2 w-6 h-6 text-primary/30" viewBox="0 0 24 24">
                      <path d="M4 20C8 16 16 8 20 4" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                  </Card>
                </AnimateOnScroll>

                <AnimateOnScroll variant={fadeIn}>
                  <p className="text-xs text-muted-foreground mt-2 font-sans">254 words written</p>
                </AnimateOnScroll>
              </AnimateOnScroll>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs uppercase tracking-wide text-muted-foreground font-medium font-sans">
                  Output: Polished Content
                </span>
              </div>

              <AnimateOnScroll variant={fadeIn}>
                <Card className="bg-background border-border p-4 min-h-[200px] relative rounded-xl">
                  {/* Text-only output content */}
                  <div className="space-y-3">
                    <p className="text-sm text-foreground font-medium font-sans">
                      Building in public isn't just a trend—it's a superpower.
                    </p>
                    <p className="text-sm text-muted-foreground font-sans">
                      Here's why creators are choosing transparency over secrecy:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 ml-4 list-disc font-sans">
                      <li>Trust builds faster when people see your journey</li>
                      <li>Feedback loops accelerate your growth</li>
                      <li>Community forms around your process</li>
                      <li>Accountability keeps you consistent</li>
                    </ul>
                    <p className="text-sm text-foreground font-medium italic font-sans mt-3">
                      The secret? Start before you're ready. Plant seeds now, harvest later.
                    </p>
                  </div>

                  {/* Sparkle decoration */}
                  <Sparkles className="absolute top-2 right-2 w-4 h-4 text-primary/40" />
                </Card>
              </AnimateOnScroll>

              <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-sans">Platform:</span>
                <div className="flex gap-1">
                  {/* X/Twitter */}
                  <button className="w-8 h-8 rounded-full bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-colors border border-border">
                    <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  {/* Instagram */}
                  <button className="w-8 h-8 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors border-2 border-primary">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                  {/* LinkedIn */}
                  <button className="w-8 h-8 rounded-full bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-colors border border-border">
                    <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                </div>
              </div>
              <Button
                size="sm"
                className="bg-primary/20 text-primary hover:bg-primary/30 text-xs rounded-full font-sans"
              >
                Repurposing...
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </AnimateOnScroll>

      {/* Decorative arrow */}
      <div className="absolute -right-12 bottom-10 hidden xl:block opacity-15">
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className="text-primary">
          <path d="M5 20L85 20" stroke="currentColor" strokeWidth="3" />
          <path d="M85 20L95 15L95 25L85 20Z" fill="currentColor" />
          <rect x="0" y="15" width="15" height="10" rx="2" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
