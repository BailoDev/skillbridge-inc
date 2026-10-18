"use client"

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  Cpu,
  HeartHandshake,
  MessageSquare,
  Monitor,
  Pencil,
  Puzzle,
  Settings,
  Target,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useSheets } from '@/components/sheets/sheets-context'

/* Visual building blocks for the Corporate sheet / page.
   Layouts use auto-fit grids so they adapt to the width of the container (narrow sheet or
   full page) rather than the browser width. Every photo is optional: if the file is missing,
   the block falls back to a tinted panel. Palette: navy #1C376B · light blue #f3f7fd. */

const PROCESS_ID = 'corporate-process'

const icons = {
  listen: MessageSquare,
  design: Pencil,
  deliver: Users,
  follow: BarChart3,
  digital: Monitor,
  data: BarChart3,
  ai: Cpu,
  professional: Users,
  productivity: Settings,
  custom: Puzzle,
  target: Target,
  handshake: HeartHandshake,
} satisfies Record<string, LucideIcon>

export type CorporateIcon = keyof typeof icons

const autoGrid = (min: number) => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`,
})

const scrollToProcess = () =>
  document.getElementById(PROCESS_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

/** <img> that removes itself if the file doesn't exist yet */
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

/* ───────────────────────── Why Corporate exists ───────────────────────── */

export function WhySection({
  title,
  text,
  image,
  card,
}: {
  eyebrow: string
  title: string
  text: string
  image?: string
  card: { title: string; text: string; linkLabel: string }
}) {
  return (
    <section className="px-6 pt-12 sm:px-10">
      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#1C376B] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">{text}</p>

      <div className="mt-7 overflow-hidden rounded-2xl bg-[#f3f7fd]">
        {/* <div className="grid" style={autoGrid(220)}>
          {image && (
            <div className="relative min-h-[160px] bg-gradient-to-br from-[#dbe7f8] to-[#eaf1fb]">
              <Photo src={image} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          )}
          <div className="p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1C376B] shadow-sm">
              <Target className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="mt-4 text-lg font-bold leading-snug text-[#1C376B]">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{card.text}</p>
            <button
              type="button"
              onClick={scrollToProcess}
              className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C376B] transition-colors hover:text-[#1C376B]/70"
            >
              {card.linkLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

/* ───────────────────────── Process (4 steps) ───────────────────────── */

export type Step = { title: string; text: string; icon: CorporateIcon }

export function ProcessSection({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string
  title: string
  steps: Step[]
}) {
  return (
    <section id={PROCESS_ID} className="mt-12 scroll-mt-4 bg-[#f3f7fd] px-6 py-10 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#1C376B] sm:text-3xl">
        {title}
      </h2>

      <ol className="mt-8 grid gap-x-6 gap-y-9" style={autoGrid(200)}>
        {steps.map((step, i) => {
          const Icon = icons[step.icon]
          return (
            <li key={step.title}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe9f8] text-[#1C376B]">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-[#1C376B]">
                {String(i + 1).padStart(2, '0')} — {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.text}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

/* ───────────────────────── Areas we support ───────────────────────── */

export type Area = { title: string; text: string; icon: CorporateIcon; image?: string }

export function AreasSection({
  eyebrow,
  title,
  subtitle,
  banner,
  areas,
}: {
  eyebrow: string
  title: string
  subtitle: string
  banner?: string
  areas: Area[]
}) {
  return (
    <section className="px-6 pt-12 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#1C376B] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      <Photo src={banner} className="mt-5 h-32 w-full rounded-2xl object-cover sm:h-40" />

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => {
          const Icon = icons[area.icon]
          return (
            <article
              key={area.title}
              className="overflow-hidden rounded-xl border border-[#1C376B]/10 bg-white shadow-sm"
            >
              <div className="relative h-24 bg-gradient-to-br from-[#dbe7f8] to-[#eaf1fb]">
                <Photo src={area.image} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="px-4 pb-5">
                <span className="-mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1C376B] shadow-md ring-1 ring-black/5 relative">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-[#1C376B]">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{area.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

/* ───────────────────────── Who it's for / Why work with us ───────────────────────── */

function CheckList({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-2.5 text-xs leading-relaxed ${
            dark ? 'text-white/90' : 'text-slate-600'
          }`}
        >
          <span
            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
              dark ? 'bg-white text-[#1C376B]' : 'bg-[#1C376B] text-white'
            }`}
          >
            <Check className="h-2.5 w-2.5" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function FitSection({
  who,
  why,
}: {
  who: { title: string; items: string[]; image?: string }
  why: { title: string; items: string[] }
}) {
  return (
    <section className="px-6 pt-10 sm:px-10">
      <div className="grid gap-5" style={autoGrid(280)}>
        <div className="overflow-hidden rounded-2xl bg-[#f3f7fd]">
          {who.image && (
            <div className="relative h-36 bg-gradient-to-br from-[#dbe7f8] to-[#eaf1fb]">
              <Photo src={who.image} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center gap-3 text-[#1C376B]">
              <Users className="h-6 w-6" strokeWidth={1.6} />
              <h3 className="text-base font-bold">{who.title}</h3>
            </div>
            <CheckList items={who.items} />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C376B] to-[#2a4f9a] p-6 text-white">
          <HeartHandshake
            aria-hidden="true"
            strokeWidth={0.75}
            className="absolute -bottom-4 -right-4 h-28 w-28 text-white/10"
          />
          <div className="relative">
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-6 w-6" strokeWidth={1.6} />
              <h3 className="text-base font-bold">{why.title}</h3>
            </div>
            <CheckList items={why.items} dark />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Closing band ───────────────────────── */

export function CorporateClosing({
  eyebrow,
  title,
  text,
  buttonLabel,
  interest,
  image,
}: {
  eyebrow: string
  title: string
  text: string
  buttonLabel: string
  interest: string
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
          onClick={() => openContact(interest)}
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1C376B] transition-transform duration-300 hover:-translate-y-0.5"
        >
          {buttonLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}