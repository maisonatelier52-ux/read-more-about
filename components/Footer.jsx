

// "use client";

// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaYoutube, FaChevronUp } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import articleData from "../public/data/articles.json";
// import authorData from "../public/data/authors.json";
// import { PiRedditLogoBold } from "react-icons/pi";
// import { FaPinterest } from "react-icons/fa";
// import { BsSubstack } from "react-icons/bs";
// import { SiMedium } from "react-icons/si";

// // ✅ SEO FIX: All data computed OUTSIDE the component as static module-level constants.
// // This means footer links are available on first paint — no JS execution required for crawlers.

// const FOOTER_CATEGORIES = Object.keys(articleData).filter(
//   (cat) => Array.isArray(articleData[cat]) && articleData[cat].length > 0
// );

// const FOOTER_AUTHORS = authorData.categories.map((cat) => cat.author);

// // ✅ IIFE computes latest articles once at module load — no useMemo needed
// const LATEST_ARTICLES = (() => {
//   const all = Object.entries(articleData).flatMap(([cat, articles]) =>
//     Array.isArray(articles) ? articles.map((a) => ({ ...a, categoryName: cat })) : []
//   );
//   all.sort(
//     (a, b) =>
//       new Date(b.date.split("/").reverse().join("-")) -
//       new Date(a.date.split("/").reverse().join("-"))
//   );
//   const seen = new Set();
//   return all
//     .filter((a) => !seen.has(a.categoryName) && seen.add(a.categoryName))
//     .slice(0, 3);
// })();

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#eaeaea] border-t border-gray-300 relative">

//       {/* Logo and Navigation Bar */}
//       <div className="px-7">
//         <div className="border-b-2 border-black">
//           <div className="max-w-7xl mx-auto px-4 py-6">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4">

//               {/* Logo */}
//               <Link
//                 href="/"
//                 title="ReadMoreAbout - Latest News & Articles"
//                 className="text-4xl font-bold font-serif"
//               >
//                 <span>ReadM</span>
//                 <span className="relative inline-block">
//                   <span className="absolute top-0 left-7 text-xs font-bold not-italic text-black font-sans">
//                     About
//                   </span>
//                   ore
//                 </span>
//               </Link>

//               {/* ✅ Proper nav landmark with aria-label for crawlers */}
//               <nav aria-label="Footer category navigation" className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
//                 {FOOTER_CATEGORIES.map((category) => (
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
//               Read More About delivers comprehensive, fact-based journalism covering world
//               events, politics, business, and culture. We&apos;re committed to keeping you
//               informed with accurate, timely reporting you can trust.
//             </p>

