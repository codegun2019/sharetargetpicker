"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Eye, EyeOff, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Apple, Facebook } from "lucide-react"
import { FcGoogle } from "react-icons/fc"

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

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.login || {}
  t.orContinueWith = t.orContinueWith || "หรือดำเนินการต่อด้วย"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add login logic here
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Card className="w-full max-w-5xl flex overflow-hidden">
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/login-image.jpg`}
            alt="AdsOK Login"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <CardHeader className="space-y-3">
            <div className="flex justify-center mb-6">
              <Image src="/logo-red.svg" alt="AdsOK Logo" width={150} height={150} priority className="h-auto" />
            </div>
            <h1 className="text-2xl font-bold text-center">{t.title || "Welcome to AdsOK Advertiser"}</h1>
            <p className="text-sm text-center text-gray-500">{t.subtitle || "Please log in and start your journey"}</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t.email || "Email"}</Label>
                <Input id="email" type="email" placeholder={t.emailPlaceholder || "Please enter your email"} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t.password || "Password"}</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder={t.passwordPlaceholder || "Please enter your password"}
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
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t.rememberMe || "Remember me"}
                  </label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  {t.forgotPassword || "Forgot password?"}
                </Link>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <LogIn className="w-4 h-4 mr-2" />
                {t.loginButton || "Login"}
              </Button>
            </form>
            {/* Social Login Buttons */}
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
              {t.noAccount || "Don't have an account?"}{" "}
              <Link href="/register" className="text-primary hover:underline">
                {t.createAccount || "Create account"}
              </Link>
            </p>
            <p className="text-xs text-gray-400">{t.copyright || "© 2025 AdsOK Advertiser"}</p>
          </CardFooter>
        </div>
      </Card>
    </main>
  )
}

