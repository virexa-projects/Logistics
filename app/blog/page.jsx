import Blogs from '@/page/blogs'
import React from 'react'

export const metadata = {
  title: "Luggage Transport & Travel Tips Blog | Frisbi",
  description:
    "Explore expert insights, tips, and guides on luggage transportation, hassle-free relocations, avoiding excess baggage fees, and moving to Bangalore.",
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
                "name": "Luggage Delivery Blog & Travel Tips | Frisbi",
                "description": "Read the latest tips, guides, and news about door-to-door luggage delivery, city-to-city travel, and baggage shipping across India.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                }
              }
            ]
          })
        }}
      />
        <Blogs />
      {/* <BookShipment /> */}
    </div>
  )
}

export default page