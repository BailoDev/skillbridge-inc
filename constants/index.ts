export const filters = ['All Events', 'Workshops', 'Talks', 'Mentorship', 'Career Sessions']

export type Event = {
  id: number
  date: { day: string; month: string }
  type: string
  title: string
  description: string
  time: string
  location: string
  category: string
}

export const events: Event[] = [
  {
    id: 1,
    date: { day: '—', month: 'TBC' },
    type: 'Workshop',
    title: 'Digital Skills for Academic Success',
    description: 'Improve your digital tools and productivity in various industries. Learn essential computer skills, productivity tools, and digital communication.',
    time: 'To be confirmed',
    location: 'To be confirmed',
    category: 'Workshops',
  },
  {
    id: 2,
    date: { day: '—', month: 'TBC' },
    type: 'Talk',
    title: 'Careers in a Digital World',
    description: 'Insights from professionals in various tech and digital industries. Discover opportunities in the evolving job market and how to prepare for them.',
    time: 'To be confirmed',
    location: 'To be confirmed',
    category: 'Talks',
  },
  {
    id: 3,
    date: { day: '—', month: 'TBC' },
    type: 'Mentorship',
    title: 'Mentorship Meet & Connect',
    description: 'Connect with mentors and build your network. Get guidance on career paths, skill development, and professional growth strategies.',
    time: 'To be confirmed',
    location: 'To be confirmed',
    category: 'Mentorship',
  },
  {
    id: 4,
    date: { day: '—', month: 'TBC' },
    type: 'Workshop',
    title: 'CV Writing Masterclass',
    description: 'Learn how to craft a compelling CV that stands out. From formatting to content strategy, master the art of professional presentation.',
    time: 'To be confirmed',
    location: 'To be confirmed',
    category: 'Workshops',
  },
  {
    id: 5,
    date: { day: '—', month: 'TBC' },
    type: 'Career Session',
    title: 'Interview Preparation Workshop',
    description: 'Prepare for job interviews with confidence. Practice common questions, learn body language tips, and develop your personal pitch.',
    time: 'To be confirmed',
    location: 'To be confirmed',
    category: 'Career Sessions',
  },
  {
    id: 6,
    date: { day: '—', month: 'TBC' },
    type: 'Talk',
    title: 'Entrepreneurship in The Gambia',
    description: 'Hear from successful Gambian entrepreneurs about starting and growing a business. Learn about challenges, opportunities, and resources.',
    time: 'To be confirmed',
    location: 'To be confirmed',
    category: 'Talks',
  },
]