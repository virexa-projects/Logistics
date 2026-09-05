import Home from "@/page/Home";

export const metadata = {
  title: "Luggage Delivery Service in Bangalore | Trusted Luggage Movers – Frisbi",
  description:
    "Frisbi offers secure luggage delivery services and trusted luggage movers in Bangalore. Send bags across India with door-to-door pickup and tracking.",
  keywords: [
    "luggage delivery service",
    "luggage movers in Bangalore",
  ],
  alternates: {
<<<<<<< HEAD
    canonical: "https://www.frisbi.in",
=======
    canonical: "https://frisbi.in",
>>>>>>> 05ec78157e5935a34f1bc71bd3b0bb83359ecbea
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
      "@id": "https://www.frisbi.in/#organization",
      name: "Frisbi",
      url: "https://www.frisbi.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.frisbi.in/_next/static/media/logo-black.e417d146.svg",
      },
      description:
        "India's door-to-door luggage delivery service. Ship your baggage safely between cities with live tracking, transparent pricing, and professional handling across 25,000+ pincodes.",
      foundingDate: "2022",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-7418152531",
          contactType: "customer support",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          email: "info@frisbi.in",
          contactType: "customer support",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.frisbi.in/#website",
      url: "https://www.frisbi.in",
      name: "Frisbi",
      publisher: {
        "@id": "https://www.frisbi.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.frisbi.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.frisbi.in/#webpage",
      url: "https://www.frisbi.in",
      name: "Luggage Delivery Service in Bangalore | Trusted Luggage Movers – Frisbi",
      description:
        "Frisbi offers secure luggage delivery services and trusted luggage movers in Bangalore. Send bags across India with door-to-door pickup and tracking.",
      isPartOf: {
        "@id": "https://www.frisbi.in/#website",
      },
      about: {
        "@id": "https://www.frisbi.in/#organization",
      },
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