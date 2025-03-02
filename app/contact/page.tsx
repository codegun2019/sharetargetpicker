"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Users,
  PlusCircle,
  UserPlus,
  Info,
  HelpCircle,
  Share2,
  Send,
  MessageSquare,
  Facebook,
  Twitter,
} from "lucide-react"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export default function ContactPage() {
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.contact || {}

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{t.hero?.title || "Contact Us"}</h1>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative w-[300px] h-[600px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/mobile-mockup.png`}
                alt="Mobile Device Mockup"
                layout="fill"
                objectFit="contain"
                className="floating-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t.customerService?.title || "Customer Service"}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {t.customerService?.description || "Our customer service team is here to help."}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Telegram QR Code"
                      width={200}
                      height={200}
                      className="border-2 border-dashed border-blue-500 p-2 rounded-lg"
                    />
                  </div>
                  <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white w-full mb-2">
                    {t.customerService?.telegram?.button || "Contact via Telegram"}
                  </Button>
                  <p className="text-sm text-gray-500">
                    {t.customerService?.telegram?.description || "Scan the QR code to chat with us on Telegram."}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Line QR Code"
                      width={200}
                      height={200}
                      className="border-2 border-dashed border-green-500 p-2 rounded-lg"
                    />
                  </div>
                  <Button className="bg-[#00B900] hover:bg-[#009900] text-white w-full mb-2">
                    {t.customerService?.line?.button || "Contact via Line"}
                  </Button>
                  <p className="text-sm text-gray-500">
                    {t.customerService?.line?.description || "Scan the QR code to chat with us on Line."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Network Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Join Network"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {t.joinNetwork?.title1 || "Ready to join"}
                <br />
                {t.joinNetwork?.title2 || "Ad Network"}?
              </h2>
              <p className="text-gray-600 mb-8">
                {t.joinNetwork?.description ||
                  "Join us as an advertiser or website owner to create endless business opportunities."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  {t.joinNetwork?.advertiserButton || "Apply to Advertise"}
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-red-50">
                  {t.joinNetwork?.partnerButton || "Apply to be a Partner"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.contactInfo?.title || "ติดต่อเรา"}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Phone className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">
                  {t.contactInfo?.adsokServices || "AdsOK Services"}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>Telegram: adsok.support</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Email: adsok.cs@gmail.com</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{t.contactInfo?.hours || "24/7 Support"}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Users className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">{t.contactInfo?.contactUs || "Contact Us"}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center justify-center">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    <span>{t.contactInfo?.advertise || "Apply to Advertise"}</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <UserPlus className="w-4 h-4 mr-2" />
                    <span>{t.contactInfo?.partner || "Apply to be a Partner"}</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <Info className="w-4 h-4 mr-2" />
                    <span>{t.contactInfo?.about || "About AdsOK"}</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    <span>{t.contactInfo?.contact || "Contact AdsOK"}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <Share2 className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">{t.contactInfo?.followUs || "Follow Us"}</h3>
                <div className="flex justify-center gap-4 mt-4">
                  <Link href="https://t.me/adsok" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Send className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="https://line.me/adsok" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="https://facebook.com/adsok" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="https://twitter.com/adsok" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

