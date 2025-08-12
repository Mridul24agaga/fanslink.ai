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
  // animation mode
  mode?: "stack" | "sequentialLeft"
  // spacing between items in sequential mode
  spacing?: number
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
  mode = "stack",
  spacing = 24,
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

    if (mode === "sequentialLeft") {
      // Slide in from left once and stay visible
      const x = useTransform(local, [0, 0.25], [-60, 0])
      const opacity = useTransform(local, [0, 0.25], [0, 1])
      const yStatic = i * spacing
      return (
        <motion.li
          key={i}
          style={{ x, opacity, y: yStatic, willChange: "transform, opacity" }}
          className="text-left text-2xl font-extrabold leading-tight text-white/90 md:text-3xl"
        >
          {label}
        </motion.li>
      )
    }

    // Default "stack" mode: items flow vertically up and out
    const y = useTransform(local, [0, 1], [travel, -travel], { clamp: false })
    const opacity = useTransform(local, [-0.05, 0.02, 0.85, 1, 1.05], [0, 1, 1, 0, 0])
    return (
      <motion.li
        key={i}
        style={{ y, opacity, willChange: "transform, opacity" }}
        className="text-2xl font-extrabold leading-tight text-white/90 md:text-3xl"
      >
        {label}
      </motion.li>
    )
  })

  return (
    <div
      className={cn(
        mode === "sequentialLeft" ? "relative h-72" : "relative h-72",
        "overflow-hidden p-0",
        "[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]",
        className,
      )}
    >
      <ul className="relative mx-auto flex w-full max-w-xl flex-col items-start" role="list">
        {listItems}
      </ul>
    </div>
  )
}
