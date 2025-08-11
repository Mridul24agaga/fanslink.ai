import GradientBG from "@/components/gradient-bg"
import SiteHeader from "@/components/site-header"
import RepurposeBotSection from "@/components/repurpose-bot"
import FAQSection from "@/components/faq"
import SiteFooter from "@/components/site-footer"
import BentoShowcaseSection from "@/components/bento-grid"
import Hero from "@/components/hero"
import TeamSection from "@/components/team"
import BrandsTrustSection from "@/components/brands-trust"
import TestimonialsSection from "@/components/testimonials"
import ContactUsSection from "@/components/contact-us"
import PricingSection from "@/components/pricing"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000319] text-white snap-y snap-mandatory" suppressHydrationWarning>
      <GradientBG />
      <SiteHeader />

      {/* Hero + Sections with consistent spacing */}
      <div className="flex flex-col space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-28" id="main-content">
        {/* Hero */}
        <div data-reveal>
          <Hero />
        </div>

        {/* Repurposing Bot */}
        <div data-reveal>
          <RepurposeBotSection />
        </div>

        {/* Bento Showcase */}
        <div data-reveal>
          <BentoShowcaseSection />
        </div>

        {/* Brands trust section */}
        <div data-reveal>
          <BrandsTrustSection />
        </div>



        {/* Testimonials */}
        <div data-reveal>
          <TestimonialsSection />
        </div>

        {/* Team */}
        <div data-reveal>
          <TeamSection />
        </div>

        {/* Pricing */}
        <div data-reveal>
          <PricingSection />
        </div>

        {/* CTA Band temporarily removed */}

        {/* FAQ */}
        <div data-reveal>
          <FAQSection />
        </div>

        {/* Contact Us */}
        <div data-reveal>
          <ContactUsSection />
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
