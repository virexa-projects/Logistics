import Corporate from '@/page/corporate';
import React from 'react';

export const metadata = {
  title: "Bulk Luggage Shipping for Businesses Bangalore | B2B Logistics | Frisbi",
  description:
    "Need commercial baggage transport or bulk luggage shipping for your business in Bangalore? Partner with Frisbi for reliable B2B corporate logistics.",
  keywords: [
    "Corporate Luggage Delivery Solutions",
    "corporate parcel service",
    "corporate luggage movers in Bangalore",
  ],
  alternates: {
    canonical: 'https://frisbi.in/book/corporate',
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
                "@id": "https://frisbi.in/book/corporate/#service",
                "name": "Corporate Luggage Delivery & B2B Baggage Logistics",
                "description": "Bulk luggage shipping and B2B corporate baggage logistics in Bangalore and across India. Ideal for corporate events, offsites, group tours, and employee relocations.",
                "url": "https://frisbi.in/book/corporate",
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
                "@id": "https://frisbi.in/book/corporate/#webpage",
                "url": "https://frisbi.in/book/corporate",
                "name": "Bulk Luggage Shipping for Businesses | B2B Logistics – Frisbi",
                "description": "Bulk luggage shipping & B2B corporate baggage logistics in Bangalore. Reliable door-to-door luggage delivery for corporate travel, events, and group relocations.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/book/corporate/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/book/corporate/#breadcrumb",
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
                    "name": "Book",
                    "item": "https://frisbi.in/book"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Corporate",
                    "item": "https://frisbi.in/book/corporate"
                  }
                ]
              }
            ]
          })
        }}
      />
      <Corporate />
    </div>
  );
}

export default page;