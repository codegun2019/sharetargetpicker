import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function FloatingContactButtons() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
      <Button
        className="bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://t.me/your_telegram_username", "_blank")}
      >
        <MessageCircle size={24} />
      </Button>
      <Button
        className="bg-[#00b900] hover:bg-[#00a500] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://line.me/ti/p/your_line_id", "_blank")}
      >
        <Image src="/line-icon.svg" alt="Line" width={24} height={24} />
      </Button>
      <Button
        className="bg-[#25d366] hover:bg-[#128c7e] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://wa.me/your_whatsapp_number", "_blank")}
      >
        <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={24} height={24} />
      </Button>
    </div>
  )
}

