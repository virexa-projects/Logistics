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
<<<<<<< HEAD
    canonical: "https://frisbi.in/services/express-delivery",
=======
    canonical: "https://www.frisbi.in/services/express-delivery",
>>>>>>> 1a3afce (Add metadata, canonicals, and schema markup to main pages)
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
