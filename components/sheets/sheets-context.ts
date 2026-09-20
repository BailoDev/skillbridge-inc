"use client"

import { createContext, useContext } from 'react'
import type { PillarId } from '@/components/pillars/types'

/* Kept in its own tiny file so pages, sections, the navbar and the footer can all call useSheets()
   without importing the sheets themselves (avoids circular imports). */

export type SheetsContextValue = {
  openPillar: (id: PillarId) => void
  openContact: (interest?: string) => void
}

export const SheetsContext = createContext<SheetsContextValue | null>(null)

export function useSheets() {
  const ctx = useContext(SheetsContext)
  if (!ctx) throw new Error('useSheets must be used inside <SheetsProvider>')
  return ctx
}
