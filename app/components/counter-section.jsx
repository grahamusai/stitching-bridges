"use client"
import { useEffect, useState, useRef } from "react"

export function TestCounter() {

    const sectionRef = useRef(null)
    const countersRef = useRef(null)
    const skylineRef = useRef(null)
  return (
    <section className="relative py-20 px-8 mx-10 my-20 rounded-xl bg-black overflow-hidden min-h-[400px]">
       
      {/* Blue border glow effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]" />

{/* City skyline background */}
      <div ref={skylineRef} className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYEnd slice">
          {/* Building outlines */}
          <g stroke="currentColor" strokeWidth="1" fill="none" className="text-white">
            {/* Left buildings */}
            <rect x="50" y="200" width="40" height="200" />
            <rect x="100" y="150" width="50" height="250" />
            <rect x="160" y="180" width="35" height="220" />
            <rect x="200" y="120" width="45" height="280" />
            <rect x="250" y="160" width="40" height="240" />

            {/* Center buildings */}
            <rect x="400" y="100" width="60" height="300" />
            <rect x="470" y="140" width="45" height="260" />
            <rect x="520" y="80" width="55" height="320" />
            <rect x="580" y="120" width="50" height="280" />
            <rect x="640" y="90" width="65" height="310" />
            <rect x="710" y="130" width="40" height="270" />

            {/* Right buildings */}
            <rect x="900" y="110" width="55" height="290" />
            <rect x="960" y="150" width="45" height="250" />
            <rect x="1010" y="90" width="50" height="310" />
            <rect x="1070" y="140" width="40" height="260" />
            <rect x="1120" y="120" width="60" height="280" />

            {/* Grid lines on buildings */}
            <g className="opacity-50">
              {/* Vertical lines */}
              <line x1="75" y1="200" x2="75" y2="400" />
              <line x1="125" y1="150" x2="125" y2="400" />
              <line x1="430" y1="100" x2="430" y2="400" />
              <line x1="547" y1="80" x2="547" y2="400" />
              <line x1="672" y1="90" x2="672" y2="400" />
              <line x1="927" y1="110" x2="927" y2="400" />
              <line x1="1040" y1="90" x2="1040" y2="400" />

              {/* Horizontal lines */}
              <line x1="50" y1="250" x2="290" y2="250" />
              <line x1="50" y1="300" x2="290" y2="300" />
              <line x1="400" y1="200" x2="750" y2="200" />
              <line x1="400" y1="250" x2="750" y2="250" />
              <line x1="400" y1="300" x2="750" y2="300" />
              <line x1="900" y1="200" x2="1180" y2="200" />
              <line x1="900" y1="250" x2="1180" y2="250" />
              <line x1="900" y1="300" x2="1180" y2="300" />
            </g>
          </g>
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Projects Completed */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">8k+</span>
            </div>
            <p className="text-white text-sm md:text-base font-medium group-hover:text-orange-300 transition-colors duration-300">Projects Completed</p>
          </div>

          {/* Global Customers */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">5k+</span>
            </div>
            <p className="text-white text-sm md:text-base font-medium group-hover:text-orange-300 transition-colors duration-300">Global Customers</p>
          </div>

          {/* Years Of Experience */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">12</span>
            </div>
            <p className="text-white text-sm md:text-base font-medium group-hover:text-orange-300 transition-colors duration-300">Years Of Experience</p>
          </div>

          {/* Team Engineers */}
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500">23</span>
            </div>
            <p className="text-white text-sm md:text-base font-medium group-hover:text-orange-300 transition-colors duration-300">Team Engineers</p>
          </div>
        </div>
      </div>
    </section>
  )
}