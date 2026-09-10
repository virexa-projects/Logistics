import Aboutus from '@/page/About';
import React from 'react';

export const metadata = {
  title: "About Frisbi | India’s Smart Luggage Delivery Company",
  description:
    "Learn about Frisbi, India’s travel convenience and luggage delivery company helping travelers move bags easily across cities with secure doorstep delivery.",
  keywords: [
    "about Frisbi",
    "luggage delivery company India",
    "travel convenience company"
  ],
  alternates: {
    canonical: "https://frisbi.in/about",
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
                "@type": "AboutPage",
                "@id": "https://frisbi.in/about/#webpage",
                "url": "https://frisbi.in/about",
                "name": "About Us | Frisbi – India's Door-to-Door Luggage Delivery",
                "description": "Learn about Frisbi, India’s travel convenience and luggage delivery company helping travelers move bags easily across cities with secure doorstep delivery ",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "mainEntity": {
                  "@type": "Organization",
                  "@id": "https://frisbi.in/#organization"
                }
              }
            ]
          })
        }}
      />
      <Aboutus />
    </div>
  );
}

export default page;