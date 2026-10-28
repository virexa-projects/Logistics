"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ContactSection from "@/components/Contactmain";
import contactmobile from "@/asset/shippment/contact-banner.svg";
import ContactUs from "@/asset/contact-us.png";

const TransformingCities = dynamic(() => import("@/components/Locations"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const MarqueeLogos = dynamic(() => import("@/components/MarqueeLogos"), { ssr: true });

function Haveanyqueries() {
  return (
    <div>
      <div className="-mt-24 -mt-16">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden md:block hidden"
        >
          {/* Background Image */}
          <Image
            src={ContactUs} // your hero image path
            alt="Contact Frisbi"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="md:object-contain object-cover bg-center"
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black mb-4">
              Contact Frisbi
            </h1>
            <p className="text-black  text-sm md:text-base">
              Tell us what you’ve packed, overpacked, and where it all needs to go. We’ll handle the planning
            </p>
          </div>
        </motion.section>

        {/* mobile section */}
        <section className="relative bg-white overflow-hidden md:hidden">
          <div className="container mx-auto px-4 py-20 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* LEFT — CONTENT */}
              <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
                <h2
                  className="text-black font-semibold mb-4"
                  style={{ fontSize: "32px", lineHeight: "1.40" }}
                >
                  Baggage Shipping & Luggage Pickup Support in Bangalore
                </h2>
                <p className="text-black mb-4 text-sm md:text-base">
                  Please send us an email using the form provided. Phone calls
                  are also effective.
                </p>

                {/* CTA */}
              </div>

              {/* RIGHT — IMAGE */}
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[420px] flex justify-center">
                <Image
                  src={contactmobile}
                  alt="Contact Frisbi baggage shipping and pickup support"
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

      <section className="py-12 md:pt-24 md:pb-24">
        <ContactSection />
      </section>
      <section className="">
        <TransformingCities />
      </section>

      <section className="  mx-auto relative px-4 py-12 md:pt-20 md:pb-0  sm:px-6 lg:px-8">
        <Testimonials />
      </section>
      <MarqueeLogos />
    </div>
  );
}

export default Haveanyqueries;
