"use client"

import { motion } from 'framer-motion'
import { Wrench, Users, Rocket, TrendingUp } from 'lucide-react'

const expectations = [
  {
    icon: Wrench,
    title: 'Practical Skills',
    description: 'Hands-on training in digital tools and techniques you can apply immediately.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Learn from experienced professionals and mentors in various fields.',
  },
  {
    icon: Rocket,
    title: 'Real Opportunities',
    description: 'Connect with internships, job shadowing, and networking events.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'Ongoing support and resources for your professional development journey.',
  },
]

export default function WhatToExpect() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">What to Expect</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expectations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white rounded-2xl border border-border hover:border-blue-glow/50 hover:shadow-xl hover:shadow-blue-glow/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-light rounded-xl mb-4 group-hover:bg-navy transition-colors">
                <item.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}