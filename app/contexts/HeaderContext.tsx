"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"

interface HeaderContextType {
  showHeader: boolean
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false)

  return <HeaderContext.Provider value={{ showHeader, setShowHeader }}>{children}</HeaderContext.Provider>
}

export const useHeader = () => {
  const context = useContext(HeaderContext)
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider")
  }
  return context
}

