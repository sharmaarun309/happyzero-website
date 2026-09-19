import { Link } from 'react-router-dom'
import {
  ArrowRightIcon,
  BadgeIcon,
  BarChartIcon,
  BrainIcon,
  CheckIcon,
  ClockIcon,
  DocumentIcon,
  FactoryIcon,
  GearIcon,
  PersonAddIcon,
  PersonIcon,
  SearchScopeIcon,
  TargetIcon,
  ToolboxIcon,
} from '../components/icons'
import { ArrowLink, SectionLabel } from '../components/ui'

const heroStats = [
  { label: 'Defects', Icon: GearIcon, iconClass: 'bg-emerald-100 text-emerald-600' },
  { label: 'Customer Complaints', Icon: PersonIcon, iconClass: 'bg-orange-100 text-[#FF6A00]' },
  { label: 'Delay', Icon: ClockIcon, iconClass: 'bg-sky-100 text-sky-600' },
]

const challengeChecklist = ['New technology.', 'New people.', 'New challenges.', 'Same question.']

const opportunitySteps = [
  { name: 'Identify', copy: 'Assess current skills and experience', Icon: GearIcon },
  { name: 'Understand', copy: 'Find gaps and prioritize what matters', Icon: GearIcon },
  { name: 'Enable', copy: 'Create targeted development plans', Icon: PersonIcon },
]

const journeySteps = [
  { name: 'Assess', copy: 'Measure current capability', Icon: SearchScopeIcon, cardClass: 'bg-emerald-50', iconClass: 'bg-emerald-100 text-emerald-600' },
  { name: 'Identify', copy: 'Find gaps and prioritize', Icon: BarChartIcon, cardClass: 'bg-orange-50', iconClass: 'bg-orange-100 text-[#FF6A00]' },
  { name: 'Plan', copy: 'Create development plans', Icon: DocumentIcon, cardClass: 'bg-sky-50', iconClass: 'bg-sky-100 text-sky-600' },
  { name: 'Develop', copy: 'Through Academy and on-the-job', Icon: PersonIcon, cardClass: 'bg-emerald-50', iconClass: 'bg-emerald-100 text-emerald-600' },
  { name: 'Reassess', copy: 'Track progress and improve', Icon: TargetIcon, cardClass: 'bg-orange-50', iconClass: 'bg-orange-100 text-[#FF6A00]' },
]

const capabilityFeatures = [
  { name: 'Role-based capability frameworks', copy: 'Standardized skills for manufacturing roles', Icon: GearIcon },
  { name: 'Flexible assessment methods', copy: 'Self, manager and practical assessments', Icon: GearIcon },
  { name: 'Gap analysis and prioritization', copy: 'Focus on what drives the most impact', Icon: GearIcon },
  { name: 'Development planning', copy: 'Connects directly with Academy', Icon: DocumentIcon },
  { name: 'Track progress over time', copy: 'Measure improvement and readiness', Icon: TargetIcon },
]

const criticalGaps = [
  { name: 'Machine Operation', count: 12 },
  { name: 'Quality & Inspection', count: 6 },
  { name: 'Maintenance', count: 6 },
  { name: 'Safety & Compliance', count: 5 },
]

const departmentCapability = [
  { name: 'Production', current: 62, target: 85 },
  { name: 'Quality', current: 74, target: 88 },
  { name: 'Maintenance', current: 55, target: 78 },
  { name: 'Logistics', current: 66, target: 80 },
  { name: 'Engineering', current: 70, target: 90 },
]

const mstModel = [
  {
    name: 'Mindset',
    copy: 'The willingness to learn, adapt and own outcomes.',
    Icon: BrainIcon,
    iconClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Skillset',
    copy: 'The practical ability to do the job to standard.',
    Icon: BadgeIcon,
    iconClass: 'bg-orange-100 text-[#FF6A00]',
  },
  {
    name: 'Toolset',
    copy: 'The systems and equipment that enable the work.',
    Icon: ToolboxIcon,
    iconClass: 'bg-sky-100 text-sky-600',
  },
]

