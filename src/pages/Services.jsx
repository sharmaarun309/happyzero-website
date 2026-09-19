import { Link } from 'react-router-dom'
import {
  AcademyIcon,
  ArrowRightIcon,
  BarChartIcon,
  DocumentIcon,
  GearIcon,
  PersonAddIcon,
  PersonIcon,
  QmsIcon,
  SearchScopeIcon,
  TalentIcon,
  TargetIcon,
  TrophyIcon,
  WrenchIcon,
} from '../components/icons'
import { ArrowLink, SectionLabel } from '../components/ui'

const heroStrip = [
  { label: 'Practical Experience', Icon: PersonIcon },
  { label: 'Real Manufacturing', Icon: GearIcon },
  { label: 'Flexible Engagements', Icon: PersonAddIcon },
  { label: 'Measurable Impact', Icon: BarChartIcon },
]

const serviceCards = [
  {
    name: 'QMS & Internal Audit Outsourcing',
    copy: 'Experienced auditors to support your internal and customer audits.',
    Icon: DocumentIcon,
    imageClass: 'from-orange-200 to-orange-50',
  },
  {
    name: 'IMS / QMS Gap Analysis & Implementation',
    copy: 'Assess your current system, identify gaps and implement practical solutions.',
    Icon: GearIcon,
    imageClass: 'from-neutral-300 to-neutral-100',
  },
  {
    name: 'In-house Training & Capability Development',
    copy: 'Role-based training to build the skills your people need.',
    Icon: PersonIcon,
    imageClass: 'from-sky-200 to-sky-50',
  },
  {
    name: 'Skill Assessment & Gap Identification',
    copy: 'Identify current capability, find gaps and create development plans.',
    Icon: BarChartIcon,
    imageClass: 'from-emerald-200 to-emerald-50',
  },
]

const workSteps = [
  { step: '01', name: 'Assess', copy: 'Understand your current state', Icon: SearchScopeIcon },
  { step: '02', name: 'Plan', copy: 'Develop a practical roadmap', Icon: WrenchIcon },
  { step: '03', name: 'Implement', copy: 'Work with you to put plans into action', Icon: GearIcon },
  { step: '04', name: 'Sustain', copy: 'Support continued improvement', Icon: BarChartIcon },
]

const whyHappyZero = [
  { name: 'Real Manufacturing Experience', copy: 'Practical, shop-floor know-how', Icon: TrophyIcon },
  { name: 'Tailored to Your Needs', copy: 'No one-size-fits-all approach', Icon: PersonAddIcon },
  { name: 'Integrated with Our Software', copy: 'Connects with Talent, Academy and Digital QMS', Icon: TargetIcon },
  { name: 'Focus on Lasting Impact', copy: 'Build capability, not dependency', Icon: BarChartIcon },
]

const ecosystemCards = [
  {
    name: 'Talent',
    subtitle: 'Skill Assessment & Gap Identification',
    copy: 'Know what you have. Close the gap.',
    to: '/talent',
    Icon: TalentIcon,
    cardClass: 'bg-emerald-50',
    iconClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Academy',
    subtitle: 'In-house Training & Capability Development',
    copy: 'Build the capability.',
    to: '/academy',
    Icon: AcademyIcon,
    cardClass: 'bg-orange-50',
    iconClass: 'bg-orange-100 text-[#FF6A00]',
  },
  {
    name: 'Digital QMS',
    subtitle: 'QMS Gap Analysis & Implementation',
    copy: 'Simplify. Comply. Improve.',
    to: '/digital-qms',
    Icon: QmsIcon,
    cardClass: 'bg-sky-50',
    iconClass: 'bg-sky-100 text-sky-600',
  },
]

