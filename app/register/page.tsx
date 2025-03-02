"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Apple, Facebook, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FcGoogle } from "react-icons/fc"

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
  t.orContinueWith = t.orContinueWith || "หรือดำเนินการต่อด้วย"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add registration logic here
    console.log("Registration submitted")
    // Redirect to login page after successful registration
    router.push("/login")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-5xl flex overflow-hidden">
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/register-image.jpg`}
            alt="AdsOK Register"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-6">
              <Image src="/logo-red.svg" alt="AdsOK Logo" width={150} height={150} priority className="h-auto" />
            </div>
            <h1 className="text-2xl font-bold text-center">{t.title || "สมัครสมาชิก"}</h1>
            <p className="text-sm text-center text-gray-500">{t.subtitle || "สร้างบัญชีของคุณและเริ่มต้นการเดินทางกับเรา"}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">{t.firstName || "ชื่อ"}</Label>
                  <Input id="firstName" placeholder={t.firstNamePlaceholder || "กรุณากรอกชื่อ"} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">{t.lastName || "นามสกุล"}</Label>
                  <Input id="lastName" placeholder={t.lastNamePlaceholder || "กรุณากรอกนามสกุล"} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.email || "อีเมล"}</Label>
                <Input id="email" type="email" placeholder={t.emailPlaceholder || "กรุณากรอกอีเมล"} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t.password || "รหัสผ่าน"}</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t.passwordPlaceholder || "กรุณากรอกรหัสผ่าน"}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="userType">{t.userType || "ประเภทผู้ใช้"}</Label>
                <Select required>
                  <SelectTrigger id="userType">
                    <SelectValue placeholder={t.userTypePlaceholder || "เลือกประเภทผู้ใช้"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advertiser">{t.advertiser || "ผู้ลงโฆษณา"}</SelectItem>
                    <SelectItem value="publisher">{t.publisher || "เจ้าของเว็บไซต์"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                icon={<UserPlus className="w-4 h-4" />}
              >
                {t.registerButton || "สมัครสมาชิก"}
              </Button>
            </form>
            {/* Social Sign Up Buttons */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    {t.orContinueWith || "หรือดำเนินการต่อด้วย"}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Button variant="outline" className="w-full">
                  <Apple className="mr-2 h-4 w-4" />
                  Apple
                </Button>
                <Button variant="outline" className="w-full">
                  <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                  Facebook
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-center">
            <p className="text-sm text-gray-500">
              {t.haveAccount || "มีบัญชีอยู่แล้ว?"}{" "}
              <Link href="/login" className="text-primary hover:underline">
                {t.login || "เข้าสู่ระบบ"}
              </Link>
            </p>
            <p className="text-xs text-gray-400">{t.copyright || "© 2025 AdsOK. สงวนลิขสิทธิ์"}</p>
          </CardFooter>
        </div>
      </Card>
    </main>
  )
}

