"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)

    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const t = translations[lang]?.cookieConsent || {}

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:p-6 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 mr-4">
          <p className="text-sm md:text-base">{t.message || "เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานของคุณ"}</p>
          <Button variant="link" className="p-0 h-auto text-primary hover:underline">
            {t.learnMore || "เรียนรู้เพิ่มเติม"}
          </Button>
        </div>
        <div className="flex items-center">
          <Button onClick={handleAccept} className="mr-2">
            {t.accept || "ยอมรับ"}
          </Button>
          <Button variant="outline" onClick={handleDecline}>
            {t.decline || "ปฏิเสธ"}
          </Button>
        </div>
      </div>
      <button onClick={() => setIsVisible(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <X size={24} />
      </button>
    </div>
  )
}

