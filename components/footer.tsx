"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

// Import translations
import th from "../locales/th.json"
import en from "../locales/en.json"
import lo from "../locales/lo.json"
import zh from "../locales/zh.json"
import km from "../locales/km.json"
import vi from "../locales/vi.json"
import ko from "../locales/ko.json"
import ja from "../locales/ja.json"

const translations: { [key: string]: any } = { th, en, lo, zh, km, vi, ko, ja }

export function Footer() {
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)

    const handleLanguageChange = () => {
      const newLang = localStorage.getItem("language") || "th"
      setLang(newLang)
    }

    window.addEventListener("languageChange", handleLanguageChange)

    return () => {
      window.removeEventListener("languageChange", handleLanguageChange)
    }
  }, [])

  const t = translations[lang]?.footer || {}

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/">
              <Image src="/logo.svg" alt="AdsOK Logo" width={120} height={40} className="mb-4" />
            </Link>
            <p className="text-white/80">{t.description || "แพลตฟอร์มโฆษณาออนไลน์ที่ช่วยให้ธุรกิจของคุณเติบโต"}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.services || "บริการของ AdsOK"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/advertisers" className="hover:underline">
                  {t.advertisers || "สำหรับผู้ลงโฆษณา"}
                </Link>
              </li>
              <li>
                <Link href="/publishers" className="hover:underline">
                  {t.publishers || "สำหรับเจ้าของเว็บ"}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  {t.pricing || "ราคา"}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  {t.faq || "คำถามที่พบบ่อย"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.usefulLinks || "ลิงก์ที่มีประโยชน์"}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  {t.about || "เกี่ยวกับเรา"}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  {t.blog || "บล็อก"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  {t.terms || "เงื่อนไขการใช้งาน"}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  {t.privacy || "นโยบายความเป็นส่วนตัว"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t.contact || "ติดต่อเรา"}</h3>
            <ul className="space-y-2">
              <li>{t.email || "support@adsok.com"}</li>
              <li>{t.line || "Line: @adsok"}</li>
              <li>{t.phone || "โทร: 02-xxx-xxxx"}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/70 text-sm">
          <p>{t.copyright || `© ${new Date().getFullYear()} AdsOK. สงวนลิขสิทธิ์`}</p>
        </div>
      </div>
    </footer>
  )
}

