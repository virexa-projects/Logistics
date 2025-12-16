"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import herobg from "@/asset/service/standard-services.png";

import { PerfectFor } from "@/components/PerfectFor";
import { WhyChoose } from "@/components/Whychoose";
import { WhenToUse } from "@/components/WhenToUse";
import { HowItWorks } from "@/components/HowItWorksindividual";
import CallToAction from "@/components/CallToActioncorporate";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Individual() {
  return (
    <div className="-mt-20">
      {/* HERO SECTION */}
      <section className="relative h-[650px] md:h-[680px] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={herobg}
          alt="Individual Luggage Delivery"
          fill
          priority
          sizes="100vw"
          className="object-cover p-2 rounded-3xl"
        />

      
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 py-24 md:py-32">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full mb-6"
          >
            <span className="text-xl">✨</span>
            <span className="text-white text-sm font-medium">
              Individual Luggage Delivery
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-extrabold text-4xl md:text-6xl max-w-3xl mb-6"
          >
            Travel Light. <br className="hidden md:block" />
            We Deliver Your Luggage.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 text-lg md:text-xl max-w-2xl mb-6"
          >
            Frisbi makes personal travel easier by taking the weight off your
            shoulders—literally.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-purple-100 max-w-2xl mb-8"
          >
            Whether you're moving between cities, heading to a hotel, or planning
            a long stay, we pick up your luggage from your doorstep and deliver
            it safely to your destination—so you can travel hands-free and
            stress-free.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-transform">
              Book Your Delivery Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTIONS */}
      <PerfectFor />
      <WhyChoose />
      <WhenToUse />
        <HowItWorks />
      <CallToAction />
    </div>
  );
}

export default Individual;
