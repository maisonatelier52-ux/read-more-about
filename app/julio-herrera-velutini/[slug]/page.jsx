// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import categorypagedata from "../../../public/data/articles.json";
// import authorsPageData from "../../../public/data/authors.json";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp } from "react-icons/fa";
// import { slugify } from "@/utils/slugify";
// import SubscribeBox from "@/components/articlepagecomponents/SubscribeBox";

// const SITE_URL = "https://www.read-more-about.com";
// const PILLAR_BASE = "julio-herrera-velutini";

// const CLIENT_NEWS_SLUG = "trump-grants-pardon-julio-herrera-velutini-ending-federal-case";

// const parseDate = (dateStr) => {
//   const [day, month, year] = dateStr.split("/");
//   return new Date(year, month - 1, day);
// };

// const formatDate = (dateString) => {
//   const [day, month, year] = dateString.split("/");
//   const date = new Date(year, month - 1, day);
//   return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
// };

// // Get all pillar news articles — now from politics category
// const getAllPillarArticles = () => {
//   const result = [];
//   Object.keys(categorypagedata).forEach((category) => {
//     (categorypagedata[category] || []).forEach((article) => {
//       if (article.newsType === "pillar news") {
//         result.push({ ...article, category });
//       }
//     });
//   });
//   return result;
// };

// // Get the client news article — now from politics category
// const getClientNewsArticle = () =>
//   (categorypagedata["politics"] || []).find(
//     (a) => a.slug === CLIENT_NEWS_SLUG && a.newsType === "client news"
//   );

// const getLatestFromDifferentCategories = (currentCategory, limit = 5) => {
//   const categories = Object.keys(categorypagedata).filter(
//     (cat) => cat.toLowerCase() !== currentCategory.toLowerCase()
//   );
//   const latestArticles = [];
//   categories.forEach((category) => {
//     const articles = categorypagedata[category];
//     if (articles && articles.length > 0) {
//       const sorted = [...articles].sort((a, b) => parseDate(b.date) - parseDate(a.date));
//       latestArticles.push({ ...sorted[0], category });
//     }
//   });
//   return latestArticles.sort((a, b) => parseDate(b.date) - parseDate(a.date)).slice(0, limit);
// };

// const renderContent = (item, index) => {
//   switch (item.type) {
//     case "paragraph":
//       return <p key={index} className="text-gray-700 leading-relaxed mb-6">{item.text}</p>;
//     case "heading": {
//       const HeadingTag = `h${item.level}`;
//       const headingClasses = `text-red-600 ${item.level === 2 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} font-bold text-center italic my-8`;
//       return <HeadingTag key={index} className={headingClasses}>{item.text}</HeadingTag>;
//     }
//     case "image":
//       return (
//         <div key={index} className="relative w-full h-[270px] md:h-[500px] mb-6">
//           <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px" className="object-cover rounded-lg" quality={74} loading="lazy" />
//         </div>
//       );
//     default:
//       return null;
//   }
// };

// // ── Static JSX for client news ──────────────────────────────────────────────
// const ClientNewsContent = () => (
//   <>
//     <p className="text-gray-700 leading-relaxed mb-6">
//       A federal case against Venezuelan-British billionaire banker{" "}
//       <a href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Julio Herrera Velutini - Wikipedia">
//         Julio Herrera Velutini
//       </a>{" "}
//       came to an end in January 2026, when President Donald Trump granted him a full pardon. The proceedings had run for close to four years and centered on alleged corruption tied to{" "}
//       <a href="https://en.wikipedia.org/wiki/Puerto_Rico" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Puerto Rico - Wikipedia">
//         Puerto Rico
//       </a>
//       's banking regulatory system.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       Former Puerto Rico Governor Wanda Vázquez Garced and former{" "}
//       <a href="https://en.wikipedia.org/wiki/Federal_Bureau_of_Investigation" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="FBI - Wikipedia">
//         FBI
//       </a>{" "}
//       agent Mark Rossini were pardoned at the same time. They had been named as co-defendants in the same federal indictment. None of the three ever admitted to the core allegations against them.
//     </p>

//     <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
//       The Charges, As Prosecutors Laid Them Out
//     </h2>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       When federal prosecutors filed the indictment in August 2022, they alleged an exchange involving political contributions and regulatory influence. According to court documents, Herrera Velutini and Rossini allegedly arranged financial support for Vázquez Garced's 2020 gubernatorial campaign. In return, prosecutors alleged, the governor was to use her position to remove a senior official at Puerto Rico's Office of the Commissioner of{" "}
//       <a href="https://en.wikipedia.org/wiki/Financial_regulation" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Financial regulation - Wikipedia">
//         Financial Institutions
//       </a>{" "}
//       — an agency that, at the time, was examining Bancrédito International Bank and Trust Corporation, a bank linked to Herrera Velutini.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       The charges listed included conspiracy,{" "}
//       <a href="https://en.wikipedia.org/wiki/Bribery" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Bribery - Wikipedia">
//         bribery
//       </a>
//       , and wire fraud — offenses that, under U.S. federal law, carry the possibility of substantial prison time. All three defendants denied the allegations throughout the proceedings.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       Separately, federal regulators later penalized Bancrédito for anti-money-laundering compliance failures, according to enforcement records reported by Byline Times. That regulatory matter was a civil enforcement action, independent of the criminal proceedings, and resulted in no criminal convictions against any of the defendants.
//     </p>

//     <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
//       From Felony Indictment to Misdemeanor Plea
//     </h2>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       The case changed significantly over time. According to the{" "}
//       <a href="https://en.wikipedia.org/wiki/Campaign_Legal_Center" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Campaign Legal Center - Wikipedia">
//         Campaign Legal Center
//       </a>
//       , by mid-2025 prosecutors had reached a plea agreement under which the defendants pleaded guilty to a single misdemeanor count related to campaign finance. The original felony charges were not pursued.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       The federal judge assigned to the case commented on the leniency of the arrangement, according to reports from that period. Trump signed the pardons in January 2026, after which the judge formally dismissed all proceedings.
//     </p>

