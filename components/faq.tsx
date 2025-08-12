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
              Our AI repurposes your content instantly, turning one piece into dozens of ready-to-use posts so you can
              stay active everywhere without the extra work.
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
    q: "Why FansLink is the best option for content repurposing",
    a: "After using all other tools on the market, we couldn’t find anything that produces anything close to what we needed in terms of quality and results, with an efficient enough UI. So we built FansLink",
  },
  {
    value: "q2",
    q: "What can I do with FansLink?",
    a: "Re use the same piece of content across social media without being detected",
  },
  {
    value: "q3",
    q: "Do I need technical knowledge to use your tools?",
    a: "Not at all. Our apps are simple desktop tools with a clean interface — no coding, integrations, or complicated setups needed.",
  },
  {
    value: "q4",
    q: "What does the Video Spoofing Tool do?",
    a: "It changes video metadata (size, duration, source info) so you can refresh content and avoid duplicate flags on platforms.",
  },
  {
    value: "q5",
    q: "Can I swap faces in videos using your tools?",
    a: "Yes. Our Face Swap Tool makes it easy to replace faces in content, giving agencies flexibility to create new variations quickly.",
  },
  {
    value: "q6",
    q: "Do you offer outreach automation tools?",
    a: "Not yet — but they’re coming soon. Right now, our focus is on content production and file management automation.",
  },
  {
    value: "q7",
    q: "Can your tools help with file conversions and reducing file sizes?",
    a: "Yes. We have a File Converter and Reducer to help you optimize content for uploading, storage, and platform requirements.",
  },
  {
    value: "q8",
    q: "Does FansLink work for all platforms?",
    a: "Yes. our software works for repurposing content on Shorts, Tiktoks, Reels and any other social media platform you can think of",
  },
]
