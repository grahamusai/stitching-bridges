"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-32 overflow-hidden border-b-4 border-orange-500">
      <div className="absolute inset-0 bg-[url('/images/construction-blueprint-pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8 flex-col"
          >
            
            <h1 className="text-4xl md:text-6xl font-bold text-balance text-white">
              Stitching <span className="text-orange-500">Bridges</span>
            </h1>
            <span className="text-orange-500 text-xl font-bold">Building Contractors</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 text-balance"
          >
            {"Let's Build Your Vision Together"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty"
          >
            Ready to start your construction project? Schedule a consultation with our expert team. We'll discuss your
            vision, timeline, and budget to create the perfect plan for your build.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
