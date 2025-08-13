"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import PillButton from "@/components/pill-button"
import RainbowBorder from "@/components/rainbow-border"

const links = [
  { label: "Products", href: "#showcase" },
  { label: "About Us", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function SiteHeader() {
  // Keep header appearance constant while scrolling

  return (
    <header className="fixed top-0 z-50 w-full pointer-events-none h-16 overflow-visible">
      {/* Animated shell that morphs between full-width bar and compact floating pill */}
      <div
        className={[
          "transition-all duration-300 ease-out relative z-10",
          "mx-auto max-w-none rounded-none",
          "bg-[#000319]/85 backdrop-blur supports-[backdrop-filter]:bg-[#000319]/75",
        ].join(" ")}
        style={{ pointerEvents: "auto" }}
      >
        
        <div
          className={[
            "container mx-auto flex items-center justify-between transition-all duration-300 relative z-10",
            "h-16 px-4",
          ].join(" ")}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2" aria-label="Fanslink Home">
            <Image
              src="/images/fanslink-logo.png"
              alt="Fanslink"
              width={200}
              height={50}
              priority
              className={["transition-all duration-300", "h-9 w-auto"].join(" ")}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <NavLink key={l.label} href={l.href}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <RainbowBorder>
              <Link href="#pricing">
                <PillButton size="sm" className="border-transparent group whitespace-nowrap">
                  <span className="inline-flex items-center">
                    Get Fanslink Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </PillButton>
              </Link>
            </RainbowBorder>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full max-w-sm border-l border-white/10 bg-[#000319]/95 backdrop-blur-xl text-white p-0 sm:max-w-md"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 pb-4 border-b border-white/10">
                  <Image
                    src="/images/fanslink-logo.png"
                    alt="Fanslink"
                    width={120}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>

                {/* Navigation */}
                <div className="flex flex-col h-full">
                  <nav className="flex-1 px-6 py-6">
                    <div className="space-y-1">
                      {links.map((l) => (
                        <MobileLink key={l.label} href={l.href}>
                          {l.label}
                        </MobileLink>
                      ))}
                    </div>
                  </nav>

                  {/* CTA Section */}
                  <div className="p-6 pt-4 border-t border-white/10">
                    <RainbowBorder>
                      <Link href="#pricing">
                        <PillButton size="lg" className="border-transparent group whitespace-nowrap w-full justify-center">
                          <span className="inline-flex items-center">
                            Get Fanslink Now
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </PillButton>
                      </Link>
                    </RainbowBorder>
                    
                    {/* Footer info */}
                    <div className="mt-6 text-center">
                      <p className="text-xs text-zinc-400">
                        Ready to automate your workflow?
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative text-sm text-zinc-300 transition-colors hover:text-white">
      <span>{children}</span>
      <span
        className="pointer-events-none absolute -bottom-1 left-0 block h-px w-full scale-x-0 bg-gradient-to-r from-white/0 via-white/80 to-white/0 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  )
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-zinc-200 transition-all duration-200 hover:bg-white/5 hover:text-white active:bg-white/10"
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" />
    </Link>
  )
}
