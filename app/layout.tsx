import "./globals.css"
import type { Metadata } from "next"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { HeaderProvider } from "./contexts/HeaderContext"

export const metadata: Metadata = {
  title: "Defense Associates",
  description: "Army Business Development Services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <HeaderProvider>
        <body className="flex flex-col min-h-screen bg-[#1A1A1A] text-[#AE1E23]">
          <Header show={false} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </HeaderProvider>
    </html>
  )
}

