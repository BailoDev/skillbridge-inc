"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-navy transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-navy font-medium">Contact</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-navy">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Have questions or want to get involved? We&apos;d love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}