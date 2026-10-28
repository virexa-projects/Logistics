import ExpressServices from '@/page/ExpressServices'
import React from 'react'

export const metadata = {
  title: "Fast Luggage Shipping for Last-Minute Travel | Frisbi",
  description:
    "Need urgent baggage transport? Frisbi offers fast, same-day express luggage delivery and priority pickup across Bangalore. Book your express shipping now!.",
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
                "@id": "https://frisbi.in/services/express-delivery/#service",
                "name": "Express Luggage Delivery Service",
                "description": "Fast and urgent door-to-door luggage shipping across India. Guaranteed priority handling and expedited baggage transit for urgent travel needs.",
                "url": "https://frisbi.in/services/express-delivery",
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
                "@id": "https://frisbi.in/services/express-delivery/#webpage",
                "url": "https://frisbi.in/services/express-delivery",
                "name": "Express Luggage Delivery | Fast Door-to-Door Baggage Shipping – Frisbi",
                "description": "Need urgent luggage shipping? Book Frisbi express luggage delivery for priority pickup, accelerated transit, and fast doorstep delivery across India.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/services/express-delivery/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/services/express-delivery/#breadcrumb",
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
                    "name": "Express Delivery",
                    "item": "https://frisbi.in/services/express-delivery"
                  }
                ]
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