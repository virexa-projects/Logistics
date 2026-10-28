import Haveanyqueries from '@/page/Haveanyqueries'
import React from 'react'

export const metadata = {
  title: "Contact Frisbi | Luggage Pickup & Delivery Support",
  description:
    "Need help with luggage shipping or baggage pickup in Bangalore? Contact Frisbi’s support team for booking assistance, inquiries, and customer care.",
  keywords: [
    "contact frisbi, luggage delivery customer service, baggage courier support india, frisbi contact number, luggage shipping inquiries, baggage delivery support, corporate luggage quotes, frisbi customer care, luggage courier contact india, frisbi helpline number"
  ],
  alternates: {
    canonical: "https://frisbi.in/contact-us",
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
                "@type": "ContactPage",
                "@id": "https://frisbi.in/contact-us/#webpage",
                "url": "https://frisbi.in/contact-us",
                "name": "Contact Us | Frisbi – Doorstep Luggage Delivery Support",
                "description": "Get in touch with Frisbi support team for queries, baggage tracking assistance, or booking help. Reach out via phone, email, or WhatsApp.",
                "isPartOf": {
                  "@id": "https://frisbi.in/#website"
                },
                "about": {
                  "@id": "https://frisbi.in/#organization"
                },
                "breadcrumb": {
                  "@id": "https://frisbi.in/contact-us/#breadcrumb"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://frisbi.in/contact-us/#breadcrumb",
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
                    "name": "Contact Us",
                    "item": "https://frisbi.in/contact-us"
                  }
                ]
              }
            ]
          })
        }}
      />
      <Haveanyqueries />
    </div>
  )
}

export default page