import StandardServices from '@/page/StandardServices'
import React from 'react'

export const metadata = {
  title: "Affordable Luggage Delivery Service Across India | Frisbi",
  description:
    "Send your bags ahead with Frisbi’s affordable luggage delivery service. Enjoy secure pan-India baggage transport with doorstep pickup and tracking.",
  keywords: [
    "affordable luggage delivery service, baggage delivery India, luggage shipping India"
  ],
  alternates: {
    canonical: "https://frisbi.in/services/standard-delivery",
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
                "@id": "https://frisbi.in/services/standard-delivery/#service",
                "name": "Standard Luggage Delivery Service",
                "provider": {
                  "@id": "https://frisbi.in/#organization"
                },
                "description": "Affordable and secure door-to-door standard luggage delivery service across India with live tracking and professional handling.",
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "serviceType": "Baggage Shipping & Luggage Delivery"
              },
              {
                "@type": "WebPage",
                "@id": "https://frisbi.in/services/standard-delivery/#webpage",
                "url": "https://frisbi.in/services/standard-delivery",
                "name": "Affordable Luggage Delivery Service Across India | Frisbi",
                "description": "Send your bags ahead with Frisbi’s affordable luggage delivery service. Enjoy secure pan-India baggage transport with doorstep pickup and tracking.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/services/standard-delivery/#service"
                },
                "mainEntity": {
                  "@id": "https://frisbi.in/services/standard-delivery/#service"
                }
              }
            ]
          })
        }}
      />
      <StandardServices />
    </div>
  )
}

export default page