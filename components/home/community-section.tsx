"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Heart, Award, Handshake } from 'lucide-react'

const communityOptions = [
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Connect with experienced professionals who can guide your career journey and provide valuable insights.',
    href: '/coming-soon',
    cta: 'Find a Mentor',
  },
  {
    icon: Heart,
    title: 'Volunteer With Us',
    description: 'Share your skills and expertise to help young people in The Gambia reach their potential.',
    href: '/coming-soon',
    cta: 'Become a Volunteer',
  },
  {
    icon: Award,
    title: 'Ambassador Program',
    description: 'Represent SkillBridge at your institution and help spread our mission to more young people.',
    href: '/coming-soon',
    cta: 'Become an Ambassador',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Organizations and institutions can partner with us to create impact at scale.',
    href: '/coming-soon',
    cta: 'Explore Partnership',
  },
]

export default function CommunitySection() {
  return (
    <section className="pt-20 pb-10 lg:pt-32 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-navy/60 text-sm font-semibold uppercase tracking-widest mb-3">
            Get Involved
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Join Our Community
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Be part of a growing network of young people, mentors, volunteers, and partners
            working together to build skills, clarity, and opportunity.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {communityOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white rounded-3xl border border-border hover:border-blue-glow/50 hover:shadow-xl hover:shadow-blue-glow/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-light rounded-2xl mb-6 group-hover:bg-navy transition-colors">
                <option.icon className="h-7 w-7 text-navy group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
              <p className="text-muted-foreground mb-6">{option.description}</p>
              <Link
                href={option.href}
                className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-dark transition-colors"
              >
                {option.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
        </motion.div>
      </div>
    </section>
  )
}