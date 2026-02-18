
// "use client";
// import React, { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function CategoryArticlelist({ listArticles, popularArticle, sidebarPost, authorInfo, category }) {
//   const [currentPage, setCurrentPage] = useState(1)
//   const articlesPerPage = 5

//   // Function to format date from DD/MM/YYYY to "Month Day, Year"
//   const formatDate = (dateString) => {
//     const [day, month, year] = dateString.split('/')
//     const date = new Date(year, month - 1, day)
    
//     const options = { year: 'numeric', month: 'long', day: 'numeric' }
//     return date.toLocaleDateString('en-US', options)
//   }

//   // Pagination calculations
//   const totalPages = Math.ceil(listArticles.length / articlesPerPage)
//   const indexOfLastArticle = currentPage * articlesPerPage
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
//   const currentArticles = listArticles.slice(indexOfFirstArticle, indexOfLastArticle)

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber)
//     window.scrollTo({ top: 400, behavior: 'smooth' })
//   }

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1)
//       window.scrollTo({ top: 400, behavior: 'smooth' })
//     }
//   }

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1)
//       window.scrollTo({ top: 400, behavior: 'smooth' })
//     }
//   }

//   const getPaginationNumbers = () => {
//     const pages = [];
//     const maxVisible = 5;
    
//     if (totalPages <= maxVisible) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       pages.push(1);
      
//       if (currentPage > 3) {
//         pages.push('...');
//       }
      
//       for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
//         pages.push(i);
//       }
      
//       if (currentPage < totalPages - 2) {
//         pages.push('...');
//       }
      
//       pages.push(totalPages);
//     }
    
//     return pages;
//   };

//   return (
//     <>
//       <div className="container mx-auto px-4 mt-16 lg:px-7">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column - 75% width */}
//           <div className="lg:w-3/4">
//             {/* Article List */}
//             <div className="space-y-6">
//               {currentArticles.map((article) => (
//                 <Link key={article.id} href={`/${category}/${article.slug}`} title={article.title}>
//                   <div className="flex gap-6 group cursor-pointer flex-col md:flex-row mb-6">
//                     {/* Image Column */}
//                     <div className="w-full md:w-1/2 flex-shrink-0">
//                       <div className="relative h-60 lg:h-80 overflow-hidden">
//                         <Image
//                           src={article.image}
//                           alt={article.imageAlt}
//                           fill
//                           className="object-cover transition-transform duration-300"
//                         />
//                       </div>
//                     </div>

//                     {/* Content Column */}
//                     <div className="w-full md:w-1/2 flex flex-col justify-center">
//                       <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors font-serif">
//                         {article.type !== "normal" && (
//                           <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
//                             {article.type}
//                           </span>
//                         )}
//                         {article.title}
//                       </h3>
                      
//                       {/* Meta information */}
//                       <div className="flex items-center gap-3 text-sm mb-3">
//                         <span className="text-xs px-2 py-1 font-medium uppercase">
//                           {article.category}
//                         </span>
//                         {authorInfo && (
//                           <>
//                             <div className="flex items-center gap-2">
//                               <div className="relative w-6 h-6 rounded-full overflow-hidden">
//                                 <Image
//                                   src={authorInfo.profileImage}
//                                   alt={authorInfo.name}
//                                   fill
//                                   className="object-cover"
//                                 />
//                               </div>
//                               <span className="font-medium text-xs">{authorInfo.name}</span>
//                             </div>
//                             <span>-</span>
//                           </>
//                         )}
//                         <span className='font-medium text-xs'>{formatDate(article.date)}</span>
//                       </div>

//                       {/* Description / Excerpt */}
//                       <p className="text-gray-900 text-xs leading-relaxed">
//                           {article.excerpt.length > 200 ?
//                       `${article.excerpt.slice(0,200)}...` : 
//                      article.excerpt}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-between items-center mt-10 pt-6">
//                 <div className="flex items-center gap-2">
//                   {currentPage > 1 && (
//                     <button 
//                       onClick={handlePrevPage}
//                       className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
//                     >
//                       <FaChevronLeft className="text-xs" />
//                     </button>
//                   )}
                  
//                   {getPaginationNumbers().map((page, index) => (
//                     page === '...' ? (
//                       <span 
//                         key={`ellipsis-${index}`} 
//                         className="w-8 h-8 flex items-center justify-center text-gray-500 font-bold"
//                       >
//                         ...
//                       </span>
//                     ) : (
//                       <button
//                         key={page}
//                         onClick={() => handlePageChange(page)}
//                         className={`w-8 h-8 flex items-center justify-center font-bold transition-colors text-xs ${
//                           currentPage === page
//                             ? 'bg-red-600 text-white'
//                             : 'bg-white text-black hover:bg-red-600 hover:text-white cursor-pointer'
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     )
//                   ))}
                  
//                   {currentPage < totalPages && (
//                     <button 
//                       onClick={handleNextPage}
//                       className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
//                     >
//                       <FaChevronRight className="text-xs" />
//                     </button>
//                   )}
//                 </div>

