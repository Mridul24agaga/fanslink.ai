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
            <span className="text-white">Meet the Fanslink </span>
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
                Launch Fanslink
              </PillButton>
            </RainbowBorder>
            <button className="rounded-full border border-white/15 px-4 py-3 text-sm sm:text-base text-white/90 hover:bg-white/10 flex-1 sm:flex-initial whitespace-nowrap">
              See how it works
            </button>
          </div>

          {/* Download Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="flex items-center gap-3 px-4 py-3 bg-black hover:bg-gray-900 border border-gray-600 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-white/80">Download for</div>
                <div className="text-sm font-semibold text-white">Windows</div>
              </div>
            </button>

            <button className="flex items-center gap-3 px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-white/80">Download for</div>
                <div className="text-sm font-semibold text-white">Mac OS</div>
              </div>
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
