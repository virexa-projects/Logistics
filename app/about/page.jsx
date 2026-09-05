import Aboutus from '@/page/About'
import React from 'react'


export const metadata = {
  title: "About Frisbi | India’s Smart Luggage Delivery Company",
  description:
    "Learn about Frisbi, India’s travel convenience and luggage delivery company helping travelers move bags easily across cities with secure doorstep delivery.",
  keywords: [
    "about Frisbi, luggage delivery company India, travel convenience company"
  ],
  alternates: {
<<<<<<< HEAD
    canonical: "https://www.frisbi.in/about",
=======
    canonical: "https://frisbi.in/about",
>>>>>>> 05ec78157e5935a34f1bc71bd3b0bb83359ecbea
  },
  robots: {
    index: true,
    follow: true,
  },
};


function page() {
  return (
    <div>
      <Aboutus />
    </div>
  )
}

export default page
