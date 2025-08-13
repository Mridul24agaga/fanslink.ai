"use client"
import React, { useEffect, useRef, useState } from "react"
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
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <RainbowBorder>
              <PillButton size="lg" className="border-transparent">
                Launch the Bot
              </PillButton>
            </RainbowBorder>
            <button className="rounded-full border border-white/15 px-6 py-3 text-base text-white/90 hover:bg-white/10">
              See how it works
            </button>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-3 w-3 rounded-full bg-red-400/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-300/70" />
              <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
            </div>
            <AnimatedConsole />
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

  const rootRef = useRef<HTMLDivElement | null>(null)
  const [hasBegun, setHasBegun] = useState<boolean>(false)
  const [visibleCount, setVisibleCount] = useState<number>(0)
  const [cycle, setCycle] = useState<number>(0)

  // Start the sequence only when the console scrolls into view
  useEffect(() => {
    if (hasBegun) return
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback: start immediately
      setHasBegun(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasBegun(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    )
    const node = rootRef.current
    if (node) observer.observe(node)
    return () => {
      if (node) observer.unobserve(node)
      observer.disconnect()
    }
  }, [hasBegun])

  // Kick off the first line when we begin
  useEffect(() => {
    if (hasBegun && visibleCount === 0) setVisibleCount(1)
  }, [hasBegun, visibleCount])

  // Advance lines while active and visible
  useEffect(() => {
    if (!hasBegun) return
    let isMounted = true
    let timer: ReturnType<typeof setTimeout>

    const advance = () => {
      if (!isMounted) return
      if (visibleCount < steps.length + 1) {
        timer = setTimeout(() => setVisibleCount((c) => c + 1), 450)
      } else {
        timer = setTimeout(() => {
          setVisibleCount(1)
          setCycle((n) => n + 1)
        }, 1600)
      }
    }

    advance()
    return () => {
      isMounted = false
      if (timer) clearTimeout(timer)
    }
  }, [hasBegun, visibleCount, steps.length])

  const showDone = visibleCount > steps.length

  return (
    <div
      ref={rootRef}
      className="rounded-xl border border-white/10 bg-black/40 p-4 font-medium tracking-tight subpixel-antialiased text-sm leading-6 text-zinc-100 [font-variant-numeric:tabular-nums]"
    >
      {steps.slice(0, Math.min(visibleCount, steps.length)).map((text, index) => (
        <Line key={`${cycle}-${index}`} className="fl-line-appear" style={{ animationDelay: `${index * 100}ms` }}>
          {index === 0 ? (
            <>
              {text}
              <span className="fl-progress-dots" aria-hidden="true" />
            </>
          ) : (
            text
          )}
        </Line>
      ))}
      {showDone && (
        <Line className="fl-line-appear fl-success-glow text-emerald-300" style={{ animationDelay: `${steps.length * 100 + 200}ms` }}>
          {"Done in 3m 12s. Ready to publish."}
        </Line>
      )}
    </div>
  )
}
