"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Clock, ArrowRight } from "lucide-react"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

const articles = [
  {
    id: 1,
    title: "5 เทคนิคการทำ Email Marketing ให้ประสบความสำเร็จ",
    description: "เรียนรู้วิธีการทำ Email Marketing ที่มีประสิทธิภาพเพื่อเพิ่มยอดขายและสร้างความสัมพันธ์กับลูกค้า",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-05-15",
    readTime: 5,
  },
  {
    id: 2,
    title: "การใช้ AI ในการวิเคราะห์ข้อมูลลูกค้าสำหรับธุรกิจ SME",
    description: "ค้นพบวิธีการนำ AI มาใช้ในการวิเคราะห์ข้อมูลลูกค้าเพื่อปรับปรุงกลยุทธ์ทางธุรกิจของคุณ",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-05-10",
    readTime: 7,
  },
  {
    id: 3,
    title: "10 เทรนด์การตลาดดิจิทัลที่ต้องจับตามองในปี 2023",
    description: "อัพเดทเทรนด์การตลาดดิจิทัลล่าสุดที่จะช่วยให้ธุรกิจของคุณอยู่เหนือคู่แข่ง",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-05-05",
    readTime: 6,
  },
  {
    id: 4,
    title: "วิธีสร้าง Landing Page ที่มีประสิทธิภาพเพื่อเพิ่มอัตราการเปลี่ยนแปลง",
    description: "เรียนรู้เคล็ดลับในการออกแบบ Landing Page ที่จะช่วยเพิ่มอัตราการเปลี่ยนผู้เข้าชมให้เป็นลูกค้า",
    image: "/placeholder.svg?height=400&width=600",
    date: "2023-04-30",
    readTime: 8,
  },
]

export default function ArticlesPage() {
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.articles || {}

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title || "บทความ"}</h1>
          <p className="text-xl">{t.subtitle || "เรียนรู้และอัพเดทเทรนด์การตลาดดิจิทัลล่าสุด"}</p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.featuredTitle || "บทความยอดนิยม"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>
                      {article.readTime} {t.minuteRead || "นาที"}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="link" className="p-0">
                    {t.readMore || "อ่านเพิ่มเติม"} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.allArticlesTitle || "บทความทั้งหมด"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col md:flex-row overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full md:w-48 h-48 object-cover"
                />
                <div className="flex-1 p-4">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>
                        {article.readTime} {t.minuteRead || "นาที"}
                      </span>
                    </div>
                    <Button variant="link" className="p-0">
                      {t.readMore || "อ่านเพิ่มเติม"} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button>{t.loadMore || "โหลดเพิ่มเติม"}</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

