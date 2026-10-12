"use client"

import { useState } from 'react'
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  Code2,
  Database,
  GraduationCap,
  LayoutGrid,
  Megaphone,
  MonitorPlay,
  TrendingUp,
  Users,
  Calculator,
  PenTool,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useSheets } from '@/components/sheets/sheets-context'

/* Visual building blocks for the Academy sheet / page.
   Everything is sized by the width of the container it sits in (auto-fit grids), not the
   browser width — so the same layout works in the narrow right-hand sheet and on /academy.
   Palette: navy #1C376B · light blue #eaf1fb · slate text. */

const COURSES_ID = 'academy-courses'

// Icons are referenced by name so the (server) content file can pass plain strings.
const icons = {
  code: Code2,
  calculator: Calculator,
  workspace: LayoutGrid,
  speaking: Megaphone,
  design: PenTool,
  learn: MonitorPlay,
  instructors: Users,
  portfolio: Briefcase,
  career: TrendingUp,
} satisfies Record<string, LucideIcon>

export type AcademyIcon = keyof typeof icons

const autoGrid = (min: number) => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))`,
})

const scrollToCourses = () =>
  document.getElementById(COURSES_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

/* ───────────────────────── Hero ───────────────────────── */

export function AcademyHero({
  title,
  intro,
  image,
}: {
  title: string
  intro: string
  image: string
}) {
  const [imageOk, setImageOk] = useState(true)

  return (
    <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-[#1C376B] sm:min-h-[400px]">
      {/* Background photo (hidden automatically if the file is missing, leaving the navy) */}
      {imageOk && (
        <img
          src="/images/academy.jpg"
          alt=""
          onError={() => setImageOk(false)}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_top]"
        />
      )}
      {/* Navy overlay keeps the text readable over any photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1C376B] via-[#1C376B]/70 to-[#1C376B]/10 sm:bg-gradient-to-r sm:from-[#1C376B] sm:via-[#1C376B]/75 sm:to-transparent" />

      <div className="max-w-md px-6 pb-10 pt-24 text-white sm:px-10 sm:pb-12">
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-white/85">{intro}</p>
        <button
          type="button"
          onClick={scrollToCourses}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1C376B] shadow-lg shadow-black/10 transition-transform duration-300 hover:-translate-y-0.5"
        >
          Explore courses
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}

/* ───────────────────────── Courses ───────────────────────── */

export type Course = {
  title: string
  description: string
  duration: string
  price: string
  icon: AcademyIcon
  image?: string // optional photo for the card banner, e.g. '/images/academy/frontend.jpg'
  interest: string // pre-fills the contact sheet
}

function CourseCard({ course }: { course: Course }) {
  const { openContact } = useSheets()
  const Icon = icons[course.icon]

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#1C376B]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Banner */}
      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-[#eaf1fb] to-[#dbe7f8]">
        {course.image ? (
          <img src={course.image} alt="" className="h-full w-full object-cover" />
        ) : (
          <Icon
            aria-hidden="true"
            strokeWidth={0.75}
            className="absolute -right-3 top-1/2 h-32 w-32 -translate-y-1/2 text-[#1C376B]/15"
          />
        )}
        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1C376B] text-white shadow-md shadow-[#1C376B]/30">
          <Icon className="h-5 w-5" />
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug text-[#1C376B]">{course.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{course.description}</p>

        <div className="mt-5 flex items-center gap-4 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-[#1C376B]" />
            {course.duration}
          </span>
          <span className="h-4 w-px bg-black/10" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <Database className="h-4 w-4 text-[#1C376B]" />
            {course.price}
          </span>
        </div>

        <button
          type="button"
          onClick={() => openContact(course.interest)}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#1C376B] px-5 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-[#152b56]"
        >
          Enroll now
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  )
}

export function CoursesSection({
  eyebrow,
  title,
  subtitle,
  courses,
}: {
  eyebrow: string
  title: string
  subtitle: string
  courses: Course[]
}) {
  return (
    <section id={COURSES_ID} className="scroll-mt-4 px-6 pt-12 sm:px-10">
      <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#2f56a6]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#1C376B] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>

      <div className="mt-7 grid gap-5" style={autoGrid(250)}>
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── Why us strip ───────────────────────── */

export type Feature = { title: string; text: string; icon: AcademyIcon }

export function FeatureStrip({ features }: { features: Feature[] }) {
  return (
    <section className="px-6 pt-10 sm:px-10">
      <div
        className="grid gap-x-4 gap-y-8 rounded-2xl bg-[#f3f7fd] px-5 py-8"
        style={autoGrid(140)}
      >
        {features.map((f) => {
          const Icon = icons[f.icon]
          return (
            <div key={f.title} className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe9f8] text-[#1C376B]">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-[#1C376B]">{f.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{f.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ───────────────────────── Closing band ───────────────────────── */

export function ClosingBand({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text: string
}) {
  return (
    <section className="px-6 pt-10 sm:px-10">
      <div className="relative flex flex-wrap items-center justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C376B] to-[#2a4f9a] p-6 text-white sm:p-8">
        <GraduationCap
          aria-hidden="true"
          strokeWidth={0.75}
          className="absolute -right-3 -top-3 h-24 w-24 text-white/10"
        />
        <div className="relative max-w-sm">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">{title}</h2>
          <p className="mt-2 text-sm text-white/80">{text}</p>
        </div>
        <button
          type="button"
          onClick={scrollToCourses}
          className="relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1C376B] transition-transform duration-300 hover:-translate-y-0.5"
        >
          Enrolled Now
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}