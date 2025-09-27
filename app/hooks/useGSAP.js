import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = (callback, dependencies = []) => {
  const ref = useRef()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(callback, ref)
    return () => ctx.revert()
  }, dependencies)

  return ref
}

// Predefined animation presets
export const animations = {
  fadeInUp: (element, options = {}) => {
    return gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: "power2.out",
        ...options 
      }
    )
  },

  fadeInLeft: (element, options = {}) => {
    return gsap.fromTo(element,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        ...options
      }
    )
  },

  fadeInRight: (element, options = {}) => {
    return gsap.fromTo(element,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        ...options
      }
    )
  },

  scaleIn: (element, options = {}) => {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        ...options
      }
    )
  },

  staggerChildren: (container, options = {}) => {
    return gsap.fromTo(container.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        ...options
      }
    )
  }
}