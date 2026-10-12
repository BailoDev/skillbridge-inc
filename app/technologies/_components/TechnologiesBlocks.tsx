"use client"

import { useState } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Globe,
  Headphones,
  Layers,
  LayoutDashboard,
  Monitor,
  Pencil,
  Search,
  Settings,
  Smartphone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useSheets } from '@/components/sheets/sheets-context'

/* Visual building blocks for the Technologies sheet / page.
   Palette: navy #1C376B · sky blue accent #5ba8f5 (on dark) / #2f7fd8 (on light) · light blue #f3f7fd.
   Photos are optional: a missing file simply falls back to a tinted panel. */

const SERVICES_ID = 'technologies-services'

const icons = {
  websites: Globe,
  platforms: Layers,
  software: Code2,
  ai: Brain,
  data: BarChart3,
  workflow: Settings,
  transformation: Cloud,
  understand: Search,
  design: Pencil,
  build: Code2,
  support: Headphones,
  website: Monitor,
  platform: LayoutDashboard,
  mobile: Smartphone,
  dashboard: BarChart3,
} satisfies Record<string, LucideIcon>

export type TechIcon = keyof typeof icons

const autoGrid = (min: number) => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`,
})

const scrollToServices = () =>
  document.getElementById(SERVICES_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

function Photo({ src, className }: { src?: string; className?: string }) {
  const [ok, setOk] = useState(true)
  if (!src || !ok) return null
  return <img src={src} alt="" onError={() => setOk(false)} className={className} />
}

function Eyebrow({ children, light }: { children: string; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${
        light ? 'text-white/70' : 'text-[#1C376B]'
      }`}
    >
      {children}
    </p>
  )
}

/** Heading with an optional accent-coloured second part, e.g. "From idea to impact." + "Step by step." */
function Heading({
  lead,
  accent,
  light,
  className = '',
}: {
  lead: string
  accent?: string
  light?: boolean
  className?: string
}) {
  return (
    <h2
      className={`text-2xl font-bold leading-tight tracking-tight sm:text-3xl ${
        light ? 'text-white' : 'text-[#1C376B]'
      } ${className}`}
    >
      {lead}
      {accent && (
        <>
          {' '}
          <span className={light ? 'text-[#5ba8f5]' : 'text-[#2f7fd8]'}>{accent}</span>
        </>
      )}
    </h2>
  )
}

/* ───────────────────────── Hero ───────────────────────── */

export function TechHero({
  title,
  accent,
  intro,
  image,
  primary,
  secondaryLabel,
}: {
  title: string
  accent: string
  intro: string
  image?: string
  primary: { label: string; interest: string }
  secondaryLabel: string
}) {
  const { openContact } = useSheets()
  return (
    <section className="relative isolate flex min-h-[360px] items-end overflow-hidden bg-[#1C376B] sm:min-h-[420px]">
      <Photo
        src={image}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1C376B] via-[#1C376B]/75 to-[#1C376B]/10 sm:bg-gradient-to-r sm:from-[#1C376B] sm:via-[#1C376B]/80 sm:to-transparent" />

      <div className="max-w-md px-6 pb-10 pt-24 text-white sm:px-10 sm:pb-12">
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
          {title} <span className="text-[#5ba8f5]">{accent}</span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openContact(primary.interest)}
            className="inline-flex items-center gap-2 rounded-full bg-[#4a9df0] px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-0.5"
          >
            {primary.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={scrollToServices}
            className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#1C376B]"
          >
            {secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── What we build ───────────────────────── */

export type Service = { title: string; text: string; icon: TechIcon }

export function ServicesSection({
  eyebrow,
  title,
  text,
  services,
  wide,
}: {
  eyebrow: string
  title: string
  text: string
  services: Service[]
  wide: Service // the full-width card at the bottom
}) {
  const WideIcon = icons[wide.icon]
  return (
    <section id={SERVICES_ID} className="scroll-mt-4 px-6 pt-12 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading lead={title} className="mt-2 max-w-md" />
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">{text}</p>

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon]
          return (
            <article
              key={s.title}
              className="rounded-xl border border-[#1C376B]/10 bg-white p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1C376B] text-white">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-sm font-semibold leading-snug text-[#1C376B]">{s.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.text}</p>
            </article>
          )
        })}
      </div>

      <article className="mt-4 flex items-center gap-4 rounded-xl border border-[#1C376B]/10 bg-white p-5 shadow-sm">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1C376B] text-white">
          <WideIcon className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-[#1C376B]">{wide.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">{wide.text}</p>
        </div>
      </article>
    </section>
  )
}

