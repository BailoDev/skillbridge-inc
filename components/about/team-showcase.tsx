"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  featuredImage: string
  description: string
}

interface TeamShowcaseProps {
  title?: string
  teamMembers?: TeamMember[]
  category?: string
}

const defaultTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "KAWSU KANTEH",
    role: "Founder & Lead Facilitator",
    avatar: "/images/kawsuk.jpeg",
    featuredImage: "/images/kawsu.jpeg",
    description: "Driven by purpose, building something meaningful for the next generation.",
  },
  {
    id: "2",
    name: "AMADOU BAILO BAH",
    role: "Co-Founder & Lead Programs Officer",
    avatar: "/images/bailob.jpg",
    featuredImage: "/images/bailo.jpg",
    description: "Driven by purpose, building something meaningful for the next generation",
  },
  {
    id: "3",
    name: "MEET FATIMA KEBBEH",
    role: "Strategy and Communications Advisor",
    avatar: "/images/fkebbeh.jpeg",
    featuredImage: "/images/kebbeh.jpeg",
    description: "Driven by purpose, building something meaningful for the next generation.",
  },
  {
    id: "4",
    name: "ISHA BOJANG",
    role: "Communications and Media Lead",
    avatar: "/images/isa.jpeg",
    featuredImage: "/images/isha.jpeg",
    description: "Driven by purpose, we show up every day to build something meaningful for the next generation of Gambian youth.",
  },
]

export function TeamShowcase({
  title = "Meet The Team Behind Skillbridge Foundation",
  teamMembers = defaultTeamMembers,
}: TeamShowcaseProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[1] || teamMembers[0])

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 lg:mb-16"
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-br from-navy to-blue-secondary bg-clip-text text-transparent text-balance">
                {title}
              </h2>
              <div className="mt-4 flex gap-1">
                <div className="h-1.5 w-12 bg-navy rounded-full" />
                <div className="h-1.5 w-12 bg-navy rounded-full" />
              </div>
            </motion.div>

            {/* Team Members List */}
            <div className="flex flex-col gap-4">
              {teamMembers.map((member, index) => {
                const isSelected = selectedMember.id === member.id
                return (
                  <motion.button
                    key={member.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => setSelectedMember(member)}
                    className={`flex items-center gap-4 text-left transition-all duration-300 ${
                      isSelected
                        ? "bg-card rounded-lg p-4 shadow-lg border border-border"
                        : "p-4 hover:bg-muted/50 rounded-lg"
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ${
                        isSelected ? "ring-2 ring-navy ring-offset-2" : ""
                      }`}
                    >
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Info */}
                    <div>
                      <h3
                        className={`text-sm font-semibold tracking-wider uppercase ${
                          isSelected ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Right Side - Featured Member */}
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-md mx-auto"
              >
                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy/10 to-transparent rounded-full blur-3xl transform translate-x-8 translate-y-8" />
                <div className="absolute inset-0 bg-gradient-to-tl from-navy/10 to-transparent rounded-full blur-3xl transform -translate-x-4 -translate-y-4" />

                {/* Featured Image */}
                <div className="relative aspect-[3/4] drop-shadow-2xl">
                  <Image
                    src={selectedMember.featuredImage}
                    alt={selectedMember.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-1">
                      WE LOVE{" "}
                      <span className="bg-gradient-to-br from-navy to-blue-secondary bg-clip-text text-transparent">
                        WHAT
                      </span>{" "}
                      WE DO
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      {selectedMember.description}
                    </p>
                  </div>
                </div>

                {/* Vertical Label */}
                <div className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2">
                  <span
                    className="text-xs font-medium tracking-widest uppercase text-muted-foreground/50"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  >
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}