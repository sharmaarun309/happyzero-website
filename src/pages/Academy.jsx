import { Link } from 'react-router-dom'
import {
  AcademyIcon,
  ArrowRightIcon,
  BadgeIcon,
  BarChartIcon,
  BookIcon,
  CheckIcon,
  DocumentIcon,
  GearIcon,
  PersonAddIcon,
  PersonIcon,
  RefreshIcon,
} from '../components/icons'
import { ArrowLink, SectionLabel } from '../components/ui'

const heroStrip = [
  { title: 'Learn', subtitle: 'Anytime', Icon: BookIcon },
  { title: 'Practice', subtitle: 'In Real Scenarios', Icon: GearIcon },
  { title: 'Apply', subtitle: 'On the Job', Icon: BarChartIcon },
  { title: 'Get Certified', subtitle: 'Show Your Growth', Icon: BadgeIcon },
]

const problemChecklist = [
  'Too much theory, not enough practice',
  'Not role-specific',
  'Difficult to measure impact',
  'Quickly becomes outdated',
]

const approachPillars = [
  { name: 'Practical & Applied', copy: 'Real manufacturing scenarios', Icon: PersonIcon },
  { name: 'Interactive Learning', copy: 'Activities, simulations and exercises', Icon: GearIcon },
  { name: 'Measurable Outcomes', copy: 'Assessments and certifications', Icon: GearIcon },
]

const journeySteps = [
  { name: 'Learn', copy: 'Engage with interactive content', Icon: BookIcon },
  { name: 'Practice', copy: 'Work on real-world activities', Icon: GearIcon },
  { name: 'Apply', copy: 'Use skills on the job', Icon: DocumentIcon },
  { name: 'Assess', copy: 'Validate your capability', Icon: BarChartIcon },
  { name: 'Improve', copy: 'Keep learning and growing', Icon: RefreshIcon },
]

const courses = [
  {
    title: 'ISO 9001:2026 What’s Changing?',
    copy: 'Understand the upcoming changes (based on FDIS) and prepare your organization.',
    tag: 'Popular',
    imageClass: 'from-orange-200 to-orange-50',
  },
  {
    title: 'Internal Audit for Manufacturers',
    copy: 'Learn to plan, conduct and report effective internal audits in a practical way.',
    imageClass: 'from-neutral-300 to-neutral-100',
  },
  {
    title: 'Problem Solving in Manufacturing',
    copy: 'Use structured methods to solve real shop floor problems.',
    imageClass: 'from-emerald-200 to-emerald-50',
  },
  {
    title: 'Quality Core Tools',
    copy: 'Master the essential quality tools (APQP, FMEA, SPC, MSA, PPAP) with practical examples.',
    imageClass: 'from-sky-200 to-sky-50',
  },
]

const learningComponents = [
  { name: 'Interactive Lessons', Icon: BookIcon },
  { name: 'Real-world Scenarios', Icon: GearIcon },
  { name: 'Quizzes & Assessments', Icon: DocumentIcon },
  { name: 'Downloadable Resources', Icon: DocumentIcon },
]

const lessonChecklist = [
  { label: 'Watch', done: true },
  { label: 'Practice', done: true },
  { label: 'Apply', done: true },
  { label: 'Assess', done: false },
  { label: 'Complete', done: false },
]

const impactStats = [
  { value: '0', label: 'Skill Gap' },
  { value: '0', label: 'Defects' },
  { value: '0', label: 'Customer Complaints' },
  { value: 'Higher', label: 'Productivity', highlight: true },
]

const learners = [
  {
    name: 'Shop Floor Team',
    copy: 'Build practical, hands-on skills for daily work.',
    Icon: PersonIcon,
  },
  {
    name: 'Engineers & Quality',
    copy: 'Deepen technical and quality expertise.',
    Icon: GearIcon,
  },
  {
    name: 'Managers & Leaders',
    copy: 'Develop capability to lead and improve.',
    Icon: PersonAddIcon,
  },
  {
    name: 'New Joiners',
    copy: 'Build a strong foundation for a successful career.',
    Icon: AcademyIcon,
  },
]

