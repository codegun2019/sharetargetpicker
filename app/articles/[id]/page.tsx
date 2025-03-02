"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

const article = {
  id: 1,
  title: "5 เทคนิคการทำ Email Marketing ให้ประสบความสำเร็จ",
  description: "เรียนรู้วิธีการทำ Email Marketing ที่มีประสิทธิภาพเพื่อเพิ่มยอดขายและสร้างความสัมพันธ์กับลูกค้า",
  content: `
    <p>Email Marketing ยังคงเป็นหนึ่งในเครื่องมือทางการตลาดที่มีประสิทธิภาพมากที่สุดในยุคดิจิทัล แม้ว่าจะมีช่องทางการสื่อสารใหม่ๆ เกิดขึ้นมากมาย แต่ Email ก็ยังคงเป็นวิธีที่ตรงและส่วนตัวในการเข้าถึงกลุ่มเป้าหมายของคุณ</p>

    <h2>1. สร้างหัวข้อที่น่าสนใจ</h2>
    <p>หัวข้อ Email เป็นสิ่งแรกที่ผู้รับเห็น ดังนั้นจึงต้องทำให้น่าสนใจและดึงดูดให้เปิดอ่าน ใช้คำที่กระตุ้นความอยากรู้ หรือเสนอคุณค่าที่ชัดเจน</p>

    <h2>2. ปรับแต่งเนื้อหาให้เหมาะกับผู้รับ</h2>
    <p>ใช้ข้อมูลที่คุณมีเกี่ยวกับผู้รับเพื่อปรับแต่งเนื้อหาให้ตรงกับความสนใจของพวกเขา การส่ง Email ที่เกี่ยวข้องโดยตรงกับผู้รับจะช่วยเพิ่มอัตราการเปิดและการมีส่วนร่วม</p>

    <h2>3. ออกแบบ Email ให้ดูดีบนทุกอุปกรณ์</h2>
    <p>ปัจจุบันผู้คนเปิด Email บนอุปกรณ์ที่หลากหลาย ตั้งแต่สมาร์ทโฟนไปจนถึงคอมพิวเตอร์ตั้งโต๊ะ ดังนั้นต้องแน่ใจว่า Email ของคุณแสดงผลได้ดีบนทุกขนาดหน้าจอ</p>

    <h2>4. ใช้ Call-to-Action (CTA) ที่ชัดเจน</h2>
    <p>ทุก Email ควรมีจุดประสงค์ที่ชัดเจน ไม่ว่าจะเป็นการคลิกลิงก์ ดาวน์โหลดเอกสาร หรือทำการซื้อ ใช้ปุ่ม CTA ที่โดดเด่นและมีข้อความที่กระตุ้นให้เกิดการกระทำ</p>

    <h2>5. วิเคราะห์และปรับปรุงอย่างต่อเนื่อง</h2>
    <p>ใช้เครื่องมือวิเคราะห์เพื่อติดตามประสิทธิภาพของแคมเปญ Email ของคุณ ดูอัตราการเปิด อัตราการคลิก และการแปลงเป็นลูกค้า จากนั้นใช้ข้อมูลนี้เพื่อปรับปรุงกลยุทธ์ของคุณอย่างต่อเนื่อง</p>

    <p>การทำ Email Marketing ที่ประสบความสำเร็จต้องอาศัยการวางแผนที่ดี ความคิดสร้างสรรค์ และการปรับปรุงอย่างต่อเนื่อง ด้วยเทคนิคเหล่านี้ คุณจะสามารถสร้างแคมเปญ Email ที่มีประสิทธิภาพและช่วยให้ธุรกิจของคุณเติบโตได้</p>
  `,
  image: "/placeholder.svg?height=400&width=800",
  date: "2023-05-15",
  readTime: 5,
  author: {
    name: "จอห์น โด",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "ผู้เชี่ยวชาญด้านการตลาดดิจิทัลและ Email Marketing",
  },
  tags: ["Email Marketing", "Digital Marketing", "Customer Engagement"],
}

const relatedArticles = [
  {
    id: 2,
    title: "การใช้ AI ในการวิเคราะห์ข้อมูลลูกค้าสำหรับธุรกิจ SME",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-10",
    readTime: 7,
  },
  {
    id: 3,
    title: "10 เทรนด์การตลาดดิจิทัลที่ต้องจับตามองในปี 2023",
    image: "/placeholder.svg?height=200&width=300",
    date: "2023-05-05",
    readTime: 6,
  },
]

export default function ArticlePage() {
  const [lang, setLang] = useState("th")
  const params = useParams()

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.articlePage || {}

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <p className="text-xl mb-6">{article.description}</p>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={article.author.avatar} alt={article.author.name} />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{article.author.name}</p>
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
                <Clock className="w-4 h-4 ml-4 mr-1" />
                <span>
                  {article.readTime} {t.minuteRead || "นาที"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={800}
                height={400}
                className="w-full rounded-lg mb-8"
              />
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

              {/* Tags */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">{t.tags || "แท็ก"}</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Button key={index} variant="outline" size="sm">
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">{t.share || "แชร์"}</h3>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              {/* Author Bio */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                    <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-2">{article.author.name}</h3>
                  <p className="text-gray-600">{article.author.bio}</p>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <h3 className="text-xl font-semibold mb-4">{t.relatedArticles || "บทความที่เกี่ยวข้อง"}</h3>
              <div className="space-y-4">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id}>
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold mb-1">{relatedArticle.title}</h4>
                          <div className="text-sm text-gray-500">
                            <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span>
                              {relatedArticle.readTime} {t.minuteRead || "นาที"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

