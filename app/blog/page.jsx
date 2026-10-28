import Blogs from '@/page/blogs'
import React from 'react'

export const metadata = {
  title: "Luggage Travel Tips, Guides & Advice | Frisbi",
  description:
    "Read expert guides on luggage shipping, baggage handling, and travel tips in Bangalore. Stay updated with logistics insights from the Frisbi team.",
  keywords: [
    "luggage delivery blog, luggage transport tips Bangalore, excess baggage solutions India"
  ],
  alternates: {
    canonical: "https://frisbi.in/blog",
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
                "@type": "CollectionPage",
                "@id": "https://frisbi.in/blog/#webpage",
                "url": "https://frisbi.in/blog",
                "name": "Luggage Shipping & Travel Tips Blog | Frisbi",
                "description": "Read expert tips on intercity travel, luggage shipping guides, relocation advice, and updates from Frisbi's door-to-door baggage delivery blog.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/blog/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/blog/#breadcrumb",
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
                    "name": "Blog",
                    "item": "https://frisbi.in/blog"
                  }
                ]
              }
            ]
          }
          )
        }}
      />
      <Blogs />
      {/* <BookShipment /> */}
    </div>
  )
}

export default page