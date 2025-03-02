"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export default function HelpPage() {
  const [lang, setLang] = useState("th")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.help || {}

  const helpCategories = [
    {
      id: "general",
      title: t.categories?.general?.title || "ทั่วไป",
      items: [
        {
          id: "what-is-adsok",
          title: t.categories?.general?.whatIsAdsok?.title || "AdsOK คืออะไร?",
          content:
            t.categories?.general?.whatIsAdsok?.content || "AdsOK เป็นแพลตฟอร์มโฆษณาออนไลน์ที่เชื่อมต่อผู้ลงโฆษณากับเจ้าของเว็บไซต์",
        },
        {
          id: "how-to-start",
          title: t.categories?.general?.howToStart?.title || "เริ่มต้นใช้งานอย่างไร?",
          content:
            t.categories?.general?.howToStart?.content || "สมัครสมาชิกและเลือกประเภทบัญชีของคุณ (ผู้ลงโฆษณาหรือเจ้าของเว็บไซต์)",
        },
      ],
    },
    {
      id: "advertisers",
      title: t.categories?.advertisers?.title || "สำหรับผู้ลงโฆษณา",
      items: [
        {
          id: "create-ad",
          title: t.categories?.advertisers?.createAd?.title || "วิธีสร้างโฆษณา",
          content: t.categories?.advertisers?.createAd?.content || "เข้าสู่ระบบ เลือกรูปแบบโฆษณา กำหนดงบประมาณและกลุ่มเป้าหมาย",
        },
        {
          id: "payment",
          title: t.categories?.advertisers?.payment?.title || "วิธีการชำระเงิน",
          content:
            t.categories?.advertisers?.payment?.content ||
            "เราใช้การชำระเงินผ่านคริปโตเคอร์เรนซีเท่านั้น เพื่อความปลอดภัยและรวดเร็ว",
        },
      ],
    },
    {
      id: "publishers",
      title: t.categories?.publishers?.title || "สำหรับเจ้าของเว็บไซต์",
      items: [
        {
          id: "add-website",
          title: t.categories?.publishers?.addWebsite?.title || "วิธีเพิ่มเว็บไซต์",
          content: t.categories?.publishers?.addWebsite?.content || "ลงทะเบียนเว็บไซต์ของคุณและรอการตรวจสอบจากทีมงาน",
        },
        {
          id: "earnings",
          title: t.categories?.publishers?.earnings?.title || "การรับรายได้",
          content:
            t.categories?.publishers?.earnings?.content || "รายได้จะถูกโอนเข้ากระเป๋าคริปโตของคุณทุกวันที่ 1 และ 15 ของเดือน",
        },
      ],
    },
  ]

  const quickLinks = [
    {
      icon: "📚",
      title: t.quickLinks?.guide || "คู่มือการใช้งาน",
      description: t.quickLinks?.guideDesc || "เรียนรู้วิธีใช้งานทุกฟีเจอร์",
    },
    {
      icon: "💰",
      title: t.quickLinks?.payment || "การชำระเงิน",
      description: t.quickLinks?.paymentDesc || "วิธีการชำระเงินและการถอนเงิน",
    },
    {
      icon: "📊",
      title: t.quickLinks?.analytics || "การวิเคราะห์",
      description: t.quickLinks?.analyticsDesc || "เข้าใจรายงานและการวิเคราะห์",
    },
    {
      icon: "🔒",
      title: t.quickLinks?.security || "ความปลอดภัย",
      description: t.quickLinks?.securityDesc || "การรักษาความปลอดภัยบัญชี",
    },
  ]

  const filteredCategories = helpCategories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.items.length > 0)

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">{t.hero?.title || "ศูนย์ช่วยเหลือ"}</h1>
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="search"
              placeholder={t.hero?.searchPlaceholder || "ค้นหาคำถามหรือหัวข้อที่ต้องการความช่วยเหลือ"}
              className="pl-12 bg-white text-gray-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{link.icon}</div>
                  <h3 className="font-semibold mb-2">{link.title}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">{t.tabs?.all || "ทั้งหมด"}</TabsTrigger>
              <TabsTrigger value="general">{t.tabs?.general || "ทั่วไป"}</TabsTrigger>
              <TabsTrigger value="advertisers">{t.tabs?.advertisers || "ผู้ลงโฆษณา"}</TabsTrigger>
              <TabsTrigger value="publishers">{t.tabs?.publishers || "เจ้าของเว็บ"}</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {filteredCategories.map((category) => (
                  <div key={category.id}>
                    <h2 className="font-semibold text-lg mb-2">{category.title}</h2>
                    {category.items.map((item) => (
                      <AccordionItem key={item.id} value={item.id} className="bg-white mb-2">
                        <AccordionTrigger className="px-4">{item.title}</AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </div>
                ))}
              </Accordion>
            </TabsContent>

            {helpCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.items
                    .filter(
                      (item) =>
                        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.content.toLowerCase().includes(searchQuery.toLowerCase()),
                    )
                    .map((item) => (
                      <AccordionItem key={item.id} value={item.id} className="bg-white mb-2">
                        <AccordionTrigger className="px-4">{item.title}</AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">{item.content}</AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.contact?.title || "ยังไม่พบคำตอบที่ต้องการ?"}</h2>
          <p className="text-gray-600 mb-6">{t.contact?.description || "ติดต่อทีมสนับสนุนของเราได้ตลอด 24 ชั่วโมง"}</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Card className="w-full max-w-xs">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-semibold mb-2">{t.contact?.telegram || "Telegram"}</h3>
                <p className="text-sm text-gray-600">@adsok.support</p>
              </CardContent>
            </Card>
            <Card className="w-full max-w-xs">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-semibold mb-2">{t.contact?.email || "อีเมล"}</h3>
                <p className="text-sm text-gray-600">support@adsok.com</p>
              </CardContent>
            </Card>
            <Card className="w-full max-w-xs">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">❓</div>
                <h3 className="font-semibold mb-2">{t.contact?.faq || "คำถามที่พบบ่อย"}</h3>
                <Link href="/help/faq" className="text-primary hover:underline">
                  {t.contact?.viewFaq || "ดูคำถามที่พบบ่อย"}
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

