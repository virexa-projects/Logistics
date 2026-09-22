"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Can Frisbi handle bulk luggage shipments for corporate events?",
    answer:
      "Yes. Frisbi specializes in bulk luggage handling for corporate events, conferences, offsites, and relocations. We coordinate pickups from multiple locations and deliver to single or multiple destinations based on your requirements.",
  },
  {
    question: "Do we get a dedicated account manager for corporate bookings?",
    answer:
      "Yes. Every corporate account is assigned a dedicated account manager who serves as your single point of contact from planning through delivery. They coordinate logistics, provide updates, and resolve any issues throughout your shipment.",
  },
  {
    question: "How does pricing work for corporate luggage delivery?",
    answer:
      "Corporate pricing is customized based on shipment volume, distance, pickup and delivery locations, service speed, and any special requirements. Contact us with your details to receive a tailored quote that fits your budget and timeline.",
  },
  {
    question:
      "Can Frisbi coordinate luggage pickup and delivery with flight schedules?",
    answer:
      "Yes. We schedule pickups and deliveries aligned with your flight times, event check-ins, hotel bookings, and conference schedules. Your account manager ensures timing works seamlessly with your travel plans.",
  },
  {
    question: "Is insurance available for corporate luggage shipments?",
    answer:
      "Yes. Insurance coverage is available for corporate shipments based on declared luggage value. Discuss coverage limits with your account manager during booking to protect high-value bags and contents.",
  },
  {
    question: "Can we track all bags in a corporate shipment separately?",
    answer:
      "Yes. Each bag receives individual tracking so you can monitor every piece of luggage separately. Your account manager provides consolidated reports showing status updates for all bags in your shipment.",
  },
  {
    question: "Does Frisbi handle employee relocation luggage?",
    answer:
      "Yes. Frisbi manages employee relocation luggage across cities. We coordinate pickups from employee homes, track bags individually, and deliver to new office locations or residences based on your relocation timeline.",
  },
  {
    question: "What cities does Frisbi cover for corporate luggage delivery?",
    answer:
      "Frisbi covers 25,000+ pincodes across India, including major metros, tier-2 cities, and smaller towns. We handle inter-city transfers, multi-location pickups, and event venue deliveries across our entire network.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:pt-16  md:pb-24 px-4">
      <h2 className="text-center mb-10 md:mb-12 lg:mb-16">
        Frequently asked questions
      </h2>

      <div className="space-y-6">
        {visibleFaqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`transition-all duration-300 rounded-2xl ${
                isOpen
                  ? "bg-white p-6 shadow-2xl"
                  : "py-5 px-2 border-b border-gray-200"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer select-none gap-4"
                onClick={() => toggle(i)}
              >
                <h4
                  className={`text-lg transition-colors duration-200 ${
                    isOpen ? "font-semibold text-gray-900" : "font-medium text-gray-900"
                  }`}
                >
                  {faq.question}
                </h4>
                <div className="shrink-0 text-black">
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-6 h-6 transition-transform duration-200" />
                  )}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-second leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="btn-primary hover:scale-105 transition-all"
          >
            View More
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="btn-primary hover:scale-105 transition-all"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
}
