"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Info,
  GraduationCap,
  Building2,
  HeartHandshake,
  Cpu,
  Check,
  X,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'

// Same font as the hero.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

/* Palette (from the hero):
   navy  #1C376B  – bar + backdrop
   panel #22437f  – slide sheet (a touch lighter than the bar)
   mint  #b2fcae  – accent / primary button */

type SheetId = 'academy' | 'corporate' | 'foundation' | 'technologies'

type NavItem = {
  label: string
  mobileLabel: string // shorter label so six tabs fit on narrow phones
  icon: LucideIcon // shown in the mobile bottom bar
  href?: string // normal page link
  sheet?: SheetId // opens the right-hand sheet instead of navigating
}

const navLinks: NavItem[] = [
  { label: 'Home', mobileLabel: 'Home', icon: Home, href: '/' },
  { label: 'About', mobileLabel: 'About', icon: Info, href: '/about' },
  { label: 'Academy', mobileLabel: 'Academy', icon: GraduationCap, sheet: 'academy' },
  { label: 'Corporate', mobileLabel: 'Corporate', icon: Building2, sheet: 'corporate' },
  { label: 'Foundation', mobileLabel: 'Foundation', icon: HeartHandshake, sheet: 'foundation' },
  { label: 'Technologies', mobileLabel: 'Tech', icon: Cpu, sheet: 'technologies' },
]

const talentsHref = '/talents'

// Sheet copy is drafted from your Ecosystem section — replace with your real content.
// Point each `ctaHref` at the sign-up / enquiry link you want (currently placeholders).
const sheetContent: Record<
  SheetId,
  {
    icon: LucideIcon
    eyebrow: string
    title: string
    description: string
    highlights: string[]
    cta: string
    ctaHref: string
  }
> = {
  academy: {
    icon: GraduationCap,
    eyebrow: 'SkillBridge Academy',
    title: 'Build the skills you need for what comes next.',
    description:
      'Practical, skills-based learning that takes you from where you are to work-ready, through courses, mentorship and hands-on projects.',
    highlights: [
      'Skills-based courses built around real work',
      'Mentorship and hands-on learning',
      'A clear path from learning to opportunity',
    ],
    cta: 'Explore Academy',
    ctaHref: '#',
  },
  corporate: {
    icon: Building2,
    eyebrow: 'SkillBridge Corporate',
    title: 'Build the capability your organisation needs.',
    description:
      'We work out where your team’s capability gaps are and deliver training programmes that close them.',
    highlights: [
      'Training shaped around your team’s needs',
      'Programmes that close real capability gaps',
      'Hire capable people through Talent when you’re ready',
    ],
    cta: 'Talk to Corporate',
    ctaHref: '#',
  },
  foundation: {
    icon: HeartHandshake,
    eyebrow: 'SkillBridge Foundation',
    title: 'Making sure opportunity reaches everyone.',
    description:
      'Talent is everywhere, access isn’t. The Foundation removes the barriers that keep capable people from learning and working.',
    highlights: [
      'Support to access learning and work',
      'Removing barriers to opportunity',
      'Partner with us or support the mission',
    ],
    cta: 'Explore Foundation',
    ctaHref: '#',
  },
  technologies: {
    icon: Cpu,
    eyebrow: 'SkillBridge Technologies',
    title: 'Build the tools that make it all work.',
    description:
      'The technology behind the whole ecosystem, and the team you can commission to build your own.',
    highlights: [
      'Websites, apps and digital tools',
      'Commission a tool built for your needs',
      'Technology that connects learning to opportunity',
    ],
    cta: 'Build with Technologies',
    ctaHref: '#',
  },
}

// Mint pill — same as the hero's primary button.
const mintButton =
  'inline-flex items-center justify-center rounded-full bg-[#b2fcae] font-medium text-[#1C376B] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95'

