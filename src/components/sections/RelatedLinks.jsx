import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons'
import { SectionLabel } from '../ui'

function RelatedLinks({ eyebrow, title, links = [], chip }) {
  return (
    <section className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
        {title && (
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            {title}
          </h2>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="flex items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white p-5 text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-[#FF6A00]/30"
            >
              {name}
              <ArrowRightIcon width={16} height={16} strokeWidth={2.2} className="shrink-0 text-neutral-400" />
            </Link>
          ))}
        </div>

        {chip && (
          <Link
            to={chip.to}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-200"
          >
            {chip.label}
            <ArrowRightIcon width={14} height={14} strokeWidth={2.2} />
          </Link>
        )}
      </div>
    </section>
  )
}

export default RelatedLinks
