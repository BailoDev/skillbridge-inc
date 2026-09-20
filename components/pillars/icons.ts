import { GraduationCap, Building2, HeartHandshake, Cpu } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PillarId } from './types'

export const pillarIcons: Record<PillarId, LucideIcon> = {
  academy: GraduationCap,
  corporate: Building2,
  foundation: HeartHandshake,
  technologies: Cpu,
}
