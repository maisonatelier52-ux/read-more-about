
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";

// const formatDate = (dateString) => {
//   const [day, month, year] = dateString.split('/');
//   const date = new Date(year, month - 1, day);
  
//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   return date.toLocaleDateString('en-US', options);
// };

// // Ad Component
// const AdBlock = () => (
//   <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg">
//     <Image
//       src="/images/mirrorstandard_ads.webp"
//       alt="Newspaper Theme Advertisement"
//       width={1200}
//       height={800}
//       className="w-full h-auto"
//       sizes="(max-width: 1024px) 100vw, 25vw"
//       loading="lazy"
//       quality={85}
//     />
//   </div>
// );

// export default function PoliticsSection({ articles }) {
//   if (!articles || articles.length === 0) {
//     return null;
//   }

//   // Split articles for different sections
//   const featuredArticles = articles.slice(0, 3); // First 3 with images
//   const row3Articles = articles.slice(3, 6); // Next 3
//   const row4Articles = articles.slice(6, 9); // Last 3

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10 font-serif">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* LEFT COLUMN - 75% */}
//         <div className="w-full lg:w-3/4">
          
//           {/* ROW 1 - Header */}
//           <header className="mb-6">
//             <div className="flex items-center justify-between mb-2">
//               <h2 className="text-3xl font-bold">Politics</h2>
//               <Link 
//                 href="/politics" 
//                 className="text-red-600 text-sm font-semibold flex items-center gap-2 hover:text-red-700 transition"
//                 title="View all politics articles"
//               >
//                 VIEW ALL <FaArrowRight className="text-xs" />
//               </Link>
//             </div>
//             <hr className="border-t-2 border-red-600" />
//           </header>

//           {/* ROW 2 - Featured Articles with Images */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             {featuredArticles.map((article, index) => (
//               <article key={`${article.category}-${article.id}`}>
//                 <Link href={`/${article.category}/${article.slug}`} title={article.title}>
//                   <div className="group border-b pb-3 border-gray-300">
//                     <div className="mb-3 overflow-hidden relative h-48">
//                       <Image
//                         src={article.image}
//                         alt={article.imageAlt || article.title}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 33vw"
//                         className="object-cover group-hover:scale-105 transition-transform duration-300"
//                         loading={index === 0 ? "eager" : "lazy"}
//                         quality={85}
//                       />
//                     </div>

//                     <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-red-600 cursor-pointer transition">
//                       {article.type !== "normal" && (
//                         <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
//                           {article.type}
//                         </span>
//                       )}
//                       {article.title.slice(0, 65)}...
//                     </h3>

//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       {article.author && (
//                         <>
//                           <div className="relative w-6 h-6 flex-shrink-0">
//                             <Image
//                               src={article.author.profileImage}
//                               alt={article.author.name}
//                               fill
//                               sizes="24px"
//                               className="rounded-full object-cover"
//                               loading="lazy"
//                             />
//                           </div>
//                           <span className="font-semibold">{article.author.name}</span>
//                           <span>-</span>
//                         </>
//                       )}
//                       <time dateTime={article.date}>{formatDate(article.date)}</time>
//                     </div>
//                   </div>
//                 </Link>
//               </article>
//             ))}
//           </div>

//           {/* ROW 3 - Text Articles */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             {row3Articles.map((article) => (
//               <article key={`${article.category}-${article.id}`}>
//                 <Link href={`/${article.category}/${article.slug}`} title={article.title}>
//                   <div>
//                     <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
//                       {article.type !== "normal" && (
//                         <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
//                           {article.type}
//                         </span>
//                       )}
//                       {article.title.slice(0, 70)}...
//                     </h3>
//                     <time className="text-sm text-gray-600" dateTime={article.date}>
//                       {formatDate(article.date)}
//                     </time>
//                   </div>
//                 </Link>
//               </article>
//             ))}
//           </div>

//           {/* ROW 4 - Text Articles */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             {row4Articles.map((article) => (
//               <article key={`${article.category}-${article.id}`}>
//                 <Link href={`/${article.category}/${article.slug}`} title={article.title}>
//                   <div>
//                     <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
//                       {article.type !== "normal" && (
//                         <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
//                           {article.type}
//                         </span>
//                       )}
//                       {article.title.slice(0, 70)}...
//                     </h3>
//                     <time className="text-sm text-gray-600" dateTime={article.date}>
//                       {formatDate(article.date)}
//                     </time>
//                   </div>
//                 </Link>
//               </article>
//             ))}
//           </div>

//           {/* AD BLOCK - Mobile/Tablet Only (shown below content) */}
//           <div className="block lg:hidden">
//             <AdBlock />
//           </div>

//         </div>

//         {/* RIGHT COLUMN - 25% with Sticky Ad - Desktop Only */}
//         <aside className="hidden lg:block w-1/4">
//           <div className="sticky top-4">
//             <AdBlock />
//           </div>
//         </aside>

