import { Link } from 'react-router-dom'
import {
  ArrowRightIcon,
  BadgeIcon,
  BarChartIcon,
  CheckIcon,
  DocumentIcon,
  GearIcon,
  PersonAddIcon,
  PersonIcon,
  PlayIcon,
  QmsIcon,
  RefreshIcon,
  SearchScopeIcon,
  ShieldIcon,
  TargetIcon,
} from '../components/icons'
import { ArrowLink, SectionLabel } from '../components/ui'

const heroStrip = [
  { label: 'Centralize Quality', Icon: ShieldIcon },
  { label: 'Ensure Compliance', Icon: QmsIcon },
  { label: 'Reduce Risk', Icon: TargetIcon },
  { label: 'Drive Improvement', Icon: RefreshIcon },
]

const heroModules = [
  { label: 'Documents', Icon: DocumentIcon },
  { label: 'Audits', Icon: SearchScopeIcon },
  { label: 'CAPA', Icon: CheckIcon },
  { label: 'Suppliers', Icon: PersonAddIcon },
]

const challengeChecklist = [
  'Scattered documents and records',
  'Time-consuming audits and compliance',
  'Reactive problem solving',
  'Limited visibility and insights',
  'Increasing customer and regulatory demands',
]

const dashboardStats = [
  { label: 'Total Documents', value: '248', trend: '+12%', trendUp: true },
  { label: 'Open CAPA', value: '12', trend: '-25%', trendUp: true },
  { label: 'Upcoming Audits', value: '3', trend: 'This month', trendUp: null },
  { label: 'Supplier Issues', value: '5', trend: '-40%', trendUp: true },
]

const complianceStatus = [
  { label: 'Compliant', value: '92%', dotClass: 'bg-emerald-500' },
  { label: 'Under Review', value: '6%', dotClass: 'bg-amber-400' },
  { label: 'Overdue', value: '2%', dotClass: 'bg-red-400' },
]

const capaByCategory = [
  { name: 'Product', value: 90 },
  { name: 'Process', value: 65 },
  { name: 'Supplier', value: 45 },
  { name: 'Customer', value: 35 },
  { name: 'Other', value: 25 },
]

const capabilities = [
  { name: 'Document & Records Management', copy: 'Control. Collaborate. Stay current.', Icon: DocumentIcon },
  { name: 'Audit Management', copy: 'Plan. Execute. Close.', Icon: SearchScopeIcon },
  { name: 'CAPA Management', copy: 'Track. Resolve. Prevent.', Icon: TargetIcon },
  { name: 'Supplier Quality Management', copy: 'Monitor. Assess. Improve.', Icon: GearIcon },
  { name: 'Training & Competence', copy: 'Assign. Track. Ensure readiness.', Icon: BadgeIcon },
  { name: 'Dashboards & Insights', copy: 'Get real-time visibility.', Icon: BarChartIcon },
]

const useCases = [
  {
    tag: 'Document Control',
    copy: 'Replace spreadsheets with a single source of truth.',
    imageClass: 'from-sky-200 to-sky-50',
  },
  {
    tag: 'Audits & Compliance',
    copy: 'Simplify internal and customer audits.',
    imageClass: 'from-neutral-300 to-neutral-100',
  },
  {
    tag: 'CAPA & Problem Solving',
    copy: 'Resolve issues faster and prevent recurrence.',
    imageClass: 'from-emerald-200 to-emerald-50',
  },
  {
    tag: 'Supplier Quality',
    copy: 'Strengthen your supply chain.',
    imageClass: 'from-orange-200 to-orange-50',
  },
]

const impactOutcomes = [
  { label: 'Lower Compliance Risk', Icon: GearIcon },
  { label: 'Faster Audit Readiness', Icon: BarChartIcon },
  { label: 'Higher Productivity', Icon: PersonAddIcon },
  { label: 'Greater Customer Trust', Icon: QmsIcon },
]

