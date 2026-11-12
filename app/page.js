import Home from "@/page/Home";

export const metadata = {
  title: "Luggage Pickup & Delivery Service in Bangalore | Frisbi",
  description:
    "Skip heavy bags! Frisbi offers secure door-to-door luggage pickup and delivery across Bangalore. Book reliable baggage shipping & travel hands-free today.",
  keywords: [
    "luggage delivery service",
    "luggage pickup and delivery Bangalore",
    "door to door luggage delivery Bangalore",
    "luggage delivery in Bangalore",
    "luggage movers in Bangalore",
  ],
  alternates: {
    canonical: "https://frisbi.in",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://frisbi.in/#organization",
      "name": "Frisbi",
      "url": "https://frisbi.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://frisbi.in/_next/static/media/logo-black.e417d146.svg",
      },
      "description":
        "India's door-to-door luggage delivery service, specializing in luggage pickup and delivery across Bangalore and nationwide.",
      "foundingDate": "2022",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN",
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Bangalore",
          "sameAs": "https://en.wikipedia.org/wiki/Bangalore",
        },
        {
          "@type": "Country",
          "name": "India",
        },
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-7418152531",
          "contactType": "customer support",
          "availableLanguage": ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          "email": "info@frisbi.in",
          "contactType": "general inquiries",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://frisbi.in/#website",
      "url": "https://frisbi.in",
      "name": "Frisbi",
      "publisher": {
        "@id": "https://frisbi.in/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://frisbi.in/#webpage",
      "url": "https://frisbi.in",
      "name":
        "Luggage Delivery Service in Bangalore | Trusted Luggage Movers – Frisbi",
      "description":
        "Frisbi offers secure luggage delivery services and trusted luggage movers in Bangalore. Send bags across India with door-to-door pickup and tracking.",
      "isPartOf": {
        "@id": "https://frisbi.in/#website",
      },
      "about": {
        "@id": "https://frisbi.in/#organization",
      },
      "breadcrumb": {
        "@id": "https://frisbi.in/#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://frisbi.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://frisbi.in",
        },
      ],
    },
  ],
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

      <Home />
    </>
  );
}