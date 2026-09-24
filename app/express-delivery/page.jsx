import ExpressServices from '@/page/ExpressServices'
import React from 'react'

export const metadata = {
  title: "Express Luggage Delivery in Bangalore | Same-Day Baggage Shipping | Frisbi",
  description:
    "Need urgent baggage transport? Frisbi offers fast, same-day express luggage delivery and priority pickup across Bangalore. Book your express shipping now!.",
  keywords: [
    "express luggage delivery service, fast baggage delivery, urgent luggage delivery India"
  ],
  alternates: {
    canonical: "https://frisbi.in/services/express-delivery",
  },
  robots: {
    index: true,
    follow: true,
  },
};




function page() {
  return (
    <div>
      <ExpressServices />
    </div>
  )
}

export default page
