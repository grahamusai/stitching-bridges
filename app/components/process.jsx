import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide elements
      gsap.set([headingRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });
      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center"
      });
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.8
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate heading and subtitle
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4")
        .to(lineRef.current, {
          scaleX: 1,
          duration: 1,
          ease: "power2.out"
        }, "-=0.3")
        .to(cardsRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }, "-=0.5");

      // Add hover animations for cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardTl = gsap.timeline({ paused: true });

          cardTl.to(card, {
            y: -10,
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(255, 165, 0, 0.3)",
            duration: 0.3,
            ease: "power2.out"
          });

          card.addEventListener("mouseenter", () => cardTl.play());
          card.addEventListener("mouseleave", () => cardTl.reverse());
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mx-5 md:mx-20 my-20 rounded-xl bg-black py-16 px-12">
      {/* Heading */}
      <div className="flex mb-10">
        <div className="w-1/2">
          <h3 ref={headingRef} className="text-gray-300 font-bold text-lg md:text-4xl ">
            Our <span className="text-orange-500">Process</span>{" "}
          </h3>
          <span ref={subtitleRef} className="text-sm text-gray-300">
            Simple. Secure. Accountable.
          </span>
        </div>
        <div ref={lineRef} className="border-b-2 border-gray-400 w-1/2 self-end mb-2"></div>
      </div>
      {/* Steps */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div
          ref={el => cardsRef.current[0] = el}
          className="bg-[#0c0c0c] border-1 border-orange-500 min-h-[350px] px-10 py-10 rounded-lg flex flex-col justify-between gap-16 cursor-pointer transition-all duration-300"
        >
          <h4 className="text-xl text-gray-200 mb-2 ">1. Plan</h4>
          <p className="text-gray-400 text-sm">
            Share your vision, budget, and preferred timeline. We help you plan
            what&apos;s realistic and cost-effective.
          </p>
        </div>
        <div
          ref={el => cardsRef.current[1] = el}
          className="bg-[#0c0c0c] border-1 border-orange-500 min-h-[350px] px-10 py-10 rounded-lg flex flex-col justify-between gap-16 cursor-pointer transition-all duration-300"
        >
          <h4 className="text-xl text-gray-200 mb-2 ">2. Secure </h4>
          <p className="text-gray-400 text-sm">
            Your funds go into a trust account. Nothing moves until we verify
            the project start.
          </p>
        </div>
        <div
          ref={el => cardsRef.current[2] = el}
          className="bg-[#0c0c0c] border-1 border-orange-500 min-h-[350px] px-10 py-10 rounded-lg flex flex-col justify-between gap-16 cursor-pointer transition-all duration-300"
        >
          <h4 className="text-xl text-gray-200 mb-2 ">3. Build </h4>
          <p className="text-gray-400 text-sm">
            Our teams handle the work while you receive regular progress and
            cost reports.
          </p>
        </div>
        <div
          ref={el => cardsRef.current[3] = el}
          className="bg-[#0c0c0c] border-1 border-orange-500 min-h-[350px] px-10 py-10 rounded-lg flex flex-col justify-between gap-16 cursor-pointer transition-all duration-300"
        >
          <h4 className="text-xl text-gray-200 mb-2 ">4. Verify & Deliver </h4>
          <p className="text-gray-400 text-sm">
            Each milestone is approved by EAS Chartered Accountants before
            payment is made. We finish only when you&apos;re satisfied.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
