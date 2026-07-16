// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaPinterestP,
//   FaWhatsapp,
// } from "react-icons/fa";
// import {
//   FaBriefcase,
//   FaCalendarDays,
//   FaBuilding,
//   FaGraduationCap,
//   FaUsers,
//   FaShieldHeart,
//   FaXTwitter,
//   FaReddit,
//   FaQuora,
//   FaChevronDown,
// } from "react-icons/fa6";
// import { SiMedium } from "react-icons/si";
// import { slugify } from "@/utils/slugify";
// import SubscribeBox from "@/components/articlepagecomponents/SubscribeBox";

// const ICONS = {
//   briefcase: FaBriefcase,
//   calendar: FaCalendarDays,
//   building: FaBuilding,
//   "graduation-cap": FaGraduationCap,
//   users: FaUsers,
// };

// const SITE_URL = "https://www.read-more-about.com";

// export default function ClientArticle({
//   article,
//   authorInfo,
//   category = "business",
//   prevPost = null,
//   nextPost = null,
//   relatedArticles = [],
//   popularArticles = [],
// }) {
//   const [activeId, setActiveId] = useState("introduction");

//   const onPageLinks = [
//     { id: "introduction", label: "Introduction" },
//     { id: "at-a-glance", label: "At a Glance" },
//     ...article.sections.map((s) => ({ id: s.id, label: s.title })),
//     { id: "faq", label: "FAQ" },
//     { id: "editorial-note", label: "Editorial Source Note" },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActiveId(entry.target.id);
//         });
//       },
//       { rootMargin: "-140px 0px -70% 0px", threshold: 0 }
//     );

//     onPageLinks.forEach((item) => {
//       const el = document.getElementById(item.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const shareUrl = `${SITE_URL}/${category}/${article.slug}`;
//   const encodedUrl = encodeURIComponent(shareUrl);
//   const shareTitle = encodeURIComponent(article.title);

//   return (
//     <div className="w-full bg-white">
//       {/* Breadcrumb */}
//       <div className="mx-auto max-w-[1280px] px-4 pt-6 lg:px-7">
//         <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
//           <ol className="flex flex-wrap items-center gap-2">
//             <li>
//               <Link href="/" title="Home page" className="hover:text-red-600">
//                 Home
//               </Link>
//             </li>
//             <li>/</li>
//             <li>
//               <Link href={`/${category}`} className="capitalize hover:text-red-600" title={`${category} page`}>
//                 {category}
//               </Link>
//             </li>
//             <li>/</li>
//             <li className="line-clamp-1 text-gray-600">{article.title}</li>
//           </ol>
//         </nav>
//       </div>

//       {/* Content Wrapper — hero now lives inside the main column so the
//           sidebar can sit alongside it and start right at the top */}
//       <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 lg:px-7">
//         <div className="flex flex-col gap-8 lg:flex-row">
//           {/* Main Article */}
//           <main className="w-full font-serif lg:w-3/4" itemScope itemType="https://schema.org/NewsArticle">
//             <meta itemProp="headline" content={article.title} />
//             <meta itemProp="description" content={article.excerpt} />

//             {/* Hero — compact, contained (no full-bleed banner) */}
//             <section className="mb-8 max-w-[760px] border-b border-gray-200 pb-8">
//               <div className=" items-start gap-5 sm:grid-cols-[1fr_160px]">
//                 <div>
//                   <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
//                     <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600" />
//                     {article.sectionLabel || "People / Executive Profiles"}
//                   </p>
//                   <h1 className="font-serif text-2xl font-bold leading-[1.2] text-black md:text-[28px] lg:text-3xl">
//                     {article.title}
//                   </h1>
//                   <p className="mt-3 text-[15px] leading-relaxed text-gray-600 md:text-base">
//                     {article.excerpt}
//                   </p>

//                   {/* Metadata row */}
//                   <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-gray-600">
//                     <div className="flex items-center gap-2">
//                       {authorInfo?.profileImage && (
//                         <div className="relative h-7 w-7 overflow-hidden rounded-full">
//                           <Image src={authorInfo.profileImage} alt={authorInfo.name} fill sizes="28px" className="object-cover" />
//                         </div>
//                       )}
//                       <span>
//                         By{" "}
//                         <Link
//                           href={`/author/${slugify(authorInfo?.name || "")}`}
//                           title={`View ${authorInfo?.name}'s author page`}
//                           className="font-semibold text-red-600 hover:underline"
//                         >
//                           {authorInfo?.name}
//                         </Link>
//                       </span>
//                     </div>
//                     <span className="text-gray-300">|</span>
//                     <span>{article.date}</span>
//                     {article.updatedDate && (
//                       <>
//                         <span className="text-gray-300">•</span>
//                         <span>Updated {article.updatedDate}</span>
//                       </>
//                     )}
//                     <span className="text-gray-300">•</span>
//                     <span>{article.readingTime}</span>
//                     {article.factChecked && (
//                       <>
//                         <span className="text-gray-300">•</span>
//                         <span className="flex items-center gap-1.5 text-black">
//                           <FaShieldHeart className="text-red-600" size={12} />
//                           Fact Checked
//                         </span>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 {/* Executive Portrait — small, contained, no longer a full hero banner */}
                
//               </div>
//             </section>

//             {/* Featured Image */}
//             {article.introImagecaption && (
//               <figure className="mb-6">
//                 <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[420px]">
//                   <Image
//                     src={article.image}
//                     alt={article.imageAlt}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 900px"
//                     className="object-cover"
//                   />
//                 </div>
//                 <figcaption className="mt-2 text-sm italic text-gray-500">
//                   {article.introImagecaption.caption}
//                 </figcaption>
//               </figure>
//             )}

//             {/* Inline "On This Page" — small text, above the content, below the image */}
//             <nav aria-label="On this page" className="mb-8 border-y border-gray-200 py-3">
//               <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
//                 On This Page
//               </p>
//               <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
//                 {onPageLinks.map((item) => (
//                   <a
//                     key={item.id}
//                     href={`#${item.id}`}
//                     className={`text-xs transition-colors ${
//                       activeId === item.id
//                         ? "font-semibold text-red-600"
//                         : "text-gray-500 hover:text-black"
//                     }`}
//                   >
//                     {item.label}
//                   </a>
//                 ))}
//               </div>
//             </nav>

//             {/* Introduction */}
//             <section id="introduction" className="max-w-[760px] scroll-mt-28">
//               {article.introduction.map((para, idx) => (
//                 <p
//                   key={idx}
//                   className={`mb-6 text-[15px] leading-[1.95] text-black ${
//                     idx === 0
//                       ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-red-600"
//                       : ""
//                   }`}
//                 >
//                   {para}
//                 </p>
//               ))}
//             </section>

//             {/* At A Glance Card */}
//             <section id="at-a-glance" className="my-10 max-w-[760px] scroll-mt-28">
//               <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md md:p-8">
//                 <div className="mb-5 flex items-center gap-3">
//                   <span className="text-sm font-bold uppercase tracking-wide text-black">
//                     At a Glance
//                   </span>
//                   <span className="h-px flex-1 bg-gray-200" />
//                 </div>
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {article.atAGlance.map((item, idx) => {
//                     const Icon = ICONS[item.icon] || FaBriefcase;
//                     return (
//                       <div key={idx} className="flex items-start gap-3">
//                         <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
//                           <Icon size={14} />
//                         </span>
//                         <div>
//                           <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
//                             {item.label}
//                           </p>
//                           <p className="mt-0.5 text-sm font-medium leading-snug text-black">
//                             {item.value}
//                           </p>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </section>

//             {/* Numbered Sections */}
//             {article.sections.map((section) => (
//               <section key={section.id} id={section.id} className="mb-14 max-w-[760px] scroll-mt-28">
//                 <div className="mb-5 flex items-baseline gap-4">
//                   <span className="font-serif text-3xl font-bold leading-none text-red-600">
//                     {section.number}
//                   </span>
//                   <h2 className="font-serif text-2xl font-bold leading-tight text-black md:text-[28px]">
//                     {section.title}
//                   </h2>
//                 </div>
//                 <div className="mb-6 h-[2px] w-16 bg-red-600" />

//                 {section.paragraphs.map((para, idx) => (
//                   <p key={idx} className="mb-5 text-justify text-[15px] leading-[1.95] text-black">
//                     {para}
//                   </p>
//                 ))}

//                 {section.list && (
//                   <div className="my-6">
//                     {section.list.intro && (
//                       <p className="mb-3 text-[15px] leading-[1.95] text-black">{section.list.intro}</p>
//                     )}
//                     <ul className="space-y-2 border-l-2 border-red-600/30 pl-5">
//                       {section.list.items.map((li, i) => (
//                         <li key={i} className="text-[14px] leading-relaxed text-black">
//                           {li}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 {section.paragraphsAfterList?.map((para, idx) => (
//                   <p key={`after-${idx}`} className="mb-5 text-justify text-[15px] leading-[1.95] text-black">
//                     {para}
//                   </p>
//                 ))}

//                 {section.callout && (
//                   <div className="my-6 rounded-r-lg border-l-4 border-red-600 bg-red-50/60 p-5">
//                     <p className="text-[15px] leading-relaxed text-gray-700">{section.callout.text}</p>
//                   </div>
//                 )}

//                 {section.pullQuote && (
//                   <blockquote className="my-8 border-l-4 border-red-600 py-2 pl-6">
//                     <p className="font-serif text-lg italic leading-snug text-black">
//                       &ldquo;{section.pullQuote}&rdquo;
//                     </p>
//                   </blockquote>
//                 )}

//                 {section.highlightBox && (
//                   <div className="my-6 rounded-lg bg-black p-6 text-white md:p-8">
//                     <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-500">
//                       {section.highlightBox.title}
//                     </p>
//                     <p className="text-[14px] leading-relaxed text-gray-100">
//                       {section.highlightBox.text}
//                     </p>
//                   </div>
//                 )}

//                 {section.image && (
//                   <figure className="my-6">
//                     <div className="relative h-[280px] w-full overflow-hidden rounded-lg md:h-[380px]">
//                       <Image
//                         src={section.image.src}
//                         alt={section.image.alt}
//                         fill
//                         sizes="(max-width: 1024px) 100vw, 760px"
//                         className="object-cover"
//                         loading="lazy"
//                       />
//                     </div>
//                     {section.image.caption && (
//                       <figcaption className="mt-2 text-sm italic text-gray-500">{section.image.caption}</figcaption>
//                     )}
//                   </figure>
//                 )}
//               </section>
//             ))}

//             {/* FAQ */}
//             <section id="faq" className="mb-14 max-w-[760px] scroll-mt-28">
//               <div className="mb-6 flex items-baseline gap-4">
//                 <span className="font-serif text-3xl font-bold leading-none text-red-600">FAQ</span>
//                 <h2 className="font-serif text-2xl font-bold leading-tight text-black md:text-[28px]">
//                   Frequently Asked Questions
//                 </h2>
//               </div>
//               <div className="mb-6 h-[2px] w-16 bg-red-600" />

//               <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
//                 {article.faq.map((item, idx) => (
//                   <details key={idx} className="group p-5" open={idx === 0}>
//                     <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-md font-bold text-black">
//                       {item.question}
//                       <FaChevronDown className="flex-shrink-0 text-red-600 transition-transform group-open:rotate-180" size={14} />
//                     </summary>
//                     <p className="mt-3 text-[14px] leading-relaxed text-gray-700">{item.answer}</p>
//                   </details>
//                 ))}
//               </div>
//             </section>

//             {/* Editorial Source Note */}
//             {article.editorialNote && (
//               <section id="editorial-note" className="mb-14 max-w-[760px] scroll-mt-28">
//                 <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6">
//                   <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
//                     Editorial Source Note
//                   </p>
//                   <p className="text-sm italic leading-relaxed text-gray-600">{article.editorialNote}</p>
//                 </div>
//               </section>
//             )}

//             {/* Prev / Next */}
//             <div className="grid grid-cols-1 gap-6 border-t border-gray-200 py-10 md:grid-cols-2">
//               <div className="bg-[#eaeaea]/50 p-5">
//                 <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">Previous article</p>
//                 {prevPost ? (
//                   <Link href={`/${category}/${prevPost.slug}`} title={`Read previous article: ${prevPost.title}`}>
//                     <p className="cursor-pointer text-sm font-bold text-gray-800 hover:text-red-600">
//                       {prevPost.title}
//                     </p>
//                   </Link>
//                 ) : (
//                   <p className="text-sm text-gray-500">No previous article</p>
//                 )}
//               </div>
//               <div className="bg-[#eaeaea]/50 p-5">
//                 <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">Next article</p>
//                 {nextPost ? (
//                   <Link href={`/${category}/${nextPost.slug}`} title={`Read next article: ${nextPost.title}`}>
//                     <p className="cursor-pointer text-sm font-bold text-gray-800 hover:text-red-600">
//                       {nextPost.title}
//                     </p>
//                   </Link>
//                 ) : (
//                   <p className="text-sm text-gray-500">No next article</p>
//                 )}
//               </div>
//             </div>

//             <div className="h-px w-full bg-gray-200" />

//             {/* Author Section — uses the real business-category author from authors.json */}
//             {authorInfo && (
//               <div className="flex flex-col items-center gap-6 py-10 lg:flex-row">
//                 <div className="flex-shrink-0">
//                   <div className="relative h-20 w-20 overflow-hidden rounded-full lg:h-25 lg:w-25">
//                     <Image
//                       src={authorInfo.profileImage}
//                       alt={`${authorInfo.name} profile picture`}
//                       fill
//                       sizes="80px"
//                       className="object-cover"
//                       loading="lazy"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex-1 text-center lg:text-left">
//                   <Link href={`/author/${slugify(authorInfo.name)}`} title={`View ${authorInfo.name}'s author page`}>
//                     <h2 className="mb-1 text-2xl font-bold text-gray-900 hover:text-red-600">
//                       {authorInfo.name}
//                     </h2>
//                   </Link>

//                   <p className="mb-4 text-sm leading-relaxed text-gray-700">{authorInfo.bio}</p>

//                   <div className="flex justify-center gap-3 lg:justify-start lg:gap-6">
//                     {authorInfo.social?.twitter && (
//                       <a
//                         href={authorInfo.social.twitter}
//                         className="transition hover:text-red-500"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title={`Follow ${authorInfo.name} on Twitter`}
//                         aria-label={`Follow ${authorInfo.name} on Twitter`}
//                       >
//                         <FaXTwitter size={15} />
//                       </a>
//                     )}
//                     {authorInfo.social?.quora && (
//                       <a
//                         href={authorInfo.social.quora}
//                         className="transition hover:text-red-500"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title={`Follow ${authorInfo.name} on Quora`}
//                         aria-label={`Follow ${authorInfo.name} on Quora`}
//                       >
//                         <FaQuora size={18} />
//                       </a>
//                     )}
//                     {authorInfo.social?.reddit && (
//                       <a
//                         href={authorInfo.social.reddit}
//                         className="transition hover:text-red-500"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title={`Follow ${authorInfo.name} on Reddit`}
//                         aria-label={`Follow ${authorInfo.name} on Reddit`}
//                       >
//                         <FaReddit size={15} />
//                       </a>
//                     )}
//                     {authorInfo.social?.medium && (
//                       <a
//                         href={authorInfo.social.medium}
//                         className="transition hover:text-red-500"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title={`Follow ${authorInfo.name} on Medium`}
//                         aria-label={`Follow ${authorInfo.name} on Medium`}
//                       >
//                         <SiMedium size={15} />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="h-px w-full bg-gray-200" />
//           </main>

//           {/* Right Sidebar — starts at the top now, alongside the hero */}
//           <div className="w-full lg:w-1/4 bg-gray-100/50 p-5">
//             <div className="space-y-6 lg:sticky lg:top-20">
//               {/* Share Post Card */}
//               <div className="flex flex-col items-center rounded-lg bg-white px-15 py-10 shadow-xl">
//                 <h2 className="mb-4 font-bold uppercase tracking-wide text-gray-800">Share Post :</h2>
//                 <div className="flex gap-2">
//                   <a
//                     href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="cursor-pointer rounded bg-red-600 p-3 text-white transition hover:bg-red-500"
//                     title="Share on Facebook"
//                     aria-label="Share on Facebook"
//                   >
//                     <FaFacebookF size={14} />
//                   </a>
//                   <a
//                     href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="cursor-pointer rounded bg-red-600 p-3 text-white transition hover:bg-red-500"
//                     title="Share on Twitter"
//                     aria-label="Share on Twitter"
//                   >
//                     <FaTwitter size={14} />
//                   </a>
//                   <a
//                     href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${shareTitle}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="cursor-pointer rounded bg-red-600 p-3 text-white transition hover:bg-red-500"
//                     title="Share on Pinterest"
//                     aria-label="Share on Pinterest"
//                   >
//                     <FaPinterestP size={14} />
//                   </a>
//                   <a
//                     href={`https://wa.me/?text=${shareTitle}%20${encodedUrl}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="cursor-pointer rounded bg-red-600 p-3 text-white transition hover:bg-red-500"
//                     title="Share on WhatsApp"
//                     aria-label="Share on WhatsApp"
//                   >
//                     <FaWhatsapp size={14} />
//                   </a>
//                 </div>
//               </div>

//               <SubscribeBox />

//               {/* Advertisement Image */}
//               <div className="mt-6 text-center text-white">
//                 <div className="relative mx-auto mb-4 h-110 w-75 lg:w-70">
//                   <Image
//                     src="/images/read_more_about_ads.webp"
//                     alt="Advertisement"
//                     fill
//                     sizes="(max-width: 1024px) 300px, 280px"
//                     className="object-cover"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>

//               {/* Popular Section */}
//               <div className="mt-7">
//                 <h2 className="mb-2 text-2xl font-bold">Popular</h2>
//                 <div className="mb-4 h-1 w-full bg-red-600" />

//                 <div className="space-y-4">
//                   {popularArticles.map((item) => (
//                     <Link key={item.slug} href={`/${item.category}/${item.slug}`} title={`Read: ${item.title}`}>
//                       <div className="group mb-2 flex cursor-pointer gap-3">
//                         <div className="relative h-16 w-20 flex-shrink-0">
//                           <Image
//                             src={item.image}
//                             alt={item.imageAlt}
//                             fill
//                             sizes="80px"
//                             className="object-cover transition-transform duration-300 group-hover:scale-105"
//                             loading="lazy"
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-xs font-bold line-clamp-3 transition-colors group-hover:text-red-600">
//                             {item.type !== "normal" && (
//                               <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold uppercase text-white">
//                                 {item.type}
//                               </span>
//                             )}
//                             {item.title}
//                           </h3>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Articles */}
//       {relatedArticles.length > 0 && (
//         <div className="border-t border-gray-200 bg-[#eaeaea]/30 py-14">
//           <div className="mx-auto max-w-7xl px-4 lg:px-7">
//             <h2 className="mb-8 text-center font-serif text-3xl font-bold text-black">More Like This</h2>
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//               {relatedArticles.map((item) => (
//                 <div key={item.slug} className="group">
//                   <Link href={`/${item.category}/${item.slug}`} title={`Read: ${item.title}`}>
//                     <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded">
//                       <Image
//                         src={item.image}
//                         alt={item.imageAlt || item.title}
//                         fill
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                         className="object-cover transition-transform duration-300 group-hover:scale-105"
//                         loading="lazy"
//                       />
//                     </div>
//                   </Link>
//                   <span className="text-xs font-bold uppercase tracking-wide text-red-600">{item.category}</span>
//                   <Link href={`/${item.category}/${item.slug}`} title={`Read: ${item.title}`}>
//                     <h3 className="mt-2 mb-3 font-serif text-base font-bold leading-snug text-black transition-colors group-hover:text-red-600">
//                       {item.title}
//                     </h3>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaBriefcase,
  FaCalendarDays,
  FaBuilding,
  FaGraduationCap,
  FaUsers,
  FaShieldHeart,
  FaXTwitter,
  FaReddit,
  FaQuora,
  FaChevronDown,
} from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { slugify } from "@/utils/slugify";
import SubscribeBox from "@/components/articlepagecomponents/SubscribeBox";

const ICONS = {
  briefcase: FaBriefcase,
  calendar: FaCalendarDays,
  building: FaBuilding,
  "graduation-cap": FaGraduationCap,
  users: FaUsers,
};

const SITE_URL = "https://www.read-more-about.com";

export default function ClientArticle({
  article,
  authorInfo,
  category = "business",
  prevPost = null,
  nextPost = null,
  relatedArticles = [],
  popularArticles = [],
}) {
  const [activeId, setActiveId] = useState("introduction");

  const onPageLinks = [
    { id: "introduction", label: "Introduction" },
    { id: "at-a-glance", label: "At a Glance" },
    ...article.sections.map((s) => ({ id: s.id, label: s.title })),
    { id: "faq", label: "FAQ" },
    { id: "editorial-note", label: "Editorial Source Note" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-140px 0px -70% 0px", threshold: 0 }
    );

    onPageLinks.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shareUrl = `${SITE_URL}/${category}/${article.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent(article.title);

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1280px] px-4 pt-6 lg:px-7">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" title="Home page" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/${category}`} className="capitalize hover:text-red-600" title={`${category} page`}>
                {category}
              </Link>
            </li>
            <li>/</li>
            <li className="line-clamp-1 text-gray-600">{article.title}</li>
          </ol>
        </nav>
      </div>

      {/* Content Wrapper */}
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 lg:px-7">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main Article */}
          <main className="w-full font-serif lg:w-3/4" itemScope itemType="https://schema.org/NewsArticle">
            <meta itemProp="headline" content={article.title} />
            <meta itemProp="description" content={article.excerpt} />

            {/* Hero */}
            <section className="mb-6 max-w-[760px] border-b border-gray-200 pb-6">
              <div className=" items-start gap-5 sm:grid-cols-[1fr_160px]">
                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600" />
                    {article.sectionLabel || "People / Executive Profiles"}
                  </p>
                  <h1 className="font-serif text-2xl font-bold leading-[1.2] text-black md:text-[28px] lg:text-3xl">
                    {article.title}
                  </h1>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-600 md:text-base">
                    {article.excerpt}
                  </p>

                  {/* Metadata row */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      {authorInfo?.profileImage && (
                        <div className="relative h-7 w-7 overflow-hidden rounded-full">
                          <Image src={authorInfo.profileImage} alt={authorInfo.name} fill sizes="28px" className="object-cover" />
                        </div>
                      )}
                      <span>
                        By{" "}
                        <Link
                          href={`/author/${slugify(authorInfo?.name || "")}`}
                          title={`View ${authorInfo?.name}'s author page`}
                          className="font-semibold text-red-600 hover:underline"
                        >
                          {authorInfo?.name}
                        </Link>
                      </span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <span>{article.date}</span>
                    {article.updatedDate && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span>Updated {article.updatedDate}</span>
                      </>
                    )}
                    <span className="text-gray-300">•</span>
                    <span>{article.readingTime}</span>
                    {article.factChecked && (
                      <>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1.5 text-black">
                          <FaShieldHeart className="text-red-600" size={12} />
                          Fact Checked
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Executive Portrait placeholder */}
              </div>
            </section>

            {/* Featured Image */}
            {article.introImagecaption && (
              <figure className="mb-5">
                <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[420px]">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-sm italic text-gray-500">
                  {article.introImagecaption.caption}
                </figcaption>
              </figure>
            )}

            {/* Inline "On This Page" */}
            <nav aria-label="On this page" className="mb-5 border-y border-gray-200 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                On This Page
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                {onPageLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-xs transition-colors ${
                      activeId === item.id
                        ? "font-semibold text-red-600"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Introduction */}
            <section id="introduction" className="max-w-[760px] scroll-mt-28">
              {article.introduction.map((para, idx) => (
                <p
                  key={idx}
                  className={`mb-3 text-[15px] leading-[1.6] text-black ${
                    idx === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-red-600"
                      : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </section>

            {/* At A Glance Card */}
            <section id="at-a-glance" className="my-6 max-w-[760px] scroll-mt-28">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-sm font-bold uppercase tracking-wide text-black">
                    At a Glance
                  </span>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {article.atAGlance.map((item, idx) => {
                    const Icon = ICONS[item.icon] || FaBriefcase;
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                          <Icon size={14} />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-sm font-medium leading-snug text-black">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Numbered Sections */}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-8 max-w-[760px] scroll-mt-28">
                <div className="mb-3 flex items-baseline gap-4">
                  <span className="font-serif text-3xl font-bold leading-none text-red-600">
                    {section.number}
                  </span>
                  <h2 className="font-serif text-2xl font-bold leading-tight text-black md:text-[23px]">
                    {section.title}
                  </h2>
                </div>
                <div className="mb-4 h-[2px] w-16 bg-red-600" />

                {section.paragraphs.map((para, idx) => (
                  <p key={idx} className="mb-3 text-justify text-[15px] leading-[1.6] text-black">
                    {para}
                  </p>
                ))}

                {section.list && (
                  <div className="my-4">
                    {section.list.intro && (
                      <p className="mb-2 text-[15px] leading-[1.6] text-black">{section.list.intro}</p>
                    )}
                    <ul className="space-y-1.5 border-l-2 border-red-600/30 pl-5">
                      {section.list.items.map((li, i) => (
                        <li key={i} className="text-[14px] leading-relaxed text-black">
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.paragraphsAfterList?.map((para, idx) => (
                  <p key={`after-${idx}`} className="mb-3 text-justify text-[15px] leading-[1.6] text-black">
                    {para}
                  </p>
                ))}

                {section.callout && (
                  <div className="my-4 rounded-r-lg border-l-4 border-red-600 bg-red-50/60 p-5">
                    <p className="text-[15px] leading-relaxed text-gray-700">{section.callout.text}</p>
                  </div>
                )}

                {section.pullQuote && (
                  <blockquote className="my-5 border-l-4 border-red-600 py-1 pl-6">
                    <p className="font-serif text-lg italic leading-snug text-black">
                      &ldquo;{section.pullQuote}&rdquo;
                    </p>
                  </blockquote>
                )}

                {section.highlightBox && (
                  <div className="my-4 rounded-lg bg-black p-6 text-white md:p-8">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-500">
                      {section.highlightBox.title}
                    </p>
                    <p className="text-[14px] leading-relaxed text-gray-100">
                      {section.highlightBox.text}
                    </p>
                  </div>
                )}

                {section.image && (
                  <figure className="my-4">
                    <div className="relative h-[280px] w-full overflow-hidden rounded-lg md:h-[380px]">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 760px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    {section.image.caption && (
                      <figcaption className="mt-2 text-sm italic text-gray-500">{section.image.caption}</figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}

            {/* FAQ */}
            <section id="faq" className="mb-8 max-w-[760px] scroll-mt-28">
              <div className="mb-4 flex items-baseline gap-4">
                <span className="font-serif text-3xl font-bold leading-none text-red-600">FAQ</span>
                <h2 className="font-serif text-2xl font-bold leading-tight text-black md:text-[28px]">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="mb-4 h-[2px] w-16 bg-red-600" />

              <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
                {article.faq.map((item, idx) => (
                  <details key={idx} className="group p-5" open={idx === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-md font-bold text-black">
                      {item.question}
                      <FaChevronDown className="flex-shrink-0 text-red-600 transition-transform group-open:rotate-180" size={14} />
                    </summary>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Editorial Source Note */}
            {article.editorialNote && (
              <section id="editorial-note" className="mb-8 max-w-[760px] scroll-mt-28">
                <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                    Editorial Source Note
                  </p>
                  <p className="text-sm italic leading-relaxed text-gray-600">{article.editorialNote}</p>
                </div>
              </section>
            )}

            {/* Prev / Next */}
            <div className="grid grid-cols-1 gap-6 border-t border-gray-200 py-6 md:grid-cols-2">
              <div className="bg-[#eaeaea]/50 p-5">
                <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">Previous article</p>
                {prevPost ? (
                  <Link href={`/${category}/${prevPost.slug}`} title={`Read previous article: ${prevPost.title}`}>
                    <p className="cursor-pointer text-sm font-bold text-gray-800 hover:text-red-600">
                      {prevPost.title}
                    </p>
                  </Link>
                ) : (
                  <p className="text-sm text-gray-500">No previous article</p>
                )}
              </div>
              <div className="bg-[#eaeaea]/50 p-5">
                <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">Next article</p>
                {nextPost ? (
                  <Link href={`/${category}/${nextPost.slug}`} title={`Read next article: ${nextPost.title}`}>
                    <p className="cursor-pointer text-sm font-bold text-gray-800 hover:text-red-600">
                      {nextPost.title}
                    </p>
                  </Link>
                ) : (
                  <p className="text-sm text-gray-500">No next article</p>
                )}
              </div>
            </div>

            <div className="h-px w-full bg-gray-200" />

            {/* Author Section */}
            {authorInfo && (
              <div className="flex flex-col items-center gap-6 py-6 lg:flex-row">
                <div className="flex-shrink-0">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full lg:h-25 lg:w-25">
                    <Image
                      src={authorInfo.profileImage}
                      alt={`${authorInfo.name} profile picture`}
                      fill
                      sizes="80px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <Link href={`/author/${slugify(authorInfo.name)}`} title={`View ${authorInfo.name}'s author page`}>
                    <h2 className="mb-1 text-2xl font-bold text-gray-900 hover:text-red-600">
                      {authorInfo.name}
                    </h2>
                  </Link>

                  <p className="mb-4 text-sm leading-relaxed text-gray-700">{authorInfo.bio}</p>

                  <div className="flex justify-center gap-3 lg:justify-start lg:gap-6">
                    {authorInfo.social?.twitter && (
                      <a
                        href={authorInfo.social.twitter}
                        className="transition hover:text-red-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Follow ${authorInfo.name} on Twitter`}
                        aria-label={`Follow ${authorInfo.name} on Twitter`}
                      >
                        <FaXTwitter size={15} />
                      </a>
                    )}
                    {authorInfo.social?.quora && (
                      <a
                        href={authorInfo.social.quora}
                        className="transition hover:text-red-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Follow ${authorInfo.name} on Quora`}
                        aria-label={`Follow ${authorInfo.name} on Quora`}
                      >
                        <FaQuora size={18} />
                      </a>
                    )}
                    {authorInfo.social?.reddit && (
                      <a
                        href={authorInfo.social.reddit}
                        className="transition hover:text-red-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Follow ${authorInfo.name} on Reddit`}
                        aria-label={`Follow ${authorInfo.name} on Reddit`}
                      >
                        <FaReddit size={15} />
                      </a>
                    )}
                    {authorInfo.social?.medium && (
                      <a
                        href={authorInfo.social.medium}
                        className="transition hover:text-red-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Follow ${authorInfo.name} on Medium`}
                        aria-label={`Follow ${authorInfo.name} on Medium`}
                      >
                        <SiMedium size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="h-px w-full bg-gray-200" />
          </main>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/4 bg-gray-100/50 p-5">
            <div className="space-y-6 lg:sticky lg:top-20">
              {/* Share Post Card */}
              <div className="flex flex-col items-center rounded-lg bg-white px-15 py-10 shadow-xl">
                <h2 className="mb-4 font-bold uppercase tracking-wide text-gray-800">Share Post :</h2>
                <div className="flex gap-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded bg-red-600 p-3 text-white transition hover:bg-red-500"
                    title="Share on Facebook"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded bg-red-600 p-3 text-white transition hover:bg-red-500"
                    title="Share on Twitter"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded bg-red-600 p-3 text-white transition hover:bg-red-500"
                    title="Share on Pinterest"
                    aria-label="Share on Pinterest"
                  >
                    <FaPinterestP size={14} />
                  </a>
                  <a
                    href={`https://wa.me/?text=${shareTitle}%20${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded bg-red-600 p-3 text-white transition hover:bg-red-500"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp size={14} />
                  </a>
                </div>
              </div>

              <SubscribeBox />

              {/* Advertisement Image */}
              <div className="mt-6 text-center text-white">
                <div className="relative mx-auto mb-4 h-110 w-75 lg:w-70">
                  <Image
                    src="/images/read_more_about_ads.webp"
                    alt="Advertisement"
                    fill
                    sizes="(max-width: 1024px) 300px, 280px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Popular Section */}
              <div className="mt-7">
                <h2 className="mb-2 text-2xl font-bold">Popular</h2>
                <div className="mb-4 h-1 w-full bg-red-600" />

                <div className="space-y-4">
                  {popularArticles.map((item) => (
                    <Link key={item.slug} href={`/${item.category}/${item.slug}`} title={`Read: ${item.title}`}>
                      <div className="group mb-2 flex cursor-pointer gap-3">
                        <div className="relative h-16 w-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="80px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xs font-bold line-clamp-3 transition-colors group-hover:text-red-600">
                            {item.type !== "normal" && (
                              <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold uppercase text-white">
                                {item.type}
                              </span>
                            )}
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-gray-200 bg-[#eaeaea]/30 py-14">
          <div className="mx-auto max-w-7xl px-4 lg:px-7">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-black">More Like This</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedArticles.map((item) => (
                <div key={item.slug} className="group">
                  <Link href={`/${item.category}/${item.slug}`} title={`Read: ${item.title}`}>
                    <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <span className="text-xs font-bold uppercase tracking-wide text-red-600">{item.category}</span>
                  <Link href={`/${item.category}/${item.slug}`} title={`Read: ${item.title}`}>
                    <h3 className="mt-2 mb-3 font-serif text-base font-bold leading-snug text-black transition-colors group-hover:text-red-600">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}