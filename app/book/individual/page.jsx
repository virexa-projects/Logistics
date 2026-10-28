import Individual from "@/app/individual";

export const metadata = {
  title:
    "Send Personal Bags Across Bangalore | Individual Luggage Transport | Frisbi",
  description:
    "Moving bags between locations in Bangalore? Book Frisbi for fast, secure individual baggage transport and personal luggage shipping across the city.",
  keywords: ["individual luggage delivery"],
  alternates: {
    canonical: 'https://frisbi.in/book/individual',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://frisbi.in/book/individual/#service",
      "name": "Individual Luggage Transport & Personal Baggage Shipping",
      "description": "Book door-to-door personal luggage shipping for leisure travelers, families, students, and solo relocations across Bangalore and India.",
      "url": "https://frisbi.in/book/individual",
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
      "@id": "https://frisbi.in/book/individual/#webpage",
      "url": "https://frisbi.in/book/individual",
      "name": "Send Personal Bags Across Bangalore | Individual Luggage Transport – Frisbi",
      "description": "Moving bags between locations in Bangalore? Book Frisbi for fast, secure individual baggage transport and personal luggage shipping across the city.",
      "isPartOf": {
        "@id": "https://frisbi.in/#website"
      },
      "about": {
        "@id": "https://frisbi.in/#organization"
      },
      "breadcrumb": {
        "@id": "https://frisbi.in/book/individual/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://frisbi.in/book/individual/#breadcrumb",
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
          "name": "Individual",
          "item": "https://frisbi.in/book/individual"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Individual />
    </>
  );
}