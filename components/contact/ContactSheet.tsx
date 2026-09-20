"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Poppins } from 'next/font/google'
import ContactForm from './ContactForm'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

type Props = {
  open: boolean
  interest?: string
  onClose: () => void
}

/* The slide-over frame around <ContactForm />. Stacks on top of a pillar sheet when opened from one. */
export default function ContactSheet({ open, interest, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="contact-overlay"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[65] bg-[#1C376B]/40 backdrop-blur-sm"
        />
      )}

      {open && (
        <motion.aside
          key="contact-panel"
          role="dialog"
          aria-modal="true"
          aria-label="SkillBridge inquiry"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 220 }}
          className={`${poppins.className} fixed right-0 top-0 z-[70] flex h-full w-full flex-col bg-white shadow-2xl sm:max-w-[560px]`}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-black/10 px-8">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#1C376B]">
              SkillBridge Inquiry
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="p-2 text-slate-500 transition-colors hover:text-[#1C376B]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mounts fresh each time the sheet opens, so the form is always empty with the right interest */}
          <ContactForm variant="sheet" interest={interest} />
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
