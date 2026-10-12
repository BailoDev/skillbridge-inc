"use client"

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useSheets } from '@/components/sheets/sheets-context'
import type { CtaAction } from './types'

/* Minimal photo hero shared by the redesigned pillar pages.
   Title + one line + one button over a background photo. If the photo file is missing
   the hero simply falls back to navy. The button opens the contact sheet. */
export default function PillarHero({
  title,
  intro,
  image,
  cta,
}: {
  title: string
  intro: string
  image?: string
  cta: CtaAction
}) {
  const { openContact } = useSheets()
  const [imageOk, setImageOk] = useState(true)

  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-[#1C376B] sm:min-h-[400px]">
      {image && imageOk && (
        <img
          src={image}
          alt=""
          onError={() => setImageOk(false)}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_top]"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1C376B] via-[#1C376B]/70 to-[#1C376B]/10 sm:bg-gradient-to-r sm:from-[#1C376B] sm:via-[#1C376B]/75 sm:to-transparent" />

      <div className="max-w-md px-6 pb-10 pt-24 text-white sm:px-10 sm:pb-12">
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{intro}</p>
        <button
          type="button"
          onClick={() => openContact(cta.interest)}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1C376B] shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-0.5"
        >
          {cta.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}