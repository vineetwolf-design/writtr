"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, LogOut, Bell, Sparkles, Clock, MoreHorizontal, ChevronRight, Pencil } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <DashboardContent />
    </Suspense>
  )
}

function DashboardContent() {
  const [activeSection, setActiveSection] = useState<"repurpose" | "my-posts">("repurpose")
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["twitter"])
  const [activeOutputPlatform, setActiveOutputPlatform] = useState<string>("twitter")

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
    if (!selectedPlatforms.includes(platform)) {
      setActiveOutputPlatform(platform)
    }
  }

  const outputContent: Record<string, string> = {
    twitter:
      "🧵 Thread: Building in public creates trust.\n\n1/ Transparency beats secrecy\n2/ Early feedback loops matter\n3/ Community builds with you\n\nKey takeaway: Don't wait for perfection. Plant early.",
    instagram:
      "✨ Building in Public: A Creator's Journey\n\nWhy I share everything openly:\n• Builds authentic connections\n• Gets real-time feedback\n• Creates accountability\n\nThe secret? Start before you're ready. 🌱\n\n#CreatorEconomy #BuildInPublic #ContentCreator",
    linkedin:
      "I've been building in public for the past year, and here's what I learned:\n\nTransparency creates trust in ways that polished marketing never can.\n\n→ Share your struggles alongside wins\n→ Invite feedback early and often\n→ Let your community shape the product\n\nThe result? A loyal audience that grows with you.\n\nWhat's your experience with building in public?",
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />

      {/* Top Navbar */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between bg-card">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <Pencil className="w-4 h-4 text-primary" />
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">Writtr</span>
        </Link>

        {/* Right side - notifications and profile */}
        <div className="flex items-center gap-4">
          <button className="relative w-10 h-10 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="font-serif text-primary font-medium">JD</span>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-foreground font-sans">Jane Doe</p>
              <p className="text-xs text-muted-foreground font-sans">Evergreen Plan</p>
            </div>
            <button className="text-muted-foreground hover:text-foreground ml-2">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 py-8">
        <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-full mb-8">
          <button
            onClick={() => setActiveSection("repurpose")}
            className={`px-6 py-2.5 rounded-full text-sm font-sans font-medium transition-all ${
              activeSection === "repurpose"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Repurpose
            </span>
          </button>
          <button
            onClick={() => setActiveSection("my-posts")}
            className={`px-6 py-2.5 rounded-full text-sm font-sans font-medium transition-all ${
              activeSection === "my-posts"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              My Posts
            </span>
          </button>
        </div>

        {/* Content Area */}
        <div className="w-full max-w-6xl">
          {activeSection === "repurpose" && (
            <Card className="p-6 border-border bg-card rounded-3xl">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6 text-center">
                Transform Your Ideas
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Side - Input, Platform Selection, Button */}
                <div className="space-y-5">
                  {/* Input Section */}
                  <div>
                    <label className="text-sm font-medium text-foreground font-sans mb-2 block">
                      Your Raw Thoughts
                    </label>
                    <textarea
                      placeholder="Paste your rough notes, ideas, or bullet points here..."
                      className="w-full h-48 p-4 border border-border rounded-2xl bg-background text-foreground font-sans text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground font-sans">0 words written</span>
                    </div>
                  </div>

                  {/* Platform Selection */}
                  <div>
                    <p className="text-sm font-medium text-foreground font-sans mb-3">Select platforms:</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => togglePlatform("twitter")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-sans transition-colors ${
                          selectedPlatforms.includes("twitter")
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background hover:bg-muted"
                        }`}
                      >
                        <XIcon />X
                      </button>
                      <button
                        onClick={() => togglePlatform("instagram")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-sans transition-colors ${
                          selectedPlatforms.includes("instagram")
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background hover:bg-muted"
                        }`}
                      >
                        <InstagramIcon />
                        Instagram
                      </button>
                      <button
                        onClick={() => togglePlatform("linkedin")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-sans transition-colors ${
                          selectedPlatforms.includes("linkedin")
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background hover:bg-muted"
                        }`}
                      >
                        <LinkedInIcon />
                        LinkedIn
                      </button>
                    </div>
                  </div>

                  {/* Repurpose Button */}
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-sans py-6 text-base">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Repurpose Content
                  </Button>
                </div>

                {/* Right Side - Output with Platform Toggle */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground font-sans">Polished Output</label>
                    <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-full">
                      {selectedPlatforms.includes("twitter") && (
                        <button
                          onClick={() => setActiveOutputPlatform("twitter")}
                          className={`p-2 rounded-full transition-colors ${
                            activeOutputPlatform === "twitter"
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <XIcon />
                        </button>
                      )}
                      {selectedPlatforms.includes("instagram") && (
                        <button
                          onClick={() => setActiveOutputPlatform("instagram")}
                          className={`p-2 rounded-full transition-colors ${
                            activeOutputPlatform === "instagram"
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <InstagramIcon />
                        </button>
                      )}
                      {selectedPlatforms.includes("linkedin") && (
                        <button
                          onClick={() => setActiveOutputPlatform("linkedin")}
                          className={`p-2 rounded-full transition-colors ${
                            activeOutputPlatform === "linkedin"
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <LinkedInIcon />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Output Box */}
                  <div className="w-full h-72 p-4 border border-border rounded-2xl bg-muted/30 overflow-auto">
                    {selectedPlatforms.length > 0 ? (
                      <p className="text-foreground font-sans text-sm whitespace-pre-wrap">
                        {outputContent[activeOutputPlatform]}
                      </p>
                    ) : (
                      <p className="text-muted-foreground font-sans text-sm flex items-center justify-center h-full">
                        Select a platform to see output preview...
                      </p>
                    )}
                  </div>

                  {/* Platform indicator */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-sans">
                    <span>
                      Viewing:{" "}
                      {activeOutputPlatform === "twitter"
                        ? "X (Twitter)"
                        : activeOutputPlatform === "instagram"
                          ? "Instagram"
                          : "LinkedIn"}
                    </span>
                    <span>
                      {selectedPlatforms.length} platform{selectedPlatforms.length !== 1 ? "s" : ""} selected
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeSection === "my-posts" && (
            <div>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <StatCard
                  title="Total Posts"
                  value="12"
                  change="+3 this week"
                  icon={<FileText className="w-5 h-5" />}
                />
                <StatCard
                  title="Repurposed"
                  value="47"
                  change="+12 this week"
                  icon={<Sparkles className="w-5 h-5" />}
                />
              </div>

              {/* Post History Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-xl font-semibold text-foreground">Recent Posts</h2>
                <Button variant="ghost" className="text-primary text-sm font-sans rounded-full">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <PostCard
                  title="Building in Public: A Creator's Guide"
                  excerpt="Why transparency beats secrecy in the creator economy..."
                  date="2 hours ago"
                  platforms={["twitter", "linkedin"]}
                  status="published"
                />
                <PostCard
                  title="The Power of Consistent Content"
                  excerpt="How showing up daily transformed my audience growth..."
                  date="Yesterday"
                  platforms={["instagram", "twitter"]}
                  status="published"
                />
                <PostCard
                  title="5 Lessons from My First Year"
                  excerpt="What I wish I knew when I started creating content online..."
                  date="3 days ago"
                  platforms={["linkedin"]}
                  status="draft"
                />
                <PostCard
                  title="Content That Converts"
                  excerpt="The secret to turning followers into customers..."
                  date="5 days ago"
                  platforms={["twitter", "instagram", "linkedin"]}
                  status="published"
                />
                <PostCard
                  title="Morning Routines for Creators"
                  excerpt="How I structure my day for maximum creativity..."
                  date="1 week ago"
                  platforms={["instagram"]}
                  status="published"
                />
                <PostCard
                  title="The Art of Storytelling"
                  excerpt="Why stories connect better than facts alone..."
                  date="1 week ago"
                  platforms={["linkedin", "twitter"]}
                  status="scheduled"
                />
              </div>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="fixed bottom-8 left-8 opacity-10 pointer-events-none">
          <svg width="150" height="150" viewBox="0 0 150 150" className="text-primary">
            <circle cx="75" cy="75" r="60" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 5" />
            <path d="M40 75 Q75 40 110 75 Q75 110 40 75" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function StatCard({
  title,
  value,
  change,
  icon,
}: {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}) {
  return (
    <Card className="p-5 border-border bg-card rounded-2xl">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
        <span className="text-xs text-muted-foreground font-sans">{change}</span>
      </div>
      <p className="text-3xl font-serif font-semibold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground font-sans">{title}</p>
    </Card>
  )
}

function PostCard({
  title,
  excerpt,
  date,
  platforms,
  status,
}: {
  title: string
  excerpt: string
  date: string
  platforms: string[]
  status: "published" | "scheduled" | "draft"
}) {
  const statusStyles = {
    published: "bg-green-100 text-green-800",
    scheduled: "bg-blue-100 text-blue-800",
    draft: "bg-muted text-muted-foreground",
  }

  return (
    <Card className="aspect-square p-4 border-border bg-card hover:bg-muted/30 transition-colors rounded-2xl flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs px-2 py-0.5 rounded-full font-sans capitalize ${statusStyles[status]}`}>
          {status}
        </span>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <h3 className="font-medium text-foreground font-sans text-sm mb-2 line-clamp-2">{title}</h3>
      <p className="text-xs text-muted-foreground font-sans mb-auto line-clamp-3">{excerpt}</p>

      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-muted-foreground font-sans">
          <Clock className="w-3 h-3" />
          {date}
        </div>
        <div className="flex items-center gap-1">
          {platforms.map((platform) => (
            <PlatformIcon key={platform} platform={platform} />
          ))}
        </div>
      </div>
    </Card>
  )
}

function PlatformIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    twitter: <XIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
  }

  return (
    <span className="w-5 h-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
      {icons[platform]}
    </span>
  )
}

function XIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.668.072-4.948.2-4.358 2.618-6.78 6.98-6.98 1.281-.058 1.689-.072 4.948-.072zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