/* ───────────────────────── How we work ───────────────────────── */

export type Step = { title: string; text: string; icon: TechIcon }

export function ProcessSection({
  eyebrow,
  title,
  accent,
  text,
  steps,
}: {
  eyebrow: string
  title: string
  accent: string
  text: string
  steps: Step[]
}) {
  return (
    <section className="mt-12 bg-[#f3f7fd] px-6 py-10 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading lead={title} accent={accent} className="mt-2 max-w-xs" />
      <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">{text}</p>

      <ol className="mt-8 grid gap-x-6 gap-y-9" style={autoGrid(190)}>
        {steps.map((step, i) => {
          const Icon = icons[step.icon]
          return (
            <li key={step.title}>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe9f8] text-[#2f7fd8]">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 flex items-center gap-2 text-base font-semibold text-[#1C376B]">
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#2f7fd8]/50 px-1 text-[10px] font-medium text-[#2f7fd8]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                — {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.text}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

/* ───────────────────────── Projects ───────────────────────── */

export type Project = {
  title: string
  text: string
  tag: string
  icon: TechIcon
  image?: string // screenshot, e.g. '/images/technologies/main-website.jpg'
  href?: string // live link / case study. If empty, the button opens the contact sheet instead
}

function ProjectCard({ project }: { project: Project }) {
  const { openContact } = useSheets()
  const Icon = icons[project.icon]
  const linkClass =
    'mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2f7fd8] transition-colors hover:text-[#1C376B]'

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[#1C376B]/10 bg-white shadow-sm">
      <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-[#16305e] to-[#2a4f9a]">
        <Icon aria-hidden="true" strokeWidth={0.9} className="h-14 w-14 text-white/20" />
        <Photo src={project.image} className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="w-fit rounded bg-[#2f7fd8] px-2 py-0.5 text-[10px] font-medium text-white">
          {project.tag}
        </span>
        <h3 className="mt-3 text-sm font-semibold leading-snug text-[#1C376B]">{project.title}</h3>
        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-500">{project.text}</p>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            View project <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <button
            type="button"
            onClick={() => openContact(`Technologies — About: ${project.title}`)}
            className={linkClass}
          >
            View project <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </article>
  )
}

export function ProjectsSection({
  eyebrow,
  title,
  accent,
  text,
  buttonLabel,
  buttonInterest,
  projects,
}: {
  eyebrow: string
  title: string
  accent: string
  text: string
  buttonLabel: string
  buttonInterest: string
  projects: Project[]
}) {
  const { openContact } = useSheets()
  return (
    <section className="px-6 pt-12 sm:px-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading lead={title} accent={accent} className="mt-2 max-w-xs" />
      <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">{text}</p>
      <button
        type="button"
        onClick={() => openContact(buttonInterest)}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1C376B] px-6 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#152b56]"
      >
        {buttonLabel}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </button>

      <div className="mt-8 grid gap-4" style={autoGrid(220)}>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── Closing band ───────────────────────── */

export function TechClosing({
  eyebrow,
  title,
  accent,
  titleEnd,
  text,
  buttonLabel,
  note,
  interest,
}: {
  eyebrow: string
  title: string
  accent: string
  titleEnd: string
  text: string
  buttonLabel: string
  note: string
  interest: string
}) {
  const { openContact } = useSheets()
  return (
    <section className="px-6 pt-10 sm:px-10">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C376B] to-[#2a4f9a] p-6 text-white sm:p-8">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
          {title} <span className="text-[#5ba8f5]">{accent}</span> {titleEnd}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{text}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            type="button"
            onClick={() => openContact(interest)}
            className="inline-flex items-center gap-2 rounded-full bg-[#4a9df0] px-6 py-3 text-xs font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            {buttonLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <p className="text-xs text-white/70">{note}</p>
        </div>
      </div>
    </section>
  )
}