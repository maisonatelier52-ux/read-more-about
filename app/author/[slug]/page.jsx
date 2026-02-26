// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'
// import CategoryArticles from '../../../public/data/articles.json'
// import authorsData from '../../../public/data/authors.json'
// import { notFound } from 'next/navigation'
// import { slugify } from "@/utils/slugify";

// export async function generateStaticParams() {
//   const params = [];

//   authorsData.categories.forEach((item) => {
//     if (item.author?.name) {
//       params.push({
//         slug: slugify(item.author.name),
//       });
//     }
//   });

//   return params;
// }


// const SITE_URL = "https://www.read-more-about.com";

// // Helper function to parse date string (DD/MM/YYYY) to Date object
// const parseDate = (dateStr) => {
//   const [day, month, year] = dateStr.split('/')
//   return new Date(year, month - 1, day)
// }

// // Function to get latest article from each category (excluding current category)
// const getLatestFromDifferentCategories = (currentCategory, limit = 5) => {
//   const categories = Object.keys(CategoryArticles).filter(
//     cat => cat.toLowerCase() !== currentCategory.toLowerCase()
//   )
  
//   const latestArticles = []
  
//   categories.forEach(category => {
//     const articles = CategoryArticles[category]
//     if (articles && articles.length > 0) {
//       const sorted = [...articles].sort((a, b) => parseDate(b.date) - parseDate(a.date))
//       latestArticles.push({
//         ...sorted[0],
//         category: category
//       })
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
//   const articleCount = categoryArticlesData.length
//   const imageUrl = `${SITE_URL}${author.profileImage}`
  
//   return {
//     title: `${author.name} — Journalist at Read More About | ${articleCount} Articles`,
//     description: `Explore ${articleCount} insightful articles by ${author.name}, covering ${authorCategory} news and analysis. Read expert journalism and investigative reports on Read More About.`,
//     keywords: `${author.name}, ${authorCategory} journalist, news writer, ${authorCategory} articles, investigative journalism`,
//     alternates: {
//       canonical: `${SITE_URL}/author/${slug}`,
//     },
//     openGraph: {
//       title: `${author.name} — ${authorCategory} Journalist at Read More About`,
//       description: `${author.bio} Read ${articleCount} articles by ${author.name}.`,
//       url: `${SITE_URL}/author/${slug}`,
//       type: 'profile',
//       siteName: 'Read More About',
//       images: [
//         {
//           url: imageUrl,
//           width: 800,
//           height: 800,
//           alt: `${author.name} profile picture`,
//         },
//       ],
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
  
//   if (!authorData) {
//     notFound()
//   }
  
//   const author = authorData.author
//   const authorCategory = authorData.category
//   const categoryArticlesData = CategoryArticles[authorCategory] || []
  
//   const sortedArticles = [...categoryArticlesData].sort(
//     (a, b) => parseDate(b.date) - parseDate(a.date)
//   )
  
//   const exclusiveArticles = sortedArticles
//     .filter(article => article.type === 'exclusive')
//     .slice(0, 3)
  
//   const listArticles = sortedArticles
//   const latestFromOtherCategories = getLatestFromDifferentCategories(authorCategory, 5)
//   const popularArticle = latestFromOtherCategories[0] || null
//   const sidebarPosts = latestFromOtherCategories.slice(1, 5)

//   // ─── JSON-LD: Person Schema ───────────────────────────────────────────────
//   const personJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "Person",
//     "@id": `${SITE_URL}/author/${slug}#person`,
//     "name": author.name,
//     "url": `${SITE_URL}/author/${slug}`,
//     "image": `${SITE_URL}${author.profileImage}`,
//     "description": author.bio,
//     "jobTitle": `${authorCategory.charAt(0).toUpperCase() + authorCategory.slice(1)} Journalist`,
//     "worksFor": {
//       "@type": "NewsMediaOrganization",
//       "name": "Read More About",
//       "url": SITE_URL,
//     },
//     "sameAs": [
//       author.social?.twitter,
//       author.social?.reddit,
//       author.social?.quora,
//       author.social?.medium,
//       author.websiteLink
//     ].filter(Boolean),
//     "nationality": {
//       "@type": "Country",
//       "name": author.country
//     }
//   }

