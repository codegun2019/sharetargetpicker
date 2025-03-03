"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
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
      <Button
        className="bg-[#1877f2] hover:bg-[#166fe5] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://www.facebook.com/your_facebook_page", "_blank")}
      >
        <Facebook size={24} />
      </Button>
      <Button
        className="bg-[#e4405f] hover:bg-[#d93250] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://www.instagram.com/your_instagram_profile", "_blank")}
      >
        <Instagram size={24} />
      </Button>
      <Button
        className="bg-[#1da1f2] hover:bg-[#1a91da] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        onClick={() => window.open("https://twitter.com/your_twitter_profile", "_blank")}
      >
        <Twitter size={24} />
      </Button>
    </div>
  )
}

