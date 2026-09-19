import Accordion from '../../components/sections/Accordion'
import ChipRow from '../../components/sections/ChipRow'
import CtaBand from '../../components/sections/CtaBand'
import FeatureCards from '../../components/sections/FeatureCards'
import Hero from '../../components/sections/Hero'
import IntroSplit from '../../components/sections/IntroSplit'
import LinkCard from '../../components/sections/LinkCard'
import NumberedChallenges from '../../components/sections/NumberedChallenges'
import RelatedLinks from '../../components/sections/RelatedLinks'
import StepFlow from '../../components/sections/StepFlow'
import { SectionLabel } from '../../components/ui'
import { gapAnalysis } from '../../data/services/gap-analysis'

const PRIORITY_STYLES = {
  High: 'bg-orange-300 text-[#5c2700]',
  Medium: 'bg-orange-100 text-[#a34700]',
  Low: 'bg-neutral-100 text-neutral-500',
}

// Gap-register rows carry four differently-typed columns (free text, a
// priority level, an owner), which doesn't fit the skill-matrix shape of
// components/sections/IllustrativeTable, so it's rendered locally here.
function SampleGapRegister({ eyebrow, title, description, columns = [], rows = [] }) {
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
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    className="border-b border-black/5 bg-neutral-50 p-3 text-left font-semibold text-[#0A0A0A]"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="border-b border-black/5 p-3 font-medium text-[#0A0A0A]">{row.area}</td>
                  <td className="border-b border-black/5 p-3 text-neutral-600">{row.gap}</td>
                  <td className="border-b border-black/5 p-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${PRIORITY_STYLES[row.priority]}`}
                    >
                      {row.priority}
                    </span>
                  </td>
                  <td className="border-b border-black/5 p-3 text-neutral-600">{row.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function GapAnalysis() {
  return (
    <>
      <Hero {...gapAnalysis.hero} />
      <ChipRow {...gapAnalysis.standards} />
      <IntroSplit {...gapAnalysis.intro} />
      <FeatureCards {...gapAnalysis.helpsYou} />
      <NumberedChallenges {...gapAnalysis.whatWeDo} />
      <StepFlow {...gapAnalysis.gapFlow} />
      <SampleGapRegister {...gapAnalysis.gapRegister} />
      <StepFlow {...gapAnalysis.implementationFlow} />
      <FeatureCards {...gapAnalysis.integratedBenefits} />
      <LinkCard {...gapAnalysis.digitalQmsLink} />
      <Accordion {...gapAnalysis.faq} />
      <RelatedLinks {...gapAnalysis.related} />
      <CtaBand {...gapAnalysis.cta} />
    </>
  )
}

export default GapAnalysis
