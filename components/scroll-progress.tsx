"use client"

import { useEffect, useRef, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  // Update progress on scroll
  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      setProgress((window.scrollY / total) * 100)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Convert Y → scroll position
  const scrollToPosition = (clientY: number) => {
    if (!trackRef.current) return

    const rect = trackRef.current.getBoundingClientRect()
    const y = Math.min(Math.max(clientY - rect.top, 0), rect.height)
    const percent = y / rect.height

    const total =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    window.scrollTo({
      top: total * percent,
      behavior: "smooth",
    })
  }

  // Drag handlers
  useEffect(() => {
    if (!isDragging) return

    const onMove = (e: MouseEvent) => scrollToPosition(e.clientY)
    const onUp = () => setIsDragging(false)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
  }, [isDragging])

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2 select-none">
      {/* Track */}
      <div
        ref={trackRef}
        onMouseDown={(e) => {
          setIsDragging(true)
          scrollToPosition(e.clientY)
        }}
        className="relative w-2 h-40 rounded-full bg-border/50 cursor-pointer"
      >
        {/* Progress */}
        <div
          className="absolute top-0 left-0 w-full bg-primary rounded-full"
          style={{ height: `${progress}%` }}
        />

        {/* Thumb */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-md"
          style={{ top: `calc(${progress}% - 8px)` }}
        />
      </div>

      {/* Percentage */}
      <span className="text-xs text-muted-foreground font-sans">
        {Math.round(progress)}%
      </span>
    </div>
  )
}
