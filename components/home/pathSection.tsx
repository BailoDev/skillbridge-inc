"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Identify',
    description:
      "We start by figuring out exactly what a person or organisation needs — what skills are missing, what direction makes sense, what capability gap is holding them back.",
  },
  {
    number: '02',
    title: 'Develop',
    description:
      'We deliver the training, mentorship, and hands-on learning to close that gap — through Academy courses, Corporate programmes, or Foundation support.',
  },
  {
    number: '03',
    title: 'Demonstrate',
    description:
      "Learning alone isn't enough. We help people turn what they've learned into proof — real projects, real experience, a real professional profile they can show employers.",
  },
  {
    number: '04',
    title: 'Connect',
    description:
      'Finally, we connect capable people to real opportunity through Talent placements, employer partnerships, and ongoing support.',
  },
]

export default function PathSection() {
  return (
    <section className="relative bg-gray-50 py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Giant faint watermark text, sitting behind the columns */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-[13rem] sm:top-[14rem] text-[7rem] sm:text-[10rem] lg:text-[12rem] font-serif font-bold text-gray-200/70 leading-none whitespace-nowrap"
        >
          Path
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
            How SkillBridge Works
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-[52px] font-serif font-bold text-navy leading-[1.15] tracking-tight">
            From learning to opportunity, one path, four steps.
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="relative mt-14 border-t border-gray-200" />

        {/* Steps row */}
        <div className="relative mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <span className="text-4xl sm:text-5xl font-serif font-bold text-indigo-600">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mt-16"
        >
          
          <a  href="#"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] text-navy uppercase border-b border-navy/40 pb-1 hover:text-indigo-600 hover:border-indigo-600 transition-colors"
          >
            See The Ecosystem In Action
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}