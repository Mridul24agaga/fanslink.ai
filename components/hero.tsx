"use client"

import PillButton from "@/components/pill-button"
import RainbowBorder from "@/components/rainbow-border"
import { ArrowRight, Star, Users, User } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Hero() {
  return (
    <section className="relative snap-start min-h-[calc(100vh-4rem)] flex items-center overflow-hidden px-4 sm:px-0">
      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-6xl text-center">
          {/* Badge */}
          <span className="fl-hero-appear inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-zinc-300 backdrop-blur" style={{ animationDelay: "80ms" }}>
            <span className="hidden sm:inline">{"New • Improved workflow and brand‑safe exports"}</span>
            <span className="sm:hidden">{"New • Improved workflow"}</span>
          </span>

          {/* Headline */}
          <h1 className="fl-hero-appear mt-4 sm:mt-6 text-center text-balance text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight" style={{ animationDelay: "160ms" }}>
            <span className="text-white">Your </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#ffffff 0%,#9aa7ff 30%,#7b61ff 55%,#ffd089 100%)" }}
            >
              <span className="hidden sm:inline">{"Agency's All-in-One"}</span>
              <span className="sm:hidden">{"All-in-One"}</span>
            </span>
            <br />
            <span className="text-white">Automation </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#ffffff 0%,#9aa7ff 30%,#7b61ff 55%,#ffd089 100%)" }}
            >
              {"Suite"}
            </span>
          </h1>

          {/* Subcopy */}
          <p className="fl-hero-appear mx-auto mt-3 sm:mt-4 max-w-2xl sm:max-w-3xl text-pretty text-lg sm:text-xl text-zinc-400 px-2 sm:px-0" style={{ animationDelay: "240ms" }}>
            <span className="hidden sm:inline">Repurpose once, distribute everywhere. Create a system that grows revenue faster by publishing to all platforms with one click.</span>
            <span className="sm:hidden">Repurpose once, distribute everywhere. Automate your content workflow with one click.</span>
          </p>

          {/* CTAs */}
          <div className="fl-hero-appear mt-6 sm:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-3 px-2 sm:px-0" style={{ animationDelay: "320ms" }}>
            <RainbowBorder>
              <PillButton size="lg" className="border-transparent group whitespace-nowrap flex-1 sm:flex-initial text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-3.5">
                <span className="inline-flex items-center justify-center">
                  <span className="hidden sm:inline">Get Fanslink Now</span>
                  <span className="sm:hidden">Get Started</span>
                  <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </PillButton>
            </RainbowBorder>

            <a href="#introducing" className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 whitespace-nowrap flex-1 sm:flex-initial">
              Learn more
            </a>
          </div>

          {/* Trusted by row */}
          <div className="fl-hero-appear mt-6 sm:mt-7 flex flex-col items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-400 px-4 sm:px-0" style={{ animationDelay: "400ms" }}>
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-white/20 bg-gradient-to-br from-gray-800 to-gray-400">
                <AvatarFallback className="bg-gradient-to-br from-gray-800 to-gray-400 text-white">
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-white/20 bg-gradient-to-br from-gray-700 to-gray-300">
                <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-300 text-white">
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-white/20 bg-gradient-to-br from-gray-600 to-gray-300">
                <AvatarFallback className="bg-gradient-to-br from-gray-600 to-gray-300 text-white">
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                </AvatarFallback>
              </Avatar>
              <Avatar className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-white/20 bg-gradient-to-br from-gray-500 to-gray-200">
                <AvatarFallback className="bg-gradient-to-br from-gray-500 to-gray-200 text-white">
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="text-white/90 text-center">
                <span className="hidden sm:inline">Trusted by top agencies and creators</span>
                <span className="sm:hidden">Trusted by agencies & creators</span>
              </span>
              <span className="hidden sm:inline-block h-4 w-px bg-white/10" />
              <span className="inline-flex items-center gap-1 text-zinc-300">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-300" fill="currentColor" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-300" fill="currentColor" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-300" fill="currentColor" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-300" fill="currentColor" />
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-amber-300" fill="currentColor" />
                <span className="ml-1 text-white/80">4.9/5</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
