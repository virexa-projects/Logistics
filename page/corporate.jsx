"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import herobg from "@/asset/service/standard-services.png";

import { TrustedBy } from "@/components/TrustedBy";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/CorporateComparison";
import { Scale } from "@/components/Scale";
import { Safety } from "@/components/Safety";
import CallToAction from "@/components/CallToActioncorporate";

function Corporate() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="-mt-20">
      {/* HERO SECTION */}
      <section className="relative h-[650px] md:h-[660px] rounded-3xl p-2">
        <Image
          src={herobg}
          alt="Corporate Luggage Delivery"
          fill
          priority
          className="object-cover rounded-3xl p-2"
        />

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          {/* Badge */}
          <motion.div
            {...fadeUp}
            className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-2 rounded-full mb-6"
          >
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">✨</span>
              Frisbi
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-white font-black mb-6"
          >
            Corporate Luggage Delivery Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mb-6"
          >
            Hassle-Free Luggage Logistics for Businesses, Events & Travel
            Partners
          </motion.p>

          {/* Description */}
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="text-purple-100 max-w-2xl mb-4"
          >
            Frisbi helps organizations move luggage securely, on time, and at
            scale—so employees, guests, and clients can travel light and
            stress-free.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.4 }}
            className="text-purple-100 max-w-2xl mb-10"
          >
            From corporate travel to events, hotels, and group movements, we
            manage luggage end-to-end with professional coordination and
            real-time visibility.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white px-8 py-3 text-sm sm:text-base font-semibold rounded-full hover:scale-105 transition-all">
              Get a Custom Corporate Quote
            </button>
          </motion.div>
        </div>
      </section>

      <TrustedBy />
      <Features />
      <UseCases />
      <HowItWorks />
      <Comparison />
      <Scale />
      <Safety />
      <CallToAction />
    </div>
  );
}

export default Corporate;
