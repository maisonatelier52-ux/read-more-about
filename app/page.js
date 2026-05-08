
// import dynamic from 'next/dynamic';
// import { FaInstagram, FaXTwitter } from "react-icons/fa6";
// import articlesData from '../public/data/articles.json';
// import authorsData from '../public/data/authors.json';
// import { PiRedditLogoBold } from "react-icons/pi";

// // Dynamic imports for components that can be lazy loaded
// const SliderSection = dynamic(() => import('@/components/homecompoents/SliderSection'));
// const ArticleGrid = dynamic(() => import('@/components/homecompoents/ArticleGrid'));
// const PoliticsSection = dynamic(() => import('@/components/homecompoents/PoliticsSection'));
// const CelebritySection = dynamic(() => import('@/components/homecompoents/CelebritySection'));
// const FoodTravelSection = dynamic(() => import('@/components/homecompoents/FoodtravelSection'));
// const AdBannerSection = dynamic(() => import('@/components/homecompoents/AdBannerSection'));
// const RecentPostsSection = dynamic(() => import('@/components/homecompoents/RecentpostsSection'));

// // Keep FreshStories eager since it's above the fold
// import FreshStories from "@/components/homecompoents/FreshStories";

// const SITE_URL = "https://www.read-more-about.com";
// const SITE_NAME = "Read More About";

// // Metadata for SEO
// export const metadata = {
//   title: "Read More About — Breaking News, Politics, Business & World Headlines",
//   description:
//     "Discover breaking news, politics, business, sports & world events. Expert journalism and in-depth analysis you can trust. Updated daily.",
//   keywords: [
//     "breaking news",
//     "latest news",
//     "world news",
//     "politics",
//     "business news",
//     "sports news",
//     "news headlines",
//     "current events",
//     "news magazine",
//     "journalism"
//   ],
//   authors: [{ name: "Read More About Editorial Team" }],
//   creator: "Read More About",
//   publisher: "Read More About",
//   alternates: {
//     canonical: SITE_URL,
//     languages: {
//       "en": SITE_URL,
//       "en-US": SITE_URL,
//     },
//   },
//   openGraph: {
//     title: "Read More About — Breaking News, Politics, Business & World Headlines",
//     description:
//       "Discover breaking news, politics, business, sports & world events. Expert journalism and in-depth analysis you can trust.",
//     url: SITE_URL,
//     siteName: SITE_NAME,
//     type: "website",
//     locale: "en_US",
//     images: [
//       {
//         url: `${SITE_URL}/images/read-more-about-logo.webp`,
//         width: 1200,
//         height: 630,
//         alt: "Read More About - Breaking News and Latest Headlines",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Read More About — Breaking News, Politics, Business & World Headlines",
//     description:
//       "Discover breaking news, politics, business, sports & world events. Expert journalism you can trust.",
//     images: [`${SITE_URL}/images/read-more-about-logo.webp`],
//     creator: "@readmoreabout",
//     site: "@readmoreabout",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// };

// // Helper function to parse date in DD/MM/YYYY format
// function parseDate(dateStr) {
//   const [day, month, year] = dateStr.split('/');
//   return new Date(year, month - 1, day);
// }

// // Helper function to get author info
// function getAuthorInfo(category) {
//   const categoryData = authorsData.categories.find(
//     cat => cat.category.toLowerCase() === category.toLowerCase()
//   );
//   return categoryData ? categoryData.author : null;
// }

// // Helper function to get unique articles
// function getUniqueArticles(articles, count, fromDifferentCategories, usedArticleIds) {
//   const result = [];
//   const categoriesUsed = new Set();
  
//   for (const article of articles) {
//     if (usedArticleIds.has(`${article.category}-${article.id}`)) {
//       continue;
//     }
    
//     if (fromDifferentCategories && categoriesUsed.has(article.category)) {
//       continue;
//     }
    