function ExploreAcademyButton({ className = '' }) {
  return (
    <Link
      to="/academy"
      className={`inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00] ${className}`}
    >
      Explore Academy
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

function Academy() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pt-10 pb-16 md:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Academy by HappyZero</SectionLabel>

          <h1 className="mt-4 max-w-2xl text-[40px] font-extrabold leading-[1.05] tracking-tight text-[#0A0A0A] md:text-[52px]">
            From Knowledge to <span className="text-[#FF6A00]">Capability.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600">
            Practical, hands-on learning for real manufacturing impact.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-6">
            <ExploreAcademyButton />
            <Link to="/academy" className="text-sm font-semibold text-[#0A0A0A] hover:text-[#FF6A00]">
              View Learning Paths
            </Link>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,106,0,0.22),transparent_60%)]" />
            <div className="relative flex h-64 items-end justify-between p-8 md:h-80 md:p-12">
              <PersonIcon width={72} height={72} strokeWidth={1.2} className="text-white/70" />
              <p className="max-w-[220px] text-right font-serif text-lg italic leading-snug text-white/80">
                Learn
                <br />Practice
                <br />Apply
                <br />Grow
              </p>
            </div>
            <div className="absolute right-6 top-6 max-w-[220px] rounded-xl bg-white p-4 shadow-lg">
              <p className="text-sm font-semibold leading-snug text-[#0A0A0A]">
                Build the Skills that Build a Better Tomorrow.
              </p>
              <span className="mt-2 block h-0.5 w-8 bg-[#FF6A00]" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroStrip.map(({ title, subtitle, Icon }) => (
              <div key={title} className="flex flex-col items-center gap-2 text-center">
                <Icon width={22} height={22} strokeWidth={1.6} className="text-[#FF6A00]" />
                <span className="text-sm font-semibold text-[#0A0A0A]">{title}</span>
                <span className="text-xs text-neutral-500">{subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem / Our Approach */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0A0A0A]">
              Traditional training isn&rsquo;t enough.
            </h2>
            <p className="mt-4 text-sm text-neutral-600">
              Most manufacturing training is theoretical, disconnected from
              real work, and hard to apply on the shop floor.
            </p>

            <ul className="mt-5 space-y-2.5">
              {problemChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckIcon width={16} height={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-[#FF6A00]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800">
            <div className="flex h-64 flex-col justify-end p-6 md:h-full">
              <PersonIcon width={48} height={48} strokeWidth={1.3} className="text-white/60" />
              <p className="mt-4 font-serif text-lg italic leading-snug text-white/85">
                Real Skills.
                <br />Real Work.
                <br />Real Impact.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0A0A0A]">
              Learn by Doing.
            </h2>
            <p className="mt-4 text-sm text-neutral-600">
              We combine expert knowledge, real-world scenarios and
              interactive learning to help you build skills you can actually
              apply.
            </p>

            <ul className="mt-6 space-y-5">
              {approachPillars.map(({ name, copy, Icon }) => (
                <li key={name} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
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

      {/* How Academy Works */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>How Academy Works</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                A continuous learning journey.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-neutral-500 md:text-right">
              From foundational concepts to advanced skills, Academy helps you
              learn, practice, apply and grow — at your own pace.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
            {journeySteps.map(({ name, copy, Icon }, index) => (
              <div key={name} className="flex items-center gap-2 md:flex-1">
                <div className="flex-1 rounded-2xl bg-orange-50 p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
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

      {/* Featured Learning Paths */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <SectionLabel>Featured Learning Paths</SectionLabel>
            <ArrowLink to="/academy" className="hidden sm:inline-flex">
              View All Courses
            </ArrowLink>
          </div>

          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            Courses for Real Manufacturing Needs
            <span className="text-[#FF6A00]">.</span>
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map(({ title, copy, tag, imageClass }) => (
              <article key={title} className="flex flex-col gap-3">
                <div className={`relative aspect-video rounded-2xl bg-gradient-to-br ${imageClass}`}>
                  {tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#FF6A00] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {tag}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold leading-snug text-[#0A0A0A]">
                  {title}
                </h3>
                <p className="text-sm text-neutral-500">{copy}</p>
                <ArrowLink to="/academy">Start Learning</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Learning Experience</SectionLabel>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            More Than Just Videos.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-neutral-500">
            Academy is designed for active learning — with a mix of content,
            activities, simulations, quizzes and real-world assignments.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {learningComponents.map(({ name, Icon }) => (
                <div key={name} className="rounded-2xl bg-orange-50 p-5 text-center">
                  <Icon width={22} height={22} strokeWidth={1.6} className="mx-auto text-[#FF6A00]" />
                  <p className="mt-3 text-sm font-semibold text-[#0A0A0A]">{name}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[#0A0A0A] p-5">
              <div className="flex items-center justify-between text-white/70">
                <span className="text-sm font-bold text-white">HappyZero</span>
              </div>

              <div className="mt-4 rounded-xl bg-white p-5">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A]">CNC Machine Operation</p>
                    <p className="text-xs text-neutral-500">Practical Simulation</p>
                    <div className="mt-4 aspect-video w-56 rounded-lg bg-gradient-to-br from-neutral-300 to-neutral-100" />
                  </div>

                  <div className="sm:w-40">
                    <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      Your Progress
                    </p>
                    <p className="text-2xl font-extrabold text-[#FF6A00]">75%</p>
                    <ul className="mt-3 space-y-1.5">
                      {lessonChecklist.map(({ label, done }) => (
                        <li key={label} className="flex items-center gap-2 text-sm text-neutral-600">
                          <CheckIcon
                            width={14}
                            height={14}
                            strokeWidth={2.4}
                            className={done ? 'text-emerald-500' : 'text-neutral-300'}
                          />
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/academy"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
                >
                  Continue Lesson
                  <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>
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
                Build Skills. Drive Performance.
              </h2>
              <p className="mt-3 max-w-md text-sm text-neutral-600">
                A more capable workforce leads to better quality, higher
                productivity and a stronger, more resilient organization.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {impactStats.map(({ value, label, highlight }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center gap-1 rounded-xl px-4 py-5 text-center ${
                    highlight ? 'bg-[#FF6A00] text-white' : 'border border-black/5 bg-white'
                  }`}
                >
                  <span className={`text-2xl font-extrabold ${highlight ? 'text-white' : 'text-[#FF6A00]'}`}>
                    {value}
                  </span>
                  <span className={`text-xs font-medium ${highlight ? 'text-white/90' : 'text-neutral-500'}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Every Learner */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>For Every Learner</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                Learning for Every Role.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-neutral-500 md:text-right">
              Whether you&rsquo;re on the shop floor or in the boardroom,
              Academy has learning paths for you.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learners.map(({ name, copy, Icon }) => (
              <div key={name} className="rounded-2xl border border-black/5 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
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
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-orange-950">
          <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-lg">
              <h2 className="text-[28px] font-bold leading-tight text-white md:text-[34px]">
                Let&rsquo;s Build a More Capable Manufacturing Workforce.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Help your team gain the skills they need for today and
                tomorrow.
              </p>
              <div className="mt-7">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
                >
                  Book a Capability Conversation
                  <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>

            <div className="flex items-end justify-end gap-4">
              <PersonIcon width={56} height={56} strokeWidth={1.2} className="text-white/60" />
              <p className="font-serif text-lg italic leading-snug text-white/80">
                People.
                <br />Skills.
                <br />Progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Academy
