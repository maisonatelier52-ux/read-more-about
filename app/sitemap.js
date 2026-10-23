import articlesData from "../public/data/articles.json";

export const dynamic = "force-static";

const SITE_URL = "https://www.read-more-about.com";

function parseArticleDate(dateString) {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function newestDate(articles) {
  return articles.reduce((latest, article) => {
    const articleDate = parseArticleDate(article.date);
    return articleDate > latest ? articleDate : latest;
  }, new Date(0));
}

export default function sitemap() {
  const categoryEntries = Object.entries(articlesData);
  const allArticles = categoryEntries.flatMap(([category, articles]) =>
    articles.map((article) => ({ ...article, category }))
  );
  const latestArticleDate = newestDate(allArticles);

  const staticPages = [
    ["about", "2026-02-18", "monthly", 0.6],
    ["privacy-policy", "2026-02-18", "yearly", 0.3],
    ["terms-and-conditions", "2026-02-18", "yearly", 0.3],
    ["contact", "2026-06-03", "yearly", 0.3],
    ["editorial-policy", "2026-06-03", "yearly", 0.3],
    ["corrections-policy", "2026-06-03", "yearly", 0.3],
    ["source-methodology", "2026-06-03", "yearly", 0.3],
    ["ownership-and-funding", "2026-06-03", "yearly", 0.3],
    ["advertising-policy", "2026-06-03", "yearly", 0.3],
    ["right-of-reply-policy", "2026-06-03", "yearly", 0.3],
    ["legal", "2026-06-03", "yearly", 0.3],
  ].map(([path, lastModified, changeFrequency, priority]) => ({
    url: `${SITE_URL}/${path}/`,
    lastModified: new Date(`${lastModified}T00:00:00.000Z`),
    changeFrequency,
    priority,
  }));

  const categories = categoryEntries.map(([category, articles]) => ({
    url: `${SITE_URL}/${category}/`,
    lastModified: newestDate(articles),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const articles = allArticles.map((article) => ({
    url: `${SITE_URL}/${article.category}/${article.slug}/`,
    lastModified: parseArticleDate(article.date),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: latestArticleDate,
      changeFrequency: "daily",
      priority: 1,
    },
    ...staticPages,
    ...categories,
    {
      url: `${SITE_URL}/author/editorial-desk/`,
      lastModified: latestArticleDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...articles,
  ];
}
