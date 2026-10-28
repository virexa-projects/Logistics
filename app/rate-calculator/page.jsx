import RateCalculator from '@/page/RateCalculator'
import React from 'react'

export const metadata = {
  title: "Instant Luggage Shipping Cost Calculator| Frisbi",
  description:
    "Looking for luggage shipping prices in Bangalore? Use Frisbi's instant calculator for transparent door-to-door baggage delivery rates. Check your price now!.",
  keywords: [
    "luggage delivery cost calculator",
    "luggage delivery charges",
    "luggage shipping cost",
    "luggage delivery price",
  ],
  alternates: {
    canonical: "https://frisbi.in/rate-calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Page({ searchParams }) {
  const params = await searchParams; // ⭐ IMPORTANT

  const pickup = params?.pickup ?? "";
  const drop = params?.drop ?? "";

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://frisbi.in/rate-calculator/#webpage",
                "url": "https://frisbi.in/rate-calculator",
                "name": "Luggage Shipping Rate Calculator | Frisbi",
                "description": "Calculate doorstep luggage shipping costs instantly with Frisbi's rate calculator. Transparent pricing for door-to-door baggage transport across India.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/rate-calculator/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/rate-calculator/#breadcrumb",
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
                    "name": "Rate Calculator",
                    "item": "https://frisbi.in/rate-calculator"
                  }
                ]
              }
            ]
          }
          )
        }}
      />
      <RateCalculator
        pickupFromUrl={pickup}
        dropFromUrl={drop}
      />
    </div>
  );
}