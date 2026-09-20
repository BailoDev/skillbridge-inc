"use client"

import { useState } from 'react'
import type { FormEvent } from 'react'
import { Loader2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { INTERESTS } from './interests'

const TO_EMAIL = 'skillbridgef@gmail.com'

/* How inquiries are delivered.
   - Set NEXT_PUBLIC_CONTACT_ENDPOINT (e.g. a Formspree / Web3Forms URL, or your own /api/contact route)
     and the form POSTs JSON { name, email, interest, message, subject, _subject } to it.
   - Without it, the form falls back to opening the visitor's email app, pre-filled to skillbridgef@gmail.com. */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT

type Delivery = 'sent' | 'mailto'

async function sendInquiry(data: {
  name: string
  email: string
  interest: string
  message: string
}): Promise<Delivery> {
  const subject = `SkillBridge website inquiry — ${data.interest}`

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, subject, _subject: subject }),
    })
    if (!res.ok) throw new Error('Request failed')
    return 'sent'
  }

  const body = `Name: ${data.name}\nEmail: ${data.email}\nInterest: ${data.interest}\n\n${data.message}`
  window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`
  return 'mailto'
}

const labelCls = 'text-[11px] uppercase tracking-[0.25em] text-slate-400'
const inputCls =
  'mt-2 h-20 w-full border-b border-black/15 bg-transparent text-xl text-[#1C376B] outline-none transition-colors placeholder:text-slate-300 focus:border-[#1C376B]'

type Props = {
  /** Pre-selects "What is this about?" */
  interest?: string
  /** 'sheet' = fills the slide-over (scrolling fields + pinned button); 'page' = a card for the /contact page */
  variant?: 'sheet' | 'page'
}

export default function ContactForm({ interest, variant = 'sheet' }: Props) {
  const isSheet = variant === 'sheet'
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [selected, setSelected] = useState(interest || 'General Inquiry')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<Delivery | null>(null)
  const [error, setError] = useState<string | null>(null)

  const options = INTERESTS.includes(selected) ? INTERESTS : [selected, ...INTERESTS]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)
    try {
      setSubmitted(await sendInquiry({ ...form, interest: selected }))
    } catch {
      setError(
        `Something went wrong sending your inquiry. Please email us directly at ${TO_EMAIL}.`
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center px-10 text-center',
          isSheet ? 'flex-1' : 'border border-black/10 bg-white py-24 shadow-sm'
        )}
      >
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#1C376B]">
          <Check className="h-6 w-6 text-white" />
        </div>
        <h3 className="mb-4 text-4xl font-bold tracking-tight text-[#1C376B]">Thank you.</h3>
        <p className="max-w-sm text-lg text-slate-600">
          {submitted === 'sent'
            ? "Your inquiry is on its way to the SkillBridge team. We'll be in touch soon."
            : `Your email app should open with your inquiry ready to send. If it doesn't, email us at ${TO_EMAIL}.`}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex flex-col',
        isSheet ? 'flex-1 overflow-hidden' : 'border border-black/10 bg-white shadow-sm'
      )}
    >
      <div className={cn(isSheet ? 'flex-1 overflow-y-auto px-8 py-6' : 'px-6 py-8 sm:px-10')}>
        {isSheet && (
          <p className="pb-6 leading-relaxed text-slate-600">
            Tell us who you are and what you need — the right team will get back to you.
          </p>
        )}

        <label className="block">
          <span className={labelCls}>Your name</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls}
            placeholder="Full name"
          />
        </label>

        <label className="mt-6 block">
          <span className={labelCls}>Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls}
            placeholder="you@email.com"
          />
        </label>

        <label className="mt-6 block">
          <span className={labelCls}>What is this about?</span>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="mt-2 h-16 w-full border-b border-black/15 bg-transparent text-lg text-[#1C376B] outline-none focus:border-[#1C376B]"
          >
            {options.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </label>

        <label className="mt-6 block">
          <span className={labelCls}>Message</span>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-2 w-full resize-none border-b border-black/15 bg-transparent py-4 text-lg text-[#1C376B] outline-none transition-colors placeholder:text-slate-300 focus:border-[#1C376B]"
            placeholder="Tell us a little more…"
          />
        </label>

        {error && <p className="mt-6 text-sm text-red-600">{error}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="flex h-16 w-full shrink-0 items-center justify-center gap-3 bg-[#1C376B] text-xs uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-[#152b56] disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          'Send Inquiry'
        )}
      </button>
    </form>
  )
}
