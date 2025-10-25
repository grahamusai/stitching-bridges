"use client";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ServicesGrid() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    // Add a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Simple fade in animation
        gsap.fromTo(
          gridRef.current.children,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 px-4 max-w-7xl mx-auto min-h-[600px]"
    >
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]"
      >
        {/* Top Left - General Contracting */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-48 md:h-full flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold transform transition-all duration-300 group-hover:translate-y-[-10px] group-hover:text-orange-300">
              CONSTRUCTION
            </h3>
            <p className="text-sm text-white/90 mt-2 max-w-full md:max-w-sm">
              Residential and commercial buildings — from foundations to
              finishing. We work with reliable engineers, architects, and
              certified artisans.
            </p>
          </div>
        </div>

        {/* Center - Large card spanning 2 rows */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer md:row-span-2 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-48 md:h-full flex flex-col justify-end p-6">
            <h3 className="text-white uppercase text-2xl font-bold transform transition-all duration-300 group-hover:translate-y-[-10px] group-hover:text-orange-300">
              Renovations & Extensions
            </h3>
            <p className="text-sm text-white/90 mt-3 max-w-full md:max-w-md">
              Transform and modernise your existing property with professional
              supervision.
            </p>
          </div>
        </div>

        {/* Top Right - Renovations */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-48 md:h-full flex flex-col justify-end p-6">
            <h3 className="text-white uppercase text-2xl font-bold transform transition-all duration-300 group-hover:translate-y-[-10px] group-hover:text-orange-300">
              Project Management
            </h3>
            <p className="text-sm text-white/90 mt-3 max-w-full md:max-w-md">
              We manage timelines, contractors, and budgets — reporting back
              every step of the way.
            </p>
          </div>
        </div>

        {/* Bottom Left - Project Management */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url('/images/project.png')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-48 md:h-full flex flex-col justify-end p-6">
            <h3 className="text-white uppercase text-xl font-bold transform transition-all duration-300 group-hover:translate-y-[-10px] group-hover:text-orange-300">
              Cost Tracking & Reporting
            </h3>
            <p className="text-sm text-white/90 mt-2 max-w-full md:max-w-sm">
              Every dollar is accounted for. You receive progress and payment reports in real time.
            </p>
          </div>
        </div>

        {/* Bottom Right - CTA Card */}
        <div className="relative rounded-2xl overflow-hidden bg-orange-500 p-6 flex flex-col justify-center group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:bg-orange-400">
          <h3 className="text-white text-2xl font-bold mb-6 leading-tight transform transition-all duration-300 group-hover:translate-y-[-5px]">
            Specialist Services
          </h3>
          <ul className="font-semibold">
            <li>- Plumbing</li>
            <li>- Electrical Work</li>
            <li>- Solar Installations</li>
            <li>- Painting</li>
            <li>- Equipment Hire</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
