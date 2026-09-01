"use client";

import Image from "next/image";
import Awwards from "@/asset/client-logos/blackLogo.webp";

export default function PoweredBy() {
  return (
    <div className="container mx-auto relative px-4 py-12 md:py-24   sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-center mb-10 md:mb-12 lg:mb-16">
          Powered By
        </h2>

        <div className="flex justify-center">
          <Image
            src={Awwards}
            alt="Powered By Logo"
            width={240}
            height={240}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}