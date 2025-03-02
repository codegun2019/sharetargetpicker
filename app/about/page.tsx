"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Smartphone, BarChart3, Shield } from "lucide-react"

// Import translations
import th from "../../locales/th.json"
import en from "../../locales/en.json"
import lo from "../../locales/lo.json"
import zh from "../../locales/zh.json"
import km from "../../locales/km.json"
import vi from "../../locales/vi.json"
import ko from "../../locales/ko.json"
import ja from "../../locales/ja.json"

const translations: { [key: string]: any } = { th, en, lo, zh, km, vi, ko, ja }

export default function AboutPage() {
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

  const t = translations[lang]?.about || {}

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{t.hero?.title || "About Us"}</h1>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative w-[400px] h-[400px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/devices-hero.png`}
                alt="Mobile devices"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get to Know AdsOK Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t.getToKnow?.title || "Get to Know AdsOK"}</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {t.getToKnow?.description || "Learn more about AdsOK and how we can help your business grow."}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Monitor className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {t.getToKnow?.targetedAds?.title || "Targeted Advertising"}
                </h3>
                <p className="text-gray-600 text-center">
                  {t.getToKnow?.targetedAds?.description ||
                    "Reach your target audience effectively with our smart targeting options."}
                </p>
                <div className="text-center mt-4">
                  <Button variant="outline" className="border-primary text-primary">
                    {t.getToKnow?.targetedAds?.cta || "Learn More"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Smartphone className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {t.getToKnow?.websiteValue?.title || "Increase Your Website Value"}
                </h3>
                <p className="text-white/90 text-center">
                  {t.getToKnow?.websiteValue?.description ||
                    "Maximize your website revenue with our high-performing ad formats."}
                </p>
                <div className="text-center mt-4">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    {t.getToKnow?.websiteValue?.cta || "Get Started"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Advertise With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.whyAdvertise?.title || "Why Advertise With Us"}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/app-screens.png`}
                alt="AdsOK Platform Screenshots"
                width={500}
                height={600}
                className="object-contain"
              />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t.whyAdvertise?.easyPlatform?.title || "Easy-to-Use Platform"}
                  </h3>
                  <p className="text-gray-600">
                    {t.whyAdvertise?.easyPlatform?.description ||
                      "Our intuitive dashboard makes campaign management simple and efficient."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.whyAdvertise?.easyPayment?.title || "Easy Payment"}</h3>
                  <p className="text-gray-600">
                    {t.whyAdvertise?.easyPayment?.description ||
                      "Secure and fast payment options to start your campaigns quickly."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t.whyAdvertise?.realtimeResults?.title || "Real-time Results"}
                  </h3>
                  <p className="text-gray-600">
                    {t.whyAdvertise?.realtimeResults?.description ||
                      "Monitor your campaign performance in real-time with our comprehensive analytics."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t.adTypes?.title || "Types of Ads We Offer"}</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {t.adTypes?.description ||
              "Choose from our variety of ad formats to suit your marketing needs and maximize engagement."}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Monitor className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {t.adTypes?.standardBanner?.title || "Standard Banners"}
                </h3>
                <p className="text-gray-600 text-center">
                  {t.adTypes?.standardBanner?.description ||
                    "Traditional banner ads in various sizes to fit any website layout and design."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {t.adTypes?.animatedBanner?.title || "Animated Banners"}
                </h3>
                <p className="text-white/90 text-center">
                  {t.adTypes?.animatedBanner?.description ||
                    "Eye-catching animated ads that drive higher engagement and click-through rates."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/join-network.jpg`}
                alt="Join Our Network"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{t.cta?.title || "Ready to Join Our Ad Network?"}</h2>
              <p className="text-gray-600 mb-8">
                {t.cta?.description ||
                  "Join thousands of advertisers and publishers who are already benefiting from our platform."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  {t.cta?.advertiseCta || "Start Advertising"}
                </Button>
                <Button variant="outline" className="border-primary text-primary">
                  {t.cta?.partnerCta || "Become a Partner"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

