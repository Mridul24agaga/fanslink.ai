"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

type Size = "sm" | "md" | "lg"

export interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size
}

/**
 * PillButton
 * - Dark vertical gradient (glassy)
 * - Soft translucent border and top highlight
 * - Bold white text
 * - Works on #000319 backgrounds
 */
const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
}

export default function PillButton({ className, size = "lg", children, ...props }: PillButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        // layout
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-all",
        // background gradient (navy-dark -> deeper)
        "bg-[linear-gradient(to_bottom,#1b2144_0%,#121737_55%,#0e1330_100%)]",
        // border and subtle outer stroke
        "border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
        // hover / active (no inner sheen layer)
        "hover:brightness-[1.05] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_10px_24px_-8px_rgba(123,97,255,0.25)] active:translate-y-[1px]",
        // focus ring
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </button>
  )
}