//     result.push(article);
//     usedArticleIds.add(`${article.category}-${article.id}`);
    
//     if (fromDifferentCategories) {
//       categoriesUsed.add(article.category);
//     }
    
//     if (result.length >= count) {
//       break;
//     }
//   }
  
//   return result;
// }

// // Helper function to get articles from specific category
// function getArticlesFromCategory(sortedArticles, category, count, usedArticleIds) {
//   const categoryArticles = sortedArticles.filter(
//     article => article.category.toLowerCase() === category.toLowerCase() &&
//     !usedArticleIds.has(`${article.category}-${article.id}`)
//   );
  
//   const selected = categoryArticles.slice(0, count);
//   selected.forEach(article => {
//     usedArticleIds.add(`${article.category}-${article.id}`);
//   });
  
//   return selected;
// }

// // Process data function
// function processArticlesData() {
//   // Collect all articles from all categories and add author info
//   const allArticles = [];
//   Object.keys(articlesData).forEach(category => {
//     if (Array.isArray(articlesData[category])) {
//       articlesData[category].forEach(article => {
//         const author = getAuthorInfo(category);
//         allArticles.push({
//           ...article,
//           category: category,
//           author: author,
//           parsedDate: parseDate(article.date)
//         });
//       });
//     }
//   });

//   // Sort all articles by date (latest first)
//   const sortedArticles = allArticles.sort((a, b) => b.parsedDate - a.parsedDate);

//   // Track used article IDs to prevent duplication
//   const usedArticleIds = new Set();

//   // FreshStories data distribution
//   const freshStoriesLatest = getUniqueArticles(sortedArticles, 1, false, usedArticleIds)[0];
//   const freshStoriesNext2 = getUniqueArticles(sortedArticles, 2, false, usedArticleIds);
//   const freshStoriesLeftColumn = getUniqueArticles(sortedArticles, 5, true, usedArticleIds);
//   const freshStoriesPopular = getUniqueArticles(sortedArticles, 5, true, usedArticleIds);

//   // SliderSection data
//   const sliderArticles = getUniqueArticles(sortedArticles, 5, true, usedArticleIds);

//   // ArticleGrid data
//   const articleGridData = getUniqueArticles(sortedArticles, 8, true, usedArticleIds);

//   // PoliticsSection data
//   const politicsArticles = getArticlesFromCategory(sortedArticles, 'politics', 9, usedArticleIds);

//   // CelebritySection data (using business category)
//   const celebrityArticles = getArticlesFromCategory(sortedArticles, 'business', 6, usedArticleIds);

//   // FoodTravelSection data (using sports category)
//   const foodTravelArticles = getArticlesFromCategory(sortedArticles, 'sports', 8, usedArticleIds);

//   // RecentPostsSection data
//   const recentFeatured = getUniqueArticles(sortedArticles, 1, false, usedArticleIds)[0];
//   const recentGrid1 = getUniqueArticles(sortedArticles, 3, false, usedArticleIds);
//   const recentGrid2 = getUniqueArticles(sortedArticles, 3, false, usedArticleIds);
//   const recentSidebar = getUniqueArticles(sortedArticles, 4, false, usedArticleIds);

//   return {
//     freshStories: {
//       latest: freshStoriesLatest,
//       next2: freshStoriesNext2,
//       leftColumn: freshStoriesLeftColumn,
//       popular: freshStoriesPopular
//     },
//     slider: sliderArticles,
//     articleGrid: articleGridData,
//     politics: politicsArticles,
//     celebrity: celebrityArticles,
//     foodTravel: foodTravelArticles,
//     recent: {
//       featured: recentFeatured,
//       grid1: recentGrid1,
//       grid2: recentGrid2,
//       sidebar: recentSidebar
//     },
//     allArticles: sortedArticles
//   };
// }

// export default function Home() {
//   // Process data on the server
//   const processedData = processArticlesData();

