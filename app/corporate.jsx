"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import herobg from "@/asset/service/corporate.svg";

import { TrustedBy } from "@/components/TrustedBy";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/CorporateComparison";
import { Scale } from "@/components/Scale";
import { Safety } from "@/components/Safety";
import CallToAction from "@/components/CallToActioncorporate";
import FAQSection from "@/components/AccordionCorporate";
import ContactSection from "@/components/ContactSection";
function Corporate() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="-mt-28 ">
      {/* HERO SECTION */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 pt-28 pb-12 md:pt-28 md:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT — CONTENT */}
            <div className="relative z-10 text-center md:text-left">
              <motion.h1
                {...fadeUp}
                transition={{ delay: 0.1 }}
                className="text-black font-black mb-6 max-w-xl"
              >
                Corporate Luggage Delivery Solutions
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ delay: 0.2 }}
                className="text-black text-lg max-w-xl mb-4"
              >
               When hundreds of bags need to move, guessing isn’t an option.
              </motion.p>

              <motion.p
                {...fadeUp}
                transition={{ delay: 0.3 }}
                className="text-black max-w-xl mb-7"
              >
                Ideal for corporate travel managers, event planners, tour operators, and pilgrimage organizers managing large groups across locations.

              </motion.p>

              

              <motion.div {...fadeUp} transition={{ delay: 0.5 }}>
                <a href="/rate-calculator" className="btn-primary hover:scale-105 transition-all pt-5">
                  Get a Custom Corporate Quote
                </a>
              </motion.div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative w-full h-[320px] md:h-[520px]">
              <Image
                src={herobg}
                alt="Corporate Luggage Delivery"
                fill
                priority
                className="object-contain"
              />

              {/* Optional gradient on image */}
              {/* <div className="absolute inset-0 bg-gradient-to-l from-white/70 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </section>

      

      <TrustedBy />

      <UseCases />
      <Features />
      <HowItWorks />

      <Comparison />
      <Scale />
      <Safety />

      <section className="  mx-auto relative px-4 py-12 md:py-16  sm:px-6 lg:px-8">
        <Testimonials />
      </section>
      <section className=" overflow-x-hidden ">
        <div>
          <FAQSection />
        </div>
      </section>
      <section className=" bg-[#F1F2F6] mx-auto overflow-x-hidden ">
        <ContactSection />
      </section>

    

      <section className="w-full px-4 py-12   md:py-20 md:pb-0 ">
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
            <h2 className=" text-white mb-4">Built for schedules that can’t slip</h2>

            <p className="text-white mb-8 text-sm md:text-base">
              Planned pickups, committed delivery windows, and clear ownership throughout.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-white hover:scale-105 transition-all"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
        <MarqueeLogos />
    </div>
  );
}

export default Corporate;
