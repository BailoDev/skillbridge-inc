"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Brain, Compass, Briefcase, Plus, Minus, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const pillars = [
  {
    number: '01',
    icon: Monitor,
    title: 'Digital Literacy & Technical Skills',
    description: 'Building essential digital competence for academic and workforce readiness.',
    details: [
      'Computer fundamentals and productivity tools',
      'Digital communication and collaboration',
      'Data management and analysis basics',
      'Online research and information literacy',
      'Digital security and privacy awareness',
    ],
    color: 'text-navy',
    bgColor: 'bg-blue-light',
  },
  {
    number: '02',
    icon: Brain,
    title: 'Learning Effectiveness',
    description: 'Study smarter with proven strategies that improve performance.',
    details: [
      'Active learning techniques',
      'Time management and productivity',
      'Note-taking and study methods',
      'Memory enhancement strategies',
      'Exam preparation and test-taking skills',
    ],
    color: 'text-gold',
    bgColor: 'bg-gold-light',
  },
  {
    number: '03',
    icon: Compass,
    title: 'Career Awareness & Guidance',
    description: 'Exploring pathways, building clarity and preparing for a purposeful future.',
    details: [
      'Self-assessment and career exploration',
      'Industry insights and career pathways',
      'CV writing and personal branding',
      'Interview preparation',
      'Networking fundamentals',
    ],
    color: 'text-navy',
    bgColor: 'bg-blue-light',
  },
  {
    number: '04',
    icon: Briefcase,
    title: 'Professional Exposure',
    description: 'Connecting learning to real world experiences and professional opportunities.',
    details: [
      'Workplace etiquette and professionalism',
      'Industry talks and panel discussions',
      'Job shadowing opportunities',
      'Mentorship connections',
      'Internship preparation',
    ],
    color: 'text-gold',
    bgColor: 'bg-gold-light',
  },
]

export default function ProgramPillarsAccordion() {
  const [openPillar, setOpenPillar] = useState<number | null>(0)

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
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">Program Pillars</h2>
          <p className="mt-4 text-muted-foreground">
            Explore each pillar to learn what we cover.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenPillar(openPillar === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-blue-light">{pillar.number}</span>
                  <span className={cn("font-semibold", openPillar === index ? 'text-navy' : 'text-foreground')}>
                    {pillar.title}
                  </span>
                </div>
                {openPillar === index ? (
                  <Minus className="h-5 w-5 text-navy shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-muted-foreground shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openPillar === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground mb-4">{pillar.description}</p>
                      <ul className="space-y-2">
                        {pillar.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="h-4 w-4 text-navy shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}