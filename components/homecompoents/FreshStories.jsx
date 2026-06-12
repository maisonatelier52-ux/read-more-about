// components/homecompoents/FreshStories.jsx

"use client";

import { useState, useMemo, memo } from "react";
import Image from "next/image";
import Link from "next/link";

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const date = new Date(year, month - 1, day);
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Memoized article card component
const ArticleCard = memo(({ article, size = "default" }) => {
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  return (
    <Link href={`/${article.category}/${article.slug}`} title={article.title}>
      <div className="group cursor-pointer">
        <h3 className={`font-bold ${size === 'large' ? 'text-base' : 'text-sm'} leading-snug mb-2 font-serif group-hover:text-red-600 transition-colors`}>
          {article.type !== "normal" && (
            <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
              {article.type}
            </span>
          )}
          {truncateTitle(article.title, size === 'large' ? 70 : 50)}
        </h3>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-red-600 font-semibold uppercase">{article.category}</span>
          <time className="text-gray-500" dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
      </div>
    </Link>
  );
});

ArticleCard.displayName = 'ArticleCard';

export default function FreshStories({ 
  latestArticle, 
  next2Articles, 
  leftColumnArticles, 
  popularArticles 
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const ITEMS_PER_PAGE = 5;

  const totalPages = Math.ceil((leftColumnArticles?.length || 0) / ITEMS_PER_PAGE);
  
  const currentArticles = useMemo(() => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return leftColumnArticles?.slice(startIndex, startIndex + ITEMS_PER_PAGE) || [];
  }, [currentPage, leftColumnArticles]);

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

  if (!latestArticle || !next2Articles || !leftColumnArticles || !popularArticles) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-7 mt-2 lg:mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* COLUMN 1 - Fresh Stories List (20% width) */}
        <aside className="lg:col-span-1">
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
                <article key={`${article.category}-${article.id}`}>
                  <div className="py-4">
                    <ArticleCard article={article} />
                  </div>
                  {index < currentArticles.length - 1 && (
                    <hr className="border-gray-200" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </aside>

        {/* COLUMN 2 - Featured Article with Image Overlay (40% width) */}
        <article className="lg:col-span-2">
          <Link href={`/${latestArticle.category}/${latestArticle.slug}`} title={latestArticle.title}>
            <div className="relative h-full min-h-[500px] lg:h-[650px] rounded-sm overflow-hidden group cursor-pointer">
              {/* Background Image */}
              <Image
                src={latestArticle.image}
                alt={latestArticle.imageAlt || latestArticle.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                quality={85}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="inline-block bg-red-600 px-3 py-1 text-xs font-bold uppercase mb-4">
                  {latestArticle.category}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight font-serif group-hover:text-red-400 transition-colors">
                  {latestArticle.type !== "normal" && (
                    <span className="inline-block bg-red-600 px-2 py-[6px] text-[15px] font-bold text-white uppercase mr-2">
                      {latestArticle.type}
                    </span>
                  )}
                  {latestArticle.title.length > 50 ? `${latestArticle.title.slice(0,50)}...` : latestArticle.title}
                </h2>
                <p className="text-sm lg:text-md leading-relaxed opacity-90">
                   {latestArticle.excerpt.length > 250 ? `${latestArticle.excerpt.slice(0,250)}...` : latestArticle.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </article>

        {/* COLUMN 3 - Image Cards (20% width) */}
        <aside className="lg:col-span-1">
          <div className="space-y-6">
            {next2Articles.map((card) => (
              <article key={`${card.category}-${card.id}`}>
                <Link href={`/${card.category}/${card.slug}`} title={card.title}>
                  <div className="group cursor-pointer mb-10">
                    {/* Image */}
                    <div className="relative h-48 mb-3 rounded-sm overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.imageAlt || card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        quality={85}
                      />
                    </div>

                    {/* Category */}
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      {card.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-bold text-base leading-snug mt-2 font-serif group-hover:text-red-600 transition-colors">
                      {card.type !== "normal" && (
                        <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                          {card.type}
                        </span>
                      )}
                      {card.title.length > 70 ? `${card.title.slice(0, 70)}...` : card.title}
                    </h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </aside>

        {/* COLUMN 4 - Popular Sidebar (20% width) */}
        <aside className="lg:col-span-1">
          <h2 className="text-3xl font-bold mb-2 font-serif">Popular</h2>
          <div className="bg-white px-6 py-2 rounded-sm shadow-xl">
            {/* Popular Articles */}
            <div className="space-y-1">
              {popularArticles.map((article, index) => (
                <article key={`${article.category}-${article.id}`}>
                  <Link href={`/${article.category}/${article.slug}`} title={article.title}>
                    <div className="group cursor-pointer">
                      {/* Category */}
                      <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                        {article.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-bold text-sm leading-snug mt-1 mb-2 font-serif group-hover:text-red-600 transition-colors">
                        {article.type !== "normal" && (
                          <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                            {article.type}
                          </span>
                        )}
                        {article.title.length > 50 ? `${article.title.slice(0, 50)}...` : article.title}
                      </h3>

                      {/* Date */}
                      <time className="text-xs text-gray-500" dateTime={article.date}>
                        {formatDate(article.date)}
                      </time>
                    </div>
                  </Link>

                  {/* Divider */}
                  {index < popularArticles.length - 1 && (
                    <hr className="border-gray-200 mt-2" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}