import React from "react"
import { Linkedin, Instagram, Twitter } from "lucide-react"

export default function TeamSection() {
  return (
    <section id="team" className="relative snap-start py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:mb-10 md:mb-12 md:flex-row md:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">[ our team ]</div>
              <h2 className="mt-2 text-pretty text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                <span className="text-white">Meet the </span>
                <span className="heading-accent">{"Founders"}</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm text-zinc-400">
              Our AI‑driven automation removes busywork, streamlines your operation, and helps your business grow—without
              extra effort.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <ProfileCard
              name="Tom Morley"
              img="https://www.morleyconsultants.com/asdfghjk%202.png"
            />
            <ProfileCard
              name="Finley Skynner"
              img="https://media.licdn.com/dms/image/v2/D4E03AQG0AmzfcwMBtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729349335484?e=1758153600&v=beta&t=OtdOygt5QyQaNgOseQS8W8mXMn0oKseeMFyuZg5he24"
            />
            <ProfileCard
              name="Dominik Scheucher"
              img="https://ca.slack-edge.com/T0862A2SRPD-U0882H9UT38-345348665c74-512"
            />

          </div>
        </div>
      </div>
      
    </section>
  )
}

function ProfileCard({ name, img }: { name: string; img: string }) {
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


