"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Why do you need bag dimensions, not just weight?",
    answer:
      "Because luggage takes up physical space in our vehicles. A 15 kg compact bag fits efficiently. A 15 kg oversized bag takes space that could fit two compact bags. Dimensions help us calculate fair pricing for everyone.",
  },
  {
    question: "Can I reduce my cost by splitting one large bag into two smaller ones?",
    answer:
      "Not usually. Two smaller bags often cost similar to or more than one larger bag because we handle, seal, and track each bag separately. Pack efficiently into fewer bags when possible.",
  },
  {
    question: "Are there any hidden charges after I get the calculator quote?",
    answer:
      "No. The calculator price is what you pay unless your actual bag weight or dimensions differ significantly from what you entered. Always measure and weigh accurately for precise quotes.",
  },
  {
    question: "What happens if my bag is heavier than I estimated?",
    answer:
      "Our pickup team weighs and measures bags during collection. If there's a significant difference (3+ kg or much larger dimensions), they recalculate the price. Small differences (under 2 kg) usually don't change the cost.",
  },
  {
    question: "Do remote areas cost extra?",
    answer:
      "Some remote pincodes have small delivery surcharges. The calculator automatically includes these when you enter your exact pincode. You'll see the adjusted price in your quote.",
  },
  {
    question: "Can I negotiate the calculator price?",
    answer:
      "Standard pricing is fixed and transparent as per the quote. For very high volumes (10+ bags regularly) or corporate accounts, contact us for custom pricing agreements.",
  },
  {
    question: "Why does Standard delivery cost less if everything else is the same?",
    answer:
      "Standard takes longer (5-7 days) so we can optimize routes and vehicle loads. Express and Premium require priority handling, faster trucks, and dedicated scheduling, which increases operational costs reflected in pricing.",
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
      <h2 className="text-center mb-10 md:mb-12 lg:mb-16">Questions about pricing and payments</h2>

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
                  <h5 className="font-semibold text-lg">{faq.question}</h5>
                  <ChevronUp className="w-6 h-6 text-black" />
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
                <h5 className="">
                  {faq.question}
                </h5>
                <ChevronDown className="w-6 h-6 text-black" />
              </div>
            )}
          </div>
        ))}
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
