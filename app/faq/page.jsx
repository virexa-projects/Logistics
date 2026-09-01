import Faq from "@/page/Faq";
import React from "react";

export const metadata = {
  title: "Luggage Delivery FAQs | Baggage Shipping Questions Answered | Frisbi",
  description:
    "Find answers to common questions about Frisbi's luggage delivery service. Learn about pricing, booking, tracking, delivery times, insurance, and baggage handling across India. ",
  keywords: [
    "luggage delivery faqs india, baggage shipping questions, luggage courier frequently asked questions, baggage delivery service faq, luggage shipping questions india, how does luggage delivery work, baggage courier common questions, luggage transport faq india, frisbi service questions, baggage delivery information india.",
  ],
  alternates: {
    canonical: "https://frisbi.in/faqs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <Faq />
    </div>
  );
}

export default page;
