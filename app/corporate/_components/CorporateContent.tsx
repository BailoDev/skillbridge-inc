import {
  PillarHeader,
  PillarBody,
  TextSection,
  GridSection,
  ListSection,
  SecondaryCta,
} from '@/components/pillars/PillarSections'
import type { PillarMeta } from '@/components/pillars/types'

/* Everything on the Corporate page lives in this file. */

export const corporateMeta: PillarMeta = {
  id: 'corporate',
  tab: 'Corporate',
  eyebrow: 'For businesses, NGOs & institutions',
  title: 'Build the capability your organisation needs.',
  intro:
    "Every organisation eventually hits the same wall: the people are willing, but the skills haven't kept up with what the work now demands. SkillBridge Corporate works directly with businesses, NGOs, and institutions to close that gap with training built around your actual needs — not a one-size-fits-all course.",
  // image: '/images/pillars/corporate.jpg',
  cta: { label: 'Talk to our team', interest: 'Corporate — Talk to Our Team' },
  secondaryCta: {
    label: 'Tell us what your team needs',
    interest: 'Corporate — Tell Us What Your Team Needs',
  },
}

export default function CorporateContent() {
  return (
    <>
      <PillarHeader meta={corporateMeta} />
      <PillarBody>
        <TextSection
          label="Why Corporate exists"
          text="Sending staff on a generic training course rarely solves the real problem, because the real problem is usually specific to your organisation — a particular tool your team hasn't mastered, a skill gap slowing down a particular department, a way of working that hasn't modernised. SkillBridge Corporate starts by understanding your organisation before we design anything."
        />

        <GridSection
          label="How we work with you"
          items={[
            {
              title: 'Step 1 — We Listen',
              text: "We sit with your team and leadership to understand where the real capability gaps are — not just what you think you need, but what's actually slowing your organisation down.",
            },
            {
              title: 'Step 2 — We Design',
              text: "We build a training plan specific to your organisation — the right skills, the right pace, the right format, whether that's a short workshop or a longer structured programme.",
            },
            {
              title: 'Step 3 — We Deliver',
              text: "Our trainers deliver the programme directly to your team, in a way that's practical and immediately applicable — not theory for its own sake.",
            },
            {
              title: 'Step 4 — We Follow Up',
              text: "We check in after training to see what's actually being applied and adjust where needed. Capability building isn't a one-off event.",
            },
          ]}
        />

        <GridSection
          label="Areas we can support"
          items={[
            {
              title: 'Digital Skills',
              text: 'Helping teams get comfortable and confident with the everyday and advanced digital tools their work requires.',
            },
            {
              title: 'Data & Analytics',
              text: 'Helping staff understand, use, and make decisions from data.',
            },
            {
              title: 'Technology & AI Literacy',
              text: 'Helping organisations understand and start using new technology, including AI tools, responsibly and effectively.',
            },
            {
              title: 'Professional Development',
              text: 'Communication, leadership, and workplace skills for staff at every level.',
            },
            {
              title: 'Workplace Productivity',
              text: 'Practical systems and habits that help teams work more efficiently.',
            },
            {
              title: 'Organisation-Specific Training',
              text: "Anything else your organisation needs that doesn't fit a standard category — talk to us and we'll design around it.",
            },
          ]}
        />

        <ListSection
          label="Who Corporate is for"
          items={[
            'Businesses that want their existing staff to keep up with a changing world of work',
            'NGOs and institutions building internal capability without hiring new staff',
            'Organisations onboarding a large number of new staff at once and needing structured, consistent training',
            "Any organisation that has tried generic training before and found it didn't stick",
          ]}
        />

        <ListSection
          label="Why work with SkillBridge Corporate"
          items={[
            'We build around your organisation, not a fixed course catalogue',
            "Local trainers who understand The Gambia's specific work context",
            "Training that connects directly to SkillBridge's wider talent pipeline — if you need more people after training your existing team, we can help there too",
          ]}
        />

        <SecondaryCta cta={corporateMeta.secondaryCta} />
      </PillarBody>
    </>
  )
}
