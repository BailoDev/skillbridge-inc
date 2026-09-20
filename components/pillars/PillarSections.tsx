"use client"

import type { ReactNode } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSheets } from '@/components/sheets/sheets-context'
import { pillarIcons } from './icons'
import type { CtaAction, PillarItem, PillarMeta } from './types'

/* Reusable building blocks for every pillar page — used identically on the full page
   (app/<pillar>/page.tsx) and inside the slide-over sheet. Brand navy: #1C376B. */

function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-5xl px-6 sm:px-10', className)}>{children}</div>
}

/** Banner + eyebrow + heading + intro */
export function PillarHeader({ meta }: { meta: PillarMeta }) {
  const Icon = pillarIcons[meta.id]
  return (
    <>
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#1C376B] to-[#2f56a6] sm:h-64 lg:h-80">
        {meta.image ? (
          <img src={meta.image} alt="" className="h-full w-full object-cover" />
        ) : (
          <>
            <span
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10"
            />
            <Icon
              aria-hidden="true"
              strokeWidth={0.75}
              className="absolute -right-4 top-1/2 h-64 w-64 -translate-y-1/2 text-white/10"
            />
          </>
        )}
      </div>

      <Container className="pt-10 lg:pt-14">
        <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-[#1C376B]/80">
          {meta.eyebrow}
        </span>
        <h1 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-[#1C376B] sm:text-4xl lg:text-[44px]">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {meta.intro}
        </p>
      </Container>
    </>
  )
}

/** Wrap all the sections below the header in this */
export function PillarBody({ children }: { children: ReactNode }) {
  return <Container className="pb-14">{children}</Container>
}

function ItemCta({ cta }: { cta: CtaAction }) {
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
      className="group mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1C376B] transition-colors duration-300 hover:text-[#1C376B]/70"
    >
      {cta.label}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </button>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-400">
      {children}
    </h2>
  )
}

/** Label + one paragraph */
export function TextSection({ label, text }: { label: string; text: string }) {
  return (
    <section className="mt-14">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">{text}</p>
    </section>
  )
}

/** Label + two-column grid of titled items (steps, programmes, offerings…) */
export function GridSection({ label, items }: { label: string; items: PillarItem[] }) {
  return (
    <section className="mt-14">
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-6 grid gap-x-8 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="border-t border-black/10 pb-8 pt-6">
            <h3 className="text-lg font-semibold leading-snug text-[#1C376B]">{item.title}</h3>
            {item.text && (
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            )}
            {item.meta && (
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                {item.meta}
              </p>
            )}
            {item.cta && <ItemCta cta={item.cta} />}
          </div>
        ))}
      </div>
    </section>
  )
}

/** Label + checklist */
export function ListSection({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="mt-14">
      <SectionLabel>{label}</SectionLabel>
      <ul className="mt-6 grid gap-x-8 gap-y-4 border-t border-black/10 pt-6 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1C376B]/10 text-[#1C376B]">
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Outlined button at the end of the content (renders nothing if there's no cta) */
export function SecondaryCta({ cta }: { cta?: CtaAction }) {
  const { openContact } = useSheets()
  if (!cta) return null
  return (
    <div className="mt-14 border-t border-black/10 pt-8">
      <button
        type="button"
        onClick={() => openContact(cta.interest)}
        className="inline-flex items-center gap-2 rounded-full border border-[#1C376B]/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C376B] transition-colors duration-300 hover:bg-[#1C376B] hover:text-white"
      >
        {cta.label}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}

/** Big navy button — pinned at the bottom of the sheet, and closing the full page */
export function PageCta({ cta }: { cta: CtaAction }) {
  const { openContact } = useSheets()
  return (
    <button
      type="button"
      onClick={() => openContact(cta.interest)}
      className="flex h-14 w-full items-center justify-center gap-3 bg-[#1C376B] text-xs font-medium uppercase tracking-[0.28em] text-white transition-colors duration-300 hover:bg-[#152b56]"
    >
      {cta.label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </button>
  )
}
