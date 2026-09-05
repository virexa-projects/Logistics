"use client";

import {
  MapPin,
  Route,
  Weight,
  Puzzle,
  PackageCheck,
  ShieldCheck,
  BadgeCheck,
  Repeat,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import illustration from "@/asset/common-illustrator.png";

function PricingStructure() {
  const factors = [
    {
      icon: MapPin,
      title: "Where Your Luggage Travels",
      description: "From origin to destination, and the distance in between.",
    },
    {
      icon: Route,
      title: "How Far They Go",
      description: "Pay less per km as distance increases.",
    },
    {
      icon: Weight,
      title: "What They Weigh",
      description: "Starting from 5 kg up to 30 kg.",
    },
    {
      icon: Puzzle,
      title: "Optional Add-Ons",
      description: "Protection services available when required.",
    },
  ];

  const addOns = [
    { name: "Special care packages", icon: PackageCheck },
    { name: "Fragile item protection", icon: ShieldCheck },
    { name: "Extended insurance coverage", icon: BadgeCheck },
    { name: "Return Pickup Service", icon: Repeat },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">How Your Price Is Calculated</h2>
          <p className="text-second max-w-2xl mx-auto">
            Transparent pricing based on four simple factors
          </p>
        </motion.div>

        {/* FACTOR CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {factors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                  <factor.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl text-second font-medium">
                  {index + 1}
                </span>
              </div>

              <h4 className="mb-2">{factor.title}</h4>
              <p className="text-second">{factor.description}</p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10 items-stretch">

          {/* LEFT BLUE CARD */}
          <div className="bg-[#1448FF] text-white p-10 rounded-3xl flex items-center">
            <span className="text-2xl font-semibold leading-[1.6]">
             Standard Delivery Keeps More <br/> Money in Your Pocket
            </span>
          </div>

          {/* RIGHT ADD-ONS CARD */}
          <div className="bg-[#E0E1FF] rounded-3xl p-8 flex flex-col lg:flex-row gap-8 items-center">
            
            {/* TEXT */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6">
                Power Up with Add-Ons
              </h3>

              <ul className="space-y-4 text-[16px] font-semibold">
                {addOns.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <Image
              src={illustration}
              alt="Pricing add-ons illustration"
              width={420}
              height={420}
              className="rounded-3xl object-cover w-full lg:w-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingStructure;
