"use client";

import Image from "next/image";

export default function ArticleGrid() {
  // Large feature articles (4 columns)
  const featureArticles = [
    {
      id: 1,
      title: "The Definitive Guide To Marketing Your Business On Instagram",
      category: "CELEBRITY",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      badge: "Breaking",
    },
    {
      id: 2,
      title: "Dell Will Invest $125 Billion in China's Tech in the Next 5 Years",
      category: "FINANCE",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Discover the Newest Waterproof Smartphones that Come on Sale",
      category: "TECH",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Now Is the Time to Think About Your Small-Business Success",
      category: "CELEBRITY",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
  ];

  // Smaller articles (2 rows x 4 columns)
  const smallArticles = [
    {
      id: 1,
      title: "Expanding Peacefull Political Climate Gears up for this Election",
      category: "POLITICS",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Things You Didn't Know About the American Past Politicians",
      category: "POLITICS",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "New Harvard Student Candidates Presented Minutes Before Results",
      category: "POLITICS",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      badge: "EXCLUSIVE",
    },
    {
      id: 4,
      title: "Sanders Gets Respectful Welcome at Conservative College",
      category: "POLITICS",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "The Hottest Wearable Tech and Smart Gadgets of 2021 Will Blow Your Mind",
      category: "TECH",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      badge: "EXCLUSIVE",
    },
    {
      id: 6,
      title: "New Technology Will Help Keep Your Smart Home from Becoming Obsolete",
      category: "TECH",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      id: 7,
      title: "Apple Computers Climb the List of the Top Gadgets in Forbes Magazine",
      category: "TECH",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      title: "New Soundboard from Bose Review: Pricing is Not Always the Only Criteria",
      category: "TECH",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      badge: "Exclusive",
    },
  ];

  return (
    <div className="w-full mb-10 px-5 lg:px-7">
      {/* Container with background */}
      <div className="bg-[#eaeaea]/40 py-10">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* LARGE FEATURE CARDS - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featureArticles.map((article) => (
              <div key={article.id} className="relative group cursor-pointer overflow-hidden">
                {/* Image container */}
                <div className="relative h-[400px] lg:h-[300px] w-full">
                  {/* Placeholder - replace with actual images */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                        
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 transition-all duration-300" />
                  
                  {/* Breaking badge (top left) */}
                  {article.badge === "Breaking" && (
                    <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-md font-bold">
                      {article.badge}
                    </div>
                  )}
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    {/* Category badge */}
                    <div className="inline-block bg-red-600 px-2 py-1 text-[10px] font-bold mb-2">
                      {article.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-serif font-bold text-lg leading-tight">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* HORIZONTAL LINE */}
          <div className="border-t-2 border-gray-300 mb-8" />

          {/* SMALL ARTICLE CARDS - 2 rows x 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
            {smallArticles.map((article) => (
              <div key={article.id} className="flex gap-3 group cursor-pointer">
                {/* Text content */}
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-sm leading-snug mb-2 group-hover:text-red-600 transition-colors">
                    {article.badge && (
                      <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-1">
                        {article.badge}
                      </span>
                    )}
                    {article.title}
                  </h4>
                  <p className="text-red-600 text-[11px] font-bold">
                    {article.category}
                  </p>
                </div>
                
                {/* Thumbnail image */}
                <div className="w-27 lg:w-20 h-27 lg:h-20 ">
                    <img
                    src={article.image}
                    alt={article.title}
                    className=" w-full h-full object-cover transition-transform duration-300"
                    />
                  {/* Placeholder - replace with actual images */}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}