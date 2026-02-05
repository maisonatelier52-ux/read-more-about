
// "use client";
// import React, { useState } from 'react'
// import Image from 'next/image'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function CategoryArticlelist({ listArticles, popularArticles, sidebarPost }) {
//   const [currentPopularIndex, setCurrentPopularIndex] = useState(0)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [sidebarIndex, setSidebarIndex] = useState(0)
//   const articlesPerPage = 5
//   const ITEMS_PER_PAGE = 4 // Number of posts to show in sidebar

//   // Function to format date from DD/MM/YYYY to "Month Day, Year"
//   const formatDate = (dateString) => {
//     const [day, month, year] = dateString.split('/')
//     const date = new Date(year, month - 1, day)
    
//     const options = { year: 'numeric', month: 'long', day: 'numeric' }
//     return date.toLocaleDateString('en-US', options)
//   }

//   const handlePrevious = () => {
//     setCurrentPopularIndex((prev) => 
//       prev === 0 ? popularArticles.length - 1 : prev - 1
//     )
//   }

//   const handleNext = () => {
//     setCurrentPopularIndex((prev) => 
//       prev === popularArticles.length - 1 ? 0 : prev + 1
//     )
//   }

//   // Sidebar posts navigation
//   const handlePrev = () => {
//     if (sidebarIndex > 0) {
//       setSidebarIndex(sidebarIndex - ITEMS_PER_PAGE)
//     }
//   }

//   const handleNextSidebar = () => {
//     if (sidebarIndex + ITEMS_PER_PAGE < listArticles.length) {
//       setSidebarIndex(sidebarIndex + ITEMS_PER_PAGE)
//     }
//   }

//   // Get sidebar posts for current page
//   const sidebarPosts = sidebarPost
//   const visibleSidebarPosts = sidebarPosts.slice(sidebarIndex, sidebarIndex + ITEMS_PER_PAGE)

//   // Pagination calculations
//   const totalPages = Math.ceil(listArticles.length / articlesPerPage)
//   const indexOfLastArticle = currentPage * articlesPerPage
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
//   const currentArticles = listArticles.slice(indexOfFirstArticle, indexOfLastArticle)

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber)
//     // Scroll to top of article list
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

//   // Helper function to generate pagination numbers with ellipsis
//   const getPaginationNumbers = () => {
//     const pages = [];
//     const maxVisible = 5; // Maximum page numbers to show
    
//     if (totalPages <= maxVisible) {
//       // Show all pages if total is small
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       // Always show first page
//       pages.push(1);
      
//       if (currentPage > 3) {
//         pages.push('...');
//       }
      
//       // Show pages around current page
//       for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
//         pages.push(i);
//       }
      
//       if (currentPage < totalPages - 2) {
//         pages.push('...');
//       }
      
//       // Always show last page
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
//                 <div key={article.id} className="flex gap-6 group cursor-pointer flex-col md:flex-row">
//                   {/* Image Column - 50% on larger screens, full width on smaller screens */}
//                   <div className="w-full md:w-1/2 flex-shrink-0">
//                     <div className="relative h-60 lg:h-80 overflow-hidden">
//                       <Image
//                         src={article.image}
//                         alt={article.imageAlt}
//                         fill
//                         className="object-cover transition-transform duration-300"
//                       />
//                     </div>
//                   </div>

//                   {/* Content Column - 50% on larger screens, full width on smaller screens */}
//                   <div className="w-full md:w-1/2 flex flex-col justify-center">
//                     <h3 className="text-xl lg:text-3xl font-bold mb-3 group-hover:text-red-600 transition-colors font-serif">
//                       {/* Type badge (exclusive, breaking, etc.) */}
//                       {article.type !== "normal" && (
//                         <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
//                           {article.type}
//                         </span>
//                       )}
//                       {article.title}
//                     </h3>
                    
