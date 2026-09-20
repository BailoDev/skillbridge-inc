"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Clock, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

const filters = ['All Events', 'Fellowship', 'Talks', 'Mentorship', 'Career Sessions']

const events = [
  {
    id: 1,
    date: { day: '—', month: 'July 2026' },
    type: 'Fellowship',
    title: 'Career Accelerator Fellowship',
    description: 'A competetive 16-week professional development program design for abitious young people who are serious about bridging the gap between where they are and where they want to be professionally.',
    time: 'July 2026',
    location: 'Kairaba Avenue, beside Qcell',
    category: 'Fellowship',
  },
  {
    id: 2,
    date: { day: '—', month: 'TBC' },
    type: 'Talk',
    title: 'Careers in a Digital World',
    description: 'Insights from professionals in various tech and digital industries.',
    time: 'To be confirmed',
    location: 'To be confirmed',
    category: 'Talks',
  },
  {
    id: 3,
    date: { day: '—', month: 'TBC' },
    type: 'Mentorship',
    title: 'Mentorship Meet & Connect',
    description: 'Connect with mentors and build your network.',
    time: 'To be confirmed',
    location: 'To be confirmed',
    category: 'Mentorship',
  },
]

export default function EventsSection() {
  const [activeFilter, setActiveFilter] = useState('All Events')

  const filteredEvents = activeFilter === 'All Events'
    ? events
    : events.filter(event => event.category === activeFilter)

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Upcoming Events
            </h2>
            <p className="mt-2 text-muted-foreground">
              Join our workshops, talks, and mentorship sessions.
            </p>
          </div>
          <Link
            href="/events"
            className="text-navy font-medium hover:text-blue-secondary transition-colors"
          >
            View All Events &rarr;
          </Link>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeFilter === filter
                  ? 'bg-navy text-white'
                  : 'bg-secondary text-muted-foreground hover:bg-blue-light hover:text-navy'
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-border hover:border-blue-glow/50 hover:shadow-xl hover:shadow-blue-glow/10 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Date Badge */}
                  <div className="flex flex-col items-center justify-center min-w-[60px] h-16 bg-blue-light rounded-xl">
                    <span className="text-xs font-semibold text-navy uppercase">{event.date.month}</span>
                    <span className="text-2xl font-bold text-navy">{event.date.day}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 bg-gold-light text-gold text-xs font-medium rounded-md mb-2">
                      {event.type}
                    </span>
                    <h3 className="font-semibold text-foreground group-hover:text-navy transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="mt-6 w-full px-4 py-2.5 bg-navy text-white font-medium rounded-xl hover:bg-navy-dark transition-colors">
                  <a href="https://forms.gle/dZNcoTAoJG8T4Her8" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}