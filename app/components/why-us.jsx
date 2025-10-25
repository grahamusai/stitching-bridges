import { Wallet2Icon, SquareChartGantt, Quote, FileChartColumn, Handshake, HandCoins } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const headingsRef = useRef([]);
  const descriptionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.8
      });

      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 60
      });

      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 120,
        scale: 0.7,
        rotationY: 45
      });

      gsap.set(iconsRef.current, {
        opacity: 0,
        scale: 0,
        rotation: 180
      });

      gsap.set(headingsRef.current, {
        opacity: 0,
        x: -50
      });

      gsap.set(descriptionsRef.current, {
        opacity: 0,
        y: 30
      });

      // Main entrance timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      });

      // Title animation with bounce
      mainTl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(2)"
      })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.8");

      // Cards entrance with stagger
      mainTl.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        stagger: {
          amount: 1.5,
          from: "start",
          ease: "power2.out"
        },
        ease: "back.out(1.4)"
      }, "-=0.5");

      // Icons animation with rotation and bounce
      mainTl.to(iconsRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: {
          amount: 1.2,
          from: "start"
        },
        ease: "elastic.out(1, 0.5)"
      }, "-=1");

      // Text content animations
      mainTl.to(headingsRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: {
          amount: 1,
          from: "start"
        },
        ease: "power2.out"
      }, "-=0.8")
        .to(descriptionsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: {
            amount: 0.8,
            from: "start"
          },
          ease: "power2.out"
        }, "-=0.6");

      // Continuous floating animation for icons
      iconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.to(icon, {
            y: -10,
            duration: 2 + (index * 0.3),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          });
        }
      });

      // Advanced hover effects for cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardIcon = iconsRef.current[index];
          const cardHeading = headingsRef.current[index];

          const hoverTl = gsap.timeline({ paused: true });

          hoverTl.to(card, {
            y: -15,
            scale: 1.08,
            rotationY: 5,
            boxShadow: "0 25px 50px rgba(255, 165, 0, 0.4)",
            duration: 0.4,
            ease: "power2.out"
          })
            .to(cardIcon, {
              scale: 1.3,
              rotation: 360,
              color: "#ffffff",
              duration: 0.4,
              ease: "back.out(1.7)"
            }, 0)
            .to(cardHeading, {
              color: "#f97316",
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            }, 0);

          card.addEventListener("mouseenter", () => hoverTl.play());
          card.addEventListener("mouseleave", () => hoverTl.reverse());
        }
      });

      // Parallax effect for the entire section
      gsap.to(sectionRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // Text reveal animation on scroll for descriptions
      descriptionsRef.current.forEach((desc, index) => {
        if (desc) {
          gsap.fromTo(desc.children || desc, {
            opacity: 0.7
          }, {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: desc,
              start: "top 90%",
              end: "bottom 60%",
              scrub: 1
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-black sm:py-16 lg:py-20 mx-20 rounded-xl overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 ref={titleRef} className="text-3xl font-bold leading-tight text-gray-200 sm:text-4xl xl:text-5xl font-pj">
            Why Choose Us
          </h2>
          <p ref={subtitleRef} className="mt-4 text-base leading-7 text-gray-300 sm:mt-8 font-pj">
            Building should be exciting — not stressful. At Stitching Bridges,
            we make it safe, simple, and transparent. Whether you&apos;re in
            Zimbabwe or abroad, your money builds what you intended — nothing
            less.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div
            ref={el => cardsRef.current[0] = el}
            className="md:p-8 lg:p-14 cursor-pointer transition-all duration-300 rounded-lg"
          >
            <HandCoins
              ref={el => iconsRef.current[0] = el}
              className="mx-auto text-orange-500 transition-all duration-300"
              size={46}
            />
            <h3
              ref={el => headingsRef.current[0] = el}
              className="mt-12 text-xl font-bold text-gray-200 font-pj transition-all duration-300"
            >
              1. Verified Payments
            </h3>
            <p
              ref={el => descriptionsRef.current[0] = el}
              className="mt-5 text-base text-gray-300 font-pj"
            >
              All funds go through a regulated trust account managed by EAS
              Chartered Accountants.
            </p>
          </div>

          <div
            ref={el => cardsRef.current[1] = el}
            className="md:p-8 lg:p-14 md:border-l md:border-gray-400 cursor-pointer transition-all duration-300 rounded-lg"
          >
            <SquareChartGantt
              ref={el => iconsRef.current[1] = el}
              className="mx-auto text-orange-500 transition-all duration-300"
              size={46}
            />
            <h3
              ref={el => headingsRef.current[1] = el}
              className="mt-12 text-xl font-bold text-gray-200 font-pj transition-all duration-300"
            >
              2. Professional Oversight{" "}
            </h3>
            <p
              ref={el => descriptionsRef.current[1] = el}
              className="mt-5 text-base text-gray-300 font-pj"
            >
              Every stage is checked, signed off, and documented before payments
              are released.
            </p>
          </div>

          <div
            ref={el => cardsRef.current[2] = el}
            className="md:p-8 lg:p-14 md:border-l md:border-gray-400 cursor-pointer transition-all duration-300 rounded-lg"
          >
            <FileChartColumn
              ref={el => iconsRef.current[2] = el}
              className="mx-auto text-orange-500 transition-all duration-300"
              size={46}
            />
            <h3
              ref={el => headingsRef.current[2] = el}
              className="mt-12 text-xl font-bold text-gray-200 font-pj transition-all duration-300"
            >
              3. Transparent Reporting
            </h3>
            <p
              ref={el => descriptionsRef.current[2] = el}
              className="mt-5 text-base text-gray-300 font-pj"
            >
              You receive regular photo, video, and financial updates straight from site.
            </p>
          </div>

          <div
            ref={el => cardsRef.current[3] = el}
            className="md:p-8 lg:p-14 md:border-t md:border-gray-400 cursor-pointer transition-all duration-300 rounded-lg"
          >
            <Handshake
              ref={el => iconsRef.current[3] = el}
              className="mx-auto text-orange-500 transition-all duration-300"
              size={46}
            />
            <h3
              ref={el => headingsRef.current[3] = el}
              className="mt-12 text-xl font-bold text-gray-200 font-pj transition-all duration-300"
            >
              4. Accountability You Can Trust
            </h3>
            <p
              ref={el => descriptionsRef.current[3] = el}
              className="mt-5 text-base text-gray-300 font-pj"
            >
              Our process is built to protect your investment and your peace of mind.
            </p>
          </div>

          <div
            ref={el => cardsRef.current[4] = el}
            className="md:p-8 lg:p-14 md:border-l md:border-gray-400 md:border-t cursor-pointer transition-all duration-300 rounded-lg"
          >
            <Wallet2Icon
              ref={el => iconsRef.current[4] = el}
              className="mx-auto text-orange-500 transition-all duration-300"
              size={46}
            />
            <h3
              ref={el => headingsRef.current[4] = el}
              className="mt-12 text-xl font-bold text-gray-200 font-pj transition-all duration-300"
            >
              5. Quality You Can See
            </h3>
            <p
              ref={el => descriptionsRef.current[4] = el}
              className="mt-5 text-base text-gray-300 font-pj"
            >
              Skilled teams, honest timelines, and finishes that speak for themselves.
            </p>
          </div>

          <div
            ref={el => cardsRef.current[5] = el}
            className="md:p-8 lg:p-14 md:border-l md:border-gray-400 md:border-t cursor-pointer transition-all duration-300 rounded-lg"
          >
            <Quote
              ref={el => iconsRef.current[5] = el}
              className="mx-auto text-orange-500 transition-all duration-300"
              size={46}
            />
            <h3
              ref={el => headingsRef.current[5] = el}
              className="mt-12 text-xl font-bold text-gray-200 font-pj transition-all duration-300"
            >
              “We build with discipline, report with integrity, and deliver what we promise.”
            </h3>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
