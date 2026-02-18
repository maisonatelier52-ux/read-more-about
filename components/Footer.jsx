

// "use client";

// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaYoutube, FaChevronUp } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import articleData from "../public/data/articles.json";
// import authorData from '../public/data/authors.json';
// import { useMemo } from 'react';

// export default function Footer() {
//   // Get unique categories from articles
//   const categories = useMemo(() => {
//     const allCategories = new Set();
//     Object.keys(articleData).forEach(category => {
//       if (Array.isArray(articleData[category]) && articleData[category].length > 0) {
//         allCategories.add(category);
//       }
//     });
//     return Array.from(allCategories);
//   }, []);

//   // Get latest 3 articles from different categories
//   const latestArticles = useMemo(() => {
//     const allArticles = [];
    
//     // Flatten all articles with their category
//     Object.entries(articleData).forEach(([category, articles]) => {
//       if (Array.isArray(articles)) {
//         articles.forEach(article => {
//           allArticles.push({
//             ...article,
//             categoryName: category
//           });
//         });
//       }
//     });

//     // Sort by date (newest first)
//     allArticles.sort((a, b) => {
//       const dateA = new Date(a.date.split('/').reverse().join('-'));
//       const dateB = new Date(b.date.split('/').reverse().join('-'));
//       return dateB - dateA;
//     });

//     // Get latest 3 from different categories
//     const selectedArticles = [];
//     const usedCategories = new Set();

//     for (const article of allArticles) {
//       if (!usedCategories.has(article.categoryName) && selectedArticles.length < 3) {
//         selectedArticles.push(article);
//         usedCategories.add(article.categoryName);
//       }
//       if (selectedArticles.length === 3) break;
//     }

//     return selectedArticles;
//   }, []);

//   // Get all authors
//   const authors = useMemo(() => {
//     return authorData.categories.map(cat => cat.author);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <footer className="bg-[#eaeaea] border-t border-gray-300 relative">
//       {/* Logo and Navigation Bar */}
//       <div className="px-7">
//         <div className="border-b-2 border-black">
//           <div className="max-w-7xl mx-auto px-4 py-6">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//               {/* Logo */}
//              <Link href="/" title="Read More About - Home page" className="text-4xl font-bold font-serif">
//               <span>ReadM</span>
//               <span className="relative inline-block">
//                 <span className="absolute top-0 left-7 text-xs font-bold not-italic text-black font-sans">
//                   About
//                 </span>
//                 ore
//               </span>
//             </Link>

//               {/* Navigation Links */}
//               <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
//                 {categories.map((category) => (
//                   <Link
//                     key={category}
//                     href={`/${category.toLowerCase()}`}
//                     title={`${category.charAt(0).toUpperCase() + category.slice(1)} - Latest news and articles`}
//                     className="hover:text-red-600 transition-colors font-semibold capitalize"
//                   >
//                     {category}
//                   </Link>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* About Us Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-serif">About us</h3>
//             <p className="text-gray-700 text-sm leading-relaxed mb-6">
//               Read More About delivers comprehensive, fact-based journalism covering world events, politics, business, and culture. We're committed to keeping you informed with accurate, timely reporting you can trust.
//             </p>
            
//             {/* Social Media Icons */}
//             <div className="flex gap-3">
//               <a 
//                 href="#" 
//                 title="Follow us on Facebook"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
//               >
//                 <FaFacebookF size={16} />
//               </a>
//               <a 
//                 href="#" 
//                 title="Follow us on Instagram"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
//               >
//                 <FaInstagram size={16} />
//               </a>
//               <a 
//                 href="#" 
//                 title="Follow us on Twitter"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
//               >
//                 <FaXTwitter size={16} />
//               </a>
//               <a 
//                 href="#" 
//                 title="Subscribe to our YouTube channel"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
//               >
//                 <FaYoutube size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-serif">Company</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about" title="About NewsWeek PRO" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" title="Contact NewsWeek PRO" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
//                   Contact us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/privacy-policy" title="NewsWeek PRO Privacy Policy" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
//                   Privacy-Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms-and-conditions" title="NewsWeek PRO Terms and Conditions" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
//                   Terms & Conditions
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* The Latest Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-serif">The latest</h3>
//             <div className="space-y-4">
//               {latestArticles.map((article) => (
//                 <div key={article.id}>
//                   <Link 
//                     href={`/${article.categoryName}/${article.slug}`}
//                     title={article.title}
//                     className="text-sm font-bold leading-tight hover:text-red-600 transition-colors block mb-1"
//                   >
//                     {article.title}
//                   </Link>
//                   <div className="flex items-center gap-2 text-xs text-gray-600">
//                     <span className="font-semibold uppercase">{article.category}</span>
//                     <span>{article.date}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Authors Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-serif">Our Authors</h3>
//             <ul className="space-y-2">
//               {authors.map((author) => (
//                 <li key={author.id}>
//                   <Link
//                     href={`/author/${author.name.toLowerCase().replace(/\s+/g, '-')}`}
//                     title={`${author.name} - Author Profile`}
//                     className="text-gray-700 hover:text-red-600 transition-colors text-sm"
//                   >
//                     {author.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright Bar */}
//       <div className="border-t border-gray-300 bg-[#eaeaea]">
//         <div className="max-w-7xl mx-auto px-4 py-4 text-center">
//           <p className="text-sm text-gray-700">
//             © 2021 tagDiv. All Rights Reserved. Made with Newspaper Theme.
//           </p>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg z-50 cursor-pointer"
//         aria-label="Scroll to top"
//       >
//         <FaChevronUp size={20} />
//       </button>
//     </footer>
//   );
// }


