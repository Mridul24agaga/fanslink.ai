import type React from "react"
import { ShieldCheck, Zap, Gauge, Layers, Headphones, UploadCloud, Palette } from "lucide-react"
import RainbowBorder from "@/components/rainbow-border"
import PillButton from "@/components/pill-button"

export default function WhyChooseUsSection() {
  return (
    <section
      aria-labelledby="why-choose-us"
      className="relative snap-start min-h-[85vh] flex items-center py-8 md:py-12"
    >

      <div className="container mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="why-choose-us" className="text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="text-white">Why choose </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#ffffff,#9aa7ff,#7b61ff,#ffd089)" }}
            >
              {"Fanslink"}
            </span>
          </h2>
          <p className="mt-3 text-zinc-400">
            Built for creators and teams who need speed, brand safety, and distribution at scale.
          </p>

          {/* value badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <Badge>No watermark</Badge>
            <Badge>Brand-safe templates</Badge>
            <Badge>One upload → all formats</Badge>
            <Badge>Team-ready</Badge>
          </div>
        </header>

        {/* Feature grid — larger, clearer reasons */}
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ReasonCard
            icon={<Zap className="h-5 w-5" />}
            title="3× faster workflows"
            desc="From upload to scheduled posts in minutes thanks to automatic detection, cutting and queuing."
          />
          <ReasonCard
            icon={<Palette className="h-5 w-5" />}
            title="Always on‑brand"
            desc="Fonts, captions, safe areas and lower‑thirds applied consistently every time."
          />
          <ReasonCard
            icon={<Layers className="h-5 w-5" />}
            title="All formats in one pass"
            desc="Auto‑resize to 9:16, 1:1 and 16:9 — no manual re‑edits or duplicate timelines."
          />
          <ReasonCard
            icon={<Gauge className="h-5 w-5" />}
            title="Retention‑first cuts"
            desc="Finds hooks and highlight peaks automatically for shorts that actually retain."
          />
          <ReasonCard
            icon={<UploadCloud className="h-5 w-5" />}
            title="1‑click publish everywhere"
            desc="Queue content to TikTok, IG Reels, Shorts and more in a single flow."
          />
          <ReasonCard
            icon={<Headphones className="h-5 w-5" />}
            title="Human support"
            desc="Real creators on support — fast help and setup tips when you need it."
          />
        </div>

        {/* Trust row */}
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard value="5 sec" label="Average processing time" />
          <StatCard value="99.9%" label="Successful exports" />
          <StatCard value="9:16 · 1:1 · 16:9" label="Outputs per run" />
        </div>

        {/* Guarantee + CTA */}
        <div className="mx-auto mt-8 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur md:p-6">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-white/90" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">Our guarantee</h3>
                  <p className="text-sm text-zinc-300">
                    If Fanslink doesn’t cut your repurposing time by half within 7 days, we’ll help you set it up — free.
                  </p>
                </div>
              </div>
              <RainbowBorder>
                <PillButton size="lg" className="border-transparent">
                  Get started
                </PillButton>
              </RainbowBorder>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,rgba(123,97,255,0.25),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ReasonCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all hover:translate-y-[-2px] hover:bg-white/[0.06]">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/90">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,rgba(123,97,255,0.25),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="mt-1 text-sm text-zinc-300">{label}</div>
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,rgba(255,208,137,0.22),transparent)]" />
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  )
}