//   // ─── JSON-LD: BreadcrumbList ──────────────────────────────────────────────
//   // IMPORTANT: "@id" here must match the reference used in ProfilePage below.
//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "@id": `${SITE_URL}/author/${slug}#breadcrumb`,
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": SITE_URL,
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": author.name,
//         "item": `${SITE_URL}/author/${slug}`,
//       },
//     ],
//   }

//   // ─── JSON-LD: ProfilePage ─────────────────────────────────────────────────
//   // References Person and BreadcrumbList by @id — Google will resolve them
//   // from the other two <script> blocks on the same page.
//   const profilePageJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "ProfilePage",
//     "@id": `${SITE_URL}/author/${slug}#profile`,
//     "url": `${SITE_URL}/author/${slug}`,
//     "mainEntity": {
//       "@id": `${SITE_URL}/author/${slug}#person`
//     },
//     "breadcrumb": {
//       "@id": `${SITE_URL}/author/${slug}#breadcrumb`
//     }
//   }

//   return (
//     <>
//       {/* ── JSON-LD Scripts ── */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
//       />

//       {/*
//         IMPORTANT: The outer <div> no longer carries itemScope / itemType="Person".
//         We removed all microdata (itemScope, itemProp, itemType) from the HTML because:
//           1. We already have a complete JSON-LD Person block above.
//           2. Having BOTH JSON-LD and microdata causes Google to detect duplicate
//              (and sometimes incomplete) structured-data entities — which is what
//              was generating the "Missing field itemListElement" breadcrumb error.
//         JSON-LD is the Google-recommended approach. Microdata is redundant here.
//       */}
//       <div className="relative mb-30">

//         {/* Author Profile Section with Background */}
//         <div className="relative">
//           <div className="bg-[#eaeaea]/55 pb-80"></div>

//           <div className="container mx-auto px-4 lg:px-7 -mt-68">
//             <div>
//               <div className="flex flex-col lg:flex-row">

//                 {/* Left Column - Author Image */}
//                 <div className="lg:w-[30%] relative">
//                   <div className="relative h-96 lg:h-full">
//                     {/*
//                       sizes prop ensures Next.js serves a correctly-sized image on mobile.
//                       priority keeps this as an early fetch (it is the LCP element).
//                       quality={85} gives good fidelity without unnecessary payload.
//                     */}
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
//                       {author.social?.twitter && (
//                         <Link 
//                           href={author.social.twitter}
//                           className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
//                           title={`Follow ${author.name} on Twitter`}
//                           aria-label={`Follow ${author.name} on Twitter`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                           </svg>
//                         </Link>
//                       )}
//                       {author.social?.reddit && (
//                         <Link 
//                           href={author.social.reddit}
//                           title={`Follow ${author.name} on Reddit`}
//                           aria-label={`Follow ${author.name} on Reddit`}
//                           className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
//                           </svg>
//                         </Link>
//                       )}
//                       {author.social?.quora && (
//                         <Link 
//                           href={author.social.quora}
//                           title={`Follow ${author.name} on Quora`}
//                           aria-label={`Follow ${author.name} on Quora`}
//                           className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12.738 18.701c-.831 0-1.635-.195-2.384-.582.24-.432.488-.939.69-1.463.232-.584.369-1.16.423-1.744.13.028.263.048.398.048 1.143 0 2.067-.938 2.067-2.095 0-1.157-.924-2.095-2.067-2.095-1.143 0-2.067.938-2.067 2.095 0 .118.01.233.03.346-.304.844-.803 1.628-1.443 2.28-.636.648-1.363 1.148-2.123 1.464-.12-.4-.186-.822-.186-1.26 0-2.385 1.93-4.314 4.314-4.314s4.314 1.93 4.314 4.314c0 2.385-1.93 4.314-4.314 4.314-.162 0-.322-.01-.48-.028-.03.414-.132.812-.296 1.188.253.023.508.033.765.033 3.171 0 5.742-2.571 5.742-5.742S15.909 6.025 12.738 6.025c-3.171 0-5.742 2.571-5.742 5.742 0 1.438.529 2.752 1.404 3.762.36.415.772.785 1.228 1.095-.195.51-.454.987-.77 1.414C6.816 16.976 5.5 14.74 5.5 12.231 5.5 7.924 8.924 4.5 13.231 4.5s7.731 3.424 7.731 7.731-3.424 7.731-7.731 7.731c-.164 0-.327-.007-.489-.02z"/>
//                           </svg>
//                         </Link>
//                       )}
//                       {author.social?.medium && (
//                         <Link 
//                           href={author.social.medium}
//                           title={`Follow ${author.name} on Medium`}
//                           aria-label={`Follow ${author.name} on Medium`}
//                           className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
//                           </svg>
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="lg:w-[70%] p-8">

