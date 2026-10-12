import type { PillarMeta } from '@/components/pillars/types'
import {
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  TechClosing,
  TechHero,
  type Project,
  type Service,
  type Step,
} from './TechnologiesBlocks'

/* Everything on the Technologies page lives in this file.
   Photos / screenshots are optional — drop files into public/images/technologies/ using the
   names below (or change the paths). Missing files fall back to a tinted panel. */

export const technologiesMeta: PillarMeta = {
  id: 'technologies',
  tab: 'Technologies',
  eyebrow: 'For individuals, businesses & institutions that need real digital solutions', // kept for the type; not shown in the hero
  title: 'Build the tools that make it all work.',
  intro:
    'Practical digital solutions for SkillBridge itself, and for individuals, businesses, and institutions who need the same.',
  image: '/images/technologies/hero.jpg',
  cta: { label: 'Start a Conversation', interest: 'Technologies — Build With Us' },
  secondaryCta: {
    label: 'Start a Conversation',
    interest: 'Technologies — Project Conversation',
  },
}

const services: Service[] = [
  {
    title: 'Websites',
    text: 'For individuals, businesses, and organisations that need a real, professional online presence.',
    icon: 'websites',
  },
  {
    title: 'Digital Platforms',
    text: 'Custom platforms built around a specific need, like a talent pool, a booking system, or a community hub.',
    icon: 'platforms',
  },
  {
    title: 'Custom Software',
    text: 'Tools built specifically for how your organisation actually works.',
    icon: 'software',
  },
  {
    title: 'AI-Powered Systems',
    text: 'Practical applications of AI built to solve real problems, not just for show.',
    icon: 'ai',
  },
  {
    title: 'Data & Analytics Tools',
    text: 'Systems that help organisations understand and use their own data.',
    icon: 'data',
  },
  {
    title: 'Workflow & Management Systems',
    text: 'Tools that make day-to-day operations smoother and more organised.',
    icon: 'workflow',
  },
]

const transformation: Service = {
  title: 'Digital Transformation Support',
  text: 'Helping organisations move from manual, paper-based processes to functional digital ones.',
  icon: 'transformation',
}

const steps: Step[] = [
  {
    title: 'Understand',
    text: "We start by understanding exactly what problem you're trying to solve — not just what you think you want built.",
    icon: 'understand',
  },
  {
    title: 'Design',
    text: 'We design a solution that fits your actual needs, your budget, and how your organisation really works.',
    icon: 'design',
  },
  {
    title: 'Build',
    text: 'Our team builds the solution, keeping you involved and informed throughout.',
    icon: 'build',
  },
  {
    title: 'Support',
    text: "We don't disappear after launch — we support what we build so it keeps working for you.",
    icon: 'support',
  },
]

/* These four are the projects shown in the design — replace them with your real work.
   Add `href: 'https://…'` to link to the live site or a case study. */
const projects: Project[] = [
  {
    title: 'SkillBridge Main Website',
    text: 'A modern, responsive website that tells the SkillBridge story, showcases our programmes, and connects with our community.',
    tag: 'Website',
    icon: 'website',
    image: '/images/technologies/main-website.jpg',
  },
  {
    title: 'Talent Management Platform',
    text: 'A custom platform to manage talent registrations, placements, and employer connections for SkillBridge.',
    tag: 'Platform',
    icon: 'platform',
    image: '/images/technologies/talent-platform.jpg',
  },
  {
    title: 'Academy Application System',
    text: 'A streamlined application system for SkillBridge Academy — making it easier for learners to apply and track their progress.',
    tag: 'Mobile App',
    icon: 'mobile',
    image: '/images/technologies/academy-app.jpg',
  },
  {
    title: 'Data Analytics Dashboard',
    text: 'A reporting and analytics tool that helps organisations track progress, measure impact, and make better decisions.',
    tag: 'Data Tool',
    icon: 'dashboard',
    image: '/images/technologies/analytics.jpg',
  },
]

export default function TechnologiesContent() {
  return (
    <div className="pb-14">
      <TechHero
        title="Build the tools that make it all"
        accent="work."
        intro={technologiesMeta.intro}
        image={technologiesMeta.image}
        primary={technologiesMeta.cta}
        secondaryLabel="Explore Our Services"
      />

      <ServicesSection
        eyebrow="What we build"
        title="Practical digital solutions for real needs."
        text="We build websites, platforms, custom software, AI-powered systems, data tools and more — designed to solve real problems and help individuals and institutions work smarter, grow faster and achieve more."
        services={services}
        wide={transformation}
      />

      <ProcessSection
        eyebrow="How we work"
        title="From idea to impact."
        accent="Step by step."
        text="We follow a simple, collaborative process to make sure you get the right solution — not just a product."
        steps={steps}
      />

      <ProjectsSection
        eyebrow="Projects we've worked on"
        title="Real solutions."
        accent="Real impact."
        text="From websites to custom platforms, here are a few of the projects we've built for individuals, businesses and institutions across The Gambia."
        buttonLabel="View More Projects"
        buttonInterest="Technologies — More Projects"
        projects={projects}
      />

      <TechClosing
        eyebrow="Let's build something"
        title="Have a"
        accent="project"
        titleEnd="in mind?"
        text="Whether it's a website, platform, custom tool, or digital transformation — we'd love to hear about it."
        buttonLabel={technologiesMeta.secondaryCta?.label ?? 'Start a Conversation'}
        note="Tell us about your project and we'll get back to you."
        interest={technologiesMeta.secondaryCta?.interest ?? technologiesMeta.cta.interest}
      />
    </div>
  )
}