//   // Get latest articles for JSON-LD
//   const latestArticles = processedData.allArticles.slice(0, 10);

//   // JSON-LD structured data for the homepage
//   const jsonLdData = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "WebSite",
//         "@id": `${SITE_URL}/#website`,
//         "name": SITE_NAME,
//         "alternateName": "Read More About News",
//         "url": SITE_URL,
//         "description": "Breaking news, politics, business, sports, and world events coverage",
//         "publisher": { "@id": `${SITE_URL}/#organization` },
//         "potentialAction": {
//           "@type": "SearchAction",
//           "target": {
//             "@type": "EntryPoint",
//             "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
//           },
//           "query-input": "required name=search_term_string"
//         }
//       },
//       {
//         "@type": "NewsMediaOrganization",
//         "@id": `${SITE_URL}/#organization`,
//         "name": SITE_NAME,
//         "url": SITE_URL,
//         "logo": {
//           "@type": "ImageObject",
//           "url": `${SITE_URL}/images/read-more-about-logo.webp`,
//           "width": 600,
//           "height": 60
//         },
//         "description": "Comprehensive news coverage across politics, business, sports, and world events",
//         "sameAs": [
//           "https://www.facebook.com/readmoreabout",
//           "https://www.twitter.com/readmoreabout",
//           "https://www.instagram.com/readmoreabout"
//         ],
//         "contactPoint": {
//           "@type": "ContactPoint",
//           "contactType": "Customer Service",
//           "email": "contact@read-more-about.com"
//         }
//       },
//       {
//         "@type": "CollectionPage",
//         "@id": `${SITE_URL}/#collectionpage`,
//         "name": "Latest News Articles",
//         "description": "Browse the latest breaking news, politics, business, and world event coverage",
//         "url": SITE_URL,
//         "mainEntity": {
//           "@type": "ItemList",
//           "itemListElement": latestArticles.map((article, index) => ({
//             "@type": "ListItem",
//             "position": index + 1,
//             "url": `${SITE_URL}/${article.category}/${article.slug}`,
//             "name": article.title
//           }))
//         }
//       },
//       {
//         "@type": "BreadcrumbList",
//         "@id": `${SITE_URL}/#breadcrumb`,
//         "itemListElement": [
//           {
//             "@type": "ListItem",
//             "position": 1,
//             "name": "Home",
//             "item": SITE_URL
//           }
//         ]
//       }
//     ]
//   };

//   return (
//     <>
//       {/* JSON-LD Structured Data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
//       />

//       <div className="min-h-screen bg-white">
//         {/* SEO-friendly hidden content for search engines */}
//         <div className="sr-only">
//           <h1>Read More About — Breaking News, Politics, Business & World Headlines</h1>
//           <p>
//             Welcome to Read More About, your trusted source for breaking news, in-depth political analysis, 
//             business insights, sports coverage, and world events. Our team of expert journalists delivers 
//             comprehensive news coverage across all major categories including politics, business, technology, 
//             health, sports, and international affairs. Stay informed with the latest headlines, investigative 
//             reports, and expert commentary on the stories that matter most.
//           </p>
//           <h2>Latest Breaking News and Current Events</h2>
//           <p>
//             Our breaking news section brings you real-time updates on developing stories from around the world. 
//             From political developments to economic shifts, natural disasters to technological breakthroughs, 
//             we cover it all with accuracy and speed.
//           </p>
//           <h2>Politics and Government Coverage</h2>
//           <p>
//             Get comprehensive political news and analysis covering elections, policy debates, international 
//             relations, and government affairs. Our political reporters provide balanced coverage and expert 
//             insights into the political landscape.
//           </p>
//           <h2>Business and Financial News</h2>
//           <p>
//             Stay ahead with our business news covering markets, economy, finance, technology, and corporate 
//             developments. From stock market updates to industry trends, we deliver the information business 
//             professionals need.
//           </p>
//           <h2>Sports News and Updates</h2>
//           <p>
//             Follow your favorite teams and athletes with our comprehensive sports coverage including scores, 
//             highlights, analysis, and breaking sports news from around the world.
//           </p>
//         </div>

