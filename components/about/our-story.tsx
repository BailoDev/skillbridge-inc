"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Rocket } from 'lucide-react'

const storySteps = [
  {
    icon: MessageSquare,
    title: 'The Problem',
    description: 'Young people lack the skills, clarity and exposure they need to succeed.',
  },
  {
    icon: Lightbulb,
    title: 'Our Response',
    description: 'We created a structured program to close the gap intentionally.',
  },
  {
    icon: Rocket,
    title: 'Our Vision',
    description: 'Expanding to empower young people across The Gambia.',
  },
]

export default function OurStory() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Story</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line — spans between the 3 icon centers */}
          <div className="hidden sm:block absolute top-8 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 bg-border" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {storySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-navy rounded-full mb-4 shadow-lg">
                    <step.icon className="h-7 w-7 text-navy" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}