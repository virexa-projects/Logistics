"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
   {
      question: "Is tracking available for Standard Delivery?",
      answer: "Yes, you get complete real-time tracking with push notifications."
    },
    {
      question: "Can I schedule a pickup?",
      answer: "Yes! Choose any available pickup slot between 9AM – 9PM."
    },
    {
      question: "What if my package is fragile?",
      answer: "Choose Fragile Handling Add-on for extra safety."
    },
    {
      question: "Do you offer COD?",
      answer: "COD is available in selected cities for e-commerce sellers."
    },
    {
      question: "Can I change the delivery address?",
      answer: "Yes, address revision is allowed before parcel dispatch."
    },
    {
      question: "What is the maximum weight allowed?",
      answer: "25 kg per shipment."
    },
    {
      question: "What items are not allowed?",
      answer: "Hazardous, illegal, liquid chemicals, flammables."
    }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-center mb-10">Frequently asked questions</h2>

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
                <div className="shrink-0 text-gray-600">
                  {isOpen ? (
                    <Minus className="w-6 h-6 transition-transform duration-200" />
                  ) : (
                    <Plus className="w-6 h-6 transition-transform duration-200" />
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

      {/* View More / View Less */}
      <div className="flex justify-center mt-10">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="btn-primary hover:scale-105 transition-all">
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
