"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export const trackFaqData = [
  {
    question: "How can I track my luggage delivery online with Frisbi?",
    answer: (
      <>
        You can track your luggage delivery online through the Track Your Package page on the Frisbi website. Enter your tracking code in the tracking field and click the Track Now button to check your shipment&apos;s latest updates and delivery status. Your AWB number is sent to your registered email address and mobile number through email and SMS notifications at the time of order confirmation. Use the number provided to check your shipment information conveniently.
      </>
    ),
    plainAnswer:
      "You can track your luggage delivery online through the Track Your Package page on the Frisbi website. Enter your tracking code in the tracking field and click the Track Now button to check your shipment's latest updates and delivery status. Your AWB number is sent to your registered email address and mobile number through email and SMS notifications at the time of order confirmation. Use the number provided to check your shipment information conveniently.",
  },
  {
    question: "Where can I find my Frisbi AWB number to track my luggage?",
    answer: (
      <>
        Your Frisbi AWB number is shared through email and SMS when your order is confirmed. Check the email address and mobile number you provided during booking to find your tracking details. The AWB number is required to enter your shipment information on the Track Your Package page. Keep this number available so you can check your luggage delivery status whenever required.
      </>
    ),
    plainAnswer:
      "Your Frisbi AWB number is shared through email and SMS when your order is confirmed. Check the email address and mobile number you provided during booking to find your tracking details. The AWB number is required to enter your shipment information on the Track Your Package page. Keep this number available so you can check your luggage delivery status whenever required.",
  },
  {
    question: "How can I receive updates about my luggage shipment after booking with Frisbi?",
    answer: (
      <>
        Frisbi provides shipment status updates through SMS, WhatsApp and email notifications. Customers can also check their shipment information through the website tracking dashboard and customer support chat. These options help you stay informed about your luggage shipment during the delivery process. However, live tracking availability may vary depending on the region. You can use the{" "}
        <Link href="/track-your-package" className="text-primary hover:underline font-medium">
          Frisbi Track Your Package page
        </Link>{" "}
        to check the available shipment updates.
      </>
    ),
    plainAnswer:
      "Frisbi provides shipment status updates through SMS, WhatsApp and email notifications. Customers can also check their shipment information through the website tracking dashboard and customer support chat. These options help you stay informed about your luggage shipment during the delivery process. However, live tracking availability may vary depending on the region. You can use the Frisbi Track Your Package page (https://frisbi.in/track-your-package) to check the available shipment updates.",
  },
  {
    question: "Does Frisbi provide live luggage tracking for all delivery locations?",
    answer: (
      <>
        Frisbi provides a website tracking dashboard where customers can check their luggage shipment status and receive available updates. However, live tracking availability may vary by region. Customers may also receive shipment notifications through SMS, WhatsApp and email. The availability of tracking information depends on the service location. For more details about shipment tracking and status updates, refer to the{" "}
        <Link href="/shipping-policy" className="text-primary hover:underline font-medium">
          Frisbi Shipping Policy
        </Link>
        .
      </>
    ),
    plainAnswer:
      "Frisbi provides a website tracking dashboard where customers can check their luggage shipment status and receive available updates. However, live tracking availability may vary by region. Customers may also receive shipment notifications through SMS, WhatsApp and email. The availability of tracking information depends on the service location. For more details about shipment tracking and status updates, refer to the Frisbi Shipping Policy (https://frisbi.in/shipping-policy).",
  },
  {
    question: "What should I do if I cannot find my Frisbi tracking number or shipment updates?",
    answer: (
      <>
        If you cannot find your AWB number, first check the email and SMS received when your booking was confirmed. The tracking number is shared through these channels at the time of order confirmation. If you still need help with your booking or tracking information, you can contact Frisbi customer support at{" "}
        <a href="mailto:support@frisbi.in" className="text-primary hover:underline font-medium">
          support@frisbi.in
        </a>
        . You can also call{" "}
        <a href="tel:+917418152531" className="text-primary hover:underline font-medium">
          +91 7418152531
        </a>
        , available from 9 AM to 9 PM, seven days a week. Visit the{" "}
        <Link href="/contact-us" className="text-primary hover:underline font-medium">
          Frisbi Contact Us page
        </Link>{" "}
        for assistance.
      </>
    ),
    plainAnswer:
      "If you cannot find your AWB number, first check the email and SMS received when your booking was confirmed. The tracking number is shared through these channels at the time of order confirmation. If you still need help with your booking or tracking information, you can contact Frisbi customer support at support@frisbi.in. You can also call +91 7418152531, available from 9 AM to 9 PM, seven days a week. Visit the Frisbi Contact Us page (https://frisbi.in/contact-us) for assistance.",
  },
  {
    question: "How long does Frisbi take to deliver luggage after pickup?",
    answer: (
      <>
        Frisbi&apos;s estimated luggage delivery time depends on the distance between the pickup and delivery locations and the selected service category, which includes Standard, Express and Premium. Other factors, such as traffic, weather conditions and regulatory checkpoints, may also affect delivery schedules. Although Frisbi strives to meet scheduled delivery times, delays may occur due to circumstances beyond operational control. You can refer to the{" "}
        <Link href="/shipping-policy" className="text-primary hover:underline font-medium">
          Frisbi Shipping Policy
        </Link>{" "}
        for more information about delivery timeframes.
      </>
    ),
    plainAnswer:
      "Frisbi's estimated luggage delivery time depends on the distance between the pickup and delivery locations and the selected service category, which includes Standard, Express and Premium. Other factors, such as traffic, weather conditions and regulatory checkpoints, may also affect delivery schedules. Although Frisbi strives to meet scheduled delivery times, delays may occur due to circumstances beyond operational control. You can refer to the Frisbi Shipping Policy (https://frisbi.in/shipping-policy) for more information about delivery timeframes.",
  },
  {
    question: "What happens if the receiver is unavailable when Frisbi delivers the luggage?",
    answer: (
      <>
        The receiver must be available on the scheduled delivery date and provide the booking ID or required verification details during handover. If the receiver is unavailable or cannot be reached, Frisbi offers one free rescheduling attempt. Additional delivery attempts may involve rescheduling or storage fees. If the luggage remains unattended beyond 24 hours, it may be returned to the pickup location, with return charges applicable. For complete information about unsuccessful deliveries, read the{" "}
        <Link href="/shipping-policy" className="text-primary hover:underline font-medium">
          Frisbi Shipping Policy
        </Link>
        .
      </>
    ),
    plainAnswer:
      "The receiver must be available on the scheduled delivery date and provide the booking ID or required verification details during handover. If the receiver is unavailable or cannot be reached, Frisbi offers one free rescheduling attempt. Additional delivery attempts may involve rescheduling or storage fees. If the luggage remains unattended beyond 24 hours, it may be returned to the pickup location, with return charges applicable. For complete information about unsuccessful deliveries, read the Frisbi Shipping Policy (https://frisbi.in/shipping-policy).",
  },
];

export default function AccordionTrack() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:pt-20 md:pb-24 px-4">
      <h2 className="text-center mb-10 md:mb-12 lg:mb-16">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {trackFaqData.map((faq, i) => {
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
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`track-faq-answer-${i}`}
                id={`track-faq-question-${i}`}
                className="w-full text-left flex justify-between items-center cursor-pointer select-none gap-4 focus:outline-none"
              >
                <h3
                  className={`!text-[20px] transition-colors duration-200 ${
                    isOpen ? "font-semibold text-gray-900" : "font-medium text-gray-900"
                  }`}
                >
                  {faq.question}
                </h3>
                <div className="shrink-0 text-black">
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 transition-transform duration-200" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-6 h-6 transition-transform duration-200" aria-hidden="true" />
                  )}
                </div>
              </button>

              <motion.div
                id={`track-faq-answer-${i}`}
                role="region"
                aria-labelledby={`track-faq-question-${i}`}
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-second leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
