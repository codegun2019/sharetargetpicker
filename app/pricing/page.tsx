"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export default function PricingPage() {
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const t = translations[lang]?.pricing || {}

  const packages = [
    {
      name: t.basic?.name || "Basic",
      price: {
        monthly: t.basic?.price?.monthly || "$99",
        annually: t.basic?.price?.annually || "$990",
      },
      description: t.basic?.description || "Perfect for small businesses and startups",
      features: [
        t.basic?.features?.[0] || "Up to 10,000 ad impressions",
        t.basic?.features?.[1] || "Basic targeting options",
        t.basic?.features?.[2] || "Standard analytics",
        t.basic?.features?.[3] || "Email support",
      ],
    },
    {
      name: t.pro?.name || "Pro",
      price: {
        monthly: t.pro?.price?.monthly || "$299",
        annually: t.pro?.price?.annually || "$2,990",
      },
      description: t.pro?.description || "Ideal for growing businesses",
      features: [
        t.pro?.features?.[0] || "Up to 100,000 ad impressions",
        t.pro?.features?.[1] || "Advanced targeting options",
        t.pro?.features?.[2] || "Real-time analytics",
        t.pro?.features?.[3] || "Priority email and chat support",
        t.pro?.features?.[4] || "A/B testing",
      ],
    },
    {
      name: t.enterprise?.name || "Enterprise",
      price: {
        monthly: t.enterprise?.price?.monthly || "Custom",
        annually: t.enterprise?.price?.annually || "Custom",
      },
      description: t.enterprise?.description || "For large-scale advertising campaigns",
      features: [
        t.enterprise?.features?.[0] || "Unlimited ad impressions",
        t.enterprise?.features?.[1] || "Custom targeting solutions",
        t.enterprise?.features?.[2] || "Advanced analytics and reporting",
        t.enterprise?.features?.[3] || "24/7 dedicated support",
        t.enterprise?.features?.[4] || "API access",
        t.enterprise?.features?.[5] || "Custom integrations",
      ],
    },
  ]

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">{t.title || "Choose Your Plan"}</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          {t.subtitle || "Select the perfect package for your advertising needs"}
        </p>

        <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="monthly">{t.monthly || "Monthly"}</TabsTrigger>
            <TabsTrigger value="annually">{t.annually || "Annually"}</TabsTrigger>
          </TabsList>
          <TabsContent value="monthly">
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`flex flex-col ${index === 1 ? "border-primary md:scale-110 md:z-10" : ""}`}
                >
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <p className="text-3xl font-bold">{pkg.price.monthly}</p>
                    <p className="text-sm text-gray-500">{t.perMonth || "per month"}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                      {index === 2 ? t.contactUs || "Contact Us" : t.choosePlan || "Choose Plan"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="annually">
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`flex flex-col ${index === 1 ? "border-primary md:scale-110 md:z-10" : ""}`}
                >
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <p className="text-3xl font-bold">{pkg.price.annually}</p>
                    <p className="text-sm text-gray-500">{t.perYear || "per year"}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                      {index === 2 ? t.contactUs || "Contact Us" : t.choosePlan || "Choose Plan"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">{t.faqTitle || "Frequently Asked Questions"}</h2>
          <p className="text-gray-600 mb-8">{t.faqSubtitle || "Find answers to common questions about our packages"}</p>
          <Link href="/faq">
            <Button variant="outline">{t.viewFaq || "View FAQ"}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

