"use client"
import React from "react"
import { RefreshCcw, ScanFace, FileCog, Search } from "lucide-react"
import PillButton from "@/components/pill-button"
import RainbowBorder from "@/components/rainbow-border"

export default function RepurposeBotSection() {
  return (
    <section id="introducing" className="relative snap-start min-h-[90vh] flex items-center py-8 md:py-12">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:gap-10 px-4 md:grid-cols-2">
        {/* Copy */}
        <div>
          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            {"Introducing"}
          </p>
          <h2 className="text-pretty text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            <span className="text-white">Meet Fanslink </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #ffffff 0%, #9aa7ff 30%, #7b61ff 55%, #ffd089 100%)",
              }}
            >
              {"Repurpose Platform."}
            </span>
          </h2>
          <p className="mt-4 max-w-prose text-lg text-zinc-400">
            Upload high performing content, click generate, and have hundreds of versions ready to upload to social
            media without detection
          </p>

          {/* Feature bullets */}
          <ul className="mt-6 grid grid-cols-1 gap-4 text-sm text-zinc-200 sm:grid-cols-2">
            <Feature icon={<RefreshCcw className="h-4 w-4" />} title="Repurpose your content" />
            <Feature icon={<ScanFace className="h-4 w-4" />} title="AI face swap" />
            <Feature icon={<FileCog className="h-4 w-4" />} title="File Reducer & Converter" />
            <Feature icon={<Search className="h-4 w-4" />} title="Similarity Detection" />
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-row gap-3 items-center">
            <RainbowBorder>
              <PillButton size="lg" className="border-transparent flex-1 sm:flex-initial justify-center">
                Launch the Bot
              </PillButton>
            </RainbowBorder>
            <button className="rounded-full border border-white/15 px-4 py-3 text-sm sm:text-base text-white/90 hover:bg-white/10 flex-1 sm:flex-initial whitespace-nowrap">
              See how it works
            </button>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur min-h-[320px] flex flex-col">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-3 w-3 rounded-full bg-red-400/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-300/70" />
              <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
            </div>
            <div className="flex-1">
              <AnimatedConsole />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <li className="flex items-center gap-2">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10">
        {icon}
      </span>
      <span>{title}</span>
    </li>
  )
}

function Line({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`py-1 ${className}`} style={style}>
      {children}
    </div>
  )
}

function AnimatedConsole() {
  const steps = [
    "> Uploading: session-01.mp4",
    "• Detecting chapters… ✓",
    "• Extracting highlights… 12 clips",
    "• Applying captions & style… ✓",
    "• Resizing: 9:16 • 1:1 • 16:9… ✓",
    "• Scheduling to TikTok, IG, YT Shorts… ✓",
  ]

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4 font-medium tracking-tight subpixel-antialiased text-sm leading-6 text-zinc-100 [font-variant-numeric:tabular-nums]">
      {steps.map((text, index) => (
        <Line key={index}>
          {text}
        </Line>
      ))}
      <Line className="text-emerald-300">
        {"Done in 3m 12s. Ready to publish."}
      </Line>
    </div>
  )
}
