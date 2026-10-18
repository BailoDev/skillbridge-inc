import PillarHero from '@/components/pillars/PillarHero'
import type { PillarMeta } from '@/components/pillars/types'
import {
  AreasSection,
  CorporateClosing,
  FitSection,
  ProcessSection,
  WhySection,
  type Area,
  type Step,
} from './CorporateBlocks'

/* Everything on the Corporate page lives in this file.
   Photos are optional — drop files into public/images/corporate/ using the names below
   (or change the paths). Missing photos fall back to a tinted panel. */

export const corporateMeta: PillarMeta = {
  id: 'corporate',
  tab: 'Corporate',
  eyebrow: 'For businesses, NGOs & institutions', // kept for the type; not shown in the hero
  title: 'Build the capability your organisation needs to perform.',
  intro: "Training built around your organisation's needs, not a generic course.",
  image: '/images/corporate/corporate1.jpg',
  cta: { label: 'Talk to our team', interest: 'Corporate — Talk to Our Team' },
  secondaryCta: {
    label: 'Get in touch',
    interest: 'Corporate — Tell Us What Your Team Needs',
  },
}

const steps: Step[] = [
  {
    title: 'We Listen',
    text: "We sit with your team and leadership to understand where the real capability gaps are not just what you think you need, but what's actually slowing your organisation down.",
    icon: 'listen',
  },
  {
    title: 'We Design',
    text: "We build a training plan specific to your organisation the right skills, the right pace, the right format, whether that's a short workshop or a longer structured programme.",
    icon: 'design',
  },
  {
    title: 'We Deliver',
    text: "Our trainers deliver the programme directly to your team, in a way that's practical and immediately applicable not theory for its own sake.",
    icon: 'deliver',
  },
  {
    title: 'We Follow Up',
    text: "We check in after training to see what's actually being applied and adjust where needed. Capability building isn't a one-off event.",
    icon: 'follow',
  },
]

const areas: Area[] = [
  {
    title: 'Digital Skills',
    text: 'Helping teams get comfortable and confident with the everyday and advanced digital tools their work requires.',
    icon: 'digital',
    image: '/images/corporate/digital-skills.jpg',
  },
  {
    title: 'Data & Analytics',
    text: 'Helping staff understand, use, and make decisions from data.',
    icon: 'data',
    image: '/images/corporate/analytics.jpg',
  },
  {
    title: 'Technology & AI Literacy',
    text: 'Helping organisations understand and start using new technology, including AI tools, responsibly and effectively.',
    icon: 'ai',
    image: '/images/corporate/ai.jpg',
  },
  {
    title: 'Professional Development',
    text: 'Communication, leadership, and workplace skills for staff at every level.',
    icon: 'professional',
    image: '/images/corporate/development.jpg',
  },
  {
    title: 'Workplace Productivity',
    text: 'Practical systems and habits that help teams work more efficiently.',
    icon: 'productivity',
    image: '/images/corporate/workplace.jpg',
  },
  {
    title: 'Organisation-Specific Training',
    text: "Anything else your organisation needs that doesn't fit a standard category — we'll design around it.",
    icon: 'custom',
    image: '/images/corporate/organization.jpg',
  },
]

export default function CorporateContent() {
  return (
    <div className="pb-14">
      <PillarHero
        title={corporateMeta.title}
        intro={corporateMeta.intro}
        image={corporateMeta.image}
        cta={{
          label: 'Talk to us about your team needs',
          interest: corporateMeta.cta.interest,
        }}
      />

      <WhySection
        eyebrow="Why Corporate exists"
        title="Real problems. Tailored solutions."
        text="We start by understanding your organisation, then design training around it. That means your team gets the skills they need, in a way that actually sticks."
        // image="/images/corporate/focus.png"
        card={{
          title: 'Your goals. Our focus.',
          text: 'We listen. We design. We deliver. Training that solves real problems and builds lasting capability.',
          linkLabel: 'Our process',
        }}
      />

      <ProcessSection eyebrow="Our process" title="How we work with you" steps={steps} />

      <AreasSection
        eyebrow="Areas we can support"
        title="Practical skills for real impact."
        subtitle="We offer training and development in the following areas, and can also create bespoke programmes for your organisation."
        // banner="/images/corporate/corporate.jpg"
        areas={areas}
      />

      <FitSection
        who={{
          title: 'Who Corporate is for',
          image: '/images/corporate/focus.png',
          items: [
            'Businesses that want their existing staff to keep up with a changing world of work',
            'NGOs and institutions building internal capability without hiring new staff',
            'Organisations onboarding a large number of new staff at once and needing structured, consistent training',
            "Any organisation that has tried generic training before and found it didn't stick",
          ],
        }}
        why={{
          title: 'Why work with SkillBridge Corporate',
          items: [
            'We build around your organisation, not a fixed course catalogue',
            "Local trainers who understand The Gambia's specific work context",
            "Training that connects directly to SkillBridge's wider talent pipeline if you need more people after training your existing team, we can help there too",
          ],
        }}
      />

      <CorporateClosing
        eyebrow="Ready to upskill your team?"
        title="Tell us what your team needs."
        text="We'll work with you to design a training solution that fits your goals, your people, and your organisation."
        buttonLabel={corporateMeta.secondaryCta?.label ?? 'Get in touch'}
        interest={corporateMeta.secondaryCta?.interest ?? corporateMeta.cta.interest}
        image="/images/corporate/corporate.jpg"
      />
    </div>
  )
}