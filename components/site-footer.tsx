import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="relative snap-start border-t border-white/10 bg-[#000319]/80 py-8 md:py-12 lg:py-14 backdrop-blur">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col gap-4 max-w-sm">
              <Link href="/" className="inline-flex items-center gap-2">
                <Image 
                  src="/images/fanslink-logo.png" 
                  alt="Fanslink" 
                  width={180} 
                  height={45} 
                  className="h-8 sm:h-10 w-auto" 
                />
              </Link>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Repurpose once. Publish everywhere. Grow faster with Fanslink's AI-powered automation suite.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <SocialLink href="https://twitter.com" label="Twitter">
                  <Twitter className="h-4 w-4" />
                </SocialLink>
                <SocialLink href="https://instagram.com" label="Instagram">
                  <Instagram className="h-4 w-4" />
                </SocialLink>
                <SocialLink href="https://youtube.com" label="YouTube">
                  <Youtube className="h-4 w-4" />
                </SocialLink>
                <SocialLink href="mailto:hey@fanslink.com" label="Email">
                  <Mail className="h-4 w-4" />
                </SocialLink>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2">
            {/* Product column */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-sm sm:text-base">Product</h3>
              <ul className="space-y-2">
                <li><FooterLink href="#showcase">Features</FooterLink></li>
                <li><FooterLink href="#pricing">Pricing</FooterLink></li>
                <li><FooterLink href="#team">Our Team</FooterLink></li>
                <li><FooterLink href="#faq">FAQ</FooterLink></li>
              </ul>
            </div>

            {/* Company column */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white text-sm sm:text-base">Company</h3>
              <ul className="space-y-2">
                <li><FooterLink href="#contact">Contact</FooterLink></li>
                <li><FooterLink href="#">Blog</FooterLink></li>
                <li><FooterLink href="#">Support</FooterLink></li>
                <li><FooterLink href="#">Status</FooterLink></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs sm:text-sm text-zinc-400 order-2 sm:order-1">
              © {new Date().getFullYear()} Fanslink. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm order-1 sm:order-2">
              <li>
                <FooterLink href="#">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Terms of Service</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Cookie Policy</FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block py-1 text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white/30 text-sm sm:text-base"
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