//                   {/* Row 1 - Name, Posts, Bio */}
//                   <div className="mb-10">
//                     <div className="flex items-center gap-4 mb-4">
//                       <h1 className="text-4xl lg:text-5xl font-bold font-serif text-black">
//                         {author.name}
//                       </h1>
//                       <span className="bg-red-600 text-white text-sm font-bold px-4 py-1 uppercase">
//                         {listArticles.length} POSTS
//                       </span>
//                     </div>
//                     <p className="text-gray-700 text-base leading-relaxed mb-4">
//                       {author.bio}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       <span className="font-semibold">Job Title:</span>{' '}
//                       <span>
//                         {authorCategory.charAt(0).toUpperCase() + authorCategory.slice(1)} Journalist at Read More About
//                       </span>
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
//                         <a 
//                           href={author.websiteLink} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="text-red-600 hover:underline"
//                           title={`Visit ${author.name}'s personal website`}
//                         >
//                           {author.websiteLink}
//                         </a>
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <h2 className="text-2xl font-bold font-serif mb-6">
//                       Articles by {author.name}
//                     </h2>

//                     {exclusiveArticles.length > 0 && (
//                       <>
//                         <h3 className="text-lg font-semibold font-serif mb-4">
//                           Exclusive articles by {author.name}:
//                         </h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                           {exclusiveArticles.map((article) => (
//                             <Link 
//                               key={article.id} 
//                               href={`/${authorCategory}/${article.slug}`}
//                               title={`Read: ${article.title}`}
//                             >
//                               <div className="group cursor-pointer">
//                                 <div className="flex gap-3">
//                                   <div className="flex-1 w-[75%]">
//                                     <div className="text-sm font-bold text-black group-hover:text-red-600 transition-colors mb-2 leading-tight">
//                                       <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase inline-block mr-2">
//                                         EXCLUSIVE
//                                       </span>
//                                       {article.title.slice(0, 50)}...
//                                     </div>
//                                     <p className="text-xs text-red-600 font-semibold uppercase">
//                                       {authorCategory}
//                                     </p>
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

//         {/* Articles List Section */}
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


import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'
import CategoryArticles from '../../../public/data/articles.json'
import authorsData from '../../../public/data/authors.json'
import { notFound } from 'next/navigation'
import { slugify } from "@/utils/slugify";

export async function generateStaticParams() {
  const params = [];
  authorsData.categories.forEach((item) => {
    if (item.author?.name) {
      params.push({ slug: slugify(item.author.name) });
    }
  });
  return params;
}

const SITE_URL = "https://www.read-more-about.com";

// ── Static Julio article — injected for business category authors ─────────────
const JULIO_STATIC_ARTICLE = {
  id: "julio-static",
  slug: "julio-herrera-velutini-britannia-financial-group",
  href: "/julio-herrera-velutini/julio-herrera-velutini-britannia-financial-group",
  title: "Julio Herrera Velutini: From Venezuelan Banking Dynasty to Global Finance",
  excerpt:
    "Julio Herrera Velutini built Britannia Financial Group from a 600-year Latin American banking dynasty into a global wealth management platform spanning Switzerland, the UK, and Puerto Rico.",
  image: "/images/news/julio-herrera-velutini-britannia-financial-group.webp",
  imageAlt: "Julio Herrera Velutini, founder of Britannia Financial Group",
  date: "23/02/2026",
  category: "business",
  type: "normal",
};
// ─────────────────────────────────────────────────────────────────────────────

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/')
  return new Date(year, month - 1, day)
}

const getLatestFromDifferentCategories = (currentCategory, limit = 5) => {
  const categories = Object.keys(CategoryArticles).filter(
    cat => cat.toLowerCase() !== currentCategory.toLowerCase()
  )
  const latestArticles = []
  categories.forEach(category => {
    const articles = CategoryArticles[category]
    if (articles && articles.length > 0) {
      // Only consider regular news articles for sidebar
      const newsOnly = articles.filter(
        a => a.newsType !== "client news" && a.newsType !== "pillar news"
      )
      const sorted = [...newsOnly].sort((a, b) => parseDate(b.date) - parseDate(a.date))
      if (sorted.length > 0) {
        latestArticles.push({ ...sorted[0], category })
      }
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

  // Count only regular news articles for metadata
  const articleCount = categoryArticlesData.filter(
    a => a.newsType !== "client news" && a.newsType !== "pillar news"
  ).length

  const imageUrl = `${SITE_URL}${author.profileImage}`

  return {
    title: `${author.name} — Journalist at Read More About | ${articleCount} Articles`,
    description: `Explore ${articleCount} insightful articles by ${author.name}, covering ${authorCategory} news and analysis. Read expert journalism and investigative reports on Read More About.`,
    keywords: `${author.name}, ${authorCategory} journalist, news writer, ${authorCategory} articles, investigative journalism`,
    alternates: { canonical: `${SITE_URL}/author/${slug}` },
    openGraph: {
      title: `${author.name} — ${authorCategory} Journalist at Read More About`,
      description: `${author.bio} Read ${articleCount} articles by ${author.name}.`,
      url: `${SITE_URL}/author/${slug}`,
      type: 'profile',
      siteName: 'Read More About',
      images: [{ url: imageUrl, width: 800, height: 800, alt: `${author.name} profile picture` }],
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

  if (!authorData) notFound()

  const author = authorData.author
  const authorCategory = authorData.category
  const categoryArticlesData = CategoryArticles[authorCategory] || []

  // ── Filter: only newsType === "news" articles ─────────────────────────────
  const newsOnlyArticles = categoryArticlesData.filter(
    a => a.newsType !== "client news" && a.newsType !== "pillar news"
  )

  const sortedArticles = [...newsOnlyArticles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  )

  // Exclusive articles (from news only)
  const exclusiveArticles = sortedArticles
    .filter(article => article.type === 'exclusive')
    .slice(0, 3)

  // ── Inject static Julio article at position 0 for business authors ─────────
  const listArticles =
    authorCategory.toLowerCase() === "business"
      ? [JULIO_STATIC_ARTICLE, ...sortedArticles]
      : sortedArticles

  const latestFromOtherCategories = getLatestFromDifferentCategories(authorCategory, 5)
  const popularArticle = latestFromOtherCategories[0] || null
  const sidebarPosts = latestFromOtherCategories.slice(1, 5)

  // ─── JSON-LD ──────────────────────────────────────────────────────────────
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/author/${slug}#person`,
    "name": author.name,
    "url": `${SITE_URL}/author/${slug}`,
    "image": `${SITE_URL}${author.profileImage}`,
    "description": author.bio,
    "jobTitle": `${authorCategory.charAt(0).toUpperCase() + authorCategory.slice(1)} Journalist`,
    "worksFor": { "@type": "NewsMediaOrganization", "name": "Read More About", "url": SITE_URL },
    "sameAs": [
      author.social?.twitter,
      author.social?.reddit,
      author.social?.quora,
      author.social?.medium,
      author.websiteLink
    ].filter(Boolean),
    "nationality": { "@type": "Country", "name": author.country }
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/author/${slug}#breadcrumb`,
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": author.name, "item": `${SITE_URL}/author/${slug}` },
    ],
  }

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/author/${slug}#profile`,
    "url": `${SITE_URL}/author/${slug}`,
    "mainEntity": { "@id": `${SITE_URL}/author/${slug}#person` },
    "breadcrumb": { "@id": `${SITE_URL}/author/${slug}#breadcrumb` }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />

      <div className="relative mb-30">

        {/* Author Profile Section */}
        <div className="relative">
          <div className="bg-[#eaeaea]/55 pb-80"></div>

          <div className="container mx-auto px-4 lg:px-7 -mt-68">
            <div>
              <div className="flex flex-col lg:flex-row">

                {/* Left Column - Author Image */}
                <div className="lg:w-[30%] relative">
                  <div className="relative h-96 lg:h-full">
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
                        <Link href={author.social.twitter} className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" title={`Follow ${author.name} on Twitter`} aria-label={`Follow ${author.name} on Twitter`} target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </Link>
                      )}
                      {author.social?.reddit && (
                        <Link href={author.social.reddit} title={`Follow ${author.name} on Reddit`} aria-label={`Follow ${author.name} on Reddit`} className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                        </Link>
                      )}
                      {author.social?.quora && (
                        <Link href={author.social.quora} title={`Follow ${author.name} on Quora`} aria-label={`Follow ${author.name} on Quora`} className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.738 18.701c-.831 0-1.635-.195-2.384-.582.24-.432.488-.939.69-1.463.232-.584.369-1.16.423-1.744.13.028.263.048.398.048 1.143 0 2.067-.938 2.067-2.095 0-1.157-.924-2.095-2.067-2.095-1.143 0-2.067.938-2.067 2.095 0 .118.01.233.03.346-.304.844-.803 1.628-1.443 2.28-.636.648-1.363 1.148-2.123 1.464-.12-.4-.186-.822-.186-1.26 0-2.385 1.93-4.314 4.314-4.314s4.314 1.93 4.314 4.314c0 2.385-1.93 4.314-4.314 4.314-.162 0-.322-.01-.48-.028-.03.414-.132.812-.296 1.188.253.023.508.033.765.033 3.171 0 5.742-2.571 5.742-5.742S15.909 6.025 12.738 6.025c-3.171 0-5.742 2.571-5.742 5.742 0 1.438.529 2.752 1.404 3.762.36.415.772.785 1.228 1.095-.195.51-.454.987-.77 1.414C6.816 16.976 5.5 14.74 5.5 12.231 5.5 7.924 8.924 4.5 13.231 4.5s7.731 3.424 7.731 7.731-3.424 7.731-7.731 7.731c-.164 0-.327-.007-.489-.02z"/></svg>
                        </Link>
                      )}
                      {author.social?.medium && (
                        <Link href={author.social.medium} title={`Follow ${author.name} on Medium`} aria-label={`Follow ${author.name} on Medium`} className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="lg:w-[70%] p-8">
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <h1 className="text-4xl lg:text-5xl font-bold font-serif text-black">
                        {author.name}
                      </h1>
                      {/* Post count shows only real news articles */}
                      <span className="bg-red-600 text-white text-sm font-bold px-4 py-1 uppercase">
                        {sortedArticles.length} POSTS
                      </span>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">{author.bio}</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Job Title:</span>{' '}
                      <span>{authorCategory.charAt(0).toUpperCase() + authorCategory.slice(1)} Journalist at Read More About</span>
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
                        <a href={author.websiteLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline" title={`Visit ${author.name}'s personal website`}>
                          {author.websiteLink}
                        </a>
                      </p>
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold font-serif mb-6">Articles by {author.name}</h2>

                    {exclusiveArticles.length > 0 && (
                      <>
                        <h3 className="text-lg font-semibold font-serif mb-4">
                          Exclusive articles by {author.name}:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {exclusiveArticles.map((article) => (
                            <Link key={article.id} href={`/${authorCategory}/${article.slug}`} title={`Read: ${article.title}`}>
                              <div className="group cursor-pointer">
                                <div className="flex gap-3">
                                  <div className="flex-1 w-[75%]">
                                    <div className="text-sm font-bold text-black group-hover:text-red-600 transition-colors mb-2 leading-tight">
                                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase inline-block mr-2">EXCLUSIVE</span>
                                      {article.title.slice(0, 50)}...
                                    </div>
                                    <p className="text-xs text-red-600 font-semibold uppercase">{authorCategory}</p>
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

        {/* Articles List */}
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