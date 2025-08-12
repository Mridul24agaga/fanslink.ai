"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PillButton from "@/components/pill-button"

export default function ContactUsSection() {
  return (
    <section id="contact" aria-labelledby="contact-us" className="relative snap-start py-12 md:py-16">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
        {/* Left copy (restored format) */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">[ contact us ]</div>
          <h2 id="contact-us" className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            CONTACT US
          </h2>
          <p className="mt-4 max-w-prose text-zinc-400">
            Let us know how we can help. Our team typically replies within one business day.
          </p>
        </div>

        {/* Right form (restored layout) */}
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-xs text-zinc-400">Name</label>
              <Input placeholder="Jane Smith" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-zinc-400">Email</label>
              <Input type="email" placeholder="mail@site.com" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-zinc-400">Message</label>
              <Textarea placeholder="Your message" className="min-h-28" />
            </div>
            <div className="flex items-center justify-between pt-1 text-xs text-zinc-400">
              <span>
                By submitting, you agree to our <a className="underline underline-offset-2" href="#">Terms</a> and
                <a className="underline underline-offset-2" href="#"> Privacy Policy</a>.
              </span>
              <PillButton type="submit" className="border-transparent">Submit</PillButton>
            </div>
          </form>

          {/* Discord CTA */}
          <div className="mt-5 flex items-center justify-center">
            <a
              href="https://discord.gg/7DHrUwrkYd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#5865F2] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-110"
            >
              Join our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


