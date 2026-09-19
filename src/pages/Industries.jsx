import { Link } from 'react-router-dom'
import { industriesPanel } from '../data/nav'

function IndustryTile({ name, subtitle, to, Icon, disabled, badge }) {
  const content = (
    <>
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${
          disabled ? 'bg-neutral-100/70 text-neutral-400' : 'bg-neutral-100 text-neutral-600'
        }`}
      >
        <Icon width={22} height={22} strokeWidth={1.6} />
      </span>
      <div className="mt-4 flex items-center gap-2">
        <h3 className={`text-lg font-bold ${disabled ? 'text-neutral-400' : 'text-[#0A0A0A]'}`}>
          {name}
        </h3>
        {badge && (
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-500">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
    </>
  )

  if (disabled) {
    return (
      <div aria-disabled="true" className="rounded-2xl border border-black/5 bg-white p-6">
        {content}
      </div>
    )
  }

  return (
    <Link
      to={to}
      className="rounded-2xl border border-black/5 bg-white p-6 transition-colors hover:border-[#FF6A00]/30"
    >
      {content}
    </Link>
  )
}

function Industries() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold text-[#FF6A00]">Industries</p>
        <h1 className="mt-3 max-w-xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A] md:text-[52px]">
          Built for manufacturing.
        </h1>
        <p className="mt-5 max-w-xl text-base text-neutral-600">
          Practical support shaped around your industry&rsquo;s standards and challenges.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {industriesPanel.items.map((item) => (
            <IndustryTile key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
