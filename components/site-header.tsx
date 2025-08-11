"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import PillButton from "@/components/pill-button"

const links = [
  { label: "Products", href: "#" },
  { label: "Affiliate", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "Telegram", href: "#" },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full pointer-events-none h-16">
      {/* Animated shell that morphs between full-width bar and compact floating pill */}
      <div
        className={[
          // base transition
          "transition-all duration-300 ease-out",
          // layout and position
          scrolled
            ? "fixed left-0 right-0 top-2 z-[60] mx-auto max-w-6xl rounded-2xl"
            : "mx-auto max-w-none rounded-none",
          // borders and shadows
          scrolled
            ? "border border-white/12 shadow-[0_8px_28px_-12px_rgba(123,97,255,0.35)]"
            : "",
          // backgrounds and blur
          scrolled
            ? "bg-[#0b1230]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b1230]/65"
            : "bg-[#000319]/85 backdrop-blur supports-[backdrop-filter]:bg-[#000319]/75",
        ].join(" ")}
        style={{ pointerEvents: "auto" }}
      >
        <div
          className={[
            "container mx-auto flex items-center justify-between transition-all duration-300",
            scrolled ? "h-14 px-4" : "h-16 px-4",
          ].join(" ")}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2" aria-label="TikFusion Home">
            <Image
              src="/images/fanslink-logo.png"
              alt="TikFusion"
              width={200}
              height={50}
              priority
              className={["transition-all duration-300", scrolled ? "h-9 w-auto" : "h-9 w-auto"].join(" ")}
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
            <PillButton size="sm" className="min-w-[140px]">
              Get Fanslink
            </PillButton>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 border-white/20 bg-transparent text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 border-white/10 bg-[#000319] text-white">
                <div className="mt-8 grid gap-3">
                  {links.map((l) => (
                    <MobileLink key={l.label} href={l.href}>
                      {l.label}
                    </MobileLink>
                  ))}
                  <div className="mt-4 grid grid-cols-1 gap-2">
                    <PillButton size="md">Get TikFusion</PillButton>
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
      className="rounded-md px-2 py-2 text-base text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  )
}
