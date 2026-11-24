import MovingToBangalore from '@/page/blogs/movingToBangalore';
import React from 'react';

export const metadata = {
  title: "Moving to Bangalore? Easy Luggage Transport & Relocation Guide | Frisbi",
  description:
    "Planning a move to Bangalore? Discover hassle-free luggage transport and baggage shipping options with Frisbi to send your bags safely before you arrive.",
  keywords: [
    "moving to bangalore luggage transport",
    "baggage shipping bangalore",
    "luggage delivery bangalore",
    "relocation luggage service"
  ],
  alternates: {
    canonical: "https://frisbi.in/blog/moving-to-bangalore-luggage-transport",
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
                "@id": "https://frisbi.in/blog/moving-to-bangalore-luggage-transport/#article",
                "isPartOf": {
                  "@id": "https://frisbi.in/blog/moving-to-bangalore-luggage-transport/#webpage"
                },
                "headline": "Moving to Bangalore? Here is How to Transport Your Luggage Hassle-Free",
                "description": "Relocating to Bangalore? Learn how door-to-door luggage transport services help you skip airline baggage fees and hassle-free relocation across India.",
                "mainEntityOfPage": "https://frisbi.in/blog/moving-to-bangalore-luggage-transport",
                "publisher": {
                  "@id": "https://frisbi.in/#organization"
                },
                "author": {
                  "@id": "https://frisbi.in/#organization"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://frisbi.in/blog/moving-to-bangalore-luggage-transport/#webpage",
                "url": "https://frisbi.in/blog/moving-to-bangalore-luggage-transport",
                "name": "Moving to Bangalore? Transport Your Luggage Hassle-Free | Frisbi",
                "description": "Relocating to Bangalore? Learn how door-to-door luggage transport services help you skip airline baggage fees and hassle-free relocation across India.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/blog/moving-to-bangalore-luggage-transport/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/blog/moving-to-bangalore-luggage-transport/#breadcrumb",
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
                    "name": "Moving to Bangalore Luggage Transport",
                    "item": "https://frisbi.in/blog/moving-to-bangalore-luggage-transport"
                  }
                ]
              }
            ]
          })
        }}
      />
      <MovingToBangalore />
    </div>
  );
}

export default page;