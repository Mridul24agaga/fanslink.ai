"use client"

import PillButton from "@/components/pill-button"
import RainbowBorder from "@/components/rainbow-border"
import { ArrowRight, Star, Users, User } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Hero() {
  return (
    <section className="relative snap-start min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          {/* Badge */}
          <span className="fl-hero-appear inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur" style={{ animationDelay: "80ms" }}>
            {"New • Improved workflow and brand‑safe exports"}
          </span>

          {/* Headline */}
          <h1 className="fl-hero-appear mt-6 text-center text-balance text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl" style={{ animationDelay: "160ms" }}>
            <span className="text-white">Your </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#ffffff 0%,#9aa7ff 30%,#7b61ff 55%,#ffd089 100%)" }}
            >
              {"Agency's All-in-One"}
            </span>
            <br className="hidden sm:block" />
            <span className="text-white">Automation </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#ffffff 0%,#9aa7ff 30%,#7b61ff 55%,#ffd089 100%)" }}
            >
              {"Suite"}
            </span>
          </h1>

          {/* Subcopy */}
          <p className="fl-hero-appear mx-auto mt-4 max-w-3xl text-pretty text-xl text-zinc-400" style={{ animationDelay: "240ms" }}>
            Repurpose once, distribute everywhere. Create a system that grows revenue faster by publishing to all
            platforms with one click.
          </p>

          {/* CTAs */}
          <div className="fl-hero-appear mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: "320ms" }}>
            <RainbowBorder>
              <PillButton size="lg" className="border-transparent group whitespace-nowrap">
                <span className="inline-flex items-center">
                  Get Fanslink Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </PillButton>
            </RainbowBorder>

            <a href="#introducing" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-base text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Learn more
            </a>
          </div>

          {/* Trusted by row */}
          <div className="fl-hero-appear mt-7 flex flex-col items-center justify-center gap-3 text-sm text-zinc-400 sm:flex-row" style={{ animationDelay: "400ms" }}>
            {/* Avatar stack */}
            <div className="flex -space-x-2 mb-2 sm:mb-0">
              <Avatar className="h-8 w-8 border-2 border-white/20 bg-gradient-to-br from-gray-800 to-gray-400">
                <AvatarFallback className="bg-gradient-to-br from-gray-800 to-gray-400 text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-white/20 bg-gradient-to-br from-gray-700 to-gray-300">
                <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-300 text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-white/20 bg-gradient-to-br from-gray-600 to-gray-300">
                <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-300 text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8 border-2 border-white/20 bg-gradient-to-br from-gray-500 to-gray-200">
                <AvatarFallback className="bg-gradient-to-br from-gray-500 to-gray-200 text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/90">Trusted by top agencies and creators</span>
              <span className="hidden h-4 w-px bg-white/10 sm:inline-block" />
              <span className="inline-flex items-center gap-1 text-zinc-300">
                <Star className="h-4 w-4 text-amber-300" fill="currentColor" />
                <Star className="h-4 w-4 text-amber-300" fill="currentColor" />
                <Star className="h-4 w-4 text-amber-300" fill="currentColor" />
                <Star className="h-4 w-4 text-amber-300" fill="currentColor" />
                <Star className="h-4 w-4 text-amber-300" fill="currentColor" />
                <span className="ml-1 text-white/80">4.9/5</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
