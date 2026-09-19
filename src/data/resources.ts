export interface NavResource {
  tag: string
  title: string
  copy: string
  to: string
  imageClass: string
}

// Surfaced in the header's Resources dropdown ("Latest" row, up to 2 shown).
export const navResources: NavResource[] = [
  {
    tag: 'Insights',
    title: 'From Compliance to Competitive Advantage',
    copy: 'How a stronger quality system can drive real business value.',
    to: '/resources',
    imageClass: 'from-neutral-300 to-neutral-100',
  },
  {
    tag: 'Guides',
    title: 'A Practical Guide to Root Cause Analysis',
    copy: 'Step-by-step approach with tools from real manufacturing environments.',
    to: '/resources',
    imageClass: 'from-emerald-200 to-emerald-50',
  },
]
