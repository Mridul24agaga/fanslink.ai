"use client"

import React, { useState } from "react"
// @ts-ignore – package ships without types
import { Scrollama, Step } from "react-scrollama"

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

export function StickyScrollAnimation() {
  const [currentStep, setCurrentStep] = useState(0)

  // Step handlers
  const onStepEnter = ({ data }: any) => setCurrentStep(data)
  const onStepExit = ({ data, direction }: any) => {
    if (direction === "up") setCurrentStep(Math.max(0, data - 1))
  }

  const totalVh = scrollContent.length * 120

  return (
    <section className="relative w-full" style={{ height: `${totalVh}vh` }}>
      {/* Sticky visual layer */}
      <div className="pointer-events-none sticky top-0 z-10 flex h-screen items-center justify-center bg-[#F4E5D8] text-gray-900">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center px-4">Is this you?</h2>

        {scrollContent.map((content, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-400 ${
              index === currentStep ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="absolute top-[20%] left-[5%] text-xl md:text-3xl font-semibold text-gray-900">
              {content.topLeftText.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < content.topLeftText.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <p className="absolute top-[30%] right-[5%] text-xl md:text-3xl font-semibold text-gray-900 text-right">
              {content.topRightText.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < content.topRightText.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            {content.bottomLeftTexts && (
              <div className="absolute bottom-[10%] left-[5%] flex flex-col items-start space-y-2">
                {content.bottomLeftTexts.map((text, i) => (
                  <p key={i} className="text-lg md:text-xl font-medium text-gray-900/60">
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scrolling steps layer */}
      <div className="relative z-0">
        <Scrollama onStepEnter={onStepEnter} onStepExit={onStepExit} offset={0.55}>
          {scrollContent.map((_, idx) => (
            <Step data={idx} key={idx}>
              <div className="h-[120vh]" />
            </Step>
          ))}
        </Scrollama>
      </div>
    </section>
  )
}
