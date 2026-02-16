
// "use client";

// import { FaArrowRight } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";

// export default function FoodTravelSection({ articles }) {
//   if (!articles || articles.length === 0) {
//     return null;
//   }

//      const formatDate = (dateString) => {
//     const [day, month, year] = dateString.split('/')
//     const date = new Date(year, month - 1, day)
    
//     const options = { year: 'numeric', month: 'long', day: 'numeric' }
//     return date.toLocaleDateString('en-US', options)
//   }

//   // Split articles: first 4 for large cards, next 4 for small cards
//   const largeArticles = articles.slice(0, 4);
//   const smallArticles = articles.slice(4, 8);

//   return (
//     <section className="max-w-7xl mx-auto px-5 lg:px-7 py-5 font-serif">
//       {/* Row 1: Header */}
//       <div className="mb-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-black">Sports</h2>
//           <Link 
//             href="/sports" 
//             className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm uppercase transition-colors"
//             title="Sports page"
//           >
//             VIEW ALL
//             <FaArrowRight className="text-xs" />
//           </Link>
//         </div>
//         <div className="h-[3px] bg-red-600 w-full"></div>
//       </div>

//       {/* Row 2: Large Cards (4 columns) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {largeArticles.map((article) => (
//           <Link key={`${article.category}-${article.id}`} href={`/${article.category}/${article.slug}`} title={article.title}>
//             <div className="group cursor-pointer">
//               {/* Image */}
//               <div className="mb-3 overflow-hidden relative h-[180px]">
//                 <Image
//                   src={article.image}
//                   alt={article.imageAlt || article.title}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
              
//               {/* Title */}
//               <h3 className="text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors">
//                 {article.type !== "normal" && (
//                   <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
//                     {article.type}
//                   </span>
//                 )}
//                 {article.title.slice(0, 70)}...
//               </h3>
              
//               {/* Author Info */}
//               {article.author && (
//                 <div className="flex items-center gap-2 text-xs text-gray-600">
//                   <div className="relative w-6 h-6 rounded-full overflow-hidden">
//                     <Image
//                       src={article.author.profileImage}
//                       alt={article.author.name}
//                       fill
//                       sizes="24px"
//                       className="object-cover"
//                     />
//                   </div>
//                   <span className="font-semibold">{article.author.name}</span>
//                   <span>-</span>
//                   <span>{formatDate(article.date)}</span>
//                 </div>
//               )}
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Row 3: Small Cards (4 columns) - Image Left, Title Right */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//         {smallArticles.map((article) => (
//           <Link key={`${article.category}-${article.id}`} href={`/${article.category}/${article.slug}`} title={article.title}>
//             <div className="group cursor-pointer">
//               <div className="flex gap-3 items-start">
//                 {/* Image Left */}
//                 <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden">
//                   <Image
//                     src={article.image}
//                     alt={article.imageAlt || article.title}
//                     fill
//                     sizes="96px"
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
                
//                 {/* Title Right */}
//                 <h3 className="text-sm font-bold leading-snug group-hover:text-red-600 transition-colors flex-1">
//                   {article.type !== "normal" && (
//                     <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
//                       {article.type}
//                     </span>
//                   )}
//                   {article.title.length > 70
//                     ? `${article.title.slice(0, 70)}...`
//                     : article.title}
//                 </h3>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const date = new Date(year, month - 1, day);
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const LargeCard = memo(({ article, index }) => (
  <article>
    <Link href={`/${article.category}/${article.slug}`} title={article.title}>
      <div className="group cursor-pointer">
        {/* Image */}
        <div className="mb-3 overflow-hidden relative h-[180px]">
          <Image
            src={article.image}
            alt={article.imageAlt || article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading={index < 2 ? "eager" : "lazy"}
            quality={85}
          />
        </div>
        
        {/* Title */}
        <h3 className="text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors">
          {article.type !== "normal" && (
            <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
              {article.type}
            </span>
          )}
          {article.title.slice(0, 70)}...
        </h3>
        
        {/* Author Info */}
        {article.author && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={article.author.profileImage}
                alt={article.author.name}
                fill
                sizes="24px"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span className="font-semibold">{article.author.name}</span>
            <span>-</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
        )}
      </div>
    </Link>
  </article>
));

LargeCard.displayName = 'LargeCard';

const SmallCard = memo(({ article }) => (
  <article>
    <Link href={`/${article.category}/${article.slug}`} title={article.title}>
      <div className="group cursor-pointer">
        <div className="flex gap-3 items-start">
          {/* Image Left */}
          <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden">
            <Image
              src={article.image}
              alt={article.imageAlt || article.title}
              fill
              sizes="96px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              quality={75}
            />
          </div>
          
          {/* Title Right */}
          <h3 className="text-sm font-bold leading-snug group-hover:text-red-600 transition-colors flex-1">
            {article.type !== "normal" && (
              <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
                {article.type}
              </span>
            )}
            {article.title.length > 70
              ? `${article.title.slice(0, 70)}...`
              : article.title}
          </h3>
        </div>
      </div>
    </Link>
  </article>
));

SmallCard.displayName = 'SmallCard';

export default function FoodTravelSection({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  // Split articles: first 4 for large cards, next 4 for small cards
  const largeArticles = articles.slice(0, 4);
  const smallArticles = articles.slice(4, 8);

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-7 py-5 font-serif">
      {/* Row 1: Header */}
      <header className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Sports</h2>
          <Link 
            href="/sports" 
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm uppercase transition-colors"
            title="View all sports articles"
          >
            VIEW ALL
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
        <hr className="h-[3px] bg-red-600 w-full border-0" />
      </header>

      {/* Row 2: Large Cards (4 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {largeArticles.map((article, index) => (
          <LargeCard key={`${article.category}-${article.id}`} article={article} index={index} />
        ))}
      </div>

      {/* Row 3: Small Cards (4 columns) - Image Left, Title Right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {smallArticles.map((article) => (
          <SmallCard key={`${article.category}-${article.id}`} article={article} />
        ))}
      </div>
    </section>
  );
}