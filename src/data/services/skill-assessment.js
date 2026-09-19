import {
  BarChartIcon,
  BrainIcon,
  BadgeIcon,
  DocumentIcon,
  GearIcon,
  PersonAddIcon,
  PersonIcon,
  RefreshIcon,
  SearchScopeIcon,
  TalentIcon,
  TargetIcon,
  ToolboxIcon,
} from '../../components/icons'

const contactHref = '/contact?service=skill-assessment'

export const skillAssessment = {
  hero: {
    eyebrow: 'Our services',
    title: 'Know what your people can do. Know what they need.',
    description:
      'A structured way to see current capability, find the gaps that matter and plan what to do next.',
    ctaLabel: 'Talk to an expert',
    ctaTo: contactHref,
    imageSrc: `${import.meta.env.BASE_URL}images/services/skill-assessment-hero.webp`,
    imageAlt: 'Skill Assessment & Gap Identification',
  },

  intro: {
    eyebrow: 'The problem',
    title: "It's not a training problem. It's a capability problem.",
    paragraphs: [
      "Training gets scheduled because it's always scheduled, not because anyone has confirmed it closes a real gap. Without a clear picture of what people can already do, it's guesswork dressed up as a plan.",
      'A capability view separates what’s actually missing from what simply hasn’t been checked — so effort goes where it changes outcomes, not just where it’s easiest to run a course.',
    ],
  },

  challenges: {
    eyebrow: 'Why this matters',
    title: 'Familiar signs of a capability gap',
    items: [
      {
        title: 'Training without a clear gap',
        description:
          'Sessions get scheduled and attended, but no one can say which specific gap they were meant to close.',
      },
      {
        title: 'Skill matrices that live in spreadsheets',
        description: "Records exist, but they're out of date the moment someone changes role, shift or line.",
      },
      {
        title: 'Unclear role requirements',
        description:
          "What 'competent' looks like for a role was never written down, so assessment becomes a matter of opinion.",
      },
      {
        title: 'Reliance on a handful of experts',
        description: "A few people carry the knowledge the whole line depends on, with no clear plan to spread it.",
      },
      {
        title: 'New technology, new joiners',
        description: "New equipment and new people arrive faster than anyone can confirm they're ready for it.",
      },
      {
        title: 'Audit findings that trace back to competence',
        description: 'Findings keep pointing to the same root cause: ISO 9001 clause 7.2, Competence.',
      },
    ],
  },

  method: {
    eyebrow: 'How we look at capability',
    title: 'Capability has three parts',
    items: [
      { name: 'Mindset', copy: 'How they think and behave.', Icon: BrainIcon },
      { name: 'Skillset', copy: 'What they know and can do.', Icon: BadgeIcon },
      { name: 'Toolset', copy: 'What machines, systems and technology they can use.', Icon: ToolboxIcon },
    ],
    equation: 'Mindset + Skillset + Toolset = Manufacturing capability',
  },

  assessmentMethods: {
    eyebrow: 'How we assess',
    title: 'Four ways to see the full picture',
    items: [
      { name: 'Self assessment', copy: 'People reflect on what they can do today, in their own words.', Icon: PersonIcon },
      {
        name: 'Manager assessment',
        copy: 'A manager or supervisor view of demonstrated performance on the job.',
        Icon: PersonAddIcon,
      },
      {
        name: 'Practical observation',
        copy: 'Watching the work happen and checking it against a defined standard.',
        Icon: SearchScopeIcon,
      },
      {
        name: 'Knowledge check',
        copy: 'A short check of the understanding behind the skill, not just the action.',
        Icon: DocumentIcon,
      },
    ],
  },

  stepFlow: {
    eyebrow: 'Our approach',
    title: 'A repeatable process, not a one-off exercise',
    steps: ['Define required capability', 'Assess current', 'Map gaps', 'Prioritise', 'Plan development', 'Reassess'],
  },

  table: {
    eyebrow: 'See it in practice',
    title: 'A capability view across roles and skills',
    description: 'A simplified view of how results come together — generic roles and skills, for illustration only.',
    skills: ['Equipment setup', 'Quality checks', 'Changeover', 'Safety procedure'],
    rows: [
      { role: 'Team member', values: ['developing', 'competent', 'not-started', 'competent'] },
      { role: 'Shift lead', values: ['competent', 'can-coach', 'developing', 'can-coach'] },
      { role: 'Technician', values: ['can-coach', 'competent', 'competent', 'competent'] },
      { role: 'New joiner', values: ['not-started', 'developing', 'not-started', 'developing'] },
    ],
  },

  outcomes: {
    eyebrow: 'What you get',
    title: 'A clear, usable set of outputs',
    columns: 5,
    items: [
      { name: 'Capability framework', copy: "A defined view of what 'competent' looks like, role by role.", Icon: TargetIcon },
      {
        name: 'Current vs required report',
        copy: 'A side-by-side view of where people are against where they need to be.',
        Icon: BarChartIcon,
      },
      {
        name: 'Priority gap list',
        copy: 'The gaps that matter most, ranked so effort goes to the right place first.',
        Icon: GearIcon,
      },
      { name: 'Development plan', copy: 'A practical plan for closing the gaps that were found.', Icon: DocumentIcon },
      {
        name: 'Reassessment plan',
        copy: 'A defined point to check progress and confirm the gap has closed.',
        Icon: RefreshIcon,
      },
    ],
  },

  softwareLink: {
    eyebrow: 'Prefer to run it yourself?',
    label: 'Run it as software',
    name: 'Talent',
    subtitle: 'Skill Assessment & Gap Identification, built into software you run yourself.',
    to: '/talent',
    Icon: TalentIcon,
  },

  faq: {
    eyebrow: 'Questions',
    title: 'A few quick answers',
    items: [
      {
        question: 'Who assesses?',
        answer:
          "A mix of self assessment, manager input and, where useful, an independent practical check — matched to the role and what's being assessed.",
      },
      {
        question: 'Is this only for the shop floor?',
        answer:
          'No. The same approach works for any role where capability can be defined and observed, on the floor or off it.',
      },
      {
        question: 'Do we need Talent to use the service?',
        answer:
          "No. The service works on its own. Talent is there if you'd rather run assessment and gap tracking as software.",
      },
      {
        question: 'What happens after the report?',
        answer:
          'You get a prioritised gap list and a development plan, with a reassessment point agreed upfront to check progress.',
      },
    ],
  },

  related: {
    eyebrow: 'Related services',
    title: 'Explore our other services',
    links: [
      { name: 'In-house Training & Capability Development', to: '/services/training' },
      { name: 'IMS / QMS Gap Analysis & Implementation', to: '/services/gap-analysis' },
      { name: 'QMS & Internal Audit Outsourcing', to: '/services/audit-outsourcing' },
    ],
    chip: { label: 'Automotive manufacturing', to: '/industries/automotive' },
  },

  cta: {
    title: 'Ready to know what your people can do?',
    description: 'Talk to an expert about building a capability view for your team.',
    ctaLabel: 'Talk to an expert',
    ctaTo: contactHref,
  },
}

export default skillAssessment
