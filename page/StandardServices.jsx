"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Check, Minus, NetworkIcon, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import MarqueeLogos from "@/components/MarqueeLogos";

// Assets
import LowCost from "@/asset/icon/low-cost.svg";
import Secure from "@/asset/icon/secure.svg";
import Network from "@/asset/icon/network.svg";
import Updates from "@/asset/icon/update.svg";
import Hidden from "@/asset/icon/hidden-charges.svg";

import herobg from "@/asset/service/standard-banner-img.svg";
import one from "@/asset/service/standard-overview-1.webp";

// 🔥 SSR-SAFE DYNAMIC IMPORTS
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});
const ServiceFAQSection = dynamic(
  () => import("@/components/ServiceAccordion"),
  { ssr: false }
);
const CallToAction = dynamic(() => import("@/components/CallToActionStandard"), {
  ssr: false,
});

const PricingStructure = dynamic(
  () => import("@/components/PricingStructure"),
  { ssr: false }
);
const Keyfuture = dynamic(() => import("@/components/Keyfuture"), {
  ssr: false,
});
const PackageGuidelines = dynamic(
  () => import("@/components/PackageGuidelines"),
  { ssr: false }
);
const HowItWorks = dynamic(() => import("@/components/OurProcess"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
const TransformingCities = dynamic(() => import("@/components/Locations"), {
  ssr: false,
});

const WhyChooseProcess = dynamic(
  () => import("@/components/WhychooseProcess"),
  {
    ssr: false,
  }
);

export default function Services() {
  const [open, setOpen] = useState(1);
  const steps = [
    {
      number: "1",
      icon: LowCost,
      title: "Low-Cost Shipping",
      description: "Designed for cost-conscious customers and SMEs.",
    },
    {
      number: "2",
      icon: Secure,
      title: "Safe & Secure Transport",
      description: "Barcode tracking, sealed bags, professional handlers.",
    },
    {
      number: "3",
      icon: Network,
      title: "Wide Delivery Network",
      description: "Fast-growing logistics chain covering India.",
    },
    {
      number: "4",
      icon: Updates,
      title: "Shipment Updates",
      description: "Every movement is recorded & notified.",
    },
    {
      number: "5",
      icon: Hidden,
      title: "No Hidden Charges",
      description: "Upfront pricing before booking.",
    },
  ];
  const idealFor = [
    "Students & families",
    "Working professionals",
    "Frequent travelers",
    "Hostel & PG residents",
    "Individuals & first-time movers",
    "Senior citizens",
  ];

  const ensures = [
    "Cost-efficient delivery",
    "Careful handling at every step",
    "Trained delivery partners",
    "Complete tracking transparency","24x7 support throughout",
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
            {/* LEFT — CONTENT */}
            <div className="relative z-10 mt-10 text-center md:text-left flex flex-col items-center md:items-start">
              <p className="text-primary mb-5">
              Safe. Affordable. Reliable.
              </p>

              <motion.h1 {...fadeUp} className="text-black mb-6">
                Standard Delivery
              </motion.h1>

              <motion.p {...fadeUp} className="text-black max-w-2xl mb-6">
                Because moving luggage shouldn’t move your budget

              </motion.p>

              <motion.p {...fadeUp} className="text-black max-w-2xl mb-8">
                Send your bags ahead for less than you’d expect. Secure, pan-India delivery that lets you travel lighter, without paying extra for it.
              </motion.p>

              <motion.div
                {...fadeUp}
                className="flex  flex-row gap-4 justify-center md:justify-start"
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
            <div className="relative w-full h-[260px] sm:h-[300px] md:h-[420px] flex justify-center">
              <Image
                src={herobg}
                alt="Hero"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* OVERVIEW */}
      <section className="py-12 md:py-24 md:pb-20  px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 order-2 items-center">
          <Image
            src={one}
            alt="Overview"
            className="rounded-3xl h-[380px] object-cover "
          />

          <div className="md:col-span-1  order-1">
            <h2 className="text-4xl font-bold mb-4 text-center md:text-start">
              Frisbi Standard Overview
            </h2>
            <p className="text-second mb-6 text-center md:text-start">
              Cost-effective shipping that doesn't compromise on safety
            </p>

            <div className="grid lg:grid-cols-2 gap-6 ">
              <div className="bg-blue-50 p-6 rounded-3xl ">
                <h4 className="font-semibold mb-4">Who gets the most value:
</h4>
                <ul className="space-y-3 font-semibold">
                  {idealFor.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-3xl ">
                <h4 className="font-semibold mb-4">What you can count on:</h4>
                <ul className="space-y-3 font-semibold">
                  {ensures.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingStructure />
      <Keyfuture />
      <PackageGuidelines />
      <HowItWorks />
      <TransformingCities />

      {/* FAQ */}
      <section className=" ">
        <div className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-4">Why Choose Standard Delivery?</h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Image src={step.icon} alt="icon
                        " width={28} height={28} />
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

      <section className="pt-24 px-4">
        <ServiceFAQSection />
      </section>

      

      <CallToAction />
       <MarqueeLogos />
    </div>
  );
}
