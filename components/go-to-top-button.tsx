"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    toggleVisibility() // Check initial state

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-6 right-6 z-50 bg-[#20b526] hover:bg-[#00b207] text-white rounded-full p-3 shadow-lg transition-all duration-300 animate-bounce"
          onClick={scrollToTop}
        >
          <ArrowUp size={24} />
        </Button>
      )}
    </>
  )
}

