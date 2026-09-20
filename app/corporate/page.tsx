import type { Metadata } from 'next'
import PillarPage from '@/components/pillars/PillarPage'
import CorporateContent, { corporateMeta } from './_components/CorporateContent'

export const metadata: Metadata = {
  title: `${corporateMeta.tab} — SkillBridge`,
  description: corporateMeta.intro,
}

export default function CorporatePage() {
  return (
    <PillarPage meta={corporateMeta}>
      <CorporateContent />
    </PillarPage>
  )
}