//     <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
//       Official Responses to the Pardon
//     </h2>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       White House officials, speaking to Bloomberg Law among other outlets, defended the pardons by questioning the legitimacy of the original prosecution. They pointed to a specific detail: the investigation into Vázquez Garced reportedly began approximately ten days after she publicly endorsed Trump during the{" "}
//       <a href="https://en.wikipedia.org/wiki/2020_United_States_presidential_election" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="2020 US Presidential Election - Wikipedia">
//         2020 presidential campaign
//       </a>
//       . That timing, officials argued, suggested political motivation rather than genuine legal concern.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       Herrera Velutini's legal team welcomed the outcome. A statement quoted by Bloomberg Law described him as deeply grateful to the president and said he looked forward to focusing on his family and professional commitments.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       Not all officials shared that view. Puerto Rico's non-voting representative in Congress, Pablo José Hernández, was direct in his criticism. Bloomberg Law quoted him as saying: "Impunity protects and fosters corruption. The pardon granted to former Governor Wanda Vázquez undermines public integrity, shatters faith in justice, and offends those of us who believe in honest governance."
//     </p>

//     <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
//       Watchdog Groups Raise Questions Over Donations
//     </h2>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       Political donations made by Herrera Velutini's daughter in the period before the pardons were issued were later examined by watchdog organizations.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       <a href="https://en.wikipedia.org/wiki/Federal_Election_Commission" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Federal Election Commission - Wikipedia">
//         Federal Election Commission
//       </a>{" "}
//       filings cited by the Campaign Legal Center show that Isabela Herrera donated $2.5 million to MAGA Inc. — a{" "}
//       <a href="https://en.wikipedia.org/wiki/Super_PAC" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Super PAC - Wikipedia">
//         super PAC
//       </a>{" "}
//       aligned with President Trump — in December 2024, followed by a further $1 million in July 2025. The two contributions totaled $3.5 million. The Campaign Legal Center noted that her only prior recorded political donation was $20 to a Democratic presidential campaign.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       In March 2026, the Campaign Legal Center submitted a formal 16-page complaint to the Federal Election Commission. The group alleged that Herrera Velutini — legally prohibited from contributing to U.S. elections as a{" "}
//       <a href="https://en.wikipedia.org/wiki/Foreign_national" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Foreign national - Wikipedia">
//         foreign national
//       </a>{" "}
//       under federal{" "}
//       <a href="https://en.wikipedia.org/wiki/Campaign_finance_in_the_United_States" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Campaign finance law - Wikipedia">
//         campaign finance law
//       </a>{" "}
//       — may have been the actual source of the funds, with his daughter's name used to make the donations. Routing political money through another person's name, a practice known as a straw donor arrangement, is prohibited under U.S. law.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       As of the date of publication, the FEC had issued no ruling or enforcement action on the complaint. The complaint named no violation by President Trump or MAGA Inc. Herrera Velutini had not issued a public statement in response to the allegations.
//     </p>

//     <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
//       Who Is Julio Herrera Velutini
//     </h2>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       Herrera Velutini's family has been involved in banking for more than two centuries, with ties to major financial institutions across{" "}
//       <a href="https://en.wikipedia.org/wiki/Latin_America" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Latin America - Wikipedia">
//         Latin America
//       </a>
//       . He was educated in Venezuela and London before beginning his career at the{" "}
//       <a href="https://en.wikipedia.org/wiki/Caracas_Stock_Exchange" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Caracas Stock Exchange - Wikipedia">
//         Caracas Stock Exchange
//       </a>
//       , after which he spent several decades working in European and international financial markets.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       In 2012, he founded{" "}
//       <a href="https://en.wikipedia.org/wiki/Wealth_management" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Wealth management - Wikipedia">
//         Britannia Financial Group
//       </a>
//       , a private banking and wealth management firm. His institutions have incorporated technologies including artificial intelligence and blockchain into their operations. Outside of business, he has contributed to charitable causes covering healthcare, education, disaster relief, and the arts.
//     </p>

//     <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
//       Broader Context
//     </h2>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       The case has drawn attention to ongoing debates around{" "}
//       <a href="https://en.wikipedia.org/wiki/Pardon" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Presidential pardon - Wikipedia">
//         presidential pardon
//       </a>{" "}
//       authority and the enforcement of U.S. campaign finance law. Watchdog organizations, including the Campaign Legal Center, have argued the circumstances warrant regulatory review. Supporters of the pardon decision have maintained the original prosecution lacked legal justification from the outset.
//     </p>

//     <p className="text-gray-700 leading-relaxed mb-6">
//       The federal case is now closed. Herrera Velutini is expected to return his focus to his banking operations and philanthropic commitments.
//     </p>
//   </>
// );

// export async function generateStaticParams() {
//   const pillarSlugs = getAllPillarArticles().map((a) => ({ slug: a.slug }));
//   return [{ slug: CLIENT_NEWS_SLUG }, ...pillarSlugs];
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const article =
//     slug === CLIENT_NEWS_SLUG
//       ? getClientNewsArticle()
//       : getAllPillarArticles().find((a) => a.slug === slug);

//   if (!article) notFound();

//   return {
//     title: article.metaTitle,
//     description: article.metaDescription,
//     keywords: article.keywords?.join(", "),
//     alternates: { canonical: `${SITE_URL}/${PILLAR_BASE}/${slug}` },
//     openGraph: {
//       title: article.metaTitle,
//       description: article.metaDescription,
//       url: `${SITE_URL}/${PILLAR_BASE}/${slug}`,
//       siteName: "Read More About",
//       images: [{ url: `${SITE_URL}${article.image}`, width: 1200, height: 630, alt: article.imageAlt || article.title }],
//       type: "article",
//       publishedTime: new Date(article.date.split("/").reverse().join("-")).toISOString(),
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.metaTitle,
//       description: article.metaDescription,
//       images: [`${SITE_URL}${article.image}`],
//       creator: "@readmoreabout",
//       site: "@readmoreabout",
//     },
//   };
// }

