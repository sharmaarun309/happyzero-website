import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { primaryNavLinks, softwareItems } from './navData'
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  SearchIcon,
} from './icons'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? 'text-[#0A0A0A]' : 'text-neutral-600 hover:text-[#0A0A0A]'
  }`

function Logo() {
  return (
    <Link to="/" className="flex flex-col leading-none">
      <span className="text-xl font-extrabold tracking-tight text-[#0A0A0A]">
        HappyZero
      </span>
      <span className="mt-0.5 text-[11px] font-medium text-neutral-500">
        Human + AI. Better Manufacturing.
      </span>
    </Link>
  )
}

function BookACallButton({ className = '' }) {
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e65f00] ${className}`}
    >
      Book a Call
      <ArrowRightIcon width={16} height={16} strokeWidth={2.2} />
    </Link>
  )
}

function SoftwareDropdownPanel({ onNavigate }) {
  return (
    <div className="grid gap-1 p-2">
      {softwareItems.map(({ name, subtitle, to, Icon, iconClass }) => (
        <Link
          key={to}
          to={to}
          onClick={onNavigate}
          className="flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-neutral-100"
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
          >
            <Icon width={18} height={18} strokeWidth={2} />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold text-[#0A0A0A]">{name}</span>
            <span className="text-xs text-neutral-500">{subtitle}</span>
          </span>
        </Link>
      ))}
    </div>
  )
}

function DesktopSoftwareDropdown() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-neutral-600 transition-colors hover:text-[#0A0A0A]"
      >
        Software
        <ChevronDownIcon
          width={16}
          height={16}
          strokeWidth={2.2}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
          <div className="rounded-2xl border border-black/5 bg-white shadow-xl">
            <SoftwareDropdownPanel onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

function MobileSoftwareAccordion({ onNavigate }) {
  const [open, setOpen] = useState(true)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold ${
          open ? 'bg-neutral-100 text-[#0A0A0A]' : 'text-[#0A0A0A]'
        }`}
      >
        Software
        <ChevronDownIcon
          width={18}
          height={18}
          strokeWidth={2.2}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="mt-1 rounded-xl bg-neutral-50">
          <SoftwareDropdownPanel onNavigate={onNavigate} />
        </div>
      )}
    </div>
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
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FBF9F6] md:hidden">
      <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
        <Logo />
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="text-neutral-600 hover:text-[#0A0A0A]"
          >
            <SearchIcon width={22} height={22} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="text-neutral-800 hover:text-[#0A0A0A]"
          >
            <CloseIcon width={24} height={24} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-4">
        <NavLink to="/" end onClick={onClose} className="rounded-xl px-3 py-3 text-base font-semibold text-[#0A0A0A]">
          Home
        </NavLink>

        <MobileSoftwareAccordion onNavigate={onClose} />

        {primaryNavLinks.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-[#0A0A0A]"
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-black/5 px-5 py-4">
        <BookACallButton className="w-full justify-center" />
      </div>
    </div>
  )
}

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#FBF9F6]/90 backdrop-blur supports-[backdrop-filter]:bg-[#FBF9F6]/75">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            <DesktopSoftwareDropdown />
            {primaryNavLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <BookACallButton />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="text-[#0A0A0A] md:hidden"
          >
            <HamburgerIcon width={26} height={26} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  )
}

export default Nav
