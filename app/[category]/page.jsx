
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CategoryArticlelist from '@/components/categorycomponents/CategoryArticlelist'
import CategoryArticles from '../../public/data/articles.json'
import authorsData from '../../public/data/authors.json'
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

  return (
    <div className="relative mb-30">
      {/* Blue background div that covers 75% of the cards height */}
      <div className="bg-[#eaeaea]/55 pb-48">
        <div className="container mx-auto px-4 pt-12">
          {/* Main heading */}
          <h1 className="text-5xl font-bold text-black text-center mb-16 font-serif">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
        </div>
      </div>

      {/* Articles row - positioned to overlap the blue background */}
      <div className="container mx-auto px-4 -mt-55 lg:px-7">
        {/* Featured Article - Full Width */}
        {latestArticle && (
          <div className="mb-12">
            <Link href={`/${category}/${latestArticle.slug}`} title={latestArticle.title}>
              <div className="group cursor-pointer">
                <div className="relative h-[350px] lg:h-[450px] overflow-hidden shadow-2xl rounded-lg">
                  <Image
                    src={latestArticle.image}
                    alt={latestArticle.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700"
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
                    <h2 className="text-white font-bold text-md lg:text-2xl leading-tight mb-4 group-hover:text-red-400 transition-colors duration-300">
                      {latestArticle.title}
                    </h2>

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
                                  className="object-cover"
                                />
                              </div>
                              <span className="font-medium text-xs">{authorInfo.name}</span>
                            </div>                            
                          </>
                        )}
                      </div>
                      <span>-</span>
                      <span>{formatDate(latestArticle.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
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
  )
}