"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Which service should I choose for a pilgrimage trip?",
    answer:
      "If you're planning weeks ahead and want to save money, choose Standard Delivery. If your trip is coming up soon, Express Delivery gets your bags there faster. For elderly travelers or valuable religious items, Premium offers extra care and faster delivery.",
  },
  {
    question: "Can I upgrade my service after booking?",
    answer:
      "Yes, but only before pickup happens. Contact support immediately after booking to upgrade from Standard to Express or Premium. Once bags are in transit, the service level cannot be changed.",
  },
  {
    question: "What's the real difference between Express and Premium?",
    answer:
      "Express focuses on speed (3-5 days) with priority handling. Premium adds free professional packaging, dedicated customer success manager, and guaranteed 3-day delivery. Premium costs more but includes services that are paid add-ons in Express.",
  },
  {
    question: "Do all services cover the same cities?",
    answer:
      "Yes. Standard, Express, Premium, Corporate, and Individual all cover the same 25,000+ pincodes across India. Service level affects speed and handling care, not where we deliver.",
  },
  {
    question: "Can I mix services in one booking?",
    answer:
      "No. Each booking uses one service level. If you're sending multiple bags and want different service levels, create separate bookings for each service type.",
  },
  {
    question: "Is insurance included in all services?",
    answer:
      "Basic coverage is included across all services. For higher-value luggage, you can purchase additional insurance during booking regardless of which service you choose.",
  },
  {
    question: "Which service is best for last-minute travel?",
    answer:
      "Premium Delivery offers same-day pickup slots and 3-day delivery, making it the fastest option for urgent travel. Express also works if you have 3-5 days before you need the bags.",
  },
  {
    question: "Can Corporate service be used for small businesses?",
    answer:
      "Absolutely. Corporate isn't just for large companies. Even if you're moving 5 employees or organizing a small team offsite, Corporate service provides dedicated coordination that makes logistics easier.",
  },
  {
    question: "What happens if I choose the wrong service?",
    answer:
      "Call support before pickup. We can switch your service level or cancel and rebook if needed. After pickup, changes become difficult as the logistics process has already started.",
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
    <div className="w-full max-w-3xl mx-auto py-12 md:pt-24  md:pb-16 px-4">
      <h2 className="text-center mb-10 md:mb-12 lg:mb-16">Frequently asked questions</h2>

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
