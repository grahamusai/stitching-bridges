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

  const tabContent = {
    Materials: [
      "Premium grade cement & concrete",
      "Reinforced steel & rebar",
      "Eco-friendly bricks & blocks",
      "Weather-resistant finishes",
    ],
    Technology: [
      "3D modeling & BIM integration",
      "Drone surveying & monitoring",
      "Smart building automation",
      "Advanced project management software",
    ],
    Approved: [
      "Licensed & bonded contractors",
      "ISO 9001:2015 certified",
      "OSHA safety compliance",
      "Local building code certified",
    ]
  }



 

  return (
    <section id="about" ref={sectionRef} className="bg-[#181818] text-white py-20 px-8 md:mx-10 md:my-20 rounded-xl">
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
              About Us
            </h1>

            <p>Across Zimbabwe, many people — especially in the diaspora — have faced disappointment
              when sending money home to build. Projects stall, costs escalate, and trust disappears.
              Locally, poor oversight and weak accountability have made construction a high-risk investment.
            </p>
            <p>
              Stitching Bridges was created to change that. We are a construction and project management
              company built on financial transparency, engineering discipline, and verified delivery. Every client&apos;s'
              funds are managed through a regulated trust account through a Chartered Accountants firm, ensuring that payments are released only for certified work.
            </p>
            <p>We combine construction expertise with professional governance — giving clients full
              visibility, reliable progress, and peace of mind wherever they are in the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
