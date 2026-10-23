// components/categorycomponents/CategoryArticlelist.jsx
"use client";
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const ARTICLES_PER_PAGE = 7

// Builds [1, '...', 4, 5, 6, '...', 12] style page lists
const getPageNumbers = (current, total) => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages = [1]
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  if (start > 2) pages.push('...')
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push('...')
  pages.push(total)

  return pages
}

function CategoryArticlelist({ listArticles, popularArticle, sidebarPost, authorInfo, category }) {
  const [currentPage, setCurrentPage] = useState(1)
  const listTopRef = useRef(null)

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const totalPages = Math.max(1, Math.ceil(listArticles.length / ARTICLES_PER_PAGE))
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const displayArticles = listArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE)
  const pageNumbers = getPageNumbers(currentPage, totalPages)

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    setCurrentPage(page)
    // Scroll back to the top of the article list
    requestAnimationFrame(() => {
      listTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const pageBtnBase =
    "h-8 min-w-8 px-2 flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-200"

  return (
    <>
      <div className="container mx-auto px-4 mt-16 lg:px-7">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column - 75% width */}
          <div className="lg:w-3/4 scroll-mt-6" ref={listTopRef}>
            <div className="space-y-6">
              {displayArticles.map((article, index) => {
                // Static articles carry their own href; dynamic ones use the standard route
                const articleHref = article.href ?? `/${category}/${article.slug}`

                return (
                  <Link key={article.id} href={articleHref} title={article.title}>
                    <div className="flex gap-6 group cursor-pointer flex-col md:flex-row mb-6">

                      {/* Image Column */}
                      <div className="w-full md:w-1/2 flex-shrink-0">
                        <div className="relative h-60 lg:h-80 overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 37vw"
                            loading={index === 0 ? "eager" : "lazy"}
                            className="object-cover transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors font-serif">
                          {article.type !== "normal" && (
                            <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                              {article.type}
                            </span>
                          )}
                          {article.title}
                        </h3>

                        {/* Meta information */}
                        <div className="flex items-center gap-3 text-sm mb-3">
                          <span className="text-xs px-2 py-1 font-medium uppercase">
                            {article.category}
                          </span>
                          {authorInfo && (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                  <Image
                                    src={authorInfo.profileImage}
                                    alt={authorInfo.name}
                                    fill
                                    sizes="24px"
                                    loading="lazy"
                                    className="object-cover"
                                  />
                                </div>
                                <span className="font-medium text-xs">{authorInfo.name}</span>
                              </div>
                              <span>-</span>
                            </>
                          )}
                          <span className="font-medium text-xs">{formatDate(article.date)}</span>
                        </div>

                        {/* Excerpt */}
                        <p className="text-gray-900 text-xs leading-relaxed">
                          {article.excerpt.length > 200
                            ? `${article.excerpt.slice(0, 200)}...`
                            : article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* ── Pagination (same page, no reload) ── */}
            {totalPages > 1 && (
              <nav
                aria-label="Pagination"
                className="mt-10 pt-6 border-t border-gray-200 flex flex-col items-center gap-3"
              >
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {/* Previous */}
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className={`${pageBtnBase} gap-0.5 pl-2 pr-3 border ${
                      currentPage === 1
                        ? "bg-gray-100 border-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white border-gray-300 text-black hover:bg-black hover:border-black hover:text-white cursor-pointer"
                    }`}
                  >
                    <HiChevronLeft size={14} />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  {/* Page numbers */}
                  {pageNumbers.map((page, i) =>
                    page === '...' ? (
                      <span
                        key={`dots-${i}`}
                        className="h-8 min-w-5 flex items-center justify-center text-xs text-gray-400"
                      >
                        •••
                      </span>
                    ) : (
                      <button
                        key={page}
                        type="button"
                        onClick={() => goToPage(page)}
                        aria-label={`Go to page ${page}`}
                        aria-current={page === currentPage ? "page" : undefined}
                        className={`${pageBtnBase} cursor-pointer ${
                          page === currentPage
                            ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                            : "bg-gray-100 text-gray-800 hover:bg-black hover:text-white"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  {/* Next */}
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className={`${pageBtnBase} gap-0.5 pl-3 pr-2 border ${
                      currentPage === totalPages
                        ? "bg-gray-100 border-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white border-gray-300 text-black hover:bg-black hover:border-black hover:text-white cursor-pointer"
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <HiChevronRight size={14} />
                  </button>
                </div>

                {/* Page indicator */}
                <p className="text-[10px] uppercase tracking-widest text-gray-500">
                  Page {currentPage} of {totalPages}
                </p>
              </nav>
            )}
          </div>

          {/* Right Column - 25% width - Sticky */}
          <div className="lg:w-1/4 mt-7 lg:mt-0">
            <div className="sticky top-4">

              {/* Popular Article */}
              {popularArticle && (
                <Link href={`/${popularArticle.category}/${popularArticle.slug}`} title={popularArticle.title}>
                  <div className="relative mb-6 group cursor-pointer">
                    <span className="bg-red-600 text-white text-md font-bold px-3 py-2 uppercase absolute -top-6 left-4 z-10 font-serif">
                      Popular
                    </span>
                    <div className="relative h-96 lg:h-104 overflow-hidden">
                      <Image
                        src={popularArticle.image}
                        alt={popularArticle.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-lg leading-tight mb-3 group-hover:text-red-400 transition-colors">
                          {popularArticle.title}
                        </h3>
                        <div className="flex items-center gap-2 text-white text-sm">
                          <span className="font-semibold uppercase text-xs">{popularArticle.category}</span>
                          <span>-</span>
                          <span>{formatDate(popularArticle.date)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Sidebar Posts List */}
              {sidebarPost && sidebarPost.length > 0 && (
                <div>
                  <div className="space-y-0">
                    {sidebarPost.map((post, index) => (
                      <Link key={post.slug} href={`/${post.category}/${post.slug}`} title={post.title}>
                        <div>
                          <div className="py-4 group cursor-pointer">
                            <h4 className="text-sm font-semibold mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                              {post.type !== "normal" && (
                                <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                                  {post.type}
                                </span>
                              )}
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <span className="text-red-600 font-semibold uppercase">{post.category}</span>
                              <span>-</span>
                              <span>{formatDate(post.date)}</span>
                            </div>
                          </div>
                          {index < sidebarPost.length - 1 && <hr className="border-gray-300" />}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Advertisement Box */}
              <div className="mt-6 text-white text-center">
                <div className="relative w-75 lg:w-65 h-110 mx-auto mb-4">
                  <Image
                    src="/images/read_more_about_ads.webp"
                    alt="Advertisement"
                    fill
                    sizes="(max-width: 1024px) 300px, 260px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryArticlelist