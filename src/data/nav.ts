import {
  BadgeIcon,
  BarChartIcon,
  BookIcon,
  BoxIcon,
  DocumentIcon,
  FactoryIcon,
  GearIcon,
  PersonIcon,
  QmsIcon,
  ShieldIcon,
  TalentIcon,
  TruckIcon,
  YoaIcon,
} from '../components/icons'

export interface NavItem {
  name: string
  subtitle: string
  to: string
  Icon: (props: Record<string, unknown>) => JSX.Element
  iconClass?: string
  disabled?: boolean
  badge?: string
}

export interface NavPanel {
  label: string
  eyebrow: string
  intro: string
  hubTo: string
  items: NavItem[]
}

// Software dropdown (header + mobile menu + footer "Software" column).
// Academy intentionally excluded — no Academy page link anywhere in nav.
export const softwareItems: NavItem[] = [
  {
    name: 'Talent',
    subtitle: 'Skills Intelligence',
    to: '/talent',
    Icon: TalentIcon,
    iconClass: 'bg-emerald-100 text-emerald-600',
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

// Services mega-panel. Reordered only — every name, subtitle, icon and url
// is unchanged from before; only list position moved.
export const servicesPanel: NavPanel = {
  label: 'Services',
  eyebrow: 'Services',
  intro:
    'Manufacturing expertise, delivered. Practical support for quality, capability and performance.',
  hubTo: '/services',
  items: [
    {
      name: 'Skill Assessment & Gap Identification',
      subtitle: 'Find gaps and create development plans',
      to: '/services',
      Icon: BarChartIcon,
    },
    {
      name: 'In-house Training & Capability Development',
      subtitle: 'Role-based training to build the skills you need',
      to: '/services',
      Icon: PersonIcon,
    },
    {
      name: 'IMS / QMS Gap Analysis & Implementation',
      subtitle: 'Assess, identify gaps and implement solutions',
      to: '/services',
      Icon: GearIcon,
    },
    {
      name: 'QMS & Internal Audit Outsourcing',
      subtitle: 'Experienced auditors for internal and customer audits',
      to: '/services',
      Icon: DocumentIcon,
    },
  ],
}

// Resources mega-panel — replaces the old Articles/Guides/Templates/Videos
// labels with the 4 real content types.
export const resourcesPanel: NavPanel = {
  label: 'Resources',
  eyebrow: 'Resources',
  intro:
    'Ideas for a better tomorrow. Insights, guides and practical tools for manufacturing teams.',
  hubTo: '/resources',
  items: [
    {
      name: 'Blogs',
      subtitle: 'Short, practical reads',
      to: '/resources/blogs',
      Icon: DocumentIcon,
    },
    {
      name: 'Brochures',
      subtitle: 'Product and service overviews',
      to: '/resources/brochures',
      Icon: BookIcon,
    },
    {
      name: 'Case Studies',
      subtitle: 'Real-world results',
      to: '/resources/case-studies',
      Icon: BadgeIcon,
    },
    {
      name: 'Infographics',
      subtitle: 'Visual guides at a glance',
      to: '/resources/infographics',
      Icon: BarChartIcon,
    },
  ],
}

// Industries mega-panel — only Automotive is live; the rest are placeholders.
export const industriesPanel: NavPanel = {
  label: 'Industries',
  eyebrow: 'Industries',
  intro:
    "Built for manufacturing. Practical support shaped around your industry's standards and challenges.",
  hubTo: '/industries',
  items: [
    {
      name: 'Automotive manufacturing',
      subtitle: 'Quality and compliance for automotive plants',
      to: '/industries/automotive',
      Icon: TruckIcon,
    },
    {
      name: 'Chemical',
      subtitle: 'Process safety and regulatory support',
      to: '',
      Icon: BoxIcon,
      disabled: true,
      badge: 'Coming soon',
    },
    {
      name: 'Food manufacturing',
      subtitle: 'Hygiene, safety and quality systems',
      to: '',
      Icon: FactoryIcon,
      disabled: true,
      badge: 'Coming soon',
    },
    {
      name: 'Pharma',
      subtitle: 'GMP-aligned quality and compliance',
      to: '',
      Icon: ShieldIcon,
      disabled: true,
      badge: 'Coming soon',
    },
  ],
}

// Academy now points off-site to SubMastery rather than the internal /academy
// page. That page's files are kept but intentionally left unlinked.
export const academyLink = {
  label: 'Academy',
  href: 'https://submastery.com',
}

export const aboutLink = { label: 'About', to: '/about' }
