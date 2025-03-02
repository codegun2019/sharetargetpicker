"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export function PrivacyPolicyPopup() {
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.privacyPolicy || {}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-primary hover:underline">
          {t.openButton || "นโยบายความเป็นส่วนตัว"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.title || "นโยบายความเป็นส่วนตัว"}</DialogTitle>
          <DialogDescription>{t.description || "นโยบายความเป็นส่วนตัวของเรามีดังต่อไปนี้"}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          <p>{t.content || "เนื้อหานโยบายความเป็นส่วนตัวจะถูกเพิ่มเติมในภายหลัง"}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

