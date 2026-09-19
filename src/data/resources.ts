export type ResourceCategory = 'blogs' | 'brochures' | 'case-studies' | 'infographics'

export interface Resource {
  id: string
  category: ResourceCategory
  title: string
  description: string
  date: string
  image?: string
  url: string
  fileUrl?: string
  status: 'published' | 'draft'
}

export interface CategoryMeta {
  slug: ResourceCategory
  label: string
  typeTag: string
  to: string
  description: string
}

// The four Resources landing pages. Order matches the header dropdown.
export const resourceCategories: CategoryMeta[] = [
  {
    slug: 'blogs',
    label: 'Blogs',
    typeTag: 'Blog',
    to: '/resources/blogs',
    description: 'Short, practical reads on capability, quality and manufacturing systems.',
  },
  {
    slug: 'brochures',
    label: 'Brochures',
    typeTag: 'Brochure',
    to: '/resources/brochures',
    description: 'Printable overviews of what we do and how we work with manufacturing teams.',
  },
  {
    slug: 'case-studies',
    label: 'Case studies',
    typeTag: 'Case study',
    to: '/resources/case-studies',
    description: 'Real customer outcomes, documented once the work is done.',
  },
  {
    slug: 'infographics',
    label: 'Infographics',
    typeTag: 'Infographic',
    to: '/resources/infographics',
    description: 'One-page visuals that explain an idea at a glance.',
  },
]

// Every published resource on the site. Blogs point at an internal route;
// brochures and infographics point at a file in public/ via fileUrl.
export const resources: Resource[] = [
  {
    id: 'why-skills-first',
    category: 'blogs',
    title: 'Why manufacturing needs a skills-first approach',
    description:
      'Machines and software only perform as well as the people running them. A look at what capability really means and how to start measuring it.',
    date: 'September 2026',
    url: '/resources/blogs/why-skills-first',
    status: 'published',
  },
  {
    id: 'capa-that-sticks',
    category: 'blogs',
    title: 'From audit findings to lasting fixes',
    description:
      'Why the same findings keep coming back, and a simple loop for corrective action that actually holds.',
    date: 'September 2026',
    url: '/resources/blogs/capa-that-sticks',
    status: 'published',
  },
  {
    id: 'happyzero-services-overview',
    category: 'brochures',
    title: 'HappyZero services overview',
    description:
      'Our four services, how we work and the software ecosystem behind them, in four printable pages.',
    date: 'September 2026',
    url: '/resources/brochures',
    fileUrl: 'brochures/happyzero-services-overview.html',
    status: 'published',
  },
  {
    id: 'skill-assessment-overview',
    category: 'brochures',
    title: 'Skill assessment and gap identification',
    description:
      'How we define required capability, assess what people can do today and turn the gap into a plan.',
    date: 'September 2026',
    url: '/resources/brochures',
    fileUrl: 'brochures/skill-assessment-overview.html',
    status: 'published',
  },
  {
    id: 'capability-model',
    category: 'infographics',
    title: 'Mindset + Skillset + Toolset',
    description: 'The three parts of manufacturing capability, and the loop that keeps them current.',
    date: 'September 2026',
    url: '/resources/infographics',
    fileUrl: 'infographics/capability-model.svg',
    status: 'published',
  },
  {
    id: 'eighth-waste',
    category: 'infographics',
    title: 'The 8th waste: human intelligence',
    description:
      'The seven wastes manufacturing already knows, and the one that is hardest to see.',
    date: 'September 2026',
    url: '/resources/infographics',
    fileUrl: 'infographics/eighth-waste.svg',
    status: 'published',
  },
]

export function resourcesByCategory(category: ResourceCategory): Resource[] {
  return resources.filter((item) => item.category === category && item.status === 'published')
}

export interface NavResource {
  tag: string
  title: string
  copy: string
  to: string
  imageClass: string
  status: 'published' | 'draft'
}

const navImageClass: Record<ResourceCategory, string> = {
  blogs: 'from-neutral-900 to-neutral-700',
  brochures: 'from-orange-300 to-orange-100',
  'case-studies': 'from-neutral-300 to-neutral-100',
  infographics: 'from-neutral-800 to-orange-200',
}

// Surfaced in the header's Resources dropdown ("Latest" row, up to 2 shown).
// Derived from `resources` so the dropdown never drifts from the landing
// pages. Only entries with status "published" are ever shown; everything
// else falls back to the "New resources coming soon." muted line.
export const navResources: NavResource[] = resources
  .filter((item) => item.status === 'published')
  .map((item) => ({
    tag: resourceCategories.find((c) => c.slug === item.category)!.typeTag,
    title: item.title,
    copy: item.description,
    to: item.url,
    imageClass: navImageClass[item.category],
    status: item.status,
  }))
