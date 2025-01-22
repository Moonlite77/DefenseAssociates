import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#AE1E23] py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Image
            src="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/284e2242-3a48-4faa-97b1-15e202f64700/public"
            alt="Defense Associates Logo"
            width={50}
            height={50}
            className="h-12 w-auto"
          />
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Defense Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

