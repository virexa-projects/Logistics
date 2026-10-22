"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import bg from "@/asset/profiles/cta-banner.svg";

import MobileHero from "./mobile-home/MobileHero";
import HowYourBagsTravel from "@/components/HowYourBagsTravel";
import MobileAbout from "./mobile-home/MobileAbout";
import MobileServices from "./mobile-home/MobileServices";

import HowToShip from "@/components/HowToShip";
import CustomSlider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/AccordionCorporate";
import ContactSection from "@/components/ContactSection";
import MarqueeLogos from "@/components/MarqueeLogos";
import MobileBottomNav from "./mobile-home/MobileBottomNav";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MobileHome() {
  return (
    <div className="w-full bg-white text-gray-900 pb-24">
      {/* 1. Hero with PIN calculator & rotating slides title/desc */}
      <MobileHero />

      {/* 2. Packaging / How Your Bags Travel */}
      <HowYourBagsTravel variant="mobile" />

      {/* 3. About Frisbi */}
      <MobileAbout />

      {/* 4. Five ways to move your luggage (Sticky stacking cards) */}
      <MobileServices />

      {/* 5. How we move your luggage (Steps) */}
      <HowToShip />

      {/* 6. Why people choose Frisbi (Slider) */}
      <section className="relative bg-primary overflow-x-hidden">
        <CustomSlider />
      </section>

      {/* 7. Customer testimonials */}
      <section className="container mx-auto relative px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <Testimonials />
      </section>

      {/* 8. Frequently asked questions */}
      <section className="overflow-x-hidden">
        <div>
          <FAQSection />
        </div>
      </section>

      {/* 9. Contact Section */}
      <section className="bg-[#F1F2F6] mx-auto overflow-x-hidden">
        <ContactSection />
      </section>

      {/* 10. Blue CTA Banner */}
      <section className="w-full px-4 py-12 md:py-16">
        <div className="relative container mx-auto rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="CTA background"
            fill
            className="object-cover"
            priority
          />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 text-center py-16 md:py-20 px-6"
          >
            <h2 className="text-white mb-4">
              On-Time Luggage Delivery You Can Plan Around
            </h2>

            <p className="text-white mb-8 max-w-2xl mx-auto text-sm md:text-base">
              We know your world does not fit into a 7 kg suitcase. That’s why
              we move your baggage for you, so you can carry everything you want
              without worrying about weight or limits.
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

      {/* 11. Powered by marquee */}
      <MarqueeLogos />

      {/* 12. Fixed bottom navigation */}
      <MobileBottomNav />
    </div>
  );
}
