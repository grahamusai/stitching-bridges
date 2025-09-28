"use client"
import { Button } from "../../components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const buttonRef = useRef(null)
    const overlayRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial animation on load
            gsap.set([titleRef.current, buttonRef.current], { opacity: 0, y: 50 })

            const tl = gsap.timeline()
            tl.to(overlayRef.current, { opacity: 0.6, duration: 1 })
                .to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5")
                .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")

            // Parallax effect on scroll
            gsap.to(heroRef.current, {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative min-h-[600px] flex items-center justify-start bg-cover bg-center bg-no-repeat rounded-xl  md:mx-10 my-10 md:my-20 overflow-hidden"
            style={{
                backgroundImage: "url(/images/hero.jpg)",
            }}
        >
            {/* Overlay */}
            <div ref={overlayRef} className="absolute inset-0 bg-black/70 rounded-xl transition-all duration-1000" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl px-24 text-center md:text-left">
                {/* Heading */}
                <h1 ref={titleRef} className="hidden md:block mb-12 text-5xl font-bold text-white leading-tight">
                    Building Your Vision <br />
                    with Strength & <br />
                    Precision
                </h1>
                <h1 ref={titleRef} className="md:hidden mb-12 text-4xl font-bold text-white leading-tight">
                    Building Your Vision
                    with Strength &
                    Precision
                </h1>
                <Link href="/contact">
                    <Button
                        ref={buttonRef}
                        className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                        START A PROJECT <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                </Link>
            </div>
        </section>
    )
}