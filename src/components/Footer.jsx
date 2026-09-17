import { Link } from 'react-router-dom'

const footerColumns = [
  {
    heading: 'Software',
    links: [
      { label: 'Talent', to: '/talent' },
      { label: 'Academy', to: '/academy' },
      { label: 'YOA', to: '/yoa' },
      { label: 'Digital QMS', to: '/digital-qms' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'QMS Outsourcing', to: '/services' },
      { label: 'Gap Analysis & Implementation', to: '/services' },
      { label: 'Training & Capability Development', to: '/services' },
      { label: 'Skill Assessment', to: '/services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', to: '/resources' },
      { label: 'Guides', to: '/resources' },
      { label: 'Case Studies', to: '/resources' },
    ],
  },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'Email', href: 'mailto:hello@happyzero.ai' },
]

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#FBF9F6]">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="text-xl font-extrabold tracking-tight text-[#0A0A0A]">
              HappyZero
            </span>
            <p className="mt-1 text-[11px] font-medium text-neutral-500">
              Human + AI. Better Manufacturing.
            </p>
            <ul className="mt-5 flex items-center gap-4">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-neutral-500 transition-colors hover:text-[#0A0A0A]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-[#0A0A0A]">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-neutral-600 transition-colors hover:text-[#0A0A0A]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} HappyZero Technologies Pvt. Ltd.
            All rights reserved.
          </p>
          <p>Same system. A stronger manufacturing future.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
