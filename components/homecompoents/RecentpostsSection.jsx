"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function RecentPostsSection() {
  const [sidebarIndex, setSidebarIndex] = useState(0);

  // Sample data - replace with your actual data
  const featuredPost = {
    id: 1,
    title: "Take a Stroll Through the Pros and Cons of Permanent Eyebrows Tattoos",
    category: "MAKE-UP",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "September 25, 2021",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    description: "Find people with high expectations and a low tolerance for excuses. They'll have higher expectations for you than you have for yourself. Don't flatter...",
    type:"Normal"
  };

  const gridPosts = [
    {
      id: 2,
      title: "10 Cool Startups that Will Change Your Perspective on Clothes & Fashion",
      category: "FASHION",
      author: "Dan Buell",
      authorImage: "/https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 3,
      title: "10 Outfits Inspired by Famous Art are Sold in London",
      category: "FASHION",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Exclusive"
    },
    {
      id: 4,
      title: "The Make-up Conference in New York this Winter Unveils Hot Innovations",
      category: "FASHION",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 5,
      title: "Coco Girl Announces Star Shine Makeup Line Is Due for Next December",
      category: "food",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Exclusive"
    },
    {
      id: 6,
      title: "Customer Engagement: New Strategy for the Economy",
      category: "FASHION",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Exclusive"
    },
    {
      id: 7,
      title: "Social Media Marketing for Franchises is Meant for Women",
      category: "FASHION",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 8,
      title: "Entrepreneurial Advertising: The Future Of Marketing",
      category: "FASHION",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 9,
      title: "Mobile Marketing is Said to Be the Future of E-Commerce",
      category: "FASHION",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 10,
      title: "How Nancy Reagan Gave Glamour and Class to the White House",
      category: "FASHION",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
  ];

  const sidebarFeatured = {
    id: 11,
    title: "Customer Engagement: New Strategy for the Economy",
    category: "Marketing",
    author: "Dan Buell",
    authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
    date: "September 25, 2021",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    type:"Normal"
  };

  const sidebarPosts = [
    {
      id: 12,
      title: "Social Media Marketing for Franchises is Meant for Women",
      category: "MARKETING",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 13,
      title: "Mobile Marketing is Said to Be the Future of E-Commerce",
      category: "MARKETING",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 14,
      title: "Entrepreneurial Advertising: The Future Of Marketing",
      category: "MARKETING",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 15,
      title: "How Nancy Reagan Gave Glamour and Class to the White House",
      category: "MARKETING",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 16,
      title: "Now is the Time to Think About Your Small-Business Success",
      category: "MARKETING",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 17,
      title: "The Best Marketing Strategies for Small Businesses",
      category: "MARKETING",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
    {
      id: 18,
      title: "Digital Marketing Trends to Watch in 2024",
      category: "MARKETING",
      author: "Dan Buell",
      authorImage: "https://demo.tagdiv.com/newspaper_week_pro/wp-content/uploads/2021/10/avatar_user_1_1633446236-192x192.jpg",
      date: "September 25, 2021",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      type:"Normal"
    },
  ];

  const ITEMS_PER_PAGE = 5;

  const handleNext = () => {
    if (sidebarIndex + ITEMS_PER_PAGE < sidebarPosts.length) {
      setSidebarIndex(sidebarIndex + 1);
    }
  };

  const handlePrev = () => {
    if (sidebarIndex > 0) {
      setSidebarIndex(sidebarIndex - 1);
    }
  };

  const visibleSidebarPosts = sidebarPosts.slice(
    sidebarIndex,
    sidebarIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-serif">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Recent Posts</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT COLUMN - 75% */}
        <div className="w-full lg:w-3/4">
          {/* Row 1: Featured Post with 2 columns */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3 hover:text-red-600 cursor-pointer transition-colors">
                {featuredPost.title}
              </h3>
              
              <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                <span className="text-red-600 font-semibold uppercase text-xs">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-2">
                  <img
                    src={featuredPost.authorImage}
                    alt={featuredPost.author}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="font-medium">{featuredPost.author}</span>
                   <span>-</span>
                </span>
                <span>{featuredPost.date}</span>
              </div>

              {featuredPost.description && (
                <p className="text-gray-600 leading-relaxed">
                  {featuredPost.description}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {gridPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-base font-semibold mb-2 hover:text-red-600 cursor-pointer transition-colors line-clamp-2">
                  {post.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {post.type}
                        </span>
                      )}
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="font-medium">{post.author}</span>
                  <span>-</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {gridPosts.slice(3, 6).map((post) => (
              <div key={post.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                </div>
                <h4 className="text-base font-semibold mb-2 hover:text-red-600 cursor-pointer transition-colors line-clamp-2">
                   {post.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {post.type}
                        </span>
                      )}
                  {post.title}
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="font-medium">{post.author}</span>
                  <span>-</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.slice(6, 9).map((post) => (
              <div key={post.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-base font-semibold mb-2 hover:text-red-600 cursor-pointer transition-colors line-clamp-2">
                     {post.type !== "Normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {post.type}
                        </span>
                      )}
                  {post.title}
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-5 h-5 rounded-full object-cover"
                  />
                  <span className="font-medium">{post.author}</span>
                  <span>-</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - 25% (Sticky) */}
        <div className="w-full lg:w-1/4">
          <div className="lg:sticky lg:top-4">
            {/* Featured Card with Overlay */}
            <div className="relative aspect-[3/4] overflow-hidden mb-6 group">
              <img
                src={sidebarFeatured.image}
                alt={sidebarFeatured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                {/* Category Badge */}
                <div>
                  <span className="inline-block bg-black text-white text-[13px] font-bold px-2 py-2 uppercase ">
                    {sidebarFeatured.category}
                  </span>
                </div>
                
                {/* Title and Author at Bottom */}
                <div>
                  <h3 className="text-white text-lg font-bold mb-3 hover:text-red-400 cursor-pointer transition-colors">
                    {sidebarFeatured.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white text-xs">
                    <span className="font-medium">{sidebarFeatured.author}</span>
                    <span>-</span>
                    <span>{sidebarFeatured.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* List with Navigation */}
            <div className="bg-gray-50 p-5">
             

              {/* Post List */}
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
                        <span>{post.date}</span>
                      </div>
                    </div>
                    {index < visibleSidebarPosts.length - 1 && (
                      <hr className="border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
               {/* Navigation Arrows */}
              <div className="flex justify-start gap-2 mb-4">
                <button
                  onClick={handlePrev}
                  disabled={sidebarIndex === 0}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 cursor-pointer"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={sidebarIndex + ITEMS_PER_PAGE >= sidebarPosts.length}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-gray-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600 disabled:hover:border-gray-300 cursor-pointer"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}