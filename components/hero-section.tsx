"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimateOnScroll } from "@/components/AnimateOnScroll"
import { fadeUp, fadeIn, stagger } from "@/lib/animation"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 px-6 max-w-7xl mx-auto">
      {/* Decorative swirl left */}
       <AnimateOnScroll variant={fadeIn}>
        <div className="absolute left-4 top-20 hidden lg:block">
          <svg width="60" height="100" viewBox="0 0 60 100" fill="none" className="text-primary/30">
            <path d="M30 0C30 50 10 60 10 100" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M40 10C40 55 20 65 20 100" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
       </AnimateOnScroll>
      

      <div className="absolute right-10 top-10 hidden xl:block opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-primary">
          <ellipse cx="35" cy="60" rx="25" ry="10" stroke="currentColor" strokeWidth="2" />
          <path
            d="M10 35V60C10 65 20 70 35 70C50 70 60 65 60 60V35"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <ellipse cx="35" cy="35" rx="25" ry="10" stroke="currentColor" strokeWidth="2" fill="var(--background)" />
          <path d="M60 40C70 40 75 45 75 50C75 55 70 60 60 60" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Steam */}
          <path d="M25 20C25 15 30 15 30 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M35 18C35 13 40 13 40 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M45 20C45 15 50 15 50 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <AnimateOnScroll variant={stagger}>
          <AnimateOnScroll variant={fadeUp}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              <span className="relative inline-block">Turn</span>{" "}
              <span className="relative inline-block text-primary">
                One Idea
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="2" className="text-primary/60" />
                </svg>
              </span>{" "}
              into
              <br />
              <span className="relative inline-block italic">
                Infinite Content
                <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C80 4 220 4 298 8" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                </svg>
              </span>
              <span className="inline-block ml-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/60 inline">
                  <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor" />
                </svg>
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant={fadeUp}>
            <p className="mt-6 font-sans text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Transform your blog drafts and rough ideas into platform-optimized content. One piece of writing. Multiple platforms. Maximum impact.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant={fadeUp}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Decorative arrow pointing to button */}
              <div className="hidden sm:block relative">
                <svg width="30" height="30" viewBox="0 0 30 30" className="absolute -left-10 top-2 text-primary/40">
                  <path d="M5 25C10 20 20 15 25 10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M20 8L26 10L24 16" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base rounded-full flex items-center gap-2 font-sans">
                Start Writing Free
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-accent px-8 py-6 text-base rounded-full bg-transparent font-sans"
              >
                See How It Works
              </Button>
            </div>
          </AnimateOnScroll>
        </AnimateOnScroll>
      </div>

      <div className="absolute left-8 bottom-0 hidden lg:block opacity-20">
        <svg width="50" height="80" viewBox="0 0 50 80" fill="none" className="text-primary">
          <path d="M25 80V40" stroke="currentColor" strokeWidth="2" />
          <path d="M25 60C15 55 10 45 15 35C20 40 25 50 25 60Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M25 50C35 45 40 35 35 25C30 30 25 40 25 50Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M25 40C15 35 10 25 15 15C20 20 25 30 25 40Z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </section>
  )
}