//         {/* SLIDER + OVERLAY SECTION */}
//         <div className="relative">
//           {/* Slider */}
//           <SliderSection articles={processedData.slider} />

//           {/* Overlay FreshStories */}
//           <div className="absolute left-0 right-0 lg:top-[140px] top-30 z-20">
//             <FreshStories 
//               latestArticle={processedData.freshStories.latest}
//               next2Articles={processedData.freshStories.next2}
//               leftColumnArticles={processedData.freshStories.leftColumn}
//               popularArticles={processedData.freshStories.popular}
//             />
//           </div>

//           {/* Spacer to push next content down */}
//           <div className="h-[2450px] lg:h-[630px]" />
//         </div>

//         {/* JOIN / SOCIAL BAR */}
//         <nav className="px-5 lg:px-7" aria-label="Social media links">
//           <div className="w-full border-t-2 border-b-2 border-gray-200 px-5 mb-10">
//             <div className="max-w-7xl mx-auto px-4 py-3">
//               <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-serif">
//                 {/* Column 1 */}
//                 <div className="text-xs font-semibold">
//                   JOIN OUR SOCIAL MEDIA
//                 </div>

//                 {/* Column 2 */}
//                 <div className="text-center text-lg font-bold">
//                   For even more exclusive content!
//                 </div>

//                 {/* Column 3 */}
//                 <div className="flex items-center gap-4 text-red-500">
//                   <a 
//                     href="https://www.reddit.com/user/read-more-about/" 
//                     className="hover:text-black transition"
//                     aria-label="Follow us on Reddit"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title="Read More About Reddit account"
//                   >
//                     <PiRedditLogoBold />
//                   </a>
//                   <a 
//                     href="https://www.instagram.com/read_more_about_26/" 
//                     className="hover:text-black transition"
//                     aria-label="Follow us on Instagram"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title="Read More About Instagram account"
//                   >
//                     <FaInstagram />
//                   </a>
//                   <a 
//                     href="https://x.com/More528Read" 
//                     className="hover:text-black transition"
//                     aria-label="Follow us on Twitter"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title="Read More About Twitter account"
//                   >
//                     <FaXTwitter />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>

//         <ArticleGrid articles={processedData.articleGrid} />
//         <PoliticsSection articles={processedData.politics} />   
//         <CelebritySection articles={processedData.celebrity} />
//         <FoodTravelSection articles={processedData.foodTravel} />
//         <AdBannerSection />
//         <RecentPostsSection 
//           featuredPost={processedData.recent.featured}
//           grid1Posts={processedData.recent.grid1}
//           grid2Posts={processedData.recent.grid2}
//           sidebarPosts={processedData.recent.sidebar}
//         />
//       </div>
//     </>
//   );
// }




// GIVE THIS CODE AFTER ADDING JULIO CONTNET


import dynamic from 'next/dynamic';
import { FaFacebookF, FaInstagram, FaXTwitter, FaReddit } from "react-icons/fa6";
import articlesData from '../public/data/articles.json';
import authorsData from '../public/data/authors.json';
import { BsSubstack } from "react-icons/bs";
import { SiMedium } from "react-icons/si";

// Dynamic imports for components that can be lazy loaded
const SliderSection = dynamic(() => import('@/components/homecompoents/SliderSection'));
const ArticleGrid = dynamic(() => import('@/components/homecompoents/ArticleGrid'));
const PoliticsSection = dynamic(() => import('@/components/homecompoents/PoliticsSection'));
const CelebritySection = dynamic(() => import('@/components/homecompoents/CelebritySection'));
const FoodTravelSection = dynamic(() => import('@/components/homecompoents/FoodtravelSection'));
const AdBannerSection = dynamic(() => import('@/components/homecompoents/AdBannerSection'));
const RecentPostsSection = dynamic(() => import('@/components/homecompoents/RecentpostsSection'));

