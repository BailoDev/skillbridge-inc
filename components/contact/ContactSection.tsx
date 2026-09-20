import { Mail, MapPin } from 'lucide-react'
import { Poppins } from 'next/font/google'
import ContactForm from './ContactForm'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

/* The Contact section for the full /contact page (the slide-over uses <ContactSheet /> around the same form). */
export default function ContactSection() {
  return (
    <section className={`${poppins.className} bg-white`}>
      <div className="mx-auto max-w-5xl px-6 pb-28 pt-16 sm:px-10 lg:pb-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="block text-[11px] font-medium uppercase tracking-[0.25em] text-[#1C376B]/80">
              SkillBridge Inquiry
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-[#1C376B] sm:text-4xl lg:text-[44px]">
              Get in touch.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Tell us who you are and what you need — the right team will get back to you.
            </p>

            <ul className="mt-10 space-y-4 border-t border-black/10 pt-8">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1C376B]/10 text-[#1C376B]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-1.5 leading-snug">
                  Kairaba Avenue
                  <br />
                  The Gambia
                </span>
              </li>
              <li>
                <a
                  href="mailto:skillbridgef@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-700 transition-colors hover:text-[#1C376B]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1C376B]/10 text-[#1C376B]">
                    <Mail className="h-4 w-4" />
                  </span>
                  skillbridgef@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactForm variant="page" />
          </div>
        </div>
      </div>
    </section>
  )
}
