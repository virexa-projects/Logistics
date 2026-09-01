"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How fast is Express Delivery?",
    answer: "Express Delivery takes 3 to 5 days from pickup to delivery. Your luggage receives priority processing through our network, which speeds up sorting and transit times compared to Standard Delivery.",
  },
  {
    question: "Is same-day pickup available with Express?",
    answer: "Yes. Express Delivery offers same-day pickup slots based on availability in your city. Select your preferred time window during booking, and we confirm the earliest available slot.",
  },
  {
    question: "Can I track my Express Delivery luggage?",
    answer: "Yes. Every Express shipment includes live tracking with real-time updates. You receive SMS and WhatsApp notifications at each checkpoint from pickup to final delivery.",
  },
  {
    question: "What if I need to reschedule my Express pickup?",
    answer: "Contact your dedicated support person before the scheduled pickup time. We can reschedule your collection slot if your travel plans change before transit begins",
  },
  {
    question: "Does Express Delivery cover tourist and pilgrimage destinations?",
    answer: "Yes. Express Delivery covers 25,000+ pincodes across India, including popular pilgrimage sites, tourist cities, and remote temple towns. Check coverage by entering your destination during quote.",
  },
  {
    question: "What happens if my Express Delivery is delayed?",
    answer: "If an Express Delivery shipment is delayed beyond the committed timeline due to operational reasons, our support team proactively updates you and assists with next steps, including priority escalation and resolution to minimize impact on your travel plans.",
  },
   {
    question: "Is Express Delivery available for all luggage sizes and weights?",
    answer: "Express Delivery is available for most standard luggage sizes and weights. Very large, oversized, or unusually heavy items may be subject to specific limits or require special handling. During booking, simply enter your luggage details and we’ll instantly confirm Express availability and eligibility for your shipment.",
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
    <div className="w-full max-w-3xl mx-auto pt-24 px-4">
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
                  <h4 className="font-semibold text-lg">{faq.question}</h4>
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
