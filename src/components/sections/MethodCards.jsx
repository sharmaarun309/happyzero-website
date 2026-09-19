import { SectionLabel } from '../ui'

function MethodCards({ eyebrow, title, description, items = [], equation }) {
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

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map(({ name, copy, Icon, iconClass = 'bg-orange-100 text-[#FF6A00]' }) => (
            <div key={name} className="rounded-2xl border border-black/5 bg-white p-6">
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}>
                <Icon width={22} height={22} strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-[#0A0A0A]">{name}</h3>
              <p className="mt-2 text-sm text-neutral-600">{copy}</p>
            </div>
          ))}
        </div>

        {equation && (
          <p className="mt-6 text-center text-sm font-semibold text-neutral-700 md:text-base">
            {equation}
          </p>
        )}
      </div>
    </section>
  )
}

export default MethodCards
