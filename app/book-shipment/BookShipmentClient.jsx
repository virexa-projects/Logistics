"use client";

import { useSearchParams } from "next/navigation";
import BookShipment from "@/page/BookShipment";

export default function BookShipmentClient() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");

  let formData = {};
  try {
    if (dataParam) {
      formData = JSON.parse(decodeURIComponent(dataParam));
    }
  } catch (err) {
    console.error("Data parse error:", err);
  }

  return <BookShipment bookingData={formData} />;
}

