"use client"

import type { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

interface RainbowBorderProps extends PropsWithChildren {
  className?: string
  radius?: string
  thickness?: number
  speedMs?: number
}

/**
 * RainbowBorder
 * Animated rainbow shimmer border wrapper (Magic UI-style).
 * Usage:
 *  <RainbowBorder><YourButton /></RainbowBorder>
 */
export default function RainbowBorder({
  children,
  className,
  radius = "9999px",
  thickness = 2,
  speedMs = 2500,
}: RainbowBorderProps) {
  return (
    <div className={cn("relative inline-flex", className)} style={{ borderRadius: radius, padding: thickness }}>
      <div className="absolute inset-0 z-0 rounded-[inherit] opacity-90 rb-gradient" aria-hidden />
      <div className="relative z-10 rounded-[inherit]">{children}</div>

      <style jsx>{`
        .rb-gradient {
          background: linear-gradient(90deg, #ffffff, #9aa7ff, #7b61ff, #ffd089, #ffffff);
          background-size: 200% 200%;
          animation: rainbowShift ${speedMs}ms linear infinite;
          filter: saturate(1.1);
        }
        @keyframes rainbowShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </div>
  )
}
