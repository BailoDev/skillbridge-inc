"use client"

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import PillarSheet from './PillarSheet'
import ContactSheet from '@/components/contact/ContactSheet'
import { SheetsContext } from './sheets-context'
import type { PillarId } from '@/components/pillars/types'

/* Mount once in app/layout.tsx around <Navbar />, {children} and <Footer />.
   Anything inside can then call:  const { openPillar, openContact } = useSheets() */
export default function SheetsProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [pillar, setPillar] = useState<PillarId | null>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [interest, setInterest] = useState<string | undefined>(undefined)

  const openPillar = useCallback((id: PillarId) => setPillar(id), [])
  const openContact = useCallback((i?: string) => {
    setInterest(i)
    setContactOpen(true)
  }, [])
  const closePillar = useCallback(() => setPillar(null), [])
  const closeContact = useCallback(() => setContactOpen(false), [])

  // Close everything when the route changes.
  useEffect(() => {
    setPillar(null)
    setContactOpen(false)
  }, [pathname])

  // While any sheet is open: lock page scroll; Escape closes the top-most sheet first.
  useEffect(() => {
    if (!pillar && !contactOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (contactOpen) setContactOpen(false)
      else setPillar(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [pillar, contactOpen])

  const value = useMemo(() => ({ openPillar, openContact }), [openPillar, openContact])

  return (
    <SheetsContext.Provider value={value}>
      {children}
      <PillarSheet id={pillar} onSelect={openPillar} onClose={closePillar} />
      <ContactSheet open={contactOpen} interest={interest} onClose={closeContact} />
    </SheetsContext.Provider>
  )
}
