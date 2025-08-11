import Image from "next/image"

export default function BrandsTrustSection() {
  return (
    <section aria-labelledby="brands-trust" className="relative snap-start py-10 md:py-14">
      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-8 max-w-4xl md:mb-10">
          <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">[ WHY BRANDS TRUST US ]</div>
          <h2 id="brands-trust" className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-white">Why Top Brands </span>
            <span className="heading-accent">{"Trust Us"}</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            tag="[ PROVEN RESULTS ]"
            titlePrimary="200+ businesses"
            titleSecondary="automated"
            imgSrc="https://framerusercontent.com/images/4tBBTStYBI6viIm3S0V32LWmEsE.png?scale-down-to=512"
            imgAlt="Cube illustration"
          />
          <Card
            tag="[ SEAMLESS AI INTEGRATION ]"
            titlePrimary="Works with your"
            titleSecondary="existing tools"
            imgSrc="https://framerusercontent.com/images/wuAQkitFA7FROtqnxuSNB3IjY.png?scale-down-to=512"
            imgAlt="Puzzle illustration"
          />
          <Card
            tag="[ TAILORED FOR YOU ]"
            titlePrimary="Custom AI"
            titleSecondary="solutions"
            imgSrc="https://framerusercontent.com/images/0inQJKilj8qkeUgN4bqX6KsU5rU.png?scale-down-to=512"
            imgAlt="Chip illustration"
          />
          <Card
            tag="[ ONGOING SUPPORT ]"
            titlePrimary="We ensure your"
            titleSecondary="AI runs smoothly"
            imgSrc="https://framerusercontent.com/images/dIX4pjdxAyXF48AZQtOmL0xk.png?scale-down-to=512"
            imgAlt="Chat bubble illustration"
          />
        </div>
      </div>
    </section>
  )
}

function Card({
  tag,
  titlePrimary,
  titleSecondary,
  imgSrc,
  imgAlt,
}: {
  tag: string
  titlePrimary: string
  titleSecondary: string
  imgSrc: string
  imgAlt: string
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
      <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">{tag}</div>
      <div className="mt-4 flex h-40 items-center justify-center sm:h-44">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={256}
          height={256}
          className="h-36 w-auto sm:h-40"
          unoptimized
        />
      </div>
      <div className="mt-6 text-left text-xl font-semibold leading-snug sm:text-2xl">
        <div className="text-white/90">{titlePrimary}</div>
        <div className="text-white/90">{titleSecondary}</div>
      </div>
    </div>
  )
}


