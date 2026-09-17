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
