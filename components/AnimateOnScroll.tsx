"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  variant?: any
  delay?: number
  inView?: boolean // animate on whileInView (default true). If false, animate on mount.
}

export function AnimateOnScroll({
  children,
  variant,
  delay = 0,
  inView = true,
}: Props) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      {...(inView
        ? { whileInView: "visible", viewport: { once: true, margin: "-80px" } }
        : { animate: "visible" })}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
