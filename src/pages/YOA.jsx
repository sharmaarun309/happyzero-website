import { Link } from 'react-router-dom'
import YoaNav from '../components/YoaNav'
import YoaFooter from '../components/YoaFooter'
import {
  AcademyIcon,
  ArrowRightIcon,
  BadgeIcon,
  BarChartIcon,
  BookIcon,
  CheckIcon,
  ChipIcon,
  DocumentIcon,
  FactoryIcon,
  GearIcon,
  PersonAddIcon,
  PersonIcon,
  PlayIcon,
  QmsIcon,
  RefreshIcon,
  SearchScopeIcon,
  SparkleIcon,
  TalentIcon,
  TargetIcon,
} from '../components/icons'

function Eyebrow({ children, className = '' }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 ${className}`}>
      <span className="h-px w-4 bg-blue-600" />
      {children}
    </p>
  )
}

function ArrowLink({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-700 ${className}`}
    >
      {children}
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

function DemoButton({ className = '' }) {
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 ${className}`}
    >
      Request a Demo
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

const heroStats = [
  { label: 'Active Learners', value: '1,240', Icon: PersonIcon },
  { label: 'Completion Rate', value: '76%', Icon: BarChartIcon },
  { label: 'Learning Paths', value: '12', Icon: BookIcon },
  { label: 'Certificates Issued', value: '8', Icon: BadgeIcon },
]

const bigIdeaPillars = [
  { name: 'Industry-Relevant Content', copy: 'Built specifically for manufacturing roles and challenges.', Icon: FactoryIcon },
  { name: 'Hands-On Learning', copy: 'Practice-based, not just theory.', Icon: GearIcon },
  { name: 'For Your Entire Organization', copy: 'Employees, suppliers, customers and partners.', Icon: PersonAddIcon },
  { name: 'Measurable Impact', copy: 'Track capability, not just completion.', Icon: BarChartIcon },
]

const ecosystemCards = [
  { name: 'Employees', copy: 'Build skills. Drive performance.', Icon: PersonIcon, imageClass: 'from-blue-200 to-blue-50' },
  { name: 'Suppliers', copy: 'Align. Improve. Grow together.', Icon: FactoryIcon, imageClass: 'from-slate-300 to-slate-100' },
  { name: 'Customers', copy: 'Enable success.', Icon: PersonAddIcon, imageClass: 'from-blue-200 to-blue-50' },
  { name: 'Partners', copy: 'Build a stronger ecosystem.', Icon: TalentIcon, imageClass: 'from-slate-300 to-slate-100' },
]

const brandElements = ['Your Logo', 'Your Brand', 'Your Learning Paths', 'Your Content', 'Your Users', 'Your Academy']

const learningCapabilities = [
  { name: 'Interactive Lessons', Icon: BookIcon },
  { name: 'Activities & Practice', Icon: GearIcon },
  { name: 'Assessments', Icon: DocumentIcon },
  { name: 'Progress Tracking', Icon: BarChartIcon },
  { name: 'Certificates', Icon: BadgeIcon },
  { name: 'Learning Paths', Icon: TargetIcon },
]

const featuredPaths = [
  { tag: 'Quality', title: 'ISO 9001:2026 — What’s Changing?', imageClass: 'from-blue-200 to-blue-50' },
  { tag: 'Audit', title: 'Internal Audit for Manufacturers', imageClass: 'from-slate-300 to-slate-100' },
  { tag: 'Problem Solving', title: 'Practical Problem Solving', imageClass: 'from-emerald-200 to-emerald-50' },
  { tag: 'Quality Tools', title: 'Manufacturing Core Tools', imageClass: 'from-blue-200 to-blue-50' },
]

const howYoaWorks = [
  { name: 'Create', copy: 'Build your academy', Icon: GearIcon },
  { name: 'Curate', copy: 'Choose content and learning paths', Icon: BookIcon },
  { name: 'Assign', copy: 'Give people the learning they need', Icon: PersonAddIcon },
  { name: 'Learn', copy: 'People engage and practice', Icon: PersonIcon },
  { name: 'Assess', copy: 'Measure learning and capability', Icon: SearchScopeIcon },
  { name: 'Improve', copy: 'Track progress and strengthen performance', Icon: RefreshIcon },
]

const roles = [
  { name: 'Shop Floor Teams', copy: 'Build practical skills for daily work.', Icon: PersonIcon },
  { name: 'Engineers & Quality', copy: 'Deepen technical and quality capability.', Icon: GearIcon },
  { name: 'Managers & Leaders', copy: 'Develop people and leadership capability.', Icon: PersonAddIcon },
  { name: 'New Joiners', copy: 'Build a strong foundation from day one.', Icon: AcademyIcon },
  { name: 'Suppliers', copy: 'Extend capability beyond your four walls.', Icon: FactoryIcon },
]

const adminCapabilities = [
  'Learning progress',
  'Completion',
  'Assessment results',
  'Certification',
  'Capability by team',
  'Capability by location',
  'Learning compliance',
  'Reports',
]

const talentLoop = [
  { name: 'Talent', copy: 'Identify what capability is needed', Icon: TalentIcon },
  { name: 'YOA', copy: 'Build the learning journey', Icon: AcademyIcon },
  { name: 'Assessment', copy: 'Measure what was learned', Icon: SearchScopeIcon },
  { name: 'Talent', copy: 'Reassess capability', Icon: TalentIcon },
  { name: 'Business', copy: 'Improve performance', Icon: BarChartIcon },
]

function YOA() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <YoaNav />

      <main className="flex-1">
        {/* 1. Hero */}
        <section className="px-5 pt-10 pb-16 md:px-8 md:pt-16">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>YOA by HappyZero</Eyebrow>

            <h1 className="mt-4 max-w-2xl text-[40px] font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-[52px]">
              Your Manufacturing <span className="text-blue-600">Academy.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-slate-600">
              Build a stronger, more capable workforce — across your
              organization and supply chain.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              <DemoButton />
              <button type="button" className="inline-flex items-center gap-3 text-sm font-semibold text-slate-900">
                <PlayIcon width={32} height={32} strokeWidth={1.5} className="text-slate-700" />
                <span className="flex flex-col items-start leading-tight">
                  Watch Overview
                  <span className="text-xs font-normal text-slate-500">2 min</span>
                </span>
              </button>
            </div>

            <div className="mt-12">
              <p className="mb-3 hidden text-right font-serif text-base italic leading-snug text-slate-400 sm:block">
                Learn &middot; Apply &middot; Grow
              </p>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <div className="flex items-center justify-between bg-[#0B1B3A] px-5 py-3">
                  <span className="text-sm font-bold text-white">Acme Manufacturing Academy</span>
                  <div className="flex items-center gap-3 text-white/50">
                    <SearchScopeIcon width={16} height={16} strokeWidth={1.8} />
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                      JD
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 bg-[#0B1B3A] p-5 pb-6 md:grid-cols-[auto_1fr]">
                  <div className="hidden flex-col gap-3 pr-6 text-xs font-medium text-white/50 md:flex">
                    <span className="text-white">Home</span>
                    <span>Learning</span>
                    <span>People</span>
                    <span>Learning Paths</span>
                    <span>Assessments</span>
                    <span>Reports</span>
                  </div>

                  <div className="rounded-xl bg-white p-5">
                    <p className="text-lg font-bold text-slate-900">Good morning, Team.</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Keep learning. Build a brighter tomorrow.
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {heroStats.map(({ label, value, Icon }) => (
                        <div key={label} className="rounded-lg bg-slate-50 p-3">
                          <Icon width={16} height={16} strokeWidth={1.8} className="text-blue-600" />
                          <p className="mt-2 text-lg font-extrabold text-slate-900">{value}</p>
                          <p className="text-[11px] text-slate-500">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. The Big Idea (Why YOA) */}
        <section className="bg-slate-50 px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <Eyebrow className="justify-center">Why YOA</Eyebrow>
              <h2 className="mx-auto mt-3 max-w-xl text-[28px] font-bold leading-tight text-slate-900 md:text-[34px]">
                Turn Knowledge Into Capability.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600">
                Give your people one place to learn, practice and build the
                capabilities that matter to your organization.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {bigIdeaPillars.map(({ name, copy, Icon }) => (
                <div key={name} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon width={22} height={22} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-slate-900">{name}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. One Academy. Your Ecosystem. */}
        <section className="px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>One Academy. Your Ecosystem.</Eyebrow>
            <h2 className="mt-3 text-[28px] font-bold leading-tight text-slate-900 md:text-[34px]">
              One Academy. A Stronger Ecosystem.
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystemCards.map(({ name, copy, Icon, imageClass }) => (
                <div key={name} className="flex flex-col gap-3">
                  <div className={`relative aspect-square rounded-2xl bg-gradient-to-br ${imageClass}`}>
                    <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                      <Icon width={18} height={18} strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{name}</h3>
                  <p className="text-sm text-slate-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Your Academy. Your Brand. */}
        <section className="bg-[#0B1B3A] px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <Eyebrow className="text-white/50">
              Your Academy. Your Brand.
            </Eyebrow>
            <h2 className="mt-3 max-w-xl text-[28px] font-bold leading-tight text-white md:text-[34px]">
              Make Learning Feel Like Your Organization.
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/70">
              Launch a branded learning environment built around the way
              your organization works.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div className="flex flex-wrap gap-3">
                {brandElements.map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white"
                  >
                    <SparkleIcon width={14} height={14} strokeWidth={2} className="text-blue-400" />
                    {label}
                  </span>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <span className="h-8 w-8 rounded-lg bg-blue-500" />
                  <span className="h-8 w-8 rounded-lg bg-emerald-400" />
                  <span className="h-8 w-8 rounded-lg bg-orange-300" />
                  <span className="ml-auto text-xs font-medium text-white/50">Brand Colors</span>
                </div>
                <div className="mt-4 rounded-xl bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">learning.yourcompany.com</span>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
                      Live
                    </span>
                  </div>
                  <div className="mt-3 h-24 rounded-lg bg-gradient-to-br from-slate-200 to-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Learning Experience */}
        <section className="px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Learning Experience</Eyebrow>
            <h2 className="mt-3 text-[28px] font-bold leading-tight text-slate-900 md:text-[34px]">
              Built for Learning That Gets Applied.
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#0B1B3A] p-5">
                <div className="rounded-xl bg-white p-5">
                  <p className="text-sm font-semibold text-slate-900">CNC Machine Operation</p>
                  <p className="text-xs text-slate-500">Practical Simulation</p>
                  <div className="mt-4 aspect-video rounded-lg bg-gradient-to-br from-slate-300 to-slate-100" />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Progress</span>
                    <span className="text-sm font-bold text-blue-600">62%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-slate-100">
                    <div className="h-1.5 w-[62%] rounded-full bg-blue-600" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
                {learningCapabilities.map(({ name, Icon }) => (
                  <div key={name} className="rounded-2xl bg-blue-50 p-5 text-center">
                    <Icon width={22} height={22} strokeWidth={1.6} className="mx-auto text-blue-600" />
                    <p className="mt-3 text-sm font-semibold text-slate-900">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Featured Learning Paths */}
        <section className="bg-slate-50 px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="max-w-lg text-[28px] font-bold leading-tight text-slate-900 md:text-[34px]">
              Learning for the Work That Matters.
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredPaths.map(({ tag, title, imageClass }) => (
                <article key={title} className="flex flex-col gap-3">
                  <div className={`aspect-video rounded-2xl bg-gradient-to-br ${imageClass}`} />
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                    {tag}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-slate-900">{title}</h3>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center text-sm font-medium text-slate-600">
              Use our content. Add your own. Build your academy your way.
            </p>
          </div>
        </section>

        {/* 7. How YOA Works */}
        <section className="px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[28px] font-bold leading-tight text-slate-900 md:text-[34px]">
              From Knowledge to Capability.
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {howYoaWorks.map(({ name, copy, Icon }, index) => (
                <div key={name} className="relative rounded-2xl bg-blue-50 p-5">
                  <span className="text-xs font-bold text-slate-400">{`0${index + 1}`}</span>
                  <Icon width={20} height={20} strokeWidth={1.8} className="mt-2 text-blue-600" />
                  <p className="mt-3 text-sm font-bold text-slate-900">{name}</p>
                  <p className="mt-1 text-xs text-slate-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. For Every Role */}
        <section className="bg-slate-50 px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[28px] font-bold leading-tight text-slate-900 md:text-[34px]">
              One Platform. Every Learner.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {roles.map(({ name, copy, Icon }) => (
                <div key={name} className="rounded-2xl bg-white p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon width={20} height={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-slate-900">{name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Admin / Business Control */}
        <section className="px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-[28px] font-bold leading-tight text-slate-900 md:text-[34px]">
                  Know Who&rsquo;s Learning. Know What&rsquo;s Changing.
                </h2>
                <p className="mt-4 max-w-md text-sm text-slate-600">
                  Give HR, L&amp;D and business leaders visibility into
                  learning — and the ability to connect it to organizational
                  capability.
                </p>
              </div>

              <div className="rounded-2xl bg-[#0B1B3A] p-5">
                <div className="flex items-center justify-between text-white/70">
                  <span className="text-sm font-bold text-white">Admin Dashboard</span>
                  <QmsIcon width={16} height={16} strokeWidth={1.8} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {adminCapabilities.map((label) => (
                    <div key={label} className="rounded-lg bg-white/5 p-3">
                      <ChipIcon width={16} height={16} strokeWidth={1.6} className="text-blue-400" />
                      <p className="mt-2 text-xs font-medium leading-tight text-white/80">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. YOA + Talent */}
        <section className="bg-slate-50 px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[28px] font-bold leading-tight text-slate-900 md:text-[34px]">
              From Capability Gap to Capability Growth.
            </h2>

            <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
              {talentLoop.map(({ name, copy, Icon }, index) => (
                <div key={`${name}-${index}`} className="flex items-center gap-2 md:flex-1">
                  <div className="flex-1 rounded-2xl bg-white p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Icon width={20} height={20} strokeWidth={1.8} />
                    </span>
                    <p className="mt-3 text-sm font-bold text-slate-900">{name}</p>
                    <p className="mt-1 text-xs text-slate-500">{copy}</p>
                  </div>
                  {index < talentLoop.length - 1 && (
                    <ArrowRightIcon
                      width={18}
                      height={18}
                      strokeWidth={2}
                      className="hidden shrink-0 text-slate-300 md:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section className="px-5 py-14 md:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B1B3A] via-[#0B1B3A] to-blue-950">
            <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-lg">
                <Eyebrow className="text-white/50">
                  Build Your Academy
                </Eyebrow>
                <h2 className="mt-3 text-[28px] font-bold leading-tight text-white md:text-[34px]">
                  Ready to Build Your Own Academy?
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  Give your people, suppliers and ecosystem the capability
                  they need for what&rsquo;s next.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <DemoButton />
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Talk to an Expert
                    <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                  </Link>
                </div>
              </div>

              <div className="flex items-end justify-end gap-4">
                <PersonIcon width={56} height={56} strokeWidth={1.2} className="text-white/60" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <YoaFooter />
    </div>
  )
}

export default YOA
