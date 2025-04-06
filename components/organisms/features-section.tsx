"use client"

import { useRef, useEffect } from "react"
import { Music, Video, List, Clock, Heart, Settings } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  const addToFeatureRefs = (el: HTMLDivElement | null, index: number) => {
    featureRefs.current[index] = el
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Create a single timeline for all features
    const featuresTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%", // Start animation when the top of the section reaches 85% from the top of viewport
        toggleActions: "play none none none", // Play once when enters view
      },
    })

    // Add each feature to the timeline with staggered delay
    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        const iconEl = ref.querySelector(".feature-icon")
        const contentEl = ref.querySelector(".feature-content")

        featuresTl.from(
          iconEl,
          {
            x: -50,
            y: 50,
            opacity: 0,
            rotation: -180,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          index * 0.1,
        ) // Stagger the start time

        featuresTl.from(
          contentEl,
          {
            opacity: 0,
            x: 30,
            duration: 0.5,
            ease: "power2.out",
          },
          "<+=0.2", // Start slightly after the icon animation begins
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const features = [
    {
      icon: <Music className="w-8 h-8 text-[#1E90FF]" />,
      title: "MP3 Support",
      description: "Play all your favorite music with support for MP3, FLAC, WAV, and other popular audio formats.",
    },
    {
      icon: <Video className="w-8 h-8 text-[#1E90FF]" />,
      title: "MP4 Support",
      description: "Watch videos in MP4, MKV, AVI formats with smooth playback and subtitle support.",
    },
    {
      icon: <List className="w-8 h-8 text-[#1E90FF]" />,
      title: "Playlists",
      description: "Create and manage playlists to organize your media collection just the way you like it.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#1E90FF]" />,
      title: "Playback History",
      description: "Keep track of your recently played media and continue where you left off.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#1E90FF]" />,
      title: "Favorites",
      description: "Mark your favorite songs and videos for quick access anytime.",
    },
    {
      icon: <Settings className="w-8 h-8 text-[#1E90FF]" />,
      title: "Equalizer",
      description: "Fine-tune your audio with a built-in equalizer for the perfect sound experience.",
    },
  ]

  return (
    <section id="features" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Designed for music and video lovers with powerful features and beautiful interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} ref={(el) => addToFeatureRefs(el, index)} className="flex gap-6">
              <div className="feature-icon w-16 h-16 rounded-full bg-[#1E90FF]/20 flex items-center justify-center flex-shrink-0 border border-[#1E90FF]/30">
                {feature.icon}
              </div>
              <div className="feature-content relative">
                <div className="absolute -right-2 -top-2">
                  <div className="bg-yellow-600 text-xs px-2 py-0.5 rounded-md text-white">Coming Soon</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

