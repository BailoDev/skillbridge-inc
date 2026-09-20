"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-blue-secondary" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto opacity-10"
          viewBox="0 0 1200 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200 Q300 100 600 150 T1200 100 L1200 200 Z"
            fill="white"
          />
        </svg>
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-5"
          viewBox="0 0 600 300"
          fill="none"
        >
          <path
            d="M50 200 Q300 50 550 200"
            stroke="white"
            strokeWidth="30"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-blue-light/90 max-w-xl mx-auto">
            Explore our programs and take the first step today.
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-white text-navy font-semibold rounded-xl hover:bg-blue-light transition-colors shadow-lg"
          >
            Join Programs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
