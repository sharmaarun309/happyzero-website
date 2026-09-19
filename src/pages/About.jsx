import { Link } from 'react-router-dom'
import {
  AcademyIcon,
  ArrowRightIcon,
  BarChartIcon,
  BoxIcon,
  BrainIcon,
  ChipIcon,
  ClockIcon,
  GearIcon,
  PersonAddIcon,
  PersonIcon,
  QuoteIcon,
  StackIcon,
  TruckIcon,
  XCircleIcon,
} from '../components/icons'
import { SectionLabel } from '../components/ui'

const sevenWastes = [
  { name: 'Overproduction', Icon: BoxIcon },
  { name: 'Waiting', Icon: ClockIcon },
  { name: 'Transportation', Icon: TruckIcon },
  { name: 'Overprocessing', Icon: GearIcon },
  { name: 'Excess Inventory', Icon: StackIcon },
  { name: 'Defects', Icon: XCircleIcon },
  { name: 'Unused Talent', Icon: PersonAddIcon },
]

const peopleBring = ['Judgment', 'Creativity', 'Experience', 'Leadership', 'Problem Solving', 'Improvement']
const aiBrings = ['Scale', 'Memory', 'Speed', 'Consistency', 'Monitoring', 'Execution']

const approachSteps = [
  { name: 'People Excellence', Icon: PersonIcon },
  { name: 'Capability Development', Icon: AcademyIcon },
  { name: 'Technology Enablement', Icon: GearIcon },
  { name: 'AI Augmentation', Icon: ChipIcon },
  { name: 'Better Manufacturing', Icon: BarChartIcon },
]

function About() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pt-10 pb-14 md:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>About HappyZero</SectionLabel>

          <h1 className="mt-4 max-w-xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A] md:text-[52px]">
            A More Capable Manufacturing <span className="text-[#FF6A00]">Tomorrow.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600">
            We exist to help manufacturing organizations unlock the full
            potential of their people — with the right blend of human
            expertise, intelligent software and AI.
          </p>

          <div className="mt-7">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
            >
              Our Story
              <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
            </Link>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,106,0,0.2),transparent_60%)]" />
            <div className="relative flex h-64 items-end justify-between p-8 md:h-80 md:p-12">
              <PersonIcon width={72} height={72} strokeWidth={1.2} className="text-white/70" />
              <div className="text-right font-serif text-lg italic leading-snug text-white/80">
                <p>People</p>
                <p>Power</p>
                <p>Progress</p>
                <span className="mt-1 ml-auto block h-0.5 w-10 bg-[#FF6A00]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HappyZero */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Why HappyZero</SectionLabel>
            <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
              Because Human Talent Should Never Be Wasted.
            </h2>
            <p className="mt-4 max-w-md text-sm text-neutral-600">
              Manufacturing has always had enormous intelligence. But too
              much of it remains trapped in people, processes and
              disconnected systems.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800">
            <div className="flex h-56 flex-col justify-end p-6">
              <PersonIcon width={44} height={44} strokeWidth={1.3} className="text-white/60" />
              <p className="mt-3 font-serif text-lg italic leading-snug text-white/85">
                Same People.
                <br />A Brighter Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy — ZWOHI */}
      <section className="px-5 py-14 md:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 via-neutral-100 to-neutral-200 p-8 md:p-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <SectionLabel>Our Philosophy</SectionLabel>
              <p className="mt-4 text-[56px] font-extrabold leading-none tracking-[-0.02em] text-[#0A0A0A] md:text-[80px]">
                ZWO<span className="text-[#FF6A00]">HI</span>
              </p>
              <p className="mt-2 text-lg font-semibold text-neutral-700 md:text-xl">
                Zero Waste of Human Intelligence
              </p>
              <p className="mt-4 max-w-lg text-sm text-neutral-600">
                Manufacturing has eliminated many forms of waste. We believe
                there is an eighth — the waste of human intelligence.
              </p>
              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A00] hover:text-[#e65f00]"
                >
                  Our Philosophy
                  <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>

            <div className="border-l border-neutral-400/40 pl-6 text-sm font-medium leading-relaxed text-neutral-600">
              <p>Human Intelligence</p>
              <p className="text-[#FF6A00]">+</p>
              <p>AI</p>
              <p className="mt-2 font-semibold text-[#0A0A0A]">A Stronger Tomorrow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 8th Waste */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>The 8th Waste</SectionLabel>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            The Most Overlooked Waste.
          </h2>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-7 lg:flex-1">
              {sevenWastes.map(({ name, Icon }) => (
                <div key={name} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                    <Icon width={22} height={22} strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-medium leading-tight text-neutral-600">{name}</span>
                </div>
              ))}
            </div>

            <div className="hidden h-16 w-px bg-neutral-200 lg:block" />

            <div className="flex items-center gap-4 rounded-2xl bg-orange-50 p-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#FF6A00]">
                <BrainIcon width={26} height={26} strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-sm font-medium tracking-normal text-neutral-500">
                  The 8th Waste
                </p>
                <p className="text-base font-bold text-[#FF6A00]">
                  Waste of Human Intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief / What Humans + AI Bring */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <SectionLabel>Our Belief</SectionLabel>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0A0A0A]">
              AI Should Make Human Work Matter More.
            </h2>
            <p className="mt-4 text-sm text-neutral-600">
              AI should not simply make humans work less. It should make
              human work matter more.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-5">
              <QuoteIcon width={24} height={24} strokeWidth={1.4} className="mt-0.5 shrink-0 text-[#FF6A00]" />
              <p className="text-sm font-medium leading-snug text-[#0A0A0A]">
                The goal is not to replace human intelligence, but to amplify
                it.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>What Humans + AI Bring</SectionLabel>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 rounded-2xl border border-black/5 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
                  <PersonIcon width={20} height={20} strokeWidth={1.8} />
                </span>
                <p className="mt-3 text-sm font-medium tracking-normal text-neutral-500">
                  People Bring
                </p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                  {peopleBring.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <span className="shrink-0 text-lg font-bold text-neutral-300">+</span>

              <div className="flex-1 rounded-2xl bg-[#0A0A0A] p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <ChipIcon width={20} height={20} strokeWidth={1.8} />
                </span>
                <p className="mt-3 text-sm font-medium tracking-normal text-white/50">
                  AI Brings
                </p>
                <ul className="mt-2 space-y-1 text-sm text-white/80">
                  {aiBrings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-5 text-center text-base font-semibold text-[#0A0A0A]">
              Together <span className="text-[#FF6A00]">→</span> Better Work
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision / Our Approach */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-300 to-neutral-100 p-8">
            <SectionLabel>Our Vision</SectionLabel>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0A0A0A]">
              To Make Every Manufacturing Organization AI-Native.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-neutral-700">
              A world where people, processes, technology and AI work
              together for higher performance and a better future.
            </p>
          </div>

          <div className="rounded-2xl bg-neutral-50 p-8">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="mt-3 text-[26px] font-bold leading-tight text-[#0A0A0A]">
              A Connected Path to a Better Future.
            </h2>

            <ul className="mt-6 space-y-4">
              {approachSteps.map(({ name, Icon }, index) => (
                <li key={name}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
                      <Icon width={18} height={18} strokeWidth={1.8} />
                    </span>
                    <p className="text-sm font-semibold text-[#0A0A0A]">{name}</p>
                  </div>
                  {index < approachSteps.length - 1 && (
                    <div className="ml-4 h-4 w-px bg-neutral-300" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Promise — Closing CTA */}
      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-orange-950">
          <div className="flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-lg">
              <SectionLabel className="text-white/50">Our Promise</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-white md:text-[34px]">
                A Stronger Tomorrow, Together.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                We&rsquo;re building HappyZero for the long term — with a
                deep belief in the people who make the world.
              </p>
              <div className="mt-7">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
                >
                  Let&rsquo;s Build Together
                  <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>

            <div className="flex items-end justify-end gap-4">
              <PersonIcon width={56} height={56} strokeWidth={1.2} className="text-white/60" />
              <p className="font-serif text-lg italic leading-snug text-white/80">
                Human.
                <br />Ideas.
                <br />Real Impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
