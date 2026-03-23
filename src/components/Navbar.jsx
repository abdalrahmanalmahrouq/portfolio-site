import { useEffect, useState } from 'react'
import theme from '../theme'

const navItems = [
  { label: 'Home',       id: 'home'       },
  { label: 'About',      id: 'about'      },
  { label: 'Skills',     id: 'skills'     },
  { label: 'Projects',   id: 'projects'   },
  { label: 'Experience', id: 'experience' },
]

function Navbar() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: '-80px 0px -40% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavigate = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(96%,920px)]">
      <nav className={`relative flex items-center rounded-2xl border ${theme.navBorder} ${theme.navBg} px-4 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6`}>
        {/* Logo — left-anchored */}
        <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="flex shrink-0 items-center" aria-label="Home">
          <img src="/favicon.svg" alt="Logo" className="h-7 w-auto" />
        </a>

        {/* Nav links — absolutely centered in the full bar */}
        <ul className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:gap-3">
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavigate(e, item.id)}
                  className={`inline-flex rounded-lg px-3 py-2 text-xs font-medium transition md:text-sm ${
                    isActive ? theme.navActive : theme.navInactive
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>

  )
}

export default Navbar
