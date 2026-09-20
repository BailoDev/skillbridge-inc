"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const paths = [
  { title: 'I want to build my skills', cta: 'Explore Academy', href: '#' },
  { title: 'I want to train my team or organisation', cta: 'Talk to Corporate', href: '#' },
  { title: "I'm ready to work and want to be found", cta: 'Join the Talent Pool', href: '#' },
  { title: "I'm hiring and need capable people", cta: 'Hire Talent', href: '#' },
  { title: 'I need support to access opportunity', cta: 'Explore Foundation', href: '#' },
  { title: 'I need a website, app, or digital tool built', cta: 'Build with Technologies', href: '#' },
  { title: 'I want to support or partner with SkillBridge', cta: 'Partner with us', href: '#' },
]

export default function FindYourPathSection() {
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
          <span className="block text-xs font-semibold uppercase leading-4 tracking-[0.2em] text-indigo-600">
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
              <motion.a
                key={item.cta}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className="group relative block border-t border-gray-200 pb-[60px] pt-[34px]"
              >
                <span className="block font-serif text-[27px] font-bold leading-[37px] text-navy">
                  {item.title}
                </span>

                <span className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.15em] text-indigo-600 transition-colors duration-300 group-hover:text-navy">
                  {item.cta}
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}