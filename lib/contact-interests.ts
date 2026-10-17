/* Single source of truth for the "Area of interest" options.
   - The Contact sheet / form should build its dropdown from CONTACT_INTERESTS.
   - Every "Enroll now", "Apply", "Talk to us"… button calls openContact(INTERESTS.<key>)
     so the right option is preselected. */

export const INTERESTS = {
  general: 'General Inquiry',
  academy: 'Academy',
  fellowship: 'Career Accelerator Fellowship',
  corporate: 'Corporate Training',
  talentJoin: 'Talent: Join the Talent Pool',
  talentHire: 'Talent: Hire Talent',
  foundation: 'Foundation: Support, Partnership or Workshops',
  technologies: 'Technologies: Start a Project',
} as const

export type Interest = (typeof INTERESTS)[keyof typeof INTERESTS]

/** Dropdown options, in display order */
export const CONTACT_INTERESTS: Interest[] = [
  INTERESTS.general,
  INTERESTS.academy,
  INTERESTS.fellowship,
  INTERESTS.corporate,
  INTERESTS.talentJoin,
  INTERESTS.talentHire,
  INTERESTS.foundation,
  INTERESTS.technologies,
]