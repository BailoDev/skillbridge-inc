"use client"

import type { MouseEvent } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useSheets } from '@/components/sheets/sheets-context'
import type { PillarId } from '@/components/pillars/types'

type PathItem = {
  title: string
  cta: string
  /** Real page. Used for new-tab clicks, crawlers, and as the fallback. */
  href: string
  /** A normal click opens this pillar's slide-over sheet instead of navigating. */
  pillar?: PillarId
  /** A normal click opens the contact sheet instead of navigating. */
  contact?: boolean
}

const paths: PathItem[] = [
  { title: 'I want to build my skills', cta: 'Explore Academy', href: '/academy', pillar: 'academy' },
  { title: 'I want to train my team', cta: 'Talk to Corporate', href: '/corporate', pillar: 'corporate' },
  { title: "I want to be found by employers", cta: 'Join the Talent Pool', href: '/talents' },
  { title: "I'm hiring", cta: 'Hire Talent', href: '/contact', contact: true },
  { title: 'I need support to access opportunity', cta: 'Explore Foundation', href: '/foundation', pillar: 'foundation' },
  { title: 'I need a website, app, or tool built', cta: 'Build with Technologies', href: '/technologies', pillar: 'technologies' },
  { title: 'I want to partner with SkillBridge', cta: 'Partner with us', href: '/contact', contact: true },
]

// Plain left-click only: Ctrl/Cmd/middle-click still open the real page in a new tab.
const isPlainClick = (e: MouseEvent) =>
  !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)

export default function FindYourPathSection() {
  const { openPillar, openContact } = useSheets()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, item: PathItem) => {
    if (!isPlainClick(e)) return

    if (item.pillar) {
      e.preventDefault()
      openPillar(item.pillar)
    } else if (item.contact) {
      e.preventDefault()
      openContact()
    }
    // Otherwise (e.g. Talents) let the link navigate normally.
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1185px] px-6 sm:px-8 xl:px-0">

        {/* Eyebrow + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="block text-xs font-semibold uppercase leading-4 tracking-[0.2em] text-blue-800">
            Find your path
          </span>
          <h2 className="mt-5 text-5xl font-serif font-bold leading-[1.15] tracking-tight text-navy sm:text-[56px] lg:text-[60px]">
            Where do you fit in?
          </h2>
        </motion.div>

        {/* Full-width rule */}
        <div className="mt-14 border-t border-gray-200" />

        {/* Grid */}
        <div className="relative mt-14">
          {/* Giant faint "You" watermark, centred behind the grid (desktop only) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 select-none whitespace-nowrap text-[12rem] font-serif font-bold leading-none text-gray-200/70 lg:block"
          >
            You
          </span>

          <div className="relative grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {paths.map((item, index) => (
              // The motion wrapper handles the entrance animation; the Link handles navigation.
              <motion.div
                key={item.cta}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item)}
                  className="group relative block border-t border-gray-200 pb-[60px] pt-[34px]"
                >
                  <span className="block font-serif text-[27px] font-bold leading-[37px] text-navy">
                    {item.title}
                  </span>

                  <span className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.15em] text-blue-800 transition-colors duration-300 group-hover:text-navy">
                    {item.cta}
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}