"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { CheckCircle, Zap, Shield, Headphones, CreditCard, BarChart, Check, ArrowRight, Phone } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

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

export default function Home() {
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

  const t = translations[lang]?.home || {}

  const whyChooseItems = [
    { icon: CheckCircle, title: t.whyChoose?.items?.certified || "Certified" },
    { icon: Zap, title: t.whyChoose?.items?.quickStart || "Quick Start" },
    { icon: Shield, title: t.whyChoose?.items?.reliable || "Reliable" },
    { icon: Headphones, title: t.whyChoose?.items?.support || "Support" },
    { icon: CreditCard, title: t.whyChoose?.items?.payments || "Payments" },
    { icon: BarChart, title: t.whyChoose?.items?.reporting || "Reporting" },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                โฆษณาอย่างชาญฉลาด
                <br />
                รับรายได้มากขึ้น!
              </h1>
              <p className="text-xl mb-8">
                เพิ่มรายได้จากโฆษณาของคุณด้วยแพลตฟอร์มนวัตกรรมของเรา เข้าร่วมกับผู้เผยแพร่นับพันที่ไว้วางใจ AdsOK
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8"
                  icon={<Zap className="w-5 h-5" />}
                >
                  เริ่มต้นเลย
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  เรียนรู้เพิ่มเติม
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="AdsOK Platform"
                width={500}
                height={400}
                className="object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-primary font-bold text-xl">10,000+</p>
                <p className="text-gray-600">ผู้เผยแพร่ที่ไว้วางใจ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AdsOK */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {whyChooseItems.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                      <div className="w-8 h-8 text-primary">
                        <item.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="text-2xl font-bold mb-4">{t.whyChoose?.title || "Why Choose AdsOK"}</h2>
              <p className="text-gray-600 mb-6">
                {t.whyChoose?.description || "Discover the benefits of choosing AdsOK for your advertising needs."}
              </p>
              <div className="flex flex-col gap-2">
                <Button className="bg-primary hover:bg-primary/90 text-white" icon={<Zap className="w-4 h-4" />}>
                  {t.whyChoose?.cta1 || "Get Started"}
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-red-50"
                  icon={<Phone className="w-4 h-4" />}
                >
                  {t.whyChoose?.cta2 || "Learn More"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertise with Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t.advertiseWithUs?.title || "Advertise with Us Because"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=500&width=300"
                alt="Mobile App"
                width={300}
                height={500}
                className="object-contain"
              />
            </div>
            <div>
              <div className="space-y-6">
                {Object.entries(t.advertiseWithUs?.items || {}).map(([key, item]: [string, any]) => (
                  <div key={key} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AdsOK */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">{t.whatIsAdsOK?.title || "What is AdsOK?"}</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {t.whatIsAdsOK?.description ||
              "AdsOK is a comprehensive advertising platform connecting advertisers with publishers to maximize revenue and reach."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Advertisers" width={80} height={80} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {t.whatIsAdsOK?.advertisers?.title || "Advertisers Get Exposure"}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {t.whatIsAdsOK?.advertisers?.description ||
                  "Reach your target audience effectively with our smart targeting options and competitive rates."}
              </p>
              <div className="text-center">
                <Link href="/advertisers" className="text-primary font-medium hover:underline">
                  {t.whatIsAdsOK?.cta || "Get Started"}
                </Link>
              </div>
            </div>

            <div className="bg-primary p-6 rounded-lg shadow-sm text-white">
              <div className="flex justify-center mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Publishers" width={80} height={80} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {t.whatIsAdsOK?.publishers?.title || "Publishers Earn More"}
              </h3>
              <p className="text-white/90 text-center mb-4">
                {t.whatIsAdsOK?.publishers?.description ||
                  "Maximize your website revenue with our high-performing ad formats and competitive CPM rates."}
              </p>
              <div className="text-center">
                <Link href="/publishers" className="text-white font-medium hover:underline">
                  {t.whatIsAdsOK?.cta || "Get Started"}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Image src="/placeholder.svg?height=200&width=200" alt="QR Code" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Ads */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">{t.adTypes?.title || "Types of Ads We Offer"}</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {t.adTypes?.description ||
              "Choose from our variety of ad formats to suit your marketing needs and maximize engagement."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">{t.adTypes?.static?.title || "Static Images"}</h3>
              </div>
              <p className="text-gray-600">
                {t.adTypes?.static?.description ||
                  "Traditional banner ads in various sizes to fit any website layout and design."}
              </p>
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-sm text-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">{t.adTypes?.animated?.title || "Animated Banners"}</h3>
              </div>
              <p className="text-white/90">
                {t.adTypes?.animated?.description ||
                  "Eye-catching animated ads that drive higher engagement and click-through rates."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">เสียงจากครีเอเตอร์</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="!pb-8"
          >
            <SwiperSlide>
              <div className="bg-white rounded-xl p-6 text-gray-900 h-full">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/creators/mame.png`}
                      alt="mame&co"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">คุณ mame&co</h3>
                  <p className="text-sm text-gray-600 text-center">
                    ฉันไม่มีประสบการณ์ด้านการวางอยู่มาก่อน แต่ผู้ดูแลวิดีโอของน้ำๆก็ได้แนะนำสิ่งที่ดีที่สุด การตั้งค่าวิดีโอและโฆษณาต่างๆของฉันเสมอมา
                    กับเพื่อนและครอบครัว หรือโพสต์ลง SNS ว่า "ออ" ผู้ดูแลของฉันละครในสตินเกอร์ ฉันได้รู้สึกดีใจเมื่อที่ได้สร้างสติกเกอร์ขึ้นมา
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-xl p-6 text-gray-900 h-full">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/creators/naoko.png`}
                      alt="Naoko"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">คุณ Naoko</h3>
                  <p className="text-sm text-gray-600 text-center">
                    เดิมทีขึ้นอยู่กับอยู่ดีแล้วแต่ฉันเองเห็นว่า สติกเกอร์ ที่ควรได้เห็นมาตรฐานด้านนำมาทำให้ดี ไม่ต้องกังวลว่าทำเป็นอะไรไม่ได้ดี ถ้าคุณมี
                    ภาษาและโฆษณาต่างๆของฉันก็เป็นเรื่องที่น่า ยินดีอีกด้วยว่าจะไร้เสีย
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-xl p-6 text-gray-900 h-full">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/creators/beni.png`}
                      alt="beni orange"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">คุณ beni orange</h3>
                  <p className="text-sm text-gray-600 text-center">
                    ฉันทำสติ๊กเกอร์โฆษณาเพื่อทำงานไม่ได้จริงเลย จนกลับด้วย จนได้รู้จักกับการสร้างสติกเกอร์ซึ่ง ทำให้ฉันได้
                    ดีที่ได้มีเวลาได้และเริ่มสนใจในการ เรื่องราวเท่านั้น ว่าวันนี้ของคุณถูกที่พึงพอใจ ใช้ LINE ด้วยว่า "สติกเกอร์มีแต่ทำเอาชนะ"
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-xl p-6 text-gray-900 h-full">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/creators/seikou.png`}
                      alt="Seikou"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">คุณ Seikou</h3>
                  <p className="text-sm text-gray-600 text-center">
                    ฉันดีใจที่ได้สร้างสติกเกอร์เป็นงานอดิเรก ฉัน สร้างสติกเกอร์มา 10 ปีแล้ว ด้วยเหตุผลเพราะ ที่ได้ตรงนี้ได้ แต่ตรงนี้
                    ที่และการสร้างสติกเกอร์ การมีและลูกที่และ ต้องการมีนิสัยมาสร้าง สติกเกอร์สนุกๆ ต่อไปเรื่อยๆ
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-xl p-6 text-gray-900 h-full">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}/creators/piyotanuki.png`}
                      alt="piyotanuki"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">คุณ piyotanuki</h3>
                  <p className="text-sm text-gray-600 text-center">
                    ตอนแรกผมเองสติกเกอร์ตัวไม่ได้จริงๆ ฉันดีใจ มาก รู้สึกดีที่ได้สร้างสติกเกอร์พระเข้ามาทำให้
                    ผมได้โอกาสได้ด้วยและครอบครัวของผมเองมา สนับสนุนด้วยมากมัน
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg"
              >
                <SwiperSlide>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Join Ad Network"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Our Platform"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Success Stories"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {t.cta?.title || "Ready to join the Largest"} <span className="text-primary">Ad Network</span>?
              </h2>
              <p className="text-gray-600 mb-6">
                {t.cta?.description ||
                  "Join thousands of publishers and advertisers who are already benefiting from our platform."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white" icon={<Zap className="w-4 h-4" />}>
                  {t.cta?.cta1 || "Sign Up Now"}
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-red-50"
                  icon={<Phone className="w-4 h-4" />}
                >
                  {t.cta?.cta2 || "Contact Sales"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.services?.title || "Our Services"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{t.services?.adNetwork?.title || "Ad Network"}</h3>
              <p className="text-gray-600">
                {t.services?.adNetwork?.description ||
                  "Connect advertisers with publishers through our robust ad network platform."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{t.services?.analytics?.title || "Analytics"}</h3>
              <p className="text-gray-600">
                {t.services?.analytics?.description ||
                  "Gain insights into your ad performance with our advanced analytics tools."}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{t.services?.management?.title || "Ad Management"}</h3>
              <p className="text-gray-600">
                {t.services?.management?.description ||
                  "Easily manage and optimize your ad campaigns with our user-friendly interface."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">{t.packages?.title}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">{t.packages?.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                title: "แพ็กเกจฟรี",
                price: "ฟรี",
                description: "ผู้ใช้งานทั่วไปที่ต้องการขอลิงค์และแชร์ในโซเชียลมีเดีย",
                buttonText: "ทดลองใช้งาน",
                buttonVariant: "default",
                bgColor: "bg-[#ebf7eb]",
                borderColor: "border-[#34c759]",
                features: ["ติดตามสถิติการคลิกเบื้องต้น", "ลงคีย์เวิร์ดแบบของเรา", "ลงคีย์ไม่มีขยะมา"],
                disabledFeatures: ["ย่อลิงค์ได้ไม่จำกัดจำนวน", "รองรับ API สำหรับนักพัฒนา"],
              },
              {
                title: "แพ็กเกจพรีเมียม",
                price: "฿299/เดือน",
                description: "ธุรกิจที่ต้องการเพิ่มความน่าเชื่อถือและควบคุมการแชร์ลิงก์",
                buttonText: "อัปเกรด",
                buttonVariant: "secondary",
                bgColor: "bg-primary",
                textColor: "text-white",
                borderColor: "border-primary",
                features: ["ติดตามสถิติการคลิกเบื้องต้น", "ลงคีย์เวิร์ดแบบของเรา", "ลงคีย์ไม่มีขยะมา", "ย่อลิงค์ได้ไม่จำกัดจำนวน"],
                disabledFeatures: ["รองรับ API สำหรับนักพัฒนา"],
              },
              {
                title: "แพ็กเกจสำหรับองค์กร",
                price: "ราคาพิเศษ",
                description: "เลือกราคาที่เหมาะสมกับขนาดธุรกิจของคุณ ติดต่อเราเพื่อขอใบเสนอราคา",
                buttonText: "ติดต่อฝ่ายขาย",
                buttonVariant: "default",
                bgColor: "bg-[#ebf7eb]",
                borderColor: "border-[#34c759]",
                features: [
                  "ติดตามสถิติการคลิกเบื้องต้น",
                  "ลงคีย์เวิร์ดแบบของเรา",
                  "ลงคีย์ไม่มีขยะมา",
                  "ย่อลิงค์ได้ไม่จำกัดจำนวน",
                  "รองรับ API สำหรับนักพัฒนา",
                ],
              },
            ].map((pkg, i) => (
              <Card
                key={i}
                className={`flex flex-col ${pkg.bgColor} border-2 ${pkg.borderColor} shadow-none
      ${i === 1 ? "md:scale-110 md:z-10" : ""}`}
              >
                <CardHeader className={`space-y-2 ${pkg.textColor || "text-gray-900"}`}>
                  <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                  <p className="text-sm opacity-90">{pkg.description}</p>
                  <p className="text-4xl font-bold mt-4">{pkg.price}</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-center">
                      <Check className={`mr-2 h-5 w-5 ${pkg.textColor || "text-primary"}`} />
                      <span className={pkg.textColor || "text-gray-600"}>{feature}</span>
                    </div>
                  ))}
                  {pkg.disabledFeatures?.map((feature, j) => (
                    <div key={j} className="flex items-center opacity-50">
                      <Check className="mr-2 h-5 w-5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant={pkg.buttonVariant}
                    className={`w-full ${pkg.buttonVariant === "secondary" ? "bg-white text-primary hover:bg-gray-100" : ""}`}
                  >
                    {pkg.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                {t.packages?.viewAllButton || "View All Packages"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Crypto Payments */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="mb-4 max-w-2xl mx-auto">
            {t.cryptoPayments?.title || "Enjoy seamless advertising and publishing with the ease of"}{" "}
            <strong>crypto payments</strong> -{" "}
            {t.cryptoPayments?.description || "fast, secure, and globally accessible!"}
          </p>
          <div className="flex justify-center gap-6">
            <Image src="/placeholder.svg?height=40&width=40" alt="Tether" width={40} height={40} />
            <Image src="/placeholder.svg?height=40&width=40" alt="TRON" width={40} height={40} />
          </div>
        </div>
      </section>
    </main>
  )
}

