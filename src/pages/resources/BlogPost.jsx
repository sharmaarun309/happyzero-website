import { Link, Navigate, useParams } from 'react-router-dom'
import CtaBand from '../../components/sections/CtaBand'
import { ArrowRightIcon, ChevronRightIcon } from '../../components/icons'
import { SectionLabel } from '../../components/ui'
import { capaThatSticks } from '../../data/blogs/capa-that-sticks'
import { whySkillsFirst } from '../../data/blogs/why-skills-first'

// Slug -> post. Adding a blog means adding the data file here and a matching
// entry in src/data/resources.ts, which is what the cards read from.
const posts = {
  [whySkillsFirst.slug]: whySkillsFirst,
  [capaThatSticks.slug]: capaThatSticks,
}

function Block({ block }) {
  if (block.type === 'heading') {
    return (
      <h2 className="mt-10 text-[24px] font-bold leading-snug tracking-[-0.02em] text-[#0A0A0A] md:text-[28px]">
        {block.text}
      </h2>
    )
  }

  if (block.type === 'list') {
    return (
      <ul className="mt-5 space-y-3">
        {block.items.map((item) => {
          const term = typeof item === 'string' ? null : item.term
          const text = typeof item === 'string' ? item : item.text

          return (
            <li key={term || text} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6A00]" />
              <span className="text-base leading-relaxed text-neutral-700">
                {term && <span className="font-semibold text-[#0A0A0A]">{term}. </span>}
                {text}
              </span>
            </li>
          )
        })}
      </ul>
    )
  }

  if (block.type === 'callout') {
    return (
      <p className="mt-7 rounded-2xl border-l-2 border-[#FF6A00] bg-neutral-50 px-5 py-4 text-base font-medium leading-relaxed text-[#0A0A0A]">
        {block.text}
      </p>
    )
  }

  return <p className="mt-5 text-base leading-relaxed text-neutral-700">{block.text}</p>
}

function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) return <Navigate to="/resources/blogs" replace />

  return (
    <>
      <article className="px-5 pt-8 pb-4 md:px-8 md:pt-12">
        <div className="mx-auto max-w-2xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
              <li>
                <Link to="/resources" className="hover:text-[#FF6A00]">
                  Resources
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center">
                <ChevronRightIcon width={14} height={14} strokeWidth={2} />
              </li>
              <li>
                <Link to="/resources/blogs" className="hover:text-[#FF6A00]">
                  Blogs
                </Link>
              </li>
            </ol>
          </nav>

          <header className="mt-7">
            <SectionLabel>Blog</SectionLabel>

            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0A0A0A] md:text-[44px]">
              {post.title}
            </h1>

            <p className="mt-5 text-base leading-relaxed text-neutral-600">{post.description}</p>

            <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
              <span className="font-medium text-[#0A0A0A]">{post.author}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.date}</span>
              {post.readingTime && (
                <>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime}</span>
                </>
              )}
            </p>
          </header>

          <div className="mt-8 border-t border-black/5 pt-2">
            {post.blocks.map((block, index) => (
              <Block key={`${block.type}-${index}`} block={block} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-black/5 bg-neutral-50 p-6 md:p-8">
            <h2 className="text-[20px] font-bold leading-snug tracking-[-0.02em] text-[#0A0A0A]">
              {post.endCard.title}
            </h2>

            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {post.endCard.links.map(({ name, description, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex h-full flex-col rounded-xl border border-black/5 bg-white p-5 transition-colors hover:border-black/15"
                  >
                    <span className="text-base font-semibold leading-snug text-[#0A0A0A]">{name}</span>
                    <span className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] group-hover:text-[#FF6A00]">
                      Learn more
                      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              to="/resources/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A0A0A] hover:text-[#FF6A00]"
            >
              <ChevronRightIcon width={16} height={16} strokeWidth={2.2} className="rotate-180" />
              Back to blogs
            </Link>
          </div>
        </div>
      </article>

      <CtaBand
        title="Want to talk it through?"
        description="Book a call and tell us what you are working on. We will point you at the practical next step."
        ctaLabel="Book a Call"
        ctaTo="/contact"
      />
    </>
  )
}

export default BlogPost
