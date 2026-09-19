import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons'
import { SectionLabel } from '../ui'

function LinkCard({
  eyebrow,
  label,
  name,
  subtitle,
  to,
  Icon,
  cardClass = 'bg-emerald-50',
  iconClass = 'bg-emerald-100 text-emerald-600',
  nameClass = 'text-emerald-600',
}) {
  return (
    <section className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
        <Link to={to} className={`mt-4 flex items-start gap-4 rounded-2xl p-5 ${cardClass}`}>
          <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
            <Icon width={22} height={22} strokeWidth={1.8} />
          </span>
          <div className="flex-1">
            <h3 className="text-base font-bold text-[#0A0A0A]">
              {label}
              {label && name ? ': ' : ''}
              <span className={nameClass}>{name}</span>
            </h3>
            {subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}
          </div>
          <ArrowRightIcon width={18} height={18} strokeWidth={2.2} className="mt-1 shrink-0 text-neutral-400" />
        </Link>
      </div>
    </section>
  )
}

export default LinkCard