"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaChevronUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import articleData from "../public/data/articles.json";
import authorData from "../public/data/authors.json";

// ✅ SEO FIX: All data computed OUTSIDE the component as static module-level constants.
// This means footer links are available on first paint — no JS execution required for crawlers.

const FOOTER_CATEGORIES = Object.keys(articleData).filter(
  (cat) => Array.isArray(articleData[cat]) && articleData[cat].length > 0
);

const FOOTER_AUTHORS = authorData.categories.map((cat) => cat.author);

// ✅ IIFE computes latest articles once at module load — no useMemo needed
const LATEST_ARTICLES = (() => {
  const all = Object.entries(articleData).flatMap(([cat, articles]) =>
    Array.isArray(articles) ? articles.map((a) => ({ ...a, categoryName: cat })) : []
  );
  all.sort(
    (a, b) =>
      new Date(b.date.split("/").reverse().join("-")) -
      new Date(a.date.split("/").reverse().join("-"))
  );
  const seen = new Set();
  return all
    .filter((a) => !seen.has(a.categoryName) && seen.add(a.categoryName))
    .slice(0, 3);
})();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#eaeaea] border-t border-gray-300 relative">

      {/* Logo and Navigation Bar */}
      <div className="px-7">
        <div className="border-b-2 border-black">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              {/* Logo */}
              <Link
                href="/"
                title="ReadMoreAbout - Latest News & Articles"
                className="text-4xl font-bold font-serif"
              >
                <span>ReadM</span>
                <span className="relative inline-block">
                  <span className="absolute top-0 left-7 text-xs font-bold not-italic text-black font-sans">
                    About
                  </span>
                  ore
                </span>
              </Link>

              {/* ✅ Proper nav landmark with aria-label for crawlers */}
              <nav aria-label="Footer category navigation" className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
                {FOOTER_CATEGORIES.map((category) => (
                  <Link
                    key={category}
                    href={`/${category.toLowerCase()}`}
                    title={`${category.charAt(0).toUpperCase() + category.slice(1)} - Latest news and articles`}
                    className="hover:text-red-600 transition-colors font-semibold capitalize"
                  >
                    {category}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Us Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">About us</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Read More About delivers comprehensive, fact-based journalism covering world
              events, politics, business, and culture. We&apos;re committed to keeping you
              informed with accurate, timely reporting you can trust.
            </p>

            {/* ✅ Social links: real rel + target attrs, aria-labels, type clarified */}
            <div className="flex gap-3" aria-label="Social media links">
              <a
                href="https://facebook.com"
                title="Follow ReadMoreAbout on Facebook"
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://instagram.com"
                title="Follow ReadMoreAbout on Instagram"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://x.com"
                title="Follow ReadMoreAbout on X (Twitter)"
                aria-label="Follow us on X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="https://youtube.com"
                title="Subscribe to ReadMoreAbout on YouTube"
                aria-label="Subscribe to our YouTube channel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Company</h3>
            {/* ✅ nav landmark wraps company links */}
            <nav aria-label="Company pages">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    title="About ReadMoreAbout"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    title="ReadMoreAbout Privacy Policy"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    title="ReadMoreAbout Terms and Conditions"
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* The Latest Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">The latest</h3>
            <div className="space-y-4">
              {LATEST_ARTICLES.map((article) => (
                <div key={article.id}>
                  <Link
                    href={`/${article.categoryName}/${article.slug}`}
                    title={article.title}
                    className="text-sm font-bold leading-tight hover:text-red-600 transition-colors block mb-1"
                  >
                    {article.title}
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    {/* ✅ Link the category label so crawlers discover category pages from here too */}
                    <Link
                      href={`/${article.categoryName}`}
                      className="font-semibold uppercase hover:text-red-600 transition-colors"
                    >
                      {article.category}
                    </Link>
                    <time dateTime={article.date.split("/").reverse().join("-")}>
                      {article.date}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authors Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Our Authors</h3>
            <nav aria-label="Author profiles">
              <ul className="space-y-2">
                {FOOTER_AUTHORS.map((author) => (
                  <li key={author.id}>
                    <Link
                      href={`/author/${author.name.toLowerCase().replace(/\s+/g, "-")}`}
                      title={`${author.name} - Articles and Author Profile`}
                      className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                    >
                      {author.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Copyright Bar — updated year, removed third-party branding */}
      <div className="border-t border-gray-300 bg-[#eaeaea]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <p className="text-sm text-gray-700">
            &copy; {currentYear} ReadMoreAbout. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ✅ Scroll to Top Button — type="button" added */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg z-50 cursor-pointer"
        aria-label="Scroll to top of page"
      >
        <FaChevronUp size={20} />
      </button>
    </footer>
  );
}