import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AcademyIcon,
  ArrowRightIcon,
  BookIcon,
  DocumentIcon,
  FactoryIcon,
  GearIcon,
  PersonIcon,
  PlayIcon,
  QmsIcon,
  SearchIcon,
  TalentIcon,
  TargetIcon,
} from '../components/icons'
import { ArrowLink, SectionLabel } from '../components/ui'

const categories = ['All', 'Insights', 'Guides', 'Templates', 'Case Studies', 'Videos & Webinars']

const featuredSide = [
  {
    tag: 'Insights',
    tagClass: 'text-sky-600',
    title: 'Why Manufacturing Needs a Skills-First Approach',
    copy: 'People capability is the foundation for quality, productivity and growth.',
    imageClass: 'from-sky-200 to-sky-50',
  },
  {
    tag: 'Templates',
    tagClass: 'text-[#FF6A00]',
    title: 'Internal Audit Checklist (for Manufacturers)',
    copy: 'A practical checklist to help you plan and conduct effective internal audits.',
    imageClass: 'from-orange-200 to-orange-50',
  },
]

const latestResources = [
  {
    tag: 'Insights',
    title: 'From Compliance to Competitive Advantage',
    copy: 'How a stronger quality system can drive real business value in manufacturing.',
    action: 'Read',
    imageClass: 'from-neutral-300 to-neutral-100',
  },
  {
    tag: 'Guides',
    title: 'A Practical Guide to Root Cause Analysis',
    copy: 'Step-by-step approach with tools and examples from real manufacturing environments.',
    action: 'Read',
    imageClass: 'from-emerald-200 to-emerald-50',
  },
  {
    tag: 'Insights',
    title: 'The Role of AI in Manufacturing Quality',
    copy: 'From documentation to audits, how AI can augment quality teams.',
    action: 'Read',
    imageClass: 'from-sky-200 to-sky-50',
  },
  {
    tag: 'Templates',
    title: 'CAPA Report Template',
    copy: 'A ready-to-use template for effective root cause analysis and corrective action planning.',
    action: 'Download',
    imageClass: 'from-orange-200 to-orange-50',
  },
  {
    tag: 'Case Studies',
    title: 'Building a Skills-First Manufacturing Organization',
    copy: 'How one team closed critical capability gaps in under a year.',
    action: 'Read',
    imageClass: 'from-purple-200 to-purple-50',
  },
  {
    tag: 'Videos & Webinars',
    title: 'Digital Transformation on the Shop Floor',
    copy: 'A practical look at moving from spreadsheets to a connected quality system.',
    action: 'Watch',
    imageClass: 'from-sky-200 via-neutral-200 to-neutral-100',
  },
]

const formats = [
  { name: 'Articles & Insights', copy: 'Short, practical reads', Icon: DocumentIcon, iconClass: 'bg-orange-100 text-[#FF6A00]' },
  { name: 'Guides & Frameworks', copy: 'In-depth knowledge', Icon: BookIcon, iconClass: 'bg-emerald-100 text-emerald-600' },
  { name: 'Templates & Checklists', copy: 'Ready to use', Icon: DocumentIcon, iconClass: 'bg-sky-100 text-sky-600' },
  { name: 'Videos & Webinars', copy: 'Learn from experts', Icon: PlayIcon, iconClass: 'bg-orange-100 text-[#FF6A00]' },
  { name: 'Case Studies', copy: 'Real-world examples', Icon: TalentIcon, iconClass: 'bg-purple-100 text-purple-600' },
]

const filters = [
  { name: 'Topic', Icon: TargetIcon },
  { name: 'Role', Icon: PersonIcon },
  { name: 'Industry', Icon: FactoryIcon },
  { name: 'Format', Icon: DocumentIcon },
  { name: 'Product', Icon: GearIcon },
]

const productConnections = [
  {
    tag: 'Guides',
    title: 'Skill Assessment: Where to Start',
    copy: 'Identify the capability gaps holding your team back.',
    cta: 'Explore Talent',
    to: '/talent',
    Icon: TalentIcon,
    iconClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    tag: 'Insights',
    title: 'What Makes Training Actually Stick',
    copy: 'Why hands-on, role-based learning outperforms classroom training.',
    cta: 'Explore Academy',
    to: '/academy',
    Icon: AcademyIcon,
    iconClass: 'bg-orange-100 text-[#FF6A00]',
  },
  {
    tag: 'Templates',
    title: 'Internal Audit Checklist (for Manufacturers)',
    copy: 'A practical checklist to help you plan and conduct effective audits.',
    cta: 'Explore Digital QMS',
    to: '/digital-qms',
    Icon: QmsIcon,
    iconClass: 'bg-sky-100 text-sky-600',
  },
]

