
"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  UserRound,
  Layers3,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { INTERESTS } from "./interests"

const TO_EMAIL = "skillbridgef@gmail.com"
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT

type Delivery = "sent" | "mailto"

type InquiryData = {
  name: string
  email: string
  phone: string
  interest: string
  message: string
}

async function sendInquiry(data: InquiryData): Promise<Delivery> {
  const subject = `SkillBridge website inquiry — ${data.interest}`

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        subject,
        _subject: subject,
      }),
    })

    if (!res.ok) throw new Error("Request failed")
    return "sent"
  }

  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Interest: ${data.interest}`,
    "",
    data.message,
  ].join("\n")

  window.location.href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`

  return "mailto"
}

type Props = {
  interest?: string
  variant?: "sheet" | "page"
}

const labelClass =
  "text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500"

const inputClass =
  "mt-2.5 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#1C376B] outline-none transition-colors placeholder:text-slate-400 hover:border-blue-200 focus:border-[#397BC4] focus:ring-4 focus:ring-blue-100/70"

export default function ContactForm({
  interest,
  variant = "sheet",
}: Props) {
  const isSheet = variant === "sheet"

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [selected, setSelected] = useState(
    interest || "General Inquiry"
  )
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<Delivery | null>(null)
  const [error, setError] = useState<string | null>(null)

  const options = INTERESTS.includes(selected)
    ? INTERESTS
    : [selected, ...INTERESTS]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (submitting) return

    setSubmitting(true)
    setError(null)

    try {
      const result = await sendInquiry({
        ...form,
        interest: selected,
      })

      setSubmitted(result)
    } catch {
      setError(
        `We couldn't send your inquiry. Please email us directly at ${TO_EMAIL}.`
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center px-6 py-16 text-center",
          isSheet
            ? "min-h-0 flex-1 overflow-y-auto"
            : "min-h-[400px] rounded-2xl border border-slate-200 bg-white"
        )}
      >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1C376B]">
          {submitted === "sent" ? (
            <CheckCircle2 className="h-7 w-7" />
          ) : (
            <Mail className="h-7 w-7" />
          )}
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-[#1C376B]">
          {submitted === "sent" ? "Thank you!" : "Almost there"}
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
          {submitted === "sent"
            ? "Your inquiry has been sent to the SkillBridge team. We look forward to hearing more about your project."
            : `Your email app should open with your message ready to send. If it doesn't, contact us at ${TO_EMAIL}.`}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-[#1C376B]">
          <Check className="h-4 w-4" />
          {submitted === "sent"
            ? "Inquiry submitted successfully"
            : "Ready for you to send"}
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "overflow-hidden",
        isSheet
          ? "flex min-h-0 flex-1 flex-col"
          : "rounded-2xl border border-slate-200 bg-white shadow-sm"
      )}
    >
      <div
        className={cn(
          "min-h-0 bg-white px-6 py-6 sm:px-8",
          isSheet && "flex-1 overflow-y-auto overscroll-contain"
        )}
      >
        {/* heading */}
        <div className="relative mb-7 overflow-hidden rounded-2xl border border-[#2D4B7C] bg-[#1C376B] p-5 sm:p-6">
          {/* Logo watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[url('/images/logo.png')] bg-right-center bg-no-repeat opacity-[1]"
            style={{
              backgroundSize: "min(88%, 360px) auto",
            }}
          />

          {/* Navy overlay to soften the logo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1C376B] via-[#1C376B]/90 to-[#1C376B]/50"
          />

          {/* Heading content */}
          <div className="relative flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white">
              <MessageSquare className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold tracking-tight text-white">
                Let's talk<span className="text-blue-300">.</span>
              </h2>

              <p className="mt-1 text-sm leading-5 text-blue-100">
                Have an idea? We'd love to hear about it.
              </p>
            </div>
          </div>

          <div className="relative mt-5 h-px w-full bg-gradient-to-r from-blue-200/50 via-white/20 to-transparent" />
        </div>

        {/* Form introduction */}
        <div className="mb-6">
          <p className="mt-1 text-sm leading-5 text-slate-500">
            Share a few details and we'll take it from there.
          </p>
        </div>

        <div className="space-y-5">
          {/* Name */}
          <label className="block">
            <span className={labelClass}>Your name</span>

            <span className="relative block">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className={cn(inputClass, "h-12 pl-11")}
                placeholder="Enter your full name"
              />
            </span>
          </label>

          {/* Email and phone */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="block min-w-0">
              <span className={labelClass}>Email address</span>

              <span className="relative block">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={cn(inputClass, "h-12 pl-11")}
                  placeholder="you@example.com"
                />
              </span>
            </label>

            <label className="block min-w-0">
              <span className={labelClass}>Phone number</span>

              <span className="relative block">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  className={cn(inputClass, "h-12 pl-11")}
                  placeholder="+220 XXX XXXX"
                />
              </span>
            </label>
          </div>

          {/* Area of interest */}
          <label className="block">
            <span className={labelClass}>Area of interest</span>

            <span className="relative block">
              <Layers3 className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className={cn(
                  inputClass,
                  "h-12 cursor-pointer appearance-none pl-11 pr-10"
                )}
              >
                {options.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                ▼
              </span>
            </span>
          </label>

          {/* Message */}
          <label className="block">
            <span className={labelClass}>Your message</span>

            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className={cn(
                inputClass,
                "min-h-[120px] resize-y py-3 leading-6"
              )}
              placeholder="Tell us what you need or what you'd like to build..."
            />

            <span className="mt-2 block text-xs text-slate-400">
              Don't worry if you haven't figured everything out yet.
            </span>
          </label>
        </div>

        {error && (
          <p
            role="alert"
            className="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
          >
            {error}
          </p>
        )}
      </div>

      {/* Pinned submit area for sheet mode */}
      <div className="shrink-0 border-t border-slate-100 bg-white px-6 py-4 sm:px-8">
        <button
          type="submit"
          disabled={submitting}
          className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1C376B] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#254984] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send inquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="mt-3 text-center text-xs text-slate-400">
          We'll be happy to hear from you.
        </p>
      </div>
    </form>
  )
}
