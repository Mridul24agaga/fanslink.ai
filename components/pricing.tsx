"use client"

import RainbowBorder from "@/components/rainbow-border"
import PillButton from "@/components/pill-button"
import { Check } from "lucide-react"
import { useState } from "react"

const basicIcon = "/images/fanslink-logo.png"
const growthIcon = "https://framerusercontent.com/images/zyzNVSLRKdxilXqP9QMmuTY2E.png?scale-down-to=512"

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative snap-start py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 id="pricing-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#ffffff 0%,#9aa7ff 40%,#7b61ff 100%)" }}
            >
              Pricing
            </span>
          </h2>

          {/* Billing toggle */}
          <div className="relative inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 shadow-[0_12px_40px_-16px_rgba(123,97,255,0.45)]">
            <button
              type="button"
              aria-pressed={billing === "monthly"}
              onClick={() => setBilling("monthly")}
              className={[
                "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition",
                billing === "monthly"
                  ? "text-white"
                  : "text-zinc-300 hover:text-white",
              ].join(" ")}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={billing === "yearly"}
              onClick={() => setBilling("yearly")}
              className={[
                "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition",
                billing === "yearly" ? "text-white" : "text-zinc-300 hover:text-white",
              ].join(" ")}
            >
              <span className="mr-2">Yearly</span>
              <span className="text-amber-300">-15%</span>
            </button>
            {/* sliding highlight */}
            <span
              aria-hidden
              className={[
                "absolute inset-y-1 left-1 w-[94px] rounded-full",
                "bg-[linear-gradient(90deg,#5a4df3_0%,#7b61ff 60%,#8a6bff_100%)]",
                "shadow-[0_10px_28px_-12px_rgba(123,97,255,0.8)] transition-transform",
                billing === "monthly" ? "translate-x-0" : "translate-x-[96px]",
              ].join(" ")}
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PriceCard
            tone="subtle"
            planLabel="Repurpose Bot"
            monthlyPrice={149}
            yearlyPrice={1200}
            billing={billing}
            subtitleTop="Perfect for"
            subtitleBottom="Small businesses"
            ctaLabel="Choose Repurpose Bot"
            iconUrl={basicIcon}
            features={[
              "Perfect for all agencies",
              "Fast content repurposing",
              "Face swap videos and images",
              "Content similarity detection",
              "Highly rated support team",
              "Convert and compress files",
            ]}
          />

          <PriceCard
            tone="highlight"
            planLabel="FansLink Suite"
            monthlyPrice={299}
            yearlyPrice={2399}
            billing={billing}
            subtitleTop="Ultimate solution for"
            subtitleBottom="Content creators & teams"
            ctaLabel="Get Notified"
            iconUrl={growthIcon}
            comingSoon
            features={[
              "Everything in Repurpose Bot",
              "7+ additional AI tools",
              "Team collaboration features",
              "Advanced analytics dashboard",
              "Custom AI model training",
              "White-label solutions",
              "Dedicated account manager",
              "24/7 priority support"
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function PriceCard({
  tone,
  planLabel,
  monthlyPrice,
  yearlyPrice,
  billing,
  subtitleTop,
  subtitleBottom,
  ctaLabel,
  iconUrl,
  features,
  comingSoon,
}: {
  tone: "subtle" | "highlight"
  planLabel: string
  monthlyPrice: number
  yearlyPrice?: number
  billing?: "monthly" | "yearly"
  subtitleTop: string
  subtitleBottom: string
  ctaLabel: string
  iconUrl: string
  features: string[]
  comingSoon?: boolean
}) {
  const isHighlight = tone === "highlight"
  const isYearly = billing === "yearly"
  const displayPrice = isYearly && yearlyPrice ? yearlyPrice : monthlyPrice
  const priceSuffix = isYearly ? "/year" : "/month"

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border p-6 md:p-10",
        "border-white/10 bg-white/[0.03]",
        isHighlight ? "shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_40px_80px_-20px_rgba(123,97,255,0.35)]" : "",
      ].join(" ")}
    >
      {/* top-right decorative icon */}
      <img
        src={iconUrl}
        alt="decorative"
        className="pointer-events-none absolute right-4 top-4 h-10 w-auto object-contain opacity-90 sm:h-12 z-10"
        loading="lazy"
      />

      {/* plan label */}
      <div className="text-sm font-semibold text-zinc-300">{planLabel}</div>

      {/* price or coming soon */}
      {comingSoon ? (
        <div className="mt-3 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-300">Coming Soon</span>
            </div>
          </div>
          <div className="text-2xl font-bold text-zinc-200 mb-1">FansLink Suite</div>
          <div className="text-sm text-zinc-400">The complete automation platform</div>
        </div>
      ) : (
        <div className="mt-3 flex items-end gap-2">
          <div className="text-4xl font-extrabold sm:text-5xl md:text-6xl">${displayPrice}</div>
          <div className="mb-2 text-xs uppercase tracking-wide text-zinc-400">{priceSuffix}</div>
        </div>
      )}

      {/* subtitle */}
      <p className="mt-4 text-sm text-zinc-400">{subtitleTop}</p>
      <p className="text-base font-medium text-zinc-200">{subtitleBottom}</p>

      {/* CTA */}
      <div className="mt-6">
        {isHighlight ? (
          <PillButton
            aria-label={`Select ${planLabel} plan`}
            className={[
              "w-full justify-start border border-white/20 bg-[linear-gradient(90deg,#6d5dfc_0%,#7b61ff 60%,#7b61ff 100%)] ring-1 ring-white/30 shadow-[0_20px_48px_-16px_rgba(123,97,255,0.55)]",
              comingSoon ? "opacity-60 pointer-events-none" : "hover:brightness-110",
            ].join(" ")}
            size="lg"
            disabled={!!comingSoon}
          >
            {ctaLabel}
          </PillButton>
        ) : (
          <PillButton
            aria-label={`Select ${planLabel} plan`}
            className={["w-full justify-start bg-white/10 border-white/15 text-white/90", comingSoon ? "opacity-60 pointer-events-none" : "hover:bg-white/15"].join(" ")}
            size="lg"
            disabled={!!comingSoon}
          >
            {ctaLabel}
          </PillButton>
        )}
      </div>

      {/* features */}
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-zinc-300">
            <span className="mt-0.5 inline-flex items-center justify-center rounded-full bg-white/10 p-1 ring-1 ring-white/15">
              <Check className="h-4 w-4 text-indigo-300" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* subtle bottom glow for highlight */}
      {isHighlight && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(60%_50%_at_50%_120%,rgba(123,97,255,0.35),transparent)]" />
      )}
    </div>
  )
}