//                     {/* Meta information */}
//                     <div className="flex items-center gap-3 text-sm mb-3">
//                       <span className="text-xs px-2 py-1 font-medium uppercase">
//                         {article.category}
//                       </span>
//                       <div className="flex items-center gap-2">
//                         <div className="relative w-6 h-6 rounded-full overflow-hidden">
//                           <Image
//                             src={article.author.image}
//                             alt={article.author.name}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <span className="font-medium">{article.author.name}</span>
//                       </div>
//                       <span>-</span>
//                       <span className='font-medium'>{formatDate(article.date)}</span>
//                     </div>

//                     {/* Description / Excerpt */}
//                     <p className="text-gray-900 text-sm leading-relaxed">
//                       {article.excerpt}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-between items-center mt-10 pt-6">
//               {/* Left side - Page numbers */}
//               <div className="flex items-center gap-2">
//                 {currentPage > 1 && (
//                   <button 
//                     onClick={handlePrevPage}
//                     className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
//                   >
//                     <FaChevronLeft className="text-xs" />
//                   </button>
//                 )}
                
//                 {getPaginationNumbers().map((page, index) => (
//                   page === '...' ? (
//                     <span 
//                       key={`ellipsis-${index}`} 
//                       className="w-8 h-8 flex items-center justify-center text-gray-500 font-bold"
//                     >
//                       ...
//                     </span>
//                   ) : (
//                     <button
//                       key={page}
//                       onClick={() => handlePageChange(page)}
//                       className={`w-8 h-8 flex items-center justify-center font-bold transition-colors text-xs ${
//                         currentPage === page
//                           ? 'bg-red-600 text-white'
//                           : 'bg-white text-black hover:bg-red-600 hover:text-white cursor-pointer'
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   )
//                 ))}
                
//                 {currentPage < totalPages && (
//                   <button 
//                     onClick={handleNextPage}
//                     className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
//                   >
//                     <FaChevronRight className="text-xs" />
//                   </button>
//                 )}
//               </div>

//               {/* Right side - Page text */}
//               <div className="text-gray-600 text-sm">
//                 Page {currentPage} of {totalPages}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - 25% width - Sticky */}
//           <div className="lg:w-1/4 mt-7 lg:mt-0">
//             <div className="sticky top-4">
//               {/* Popular Article Carousel */}
//               <div className="relative mb-6">
//                 {/* Popular badge and navigation */}
//                 <div className="absolute top-4 left-0 right-0 z-10 flex justify-between items-start px-6">
//                   {/* Adjusted position of the 'Popular' label */}
//                   <span className="bg-red-600 text-white text-md font-bold px-3 py-2 uppercase absolute -top-8 left-4 z-10 font-serif">
//                     Popular
//                   </span>

//                   {/* Navigation arrows, placed on the right side */}
//                   <div className="flex gap-2 ml-auto z-20">
//                     <button 
//                       onClick={handlePrevious}
//                       className="w-8 h-8 flex items-center justify-center bg-black/70 cursor-pointer text-white hover:bg-black transition-colors"
//                     >
//                       ←
//                     </button>
//                     <button 
//                       onClick={handleNext}
//                       className="w-8 h-8 flex items-center justify-center bg-black/70 cursor-pointer text-white hover:bg-black transition-colors"
//                     >
//                       →
//                     </button>
//                   </div>
//                 </div>

//                 {/* Image with overlay */}
//                 <div className="relative h-96 lg:h-104 overflow-hidden">
//                   <Image
//                     src={popularArticles[currentPopularIndex].image}
//                     alt={popularArticles[currentPopularIndex].imageAlt}
//                     fill
//                     className="object-cover"
//                   />
                  
