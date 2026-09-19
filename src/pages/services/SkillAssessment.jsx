import Accordion from '../../components/sections/Accordion'
import CtaBand from '../../components/sections/CtaBand'
import FeatureCards from '../../components/sections/FeatureCards'
import Hero from '../../components/sections/Hero'
import IllustrativeTable from '../../components/sections/IllustrativeTable'
import IntroSplit from '../../components/sections/IntroSplit'
import LinkCard from '../../components/sections/LinkCard'
import MethodCards from '../../components/sections/MethodCards'
import NumberedChallenges from '../../components/sections/NumberedChallenges'
import RelatedLinks from '../../components/sections/RelatedLinks'
import StepFlow from '../../components/sections/StepFlow'
import { skillAssessment } from '../../data/services/skill-assessment'

function SkillAssessment() {
  return (
    <>
      <Hero {...skillAssessment.hero} />
      <IntroSplit {...skillAssessment.intro} />
      <NumberedChallenges {...skillAssessment.challenges} />
      <MethodCards {...skillAssessment.method} />
      <FeatureCards {...skillAssessment.assessmentMethods} />
      <StepFlow {...skillAssessment.stepFlow} />
      <IllustrativeTable {...skillAssessment.table} />
      <FeatureCards {...skillAssessment.outcomes} />
      <LinkCard {...skillAssessment.softwareLink} />
      <Accordion {...skillAssessment.faq} />
      <RelatedLinks {...skillAssessment.related} />
      <CtaBand {...skillAssessment.cta} />
    </>
  )
}

export default SkillAssessment