const stakeholders = [
  {
    name: 'For HR & L&D',
    copy: 'Identify capability gaps, plan development and show real impact.',
    Icon: PersonIcon,
    iconClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'For Plant & Operations',
    copy: "Know where you're vulnerable, and what to build next.",
    Icon: FactoryIcon,
    iconClass: 'bg-orange-100 text-[#FF6A00]',
  },
  {
    name: 'For Business Leaders',
    copy: 'Build a future-ready workforce and drive consistent performance across plants.',
    Icon: BarChartIcon,
    iconClass: 'bg-sky-100 text-sky-600',
  },
  {
    name: 'For Employees',
    copy: 'Get clarity on your skills, grow your career and be part of a stronger future.',
    Icon: PersonAddIcon,
    iconClass: 'bg-emerald-100 text-emerald-600',
  },
]

function CapabilityConversationButton({ className = '' }) {
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00] ${className}`}
    >
      Book a Capability Conversation
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

function Talent() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pt-10 pb-16 md:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Talent by HappyZero</SectionLabel>

          <h1 className="mt-4 max-w-2xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A] md:text-[52px]">
            People Excellence <span className="text-emerald-600">Before</span> Manufacturing
            Excellence.
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600">
            Build the capability your people need to deliver zero defect, zero
            customer complaint and zero delay.
          </p>

          <div className="mt-7">
            <CapabilityConversationButton />
          </div>

          <div className="relative mt-10">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-neutral-900 to-neutral-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(16,185,129,0.25),transparent_60%)]" />
              <div className="relative flex h-64 items-end justify-between p-8 md:h-80 md:p-12">
                <PersonIcon width={72} height={72} strokeWidth={1.2} className="text-white/70" />
                <p className="max-w-[220px] text-right font-serif text-lg italic leading-snug text-white/80">
                  Skilled People. Stronger Manufacturing.
                </p>
              </div>
            </div>

            <div className="relative -mt-8 ml-auto grid w-full max-w-sm grid-cols-3 gap-px rounded-2xl bg-black/5 p-px shadow-lg md:absolute md:bottom-6 md:right-8 md:-mt-0">
              {heroStats.map(({ label, Icon, iconClass }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl bg-white px-2 py-4 text-center"
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconClass}`}>
                    <Icon width={16} height={16} strokeWidth={2} />
                  </span>
                  <span className="text-lg font-extrabold text-[#0A0A0A]">0</span>
                  <span className="text-[11px] font-medium leading-tight text-neutral-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Real Challenge / The Opportunity */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <SectionLabel>The Real Challenge</SectionLabel>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0A0A0A]">
              Good machines are not enough.
            </h2>
            <p className="mt-4 text-sm text-neutral-600">
              Machines, processes and technology can only perform as well as
              the people who run them.
            </p>

            <ul className="mt-5 space-y-2.5">
              {challengeChecklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-700">
                  <CheckIcon width={16} height={16} strokeWidth={2.4} className="text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-lg font-bold text-emerald-600">Are our people ready?</p>
            <hr className="mt-4 border-black/10" />
            <p className="mt-4 text-sm text-neutral-600">
              It&rsquo;s not just a training problem. It&rsquo;s a capability
              problem.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 md:order-none">
            <div className="flex h-64 flex-col justify-end p-6 md:h-full">
              <PersonIcon width={48} height={48} strokeWidth={1.3} className="text-white/60" />
              <p className="mt-4 font-serif text-lg italic leading-snug text-white/85">
                People Capability Drives Performance.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>The Opportunity</SectionLabel>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0A0A0A]">
              Turn workforce capability into a competitive advantage.
            </h2>
            <p className="mt-4 text-sm text-neutral-600">
              Know what you have. Know what you need. Close the gap.
            </p>

            <ul className="mt-6 space-y-5">
              {opportunitySteps.map(({ name, copy, Icon }) => (
                <li key={name} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <Icon width={18} height={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A]">{name}</p>
                    <p className="text-sm text-neutral-500">{copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How Talent Works */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>How Talent Works</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                A simple, powerful capability journey.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-neutral-500 md:text-right">
              From assessment to action — a continuous loop to build a more
              capable workforce.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
            {journeySteps.map(({ name, copy, Icon, cardClass, iconClass }, index) => (
              <div key={name} className="flex items-center gap-2 md:flex-1">
                <div className={`flex-1 rounded-2xl p-5 ${cardClass}`}>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconClass}`}>
                    <Icon width={20} height={20} strokeWidth={1.8} />
                  </span>
                  <p className="mt-3 text-base font-bold text-[#0A0A0A]">{name}</p>
                  <p className="mt-1 text-sm text-neutral-500">{copy}</p>
                </div>
                {index < journeySteps.length - 1 && (
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

      {/* Manufacturing Capability Intelligence */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <SectionLabel>Inside Talent</SectionLabel>
            <ArrowLink to="/talent" className="hidden sm:inline-flex">
              Explore All Features
            </ArrowLink>
          </div>

          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Manufacturing Capability Intelligence
            <span className="text-[#FF6A00]">.</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            Practical. Role-based. Built for real manufacturing environments.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
            <ul className="divide-y divide-black/5 rounded-2xl bg-neutral-50">
              {capabilityFeatures.map(({ name, copy, Icon }) => (
                <li key={name} className="flex items-start gap-3 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <Icon width={18} height={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A]">{name}</p>
                    <p className="text-sm text-neutral-500">{copy}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-[#0A0A0A] p-5">
              <div className="flex items-center justify-between text-white/70">
                <span className="text-sm font-bold text-white">HappyZero</span>
                <div className="flex gap-3 text-white/40">
                  <GearIcon width={16} height={16} strokeWidth={1.8} />
                  <SearchScopeIcon width={16} height={16} strokeWidth={1.8} />
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-white p-5">
                <p className="text-sm font-semibold text-[#0A0A0A]">Workforce Capability</p>

                <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="flex h-28 w-28 items-center justify-center rounded-full"
                      style={{
                        background: 'conic-gradient(#10b981 0% 72%, #e5e7eb 72% 100%)',
                      }}
                    >
                      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white">
                        <span className="text-xl font-extrabold text-[#0A0A0A]">72%</span>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500">Overall Capability</span>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium tracking-normal text-neutral-400">
                      Critical Gaps
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {criticalGaps.map(({ name, count }) => (
                        <li key={name} className="flex items-center justify-between text-sm">
                          <span className="text-neutral-600">{name}</span>
                          <span className="font-semibold text-[#0A0A0A]">{count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium tracking-normal text-neutral-400">
                      Capability by Department
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" /> Current
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-neutral-300" /> Target
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-3">
                    {departmentCapability.map(({ name, current, target }) => (
                      <div key={name} className="flex flex-1 flex-col items-center gap-2">
                        <div className="flex h-20 items-end gap-1">
                          <div
                            className="w-2.5 rounded-t bg-emerald-500"
                            style={{ height: `${current}%` }}
                          />
                          <div
                            className="w-2.5 rounded-t bg-neutral-200"
                            style={{ height: `${target}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-neutral-500">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The MST Model */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>The MST Model</SectionLabel>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Capability is Mindset + Skillset + Toolset
            <span className="text-[#FF6A00]">.</span>
          </h2>
          <p className="mt-2 max-w-xl text-sm text-neutral-500">
            Real capability only shows up when all three come together.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {mstModel.map(({ name, copy, Icon, iconClass }) => (
              <div key={name} className="rounded-2xl border border-black/5 bg-white p-6">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconClass}`}>
                  <Icon width={22} height={22} strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#0A0A0A]">{name}</h3>
                <p className="mt-2 text-sm text-neutral-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Every Stakeholder */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>For Every Stakeholder</SectionLabel>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            A stronger workforce for what&rsquo;s next.
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            Different roles. A common goal — a more capable organization.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stakeholders.map(({ name, copy, Icon, iconClass }) => (
              <div key={name} className="rounded-2xl border border-black/5 bg-white p-5">
                <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconClass}`}>
                  <Icon width={20} height={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#0A0A0A]">{name}</h3>
                <p className="mt-2 text-sm text-neutral-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-neutral-900 to-neutral-900">
          <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-lg">
              <h2 className="text-[28px] font-bold leading-tight text-white md:text-[34px]">
                Better People.
                <br />A More Capable Tomorrow.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                When people have the right capability, manufacturing performs
                — today and in the future.
              </p>
              <div className="mt-7">
                <CapabilityConversationButton />
              </div>
            </div>

            <div className="flex items-end justify-end gap-4">
              <PersonIcon width={56} height={56} strokeWidth={1.2} className="text-white/60" />
              <p className="font-serif text-lg italic leading-snug text-white/80">
                Grow.
                <br />Perform.
                <br />Advance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Talent
