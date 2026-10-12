"use client"

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Compass,
  GraduationCap,
  Wallet,
  HeartHandshake,
  MapPin,
  Megaphone,
  Route,
  Sprout,
  Users,
  Handshake,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useSheets } from '@/components/sheets/sheets-context'

/* Visual building blocks for the Foundation sheet / page.
   Same visual language as Academy and Corporate: navy #1C376B, light blue #f3f7fd,
   auto-fit grids that adapt to the container width (narrow sheet or full page),
   and optional photos that quietly disappear if the file is missing. */

const PROGRAMMES_ID = 'foundation-programmes'

const icons = {
  outreach: MapPin,
  funding: Wallet,
  network: Users,
  pathway: Compass,
  fellowship: GraduationCap,
  sponsorship: Wallet,
  community: Sprout,
  talent: Route,
  mentor: HeartHandshake,
  volunteer: Users,
  ambassador: Megaphone,
  partner: Handshake,
} satisfies Record<string, LucideIcon>

export type FoundationIcon = keyof typeof icons

export type Cta = { label: string; interest: string; soon?: boolean }

const autoGrid = (min: number) => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`,
})

const scrollToProgrammes = () =>
  document.getElementById(PROGRAMMES_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Photo({ src, className }: { src?: string; className?: string }) {
  const [ok, setOk] = useState(true)
  if (!src || !ok) return null
  return <img src={src} alt="" onError={() => setOk(false)} className={className} />
}

function Eyebrow({ children, light }: { children: string; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.25em] ${
        light ? 'text-white/70' : 'text-[#2f56a6]'
      }`}
    >
      {children}
    </p>
  )
}

function Heading({ children }: { children: string }) {
  return (
    <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#1C376B] sm:text-3xl">
      {children}
    </h2>
  )
}

/** Small action link used on cards: opens the contact sheet, or shows "Coming soon" */
function CardCta({ cta }: { cta: Cta }) {
  const { openContact } = useSheets()
  if (cta.soon) {
    return (
      <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
        {cta.label} · Coming soon
      </span>
    )
  }
  return (
    <button
      type="button"
      onClick={() => openContact(cta.interest)}
      className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C376B] transition-colors hover:text-[#1C376B]/70"
    >
      {cta.label}
      <ArrowRight className="h-3.5 w-3.5" />
    </button>
  )
}

/* ───────────────────────── Why Foundation exists ───────────────────────── */

