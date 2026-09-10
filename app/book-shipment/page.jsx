// app/book-shipment/page.jsx

export const dynamic = "force-dynamic";

import BookShipment from "@/page/BookShipment";


export const metadata = {
  title: "Book Shipment Online | Fast & Easy Delivery | Frisbi",
  description:
    "Book shipment made simple with Frisbi. Schedule pickup, track deliveries, and ship books across India quickly, safely, and at affordable rates.",
 
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

  console.log("Received booking data:", formData);

  return <BookShipment bookingData={formData} />;
}