//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// ── Static Julio article injected into Politics section ───────────────────────
// const STATIC_JULIO_POLITICS = {
//   id: "julio-static",
//   category: "julio-herrera-velutini",
//   slug: "trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
//   title: "Trump Closes Federal Case by Pardoning Banker Julio Herrera Velutini",
//   date: "14/04/2026",
//   image: "/images/news/trump-grants-pardon-julio-herrera-velutini-ending-federal.webp",
//   imageAlt: "Julio Herrera Velutini, founder of Britannia Financial Group",
//   type: "normal",
//   newsType: "news",
//   author: null,
// };
const STATIC_JULIO_POLITICS = {
  id: "julio-static",
  category: "politics",
  slug: "trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
  title: "Trump Closes Federal Case by Pardoning Banker Julio Herrera Velutini",
  date: "14/04/2026",
  image: "/images/news/trump-grants-pardon-julio-herrera-velutini-ending-federal.webp",
  imageAlt: "Julio Herrera Velutini, founder of Britannia Financial Group",
  type: "normal",
  newsType: "news",
  author: null,
};

const AdBlock = () => (
  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden shadow-lg">
    <Image
      src="/images/mirrorstandard_ads.webp"
      alt="Newspaper Theme Advertisement"
      width={1200}
      height={800}
      className="w-full h-auto"
      sizes="(max-width: 1024px) 100vw, 25vw"
      loading="lazy"
      quality={85}
    />
  </div>
);

export default function PoliticsSection({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  // Inject static Julio article at end, keep up to 9 dynamic + 1 static = 10 total
  // Layout uses first 3 with images, next 3 text, next 3 text
  const combined = [...articles.slice(0, 8), STATIC_JULIO_POLITICS];

  const featuredArticles = combined.slice(0, 3);
  const row3Articles = combined.slice(3, 6);
  const row4Articles = combined.slice(6, 9);

  const getHref = (article) =>
    article.id === "julio-static"
      ? `/${article.category}/${article.slug}`
      : `/${article.category}/${article.slug}`;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-serif">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT COLUMN - 75% */}
        <div className="w-full lg:w-3/4">

          {/* ROW 1 - Header */}
          <header className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold">Politics</h2>
              <Link
                href="/politics"
                className="text-red-600 text-sm font-semibold flex items-center gap-2 hover:text-red-700 transition"
                title="View all politics articles"
              >
                VIEW ALL <FaArrowRight className="text-xs" />
              </Link>
            </div>
            <hr className="border-t-2 border-red-600" />
          </header>

          {/* ROW 2 - Featured Articles with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredArticles.map((article, index) => (
              <article key={`${article.category}-${article.id}`}>
                <Link href={getHref(article)} title={article.title}>
                  <div className="group border-b pb-3 border-gray-300">
                    <div className="mb-3 overflow-hidden relative h-48">
                      <Image
                        src={article.image}
                        alt={article.imageAlt || article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading={index === 0 ? "eager" : "lazy"}
                        quality={85}
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-red-600 cursor-pointer transition">
                      {article.type !== "normal" && (
                        <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                          {article.type}
                        </span>
                      )}
                      {article.title.slice(0, 65)}...
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {article.author && (
                        <>
                          <div className="relative w-6 h-6 flex-shrink-0">
                            <Image src={article.author.profileImage} alt={article.author.name} fill sizes="24px" className="rounded-full object-cover" loading="lazy" />
                          </div>
                          <span className="font-semibold">{article.author.name}</span>
                          <span>-</span>
                        </>
                      )}
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {row3Articles.map((article) => (
              <article key={`${article.category}-${article.id}`}>
                <Link href={getHref(article)} title={article.title}>
                  <div>
                    <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
                      {article.type !== "normal" && (
                        <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                          {article.type}
                        </span>
                      )}
                      {article.title.slice(0, 70)}...
                    </h3>
                    <time className="text-sm text-gray-600" dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* ROW 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {row4Articles.map((article) => (
              <article key={`${article.category}-${article.id}`}>
                <Link href={getHref(article)} title={article.title}>
                  <div>
                    <h3 className="font-bold text-base mb-2 leading-tight hover:text-red-600 cursor-pointer transition">
                      {article.type !== "normal" && (
                        <span className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 mr-2 uppercase">
                          {article.type}
                        </span>
                      )}
                      {article.title.slice(0, 70)}...
                    </h3>
                    <time className="text-sm text-gray-600" dateTime={article.date}>
                      {formatDate(article.date)}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="block lg:hidden">
            <AdBlock />
          </div>
        </div>

        {/* RIGHT COLUMN - Ad */}
        <aside className="hidden lg:block w-1/4">
          <div className="sticky top-4">
            <AdBlock />
          </div>
        </aside>
      </div>
    </section>
  );
}