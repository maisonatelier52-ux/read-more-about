
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'
import CategoryArticles from '../../../public/data/articles.json'
import authorsData from '../../../public/data/authors.json'
import { notFound } from 'next/navigation'

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

export default async function Page({ params }) {
  const { slug } = await params
  
  // Find author by name (converting slug to match author name format)
  const authorName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  const authorData = authorsData.categories.find(
    item => item.author.name.toLowerCase() === authorName.toLowerCase()
  )
  
  // If author doesn't exist, show 404
  if (!authorData) {
    notFound()
  }
  
  const author = authorData.author
  const authorCategory = authorData.category
  
  // Get all articles from the author's category
  const categoryArticlesData = CategoryArticles[authorCategory] || []
  
  // Sort articles by date (latest first)
  const sortedArticles = [...categoryArticlesData].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  )
  
  // Get exclusive articles for the exclusive section
  const exclusiveArticles = sortedArticles
    .filter(article => article.type === 'exclusive')
    .slice(0, 3) // Get top 3 exclusive articles
  
  // Get articles for the list (all articles from this category)
  const listArticles = sortedArticles
  
  // Get popular articles from this category (top 3 by date)
  const popularArticles = sortedArticles.slice(0, 3)
  
  // Get latest news from 5 different categories for sidebar
  const latestFromOtherCategories = getLatestFromDifferentCategories(authorCategory, 5)
  
  // First article for popular section
  const popularArticle = latestFromOtherCategories[0] || null
  
  // Remaining 4 articles for sidebar
  const sidebarPosts = latestFromOtherCategories.slice(1, 5)

  return (
    <div className="relative mb-30">
      {/* Author Profile Section with Background */}
      <div className="relative">
        {/* Background that covers 75% of card height */}
        <div className="bg-[#eaeaea]/55 pb-80"></div>

        {/* Author Profile Card - overlapping the background */}
        <div className="container mx-auto px-4 lg:px-7 -mt-68">
          <div>
            <div className="flex flex-col lg:flex-row">
              {/* Left Column - 35% width - Author Image */}
              <div className="lg:w-[30%] relative">
                <div className="relative h-96 lg:h-full">
                  <Image
                    src={author.profileImage}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Social Icons Overlay - Bottom Center */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                    {author.social.twitter && (
                      <Link 
                        href={author.social.twitter}
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                        title={`${author.name} twitter account`}
                     >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </Link>
                    )}
                    {author.social.reddit && (
                      <Link 
                        href={author.social.reddit}
                        title={`${author.name} reddit account`}
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                        </svg>
                      </Link>
                    )}
                    {author.social.quora && (
                      <Link 
                        href={author.social.quora}
                        title={`${author.name} quora account`}
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.738 18.701c-.831 0-1.635-.195-2.384-.582.24-.432.488-.939.69-1.463.232-.584.369-1.16.423-1.744.13.028.263.048.398.048 1.143 0 2.067-.938 2.067-2.095 0-1.157-.924-2.095-2.067-2.095-1.143 0-2.067.938-2.067 2.095 0 .118.01.233.03.346-.304.844-.803 1.628-1.443 2.28-.636.648-1.363 1.148-2.123 1.464-.12-.4-.186-.822-.186-1.26 0-2.385 1.93-4.314 4.314-4.314s4.314 1.93 4.314 4.314c0 2.385-1.93 4.314-4.314 4.314-.162 0-.322-.01-.48-.028-.03.414-.132.812-.296 1.188.253.023.508.033.765.033 3.171 0 5.742-2.571 5.742-5.742S15.909 6.025 12.738 6.025c-3.171 0-5.742 2.571-5.742 5.742 0 1.438.529 2.752 1.404 3.762.36.415.772.785 1.228 1.095-.195.51-.454.987-.77 1.414C6.816 16.976 5.5 14.74 5.5 12.231 5.5 7.924 8.924 4.5 13.231 4.5s7.731 3.424 7.731 7.731-3.424 7.731-7.731 7.731c-.164 0-.327-.007-.489-.02z"/>
                        </svg>
                      </Link>
                    )}
                    {author.social.medium && (
                      <Link 
                        href={author.social.medium}
                        title={`${author.name} medium account`}
                        className="bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - 65% width */}
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
                    <span className="font-semibold">Country:</span> {author.country}
                  </p>
                  {author.websiteLink && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Website:</span>{' '}
                      <a 
                        href={author.websiteLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-600 hover:underline"
                        title={`${author.name} website link`}
                      >
                        {author.websiteLink}
                      </a>
                    </p>
                  )}
                </div>

                {/* Row 2 - Exclusive Articles */}
                {exclusiveArticles.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold font-serif mb-6">Exclusive articles:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {exclusiveArticles.map((article) => (
                        <Link 
                          key={article.id} 
                          href={`/${authorCategory}/${article.slug}`}
                          title={article.title}
                        >
                          <div className="group cursor-pointer">
                            <div className="flex gap-3">
                              <div className="flex-1 w-[75%]">
                                <h3 className="text-sm font-bold text-black group-hover:text-red-600 transition-colors mb-2 leading-tight">
                                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase inline-block mr-2">
                                    EXCLUSIVE
                                  </span>
                                  {article.title.slice(0,50)}...
                                </h3>
                                <p className="text-xs text-red-600 font-semibold uppercase">
                                  {authorCategory}
                                </p>
                              </div>

                              <div className="relative w-[25%] h-15 flex-shrink-0 overflow-hidden">
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
  )
}