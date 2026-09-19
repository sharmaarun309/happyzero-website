import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons'
import { SectionLabel } from '../ui'

function Hero({ eyebrow, title, description, ctaLabel, ctaTo, imageSrc, imageAlt = '' }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section className="px-5 pt-10 pb-16 md:px-8 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>{eyebrow}</SectionLabel>

        <h1 className="mt-4 max-w-2xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A] md:text-[52px]">
          {title}
        </h1>

        <p className="mt-5 max-w-xl text-base text-neutral-600">{description}</p>

        <div className="mt-7">
          <Link
            to={ctaTo}
            className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
          >
            {ctaLabel}
            <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
          </Link>
        </div>

        <div className="relative mt-10 h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 md:h-80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,106,0,0.2),transparent_60%)]" />
          {imageSrc && !imageFailed && (
            <img
              src={imageSrc}
              alt={imageAlt}
              onError={() => setImageFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
