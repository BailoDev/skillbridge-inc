import type { Metadata } from 'next'
import PillarPage from '@/components/pillars/PillarPage'
import TechnologiesContent, { technologiesMeta } from './_components/TechnologiesContent'

export const metadata: Metadata = {
  title: `${technologiesMeta.tab} — SkillBridge`,
  description: technologiesMeta.intro,
}

export default function TechnologiesPage() {
  return (
    <PillarPage meta={technologiesMeta}>
      <TechnologiesContent />
    </PillarPage>
  )
}
