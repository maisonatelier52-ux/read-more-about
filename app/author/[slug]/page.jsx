import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'
import CategoryArticles from '../../../public/data/articles.json'
import authorsData from '../../../public/data/authors.json'
import { notFound } from 'next/navigation'
import { slugify } from "@/utils/slugify";
import { FaXTwitter, FaReddit, FaQuora } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

export async function generateStaticParams() {
  const params = [];

  authorsData.categories.forEach((item) => {
    if (item.author?.name) {
      params.push({
        slug: slugify(item.author.name),
      });
    }
  });

  return params;
}


const SITE_URL = "https://www.read-more-about.com";

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
      const sorted = [...articles].sort((a, b) => parseDate(b.date) - parseDate(a.date))
      latestArticles.push({
        ...sorted[0],
        category: category
      })
    }
  })
  
  return latestArticles
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, limit)
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  
  const authorName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  const authorData = authorsData.categories.find(
    item => item.author.name.toLowerCase() === authorName.toLowerCase()
  )
  
  if (!authorData) {
    return {
      title: 'Author Not Found — Read More About',
      description: 'This author profile does not exist on Read More About.',
    }
  }
  
  const author = authorData.author
  const authorCategory = authorData.category
  const categoryArticlesData = CategoryArticles[authorCategory] || []
  const articleCount = categoryArticlesData.length
  const imageUrl = `${SITE_URL}${author.profileImage}`
  
  return {
    title: `${author.name} — Journalist at Read More About | ${articleCount} Articles`,
    description: `Explore ${articleCount} insightful articles by ${author.name}, covering ${authorCategory} news and analysis. Read expert journalism and investigative reports on Read More About.`,
    keywords: `${author.name}, ${authorCategory} journalist, news writer, ${authorCategory} articles, investigative journalism`,
    alternates: {
      canonical: `${SITE_URL}/author/${slug}`,
    },
    openGraph: {
      title: `${author.name} — ${authorCategory} Journalist at Read More About`,
      description: `${author.bio} Read ${articleCount} articles by ${author.name}.`,
      url: `${SITE_URL}/author/${slug}`,
      type: 'profile',
      siteName: 'Read More About',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `${author.name} profile picture`,
        },
      ],
      profile: {
        firstName: author.name.split(' ')[0],
        lastName: author.name.split(' ').slice(1).join(' '),
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `${author.name} — Journalist at Read More About`,
      description: `${author.bio}`,
      images: [imageUrl],
      creator: author.social?.twitter ? '@' + author.social.twitter.split('/').pop() : undefined,
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  
  const authorName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  const authorData = authorsData.categories.find(
    item => item.author.name.toLowerCase() === authorName.toLowerCase()
  )
  
  if (!authorData) {
    notFound()
  }
  
  const author = authorData.author
  const authorCategory = authorData.category
  const categoryArticlesData = CategoryArticles[authorCategory] || []
  
  const sortedArticles = [...categoryArticlesData].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  )
  
  const exclusiveArticles = sortedArticles
    .filter(article => article.type === 'exclusive')
    .slice(0, 3)
  
  const listArticles = sortedArticles
  const latestFromOtherCategories = getLatestFromDifferentCategories(authorCategory, 5)
  const popularArticle = latestFromOtherCategories[0] || null
  const sidebarPosts = latestFromOtherCategories.slice(1, 5)

  // ─── JSON-LD: Person Schema ───────────────────────────────────────────────
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/author/${slug}#person`,
    "name": author.name,
    "url": `${SITE_URL}/author/${slug}`,
    "image": `${SITE_URL}${author.profileImage}`,
    "description": author.bio,
    "jobTitle": `${authorCategory.charAt(0).toUpperCase() + authorCategory.slice(1)} Journalist`,
    "worksFor": {
      "@type": "NewsMediaOrganization",
      "name": "Read More About",
      "url": SITE_URL,
    },
    "sameAs": [
      author.social?.twitter,
      author.social?.reddit,
      author.social?.quora,
      author.social?.medium,
      author.websiteLink
    ].filter(Boolean),
    "nationality": {
      "@type": "Country",
      "name": author.country
    }
  }

  // ─── JSON-LD: BreadcrumbList ──────────────────────────────────────────────
  // IMPORTANT: "@id" here must match the reference used in ProfilePage below.
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/author/${slug}#breadcrumb`,
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
        "name": author.name,
        "item": `${SITE_URL}/author/${slug}`,
      },
    ],
  }

  // ─── JSON-LD: ProfilePage ─────────────────────────────────────────────────
  // References Person and BreadcrumbList by @id — Google will resolve them
  // from the other two <script> blocks on the same page.
  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/author/${slug}#profile`,
    "url": `${SITE_URL}/author/${slug}`,
    "mainEntity": {
      "@id": `${SITE_URL}/author/${slug}#person`
    },
    "breadcrumb": {
      "@id": `${SITE_URL}/author/${slug}#breadcrumb`
    }
  }

  return (
    <>
      {/* ── JSON-LD Scripts ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />

      {/*
        IMPORTANT: The outer <div> no longer carries itemScope / itemType="Person".
        We removed all microdata (itemScope, itemProp, itemType) from the HTML because:
          1. We already have a complete JSON-LD Person block above.
          2. Having BOTH JSON-LD and microdata causes Google to detect duplicate
             (and sometimes incomplete) structured-data entities — which is what
             was generating the "Missing field itemListElement" breadcrumb error.
        JSON-LD is the Google-recommended approach. Microdata is redundant here.
      */}
      <div className="relative mb-30">

        {/* Author Profile Section with Background */}
        <div className="relative">
          <div className="bg-[#eaeaea]/55 pb-80"></div>

          <div className="container mx-auto px-4 lg:px-7 -mt-68">
            <div>
              <div className="flex flex-col lg:flex-row">

                {/* Left Column - Author Image */}
                <div className="lg:w-[30%] relative">
                  <div className="relative h-96 lg:h-full">
                    {/*
                      sizes prop ensures Next.js serves a correctly-sized image on mobile.
                      priority keeps this as an early fetch (it is the LCP element).
                      quality={85} gives good fidelity without unnecessary payload.
                    */}
                    <Image
                      src={author.profileImage}
                      alt={`${author.name} - ${authorCategory} journalist at Read More About`}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                      priority
                      quality={85}
                    />
                    
                    {/* Social Icons Overlay */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
  
                    {author.social?.twitter && (
                      <Link
                        href={author.social.twitter}
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                        title={`Follow ${author.name} on Twitter`}
                        aria-label={`Follow ${author.name} on Twitter`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaXTwitter className="w-5 h-5" />
                      </Link>
                    )}

                    {author.social?.reddit && (
                      <Link
                        href={author.social.reddit}
                        title={`Follow ${author.name} on Reddit`}
                        aria-label={`Follow ${author.name} on Reddit`}
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaReddit className="w-5 h-5" />
                      </Link>
                    )}

                    {author.social?.quora && (
                      <Link
                        href={author.social.quora}
                        title={`Follow ${author.name} on Quora`}
                        aria-label={`Follow ${author.name} on Quora`}
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaQuora className="w-5 h-5" />
                      </Link>
                    )}

                    {author.social?.medium && (
                      <Link
                        href={author.social.medium}
                        title={`Follow ${author.name} on Medium`}
                        aria-label={`Follow ${author.name} on Medium`}
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiMedium className="w-5 h-5" />
                      </Link>
                    )}

                  </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:w-[70%] p-8">

                  {/* Row 1 - Name, Posts, Bio */}
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <h1 className="text-4xl lg:text-5xl font-bold font-serif text-black">
                        {author.name}
                      </h1>
                      <span className="bg-red-600 text-white text-sm font-bold px-4 py-1 uppercase">
                        {listArticles.length} POSTS
                      </span>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      {author.bio}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Job Title:</span>{' '}
                      <span>
                        {authorCategory.charAt(0).toUpperCase() + authorCategory.slice(1)} Journalist at Read More About
                      </span>
                    </p>
                    {author.country && (
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Country:</span>{' '}
                        <span>{author.country}</span>
                      </p>
                    )}
                    {author.websiteLink && (
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Website:</span>{' '}
                        <a 
                          href={author.websiteLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-600 hover:underline"
                          title={`Visit ${author.name}'s personal website`}
                        >
                          {author.websiteLink}
                        </a>
                      </p>
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold font-serif mb-6">
                      Articles by {author.name}
                    </h2>

                    {exclusiveArticles.length > 0 && (
                      <>
                        <h3 className="text-lg font-semibold font-serif mb-4">
                          Exclusive articles by {author.name}:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {exclusiveArticles.map((article) => (
                            <Link 
                              key={article.id} 
                              href={`/${authorCategory}/${article.slug}`}
                              title={`Read: ${article.title}`}
                            >
                              <div className="group cursor-pointer">
                                <div className="flex gap-3">
                                  <div className="flex-1 w-[75%]">
                                    <div className="text-sm font-bold text-black group-hover:text-red-600 transition-colors mb-2 leading-tight">
                                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase inline-block mr-2">
                                        EXCLUSIVE
                                      </span>
                                      {article.title.slice(0, 50)}...
                                    </div>
                                    <p className="text-xs text-red-600 font-semibold uppercase">
                                      {authorCategory}
                                    </p>
                                  </div>

                                  <div className="relative w-[25%] h-15 flex-shrink-0 overflow-hidden">
                                    <Image
                                      src={article.image}
                                      alt={article.imageAlt || article.title}
                                      fill
                                      sizes="(max-width: 768px) 25vw, 10vw"
                                      loading="lazy"
                                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles List Section */}
        <CategoryArticlelist 
          listArticles={listArticles}
          popularArticle={popularArticle}
          sidebarPost={sidebarPosts}
          authorInfo={author}
          category={authorCategory}
        />
      </div>
    </>
  )
}


// GIVE THIS CODE AFTER ADDING JULIO CONTNET

// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'
// import CategoryArticles from '../../../public/data/articles.json'
// import authorsData from '../../../public/data/authors.json'
// import { notFound } from 'next/navigation'
// import { slugify } from "@/utils/slugify";
// import { FaXTwitter, FaReddit, FaQuora } from "react-icons/fa6";
// import { SiMedium } from "react-icons/si";

// export async function generateStaticParams() {
//   const params = [];
//   authorsData.categories.forEach((item) => {
//     if (item.author?.name) {
//       params.push({ slug: slugify(item.author.name) });
//     }
//   });
//   return params;
// }

// const SITE_URL = "https://www.read-more-about.com";

// // ── Static Julio article — injected for business category authors ─────────────
// const JULIO_STATIC_ARTICLE = {
//   id: "julio-static",
//   slug: "julio-herrera-velutini-britannia-financial-group",
//   href: "/julio-herrera-velutini/julio-herrera-velutini-britannia-financial-group",
//   title: "Julio Herrera Velutini: From Venezuelan Banking Dynasty to Global Finance",
//   excerpt:
//     "Julio Herrera Velutini built Britannia Financial Group from a 600-year Latin American banking dynasty into a global wealth management platform spanning Switzerland, the UK, and Puerto Rico.",
//   image: "/images/news/julio-herrera-velutini-britannia-financial-group.webp",
//   imageAlt: "Julio Herrera Velutini, founder of Britannia Financial Group",
//   date: "23/02/2026",
//   category: "business",
//   type: "normal",
// };
// // ─────────────────────────────────────────────────────────────────────────────

// const parseDate = (dateStr) => {
//   const [day, month, year] = dateStr.split('/')
//   return new Date(year, month - 1, day)
// }

// const getLatestFromDifferentCategories = (currentCategory, limit = 5) => {
//   const categories = Object.keys(CategoryArticles).filter(
//     cat => cat.toLowerCase() !== currentCategory.toLowerCase()
//   )
//   const latestArticles = []
//   categories.forEach(category => {
//     const articles = CategoryArticles[category]
//     if (articles && articles.length > 0) {
//       // Only consider regular news articles for sidebar
//       const newsOnly = articles.filter(
//         a => a.newsType !== "client news" && a.newsType !== "pillar news"
//       )
//       const sorted = [...newsOnly].sort((a, b) => parseDate(b.date) - parseDate(a.date))
//       if (sorted.length > 0) {
//         latestArticles.push({ ...sorted[0], category })
//       }
//     }
//   })
//   return latestArticles
//     .sort((a, b) => parseDate(b.date) - parseDate(a.date))
//     .slice(0, limit)
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params

//   const authorName = slug
//     .split('-')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ')

//   const authorData = authorsData.categories.find(
//     item => item.author.name.toLowerCase() === authorName.toLowerCase()
//   )

//   if (!authorData) {
//     return {
//       title: 'Author Not Found — Read More About',
//       description: 'This author profile does not exist on Read More About.',
//     }
//   }

//   const author = authorData.author
//   const authorCategory = authorData.category
//   const categoryArticlesData = CategoryArticles[authorCategory] || []

//   // Count only regular news articles for metadata
//   const articleCount = categoryArticlesData.filter(
//     a => a.newsType !== "client news" && a.newsType !== "pillar news"
//   ).length

//   const imageUrl = `${SITE_URL}${author.profileImage}`

//   return {
//     title: `${author.name} — Journalist at Read More About | ${articleCount} Articles`,
//     description: `Explore ${articleCount} insightful articles by ${author.name}, covering ${authorCategory} news and analysis. Read expert journalism and investigative reports on Read More About.`,
//     keywords: `${author.name}, ${authorCategory} journalist, news writer, ${authorCategory} articles, investigative journalism`,
//     alternates: { canonical: `${SITE_URL}/author/${slug}` },
//     openGraph: {
//       title: `${author.name} — ${authorCategory} Journalist at Read More About`,
//       description: `${author.bio} Read ${articleCount} articles by ${author.name}.`,
//       url: `${SITE_URL}/author/${slug}`,
//       type: 'profile',
//       siteName: 'Read More About',
//       images: [{ url: imageUrl, width: 800, height: 800, alt: `${author.name} profile picture` }],
//       profile: {
//         firstName: author.name.split(' ')[0],
//         lastName: author.name.split(' ').slice(1).join(' '),
//       },
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${author.name} — Journalist at Read More About`,
//       description: `${author.bio}`,
//       images: [imageUrl],
//       creator: author.social?.twitter ? '@' + author.social.twitter.split('/').pop() : undefined,
//     },
//   }
// }

// export default async function Page({ params }) {
//   const { slug } = await params

//   const authorName = slug
//     .split('-')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ')

//   const authorData = authorsData.categories.find(
//     item => item.author.name.toLowerCase() === authorName.toLowerCase()
//   )

//   if (!authorData) notFound()

//   const author = authorData.author
//   const authorCategory = authorData.category
//   const categoryArticlesData = CategoryArticles[authorCategory] || []

//   // ── Filter: only newsType === "news" articles ─────────────────────────────
//   const newsOnlyArticles = categoryArticlesData.filter(
//     a => a.newsType !== "client news" && a.newsType !== "pillar news"
//   )

//   const sortedArticles = [...newsOnlyArticles].sort(
//     (a, b) => parseDate(b.date) - parseDate(a.date)
//   )

//   // Exclusive articles (from news only)
//   const exclusiveArticles = sortedArticles
//     .filter(article => article.type === 'exclusive')
//     .slice(0, 3)

//   // ── Inject static Julio article at position 0 for business authors ─────────
//   const listArticles =
//     authorCategory.toLowerCase() === "business"
//       ? [JULIO_STATIC_ARTICLE, ...sortedArticles]
//       : sortedArticles

//   const latestFromOtherCategories = getLatestFromDifferentCategories(authorCategory, 5)
//   const popularArticle = latestFromOtherCategories[0] || null
//   const sidebarPosts = latestFromOtherCategories.slice(1, 5)

//   // ─── JSON-LD ──────────────────────────────────────────────────────────────
//   const personJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "Person",
//     "@id": `${SITE_URL}/author/${slug}#person`,
//     "name": author.name,
//     "url": `${SITE_URL}/author/${slug}`,
//     "image": `${SITE_URL}${author.profileImage}`,
//     "description": author.bio,
//     "jobTitle": `${authorCategory.charAt(0).toUpperCase() + authorCategory.slice(1)} Journalist`,
//     "worksFor": { "@type": "NewsMediaOrganization", "name": "Read More About", "url": SITE_URL },
//     "sameAs": [
//       author.social?.twitter,
//       author.social?.reddit,
//       author.social?.quora,
//       author.social?.medium,
//       author.websiteLink
//     ].filter(Boolean),
//     "nationality": { "@type": "Country", "name": author.country }
//   }

//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "@id": `${SITE_URL}/author/${slug}#breadcrumb`,
//     "itemListElement": [
//       { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
//       { "@type": "ListItem", "position": 2, "name": author.name, "item": `${SITE_URL}/author/${slug}` },
//     ],
//   }

//   const profilePageJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "ProfilePage",
//     "@id": `${SITE_URL}/author/${slug}#profile`,
//     "url": `${SITE_URL}/author/${slug}`,
//     "mainEntity": { "@id": `${SITE_URL}/author/${slug}#person` },
//     "breadcrumb": { "@id": `${SITE_URL}/author/${slug}#breadcrumb` }
//   }

//   return (
//     <>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />

//       <div className="relative mb-30">

//         {/* Author Profile Section */}
//         <div className="relative">
//           <div className="bg-[#eaeaea]/55 pb-80"></div>

//           <div className="container mx-auto px-4 lg:px-7 -mt-68">
//             <div>
//               <div className="flex flex-col lg:flex-row">

//                 {/* Left Column - Author Image */}
//                 <div className="lg:w-[30%] relative">
//                   <div className="relative h-96 lg:h-full">
//                     <Image
//                       src={author.profileImage}
//                       alt={`${author.name} - ${authorCategory} journalist at Read More About`}
//                       fill
//                       sizes="(max-width: 768px) 100vw, 30vw"
//                       className="object-cover"
//                       priority
//                       quality={85}
//                     />

//                     {/* Social Icons Overlay */}
//                     <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
  
//                     {author.social?.twitter && (
//                       <Link
//                         href={author.social.twitter}
//                         className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
//                         title={`Follow ${author.name} on Twitter`}
//                         aria-label={`Follow ${author.name} on Twitter`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaXTwitter className="w-5 h-5" />
//                       </Link>
//                     )}

//                     {author.social?.reddit && (
//                       <Link
//                         href={author.social.reddit}
//                         title={`Follow ${author.name} on Reddit`}
//                         aria-label={`Follow ${author.name} on Reddit`}
//                         className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaReddit className="w-5 h-5" />
//                       </Link>
//                     )}

//                     {author.social?.quora && (
//                       <Link
//                         href={author.social.quora}
//                         title={`Follow ${author.name} on Quora`}
//                         aria-label={`Follow ${author.name} on Quora`}
//                         className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaQuora className="w-5 h-5" />
//                       </Link>
//                     )}

//                     {author.social?.medium && (
//                       <Link
//                         href={author.social.medium}
//                         title={`Follow ${author.name} on Medium`}
//                         aria-label={`Follow ${author.name} on Medium`}
//                         className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <SiMedium className="w-5 h-5" />
//                       </Link>
//                     )}

//                   </div>
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="lg:w-[70%] p-8">
//                   <div className="mb-10">
//                     <div className="flex items-center gap-4 mb-4">
//                       <h1 className="text-4xl lg:text-5xl font-bold font-serif text-black">
//                         {author.name}
//                       </h1>
//                       {/* Post count shows only real news articles */}
//                       <span className="bg-red-600 text-white text-sm font-bold px-4 py-1 uppercase">
//                         {sortedArticles.length} POSTS
//                       </span>
//                     </div>
//                     <p className="text-gray-700 text-base leading-relaxed mb-4">{author.bio}</p>
//                     <p className="text-sm text-gray-600">
//                       <span className="font-semibold">Job Title:</span>{' '}
//                       <span>{authorCategory.charAt(0).toUpperCase() + authorCategory.slice(1)} Journalist at Read More About</span>
//                     </p>
//                     {author.country && (
//                       <p className="text-sm text-gray-600">
//                         <span className="font-semibold">Country:</span>{' '}
//                         <span>{author.country}</span>
//                       </p>
//                     )}
//                     {author.websiteLink && (
//                       <p className="text-sm text-gray-600">
//                         <span className="font-semibold">Website:</span>{' '}
//                         <a href={author.websiteLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline" title={`Visit ${author.name}'s personal website`}>
//                           {author.websiteLink}
//                         </a>
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <h2 className="text-2xl font-bold font-serif mb-6">Articles by {author.name}</h2>

//                     {exclusiveArticles.length > 0 && (
//                       <>
//                         <h3 className="text-lg font-semibold font-serif mb-4">
//                           Exclusive articles by {author.name}:
//                         </h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                           {exclusiveArticles.map((article) => (
//                             <Link key={article.id} href={`/${authorCategory}/${article.slug}`} title={`Read: ${article.title}`}>
//                               <div className="group cursor-pointer">
//                                 <div className="flex gap-3">
//                                   <div className="flex-1 w-[75%]">
//                                     <div className="text-sm font-bold text-black group-hover:text-red-600 transition-colors mb-2 leading-tight">
//                                       <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase inline-block mr-2">EXCLUSIVE</span>
//                                       {article.title.slice(0, 50)}...
//                                     </div>
//                                     <p className="text-xs text-red-600 font-semibold uppercase">{authorCategory}</p>
//                                   </div>
//                                   <div className="relative w-[25%] h-15 flex-shrink-0 overflow-hidden">
//                                     <Image
//                                       src={article.image}
//                                       alt={article.imageAlt || article.title}
//                                       fill
//                                       sizes="(max-width: 768px) 25vw, 10vw"
//                                       loading="lazy"
//                                       className="object-cover group-hover:scale-110 transition-transform duration-300"
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                             </Link>
//                           ))}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Articles List */}
//         <CategoryArticlelist
//           listArticles={listArticles}
//           popularArticle={popularArticle}
//           sidebarPost={sidebarPosts}
//           authorInfo={author}
//           category={authorCategory}
//         />
//       </div>
//     </>
//   )
// }