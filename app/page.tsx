"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [showLogo, setShowLogo] = useState(true)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center -mt-20">
        <AnimatePresence mode="wait">
          {showLogo ? (
            <motion.div
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/26165975-d8dd-4acc-f25f-e63ea3fccc00/public"
                alt="Defense Associates Full Logo"
                width={600}
                height={150}
              />
            </motion.div>
          ) : (
            <motion.section
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-5xl font-bold mb-6 text-black">Who We Are</h2>
              <div className="flex justify-center mb-4">
                <Shield size={48} className="text-[#AE1E23]" />
              </div>
              <div className="p-8">
                <p className="text-lg leading-relaxed text-[#AE1E23] italic">
                  Defense Associates is a Service-Disabled, Veteran-Owned Small Business providing marketing and
                  business development consulting services to technical firms in Huntsville, Alabama. We deliver
                  responsive and scalable solutions for marketing and business development support. We will custom
                  tailor your technology solution to meet critical Army capabilities gaps. Use our expertise to enhance
                  your solutions to Army and Department of Defense customers.
                </p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h2 className="text-5xl font-bold mb-6 text-center text-black">Business Development Services</h2>
        <div className="flex justify-center mb-4">
          <Briefcase size={48} className="text-[#AE1E23]" />
        </div>
        <div className="p-8 text-center">
          <p className="text-lg leading-relaxed mb-6 indent-8 italic text-[#AE1E23]">
            We offer business development support to a wide range of contract firms in the Huntsville, Alabama region.
            Our insider's perspective on Army Aviation programs is based upon our first-hand experience in the cockpit.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#AE1E23] hover:bg-[#8A181C] text-[#E0E0E0] font-bold py-2 px-4 rounded-full transition-colors duration-300">
              <Mail className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

