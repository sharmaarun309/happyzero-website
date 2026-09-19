import { Link } from 'react-router-dom'
import { resourceCategories } from '../../data/resources'

// Row of the four Resources landing pages. Scrolls sideways on small
// screens rather than wrapping, so the row never pushes the page wide.
function CategoryPills({ active, className = '' }) {
  return (
    <nav aria-label="Resource categories" className={className}>
      <ul className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
        {resourceCategories.map(({ slug, label, to }) => {
          const isActive = slug === active

          return (
            <li key={slug} className="shrink-0">
              <Link
                to={to}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#FF6A00] text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default CategoryPills
