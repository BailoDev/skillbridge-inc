import type { Metadata } from 'next'
import PillarPage from '@/components/pillars/PillarPage'
import FoundationContent, { foundationMeta } from './_components/FoundationContent'

export const metadata: Metadata = {
  title: `${foundationMeta.tab} — SkillBridge`,
  description: foundationMeta.intro,
}

export default function FoundationPage() {
  return (
    <PillarPage meta={foundationMeta}>
      <FoundationContent />
    </PillarPage>
  )
}
