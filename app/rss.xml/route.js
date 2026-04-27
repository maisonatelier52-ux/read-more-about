export const dynamic = "force-static";
import articlesData from "../../public/data/articles.json";

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";
const SITE_DESCRIPTION = "Discover breaking news, politics, business, sports & world events. Expert journalism you can trust.";

// Helper: parse DD/MM/YYYY → Date object
function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day);
  }
  return new Date(dateStr);
}

// Helper: escape XML special characters OUTSIDE of CDATA blocks
// Use this for attributes and plain text nodes
function escapeXml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  // Flatten all articles from all categories and sort by date (newest first)
  const allArticles = Object.entries(articlesData)
    .flatMap(([category, posts]) =>
      posts.map((post) => ({
        url: `${SITE_URL}/${category}/${post.slug}`,
        title: post.title || "",
        description: post.excerpt || post.metaDescription || "",
        date: parseDate(post.date),
        category,
        image: post.image ? `${SITE_URL}${post.image}` : null,
        imageAlt: post.imageAlt || post.title || "",
      }))
    )
    .sort((a, b) => b.date - a.date)
    .slice(0, 50); // RSS best practice: keep latest 50

  const rssItems = allArticles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${escapeXml(article.url)}</link>
      <guid isPermaLink="true">${escapeXml(article.url)}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${article.date.toUTCString()}</pubDate>
      <category><![CDATA[${article.category}]]></category>
      ${
        article.image
          ? `<enclosure url="${escapeXml(article.image)}" type="image/webp" length="0" />`
          : ""
      }
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title><![CDATA[${SITE_NAME}]]></title>
    <link>${SITE_URL}</link>
    <description><![CDATA[${SITE_DESCRIPTION}]]></description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/images/read-more-about-logo.webp</url>
      <title><![CDATA[${SITE_NAME}]]></title>
      <link>${SITE_URL}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=600",
    },
  });
}