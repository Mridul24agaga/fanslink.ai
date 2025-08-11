import React from "react"
import { Linkedin, Instagram, Twitter } from "lucide-react"

export default function TeamSection() {
  return (
    <section className="relative snap-start py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:mb-10 md:mb-12 md:flex-row md:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">[ our team ]</div>
              <h2 className="mt-2 text-pretty text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                <span className="text-white">Meet the </span>
                <span className="heading-accent">{"Experts"}</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm text-zinc-400">
              Our AI‑driven automation removes busywork, streamlines your operation, and helps your business grow—without
              extra effort.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ProfileCard
              role="Founder"
              name="Alex Kumongso"
              img="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200&q=80&auto=format&fit=crop&crop=faces"
            />
            <ProfileCard
              role="Automation Architect"
              name="Lisa Ningrum"
              img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop&crop=faces"
            />
            <ProfileCard
              role="Lead AI Engineer"
              name="Ryan Wilujeng"
              img="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=80&auto=format&fit=crop&crop=faces"
            />
            <ProfileCard
              role="Customer Success Manager"
              name="Sarah Kumala"
              img="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80&auto=format&fit=crop&crop=faces"
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}

function ProfileCard({ role, name, img }: { role: string; name: string; img: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <img
        src={img}
        alt={name}
        className="h-[420px] w-full object-cover object-center transition-all duration-700 group-hover:scale-[1.04] group-hover:blur-[2px]"
        loading="lazy"
      />
      {/* vignette & halo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(70%_60%_at_50%_90%,rgba(255,208,137,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_90%,rgba(255,208,137,0.12),transparent_60%)]" />
      {/* Text overlays */}
      <div className="absolute left-0 top-0 p-5">
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
          {role}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="text-lg font-semibold tracking-tight text-white drop-shadow-sm">{name}</h3>
        <div className="mt-3 flex items-center gap-2 opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 translate-y-1">
          <a
            href="#"
            aria-label="LinkedIn"
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 backdrop-blur hover:bg-white/15"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 backdrop-blur hover:bg-white/15"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="size-4" />
          </a>
          <a
            href="#"
            aria-label="X"
            className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 backdrop-blur hover:bg-white/15"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="size-4" />
          </a>
        </div>
      </div>
    </div>
  )
}


