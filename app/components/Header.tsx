import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

const Header = () => {
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
        <Link href="/">
          <Image
            src="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/284e2242-3a48-4faa-97b1-15e202f64700/public"
            alt="Defense Associates Logo"
            width={100}
            height={100}
            className="h-24 w-auto"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-[#AE1E23] hover:text-[#E0E0E0] font-bold transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#AE1E23] hover:text-[#E0E0E0] font-bold transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#AE1E23] hover:text-[#E0E0E0] font-bold transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="text-[#AE1E23] hover:text-[#E0E0E0] font-bold transition-colors duration-300"
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