// If your logo artwork is dark, add `brightness-0 invert` to make it white on the navy bar.
const desktopLogoClass = 'h-12 w-auto object-contain'
const mobileLogoClass = 'h-10 w-auto object-contain'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSheet, setActiveSheet] = useState<SheetId | null>(null)
  const pathname = usePathname()

  // Remember the last opened sheet so its content stays visible while the panel slides out.
  const lastSheet = useRef<SheetId>('academy')
  if (activeSheet) lastSheet.current = activeSheet
  const sheet = sheetContent[lastSheet.current]
  const SheetIcon = sheet.icon

  const closeSheet = () => setActiveSheet(null)
  const toggleSheet = (id: SheetId) =>
    setActiveSheet((current) => (current === id ? null : id))

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the sheet whenever the route changes.
  useEffect(() => {
    setActiveSheet(null)
  }, [pathname])

  // While open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!activeSheet) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveSheet(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeSheet])

  // With a sheet open, its tab is the active one; otherwise the current page's tab is.
  const isActive = (link: NavItem) =>
    activeSheet ? link.sheet === activeSheet : !!link.href && pathname === link.href

  // Always navy: seamless over the dark hero, and still readable on light pages.
  const barClass = cn(
    'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
    isScrolled
      ? 'border-white/10 bg-[#1C376B]/90 shadow-lg shadow-black/20 backdrop-blur-lg'
      : 'border-transparent bg-[#1C376B]'
  )

  return (
    <div className={poppins.className}>
      {/* ── Blurred backdrop (sits under the navbar so the tabs stay crisp and clickable) ── */}
      <AnimatePresence>
        {activeSheet && (
          <motion.div
            key="sheet-overlay"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeSheet}
            className="fixed inset-0 z-40 bg-[#1C376B]/50 backdrop-blur-md"
          />
        )}
        {/* ── Right slide sheet ── */}
        {activeSheet && (
          <motion.aside
            key="sheet-panel"
            role="dialog"
            aria-modal="true"
            aria-label={sheet.eyebrow}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-0 right-0 top-16 z-[45] flex w-full flex-col border-white/10 bg-[#22437f] shadow-2xl shadow-black/40 sm:w-[440px] lg:top-20 lg:rounded-tl-3xl lg:border-l"
          >
            <div className="relative flex-1 overflow-y-auto px-6 pb-28 pt-6 sm:px-8 lg:pb-10">
              {/* Soft light tint at the top of the sheet */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/[0.05] to-transparent lg:rounded-tl-3xl" />

              <div className="relative">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeSheet}
                    aria-label="Close"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-[#1C376B]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Keyed so the content re-animates when switching between sheets */}
                <motion.div
                  key={lastSheet.current}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b2fcae]/15 text-[#b2fcae]">
                    <SheetIcon className="h-5 w-5" />
                  </div>

                  <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-[#b2fcae]">
                    {sheet.eyebrow}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-[34px]">
                    {sheet.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    {sheet.description}
                  </p>

                  <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
                    {sheet.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b2fcae]/15 text-[#b2fcae]">
                          <Check className="h-3 w-3" strokeWidth={2.5} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={sheet.ctaHref}
                    onClick={closeSheet}
                    className={cn(mintButton, 'mt-10 px-8 py-3.5 text-sm')}
                  >
                    {sheet.cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ── Desktop Navbar ── */}
      <header className={cn(barClass, 'hidden lg:block')}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Three zones: logo left, tabs centred, button right */}
          <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeSheet}
              className="flex items-center justify-self-start"
            >
              <img
                src="/images/logo.png"
                alt="SkillBridge Logo"
                className={desktopLogoClass}
              />
            </Link>

            {/* Nav links with icons */}
            <div className="flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link) => {
                const active = isActive(link)
                const className = cn(
                  'relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors duration-300 xl:px-4',
                  active ? 'text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                )
                const content = (
                  <>
                    <link.icon
                      className={cn(
                        'h-4 w-4 transition-colors duration-300',
                        active && 'text-[#b2fcae]'
                      )}
                    />
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-[#b2fcae] xl:left-4 xl:right-4"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </>
                )

                const sheetId = link.sheet
                return sheetId ? (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => toggleSheet(sheetId)}
                    aria-haspopup="dialog"
                    aria-expanded={activeSheet === sheetId}
                    className={className}
                  >
                    {content}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    onClick={closeSheet}
                    className={className}
                  >
                    {content}
                  </Link>
                )
              })}
            </div>

            {/* Talents button */}
            <Link
              href={talentsHref}
              onClick={closeSheet}
              className={cn(mintButton, 'justify-self-end px-7 py-2.5 text-sm')}
            >
              Talents
            </Link>
          </div>
        </nav>
      </header>

      {/* ── Mobile Top Bar (logo + Talents button) ── */}
      <header className={cn(barClass, 'lg:hidden')}>
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" onClick={closeSheet} className="flex items-center">
            <img
              src="/images/skillbridge-logo.png"
              alt="SkillBridge Logo"
              className={mobileLogoClass}
            />
          </Link>
          <Link
            href={talentsHref}
            onClick={closeSheet}
            className={cn(mintButton, 'px-5 py-2 text-xs')}
          >
            Talents
          </Link>
        </div>
      </header>

      {/* ── Mobile Bottom Tab Bar (Apple-style, dark glass) ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="mx-3 mb-3 rounded-2xl border border-white/10 bg-[#1C376B]/85 shadow-lg shadow-black/30 backdrop-blur-xl">
          <div className="flex items-center justify-around px-1 py-2">
            {navLinks.map((link) => {
              const active = isActive(link)
              const className =
                'relative flex min-w-0 flex-1 flex-col items-center gap-0.5 px-1 py-1'
              const content = (
                <>
                  <div
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200',
                      active ? 'bg-[#b2fcae]' : 'bg-transparent'
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
                      'text-[10px] font-medium leading-none transition-colors',
                      active ? 'text-[#b2fcae]' : 'text-white/60'
                    )}
                  >
                    {link.mobileLabel}
                  </span>
                </>
              )

              const sheetId = link.sheet
              return sheetId ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => toggleSheet(sheetId)}
                  aria-haspopup="dialog"
                  aria-expanded={activeSheet === sheetId}
                  className={className}
                >
                  {content}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  onClick={closeSheet}
                  className={className}
                >
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Bottom padding spacer so content isn't hidden behind tab bar on mobile */}
      <div className="h-20 lg:hidden" />
    </div>
  )
}