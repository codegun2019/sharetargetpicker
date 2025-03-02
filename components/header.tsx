"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, LogIn, UserPlus } from "lucide-react"

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

const languageIcons: { [key: string]: string } = {
  th: "🇹🇭",
  en: "🇬🇧",
  lo: "🇱🇦",
  zh: "🇨🇳",
  km: "🇰🇭",
  vi: "🇻🇳",
  ko: "🇰🇷",
  ja: "🇯🇵",
}

export function Header() {
  if (!translations || Object.keys(translations).length === 0) {
    translations.th = { nav: {}, languages: {} }
    translations.en = { nav: {}, languages: {} }
  }
  const pathname = usePathname()
  const router = useRouter()
  const [lang, setLang] = useState("th")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const t = translations[lang]?.nav || {}
  const languages = translations[lang]?.languages || {}

  const changeLanguage = (newLang: string) => {
    setLang(newLang)
    localStorage.setItem("language", newLang)
    window.dispatchEvent(new Event("languageChange"))
    router.refresh()
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-primary text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={isScrolled ? "/logo-red.svg" : "/logo.svg"}
              alt="AdsOK Logo"
              width={120}
              height={40}
              className="mr-8"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className={`font-medium ${isScrolled ? "hover:text-primary" : "hover:text-gray-200"}`}>
              {t?.about || "About Us"}
            </Link>
            <Link
              href="/advertisers"
              className={`font-medium ${isScrolled ? "hover:text-primary" : "hover:text-gray-200"}`}
            >
              {t?.advertisers || "Advertisers"}
            </Link>
            <Link
              href="/services"
              className={`font-medium ${isScrolled ? "hover:text-primary" : "hover:text-gray-200"}`}
            >
              {t?.services || "Services"}
            </Link>
            <Link
              href="/products"
              className={`font-medium ${isScrolled ? "hover:text-primary" : "hover:text-gray-200"}`}
            >
              {t?.products || "Products"}
            </Link>
            <Link
              href="/articles"
              className={`font-medium ${isScrolled ? "hover:text-primary" : "hover:text-gray-200"}`}
            >
              {t?.articles || "Articles"}
            </Link>
            <Link href="/faq" className={`font-medium ${isScrolled ? "hover:text-primary" : "hover:text-gray-200"}`}>
              {t?.faq || "FAQ"}
            </Link>
            <Link
              href="/contact"
              className={`font-medium ${isScrolled ? "hover:text-primary" : "hover:text-gray-200"}`}
            >
              {t?.contact || "Contact"}
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={
                  isScrolled
                    ? "text-black hover:text-primary hover:bg-gray-100"
                    : "text-white hover:text-primary hover:bg-white"
                }
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.keys(translations).map((langCode) => (
                <DropdownMenuItem
                  key={langCode}
                  onClick={() => changeLanguage(langCode)}
                  className="text-gray-900 hover:bg-gray-100"
                >
                  <span className="mr-2">{languageIcons[langCode]}</span>
                  {languages[langCode] || langCode}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/login">
            <Button
              variant="secondary"
              className={`${
                isScrolled
                  ? "bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                  : "bg-transparent border-white text-white hover:bg-white hover:text-primary"
              } ${pathname === "/login" ? "bg-white text-primary" : ""}`}
              icon={<LogIn className="w-4 h-4" />}
            >
              {t?.login || "Login"}
            </Button>
          </Link>
          <Link href="/register">
            <Button
              className={
                isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-gray-100"
              }
              icon={<UserPlus className="w-4 h-4" />}
            >
              {t?.signup || "Sign Up"}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

