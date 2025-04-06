"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Headphones, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DonationSection() {
  const [customAmount, setCustomAmount] = useState("")
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)
  const headphonesRef = useRef<HTMLDivElement>(null)

  const handleDonationSelect = (amount: string) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const handleDonate = () => {
    const amount = selectedAmount || customAmount
    alert(`Processing $${amount} donation with Stripe. Thank you!`)
    // In a real implementation, this would connect to Stripe
  }

  return (
    <section id="donate" className="py-20 donate-section">
      <div className="container mx-auto px-10">
        <div className="max-w-3xl mx-auto bg-black border border-gray-800 rounded-lg p-8 text-center">
          <div
            ref={headphonesRef}
            className="w-16 h-16 rounded-full bg-[#1E90FF]/20 border border-[#1E90FF]/30 flex items-center justify-center mx-auto mb-6 donate-anim"
          >
            <Headphones className="w-8 h-8 text-[#1E90FF]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 donate-anim">Support Lyra Tunes</h2>
          <p className="text-gray-300 mb-8 donate-anim">
            Lyra Tunes is currently free to use. Your donations help us continue development and keep the app ad-free.
          </p>

          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-6 donate-anim">
              {["5", "10", "25"].map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? "default" : "outline"}
                  className={`
                    ${
                      selectedAmount === amount
                        ? "bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white"
                        : "border-gray-700 hover:bg-gray-900 text-gray-300"
                    }
                  `}
                  onClick={() => handleDonationSelect(amount)}
                >
                  ${amount}
                </Button>
              ))}
            </div>

            <div className="mb-6 donate-anim">
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="pl-10 bg-gray-900 border-gray-700 focus:border-[#1E90FF]/50 focus:ring-[#1E90FF]/20"
                />
              </div>
            </div>

            <Button
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount}
              className="w-full bg-[#1E90FF] hover:bg-[#1E90FF]/90 text-white donate-anim"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

