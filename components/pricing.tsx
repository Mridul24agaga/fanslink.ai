"use client"

import RainbowBorder from "@/components/rainbow-border"
import PillButton from "@/components/pill-button"
import { Check } from "lucide-react"
import { useState } from "react"

const basicIcon = "https://framerusercontent.com/images/iryXuFlc5kEuEPs9HnVhfWAkwWk.png?scale-down-to=512"
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
                "bg-[linear-gradient(90deg,#5a4df3_0%,#7b61ff_60%,#8a6bff_100%)]",
                "shadow-[0_10px_28px_-12px_rgba(123,97,255,0.8)] transition-transform",
                billing === "monthly" ? "translate-x-0" : "translate-x-[96px]",
              ].join(" ")}
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <PriceCard
            tone="subtle"
            planLabel="Basic"
            monthlyPrice={99}
            subtitleTop="Perfect for"
            subtitleBottom="Small businesses"
            ctaLabel="Choose Basic"
            iconUrl={basicIcon}
            features={[
              "AI chatbot for customer inquiries",
              "Basic workflow automation (email, CRM, data entry)",
              "AI‑powered analytics dashboard",
              "24/7 support via email",
            ]}
          />

          <PriceCard
            tone="highlight"
            planLabel="Growth"
            monthlyPrice={299}
            subtitleTop="Perfect for"
            subtitleBottom="Growing teams"
            ctaLabel="Choose Growth"
            iconUrl={growthIcon}
            features={[
              "Everything in Starter Plan",
              "Advanced AI chatbots with custom responses",
              "AI‑driven lead qualification & follow‑up",
              "Automated reporting & insights",
              "Priority customer support",
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
  subtitleTop,
  subtitleBottom,
  ctaLabel,
  iconUrl,
  features,
}: {
  tone: "subtle" | "highlight"
  planLabel: string
  monthlyPrice: number
  subtitleTop: string
  subtitleBottom: string
  ctaLabel: string
  iconUrl: string
  features: string[]
}) {
  const isHighlight = tone === "highlight"

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
        className="pointer-events-none absolute -right-3 -top-3 w-24 opacity-60 sm:w-28"
        loading="lazy"
      />

      {/* plan label */}
      <div className="text-sm font-semibold text-zinc-300">{planLabel}</div>

      {/* price */}
      <div className="mt-3 flex items-end gap-2">
        <div className="text-4xl font-extrabold sm:text-5xl md:text-6xl">${monthlyPrice}</div>
        <div className="mb-2 text-xs uppercase tracking-wide text-zinc-400">/month</div>
      </div>

      {/* subtitle */}
      <p className="mt-4 text-sm text-zinc-400">{subtitleTop}</p>
      <p className="text-base font-medium text-zinc-200">{subtitleBottom}</p>

      {/* CTA */}
      <div className="mt-6">
        {isHighlight ? (
          <PillButton
            aria-label={`Select ${planLabel} plan`}
            className="w-full justify-start border border-white/20 bg-[linear-gradient(90deg,#6d5dfc_0%,#7b61ff_60%,#7b61ff_100%)] ring-1 ring-white/30 shadow-[0_20px_48px_-16px_rgba(123,97,255,0.55)] hover:brightness-110"
            size="lg"
          >
            {ctaLabel}
          </PillButton>
        ) : (
          <PillButton
            aria-label={`Select ${planLabel} plan`}
            className="w-full justify-start bg-white/10 hover:bg-white/15 border-white/15 text-white/90"
            size="lg"
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


