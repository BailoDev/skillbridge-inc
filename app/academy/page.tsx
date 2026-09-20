import type { Metadata } from 'next'
import PillarPage from '@/components/pillars/PillarPage'
import AcademyContent, { academyMeta } from './_components/AcademyContent'

export const metadata: Metadata = {
  title: `${academyMeta.tab} — SkillBridge`,
  description: academyMeta.intro,
}

export default function AcademyPage() {
  return (
    <PillarPage meta={academyMeta}>
      <AcademyContent />
    </PillarPage>
  )
}
