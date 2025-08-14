import GradientBG from "@/components/gradient-bg"
import SiteHeader from "@/components/site-header"
import RepurposeBotSection from "@/components/repurpose-bot"
import FAQSection from "@/components/faq"
import SiteFooter from "@/components/site-footer"
import BentoShowcaseSection from "@/components/bento-grid"
import Hero from "@/components/hero"
import TeamSection from "@/components/team"
import BrandsTrustSection from "@/components/brands-trust"
import ContactUsSection from "@/components/contact-us"
import PricingSection from "@/components/pricing"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#000319] text-white snap-y snap-mandatory" suppressHydrationWarning>
      <GradientBG />
      {/* Spotlight background image for header + hero */}
      <div
        className="absolute inset-x-0 top-0 h-[120vh] z-0 pointer-events-none"
        style={{
          backgroundImage: "url(/spotligiiht.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.9,
          filter: "brightness(1.3) saturate(1.15)",
        }}
      />
      <SiteHeader />

      {/* Hero + Sections with custom spacing per block */}
      <div className="flex flex-col" id="main-content">
        {/* Hero */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <Hero />
        </div>

        {/* Repurposing Bot */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <RepurposeBotSection />
        </div>

        {/* Bento Showcase */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <BentoShowcaseSection />
        </div>

        {/* Brands trust section */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <BrandsTrustSection />
        </div>



        {/* Testimonials hidden for now */}

        {/* Team */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <TeamSection />
        </div>

        {/* Pricing */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <PricingSection />
        </div>

        {/* CTA Band temporarily removed */}

        {/* FAQ */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <FAQSection />
        </div>

        {/* Contact Us */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <ContactUsSection />
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
