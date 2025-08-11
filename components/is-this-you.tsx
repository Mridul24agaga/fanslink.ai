"use client"

import { useRef } from "react"
import { useScroll, motion } from "framer-motion"
import StackScroller from "@/components/stack-scroller"

export default function IsThisYouSection() {
  const ref = useRef<HTMLDivElement | null>(null)

  // Progress goes 0 -> 1 while the section scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={ref} className="relative min-h-[140vh] py-24 md:py-28">
      <div className="container relative mx-auto px-4">
        {/* Center-pinned title */}
        <div className="pointer-events-none sticky top-1/2 z-10 -translate-y-1/2">
          <motion.h2
            className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
            style={{ willChange: "transform" }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#ffffff,#9aa7ff,#7b61ff,#ffd089)" }}
            >
              {"Is this you?"}
            </span>
          </motion.h2>
        </div>

        {/* Two independent scrollers. Left has slight timing shift so they alternate */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 md:mt-24 md:grid-cols-2">
          <StackScroller
            progress={scrollYProgress}
            shift={0.0}
            items={[
              "Spending hours editing short‑form",
              "Inconsistent posting schedule",
              "Ideas but no time to execute",
              "Hard to resize for every platform",
              "Clips lose quality on export",
              "Can’t keep up with trends",
              "Too many manual uploads",
            ]}
          />
          <StackScroller
            progress={scrollYProgress}
            shift={0.35}
            items={[
              "Need a repeatable workflow",
              "Want 1‑click distribution",
              "Batch create from long‑form",
              "Keep brand‑safe style every time",
              "Automate captions and sizes",
              "Publish everywhere at once",
              "Focus on growth, not grunt work",
            ]}
            className="md:mt-12"
          />
        </div>
      </div>
    </section>
  )
}
