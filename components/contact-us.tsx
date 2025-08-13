"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PillButton from "@/components/pill-button"

export default function ContactUsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (isSubmitting) return
    
    const form = e.currentTarget
    setIsSubmitting(true)
    setStatus(null)
    
    try {
      const formData = new FormData(form)
      
      // Add your Web3Forms access key
      formData.append("access_key", "88628c63-67f2-4fad-ad33-915100b45f3d")
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setStatus({ ok: true, message: "Thanks! Your message has been sent successfully." })
        form.reset()
      } else {
        console.error("Web3Forms error:", result)
        setStatus({ 
          ok: false, 
          message: result.message || `Error: ${response.status} - ${response.statusText}` 
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus({ 
        ok: false, 
        message: "Failed to send message. Please check your internet connection and try again." 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-us" className="relative snap-start py-12 md:py-16">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
        {/* Left copy (restored format) */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">[ contact us ]</div>
          <h2 id="contact-us" className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Ready to automate your workflow?
          </h2>
          <p className="mt-4 max-w-prose text-zinc-400">
            Let us know how we can help. Our team typically replies within one business day.
          </p>
        </div>

        {/* Right form (integrated with Web3Forms) */}
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Web3Forms honeypot for spam protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            
            {/* Hidden fields for Web3Forms */}
            <input type="hidden" name="subject" value="New Contact Form Submission from Fanslink" />
            <input type="hidden" name="from_name" value="Fanslink Website" />
            
            <div>
              <label htmlFor="name" className="mb-1 block text-xs text-zinc-400">Name</label>
              <Input 
                id="name"
                name="name" 
                type="text"
                placeholder="Jane Smith" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-xs text-zinc-400">Email</label>
              <Input 
                id="email"
                name="email" 
                type="email" 
                placeholder="mail@site.com" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-xs text-zinc-400">Message</label>
              <Textarea 
                id="message"
                name="message" 
                placeholder="Your message" 
                className="min-h-28" 
                required 
              />
            </div>
            <div className="flex items-center justify-between pt-1 text-xs text-zinc-400">
              <span>
                By submitting, you agree to our <a className="underline underline-offset-2" href="#">Terms</a> and
                <a className="underline underline-offset-2" href="#"> Privacy Policy</a>.
              </span>
              <PillButton type="submit" className="border-transparent" disabled={isSubmitting}>
                {isSubmitting ? "Sending…" : "Submit"}
              </PillButton>
            </div>
            {status && (
              <div className={`text-sm ${status.ok ? "text-emerald-300" : "text-red-300"}`}>
                {status.message}
              </div>
            )}
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


