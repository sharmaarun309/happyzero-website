function base(props) {
  return {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
  }
}

export function HamburgerIcon(props) {
  return (
    <svg {...base(props)}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base(props)}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base(props)}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function ChevronRightIcon(props) {
  return (
    <svg {...base(props)}>
      <polyline points="9 6 15 12 9 18" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base(props)}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function TalentIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="8.5" cy="8" r="2.75" />
      <circle cx="16" cy="9" r="2.25" />
      <path d="M3 20c0-3.1 2.5-5.5 5.5-5.5S14 16.9 14 20" />
      <path d="M14.5 14.7c2.4.2 4.5 2.3 4.5 5.3" />
    </svg>
  )
}

export function AcademyIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M2 9.5 12 5l10 4.5-10 4.5L2 9.5Z" />
      <path d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5" />
      <path d="M21 9.5V15" />
    </svg>
  )
}

export function YoaIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="16.5" x2="12" y2="20" />
      <path d="M7.5 12.5 10 10l2 2 4.5-4.5" />
    </svg>
  )
}

export function QmsIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 5 6v5.5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-2.5Z" />
      <polyline points="9 12 11.2 14.2 15.5 9.8" />
    </svg>
  )
}

export function PersonIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7" />
    </svg>
  )
}

export function GearIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.4M12 18.1v2.4M4.6 7.2l2.1 1.2M17.3 15.6l2.1 1.2M4.6 16.8l2.1-1.2M17.3 8.4l2.1-1.2M3.5 12h2.4M18.1 12h2.4" />
    </svg>
  )
}

export function SparkleIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7 10.4 12.2 5 10.6 10.4 9 12 3.5Z" />
      <path d="M19 16.5v3M17.5 18h3" />
    </svg>
  )
}

export function SunIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
    </svg>
  )
}

export function DocumentIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M7 3.5h7l3 3v14H7Z" />
      <path d="M14 3.5v3h3" />
      <line x1="9.5" y1="12" x2="14.5" y2="12" />
      <line x1="9.5" y1="15.5" x2="14.5" y2="15.5" />
    </svg>
  )
}

export function PersonAddIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="10" cy="8" r="3.2" />
      <path d="M3.5 20c0-3.7 2.9-6.3 6.5-6.3s6.5 2.6 6.5 6.3" />
      <line x1="18" y1="4.5" x2="18" y2="9.5" />
      <line x1="15.5" y1="7" x2="20.5" y2="7" />
    </svg>
  )
}

export function BarChartIcon(props) {
  return (
    <svg {...base(props)}>
      <line x1="5" y1="20" x2="5" y2="13" />
      <line x1="12" y1="20" x2="12" y2="8" />
      <line x1="19" y1="20" x2="19" y2="4" />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M10 8.5 15.5 12 10 15.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base(props)}>
      <polyline points="5 12.5 9.5 17 19 6.5" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l4 2.2" />
    </svg>
  )
}

export function TargetIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SearchScopeIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="20" y1="20" x2="15.3" y2="15.3" />
    </svg>
  )
}

export function FactoryIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 20V11l5 3.2V11l5 3.2V9l5 3.2V20Z" />
      <line x1="3.5" y1="20" x2="20.5" y2="20" />
      <path d="M18.5 9V5.5h2V9" />
    </svg>
  )
}

export function BrainIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M9 4.5a3 3 0 0 0-3 3v1a3 3 0 0 0-1.5 5.4A3 3 0 0 0 7 19h2" />
      <path d="M15 4.5a3 3 0 0 1 3 3v1a3 3 0 0 1 1.5 5.4A3 3 0 0 1 17 19h-2" />
      <path d="M9 4.5v14.5M15 4.5v14.5" />
    </svg>
  )
}

export function ToolboxIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="9" width="18" height="10.5" rx="1.5" />
      <path d="M8.5 9V7a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 7v2" />
      <line x1="3" y1="14" x2="21" y2="14" />
      <line x1="10.5" y1="12.5" x2="13.5" y2="12.5" />
    </svg>
  )
}

export function BadgeIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="9.5" r="5.5" />
      <path d="M8.5 14.2 7 21l5-2.5 5 2.5-1.5-6.8" />
    </svg>
  )
}

export function BookIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 6.5c-1.6-1.3-3.8-2-6.5-2v13c2.7 0 4.9.7 6.5 2 1.6-1.3 3.8-2 6.5-2v-13c-2.7 0-4.9.7-6.5 2Z" />
      <line x1="12" y1="6.5" x2="12" y2="19.5" />
    </svg>
  )
}

export function RefreshIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.4L19 8.5" />
      <path d="M19.5 12a7.5 7.5 0 0 1-12.6 5.4L5 15.5" />
      <path d="M19 5.5v3h-3M5 18.5v-3h3" />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 5 6v5.5c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-2.5Z" />
    </svg>
  )
}

export function WrenchIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4.5 16.5a1.8 1.8 0 0 0 2.5 2.5l4.8-4.8a4 4 0 0 1 5.4-5.4l-2.6 2.6-1.8-1.8 2.6-2.6Z" />
    </svg>
  )
}

export function TrophyIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M7 4.5h10v4a5 5 0 0 1-10 0v-4Z" />
      <path d="M7 5.5H4v1.5a3 3 0 0 0 3 3M17 5.5h3v1.5a3 3 0 0 1-3 3" />
      <path d="M12 13.5v3M9 19.5h6M9.5 19.5l.5-2.5h4l.5 2.5" />
    </svg>
  )
}
