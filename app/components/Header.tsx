"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, Menu, X } from "lucide-react"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-[#1A1A1A]">
      <div className="container mx-auto px-4 py-1 justify-between items-center text-[#E0E0E0] text-sm hidden md:flex">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Mail size={16} className="mr-2" />
            contact@defenseassociates.us
          </span>
          <span className="flex items-center">
            <Phone size={16} className="mr-2" />
            256-933-8773
          </span>
        </div>
        <div>Army Business Development Services</div>
      </div>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="hidden md:block">
          <Image
            src="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/284e2242-3a48-4faa-97b1-15e202f64700/public"
            alt="Defense Associates Logo"
            width={100}
            height={100}
            className="h-24 w-auto"
          />
        </Link>
        <button
          className="md:hidden text-[#AE1E23] z-50"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          className={`
          ${mobileMenuOpen ? "flex" : "hidden"} 
          md:flex 
          flex-col 
          md:flex-row 
          absolute 
          md:relative 
          top-0 
          left-0 
          right-0 
          bg-[#1A1A1A] 
          md:bg-transparent 
          p-4 
          md:p-0 
          mt-16 
          md:mt-0 
          z-40
        `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <li>
              <Link
                href="/"
                className="text-[#AE1E23] hover:text-[#E0E0E0] font-bold transition-colors duration-300 block py-2 md:py-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#AE1E23] hover:text-[#E0E0E0] font-bold transition-colors duration-300 block py-2 md:py-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#AE1E23] hover:text-[#E0E0E0] font-bold transition-colors duration-300 block py-2 md:py-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="text-[#AE1E23] hover:text-[#E0E0E0] font-bold transition-colors duration-300 block py-2 md:py-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

