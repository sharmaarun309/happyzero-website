import { Link } from 'react-router-dom'

const footerColumns = [
  {
    heading: 'For Business',
    links: [
      { label: 'Overview', to: '/yoa' },
      { label: 'Learning Paths', to: '/yoa' },
      { label: 'Features', to: '/yoa' },
      { label: 'Pricing', to: '/yoa' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', to: '/resources' },
      { label: 'Guides', to: '/resources' },
      { label: 'Templates', to: '/resources' },
      { label: 'Help Center', to: '/resources' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About HappyZero', to: '/about' },
      { label: 'Careers', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
]

const socialLinks = ['LinkedIn', 'YouTube', 'Email']

function YoaFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <span className="text-xl font-extrabold tracking-tight text-blue-700">YOA</span>
            <p className="text-[11px] font-medium text-slate-400">by HappyZero</p>
            <p className="mt-2 text-xs text-slate-500">
              Your Manufacturing Academy. At Scale.
            </p>
            <ul className="mt-5 flex items-center gap-4">
              {socialLinks.map((label) => (
                <li key={label}>
                  <a
                    href={label === 'Email' ? 'mailto:hello@happyzero.ai' : 'https://linkedin.com'}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel={label === 'Email' ? undefined : 'noreferrer'}
                    className="text-sm text-slate-500 transition-colors hover:text-blue-700"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-slate-900">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-slate-500 transition-colors hover:text-blue-700"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="border-t border-slate-100 pt-6 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
            <p className="text-sm font-medium leading-snug text-slate-600">
              Manufacturing Capability.
              <br />A Stronger Tomorrow.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} HappyZero Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex gap-3">
            <Link to="/about" className="hover:text-blue-700">Privacy Policy</Link>
            <span>|</span>
            <Link to="/about" className="hover:text-blue-700">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default YoaFooter
