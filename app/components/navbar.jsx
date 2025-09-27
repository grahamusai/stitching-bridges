'use client'
import { Button } from "../../components/ui/button"
import { MobileDrawer } from "../../components/ui/drawer"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"

export function Navbar() {
    const [scrollY, setScrollY] = useState(0)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

    const navLinks = [
        { href: "#", label: "HOME" },
        { href: "#", label: "ABOUT" },
        { href: "#", label: "SERVICES" },
        { href: "#", label: "PROJECTS" },
        { href: "/contact", label: "CONTACT US" }
    ]

    return (
        <>
            <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-6 lg:px-10 py-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo/Brand */}
                    <Link href='/'>
                        <div
                            ref={logoRef}
                            className="text-white text-2xl sm:text-3xl mt-5 font-semibold hover:text-orange-300 transition-colors duration-300 cursor-pointer"
                            style={{
                                textShadow: '1px 2px 2px rgba(0, 0, 0, 0.2), -1px -1px 2px rgba(0, 0, 0, 0.2)',
                                WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            Stitching Bridges
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div
                        ref={navLinksRef}
                        className="hidden lg:block bg-white rounded-2xl px-3 py-3 transition-all duration-300 ease-out hover:shadow-lg hover:scale-105"
                        style={{
                            transform: `translateY(${Math.min(scrollY * 0.3, maxTransform)}px)`,
                            opacity: opacity
                        }}
                    >
                        <div className="flex items-center space-x-8 border-1 border-gray-500 px-12 py-5 rounded-xl">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-800 font-base text-sm hover:text-orange-500 hover:scale-110 transition-all duration-300 relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA Button */}
                    <Button
                        ref={ctaRef}
                        className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 mt-8 rounded-md font-base transition-all duration-300 hover:scale-110 hover:shadow-lg hover:rotate-1"
                    >
                        GET A QUOTE
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden text-white p-2 mt-5 hover:text-orange-300 transition-colors duration-300"
                        aria-label="Open mobile menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <MobileDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-600 hover:text-gray-800 transition-colors"
                            aria-label="Close mobile menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 px-6 py-8">
                        <nav className="space-y-6">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="block text-gray-800 text-lg font-medium hover:text-orange-500 transition-colors duration-300 py-2 border-b border-gray-100"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile CTA Button */}
                    <div className="p-6 border-t">
                        <Button
                            className="w-full bg-orange-500 hover:bg-orange-600 text-black py-4 rounded-md font-medium transition-all duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            GET A QUOTE
                        </Button>
                    </div>
                </div>
            </MobileDrawer>
        </>
    )
}