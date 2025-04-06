"use client"

import { useState } from "react"
import { Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppLogo } from "@/components/atoms/app-logo"
import { NavLink } from "@/components/molecules/nav-link"
import { ComingSoonPopup } from "@/components/molecules/coming-soon-popup"

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 header-anim">
              <NavLink href="#hero"><AppLogo /></NavLink>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#demo">Demo</NavLink>
            </nav>
            <div className="flex items-center gap-3 header-anim">
              <a
                href="https://github.com/lyra-tunes/player"
                target="_blank"
                rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <Button
                size="sm"
                className="bg-[#1E90FF] hover:bg-[#1A7FE8] text-white"
                onClick={() => setIsPopupOpen(true)}
              >
                <Download className="w-4 h-4 mr-1" /> Download
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

