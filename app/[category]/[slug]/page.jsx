

import { notFound } from "next/navigation";
import Image from "next/image";
import categorypagedata from "../../../public/data/articles.json";
import authorsPageData from "../../../public/data/authors.json";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import SubscribeBox from "@/components/articlepagecomponents/SubscribeBox";
import { FaXTwitter, FaReddit, FaQuora } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const SITE_URL = "https://www.read-more-about.com";

// Helper function to parse date string (DD/MM/YYYY) to Date object
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/')
  return new Date(year, month - 1, day)
}

export async function generateStaticParams() {
  const params = [];

  Object.keys(categorypagedata).forEach((category) => {
    const articles = categorypagedata[category] || [];

    articles.forEach((article) => {
      params.push({
        category: category,
        slug: article.slug,
      });
    });
  });

  return params;
}


// Helper function to format date
const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const date = new Date(year, month - 1, day);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Function to get latest article from each category (excluding current category)
const getLatestFromDifferentCategories = (currentCategory, limit = 5) => {
  const categories = Object.keys(categorypagedata).filter(
    cat => cat.toLowerCase() !== currentCategory.toLowerCase()
  )
  
  const latestArticles = []
  
  categories.forEach(category => {
    const articles = categorypagedata[category]
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

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = categorypagedata[category]?.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords?.join(', '),
    alternates: {
      canonical: `${SITE_URL}/${category}/${slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_URL}/${category}/${slug}`,
      siteName: "Read More About",
      images: [
        {
          url: `${SITE_URL}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.imageAlt || article.title,
        },
      ],
      type: "article",
      publishedTime: new Date(article.date.split('/').reverse().join('-')).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}${article.image}`],
      creator: "@readmoreabout",
      site: "@readmoreabout",
    },
  };
}

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;

  const categoryPosts = categorypagedata[category] || [];
  const article = categoryPosts.find((item) => item.slug === slug);

  if (!article) notFound();

  const authorData = authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  )?.author;

  if (!authorData) notFound();

  const currentIndex = categoryPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;

  // Get 4 related articles (excluding current one)
  const relatedArticles = categoryPosts
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  // Get latest 5 articles from different categories for Popular section
  const popularArticles = getLatestFromDifferentCategories(category, 5);

  const shareUrl = `${SITE_URL}/${category}/${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent(article.title);

  // JSON-LD: NewsArticle
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: new Date(article.date.split('/').reverse().join('-')).toISOString(),
    dateModified: new Date(article.date.split('/').reverse().join('-')).toISOString(),
    author: {
      "@type": "Person",
      name: authorData.name,
      url: `${SITE_URL}/author/${slugify(authorData.name)}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Read More About",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/read-more-about-logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${category}/${slug}`,
    },
    articleSection: category,
    keywords: article.keywords?.join(', ') || "",
  };

  // JSON-LD: BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.charAt(0).toUpperCase() + category.slice(1),
        item: `${SITE_URL}/${category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL}/${category}/${slug}`,
      },
    ],
  };

  // Render content based on type
  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {item.text}
          </p>
        );

      case 'heading':
        const HeadingTag = `h${item.level}`;
        const headingClasses = `text-red-600 ${
          item.level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
        } font-bold text-center italic my-8`;

        return (
          <HeadingTag key={index} className={headingClasses}>
            {item.text}
          </HeadingTag>
        );

      case 'image':
        return (
          <div key={index} className="relative w-full h-[270px] md:h-[500px] mb-6">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
              className="object-cover rounded-lg"
              quality={74}
              loading="lazy"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Preload critical hero image for LCP optimization */}
      <link
        rel="preload"
        as="image"
        href={article.image}
        // imageSrcSet={`${article.image} 1200w, ${article.image} 800w, ${article.image} 400w`}
        // imageSizes="100vw"
        fetchPriority="high"
      />

      {/* JSON-LD Scripts - FIXED: Using regular script tags instead of Script component */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd)
        }}
      />

      <div className="w-full" itemScope itemType="https://schema.org/NewsArticle">
        {/* Hidden microdata elements for SEO testers */}
        <meta itemProp="headline" content={article.title} />
        <meta itemProp="description" content={article.excerpt} />
        <meta itemProp="image" content={`${SITE_URL}${article.image}`} />
        <meta itemProp="datePublished" content={new Date(article.date.split('/').reverse().join('-')).toISOString()} />
        <meta itemProp="dateModified" content={new Date(article.date.split('/').reverse().join('-')).toISOString()} />
        <meta itemProp="articleSection" content={category} />
        <meta itemProp="keywords" content={article.keywords?.join(', ')} />
        
        <div itemProp="author" itemScope itemType="https://schema.org/Person" style={{display: 'none'}}>
          <meta itemProp="name" content={authorData.name} />
          <meta itemProp="url" content={`${SITE_URL}/author/${slugify(authorData.name)}`} />
        </div>
        
        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization" style={{display: 'none'}}>
          <meta itemProp="name" content="Read More About" />
          <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
            <meta itemProp="url" content={`${SITE_URL}/images/read-more-about-logo.webp`} />
          </div>
        </div>

        {/* Hero Section - OPTIMIZED FOR LCP */}
        <div className='px-4 lg:px-7'>
          <div className="px-4 lg:px-7 mt-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm flex-wrap">
                {/* Home */}
                <li>
                  <Link href="/" title="Home page" className="hover:text-red-600">
                    Home
                  </Link>
                </li>

                <li>/</li>

                {/* Category */}
                <li>
                  <Link
                    href={`/${category}`}
                    className="hover:text-red-600 capitalize"
                    title={`${category} page`}
                  >
                    {category}
                  </Link>
                </li>

                <li>/</li>

                {/* Current Article */}
                <li className="text-gray-600 line-clamp-1">
                  {article.title}
                </li>
              </ol>
            </nav>
          </div>

          <div className="relative w-full h-[450px] md:h-[600px] lg:h-[700px] mt-10">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1536px) 92vw, 1400px"
              className="object-cover"
              priority
              fetchPriority="high"
              quality={78}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
            />
            
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-4 pb-8 md:pb-12">
              <p className="text-white text-sm md:text-base font-bold tracking-wider mb-4 uppercase">
                {category}
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold text-center max-w-5xl leading-tight font-serif" itemProp="headline">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Metadata Section */}
        <div className="w-full bg-white px-4 lg:px-7">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-center gap-3 text-black text-sm md:text-base mb-6">
              <span className="font-semibold">
                By: <Link 
                  href={`/author/${slugify(authorData.name)}`}
                  title={`View ${authorData.name}'s author page`}
                >
                  <span className='hover:text-red-500 cursor-pointer' itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{authorData.name}</span>
                  </span>
                </Link>
              </span>
              <span className="text-gray-700">|</span>
              <span className="font-semibold">
                Date: <time itemProp="datePublished" dateTime={new Date(article.date.split('/').reverse().join('-')).toISOString()}>
                  {formatDate(article.date)}
                </time>
              </span>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200" />
        </div>

        {/* Article Content */}
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-7">
            
            {/* Left Column - 75% width */}
            <div className="w-full lg:w-3/4 font-serif" itemProp="articleBody">
              {/* Dynamic Content Rendering */}
              {article.content.map((item, index) => renderContent(item, index))}
              
              {/* Previous/Next Article Navigation */}
             {/* Previous/Next Article Navigation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 p-6 rounded-lg">
                {/* Previous Article */}
                <div className="bg-[#eaeaea]/50 p-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Previous article</p>
                  {prevPost ? (
                    <Link 
                      href={`/${category}/${prevPost.slug}`}
                      title={`Read previous article: ${prevPost.title}`}
                    >
                      <p className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">
                        {prevPost.title}
                      </p>
                    </Link>
                  ) : (
                    <p className="text-gray-500 text-sm">No previous article</p>
                  )}
                </div>

                {/* Next Article */}
                <div className="bg-[#eaeaea]/50 p-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Next article</p>
                  {nextPost ? (
                    <Link 
                      href={`/${category}/${nextPost.slug}`}
                      title={`Read next article: ${nextPost.title}`}
                    >
                      <p className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">
                        {nextPost.title}
                      </p>
                    </Link>
                  ) : (
                    <p className="text-gray-500 text-sm">No next article</p>
                  )}
                </div>
              </div>

              {/* Horizontal Line */}
              <div className="w-full h-px bg-gray-200 my-8" />

              {/* Author Section */}
              <div className="flex gap-6 items-center flex-col lg:flex-row">
                {/* Author Profile Picture */}
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 lg:w-25 lg:h-25 rounded-full overflow-hidden">
                    <Image
                      src={authorData.profileImage}
                      alt={`${authorData.name} profile picture`}
                      fill
                      sizes="80px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex-1 text-center lg:text-left">
                  <Link 
                    href={`/author/${slugify(authorData.name)}`}
                    title={`View ${authorData.name}'s author page`}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-1 hover:text-red-600">
                      {authorData.name}
                    </h2>
                  </Link>
                 
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {authorData.bio}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-3 lg:gap-6 justify-center lg:justify-start">
                    {authorData.social?.twitter && (
                      <a 
                        href={authorData.social.twitter} 
                        className="hover:text-red-500 transition" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={`Follow ${authorData.name} on Twitter`}
                        aria-label={`Follow ${authorData.name} on Twitter`}
                      >
                        <FaXTwitter size={15} />
                      </a>
                    )}
                    {authorData.social?.quora && (
                      <a 
                        href={authorData.social.quora} 
                        className="hover:text-red-500 transition" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={`Follow ${authorData.name} on Quora`}
                        aria-label={`Follow ${authorData.name} on Quora`}
                      >
                        <FaQuora size={18} />
                      </a>
                    )}
                    {authorData.social?.reddit && (
                      <a 
                        href={authorData.social.reddit} 
                        className="hover:text-red-500 transition" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={`Follow ${authorData.name} on Reddit`}
                        aria-label={`Follow ${authorData.name} on Reddit`}
                      >
                        <FaReddit size={15} />
                      </a>
                    )}
                    {authorData.social?.medium && (
                      <a 
                        href={authorData.social.medium} 
                        className="hover:text-red-500 transition" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={`Follow ${authorData.name} on Medium`}
                        aria-label={`Follow ${authorData.name} on Medium`}
                      >
                        <SiMedium size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Horizontal Line */}
              <div className="w-full h-px bg-gray-200 my-8" />
            </div>

            {/* Right Column - 25% width - Sticky */}
            <div className="w-full lg:w-1/4">
              <div className="lg:sticky lg:top-4 space-y-6">
                
                {/* Share Post Card */}
                <div className="bg-white shadow-xl px-15 py-10 rounded-lg flex flex-col items-center">
                  <h2 className="text-gray-800 font-bold mb-4 uppercase tracking-wide">Share Post :</h2>
                  <div className="flex gap-2">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer"
                      title="Share on Facebook"
                      aria-label="Share on Facebook"
                    >
                      <FaFacebookF size={14} />
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer"
                      title="Share on Twitter"
                      aria-label="Share on Twitter"
                    >
                      <FaTwitter size={14} />
                    </a>
                    <a 
                      href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${shareTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer"
                      title="Share on Pinterest"
                      aria-label="Share on Pinterest"
                    >
                      <FaPinterestP size={14} />
                    </a>
                    <a 
                      href={`https://wa.me/?text=${shareTitle}%20${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer"
                      title="Share on WhatsApp"
                      aria-label="Share on WhatsApp"
                    >
                      <FaWhatsapp size={14} />
                    </a>
                  </div>
                </div>

                {/* Subscription Field */}
                {/* <div>
                  <h2 className="text-xl font-bold mb-4">Subscribe</h2>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button className="w-full bg-red-600 text-xs hover:bg-red-500 text-white font-bold py-4 px-4 rounded transition">
                    I WANT IN →
                  </button>
                  <div className="mt-3">
                    <label className="flex items-start gap-2 text-xs">
                      <input type="checkbox" className="mt-1" />
                      <span>I've read and accept the Privacy Policy.</span>
                    </label>
                  </div>
                </div> */}
                <SubscribeBox/>

                {/* Advertisement Image */}
                <div className="mt-6 text-white text-center">
                  <div className="relative w-75 lg:w-70 h-110 mx-auto mb-4">
                    <Image
                      src="/images/readmoreabout_ads.webp"
                      alt="Advertisement"
                      fill
                      sizes="(max-width: 1024px) 300px, 280px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Popular Section - Dynamic Latest Articles from Different Categories */}
                <div className='mt-7'>
                  <h2 className="font-bold text-2xl mb-2">Popular</h2>
                  <div className="w-full h-1 bg-red-600 mb-4" />
                  
                  {/* Popular Items - Latest 5 from different categories */}
                  <div className='space-y-4'>
                    {popularArticles.map((item) => (
                      <Link 
                        key={item.slug} 
                        href={`/${item.category}/${item.slug}`}
                        title={`Read: ${item.title}`}
                      >
                        <div className="flex gap-3 group cursor-pointer mb-2">
                          <div className="relative w-20 h-16 flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              fill
                              sizes="80px"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xs font-bold group-hover:text-red-600 transition-colors line-clamp-3">
                              {item.type !== "normal" && (
                                <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase">
                                  {item.type}
                                </span>
                              )}
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Related Articles Section */}
          <div className="relative mb-5 pt-10">
            {/* Heading with RELATED Background */}
            <div className="max-w-7xl mx-auto px-4 relative mb-8">
              <div className="relative">
                {/* Background Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  <span className="text-7xl md:text-7xl lg:text-7xl font-bold text-gray-50 font-serif uppercase whitespace-nowrap">
                    RELATED
                  </span>
                </div>
                
                {/* Foreground Heading */}
                <h2 className="text-4xl md:text-4xl font-bold text-center mb-0 font-serif relative z-10 py-4">
                  More like this
                </h2>
              </div>
            </div>

            {/* Background container */}
            <div className="relative">
              {/* Gray Background */}
              <div 
                className="absolute left-0 right-0 bg-[#eaeaea]/40 pointer-events-none h-90 lg:h-130 top:90 lg:top-90"
                style={{
                  transform: 'translateY(-50%)',
                  bottom: 0,
                  zIndex: 0
                }}
              />

              {/* Related Articles Grid */}
              <div className="max-w-7xl mx-auto px-4 lg:px-7 pb-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <div key={relatedArticle.id} className="group">
                      {/* Image */}
                      <Link 
                        href={`/${category}/${relatedArticle.slug}`}
                        title={`Read: ${relatedArticle.title}`}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden mb-4">
                          <Image
                            src={relatedArticle.image}
                            alt={relatedArticle.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                            loading="lazy"
                          />
                        </div>
                      </Link>

                      {/* Title */}
                      <Link 
                        href={`/${category}/${relatedArticle.slug}`}
                        title={`Read: ${relatedArticle.title}`}
                      >
                        <h3 className="font-serif text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors cursor-pointer">
                          {relatedArticle.title}
                        </h3>
                      </Link>

                      {/* Author Info */}
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                          <Image
                            src={authorData.profileImage}
                            alt={`${authorData.name} profile picture`}
                            width={24}
                            height={24}
                            sizes="24px"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>

                        <Link 
                          href={`/author/${slugify(authorData.name)}`}
                          title={`View ${authorData.name}'s author page`}
                        >
                          <span className="font-medium hover:text-red-600 cursor-pointer">
                            {authorData.name}
                          </span>
                        </Link>

                        <span>-</span>
                        <span>{formatDate(relatedArticle.date)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



// GIVE THIS CODE AFTER ADDING JULIO CONTNET

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import categorypagedata from "../../../public/data/articles.json";
// import authorsPageData from "../../../public/data/authors.json";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp } from 'react-icons/fa';
// import Link from "next/link";
// import { slugify } from "@/utils/slugify";
// import SubscribeBox from "@/components/articlepagecomponents/SubscribeBox";

// const SITE_URL = "https://www.read-more-about.com";

// // ── Static Julio article — now in politics/julio-herrera-velutini route ───────
// // const JULIO_STATIC_POPULAR = {
// //   id: "julio-static",
// //   slug: "trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
// //   href: "/julio-herrera-velutini/trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
// //   title: "Trump Grants Pardon to Banker Julio Herrera Velutini, Ending Federal Case",
// //   image: "/images/news/trump-grants-pardon-julio-herrera-velutini-ending-federal.webp",
// //   imageAlt: "Julio Herrera Velutini, founder of Britannia Financial Group",
// //   type: "normal",
// //   category: "politics",
// // };
// const JULIO_STATIC_POPULAR = {
//   id: "julio-static",
//   slug: "trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
//   href: "/politics/trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
//   title: "Trump Grants Pardon to Banker Julio Herrera Velutini, Ending Federal Case",
//   image: "/images/news/trump-grants-pardon-julio-herrera-velutini-ending-federal.webp",
//   imageAlt: "Julio Herrera Velutini, founder of Britannia Financial Group",
//   type: "normal",
//   category: "politics",
// };

// const parseDate = (dateStr) => {
//   const [day, month, year] = dateStr.split('/')
//   return new Date(year, month - 1, day)
// }

// export async function generateStaticParams() {
//   const params = [];
//   Object.keys(categorypagedata).forEach((category) => {
//     const articles = categorypagedata[category] || [];
//     articles.forEach((article) => {
//       params.push({ category, slug: article.slug });
//     });
//   });
//   return params;
// }

// const formatDate = (dateString) => {
//   const [day, month, year] = dateString.split('/');
//   const date = new Date(year, month - 1, day);
//   return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
// };

// const getLatestFromDifferentCategories = (currentCategory, limit = 4) => {
//   const categories = Object.keys(categorypagedata).filter(
//     cat => cat.toLowerCase() !== currentCategory.toLowerCase()
//   )
//   const latestArticles = []
//   categories.forEach(category => {
//     const articles = categorypagedata[category]
//     if (articles && articles.length > 0) {
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
//   const { category, slug } = await params;
//   const article = categorypagedata[category]?.find((item) => item.slug === slug);
//   if (!article) notFound();

//   return {
//     title: article.metaTitle,
//     description: article.metaDescription,
//     keywords: article.keywords?.join(', '),
//     alternates: { canonical: `${SITE_URL}/${category}/${slug}` },
//     openGraph: {
//       title: article.metaTitle,
//       description: article.metaDescription,
//       url: `${SITE_URL}/${category}/${slug}`,
//       siteName: "Read More About",
//       images: [{ url: `${SITE_URL}${article.image}`, width: 1200, height: 630, alt: article.imageAlt || article.title }],
//       type: "article",
//       publishedTime: new Date(article.date.split('/').reverse().join('-')).toISOString(),
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.metaTitle,
//       description: article.metaDescription,
//       images: [`${SITE_URL}${article.image}`],
//       creator: "@readmoreabout",
//       site: "@readmoreabout",
//     },
//   };
// }

// export default async function ArticlePage({ params }) {
//   const { category, slug } = await params;

//   const categoryPosts = categorypagedata[category] || [];
//   const article = categoryPosts.find((item) => item.slug === slug);
//   if (!article) notFound();

//   const authorData = authorsPageData.categories.find(
//     (item) => item.category.toLowerCase() === category.toLowerCase()
//   )?.author;
//   if (!authorData) notFound();

//   const newsOnlyPosts = categoryPosts.filter(
//     p => p.newsType !== "client news" && p.newsType !== "pillar news"
//   );
//   const currentNewsIndex = newsOnlyPosts.findIndex((p) => p.slug === slug);
//   const prevPost = currentNewsIndex > 0 ? newsOnlyPosts[currentNewsIndex - 1] : null;
//   const nextPost = currentNewsIndex < newsOnlyPosts.length - 1 ? newsOnlyPosts[currentNewsIndex + 1] : null;

//   const relatedArticles = newsOnlyPosts.filter((item) => item.slug !== slug).slice(0, 4);

//   const dynamicPopular = getLatestFromDifferentCategories(category, 4);
//   const popularArticles = [...dynamicPopular, JULIO_STATIC_POPULAR];

//   const shareUrl = `${SITE_URL}/${category}/${slug}`;
//   const encodedUrl = encodeURIComponent(shareUrl);
//   const shareTitle = encodeURIComponent(article.title);

//   const articleJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     headline: article.title,
//     description: article.excerpt,
//     image: [article.image],
//     datePublished: new Date(article.date.split('/').reverse().join('-')).toISOString(),
//     dateModified: new Date(article.date.split('/').reverse().join('-')).toISOString(),
//     author: { "@type": "Person", name: authorData.name, url: `${SITE_URL}/author/${slugify(authorData.name)}` },
//     publisher: { "@type": "Organization", name: "Read More About", logo: { "@type": "ImageObject", url: `${SITE_URL}/images/read-more-about-logo.webp` } },
//     mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${category}/${slug}` },
//     articleSection: category,
//     keywords: article.keywords?.join(', ') || "",
//   };

//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//       { "@type": "ListItem", position: 2, name: category.charAt(0).toUpperCase() + category.slice(1), item: `${SITE_URL}/${category}` },
//       { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/${category}/${slug}` },
//     ],
//   };

//   const renderContent = (item, index) => {
//     switch (item.type) {
//       case 'paragraph':
//         return <p key={index} className="text-gray-700 leading-relaxed mb-6">{item.text}</p>;
//       case 'heading': {
//         const HeadingTag = `h${item.level}`;
//         const headingClasses = `text-red-600 ${item.level === 2 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold text-center italic my-8`;
//         return <HeadingTag key={index} className={headingClasses}>{item.text}</HeadingTag>;
//       }
//       case 'image':
//         return (
//           <div key={index} className="relative w-full h-[270px] md:h-[500px] mb-6">
//             <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px" className="object-cover rounded-lg" quality={74} loading="lazy" />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <link rel="preload" as="image" href={article.image} fetchPriority="high" />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

//       <div className="w-full" itemScope itemType="https://schema.org/NewsArticle">
//         <meta itemProp="headline" content={article.title} />
//         <meta itemProp="description" content={article.excerpt} />
//         <meta itemProp="image" content={`${SITE_URL}${article.image}`} />
//         <meta itemProp="datePublished" content={new Date(article.date.split('/').reverse().join('-')).toISOString()} />
//         <meta itemProp="dateModified" content={new Date(article.date.split('/').reverse().join('-')).toISOString()} />
//         <meta itemProp="articleSection" content={category} />
//         <meta itemProp="keywords" content={article.keywords?.join(', ')} />
//         <div itemProp="author" itemScope itemType="https://schema.org/Person" style={{ display: 'none' }}>
//           <meta itemProp="name" content={authorData.name} />
//           <meta itemProp="url" content={`${SITE_URL}/author/${slugify(authorData.name)}`} />
//         </div>
//         <div itemProp="publisher" itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
//           <meta itemProp="name" content="Read More About" />
//           <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
//             <meta itemProp="url" content={`${SITE_URL}/images/read-more-about-logo.webp`} />
//           </div>
//         </div>

//         <div className='px-4 lg:px-7'>
//           <div className="px-4 lg:px-7 mt-6">
//             <nav aria-label="Breadcrumb" className="mb-6">
//               <ol className="flex items-center gap-2 text-sm flex-wrap">
//                 <li><Link href="/" title="Home page" className="hover:text-red-600">Home</Link></li>
//                 <li>/</li>
//                 <li><Link href={`/${category}`} className="hover:text-red-600 capitalize" title={`${category} page`}>{category}</Link></li>
//                 <li>/</li>
//                 <li className="text-gray-600 line-clamp-1">{article.title}</li>
//               </ol>
//             </nav>
//           </div>

//           <div className="relative w-full h-[450px] md:h-[600px] lg:h-[700px] mt-10">
//             <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1536px) 92vw, 1400px" className="object-cover" priority fetchPriority="high" quality={78} placeholder="blur" blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=" />
//             <div className="absolute inset-0 bg-black/30" />
//             <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-4 pb-8 md:pb-12">
//               <p className="text-white text-sm md:text-base font-bold tracking-wider mb-4 uppercase">{category}</p>
//               <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold text-center max-w-5xl leading-tight font-serif" itemProp="headline">{article.title}</h1>
//             </div>
//           </div>
//         </div>

//         <div className="w-full bg-white px-4 lg:px-7">
//           <div className="max-w-4xl mx-auto px-4 py-6">
//             <div className="flex items-center justify-center gap-3 text-black text-sm md:text-base mb-6">
//               <span className="font-semibold">
//                 By: <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
//                   <span className='hover:text-red-500 cursor-pointer' itemProp="author" itemScope itemType="https://schema.org/Person">
//                     <span itemProp="name">{authorData.name}</span>
//                   </span>
//                 </Link>
//               </span>
//               <span className="text-gray-700">|</span>
//               <span className="font-semibold">
//                 Date: <time itemProp="datePublished" dateTime={new Date(article.date.split('/').reverse().join('-')).toISOString()}>{formatDate(article.date)}</time>
//               </span>
//             </div>
//           </div>
//           <div className="w-full h-px bg-gray-200" />
//         </div>

//         <div className="max-w-7xl mx-auto py-8">
//           <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-7">
//             <div className="w-full lg:w-3/4 font-serif" itemProp="articleBody">
//               {article.content.map((item, index) => renderContent(item, index))}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 p-6 rounded-lg">
//                 <div className="bg-[#eaeaea]/50 p-5">
//                   <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Previous article</p>
//                   {prevPost ? (
//                     <Link href={`/${category}/${prevPost.slug}`} title={`Read previous article: ${prevPost.title}`}>
//                       <p className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">{prevPost.title}</p>
//                     </Link>
//                   ) : (
//                     <p className="text-gray-500 text-sm">No previous article</p>
//                   )}
//                 </div>
//                 <div className="bg-[#eaeaea]/50 p-5">
//                   <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Next article</p>
//                   {nextPost ? (
//                     <Link href={`/${category}/${nextPost.slug}`} title={`Read next article: ${nextPost.title}`}>
//                       <p className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">{nextPost.title}</p>
//                     </Link>
//                   ) : (
//                     <p className="text-gray-500 text-sm">No next article</p>
//                   )}
//                 </div>
//               </div>

//               <div className="w-full h-px bg-gray-200 my-8" />

//               <div className="flex gap-6 items-center flex-col lg:flex-row">
//                 <div className="flex-shrink-0">
//                   <div className="relative w-20 h-20 lg:w-25 lg:h-25 rounded-full overflow-hidden">
//                     <Image src={authorData.profileImage} alt={`${authorData.name} profile picture`} fill sizes="80px" className="object-cover" loading="lazy" />
//                   </div>
//                 </div>
//                 <div className="flex-1 text-center lg:text-left">
//                   <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
//                     <h2 className="text-2xl font-bold text-gray-900 mb-1 hover:text-red-600">{authorData.name}</h2>
//                   </Link>
//                   {/* {authorData.websiteLink && (
//                     <a href={authorData.websiteLink} className="text-blue-600 hover:underline text-sm mb-1 block" target="_blank" rel="noopener noreferrer" title={`Visit ${authorData.name}'s website`}>{authorData.websiteLink}</a>
//                   )} */}
//                   <p className="text-gray-700 text-sm leading-relaxed mb-4">{authorData.bio}</p>
//                   <div className="flex gap-3 lg:gap-6 justify-center lg:justify-start">
//                     {authorData.social?.twitter && <a href={authorData.social.twitter} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Twitter`} aria-label={`Follow ${authorData.name} on Twitter`}><FaTwitter size={15} /></a>}
//                     {authorData.social?.quora && <a href={authorData.social.quora} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Quora`} aria-label={`Follow ${authorData.name} on Quora`}><FaInstagram size={15} /></a>}
//                     {authorData.social?.reddit && <a href={authorData.social.reddit} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Reddit`} aria-label={`Follow ${authorData.name} on Reddit`}><FaFacebookF size={15} /></a>}
//                     {authorData.social?.medium && <a href={authorData.social.medium} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Medium`} aria-label={`Follow ${authorData.name} on Medium`}><FaYoutube size={15} /></a>}
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full h-px bg-gray-200 my-8" />
//             </div>

//             <div className="w-full lg:w-1/4">
//               <div className="lg:sticky lg:top-4 space-y-6">
//                 <div className="bg-white shadow-xl px-15 py-10 rounded-lg flex flex-col items-center">
//                   <h2 className="text-gray-800 font-bold mb-4 uppercase tracking-wide">Share Post :</h2>
//                   <div className="flex gap-2">
//                     <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Facebook" aria-label="Share on Facebook"><FaFacebookF size={14} /></a>
//                     <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Twitter" aria-label="Share on Twitter"><FaTwitter size={14} /></a>
//                     <a href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Pinterest" aria-label="Share on Pinterest"><FaPinterestP size={14} /></a>
//                     <a href={`https://wa.me/?text=${shareTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on WhatsApp" aria-label="Share on WhatsApp"><FaWhatsapp size={14} /></a>
//                   </div>
//                 </div>

//                 <SubscribeBox />

//                 <div className="mt-6 text-white text-center">
//                   <div className="relative w-75 lg:w-70 h-110 mx-auto mb-4">
//                     <Image src="/images/mirrorstandard_ads.webp" alt="Advertisement" fill sizes="(max-width: 1024px) 300px, 280px" className="object-cover" loading="lazy" />
//                   </div>
//                 </div>

//                 <div className='mt-7'>
//                   <h2 className="font-bold text-2xl mb-2">Popular</h2>
//                   <div className="w-full h-1 bg-red-600 mb-4" />
//                   <div className='space-y-4'>
//                     {popularArticles.map((item) => {
//                       const itemHref = item.href ?? `/${item.category}/${item.slug}`;
//                       return (
//                         <Link key={item.slug} href={itemHref} title={`Read: ${item.title}`}>
//                           <div className="flex gap-3 group cursor-pointer mb-2">
//                             <div className="relative w-20 h-16 flex-shrink-0">
//                               <Image src={item.image} alt={item.imageAlt} fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
//                             </div>
//                             <div className="flex-1">
//                               <h3 className="text-xs font-bold group-hover:text-red-600 transition-colors line-clamp-3">
//                                 {item.type !== "normal" && (
//                                   <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase">{item.type}</span>
//                                 )}
//                                 {item.title}
//                               </h3>
//                             </div>
//                           </div>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative mb-5 pt-10">
//             <div className="max-w-7xl mx-auto px-4 relative mb-8">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
//                   <span className="text-7xl md:text-7xl lg:text-7xl font-bold text-gray-50 font-serif uppercase whitespace-nowrap">RELATED</span>
//                 </div>
//                 <h2 className="text-4xl md:text-4xl font-bold text-center mb-0 font-serif relative z-10 py-4">More like this</h2>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="absolute left-0 right-0 bg-[#eaeaea]/40 pointer-events-none h-90 lg:h-130 top:90 lg:top-90" style={{ transform: 'translateY(-50%)', bottom: 0, zIndex: 0 }} />
//               <div className="max-w-7xl mx-auto px-4 lg:px-7 pb-8 relative z-10">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {relatedArticles.map((relatedArticle) => (
//                     <div key={relatedArticle.id} className="group">
//                       <Link href={`/${category}/${relatedArticle.slug}`} title={`Read: ${relatedArticle.title}`}>
//                         <div className="relative aspect-[4/3] overflow-hidden mb-4">
//                           <Image src={relatedArticle.image} alt={relatedArticle.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer" loading="lazy" />
//                         </div>
//                       </Link>
//                       <Link href={`/${category}/${relatedArticle.slug}`} title={`Read: ${relatedArticle.title}`}>
//                         <h3 className="font-serif text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors cursor-pointer">{relatedArticle.title}</h3>
//                       </Link>
//                       <div className="flex items-center gap-2 text-xs text-gray-600">
//                         <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
//                           <Image src={authorData.profileImage} alt={`${authorData.name} profile picture`} width={24} height={24} sizes="24px" className="object-cover" loading="lazy" />
//                         </div>
//                         <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
//                           <span className="font-medium hover:text-red-600 cursor-pointer">{authorData.name}</span>
//                         </Link>
//                         <span>-</span>
//                         <span>{formatDate(relatedArticle.date)}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }