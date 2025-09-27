"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";
import { ConsultationForm } from "./components/consultation-form";
import { ContactHero } from "./components/contact-hero";
import { ContactInfo } from "./components/contact-info";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <ContactHero />

        <div className="container mx-auto px-4 py-16 border-t-4 border-orange-500">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactInfo />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ConsultationForm />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
