"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

function PatternOverlay({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" className="opacity-[0.03]">
        <defs>
          <pattern id="events-lines" patternUnits="userSpaceOnUse" width="100%" height="3">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="#1C376B" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#events-lines)" />
      </svg>
    </div>
  )
}

export default function EventsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Logo watermark — anchored at bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1100px] h-[500px] lg:h-[650px] pointer-events-none">
        <div className="relative w-full h-full opacity-[0.06]">
          <Image
            src="/images/skillbridge-logo.png"
            alt=""
            fill
            className="object-contain object-bottom"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(18%) sepia(45%) saturate(1200%) hue-rotate(193deg) brightness(95%) contrast(95%)',
            }}
          />
        </div>
        <PatternOverlay />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-navy font-medium">Events</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy">
            Upcoming Events
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Join our workshops, talks, mentorship sessions, and career-focused events designed to help you grow.
          </p>
        </motion.div>
      </div>
    </section>
  )
}