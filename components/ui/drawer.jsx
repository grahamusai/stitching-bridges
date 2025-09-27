"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

// Simple mobile drawer component without external dependencies
const MobileDrawer = ({ isOpen, onClose, children }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer Content */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {children}
      </div>
    </>
  )
}

export { MobileDrawer }