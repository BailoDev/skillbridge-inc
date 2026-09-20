import AboutHero from '@/components/about/about-hero'
import OurStory from '@/components/about/our-story'
import VisionMission from '@/components/about/vision-mission'
import { TeamShowcase } from '@/components/about/team-showcase'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <VisionMission />
      <TeamShowcase />
      {/* <MeetTheFounders /> */}
    </>
  )
}