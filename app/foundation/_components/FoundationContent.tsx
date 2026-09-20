import {
  PillarHeader,
  PillarBody,
  TextSection,
  GridSection,
  ListSection,
  SecondaryCta,
} from '@/components/pillars/PillarSections'
import type { PillarMeta } from '@/components/pillars/types'

/* Everything on the Foundation page lives in this file. */

export const foundationMeta: PillarMeta = {
  id: 'foundation',
  tab: 'Foundation',
  eyebrow: 'For young people who face barriers',
  title: 'Making sure opportunity reaches everyone.',
  intro:
    "Not everyone starts from the same place. Some young people have the money, the connections, and the location to access everything SkillBridge offers without a second thought. Others don't. SkillBridge Foundation exists to close that second gap — making sure that where you're born and what you can afford never decides whether you get a fair shot.",
  // image: '/images/pillars/foundation.jpg',
  cta: { label: 'Support our work', interest: 'Foundation — Support Our Work' },
  secondaryCta: { label: 'Partner with us', interest: 'Foundation — Partner With Us' },
}

export default function FoundationContent() {
  return (
    <>
      <PillarHeader meta={foundationMeta} />
      <PillarBody>
        <TextSection
          label="Why Foundation exists"
          text="Academy, Corporate, Talent, and Technologies all build real opportunity but opportunity only matters if people can actually reach it. A young person in a rural village without reliable internet, or a student who can't afford transport to a workshop in the city, faces a barrier that has nothing to do with their ability or drive. SkillBridge Foundation exists to remove those barriers, not to duplicate what the other pillars already do."
        />

        <GridSection
          label="How we do it"
          items={[
            {
              title: 'Reaching Beyond the City',
              text: "Most skills programmes in The Gambia are built around Kanifing, Banjul, and the urban centres. Foundation actively takes SkillBridge's training and opportunities to underserved and rural communities that would otherwise be left out entirely.",
            },
            {
              title: 'Removing Financial Barriers',
              text: "Where cost is the barrier — whether that's programme fees, transport, data, or equipment — Foundation works to cover the gap, through sponsorships, partnerships, and direct support, so ability to pay is never the deciding factor.",
            },
            {
              title: 'Building the Support Network',
              text: "Many young people don't just need training — they need mentors, role models, and a community that believes in their potential. Foundation builds that support system through mentorship and volunteer networks.",
            },
            {
              title: 'Expanding Access to Opportunity',
              text: "Foundation works to make sure that once someone is trained, they're not left without a next step — connecting them onward into Academy programmes, and eventually Talent, just like anyone else.",
            },
          ]}
        />

        <GridSection
          label="Get involved"
          items={[
            {
              title: 'Mentorship Programme',
              text: 'Connect with young people as a mentor, sharing your experience and guiding their career journey.',
              cta: { label: 'Become a mentor', interest: 'Foundation — Mentor', soon: true },
            },
            {
              title: 'Volunteer With Us',
              text: 'Share your time and skills to directly support our programmes and reach.',
              cta: { label: 'Become a volunteer', interest: 'Foundation — Volunteer', soon: true },
            },
            {
              title: 'Ambassador Programme',
              text: 'Represent SkillBridge at your school, university, or community and help spread access to more young people.',
              cta: {
                label: 'Become an ambassador',
                interest: 'Foundation — Ambassador',
                soon: true,
              },
            },
            {
              title: 'Partner With Us',
              text: 'Organisations and institutions can partner with Foundation to fund or deliver outreach at scale.',
              cta: { label: 'Explore partnership', interest: 'Foundation — Partner With Us' },
            },
          ]}
        />

        <ListSection
          label="Who Foundation serves"
          items={[
            'Young people in rural and underserved communities across The Gambia',
            'Students and job-seekers who face financial barriers to accessing training',
            'Anyone who has the drive but not yet the access',
          ]}
        />

        <SecondaryCta cta={foundationMeta.secondaryCta} />
      </PillarBody>
    </>
  )
}
