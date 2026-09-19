import { SectionLabel } from '../ui'

const LEVELS = {
  'not-started': { label: 'Not started', dotClass: 'bg-neutral-300', cellClass: 'bg-neutral-100 text-neutral-400' },
  developing: { label: 'Developing', dotClass: 'bg-orange-300', cellClass: 'bg-orange-100 text-[#a34700]' },
  competent: { label: 'Competent', dotClass: 'bg-orange-400', cellClass: 'bg-orange-300 text-[#5c2700]' },
  'can-coach': { label: 'Can coach', dotClass: 'bg-[#FF6A00]', cellClass: 'bg-[#FF6A00] text-white' },
}

function IllustrativeTable({ eyebrow, title, description, skills = [], rows = [] }) {
  return (
    <section className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3">
          {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
            Illustrative example
          </span>
        </div>
        {title && (
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            {title}
          </h2>
        )}
        {description && <p className="mt-2 max-w-xl text-sm text-neutral-500">{description}</p>}

        <div className="mt-8 overflow-x-auto rounded-2xl border border-black/5">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b border-black/5 bg-neutral-50 p-3 text-left font-semibold text-[#0A0A0A]">
                  Role
                </th>
                {skills.map((skill) => (
                  <th
                    key={skill}
                    className="border-b border-black/5 bg-neutral-50 p-3 text-left font-semibold text-[#0A0A0A]"
                  >
                    {skill}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ role, values }) => (
                <tr key={role}>
                  <td className="border-b border-black/5 p-3 font-medium text-[#0A0A0A]">{role}</td>
                  {values.map((value, index) => (
                    <td key={index} className="border-b border-black/5 p-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${LEVELS[value]?.cellClass}`}
                      >
                        {LEVELS[value]?.label}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {Object.values(LEVELS).map(({ label, dotClass }) => (
            <span key={label} className="flex items-center gap-1.5 text-xs text-neutral-500">
              <span className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IllustrativeTable
