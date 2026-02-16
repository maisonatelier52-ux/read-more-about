
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'
import CategoryArticles from '../../public/data/articles.json'
import authorsData from '../../public/data/authors.json'
import { notFound } from 'next/navigation'

const SITE_URL = "https://read-more-about.vercel.app";
const SITE_NAME = "Read More About";

// Helper function to parse date string (DD/MM/YYYY) to Date object
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/')
  return new Date(year, month - 1, day)
}

// Function to get latest article from each category (excluding current category)
const getLatestFromDifferentCategories = (currentCategory, limit = 5) => {
  const categories = Object.keys(CategoryArticles).filter(
    cat => cat.toLowerCase() !== currentCategory.toLowerCase()
  )
  
  const latestArticles = []
  
  categories.forEach(category => {
    const articles = CategoryArticles[category]
    if (articles && articles.length > 0) {
      // Sort by date and get the latest one
      const sorted = [...articles].sort((a, b) => parseDate(b.date) - parseDate(a.date))
      latestArticles.push({
        ...sorted[0],
        category: category
      })
    }
  })
  
  // Sort all latest articles by date and take the specified limit
  return latestArticles
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, limit)
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryKey = category.toLowerCase();
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  // Category descriptions for better SEO
  const categoryDescriptions = {
    politics: "Discover the latest politics news, analysis & insights. Expert coverage of elections, policy, and government. Updated daily.",
    business: "Get breaking business news, market analysis & financial insights. Corporate developments, economy & industry trends. Updated daily.",
    sports: "Follow breaking sports news, scores, highlights & analysis. Complete coverage of all major sports and athletes. Updated daily.",
    technology: "Explore technology news, innovations & digital trends. AI, cybersecurity, startups & tech industry coverage. Updated daily.",
    health: "Read trusted health news, medical research & wellness tips. Public health updates and scientific discoveries. Updated daily.",
    world: "Stay informed with world news, international affairs & global events. Expert coverage from every continent. Updated daily.",
  };

  const description = categoryDescriptions[categoryKey] || 
    `Discover breaking ${formattedCategory.toLowerCase()} news, expert analysis & in-depth coverage. Stay informed with trusted journalism. Updated daily.`;

  return {
    title: `${formattedCategory} — Breaking News & Expert Analysis`,
    description: description,
    keywords: [
      `${formattedCategory.toLowerCase()} news`,
      `latest ${formattedCategory.toLowerCase()}`,
      `${formattedCategory.toLowerCase()} headlines`,
      `${formattedCategory.toLowerCase()} updates`,
      "breaking news",
      "news analysis",
      "expert coverage"
    ],
    authors: [{ name: "Read More About Editorial Team" }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: `${SITE_URL}/${categoryKey}`,
    },
    openGraph: {
      title: `${formattedCategory} — Breaking News & Expert Analysis`,
      description: description,
      url: `${SITE_URL}/${categoryKey}`,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${formattedCategory} News - Read More About`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedCategory} — Breaking News & Expert Analysis`,
      description: description,
      images: [`${SITE_URL}/og-image.jpg`],
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
}

export default async function Page({ params }) {
  const { category } = await params
  
  // Get articles for this category
  const categoryKey = category.toLowerCase()
  const categoryArticlesData = CategoryArticles[categoryKey]
  
  // If category doesn't exist, show 404
  if (!categoryArticlesData) {
    notFound()
  }
  
  // Sort articles by date (latest first)
  const sortedArticles = [...categoryArticlesData].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  )
  
  // Get the latest article for featured display
  const latestArticle = sortedArticles[0]
  
  // Get remaining articles for the list (excluding the first one)
  const listArticles = sortedArticles.slice(1)
  
  // Get author data for this category
  const authorInfo = authorsData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author

  // Get latest news from 5 different categories
  const latestFromOtherCategories = getLatestFromDifferentCategories(categoryKey, 5)
  
  // First article for popular section
  const popularArticle = latestFromOtherCategories[0] || null
  
  // Remaining 4 articles for sidebar
  const sidebarPosts = latestFromOtherCategories.slice(1, 5)

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  // Category descriptions for schema
  const categoryDescriptions = {
    politics: "Comprehensive politics news coverage including elections, policy debates, government affairs, and political analysis from expert journalists.",
    business: "Breaking business news featuring market analysis, corporate developments, financial insights, economic trends, and industry coverage.",
    sports: "Complete sports news coverage with scores, highlights, analysis, and updates from all major sports and athletic events worldwide.",
    technology: "Technology news and analysis covering AI, cybersecurity, startups, digital innovation, and the latest developments in tech.",
    health: "Trusted health news featuring medical research, public health updates, wellness trends, and scientific health discoveries.",
    world: "Global news coverage of international affairs, world events, diplomacy, conflicts, and developments from every continent.",
  };

  const categoryDescription = categoryDescriptions[categoryKey] || 
    `Latest ${formattedCategory.toLowerCase()} news, analysis, and expert coverage from trusted journalists.`;

  // JSON-LD structured data
  const categoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${formattedCategory} News`,
    "description": categoryDescription,
    "url": `${SITE_URL}/${categoryKey}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "numberOfItems": sortedArticles.length,
      "itemListElement": sortedArticles.slice(0, 10).map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${SITE_URL}/${categoryKey}/${article.slug}`,
        "item": {
          "@type": "NewsArticle",
          "headline": article.title,
          "description": article.excerpt,
          "datePublished": parseDate(article.date).toISOString(),
          "dateModified": parseDate(article.date).toISOString(),
          "author": authorInfo ? {
            "@type": "Person",
            "name": authorInfo.name,
          } : {
            "@type": "Organization",
            "name": SITE_NAME
          },
          "publisher": {
            "@type": "NewsMediaOrganization",
            "name": SITE_NAME,
            "url": SITE_URL,
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/logo.png`,
            },
          },
          "image": article.image ? `${SITE_URL}${article.image}` : `${SITE_URL}/og-image.jpg`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${SITE_URL}/${categoryKey}/${article.slug}`,
          },
        },
      })),
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${formattedCategory} News`,
        "item": `${SITE_URL}/${categoryKey}`,
      },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${formattedCategory} — Breaking News & Expert Analysis`,
    "description": categoryDescription,
    "url": `${SITE_URL}/${categoryKey}`,
    "isPartOf": {
      "@type": "WebSite",
      "url": SITE_URL,
      "name": SITE_NAME,
    },
    "about": {
      "@type": "Thing",
      "name": formattedCategory,
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/og-image.jpg`,
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="relative mb-30">
        {/* SEO-friendly hidden content for search engines */}
        <section className="sr-only">
          <h1>{formattedCategory} — Breaking News, Expert Analysis & Latest Updates</h1>
          <p>
            Welcome to Read More About's {formattedCategory.toLowerCase()} section, your trusted source 
            for breaking {formattedCategory.toLowerCase()} news, in-depth analysis, and expert commentary. 
            Our team of experienced journalists delivers comprehensive coverage of the latest developments, 
            trends, and insights in {formattedCategory.toLowerCase()}. Stay informed with daily updates, 
            exclusive stories, and professional reporting you can trust.
          </p>
          <h2>Latest {formattedCategory} Headlines and Breaking News</h2>
          <p>
            Browse our collection of {sortedArticles.length} {formattedCategory.toLowerCase()} articles 
            featuring breaking news, expert analysis, investigative reporting, and exclusive interviews. 
            Our coverage includes {formattedCategory.toLowerCase()} headlines, detailed reports, and 
            comprehensive analysis to keep you informed about the most important developments.
          </p>
        </section>

        {/* Blue background div that covers 75% of the cards height */}
        <div className="bg-[#eaeaea]/55 pb-48">
          <div className="container mx-auto px-4 pt-12">
            {/* Main heading - Visible */}
             {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm">
                  <li>
                    <Link href="/" title='Home page'>Home</Link>
                  </li>
                  <li>/</li>
                  <li className="text-gray-600 capitalize">
                    {formattedCategory}
                  </li>
                </ol>
              </nav>

            <h2 className="text-5xl font-bold text-black text-center mb-16 font-serif">
              {formattedCategory}
            </h2>
          </div>
        </div>

        {/* Articles row - positioned to overlap the blue background */}
        <div className="container mx-auto px-4 -mt-55 lg:px-7">
          {/* Featured Article - Full Width */}
          {latestArticle && (
            <div className="mb-12">
              <Link href={`/${category}/${latestArticle.slug}`} title={latestArticle.title}>
                <article className="group cursor-pointer">
                  <div className="relative h-[350px] lg:h-[450px] overflow-hidden shadow-2xl rounded-lg">
                    <Image
                      src={latestArticle.image}
                      alt={latestArticle.imageAlt || latestArticle.title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-700"
                      priority
                    />
                    
                    {/* Gradient overlay - stronger for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 max-w-4xl">
                      {/* Category and Type badges */}
                      <div className="flex gap-3 mb-4">
                        <span className="bg-red-600 text-white text-xs lg:text-sm font-bold px-2 lg:px-4 py-2 uppercase tracking-wide">
                          {latestArticle.category}
                        </span>
                        {latestArticle.type !== "normal" && (
                          <span className="bg-white text-black text-xs lg:text-sm font-bold px-2 lg:px-4 py-2 uppercase tracking-wide">
                            {latestArticle.type}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-md lg:text-2xl leading-tight mb-4 group-hover:text-red-400 transition-colors duration-300">
                        {latestArticle.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-200 text-xs lg:text-md leading-relaxed mb-6 max-w-3xl">
                        {latestArticle.excerpt.length > 150 ?
                        `${latestArticle.excerpt.slice(0,150)}...` : 
                        latestArticle.excerpt}
                      </p>
                      

                      {/* Author and Date */}
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-3">
                          {authorInfo && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="relative w-9 h-9 rounded-full overflow-hidden">
                                  <Image
                                    src={authorInfo.profileImage}
                                    alt={authorInfo.name}
                                    fill
                                    sizes="36px"
                                    className="object-cover"
                                  />
                                </div>
                                <span className="font-medium text-xs">{authorInfo.name}</span>
                              </div>                            
                            </>
                          )}
                        </div>
                        <span>-</span>
                        <time dateTime={parseDate(latestArticle.date).toISOString()}>
                          {formatDate(latestArticle.date)}
                        </time>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}
        </div>

        {/* New Section: 75/25 Layout */}
        <CategoryArticlelist 
          listArticles={listArticles} 
          popularArticle={popularArticle} 
          sidebarPost={sidebarPosts}
          authorInfo={authorInfo}
          category={category}
        />
      </div>
    </>
  )
}