// export default async function JulioHerreraArticlePage({ params }) {
//   const { slug } = await params;
//   const isClientNews = slug === CLIENT_NEWS_SLUG;
//   const pillarArticles = getAllPillarArticles();

//   const article = isClientNews
//     ? getClientNewsArticle()
//     : pillarArticles.find((a) => a.slug === slug);

//   if (!article) notFound();

//   // Author now comes from politics category
//   const category = "politics";
//   const authorData = authorsPageData.categories.find(
//     (item) => item.category.toLowerCase() === category.toLowerCase()
//   )?.author;

//   if (!authorData) notFound();

//   const currentPillarIndex = isClientNews ? -1 : pillarArticles.findIndex((a) => a.slug === slug);
//   const prevPost = !isClientNews && currentPillarIndex > 0 ? pillarArticles[currentPillarIndex - 1] : null;
//   const nextPost = !isClientNews && currentPillarIndex < pillarArticles.length - 1 ? pillarArticles[currentPillarIndex + 1] : null;

//   const relatedArticles = isClientNews
//     ? pillarArticles.slice(0, 4)
//     : pillarArticles.filter((a) => a.slug !== slug).slice(0, 4);

//   const popularArticles = isClientNews
//     ? getLatestFromDifferentCategories(category, 5)
//     : (categorypagedata[category] || [])
//         .filter((a) => a.newsType !== "pillar news" && a.slug !== slug)
//         .sort((a, b) => parseDate(b.date) - parseDate(a.date))
//         .slice(0, 5);

//   const shareUrl = `${SITE_URL}/${PILLAR_BASE}/${slug}`;
//   const encodedUrl = encodeURIComponent(shareUrl);
//   const shareTitle = encodeURIComponent(article.title);

//   const articleJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     headline: article.title,
//     description: article.excerpt,
//     image: [article.image],
//     datePublished: new Date(article.date.split("/").reverse().join("-")).toISOString(),
//     dateModified: new Date(article.date.split("/").reverse().join("-")).toISOString(),
//     author: { "@type": "Person", name: authorData.name, url: `${SITE_URL}/author/${slugify(authorData.name)}` },
//     publisher: { "@type": "Organization", name: "Read More About", logo: { "@type": "ImageObject", url: `${SITE_URL}/images/read-more-about-logo.webp` } },
//     mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${PILLAR_BASE}/${slug}` },
//     articleSection: category,
//     keywords: article.keywords?.join(", ") || "",
//   };

//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//       { "@type": "ListItem", position: 2, name: "Politics", item: `${SITE_URL}/politics` },
//       { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/${PILLAR_BASE}/${slug}` },
//     ],
//   };

//   return (
//     <>
//       <link rel="preload" as="image" href={article.image} fetchPriority="high" />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

//       <div className="w-full" itemScope itemType="https://schema.org/NewsArticle">
//         <meta itemProp="headline" content={article.title} />
//         <meta itemProp="description" content={article.excerpt} />
//         <meta itemProp="image" content={`${SITE_URL}${article.image}`} />
//         <meta itemProp="datePublished" content={new Date(article.date.split("/").reverse().join("-")).toISOString()} />
//         <meta itemProp="dateModified" content={new Date(article.date.split("/").reverse().join("-")).toISOString()} />
//         <meta itemProp="articleSection" content={category} />
//         <meta itemProp="keywords" content={article.keywords?.join(", ")} />
//         <div itemProp="author" itemScope itemType="https://schema.org/Person" style={{ display: "none" }}>
//           <meta itemProp="name" content={authorData.name} />
//           <meta itemProp="url" content={`${SITE_URL}/author/${slugify(authorData.name)}`} />
//         </div>
//         <div itemProp="publisher" itemScope itemType="https://schema.org/Organization" style={{ display: "none" }}>
//           <meta itemProp="name" content="Read More About" />
//           <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
//             <meta itemProp="url" content={`${SITE_URL}/images/read-more-about-logo.webp`} />
//           </div>
//         </div>

//         <div className="px-4 lg:px-7">
//           <div className="px-4 lg:px-7 mt-6">
//             <nav aria-label="Breadcrumb" className="mb-6">
//               <ol className="flex items-center gap-2 text-sm flex-wrap">
//                 <li><Link href="/" title="Home page" className="hover:text-red-600">Home</Link></li>
//                 <li>/</li>
//                 <li><Link href="/politics" title="Politics page" className="hover:text-red-600">Politics</Link></li>
//                 <li>/</li>
//                 <li className="text-gray-600 line-clamp-1">{article.title}</li>
//               </ol>
//             </nav>
//           </div>

//           <div className="relative w-full h-[450px] md:h-[600px] lg:h-[700px] mt-10">
//             <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1536px) 92vw, 1400px" className="object-cover" priority fetchPriority="high" quality={78} placeholder="blur" blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=" />
//             <div className="absolute inset-0 bg-black/30" />
//             <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-4 pb-8 md:pb-12">
//               <p className="text-white text-sm md:text-base font-bold tracking-wider mb-4 uppercase">Politics</p>
//               <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold text-center max-w-5xl leading-tight font-serif" itemProp="headline">{article.title}</h1>
//             </div>
//           </div>
//         </div>

//         <div className="w-full bg-white px-4 lg:px-7">
//           <div className="max-w-4xl mx-auto px-4 py-6">
//             <div className="flex items-center justify-center gap-3 text-black text-sm md:text-base mb-6">
//               <span className="font-semibold">
//                 By:{" "}
//                 <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
//                   <span className="hover:text-red-500 cursor-pointer" itemProp="author" itemScope itemType="https://schema.org/Person">
//                     <span itemProp="name">{authorData.name}</span>
//                   </span>
//                 </Link>
//               </span>
//               <span className="text-gray-700">|</span>
//               <span className="font-semibold">
//                 Date:{" "}
//                 <time itemProp="datePublished" dateTime={new Date(article.date.split("/").reverse().join("-")).toISOString()}>
//                   {formatDate(article.date)}
//                 </time>
//               </span>
//             </div>
//           </div>
//           <div className="w-full h-px bg-gray-200" />
//         </div>

