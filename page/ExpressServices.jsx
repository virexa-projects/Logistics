"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Check, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MarqueeLogos from "@/components/MarqueeLogos";

import SaveTime from "@/asset/icon/save-time.svg";
import Safe from "@/asset/icon/safe.svg";
import Business from "@/asset/icon/faster.svg";
import Visibility from "@/asset/icon/live-tracking.svg";
import Peace from "@/asset/icon/delivery.svg";
// Assets
import herobg from "@/asset/service/express.svg";
import one from "@/asset/service/express-cover.png";

// 🔥 CLIENT-ONLY COMPONENTS (SSR SAFE)
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});
const ServiceFAQSection = dynamic(
  () => import("@/components/ServiceAccordionExpress"),
  { ssr: false }
);
const CallToAction = dynamic(() => import("@/components/CallToActionExpress"), {
  ssr: false,
});
const Comparison = dynamic(() => import("@/components/Comparison"), {
  ssr: false,
});
const PricingStructure = dynamic(
  () => import("@/components/PricingStructureExpress"),
  { ssr: false }
);
const Keyfuture = dynamic(() => import("@/components/Keyfutureexpress"), {
  ssr: false,
});
const HowItWorks = dynamic(() => import("@/components/OurProcessexpress"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
const TransformingCities = dynamic(() => import("@/components/Locations"), {
  ssr: false,
});

export default function ExpressServices() {
  // ✅ FIX: removed <number | null>
  const [open, setOpen] = useState(1);

  const steps = [
    {
      number: "1",
      icon: SaveTime,
      title: "Save Time",
      description: "Designed for cost-conscious customers and SMEs.",
    },
    {
      number: "2",
      icon: Safe,
      title: "Safe Priority Handling",
      description: "Barcode tracking, sealed bags, professional handlers.",
    },
    {
      number: "3",
      icon: Business,
      title: "Faster Business Operations",
      description: "Ideal for B2B & enterprise clients.",
    },
    {
      number: "4",
      icon: Visibility,
      title: "Complete Visibility",
      description: "Live tracking and proof of delivery.",
    },
    {
      number: "5",
      icon: Peace,
      title: "Peace of Mind",
      description: "Guaranteed delivery timelines.",
    },
  ];

  const idealFor = [
    "Pilgrimage trips with fixed travel dates",
    "Tourist bookings with hotel check-ins",
    "Work transfers requiring quick luggage movement",
    "Festival visits with family timelines",
    "Travel plans that cannot wait",
  ];

  const ensures = [
    "Faster transit times",
    "Priority pickup and delivery",
    "Higher handling care",
    "Minimal transit delays",
    "Dedicated support",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="-mt-24 -mt-16">
      {/* HERO */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 pt-28 pb-12 md:pt-28 md:pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT — CONTENT (UNCHANGED) */}
            <div className="relative z-10">
              {/* <motion.div
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-2 rounded-full mb-6"
              >
               
              </motion.div> */}

              <p className="text-primary mb-5 text-center md:text-start">
                ✨ When time matters, choose Express
              </p>
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-black text-4xl md:text-6xl font-black mb-6 text-center md:text-start"
              >
                Express Delivery
              </motion.h1>

              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-black text-lg max-w-2xl mb-6 text-center md:text-start"
              >
                Fast luggage delivery when time matters most across India.
              </motion.p>

              <motion.p className="text-black text-lg max-w-2xl mb-8 text-center md:text-start">
                When your bags need to reach faster, we make it happen. Get your luggage delivered within 3 to 5 days with priority handling and flexible scheduling.
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4 justify-center md:justify-start"
              >
                <Link
                  href="/book-shipment"
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
            <div className="relative w-full h-[300px] md:h-[420px]">
              <Image
                src={herobg}
                alt="Express Delivery"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-3 items-center gap-10">
          <Image
            src={one}
            alt="Overview"
            className="rounded-3xl h-[400px] object-cover"
          />

          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-start">
              Frisbi Express Overview
            </h2>
            <p className="text-second mb-8 text-center md:text-start">
              Express Delivery is our priority luggage service built for travelers who need their bags faster without compromising on safety.
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

      {/* CLIENT ONLY SECTIONS */}
      <PricingStructure />
      <Keyfuture />
      <Comparison />
      <HowItWorks />
      <TransformingCities />

      <section className=" ">
        <div className="py-24 pb-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-4">Why Choose Express Delivery?</h2>

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

      <section className="py-16">
        <Testimonials />
      </section>
      <section
        className=" bg-[#F1F2F6] mx-auto overflow-x-hidden "
        id="contact"
      >
        <ContactSection />
      </section>

      <section className="">
        <ServiceFAQSection />
      </section>
     
      <CallToAction />

       <MarqueeLogos />
    </div>
  );
}
