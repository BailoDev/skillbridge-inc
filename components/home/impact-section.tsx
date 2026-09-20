"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Users, Target } from 'lucide-react'

interface StatItem {
  value: number
  suffix: string
  label: string
  icon: React.ElementType
}

const stats: StatItem[] = [
  { value: 4, suffix: '', label: 'Program Pillars', icon: Layers },
  { value: 0, suffix: '', label: 'Growing Youth Network', icon: Users },
  { value: 100, suffix: '%', label: 'Career-Focused', icon: Target },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    
    if (value === 0) {
      return
    }

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  if (value === 0) {
    return <span className="text-4xl sm:text-5xl font-bold text-navy">Growing</span>
  }

  return (
    <span className="text-4xl sm:text-5xl font-bold text-navy">
      {count}{suffix}
    </span>
  )
}

function GuillocheWavePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08]"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="guillocheWaves"
          x="0"
          y="0"
          width="200"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 20 Q25 5 50 20 T100 20 T150 20 T200 20" stroke="#1C376B" strokeWidth="0.8" fill="none" />
          <path d="M0 25 Q25 10 50 25 T100 25 T150 25 T200 25" stroke="#1C376B" strokeWidth="0.6" fill="none" />
          <path d="M0 15 Q25 0 50 15 T100 15 T150 15 T200 15" stroke="#1C376B" strokeWidth="0.6" fill="none" />
          <path d="M0 30 Q25 15 50 30 T100 30 T150 30 T200 30" stroke="#1C376B" strokeWidth="0.5" fill="none" />
          <path d="M0 10 Q25 -5 50 10 T100 10 T150 10 T200 10" stroke="#1C376B" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#guillocheWaves)" />
    </svg>
  )
}

export default function ImpactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-blue-light relative overflow-hidden">
      <GuillocheWavePattern />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Our Impact in Motion
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-white rounded-2xl shadow-sm">
                <stat.icon className="h-7 w-7 text-navy" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}