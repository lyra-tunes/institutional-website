"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MainLayout } from "@/components/templates/main-layout"
import { HeroSection } from "@/components/organisms/hero-section"
import { FeaturesSection } from "@/components/organisms/features-section"
import { DemoSection } from "@/components/organisms/demo-section"
import { DonationSection } from "@/components/organisms/donation-section"
import { DownloadSection } from "@/components/organisms/download-section"

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Header animation
    gsap.from(".header-anim", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    })

    // Hero animations
    const heroTl = gsap.timeline()
    heroTl.from(".hero-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })
    heroTl.from(
      ".hero-badge",
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.4",
    )
    heroTl.from(
      ".hero-desc",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3",
    )
    heroTl.from(
      ".hero-buttons",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.4",
    )
    heroTl.from(
      ".hero-app",
      {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6",
    )
    heroTl.from(
      ".contributor",
      {
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.4,
        ease: "power1.out",
      },
      "-=0.4",
    )

    // Enhance blue glow
    gsap.to(".hero-glow", {
      opacity: 0.7,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Demo animation
    gsap.from(".demo-anim", {
      scrollTrigger: {
        trigger: ".demo-section",
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    })

    // Donation animation
    gsap.from(".donate-anim", {
      scrollTrigger: {
        trigger: ".donate-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    })

    // Pulsing headphones icon
    const headphonesEl = document.querySelector(".donate-section .w-16.h-16")
    if (headphonesEl) {
      gsap.to(headphonesEl, {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <DownloadSection />
    </MainLayout>
  )
}

