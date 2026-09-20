"use client"

import type { ComponentType, MouseEvent } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Facebook, Mail, MapPin } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'
import { Poppins } from 'next/font/google'
import { useSheets } from '@/components/sheets/sheets-context'
import type { PillarId } from '@/components/pillars/types'

// Same font as the heroes and navbar.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

/* Palette (same brand navy as the hero, about hero and navbar):
   navy  #1C376B – footer background
   paper #f7fbfe – torn-paper edge at the top (change to match the section above if needed) */

/* Torn-paper edge: deterministic (no Math.random → no hydration mismatch), paper on top, navy below. */
const tornPath = (() => {
  const width = 1440
  const step = 10
  let d = 'M0 0 L0 20'
  for (let x = step; x <= width; x += step) {
    const i = x / step
    const y =
      20 + 6 * Math.sin(i * 2.3) + 5 * Math.sin(i * 0.61 + 2) + 4 * Math.sin(i * 5.1)
    d += ` L${x} ${y.toFixed(1)}`
  }
  return `${d} L${width} 0 Z`
})()

type FooterLink = {
  label: string
  href: string // every link is a real page…
  pillar?: PillarId // …but a normal click opens that pillar's sheet
  contact?: boolean // …or the inquiry sheet
}

// Routes are assumptions — adjust to your real pages.
const ecosystemLinks: FooterLink[] = [
  { label: 'Academy', href: '/academy', pillar: 'academy' },
  { label: 'Corporate', href: '/corporate', pillar: 'corporate' },
  { label: 'Talent', href: '/talents' },
  { label: 'Foundation', href: '/foundation', pillar: 'foundation' },
  { label: 'Technologies', href: '/technologies', pillar: 'technologies' },
]

const exploreLinks: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Fellows', href: '/fellows' },
  { label: 'Impact', href: '/impact' },
  { label: 'Contact', href: '/contact', contact: true },
]

const socialLinks: {
  label: string
  href: string
  icon: ComponentType<{ className?: string }>
}[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/skillbridge_foundation?igsh=MWl6eDFwYWliYnlncw==',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/posts/skillbridge-foundation_technology-activity-7452412069867499520-RHoW?utm_source=share&utm_medium=member_android&rcm=ACoAAEeoPDgBBRvkTMp9TJvFUsQkgymiLYAkIG0',
    icon: Linkedin,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@skillbridge_foundation?_r=1&_t=ZT-96a4UWtw2rF',
    icon: FaTiktok,
  },
  // Replace '#' with your Facebook page URL.
  { label: 'Facebook', href: '#', icon: Facebook },
]

const columnHeading =
  'text-xs font-semibold uppercase tracking-[0.2em] text-white/60'

const footerLink =
  'inline-block text-sm text-white/70 transition-all duration-300 hover:translate-x-0.5 hover:text-white'

function FooterItem({ link }: { link: FooterLink }) {
  const { openPillar, openContact } = useSheets()

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Ctrl/Cmd/middle-click still open the real page in a new tab.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    if (link.pillar) {
      e.preventDefault()
      openPillar(link.pillar)
    } else if (link.contact) {
      e.preventDefault()
      openContact()
    }
  }

  return (
    <Link href={link.href} onClick={onClick} className={footerLink}>
      {link.label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer
      className={`${poppins.className} relative overflow-hidden bg-[#1C376B] text-white`}
    >
      {/* Torn-paper edge along the top, echoing the hero */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 z-0 h-6 w-full sm:h-8 lg:h-10"
      >
        <path d={tornPath} fill="#f7fbfe" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-4"
          >
            <Link href="/" className="inline-block" aria-label="SkillBridge home">
              {/* brightness-0 invert turns the logo white on the navy background */}
              <img
                src="/images/skillbridge-logo.png"
                alt="SkillBridge"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-white/80">
              Bridging the Gap Between Learning and Life.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-[#1C376B]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Ecosystem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className={columnHeading}>Ecosystem</h3>
            <ul className="mt-5 space-y-3">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <FooterItem link={link} />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className={columnHeading}>Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <FooterItem link={link} />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 lg:col-span-4"
          >
            <h3 className={columnHeading}>Contact</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1.5 leading-snug">
                  Kairaba Avenue
                  <br />
                  The Gambia
                </span>
              </li>
              <li>
                <a
                  href="mailto:skillbridgef@gmail.com"
                  className="group flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#1C376B]">
                    <Mail className="h-4 w-4" />
                  </span>
                  skillbridgef@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 py-6 text-center text-sm text-white/60 sm:text-left">
          © {new Date().getFullYear()} SkillBridge. All rights reserved.
        </div>

        {/* Oversized faint wordmark peeking up from the bottom edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative h-10 select-none overflow-hidden sm:h-16 lg:h-28"
        >
          <span className="absolute inset-x-0 top-0 block whitespace-nowrap text-center text-[15vw] font-bold leading-none tracking-tight text-white/[0.06] lg:text-[11rem]">
            SkillBridge
          </span>
        </div>
      </div>
    </footer>
  )
}
