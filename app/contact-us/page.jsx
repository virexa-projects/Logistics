import Haveanyqueries from '@/page/Haveanyqueries'
import React from 'react'

export const metadata = {
  title: "Contact Frisbi | Luggage Delivery Support & Customer Service India",
  description:
    "Get in touch with Frisbi for luggage delivery inquiries, corporate quotes, booking support, and shipment assistance. Call, email, or message us. Available 7 days a week across India. ",
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
      <Haveanyqueries />
    </div>
  )
}

export default page
