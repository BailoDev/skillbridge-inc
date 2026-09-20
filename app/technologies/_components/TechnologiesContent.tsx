import {
  PillarHeader,
  PillarBody,
  TextSection,
  GridSection,
  ListSection,
  SecondaryCta,
} from '@/components/pillars/PillarSections'
import type { PillarMeta } from '@/components/pillars/types'

/* Everything on the Technologies page lives in this file.
   Tip: when you have real projects, add a "Featured work" section here (a new component of your own). */

export const technologiesMeta: PillarMeta = {
  id: 'technologies',
  tab: 'Technologies',
  eyebrow: 'For individuals, businesses & institutions that need real digital solutions',
  title: 'Build the tools that make it all work.',
  intro:
    'Behind every good programme, every good placement, and every good idea is technology that actually works. SkillBridge Technologies designs and builds practical digital solutions — for SkillBridge itself, and for individuals, businesses, and institutions who need the same.',
  // image: '/images/pillars/technologies.jpg',
  cta: { label: 'Build with us', interest: 'Technologies — Build With Us' },
  secondaryCta: {
    label: 'Start a conversation about your project',
    interest: 'Technologies — Project Conversation',
  },
}

export default function TechnologiesContent() {
  return (
    <>
      <PillarHeader meta={technologiesMeta} />
      <PillarBody>
        <TextSection
          label="Why Technologies exists"
          text="Good ideas fail without the right tools behind them. Whether it's a website that actually represents an organisation well, a system that manages a growing talent pool, or a custom tool that solves a specific business problem — SkillBridge Technologies exists to build the practical digital backbone that individuals and organisations across The Gambia need."
        />

        <GridSection
          label="What we build"
          items={[
            {
              title: 'Websites',
              text: 'For individuals, businesses, and organisations that need a real, professional online presence.',
            },
            {
              title: 'Digital Platforms',
              text: 'Custom platforms built around a specific need, like a talent pool, a booking system, or a community hub.',
            },
            {
              title: 'Custom Software',
              text: 'Tools built specifically for how your organisation actually works.',
            },
            {
              title: 'AI-Powered Systems',
              text: 'Practical applications of AI built to solve real problems, not just for show.',
            },
            {
              title: 'Data & Analytics Tools',
              text: 'Systems that help organisations understand and use their own data.',
            },
            {
              title: 'Workflow & Management Systems',
              text: 'Tools that make day-to-day operations smoother and more organised.',
            },
            {
              title: 'Digital Transformation Support',
              text: 'Helping organisations move from manual, paper-based processes to functional digital ones.',
            },
          ]}
        />

        <GridSection
          label="How we work"
          items={[
            {
              title: '01 — Understand',
              text: "We start by understanding exactly what problem you're trying to solve — not just what you think you want built.",
            },
            {
              title: '02 — Design',
              text: 'We design a solution that fits your actual needs, your budget, and how your organisation really works.',
            },
            {
              title: '03 — Build',
              text: 'Our team builds the solution, keeping you involved and informed throughout.',
            },
            {
              title: '04 — Support',
              text: "We don't disappear after launch — we support what we build so it keeps working for you.",
            },
          ]}
        />

        <ListSection
          label="Who we build for"
          items={[
            'Individuals who need a personal or professional website',
            'Small businesses needing their first real digital presence',
            'Organisations and institutions needing custom internal tools',
            'SkillBridge itself — the systems running Talent, Academy applications, and more',
          ]}
        />

        <SecondaryCta cta={technologiesMeta.secondaryCta} />
      </PillarBody>
    </>
  )
}
