import StandardServices from '@/page/StandardServices'
import React from 'react'


export const metadata = {
  title: "Standard Baggage Shipping in Bangalore | Scheduled Delivery | Frisbi",
  description:
    "Book affordable standard baggage shipping in Bangalore with Frisbi. Safe, scheduled doorstep luggage transport across the city. Schedule your delivery today!.",
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
