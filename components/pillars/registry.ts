import type { ComponentType } from 'react'
import type { PillarMeta } from './types'
import AcademyContent, { academyMeta } from '@/app/academy/_components/AcademyContent'
import CorporateContent, { corporateMeta } from '@/app/corporate/_components/CorporateContent'
import FoundationContent, { foundationMeta } from '@/app/foundation/_components/FoundationContent'
import TechnologiesContent, {
  technologiesMeta,
} from '@/app/technologies/_components/TechnologiesContent'

/* The slide-over sheet reads this list to build its tabs and to render each pillar's content.
   To add a pillar: create app/<name>/_components/<Name>Content.tsx and add it here (order = tab order). */
export type PillarEntry = { meta: PillarMeta; Content: ComponentType }

export const pillars: PillarEntry[] = [
  { meta: academyMeta, Content: AcademyContent },
  { meta: corporateMeta, Content: CorporateContent },
  { meta: foundationMeta, Content: FoundationContent },
  { meta: technologiesMeta, Content: TechnologiesContent },
]
