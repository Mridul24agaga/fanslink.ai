"use client"

import type React from "react"
import { Scissors, Sparkles, Gauge, UploadCloud, PlayCircle, Layers } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function BentoShowcaseSection() {
  return (
    <section aria-labelledby="showcase" className="relative snap-start py-10 md:py-14 overflow-hidden">
      {/* Full-section spotlight background */}
      <img
        src="https://framerusercontent.com/images/0J5Sh8pzQ8QLRcicRCJ91lYaInI.png?scale-down-to=1024"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 -top-32 -z-10 w-full h-[520px] sm:h-[600px] md:h-[680px] object-cover object-left-top [mask-image:linear-gradient(to_bottom,white_0%,white_70%,transparent_100%)]"
        style={{
          filter: "brightness(2.5) contrast(1.4) saturate(1.5)",
          opacity: 1
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
                    src="/tikfusion-clips-timeline.png"
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
              <div className="relative h-16 w-28 overflow-hidden rounded-md border border-white/10">
                <Image
                  src="/short-video-preview.png"
                  alt="Clip preview"
                  width={200}
                  height={120}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
                <PlatformDot label="IG" />
                <PlatformDot label="YT" />
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

function PlatformDot({ label }: { label: string }) {
  return (
    <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 px-2 text-xs font-semibold">
      {label}
    </span>
  )
}
