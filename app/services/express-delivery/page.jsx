import ExpressServices from '@/page/ExpressServices'
import React from 'react'

export const metadata = {
  title: "Express Luggage Delivery Service in India | Fast Bag Delivery",
  description:
    "Need urgent baggage delivery? Frisbi offers express luggage delivery across India with priority handling and delivery within 3 to 5 days.",
  keywords: [
    "express luggage delivery service, fast baggage delivery, urgent luggage delivery India"
  ],
  alternates: {
    canonical: "https://frisbi.in/services/express-delivery",
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
      <ExpressServices />
    </div>
  )
}

export default page