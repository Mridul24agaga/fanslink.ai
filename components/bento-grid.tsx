"use client"

import type React from "react"
import { Scissors, Sparkles, Gauge, UploadCloud, PlayCircle, Layers, Bot, Zap, Settings } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Spotlight from "@/components/spotlight"

// Platform icons as SVG components
const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
)

export default function BentoShowcaseSection() {
  return (
    <section aria-labelledby="showcase" className="relative snap-start py-10 md:py-14 overflow-hidden" style={{ backgroundColor: "#000319" }}>
      {/* Spotlight background effect */}
      {/* Spotlight background */}
      <img
        src="https://framerusercontent.com/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI.png?scale-down-to=1024"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-[-140px]"
        style={{
          opacity: 0.9,
          mixBlendMode: "screen"
        }}
      />
      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-8 max-w-3xl md:mb-10">
          <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">[ features ]</div>
          <h2 id="showcase" className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            What you get
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #ffffff 0%, #9aa7ff 30%, #7b61ff 55%, #ffd089 100%)",
              }}
            >
              {" With Fanslink"}
            </span>
          </h2>
          
        </header>

        {/* Bento Grid */}
        <div
          className={cn(
            "grid gap-3 md:gap-4",
            // 6 columns on md+; cards define their spans
            "md:grid-cols-6",
          )}
          // make rows auto size nicely
          style={{ gridAutoRows: "minmax(120px, auto)" }}
        >
          {/* Big primary card */}
          <BentoCard className="md:col-span-4 md:row-span-2">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2">
                <Badge icon={<Scissors className="h-4 w-4" />}>Metadata Repurpose</Badge>
                <Badge icon={<Sparkles className="h-4 w-4" />}>Custom Export Settings</Badge>
              </div>
              <div className="mt-3 grid grid-cols-1 items-center gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-sm text-zinc-200">
                  <ConsoleLine>{"> Upload: product-launch.mp4"}</ConsoleLine>
                  <ConsoleLine>{"• Detecting chapters… ✓"}</ConsoleLine>
                  <ConsoleLine>{"• Finding highlight peaks… 14 clips"}</ConsoleLine>
                  <ConsoleLine>{"• Applying brand captions… ✓"}</ConsoleLine>
                  <ConsoleLine>{"• Resizing for 9:16 / 1:1 / 16:9… ✓"}</ConsoleLine>
                </div>
                <div className="relative overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src="/13.png"
                    alt="Clips timeline preview"
                    width={640}
                    height={420}
                    className="h-full w-full object-cover"
                    priority
                  />
                  {/* soft overlay label */}
                  <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/90">
                    Highlights
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Tall stats card */}
          <BentoCard className="md:col-span-2 md:row-span-2" variant="gradient">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2">
                <Badge icon={<Gauge className="h-4 w-4" />}>Speed</Badge>
              </div>
              <div className="mt-2">
                <div className="text-5xl font-extrabold leading-none">5 sec</div>
                <p className="mt-2 text-sm text-zinc-400">Average processing time</p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <MiniStat label="Accuracy" value="99.9%" />
                <MiniStat label="Videos/min" value="12+" />
                <MiniStat label="Time saved" value="95%" />
              </div>
            </div>
          </BentoCard>

          {/* Formats card */}
          <BentoCard className="md:col-span-2 md:row-span-1">
            <div className="flex h-full items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Badge icon={<Layers className="h-4 w-4" />}>Formats</Badge>
                </div>
                <p className="mt-2 text-sm text-zinc-300">Auto‑resize to every platform</p>
              </div>
              <div className="flex items-center gap-2">
                <FormatPill>9:16</FormatPill>
                <FormatPill>1:1</FormatPill>
                <FormatPill>16:9</FormatPill>
              </div>
            </div>
          </BentoCard>

          {/* Automation card */}
          <BentoCard className="md:col-span-2 md:row-span-1">
            <div className="flex h-full items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Badge icon={<PlayCircle className="h-4 w-4" />}>Automation</Badge>
                </div>
                <p className="mt-2 text-sm text-zinc-300">Generate 100+ repurposed reels in one click</p>
              </div>
              <div className="flex h-16 w-28 items-center justify-center rounded-md border border-white/10 bg-white/5">
                <div className="flex items-center gap-2 text-white/70">
                  <Bot className="h-5 w-5" />
                  <span className="text-xs font-medium">Auto</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Presets card */}
          <BentoCard className="md:col-span-2 md:row-span-1">
            <div className="flex h-full items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Badge icon={<UploadCloud className="h-4 w-4" />}>Presets</Badge>
                </div>
                <p className="mt-2 text-sm text-zinc-300">Bespoke presets for Instagram, Shorts and more</p>
              </div>
              <div className="flex items-center gap-2">
                <PlatformDot icon={<InstagramIcon />} />
                <PlatformDot icon={<YouTubeIcon />} />
                <PlatformDot icon={<TikTokIcon />} />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}

