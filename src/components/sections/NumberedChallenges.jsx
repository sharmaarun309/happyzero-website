import { SectionLabel } from '../ui'

function NumberedChallenges({ eyebrow, title, description, items = [] }) {
  return (
    <section className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
        {title && (
          <h2 className="mt-3 max-w-xl text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            {title}
          </h2>
        )}
        {description && <p className="mt-2 max-w-xl text-sm text-neutral-500">{description}</p>}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title: itemTitle, description: itemDescription }, index) => (
            <div key={itemTitle} className="rounded-2xl border border-black/5 bg-white p-5">
              <span className="text-sm font-bold text-[#FF6A00]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-base font-bold leading-snug text-[#0A0A0A]">{itemTitle}</h3>
              {itemDescription && (
                <p className="mt-2 text-sm text-neutral-500">{itemDescription}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NumberedChallenges
