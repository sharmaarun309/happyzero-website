import { Link } from 'react-router-dom'
import CtaBand from '../sections/CtaBand'
import { ArrowRightIcon, ChevronRightIcon } from '../icons'
import { SectionLabel } from '../ui'
import { resourceCategories, resourcesByCategory } from '../../data/resources'
import CategoryPills from './CategoryPills'
import ResourceCard from './ResourceCard'

// Shared template behind /resources/blogs, /brochures, /case-studies and
// /infographics. The four page files are thin wrappers that pass a slug.
function ResourceListPage({ category }) {
  const meta = resourceCategories.find((item) => item.slug === category)
  const items = resourcesByCategory(category)

  return (
    <>
      <section className="px-5 pt-8 pb-6 md:px-8 md:pt-12">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-neutral-500">
              <li>
                <Link to="/resources" className="hover:text-[#FF6A00]">
                  Resources
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <ChevronRightIcon width={14} height={14} strokeWidth={2} />
              </li>
              <li aria-current="page" className="font-medium text-[#0A0A0A]">
                {meta.label}
              </li>
            </ol>
          </nav>

          <div className="mt-7">
            <SectionLabel>Resources</SectionLabel>
          </div>

          <h1 className="mt-4 max-w-2xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A] md:text-[48px]">
            {meta.label}
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600">{meta.description}</p>

          <CategoryPills active={category} className="mt-8" />
        </div>
      </section>

      <section className="px-5 pb-6 pt-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          {items.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <ResourceCard key={item.id} item={item} typeTag={meta.typeTag} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-black/5 bg-neutral-50 p-8 md:p-12">
              <p className="max-w-md text-lg font-semibold leading-snug text-[#0A0A0A]">
                {meta.label} coming soon.
              </p>
              <p className="mt-3 max-w-md text-sm text-neutral-600">
                We are documenting real customer outcomes.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00]"
              >
                Contact
                <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Want to talk it through?"
        description="Book a call and tell us what you are working on. We will point you at the practical next step."
        ctaLabel="Book a Call"
        ctaTo="/contact"
      />
    </>
  )
}

export default ResourceListPage
