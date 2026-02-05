
import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import categorypagedata from "../../../public/data/articles.json";
import authorsPageData from "../../../public/data/authors.json";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";
import { slugify } from "@/utils/slugify";

const SITE_URL = "https://www.newswireninja.com";

// Helper function to format date
const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const date = new Date(year, month - 1, day);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

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
      siteName: "NewsWireNinja",
      images: [
        {
          url: article.image,
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
      images: [article.image],
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
      url: `${SITE_URL}/authors/${slugify(authorData.name)}`,
    },
    publisher: {
      "@type": "Organization",
      name: "NewsWireNinja",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
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
              className="object-cover rounded-lg"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* JSON-LD Scripts */}
      <Script
        id="article-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="breadcrumb-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="w-full">
        {/* Hero Section */}
        <div className='px-4 lg:px-7'>
          <div className="relative w-full h-[450px] md:h-[600px] lg:h-[700px] mt-10">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              className="object-cover"
              priority
            />
            
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-4 pb-8 md:pb-12">
              <p className="text-white text-sm md:text-base font-bold tracking-wider mb-4 uppercase">
                {category}
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold text-center max-w-5xl leading-tight font-serif">
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
                  <span className='hover:text-red-500 cursor-pointer'>{authorData.name}</span>
                </Link>
              </span>
              <span className="text-gray-700">|</span>
              <span className="font-semibold">
                Date: <span>{formatDate(article.date)}</span>
              </span>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200" />
        </div>

        {/* Article Content */}
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-7">
            
            {/* Left Column - 75% width */}
            <div className="w-full lg:w-3/4 font-serif">
              {/* Dynamic Content Rendering */}
              {article.content.map((item, index) => renderContent(item, index))}
              
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
                      <h3 className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">
                        {prevPost.title}
                      </h3>
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
                      <h3 className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">
                        {nextPost.title}
                      </h3>
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
                      className="object-cover"
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
                  {authorData.websiteLink && (
                    <a
                      href={authorData.websiteLink}
                      className="text-blue-600 hover:underline text-sm mb-1 block"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${authorData.name}'s website`}
                    >
                      {authorData.websiteLink}
                    </a>
                  )}
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
                        <FaTwitter size={15} />
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
                        <FaInstagram size={15} />
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
                        <FaFacebookF size={15} />
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
                        <FaYoutube size={15} />
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
                <div>
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
                </div>

                {/* Advertisement Image */}
                <div className="mt-6 text-white text-center">
                  <div className="relative w-75 lg:w-70 h-110 mx-auto mb-4">
                    <Image
                      src="/images/mirrorstandard_ads.webp"
                      alt="Advertisement"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Popular Section */}
                <div className='mt-7'>
                  <h2 className="font-bold text-2xl mb-2">Popular</h2>
                  <div className="w-full h-1 bg-red-600 mb-4" />
                  
                  {/* Popular Items */}
                  <div className='space-y-4'>
                   {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="relative w-20 h-16 flex-shrink-0">
                        <Image
                          src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop`}
                          alt={`Popular item ${item}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold hover:text-red-600 cursor-pointer line-clamp-3">
                          <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase">
                            Exclusive
                          </span>
                          Social Media Marketing for Franchises is Meant for Women
                        </h3>
                      </div>
                    </div>
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
                            className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
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
                            className="object-cover"
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