function Resources() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <>
      {/* Hero */}
      <section className="px-5 pt-10 pb-10 md:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Resources</SectionLabel>

          <h1 className="mt-4 max-w-xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A] md:text-[52px]">
            Ideas for a Better <span className="text-[#FF6A00]">Tomorrow.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600">
            Insights, guides and practical tools for manufacturing teams who
            want to build a more capable, resilient and future-ready
            organization.
          </p>

          <div className="mt-7 flex max-w-xl items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3.5 shadow-sm">
            <SearchIcon width={20} height={20} strokeWidth={1.8} className="shrink-0 text-neutral-400" />
            <input
              type="text"
              placeholder="Search articles, guides, templates..."
              className="w-full bg-transparent text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:outline-none"
            />
          </div>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,106,0,0.2),transparent_60%)]" />
            <div className="relative flex h-64 items-end justify-between p-8 md:h-72 md:p-12">
              <PersonIcon width={64} height={64} strokeWidth={1.2} className="text-white/70" />
              <p className="max-w-[160px] text-right font-serif text-lg italic leading-snug text-white/80">
                Learn
                <br />Apply
                <br />Improve
                <br />Grow
              </p>
            </div>
            <div className="relative border-t border-white/10 p-6">
              <p className="text-sm font-semibold leading-snug text-white">
                Practical Knowledge.
                <br />Real Manufacturing Impact.
              </p>
              <span className="mt-2 block h-0.5 w-8 bg-[#FF6A00]" />
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="px-5 py-6 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-[#FF6A00] text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Featured</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                Handpicked for You.
              </h2>
            </div>
            <ArrowLink to="/resources" className="hidden sm:inline-flex">
              View All Resources
            </ArrowLink>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8">
              <div>
                <span className="text-sm font-medium tracking-normal text-white/60">
                  Guide
                </span>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-white">
                  ISO 9001:2026 What&rsquo;s Changing?
                </h3>
                <p className="mt-3 max-w-sm text-sm text-white/70">
                  A practical guide to the key changes in the upcoming ISO
                  9001 revision (based on FDIS) and what they mean for your
                  organization.
                </p>
              </div>
              <Link
                to="/resources"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
              >
                Read the Guide
                <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
              </Link>
            </div>

            <div className="grid gap-5">
              {featuredSide.map(({ tag, tagClass, title, copy, imageClass }) => (
                <div key={title} className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5">
                  <div className="flex-1">
                    <span className={`text-sm font-medium tracking-normal ${tagClass}`}>
                      {tag}
                    </span>
                    <h3 className="mt-2 text-base font-bold leading-snug text-[#0A0A0A]">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">{copy}</p>
                  </div>
                  <div className={`hidden h-24 w-24 shrink-0 rounded-xl bg-gradient-to-br sm:block ${imageClass}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Latest Resources</SectionLabel>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Fresh Perspectives. Real Manufacturing Insights.
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestResources.map(({ tag, title, copy, action, imageClass }) => (
              <article key={title} className="flex flex-col gap-3">
                <div className={`relative aspect-video rounded-2xl bg-gradient-to-br ${imageClass}`}>
                  <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold tracking-normal text-neutral-600 shadow-sm">
                    {tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug text-[#0A0A0A]">{title}</h3>
                <p className="text-sm text-neutral-500">{copy}</p>
                <ArrowLink to="/resources">{action}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Formats */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>More Ways to Learn</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                Resources in Different Formats.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-neutral-500 md:text-right">
              Choose the format that works for you — practical knowledge,
              whenever and wherever you need it.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {formats.map(({ name, copy, Icon, iconClass }) => (
              <div key={name} className="rounded-2xl border border-black/5 bg-white p-5 text-center">
                <span className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}>
                  <Icon width={22} height={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#0A0A0A]">{name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Content Discovery */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl rounded-2xl bg-neutral-50 p-6 md:p-8">
          <SectionLabel>Smart Content Discovery</SectionLabel>
          <h2 className="mt-3 text-xl font-bold leading-tight text-[#0A0A0A] md:text-2xl">
            Find exactly what you need, faster.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-neutral-500">
            Filter resources by what matters to you.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {filters.map(({ name, Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-600"
              >
                <Icon width={16} height={16} strokeWidth={1.8} className="text-[#FF6A00]" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resource → Product Connection */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Connected to Our Software</SectionLabel>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            From Insight to Action.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-neutral-500">
            Every resource connects back to the tools that help you put it
            into practice.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {productConnections.map(({ tag, title, copy, cta, to, Icon, iconClass }) => (
              <div key={title} className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6">
                <span className="text-sm font-medium tracking-normal text-neutral-400">
                  {tag}
                </span>
                <h3 className="text-base font-bold leading-snug text-[#0A0A0A]">{title}</h3>
                <p className="text-sm text-neutral-500">{copy}</p>
                <Link
                  to={to}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#FF6A00]"
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-md ${iconClass}`}>
                    <Icon width={14} height={14} strokeWidth={2} />
                  </span>
                  {cta}
                  <ArrowRightIcon width={14} height={14} strokeWidth={2.2} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800">
          <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-lg">
              <SectionLabel className="text-white/50">Stay Updated</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-white md:text-[34px]">
                Get the Latest Manufacturing Insights.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Join our mailing list and get new resources, practical
                guides and updates directly in your inbox.
              </p>

              <form className="mt-7 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none sm:max-w-xs"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
                >
                  Subscribe
                  <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                </button>
              </form>
            </div>

            <div className="flex items-end justify-end gap-4">
              <PersonIcon width={56} height={56} strokeWidth={1.2} className="text-white/60" />
              <p className="font-serif text-lg italic leading-snug text-white/80">
                Better People.
                <br />Better Manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resources
