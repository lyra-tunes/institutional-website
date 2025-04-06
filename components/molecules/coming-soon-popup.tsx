"use client"

import { useState, useEffect } from "react"
import { X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ComingSoonPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ComingSoonPopup({ isOpen, onClose }: ComingSoonPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`bg-black border border-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 transform transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Coming Soon!</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="mb-6">
          <p className="text-gray-300 mb-4">
            Lyra Tunes is still in development. Check out our GitHub repository to follow our progress or contribute to
            the project.
          </p>
          <div className="flex items-center gap-2 p-3 bg-gray-900 rounded-md">
            <Github className="h-5 w-5 text-gray-400" />
            <span className="text-gray-300 text-sm">github.com/lyra-tunes/player</span>
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={onClose} className="bg-black hover:bg-gray-900 text-white border border-gray-700">
            Got it
          </Button>
        </div>
      </div>
    </div>
  )
}