//         <div className="max-w-7xl mx-auto py-8">
//           <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-7">
//             <div className="w-full lg:w-3/4 font-serif" itemProp="articleBody">
//               {isClientNews
//                 ? <ClientNewsContent />
//                 : article.content.map((item, index) => renderContent(item, index))
//               }

//               {/* Prev / Next — pillar articles only */}
//               {!isClientNews && (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 p-6 rounded-lg">
//                   <div className="bg-[#eaeaea]/50 p-5">
//                     <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Previous article</p>
//                     {prevPost ? (
//                       <Link href={`/${PILLAR_BASE}/${prevPost.slug}`} title={`Read: ${prevPost.title}`}>
//                         <p className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">{prevPost.title}</p>
//                       </Link>
//                     ) : (
//                       <p className="text-gray-500 text-sm">No previous article</p>
//                     )}
//                   </div>
//                   <div className="bg-[#eaeaea]/50 p-5">
//                     <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Next article</p>
//                     {nextPost ? (
//                       <Link href={`/${PILLAR_BASE}/${nextPost.slug}`} title={`Read: ${nextPost.title}`}>
//                         <p className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">{nextPost.title}</p>
//                       </Link>
//                     ) : (
//                       <p className="text-gray-500 text-sm">No next article</p>
//                     )}
//                   </div>
//                 </div>
//               )}

//               <div className="w-full h-px bg-gray-200 my-8" />

//               <div className="flex gap-6 items-center flex-col lg:flex-row">
//                 <div className="flex-shrink-0">
//                   <div className="relative w-20 h-20 lg:w-25 lg:h-25 rounded-full overflow-hidden">
//                     <Image src={authorData.profileImage} alt={`${authorData.name} profile picture`} fill sizes="80px" className="object-cover" loading="lazy" />
//                   </div>
//                 </div>
//                 <div className="flex-1 text-center lg:text-left">
//                   <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
//                     <h2 className="text-2xl font-bold text-gray-900 mb-1 hover:text-red-600">{authorData.name}</h2>
//                   </Link>
//                   {authorData.websiteLink && (
//                     <a href={authorData.websiteLink} className="text-blue-600 hover:underline text-sm mb-1 block" target="_blank" rel="noopener noreferrer" title={`Visit ${authorData.name}'s website`}>{authorData.websiteLink}</a>
//                   )}
//                   <p className="text-gray-700 text-sm leading-relaxed mb-4">{authorData.bio}</p>
//                   <div className="flex gap-3 lg:gap-6 justify-center lg:justify-start">
//                     {authorData.social?.twitter && <a href={authorData.social.twitter} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Twitter`} aria-label={`Follow ${authorData.name} on Twitter`}><FaTwitter size={15} /></a>}
//                     {authorData.social?.quora && <a href={authorData.social.quora} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Quora`} aria-label={`Follow ${authorData.name} on Quora`}><FaInstagram size={15} /></a>}
//                     {authorData.social?.reddit && <a href={authorData.social.reddit} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Reddit`} aria-label={`Follow ${authorData.name} on Reddit`}><FaFacebookF size={15} /></a>}
//                     {authorData.social?.medium && <a href={authorData.social.medium} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Medium`} aria-label={`Follow ${authorData.name} on Medium`}><FaYoutube size={15} /></a>}
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full h-px bg-gray-200 my-8" />
//             </div>

//             <div className="w-full lg:w-1/4">
//               <div className="lg:sticky lg:top-4 space-y-6">
//                 <div className="bg-white shadow-xl px-15 py-10 rounded-lg flex flex-col items-center">
//                   <h2 className="text-gray-800 font-bold mb-4 uppercase tracking-wide">Share Post :</h2>
//                   <div className="flex gap-2">
//                     <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Facebook" aria-label="Share on Facebook"><FaFacebookF size={14} /></a>
//                     <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Twitter" aria-label="Share on Twitter"><FaTwitter size={14} /></a>
//                     <a href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Pinterest" aria-label="Share on Pinterest"><FaPinterestP size={14} /></a>
//                     <a href={`https://wa.me/?text=${shareTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on WhatsApp" aria-label="Share on WhatsApp"><FaWhatsapp size={14} /></a>
//                   </div>
//                 </div>
//                 <SubscribeBox />
//                 <div className="mt-6 text-white text-center">
//                   <div className="relative w-75 lg:w-70 h-110 mx-auto mb-4">
//                     <Image src="/images/mirrorstandard_ads.webp" alt="Advertisement" fill sizes="(max-width: 1024px) 300px, 280px" className="object-cover" loading="lazy" />
//                   </div>
//                 </div>
//                 <div className="mt-7">
//                   <h2 className="font-bold text-2xl mb-2">Popular</h2>
//                   <div className="w-full h-1 bg-red-600 mb-4" />
//                   <div className="space-y-4">
//                     {popularArticles.map((item) => (
//                       <Link key={item.slug} href={`/${item.category}/${item.slug}`} title={`Read: ${item.title}`}>
//                         <div className="flex gap-3 group cursor-pointer mb-2">
//                           <div className="relative w-20 h-16 flex-shrink-0">
//                             <Image src={item.image} alt={item.imageAlt} fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="text-xs font-bold group-hover:text-red-600 transition-colors line-clamp-3">
//                               {item.type !== "normal" && <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase">{item.type}</span>}
//                               {item.title}
//                             </h3>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {relatedArticles.length > 0 && (
//             <div className="relative mb-5 pt-10">
//               <div className="max-w-7xl mx-auto px-4 relative mb-8">
//                 <div className="relative">
//                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
//                     <span className="text-7xl md:text-7xl lg:text-7xl font-bold text-gray-50 font-serif uppercase whitespace-nowrap">RELATED</span>
//                   </div>
//                   <h2 className="text-4xl md:text-4xl font-bold text-center mb-0 font-serif relative z-10 py-4">More like this</h2>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="absolute left-0 right-0 bg-[#eaeaea]/40 pointer-events-none h-90 lg:h-130 top:90 lg:top-90" style={{ transform: "translateY(-50%)", bottom: 0, zIndex: 0 }} />
//                 <div className="max-w-7xl mx-auto px-4 lg:px-7 pb-8 relative z-10">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {relatedArticles.map((relatedArticle) => (
//                       <div key={relatedArticle.id} className="group">
//                         <Link href={`/${PILLAR_BASE}/${relatedArticle.slug}`} title={`Read: ${relatedArticle.title}`}>
//                           <div className="relative aspect-[4/3] overflow-hidden mb-4">
//                             <Image src={relatedArticle.image} alt={relatedArticle.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer" loading="lazy" />
//                           </div>
//                         </Link>
//                         <Link href={`/${PILLAR_BASE}/${relatedArticle.slug}`} title={`Read: ${relatedArticle.title}`}>
//                           <h3 className="font-serif text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors cursor-pointer">{relatedArticle.title}</h3>
//                         </Link>
//                         <div className="flex items-center gap-2 text-xs text-gray-600">
//                           <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
//                             <Image src={authorData.profileImage} alt={`${authorData.name} profile picture`} width={24} height={24} sizes="24px" className="object-cover" loading="lazy" />
//                           </div>
//                           <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
//                             <span className="font-medium hover:text-red-600 cursor-pointer">{authorData.name}</span>
//                           </Link>
//                           <span>-</span>
//                           <span>{formatDate(relatedArticle.date)}</span>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import categorypagedata from "../../../public/data/articles.json";
import authorsPageData from "../../../public/data/authors.json";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { slugify } from "@/utils/slugify";
import SubscribeBox from "@/components/articlepagecomponents/SubscribeBox";

