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
      'Learn to build modern, responsive websites and web applications using HTML, CSS, JavaScript and popular frameworks.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'code',
    image: '/images/academy/web.jpg',
    interest: 'Academy — Front-end Development',
  },
  {
    title: 'Accounting Software (Quickbooks)',
    description:
      'Get hands-on with QuickBooks and learn how to manage finances, track expenses, and create professional reports.',
    duration: '4 weeks',
    price: 'GMD 2,500',
    icon: 'calculator',
    image: '/images/academy/quickbooks.jpg',
    interest: 'Academy — Accounting Software (Quickbooks)',
  },
  {
    title: 'Google Workspace and Analytics',
    description:
      'Master Google Workspace tools and learn how to use data and analytics to make better decisions and drive results.',
    duration: '12 weeks',
    price: 'GMD 5,000',
    icon: 'workspace',
    image: '/images/academy/gworkspace.jpg',
    interest: 'Academy — Google Workspace and Analytics',
  },
  {
    title: 'Communication and Public Speaking',
    description:
      'Build your confidence, improve your communication skills, and learn how to speak with clarity, purpose, and impact — in any setting.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'speaking',
    image: '/images/academy/communication.jpg',
    interest: 'Academy — Communication and Public Speaking',
  },
  {
    title: 'UI/UX for Beginners',
    description:
      'Learn how to design user-friendly digital experiences, from research and wireframing to prototyping and testing.',
    duration: '12 weeks',
    price: 'GMD 6,000',
    icon: 'design',
    image: '/images/academy/ui.jpg',
    interest: 'Academy — UI/UX',
  },
]

const features: Feature[] = [
  {
    title: 'Learn by Doing',
    text: 'Hands-on projects and real-world exercises, not just theory.',
    icon: 'learn',
  },
  {
    title: 'Expert Instructors',
    text: 'Learn from experienced professionals and industry experts.',
    icon: 'instructors',
  },
  {
    title: 'Build Your Portfolio',
    text: 'Create tangible work you can show employers.',
    icon: 'portfolio',
  },
  {
    title: 'Career Ready',
    text: "Gain skills, confidence, and connections for what's next.",
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

      <ClosingBand
        eyebrow="Ready to get started?"
        title="Your next chapter starts with a skill."
        text="Choose a course, build your skills, and take the next step toward your goals."
      />
    </div>
  )
}