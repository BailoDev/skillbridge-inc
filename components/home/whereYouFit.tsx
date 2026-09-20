"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Option {
  title: string
  cta: string
  href: string
}

const options: (Option | null)[][] = [
  [
    {
      title: 'I want to build my skills',
      cta: 'Explore Academy',
      href: '#',
    },
    {
      title: 'I want to train my team or organisation',
      cta: 'Talk to Corporate',
      href: '#',
    },
    {
      title: "I'm ready to work and want to be found",
      cta: 'Join the Talent Pool',
      href: '#',
    },
  ],
  [
    {
      title: "I'm hiring and need capable people",
      cta: 'Hire Talent',
      href: '#',
    },
    {
      title: 'I need support to access opportunity',
      cta: 'Explore Foundation',
      href: '#',
    },
    {
      title: 'I need a website, app, or digital tool built',
      cta: 'Build with Technologies',
      href: '#',
    },
  ],
  [
    {
      title: 'I want to support or partner with SkillBridge',
      cta: 'Partner With Us',
      href: '#',
    },
    null,
    null,
  ],
]

interface OptionLinkProps {
  option: Option | null
  index: number
}

function OptionLink({ option, index }: OptionLinkProps) {
  if (!option) {
    return <div className="hidden lg:block" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      className="border-t border-gray-200 pt-6"
    >
      <h3 className="font-serif text-2xl text-navy leading-snug max-w-[15ch]">
        {option.title}
      </h3>
      <Link
        href={option.href}
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] text-indigo-600 uppercase hover:text-navy transition-colors"
      >
        {option.cta}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </motion.div>
  )
}

export default function WhereDoYouFitIn() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Giant faint watermark, sitting behind the right-hand column */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-0 top-[9rem] sm:top-[10rem] text-[8rem] sm:text-[11rem] lg:text-[13rem] font-serif font-bold text-gray-100 leading-none whitespace-nowrap"
        >
          You
        </span>

        {/* Eyebrow + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-indigo-600 uppercase">
            Find Your Path
          </span>
          <h2 className="mt-6 text-5xl sm:text-6xl font-serif font-bold text-navy leading-[1.1] tracking-tight">
            Where do you fit in?
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="relative mt-14 border-t border-gray-200" />

        {/* Options grid */}
        <div className="relative mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-14">
          {options.map((row, rowIndex) =>
            row.map((option, colIndex) => (
              <OptionLink
                key={`${rowIndex}-${colIndex}`}
                option={option}
                index={rowIndex * 3 + colIndex}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}