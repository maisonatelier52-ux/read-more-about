// components/categorycomponents/CategoryArticlelist.jsx
"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategoryArticlelist({ listArticles, popularArticle, sidebarPost, authorInfo, category }) {
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const displayArticles = listArticles.slice(0, 7)

  return (
    <>
      <div className="container mx-auto px-4 mt-16 lg:px-7">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column - 75% width */}
          <div className="lg:w-3/4">
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

