"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How does door-to-door luggage delivery work?",
    answer:
      "You book a pickup, we collect your luggage from your home, hotel, hostel, or office and deliver it directly to your destination anywhere in India — safe, secure, and on time.",
  },
  {
    question: "Is my luggage safe during transit?",
    answer:
      "Yes. All luggage is handled by trained professionals using tamper-proof protocols and secure logistics. You also have the option to add paid insurance for higher-value items.",
  },
  {
    question: "How do I track my luggage after pickup?",
    answer:
      "You can monitor your shipment in real time through our website tracking system, which displays live location, transit status, and delivery updates at every stage.",
  },
  {
    question: "Do you pick up luggage from hotels, hostels, PGs, and Airbnbs?",
    answer:
      "Yes. We provide pickup and delivery at homes, hotels, PGs, hostels, offices, co-living spaces, Airbnbs, and homestays across India.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery timelines vary by distance and service speed. You will be informed of the estimated delivery date before booking and will receive updates throughout the transit period.",
  },
  {
    question: "Do you offer packaging service?",
    answer:
      "Yes. We provide premium packaging — including bubble wrap, cushioning, waterproof sealing, and safety-grade boxes — as an optional add-on for fragile and valuable belongings.",
  },
  {
    question: "Is this service suitable for students relocating between cities?",
    answer:
      "Absolutely. Students commonly use our service for hostel / PG / campus shifting, as we safely move clothes, essentials, personal luggage, and sports kits at affordable prices.",
  },
  {
    question: "Do you support corporate and group travellers?",
    answer:
      "Yes. We manage group luggage movement for corporate trips, conferences, retreats, and business events, with a dedicated SPOC for coordination and on-time delivery.",
  },
  {
    question: "Can I change pickup or delivery details after booking?",
    answer:
      "Once a booking is confirmed and the shipment is dispatched, pickup or delivery details cannot be modified. However, if needed, the shipment can be returned to the original pickup location through a return request.",
  },
  {
    question: "Is insurance included?",
    answer:
      "Insurance is optional and paid, recommended for electronics, luxury items, musical instruments, sports equipment, and other high-value belongings.",
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
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
