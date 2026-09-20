"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Compass, Eye, Briefcase } from 'lucide-react'

const problems = [
  {
    icon: Monitor,
    title: 'Limited Digital Skills',
    description: 'Lack of digital competence limits academic and career growth.',
  },
  {
    icon: Compass,
    title: 'No Career Clarity',
    description: 'Many students graduate without a clear sense of direction.',
  },
  {
    icon: Eye,
    title: 'Weak Exposure',
    description: 'Little to no exposure to real professional environments.',
  },
  {
    icon: Briefcase,
    title: 'Education-Workforce Disconnect',
    description: 'What schools teach and what workplaces require often differ.',
  },
]

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
            fill="#A8C8FF"
            opacity="0.5"
          />
        ))
      )}
    </svg>
  )
}

export default function WhySection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Dot grid accents */}
      <DotGridAccent className="top-8 left-8 lg:left-16" />
      <DotGridAccent className="bottom-8 right-8 lg:right-16" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">
              Why SkillBridge Exists
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Many young people in The Gambia face barriers that limit their potential. 
              We exist to close that gap and create pathways to real opportunities.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-dark transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Right Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white rounded-2xl border border-border hover:border-blue-glow/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-light rounded-xl mb-4 group-hover:bg-navy transition-colors">
                  <problem.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}