const SITE_URL = "https://www.read-more-about.com";
const PILLAR_BASE = "julio-herrera-velutini";

const CLIENT_NEWS_SLUG = "trump-grants-pardon-julio-herrera-velutini-ending-federal-case";

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
};

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

// Get all pillar news articles — now from politics category
const getAllPillarArticles = () => {
  const result = [];
  Object.keys(categorypagedata).forEach((category) => {
    (categorypagedata[category] || []).forEach((article) => {
      if (article.newsType === "pillar news") {
        result.push({ ...article, category });
      }
    });
  });
  return result;
};

// Get the client news article — now from politics category
const getClientNewsArticle = () =>
  (categorypagedata["politics"] || []).find(
    (a) => a.slug === CLIENT_NEWS_SLUG && a.newsType === "client news"
  );

const getLatestFromDifferentCategories = (currentCategory, limit = 5) => {
  const categories = Object.keys(categorypagedata).filter(
    (cat) => cat.toLowerCase() !== currentCategory.toLowerCase()
  );
  const latestArticles = [];
  categories.forEach((category) => {
    const articles = categorypagedata[category];
    if (articles && articles.length > 0) {
      const sorted = [...articles].sort((a, b) => parseDate(b.date) - parseDate(a.date));
      latestArticles.push({ ...sorted[0], category });
    }
  });
  return latestArticles.sort((a, b) => parseDate(b.date) - parseDate(a.date)).slice(0, limit);
};

const renderContent = (item, index) => {
  switch (item.type) {
    case "paragraph":
      return <p key={index} className="text-gray-700 leading-relaxed mb-6">{item.text}</p>;
    case "heading": {
      const HeadingTag = `h${item.level}`;
      const headingClasses = `text-red-600 ${item.level === 2 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} font-bold text-center italic my-8`;
      return <HeadingTag key={index} className={headingClasses}>{item.text}</HeadingTag>;
    }
    case "image":
      return (
        <div key={index} className="relative w-full h-[270px] md:h-[500px] mb-6">
          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px" className="object-cover rounded-lg" quality={74} loading="lazy" />
        </div>
      );
    default:
      return null;
  }
};