//                   {/* Dark overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//                   {/* Title and meta at bottom */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <h3 className="text-white font-bold text-lg leading-tight mb-3">
//                       {popularArticles[currentPopularIndex].title}
//                     </h3>
//                     <div className="flex items-center gap-2 text-white text-sm">
//                       <span className="font-semibold">{popularArticles[currentPopularIndex].author.name}</span>
//                       <span>-</span>
//                       <span>{formatDate(popularArticles[currentPopularIndex].date)}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Subscribe Box - COMMENTED OUT */}
//               {/* <div className='py-2'>
//                 <h3 className="text-xl font-bold mb-4">Subscribe</h3>
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   className="w-full px-4 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 />
//                 <button className="w-full bg-red-600 text-xs hover:bg-red-500 text-white font-bold py-4 px-4 rounded transition">
//                   I WANT IN →
//                 </button>
//                 <div className="mt-3">
//                   <label className="flex items-start gap-2 text-xs">
//                     <input type="checkbox" className="mt-1" />
//                     <span>I've read and accept the Privacy Policy.</span>
//                   </label>
//                 </div>
//               </div> */}

//               {/* Sidebar Posts List */}
//               <div>
//                 {/* Post List */}
//                 <div className="space-y-0">
//                   {visibleSidebarPosts.map((post, index) => (
//                     <div key={post.id}>
//                       <div className="py-4">
//                         <h4 className="text-sm font-semibold mb-2 hover:text-red-600 cursor-pointer transition-colors line-clamp-2">
//                           {post.title}
//                         </h4>
//                         <div className="flex items-center gap-2 text-xs text-gray-600">
//                           <span className="text-red-600 font-semibold uppercase">
//                             {post.category}
//                           </span>
//                           <span>-</span>
//                           <span>{formatDate(post.date)}</span>
//                         </div>
//                       </div>
//                       {index < visibleSidebarPosts.length - 1 && (
//                         <hr className="border-gray-300" />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 {/* Navigation Arrows */}
//                 <div className="flex justify-start gap-2 mt-4">
//                   <button
//                     onClick={handlePrev}
//                     disabled={sidebarIndex === 0}
//                     className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 cursor-pointer"
//                   >
//                     <FaChevronLeft className="text-xs" />
//                   </button>
//                   <button
//                     onClick={handleNextSidebar}
//                     disabled={sidebarIndex + ITEMS_PER_PAGE >= sidebarPosts.length}
//                     className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 cursor-pointer"
//                   >
//                     <FaChevronRight className="text-xs" />
//                   </button>
//                 </div>
//               </div>

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
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CategoryArticlelist({ listArticles, popularArticles, sidebarPost, authorInfo, category }) {
  const [currentPopularIndex, setCurrentPopularIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sidebarIndex, setSidebarIndex] = useState(0)
  const articlesPerPage = 5
  const ITEMS_PER_PAGE = 4

  // Function to format date from DD/MM/YYYY to "Month Day, Year"
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/')
    const date = new Date(year, month - 1, day)
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  const handlePrevious = () => {
    setCurrentPopularIndex((prev) => 
      prev === 0 ? popularArticles.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentPopularIndex((prev) => 
      prev === popularArticles.length - 1 ? 0 : prev + 1
    )
  }

  const handlePrev = () => {
    if (sidebarIndex > 0) {
      setSidebarIndex(sidebarIndex - ITEMS_PER_PAGE)
    }
  }

  const handleNextSidebar = () => {
    if (sidebarIndex + ITEMS_PER_PAGE < sidebarPost.length) {
      setSidebarIndex(sidebarIndex + ITEMS_PER_PAGE)
    }
  }

  const visibleSidebarPosts = sidebarPost.slice(sidebarIndex, sidebarIndex + ITEMS_PER_PAGE)

  // Pagination calculations
  const totalPages = Math.ceil(listArticles.length / articlesPerPage)
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = listArticles.slice(indexOfFirstArticle, indexOfLastArticle)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 400, behavior: 'smooth' })
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 400, behavior: 'smooth' })
    }
  }

  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-16 lg:px-7">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - 75% width */}
          <div className="lg:w-3/4">
            {/* Article List */}
            <div className="space-y-6">
              {currentArticles.map((article) => (
                <Link key={article.id} href={`/${category}/${article.slug}`}>
                  <div className="flex gap-6 group cursor-pointer flex-col md:flex-row mb-6">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                      <div className="relative h-60 lg:h-80 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.imageAlt}
                          fill
                          className="object-cover transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-xl lg:text-3xl font-bold mb-3 group-hover:text-red-600 transition-colors font-serif">
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
                                  className="object-cover"
                                />
                              </div>
                              <span className="font-medium">{authorInfo.name}</span>
                            </div>
                            <span>-</span>
                          </>
                        )}
                        <span className='font-medium'>{formatDate(article.date)}</span>
                      </div>

                      {/* Description / Excerpt */}
                      <p className="text-gray-900 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center mt-10 pt-6">
                <div className="flex items-center gap-2">
                  {currentPage > 1 && (
                    <button 
                      onClick={handlePrevPage}
                      className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                    >
                      <FaChevronLeft className="text-xs" />
                    </button>
                  )}
                  
                  {getPaginationNumbers().map((page, index) => (
                    page === '...' ? (
                      <span 
                        key={`ellipsis-${index}`} 
                        className="w-8 h-8 flex items-center justify-center text-gray-500 font-bold"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-8 h-8 flex items-center justify-center font-bold transition-colors text-xs ${
                          currentPage === page
                            ? 'bg-red-600 text-white'
                            : 'bg-white text-black hover:bg-red-600 hover:text-white cursor-pointer'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  ))}
                  
                  {currentPage < totalPages && (
                    <button 
                      onClick={handleNextPage}
                      className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                    >
                      <FaChevronRight className="text-xs" />
                    </button>
                  )}
                </div>

                <div className="text-gray-600 text-sm">
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - 25% width - Sticky */}
          <div className="lg:w-1/4 mt-7 lg:mt-0">
            <div className="sticky top-4">
              {/* Popular Article Carousel */}
              <div className="relative mb-6">
                <div className="absolute top-4 left-0 right-0 z-10 flex justify-between items-start px-6">
                  <span className="bg-red-600 text-white text-md font-bold px-3 py-2 uppercase absolute -top-8 left-4 z-10 font-serif">
                    Popular
                  </span>

                  <div className="flex gap-2 ml-auto z-20">
                    <button 
                      onClick={handlePrevious}
                      className="w-8 h-8 flex items-center justify-center bg-black/70 cursor-pointer text-white hover:bg-black transition-colors"
                    >
                      ←
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-8 h-8 flex items-center justify-center bg-black/70 cursor-pointer text-white hover:bg-black transition-colors"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div className="relative h-96 lg:h-104 overflow-hidden">
                  <Image
                    src={popularArticles[currentPopularIndex].image}
                    alt={popularArticles[currentPopularIndex].imageAlt}
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg leading-tight mb-3">
                      {popularArticles[currentPopularIndex].title}
                    </h3>
                    <div className="flex items-center gap-2 text-white text-sm">
                      <span className="font-semibold">{popularArticles[currentPopularIndex].author.name}</span>
                      <span>-</span>
                      <span>{formatDate(popularArticles[currentPopularIndex].date)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Posts List */}
              <div>
                <div className="space-y-0">
                  {visibleSidebarPosts.map((post, index) => (
                    <div key={post.id}>
                      <div className="py-4">
                        <h4 className="text-sm font-semibold mb-2 hover:text-red-600 cursor-pointer transition-colors line-clamp-2">
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
                      {index < visibleSidebarPosts.length - 1 && (
                        <hr className="border-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-start gap-2 mt-4">
                  <button
                    onClick={handlePrev}
                    disabled={sidebarIndex === 0}
                    className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 cursor-pointer"
                  >
                    <FaChevronLeft className="text-xs" />
                  </button>
                  <button
                    onClick={handleNextSidebar}
                    disabled={sidebarIndex + ITEMS_PER_PAGE >= sidebarPost.length}
                    className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 cursor-pointer"
                  >
                    <FaChevronRight className="text-xs" />
                  </button>
                </div>
              </div>

              {/* Advertisement Box */}
              <div className="mt-6 text-white text-center">
                <div className="relative w-75 lg:w-65 h-110 mx-auto mb-4">
                  <Image
                    src="/images/mirrorstandard_ads.webp"
                    alt="Advertisement"
                    fill
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