import ExpressServices from '@/page/ExpressServices'
import React from 'react'

export const metadata = {
  title: "Express Luggage Delivery Service in India | Fast Bag Delivery",
  description:
    "Need urgent baggage delivery? Frisbi offers express luggage delivery across India with priority handling and delivery within 3 to 5 days.",
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
