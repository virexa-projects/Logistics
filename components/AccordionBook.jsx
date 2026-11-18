"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export const bookFaqData = [
  {
    question: "Which online payment methods are available for Frisbi luggage bookings?",
    answer: (
      <>
        Frisbi accepts several online payment methods for luggage shipment bookings, including UPI, wallets, net banking and debit or credit cards. Customers can choose an available payment method while completing the booking process. According to Frisbi&apos;s Terms and Conditions, an order is confirmed only after successful payment. The payment details and applicable service charges are included in the booking invoice. For complete information about payment conditions, read the{" "}
        <Link href="/terms-and-conditions" className="text-primary hover:underline font-medium">
          Frisbi Terms and Conditions
        </Link>
        .
      </>
    ),
    plainAnswer:
      "Frisbi accepts several online payment methods for luggage shipment bookings, including UPI, wallets, net banking and debit or credit cards. Customers can choose an available payment method while completing the booking process. According to Frisbi's Terms and Conditions, an order is confirmed only after successful payment. The payment details and applicable service charges are included in the booking invoice. For complete information about payment conditions, read the Frisbi Terms and Conditions (https://frisbi.in/terms-and-conditions).",
  },
  {
    question: "Is my Frisbi shipment booking confirmed immediately after submitting the booking form?",
    answer: (
      <>
        Submitting the booking form and confirming a shipment are two different steps. According to Frisbi&apos;s Terms and Conditions, an order is confirmed only after successful payment. Customers should complete the payment process to confirm their shipment request. The booking invoice displays relevant information, including customer details, shipment details, payment mode and total payable amount. You can visit the{" "}
        <Link href="/" className="text-primary hover:underline font-medium">
          Frisbi homepage
        </Link>{" "}
        to explore the luggage pickup and delivery service before proceeding with a booking.
      </>
    ),
    plainAnswer:
      "Submitting the booking form and confirming a shipment are two different steps. According to Frisbi's Terms and Conditions, an order is confirmed only after successful payment. Customers should complete the payment process to confirm their shipment request. The booking invoice displays relevant information, including customer details, shipment details, payment mode and total payable amount. You can visit the Frisbi homepage (https://frisbi.in/) to explore the luggage pickup and delivery service before proceeding with a booking.",
  },
  {
    question: "How can I estimate the cost of sending different types of luggage with Frisbi?",
    answer: (
      <>
        You can use the Frisbi Rate Calculator to get an estimated luggage delivery cost before proceeding with your shipment. The calculator asks for pickup and drop PIN codes, package type, delivery speed, weight and luggage dimensions. These details help calculate the applicable shipment charges. Frisbi considers both luggage weight and physical dimensions because larger bags occupy more space during transportation. The calculator also accounts for applicable remote-location surcharges when you enter the relevant PIN codes. Visit the{" "}
        <Link href="/rate-calculator" className="text-primary hover:underline font-medium">
          Frisbi Rate Calculator
        </Link>{" "}
        to estimate your shipment cost.
      </>
    ),
    plainAnswer:
      "You can use the Frisbi Rate Calculator to get an estimated luggage delivery cost before proceeding with your shipment. The calculator asks for pickup and drop PIN codes, package type, delivery speed, weight and luggage dimensions. These details help calculate the applicable shipment charges. Frisbi considers both luggage weight and physical dimensions because larger bags occupy more space during transportation. The calculator also accounts for applicable remote-location surcharges when you enter the relevant PIN codes. Visit the Frisbi Rate Calculator (https://frisbi.in/rate-calculator) to estimate your shipment cost.",
  },
  {
    question: "How does Frisbi's door-to-door luggage delivery service work?",
    answer: (
      <>
        Frisbi provides door-to-door luggage pickup and delivery, allowing customers to send their bags from a pickup location to their destination without carrying them throughout their journey. The service focuses on making luggage transportation more convenient for travellers. The Frisbi homepage also showcases different packaging methods, including reinforced cartons, bubble wrap cushioning, zip-lock sealing, industrial shrink wrapping and foam protection. These packaging methods are presented to explain how luggage can be protected during transportation. Visit the{" "}
        <Link href="/" className="text-primary hover:underline font-medium">
          Frisbi homepage
        </Link>{" "}
        to learn more about its luggage delivery service.
      </>
    ),
    plainAnswer:
      "Frisbi provides door-to-door luggage pickup and delivery, allowing customers to send their bags from a pickup location to their destination without carrying them throughout their journey. The service focuses on making luggage transportation more convenient for travellers. The Frisbi homepage also showcases different packaging methods, including reinforced cartons, bubble wrap cushioning, zip-lock sealing, industrial shrink wrapping and foam protection. These packaging methods are presented to explain how luggage can be protected during transportation. Visit the Frisbi homepage (https://frisbi.in/) to learn more about its luggage delivery service.",
  },
  {
    question: "How do I choose between Standard, Express and Premium luggage delivery services?",
    answer: (
      <>
        Frisbi offers different luggage delivery services based on customer requirements. Standard Delivery is designed for customers who prefer a budget-friendly option and have more time for delivery. Express Delivery is suitable for customers who need faster delivery with priority handling. Premium Delivery offers white-glove handling, free packaging and dedicated support, according to the Services page. Customers can explore these service categories and compare their features before selecting an option for their shipment. Visit the{" "}
        <Link href="/services" className="text-primary hover:underline font-medium">
          Frisbi Services page
        </Link>{" "}
        to understand the available delivery options.
      </>
    ),
    plainAnswer:
      "Frisbi offers different luggage delivery services based on customer requirements. Standard Delivery is designed for customers who prefer a budget-friendly option and have more time for delivery. Express Delivery is suitable for customers who need faster delivery with priority handling. Premium Delivery offers white-glove handling, free packaging and dedicated support, according to the Services page. Customers can explore these service categories and compare their features before selecting an option for their shipment. Visit the Frisbi Services page (https://frisbi.in/services) to understand the available delivery options.",
  },
  {
    question: "Which items are restricted when sending luggage through Frisbi?",
    answer: (
      <>
        Frisbi does not accept luggage containing items that are illegal, dangerous or restricted under applicable laws and airport security regulations. The prohibited items listed in its policies include cash, jewellery, gold, valuables, undeclared electronics, liquids, inflammable items, chemicals and sharp objects. Certain other restricted items may also be refused. Frisbi reserves the right to inspect shipments when required for compliance or security purposes. Customers should review the restrictions before preparing their luggage for transportation. Refer to the{" "}
        <Link href="/shipping-policy" className="text-primary hover:underline font-medium">
          Frisbi Shipping Policy
        </Link>{" "}
        for the complete list of shipping restrictions.
      </>
    ),
    plainAnswer:
      "Frisbi does not accept luggage containing items that are illegal, dangerous or restricted under applicable laws and airport security regulations. The prohibited items listed in its policies include cash, jewellery, gold, valuables, undeclared electronics, liquids, inflammable items, chemicals and sharp objects. Certain other restricted items may also be refused. Frisbi reserves the right to inspect shipments when required for compliance or security purposes. Customers should review the restrictions before preparing their luggage for transportation. Refer to the Frisbi Shipping Policy (https://frisbi.in/shipping-policy) for the complete list of shipping restrictions.",
  },
  {
    question: "How does Frisbi use the personal information provided during an online shipment booking?",
    answer: (
      <>
        Frisbi collects customer information to manage its luggage delivery services and related operations. This includes personal details, pickup and delivery information, booking history and payment-related information. According to its Privacy Policy, this information is used for service fulfilment, customer support, payment processing, billing, security and compliance. Frisbi may share relevant information with delivery partners, payment gateway providers and authorities when required for operational or legal purposes. The company also states that it does not sell customer data. Read the{" "}
        <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
          Frisbi Privacy Policy
        </Link>{" "}
        to understand how customer information is handled.
      </>
    ),
    plainAnswer:
      "Frisbi collects customer information to manage its luggage delivery services and related operations. This includes personal details, pickup and delivery information, booking history and payment-related information. According to its Privacy Policy, this information is used for service fulfilment, customer support, payment processing, billing, security and compliance. Frisbi may share relevant information with delivery partners, payment gateway providers and authorities when required for operational or legal purposes. The company also states that it does not sell customer data. Read the Frisbi Privacy Policy (https://frisbi.in/privacy-policy) to understand how customer information is handled.",
  },
];

export default function AccordionBook() {
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
        {bookFaqData.map((faq, i) => {
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
                aria-controls={`book-faq-answer-${i}`}
                id={`book-faq-question-${i}`}
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
                id={`book-faq-answer-${i}`}
                role="region"
                aria-labelledby={`book-faq-question-${i}`}
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
