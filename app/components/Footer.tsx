import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#AE1E23] py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <Image
          src="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/284e2242-3a48-4faa-97b1-15e202f64700/public"
          alt="Defense Associates Logo"
          width={50}
          height={50}
          className="h-12 w-auto mb-4"
        />
        <p className="text-center">&copy; {new Date().getFullYear()} Defense Associates. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

