import HeroSection from '@/components/home/hero-section'
import EcosystemSection from '@/components/home/ecosystem'
import PathSection from '@/components/home/pathSection'
import FindYourPathSection from '@/components/home/FindYourPathSection'
import communityShowcase from '@/components/home/communityShowcase'
import CommunityShowcase from '@/components/home/communityShowcase'
import WhatAppChat from '@/components/WhatAppChat'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <PathSection />
      <CommunityShowcase />
      <FindYourPathSection />
      <WhatAppChat />
    </>
  )
}
