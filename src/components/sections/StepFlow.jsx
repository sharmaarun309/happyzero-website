import { Fragment } from 'react'
import { SectionLabel } from '../ui'

function StepConnectorVertical() {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" className="md:hidden" aria-hidden="true">
      <line x1="12" y1="0" x2="12" y2="24" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" />
      <polyline
        points="6 18 12 26 18 18"
        stroke="#FF6A00"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StepConnectorHorizontal() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      className="hidden shrink-0 md:block"
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="24" y2="12" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" />
      <polyline
        points="18 6 26 12 18 18"
        stroke="#FF6A00"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StepFlow({ eyebrow, title, description, steps = [] }) {
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

        <div className="mt-8 flex flex-col md:flex-row md:items-center">
          {steps.map((step, index) => (
            <Fragment key={step}>
              <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl bg-orange-50 px-4 py-5 text-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6A00] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold leading-snug text-[#0A0A0A]">{step}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center py-1 md:px-1">
                  <StepConnectorVertical />
                  <StepConnectorHorizontal />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepFlow
