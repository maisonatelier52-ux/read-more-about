export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://read-more-about.vercel.app/sitemap.xml",
    host: "https://read-more-about.vercel.app/",
  };
}