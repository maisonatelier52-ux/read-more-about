// app/news-sitemap.xml/route.js
//
// Google News Sitemap — required for Top Stories carousel eligibility.
// Place this file at: app/news-sitemap.xml/route.js
//
// Google's rules:
//   - Only include articles published in the last 48 hours
//   - Max 1,000 URLs per sitemap
//   - Submit via Google Search Console → Sitemaps
//   - Reference in robots.txt (already done) and layout.js <head>
//
// Because the site uses output:'export' (static), this generates at
// build time via force-static. Rebuild + redeploy daily to keep fresh.

export const dynamic = "force-static";

import articlesData from "../../public/data/articles.json";

const SITE_URL  = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

// Parse DD/MM/YYYY → Date
function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  return new Date(dateStr);
}

// Escape XML special characters (outside CDATA blocks)
function escapeXml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g,  "&amp;")
    .replace(/</g,  "&lt;")
    .replace(/>/g,  "&gt;")
    .replace(/"/g,  "&quot;")
    .replace(/'/g,  "&apos;");
}

export async function GET() {
  // Flatten all articles, sort newest-first, take the 50 most recent
  const allArticles = Object.entries(articlesData)
    .flatMap(([category, posts]) =>
      Array.isArray(posts)
        ? posts.map((post) => ({
            url:      `${SITE_URL}/${category}/${post.slug}/`,
            title:    post.title     || "",
            date:     parseDate(post.date),
            keywords: post.keywords  || [],
            category,
          }))
        : []
    )
    .sort((a, b) => b.date - a.date)
    .slice(0, 50);

  const urlEntries = allArticles
    .map(
      (article) => `
  <url>
    <loc>${escapeXml(article.url)}</loc>
    <news:news>
      <news:publication>
        <news:name><![CDATA[${SITE_NAME}]]></news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.date.toISOString()}</news:publication_date>
      <news:title><![CDATA[${article.title}]]></news:title>${
        article.keywords.length > 0
          ? `\n      <news:keywords>${escapeXml(article.keywords.slice(0, 10).join(", "))}</news:keywords>`
          : ""
      }
    </news:news>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlEntries}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type":  "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=600",
    },
  });
}