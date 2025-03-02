"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export default function FAQPage() {
  const [lang, setLang] = useState("th")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.faq || {}

  const faqCategories = [
    {
      id: "general",
      title: t.categories?.general?.title || "คำถามทั่วไป",
      items: [
        {
          id: "what-is-adsok",
          question: t.categories?.general?.whatIsAdsok?.question || "AdsOK คืออะไร?",
          answer:
            t.categories?.general?.whatIsAdsok?.answer ||
            "AdsOK เป็นแพลตฟอร์มโฆษณาออนไลน์ที่เชื่อมต่อผู้ลงโฆษณากับเจ้าของเว็บไซต์ เพื่อสร้างโอกาสทางธุรกิจที่ดีที่สุดสำหรับทั้งสองฝ่าย",
        },
        {
          id: "how-to-register",
          question: t.categories?.general?.howToRegister?.question || "สมัครสมาชิกอย่างไร?",
          answer:
            t.categories?.general?.howToRegister?.answer ||
            "คลิกที่ปุ่ม 'สมัครสมาชิก' ที่มุมขวาบนของหน้าเว็บ กรอกข้อมูลให้ครบถ้วน และเลือกประเภทบัญชีของคุณ (ผู้ลงโฆษณาหรือเจ้าของเว็บไซต์)",
        },
      ],
    },
    {
      id: "advertisers",
      title: t.categories?.advertisers?.title || "สำหรับผู้ลงโฆษณา",
      items: [
        {
          id: "ad-payment",
          question: t.categories?.advertisers?.payment?.question || "ชำระเงินค่าโฆษณาอย่างไร?",
          answer:
            t.categories?.advertisers?.payment?.answer ||
            "เราใช้การชำระเงินผ่านคริปโตเคอร์เรนซีเท่านั้น เพื่อความปลอดภัยและรวดเร็ว สามารถชำระผ่าน USDT หรือ TRON ได้",
        },
        {
          id: "ad-approval",
          question: t.categories?.advertisers?.approval?.question || "โฆษณาต้องผ่านการตรวจสอบหรือไม่?",
          answer:
            t.categories?.advertisers?.approval?.answer ||
            "ใช่ โฆษณาทุกชิ้นจะต้องผ่านการตรวจสอบจากทีมงานก่อนเริ่มแสดงผล เพื่อให้แน่ใจว่าเป็นไปตามนโยบายของเรา",
        },
      ],
    },
    {
      id: "publishers",
      title: t.categories?.publishers?.title || "สำหรับเจ้าของเว็บไซต์",
      items: [
        {
          id: "earnings",
          question: t.categories?.publishers?.earnings?.question || "รับรายได้เมื่อไหร่?",
          answer:
            t.categories?.publishers?.earnings?.answer ||
            "เราจ่ายรายได้ทุกวันที่ 1 และ 15 ของเดือน โดยจะโอนเข้ากระเป๋าคริปโตที่คุณระบุไว้โดยอัตโนมัติ",
        },
        {
          id: "minimum-traffic",
          question: t.categories?.publishers?.traffic?.question || "ต้องมีจำนวนผู้เข้าชมขั้นต่ำเท่าไหร่?",
          answer:
            t.categories?.publishers?.traffic?.answer ||
            "เว็บไซต์ของคุณควรมีผู้เข้าชมอย่างน้อย 1,000 คนต่อวัน และมีเนื้อหาที่มีคุณภาพตรงตามนโยบายของเรา",
        },
      ],
    },
    {
      id: "technical",
      title: t.categories?.technical?.title || "ด้านเทคนิค",
      items: [
        {
          id: "ad-code",
          question: t.categories?.technical?.adCode?.question || "ติดตั้งโค้ดโฆษณาอย่างไร?",
          answer:
            t.categories?.technical?.adCode?.answer ||
            "หลังจากเว็บไซต์ของคุณได้รับการอนุมัติ คุณจะได้รับโค้ดสำหรับติดตั้ง นำโค้ดไปวางในส่วน <head> ของเว็บไซต์ หรือติดตั้งผ่านตัวจัดการแท็ก",
        },
        {
          id: "reporting",
          question: t.categories?.technical?.reporting?.question || "ดูรายงานผลได้อย่างไร?",
          answer:
            t.categories?.technical?.reporting?.answer ||
            "เข้าสู่ระบบที่แดชบอร์ด คุณจะเห็นรายงานแบบเรียลไทม์ สถิติย้อนหลัง และสามารถดาวน์โหลดรายงานในรูปแบบต่างๆ ได้",
        },
      ],
    },
  ]

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0)

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/help" className="text-white/80 hover:text-white">
                    {t.breadcrumb?.help || "ศูนย์ช่วยเหลือ"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-white" href="/help/faq">
                    {t.breadcrumb?.faq || "คำถามที่พบบ่อย"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h1 className="text-4xl font-bold text-center mb-8">{t.hero?.title || "คำถามที่พบบ่อย"}</h1>
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="search"
              placeholder={t.hero?.searchPlaceholder || "ค้นหาคำถามที่คุณสงสัย"}
              className="pl-12 bg-white text-gray-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category) => (
              <div key={category.id} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.items.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="bg-white">
                      <AccordionTrigger className="px-4 hover:no-underline">
                        <span className="text-left">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4">
                        <div className="prose max-w-none">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.needHelp?.title || "ยังไม่พบคำตอบที่ต้องการ?"}</h2>
          <p className="text-gray-600 mb-6">{t.needHelp?.description || "ติดต่อทีมสนับสนุนของเราได้ตลอด 24 ชั่วโมง"}</p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">{t.needHelp?.contact || "ติดต่อเรา"}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/help">{t.needHelp?.helpCenter || "ศูนย์ช่วยเหลือ"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

