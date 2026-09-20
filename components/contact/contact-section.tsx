"use client"

import ContactInfo from './contact-info'
import ContactForm from './contact-form'

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}