"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider mb-4">Email Marketing</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ส่ง Email Marketing
                <br />
                ปลดปล่อยไอเดีย
                <br />
                การตลาด
              </h1>
              <p className="text-xl mb-8">
                ได้ลูกค้าใหม่ รักษาลูกค้าเดิม ด้วยการส่งข้อความ
                <br />
                ที่มีประสิทธิภาพ ราคาเริ่มต้นเพียง 0.04 บาท/อีเมล
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  ดูราคาแพ็กเกจ
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  ทดลองส่งฟรี
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute top-0 -right-20 w-[500px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uPd9zbJmjwiqM9BjjvOK9jWj79uyur.png"
                  alt="Email Marketing Preview"
                  width={500}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whitelist Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-primary mb-4">ขั้นตอนการขอ Whitelist</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <h2 className="text-4xl font-bold">
              4 ขั้นตอนง่ายๆ นี้
              <br />
              เพื่อรับสิทธิ์ Whitelist ได้เลย
            </h2>
            <p className="text-gray-600 text-lg">
              เพราะเราเข้าใจว่าคุณต้องการใช้ SMS ของคุณมีโอกาสส่งถึงผู้รับที่มากขึ้นสามารถ ทำตาม 4 ขั้นตอนง่ายๆ นี้ เพื่อรับสิทธิ์ Whitelist ได้เลย
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ซื้อแพ็คเกจ SMS ที่คุณสนใจ</h3>
              <p className="text-gray-600">เริ่มต้นใช้งานพร้อมยืนยันตัวตน ขอ Sender Name</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">กรอกแบบฟอร์ม Request</h3>
              <p className="text-gray-600">กรอกฟอร์ม Request เพื่อรับ Link การขอ Whitelist ผ่านทางอีเมล</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ระหว่างดำเนินการ</h3>
              <p className="text-gray-600">กำลังพิจารณาข้อมูลที่ยื่นเรื่องเข้ามา ใช้ระยะเวลา 1-3 วันทำการ</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">แจ้งอนุมัติใช้งาน</h3>
              <p className="text-gray-600">เมื่อได้รับแจ้งอนุมัติผ่านแล้ว สามารถใช้งานได้ทันที</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">SMS ราคาพิเศษ</h2>
              <p className="text-4xl font-bold mb-2">0.15 บาท/เครดิต</p>
              <p className="text-lg">หากสนใจ ติดต่อเราได้ทันที</p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm">อีเมล</p>
                <p className="text-xl font-semibold">Contact@thaibulksms.com</p>
              </div>
              <div>
                <p className="text-sm">เบอร์โทรศัพท์</p>
                <p className="text-xl font-semibold">02-798-6055</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="LINE QR Code"
                width={120}
                height={120}
                className="bg-white p-2 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Access Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">
                รับประกันการเข้าถึงกลุ่ม
                <br />
                ลูกค้าทั่วโลก
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                ช่วยให้ธุรกิจต่างๆสามารถส่งข้อความถึงกลุ่มลูกค้าได้ทั่วโลก
                มั่นใจได้ว่าข้อความของคุณจะถูกคุณและปลอดภัยในไม่มีข้องกังวลเกี่ยวกับความล่าช้าอันเนื่องมาจากเทคนิคของเครือข่าย
                หรือกฎระเบียบในการเผยแพร่ข้อมูลแต่ละประเทศ
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">เริ่มต้นใช้งานฟรี</Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-4xl font-bold text-blue-500 mb-2">190+</h3>
                    <p className="text-gray-600">ประเทศทั่วโลก</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h3 className="text-4xl font-bold text-blue-500 mb-2">800+</h3>
                    <p className="text-gray-600">รายทั่วโลก</p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-gray-600">มีความเสถียรและเชื่อถือได้ด้วยการเชื่อมต่อโดยตรงกับผู้ให้บริการเครือข่าย</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 -z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FOadFRmVJzWIZ9eUHCsDaKpCZfwL1G.png"
                  alt="World Map Network"
                  width={800}
                  height={600}
                  className="object-cover opacity-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">สินค้า</h2>
        <p>รายการสินค้าของเราจะถูกเพิ่มเร็วๆ นี้</p>
      </div>
    </main>
  )
}

