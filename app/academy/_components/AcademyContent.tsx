import type { PillarMeta } from '@/components/pillars/types'
import {
  AcademyHero,
  ClosingBand,
  CoursesSection,
  FeatureStrip,
  type Course,
  type Feature,
} from './Academyblocks'

/* Everything on the Academy page lives in this file.
   Edit the copy / courses below — the full page (/academy) and the slide-over sheet both use it.
   Keep `academyMeta` and the default export: page.tsx and the sheet registry import them. */

export const academyMeta: PillarMeta = {
  id: 'academy',
  tab: 'Academy',
  eyebrow: 'Practical skills. Real opportunities.', // kept for the type; not shown in the hero
  title: 'Build the skills you need for what comes next.',
  intro: 'Practical, hands-on courses for students, graduates and young professionals.',
  image: '/images/academy.jpg', 
  cta: { label: 'Apply Now', interest: 'Academy — Apply Now' },
}

const courses: Course[] = [
  {
    title: 'Front-end Development',
    description:
      'Build responsive websites and web apps with HTML, CSS, JavaScript and modern frameworks.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'code',
    image: '/images/academy/web.jpg',
    // interest: 'Academy — Front-end Development',
  },
  {
    title: 'Accounting Software (Quickbooks)',
    description:
      'Manage finances, track expenses and produce professional reports in QuickBooks.',
    duration: '4 weeks',
    price: 'GMD 2,500',
    icon: 'calculator',
    image: '/images/academy/quickbooks.jpg',
    // interest: 'Academy — Accounting Software (Quickbooks)',
  },
  {
    title: 'Google Workspace and Analytics',
    description:
      'Master Google Workspace and use data to make better decisions.',
    duration: '12 weeks',
    price: 'GMD 5,000',
    icon: 'workspace',
    image: '/images/academy/gworkspace.jpg',
    // interest: 'Academy — Google Workspace and Analytics',
  },
  {
    title: 'Communication and Public Speaking',
    description:
      'Speak with clarity, confidence and impact in any setting.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'speaking',
    image: '/images/academy/communication.jpg',
    // interest: 'Academy — Communication and Public Speaking',
  },
  {
    title: 'UI/UX for Beginners',
    description:
      'Design user-friendly digital experiences, from research to prototype.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'design',
    image: '/images/academy/ui.jpg',
  },
]

const features: Feature[] = [
  {
    title: 'Learn by Doing',
    text: 'Hands on projects.',
    icon: 'learn',
  },
  {
    title: 'Expert Instructors',
    text: 'Learn from experienced industry professionals.',
    icon: 'instructors',
  },
  {
    title: 'Build Your Portfolio',
    text: 'Create work you can show employers.',
    icon: 'portfolio',
  },
  {
    title: 'Career Ready',
    text: "Gain skills, confidence and connections.",
    icon: 'career',
  },
]

export default function AcademyContent() {
  return (
    <div className="pb-14">
      <AcademyHero
        title={academyMeta.title}
        intro={academyMeta.intro}
        image={academyMeta.image ?? '/images/academy/hero.jpg'}
      />

      <CoursesSection
        eyebrow="Our courses"
        title="In-demand skills for a brighter future"
        subtitle="Gain practical skills that employers value."
        courses={courses}
      />

      <FeatureStrip features={features} />
     
    </div>
  )
}