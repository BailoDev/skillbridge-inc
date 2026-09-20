"use client"

import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { type Event } from '../constants/index'

type EventCardProps = {
  event: Event
  index: number
}

export default function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
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
          Opening Soon
        </button>
      </div>
    </motion.div>
  )
}