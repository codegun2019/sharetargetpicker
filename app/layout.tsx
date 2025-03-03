import type React from "react"
import type { Metadata } from "next"
import { Anuphan } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoToTopButton } from "@/components/go-to-top-button"
import { FloatingContactButtons } from "@/components/floating-contact-buttons"

const anuphan = Anuphan({
  subsets: ["latin", "thai"],
  display: "swap",
  variable: "--font-anuphan",
})

export const metadata: Metadata = {
  title: "AdsOK",
  description: "AdsOK - Your Advertising Solution",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={anuphan.variable}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <GoToTopButton />
        <FloatingContactButtons />
      </body>
    </html>
  )
}



import './globals.css'