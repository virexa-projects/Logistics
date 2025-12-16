"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function StickyStepsOverlap() {
  const steps = [
    {
      step: "STEP 1",
      title: "Priority Pickup",
      desc: "Your parcel is picked up ahead of standard shipments.",
      icon: "📦",
    },
    {
      step: "STEP 2",
      title: "Faster Transit",
      desc: "Minimal hub delays with optimized routes.",
      icon: "📡",
    },
    {
      step: "STEP 3",
      title: "Live Real-Time Tracking",
      desc: "Track your parcel at every stage.",
      icon: "🚢",
    },

    {
      step: "STEP 4",
      title: "Enhanced Insurance Coverage",
      desc: "Higher insurance protection than Standard Delivery.",
      icon: "🚢",
    },
    {
      step: "STEP 5",
      title: "Instant Notifications",
      desc: "SMS & Email alerts for every status update.",
      icon: "🚢",
    },
    {
      step: "STEP 6",
      title: "GST Invoice & Digital Receipt",
      desc: "Auto-generated invoices for businesses.",
      icon: "🚢",
    },
    {
      step: "STEP 7",
      title: "Extended Customer Support",
      desc: "Priority support during delivery hours.",
      icon: "🚢",
    },
    {
      step: "STEP 8",
      title: "Pan-India Express Network",
      desc: "Strong coverage across metro & tier-1 cities.",
      icon: "🚢",
    },
  ];

  const scrollRef = (useRef < HTMLDivElement) | (null > null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollY(scrollRef.current.scrollTop);
    }
  };

  return (
 <section className="py-20 bg-[#F4F2F7]">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:gap-20">

          {/* LEFT SECTION – STICKY ON DESKTOP */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm tracking-widest text-gray-500 font-semibold mb-4">
                DRIVING SUPPLY CHAIN SUCCESS
              </p>

              <h2 className="font-bold leading-tight mb-6">Key Features</h2>

              <p className="text-gray-500 text-lg mb-8 max-w-lg">
                Supply delivers tailored logistics and freight solutions, empowering
                businesses with fast, safe, and efficient transport across North America.
              </p>

              <button className="px-6 py-3 bg-primary text-white rounded-full">
                Our Services
              </button>
            </div>
          </div>

          {/* RIGHT SECTION – SCROLLABLE */}
          <div className="lg:w-1/2 space-y-6 mt-10 lg:mt-0">
            {steps.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-10 rounded-3xl transition-all duration-300"
              >
                <p className="text-xs tracking-widest text-gray-400 font-semibold mb-6">
                  {item.step}
                </p>

                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-500 mb-6">{item.desc}</p>

                <div className="text-5xl text-purple-500">{item.icon}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>


  );
}
