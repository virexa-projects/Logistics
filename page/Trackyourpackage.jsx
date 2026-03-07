"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE
import ContactSection from "@/components/ContactSection";
import trackmobile from "@/asset/shippment/track-your-package.svg";

import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";

import MarqueeLogos from "@/components/MarqueeLogos";
import FAQ from "@/components/AccordionCorporate";
import aboutmobile from "@/asset/about/about-banner-img.svg";

import trackbg from "@/asset/track-your-package.png";
import tracking from "@/asset/shippment/tracking-luggage.jpg";

function Trackyourpackage() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="-mt-24 -mt-16">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden md:block hidden"
        >
          <Image
            src={trackbg}
            alt="Track Package Background"
            fill
            priority
            className="md:object-contain object-cover bg-center"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black  mb-4">Track your package</h1>
            <p className="text-black mb-8 text-sm md:text-base">
             India's trusted luggage delivery service, built to make travel lighter, smarter, and stress-free.
            </p>

            {/* CTA */}
            <Link
              href="/contact-us"
              className="btn-primary hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.section>

        {/* mobile section */}
        <section className="relative bg-white overflow-hidden md:hidden">
          <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT — CONTENT */}
              <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-black  mb-4">Track your package</h1>
                <p className="text-black mb-4 text-sm md:text-base">
                  India's trusted luggage delivery service, built to make travel lighter, smarter, and stress-free.
                </p>

                {/* CTA */}
                <Link
                  href="/contact-us"
                  className="btn-primary hover:scale-105 transition-all"
                >
                  Contact Us
                </Link>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[420px] flex justify-center">
                <Image
                  src={trackmobile}
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

      {/* TRACKING SECTION */}
      <section className="w-full py-12 md:pt-24 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10">
          {/* IMAGE */}
          <div className="w-full rounded-3xl overflow-hidden shadow-md">
            <Image
              src={tracking}
              alt="Shipment"
              width={700}
              height={600}
              className="w-full h-[300px] md:h-[560px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">
            <h2 className="md:text-start text-center">Track Shipments, With Ease</h2>
            <p className="md:text-start text-center text-second mt-3">
              Check your parcel's latest updates and delivery status right here.
            </p>

            {/* FORM CARD */}
            <div className="mt-8 bg-white rounded-3xl drop-shadow-[0_4px_100px_rgba(0,0,0,0.08)] p-10">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
               Track Your Orders Easily

              </h4>

              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Enter your tracking code"
                  className="w-full rounded-lg px-4 py-3 bg-[#f5f5f5] outline-none focus:ring-2 focus:ring-[#013EFE] transition"
                />
                <p className="text-second text-[15px] mt-2">
                  Eg: FrisbI_0987578ABC01
                </p>
              </div>

              <div className="mt-5">
                <Link
                  href="#"
                  className="w-full block bg-primary text-[16px] text-center text-white font-semibold py-3 px-12 rounded-full transition duration-300"
                >
                  Track Now
                </Link>
              </div>

              <div className="mt-6">
                <h4 className="text-gray-900 font-semibold text-base">
                  Can't Find Your Order Details?
                </h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Your AWB number was sent to you via Email and SMS at the time of order confirmation.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="">
        <FAQ />
      </section>

      <section className=" bg-[#F1F2F6] mx-auto overflow-x-hidden ">
        <ContactSection />
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

export default Trackyourpackage;
