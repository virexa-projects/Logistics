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
    canonical: "https://frisbi.in/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "FAQPage",
                "@id": "https://frisbi.in/faq/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How does Frisbi's luggage delivery service work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Frisbi provides door-to-door luggage delivery across India. You can book online, we pick up your bags from your doorstep, securely transport them, and deliver them to your destination address with live tracking."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does standard vs express delivery take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Standard delivery offers cost-effective pan-India baggage transport, while Express delivery prioritizes urgent shipments with a faster turnaround time of 3 to 5 days."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is my luggage insured during transit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, all shipments handled by Frisbi include professional handling and secure transit protocols across 25,000+ pincodes in India."
                    }
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://frisbi.in/faq/#webpage",
                "url": "https://frisbi.in/faq",
                "name": "Luggage Delivery FAQs | Baggage Shipping Questions Answered | Frisbi",
                "description": "Find answers to common questions about Frisbi's luggage delivery service. Learn about pricing, booking, tracking, delivery times, insurance, and baggage handling across India.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "mainEntity": {
                  "@id": "https://frisbi.in/faq/#faq"
                }
              }
            ]
          })
        }}
      />
      <Faq />
    </div>
  );
}

export default page;