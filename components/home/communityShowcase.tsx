"use client"

import { motion, useReducedMotion } from 'framer-motion'
import {
  ThumbsUp,
  Heart,
  MessageSquare,
  CheckCircle2,
  Building2,
  ImageIcon,
  Sparkles,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/*  1. IMAGE SLOTS — drop your image paths in here                            */
/*  Leave `src` empty to show a placeholder. Files in /public are referenced  */
/*  from the root, e.g. src: '/images/community/laptop.jpg'                   */
/* -------------------------------------------------------------------------- */

interface ImageConfig {
  src: string
  alt: string
  label: string 
}

const images: Record<
  'laptop' | 'photoLeft' | 'photoRight' | 'mentor' | 'learner' | 'employer',
  ImageConfig
> = {
  // Screenshot of your platform/dashboard. Best at 16:10 (e.g. 1600x1000)
  laptop: {
    src: '/images/img-5.png',
    alt: 'The learning platform dashboard shown on a laptop',
    label: 'Laptop screen (16:10)',
  },
  // Portrait photos, best at 4:5 (e.g. 800x1000)
  photoLeft: {
    src: '/images/img-1.png',
    alt: 'A learner joining a live mentor session',
    label: 'Photo (4:5)',
  },
  photoRight: {
    src: '/images/img-3.png',
    alt: 'A graduate at their first day at work',
    label: 'Photo (4:5)',
  },
  // Square headshots. If left empty, the emoji avatars are used instead.
  mentor: { src: '/images/img-2.png', alt: 'A mentor', label: '' },
  learner: { src: '/images/img-2.png', alt: 'A learner', label: '' },
  employer: { src: '/images/img-2.png', alt: 'An employer partner', label: '' },
}

/* -------------------------------------------------------------------------- */
/*  2. Building blocks                                                        */
/* -------------------------------------------------------------------------- */

function ImageSlot({ image }: { image: ImageConfig }) {
  if (image.src) {
    return (
      // Swap for next/image if you prefer; the parent controls the size.
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    )
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-indigo-50 via-white to-violet-100 text-indigo-400">
      <ImageIcon className="h-5 w-5 md:h-6 md:w-6" />
      <span className="px-2 text-center text-[10px] font-medium text-indigo-500 md:text-xs">
        {image.label}
      </span>
    </div>
  )
}

function LaptopMockup({ image }: { image: ImageConfig }) {
  return (
    <div className="w-full">
      {/* lid */}
      <div className="relative mx-auto w-[94%] rounded-t-2xl bg-gray-900 px-2 pb-0 pt-3 shadow-2xl shadow-indigo-200/70 ring-1 ring-gray-800 md:px-3 md:pt-4">
        {/* camera */}
        <span className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-gray-600 md:top-1.5" />
        {/* screen */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-md bg-gray-100">
          <ImageSlot image={image} />
        </div>
      </div>
      {/* base */}
      <div className="h-2.5 rounded-b-[1.1rem] rounded-t-sm bg-gradient-to-b from-gray-200 to-gray-400 shadow-lg shadow-gray-400/40 md:h-3">
        <div className="mx-auto h-1 w-1/5 rounded-b-md bg-gray-400/80" />
      </div>
    </div>
  )
}

function PhotoCard({
  image,
  rotate,
  size,
  caption,
}: {
  image: ImageConfig
  rotate: string
  size: string
  caption?: string
}) {
  return (
    <div
      className={`relative rounded-3xl bg-white p-1.5 shadow-xl shadow-gray-300/60 ring-1 ring-gray-100 ${rotate} ${size}`}
    >
      <div className="h-full w-full overflow-hidden rounded-[1.25rem]">
        <ImageSlot image={image} />
      </div>
      {caption && (
        <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-navy shadow-md shadow-gray-200/70 ring-1 ring-gray-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {caption}
        </span>
      )}
    </div>
  )
}

/** Shows the image if one is set, otherwise the emoji fallback. */
function Avatar({
  image,
  emoji,
  emojiClass,
}: {
  image: ImageConfig
  emoji: string
  emojiClass: string
}) {
  if (image.src) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    )
  }
  return <span className={emojiClass}>{emoji}</span>
}

/* -------------------------------------------------------------------------- */
/*  3. Data                                                                   */
/* -------------------------------------------------------------------------- */

interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '', label: 'Learners Trained' },
  { value: '', label: 'Employer Partners' },
  { value: '', label: 'Job Placements' },
]

interface FloatingItem {
  // left/top are percentages of the dome container, measured to the
  // CENTER of the item (the item is then centered on that point)
  left: number
  top: number
  delay: number
  content: React.ReactNode
  className?: string // wrapper sizing, defaults to content width
  z?: number
  float?: boolean // gentle idle bobbing
  lgOnly?: boolean // hide on tablet widths where space is tight
  chip?: boolean // also shown as a chip in the mobile layout
}

const floatingItems: FloatingItem[] = [
  // ---- the laptop: the hero of the composition -----------------------------
  {
    left: 50,
    top: 62,
    delay: 0,
    z: 1,
    className: 'w-[36%]',
    content: <LaptopMockup image={images.laptop} />,
  },

  // ---- photo cards, breaking out of the dome --------------------------------
  {
    left: 13,
    top: 30,
    delay: 0.1,
    float: true,
    content: (
      <PhotoCard
        image={images.photoLeft}
        rotate="-rotate-6"
        size="h-40 w-32"
        caption="Live mentor session"
      />
    ),
  },
  {
    left: 88,
    top: 27,
    delay: 0.15,
    float: true,
    content: (
      <PhotoCard
        image={images.photoRight}
        rotate="rotate-6"
        size="h-40 w-32"
        caption=""
      />
    ),
  },

  // ---- notification pill above the laptop ----------------------------------
  {
    left: 50,
    top: 6,
    delay: 0,
    chip: true,
    content: (
      <div className="flex items-center gap-2 rounded-full bg-white pl-1.5 pr-4 py-1.5 shadow-md shadow-gray-200/60 ring-1 ring-gray-100">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100">
          <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
        </span>
        <span className="text-sm font-medium text-navy whitespace-nowrap">
          12 New Skills Verified
        </span>
      </div>
    ),
  },
  // photo / portfolio icon, upper-left
  {
    left: 33,
    top: 17,
    delay: 0.05,
    lgOnly: true,
    content: (
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md shadow-gray-200/60 ring-1 ring-gray-100">
        <ImageIcon className="h-5 w-5 text-indigo-600" />
        <span className="absolute -bottom-2 -right-2 rounded-md bg-white px-1 py-0.5 text-[10px] font-semibold text-gray-500 shadow-sm ring-1 ring-gray-100">
          ↑ 4
        </span>
      </div>
    ),
  },
  // application submitted pill, far left
  {
    left: 13,
    top: 60,
    delay: 0.1,
    chip: true,
    content: (
      <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 shadow-md shadow-gray-200/60 ring-1 ring-emerald-100">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
        <span className="text-sm font-medium text-emerald-700 whitespace-nowrap">
          Application Submitted
        </span>
      </div>
    ),
  },
  // thumbs up pill, overlapping the laptop's top-left corner
  {
    left: 31,
    top: 34,
    delay: 0.15,
    chip: true,
    content: (
      <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-md shadow-gray-200/60 ring-1 ring-gray-100">
        <ThumbsUp className="h-3.5 w-3.5 text-indigo-600" />
        <span className="text-sm font-medium text-navy">12</span>
      </div>
    ),
  },
  // mentor avatar
  {
    left: 67,
    top: 17,
    delay: 0.2,
    float: true,
    lgOnly: true,
    content: (
      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-indigo-50 ring-4 ring-indigo-100 shadow-md shadow-gray-200/60">
        <Avatar image={images.mentor} emoji="🧑🏻‍🏫" emojiClass="text-xl" />
      </div>
    ),
  },
  // learner avatar, lower-left
  {
    left: 23,
    top: 76,
    delay: 0.25,
    float: true,
    content: (
      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full bg-amber-50 ring-4 ring-amber-100 shadow-md shadow-gray-200/60">
        <Avatar image={images.learner} emoji="👩🏽‍🎓" emojiClass="text-2xl" />
      </div>
    ),
  },
  // heart pill, overlapping the laptop's top-right corner
  {
    left: 69,
    top: 33,
    delay: 0.1,
    chip: true,
    content: (
      <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-md shadow-gray-200/60 ring-1 ring-gray-100">
        <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
        <span className="text-sm font-medium text-navy">12</span>
      </div>
    ),
  },
  // employer avatar, right
  {
    left: 77,
    top: 57,
    delay: 0.15,
    float: true,
    content: (
      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full bg-violet-50 ring-4 ring-violet-100 shadow-md shadow-gray-200/60">
        <Avatar image={images.employer} emoji="🧑🏿‍💼" emojiClass="text-2xl" />
      </div>
    ),
  },
  // employer / building icon
  {
    left: 73,
    top: 79,
    delay: 0.2,
    lgOnly: true,
    content: (
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md shadow-gray-200/60 ring-1 ring-gray-100">
        <Building2 className="h-5 w-5 text-indigo-600" />
      </div>
    ),
  },
  // hired checkmark
  {
    left: 87,
    top: 66,
    delay: 0.25,
    content: (
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 shadow-md shadow-emerald-200">
        <CheckCircle2 className="h-5 w-5 text-white" />
      </div>
    ),
  },
  // comment pill, far right
  {
    left: 91,
    top: 83,
    delay: 0.3,
    chip: true,
    content: (
      <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-md shadow-gray-200/60 ring-1 ring-gray-100">
        <MessageSquare className="h-3.5 w-3.5 text-indigo-600" />
        <span className="text-sm font-medium text-navy">12</span>
      </div>
    ),
  },
]

