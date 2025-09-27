'use client'
import { Button } from "../../components/ui/button"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

export function Navbar() {
    const [scrollY, setScrollY] = useState(0)
    const navRef = useRef(null)
    const logoRef = useRef(null)
    const navLinksRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Initial animation on page load
        const ctx = gsap.context(() => {
            gsap.set([logoRef.current, navLinksRef.current, ctaRef.current], { opacity: 0, y: -50 })
            
            const tl = gsap.timeline()
            tl.to(logoRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
              .to(navLinksRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
              .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        }, navRef)

        return () => ctx.revert()
    }, [])

    // Cap the navlinks movement to prevent them from going off-screen
    const maxTransform = 10

    // Calculate opacity based on scroll position (starts reducing after 10px scroll)
    const opacity = scrollY > 10 ? Math.max(0.9, 1 - (scrollY - 10) / 200) : 1

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-transparent px-10 py-6">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo/Brand */}
                <div ref={logoRef} className="text-white text-3xl mt-5 font-semibold hover:text-orange-300 transition-colors duration-300 cursor-pointer">
                    Stitching Bridges
                </div>

                {/* Navigation Links */}
                <div
                    ref={navLinksRef}
                    className="bg-white rounded-2xl px-3 py-3 transition-all duration-300 ease-out hover:shadow-lg hover:scale-105"
                    style={{
                        transform: `translateY(${Math.min(scrollY * 0.3, maxTransform)}px)`,
                        opacity: opacity
                    }}
                >
                    <div className="flex items-center space-x-8 border-1 border-gray-500 px-12 py-5 rounded-xl">
                        <a href="#" className="text-gray-800 font-base text-sm hover:text-orange-500 hover:scale-110 transition-all duration-300 relative group">
                            HOME
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#" className="text-gray-800 font-base text-sm hover:text-orange-500 hover:scale-110 transition-all duration-300 relative group">
                            ABOUT
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#" className="text-gray-800 font-base text-sm hover:text-orange-500 hover:scale-110 transition-all duration-300 relative group">
                            SERVICES
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#" className="text-gray-800 font-base text-sm hover:text-orange-500 hover:scale-110 transition-all duration-300 relative group">
                            PROJECTS
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a href="#" className="text-gray-800 font-base text-sm hover:text-orange-500 hover:scale-110 transition-all duration-300 relative group">
                            CONTACT US
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>
                </div>

                {/* CTA Button */}
                <Button ref={ctaRef} className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 mt-8 rounded-md font-base transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-1">
                    GET A QUOTE
                </Button>
            </div>
        </nav>
    )
}