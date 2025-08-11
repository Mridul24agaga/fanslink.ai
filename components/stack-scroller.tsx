"use client"

import { motion, useTransform, type MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface StackScrollerProps {
  items: string[]
  progress: MotionValue<number>
  // amount of vertical travel per item (px)
  travel?: number
  // staggering between items (portion of progress 0-1)
  stagger?: number
  // shift the whole column's timing 0-1
  shift?: number
  className?: string
}

/**
 * StackScroller
 * - Each item has its own "local" progress so they enter one-by-one.
 * - Appears from bottom and disappears at top thanks to mask/fades.
 * - Scrubs with scroll; reversing direction naturally when scrolling up.
 */
export default function StackScroller({
  items,
  progress,
  travel = 220,
  stagger = 0.14,
  shift = 0,
  className,
}: StackScrollerProps) {
  // Shift the entire column so left/right don't sync perfectly
  const shifted = useTransform(progress, (v) => {
    let x = v + shift
    // keep 0..1 looping
    x = x - Math.floor(x)
    return x
  })

  const listItems = items.map((label, i) => {
    // Create a "local" progress per item so they enter sequentially
    const local = useTransform(shifted, (v) => v * (1 + items.length * stagger) - i * stagger)

    // Move from bottom (+travel) to top (-travel). When scrolling up, values go back.
    const y = useTransform(local, [0, 1], [travel, -travel], { clamp: false })
    // Fade in near bottom, hold, fade out near top
    const opacity = useTransform(local, [-0.05, 0.02, 0.85, 1, 1.05], [0, 1, 1, 0, 0])

    return (
      <motion.li
        key={i}
        style={{ y, opacity, willChange: "transform, opacity" }}
        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(to_bottom,#161a36_0%,#0f1331_100%)] px-4 py-2 text-sm font-medium text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
      >
        {label}
      </motion.li>
    )
  })

  return (
    <div
      className={cn(
        "relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur",
        "[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]",
        className,
      )}
    >
      <ul className="relative mx-auto flex w-full max-w-sm flex-col items-stretch gap-3">{listItems}</ul>
    </div>
  )
}
