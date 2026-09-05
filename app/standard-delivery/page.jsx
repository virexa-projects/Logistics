import StandardServices from '@/page/StandardServices'
import React from 'react'


export const metadata = {
  title: "Affordable Luggage Delivery Service Across India | Frisbi",
  description:
    "Send your bags ahead with Frisbi’s affordable luggage delivery service. Enjoy secure pan-India baggage transport with doorstep pickup and tracking.",
  keywords: [
    "affordable luggage delivery service, baggage delivery India, luggage shipping India"
  ],
  alternates: {
    canonical: "https://frisbi.in/services/standard-delivery",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <StandardServices />
    </div>
  )
}

export default page
