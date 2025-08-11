import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import RainbowBorder from "@/components/rainbow-border"
import PillButton from "@/components/pill-button"
import { Plus } from "lucide-react"

export default function FAQSection() {
  return (
    <section aria-labelledby="faq" className="relative snap-start min-h-[85vh] flex items-center py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 faq-style">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <header className="max-w-lg">
            <h2 id="faq" className="text-5xl font-extrabold tracking-tight sm:text-6xl">
              <span className="text-white">FAQ</span>
            </h2>
            <p className="mt-6 text-zinc-400">
              Our AI‑driven automation eliminates busywork, streamlines your operations, and helps your business grow,
              without extra effort.
            </p>
          </header>

          {/* Right list */}
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="faq-item overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-2 backdrop-blur-[2px]"
                >
                  <AccordionTrigger className="group text-left text-base hover:no-underline px-3">
                    <span className="pr-10">{item.q}</span>
                    <span className="faq-plus ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-300">
                      <Plus className="h-4 w-4" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 text-sm text-zinc-300">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 flex items-center">
              <RainbowBorder>
                <PillButton size="lg" className="border-transparent">
                  Still have questions? Contact us
                </PillButton>
              </RainbowBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqItems = [
  {
    value: "q1",
    q: "How can AI automation help my business?",
    a: "It removes repetitive tasks, speeds up content creation, and scales your output so your team can focus on higher‑value work.",
  },
  {
    value: "q2",
    q: "Is AI difficult to integrate into my current system?",
    a: "No. You can upload or paste links directly, and use our 1‑click exports or native integrations when you're ready.",
  },
  {
    value: "q3",
    q: "What industries can benefit from AI automation?",
    a: "Creators, agencies, media teams, and ecommerce—anyone who needs to produce and publish short‑form video at scale.",
  },
  {
    value: "q4",
    q: "What’s the difference between your pricing plans?",
    a: "Plans vary by monthly clip credits, collaboration features, and export options. Start small and upgrade as you grow.",
  },
  {
    value: "q5",
    q: "How long does AI setup take?",
    a: "Initial setup is minutes. Upload once, set your brand kit, and you're ready to repurpose across every platform.",
  },
  {
    value: "q6",
    q: "Can I request a custom AI solution?",
    a: "Yes. Tell us your workflow and we can tailor templates, captions, and posting to your stack.",
  },
]
