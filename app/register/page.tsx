"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, User, Mail, Lock, UserPlus, BarChart, Target, Zap, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export default function RegisterPage() {
  const [lang, setLang] = useState("th")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.register || {}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add registration logic here
    console.log("Registration submitted")
    // Redirect to login page after successful registration
    router.push("/login")
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff]">
      <div className="flex flex-col lg:flex-row flex-grow">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 bg-[#00B900] relative flex items-center justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/register-image.jpg`}
            alt="AdsOK Register"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-[#00B900] opacity-50"></div>
          <div className="absolute text-white text-center p-8 max-w-lg">
            <h2 className="text-4xl font-bold mb-4">{t.imageTitle || "Very good works are waiting for you"}</h2>
            <p className="text-xl">{t.imageSubtitle || "Register Now!!!"}</p>
          </div>
        </div>

        {/* Right side - Register Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <Image src="/logo-red.svg" alt="AdsOK Logo" width={150} height={150} className="mx-auto" />
              <h1 className="mt-6 text-3xl font-bold text-[#000000]">{t.title || "REGISTER"}</h1>
              <p className="mt-2 text-sm text-[#525252]">
                {t.subtitle || "How to i get started lorem ipsum dolor at?"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="username" className="sr-only">
                    {t.username || "Username"}
                  </Label>
                  <div className="relative">
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="pl-10 bg-[#f0edff]"
                      placeholder={t.usernamePlaceholder || "Username"}
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#525252]" size={18} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="sr-only">
                    {t.email || "Email"}
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="pl-10 bg-[#f0edff]"
                      placeholder={t.emailPlaceholder || "Email"}
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#525252]" size={18} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="password" className="sr-only">
                    {t.password || "Password"}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="pl-10 bg-[#f0edff]"
                      placeholder={t.passwordPlaceholder || "Password"}
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#525252]" size={18} />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-[#525252]" />
                      ) : (
                        <Eye className="h-4 w-4 text-[#525252]" />
                      )}
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="userType" className="sr-only">
                    {t.userType || "User Type"}
                  </Label>
                  <Select required>
                    <SelectTrigger id="userType" className="bg-[#f0edff]">
                      <SelectValue placeholder={t.userTypePlaceholder || "Select user type"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="advertiser">{t.advertiser || "Advertiser"}</SelectItem>
                      <SelectItem value="publisher">{t.publisher || "Publisher"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00B900] hover:bg-[#00B900]/90 text-white"
                icon={<UserPlus className="w-4 h-4 mr-2" />}
              >
                {t.registerButton || "Register Now"}
              </Button>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#d9d9d9]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-[#525252]">{t.orContinueWith || "Or continue with"}</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <FcGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FaFacebook className="mr-2 h-4 w-4 text-blue-600" />
                    Facebook
                  </Button>
                </div>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-[#525252]">
              {t.haveAccount || "Already have an account?"}{" "}
              <Link href="/login" className="font-semibold text-[#00B900] hover:text-[#00B900]/90">
                {t.login || "Login"}
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.features?.title || "Why Advertise with Us"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: t.features?.targeting?.title || "Precise Targeting",
                description:
                  t.features?.targeting?.description ||
                  "Reach your ideal audience with our advanced targeting options.",
              },
              {
                icon: BarChart,
                title: t.features?.analytics?.title || "Real-time Analytics",
                description:
                  t.features?.analytics?.description ||
                  "Get instant insights with our comprehensive real-time analytics.",
              },
              {
                icon: Zap,
                title: t.features?.performance?.title || "High Performance",
                description:
                  t.features?.performance?.description || "Achieve better ROI with our high-performing ad network.",
              },
              {
                icon: DollarSign,
                title: t.features?.costEffective?.title || "Cost-Effective",
                description:
                  t.features?.costEffective?.description ||
                  "Maximize your advertising budget with our competitive rates.",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

