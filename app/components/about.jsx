"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("Materials")
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const featuresRef = useRef(null)

  const tabs = ["Materials", "Technology", "Approved"]

  const features = [
    "Premium grade cement & concrete",
    "Reinforced steel & rebar",
    "Eco-friendly bricks & blocks",
    "Weather-resistant finishes",
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(imageRef.current, 
        { opacity: 0, x: -100, rotation: -5 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      )

      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          }
        }
      )

      // Features stagger animation
      gsap.fromTo(featuresRef.current.children,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 85%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#181818] text-white py-20 px-8 mx-10 my-20 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and branding */}
          <div ref={imageRef} className="space-y-6">
            <div className="relative group">
              <Image
                src="/images/plans.png"
                alt="Construction worker reviewing blueprints"
                width={500}
                height={350}
                className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Brand elements */}
            <div className="flex items-center gap-4">
              <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 cursor-pointer">Stitching Bridges</div>
              <div className="bg-orange-500 p-3 rounded-full hover:rotate-12 hover:scale-110 transition-all duration-300 cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path
                    d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div ref={contentRef} className="space-y-8">
            <h1 ref={titleRef} className="text-5xl lg:text-[50px] font-bold leading-tight">
              Building with <span className="text-orange-500 hover:text-orange-400 transition-colors duration-300">trust</span>,<br />
              driven by experience
            </h1>

            {/* Tabs */}
            <div className="space-y-6">
              <div className="flex gap-8 border-b border-zinc-600">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-lg font-medium transition-all duration-300 hover:scale-105 ${activeTab === tab
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Features list */}
              <div ref={featuresRef} className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-orange-500 rounded-full p-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
