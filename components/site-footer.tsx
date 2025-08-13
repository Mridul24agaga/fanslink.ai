import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="relative snap-start border-t border-white/10 bg-[#000319]/80 py-12 md:py-14 backdrop-blur">
      <div className="container mx-auto grid grid-cols-1 items-start gap-8 px-4 sm:grid-cols-3">
        {/* Brand + blurb + socials */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/images/fanslink-logo.png" alt="Fanslink" width={220} height={60} className="h-10 w-auto" />
          </Link>
          <p className="max-w-xs text-sm text-zinc-400">
            Repurpose once. Publish everywhere. Grow faster with Fanslink.
          </p>

          <div className="mt-2 flex items-center gap-2">
            <SocialLink href="https://twitter.com" label="Twitter">
              <Twitter className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://instagram.com" label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="https://youtube.com" label="YouTube">
              <Youtube className="h-4 w-4" />
            </SocialLink>
            <SocialLink href="mailto:hey@tikfusion.app" label="Email">
              <Mail className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        {/* Nav groups */}
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-6 text-sm sm:col-span-2 sm:justify-items-end sm:text-right"
        >
          <div className="space-y-2">
            <p className="font-semibold text-white">Product</p>
            <ul className="space-y-1">
              <li><FooterLink href="#pricing">Pricing</FooterLink></li>
              <li><FooterLink href="#team">Our Team</FooterLink></li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-white">Company</p>
            <ul className="space-y-1">
              <li><FooterLink href="#faq">FAQ</FooterLink></li>
              <li><FooterLink href="#">Affiliate</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Legal row */}
      <div className="container mx-auto mt-8 border-t border-white/10 px-4 pt-6">
        <div className="flex flex-col items-start justify-between gap-3 text-xs text-zinc-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Fanslink. All rights reserved.</p>
          <ul className="flex items-center gap-4">
            <li>
              <FooterLink href="#">Privacy</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Terms</FooterLink>
            </li>
            <li>
              <FooterLink href="#">Status</FooterLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white/30"
    >
      {children}
    </Link>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  const isExternal = href.startsWith("http")
  return (
    <Link
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-zinc-300 transition-colors hover:text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      <span className="sr-only">{label}</span>
      {children}
    </Link>
  )
}
