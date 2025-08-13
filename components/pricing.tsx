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
          <div className="relative inline-flex rounded-full border border-white/25 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={[
                "relative z-10 rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 min-w-[80px]",
                billing === "monthly" 
                  ? "text-black bg-white shadow-sm" 
                  : "text-zinc-400 hover:text-zinc-200",
              ].join(" ")}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={[
                "relative z-10 rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 min-w-[80px]",
                billing === "yearly" 
                  ? "text-black bg-white shadow-sm" 
                  : "text-zinc-400 hover:text-zinc-200",
              ].join(" ")}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PriceCard
            tone="subtle"
            planLabel="Repurpose Bot"
            monthlyPrice={149}
            yearlyPrice={1200}
            yearlyMonthlyPrice={99}
            billing={billing}
            subtitleTop="Perfect for"
            subtitleBottom="All agencies and creators"
            ctaLabel="Choose Fanslink Repurpose"
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
            planLabel="Fanslink Suite"
            monthlyPrice={299}
            yearlyPrice={2399}
            billing={billing}
            subtitleTop="Perfect for"
            subtitleBottom="Agencies"
            ctaLabel="Coming Soon"
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
  yearlyMonthlyPrice,
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
  yearlyMonthlyPrice?: number
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
  const displayPrice = isYearly
    ? (typeof yearlyMonthlyPrice === "number"
        ? yearlyMonthlyPrice
        : (yearlyPrice ?? monthlyPrice))
    : monthlyPrice
  const priceSuffix = isYearly
    ? (typeof yearlyMonthlyPrice === "number" ? "/month" : "/year")
    : "/month"

  return (
    <div className="relative overflow-hidden rounded-3xl p-[3px]" style={{
      background: tone === "subtle" 
        ? "linear-gradient(90deg, #ffffff 0%, #9aa7ff 30%, #7b61ff 55%, #ffd089 100%)"
        : "transparent",
      backgroundSize: tone === "subtle" ? "200% 200%" : "100% 100%",
      animation: tone === "subtle" ? "gradientShift 8s linear infinite" : "none"
    }}>
      <div
        className={[
          "relative overflow-hidden rounded-[calc(1.5rem-1px)] p-6 md:p-10 h-full",
          tone === "subtle" ? "bg-[#080B20]" : "bg-white/[0.03]",
          isHighlight ? "border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_40px_80px_-20px_rgba(123,97,255,0.35)]" : "",
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
        <div className="mt-3 flex items-end gap-2">
          <div className="text-4xl font-extrabold sm:text-5xl md:text-6xl">$$</div>
          <div className="mb-2 text-xs uppercase tracking-wide text-zinc-400">Price TBD</div>
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
      <style jsx>{`
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
  )
}


