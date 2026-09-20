"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

// Same font as the home hero.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

/* Palette (from the home hero):
   navy  #1C376B – background
   mint  #b2fcae – accent
   paper #f7fbfe – torn-paper edge at the bottom */

/* Torn-paper edge: a deterministic (no Math.random → no hydration mismatch) jagged line. */
const tornPath = (() => {
  const width = 1440
  const step = 10
  let d = 'M0 40 L0 20'
  for (let x = step; x <= width; x += step) {
    const i = x / step
    const y =
      20 + 6 * Math.sin(i * 2.3) + 5 * Math.sin(i * 0.61 + 2) + 4 * Math.sin(i * 5.1)
    d += ` L${x} ${y.toFixed(1)}`
  }
  return `${d} L${width} 40 Z`
})()

const doodle = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

/* Laptop line art (viewBox 0 0 140 100) */
function LaptopPaths() {
  return (
    <>
      <rect x="24" y="8" width="92" height="62" rx="6" />
      <rect x="32" y="16" width="76" height="46" rx="2" />
      <path d="M6 78h128l-8 11a4 4 0 0 1-3 2H17a4 4 0 0 1-3-2Z" />
      <path d="M58 78h24" />
      <path d="M42 28h26M42 38h44M42 48h20" />
    </>
  )
}

/* Faint hand-drawn line art around the headline, like the home hero. Decorative only. */
function Doodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden text-white/[0.1] lg:block"
    >
      {/* Rocket */}
      <svg viewBox="0 0 100 160" {...doodle} className="absolute left-[6%] top-[9rem] w-16 rotate-[40deg]">
        <path d="M50 8C68 30 72 62 66 100H34C28 62 32 30 50 8Z" />
        <circle cx="50" cy="56" r="9" />
        <path d="M34 82 14 112l20-4Z" />
        <path d="M66 82l20 30-20-4Z" />
        <path d="M42 100v22M50 100v40M58 100v22" />
      </svg>

      {/* Hot-air balloon */}
      <svg viewBox="0 0 100 140" {...doodle} className="absolute right-[7%] top-[8rem] w-20">
        <path d="M50 6C24 6 10 26 10 46c0 20 20 36 30 46h20c10-10 30-26 30-46C90 26 76 6 50 6Z" />
        <path d="M50 6C38 24 34 66 42 92M50 6c12 18 16 60 8 86" />
        <path d="m40 92 4 20M60 92l-4 20" />
        <rect x="42" y="112" width="16" height="12" rx="2" />
      </svg>

      {/* Open book */}
      <svg viewBox="0 0 200 140" {...doodle} className="absolute bottom-16 left-[12%] w-36 -rotate-[10deg]">
        <path d="M100 30C70 12 30 14 8 22v94c22-8 62-10 92 8Z" />
        <path d="M100 30c30-18 70-16 92-8v94c-22-8-62-10-92 8Z" />
        <path d="M100 30v94" />
        <path d="M24 44c24-6 48-4 66 4M24 62c24-6 48-4 66 4M24 80c24-6 48-4 66 4" />
        <path d="M110 48c18-8 42-10 66-4M110 66c18-8 42-10 66-4M110 84c18-8 42-10 66-4" />
      </svg>

      {/* Laptops */}
      <svg viewBox="0 0 140 100" {...doodle} className="absolute bottom-16 right-[21%] w-28 rotate-[6deg]">
        <LaptopPaths />
      </svg>
      <svg viewBox="0 0 140 100" {...doodle} className="absolute right-[5%] top-[17rem] w-24 -rotate-[6deg]">
        <LaptopPaths />
      </svg>

      {/* Triangle */}
      <svg viewBox="0 0 120 100" {...doodle} className="absolute bottom-16 right-[9%] w-24 rotate-[8deg]">
        <path d="M10 92 60 8l48 84Z" />
      </svg>
    </div>
  )
}

export default function AboutHero() {
  return (
    <section
      className={`${poppins.className} relative overflow-hidden bg-[#1C376B] pb-20 pt-32 lg:pb-28 lg:pt-40`}
    >
      <Doodles />

      {/* Torn-paper edge at the bottom, leading into the next section */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 z-0 h-8 w-full sm:h-10 lg:h-12"
      >
        <path d={tornPath} fill="#f7fbfe" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Breadcrumb, styled like the home hero's badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-sm"
            >
              <Link href="/" className="transition-colors duration-300 hover:text-white">
                Home
              </Link>
              <span className="text-[#b2fcae]">&gt;</span>
              <span className="text-white">About</span>
            </nav>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-balance text-4xl font-bold leading-[1.15] tracking-tight text-white sm:mt-10 sm:text-5xl lg:text-[56px]"
          >
            About SkillBridge Foundation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
          >
            We bridge the gap between learning and professional reality by equipping young people
            with skills, clarity and exposure to succeed in a changing world.
          </motion.p>
        </div>
      </div>
    </section>
  )
}