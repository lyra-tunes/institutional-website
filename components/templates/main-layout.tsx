import type React from "react"
import { Header } from "@/components/organisms/header"
import { Footer } from "@/components/organisms/footer"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

