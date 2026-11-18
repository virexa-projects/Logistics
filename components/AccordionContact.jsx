"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export const contactFaqData = [
  {
    question: "How can I contact Frisbi for luggage pickup and delivery enquiries?",
    answer: (
      <>
        You can contact Frisbi by calling{" "}
        <a href="tel:+917418152531" className="text-primary hover:underline font-medium">
          +91 7418152531
        </a>{" "}
        between 9 AM and 9 PM, seven days a week. For general and business enquiries, you can email{" "}
        <a href="mailto:info@frisbi.in" className="text-primary hover:underline font-medium">
          info@frisbi.in
        </a>
        . You can also use the contact form on this page to submit your details and select whether your enquiry is related to individual or corporate services. For more information about the services, refer to the{" "}
        <Link href="/shipping-policy" className="text-primary hover:underline font-medium">
          Frisbi Shipping Policy
        </Link>
        .
      </>
    ),
    plainAnswer:
      "You can contact Frisbi by calling +91 7418152531 between 9 AM and 9 PM, seven days a week. For general and business enquiries, you can email info@frisbi.in. You can also use the contact form on this page to submit your details and select whether your enquiry is related to individual or corporate services. For more information about the services, refer to the Frisbi Shipping Policy (https://frisbi.in/shipping-policy).",
  },
  {
    question: "How can I check luggage delivery availability and charges with Frisbi?",
    answer: (
      <>
        Frisbi provides luggage pickup and delivery within selected cities, metro regions, airports and hotels through its partner networks. However, service availability may vary depending on the location. You can verify whether your pickup and delivery locations are serviceable during the booking process. To check the estimated charges for your luggage shipment, visit the{" "}
        <Link href="/rate-calculator" className="text-primary hover:underline font-medium">
          Frisbi Rate Calculator
        </Link>
        . For more details about service availability, read the{" "}
        <Link href="/shipping-policy" className="text-primary hover:underline font-medium">
          Frisbi Shipping Policy
        </Link>
        .
      </>
    ),
    plainAnswer:
      "Frisbi provides luggage pickup and delivery within selected cities, metro regions, airports and hotels through its partner networks. However, service availability may vary depending on the location. You can verify whether your pickup and delivery locations are serviceable during the booking process. To check the estimated charges for your luggage shipment, visit the Frisbi Rate Calculator (https://frisbi.in/rate-calculator). For more details about service availability, read the Frisbi Shipping Policy (https://frisbi.in/shipping-policy).",
  },
  {
    question: "When should I schedule my luggage pickup before travelling?",
    answer: (
      <>
        Frisbi recommends scheduling luggage pickup up to 24 hours before travel to help avoid delays. Customers can select available pickup slots while booking. If you choose a flexible pickup slot, the pickup team may arrive at any time within the selected time window. Make sure your luggage is securely packed and sealed, and that someone is available for the handover at the scheduled time. Read the{" "}
        <Link href="/shipping-policy" className="text-primary hover:underline font-medium">
          Shipping and Delivery Policy
        </Link>{" "}
        for more information.
      </>
    ),
    plainAnswer:
      "Frisbi recommends scheduling luggage pickup up to 24 hours before travel to help avoid delays. Customers can select available pickup slots while booking. If you choose a flexible pickup slot, the pickup team may arrive at any time within the selected time window. Make sure your luggage is securely packed and sealed, and that someone is available for the handover at the scheduled time. Read the Shipping and Delivery Policy (https://frisbi.in/shipping-policy) for more information.",
  },
  {
    question: "How can I get updates about my luggage delivery after booking?",
    answer: (
      <>
        Frisbi provides shipment status updates through SMS, WhatsApp and email notifications. Customers can also check their shipment status through the website tracking dashboard or customer support chat. Live tracking availability may vary by region. If you need additional assistance regarding your shipment, you can use the{" "}
        <Link href="/track-your-package" className="text-primary hover:underline font-medium">
          Frisbi Track Your Package
        </Link>{" "}
        page or contact Frisbi using the details provided on this page.
      </>
    ),
    plainAnswer:
      "Frisbi provides shipment status updates through SMS, WhatsApp and email notifications. Customers can also check their shipment status through the website tracking dashboard or customer support chat. Live tracking availability may vary by region. If you need additional assistance regarding your shipment, you can use the Frisbi Track Your Package (https://frisbi.in/track-your-package) page or contact Frisbi using the details provided on this page.",
  },
  {
    question: "What happens if the receiver is unavailable during luggage delivery?",
    answer: (
      <>
        If the receiver is unavailable or cannot be reached at the scheduled delivery time, Frisbi offers one free rescheduling attempt. Additional delivery attempts may involve rescheduling or storage fees. If the luggage remains unattended beyond 24 hours, it may be returned to the pickup location, with return charges applicable. You can read the{" "}
        <Link href="/shipping-policy" className="text-primary hover:underline font-medium">
          Frisbi Shipping Policy
        </Link>{" "}
        for the complete delivery procedure.
      </>
    ),
    plainAnswer:
      "If the receiver is unavailable or cannot be reached at the scheduled delivery time, Frisbi offers one free rescheduling attempt. Additional delivery attempts may involve rescheduling or storage fees. If the luggage remains unattended beyond 24 hours, it may be returned to the pickup location, with return charges applicable. You can read the Frisbi Shipping Policy (https://frisbi.in/shipping-policy) for the complete delivery procedure.",
  },
  {
    question: "What items are not allowed for luggage delivery through Frisbi?",
    answer: (
      <>
        Frisbi does not transport illegal, dangerous, restricted or prohibited items. These include cash, jewellery, gold, precious stones, liquids, explosives, toxic or flammable items, perishable goods and high-value items. Electronics without declaration and items restricted under applicable Indian laws and airport security regulations are also not accepted. Frisbi reserves the right to cancel shipments containing prohibited items. For complete information, refer to the{" "}
        <Link href="/terms-and-conditions" className="text-primary hover:underline font-medium">
          Frisbi Terms and Conditions
        </Link>
        .
      </>
    ),
    plainAnswer:
      "Frisbi does not transport illegal, dangerous, restricted or prohibited items. These include cash, jewellery, gold, precious stones, liquids, explosives, toxic or flammable items, perishable goods and high-value items. Electronics without declaration and items restricted under applicable Indian laws and airport security regulations are also not accepted. Frisbi reserves the right to cancel shipments containing prohibited items. For complete information, refer to the Frisbi Terms and Conditions (https://frisbi.in/terms-and-conditions).",
  },
];

export default function AccordionContact() {
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
        {contactFaqData.map((faq, i) => {
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
                aria-controls={`contact-faq-answer-${i}`}
                id={`contact-faq-question-${i}`}
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
                id={`contact-faq-answer-${i}`}
                role="region"
                aria-labelledby={`contact-faq-question-${i}`}
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
