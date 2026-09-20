import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import SheetsProvider from '@/components/sheets/SheetsProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SkillBridge Foundation | Building Skills, Clarity & Opportunity for Gambian Youth',
  description: 'SkillBridge Foundation equips young people with practical digital skills, learning strategies, career clarity, and professional exposure to thrive in education, work, and life.',
  keywords: ['SkillBridge', 'Gambia', 'Youth Development', 'Digital Skills', 'Career Guidance', 'Professional Development'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Navbar, Footer and every page call useSheets(), so they all sit inside the provider */}
        <SheetsProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SheetsProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}