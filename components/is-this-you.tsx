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
        <div className="pointer-events-none sticky top-1/3 z-10 -translate-y-1/3">
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

        {/* Two independent scrollers pinned left/right; alternate with scroll */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:mt-24 md:grid-cols-2">
          <StackScroller
            progress={scrollYProgress}
            shift={0.0}
            mode="sequentialLeft"
            spacing={36}
            items={[
              "paying for overpriced tools",
              "struggling to grow creators social media’s",
              "repetitive tasks that slow you down",
              "high operating costs reduce profits",
            ]}
          />
          <StackScroller
            progress={scrollYProgress}
            shift={0.35}
            mode="sequentialLeft"
            spacing={36}
            items={[
              "paying for overpriced tools",
              "struggling to grow creators social media’s",
              "repetitive tasks that slow you down",
              "high operating costs reduce profits",
            ]}
            className="md:mt-24"
          />
        </div>
      </div>
    </section>
  )
}
