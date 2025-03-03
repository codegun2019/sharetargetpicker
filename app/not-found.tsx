"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"
import lo from "@/locales/lo.json"
import zh from "@/locales/zh.json"
import km from "@/locales/km.json"
import vi from "@/locales/vi.json"
import ko from "@/locales/ko.json"
import ja from "@/locales/ja.json"

const translations: { [key: string]: any } = { th, en, lo, zh, km, vi, ko, ja }

export default function NotFound() {
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.notFound || {}

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">{t.title || "ไม่พบหน้าที่คุณต้องการ"}</h2>
        <p className="text-xl text-gray-600 mb-8">{t.description || "ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา"}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              {t.homeButton || "กลับสู่หน้าหลัก"}
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4" />
              {t.backButton || "กลับไปหน้าก่อนหน้า"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

