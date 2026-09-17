import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/talent', label: 'Talent' },
  { to: '/academy', label: 'Academy' },
  { to: '/digital-qms', label: 'Digital QMS' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
  { to: '/yoa', label: 'YOA' },
]

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4">
          <span className="text-lg font-semibold text-slate-900">HappyZero</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive
                      ? 'font-medium text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} HappyZero. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Layout