/* -------------------------------------------------------------------------- */
/*  4. Section                                                                */
/* -------------------------------------------------------------------------- */

export default function CommunityShowcase() {
  const reduceMotion = useReducedMotion()
  const chips = floatingItems.filter((item) => item.chip)

  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ---------- Mobile: laptop + photos, chips underneath ---------- */}
        <div className="md:hidden">
          <div className="relative mx-auto w-[80%] max-w-sm pt-6">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="relative">
              <LaptopMockup image={images.laptop} />
            </div>
            <div className="absolute -left-4 top-0 z-10">
              <PhotoCard
                image={images.photoLeft}
                rotate="-rotate-6"
                size="h-24 w-20"
              />
            </div>
            <div className="absolute -right-4 top-2 z-10">
              <PhotoCard
                image={images.photoRight}
                rotate="rotate-6"
                size="h-24 w-20"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {chips.map((item, index) => (
              <div key={index}>{item.content}</div>
            ))}
          </div>
        </div>

        {/* ---------- Tablet / desktop: dome + floating composition ---------- */}
        <div className="relative mx-auto hidden w-full max-w-5xl aspect-[47/20] md:block">
          {/* soft glow behind the laptop */}
          <div className="pointer-events-none absolute left-1/2 top-[62%] h-[65%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/40 blur-3xl" />

          {/* concentric arcs — path drawn in a 940x400 box that matches
              the container's own aspect ratio (47:20), so it scales
              without ever stretching into an oval */}
          <svg
            aria-hidden="true"
            viewBox="0 0 940 400"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M 30 380 A 435 350 0 0 1 910 380"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1.5"
            />
            <path
              d="M 155 380 A 315 280 0 0 1 785 380"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1.5"
            />
          </svg>

          {floatingItems.map((item, index) => (
            // The outer div does the centering; framer-motion animates the
            // inner element. Keeping them separate stops the entrance
            // animation from overriding the centering transform.
            <div
              key={index}
              className={`absolute -translate-x-1/2 -translate-y-1/2 ${
                item.className ?? 'w-max'
              } ${item.lgOnly ? 'hidden lg:block' : ''}`}
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
                zIndex: item.z ?? 10,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <motion.div
                  animate={
                    item.float && !reduceMotion ? { y: [0, -8, 0] } : undefined
                  }
                  transition={{
                    duration: 5 + (index % 4) * 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {item.content}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-12 flex items-start justify-center gap-10 sm:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-navy">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Heading with watermark */}
        <div className="relative mt-14 flex justify-center">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] sm:text-[8rem] lg:text-[9rem] font-serif font-bold text-gray-100 leading-none whitespace-nowrap"
          >
            Bridge
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-2xl text-center text-3xl sm:text-4xl font-serif font-bold text-navy leading-[1.2]"
          >
            We Build The Best Pathways For Emerging Talent
          </motion.h2>
        </div>
      </div>
    </section>
  )
}