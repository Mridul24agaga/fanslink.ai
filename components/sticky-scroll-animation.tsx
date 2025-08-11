"use client"
import React, { useEffect, useRef, useState } from "react"

const scrollContent = [
  {
    topLeftText: "Can't pick an idea",
    topRightText: "Analysis paralysis",
    bottomLeftTexts: ["No audience yet", "Fear of wasting months"],
  },
  {
    topLeftText: "No time after work",
    topRightText: "Energy is low\nat night",
    bottomLeftTexts: ["Slow progress", "Weekend-only sprints"],
  },
  {
    topLeftText: "Too many tools",
    topRightText: "Messy workflow",
    bottomLeftTexts: ["Context switching", "Nothing shipped"],
  },
  {
    topLeftText: "Launching feels scary",
    topRightText: "Zero distribution plan",
    bottomLeftTexts: ["Crickets on launch day", "No feedback loop"],
  },
  {
    topLeftText: "Pricing is a guess",
    topRightText: "Will anyone pay?",
    bottomLeftTexts: ["No validation", "Churn anxiety"],
  },
]

const VH_PER_STEP = 120 // increase for longer dwell time per step

export function StickyScrollAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [stepProgress, setStepProgress] = useState(0)
  const [isMd, setIsMd] = useState(false)

  const totalSteps = scrollContent.length
  const totalHeightVh = totalSteps * VH_PER_STEP

  useEffect(() => {
    let ticking = false
    const onResize = () => setIsMd(window.innerWidth >= 768)
    onResize()

    const update = () => {
      if (!wrapperRef.current) {
        ticking = false
        return
      }
      const wrapper = wrapperRef.current
      const rect = wrapper.getBoundingClientRect()

      // Convert rect.top (viewport) to document position
      const start = window.scrollY + rect.top
      const end = start + wrapper.offsetHeight - window.innerHeight
      const denom = Math.max(1, end - start)
      const overall = Math.max(0, Math.min(1, (window.scrollY - start) / denom))

      const stepIndex = Math.min(totalSteps - 1, Math.floor(overall * totalSteps))
      const progressInStep = overall * totalSteps - stepIndex

      setCurrentStep(stepIndex)
      setStepProgress(progressInStep)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    // initial compute
    update()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [totalSteps])

  return (
    <div ref={wrapperRef} className="relative bg-[#000319]" style={{ height: `${totalHeightVh}vh` }}>
      
    </div>
  )
}

export default function StickyScrollAnimationPlaceholder() {
  // Keeping a default export (no-op) avoids accidental import changes elsewhere.
  // Use the named export { StickyScrollAnimation } as in app/page.tsx.
  return null
}
