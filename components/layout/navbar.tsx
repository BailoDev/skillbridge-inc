"use client"

import { useState, useEffect } from 'react'
import type { MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Home,
  Info,
  GraduationCap,
  Building2,
  HeartHandshake,
  Cpu,
  MessageCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { useSheets } from '@/components/sheets/sheets-context'
import type { PillarId } from '@/components/pillars/types'

// Same font as the hero.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

/* Palette (from the hero):
   navy #1C376B – bar */

type NavItem = {
  label: string
  mobileLabel: string // shorter label so six tabs fit on narrow phones
  icon: LucideIcon
  href: string // every tab is a real link (its own page.tsx)…
  pillar?: PillarId // …but a normal click on these opens the slide-over sheet instead
}

const navLinks: NavItem[] = [
  { label: 'Home', mobileLabel: 'Home', icon: Home, href: '/' },
  { label: 'About', mobileLabel: 'About', icon: Info, href: '/about' },
  { label: 'Academy', mobileLabel: 'Academy', icon: GraduationCap, href: '/academy', pillar: 'academy' },
  { label: 'Corporate', mobileLabel: 'Corporate', icon: Building2, href: '/corporate', pillar: 'corporate' },
  { label: 'Foundation', mobileLabel: 'Foundation', icon: HeartHandshake, href: '/foundation', pillar: 'foundation' },
  { label: 'Technologies', mobileLabel: 'Tech', icon: Cpu, href: '/technologies', pillar: 'technologies' },
]

// Talents is hidden everywhere for now. To bring it back, uncomment this, the `mintButton`
// below, and the two commented <Link> blocks (desktop bar and mobile top bar).
// const talentsHref = '/talents'
// const mintButton =
//   'inline-flex items-center justify-center rounded-full bg-white font-medium text-[#1C376B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white'

// One logo for every screen size (add `brightness-0 invert` if the artwork is dark).
const LOGO_SRC = '/images/logo.png'
const desktopLogoClass = 'h-12 w-auto object-contain'
const mobileLogoClass = 'h-10 w-auto object-contain'

// Plain left-click only — Ctrl/Cmd/middle-click still open the real page in a new tab.
const isPlainClick = (e: MouseEvent) =>
  !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { openPillar, openContact } = useSheets() // the sheets live in <SheetsProvider>

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (link: NavItem) => pathname === link.href

  const onNavClick = (e: MouseEvent<HTMLAnchorElement>, link: NavItem) => {
    if (link.pillar && isPlainClick(e)) {
      e.preventDefault()
      openPillar(link.pillar)
    }
  }

  const onContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isPlainClick(e)) {
      e.preventDefault()
      openContact()
    }
  }

  // Always navy: seamless over the dark hero, and still readable on light pages.
  const barClass = cn(
    'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
    isScrolled
      ? 'border-white/10 bg-[#1C376B]/90 shadow-lg shadow-black/20 backdrop-blur-lg'
      : 'border-transparent bg-[#1C376B]'
  )

  return (
    <div className={poppins.className}>
      {/* ── Desktop Navbar ── */}
      <header className={cn(barClass, 'hidden lg:block')}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Three zones: logo left, tabs centred, buttons right */}
          <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-self-start">
              <img src={LOGO_SRC} alt="SkillBridge Logo" className={desktopLogoClass} />
            </Link>

            {/* Nav links with icons */}
            <div className="flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => {
                const active = isActive(link)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => onNavClick(e, link)}
                    className={cn(
                      'relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 xl:px-4',
                      active ? 'text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    <link.icon
                      className={cn(
                        'h-4 w-4 transition-colors duration-300',
                        active && 'text-white'
                      )}
                    />
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-white xl:left-4 xl:right-4"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Contact (opens the inquiry sheet) */}
            <div className="flex items-center gap-2 justify-self-end xl:gap-3">
              <Link
                href="/contact"
                onClick={onContactClick}
                aria-label="Contact us"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#1C376B] xl:w-auto xl:px-6"
              >
                <MessageCircle className="h-4 w-4 xl:hidden" />
                <span className="hidden xl:inline">Contact</span>
              </Link>
              {/* <Link
                href={talentsHref}
                className={cn(mintButton, 'px-5 py-2.5 text-sm xl:px-7')}
              >
                Talents
              </Link> */}
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile / tablet top bar (logo + Contact) ── */}
      <header className={cn(barClass, 'lg:hidden')}>
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <img src={LOGO_SRC} alt="SkillBridge Logo" className={mobileLogoClass} />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              onClick={onContactClick}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-xs font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#1C376B]"
            >
              Contact
            </Link>
            {/* <Link href={talentsHref} className={cn(mintButton, 'px-5 py-2 text-xs')}>
              Talents
            </Link> */}
          </div>
        </div>
      </header>

      {/* ── Mobile bottom tab bar: full width, edge to edge.
            Labels show from 400px up; on smaller phones it's icons only. ── */}
      <nav
        aria-label="Primary"
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1C376B]/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:hidden"
      >
        <div className="flex items-stretch">
          {navLinks.map((link) => {
            const active = isActive(link)
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => onNavClick(e, link)}
                aria-label={link.label}
                aria-current={active ? 'page' : undefined}
                className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 py-2"
              >
                <div
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200',
                    active ? 'bg-white' : 'bg-transparent'
                  )}
                >
                  <link.icon
                    className={cn(
                      'h-5 w-5 transition-colors',
                      active ? 'text-[#1C376B]' : 'text-white/60'
                    )}
                    strokeWidth={active ? 2 : 1.5}
                  />
                </div>
                <span
                  className={cn(
                    'hidden text-[10px] font-medium leading-none transition-colors min-[400px]:block',
                    active ? 'text-white' : 'text-white/60'
                  )}
                >
                  {link.mobileLabel}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* No spacer here any more. It sat at the top of the page and created the gap under the
          mobile bar. Add bottom padding to your layout instead, e.g. <body className="pb-20 lg:pb-0">,
          so the tab bar never covers content. */}
    </div>
  )
}