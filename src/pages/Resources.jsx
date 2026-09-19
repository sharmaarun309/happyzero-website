import { ArrowRightIcon, PersonIcon, SearchIcon } from '../components/icons'
import CategoryPills from '../components/resources/CategoryPills'
import ResourceCard from '../components/resources/ResourceCard'
import { resourceCategories, resources } from '../data/resources'
import { ArrowLink, SectionLabel } from '../components/ui'

const typeTagFor = (category) =>
  resourceCategories.find((item) => item.slug === category)?.typeTag ?? ''

const published = resources.filter((item) => item.status === 'published')

function Resources() {
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
          <CategoryPills />
        </div>
      </section>

      {/* Latest Resources */}
      <section className="px-5 py-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Latest resources</SectionLabel>
              <h2 className="mt-3 max-w-lg text-[28px] font-bold leading-tight text-[#0A0A0A] md:text-[34px]">
                Everything we have published so far.
              </h2>
            </div>
            <ArrowLink to="/resources/blogs" className="shrink-0">
              Start with the blogs
            </ArrowLink>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {published.map((item) => (
              <ResourceCard key={item.id} item={item} typeTag={typeTagFor(item.category)} />
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
