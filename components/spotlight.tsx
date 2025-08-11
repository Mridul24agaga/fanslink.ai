import React from "react"

/**
 * Spotlight
 * Soft angled "stage light" for dark hero backgrounds.
 * Places a warm cone from the top-left, fading toward center.
 */
export default function Spotlight() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Warm cone */}
      <div
        className="absolute -left-24 -top-20 h-[85vh] w-[80vw] -rotate-[20deg] blur-2xl"
        style={{
          background:
            "radial-gradient(60% 120% at 8% 0%, rgba(255,208,137,0.28) 0%, rgba(123,97,255,0.18) 35%, rgba(123,97,255,0.06) 60%, rgba(123,97,255,0) 78%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 12%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 12%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0) 100%)",
          filter: "saturate(1.1)",
        }}
      />

      {/* Subtle secondary fill */}
      <div
        className="absolute -left-8 -top-6 h-[55vh] w-[60vw] -rotate-[20deg] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(50% 80% at 6% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0) 75%)",
        }}
      />
    </div>
  )
}


