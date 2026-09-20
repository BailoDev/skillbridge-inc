"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VisionMission() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mission Row - Heading on left, Card on right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 mb-12"
        >
          {/* Heading */}
          <div className="lg:w-1/3 flex-shrink-0">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-br from-navy to-blue-secondary bg-clip-text text-transparent">
              Our Mission
              <br />
              & Vision
            </h2>
            <div className="mt-4 flex gap-1">
              <div className="h-1.5 w-12 bg-navy rounded-full" />
              <div className="h-1.5 w-12 bg-navy rounded-full" />
            </div>
          </div>

          {/* Mission Card */}
          <div className="lg:w-2/3 flex flex-col sm:flex-row items-center gap-6 bg-card rounded-lg p-6 shadow-sm border border-border">
            {/* Circular Image */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-muted">
                <Image
                  src="/images/mission.jpg"
                  alt="Hands holding seeds representing our mission"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Mission Content */}
            <div className="flex-1 sm:pl-6 sm:border-l-2 border-muted text-center sm:text-left">
              <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-br from-navy to-blue-secondary bg-clip-text text-transparent mb-3">
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                To bridge the gap between learning and professional reality by equipping young
                people wherever they are in their journey with foundational digital skills,
                effective learning strategies, career awareness, and real-world professional exposure.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-start"
        >
          {/* Vision Card */}
          <div className="w-full lg:w-2/3 flex flex-col sm:flex-row-reverse items-center gap-6 bg-card rounded-lg p-6 shadow-sm border border-border">
            {/* Circular Image */}
            <div className="relative flex-shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-muted">
                <Image
                  src="/images/vision.jpg"
                  alt="Planning tools representing our vision"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Vision Content */}
            <div className="flex-1 sm:pr-6 sm:border-r-2 border-muted text-center sm:text-right">
              <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-br from-navy to-blue-secondary bg-clip-text text-transparent mb-3">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                To contribute to the development of a generation of young people in The Gambia
                who possess the skills, clarity, and confidence needed to actively participate
                in national development and succeed in the global workforce.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}