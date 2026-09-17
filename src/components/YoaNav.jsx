import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRightIcon, CloseIcon, HamburgerIcon } from './icons'

const navLinks = [
  { label: 'For Business', to: '/yoa' },
  { label: 'Learning Paths', to: '/yoa' },
  { label: 'Customer Stories', to: '/yoa' },
  { label: 'Resources', to: '/yoa' },
]

function Logo() {
  return (
    <Link to="/yoa" className="flex items-center gap-2.5">
      <span className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-blue-700">YOA</span>
        <span className="mt-0.5 text-[10px] font-medium text-slate-400">by HappyZero</span>
      </span>
      <span className="hidden h-8 w-px bg-slate-200 sm:block" />
      <span className="hidden text-xs leading-tight text-slate-500 sm:block">
        Your Manufacturing
        <br />Academy. At Scale.
      </span>
    </Link>
  )
}

function DemoButton({ className = '' }) {
  return (
    <Link
      to="/yoa"
      className={`inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 ${className}`}
    >
      Request a Demo
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

function MobileMenu({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <Logo />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="text-slate-700 hover:text-blue-600"
        >
          <CloseIcon width={24} height={24} strokeWidth={1.8} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-5 py-4">
        {navLinks.map(({ label, to }) => (
          <NavLink
            key={label}
            to={to}
            onClick={onClose}
            className="rounded-xl px-3 py-3 text-base font-semibold text-slate-800"
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-100 px-5 py-4">
        <DemoButton className="w-full justify-center" />
      </div>
    </div>
  )
}

function YoaNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <DemoButton />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="text-slate-800 md:hidden"
          >
            <HamburgerIcon width={26} height={26} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  )
}

export default YoaNav
