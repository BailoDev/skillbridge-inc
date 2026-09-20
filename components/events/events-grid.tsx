"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { filters, events } from '../../constants/index'
import EventCard from '../event-card'

export default function EventsGrid() {
  const [activeFilter, setActiveFilter] = useState('All Events')

  const filteredEvents = activeFilter === 'All Events'
    ? events
    : events.filter(event => event.category === activeFilter)

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Calendar className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">No events found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}