// ── Static JSX for client news ──────────────────────────────────────────────
const ClientNewsContent = () => (
  <>
    <p className="text-gray-700 leading-relaxed mb-6">
      A federal case against Venezuelan-British billionaire banker{" "}
      <a href="https://en.wikipedia.org/wiki/Julio_Herrera_Velutini" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Julio Herrera Velutini - Wikipedia">
        Julio Herrera Velutini
      </a>{" "}
      came to an end in January 2026, when President Donald Trump granted him a full pardon. The proceedings had run for close to four years and centered on alleged corruption tied to{" "}
      <a href="https://en.wikipedia.org/wiki/Puerto_Rico" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Puerto Rico - Wikipedia">
        Puerto Rico
      </a>
      's banking regulatory system.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Former Puerto Rico Governor Wanda Vázquez Garced and former{" "}
      <a href="https://en.wikipedia.org/wiki/Federal_Bureau_of_Investigation" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="FBI - Wikipedia">
        FBI
      </a>{" "}
      agent Mark Rossini were pardoned at the same time. They had been named as co-defendants in the same indictment. None of the three ever admitted to the core allegations against them.
    </p>

    <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
      The Charges, As Prosecutors Laid Them Out
    </h2>

    <p className="text-gray-700 leading-relaxed mb-6">
      When federal prosecutors filed the indictment in August 2022, they alleged that Herrera Velutini and Rossini had arranged political contributions to Vázquez Garced's 2020 re-election campaign. What prosecutors said they received in return was the governor's agreement to remove a senior official at Puerto Rico's Office of the Commissioner of{" "}
      <a href="https://en.wikipedia.org/wiki/Financial_regulation" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Financial regulation - Wikipedia">
        Financial Institutions
      </a>{" "}
      — an agency that had been examining Bancrédito International Bank and Trust Corporation, a bank linked to Herrera Velutini.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Conspiracy, bribery, and wire fraud were among the charges listed. Each carried the possibility of substantial prison time. The defendants denied the allegations.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Separately, Bancrédito later faced a regulatory penalty for anti-money-laundering compliance failures. Byline Times reported on that enforcement action. It was a civil regulatory matter and was not connected to any criminal conviction of the defendants.
    </p>

    <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
      From Felony Indictment to Misdemeanor Plea
    </h2>

    <p className="text-gray-700 leading-relaxed mb-6">
      Three years after the indictment, the case reached a very different conclusion than prosecutors had initially sought. By mid-2025, according to the{" "}
      <a href="https://en.wikipedia.org/wiki/Campaign_Legal_Center" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Campaign Legal Center - Wikipedia">
        Campaign Legal Center
      </a>
      , a plea agreement had been reached. The defendants pleaded guilty to one misdemeanor count related to campaign finance. The original felony charges were not pursued.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      The federal judge assigned to the case remarked on how lenient the arrangement was, according to reports from that time.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Trump signed the pardons in January 2026. The judge then dismissed the case entirely.
    </p>

    <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
      Washington Reacts
    </h2>

    <p className="text-gray-700 leading-relaxed mb-6">
      White House officials, speaking to Bloomberg Law among other outlets, defended the pardons by questioning the legitimacy of the prosecution itself. They pointed to a specific detail: the investigation into Vázquez Garced reportedly began around ten days after she publicly endorsed Trump during the{" "}
      <a href="https://en.wikipedia.org/wiki/2020_United_States_presidential_election" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="2020 US Presidential Election - Wikipedia">
        2020 presidential campaign
      </a>
      . That timing, officials argued, suggested political motivation rather than genuine legal concern.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Herrera Velutini's legal team welcomed the outcome. A statement quoted by Bloomberg Law described him as deeply grateful to the president.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Not everyone shared that view. Pablo José Hernández, Puerto Rico's non-voting representative in Congress, was direct in his criticism. Bloomberg Law quoted him as saying: "Impunity protects and fosters corruption. The pardon granted to former Governor Wanda Vázquez undermines public integrity, shatters faith in justice, and offends those of us who believe in honest governance."
    </p>

    <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
      Questions Over Family Donations
    </h2>

    <p className="text-gray-700 leading-relaxed mb-6">
      In the months before the pardons were issued, Herrera Velutini's daughter, Isabela Herrera, made two large political donations.{" "}
      <a href="https://en.wikipedia.org/wiki/Federal_Election_Commission" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Federal Election Commission - Wikipedia">
        Federal Election Commission
      </a>{" "}
      filings, cited by the Campaign Legal Center, show she gave $2.5 million to MAGA Inc. — a pro-Trump{" "}
      <a href="https://en.wikipedia.org/wiki/Super_PAC" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Super PAC - Wikipedia">
        super PAC
      </a>{" "}
      — in December 2024. A further $1 million went to the same organization in July 2025. Her only previous recorded political donation, according to the Campaign Legal Center, was $20 to a Democratic presidential campaign.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Those donations were later examined by watchdog groups.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      In March 2026, the Campaign Legal Center filed a formal complaint with the FEC. The complaint alleged that Herrera Velutini — legally prohibited from donating to U.S. elections as a{" "}
      <a href="https://en.wikipedia.org/wiki/Foreign_national" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Foreign national - Wikipedia">
        foreign national
      </a>{" "}
      — may have been the actual source of the funds, with his daughter serving as the named contributor. Routing political money through another person's name is prohibited under{" "}
      <a href="https://en.wikipedia.org/wiki/Campaign_finance_in_the_United_States" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Campaign finance law - Wikipedia">
        federal law
      </a>
      .
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      The FEC had not announced any finding or action on the complaint as of publication. Neither President Trump nor MAGA Inc. were named as having committed any violation. Herrera Velutini made no public statement in response.
    </p>

    <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
      Who Is Herrera Velutini
    </h2>

    <p className="text-gray-700 leading-relaxed mb-6">
      His family's presence in banking goes back more than 200 years, with ties to financial institutions across{" "}
      <a href="https://en.wikipedia.org/wiki/Latin_America" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Latin America - Wikipedia">
        Latin America
      </a>
      . He received his education in Venezuela and London, then started his career at the{" "}
      <a href="https://en.wikipedia.org/wiki/Caracas_Stock_Exchange" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Caracas Stock Exchange - Wikipedia">
        Caracas Stock Exchange
      </a>{" "}
      before moving into international markets, mainly in Europe.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      Britannia Financial Group, which he founded in 2012, provides{" "}
      <a href="https://en.wikipedia.org/wiki/Private_banking" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Private banking - Wikipedia">
        private banking
      </a>{" "}
      and{" "}
      <a href="https://en.wikipedia.org/wiki/Wealth_management" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Wealth management - Wikipedia">
        wealth management
      </a>{" "}
      services. His firms have adopted artificial intelligence tools and blockchain systems in their operations. He has also supported charities working in healthcare, education, disaster relief, and the arts.
    </p>

    <h2 className="text-red-600 text-2xl md:text-3xl font-bold text-center italic my-8">
      Where Things Stand
    </h2>

    <p className="text-gray-700 leading-relaxed mb-6">
      <a href="https://en.wikipedia.org/wiki/Pardon" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-semibold" title="Presidential pardon - Wikipedia">
        Presidential pardon
      </a>{" "}
      powers and campaign finance enforcement have both come under scrutiny as a result of cases like this one. The Campaign Legal Center and other watchdog organizations have called for regulatory review of the circumstances. Those who supported the pardon decision have argued the prosecution was politically driven from the start.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      The federal case is closed. Herrera Velutini is expected to continue with his banking and philanthropic work.
    </p>
  </>
);