//                 <div className="text-gray-600 text-sm">
//                   Page {currentPage} of {totalPages}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Column - 25% width - Sticky */}
//           <div className="lg:w-1/4 mt-7 lg:mt-0">
//             <div className="sticky top-4">
//               {/* Popular Article - Single Article Display */}
//               {popularArticle && (
//                 <Link href={`/${popularArticle.category}/${popularArticle.slug}`} title={popularArticle.title}>
//                   <div className="relative mb-6 group cursor-pointer">
//                     <span className="bg-red-600 text-white text-md font-bold px-3 py-2 uppercase absolute -top-6 left-4 z-10 font-serif">
//                       Popular
//                     </span>

//                     <div className="relative h-96 lg:h-104 overflow-hidden">
//                       <Image
//                         src={popularArticle.image}
//                         alt={popularArticle.imageAlt}
//                         fill
//                         className="object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
                      
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//                       <div className="absolute bottom-0 left-0 right-0 p-6">
//                         <h3 className="text-white font-bold text-lg leading-tight mb-3 group-hover:text-red-400 transition-colors">
//                           {popularArticle.title}
//                         </h3>
//                         <div className="flex items-center gap-2 text-white text-sm">
//                           <span className="font-semibold uppercase text-xs">{popularArticle.category}</span>
//                           <span>-</span>
//                           <span>{formatDate(popularArticle.date)}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               )}

//               {/* Sidebar Posts List - 4 Articles */}
//               {sidebarPost && sidebarPost.length > 0 && (
//                 <div>
//                   <div className="space-y-0">
//                     {sidebarPost.map((post, index) => (
//                       <Link key={post.slug} href={`/${post.category}/${post.slug}`} title={post.title}>
//                         <div>
//                           <div className="py-4 group cursor-pointer">
//                             <h4 className="text-sm font-semibold mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
//                               {post.type !== "normal" && (
//                                 <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
//                                   {post.type}
//                                 </span>
//                               )}
//                               {post.title}
//                             </h4>
//                             <div className="flex items-center gap-2 text-xs text-gray-600">
//                               <span className="text-red-600 font-semibold uppercase">
//                                 {post.category}
//                               </span>
//                               <span>-</span>
//                               <span>{formatDate(post.date)}</span>
//                             </div>
//                           </div>
//                           {index < sidebarPost.length - 1 && (
//                             <hr className="border-gray-300" />
//                           )}
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Advertisement Box */}
//               <div className="mt-6 text-white text-center">
//                 <div className="relative w-75 lg:w-65 h-110 mx-auto mb-4">
//                   <Image
//                     src="/images/mirrorstandard_ads.webp"
//                     alt="Advertisement"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default CategoryArticlelist


"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategoryArticlelist({ listArticles, popularArticle, sidebarPost, authorInfo, category }) {
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const displayArticles = listArticles.slice(0, 7)

  return (
    <>
      <div className="container mx-auto px-4 mt-16 lg:px-7">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column - 75% width */}
          <div className="lg:w-3/4">
            <div className="space-y-6">
              {displayArticles.map((article, index) => (
                <Link key={article.id} href={`/${category}/${article.slug}`} title={article.title}>
                  <div className="flex gap-6 group cursor-pointer flex-col md:flex-row mb-6">

                    {/* Image Column */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                      <div className="relative h-60 lg:h-80 overflow-hidden">
                        {/*
                          FIX: Added sizes so Next.js serves correct image size per breakpoint.
                          First article gets eager loading since it may be visible on load,
                          rest are lazy loaded so they don't compete with the LCP hero image.
                        */}
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
                      {/*
                        Heading order: H1 (author name) → H2 (Articles by author) → H3 (article titles here)
                        This is correct, no change needed to the tag itself.
                      */}
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
                                {/*
                                  FIX: Author avatar is tiny (24x24px). Added sizes so browser
                                  doesn't fetch a full-sized image for a 24px circle.
                                  Always lazy — it's a tiny decorative avatar, not LCP.
                                */}
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
                        <span className='font-medium text-xs'>{formatDate(article.date)}</span>
                      </div>

                      {/* Description / Excerpt */}
                      <p className="text-gray-900 text-xs leading-relaxed">
                        {article.excerpt.length > 200 ?
                          `${article.excerpt.slice(0, 200)}...` : 
                          article.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
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
                      {/*
                        FIX: Sidebar is 25% of desktop viewport, full width on mobile.
                        Added sizes accordingly. Lazy loaded — sidebar is below the fold.
                      */}
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
                        {/* H3 here is fine — it sits alongside the article list H3s, same level */}
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
                            {/* H4 is correct here — sidebar is a sub-section, H3 → H4 is valid */}
                            <h4 className="text-sm font-semibold mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                              {post.type !== "normal" && (
                                <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                                  {post.type}
                                </span>
                              )}
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                              <span className="text-red-600 font-semibold uppercase">
                                {post.category}
                              </span>
                              <span>-</span>
                              <span>{formatDate(post.date)}</span>
                            </div>
                          </div>
                          {index < sidebarPost.length - 1 && (
                            <hr className="border-gray-300" />
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Advertisement Box */}
              <div className="mt-6 text-white text-center">
                <div className="relative w-75 lg:w-65 h-110 mx-auto mb-4">
                  {/*
                    FIX: Ad image was missing sizes and loading props entirely.
                    It's always below the fold and decorative, so lazy load it.
                    sizes matches the sidebar column width.
                  */}
                  <Image
                    src="/images/mirrorstandard_ads.webp"
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

