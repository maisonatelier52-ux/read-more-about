
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ArticleGrid({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  // Split articles: first 4 for large cards, next 4 for small cards
  const featureArticles = articles.slice(0, 4);
  const smallArticles = articles.slice(4, 8);

  return (
    <div className="w-full mb-10 px-5 lg:px-7">
      {/* Container with background */}
      <div className="bg-[#eaeaea]/40 py-10">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* LARGE FEATURE CARDS - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featureArticles.map((article, index) => (
              <Link key={`${article.category}-${article.id}`} href={`/${article.category}/${article.slug}`} title={article.title}>
                <div className="relative group cursor-pointer overflow-hidden">
                  {/* Image container */}
                  <div className="relative h-[400px] lg:h-[300px] w-full">
                   <Image
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                        
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 transition-all duration-300" />
                    
                    {/* Breaking badge (top left) - only for first article if exclusive */}
                    { article.type === "breaking" || article.type === "exclusive" && (
                      <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-md font-bold uppercase">
                        {article.type}
                      </div>
                    )}
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      {/* Category badge */}
                      <div className="inline-block bg-red-600 px-2 py-1 text-[10px] font-bold mb-2 uppercase">
                        {article.category}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-serif font-bold text-lg leading-tight">
                        {article.title.slice(0, 80)}...
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* HORIZONTAL LINE */}
          <div className="border-t-2 border-gray-300 mb-8" />

          {/* SMALL ARTICLE CARDS - 2 rows x 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
            {smallArticles.map((article) => (
              <Link key={`${article.category}-${article.id}`} href={`/${article.category}/${article.slug}`} title={article.title}>
                <div className="flex gap-3 group cursor-pointer">
                  {/* Text content */}
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-sm leading-snug mb-2 group-hover:text-red-600 transition-colors">
                      {article.type !== "normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-1">
                          {article.type}
                        </span>
                      )}
                      {article.title.slice(0, 50)}...
                    </h4>
                    <p className="text-red-600 text-[11px] font-bold uppercase">
                      {article.category}
                    </p>
                  </div>
                  
                  {/* Thumbnail image */}
                  <div className="w-27 lg:w-20 h-27 lg:h-20 relative">
                    <Image
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}