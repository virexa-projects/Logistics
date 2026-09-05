"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "How much does it cost to ship my luggage?",
    answer:
      "Price depends on where you're shipping from, where it's going, how many bags, and how fast you need it. Use our rate calculator, enter your details and get the exact price instantly before you book.",
  },
  {
    question: "Can I ship just one bag or does it need to be more?",
    answer:
      "One bag works perfectly. So do ten. We handle single suitcases, multiple bags, backpacks, duffel bags, whatever you're traveling with.",
  },
  {
    question: "What if something goes wrong with my luggage?",
    answer:
      "Every bag gets printed labels and is sealed at pickup and tracked all the way. If there's an issue, our support team handles it immediately. You can also add insurance when booking for valuable items.",
  },
  {
    question: "Can I use this service for religious travel?",
    answer:
      "Yes. Many travelers use Frisbi for trips to Varanasi, Tirupati, Shirdi, Amritsar, Ajmer, and other pilgrimage destinations. Ship your bags so you can focus on the journey, not the weight.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard Delivery takes 5-7 days. Express takes 3-5 days. Premium takes 3 days. Choose based on when you need your bags and how much you want to spend.",
  },
  {
    question: "What happens if I need to change my delivery address?",
    answer:
      "Call or message support before your bags start moving. If they haven't left the pickup city yet, we can update the delivery address without issues.",
  },
  {
    question: "Can my friend collect my luggage at the destination?",
    answer:
      "Yes. Anyone can receive your luggage as long as they're at the delivery address and can sign for it. Just let them know it's coming.",
  },
  {
    question: "Do you deliver to small towns or just big cities?",
    answer:
      "We cover 25,000+ pincodes including metros, small towns, temple cities, hill stations, and remote areas. If people live there, we will probably deliver there. Check your pincode on the rate calculator.",
  },
  {
    question: "Can I send luggage for a round trip?",
    answer:
      "Yes. Book two separate shipments. One for the outbound journey and one for the return. Or book both together and let your account manager coordinate the timing.",
  },
  {
    question: "Is there a weight limit per bag?",
    answer:
      "Individual bags can weigh between 5 kg to 30 kg. If your bag is heavier, contact support and we'll figure out the best way to handle it.",
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
                <h4 className="">{faq.question}</h4>
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
