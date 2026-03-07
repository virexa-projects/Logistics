"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import bg from "@/asset/profiles/cta-banner.svg"; // <<< CHANGE TO YOUR BG IMAGE

import Maximum from "@/asset/icon/security-lock.svg";
import goods from "@/asset/icon/goods.svg";
import Transparency from "@/asset/icon/transparency.svg";
import Priority from "@/asset/icon/safe.svg";
import Peace from "@/asset/icon/delivery.svg";
import MarqueeLogos from "@/components/MarqueeLogos";

// Assets
import herobg from "@/asset/service/premium-banner-img.svg";
import one from "@/asset/service/express-cover.png";


// Components
import ContactSection from "@/components/ContactSection";
import ServiceFAQSection from "@/components/ServiceAccordionPremium";
import CallToAction from "@/components/CallToActionPremium";
import Comparison from "@/components/ComparisonPremium";
import PricingStructure from "@/components/PricingStructurePremium";
import Keyfuture from "@/components/KeyfutureexpressPremium";
import HowItWorks from "@/components/OurProcesspremium";
import Testimonials from "@/components/Testimonials";
import TransformingCities from "@/components/Locations";

export default function PremiumServices() {
  /* ----------------------------------------
     ✅ SSR FIX (IMPORTANT)
  ---------------------------------------- */
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(1);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Prevent server-side crash (HTMLDivElement error)
  if (!mounted) return null;

  const idealFor = [
    "Expensive luggage with high-value contents",
    "Pilgrimage trips carrying offerings and valuables",
    "Higher standards. Fewer handoffs.",
    "Priority movement that stays on track",
    "Dedicated support when it matters",
    "Built for journeys where nothing can go wrong",
  ];
   const ensures = [
    "Delivered within 3 days",
    "Free premium packaging included",
    "Priority pickup and delivery slots",
    "Dedicated support throughout the journey",
   
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      number: "1",
      icon: Maximum,
      title: "Maximum Security",
      description: "Tamper-proof seals & minimal handling points.",
    },
    {
      number: "2",
      icon: goods,
      title: "Best for High-Value Goods",
      description: "Perfect for expensive & sensitive shipments.",
    },
    {
      number: "3",
      icon: Priority,
      title: "Guaranteed Priority",
      description: "No delays. No compromise.",
    },
    {
      number: "4",
      icon: Transparency,
      title: "Complete Transparency",
      description: "Live updates, call support & delivery proof.",
    },
    {
      number: "5",
      icon: Peace,
      title: "Peace of Mind",
      description: "Handled by trained professionals only.",
    },
  ];

  return (
    <div className="-mt-24 -mt-16">
      {/* ================= HERO ================= */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 pt-28 pb-12 md:pt-28 md:pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT — CONTENT (UNCHANGED) */}
            <div className="relative z-10">
              {/* <motion.div
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="inline-block bg-white/10 backdrop-blur border border-white/20 px-6 py-2 rounded-full mb-6"
              >
               
              </motion.div> */}
              <p className="text-primary mb-5 text-center md:text-start">
                ✨ Because some deliveries deserve more core
              </p>

              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-black text-4xl md:text-5xl font-bold mb-6 text-center md:text-start"
              >
                Premium Delivery
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-black max-w-2xl mb-4 text-center md:text-start"
              >
                White-glove luggage delivery service for your most valuable belongings.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-black max-w-2xl mb-6 text-center md:text-start"
              >
                Best for luggage that needs careful handling, from heavy gears to high-value items.
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4 justify-center md:justify-start"
              >
                <Link
                  href="#contact"
                  className="btn-primary hover:scale-105 transition-all"
                >
                  Book Now
                </Link>

                <Link
                  href="/rate-calculator"
                  className="btn-primary-outline hover:scale-105 transition-all"
                >
                  Rate Calculator
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-[420px] flex justify-center">
              <Image
                src={herobg}
                alt="Premium Delivery"
                fill
                priority
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-12 md:py-16 px-4">
            <div className="container mx-auto grid md:grid-cols-3 items-center gap-10">
              <Image
                src={one}
                alt="Overview"
                className="rounded-3xl h-[400px] object-cover"
              />
    
              <div className="md:col-span-2">
                <h2 className="text-4xl font-bold mb-4 text-center md:text-start">
                  Frisbi Premium Overview
                </h2>
                <p className="text-second mb-8 text-center md:text-start">
                  Premium Delivery is our highest tier of luggage delivery service built for travelers who want absolute care, guaranteed timelines, and dedicated attention from start to finish.

                </p>
    
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-3xl ">
                    <h4 className="font-semibold mb-4">Ideal for:</h4>
                    <ul className="space-y-3 font-semibold">
                      {idealFor.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <Check className="text-primary w-5 h-5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
    
                  <div className="bg-green-50 p-6 rounded-3xl ">
                    <h4 className="font-semibold mb-4">This service ensures:</h4>
                    <ul className="space-y-3 font-semibold">
                      {ensures.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <Check className="text-green-600 w-5 h-5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="bg-[#F1F2F6]">
        <PricingStructure />
        <Keyfuture />
      </section>

      <Comparison />
      <HowItWorks />
      <TransformingCities />

      {/* ================= WHY PREMIUM ================= */}
      <section className=" ">
        <div className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-4">Why Choose Premium Delivery?</h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Image src={step.icon} alt="" width={28} height={28} />
                      </div>
                      {/* <div className="absolute -top-3 -right-1 w-7 h-7 bg-white text-black rounded-full shadow-xl flex items-center justify-center text-xs font-semibold">
                        {step.number}
                      </div> */}
                    </div>
                    <h4 className="mb-2">{step.title}</h4>
                    <p className="text-second">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <Testimonials />
      </section>

      <section
        className=" bg-[#F1F2F6] mx-auto overflow-x-hidden "
        id="contact"
      >
        <ContactSection />
      </section>

      <ServiceFAQSection />

   
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
            <h2 className=" text-white mb-4">Ready to ship your valuable luggage with complete confidence?</h2>

            <p className="text-white mb-8 text-sm md:text-base">
              Free packaging, dedicated support, guaranteed timelines, and white-glove care from door to door.

            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="btn-white hover:scale-105 transition-all"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="">
   <MarqueeLogos />
</section>
    </div>
  );
}
