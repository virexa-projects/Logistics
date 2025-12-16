"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE

export default function CallToAction() {
  return (
    <section className="w-full px-4 md:px-10 my-20">
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
            Ready to Simplify Corporate Luggage Movement?
          </h2>

          <p className="text-white mb-8 text-sm md:text-base">
           Let Frisbi handle the logistics—so your teams and guests travel light.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-full 
                               font-semibold text-sm md:text-base 
                               hover:scale-105 transition-all">
              Request Corporate Quote
            </button>

            <button className="border border-white/40 text-white px-6 py-3 rounded-full
                               font-semibold text-sm md:text-base
                               hover:bg-white/10 transition-all">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
