"use client"

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
        Contact Information
      </h2>
      <p className="text-muted-foreground mb-8">
        Reach out to us through any of the channels below. We typically respond within 24-48 hours.
      </p>

      <div className="space-y-10">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-light rounded-xl shrink-0">
            <Mail className="h-5 w-5 text-navy" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <a
              href="mailto:skillbridgef@gmail.com"
              className="text-muted-foreground hover:text-navy transition-colors"
            >
              skillbridgef@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-light rounded-xl shrink-0">
            <Phone className="h-5 w-5 text-navy" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <a
              href="tel:+2203000000"
              className="text-muted-foreground hover:text-navy transition-colors"
            >
              +220 5390472 / +220 3740557
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-light rounded-xl shrink-0">
            <MapPin className="h-5 w-5 text-navy" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">Location</h3>
            <p className="text-muted-foreground">
              Kairaba Avenue<br />
              The Gambia
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10">
        <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-secondary rounded-xl text-muted-foreground hover:bg-blue-light hover:text-navy transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-secondary rounded-xl text-muted-foreground hover:bg-blue-light hover:text-navy transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-secondary rounded-xl text-muted-foreground hover:bg-blue-light hover:text-navy transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}