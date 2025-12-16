"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How fast is Express Delivery?",
    answer: "Delivery typically happens within 24–72 hours.",
  },
  {
    question: "Is same-day delivery available?",
    answer: "Yes, on selected city routes.",
  },
  {
    question: "Is Express Delivery tracked?",
    answer: "Yes, live real-time tracking is included.",
  },
  {
    question: "Can I reschedule pickup?",
    answer: "Yes, before courier dispatch.",
  },
  {
    question: "What happens if delivery is delayed?",
    answer: "Our support team proactively assists and updates.",
  },
  {
    question: "Is Express available everywhere?",
    answer: "Currently available in major cities & expanding rapidly.",
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
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-center mb-10">Frequently asked questions</h2>

      <div className="space-y-6">
        {visibleFaqs.map((faq, i) => (
          <div key={i}>
            {openIndex === i ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-2xl shadow-2xl"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(i)}
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <Minus className="w-6 h-6 text-gray-600" />
                </div>

                <AnimatePresence>
                  <motion.p
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-4 text-second leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            ) : (
              <div
                className="flex justify-between items-center py-5 cursor-pointer border-b"
                onClick={() => toggle(i)}
              >
                <h4 className="font-medium text-lg text-gray-900">
                  {faq.question}
                </h4>
                <Plus className="w-6 h-6 text-gray-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View More / View Less */}
      <div className="flex justify-center mt-10">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="bg-primary text-[16px] text-white font-semibold py-3 px-12 rounded-full shadow-xl shadow-blue-500/50 transition"
          >
            View More
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="bg-gray-200 text-[16px] text-gray-900 font-semibold py-3 px-12 rounded-full transition"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
}
