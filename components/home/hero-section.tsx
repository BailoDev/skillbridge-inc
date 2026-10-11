"use client"

import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Link2, ArrowRight, Play } from 'lucide-react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Colour theme sampled from the reference image.
const theme = {
  '--hero-bg': '#1C376B', // deep navy background
  '--hero-accent': '#b2fcae', // mint-green primary button
  '--hero-paper': '#f7fbfe', // torn-paper zone at the bottom
  '--hero-lavender': '#beb0d4', // left arch
  '--hero-mint': '#ebfeea', // centre arch
  '--hero-pink': '#ffc6d7', // right arch
} as CSSProperties

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

/* Faint hand-drawn line art scattered around the headline, like the reference. Decorative only. */
function Doodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden text-white/[0.1] lg:block"
    >
      {/* Rocket */}
      <svg viewBox="0 0 100 160" {...doodle} className="absolute left-[5%] top-[12rem] w-20 rotate-[40deg]">
        <path d="M50 8C68 30 72 62 66 100H34C28 62 32 30 50 8Z" />
        <circle cx="50" cy="56" r="9" />
        <path d="M34 82 14 112l20-4Z" />
        <path d="M66 82l20 30-20-4Z" />
        <path d="M42 100v22M50 100v40M58 100v22" />
      </svg>

      {/* Hot-air balloon */}
      <svg viewBox="0 0 100 140" {...doodle} className="absolute right-[7%] top-[9rem] w-24">
        <path d="M50 6C24 6 10 26 10 46c0 20 20 36 30 46h20c10-10 30-26 30-46C90 26 76 6 50 6Z" />
        <path d="M50 6C38 24 34 66 42 92M50 6c12 18 16 60 8 86" />
        <path d="m40 92 4 20M60 92l-4 20" />
        <rect x="42" y="112" width="16" height="12" rx="2" />
      </svg>

      {/* Open book */}
      <svg viewBox="0 0 200 140" {...doodle} className="absolute left-[20%] top-[25rem] w-44 -rotate-[10deg]">
        <path d="M100 30C70 12 30 14 8 22v94c22-8 62-10 92 8Z" />
        <path d="M100 30c30-18 70-16 92-8v94c-22-8-62-10-92 8Z" />
        <path d="M100 30v94" />
        <path d="M24 44c24-6 48-4 66 4M24 62c24-6 48-4 66 4M24 80c24-6 48-4 66 4" />
        <path d="M110 48c18-8 42-10 66-4M110 66c18-8 42-10 66-4M110 84c18-8 42-10 66-4" />
      </svg>

      {/* Circle */}
      <svg viewBox="0 0 80 80" {...doodle} className="absolute right-[28%] top-[26rem] w-20">
        <circle cx="40" cy="40" r="36" />
        <circle cx="43" cy="38" r="34" />
      </svg>

      {/* Laptops */}
      <svg viewBox="0 0 140 100" {...doodle} className="absolute left-[7%] top-[26rem] w-32 -rotate-[6deg]">
        <LaptopPaths />
      </svg>
      <svg viewBox="0 0 140 100" {...doodle} className="absolute right-[6%] top-[18.5rem] w-28 rotate-[6deg]">
        <LaptopPaths />
      </svg>

      {/* Triangle */}
      <svg viewBox="0 0 120 100" {...doodle} className="absolute right-[7%] top-[29rem] w-28 rotate-[8deg]">
        <path d="M10 92 60 8l48 84Z" />
      </svg>
    </div>
  )
}

/* Tall pill-shaped "arch" with a thin outline ring behind it.
   Placeholder silhouette by default — pass `src` (ideally a transparent-background PNG)
   to drop in a real photo. */
function Arch({
  className,
  bg,
  src,
  alt = '',
  children,
}: {
  className?: string
  bg: string
  src?: string
  alt?: string
  children?: ReactNode
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Outline ring (fades into the paper zone, exactly like the reference) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2.5 rounded-full border border-white/60 sm:-inset-3"
      />
      <div className={`absolute inset-0 overflow-hidden rounded-full ${bg}`}>
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover object-bottom" />
        ) : (
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full opacity-90"
            preserveAspectRatio="xMidYMax slice"
          >
            <circle cx="100" cy="78" r="34" fill="#ffffff" fillOpacity="0.55" />
            <path d="M40 200c0-44 27-80 60-80s60 36 60 80z" fill="#ffffff" fillOpacity="0.55" />
          </svg>
        )}
        {children}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      style={theme}
      className={`${poppins.className} relative overflow-hidden bg-[color:var(--hero-bg)] pb-8 pt-8 sm:pb-10 sm:pt-24 lg:pb-12 lg:pt-32`}
    >
      {/* Torn-paper zone at the bottom. The arches overhang into it. */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-24 bg-[color:var(--hero-paper)] sm:h-[8.5rem] lg:h-48">
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-[calc(100%-1px)] h-6 w-full sm:h-8"
        >
          <path d={tornPath} fill="var(--hero-paper)" />
        </svg>
      </div>

      <Doodles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Launch Partner Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
              <Link2 className="h-4 w-4 text-[color:var(--hero-accent)]" />
              SKILLBRIDGE
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 text-balance text-4xl font-bold leading-[1.15] tracking-tight text-white sm:mt-12 sm:text-5xl lg:text-[64px]"
          >
            Bridging the Gap Between Learning &amp; Life
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base"
          >
            We help people build practical skills, help organisations build capability, connect talent to opportunity, remove barriers to access, and build the technology that makes it all possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8"
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[color:var(--hero-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Partner With Us
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-sm font-medium text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 transition-colors duration-300 group-hover:bg-white group-hover:text-[color:var(--hero-bg)]">
                <ArrowRight className="h-4 w-4" />
              </span>
              Explore SkillBridge
            </Link>
          </motion.div>
        </div>

        {/* Arch collage — placeholders; pass `src="/images/..."` to <Arch> for real photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-14 flex max-w-4xl items-end justify-center gap-3 sm:gap-4"
        >
          <Arch
            className="w-[31.5%] aspect-[277/463]"
            bg="bg-[color:var(--hero-lavender)]" src="/images/img-1.png" alt="Hero Arch 1"
          />
          <Arch
            className="w-[33.3%] aspect-[293/498]"
            bg="bg-[color:var(--hero-mint)]" src="/images/img-2.png" alt="Hero Arch 2"  
          >
          </Arch>
          <Arch
            className="w-[31.5%] aspect-[278/463]"
            bg="bg-[color:var(--hero-pink)]" src="/images/img-3.png" alt="Hero Arch 3"
          />
        </motion.div>
      </div>
    </section>
  )
}