export function WhySection({
  eyebrow,
  title,
  text,
  image,
  callout,
}: {
  eyebrow: string
  title: string
  text: string
  image?: string
  callout: string
}) {
  return (
    <section className="px-6 pt-12 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading>{title}</Heading>
      <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">{text}</p>

      <div className="relative isolate mt-7 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C376B] to-[#2a4f9a] p-6 text-white">
        <Photo src={image} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1C376B] via-[#1C376B]/85 to-[#1C376B]/40" />
        <p className="max-w-md text-base font-semibold leading-snug sm:text-lg">{callout}</p>
        <button
          type="button"
          onClick={scrollToProgrammes}
          className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-80"
        >
          See our programmes
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}

/* ───────────────────────── How we do it ───────────────────────── */

export type Approach = { title: string; text: string; icon: FoundationIcon }

export function ApproachSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: Approach[]
}) {
  return (
    <section className="mt-12 bg-[#f3f7fd] px-6 py-10 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading>{title}</Heading>
      <div className="mt-8 grid gap-x-6 gap-y-9" style={autoGrid(220)}>
        {items.map((item) => {
          const Icon = icons[item.icon]
          return (
            <div key={item.title}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe9f8] text-[#1C376B]">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-[#1C376B]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ───────────────────────── Programmes ───────────────────────── */

export type Flagship = {
  badge: string
  title: string
  text: string
  highlights: string[]
  image?: string
  cta: Cta
}

export type Programme = {
  title: string
  text: string
  tag: string
  icon: FoundationIcon
  cta: Cta
}

function FlagshipCard({ flagship }: { flagship: Flagship }) {
  const { openContact } = useSheets()
  return (
    <article className="relative isolate overflow-hidden rounded-2xl bg-[#1C376B] p-6 text-white sm:p-8">
      <Photo src={flagship.image} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1C376B] via-[#1C376B]/90 to-[#2a4f9a]/80" />
      <GraduationCap
        aria-hidden="true"
        strokeWidth={0.75}
        className="absolute -right-4 -top-4 -z-10 h-32 w-32 text-white/10"
      />

      <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium tracking-wide text-white">
        {flagship.badge}
      </span>
      <h3 className="mt-4 max-w-md text-xl font-bold leading-snug sm:text-2xl">{flagship.title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">{flagship.text}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {flagship.highlights.map((h) => (
          <li
            key={h}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 text-xs text-white/90"
          >
            <Check className="h-3 w-3" strokeWidth={2.5} />
            {h}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => openContact(flagship.cta.interest)}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1C376B] transition-transform duration-300 hover:-translate-y-0.5"
      >
        {flagship.cta.label}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </article>
  )
}

export function ProgrammesSection({
  eyebrow,
  title,
  subtitle,
  flagship,
  programmes,
}: {
  eyebrow: string
  title: string
  subtitle: string
  flagship: Flagship
  programmes: Programme[]
}) {
  return (
    <section id={PROGRAMMES_ID} className="scroll-mt-4 px-6 pt-12 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading>{title}</Heading>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>

      <div className="mt-7">
        <FlagshipCard flagship={flagship} />
      </div>

      <div className="mt-5 grid gap-5" style={autoGrid(240)}>
        {programmes.map((p) => {
          const Icon = icons[p.icon]
          return (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-[#1C376B]/10 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1C376B] text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-[#eaf1fb] px-3 py-1 text-[11px] font-medium text-[#1C376B]">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-[#1C376B]">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{p.text}</p>
              <CardCta cta={p.cta} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

/* ───────────────────────── Get involved ───────────────────────── */

export type Involve = { title: string; text: string; icon: FoundationIcon; cta: Cta }

export function InvolvedSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: Involve[]
}) {
  return (
    <section className="mt-12 bg-[#f3f7fd] px-6 py-10 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading>{title}</Heading>
      <div className="mt-7 grid gap-5" style={autoGrid(220)}>
        {items.map((item) => {
          const Icon = icons[item.icon]
          return (
            <article key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfe9f8] text-[#1C376B]">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-[#1C376B]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.text}</p>
              <CardCta cta={item.cta} />
            </article>
          )
        })}
      </div>
    </section>
  )
}

/* ───────────────────────── Who we serve ───────────────────────── */

export function ServeSection({
  title,
  items,
  image,
}: {
  title: string
  items: string[]
  image?: string
}) {
  return (
    <section className="px-6 pt-12 sm:px-10">
      <div className="overflow-hidden rounded-2xl bg-[#f3f7fd]">
        {image && (
          <div className="relative h-36 bg-gradient-to-br from-[#dbe7f8] to-[#eaf1fb]">
            <Photo src={image} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-3 text-[#1C376B]">
            <Users className="h-6 w-6" strokeWidth={1.6} />
            <h3 className="text-base font-bold">{title}</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
              >
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1C376B] text-white">
                  <Check className="h-2.5 w-2.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Closing band ───────────────────────── */

export function FoundationClosing({
  eyebrow,
  title,
  text,
  cta,
  image,
}: {
  eyebrow: string
  title: string
  text: string
  cta: Cta
  image?: string
}) {
  const { openContact } = useSheets()
  return (
    <section className="px-6 pt-10 sm:px-10">
      <div className="relative isolate flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-2xl bg-[#1C376B] p-6 text-white sm:p-8">
        <Photo src={image} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1C376B] via-[#1C376B]/90 to-[#1C376B]/50" />
        <div className="max-w-sm">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h2 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">{title}</h2>
          <p className="mt-2 text-sm text-white/80">{text}</p>
        </div>
        <button
          type="button"
          onClick={() => openContact(cta.interest)}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1C376B] transition-transform duration-300 hover:-translate-y-0.5"
        >
          {cta.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}