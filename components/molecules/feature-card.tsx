import type React from "react"
import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  ref?: React.RefObject<HTMLDivElement>
  onRef?: (el: HTMLDivElement | null) => void
}

export function FeatureCard({ title, description, icon, onRef }: FeatureCardProps) {
  return (
    <div ref={onRef ? (el) => onRef(el) : undefined} className="flex gap-6">
      <div className="feature-icon w-16 h-16 rounded-full bg-[#1E90FF]/20 flex items-center justify-center flex-shrink-0 border border-[#1E90FF]/30">
        {icon}
      </div>
      <div className="feature-content relative">
        <div className="absolute -right-2 -top-2">
          <Badge className="bg-yellow-600 text-xs">Coming Soon</Badge>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

