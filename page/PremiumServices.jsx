"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import herobg from "@/asset/service/standard-services.png";
import one from "@/asset/service/2.png";
import location from "@/asset/location.png";
import ContactSection from "@/components/ContactSection";
import ServiceFAQSection from "@/components/ServiceAccordionPremium";
import CallToAction from "@/components/CallToActionPremium";
import Comparison from "@/components/ComparisonPremium";

import PricingStructure from "@/components/PricingStructurePremium";
import Keyfurture from "@/components/KeyfutureexpressPremium";
import PackageGuidelines from "@/components/PackageGuidelines";
import HowItWorks from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";

import TransformingCities from "@/components/Locations";

function PremiumServices() {
  const idealFor = [
    "High-value electronics",
    "Confidential documents",
    "Corporate & enterprise shipments",
    "Jewelry & luxury items",
    "Medical & lab equipment",
    "Fragile & sensitive goods",
  ];

  const ensures = [
    "Secure handling",
    "Professional pickup",
    "Cost-efficient delivery",
    "Full tracking visibility",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const [open, setOpen] = useState(1);

  const faqData = [
    {
      id: 1,
      title: "1. Maximum Security",
      content: "Tamper-proof seals & minimal handling points.",
    },
    {
      id: 2,
      title: "2. Best for High-Value Goods",
      content: "Perfect for expensive & sensitive shipments.",
    },
    {
      id: 3,
      title: "3. Guaranteed Priority",
      content: "No delays. No compromise.",
    },
    {
      id: 4,
      title: "4. Complete Transparency",
      content: "Live updates, call support & delivery proof.",
    },
    {
      id: 5,
      title: "5. Peace of Mind",
      content: "Handled by trained professionals only.",
    },
  ];

  return (
    <div className="-mt-20">
      {/* HERO SECTION */}
      <section className="relative h-[650px] md:h-[660px] rounded-3xl p-2">
        <Image
          src={herobg}
          alt="Hero Background"
          fill
          priority
          className="object-cover rounded-3xl p-2"
        />

        <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-2 rounded-full mb-6"
          >
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">✨</span>
              Because some deliveries deserve more than speed.
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-black mb-6"
          >
            Premium Delivery
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mb-6"
          >
            Elite, white-glove logistics for your most valuable and time-critical shipments.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-purple-100 max-w-2xl mb-10"
          >
            <span className="font-semibold text-white">Best for: </span>
            High-value goods, confidential documents, luxury items, fragile cargo & VIP customers.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white px-8 py-3 text-sm sm:text-base font-semibold rounded-full hover:scale-105 transition-all">
              Book Now
            </button>

            <button className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full text-sm sm:text-base hover:bg-white/20 transition-all">
              View Pricing
            </button>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full py-12 md:py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <Image
            src={one}
            alt="Overview"
            width={500}
            height={500}
            className="rounded-3xl w-full h-56 sm:h-72 md:h-80 lg:h-[450px] object-cover"
          />

          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frisbi Overview
            </h2>

            <p className="text-second text-base leading-relaxed mb-6">
              Premium Delivery is our most advanced and exclusive logistics service, designed for shipments that demand maximum security, priority handling, and personalized care.
            </p>
             <p className="text-second text-base leading-relaxed mb-6">
              Every Premium shipment is handled with dedicated resources, minimal touchpoints, and real-time supervision from pickup to final delivery.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100">
                <h4 className="text-lg font-semibold mb-4">Ideal for:</h4>
                <ul className="space-y-3">
                  {idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-black">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-100">
                <h4 className="text-lg font-semibold mb-4">
                  This service ensures:
                </h4>
                <ul className="space-y-3">
                  {ensures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-black">
                      <Check className="w-5 h-5 text-green-600 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS + PRICING */}
      <section className="bg-[#F1F2F6]">
        <PricingStructure />
        <Keyfurture />
      </section>

      {/* <PackageGuidelines /> */}
      <Comparison />
      <HowItWorks />

      <TransformingCities />
      {/* HOW TO SHIP SECTION */}
      <section
        className="px-4 md:px-10 py-28 py-10 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/asset/background.png')` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div>
            <Image src={location} alt="Location" width={500} height={500} />
          </div>

          {/* ACCORDION */}
          <div>
            <h2 className="mb-7">Why Choose Premium Delivery?</h2>

            <p className="mb-6">Benefits of Choosing Premium Delivery</p>

            <div>
              {faqData.map((step) => (
                <div key={step.id} className="border-b py-4">
                  <button
                    onClick={() => setOpen(open === step.id ? null : step.id)}
                    className="flex w-full justify-between items-center text-left"
                  >
                    <span className="font-bold text-[22px]">{step.title}</span>
                    {open === step.id ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>

                  <AnimatePresence>
                    {open === step.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="text-second mt-3 pr-4">
                          {step.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className=" bg-[#000] mx-auto ">
        <ContactSection />
      </section>
      <section className="py-24">
        <ServiceFAQSection />
      </section>

      <CallToAction />
    </div>
  );
}

export default PremiumServices;
