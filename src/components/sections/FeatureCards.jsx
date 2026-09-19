import { SectionLabel } from '../ui'

function FeatureCards({ eyebrow, title, description, items = [], columns = 4 }) {
  const colsClass = columns === 5 ? 'sm:grid-cols-2 lg:grid-cols-5' : 'sm:grid-cols-2 lg:grid-cols-4'

  return (
    <section className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
        {title && (
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            {title}
          </h2>
        )}
        {description && <p className="mt-2 max-w-xl text-sm text-neutral-500">{description}</p>}

        <div className={`mt-8 grid gap-4 ${colsClass}`}>
          {items.map(({ name, copy, Icon }) => (
            <div key={name} className="rounded-2xl border border-black/5 bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
                <Icon width={20} height={20} strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-sm font-bold text-[#0A0A0A]">{name}</h3>
              {copy && <p className="mt-2 text-sm text-neutral-500">{copy}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards
