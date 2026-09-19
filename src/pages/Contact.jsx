import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  ArrowRightIcon,
  BarChartIcon,
  CalendarIcon,
  ChatIcon,
  ChevronDownIcon,
  FactoryIcon,
  GearIcon,
  GridIcon,
  LightbulbIcon,
  LinkedInIcon,
  MailIcon,
  PersonAddIcon,
  PersonIcon,
  PhoneIcon,
  PinIcon,
} from '../components/icons'
import { SectionLabel } from '../components/ui'

const heroPoints = [
  { label: 'A focused conversation', Icon: ChatIcon },
  { label: 'Practical advice', Icon: PersonAddIcon },
  { label: 'Explore possibilities', Icon: LightbulbIcon },
  { label: 'No obligation', Icon: BarChartIcon },
]

const helpOptions = [
  'Talent — Skills Intelligence',
  'Academy — Capability Development',
  'Digital QMS',
  'Manufacturing Quality',
  'Skill Assessment',
  'AI & Digital Transformation',
  'Other',
]

// Maps the ?service= query param (set by CTAs elsewhere on the site) to the
// matching option text above. Add an entry here whenever a new CTA links in
// with a service param.
const serviceParamToOption = {
  talent: 'Talent — Skills Intelligence',
  academy: 'Academy — Capability Development',
  'digital-qms': 'Digital QMS',
  'manufacturing-quality': 'Manufacturing Quality',
  'skill-assessment': 'Skill Assessment',
  'ai-digital-transformation': 'AI & Digital Transformation',
}

const directContact = [
  {
    name: 'Email Us',
    copy: 'For general enquiries',
    detail: 'hello@happyzero.ai',
    Icon: MailIcon,
    href: 'mailto:hello@happyzero.ai',
  },
  {
    name: 'Call Us',
    copy: 'Mon – Fri, 9am – 6pm (IST)',
    detail: '[Add verified phone number]',
    Icon: PhoneIcon,
  },
  {
    name: 'Our Location',
    copy: 'Registered office',
    detail: '[Add verified company address]',
    Icon: PinIcon,
  },
  {
    name: 'Follow Us',
    copy: 'Stay updated',
    detail: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://linkedin.com',
  },
]

const faqs = [
  {
    q: 'What happens after I submit the form?',
    a: 'We’ll get in touch within 1–2 business days to understand your needs.',
    Icon: GridIcon,
  },
  {
    q: 'Is there a commitment to talk?',
    a: 'No. It’s a no-obligation conversation.',
    Icon: CalendarIcon,
  },
  {
    q: 'Can we discuss a specific use case?',
    a: 'Yes. We’d be happy to discuss your specific manufacturing challenges.',
    Icon: PersonIcon,
  },
  {
    q: 'Do you work with small and mid-sized manufacturers?',
    a: 'Yes. We work with manufacturing organizations of all sizes.',
    Icon: GearIcon,
  },
  {
    q: 'Can HappyZero support implementation?',
    a: 'Yes. Our services team can support you from planning through rollout.',
    Icon: FactoryIcon,
  },
  {
    q: 'Which HappyZero product is right for us?',
    a: 'Tell us where you are today and we’ll help you identify the best starting point.',
    Icon: LightbulbIcon,
  },
]

function ContactForm({ initialService = '' }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-xl font-bold text-[#0A0A0A]">Start the Conversation</h2>
      <p className="mt-1 text-sm text-neutral-500">
        Fill in a few details and we&rsquo;ll be in touch soon.
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium text-[#0A0A0A]">
            Name <span className="text-[#FF6A00]">*</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:border-[#FF6A00] focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#0A0A0A]">
            Work Email <span className="text-[#FF6A00]">*</span>
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:border-[#FF6A00] focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#0A0A0A]">
            Company <span className="text-[#FF6A00]">*</span>
          </label>
          <input
            type="text"
            placeholder="Your company name"
            className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:border-[#FF6A00] focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#0A0A0A]">
            What can we help with? <span className="text-[#FF6A00]">*</span>
          </label>
          <select
            defaultValue={initialService}
            className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-neutral-600 focus:border-[#FF6A00] focus:outline-none"
          >
            <option value="" disabled>
              Select an option
            </option>
            {helpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-[#0A0A0A]">Phone (Optional)</label>
          <input
            type="tel"
            placeholder="+91 00000 00000"
            className="mt-1.5 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-400 focus:border-[#FF6A00] focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
        >
          Book a Conversation
          <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
        </button>

        <p className="text-center text-xs text-neutral-500">
          No obligation. Just a focused conversation.
        </p>
      </form>
    </div>
  )
}

function FaqItem({ q, a, Icon }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-3 text-left"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
          <Icon width={18} height={18} strokeWidth={1.8} />
        </span>
        <span className="flex-1 text-sm font-bold leading-snug text-[#0A0A0A]">{q}</span>
        <ChevronDownIcon
          width={18}
          height={18}
          strokeWidth={2}
          className={`mt-1 shrink-0 text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="mt-3 pl-12 text-sm text-neutral-600">{a}</p>}
    </div>
  )
}

function Contact() {
  const [searchParams] = useSearchParams()
  const initialService = serviceParamToOption[searchParams.get('service')] ?? ''

  return (
    <>
      {/* Hero + Contact Form */}
      <section className="px-5 pt-10 pb-14 md:px-8 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionLabel>Contact HappyZero</SectionLabel>
              <h1 className="mt-4 text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A] md:text-[52px]">
                Let&rsquo;s Build a Stronger <span className="text-[#FF6A00]">Tomorrow.</span>
              </h1>
              <p className="mt-5 max-w-md text-base text-neutral-600">
                Tell us where you are today. We&rsquo;ll help you identify
                where HappyZero can create the most value.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {heroPoints.map(({ label, Icon }) => (
                  <div key={label} className="flex flex-col items-start gap-2">
                    <Icon width={22} height={22} strokeWidth={1.6} className="text-[#FF6A00]" />
                    <span className="text-sm font-medium leading-tight text-neutral-600">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm initialService={initialService} />
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Or Get in Touch Directly</SectionLabel>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            We&rsquo;re Here to Help.
          </h2>
          <p className="mt-2 text-sm text-neutral-500">
            Prefer to reach out directly? Use the options below.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {directContact.map(({ name, copy, detail, Icon, href }) => (
              <div key={name} className="rounded-2xl border border-black/5 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-[#FF6A00]">
                  <Icon width={20} height={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#0A0A0A]">{name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{copy}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#FF6A00] hover:text-[#e65f00]"
                  >
                    {detail}
                    <ArrowRightIcon width={14} height={14} strokeWidth={2.2} />
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-semibold text-neutral-400">{detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Build Together */}
      <section className="px-5 py-10 md:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,106,0,0.2),transparent_60%)]" />
          <div className="relative flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-lg">
              <SectionLabel className="text-white/50">Let&rsquo;s Build Together</SectionLabel>
              <h2 className="mt-3 text-[28px] font-bold leading-tight text-white md:text-[34px]">
                A More Capable Manufacturing Future.
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Whether you&rsquo;re exploring our software, need expert
                support, want to discuss a specific challenge or simply
                learn more about HappyZero — we&rsquo;d love to hear from
                you.
              </p>
              <div className="mt-7">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
                >
                  Start a Conversation
                  <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                </a>
              </div>
            </div>

            <div className="flex items-end justify-end gap-4">
              <PersonIcon width={56} height={56} strokeWidth={1.2} className="text-white/60" />
              <p className="font-serif text-lg italic leading-snug text-white/80">
                Conversations
                <br />today.
                <br />A better
                <br />tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Frequent Questions</SectionLabel>
          <h2 className="mt-3 text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
            A Few Quick Answers.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final micro-statement */}
      <section className="px-5 pb-16 pt-4 md:px-8">
        <p className="mx-auto max-w-6xl text-center text-sm font-medium text-neutral-500">
          People. Capability. Technology. A Better Tomorrow.
        </p>
      </section>
    </>
  )
}

export default Contact