//             {/* ✅ Social links: real rel + target attrs, aria-labels, type clarified */}
//             <div className="flex gap-3" aria-label="Social media links">
//               <a
//                 href="https://www.reddit.com/user/read-more-about/"
//                 title="Follow ReadMoreAbout on Reddit"
//                 aria-label="Follow us on Reddit"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors rounded-md"
//               >
//                 <PiRedditLogoBold size={16} />
//               </a>
//               <a
//                 href="https://www.instagram.com/read_more_about_26/"
//                 title="Follow ReadMoreAbout on Instagram"
//                 aria-label="Follow us on Instagram"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors rounded-md"
//               >
//                 <FaInstagram size={16} />
//               </a>
//               <a
//                 href="https://x.com/More528Read"
//                 title="Follow ReadMoreAbout on X (Twitter)"
//                 aria-label="Follow us on X (Twitter)"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors rounded-md"
//               >
//                 <FaXTwitter size={16} />
//               </a>
//               <a
//                 href="https://medium.com/@admin_14364"
//                 title="Follow ReadMoreAbout on Medium"
//                 aria-label="Follow us on Medium"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors rounded-md"
//               >
//                 <SiMedium size={18} />
//               </a>
//               <a
//                 href="https://substack.com/@readmoredaily"
//                 title="Follow ReadMoreAbout on Substack"
//                 aria-label="Follow us on Substack"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors rounded-md"
//               >
//                 <BsSubstack size={18} />
//               </a>
//               {/* <a
//                 href="https://www.pinterest.com/00s86wkafo06w3x55yx5gzhy4zhrp1/_profile/"
//                 title="Follow ReadMoreAbout on Pinterest"
//                 aria-label="Follow us on Pinterest"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
//               >
//                 <FaPinterest size={18} />
//               </a> */}
//             </div>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-serif">Company</h3>
//             {/* ✅ nav landmark wraps company links */}
//             <nav aria-label="Company pages">
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="/about"
//                     title="About ReadMoreAbout"
//                     className="text-gray-700 hover:text-red-600 transition-colors text-sm"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/privacy-policy"
//                     title="ReadMoreAbout Privacy Policy"
//                     className="text-gray-700 hover:text-red-600 transition-colors text-sm"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/terms-and-conditions"
//                     title="ReadMoreAbout Terms and Conditions"
//                     className="text-gray-700 hover:text-red-600 transition-colors text-sm"
//                   >
//                     Terms &amp; Conditions
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           {/* The Latest Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-serif">The latest</h3>
//             <div className="space-y-4">
//               {LATEST_ARTICLES.map((article) => (
//                 <div key={article.slug}>
//                   <Link
//                     href={`/${article.categoryName}/${article.slug}`}
//                     title={article.title}
//                     className="text-sm font-bold leading-tight hover:text-red-600 transition-colors block mb-1"
//                   >
//                     {article.title}
//                   </Link>
//                   <div className="flex items-center gap-2 text-xs text-gray-600">
//                     {/* ✅ Link the category label so crawlers discover category pages from here too */}
//                     <Link
//                       href={`/${article.categoryName}`}
//                       className="font-semibold uppercase hover:text-red-600 transition-colors"
//                     >
//                       {article.category}
//                     </Link>
//                     <time dateTime={article.date.split("/").reverse().join("-")}>
//                       {article.date}
//                     </time>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Authors Section */}
//           <div>
//             <h3 className="text-2xl font-bold mb-4 font-serif">Our Authors</h3>
//             <nav aria-label="Author profiles">
//               <ul className="space-y-2">
//                 {FOOTER_AUTHORS.map((author) => (
//                   <li key={author.id}>
//                     <Link
//                       href={`/author/${author.name.toLowerCase().replace(/\s+/g, "-")}`}
//                       title={`${author.name} - Articles and Author Profile`}
//                       className="text-gray-700 hover:text-red-600 transition-colors text-sm"
//                     >
//                       {author.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Bottom Copyright Bar — updated year, removed third-party branding */}
//       <div className="border-t border-gray-300 bg-[#eaeaea]">
//         <div className="max-w-7xl mx-auto px-4 py-4 text-center">
//           <p className="text-sm text-gray-700">
//             &copy; {currentYear} ReadMoreAbout. All Rights Reserved.
//           </p>
//         </div>
//       </div>

//       {/* ✅ Scroll to Top Button — type="button" added */}
//       <button
//         type="button"
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg z-50 cursor-pointer"
//         aria-label="Scroll to top of page"
//       >
//         <FaChevronUp size={20} />
//       </button>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiRedditLogoBold } from "react-icons/pi";
import { BsSubstack } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";
import articleData from "../public/data/articles.json";
import authorData from "../public/data/authors.json";

// ── Static module-level constants (SEO: no JS needed for crawlers) ──────────

const FOOTER_CATEGORIES = Object.keys(articleData).filter(
  (cat) => Array.isArray(articleData[cat]) && articleData[cat].length > 0
);

const FOOTER_AUTHORS = authorData.categories.map((cat) => cat.author);

const LATEST_ARTICLES = (() => {
  const all = Object.entries(articleData).flatMap(([cat, articles]) =>
    Array.isArray(articles)
      ? articles.map((a) => ({ ...a, categoryName: cat }))
      : []
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

const NEWSROOM_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Corrections Policy", href: "/corrections-policy" },
  { label: "Source Methodology", href: "/source-methodology" },
];

const STANDARDS_LINKS = [
  { label: "Ownership & Funding", href: "/ownership-and-funding" },
  { label: "Advertising Policy", href: "/advertising-policy" },
  { label: "Right of Reply", href: "/right-of-reply-policy" },
  { label: "Legal", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const BOTTOM_BAR_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Corrections Policy", href: "/corrections-policy" },
  { label: "Source Methodology", href: "/source-methodology" },
  { label: "Ownership & Funding", href: "/ownership-and-funding" },
  { label: "Advertising Policy", href: "/advertising-policy" },
  { label: "Right of Reply", href: "/right-of-reply-policy" },
  { label: "Legal", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ebebeb] border-t border-gray-300 relative">

      {/* ── Top: Logo + Category Nav ── */}
      <div className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            {/* Logo */}
            <Link
              href="/"
              title="ReadMoreAbout - Latest News & Articles"
              className="text-4xl font-bold font-serif leading-none"
            >
              <span>ReadM</span>
              <span className="relative inline-block">
                <span className="absolute -top-1 left-6 text-[10px] font-bold not-italic text-black font-sans tracking-tight">
                  About
                </span>
                ore
              </span>
            </Link>

            {/* Category nav */}
            <nav
              aria-label="Footer category navigation"
              className="flex flex-wrap items-center justify-center gap-5"
            >
              {FOOTER_CATEGORIES.map((category) => (
                <Link
                  key={category}
                  href={`/${category.toLowerCase()}`}
                  title={`${category.charAt(0).toUpperCase() + category.slice(1)} articles`}
                  className="text-[13px] font-semibold capitalize text-black hover:text-red-600 transition-colors duration-200"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Col 1 — About Us */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-[20px] font-bold mb-4">About us</h3>
            <p className="text-[12px] leading-[1.8] text-neutral-700 mb-5">
              Read More About delivers comprehensive, fact-based journalism covering
              world events, politics, business, and culture. We&apos;re committed to
              keeping you informed with accurate, timely reporting you can trust.
            </p>

            {/* Social icons */}
            <div className="flex gap-2 flex-wrap" aria-label="Social media links">
              {[
                {
                  href: "https://www.reddit.com/user/read-more-about/",
                  label: "Reddit",
                  icon: <PiRedditLogoBold size={13} />,
                },
                {
                  href: "https://www.instagram.com/read_more_about_26/",
                  label: "Instagram",
                  icon: <FaInstagram size={13} />,
                },
                {
                  href: "https://x.com/More528Read",
                  label: "X (Twitter)",
                  icon: <FaXTwitter size={13} />,
                },
                {
                  href: "https://medium.com/@admin_14364",
                  label: "Medium",
                  icon: <SiMedium size={14} />,
                },
                {
                  href: "https://substack.com/@readmoredaily",
                  label: "Substack",
                  icon: <BsSubstack size={14} />,
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  title={`Follow ReadMoreAbout on ${label}`}
                  aria-label={`Follow us on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center hover:bg-red-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Newsroom */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-[20px] font-bold mb-4">Newsroom</h3>
            <nav aria-label="Newsroom pages">
              <ul className="space-y-2">
                {NEWSROOM_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      title={label}
                      className="text-[13px] text-neutral-700 hover:text-black hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3 — Standards */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-[20px] font-bold mb-4">Standards</h3>
            <nav aria-label="Standards pages">
              <ul className="space-y-2">
                {STANDARDS_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      title={label}
                      className="text-[13px] text-neutral-700 hover:text-black hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 4 — The Latest */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-[20px] font-bold mb-4">The latest</h3>
            <div className="space-y-4">
              {LATEST_ARTICLES.map((article) => (
                <div key={article.slug}>
                  <Link
                    href={`/${article.categoryName}/${article.slug}`}
                    title={article.title}
                    className="text-[13px] font-semibold leading-snug text-black hover:underline block mb-1 transition-all duration-200"
                  >
                    {article.title}
                  </Link>
                  <div className="flex items-center gap-2 text-[11px]">
                    <Link
                      href={`/${article.categoryName}`}
                      className="font-bold uppercase tracking-wider text-black hover:text-red-600 transition-colors duration-200"
                    >
                      {article.category}
                    </Link>
                    <time
                      dateTime={article.date.split("/").reverse().join("-")}
                      className="text-neutral-500"
                    >
                      {article.date}
                    </time>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 5 — Our Authors */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-[20px] font-bold mb-4">Our Authors</h3>
            <nav aria-label="Author profiles">
              <ul className="space-y-2">
                {FOOTER_AUTHORS.map((author) => (
                  <li key={author.id}>
                    <Link
                      href={`/author/${author.name.toLowerCase().replace(/\s+/g, "-")}`}
                      title={`${author.name} — Articles and Profile`}
                      className="text-[13px] text-neutral-700 hover:text-black hover:translate-x-1 inline-block transition-all duration-200"
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

      {/* ── Bottom Links Bar ── */}
      {/* <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <nav
            aria-label="Footer legal and policy links"
            className="flex flex-wrap justify-center items-center gap-x-0 gap-y-1.5"
          >
            {BOTTOM_BAR_LINKS.map(({ label, href }, i) => (
              <span key={label} className="flex items-center">
                <Link
                  href={href}
                  title={label}
                  className="text-[12px] text-neutral-600 hover:text-black transition-colors duration-200 px-2"
                >
                  {label}
                </Link>
                {i < BOTTOM_BAR_LINKS.length - 1 && (
                  <span className="text-neutral-400 select-none text-[11px]">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div> */}

      {/* ── Copyright ── */}
      <div className="border-t border-gray-300 bg-[#ebebeb]">
        <div className="max-w-7xl mx-auto px-6 py-3 text-center">
          <p className="text-[12px] text-neutral-600">
            &copy; {currentYear} ReadMoreAbout. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* ── Scroll to Top ── */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="fixed bottom-6 right-6 w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-sm shadow-lg hover:bg-black transition-all duration-300 hover:-translate-y-1 z-50 cursor-pointer"
      >
        <HiArrowUp size={16} />
      </button>
    </footer>
  );
}