function ExploreQmsButton({ className = '' }) {
  return (
    <Link
      to="/digital-qms"
      className={`inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00] ${className}`}
    >
      Explore Digital QMS
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

function DigitalQMS() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pt-10 pb-16 md:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Digital QMS by HappyZero</SectionLabel>

          <h1 className="mt-4 max-w-2xl text-[40px] font-extrabold leading-[1.05] tracking-tight text-[#0A0A0A] md:text-[52px]">
            Simplify.
            <br />
            <span className="text-sky-600">Comply.</span>
            <br />
            Improve.
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600">
            A modern quality management system built for manufacturing.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <ExploreQmsButton />
            <button
              type="button"
              className="inline-flex items-center gap-3 text-sm font-semibold text-[#0A0A0A]"
            >
              <PlayIcon width={32} height={32} strokeWidth={1.5} />
              <span className="flex flex-col items-start leading-tight">
                Watch Overview
                <span className="text-xs font-normal text-neutral-500">2 min</span>
              </span>
            </button>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-sky-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(56,189,248,0.22),transparent_60%)]" />
            <div className="relative flex h-64 items-end justify-between p-8 md:h-80 md:p-12">
              <PersonIcon width={72} height={72} strokeWidth={1.2} className="text-white/70" />
              <p className="max-w-[200px] text-right font-serif text-lg italic leading-snug text-white/80">
                Quality Built for What&rsquo;s Next.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:flex-1">
              {heroStrip.map(({ label, Icon }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon width={22} height={22} strokeWidth={1.6} className="text-sky-600" />
                  <span className="text-sm font-medium text-neutral-700">{label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm md:w-auto">
              {heroModules.map(({ label, Icon }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                    <Icon width={16} height={16} strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] font-medium text-neutral-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>The Challenge</SectionLabel>
          <h2 className="mt-3 max-w-lg text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Quality is critical. But it&rsquo;s getting more complex.
          </h2>
          <p className="mt-4 max-w-md text-sm text-neutral-600">
            More regulations. Higher customer expectations. Disconnected
            systems. Spreadsheets and manual processes make it harder to
            maintain compliance and drive real improvement.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
            <ul className="space-y-3 rounded-2xl bg-sky-50 p-6">
              {challengeChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                  <CheckIcon width={16} height={16} strokeWidth={2.4} className="shrink-0 text-sky-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-sky-50 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <DocumentIcon width={22} height={22} strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#0A0A0A]">
                It&rsquo;s time for a smarter way.
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                A modern QMS designed for real manufacturing environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Our Solution</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                One Connected Quality System.
              </h2>
              <p className="mt-4 max-w-md text-sm text-neutral-600">
                Digital QMS by HappyZero brings together your documents,
                processes, audits, issues, suppliers and more — in one
                integrated, easy-to-use platform.
              </p>
              <div className="mt-6">
                <Link
                  to="/digital-qms"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
                >
                  Explore All Features
                  <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0A0A0A] p-5">
              <div className="flex items-center justify-between text-white/70">
                <span className="text-sm font-bold text-white">HappyZero</span>
                <div className="flex gap-3 text-white/40">
                  <SearchScopeIcon width={16} height={16} strokeWidth={1.8} />
                  <PersonIcon width={16} height={16} strokeWidth={1.8} />
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-white p-5">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {dashboardStats.map(({ label, value, trend, trendUp }) => (
                    <div key={label}>
                      <p className="text-[11px] font-medium text-neutral-500">{label}</p>
                      <p className="mt-1 text-xl font-extrabold text-[#0A0A0A]">{value}</p>
                      <p
                        className={`text-[11px] font-medium ${
                          trendUp === null
                            ? 'text-neutral-400'
                            : trendUp
                              ? 'text-emerald-600'
                              : 'text-red-500'
                        }`}
                      >
                        {trend}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Compliance Status
                    </p>
                    <div className="mt-3 flex items-center gap-4">
                      <div
                        className="flex h-24 w-24 items-center justify-center rounded-full"
                        style={{
                          background:
                            'conic-gradient(#10b981 0% 92%, #fbbf24 92% 98%, #f87171 98% 100%)',
                        }}
                      >
                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white">
                          <span className="text-base font-extrabold text-[#0A0A0A]">92%</span>
                        </div>
                      </div>
                      <ul className="space-y-1 text-xs text-neutral-600">
                        {complianceStatus.map(({ label, value, dotClass }) => (
                          <li key={label} className="flex items-center gap-1.5">
                            <span className={`h-2 w-2 rounded-full ${dotClass}`} />
                            {label} <span className="font-semibold text-[#0A0A0A]">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mt-1 text-[11px] text-neutral-400">Overall</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      CAPA by Category
                    </p>
                    <div className="mt-4 flex items-end justify-between gap-2">
                      {capaByCategory.map(({ name, value }) => (
                        <div key={name} className="flex flex-1 flex-col items-center gap-2">
                          <div className="flex h-20 w-full items-end justify-center">
                            <div className="w-4 rounded-t bg-sky-500" style={{ height: `${value}%` }} />
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
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Key Capabilities</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                Everything you need. Nothing you don&rsquo;t.
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                A complete, yet simple QMS for modern manufacturing.
              </p>
              <ArrowLink to="/digital-qms" className="mt-3">
                View All Features
              </ArrowLink>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ name, copy, Icon }) => (
              <div key={name} className="rounded-2xl border border-black/5 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                  <Icon width={20} height={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-[#0A0A0A]">{name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Manufacturing Use Cases */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <SectionLabel>Real Manufacturing Use Cases</SectionLabel>
            <ArrowLink to="/digital-qms" className="hidden sm:inline-flex">
              Explore Use Cases
            </ArrowLink>
          </div>

          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Built for the realities of manufacturing.
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map(({ tag, copy, imageClass }) => (
              <article key={tag} className="flex flex-col gap-3">
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${imageClass}`} />
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                  {tag}
                </span>
                <p className="text-sm font-semibold leading-snug text-[#0A0A0A]">{copy}</p>
                <ArrowRightIcon width={16} height={16} strokeWidth={2.2} className="text-sky-600" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <SectionLabel>The Impact</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                From Compliance to Continuous Improvement.
              </h2>
              <p className="mt-3 max-w-md text-sm text-neutral-600">
                A stronger quality system helps you reduce risk, improve
                efficiency and build customer trust — today and tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {impactOutcomes.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-black/5 bg-white px-4 py-5 text-center"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                    <Icon width={18} height={18} strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-medium text-neutral-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-sky-950">
          <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-lg">
              <SectionLabel className="text-white/50">A Stronger Tomorrow</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-white md:text-[34px]">
                Let&rsquo;s Build a Stronger Quality Organization.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                See how Digital QMS can help you simplify, comply and
                improve.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
                >
                  Book a Capability Conversation
                  <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  <PlayIcon width={32} height={32} strokeWidth={1.5} />
                  <span className="flex flex-col items-start leading-tight">
                    See It in Action
                    <span className="text-xs font-normal text-white/60">2 min</span>
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-end justify-end gap-4">
              <PersonIcon width={56} height={56} strokeWidth={1.2} className="text-white/60" />
              <p className="font-serif text-lg italic leading-snug text-white/80">
                Quality.
                <br />People.
                <br />Progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DigitalQMS
