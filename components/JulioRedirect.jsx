"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function JulioRedirect() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  useEffect(() => {
    if (slug) {
      router.replace(`/politics/${slug}/`);
    }
  }, [slug, router]);

  return (
    <div style={{
      minHeight: "50vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Georgia, serif",
      gap: "1rem",
    }}>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>Redirecting to article...</p>
      {slug && (
        <Link
          href={`/politics/${slug}/`}
          style={{ color: "#dc2626", fontWeight: "bold", textDecoration: "underline" }}
        >
          Click here if not redirected
        </Link>
      )}
    </div>
  );
}