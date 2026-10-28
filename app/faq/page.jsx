import Faq from "@/page/Faq";
import React from "react";

export const metadata = {
  title: "Luggage Delivery FAQs | Frisbi",
  description:
    "Have questions about door-to-door luggage delivery in Bangalore? Get clear answers on booking, pricing, safety, and pickup slots from Frisbi experts.",
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
                "@id": "https://frisbi.in/faq/#webpage",
                "url": "https://frisbi.in/faq",
                "name": "Frequently Asked Questions | Doorstep Luggage Delivery – Frisbi",
                "description": "Find answers to common questions about Frisbi doorstep luggage delivery, booking procedures, baggage size limits, transit safety, and tracking.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/faq/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/faq/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://frisbi.in"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "FAQ",
                    "item": "https://frisbi.in/faq"
                  }
                ]
              }
            ]
          }
          )
        }}
      />
      <Faq />
    </div>
  );
}

export default page;