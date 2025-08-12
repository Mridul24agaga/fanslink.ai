import React from "react"

/**
 * Spotlight
 * Soft angled "stage light" for dark hero backgrounds.
 * Places a warm cone from the top-left, fading toward center.
 */
export default function Spotlight() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Smooth elliptical spotlight, origin off-screen top-left */}
      <div
        className="absolute left-[-30vw] top-[-40vh] h-[140vh] w-[120vw] blur-[60px] opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 70% 120% at 15% 10%, rgba(255,208,137,0.28) 0%, rgba(123,97,255,0.18) 35%, rgba(123,97,255,0.07) 58%, rgba(123,97,255,0) 72%)",
          filter: "saturate(1.05)",
        }}
      />

      {/* Feathered fill to remove any residual edge */}
      <div
        className="absolute left-[-25vw] top-[-30vh] h-[120vh] w-[110vw] blur-[80px] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 65% 110% at 12% 8%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 35%, rgba(255,255,255,0) 70%)",
        }}
      />
    </div>
  )
}


