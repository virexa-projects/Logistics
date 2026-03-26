"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import aboutmobile from "@/asset/shippment/rate-caluculator.svg";
import { Check, Minus, NetworkIcon, Plus } from "lucide-react";

import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE
import { motion } from "framer-motion";
import MarqueeLogos from "@/components/MarqueeLogos";
import ShipmentCostCalculator from "@/components/ShipmentCostCalculator";
import FAQ from "@/components/RateAccordion";
import ratecalculator from "@/asset/rate-calculator.png";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import lugggaevariations from "@/asset/rate-lugggae-variation.svg";
import lugggaevariationsmobile from "@/asset/rate-lugggae-variation-mg.svg";

function RateCalculator({ pickupFromUrl, dropFromUrl }) {
  return (
    <div>
      <div className="-mt-24 -mt-16 ">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden  md:block hidden"
        >
          {/* Background Image */}
          <Image
            src={ratecalculator} // your hero image path
            alt="About Background"
            fill
            priority
            className="md:object-contain object-cover bg-center"
          />

          {/* Gradient Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-blue-700/90"></div> */}

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black mb-4">Know your price in 60 seconds.</h1>
            <p className="text-black mb-4 text-sm md:text-base">
              Calculate now. Book when ready. Travel lighter tomorrow.
            </p>

            {/* CTA */}
            <Link
              href="/contact-us"
              className="btn-primary hover:scale-105 transition-all"
            >
              Calculate Your Cost
            </Link>
          </div>
        </motion.section>

        {/* mobile section */}
        <section className="relative bg-white overflow-hidden md:hidden">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT — CONTENT */}
              <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-black mb-4">
                  Know your price in 60 seconds.
                </h1>
                <p className="text-black mb-4 text-sm md:text-base">
                  Calculate now. Book when ready. Travel lighter tomorrow.
                </p>

                {/* CTA */}
                <Link
                  href="/contact-us"
                  className="btn-primary hover:scale-105 transition-all"
                >
                  Calculate Your Cost
                </Link>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[420px] flex justify-center">
                <Image
                  src={aboutmobile}
                  alt="Hero"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="container mx-auto relative px-4 py-12 md:py-20 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* 40 / 60 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 items-center">
            {/* LEFT CONTENT – SMALL */}
            <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0">
              <h2 className="md:text-left text-center mb-4 text-2xl md:text-3xl font-semibold">
                Smart luggage delivery, built for every size.
              </h2>

              <p className="text-second text-center md:text-left leading-relaxed">
                A 10 kg compact suitcase costs less than a 10 kg oversized bag.
              </p>
            </div>

            {/* RIGHT IMAGE – BIG */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full h-[360px] md:h-[480px] lg:h-[full]">
                <Image
                  src={lugggaevariations}
                  alt="Frisbi luggage delivery illustration"
                  fill
                  priority
                  className="object-contain md:object-cover"
                />
              </div>
            </div>
            {/* <div className="flex justify-center lg:justify-end ">
              <div className="relative w-full h-[900px]">
                <Image
                  src={lugggaevariationsmobile}
                  alt="Frisbi luggage delivery illustration"
                  fill
                  priority
                  className="object-contain h-full"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="py-12 md:pt-0 md:pb-0">
        <ShipmentCostCalculator
          pickupFromUrl={pickupFromUrl}
          dropFromUrl={dropFromUrl}
        />
      </section>

      <section>
        <FAQ />
      </section>

      <section className="  mx-auto relative px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <Testimonials />
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
            <h2 className=" text-white mb-4">From Your Door to Their Door.</h2>

            <p className="text-white mb-8 text-sm md:text-base">
              Fast, safe, and affordable – trusted by thousands across India.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-white hover:scale-105 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <MarqueeLogos />
    </div>
  );
}

export default RateCalculator;
