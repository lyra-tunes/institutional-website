"use client"

import { useState } from "react"
import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VersionBadge } from "@/components/atoms/version-badge"
import { ComingSoonPopup } from "@/components/molecules/coming-soon-popup"

export function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-[#0A0A0A] relative overflow-hidden">
        {/* Enhanced blue glow */}
        <div className="hero-glow absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#1E90FF] rounded-full filter blur-[150px] opacity-20 transform -translate-y-1/2 translate-x-1/4"></div>

        <div className="container mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <VersionBadge version="v1.0" type="version" />
                <VersionBadge version="Upcoming" type="upcoming" />
              </div>
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span>Playing</span> anything. <span className="text-[#1E90FF]">Anywhere</span>
              </h1>
              <p className="hero-desc text-lg text-gray-400 mb-8">
                A modern, beautiful media player for iOS and Android. Play your favorite music and videos with style.
              </p>

              <div className="flex flex-wrap gap-4 hero-buttons mb-12">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white border border-gray-800 relative overflow-hidden group"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1E90FF]/0 via-[#1E90FF]/30 to-[#1E90FF]/0 -translate-x-full animate-shimmer group-hover:animate-shimmer"></span>
                  <Download className="mr-2 h-5 w-5 text-[#1E90FF]" />
                  <span>Download for iOS</span>
                </Button>
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white border border-gray-800 relative overflow-hidden group"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1E90FF]/0 via-[#1E90FF]/30 to-[#1E90FF]/0 -translate-x-full animate-shimmer group-hover:animate-shimmer"></span>
                  <Download className="mr-2 h-5 w-5 text-[#1E90FF]" />
                  <span>Download for Android</span>
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-sm text-gray-400">Made with ❤️ by our contributors</div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="contributor w-8 h-8 rounded-full overflow-hidden border-2 border-gray-800">
                      <Image
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        alt={`Contributor ${i}`}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hero-app relative items-center justify-center flex">
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-300 hover:scale-105" style={{ maxWidth: '337px' }}>
                <img src="images/phone.png" alt="Lyra Tunes App Interface"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

