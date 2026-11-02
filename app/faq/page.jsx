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
                "name": "Luggage Delivery FAQs | Frisbi",
                "description": "Find answers to common questions about Frisbi doorstep luggage delivery, booking procedures, baggage size limits, transit safety, and tracking.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/faq/#breadcrumb"
                },
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Frisbi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Frisbi is a door-to-door luggage delivery service that ships your bags between cities across India, allowing you to travel hands-free."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which cities does Frisbi cover?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We deliver across 25,000+ pincodes in India including metros, tier-2 cities, pilgrimage and tourist destinations."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is Frisbi different from courier services?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Frisbi is built exclusively for luggage, with trained handling teams, secure packaging, and real-time tracking."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use Frisbi for items other than luggage?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Frisbi is exclusively for heavy luggage and travel bags. We don't ship commercial goods, electronics as standalone items, or non-luggage parcels."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Frisbi safe for valuable items in my luggage?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We transport luggage securely with sealed pickup, tracking throughout transit, and verified handling teams. We recommend customers pack valuables carefully and keep bags locked. Additional insurance for high-value contents can be purchased during booking."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need to pack my luggage in a special way?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not required but recommended. Lock your bags, wrap fragile items properly, and avoid loose packing. Premium service includes free professional packaging if needed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can senior citizens or elderly travelers use Frisbi?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. Many families book Frisbi specifically for elderly travelers so they don't have to lift or carry heavy bags during their journey."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What payment methods does Frisbi accept?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We accept UPI, credit cards, debit cards, and net banking. You get a custom quote tailored to your luggage delivery needs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is there a minimum or maximum number of bags I can send?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can send one bag or multiple bags. The minimum weight per bag is 10 kg, and the maximum weight per bag is 25 kg. For bags exceeding 25 kg, please contact our support team for special arrangements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Frisbi operate on weekends and holidays?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We operate 7 days a week including weekends and most holidays. Pickup and delivery schedules work throughout the week."
                    }
                  }
                ]
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