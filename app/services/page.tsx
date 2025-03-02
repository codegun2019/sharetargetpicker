"use client"

import { useState, useEffect } from "react"
import { Check, MessageSquare, MessagesSquare, Zap, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

// Import translations
import th from "@/locales/th.json"
import en from "@/locales/en.json"

const translations = { th, en }

export default function ServicesPage() {
  const [lang, setLang] = useState("th")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "th"
    setLang(savedLang)
  }, [])

  const starterPackages = [
    {
      price: "฿1,500",
      standard: {
        pricePerSms: "0.49",
        credits: "3,061",
        otp: false,
      },
      corporate: {
        pricePerSms: "0.58",
        credits: "2,586",
        otp: true,
      },
      validity: "12",
      users: "5",
    },
    {
      price: "฿3,500",
      tag: "ยอดนิยม",
      tagColor: "bg-primary",
      standard: {
        pricePerSms: "0.41",
        credits: "8,537",
        otp: false,
      },
      corporate: {
        pricePerSms: "0.48",
        credits: "7,292",
        otp: true,
      },
      validity: "12",
      users: "10",
    },
    {
      price: "฿10,000",
      standard: {
        pricePerSms: "0.37",
        credits: "27,027",
        otp: false,
      },
      corporate: {
        pricePerSms: "0.43",
        credits: "23,256",
        otp: true,
      },
      validity: "24",
      users: "15",
    },
    {
      price: "฿30,000",
      tag: "ยอดนิยม",
      tagColor: "bg-yellow-400",
      standard: {
        pricePerSms: "0.32",
        credits: "93,750",
        otp: false,
      },
      corporate: {
        pricePerSms: "0.38",
        credits: "78,947",
        otp: true,
      },
      validity: "24",
      users: "ไม่จำกัด",
    },
  ]

  const features = [
    {
      icon: MessageSquare,
      title: "SMS Tracking",
      description: "ติดตามสถานะการส่ง SMS แบบเรียลไทม์",
    },
    {
      icon: MessagesSquare,
      title: "SMS API",
      description: "ระบบ API ที่ใช้งานง่าย รองรับทุกแพลตฟอร์ม",
    },
    {
      icon: Zap,
      title: "SMS Automation",
      description: "ระบบส่ง SMS อัตโนมัติตามเงื่อนไขที่กำหนด",
    },
    {
      icon: ShieldCheck,
      title: "OTP Ready to Use",
      description: "ระบบ OTP พร้อมใช้งาน ปลอดภัย น่าเชื่อถือ",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cyan-400 to-cyan-500 py-16 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SMS ราคาถูก</h1>
          <p className="text-xl mb-8">ต่ำกว่า 0.15 บาท/เครดิต</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Standard SMS</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>ส่งข้อความทั่วไป</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>เหมาะสำหรับการส่งข้อความทั่วไป</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Corporate SMS</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    <span>ส่งในนามองค์กร</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    <span>เพิ่มความน่าเชื่อถือให้ธุรกิจ</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            เลือกแพ็กเกจที่คุณต้องการ
            <br />
            <span className="text-gray-600">ตามปริมาณที่ใช้งานจริง</span>
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Starter Package</TableHead>
                  {starterPackages.map((pkg, index) => (
                    <TableHead key={index} className="text-center">
                      <div className="relative">
                        {pkg.tag && (
                          <span
                            className={`absolute -top-3 right-0 ${pkg.tagColor} text-white text-xs px-2 py-0.5 rounded-full`}
                          >
                            {pkg.tag}
                          </span>
                        )}
                        <div className="text-xl font-bold text-primary">{pkg.price}</div>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Standard SMS</TableCell>
                  {starterPackages.map((pkg, index) => (
                    <TableCell key={index} className="text-center">
                      <div className="space-y-2">
                        <div className="text-lg font-bold">{pkg.standard.pricePerSms}</div>
                        <div className="text-sm text-gray-500">{pkg.standard.credits} เครดิต</div>
                        <Button variant="outline" className="w-full">
                          ซื้อเลย
                        </Button>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Corporate SMS</TableCell>
                  {starterPackages.map((pkg, index) => (
                    <TableCell key={index} className="text-center">
                      <div className="space-y-2">
                        <div className="text-lg font-bold">{pkg.corporate.pricePerSms}</div>
                        <div className="text-sm text-gray-500">{pkg.corporate.credits} เครดิต</div>
                        <Button variant="outline" className="w-full">
                          ซื้อเลย
                        </Button>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">อายุการใช้งาน (เดือน)</TableCell>
                  {starterPackages.map((pkg, index) => (
                    <TableCell key={index} className="text-center" key={index}>
                      {pkg.validity}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">จำนวนชื่อผู้ส่ง</TableCell>
                  {starterPackages.map((pkg, index) => (
                    <TableCell key={index} className="text-center" key={index}>
                      {pkg.users}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">SMS Tracking</TableCell>
                  {starterPackages.map((pkg, index) => (
                    <TableCell key={index} className="text-center" key={index}>
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">รายงานการใช้งานรายเดือน</TableCell>
                  {starterPackages.map((pkg, index) => (
                    <TableCell key={index} className="text-center" key={index}>
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <ul className="list-disc list-inside space-y-1">
              <li>ราคาแพ็กเกจยังไม่รวมภาษีมูลค่าเพิ่ม</li>
              <li>กรณีซื้อจากการค้าปลีก คิดภาษี 3% ต้องซื้อขั้นต่ำมูลค่าเท่าไร</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden">
            <div className="bg-primary text-white p-8 md:p-12">
              <div className="md:max-w-[50%]">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">สั่งซื้อครั้งแรกลดทันที!</h2>
                <p className="text-5xl md:text-6xl font-bold mb-6">20%</p>
                <Button variant="secondary" size="lg">
                  ซื้อเลย
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 hidden md:block">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Promotion"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ส่ง SMS ได้ทุกจุดประสงค์
            <br />
            ในแพลตฟอร์มเดียว
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

