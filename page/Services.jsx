"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import servicesmobile from "@/asset/shippment/services-banner.svg";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE

// Assets
import heroBg from "@/asset/services.png";
import one from "@/asset/service/1.png";
import two from "@/asset/service/2.png";
import three from "@/asset/service/3.png";

// Components
import ServicesSection from "@/components/ServiceCard";
import MarqueeLogos from "@/components/MarqueeLogos";

import FAQSection from "@/components/AccordionServices";
import ContactSection from "@/components/ContactSection";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/ComparisonServices";
export default function Services() {
  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <div className="-mt-24 -mt-16">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden md:block hidden"
        >
          <Image
            src={heroBg}
            alt="Services Hero"
            fill
            priority
            className="md:object-contain object-cover bg-center"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black text-3xl mb-4 md:text-4xl font-semibold ">
              Luggage Delivery Services
            </h1>
            <p className="text-black mb-4 text-sm md:text-base">
             Thoughtfully built to make travel easier, calmer, and more predictable across India.

            </p>

            {/* CTA */}
            <Link
              href="/contact-us"
              className="btn-primary hover:scale-105 transition-all"
            >
              Speak with our team

            </Link>
          </div>
        </motion.section>

        {/* mobile section */}
        <section className="relative bg-white overflow-hidden md:hidden">
          <div className="container mx-auto px-4 py-20 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT — CONTENT */}
              <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-black text-3xl mb-4 md:text-4xl font-semibold ">
                  Luggage Delivery Services

                </h1>
                <p className="text-black mb-4 text-sm md:text-base">
                  Thoughtfully built to make travel easier, calmer, and more predictable across India.
                </p>

                {/* CTA */}
                <Link
                  href="/contact-us"
                  className="btn-primary hover:scale-105 transition-all"
                >
                  Speak with our team

                </Link>
              </div>

              {/* RIGHT — IMAGE */}
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[420px] flex justify-center">
                <Image
                  src={servicesmobile}
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


<section className=" ">
        <Comparison />
      </section>
      <section className="bg-[#F1F2F6] ">
        <ServicesSection />
      </section>

      <section className="  mx-auto relative px-4 py-12 md:py-16 lg:py-24 sm:px-6 lg:px-8">
        <Testimonials />
      </section>

      <section className=" bg-[#F1F2F6] mx-auto overflow-x-hidden ">
        <ContactSection />
      </section>
      <section className="">
        <FAQSection />
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
            <h2 className=" text-white mb-4">Your bags can travel smarter than you think.</h2>

            <p className="text-white mb-8 text-sm md:text-base">
             Pick a service. Book online. Travel lighter.

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
