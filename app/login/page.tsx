"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Eye, EyeOff, User, Lock, BarChart, Target, Zap, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add login logic here
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 bg-primary relative flex items-center justify-center">
          <div className="relative z-10 text-white p-8 max-w-md">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8">
              <h2 className="text-4xl font-bold mb-4">
                {t.welcomeMessage || "Very good works are waiting for you Login Now!!!"}
              </h2>
              <div className="flex justify-center mt-8">
                <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="#FFD700" stroke="#FFD700" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Login"
              width={400}
              height={600}
              className="absolute bottom-0 right-0 z-10"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 z-0"></div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold uppercase">{t.title || "LOGIN"}</h1>
              <p className="text-gray-600 mt-2">{t.subtitle || "How to i get started lorem ipsum dolor at?"}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="username"
                  type="text"
                  placeholder={t.usernamePlaceholder || "Username"}
                  className="pl-10 bg-[#f0edff] border-0 rounded-full py-6"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.passwordPlaceholder || "Password"}
                  className="pl-10 bg-[#f0edff] border-0 rounded-full py-6"
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

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6">
                {t.loginButton || "Login Now"}
              </Button>

              <div className="text-center">
                <p className="text-gray-600 font-medium">{t.orContinueWith || "Login with Others"}</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Button variant="outline" className="w-full rounded-full py-6 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  {t.loginWithGoogle || "Login with google"}
                </Button>

                <Button variant="outline" className="w-full rounded-full py-6 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  {t.loginWithFacebook || "Login with Facebook"}
                </Button>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  {t.noAccount || "Don't have an account?"}{" "}
                  <Link href="/register" className="text-primary font-medium hover:underline">
                    {t.createAccount || "Create account"}
                  </Link>
                </p>
              </div>
            </form>
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

