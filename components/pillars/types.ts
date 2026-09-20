export type PillarId = 'academy' | 'corporate' | 'foundation' | 'technologies'

/** A button that opens the contact sheet with `interest` pre-selected. */
export type CtaAction = { label: string; interest: string; soon?: boolean }

export type PillarItem = {
  title: string
  text?: string
  meta?: string
  cta?: CtaAction
}

/** Plain, serialisable data about a pillar (safe to pass from a server page to client components). */
export type PillarMeta = {
  id: PillarId
  tab: string // label in the sheet's tab strip
  eyebrow: string
  title: string
  intro: string
  /** Banner photo, e.g. '/images/pillars/academy.jpg'. Leave undefined for the navy placeholder banner. */
  image?: string
  /** Pinned button in the sheet (and the closing button on the full page) */
  cta: CtaAction
  /** Optional outlined button at the end of the content */
  secondaryCta?: CtaAction
}
