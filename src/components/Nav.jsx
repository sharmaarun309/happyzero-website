import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  academyLink,
  aboutLink,
  resourcesPanel,
  servicesPanel,
  softwareItems,
} from './navData'
import { navResources } from '../data/resources'
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  ExternalLinkIcon,
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

function AcademyExternalLink({ className = '', showIcon = false, onClick }) {
  return (
    <a
      href={academyLink.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    >
      {academyLink.label}
      {showIcon && (
        <ExternalLinkIcon width={13} height={13} strokeWidth={2} className="inline-block" />
      )}
    </a>
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

function DesktopSoftwareDropdown({ onMouseEnterOther }) {
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
      onMouseEnter={() => {
        onMouseEnterOther?.()
        setOpen(true)
      }}
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

// Desktop trigger for the Services / Resources mega-panels: a top-level label
// with a chevron and an orange underline while its panel is open.
function MegaMenuTrigger({ label, active, onToggle, onMouseEnter }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={onMouseEnter}
      aria-expanded={active}
      className={`relative flex items-center gap-1 pb-1 text-sm font-medium transition-colors ${
        active ? 'text-[#0A0A0A]' : 'text-neutral-600 hover:text-[#0A0A0A]'
      }`}
    >
      {label}
      <ChevronDownIcon
        width={16}
        height={16}
        strokeWidth={2.2}
        className={`transition-transform ${active ? 'rotate-180' : ''}`}
      />
      <span
        className={`absolute inset-x-0 -bottom-px h-0.5 bg-[#FF6A00] transition-opacity ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </button>
  )
}

function PanelItemsList({ items, onNavigate }) {
  return (
    <ul className="divide-y divide-black/5">
      {items.map(({ name, subtitle, to, Icon }) => (
        <li key={name}>
          <Link
            to={to}
            onClick={onNavigate}
            className="flex items-start gap-3 px-3 py-3.5 transition-colors hover:bg-black/[0.03]"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
              <Icon width={16} height={16} strokeWidth={1.8} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-[#0A0A0A]">{name}</span>
              <span className="text-xs text-neutral-500">{subtitle}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function LatestResourcesRow({ onNavigate }) {
  return (
    <div className="mt-4 border-t border-black/5 pt-4">
      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
        Latest
      </span>
      {navResources.length > 0 ? (
        <div className="mt-3 grid grid-cols-2 gap-4">
          {navResources.slice(0, 2).map(({ tag, title, to, imageClass }) => (
            <Link
              key={title}
              to={to}
              onClick={onNavigate}
              className="flex gap-3 rounded-xl p-2 transition-colors hover:bg-black/[0.03]"
            >
              <span
                className={`h-12 w-16 shrink-0 rounded-lg bg-gradient-to-br ${imageClass}`}
              />
              <span className="flex flex-col justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-[#FF6A00]">
                  {tag}
                </span>
                <span className="text-sm font-medium leading-snug text-[#0A0A0A]">
                  {title}
                </span>
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-sm text-neutral-400">New resources coming soon.</p>
      )}
    </div>
  )
}

// Full-container-width panel that opens below the header. Absolutely
// positioned against the (sticky, so positioned) header so it never
// pushes page content down.
function DesktopMegaPanel({ panel, showLatest, onNavigate }) {
  return (
    <div className="absolute inset-x-0 top-full border-t border-black/5 bg-[#FBF9F6] shadow-xl">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <div className="flex gap-10">
          <div className="w-[30%] shrink-0 border-r border-black/5 pr-8">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#FF6A00]">
              {panel.eyebrow}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{panel.intro}</p>
            <Link
              to={panel.hubTo}
              onClick={onNavigate}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6A00] hover:text-[#e65f00]"
            >
              Learn more
              <ArrowRightIcon width={14} height={14} strokeWidth={2.2} />
            </Link>
          </div>
          <div className="flex-1">
            <PanelItemsList items={panel.items} onNavigate={onNavigate} />
            {showLatest && <LatestResourcesRow onNavigate={onNavigate} />}
          </div>
        </div>
      </div>
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

// Mobile accordion for Services / Resources: same 4 items (+ Latest row for
// Resources) as desktop, minus the eyebrow/intro blurb, plus a "Learn more"
// link to the hub page since the label itself no longer navigates.
function MobilePanelAccordion({ panel, showLatest, onNavigate }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        data-panel={panel.label}
        className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold ${
          open ? 'bg-neutral-100 text-[#0A0A0A]' : 'text-[#0A0A0A]'
        }`}
      >
        {panel.label}
        <ChevronDownIcon
          width={18}
          height={18}
          strokeWidth={2.2}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="mt-1 rounded-xl bg-neutral-50 px-2 pb-3 pt-1">
          <PanelItemsList items={panel.items} onNavigate={onNavigate} />
          {showLatest && <LatestResourcesRow onNavigate={onNavigate} />}
          <Link
            to={panel.hubTo}
            onClick={onNavigate}
            className="mt-3 inline-flex items-center gap-1.5 px-3 text-sm font-semibold text-[#FF6A00]"
          >
            Learn more
            <ArrowRightIcon width={14} height={14} strokeWidth={2.2} />
          </Link>
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

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

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

        <MobilePanelAccordion panel={servicesPanel} showLatest={false} onNavigate={onClose} />

        <AcademyExternalLink
          onClick={onClose}
          showIcon
          className="flex items-center gap-1.5 rounded-xl px-3 py-3 text-base font-semibold text-[#0A0A0A]"
        />

        <NavLink
          to={aboutLink.to}
          onClick={onClose}
          className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-[#0A0A0A]"
        >
          {aboutLink.label}
        </NavLink>

        <MobilePanelAccordion panel={resourcesPanel} showLatest onNavigate={onClose} />
      </nav>

      <div className="border-t border-black/5 px-5 py-4">
        <BookACallButton className="w-full justify-center" />
      </div>
    </div>
  )
}

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activePanel, setActivePanel] = useState(null)
  const headerRef = useRef(null)

  const closePanel = () => setActivePanel(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closePanel()
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') closePanel()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={closePanel}
        className="sticky top-0 z-40 border-b border-black/5 bg-[#FBF9F6]/90 backdrop-blur supports-[backdrop-filter]:bg-[#FBF9F6]/75"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            <DesktopSoftwareDropdown onMouseEnterOther={closePanel} />

            <MegaMenuTrigger
              label={servicesPanel.label}
              active={activePanel === 'services'}
              onMouseEnter={() => setActivePanel('services')}
              onToggle={() => setActivePanel('services')}
            />

            <AcademyExternalLink
              onClick={closePanel}
              onMouseEnter={closePanel}
              showIcon
              className="flex items-center gap-1 text-sm font-medium text-neutral-600 transition-colors hover:text-[#0A0A0A]"
            />

            <NavLink
              to={aboutLink.to}
              onMouseEnter={closePanel}
              className={navLinkClass}
            >
              {aboutLink.label}
            </NavLink>

            <MegaMenuTrigger
              label={resourcesPanel.label}
              active={activePanel === 'resources'}
              onMouseEnter={() => setActivePanel('resources')}
              onToggle={() => setActivePanel('resources')}
            />
          </nav>

          <div className="hidden md:block" onMouseEnter={closePanel}>
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

        {activePanel === 'services' && (
          <DesktopMegaPanel panel={servicesPanel} showLatest={false} onNavigate={closePanel} />
        )}
        {activePanel === 'resources' && (
          <DesktopMegaPanel panel={resourcesPanel} showLatest onNavigate={closePanel} />
        )}
      </header>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </>
  )
}

export default Nav
