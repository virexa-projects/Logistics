import BaggageChargesIndia from '@/page/blogs/baggageChargesIndia';
import React from 'react';

export const metadata = {
  title: "How to Avoid Excess Baggage Charges in India | Frisbi Guide",
  description:
    "Discover smart tips and hacks to avoid heavy excess baggage fees at Indian airports. Learn how door-to-door luggage delivery saves you money when traveling.",
  keywords: [
    "avoid excess baggage charges india",
    "airline baggage fees india",
    "cheap luggage shipping india",
    "avoid airline baggage fees"
  ],
  alternates: {
    canonical: "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india",
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
                "@type": "BlogPosting",
                "@id": "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india/#article",
                "isPartOf": {
                  "@id": "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india/#webpage"
                },
                "headline": "How to Avoid Excess Baggage Charges on Domestic Flights in India",
                "description": "Discover practical strategies to avoid expensive airline excess baggage fees in India. Compare door-to-door luggage courier services vs airport baggage rates.",
                "mainEntityOfPage": "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india",
                "publisher": {
                  "@id": "https://frisbi.in/#organization"
                },
                "author": {
                  "@id": "https://frisbi.in/#organization"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india/#webpage",
                "url": "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india",
                "name": "How to Avoid Airline Excess Baggage Charges in India | Frisbi",
                "description": "Discover practical strategies to avoid expensive airline excess baggage fees in India. Compare door-to-door luggage courier services vs airport baggage rates.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india/#breadcrumb",
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
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Avoid Excess Baggage Charges",
                    "item": "https://frisbi.in/blog/how-to-avoid-excess-baggage-charges-india"
                  }
                ]
              }
            ]
          })
        }}
      />
      <BaggageChargesIndia />
    </div>
  );
}

export default page;