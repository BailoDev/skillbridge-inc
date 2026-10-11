import Image from "next/image"
import Link from "next/link"

const WHATSAPP_NUMBER = "220833740557" 

export default function WhatsAppChat() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-2 md:bottom-[10px] md:right-[3px] bg-[#25d366] rounded-full w-[40px] h-[40px] md:w-[45px] md:h-[45px] flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.2)] z-[1000] hover:bg-[#22bb5b]"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src="/whatsApp.webp"
        alt="WhatsApp logo"
        width={50}
        height={50}
        className="rounded-full"
      />
    </Link>
  )
}