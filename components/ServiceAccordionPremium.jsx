"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
 {
      question: 'What makes Premium Delivery different from Express?',
      answer: 'Premium Delivery includes free professional packaging, faster delivery within 3 days, enhanced insurance coverage, dedicated customer success manager, and white-glove handling care. Express focuses on speed while Premium focuses on both speed and exceptional care.'
    },
    {
      question: 'Is packaging really included for free?',
      answer: 'Yes. Premium Delivery includes professional packaging with high-quality boxes, bubble wrap, corner protectors, printed shipping labels, and tamper-proof sealing at no extra charge. Our team brings materials to your pickup location.'
    },
    {
      question: 'Can I use Premium for pilgrimage travel luggage?',
      answer: 'Absolutely. Premium Delivery is ideal for pilgrimage trips where you are carrying offerings, puja items, or valuable religious articles. The enhanced security and careful handling ensure your sacred items reach safely.'
    },
    {
      question: 'What is the maximum declared value I can insure?',
      answer: 'Premium Delivery supports higher insurance limits based on your declared luggage value. Discuss your specific needs with our team during booking to get appropriate coverage for expensive contents.'
    },
    {
      question: 'How quickly does Premium deliver compared to other services?',
      answer: 'Premium delivers within 3 days from pickup, which is faster than Standard (5-7 days) and slightly quicker than Express (3-5 days). Premium also guarantees this timeline with dedicated priority handling.'
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
    <div className="w-full max-w-3xl mx-auto pt-24 px-4">
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
      {/* <div className="flex justify-center mt-10">
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
      </div> */}
    </div>
  );
}
