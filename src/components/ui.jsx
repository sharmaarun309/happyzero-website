import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './icons'

export function SectionLabel({ children, align = 'left', className = '' }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 ${
        align === 'right' ? 'justify-end' : ''
      } ${className}`}
    >
      <span className="h-px w-4 bg-[#FF6A00]" />
      {children}
    </p>
  )
}

export function ArrowLink({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] hover:text-[#FF6A00] ${className}`}
    >
      {children}
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

export function ArrowCircleButton({ className = '' }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0A0A0A] shadow-sm ${className}`}
    >
      <ArrowRightIcon width={18} height={18} strokeWidth={2.2} />
    </span>
  )
}
