import {
  PillarHeader,
  PillarBody,
  TextSection,
  GridSection,
  ListSection,
  SecondaryCta,
} from '@/components/pillars/PillarSections'
import type { PillarMeta } from '@/components/pillars/types'

/* Everything on the Academy page lives in this file.
   Add, remove or reorder sections below — the full page (/academy) and the slide-over sheet both use it. */

export const academyMeta: PillarMeta = {
  id: 'academy',
  tab: 'Academy',
  eyebrow: 'For students, graduates & young professionals',
  title: 'Build the skills you need for what comes next.',
  intro:
    "A qualification tells people what you studied. Skills tell people what you can actually do. SkillBridge Academy exists to close that gap through practical, hands-on training built around what students, graduates, and young professionals actually need to succeed in today's world of work.",
  // image: '/images/pillars/academy.jpg',
  cta: { label: 'Apply for a Programme', interest: 'Academy — Apply for a Programme' },
  secondaryCta: {
    label: 'Talk to us about which programme fits you',
    interest: 'Academy — Which Programme Fits Me',
  },
}

export default function AcademyContent() {
  return (
    <>
      <PillarHeader meta={academyMeta} />
      <PillarBody>
        <TextSection
          label="Why Academy exists"
          text="Most education teaches theory. Very little of it teaches you how to actually apply what you've learned — how to use the digital tools employers expect, how to study and perform effectively, how to figure out what career direction fits you, and how to get real exposure to professional environments before you're thrown into one. Academy is where SkillBridge closes that gap directly with individuals."
        />

        <GridSection
          label="The four pillars of Academy"
          items={[
            {
              title: '01 — Digital Literacy & Technical Skills',
              text: 'Building the digital competence young people need for both academic success and the modern workplace — from everyday digital tools to more advanced technical skills like data and AI literacy.',
            },
            {
              title: '02 — Learning Effectiveness',
              text: 'Helping students study smarter, not just harder — proven strategies that improve academic performance and make learning stick.',
            },
            {
              title: '03 — Career Awareness & Guidance',
              text: "Helping young people explore real career paths, understand what different industries actually look like day-to-day, and build clarity about where they're headed.",
            },
            {
              title: '04 — Professional Exposure',
              text: 'Connecting classroom learning to the real world — through mentorship, real projects, and direct exposure to professional environments and people already working in the field.',
            },
          ]}
        />

        <GridSection
          label="Our programmes"
          items={[
            {
              title: 'Career Accelerator Fellowship',
              text: 'A competitive 16-week professional development programme for ambitious young people serious about bridging the gap between where they are and where they want to be. Covers all four Academy pillars in a structured, cohort-based journey with mentorship, real projects, and a public showcase at the end.',
              meta: '16 weeks · Cohort based · Applications open yearly',
              cta: {
                label: 'Apply for the Fellowship',
                interest: 'Academy — Career Accelerator Fellowship',
              },
            },
            {
              title: 'SkillBridge Sprint',
              text: "A shorter, lighter-touch programme designed to bring Academy's core skills to a wider group of people beyond the Fellowship for those who want practical skills fast without a full 16-week commitment.",
              cta: { label: 'Learn more about Sprint', interest: 'Academy — SkillBridge Sprint' },
            },
            {
              title: 'Workshops & Learning Experiences',
              text: 'One-off and short-series sessions on specific, immediately-useful skills — from CV writing and interview preparation to specific digital tools. Open to the wider community, not just fellows.',
              cta: { label: 'View upcoming workshops', interest: 'Academy — Workshops' },
            },
          ]}
        />

        <ListSection
          label="Who Academy is for"
          items={[
            'Secondary school leavers figuring out their next step',
            'University students who want to be job-ready before they graduate',
            'Recent graduates struggling to translate their degree into a job',
            'Young professionals who want to sharpen specific skills',
          ]}
        />

        <ListSection
          label="What you walk away with"
          items={[
            'Practical, demonstrable skills — not just a certificate',
            'A clearer sense of career direction',
            'Real projects and experience you can show employers',
            'Access to mentors and a professional network',
            "A pathway into SkillBridge Talent once you're ready to work",
          ]}
        />

        <SecondaryCta cta={academyMeta.secondaryCta} />
      </PillarBody>
    </>
  )
}
