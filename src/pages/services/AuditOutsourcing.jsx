import Accordion from '../../components/sections/Accordion'
import CtaBand from '../../components/sections/CtaBand'
import FeatureCards from '../../components/sections/FeatureCards'
import Hero from '../../components/sections/Hero'
import IntroSplit from '../../components/sections/IntroSplit'
import MethodCards from '../../components/sections/MethodCards'
import NumberedChallenges from '../../components/sections/NumberedChallenges'
import RelatedLinks from '../../components/sections/RelatedLinks'
import StepFlow from '../../components/sections/StepFlow'
import { SectionLabel } from '../../components/ui'
import { auditOutsourcing } from '../../data/services/audit-outsourcing'

const COLUMN_WIDTH = 170
const COLUMN_GAP = 20
const ITEM_HEIGHT = 36
const ITEM_GAP = 12
const ITEMS_START_Y = 54
const VIEW_HEIGHT = 190

// This page's one unique visual: a small inline SVG showing an illustrative
// annual audit programme laid out across four quarter columns.
function AnnualProgramme({ eyebrow, title, quarters = [] }) {
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

        <div className="mt-8 overflow-x-auto rounded-2xl border border-black/5 bg-white p-4">
          <svg
            viewBox={`0 0 760 ${VIEW_HEIGHT}`}
            width="100%"
            role="img"
            aria-label="Illustrative annual audit programme across four quarters"
            className="min-w-[640px]"
          >
            {quarters.map((quarter, index) => {
              const x = 10 + index * (COLUMN_WIDTH + COLUMN_GAP)
              return (
                <g key={quarter.label}>
                  <text x={x} y={22} fontSize="14" fontWeight="700" fill="#0A0A0A">
                    {quarter.label}
                  </text>
                  <rect x={x} y={30} width={24} height={3} rx={1.5} fill="#FF6A00" />
                  {quarter.items.map((item, itemIndex) => {
                    const y = ITEMS_START_Y + itemIndex * (ITEM_HEIGHT + ITEM_GAP)
                    return (
                      <g key={item}>
                        <rect
                          x={x}
                          y={y}
                          width={COLUMN_WIDTH}
                          height={ITEM_HEIGHT}
                          rx={8}
                          fill="#FAFAFA"
                          stroke="rgba(0,0,0,0.06)"
                        />
                        <text x={x + 10} y={y + 22} fontSize="10.5" fill="#404040">
                          {item}
                        </text>
                      </g>
                    )
                  })}
                </g>
              )
            })}
          </svg>
        </div>
      </div>
    </section>
  )
}

function AuditOutsourcing() {
  return (
    <>
      <Hero {...auditOutsourcing.hero} />
      <IntroSplit {...auditOutsourcing.intro} />
      <FeatureCards {...auditOutsourcing.helpsYou} />
      <NumberedChallenges {...auditOutsourcing.auditTypes} />
      <StepFlow {...auditOutsourcing.auditFlow} />
      <AnnualProgramme {...auditOutsourcing.annualProgramme} />
      <FeatureCards {...auditOutsourcing.whatYouGet} />
      <MethodCards {...auditOutsourcing.waysToWork} />
      <FeatureCards {...auditOutsourcing.whatsNext} />
      <Accordion {...auditOutsourcing.faq} />
      <RelatedLinks {...auditOutsourcing.related} />

      <section className="px-5 pb-4 md:px-8">
        <p className="mx-auto max-w-6xl text-sm text-neutral-400">QMS software partner: Rimbuss.</p>
      </section>

      <CtaBand {...auditOutsourcing.cta} />
    </>
  )
}

export default AuditOutsourcing
