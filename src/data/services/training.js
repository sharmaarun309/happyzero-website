import {
  BadgeIcon,
  BarChartIcon,
  CheckIcon,
  ChatIcon,
  ClockIcon,
  ExternalLinkIcon,
  FactoryIcon,
  PersonAddIcon,
  SearchScopeIcon,
  StackIcon,
  ToolboxIcon,
  YoaIcon,
} from '../../components/icons'

const contactHref = '/contact?service=training'

export const training = {
  hero: {
    eyebrow: 'Our services',
    title: 'Training that becomes capability.',
    description:
      'Role-based, hands-on training delivered at your site or online, built around your real processes and problems.',
    ctaLabel: 'Talk to an expert',
    ctaTo: contactHref,
    imageSrc: `${import.meta.env.BASE_URL}images/services/training-hero.webp`,
    imageAlt: 'In-house Training & Capability Development',
  },

  intro: {
    eyebrow: 'The problem',
    title: "Training that doesn't end when the session ends",
    paragraphs: [
      'Most manufacturing training ends when the session ends. People go back to the line, the same habits take over, and the same defects, audit findings and customer complaints come back.',
      'We build training around your own processes, drawings, records and problems, so people practise on the work they actually do and leave with a skill they can use the next day.',
    ],
  },

  helpsYou: {
    eyebrow: 'Why it works',
    title: 'Our training helps you',
    items: [
      {
        name: 'Build practical skills for every role',
        copy: 'From operators to managers.',
        Icon: PersonAddIcon,
      },
      {
        name: 'Use your own work as the exercise',
        copy: 'Your own cases, defects and audit findings.',
        Icon: SearchScopeIcon,
      },
      {
        name: 'Show it was learned',
        copy: 'Evidence that people learned and can apply it.',
        Icon: CheckIcon,
      },
    ],
  },

  trainingAreas: {
    eyebrow: 'Training areas',
    title: 'Six areas we can help with',
    items: [
      {
        title: 'Quality management systems',
        description:
          'ISO 9001 and IATF 16949 requirements, ISO 14001 and ISO 45001 awareness, and internal auditor training.',
      },
      {
        title: 'Core tools',
        description: 'APQP, FMEA, SPC, MSA and PPAP, taught with your own parts and processes.',
      },
      {
        title: 'Problem solving',
        description: '8D, 5 Why, fishbone and root cause analysis on real shop-floor problems.',
      },
      {
        title: 'Shop-floor quality basics',
        description: 'Seven QC tools, inspection methods, 5S and standard work for operators and supervisors.',
      },
      {
        title: 'Supervisors and team leaders',
        description: 'Running daily reviews, leading a team and driving corrective action.',
      },
      {
        title: 'New joiner foundation',
        description: 'A structured start in quality, safety and process discipline.',
      },
    ],
  },

  delivery: {
    eyebrow: 'Delivery',
    title: 'However it works best for you',
    items: [
      { name: 'On-site', copy: 'Delivered at your plant.', Icon: FactoryIcon },
      { name: 'Live online', copy: 'Delivered live, online.', Icon: ChatIcon },
      {
        name: 'Blended',
        copy: 'Short sessions combined with on-the-job assignments.',
        Icon: StackIcon,
      },
    ],
  },

  learningFlow: {
    eyebrow: 'How it works',
    title: 'Learn, practise, apply',
    description: 'Built on your own cases.',
    steps: ['Learn', 'Practice', 'Apply', 'Assess', 'Improve'],
  },

  approachFlow: {
    eyebrow: 'Our approach',
    title: 'How we build your programme',
    steps: ['Needs analysis', 'Design', 'Deliver', 'Assess', 'Follow up'],
  },

  evidence: {
    eyebrow: 'Proof it happened',
    title: 'Evidence that training worked',
    columns: 4,
    items: [
      { name: 'Attendance records', Icon: ClockIcon },
      { name: 'Before and after assessments', Icon: BarChartIcon },
      { name: 'Practical assignments', Icon: ToolboxIcon },
      { name: 'Participation certificates', Icon: BadgeIcon },
    ],
  },

  publicCoursesLink: {
    label: 'Public courses',
    href: 'https://submastery.com',
    Icon: ExternalLinkIcon,
    cardClass: 'bg-orange-50',
    iconClass: 'bg-orange-100 text-[#FF6A00]',
    nameClass: 'text-[#FF6A00]',
  },

  yoaLink: {
    label: 'Run training at scale',
    name: 'YOA',
    to: '/yoa',
    Icon: YoaIcon,
    cardClass: 'bg-blue-50',
    iconClass: 'bg-blue-100 text-blue-900',
    nameClass: 'text-blue-900',
  },

  faq: {
    eyebrow: 'Questions',
    title: 'A few quick answers',
    items: [
      {
        question: 'Can the training be customised?',
        answer: 'Yes. Standard modules are adapted to your processes, products and problems.',
      },
      {
        question: 'How big can a group be?',
        answer:
          'Hands-on sessions work best in small groups; we agree the format with you before we start.',
      },
      {
        question: 'Can it be specific to a role?',
        answer: 'Yes. Programs are built by role, such as operator, inspector, engineer or supervisor.',
      },
      {
        question: 'How do we know it worked?',
        answer: 'Through assessments, on-the-job assignments and a follow-up review.',
      },
    ],
  },

  related: {
    eyebrow: 'Related services',
    title: 'Explore our other services',
    links: [
      { name: 'Skill Assessment & Gap Identification', to: '/services/skill-assessment' },
      { name: 'IMS / QMS Gap Analysis & Implementation', to: '/services/gap-analysis' },
      { name: 'QMS & Internal Audit Outsourcing', to: '/services/audit-outsourcing' },
    ],
    chip: { label: 'Automotive manufacturing', to: '/industries/automotive' },
  },

  cta: {
    title: 'Ready to turn training into capability?',
    description: 'Talk to an expert about building a training programme around your own processes.',
    ctaLabel: 'Talk to an expert',
    ctaTo: contactHref,
  },
}

export default training
