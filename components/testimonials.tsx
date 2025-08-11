"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials" className="relative snap-start py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <Carousel opts={{ align: "start" }} className="relative">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">[ testimonials ]</div>
              <h2 id="testimonials" className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                What Our Clients <span className="text-white">Say</span>
              </h2>
            </div>

            {/* Arrow controls aligned to heading right */}
            <div className="relative h-8 w-[88px]">
              <CarouselPrevious className="top-0 right-12 left-auto -translate-y-0 size-8 border-white/10 bg-white/5 hover:bg-white/10" />
              <CarouselNext className="top-0 right-0 -translate-y-0 size-8 border-white/10 bg-white/5 hover:bg-white/10" />
            </div>
          </div>

          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx}>
                <blockquote className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
                  <p className="text-balance text-2xl font-semibold leading-relaxed tracking-tight sm:text-3xl md:text-4xl">
                    {t.quoteOpen}
                    <span className="text-white">{t.highlight1}</span>
                    {t.quoteMid}
                    <span className="text-white">{t.highlight2}</span>
                    {t.quoteClose}
                  </p>
                  <footer className="mt-6 flex items-center gap-3 text-sm text-zinc-300">
                    <Avatar className="size-8 bg-black/30 ring-1 ring-white/10">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white/90">{t.name}</div>
                      <div className="text-xs text-zinc-400">{t.title}</div>
                    </div>
                  </footer>
                </blockquote>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quoteOpen: '"Our AI chatbot ',
    highlight1: "reduced response times from 10 minutes to just 2 seconds.",
    quoteMid: " Customer satisfaction skyrocketed, and we ",
    highlight2: "saved over 400 hours per month",
    quoteClose: " on support.",
    name: "Mila S.",
    title: "COO, Finance Firm",
    avatar: "/placeholder-user.jpg",
    initials: "MS",
  },
  {
    quoteOpen: '"We integrated AI for lead qualification — our team now only speaks with ready buyers,',
    highlight1: " doubling conversion rates",
    quoteMid: " while cutting meeting no‑shows by 35%.",
    highlight2: "",
    quoteClose: "",
    name: "Sarah M.",
    title: "Marketing Manager, Mandala",
    avatar: "/placeholder-user.jpg",
    initials: "SM",
  },
  {
    quoteOpen: '"From one long video to platform‑ready clips in minutes. ',
    highlight1: "Our content output tripled",
    quoteMid: " without adding headcount — templates keep everything on brand.",
    highlight2: "",
    quoteClose: "",
    name: "Tom H.",
    title: "Head of Content, Studio X",
    avatar: "/placeholder-user.jpg",
    initials: "TH",
  },
]


