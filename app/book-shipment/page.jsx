// app/book-shipment/page.jsx

export const dynamic = "force-dynamic";

import BookShipment from "@/page/BookShipment";


export const metadata = {
  title: "Book Shipment Online | Fast & Easy Delivery | Frisbi",
  description:
    "Book shipment made simple with Frisbi. Schedule pickup, track deliveries, and ship books across India quickly, safely, and at affordable rates.",
  alternates: {
    canonical: "https://frisbi.in/book-shipment",
  },
};
export default async function Page({ searchParams }) {
  // ✅ unwrap promise
  const params = await searchParams;

  let formData = {};

  try {
    if (params?.data) {
      formData = JSON.parse(decodeURIComponent(params.data));
    }
  } catch (err) {
    console.error("Data parse error:", err);
  }

  // console.log("Received booking data:", formData);

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
                "@id": "https://frisbi.in/book-shipment/#webpage",
                "url": "https://frisbi.in/book-shipment",
                "name": "Book Doorstep Luggage Pickup & Delivery | Frisbi",
                "description": "Book doorstep luggage pickup and intercity delivery across India with Frisbi. Schedule instant baggage courier services with real-time tracking.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/book-shipment/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/book-shipment/#breadcrumb",
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
                    "name": "Book Shipment",
                    "item": "https://frisbi.in/book-shipment"
                  }
                ]
              }
            ]
          }),
        }}
      />
      <BookShipment bookingData={formData} />
    </div>
  );
}
