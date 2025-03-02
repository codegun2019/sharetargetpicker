"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Target, Zap, DollarSign } from "lucide-react"

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

export default function AdvertisersPage() {
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.advertisers || {}

  const features = [
    {
      icon: Target,
      title: t.features?.targeting?.title || "Precise Targeting",
      description:
        t.features?.targeting?.description || "Reach your ideal audience with our advanced targeting options.",
    },
    {
      icon: BarChart,
      title: t.features?.analytics?.title || "Real-time Analytics",
      description:
        t.features?.analytics?.description || "Get instant insights with our comprehensive real-time analytics.",
    },
    {
      icon: Zap,
      title: t.features?.performance?.title || "High Performance",
      description: t.features?.performance?.description || "Achieve better ROI with our high-performing ad network.",
    },
    {
      icon: DollarSign,
      title: t.features?.costEffective?.title || "Cost-Effective",
      description:
        t.features?.costEffective?.description || "Maximize your advertising budget with our competitive rates.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.hero?.title || "Advertise with AdsOK"}</h1>
              <p className="text-lg mb-8">
                {t.hero?.subtitle ||
                  "Reach your target audience and grow your business with our innovative advertising solutions."}
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">{t.hero?.cta || "Get Started"}</Button>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Advertising Illustration"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features?.title || "Why Advertise with Us"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.adFormats?.title || "Our Ad Formats"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.adFormats?.display?.title || "Display Ads"}</h3>
                <p className="text-gray-600 mb-4">
                  {t.adFormats?.display?.description || "Eye-catching banner ads in various sizes to fit any website."}
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Display Ad Example"
                  width={300}
                  height={150}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.adFormats?.native?.title || "Native Ads"}</h3>
                <p className="text-gray-600 mb-4">
                  {t.adFormats?.native?.description ||
                    "Seamlessly integrated ads that match the look and feel of the website."}
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Native Ad Example"
                  width={300}
                  height={150}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t.adFormats?.video?.title || "Video Ads"}</h3>
                <p className="text-gray-600 mb-4">
                  {t.adFormats?.video?.description || "Engaging video ads to capture your audience's attention."}
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=300"
                  alt="Video Ad Example"
                  width={300}
                  height={150}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta?.title || "Ready to Boost Your Advertising?"}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {t.cta?.subtitle || "Join thousands of successful advertisers on our platform."}
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90">
            {t.cta?.button || "Start Advertising Now"}
          </Button>
        </div>
      </section>
    </main>
  )
}

