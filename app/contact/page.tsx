import type { Metadata } from 'next'
import ContactSection from '@/components/contact/ContactSection'

export const metadata: Metadata = {
  title: 'Contact — SkillBridge',
  description: 'Tell us who you are and what you need — the right team will get back to you.',
}

export default function ContactPage() {
  return (
    <main className="pt-16 lg:pt-20">
      <ContactSection />
    </main>
  )
}
