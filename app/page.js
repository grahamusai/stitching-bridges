"use client";
import React, { useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/about";
import { CounterSection } from "./components/counter-section";
import { ServicesGrid } from "./components/services-grid";
import { TestCounter } from "./components/test-counter";
import { TestServices } from "./components/test-services";
import { QualitySection } from "./components/quality-section";
import Features from "./components/features";
import WorldMap from "./components/world";
import { CTASection } from "./components/cta-section";
import { CustomCursor } from "./components/custom-cursor";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Smooth scrolling for the entire page
    gsap.registerPlugin(ScrollTrigger);

    // Simple loading animation
    const tl = gsap.timeline();
    tl.set("body", { overflow: "hidden" }).to("body", {
      overflow: "auto",
      delay: 0.3,
    });

    // Add scroll-based color changes to floating elements
    gsap.to(".floating-dot-1", {
      backgroundColor: "#3b82f6",
      scrollTrigger: {
        trigger: ".floating-dot-1",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative cursor-magnetic">
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutSection />
      {/* <CounterSection /> */}
      <TestCounter />
      <ServicesGrid />
      {/* <TestServices /> */}
      <QualitySection />
      <WorldMap />
      <CTASection />
      <ContactSection />
      <Footer />

      {/* Floating elements for extra visual appeal */}
      <div className="floating-dot-1 fixed top-20 right-10 w-2 h-2 bg-orange-500 rounded-full opacity-60 animate-pulse pointer-events-none z-10 float-animation"></div>
      <div
        className="fixed top-40 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse pointer-events-none z-10 float-animation"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="fixed bottom-20 right-20 w-3 h-3 bg-orange-300 rounded-full opacity-30 animate-pulse pointer-events-none z-10 float-animation"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Gradient orbs for ambient lighting */}
      <div className="fixed top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-pulse"></div>
      <div
        className="fixed bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>
    </div>
  );
};

export default Home;
