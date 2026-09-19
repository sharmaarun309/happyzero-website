import { SectionLabel } from '../ui'

function IntroSplit({ eyebrow, title, paragraphs = [] }) {
  return (
    <section className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
        <h2 className="mt-3 max-w-2xl text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
          {title}
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm text-neutral-600 md:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntroSplit
