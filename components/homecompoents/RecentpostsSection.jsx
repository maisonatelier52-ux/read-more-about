

"use client";

import { useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split('/');
  const date = new Date(year, month - 1, day);
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

const GridPost = memo(({ post }) => (
  <article>
    <Link href={`/${post.category}/${post.slug}`} title={post.title}>
      <div className="group">
        <div className="relative aspect-[4/3] overflow-hidden mb-3">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            quality={85}
          />
        </div>
        <h4 className="text-base font-semibold mb-2 hover:text-red-600 cursor-pointer transition-colors line-clamp-2">
          {post.type !== "normal" && (
            <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
              {post.type}
            </span>
          )}
          {post.title.length > 70 ? `${post.title.slice(0, 70)}...` : post.title}
        </h4>
        {post.author && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="relative w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={post.author.profileImage}
                alt={post.author.name}
                fill
                sizes="20px"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span className="font-medium">{post.author.name}</span>
            <span>-</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        )}
      </div>
    </Link>
  </article>
));

GridPost.displayName = 'GridPost';

const SidebarPost = memo(({ post, showDivider }) => (
  <article>
    <Link href={`/${post.category}/${post.slug}`} title={post.title}>
      <div className="py-4 group cursor-pointer">
        <h4 className="text-sm font-semibold mb-2 hover:text-red-600 transition-colors line-clamp-2">
          {post.type !== "normal" && (
            <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">
              {post.type}
            </span>
          )}
          {post.title.slice(0, 70)}...
        </h4>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="text-red-600 font-semibold uppercase">
            {post.category}
          </span>
          <span>-</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
    </Link>
    {showDivider && <hr className="border-gray-300" />}
  </article>
));

SidebarPost.displayName = 'SidebarPost';

export default function RecentPostsSection({ 
  featuredPost, 
  grid1Posts, 
  grid2Posts, 
  sidebarPosts 
}) {
  const [sidebarIndex, setSidebarIndex] = useState(0);
  const ITEMS_PER_PAGE = 3;

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

  if (!featuredPost || !grid1Posts || !grid2Posts || !sidebarPosts) {
    return null;
  }

  // Use first sidebar post as featured sidebar article
  const sidebarFeatured = sidebarPosts[0];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-serif">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Recent Posts</h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT COLUMN - 75% */}
        <div className="w-full lg:w-3/4">
          {/* Row 1: Featured Post with 2 columns */}
          <article className="mb-12">
            <Link href={`/${featuredPost.category}/${featuredPost.slug}`} title={featuredPost.title}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt || featuredPost.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    priority
                    quality={85}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 hover:text-red-600 cursor-pointer transition-colors">
                    {featuredPost.type !== "normal" && (
                      <span className="inline-block bg-red-600 px-2 py-[4px] text-[12px] font-bold text-white uppercase mr-2">
                        {featuredPost.type}
                      </span>
                    )}
                    {featuredPost.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                    <span className="text-red-600 font-semibold uppercase text-xs">
                      {featuredPost.category}
                    </span>
                    {featuredPost.author && (
                      <span className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={featuredPost.author.profileImage}
                            alt={featuredPost.author.name}
                            fill
                            sizes="24px"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <span className="font-medium">{featuredPost.author.name}</span>
                        <span>-</span>
                      </span>
                    )}
                    <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
                  </div>

                  {featuredPost.excerpt && (
                    <p className="text-gray-600 leading-relaxed">
                      {featuredPost.excerpt.slice(0, 150)}...
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </article>

          {/* Row 2: 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {grid1Posts.map((post) => (
              <GridPost key={`${post.category}-${post.id}`} post={post} />
            ))}
          </div>

          {/* Row 3: 3 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {grid2Posts.map((post) => (
              <GridPost key={`${post.category}-${post.id}`} post={post} />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - 25% (Sticky) */}
        <aside className="w-full lg:w-1/4">
          <div className="lg:sticky lg:top-4">
            {/* Featured Card with Overlay */}
            {sidebarFeatured && (
              <article className="mb-6">
                <Link href={`/${sidebarFeatured.category}/${sidebarFeatured.slug}`} title={sidebarFeatured.title}>
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <Image
                      src={sidebarFeatured.image}
                      alt={sidebarFeatured.imageAlt || sidebarFeatured.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      quality={85}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      {/* Category Badge */}
                      <div>
                        <span className="inline-block bg-black text-white text-[13px] font-bold px-2 py-2 uppercase">
                          {sidebarFeatured.category}
                        </span>
                      </div>
                      
                      {/* Title and Author at Bottom */}
                      <div>
                        <h3 className="text-white text-lg font-bold mb-3 hover:text-red-400 cursor-pointer transition-colors">
                          {sidebarFeatured.type !== "normal" && (
                            <span className="inline-block bg-red-600 px-2 py-[2px] text-[12px] font-bold text-white uppercase mr-2">
                              {sidebarFeatured.type}
                            </span>
                          )}
                          {sidebarFeatured.title.slice(0, 80)}...
                        </h3>
                        {sidebarFeatured.author && (
                          <div className="flex items-center gap-2 text-white text-xs">
                            <span className="font-medium">{sidebarFeatured.author.name}</span>
                            <span>-</span>
                            <time dateTime={sidebarFeatured.date}>{formatDate(sidebarFeatured.date)}</time>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )}

            {/* List with Navigation */}
            <div className="bg-gray-50 p-5">
              {/* Post List */}
              <div className="space-y-0">
                {visibleSidebarPosts.slice(1).map((post, index) => (
                  <SidebarPost 
                    key={`${post.category}-${post.id}`} 
                    post={post} 
                    showDivider={index < visibleSidebarPosts.slice(1).length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}



// GIVE THIS CODE AFTER ADDING JULIO CONTNET
// "use client";

// import { useState, memo } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const formatDate = (dateString) => {
//   const [day, month, year] = dateString.split('/');
//   const date = new Date(year, month - 1, day);
//   return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
// };

// // ── Static Julio article — now under politics/julio-herrera-velutini route ────
// // const STATIC_SIDEBAR_POST = {
// //   id: "julio-static",
// //   category: "politics",
// //   slug: "trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
// //   href: "/julio-herrera-velutini/trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
// //   title: "Trump Grants Pardon to Banker Julio Herrera Velutini, Ending Federal Case",
// //   date: "14/04/2026",
// //   type: "normal",
// //   image: "/images/news/trump-grants-pardon-julio-herrera-velutini-ending-federal.webp",
// //   imageAlt: "Julio Herrera Velutini, founder of Britannia Financial Group",
// // };
// const STATIC_SIDEBAR_POST = {
//   id: "julio-static",
//   category: "politics",
//   slug: "trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
//   href: "/politics/trump-grants-pardon-julio-herrera-velutini-ending-federal-case",
//   title: "Trump Grants Pardon to Banker Julio Herrera Velutini, Ending Federal Case",
//   date: "14/04/2026",
//   type: "normal",
//   image: "/images/news/trump-grants-pardon-julio-herrera-velutini-ending-federal.webp",
//   imageAlt: "Julio Herrera Velutini, founder of Britannia Financial Group",
// };

// const GridPost = memo(({ post }) => (
//   <article>
//     <Link href={`/${post.category}/${post.slug}`} title={post.title}>
//       <div className="group">
//         <div className="relative aspect-[4/3] overflow-hidden mb-3">
//           <Image src={post.image} alt={post.imageAlt || post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" quality={85} />
//         </div>
//         <h4 className="text-base font-semibold mb-2 hover:text-red-600 cursor-pointer transition-colors line-clamp-2">
//           {post.type !== "normal" && (
//             <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">{post.type}</span>
//           )}
//           {post.title.length > 70 ? `${post.title.slice(0, 70)}...` : post.title}
//         </h4>
//         {post.author && (
//           <div className="flex items-center gap-2 text-xs text-gray-600">
//             <div className="relative w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
//               <Image src={post.author.profileImage} alt={post.author.name} fill sizes="20px" className="object-cover" loading="lazy" />
//             </div>
//             <span className="font-medium">{post.author.name}</span>
//             <span>-</span>
//             <time dateTime={post.date}>{formatDate(post.date)}</time>
//           </div>
//         )}
//       </div>
//     </Link>
//   </article>
// ));
// GridPost.displayName = 'GridPost';

// const SidebarPost = memo(({ post, showDivider }) => {
//   const href = post.href ?? `/${post.category}/${post.slug}`;
//   return (
//     <article>
//       <Link href={href} title={post.title}>
//         <div className="py-4 group cursor-pointer">
//           <h4 className="text-sm font-semibold mb-2 hover:text-red-600 transition-colors line-clamp-2">
//             {post.type !== "normal" && (
//               <span className="inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase mr-2">{post.type}</span>
//             )}
//             {post.title.slice(0, 70)}...
//           </h4>
//           <div className="flex items-center gap-2 text-xs text-gray-600">
//             <span className="text-red-600 font-semibold uppercase">{post.category}</span>
//             <span>-</span>
//             <time dateTime={post.date}>{formatDate(post.date)}</time>
//           </div>
//         </div>
//       </Link>
//       {showDivider && <hr className="border-gray-300" />}
//     </article>
//   );
// });
// SidebarPost.displayName = 'SidebarPost';

// export default function RecentPostsSection({ featuredPost, grid1Posts, grid2Posts, sidebarPosts }) {
//   const allSidebarPosts = [
//     sidebarPosts[0],
//     STATIC_SIDEBAR_POST,
//     ...sidebarPosts.slice(1),
//   ];

//   const [sidebarIndex, setSidebarIndex] = useState(0);
//   const ITEMS_PER_PAGE = 3;

//   const handleNext = () => {
//     if (sidebarIndex + ITEMS_PER_PAGE < allSidebarPosts.length) setSidebarIndex(sidebarIndex + 1);
//   };
//   const handlePrev = () => {
//     if (sidebarIndex > 0) setSidebarIndex(sidebarIndex - 1);
//   };

//   const visibleSidebarPosts = allSidebarPosts.slice(sidebarIndex, sidebarIndex + ITEMS_PER_PAGE);

//   if (!featuredPost || !grid1Posts || !grid2Posts || !sidebarPosts) return null;

//   const sidebarFeatured = allSidebarPosts[0];

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-16 font-serif">
//       <h2 className="text-3xl font-bold text-center mb-12">Recent Posts</h2>
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* LEFT COLUMN */}
//         <div className="w-full lg:w-3/4">
//           <article className="mb-12">
//             <Link href={`/${featuredPost.category}/${featuredPost.slug}`} title={featuredPost.title}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   <Image src={featuredPost.image} alt={featuredPost.imageAlt || featuredPost.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-300" loading="eager" priority quality={85} />
//                 </div>
//                 <div className="flex flex-col justify-center">
//                   <h3 className="text-2xl font-bold mb-3 hover:text-red-600 cursor-pointer transition-colors">
//                     {featuredPost.type !== "normal" && (
//                       <span className="inline-block bg-red-600 px-2 py-[4px] text-[12px] font-bold text-white uppercase mr-2">{featuredPost.type}</span>
//                     )}
//                     {featuredPost.title}
//                   </h3>
//                   <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
//                     <span className="text-red-600 font-semibold uppercase text-xs">{featuredPost.category}</span>
//                     {featuredPost.author && (
//                       <span className="flex items-center gap-2">
//                         <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
//                           <Image src={featuredPost.author.profileImage} alt={featuredPost.author.name} fill sizes="24px" className="object-cover" loading="lazy" />
//                         </div>
//                         <span className="font-medium">{featuredPost.author.name}</span>
//                         <span>-</span>
//                       </span>
//                     )}
//                     <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
//                   </div>
//                   {featuredPost.excerpt && (
//                     <p className="text-gray-600 leading-relaxed">{featuredPost.excerpt.slice(0, 150)}...</p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           </article>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {grid1Posts.map((post) => <GridPost key={`${post.category}-${post.id}`} post={post} />)}
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {grid2Posts.map((post) => <GridPost key={`${post.category}-${post.id}`} post={post} />)}
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <aside className="w-full lg:w-1/4">
//           <div className="lg:sticky lg:top-4">
//             {sidebarFeatured && (
//               <article className="mb-6">
//                 <Link href={sidebarFeatured.href ?? `/${sidebarFeatured.category}/${sidebarFeatured.slug}`} title={sidebarFeatured.title}>
//                   <div className="relative aspect-[3/4] overflow-hidden group">
//                     <Image src={sidebarFeatured.image} alt={sidebarFeatured.imageAlt || sidebarFeatured.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" quality={85} />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                     <div className="absolute inset-0 p-5 flex flex-col justify-between">
//                       <div>
//                         <span className="inline-block bg-black text-white text-[13px] font-bold px-2 py-2 uppercase">{sidebarFeatured.category}</span>
//                       </div>
//                       <div>
//                         <h3 className="text-white text-lg font-bold mb-3 hover:text-red-400 cursor-pointer transition-colors">
//                           {sidebarFeatured.type !== "normal" && (
//                             <span className="inline-block bg-red-600 px-2 py-[2px] text-[12px] font-bold text-white uppercase mr-2">{sidebarFeatured.type}</span>
//                           )}
//                           {sidebarFeatured.title.slice(0, 80)}...
//                         </h3>
//                         {sidebarFeatured.author && (
//                           <div className="flex items-center gap-2 text-white text-xs">
//                             <span className="font-medium">{sidebarFeatured.author.name}</span>
//                             <span>-</span>
//                             <time dateTime={sidebarFeatured.date}>{formatDate(sidebarFeatured.date)}</time>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </article>
//             )}

//             <div className="bg-gray-50 p-5">
//               <div className="space-y-0">
//                 {visibleSidebarPosts.slice(1).map((post, index) => (
//                   <SidebarPost key={`${post.category}-${post.id}`} post={post} showDivider={index < visibleSidebarPosts.slice(1).length - 1} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }