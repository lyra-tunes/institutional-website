"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComingSoonPopup } from "@/components/molecules/coming-soon-popup"

export function DownloadSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Download Lyra Tunes for iOS or Android and experience your media like never before.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          </div>
        </div>
      </section>

      <ComingSoonPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

