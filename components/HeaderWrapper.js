"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

 const blackHeaderPages = ["/thank-you", "/not-found"];


  if (pathname === "/not-found") return null;

  const isBlackHeader = blackHeaderPages.some((p) =>
    pathname.startsWith(p)
  );

  return <Header mode={isBlackHeader ? "black" : "default"} />;
}
