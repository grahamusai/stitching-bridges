"use client"

import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function QualitySection() {
    const scrollRef = useRef(null)
    const sectionRef = useRef(null)
    const leftContentRef = useRef(null)
    const rightContentRef = useRef(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isAutoScrolling, setIsAutoScrolling] = useState(true)

    const images = [
        {
            src: "/images/quality1.png",
            alt: "Modern building construction",
        },
        {
            src: "/images/quality2.png",
            alt: "Construction workers at sunset",
        },
        {
            src: "/images/quality3.png",
            alt: "High-rise construction",
        },
        {
            src: "/images/quality4.png",
            alt: "Foundation construction",
        },
    ]

    // Auto-scroll functionality
    useEffect(() => {
        let interval
        if (isAutoScrolling) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % images.length
                    scrollToImage(nextIndex)
                    return nextIndex
                })
            }, 5000) // 5 seconds
        }
        return () => clearInterval(interval)
    }, [isAutoScrolling, images.length])

    // GSAP animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate left content on scroll
            gsap.fromTo(leftContentRef.current.children,
                {
                    opacity: 0,
                    y: 50,
                    stagger: 0.2
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Animate right content (image container)
            gsap.fromTo(rightContentRef.current,
                {
                    opacity: 0,
                    x: 100,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Animate individual images with stagger
            gsap.fromTo(".image-card",
                {
                    opacity: 0,
                    y: 30,
                    rotationY: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationY: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: rightContentRef.current,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const scrollToImage = (index) => {
        if (scrollRef.current) {
            const scrollPosition = index * 320 // 320px per image (width + gap)
            gsap.to(scrollRef.current, {
                scrollLeft: scrollPosition,
                duration: 0.8,
                ease: "power2.out"
            })
        }
    }

    const handleIndicatorClick = (index) => {
        setIsAutoScrolling(false)
        setCurrentImageIndex(index)
        scrollToImage(index)

        // Resume auto-scrolling after 10 seconds of inactivity
        setTimeout(() => {
            setIsAutoScrolling(true)
        }, 10000)
    }

    return (
        <section id="projects" ref={sectionRef} className="bg-zinc-900 py-20 px-8 md:mx-10 my-20 rounded-xl overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div ref={leftContentRef} className="space-y-6">
                        <div className="inline-block floating">
                            <span className="px-4 py-2 border border-orange-500 text-orange-500 text-sm rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default">
                                Our services
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Quality that speaks
                            <br />
                            through <span className="text-orange-500 relative">
                                our work
                                <div className="absolute inset-0 shimmer opacity-30"></div>
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            With over 12 years of experience in construction, we deliver exceptional results that exceed expectations. 
                            From residential homes to commercial complexes, our commitment to quality craftsmanship and attention to detail 
                            ensures every project stands the test of time.
                        </p>

                        <Link href="/contact">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
                                GET A QUOTE
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </Link>
                    </div>

                    {/* Right Content - Scrollable Images */}
                    <div ref={rightContentRef} className="relative">
                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            onMouseEnter={() => setIsAutoScrolling(false)}
                            onMouseLeave={() => setIsAutoScrolling(true)}
                        >
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="image-card flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500 cursor-pointer group"
                                    onClick={() => handleIndicatorClick(index)}
                                >
                                    <div className="relative w-full h-full overflow-hidden hover:-skew-6">
                                        <img
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <p className="text-sm font-medium">{image.alt}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Scroll indicators */}
                        <div className="flex justify-center mt-6 gap-3">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-125 ${currentImageIndex === index
                                            ? "bg-orange-500 shadow-lg shadow-orange-500/50"
                                            : "bg-gray-600 hover:bg-gray-400"
                                        }`}
                                    onClick={() => handleIndicatorClick(index)}
                                />
                            ))}
                        </div>

                        {/* Auto-scroll control */}
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2"
                            >
                                {isAutoScrolling ? (
                                    <>
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        Auto-scrolling
                                    </>
                                ) : (
                                    <>
                                        <div className="w-2 h-2 bg-gray-500 rounded-full" />
                                        Paused
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                
                .image-card {
                    perspective: 1000px;
                }
                
                .image-card:hover {
                    transform: translateY(-5px);
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .floating {
                    animation: float 6s ease-in-out infinite;
                }
                
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                
                .shimmer {
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                    background-size: 200% 100%;
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </section>
    )
}
