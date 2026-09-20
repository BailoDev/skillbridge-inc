"use client"

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-white rounded-3xl border border-border"
    >
      <h2 className="text-2xl font-bold text-navy mb-6">
        Send Us a Message
      </h2>
      <form className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
              placeholder=""
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none"
            placeholder="Tell us how we can help..."
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy text-white font-semibold rounded-xl hover:bg-navy-dark transition-colors"
        >
          <Send className="h-5 w-5" />
          Send Message
        </button>
      </form>
    </motion.div>
  )
}