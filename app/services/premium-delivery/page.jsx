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
                "name": "Premium Luggage Delivery Service in India",
                "provider": {
                  "@id": "https://frisbi.in/#organization"
                },
                "description": "Frisbi offers premium luggage delivery with white-glove handling for valuable baggage, heavy gear, and sensitive items across India.",
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "serviceType": "Premium Luggage Delivery & White-Glove Shipping"
              },
              {
                "@type": "WebPage",
                "@id": "https://frisbi.in/services/premium-delivery/#webpage",
                "url": "https://frisbi.in/services/premium-delivery",
                "name": "Premium Luggage Delivery Service in India | White-Glove Handling",
                "description": "Frisbi offers premium luggage delivery with white-glove handling for valuable baggage, heavy gear, and sensitive items across India.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/services/premium-delivery/#service"
                },
                "mainEntity": {
                  "@id": "https://frisbi.in/services/premium-delivery/#service"
                }
              }
            ]
          })
        }}
      />
      <PremiumServices />
    </div>
  );
}

export default page;