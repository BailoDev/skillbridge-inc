"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Monitor, Brain, Compass, Briefcase } from 'lucide-react'

const pillars = [
  {
    number: '01',
    icon: Monitor,
    title: 'Digital Literacy & Technical Skills',
    description: 'Building essential digital competence for academic and workforce readiness.',
    position: 'top-left',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Learning Effectiveness',
    description: 'Study smarter with proven strategies that improve performance.',
    position: 'top-right',
  },
  {
    number: '03',
    icon: Compass,
    title: 'Career Awareness & Guidance',
    description: 'Exploring pathways, building clarity and preparing for a purposeful future.',
    position: 'bottom-left',
  },
  {
    number: '04',
    icon: Briefcase,
    title: 'Professional Exposure',
    description: 'Connecting learning to real world experiences and professional opportunities.',
    position: 'bottom-right',
  },
]

// Animated glow rays from center — adapted to light background
function GlowRays() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
      viewBox="0 0 700 700"
      fill="none"
    >
      <defs>
        <radialGradient id="rayGlowLight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#93C5FD" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="rayTLLight" x1="350" y1="350" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1C376B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1C376B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rayTRLight" x1="350" y1="350" x2="620" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1C376B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1C376B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rayBLLight" x1="350" y1="350" x2="80" y2="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1C376B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1C376B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rayBRLight" x1="350" y1="350" x2="620" y2="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1C376B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1C376B" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient center glow */}
      <circle cx="350" cy="350" r="350" fill="url(#rayGlowLight)" />

      {/* Concentric rings */}
      <circle cx="350" cy="350" r="90"  stroke="#1C376B" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
      <circle cx="350" cy="350" r="140" stroke="#1C376B" strokeWidth="0.5" strokeOpacity="0.12" fill="none" />
      <circle cx="350" cy="350" r="190" stroke="#1C376B" strokeWidth="0.5" strokeOpacity="0.09" fill="none" />
      <circle cx="350" cy="350" r="250" stroke="#1C376B" strokeWidth="0.5" strokeOpacity="0.07" fill="none" />
      <circle cx="350" cy="350" r="310" stroke="#1C376B" strokeWidth="0.5" strokeOpacity="0.05" fill="none" />

      {/* Diagonal rays — top-left */}
      <line x1="350" y1="350" x2="80"  y2="80"  stroke="url(#rayTLLight)" strokeWidth="1.5" />
      <line x1="350" y1="350" x2="110" y2="70"  stroke="url(#rayTLLight)" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="350" y1="350" x2="70"  y2="110" stroke="url(#rayTLLight)" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Diagonal rays — top-right */}
      <line x1="350" y1="350" x2="620" y2="80"  stroke="url(#rayTRLight)" strokeWidth="1.5" />
      <line x1="350" y1="350" x2="590" y2="70"  stroke="url(#rayTRLight)" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="350" y1="350" x2="630" y2="110" stroke="url(#rayTRLight)" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Diagonal rays — bottom-left */}
      <line x1="350" y1="350" x2="80"  y2="620" stroke="url(#rayBLLight)" strokeWidth="1.5" />
      <line x1="350" y1="350" x2="110" y2="630" stroke="url(#rayBLLight)" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="350" y1="350" x2="70"  y2="590" stroke="url(#rayBLLight)" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Diagonal rays — bottom-right */}
      <line x1="350" y1="350" x2="620" y2="620" stroke="url(#rayBRLight)" strokeWidth="1.5" />
      <line x1="350" y1="350" x2="590" y2="630" stroke="url(#rayBRLight)" strokeWidth="0.8" strokeOpacity="0.5" />
      <line x1="350" y1="350" x2="630" y2="590" stroke="url(#rayBRLight)" strokeWidth="0.8" strokeOpacity="0.5" />

      {/* Anchor dots at card corners */}
      <circle cx="80"  cy="80"  r="3" fill="#1C376B" opacity="0.25" />
      <circle cx="620" cy="80"  r="3" fill="#1C376B" opacity="0.25" />
      <circle cx="80"  cy="620" r="3" fill="#1C376B" opacity="0.25" />
      <circle cx="620" cy="620" r="3" fill="#1C376B" opacity="0.25" />
    </svg>
  )
}

// Pulsing glow behind center logo — softer for light bg
function CenterGlowPulse() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.06, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="w-64 h-64 rounded-full bg-navy/20 blur-2xl"
      />
    </div>
  )
}

// Dot grid accent
function DotGridAccent({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="96"
      height="144"
      viewBox="0 0 96 144"
      fill="none"
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 24 + 12}
            cy={row * 24 + 12}
            r="3"
            fill="#7BA3D8"
            opacity="0.4"
          />
        ))
      )}
    </svg>
  )
}

export default function PillarsSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-white to-blue-light/30">
      {/* Dot grid accents — matching hero section */}
      <DotGridAccent className="top-16 right-8 lg:right-16" />
      <DotGridAccent className="bottom-16 left-8 lg:left-16" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-navy/60 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Solution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            The SkillBridge 4-Pillar Approach
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We address the real needs of young people through four focus areas.
          </p>
        </motion.div>

        {/* Pillars Grid with Center Logo */}
        <div className="relative min-h-[500px] lg:min-h-[480px]">
          {/* Glow rays — desktop only */}
          <div className="hidden lg:block">
            <GlowRays />
          </div>

          {/* Pulsing center glow */}
          <div className="hidden lg:block">
            <CenterGlowPulse />
          </div>

          {/* Center Logo Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full items-center justify-center z-20 bg-white"
            style={{
              border: '1px solid rgba(28,55,107,0.2)',
              boxShadow: '0 0 30px rgba(28,55,107,0.12), 0 0 60px rgba(28,55,107,0.06), 0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            {/* Spinning dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-6px] rounded-full"
              style={{ border: '1px dashed rgba(28,55,107,0.2)' }}
            />
            <div className="text-center flex flex-col items-center gap-1 px-3">
              <div className="relative w-20 h-22">
                <Image
                  src="/images/skillbridge-logo.png"
                  alt="SkillBridge Foundation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-80 lg:gap-y-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl z-10 transition-all duration-300 cursor-default bg-white"
                style={{
                  border: '1px solid rgba(28,55,107,0.12)',
                  boxShadow: '0 2px 12px rgba(28,55,107,0.06)',
                }}
                whileHover={{
                  boxShadow: '0 0 25px rgba(28,55,107,0.15), 0 4px 20px rgba(28,55,107,0.1)',
                  borderColor: 'rgba(28,55,107,0.3)',
                }}
              >
                {/* Corner glow accent */}
                <div
                  className="absolute top-0 left-0 w-16 h-16 rounded-tl-2xl pointer-events-none opacity-20"
                  style={{
                    background: 'radial-gradient(circle at top left, rgba(28,55,107,0.3), transparent 70%)',
                  }}
                />

                <div className="flex items-start gap-4">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 mt-1"
                    style={{
                      background: 'rgba(28,55,107,0.08)',
                      border: '1px solid rgba(28,55,107,0.15)',
                      color: '#1C376B',
                    }}
                  >
                    {pillar.number}
                  </span>
                  <div className="flex-1">
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3"
                      style={{
                        background: 'rgba(28,55,107,0.07)',
                        border: '1px solid rgba(28,55,107,0.12)',
                      }}
                    >
                      <pillar.icon className="h-5 w-5 text-navy" />
                    </div>
                    <h3 className="font-semibold text-navy mb-2 leading-snug">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                    {/* <button className="mt-4 text-xs text-navy/60 hover:text-navy transition-colors flex items-center gap-1">
                      Learn more →
                    </button> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}