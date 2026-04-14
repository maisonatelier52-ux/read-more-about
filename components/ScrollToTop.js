"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Force instant jump (better for news sites)
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return null;
}