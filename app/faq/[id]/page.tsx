"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
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

export default function FAQContentPage() {
  const [lang, setLang] = useState("th")
  const { id } = useParams()

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.faq || {}

  // This is a placeholder. In a real application, you would fetch the content based on the ID.
  const content = {
    title: t.contentPage?.title || "รายละเอียดคำถามที่พบบ่อย",
    body: t.contentPage?.body || "เนื้อหารายละเอียดจะถูกเพิ่มเติมในภายหลัง ขออภัยในความไม่สะดวก",
  }

  return (
    <main className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t.breadcrumb?.home || "หน้าหลัก"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/faq">{t.breadcrumb?.faq || "คำถามที่พบบ่อย"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/faq/${id}`}>{content.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
        <div className="prose max-w-none">
          <p>{content.body}</p>
        </div>

        <div className="mt-8">
          <Link href="/faq" className="text-primary hover:underline">
            {t.backToFaq || "กลับไปยังหน้าคำถามที่พบบ่อย"}
          </Link>
        </div>
      </div>
    </main>
  )
}

