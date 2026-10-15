"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Can Frisbi handle bulk luggage shipments for corporate events?",
    a: "Yes. Frisbi specializes in bulk luggage handling for corporate events, conferences, offsites, and relocations. We coordinate pickups from multiple locations and deliver to single or multiple destinations based on your requirements.",
  },
  {
    q: "Do we get a dedicated account manager for corporate bookings?",
    a: "Yes. Every corporate account is assigned a dedicated account manager who serves as your single point of contact from planning through delivery.",
  },
  {
    q: "How does pricing work for corporate luggage delivery?",
    a: "Corporate pricing is customized based on shipment volume, distance, pickup and delivery locations, service speed, and any special requirements.",
  },
  {
    q: "Can Frisbi coordinate luggage pickup and delivery with flight schedules?",
    a: "Yes. We schedule pickups and deliveries aligned with your flight times, event check-ins, hotel bookings, and conference schedules.",
  },
  {
    q: "Is insurance available for corporate luggage shipments?",
    a: "Yes. Insurance coverage is available for corporate shipments based on declared luggage value. Discuss coverage limits with your account manager.",
  },
  {
    q: "Can we track all bags in a corporate shipment separately?",
    a: "Yes. Each bag receives individual tracking so you can monitor every piece of luggage separately with live real-time status updates.",
  },
  {
    q: "Does Frisbi handle employee relocation luggage?",
    a: "Yes. Frisbi manages employee relocation luggage across cities with door-to-door pickup and delivery.",
  },
  {
    q: "What cities does Frisbi cover for luggage delivery?",
    a: "Frisbi covers 25,000+ pincodes across India, including all major metros, tier-2 cities, and smaller towns.",
  },
];

export default function MobileFaq() {
  const [openFaq, setOpenFaq] = useState(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-10 px-4 bg-white border-t border-gray-100">
      <h2 className="text-xl font-bold text-center text-gray-900 mb-6">
        Frequently asked questions
      </h2>

      <div className="space-y-3">
        {displayedFaqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-200 pb-3.5 pt-1">
            <button
              type="button"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex justify-between items-start text-left gap-3 focus:outline-none"
            >
              <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                {faq.q}
              </span>
              <span className="shrink-0 mt-0.5 text-gray-500">
                {openFaq === i ? (
                  <ChevronUp className="w-4 h-4 text-[#013EFE]" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            <AnimatePresence>
              {openFaq === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-2 text-xs text-gray-600 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          type="button"
          onClick={() => setShowAllFaqs(!showAllFaqs)}
          className="bg-[#013EFE] hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow transition active:scale-95"
        >
          {showAllFaqs ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
}
