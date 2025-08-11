"use client"

import type React from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down"

interface ScrollMarqueeProps {
  items: string[]
  direction?: Direction
  speedSec?: number
  play?: boolean
  className?: string
}

/**
 * ScrollMarquee
 * - Seamless vertical loop (duplicated list)
 * - Direction up/down
 * - Play/pause via CSS variable
 * - Top/bottom fade so chips appear from bottom and vanish at top
 */
export default function ScrollMarquee({
  items,
  direction = "up",
  speedSec = 16,
  play = true,
  className,
}: ScrollMarqueeProps) {
  return (
    <div
      className={cn(
        "relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur",
        "[mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]",
        className,
      )}
      style={
        {
          // @ts-expect-error custom CSS vars
          "--duration": `${speedSec}s`,
          "--play": play ? "running" : "paused",
        } as React.CSSProperties
      }
    >
      <ul className={cn("marquee flex w-full flex-col gap-3", direction === "up" ? "marquee-up" : "marquee-down")}>
        {items.concat(items).map((label, i) => (
          <li
            key={i}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(to_bottom,#161a36_0%,#0f1331_100%)] px-4 py-2 text-sm font-medium text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            {label}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .marquee {
          will-change: transform;
          animation-duration: var(--duration);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-play-state: var(--play);
        }
        .marquee-up {
          animation-name: scrollUp;
        }
        .marquee-down {
          animation-name: scrollDown;
        }
        @keyframes scrollUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
        @keyframes scrollDown {
          from {
            transform: translateY(-50%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
