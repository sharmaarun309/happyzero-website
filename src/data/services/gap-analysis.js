import {
  DocumentIcon,
  GearIcon,
  PersonIcon,
  QmsIcon,
  SearchScopeIcon,
  ShieldIcon,
  StackIcon,
} from '../../components/icons'

const contactHref = '/contact?service=gap-analysis'

export const gapAnalysis = {
  hero: {
    eyebrow: 'Our services',
    title: 'From gaps to a system that works.',
    description:
      'Assess your management system against the standard, find the gaps, and put practical solutions in place that your team can sustain.',
    ctaLabel: 'Talk to an expert',
    ctaTo: contactHref,
    imageSrc: `${import.meta.env.BASE_URL}images/services/gap-analysis-hero.webp`,
    imageAlt: 'IMS / QMS Gap Analysis & Implementation',
  },

  standards: {
    label: 'Standards we work with',
    items: ['ISO 9001', 'IATF 16949', 'ISO 14001', 'ISO 45001', 'Integrated management system (IMS)'],
  },

  intro: {
    eyebrow: 'The problem',
    title: 'Built to run the business, not only to pass an audit',
    paragraphs: [
      'Many management systems are built to pass an audit, not to run the business. Procedures sit in folders, records are filled in after the fact, and the system depends on one or two people who know how it works.',
      'We compare your system with the standard and, just as importantly, with how work is actually done on the floor. The result is a clear gap list and a plan your team can carry out.',
    ],
  },

  helpsYou: {
    eyebrow: 'Why it works',
    title: 'Our work helps you',
    items: [
      { name: 'See exactly where your system meets the standard and where it does not', Icon: SearchScopeIcon },
      { name: 'Simplify documents and records so people actually use them', Icon: DocumentIcon },
      { name: 'Prepare for certification, surveillance and customer audits', Icon: ShieldIcon },
    ],
  },

  whatWeDo: {
    eyebrow: 'Our services',
    title: 'What we do',
    items: [
      {
        title: 'Gap analysis',
        description:
          'A clause-by-clause review, a walk of the shop floor and a check of records against the standard you choose.',
      },
      {
        title: 'Process mapping',
        description: 'Processes, owners, inputs, outputs and controls, described in simple language.',
      },
      {
        title: 'Document simplification',
        description: 'Fewer documents, clearer procedures, work instructions and formats people will use.',
      },
      {
        title: 'Implementation support',
        description: 'We work with your team to put processes, controls and records in place.',
      },
      {
        title: 'Internal audit and management review',
        description: 'Prepare your first cycle and close the findings.',
      },
      {
        title: 'Certification audit support',
        description: 'We prepare your team for the audit. We do not issue certificates.',
      },
    ],
  },

  gapFlow: {
    eyebrow: 'How it works',
    title: 'How the gap analysis works',
    steps: ['Clause review', 'Shop-floor walk', 'Records check', 'Gap register', 'Roadmap'],
  },

  gapRegister: {
    eyebrow: 'See it in practice',
    title: 'Sample gap register',
    description: 'A simplified view of how findings come together, for illustration only.',
    columns: ['Area', 'Gap observed', 'Priority', 'Suggested owner'],
    rows: [
      {
        area: 'Document control',
        gap: 'Controlled copies not consistent across areas',
        priority: 'High',
        owner: 'Quality head',
      },
      {
        area: 'Training and competence',
        gap: 'Role requirements not defined for some roles',
        priority: 'Medium',
        owner: 'HR and department heads',
      },
      {
        area: 'Corrective action',
        gap: 'Root cause not recorded on some actions',
        priority: 'High',
        owner: 'Quality head',
      },
      {
        area: 'Internal audit',
        gap: 'Programme does not cover all processes',
        priority: 'Medium',
        owner: 'Management representative',
      },
      {
        area: 'Management review',
        gap: 'Inputs incomplete',
        priority: 'Low',
        owner: 'Top management',
      },
    ],
  },

  implementationFlow: {
    eyebrow: 'How it works',
    title: 'How implementation runs',
    steps: [
      'Assess',
      'Design processes',
      'Simplify documents',
      'Implement',
      'Train',
      'Internal audit and management review',
      'Certification audit support',
    ],
  },

  integratedBenefits: {
    eyebrow: 'Why it matters',
    title: 'Why an integrated system',
    items: [
      { name: 'One set of processes for several standards', Icon: StackIcon },
      { name: 'Fewer duplicate documents and audits', Icon: GearIcon },
      { name: 'Clearer ownership across functions', Icon: PersonIcon },
    ],
  },

  digitalQmsLink: {
    eyebrow: 'Prefer to run it yourself?',
    label: 'Run your system digitally',
    name: 'Digital QMS',
    to: '/digital-qms',
    Icon: QmsIcon,
    cardClass: 'bg-blue-50',
    iconClass: 'bg-blue-100 text-blue-900',
    nameClass: 'text-blue-900',
  },

  faq: {
    eyebrow: 'Questions',
    title: 'A few quick answers',
    items: [
      {
        question: 'Do you issue certificates?',
        answer:
          'No. Certificates are issued by accredited certification bodies. We prepare your system and your team so you go into the certification audit ready.',
      },
      {
        question: 'Should we choose one standard or an integrated system?',
        answer:
          'It depends on the standards your customers and markets ask for. Many organisations start with one and add others; an integrated approach avoids running separate systems side by side.',
      },
      {
        question: 'Will our documentation get heavier?',
        answer:
          'The aim is the opposite. We reduce documents to what each process needs, in plain language your team will use.',
      },
      {
        question: 'What if a customer audit is close?',
        answer:
          'We can start with a focused readiness review of the areas the audit will cover, then close the most important gaps first.',
      },
    ],
  },

  related: {
    eyebrow: 'Related services',
    title: 'Explore our other services',
    links: [
      { name: 'Skill Assessment & Gap Identification', to: '/services/skill-assessment' },
      { name: 'In-house Training & Capability Development', to: '/services/training' },
      { name: 'QMS & Internal Audit Outsourcing', to: '/services/audit-outsourcing' },
    ],
    chip: { label: 'Automotive manufacturing', to: '/industries/automotive' },
  },

  cta: {
    title: 'Ready to close the gaps?',
    description: 'Talk to an expert about your management system.',
    ctaLabel: 'Talk to an expert',
    ctaTo: contactHref,
  },
}

export default gapAnalysis
