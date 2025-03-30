"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { CheckCircle, Zap, Shield, Headphones, CreditCard, BarChart, Check, ArrowRight, Phone } from "lucide-react"
import { Users, DollarSign, QrCode } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css"
import "swiper/css/navigation"

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
  const [currency, setCurrency] = useState("THB")

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

  const [swiper, setSwiper] = useState(null)

  const slideNext = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  const slidePrev = () => {
    if (swiper) {
      swiper.slidePrev()
    }
  }

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency)
  }

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
                  className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 gap-2"
                  icon={<Zap className="w-5 h-5" />}
                >
                  เริ่มต้นเลย
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-semibold px-8 gap-2"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  เรียนรู้เพิ่มเติม
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Image
                src="deupoad-feature-screen 1.png"
                alt="AdsOK Platform"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-lg"
              />
              <Image
                src="deupload-feature-mobile 2.png"
                alt="AdsOK Platform"
                width={150}
                height={224}
                className="absolute -bottom-12 -right-1"
              />
              <div className="absolute -bottom-6 -left-7 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-primary font-bold text-xl">1,000,000+</p>
                <p className="text-gray-600">เข้าถึงกลุ่มเป้าหมาย</p>
              </div>
              <div className="absolute -bottom-13 -right-3 bg-white p-4 rounded-lg shadow-lg">
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
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2" icon={<Zap className="w-4 h-4" />}>
                  {t.whyChoose?.cta1 || "Get Started"}
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-red-50 gap-2"
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
                src="/header_group.png"
                alt="Mobile App"
                width={650}
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
                <Users className="w-16 h-16 text-primary" />
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
                <DollarSign className="w-16 h-16 text-white" />
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

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <QrCode className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {t.whatIsAdsOK?.qrCode?.title || "Easy Integration"}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {t.whatIsAdsOK?.qrCode?.description ||
                  "Seamlessly integrate our ad platform into your website or app with our user-friendly QR code system."}
              </p>
              <div className="text-center">
                <Link href="/integration" className="text-primary font-medium hover:underline">
                  {t.whatIsAdsOK?.cta || "Get Started"}
                </Link>
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

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-primary/90 to-primary relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-[#20b526] font-medium uppercase mb-2">TESTIMONIAL</p>
              <h2 className="text-4xl font-bold text-white">What Our Customer Says</h2>
            </div>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={setSwiper}
            >
              {[
                {
                  name: "Robert Fox",
                  image: "/placeholder.svg?height=60&width=60",
                  text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
                },
                {
                  name: "Dianne Russell",
                  image: "/placeholder.svg?height=60&width=60",
                  text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
                },
                {
                  name: "Eleanor Pena",
                  image: "/placeholder.svg?height=60&width=60",
                  text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
                },
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-[#20b526] text-4xl mb-4">"</div>
                    <p className="text-[#4d4d4d] mb-6">{testimonial.text}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-[#999999]">Customer</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#ff8a00]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={slidePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#20b526] transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={slideNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#20b526] flex items-center justify-center text-white hover:bg-white hover:text-[#20b526] transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-10 -left-10 opacity-20">
            <Image src="/placeholder.svg?height=150&width=150" alt="Decorative leaf" width={150} height={150} />
          </div>
          <div className="absolute -top-10 -right-10 opacity-20">
            <Image src="/placeholder.svg?height=150&width=150" alt="Decorative leaf" width={150} height={150} />
          </div>
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
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2" icon={<Zap className="w-4 h-4" />}>
                  {t.cta?.cta1 || "Sign Up Now"}
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-red-50 gap-2"
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

      {/* Packages Section - Updated to match the design */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-primary uppercase font-medium mb-2">{t.packages?.subtitle || "PRICING"}</p>
            <h2 className="text-4xl font-bold mb-4">{t.packages?.title || "Our pricing plans"}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.packages?.description || "Choose the perfect package for your advertising needs"}
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
              <button
                className={`px-4 py-2 rounded-full ${currency === "THB" ? "bg-primary text-white" : "text-gray-700"}`}
                onClick={() => handleCurrencyChange("THB")}
              >
                THB
              </button>
              <button
                className={`px-4 py-2 rounded-full ${currency === "USD" ? "bg-primary text-white" : "text-gray-700"}`}
                onClick={() => handleCurrencyChange("USD")}
              >
                USD
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">สำหรับผู้เริ่มต้น</p>
                    <h3 className="text-xl font-bold">Basic</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">เหมาะสำหรับผู้เริ่มต้นที่ต้องการทดลองใช้งานระบบ</p>

                <div className="mb-6">
                  <p className="text-5xl font-bold">{currency === "THB" ? "฿999" : "$29"}</p>
                  <p className="text-gray-600">/เดือน</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-4">สิ่งที่คุณจะได้รับ</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>การแสดงโฆษณาสูงสุด 250,000 ครั้ง</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>ตัวเลือกการกำหนดเป้าหมายพื้นฐาน</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>การวิเคราะห์มาตรฐาน</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>สมาชิกในทีมสูงสุด 3 คน</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-white border border-primary text-primary hover:bg-primary hover:text-white">
                  เริ่มต้นใช้งาน
                </Button>
              </div>
            </div>

            {/* Pro Package */}
            <div className="bg-primary rounded-xl border-2 border-primary overflow-hidden shadow-md transform md:scale-105 relative">
              <div className="absolute top-0 right-0">
                <div className="bg-white/20 text-white text-xs px-4 py-1 rounded-bl-lg font-medium">ยอดนิยม</div>
              </div>
              <div className="p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/80">สำหรับธุรกิจขนาดกลาง</p>
                    <h3 className="text-xl font-bold">Pro</h3>
                  </div>
                </div>

                <p className="text-white/80 mb-6">เหมาะสำหรับธุรกิจที่ต้องการเติบโตอย่างรวดเร็ว</p>

                <div className="mb-6">
                  <p className="text-5xl font-bold">{currency === "THB" ? "฿2,999" : "$89"}</p>
                  <p className="text-white/80">/เดือน</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-4">สิ่งที่คุณจะได้รับ</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-white mr-2" />
                      <span>การแสดงโฆษณาสูงสุด 1,000,000 ครั้ง</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-white mr-2" />
                      <span>ตัวเลือกการกำหนดเป้าหมายขั้นสูง</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-white mr-2" />
                      <span>การวิเคราะห์แบบเรียลไทม์</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-white mr-2" />
                      <span>สมาชิกในทีมสูงสุด 10 คน</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-gray-100">เริ่มต้นใช้งาน</Button>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">สำหรับองค์กรขนาดใหญ่</p>
                    <h3 className="text-xl font-bold">Enterprise</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">เหมาะสำหรับองค์กรขนาดใหญ่ที่ต้องการโซลูชันแบบครบวงจร</p>

                <div className="mb-6">
                  <p className="text-5xl font-bold">{currency === "THB" ? "฿9,999" : "$299"}</p>
                  <p className="text-gray-600">/เดือน</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-4">สิ่งที่คุณจะได้รับ</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>การแสดงโฆษณาไม่จำกัด</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>โซลูชันการกำหนดเป้าหมายแบบกำหนดเอง</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>การวิเคราะห์และการรายงานขั้นสูง</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>สมาชิกในทีมไม่จำกัด</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-white border border-primary text-primary hover:bg-primary hover:text-white">
                  ติดต่อฝ่ายขาย
                </Button>
              </div>
            </div>
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

