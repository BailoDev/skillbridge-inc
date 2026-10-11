"use client"

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Building2,
  Users,
  HeartHandshake,
  Cpu,
} from 'lucide-react'

// Replace each `image` with your own file (e.g. '/images/ecosystem/academy.jpg'
// from your /public folder). The picsum URLs below are placeholders.
const ecosystemItems = [
  {
    number: '01',
    title: 'Academy',
    description: 'Build the skills you need for what comes next.',
    icon: GraduationCap,
    image: '/images/academy.jpg',
  },
  {
    number: '02',
    title: 'Corporate',
    description: 'Build the capability your organisation needs.',
    icon: Building2,
    image: '/images/corporate.jpg',
  },
  {
    number: '03',
    title: 'Talent',
    description: 'Turn capability into opportunity.',
    icon: Users,
    image: '/images/talent.png',
  },
  {
    number: '04',
    title: 'Foundation',
    description: 'Making sure opportunity reaches everyone.',
    icon: HeartHandshake,
    image: '/images/foundation.jpg',
  },
  {
    number: '05',
    title: 'Technologies',
    description: 'Build the tools that make it all work.',
    icon: Cpu,
    image: '/images/technologies.jpg',
  },
]

export default function EcosystemSection() {
  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Giant faint watermark text, sitting behind the heading/cards */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-6 top-[8.5rem] sm:top-[9.5rem] text-[7rem] sm:text-[10rem] lg:text-[12rem] font-serif font-bold text-gray-100 leading-none whitespace-nowrap"
        >
          Ecosystem
        </span>

        {/* Top row: eyebrow + heading on the left, description on the right */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-800 uppercase">
              Why SkillBridge Exists
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-[52px] font-serif font-bold text-navy leading-[1.15] tracking-tight">
              One ecosystem.<br />
              Five ways in.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start lg:items-end lg:justify-end"
          >
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              SkillBridge is five connected efforts that work together. A person
              might start in the Academy, grow their skills, and end up placed
              through Talent. An organisation might start with Corporate training
              and later hire through Talent, or commission a tool from
              Technologies. Everything connects back to the same goal: turning
              learning into opportunity.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mt-14 border-t border-gray-200" />

        {/* Cards grid — modern floating cards, wider columns */}
        <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {ecosystemItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 min-h-[280px] shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-indigo-300 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-serif font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Image: tilted, pinned bottom-right, bleeding off the card edges.
                    The wrapper spans the full card width/bottom (negative margins cancel the p-7),
                    and the card's overflow-hidden crops the photo at the right and bottom. */}
                <div className="relative -mx-7 -mb-7 mt-4 h-28">
                  <div className="absolute left-[24%] top-4 h-36 w-[84%] -rotate-6 overflow-hidden rounded-2xl border-[3px] border-white bg-gray-100 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}