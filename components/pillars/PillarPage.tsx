import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { PageCta } from './PillarSections'
import type { PillarMeta } from './types'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

/* Frame for the full-page version of a pillar (app/<pillar>/page.tsx).
   Clears the fixed navbar and adds the closing call to action. */
export default function PillarPage({
  meta,
  children,
}: {
  meta: PillarMeta
  children: ReactNode
}) {
  return (
    <main className={`${poppins.className} bg-white pt-16 lg:pt-20`}>
      {children}
      <div className="mx-auto w-full max-w-5xl px-6 pb-28 sm:px-10 lg:pb-20">
        <PageCta cta={meta.cta} />
      </div>
    </main>
  )
}
