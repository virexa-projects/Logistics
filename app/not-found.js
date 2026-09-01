"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import ErrorImage from "@/asset/error.png";

export default function NotFound() {
  // Hide global header when 404 page loads
  useEffect(() => {
    const header = document.getElementById("main-header-wrapper");
    if (header) header.style.display = "none";

    return () => {
      if (header) header.style.display = "block"; // Show back when user leaves
    };
  }, []);

  return (
    <>
      {/* Only black header for this page */}
      {/* <Header mode="black" /> */}

      <div className="text-center max-w-2xl mx-auto pb-36">
        <div className=" text-center">
          <Image
            src={ErrorImage}
            alt="404 Error"
            width={500}
            height={400}
            className="mx-auto mb-6"
          />

          <h2 className="text-404 font-bold mb-4">404</h2>
          <p className="text-lg text-gray-600 mb-6">
            This page could not be found.
          </p>

          <div className="mt-7">
            <Link
              href="/"
              className="bg-primary text-lg text-white font-semibold py-3 px-10 text-[16px] rounded-full transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
