import PillarHero from '@/components/pillars/PillarHero'
import type { PillarMeta } from '@/components/pillars/types'
import {
  ApproachSection,
  FoundationClosing,
  InvolvedSection,
  ProgrammesSection,
  ServeSection,
  WhySection,
  type Approach,
  type Flagship,
  type Involve,
  type Programme,
} from './FoundationBlocks'

/* Everything on the Foundation page lives in this file.
   Photos are optional — drop files into public/images/foundation/ using the names below
   (or change the paths). Missing photos fall back to the navy / light-blue panels. */

export const foundationMeta: PillarMeta = {
  id: 'foundation',
  tab: 'Foundation',
  eyebrow: 'For young people who face barriers', // kept for the type; not shown in the hero
  title: 'Making sure opportunity reaches everyone.',
  intro: "Where you're born and what you can afford should never decide whether you get a fair shot.",
  image: '/images/foundation/hero.jpg',
  cta: { label: 'Support our work', interest: 'Foundation — Support Our Work' },
  secondaryCta: { label: 'Partner with us', interest: 'Foundation — Partner With Us' },
}

const approach: Approach[] = [
  {
    title: 'Reaching Beyond the City',
    text: "Most skills programmes in The Gambia are built around Kanifing, Banjul, and the urban centres. Foundation actively takes SkillBridge's training and opportunities to underserved and rural communities that would otherwise be left out entirely.",
    icon: 'outreach',
  },
  {
    title: 'Removing Financial Barriers',
    text: "Where cost is the barrier — whether that's programme fees, transport, data, or equipment — Foundation works to cover the gap, through sponsorships, partnerships, and direct support, so ability to pay is never the deciding factor.",
    icon: 'funding',
  },
  {
    title: 'Building the Support Network',
    text: "Many young people don't just need training — they need mentors, role models, and a community that believes in their potential. Foundation builds that support system through mentorship and volunteer networks.",
    icon: 'network',
  },
  {
    title: 'Expanding Access to Opportunity',
    text: "Foundation works to make sure that once someone is trained, they're not left without a next step — connecting them onward into Academy programmes, and eventually Talent, just like anyone else.",
    icon: 'pathway',
  },
]

const flagship: Flagship = {
  badge: 'Flagship programme · Applications open yearly',
  title: 'SkillBridge Career Accelerator Fellowship',
  text: 'A competitive 16-week professional development programme for ambitious young people serious about bridging the gap between where they are and where they want to be. Foundation works to make sure the right candidates can take part, whatever their background or circumstances.',
  highlights: ['16 weeks', 'Cohort-based', 'Mentorship', 'Real projects', 'Public showcase'],
  image: '/images/foundation/accelerator.jpg',
  cta: {
    label: 'Apply for the Fellowship',
    interest: 'Foundation — Career Accelerator Fellowship',
  },
}

/* The programmes below (other than the Career Accelerator) are suggestions for what Foundation
   can offer — edit titles, copy and "tag" to match what you actually run. Set `soon: true`
   on a cta to show "Coming soon" instead of a button. */
const programmes: Programme[] = [
  {
    title: 'Community Skills Outreach',
    text: 'Short, practical workshops taken directly into rural and underserved communities — from digital basics and CV writing to interview preparation.',
    tag: 'Short series',
    icon: 'community',
    cta: { label: 'Bring a workshop to your community', interest: 'Foundation — Community Skills Outreach' },
  },
  {
    title: 'Sponsorship & Support Fund',
    text: 'Covers the real costs that keep people out — programme fees, transport, data and equipment — so talented young people can join Academy programmes.',
    tag: 'Funded places',
    icon: 'sponsorship',
    cta: { label: 'Ask about support', interest: 'Foundation — Sponsorship & Support Fund' },
  },
  {
    title: 'Pathway to Talent',
    text: 'Follow-on support for Foundation participants once training ends, helping them move into work through SkillBridge Talent.',
    tag: 'After training',
    icon: 'talent',
    cta: { label: 'Learn about the pathway', interest: 'Foundation — Pathway to Talent', soon: true },
  },
]

const involve: Involve[] = [
  {
    title: 'Mentorship Programme',
    text: 'Connect with young people as a mentor, sharing your experience and guiding their career journey.',
    icon: 'mentor',
    cta: { label: 'Become a mentor', interest: 'Foundation — Mentor', soon: true },
  },
  {
    title: 'Volunteer With Us',
    text: 'Share your time and skills to directly support our programmes and reach.',
    icon: 'volunteer',
    cta: { label: 'Become a volunteer', interest: 'Foundation — Volunteer', soon: true },
  },
  {
    title: 'Ambassador Programme',
    text: 'Represent SkillBridge at your school, university, or community and help spread access to more young people.',
    icon: 'ambassador',
    cta: { label: 'Become an ambassador', interest: 'Foundation — Ambassador', soon: true },
  },
  {
    title: 'Partner With Us',
    text: 'Organisations and institutions can partner with Foundation to fund or deliver outreach at scale.',
    icon: 'partner',
    cta: { label: 'Explore partnership', interest: 'Foundation — Partner With Us' },
  },
]

export default function FoundationContent() {
  return (
    <div className="pb-14">
      <PillarHero
        title={foundationMeta.title}
        intro={foundationMeta.intro}
        image={foundationMeta.image}
        cta={foundationMeta.cta}
      />

      <WhySection
        eyebrow="Why Foundation exists"
        title="Opportunity only matters if people can reach it."
        text="Academy, Corporate, Talent, and Technologies all build real opportunity but opportunity only matters if people can actually reach it. A young person in a rural village without reliable internet, or a student who can't afford transport to a workshop in the city, faces a barrier that has nothing to do with their ability or drive. SkillBridge Foundation exists to remove those barriers, not to duplicate what the other pillars already do."
        callout="Not everyone starts from the same place. Foundation exists to close that gap."
        image="/images/foundation/why.jpg"
      />

      <ApproachSection eyebrow="How we do it" title="Four ways we remove barriers" items={approach} />

      <ProgrammesSection
        eyebrow="Foundation programmes"
        title="Programmes that open doors"
        subtitle="Ways we help young people get trained, supported and moving forward."
        flagship={flagship}
        programmes={programmes}
      />

      <InvolvedSection eyebrow="Get involved" title="Help us reach more young people" items={involve} />

      <ServeSection
        title="Who Foundation serves"
        image="/images/foundation/serve.jpg"
        items={[
          'Young people in rural and underserved communities across The Gambia',
          'Students and job-seekers who face financial barriers to accessing training',
          'Anyone who has the drive but not yet the access',
        ]}
      />

      <FoundationClosing
        eyebrow="Ready to make a difference?"
        title="Help us reach every young person."
        text="Partner with Foundation to fund or deliver outreach at scale."
        cta={foundationMeta.secondaryCta ?? foundationMeta.cta}
        image="/images/foundation/closing.jpg"
      />
    </div>
  )
}