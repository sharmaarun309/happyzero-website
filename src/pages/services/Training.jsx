import Accordion from '../../components/sections/Accordion'
import CtaBand from '../../components/sections/CtaBand'
import FeatureCards from '../../components/sections/FeatureCards'
import Hero from '../../components/sections/Hero'
import IntroSplit from '../../components/sections/IntroSplit'
import LinkCard from '../../components/sections/LinkCard'
import MethodCards from '../../components/sections/MethodCards'
import NumberedChallenges from '../../components/sections/NumberedChallenges'
import RelatedLinks from '../../components/sections/RelatedLinks'
import StepFlow from '../../components/sections/StepFlow'
import { ArrowRightIcon } from '../../components/icons'
import { SectionLabel } from '../../components/ui'
import { training } from '../../data/services/training'

// Same visual as LinkCard, but for an external destination that must open
// in a new tab — LinkCard only renders an internal react-router Link.
function ExternalLinkCard({ label, href, Icon, cardClass, iconClass, nameClass }) {
  return (
    <section className="px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-start gap-4 rounded-2xl p-5 ${cardClass}`}
        >
          <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
            <Icon width={22} height={22} strokeWidth={1.8} />
          </span>
          <div className="flex-1">
            <h3 className="text-base font-bold text-[#0A0A0A]">
              <span className={nameClass}>{label}</span>
            </h3>
            <p className="mt-1 text-sm text-neutral-500">Opens submastery.com in a new tab.</p>
          </div>
          <ArrowRightIcon width={18} height={18} strokeWidth={2.2} className="mt-1 shrink-0 text-neutral-400" />
        </a>
      </div>
    </section>
  )
}

function Training() {
  return (
    <>
      <Hero {...training.hero} />
      <IntroSplit {...training.intro} />
      <FeatureCards {...training.helpsYou} />
      <NumberedChallenges {...training.trainingAreas} />
      <MethodCards {...training.delivery} />
      <StepFlow {...training.learningFlow} />
      <StepFlow {...training.approachFlow} />
      <FeatureCards {...training.evidence} />

      <section className="px-5 pt-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Learn more</SectionLabel>
        </div>
      </section>
      <ExternalLinkCard {...training.publicCoursesLink} />
      <LinkCard {...training.yoaLink} />

      <Accordion {...training.faq} />
      <RelatedLinks {...training.related} />
      <CtaBand {...training.cta} />
    </>
  )
}

export default Training
