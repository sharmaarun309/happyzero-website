import { useState } from 'react'
import { ChevronDownIcon } from '../icons'
import { SectionLabel } from '../ui'

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="text-sm font-bold leading-snug text-[#0A0A0A]">{question}</span>
        <ChevronDownIcon
          width={18}
          height={18}
          strokeWidth={2}
          className={`shrink-0 text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="mt-3 text-sm text-neutral-600">{answer}</p>}
    </div>
  )
}

function Accordion({ eyebrow, title, items = [] }) {
  return (
    <section className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
        {title && (
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            {title}
          </h2>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <AccordionItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Accordion
