"use client"

import { motion } from 'framer-motion'
import { Monitor, Brain, Compass, Briefcase, Rocket, ChevronRight } from 'lucide-react'

const journey = [
  { title: 'Foundation', icon: Monitor },
  { title: 'Performance', icon: Brain },
  { title: 'Career Clarity', icon: Compass },
  { title: 'Professional Exposure', icon: Briefcase },
  { title: 'Career Readiness', icon: Rocket },
]

export default function LearningJourney() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Your Learning Journey</h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {journey.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center justify-center w-14 h-14 bg-white border-2 border-border rounded-2xl mb-3 shadow-sm">
                    <step.icon className="h-6 w-6 text-navy" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{step.title}</h3>
                </div>
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)]">
                    <ChevronRight className="h-5 w-5 text-border absolute -right-2" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}