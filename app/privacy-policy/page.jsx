import Privacypolicy from "@/page/Privacypolicy";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Frisbi",
  description:
    "Read Frisbi's Privacy Policy to learn how we collect, use, store, and protect your personal information when you use our website and services.",
  alternates: {
    canonical: "https://frisbi.in/privacy-policy",
  },
};

function Page() {
  return (
    <div>
      <Privacypolicy />
    </div>
  );
}

export default Page;