import type React from "react"
import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <Link href={href} className={`text-sm text-gray-400 hover:text-white transition-colors header-anim ${className}`}>
      {children}
    </Link>
  )
}

