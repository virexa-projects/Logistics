"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import servicesmobile from "@/asset/shippment/services-banner.svg";
import bg from "@/asset/profiles/cta-banner.svg";

// Assets
import heroBg from "@/asset/services.png";

// Components
import ServicesSection from "@/components/ServiceCard";
import MarqueeLogos from "@/components/MarqueeLogos";
import FAQSection from "@/components/AccordionServices";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/ComparisonServices";

export default function Services() {
  return (
    <div className="w-full">
      {/* ================= HERO ================= */}
      <div className="-mt-24">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden md:block hidden"
        >
          <Image
            src={heroBg}
            alt="Reliable Luggage Shipping & Baggage Delivery Services | Frisbi"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="md:object-contain object-cover bg-center"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black text-3xl mb-4 md:text-4xl font-semibold ">
              Reliable Luggage Shipping & Baggage Delivery Services
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
                <h2
                  className="text-black font-semibold mb-4"
                  style={{ fontSize: "32px", lineHeight: "1.40" }}
                >
                  Reliable Luggage Shipping & Baggage Delivery Services in Bangalore
                </h2>
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
                  alt="Reliable Luggage Shipping & Baggage Delivery Services in Bangalore"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <Comparison />
      </section>

      <section className="bg-[#F1F2F6]">
        <ServicesSection
          showFeatures={true}
          heading="Five ways to move your luggage. One way to travel lighter."
        />
      </section>

      <section className="container mx-auto relative px-4 py-12 md:py-16 lg:py-24 sm:px-6 lg:px-8">
        <Testimonials />
      </section>

      <section className="bg-[#F1F2F6] mx-auto overflow-x-hidden">
        <ContactSection />
      </section>

      <section>
        <FAQSection />
      </section>

      <section className="w-full px-4 py-12 md:py-20 md:pb-0">
        <div className="relative container mx-auto rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="CTA background"
            fill
            sizes="(max-width: 1220px) 100vw, 1220px"
            className="object-cover"
          />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center py-16 md:py-20 px-6"
          >
            <h2 className="text-white mb-4">Your bags can travel smarter than you think.</h2>

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
