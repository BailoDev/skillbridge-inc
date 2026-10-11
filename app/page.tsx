import HeroSection from '@/components/home/hero-section'
import EcosystemSection from '@/components/home/ecosystem'
import PathSection from '@/components/home/pathSection'
import WhereYouFitIn from '@/components/home/whereYouFit'
import FindYourPathSection from '@/components/home/FindYourPathSection'
import communityShowcase from '@/components/home/communityShowcase'
import WhySection from '@/components/home/why-section'
import PillarsSection from '@/components/home/pillars-section'
import ImpactSection from '@/components/home/impact-section'
import EventsSection from '@/components/home/events-section'
import CTASection from '@/components/home/cta-section'
import CommunitySection from '@/components/home/community-section'
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
      {/* <WhereYouFitIn /> */}
      {/* <WhySection />
      <PillarsSection />
      <ImpactSection />
      <CommunitySection />
      <EventsSection /> */}
      {/* <CTASection /> */}
    </>
  )
}