// Keep FreshStories eager since it's above the fold
import FreshStories from "@/components/homecompoents/FreshStories";

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

// Metadata for SEO
export const metadata = {
  title: "Read More About — Breaking News, Politics, Business & World Headlines",
  description:
    "Discover breaking news, politics, business, sports & world events. Expert journalism and in-depth analysis you can trust. Updated daily.",
  keywords: [
    "breaking news",
    "latest news",
    "world news",
    "politics",
    "business news",
    "sports news",
    "news headlines",
    "current events",
    "news magazine",
    "journalism"
  ],
  authors: [{ name: "Read More About Editorial Team" }],
  creator: "Read More About",
  publisher: "Read More About",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en": SITE_URL,
      "en-US": SITE_URL,
    },
  },
  openGraph: {
    title: "Read More About — Breaking News, Politics, Business & World Headlines",
    description:
      "Discover breaking news, politics, business, sports & world events. Expert journalism and in-depth analysis you can trust.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/images/read-more-about-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Read More About - Breaking News and Latest Headlines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Read More About — Breaking News, Politics, Business & World Headlines",
    description:
      "Discover breaking news, politics, business, sports & world events. Expert journalism you can trust.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
    creator: "@readmoreabout",
    site: "@readmoreabout",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Helper function to parse date in DD/MM/YYYY format
function parseDate(dateStr) {
  const [day, month, year] = dateStr.split('/');
  return new Date(year, month - 1, day);
}

// Helper function to get author info
function getAuthorInfo(category) {
  const categoryData = authorsData.categories.find(
    cat => cat.category.toLowerCase() === category.toLowerCase()
  );
  return categoryData ? categoryData.author : null;
}

// Helper function to get unique articles
function getUniqueArticles(articles, count, fromDifferentCategories, usedArticleIds) {
  const result = [];
  const categoriesUsed = new Set();
  
  for (const article of articles) {
    if (usedArticleIds.has(`${article.category}-${article.id}`)) {
      continue;
    }
    
    if (fromDifferentCategories && categoriesUsed.has(article.category)) {
      continue;
    }
    
    result.push(article);
    usedArticleIds.add(`${article.category}-${article.id}`);
    
    if (fromDifferentCategories) {
      categoriesUsed.add(article.category);
    }
    
    if (result.length >= count) {
      break;
    }
  }
  
  return result;
}

// Helper function to get articles from specific category
function getArticlesFromCategory(sortedArticles, category, count, usedArticleIds) {
  const categoryArticles = sortedArticles.filter(
    article => article.category.toLowerCase() === category.toLowerCase() &&
    !usedArticleIds.has(`${article.category}-${article.id}`)
  );
  
  const selected = categoryArticles.slice(0, count);
  selected.forEach(article => {
    usedArticleIds.add(`${article.category}-${article.id}`);
  });
  
  return selected;
}

// Process data function
function processArticlesData() {
  // Collect all articles from all categories and add author info
  // ── FILTER: only include articles with newsType === "news" ──
  // Articles with newsType "client news" or "pillar news" are excluded
  // and displayed separately under /julio-herrera-velutini/[slug]
  const allArticles = [];
  Object.keys(articlesData).forEach(category => {
    if (Array.isArray(articlesData[category])) {
      articlesData[category].forEach(article => {
        // Skip client news and pillar news — they live in their own route
        if (article.newsType === "client news" || article.newsType === "pillar news") {
          return;
        }

        const author = getAuthorInfo(category);
        allArticles.push({
          ...article,
          category: category,
          author: author,
          parsedDate: parseDate(article.date)
        });
      });
    }
  });

  // Sort all articles by date (latest first)
  const sortedArticles = allArticles.sort((a, b) => b.parsedDate - a.parsedDate);

  // Track used article IDs to prevent duplication
  const usedArticleIds = new Set();

  // FreshStories data distribution
  const freshStoriesLatest = getUniqueArticles(sortedArticles, 1, false, usedArticleIds)[0];
  const freshStoriesNext2 = getUniqueArticles(sortedArticles, 2, false, usedArticleIds);
  const freshStoriesLeftColumn = getUniqueArticles(sortedArticles, 5, true, usedArticleIds);
  const freshStoriesPopular = getUniqueArticles(sortedArticles, 5, true, usedArticleIds);

  // SliderSection data
  const sliderArticles = getUniqueArticles(sortedArticles, 5, true, usedArticleIds);

  // ArticleGrid data
  const articleGridData = getUniqueArticles(sortedArticles, 8, true, usedArticleIds);

  // PoliticsSection data
  const politicsArticles = getArticlesFromCategory(sortedArticles, 'politics', 9, usedArticleIds);

  // CelebritySection data (using business category)
  const celebrityArticles = getArticlesFromCategory(sortedArticles, 'business', 6, usedArticleIds);

  // FoodTravelSection data (using sports category)
  const foodTravelArticles = getArticlesFromCategory(sortedArticles, 'sports', 8, usedArticleIds);

  // RecentPostsSection data
  const recentFeatured = getUniqueArticles(sortedArticles, 1, false, usedArticleIds)[0];
  const recentGrid1 = getUniqueArticles(sortedArticles, 3, false, usedArticleIds);
  const recentGrid2 = getUniqueArticles(sortedArticles, 3, false, usedArticleIds);
  const recentSidebar = getUniqueArticles(sortedArticles, 4, false, usedArticleIds);

  return {
    freshStories: {
      latest: freshStoriesLatest,
      next2: freshStoriesNext2,
      leftColumn: freshStoriesLeftColumn,
      popular: freshStoriesPopular
    },
    slider: sliderArticles,
    articleGrid: articleGridData,
    politics: politicsArticles,
    celebrity: celebrityArticles,
    foodTravel: foodTravelArticles,
    recent: {
      featured: recentFeatured,
      grid1: recentGrid1,
      grid2: recentGrid2,
      sidebar: recentSidebar
    },
    allArticles: sortedArticles
  };
}

export default function Home() {
  // Process data on the server
  const processedData = processArticlesData();

  // Get latest articles for JSON-LD
  const latestArticles = processedData.allArticles.slice(0, 10);

  // JSON-LD structured data for the homepage
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "name": SITE_NAME,
        "alternateName": "Read More About News",
        "url": SITE_URL,
        "description": "Breaking news, politics, business, sports, and world events coverage",
        "publisher": { "@id": `${SITE_URL}/#organization` },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SITE_URL}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "NewsMediaOrganization",
        "@id": `${SITE_URL}/#organization`,
        "name": SITE_NAME,
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/images/read-more-about-logo.webp`,
          "width": 600,
          "height": 60
        },
        "description": "Comprehensive news coverage across politics, business, sports, and world events",
        "sameAs": [
          "https://www.facebook.com/readmoreabout",
          "https://www.twitter.com/readmoreabout",
          "https://www.instagram.com/readmoreabout"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "contact@read-more-about.com"
        }
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/#collectionpage`,
        "name": "Latest News Articles",
        "description": "Browse the latest breaking news, politics, business, and world event coverage",
        "url": SITE_URL,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": latestArticles.map((article, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${SITE_URL}/${article.category}/${article.slug}`,
            "name": article.title
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="min-h-screen bg-white">
        {/* SEO-friendly hidden content for search engines */}
        <div className="sr-only">
          <h1>Read More About — Breaking News, Politics, Business & World Headlines</h1>
          <p>
            Welcome to Read More About, your trusted source for breaking news, in-depth political analysis, 
            business insights, sports coverage, and world events. Our team of expert journalists delivers 
            comprehensive news coverage across all major categories including politics, business, technology, 
            health, sports, and international affairs. Stay informed with the latest headlines, investigative 
            reports, and expert commentary on the stories that matter most.
          </p>
          <h2>Latest Breaking News and Current Events</h2>
          <p>
            Our breaking news section brings you real-time updates on developing stories from around the world. 
            From political developments to economic shifts, natural disasters to technological breakthroughs, 
            we cover it all with accuracy and speed.
          </p>
          <h2>Politics and Government Coverage</h2>
          <p>
            Get comprehensive political news and analysis covering elections, policy debates, international 
            relations, and government affairs. Our political reporters provide balanced coverage and expert 
            insights into the political landscape.
          </p>
          <h2>Business and Financial News</h2>
          <p>
            Stay ahead with our business news covering markets, economy, finance, technology, and corporate 
            developments. From stock market updates to industry trends, we deliver the information business 
            professionals need.
          </p>
          <h2>Sports News and Updates</h2>
          <p>
            Follow your favorite teams and athletes with our comprehensive sports coverage including scores, 
            highlights, analysis, and breaking sports news from around the world.
          </p>
        </div>

        {/* SLIDER + OVERLAY SECTION */}
        <div className="relative">
          {/* Slider */}
          <SliderSection articles={processedData.slider} />

          {/* Overlay FreshStories */}
          <div className="absolute left-0 right-0 lg:top-[140px] top-30 z-20">
            <FreshStories 
              latestArticle={processedData.freshStories.latest}
              next2Articles={processedData.freshStories.next2}
              leftColumnArticles={processedData.freshStories.leftColumn}
              popularArticles={processedData.freshStories.popular}
            />
          </div>

          {/* Spacer to push next content down */}
          <div className="h-[2450px] lg:h-[630px]" />
        </div>

        {/* JOIN / SOCIAL BAR */}
        <nav className="px-5 lg:px-7" aria-label="Social media links">
          <div className="w-full border-t-2 border-b-2 border-gray-200 px-5 mb-10">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-serif">
                {/* Column 1 */}
                <div className="text-xs font-semibold">
                  JOIN OUR SOCIAL MEDIA
                </div>

                {/* Column 2 */}
                <div className="text-center text-lg font-bold">
                  For even more exclusive content!
                </div>

                {/* Column 3 */}
                <div className="flex items-center gap-4 text-red-500">
                  <a 
                    href="https://www.reddit.com/user/read-more-about/" 
                    className="hover:text-black transition"
                    aria-label="Follow us on Reddit"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read More About Reddit account"
                  >
                    <FaReddit />
                  </a>
                  <a 
                    href="https://www.instagram.com/read_more_about_26/" 
                    className="hover:text-black transition"
                    aria-label="Follow us on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read More About Instagram account"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://x.com/More528Read" 
                    className="hover:text-black transition"
                    aria-label="Follow us on Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read More About Twitter account"
                  >
                    <FaXTwitter />
                  </a>
                   <a 
                    href="https://medium.com/@admin_14364" 
                    className="hover:text-black transition"
                    aria-label="Follow us on Medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read More About Medium account"
                  >
                    <SiMedium />
                  </a>
                   <a 
                    href="https://substack.com/@readmoredaily" 
                    className="hover:text-black transition"
                    aria-label="Follow us on Substack"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read More About Substack account"
                  >
                    <BsSubstack />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <ArticleGrid articles={processedData.articleGrid} />
        <PoliticsSection articles={processedData.politics} />   
        <CelebritySection articles={processedData.celebrity} />
        <FoodTravelSection articles={processedData.foodTravel} />
        <AdBannerSection />
        <RecentPostsSection 
          featuredPost={processedData.recent.featured}
          grid1Posts={processedData.recent.grid1}
          grid2Posts={processedData.recent.grid2}
          sidebarPosts={processedData.recent.sidebar}
        />
      </div>
    </>
  );
}