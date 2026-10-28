import StandardServices from '@/page/StandardServices'
import React from 'react'

export const metadata = {
  title: "Standard Delivery Option for Luggage | Frisbi",
  description:
    "Book affordable standard baggage shipping in Bangalore with Frisbi. Safe, scheduled doorstep luggage transport across the city. Schedule your delivery today!.",
  keywords: [
    "standard delivery",
  "standard luggage shipping",
  "regular luggage delivery",
  "standard baggage delivery",
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
                "description": "Affordable door-to-door standard baggage transport across India. Safe, reliable, and trackable intercity luggage shipping for travelers and students.",
                "url": "https://frisbi.in/services/standard-delivery",
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
                "@id": "https://frisbi.in/services/standard-delivery/#webpage",
                "url": "https://frisbi.in/services/standard-delivery",
                "name": "Standard Luggage Delivery | Door-to-Door Baggage Courier – Frisbi",
                "description": "Book affordable standard luggage delivery services with Frisbi. Send baggage safely across 25,000+ pincodes in India with door-to-door pickup and real-time tracking.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/services/standard-delivery/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/services/standard-delivery/#breadcrumb",
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
                    "name": "Standard Delivery",
                    "item": "https://frisbi.in/services/standard-delivery"
                  }
                ]
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