function TalkToExpertButton({ className = '' }) {
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00] ${className}`}
    >
      Talk to an Expert
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

function Services() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pt-10 pb-16 md:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Our Services</SectionLabel>

          <h1 className="mt-4 max-w-2xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A] md:text-[52px]">
            Manufacturing Expertise, <span className="text-[#FF6A00]">Delivered.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600">
            Hands-on support to help you strengthen quality, capability and
            performance — while you build your digital future.
          </p>

          <div className="mt-7">
            <TalkToExpertButton />
          </div>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,106,0,0.2),transparent_60%)]" />
            <div className="relative flex h-64 items-end justify-between p-8 md:h-80 md:p-12">
              <PersonIcon width={72} height={72} strokeWidth={1.2} className="text-white/70" />
              <p className="max-w-[200px] text-right font-serif text-lg italic leading-snug text-white/80">
                Your Manufacturing Partner.
              </p>
            </div>
            <div className="absolute right-6 top-6 max-w-[200px] rounded-xl bg-white p-4 shadow-lg">
              <p className="text-sm font-semibold leading-snug text-[#0A0A0A]">
                People. Expertise. Progress.
              </p>
              <span className="mt-2 block h-0.5 w-8 bg-[#FF6A00]" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroStrip.map(({ label, Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon width={22} height={22} strokeWidth={1.6} className="text-[#FF6A00]" />
                <span className="text-sm font-medium text-neutral-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Support for Real Manufacturing Needs */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="mt-3 max-w-lg text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                Practical Support for Real Manufacturing Needs.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-neutral-500 md:text-right">
              From compliance and audits to capability development, our
              experts work with you to solve real challenges and create
              lasting improvement.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map(({ name, copy, Icon, imageClass }) => (
              <div key={name} className="flex flex-col gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
                  <Icon width={20} height={20} strokeWidth={1.8} />
                </span>
                <h3 className="text-base font-bold leading-snug text-[#0A0A0A]">{name}</h3>
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${imageClass}`} />
                <p className="text-sm text-neutral-600">{copy}</p>
                <ArrowLink to="/services">Learn More</ArrowLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                A simple, effective approach.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-neutral-500 md:text-right">
              We work closely with your team to understand your needs and
              deliver practical, measurable results.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
            {workSteps.map(({ step, name, copy, Icon }, index) => (
              <div key={name} className="flex items-center gap-2 md:flex-1">
                <div className="flex-1 rounded-2xl bg-orange-50 p-5">
                  <span className="text-xs font-bold text-neutral-400">{step}</span>
                  <Icon width={24} height={24} strokeWidth={1.6} className="mt-2 text-[#FF6A00]" />
                  <p className="mt-3 text-base font-bold text-[#0A0A0A]">{name}</p>
                  <p className="mt-1 text-sm text-neutral-500">{copy}</p>
                </div>
                {index < workSteps.length - 1 && (
                  <ArrowRightIcon
                    width={18}
                    height={18}
                    strokeWidth={2}
                    className="hidden shrink-0 text-neutral-300 md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HappyZero */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Why HappyZero</SectionLabel>
              <h2 className="mt-3 max-w-lg text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                More Than Consultants. A True Manufacturing Partner.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-neutral-500 md:text-right">
              We bring deep manufacturing experience, a practical mindset and
              a long-term view — aligned with your goals.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyHappyZero.map(({ name, copy, Icon }) => (
              <div key={name} className="flex items-start gap-3">
                <Icon width={22} height={22} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[#FF6A00]" />
                <div>
                  <p className="text-sm font-semibold text-[#0A0A0A]">{name}</p>
                  <p className="text-sm text-neutral-500">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connected With Our Ecosystem */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Connected With Our Ecosystem</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                Services that Accelerate Your Journey.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-neutral-500 md:text-right">
              Our services work hand-in-hand with HappyZero&rsquo;s software
              to help you move faster and achieve more.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ecosystemCards.map(({ name, subtitle, copy, to, Icon, cardClass, iconClass }) => (
              <Link
                key={name}
                to={to}
                className={`flex items-start gap-4 rounded-2xl p-5 ${cardClass}`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
                  <Icon width={22} height={22} strokeWidth={1.8} />
                </span>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#0A0A0A]">{name}</h3>
                  <p className="text-sm text-neutral-500">{subtitle}</p>
                  <p className="mt-2 text-sm font-medium text-neutral-700">{copy}</p>
                </div>
                <ArrowRightIcon width={18} height={18} strokeWidth={2.2} className="mt-1 shrink-0 text-neutral-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-900">
          <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-lg">
              <SectionLabel className="text-white/50">A Stronger Tomorrow</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-white md:text-[34px]">
                Let&rsquo;s Build a More Capable Manufacturing Organization.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Talk to our experts and explore how we can support your
                goals.
              </p>
              <div className="mt-7">
                <TalkToExpertButton />
              </div>
            </div>

            <div className="flex items-end justify-end gap-4">
              <PersonIcon width={56} height={56} strokeWidth={1.2} className="text-white/60" />
              <p className="font-serif text-lg italic leading-snug text-white/80">
                Solve.
                <br />Improve.
                <br />Sustain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
