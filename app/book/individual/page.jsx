import Individual from "@/app/individual";

export const metadata = {
  title:
    "Individual Luggage Delivery India | Personal Baggage Courier Service | Frisbi",
  description:
    "Book individual luggage delivery services with Frisbi. Send bags safely across India with doorstep pickup, tracking, and stress-free travel convenience.",
  keywords: ["individual luggage delivery"],

  alternates: {
    canonical: 'https://www.frisbi.in/book/individual',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.frisbi.in/book/individual#service",
      name: "Individual Luggage Delivery Service",
      alternateName: "Personal Baggage Courier Service",
      description:
        "Frisbi's individual luggage delivery service picks up your bags from your doorstep and delivers them safely to your destination across India. Ideal for leisure travellers, students, senior citizens, families, pilgrimage trips, and solo travel.",
      url: "https://www.frisbi.in/book/individual",
      serviceType: "Luggage Delivery",
      category: "Courier & Delivery Service",
      provider: {
        "@type": "Organization",
        "@id": "https://www.frisbi.in/#organization",
        name: "Frisbi",
        url: "https://www.frisbi.in",
        telephone: "+91-7418152531",
        email: "info@frisbi.in",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Individuals, Students, Families, Senior Citizens, Pilgrims, Solo Travellers",
      },
      serviceOutput:
        "Door-to-door luggage delivery with live tracking and dedicated support",
      termsOfService: "https://www.frisbi.in/terms-and-conditions",
      potentialAction: {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.frisbi.in/rate-calculator",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.frisbi.in/book/individual#webpage",
      url: "https://www.frisbi.in/book/individual",
      name:
        "Individual Luggage Delivery India | Personal Baggage Courier Service | Frisbi",
      description:
        "Ship your luggage anywhere in India with Frisbi Individual Delivery. Door-to-door service with live tracking and clear pricing.",
      isPartOf: {
        "@id": "https://www.frisbi.in/#website",
      },
      about: {
        "@id": "https://www.frisbi.in/book/individual#service",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.frisbi.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Individual Delivery",
            item: "https://www.frisbi.in/book/individual",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to ship my luggage with Frisbi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on pickup location, destination, number of bags, and delivery speed. Use the rate calculator for an exact quote.",
          },
        },
        {
          "@type": "Question",
          name: "Can I ship just one bag with Frisbi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Frisbi accepts single bag shipments with no minimum quantity requirement.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if something goes wrong with my luggage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All shipments are tracked and supported by our customer service team for quick resolution of issues.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use Frisbi for pilgrimage travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Frisbi is ideal for pilgrimage trips, allowing travellers to send luggage ahead and travel comfortably.",
          },
        },
        {
          "@type": "Question",
          name: "How long does delivery take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard delivery typically takes 3 to 5 days. Faster delivery options are available in select locations.",
          },
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

      <Individual />
    </>
  );
}