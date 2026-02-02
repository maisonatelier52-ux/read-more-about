"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function FreshStories() {
  // Sample data for the articles list (Column 1)
  const allArticles = [
    {
      id: 1,
      title: "Cover Girl Announces Star Shine Makeup Line is Due for Next December",
      category: "MAKE-UP",
      date: "September 29, 2021",
      type: "Normal"
    },
    {
      id: 2,
      title: "Customer Engagement: New Strategy for the Economy",
      category: "MARKETING",
      date: "September 29, 2021",
      type: "Exclusive",
      isExclusive: true,
    },
    {
      id: 3,
      title: "Social Media Marketing for Franchises is Meant for Women",
      category: "MARKETING",
      date: "September 29, 2021",
       type: "Normal"
    },
    {
      id: 4,
      title: "Entrepreneurial Advertising: The Future Of Marketing",
      category: "MARKETING",
      date: "September 29, 2021",
       type: "Normal"
    },
    {
      id: 5,
      title: "Mobile Marketing is Said to Be the Future of E-Commerce",
      category: "MARKETING",
      date: "September 29, 2021",
       type: "Normal"
    },
    {
      id: 6,
      title: "The Ultimate Guide to Content Marketing Success",
      category: "MARKETING",
      date: "September 28, 2021",
       type: "Normal"
    },
    {
      id: 7,
      title: "How to Build a Brand in the Digital Age",
      category: "BUSINESS",
      date: "September 28, 2021",
       type: "Normal"
    },
    {
      id: 8,
      title: "Email Marketing Best Practices for 2021",
      category: "MARKETING",
      date: "September 27, 2021",
       type: "Normal"
    },
    {
      id: 9,
      title: "The Rise of Influencer Marketing",
      category: "MARKETING",
      date: "September 27, 2021",
       type: "Normal"
    },
    {
      id: 10,
      title: "SEO Strategies That Actually Work",
      category: "TECH",
      date: "September 26, 2021",
       type: "Normal"
    },
    
  ];

  // Featured article data (Column 2)
  const featuredArticle = {
    title: "Social Media Marketing for Franchises is Meant for Women",
    category: "MARKETING",
    description:
      "Find people with high expectations and a low tolerance for excuses. They'll have higher expectations for you than you have for yourself. Don't flatter yourself...",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
  };

  // Image cards data (Column 3)
  const imageCards = [
    {
      id: 1,
      title: "A Look at How Social Media & Mobile Gaming Can Increase Sales",
      category: "FINANCE",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "The Secret to Your Company's Financial Health is Very Important",
      category: "FINANCE",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
  ];

  // Popular articles data (Column 4)
  const popularArticles = [
    {
      id: 1,
      title: "Social Media Marketing for Franchises is Meant for Women",
      category: "MARKETING",
      date: "September 29, 2021",
      type: "Normal"
    },
    {
      id: 2,
      title: "A Look at How Social Media & Mobile Gaming Can Increase Sales",
      category: "FINANCE",
      date: "September 29, 2021",
       type: "Normal"
    },
    {
      id: 3,
      title: "Cover Girl Announces Star Shine Makeup Line is Due for Next December",
      category: "MAKE-UP",
      date: "September 29, 2021",
      type: "Normal"
    },
    {
      id: 4,
      title: "Customer Engagement: New Strategy for the Economy",
      category: "MARKETING",
      date: "September 29, 2021",
      type: "Exclusive",
      isExclusive: true,
    },
    {
      id: 5,
      title: "10 Outfits Inspired by Famous Art are Sold in London",
      category: "MAKE-UP",
      date: "September 29, 2021",
      type: "Exclusive",
      isExclusive: true,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 5;

  const totalPages = Math.ceil(allArticles.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentArticles = allArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-7">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* COLUMN 1 - Fresh Stories List (20% width) */}
        <div className="lg:col-span-1">
          <div>
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-2 font-serif">Fresh stories</h2>
            <p className="text-xs font-semibold uppercase mb-6 tracking-wide">
              TODAY: BROWSE OUR EDITOR'S
              <br />
              HAND PICKED ARTICLES!
            </p>

            {/* Articles List */}
            <div className="space-y-0">
              {currentArticles.map((article, index) => (
                <div key={article.id}>
                  <div className="py-4">
                    <h3 className="font-bold text-sm leading-snug mb-2 hover:text-red-600 cursor-pointer font-serif">
                      {article.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {article.type}
                        </span>
                      )}
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-red-600 font-semibold">{article.category}</span>
                      <span className="text-gray-500">{article.date}</span>
                    </div>
                  </div>
                  {index < currentArticles.length - 1 && (
                    <div className="border-b border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination Arrows */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="h-8 w-8 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="Previous page"
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="h-8 w-8 flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="Next page"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* COLUMN 2 - Featured Article with Image Overlay (40% width) */}
        <div className="lg:col-span-2">
          <div className="relative h-full min-h-[500px] lg:h-[650px] rounded-sm overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block bg-red-600 px-3 py-1 text-xs font-bold uppercase mb-4">
                {featuredArticle.category}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight font-serif group-hover:text-red-400 transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-sm lg:text-md leading-relaxed opacity-90">
                {featuredArticle.description}
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 3 - Image Cards (20% width) */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {imageCards.map((card) => (
              <div key={card.id} className="group cursor-pointer">
                {/* Image */}
                <div className="relative h-48 mb-3 rounded-sm overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Category */}
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  {card.category}
                </span>

                {/* Title */}
                <h3 className="font-bold text-base leading-snug mt-2 font-serif group-hover:text-red-600 transition-colors">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 4 - Popular Sidebar (20% width) */}
        <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-2 font-serif">Popular</h2>
          <div className="bg-white px-6 py-2 rounded-sm shadow-xl">

            {/* Popular Articles */}
            <div className="space-y-1">
              {popularArticles.map((article, index) => (
                <div key={article.id}>
                  <div className="group cursor-pointer">
                    {/* Category */}
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                      {article.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-bold text-sm leading-snug mt-1 mb-2 font-serif group-hover:text-red-600 transition-colors">
                      {article.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {article.type}
                        </span>
                      )}
                      {article.title.slice(0,50)}
                    </h3>

                    {/* Date */}
                    <p className="text-xs text-gray-500">{article.date}</p>
                  </div>

                  {/* Divider */}
                  {index < popularArticles.length - 1 && (
                    <div className="border-b border-gray-200 mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}