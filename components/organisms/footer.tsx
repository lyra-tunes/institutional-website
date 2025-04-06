import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AppLogo } from "@/components/atoms/app-logo"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Link href="#hero"><AppLogo /></Link>
          </div>

          <nav className="flex flex-wrap gap-6 justify-center mb-4 md:mb-0">
            <Link href="#features" className="text-sm text-gray-400 hover:text-[#1E90FF]">
              Features
            </Link>
            <Link href="#demo" className="text-sm text-gray-400 hover:text-[#1E90FF]">
              Demo
            </Link>
          </nav>

          <div className="flex gap-4">
            <a
              href="https://github.com/lyra-tunes/player"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Lyra Tunes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

