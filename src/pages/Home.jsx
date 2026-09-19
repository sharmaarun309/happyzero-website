import { Link } from 'react-router-dom'
import {
  ArrowRightIcon,
  BarChartIcon,
  DocumentIcon,
  GearIcon,
  PersonAddIcon,
  PersonIcon,
  PlayIcon,
  QmsIcon,
  SparkleIcon,
  SunIcon,
  TalentIcon,
} from '../components/icons'
import { ArrowCircleButton, ArrowLink, SectionLabel } from '../components/ui'

const valueStrip = [
  { label: 'People Empowered', Icon: PersonIcon },
  { label: 'Processes Simplified', Icon: GearIcon },
  { label: 'Intelligence Unlocked', Icon: SparkleIcon },
  { label: 'A Brighter Tomorrow', Icon: SunIcon },
]

const trustedLogos = ['TATA', 'Mahindra', 'BOSCH', 'Schneider Electric']

const softwareCards = [
  {
    name: 'Talent',
    subtitle: 'Skills Intelligence',
    copy: 'Know the capability you have. Identify the capability you need. Close the gap.',
    to: '/talent',
    Icon: TalentIcon,
    cardClass: 'bg-emerald-50',
    iconClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Digital QMS',
    subtitle: 'Quality Management',
    copy: 'Simplify. Comply. Improve.',
    to: '/digital-qms',
    Icon: QmsIcon,
    cardClass: 'bg-sky-50',
    iconClass: 'bg-sky-100 text-sky-600',
  },
]

const serviceCards = [
  { name: 'QMS & Internal Audit Outsourcing', Icon: DocumentIcon },
  { name: 'IMS / QMS Gap Analysis & Implementation', Icon: GearIcon },
  { name: 'In-house Training & Capability Development', Icon: PersonAddIcon },
  { name: 'Skill Assessment & Gap Identification', Icon: BarChartIcon },
]

const futurePillars = ['People', 'Technology', 'Purpose', 'Progress']

const resourceCards = [
  {
    tag: 'Blog',
    tagClass: 'text-emerald-600',
    title: 'ISO 9001:2026 Key Changes for Manufacturers',
    imageClass: 'bg-gradient-to-br from-emerald-200 to-emerald-50',
  },
  {
    tag: 'Guide',
    tagClass: 'text-[#FF6A00]',
    title: 'Internal Audit Checklist (Free Download)',
    imageClass: 'bg-gradient-to-br from-orange-200 to-orange-50',
  },
  {
    tag: 'Insight',
    tagClass: 'text-sky-600',
    title: 'Building a Skills-First Manufacturing Organization',
    imageClass: 'bg-gradient-to-br from-sky-200 to-sky-50',
  },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pt-10 pb-14 md:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Manufacturing a Brighter Tomorrow</SectionLabel>

          <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-tight text-[#0A0A0A] md:text-[56px]">
            Human + AI.
            <br />
            <span className="text-[#FF6A00]">Better Manufacturing.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600">
            We combine manufacturing expertise, intelligent software and
            AI-powered work to help you build a more capable, efficient and
            future-ready organization.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
            >
              Book a Call
              <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
            </Link>

            <button
              type="button"
              className="inline-flex items-center gap-3 text-sm font-semibold text-[#0A0A0A]"
            >
              <PlayIcon width={38} height={38} strokeWidth={1.5} />
              <span className="flex flex-col items-start leading-tight">
                Watch Our Story
                <span className="text-xs font-normal text-neutral-500">
                  2 min
                </span>
              </span>
            </button>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,106,0,0.18),transparent_60%)]" />
            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="flex h-48 items-end md:h-64">
                <PersonIcon
                  width={72}
                  height={72}
                  strokeWidth={1.2}
                  className="text-white/70"
                />
              </div>
              <div className="text-right text-sm font-medium leading-relaxed text-white/80">
                <p>Better People.</p>
                <p>Better Processes.</p>
                <p>A Brighter Tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-black/5 bg-white px-5 py-8 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {valueStrip.map(({ label, Icon }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon width={26} height={26} strokeWidth={1.6} className="text-[#0A0A0A]" />
              <span className="text-sm font-medium text-neutral-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
            Trusted by forward-thinking manufacturers
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustedLogos.map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-center rounded-xl bg-neutral-100 text-sm font-semibold text-neutral-400"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <SectionLabel>Our Software</SectionLabel>
            <ArrowLink to="/services">View All</ArrowLink>
          </div>

          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Tools for a More Capable Manufacturing Organization
            <span className="text-[#FF6A00]">.</span>
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {softwareCards.map(({ name, subtitle, copy, to, Icon, cardClass, iconClass }) => (
              <Link
                key={name}
                to={to}
                className={`flex flex-col justify-between gap-6 rounded-2xl p-6 ${cardClass}`}
              >
                <div>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}
                  >
                    <Icon width={22} height={22} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[#0A0A0A]">{name}</h3>
                  <p className="text-sm font-medium text-neutral-500">{subtitle}</p>
                  <p className="mt-3 text-sm text-neutral-600">{copy}</p>
                </div>
                <ArrowCircleButton />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <SectionLabel>Our Services</SectionLabel>
            <ArrowLink to="/services">Explore All</ArrowLink>
          </div>

          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Manufacturing Expertise, Delivered
            <span className="text-[#FF6A00]">.</span>
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {serviceCards.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-[#0A0A0A]">
                  <Icon width={20} height={20} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-semibold text-[#0A0A0A]">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark future section */}
      <section className="bg-[#0A0A0A] px-5 py-16 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-[28px] font-bold leading-tight text-white md:text-[34px]">
              A More Capable Human-Centric Manufacturing Future
              <span className="text-[#FF6A00]">.</span>
            </h2>
            <p className="mt-4 text-base text-white/70">
              We believe in a future where people and AI work together —
              where capability, technology and purpose come together to
              create better manufacturing.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
            >
              Let&rsquo;s Build Together
              <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
            </Link>
          </div>

          <div className="flex items-start gap-6 md:flex-col md:items-end md:text-right">
            <ul className="space-y-2 text-xs font-semibold uppercase tracking-widest text-white/50">
              {futurePillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
            <p className="font-serif text-xl italic text-white/80">
              A Brighter Tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Resources teaser */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <SectionLabel>Insights</SectionLabel>
            <ArrowLink to="/resources">Explore Resources</ArrowLink>
          </div>

          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Ideas for a Better Tomorrow
            <span className="text-[#FF6A00]">.</span>
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {resourceCards.map(({ tag, tagClass, title, imageClass }) => (
              <article key={title} className="flex flex-col gap-3">
                <div className={`aspect-video rounded-2xl ${imageClass}`} />
                <span className={`text-xs font-semibold uppercase tracking-widest ${tagClass}`}>
                  {tag}
                </span>
                <h3 className="text-base font-semibold leading-snug text-[#0A0A0A]">
                  {title}
                </h3>
                <ArrowLink to="/resources">Read More</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-black/5 bg-white p-8 md:flex-row md:items-center">
          <div>
            <SectionLabel>Ready to Make a Difference</SectionLabel>
            <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
              Talk to Our Team.
            </h2>
            <p className="mt-3 max-w-md text-sm text-neutral-600">
              Tell us where you are today. We&rsquo;ll help you identify where
              HappyZero can create the most value.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 md:items-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
            >
              Book a Call
              <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
            </Link>
            <span className="text-xs text-neutral-500">
              No obligation. Just a conversation.
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
