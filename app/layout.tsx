import type React from "react"
import type { Metadata } from "next"
import { Prompt } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"
import { PrivacyPolicyPopup } from "@/components/privacy-policy-popup"

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
})

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | AdsOK - แพลตฟอร์มโฆษณาออนไลน์",
  description: "เรียนรู้เพิ่มเติมเกี่ยวกับ AdsOK แพลตฟอร์มโฆษณาออนไลน์ที่จะช่วยให้ธุรกิจของคุณเติบโต",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} font-sans`}>
        <Header />
        <main className="pt-16">
          {" "}
          {/* Add padding-top here */}
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <PrivacyPolicyPopup />
      </body>
    </html>
  )
}



import './globals.css'