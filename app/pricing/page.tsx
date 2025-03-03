"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Users, Zap, Building, Shield, BarChart, Clock } from "lucide-react"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export default function PricingPage() {
  const [lang, setLang] = useState("th")
  const [currency, setCurrency] = useState("THB")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.pricing || {}

  const packages = [
    {
      name: t.basic?.name || "Basic",
      icon: Users,
      forType: "สำหรับผู้เริ่มต้น",
      price: {
        THB: "฿999",
        USD: "$29",
      },
      description: t.basic?.description || "เหมาะสำหรับผู้เริ่มต้นที่ต้องการทดลองใช้งานระบบ",
      features: [
        "การแสดงโฆษณาสูงสุด 250,000 ครั้ง",
        "ตัวเลือกการกำหนดเป้าหมายพื้นฐาน",
        "การวิเคราะห์มาตรฐาน",
        "สมาชิกในทีมสูงสุด 3 คน",
      ],
      buttonText: "เริ่มต้นใช้งาน",
      buttonVariant: "outline",
    },
    {
      name: t.pro?.name || "Pro",
      icon: Zap,
      forType: "สำหรับธุรกิจขนาดกลาง",
      price: {
        THB: "฿2,999",
        USD: "$99",
      },
      description: t.pro?.description || "เหมาะสำหรับธุรกิจที่ต้องการเติบโตอย่างรวดเร็ว",
      features: [
        "การแสดงโฆษณาสูงสุด 1,000,000 ครั้ง",
        "ตัวเลือกการกำหนดเป้าหมายขั้นสูง",
        "การวิเคราะห์แบบเรียลไทม์",
        "สมาชิกในทีมสูงสุด 10 คน",
        "การทดสอบ A/B",
      ],
      buttonText: "เริ่มต้นใช้งาน",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: t.enterprise?.name || "Enterprise",
      icon: Building,
      forType: "สำหรับองค์กรขนาดใหญ่",
      price: {
        THB: "฿9,999",
        USD: "$299",
      },
      description: t.enterprise?.description || "เหมาะสำหรับองค์กรขนาดใหญ่ที่ต้องการโซลูชันแบบครบวงจร",
      features: [
        "การแสดงโฆษณาไม่จำกัด",
        "โซลูชันการกำหนดเป้าหมายแบบกำหนดเอง",
        "การวิเคราะห์และการรายงานขั้นสูง",
        "สมาชิกในทีมไม่จำกัด",
        "การสนับสนุนตลอด 24/7",
        "API สำหรับนักพัฒนา",
      ],
      buttonText: "ติดต่อฝ่ายขาย",
      buttonVariant: "outline",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "ความปลอดภัยสูงสุด",
      description: "ระบบความปลอดภัยระดับสูงที่ปกป้องข้อมูลของคุณตลอดเวลา",
    },
    {
      icon: BarChart,
      title: "รายงานแบบเรียลไทม์",
      description: "ติดตามผลลัพธ์ของแคมเปญได้ทันทีด้วยรายงานแบบเรียลไทม์",
    },
    {
      icon: Clock,
      title: "การสนับสนุน 24/7",
      description: "ทีมงานพร้อมให้ความช่วยเหลือคุณตลอด 24 ชั่วโมง ทุกวัน",
    },
  ]

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary uppercase font-medium mb-2">{t.subtitle || "PRICING"}</p>
          <h1 className="text-4xl font-bold mb-4">{t.title || "Our pricing plans"}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.description || "Select the perfect package for your advertising needs"}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              className={`px-4 py-2 rounded-full ${currency === "THB" ? "bg-primary text-white" : "text-gray-700"}`}
              onClick={() => setCurrency("THB")}
            >
              THB
            </button>
            <button
              className={`px-4 py-2 rounded-full ${currency === "USD" ? "bg-primary text-white" : "text-gray-700"}`}
              onClick={() => setCurrency("USD")}
            >
              USD
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                  pkg.popular
                    ? "bg-primary border-2 border-primary transform md:scale-105 relative"
                    : "bg-white border border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#20b526] text-white text-xs px-4 py-1 rounded-bl-lg font-medium">ยอดนิยม</div>
                  </div>
                )}
                <div className={`p-6 ${pkg.popular ? "text-white" : ""}`}>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full ${
                        pkg.popular ? "bg-white/20" : "bg-primary/10"
                      } flex items-center justify-center mr-4`}
                    >
                      <IconComponent className={`w-6 h-6 ${pkg.popular ? "text-white" : "text-primary"}`} />
                    </div>
                    <div>
                      <p className={pkg.popular ? "text-white/80" : "text-gray-600"}>{pkg.forType}</p>
                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                    </div>
                  </div>

                  <p className={`${pkg.popular ? "text-white/80" : "text-gray-600"} mb-6`}>{pkg.description}</p>

                  <div className="mb-6">
                    <p className="text-5xl font-bold">{pkg.price[currency]}</p>
                    <p className={pkg.popular ? "text-white/80" : "text-gray-600"}>/เดือน</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-4">สิ่งที่คุณจะได้รับ</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className={`w-5 h-5 ${pkg.popular ? "text-white" : "text-primary"} mr-2`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-white text-primary hover:bg-gray-100"
                        : "bg-white border border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {pkg.buttonText}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">ทุกแพ็คเกจมาพร้อมกับ</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.faqTitle || "Frequently Asked Questions"}</h2>
          <p className="text-gray-600 mb-8">{t.faqSubtitle || "Find answers to common questions about our packages"}</p>
          <Link href="/faq">
            <Button variant="outline">{t.viewFaq || "View FAQ"}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

