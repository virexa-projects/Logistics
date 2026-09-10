"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE

export default function CallToAction() {
  return (
    <section className="w-full px-4 md:px-10 py-12  md:py-20 md:pb-0 ">
      <div className="relative container mx-auto rounded-3xl overflow-hidden">

        {/* Background Image */}
        <Image
          src={bg}
          alt="CTA background"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-[#003BE3] " /> */}

      

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center py-16 md:py-20 px-6"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Ship Your Bags the Smart Way?
          </h2>

          <p className="text-white mb-8 text-sm md:text-base">
            Affordable, reliable, and stress-free. Book Standard Delivery today.

          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/rate-calculator" className="btn-white hover:scale-105 transition-all">
              Book  Now
            </a>

            <a href="/contact-us" className="btn-white-outline hover:scale-105 transition-all">
                   Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
