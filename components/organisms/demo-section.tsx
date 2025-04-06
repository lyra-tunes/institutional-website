"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="demo" className="py-20 bg-black demo-section">
      <div className="container mx-auto px-10">
        <div className="text-center mb-16 demo-anim">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See It In Action</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Watch how Lyra Tunes transforms your media experience.</p>
        </div>

        <div className="max-w-4xl mx-auto demo-anim">
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="rounded-full w-16 h-16 bg-black/80 hover:bg-black border border-gray-700"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play className="w-6 h-6 text-white" fill="white" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Lyra Tunes Demo</h3>
                <p className="text-gray-300">See the beautiful interface and smooth playback in action</p>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=720&width=1280&text=Demo+Video"
              alt="Lyra Tunes Demo"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

