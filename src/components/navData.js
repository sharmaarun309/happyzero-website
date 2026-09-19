import {
  AcademyIcon,
  BarChartIcon,
  BookIcon,
  DocumentIcon,
  GearIcon,
  PersonIcon,
  PlayIcon,
  QmsIcon,
  StackIcon,
  TalentIcon,
  YoaIcon,
} from './icons'

export const softwareItems = [
  {
    name: 'Talent',
    subtitle: 'Skills Intelligence',
    to: '/talent',
    Icon: TalentIcon,
    iconClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Academy',
    subtitle: 'Capability Development',
    to: '/academy',
    Icon: AcademyIcon,
    iconClass: 'bg-orange-100 text-[#FF6A00]',
  },
  {
    name: 'YOA',
    subtitle: 'Your Own Manufacturing Academy',
    to: '/yoa',
    Icon: YoaIcon,
    iconClass: 'bg-blue-100 text-blue-900',
  },
  {
    name: 'Digital QMS',
    subtitle: 'Quality Management',
    to: '/digital-qms',
    Icon: QmsIcon,
    iconClass: 'bg-sky-100 text-sky-600',
  },
]

// Header mega-panel content for the Services nav item.
export const servicesPanel = {
  label: 'Services',
  eyebrow: 'Services',
  intro:
    'Manufacturing expertise, delivered. Practical support for quality, capability and performance.',
  hubTo: '/services',
  items: [
    {
      name: 'QMS & Internal Audit Outsourcing',
      subtitle: 'Experienced auditors for internal and customer audits',
      to: '/services',
      Icon: DocumentIcon,
    },
    {
      name: 'IMS / QMS Gap Analysis & Implementation',
      subtitle: 'Assess, identify gaps and implement solutions',
      to: '/services',
      Icon: GearIcon,
    },
    {
      name: 'In-house Training & Capability Development',
      subtitle: 'Role-based training to build the skills you need',
      to: '/services',
      Icon: PersonIcon,
    },
    {
      name: 'Skill Assessment & Gap Identification',
      subtitle: 'Find gaps and create development plans',
      to: '/services',
      Icon: BarChartIcon,
    },
  ],
}

// Header mega-panel content for the Resources nav item.
export const resourcesPanel = {
  label: 'Resources',
  eyebrow: 'Resources',
  intro:
    'Ideas for a better tomorrow. Insights, guides and practical tools for manufacturing teams.',
  hubTo: '/resources',
  items: [
    {
      name: 'Articles & Insights',
      subtitle: 'Short, practical reads',
      to: '/resources',
      Icon: DocumentIcon,
    },
    {
      name: 'Guides & Frameworks',
      subtitle: 'In-depth knowledge',
      to: '/resources',
      Icon: BookIcon,
    },
    {
      name: 'Templates & Checklists',
      subtitle: 'Ready to use',
      to: '/resources',
      Icon: StackIcon,
    },
    {
      name: 'Videos & Webinars',
      subtitle: 'Learn from experts',
      to: '/resources',
      Icon: PlayIcon,
    },
  ],
}

// Academy now points off-site to SubMastery rather than the internal /academy page.
export const academyLink = {
  label: 'Academy',
  href: 'https://submastery.com',
}

export const aboutLink = { label: 'About', to: '/about' }
