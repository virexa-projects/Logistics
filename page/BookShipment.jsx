"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ShipmentForm from "@/components/ShipmentForm";
import FAQ from "@/components/AccordionCorporate";
import bookshipment from "@/asset/book-shipment.png";
import Link from "next/link";
import aboutmobile from "@/asset/shippment/book-shipment.svg";


function BookShipment({ bookingData }) {
  return (
    <div>
      <div className="-mt-24">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[460px] md:h-[460px] overflow-hidden md:block hidden"
        >
          {/* Background Image */}
          <Image
            src={bookshipment}
            alt="Book Luggage Shipment Online | Frisbi"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="md:object-contain object-cover bg-center"
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-black mb-4 md:text-[36px] md:font-semibold md:leading-[40px]">Book Shipment</h1>
            <p className="text-black mb-4 text-sm md:text-base">
              India’s trusted luggage delivery service, built to make travel
              lighter, smarter, and stress-free.
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
                <p className="text-black mb-4 text-3xl">Book Shipment</p>

                <p className="text-black mb-4 text-sm md:text-base">
                  India’s trusted luggage delivery service, built to make travel
                  lighter, smarter, and stress-free.
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
                  src={aboutmobile}
                  alt="Book luggage shipment delivery online"
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


      <div>
        <ShipmentForm bookingData={bookingData} />
      </div>

      <section className="py-12 md:pb-0">
        <FAQ />
      </section>

    </div>
  );
}

export default BookShipment;
