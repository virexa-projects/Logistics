"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SupportImg from "@/asset/why-choose/support.png";
import SafeSecureImg from "@/asset/why-choose/safe-secure.png";
import DoorToDoorImg from "@/asset/why-choose/door-to-door.png";
import OnTimeImg from "@/asset/why-choose/on-time-delivery.png";
import LiveTrackingImg from "@/asset/why-choose/live-tracking.png";
import TierImg from "@/asset/why-choose/tier.png";

const whyChooseFeatures = [
  {
    title: "Dedicated Support Throughout",
    desc: "No chatbots. No waiting three days for an email reply. Get a dedicated contact who knows your shipment.",
    img: SupportImg,
  },
  {
    title: "Costs Less Than Carrying It",
    desc: "Excess baggage fees add up fast, so you can ship 20 kg or more for far less and pay once, without surprises.",
    img: SafeSecureImg,
  },
  {
    title: "No More Weight Limits",
    desc: "Pack what you actually need instead of packing around limits, and let us handle the weight.",
    img: DoorToDoorImg,
  },
  {
    title: "Built for Last-Minute Plans Too",
    desc: "Forgot to ship earlier? Express and Premium services get your luggage moving fast. Same day pickups available. Delivered in 3-5 days or less.",
    img: OnTimeImg,
  },
  {
    title: "Live Updates Keep You in the Loop",
    desc: "Real time tracking plus SMS and WhatsApp alerts at every step. You always know where your luggage is. No more guess games.",
    img: LiveTrackingImg,
  },
  {
    title: "Nationwide Luggage Delivery Network",
    desc: "Not just metros. We deliver across 25,000+ pincodes. From big cities to smaller towns, we deliver wherever your journey takes you.",
    img: TierImg,
  },
];

export default function MobileWhyChoose() {
  const [whyIndex, setWhyIndex] = useState(0);

  const prevWhy = () => {
    setWhyIndex((prev) =>
      prev === 0 ? whyChooseFeatures.length - 1 : prev - 1
    );
  };

  const nextWhy = () => {
    setWhyIndex((prev) =>
      prev === whyChooseFeatures.length - 1 ? 0 : prev + 1
    );
  };

  const currentFeature = whyChooseFeatures[whyIndex];

  return (
    <section className="py-10 px-4 bg-[#013EFE] text-white">
      <h2 className="text-xl font-bold text-center leading-tight mb-6 px-2">
        Why people choose frisbi for luggage delivery
      </h2>

      {/* Feature Card */}
      <div className="max-w-sm mx-auto bg-white rounded-[26px] p-5 text-gray-900 shadow-xl min-h-[360px] flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-2">
            {currentFeature.title}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            {currentFeature.desc}
          </p>
        </div>

        <div className="relative w-full h-[180px] my-3">
          <Image
            src={currentFeature.img}
            alt={currentFeature.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Nav Controls */}
      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          onClick={prevWhy}
          type="button"
          aria-label="Previous feature"
          className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow hover:bg-gray-100 active:scale-95 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-1.5">
          {whyChooseFeatures.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setWhyIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all ${
                dotIdx === whyIndex ? "bg-white w-4" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextWhy}
          type="button"
          aria-label="Next feature"
          className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow hover:bg-gray-100 active:scale-95 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
