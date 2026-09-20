"use client"

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { pillars } from '@/components/pillars/registry'
import { PageCta } from '@/components/pillars/PillarSections'
import type { PillarId } from '@/components/pillars/types'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

type Props = {
  id: PillarId | null // which pillar is open (null = closed)
  onSelect: (id: PillarId) => void // switch tab
  onClose: () => void
}

/* The slide-over frame: tab strip + close, scrollable content, pinned CTA.
   The content itself comes from each pillar's own <Name>Content component (see registry.ts). */
export default function PillarSheet({ id, onSelect, onClose }: Props) {
  // Remember the last pillar so its content stays visible while the sheet slides out.
  const lastId = useRef<PillarId>(pillars[0].meta.id)
  if (id) lastId.current = id
  const entry = pillars.find((p) => p.meta.id === lastId.current) ?? pillars[0]
  const { meta, Content } = entry

  // Jump back to the top whenever the user switches tabs.
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (id) scrollRef.current?.scrollTo({ top: 0 })
  }, [id])

  return (
    <AnimatePresence>
      {id && (
        <motion.div
          key="pillar-overlay"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[55] bg-[#1C376B]/30 backdrop-blur-md"
        />
      )}

      {id && (
        <motion.aside
          key="pillar-panel"
          role="dialog"
          aria-modal="true"
          aria-label={`SkillBridge ${meta.tab}`}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 32, stiffness: 240 }}
          className={`${poppins.className} fixed right-0 top-0 z-[60] flex h-full w-full flex-col bg-white shadow-2xl lg:w-[min(1200px,68vw)]`}
        >
          {/* Tab strip + close */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-black/10 pl-6 pr-3 sm:pl-10 sm:pr-6">
            <div
              role="tablist"
              className="flex min-w-0 items-center gap-6 overflow-x-auto sm:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {pillars.map(({ meta: m }) => {
                const active = m.id === meta.id
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => onSelect(m.id)}
                    className={cn(
                      'relative shrink-0 py-[22px] text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300',
                      active ? 'text-[#1C376B]' : 'text-slate-400 hover:text-[#1C376B]'
                    )}
                  >
                    {m.tab}
                    {active && (
                      <motion.span
                        layoutId="pillar-tab-underline"
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-[#1C376B]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="ml-4 shrink-0 p-2 text-slate-500 transition-colors hover:text-[#1C376B]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable page content — re-fades when you switch tabs */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto">
            <motion.div
              key={meta.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              <Content />
            </motion.div>
          </div>

          {/* Pinned call to action */}
          <div className="shrink-0 border-t border-black/5 bg-white px-4 pb-4 pt-4 sm:px-6 sm:pb-6">
            <PageCta cta={meta.cta} />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