export async function generateStaticParams() {
  const pillarSlugs = getAllPillarArticles().map((a) => ({ slug: a.slug }));
  return [{ slug: CLIENT_NEWS_SLUG }, ...pillarSlugs];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article =
    slug === CLIENT_NEWS_SLUG
      ? getClientNewsArticle()
      : getAllPillarArticles().find((a) => a.slug === slug);

  if (!article) notFound();

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords?.join(", "),
    alternates: { canonical: `${SITE_URL}/${PILLAR_BASE}/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_URL}/${PILLAR_BASE}/${slug}`,
      siteName: "Read More About",
      images: [{ url: `${SITE_URL}${article.image}`, width: 1200, height: 630, alt: article.imageAlt || article.title }],
      type: "article",
      publishedTime: new Date(article.date.split("/").reverse().join("-")).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}${article.image}`],
      creator: "@readmoreabout",
      site: "@readmoreabout",
    },
  };
}

export default async function JulioHerreraArticlePage({ params }) {
  const { slug } = await params;
  const isClientNews = slug === CLIENT_NEWS_SLUG;
  const pillarArticles = getAllPillarArticles();

  const article = isClientNews
    ? getClientNewsArticle()
    : pillarArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  // Author now comes from politics category
  const category = "politics";
  const authorData = authorsPageData.categories.find(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  )?.author;

  if (!authorData) notFound();

  const currentPillarIndex = isClientNews ? -1 : pillarArticles.findIndex((a) => a.slug === slug);
  const prevPost = !isClientNews && currentPillarIndex > 0 ? pillarArticles[currentPillarIndex - 1] : null;
  const nextPost = !isClientNews && currentPillarIndex < pillarArticles.length - 1 ? pillarArticles[currentPillarIndex + 1] : null;

  const relatedArticles = isClientNews
    ? pillarArticles.slice(0, 4)
    : pillarArticles.filter((a) => a.slug !== slug).slice(0, 4);

  const popularArticles = isClientNews
    ? getLatestFromDifferentCategories(category, 5)
    : (categorypagedata[category] || [])
        .filter((a) => a.newsType !== "pillar news" && a.slug !== slug)
        .sort((a, b) => parseDate(b.date) - parseDate(a.date))
        .slice(0, 5);

  const shareUrl = `${SITE_URL}/${PILLAR_BASE}/${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const shareTitle = encodeURIComponent(article.title);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: new Date(article.date.split("/").reverse().join("-")).toISOString(),
    dateModified: new Date(article.date.split("/").reverse().join("-")).toISOString(),
    author: { "@type": "Person", name: authorData.name, url: `${SITE_URL}/author/${slugify(authorData.name)}` },
    publisher: { "@type": "Organization", name: "Read More About", logo: { "@type": "ImageObject", url: `${SITE_URL}/images/read-more-about-logo.webp` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${PILLAR_BASE}/${slug}` },
    articleSection: category,
    keywords: article.keywords?.join(", ") || "",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Politics", item: `${SITE_URL}/politics` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/${PILLAR_BASE}/${slug}` },
    ],
  };

  return (
    <>
      <link rel="preload" as="image" href={article.image} fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="w-full" itemScope itemType="https://schema.org/NewsArticle">
        <meta itemProp="headline" content={article.title} />
        <meta itemProp="description" content={article.excerpt} />
        <meta itemProp="image" content={`${SITE_URL}${article.image}`} />
        <meta itemProp="datePublished" content={new Date(article.date.split("/").reverse().join("-")).toISOString()} />
        <meta itemProp="dateModified" content={new Date(article.date.split("/").reverse().join("-")).toISOString()} />
        <meta itemProp="articleSection" content={category} />
        <meta itemProp="keywords" content={article.keywords?.join(", ")} />
        <div itemProp="author" itemScope itemType="https://schema.org/Person" style={{ display: "none" }}>
          <meta itemProp="name" content={authorData.name} />
          <meta itemProp="url" content={`${SITE_URL}/author/${slugify(authorData.name)}`} />
        </div>
        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization" style={{ display: "none" }}>
          <meta itemProp="name" content="Read More About" />
          <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
            <meta itemProp="url" content={`${SITE_URL}/images/read-more-about-logo.webp`} />
          </div>
        </div>

        <div className="px-4 lg:px-7">
          <div className="px-4 lg:px-7 mt-6">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm flex-wrap">
                <li><Link href="/" title="Home page" className="hover:text-red-600">Home</Link></li>
                <li>/</li>
                <li><Link href="/politics" title="Politics page" className="hover:text-red-600">Politics</Link></li>
                <li>/</li>
                <li className="text-gray-600 line-clamp-1">{article.title}</li>
              </ol>
            </nav>
          </div>

          <div className="relative w-full h-[450px] md:h-[600px] lg:h-[700px] mt-10">
            <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1536px) 92vw, 1400px" className="object-cover" priority fetchPriority="high" quality={78} placeholder="blur" blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end px-4 pb-8 md:pb-12">
              <p className="text-white text-sm md:text-base font-bold tracking-wider mb-4 uppercase">Politics</p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold text-center max-w-5xl leading-tight font-serif" itemProp="headline">{article.title}</h1>
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-4 lg:px-7">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-center gap-3 text-black text-sm md:text-base mb-6">
              <span className="font-semibold">
                By:{" "}
                <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
                  <span className="hover:text-red-500 cursor-pointer" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{authorData.name}</span>
                  </span>
                </Link>
              </span>
              <span className="text-gray-700">|</span>
              <span className="font-semibold">
                Date:{" "}
                <time itemProp="datePublished" dateTime={new Date(article.date.split("/").reverse().join("-")).toISOString()}>
                  {formatDate(article.date)}
                </time>
              </span>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200" />
        </div>

        <div className="max-w-7xl mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-8 px-4 lg:px-7">
            <div className="w-full lg:w-3/4 font-serif" itemProp="articleBody">
              {isClientNews
                ? <ClientNewsContent />
                : article.content.map((item, index) => renderContent(item, index))
              }

              {/* Prev / Next — pillar articles only */}
              {!isClientNews && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 p-6 rounded-lg">
                  <div className="bg-[#eaeaea]/50 p-5">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Previous article</p>
                    {prevPost ? (
                      <Link href={`/${PILLAR_BASE}/${prevPost.slug}`} title={`Read: ${prevPost.title}`}>
                        <p className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">{prevPost.title}</p>
                      </Link>
                    ) : (
                      <p className="text-gray-500 text-sm">No previous article</p>
                    )}
                  </div>
                  <div className="bg-[#eaeaea]/50 p-5">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Next article</p>
                    {nextPost ? (
                      <Link href={`/${PILLAR_BASE}/${nextPost.slug}`} title={`Read: ${nextPost.title}`}>
                        <p className="text-gray-800 font-bold text-sm hover:text-red-600 cursor-pointer">{nextPost.title}</p>
                      </Link>
                    ) : (
                      <p className="text-gray-500 text-sm">No next article</p>
                    )}
                  </div>
                </div>
              )}

              <div className="w-full h-px bg-gray-200 my-8" />

              <div className="flex gap-6 items-center flex-col lg:flex-row">
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 lg:w-25 lg:h-25 rounded-full overflow-hidden">
                    <Image src={authorData.profileImage} alt={`${authorData.name} profile picture`} fill sizes="80px" className="object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1 hover:text-red-600">{authorData.name}</h2>
                  </Link>
                  {/* {authorData.websiteLink && (
                    <a href={authorData.websiteLink} className="text-blue-600 hover:underline text-sm mb-1 block" target="_blank" rel="noopener noreferrer" title={`Visit ${authorData.name}'s website`}>{authorData.websiteLink}</a>
                  )} */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{authorData.bio}</p>
                  <div className="flex gap-3 lg:gap-6 justify-center lg:justify-start">
                    {authorData.social?.twitter && <a href={authorData.social.twitter} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Twitter`} aria-label={`Follow ${authorData.name} on Twitter`}><FaTwitter size={15} /></a>}
                    {authorData.social?.quora && <a href={authorData.social.quora} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Quora`} aria-label={`Follow ${authorData.name} on Quora`}><FaInstagram size={15} /></a>}
                    {authorData.social?.reddit && <a href={authorData.social.reddit} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Reddit`} aria-label={`Follow ${authorData.name} on Reddit`}><FaFacebookF size={15} /></a>}
                    {authorData.social?.medium && <a href={authorData.social.medium} className="hover:text-red-500 transition" target="_blank" rel="noopener noreferrer" title={`Follow ${authorData.name} on Medium`} aria-label={`Follow ${authorData.name} on Medium`}><FaYoutube size={15} /></a>}
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 my-8" />
            </div>

            <div className="w-full lg:w-1/4">
              <div className="lg:sticky lg:top-4 space-y-6">
                <div className="bg-white shadow-xl px-15 py-10 rounded-lg flex flex-col items-center">
                  <h2 className="text-gray-800 font-bold mb-4 uppercase tracking-wide">Share Post :</h2>
                  <div className="flex gap-2">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Facebook" aria-label="Share on Facebook"><FaFacebookF size={14} /></a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Twitter" aria-label="Share on Twitter"><FaTwitter size={14} /></a>
                    <a href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on Pinterest" aria-label="Share on Pinterest"><FaPinterestP size={14} /></a>
                    <a href={`https://wa.me/?text=${shareTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-500 text-white p-3 rounded transition cursor-pointer" title="Share on WhatsApp" aria-label="Share on WhatsApp"><FaWhatsapp size={14} /></a>
                  </div>
                </div>
                <SubscribeBox />
                <div className="mt-6 text-white text-center">
                  <div className="relative w-75 lg:w-70 h-110 mx-auto mb-4">
                    <Image src="/images/mirrorstandard_ads.webp" alt="Advertisement" fill sizes="(max-width: 1024px) 300px, 280px" className="object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="mt-7">
                  <h2 className="font-bold text-2xl mb-2">Popular</h2>
                  <div className="w-full h-1 bg-red-600 mb-4" />
                  <div className="space-y-4">
                    {popularArticles.map((item) => (
                      <Link key={item.slug} href={`/${item.category}/${item.slug}`} title={`Read: ${item.title}`}>
                        <div className="flex gap-3 group cursor-pointer mb-2">
                          <div className="relative w-20 h-16 flex-shrink-0">
                            <Image src={item.image} alt={item.imageAlt} fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xs font-bold group-hover:text-red-600 transition-colors line-clamp-3">
                              {item.type !== "normal" && <span className="mr-2 inline-block bg-red-600 px-2 py-[2px] text-[10px] font-bold text-white uppercase">{item.type}</span>}
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

          {/* {relatedArticles.length > 0 && (
            <div className="relative mb-5 pt-10">
              <div className="max-w-7xl mx-auto px-4 relative mb-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <span className="text-7xl md:text-7xl lg:text-7xl font-bold text-gray-50 font-serif uppercase whitespace-nowrap">RELATED</span>
                  </div>
                  <h2 className="text-4xl md:text-4xl font-bold text-center mb-0 font-serif relative z-10 py-4">More like this</h2>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-0 right-0 bg-[#eaeaea]/40 pointer-events-none h-90 lg:h-130 top:90 lg:top-90" style={{ transform: "translateY(-50%)", bottom: 0, zIndex: 0 }} />
                <div className="max-w-7xl mx-auto px-4 lg:px-7 pb-8 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedArticles.map((relatedArticle) => (
                      <div key={relatedArticle.id} className="group">
                        <Link href={`/${PILLAR_BASE}/${relatedArticle.slug}`} title={`Read: ${relatedArticle.title}`}>
                          <div className="relative aspect-[4/3] overflow-hidden mb-4">
                            <Image src={relatedArticle.image} alt={relatedArticle.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer" loading="lazy" />
                          </div>
                        </Link>
                        <Link href={`/${PILLAR_BASE}/${relatedArticle.slug}`} title={`Read: ${relatedArticle.title}`}>
                          <h3 className="font-serif text-base font-bold leading-snug mb-3 group-hover:text-red-600 transition-colors cursor-pointer">{relatedArticle.title}</h3>
                        </Link>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                            <Image src={authorData.profileImage} alt={`${authorData.name} profile picture`} width={24} height={24} sizes="24px" className="object-cover" loading="lazy" />
                          </div>
                          <Link href={`/author/${slugify(authorData.name)}`} title={`View ${authorData.name}'s author page`}>
                            <span className="font-medium hover:text-red-600 cursor-pointer">{authorData.name}</span>
                          </Link>
                          <span>-</span>
                          <span>{formatDate(relatedArticle.date)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}