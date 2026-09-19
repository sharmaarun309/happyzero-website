import {
  BarChartIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  DocumentIcon,
  RefreshIcon,
  SearchScopeIcon,
  SparkleIcon,
} from '../../components/icons'

const contactHref = '/contact?service=audit-outsourcing'

export const auditOutsourcing = {
  hero: {
    eyebrow: 'Our services',
    title: 'Experienced auditors, on demand.',
    description:
      'Qualified auditors to plan, conduct and report your internal and supplier audits, so your team can focus on closing findings.',
    ctaLabel: 'Talk to an expert',
    ctaTo: contactHref,
    imageSrc: `${import.meta.env.BASE_URL}images/services/audit-outsourcing-hero.webp`,
    imageAlt: 'QMS & Internal Audit Outsourcing',
  },

  intro: {
    eyebrow: 'The problem',
    title: 'Audits that keep pace with production',
    paragraphs: [
      'Internal audits often fall behind because the same few people are also running production and quality. Audits get rushed, findings are thin and the audit programme slips.',
      "We provide experienced auditors who plan, conduct and report audits against your standards and your customers' requirements, and follow findings through to closure.",
    ],
  },

  helpsYou: {
    eyebrow: 'Why it works',
    title: 'Our audits help you',
    items: [
      { name: 'Keep the audit programme on schedule without stretching your team', Icon: ClockIcon },
      { name: 'Get independent, evidence-based findings', Icon: SearchScopeIcon },
      { name: 'Close nonconformities with a clear corrective action trail', Icon: CheckIcon },
    ],
  },

  auditTypes: {
    eyebrow: 'Coverage',
    title: 'Audit types we cover',
    items: [
      {
        title: 'QMS audits',
        description: 'System-level audits against ISO 9001, IATF 16949 or other standards you follow.',
      },
      {
        title: 'Process audits',
        description: 'Manufacturing process audits on the floor, checking the process as it actually runs.',
      },
      {
        title: 'Product audits',
        description: 'Verification of product against specification and customer requirements.',
      },
      {
        title: 'Supplier audits',
        description: "Second-party audits of your suppliers' systems and processes.",
      },
      {
        title: 'Customer-specific requirements checks',
        description: "Audits against your customers' own requirements.",
      },
      {
        title: 'Layered process audits',
        description: 'Short, frequent checks on critical steps by different levels of management.',
      },
    ],
  },

  auditFlow: {
    eyebrow: 'How it works',
    title: 'How an audit runs',
    steps: ['Plan', 'Prepare', 'Conduct', 'Report', 'Follow up on findings', 'Verify closure'],
  },

  annualProgramme: {
    eyebrow: 'See it in practice',
    title: 'An audit programme across the year',
    quarters: [
      { label: 'Q1', items: ['System audit', 'Supplier audits'] },
      { label: 'Q2', items: ['Process audits', 'Product audit'] },
      { label: 'Q3', items: ['Supplier audits', 'Process audits'] },
      { label: 'Q4', items: ['Product audit', 'Management review input'] },
    ],
  },

  whatYouGet: {
    eyebrow: 'What you get',
    title: 'What you get',
    columns: 4,
    items: [
      { name: 'An independent view', Icon: SearchScopeIcon },
      { name: 'Clear, evidence-based reports', Icon: DocumentIcon },
      { name: 'Follow-up until closure', Icon: RefreshIcon },
      { name: 'Inputs for management review', Icon: BarChartIcon },
    ],
  },

  waysToWork: {
    eyebrow: 'How to engage us',
    title: 'Ways to work with us',
    items: [
      { name: 'Per audit', copy: 'A single audit when you need it.', Icon: CheckIcon },
      { name: 'Annual programme', copy: 'Planned audits across the year.', Icon: CalendarIcon },
      { name: 'On-call support', copy: 'Auditors available when the workload peaks.', Icon: ClockIcon },
    ],
  },

  whatsNext: {
    eyebrow: "What's next",
    items: [
      {
        name: 'AI-assisted audit preparation and follow-up',
        copy: 'We are exploring ways to help auditors prepare faster and track actions more easily. This is a future direction, not a live feature.',
        Icon: SparkleIcon,
      },
    ],
  },

  faq: {
    eyebrow: 'Questions',
    title: 'A few quick answers',
    items: [
      {
        question: 'Who are the auditors?',
        answer: 'We agree auditor experience and audit scope with you before an engagement starts.',
      },
      {
        question: 'Can external auditors meet the internal audit requirement?',
        answer:
          'Standards ask that auditors are competent and objective. An external auditor can meet this. Your organisation still owns the audit programme and the follow-up.',
      },
      {
        question: 'What do the standards expect from internal audits?',
        answer:
          'ISO 9001 asks for planned internal audits by objective and impartial auditors. IATF 16949 goes further and expects system, manufacturing process and product audits.',
      },
      {
        question: 'How are findings closed?',
        answer:
          'Findings go into a corrective action plan with owners. We follow up and verify that the action worked before a finding is closed.',
      },
      {
        question: 'Is our information kept confidential?',
        answer: 'Yes. Confidentiality terms are agreed before an engagement starts.',
      },
    ],
  },

  related: {
    eyebrow: 'Related services',
    title: 'Explore our other services',
    links: [
      { name: 'Skill Assessment & Gap Identification', to: '/services/skill-assessment' },
      { name: 'In-house Training & Capability Development', to: '/services/training' },
      { name: 'IMS / QMS Gap Analysis & Implementation', to: '/services/gap-analysis' },
    ],
    chip: { label: 'Automotive manufacturing', to: '/industries/automotive' },
  },

  cta: {
    title: 'Keep your audit programme on track.',
    description: 'Talk to an expert about planning and running your audits.',
    ctaLabel: 'Talk to an expert',
    ctaTo: contactHref,
  },
}

export default auditOutsourcing
