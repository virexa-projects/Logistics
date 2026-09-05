// app/book-shipment/page.jsx

import { Suspense } from "react";
import BookShipmentClient from "./BookShipmentClient";

export const metadata = {
  title: "Book Shipment Online | Fast & Easy Delivery | Frisbi",
  description:
    "Book shipment made simple with Frisbi. Schedule pickup, track deliveries, and ship books across India quickly, safely, and at affordable rates.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <BookShipmentClient />
    </Suspense>
  );
}
