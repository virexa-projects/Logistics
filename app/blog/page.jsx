import Blogs from '@/page/blogs'
import React from 'react'

export const metadata = {
  title: "Luggage Transport & Travel Tips Blog | Frisbi",
  description:
    "Explore expert insights, tips, and guides on luggage transportation, hassle-free relocations, avoiding excess baggage fees, and moving to Bangalore.",
  keywords: [
    "luggage delivery blog, luggage transport tips Bangalore, excess baggage solutions India"
  ],
  alternates: {
    canonical: "https://frisbi.in/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
        <Blogs />
      {/* <BookShipment /> */}
    </div>
  )
}

export default page