function BentoCard({ className, children, variant }: { className?: string; children: React.ReactNode; variant?: "gradient" }) {
  if (variant === "gradient") {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl p-[3px]", className)} style={{
        background: "linear-gradient(90deg, #ffffff 0%, #9aa7ff 30%, #7b61ff 55%, #ffd089 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 8s linear infinite"
      }}>
        <div
          className={cn(
            "group relative overflow-hidden rounded-[calc(1rem-1px)] bg-[#080B20] p-4 h-full",
            "backdrop-blur-xl backdrop-saturate-150",
            "transition-colors hover:bg-[#0a0e26]",
          )}
        >
          {/* glass sheen overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] bg-[linear-gradient(125deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_40%,transparent_65%)] opacity-80 [mask-image:linear-gradient(to_bottom,white,transparent_70%)]"
            aria-hidden
          />
          {/* subtle top/bottom edge highlights */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/35 via-white/15 to-transparent opacity-90" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/30 to-black/40" />
          {/* subtle corner glows */}
          <div className="pointer-events-none absolute -right-10 -top-10 z-0 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,rgba(123,97,255,0.18),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {/* fine noise for realistic glass */}
          <div className="glass-noise pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-20 mix-blend-overlay" />
          <div className="relative z-10">{children}</div>
          <style jsx>{`
            .glass-noise {
              background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.18"/></svg>');
              background-size: 180px 180px;
            }
            @keyframes gradientShift {
              0% {
                background-position: 0% 50%;
              }
              100% {
                background-position: 200% 50%;
              }
            }
          `}</style>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/20 bg-white/[0.06] p-4",
        "backdrop-blur-xl backdrop-saturate-150",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_15px_40px_-20px_rgba(0,0,0,0.45)]",
        "transition-colors hover:bg-white/[0.08]",
        className,
      )}
    >
      {/* glass sheen overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] bg-[linear-gradient(125deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_40%,transparent_65%)] opacity-80 [mask-image:linear-gradient(to_bottom,white,transparent_70%)]"
        aria-hidden
      />
      {/* subtle top/bottom edge highlights */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/35 via-white/15 to-transparent opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/30 to-black/40" />
      {/* subtle corner glows */}
      <div className="pointer-events-none absolute -right-10 -top-10 z-0 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,rgba(123,97,255,0.18),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {/* fine noise for realistic glass */}
      <div className="glass-noise pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-20 mix-blend-overlay" />
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        .glass-noise {
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.18"/></svg>');
          background-size: 180px 180px;
        }
      `}</style>
    </div>
  )
}

function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90">
      <span className="text-white/90">{icon}</span>
      {children}
    </span>
  )
}

function ConsoleLine({ children }: { children: React.ReactNode }) {
  return <div className="py-0.5">{children}</div>
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/30 p-3">
      <div className="text-lg font-semibold">{value}</div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wide text-zinc-400">{label}</div>
    </div>
  )
}

function FormatPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/90">
      {children}
    </span>
  )
}

function PlatformDot({ icon }: { icon: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90">
      {icon}
    </span>
  )
}
