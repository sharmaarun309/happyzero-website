import { AcademyIcon, QmsIcon, TalentIcon, YoaIcon } from './icons'

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

export const primaryNavLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Academy', to: '/academy' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
]
