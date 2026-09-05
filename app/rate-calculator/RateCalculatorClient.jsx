"use client";

import { useSearchParams } from "next/navigation";
import RateCalculator from "@/page/RateCalculator";

export default function RateCalculatorClient() {
  const searchParams = useSearchParams();
  const pickup = searchParams.get("pickup") || "";
  const drop = searchParams.get("drop") || "";

  return (
    <RateCalculator
      pickupFromUrl={pickup}
      dropFromUrl={drop}
    />
  );
}

