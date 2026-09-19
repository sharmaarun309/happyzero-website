import { Link } from 'react-router-dom'
import { ArrowRightIcon, PersonIcon } from '../icons'

function CtaBand({ title, description, ctaLabel, ctaTo }) {
  return (
    <section className="px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-900">
        <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-lg">
            <h2 className="text-[28px] font-bold leading-tight text-white md:text-[34px]">{title}</h2>
            {description && <p className="mt-4 text-sm text-white/70">{description}</p>}
            <div className="mt-7">
              <Link
                to={ctaTo}
                className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
              >
                {ctaLabel}
                <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
              </Link>
            </div>
          </div>

          <PersonIcon width={56} height={56} strokeWidth={1.2} className="hidden text-white/60 sm:block" />
        </div>
      </div>
    </section>
  )
}

export default CtaBand
