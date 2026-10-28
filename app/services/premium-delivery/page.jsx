import PremiumServices from "@/page/PremiumServices";
import React from "react";

export const metadata = {
  title: "Premium Luggage Delivery in Bangalore | VIP Baggage Transport | Frisbi",
  description:
    " Looking for VIP treatment for your bags? Frisbi offers secure, white-glove premium luggage delivery and custom handling across Bangalore. Book your priority service today!.",
  keywords: [
    "premium luggage delivery service, white glove luggage delivery, secure baggage handling"
  ],
  alternates: {
    canonical: "https://frisbi.in/services/premium-delivery",
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
                "@type": "Service",
                "@id": "https://frisbi.in/services/premium-delivery/#service",
                "name": "Premium Luggage Delivery Service",
                "description": "White-glove, high-security door-to-door luggage shipping across India. Features dedicated handling, priority dispatch, and enhanced protective transit for high-value baggage.",
                "url": "https://frisbi.in/services/premium-delivery",
                "provider": {
                  "@id": "https://frisbi.in/#organization"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://frisbi.in/services/premium-delivery/#webpage",
                "url": "https://frisbi.in/services/premium-delivery",
                "name": "Premium Luggage Delivery | Secure Door-to-Door Shipping – Frisbi",
                "description": "Experience white-glove luggage handling with Frisbi Premium Delivery. Enjoy dedicated support, real-time tracking, and priority doorstep service across India.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/services/premium-delivery/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/services/premium-delivery/#breadcrumb",
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
                    "name": "Services",
                    "item": "https://frisbi.in/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Premium Delivery",
                    "item": "https://frisbi.in/services/premium-delivery"
                  }
                ]
              }
            ]
          }
          )
        }}
      />
      <PremiumServices />
    </div>
  );
}

export default page;