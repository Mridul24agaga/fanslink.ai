import RainbowBorder from "@/components/rainbow-border"
import PillButton from "@/components/pill-button"
import { Calendar } from "lucide-react"

export default function CtaBandSection() {
  return (
    <section className="relative snap-start min-h-[85vh] flex items-center">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="relative -mt-6 md:-mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur md:p-12">
          {/* subtle glow */}
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(123,97,255,0.20),transparent_60%)]" />
          <h3 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            <span className="text-white">Ready to </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#ffffff,#9aa7ff,#7b61ff,#ffd089)" }}
            >
              {"10x your output?"}
            </span>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            Turn one recording into a month of content. Create, style and publish everywhere in minutes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <RainbowBorder>
              <PillButton size="lg" className="border-transparent">
                Get Fanslink Now  
              </PillButton>
            </RainbowBorder>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-base text-white/90 hover:bg-white/10"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
