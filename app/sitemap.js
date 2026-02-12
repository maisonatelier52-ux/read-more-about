import articlesData from "../public/data/articles.json";
import authorData from "../public/data/authors.json";
import { slugify } from "../utils/slugify";

const SITE_URL = "https://read-more-about.vercel.app";

export default function sitemap() {
  const now = new Date();

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    
  ];
 

  /* ---------------- CATEGORY PAGES ---------------- */
  const categoryPages = Object.keys(articlesData).map(category => ({
    url: `${SITE_URL}/${category}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  }));


  /* ---------------- ARTICLE DETAIL PAGES ---------------- */
  const articlePages = Object.entries(articlesData).flatMap(
    ([category, articles]) =>
      articles.map(article => ({
        url: `${SITE_URL}/${category}/${article.slug}`,
        lastModified: article.date
          ? new Date(Date.parse(article.date))
          : now,
        changeFrequency: "weekly",
        priority: 0.9,
      }))
  );


  /* ---------------- AUTHOR DETAIL PAGES ---------------- */
  const authorDetailPages = authorData.categories.map(cat => {
    const author = cat.author;
    return {
      url: `${SITE_URL}/author/${slugify(author.name)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
    ...authorDetailPages,
  ];
}