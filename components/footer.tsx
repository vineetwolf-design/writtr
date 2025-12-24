import { Feather, Twitter, Instagram, Linkedin } from "lucide-react"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeIn, fadeUp, stagger } from "@/lib/animation"

export function Footer() {
  const footerLinks = {
    product: ["Features", "Pricing", "Changelog"],
    resources: ["Blog", "Creator Guide", "Help Center"],
    company: ["About", "Terms", "Privacy"],
  }

  return (
    <footer className="py-12 px-6 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll variant={fadeIn}>
          <div className="grid md:grid-cols-5 gap-8">
            {/* Brand */}
            <AnimateOnScroll variant={fadeUp}>
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Feather className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-serif text-xl font-semibold text-foreground">Writtr</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                  Empowering solo cretoers to build sustinable media empires, solo idea at a time.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Links */}
            <AnimateOnScroll variant={stagger}>
              <AnimateOnScroll variant={fadeUp}>
                <div>
                  <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">Product</h4>
                  <ul className="space-y-2">
                    {footerLinks.product.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant={fadeUp}>
                <div>
                  <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
                  <ul className="space-y-2">
                    {footerLinks.resources.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant={fadeUp}>
                <div>
                  <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
                  <ul className="space-y-2">
                    {footerLinks.company.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2025 Writtr Inc. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Made with ♥ for writers everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
