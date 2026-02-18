
// "use client";
// import React from 'react'
// import { useState, useEffect } from "react";
// import { IoIosMenu } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";
// import { LuUserRound } from "react-icons/lu";
// import { IoClose } from "react-icons/io5";
// import { IoCheckmarkCircle } from "react-icons/io5";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import CategoryData from '../public/data/articles.json'

// function Header() {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [currentDate, setCurrentDate] = useState({ day: '', date: '' });
//   const [navItems, setNavItems] = useState([]);
//   const [email, setEmail] = useState('');
//   const [isEmailValid, setIsEmailValid] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const pathname = usePathname();

//   // Extract unique categories from articles.json and add Home at the beginning
//   useEffect(() => {
//     const categories = Object.keys(CategoryData);
//     // Capitalize first letter of each category
//     const formattedCategories = categories.map(cat => 
//       cat.charAt(0).toUpperCase() + cat.slice(1)
//     );
//     // Add "Home" at the beginning
//     setNavItems(['Home', ...formattedCategories]);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const updateDate = () => {
//       const now = new Date();
//       const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//       const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
//       const dayName = days[now.getDay()];
//       const monthName = months[now.getMonth()];
//       const dayNumber = now.getDate();
//       const year = now.getFullYear();
      
//       setCurrentDate({
//         day: dayName,
//         date: `${monthName} ${dayNumber}, ${year}`
//       });
//     };

//     updateDate();
//   }, []);

//   // Email validation function
//   const validateEmail = (emailValue) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(emailValue);
//   };

//   // Handle email input change
//   const handleEmailChange = (e) => {
//     const emailValue = e.target.value;
//     setEmail(emailValue);
//     setIsEmailValid(validateEmail(emailValue));
//     setShowSuccess(false);
//   };

//   // Handle subscribe button click
//   const handleSubscribe = () => {
//     if (isEmailValid) {
//       setShowSuccess(true);
//     }
//   };

//   // Reset modal state when closed
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEmail('');
//     setIsEmailValid(false);
//     setShowSuccess(false);
//   };

//   // Helper function to check if link is active
//   const isActiveLink = (item) => {
//     if (item === 'Home') {
//       return pathname === '/';
//     }
//     return pathname === `/${item.toLowerCase()}`;
//   };

//   // Helper function to get the href for each item
//   const getHref = (item) => {
//     if (item === 'Home') {
//       return '/';
//     }
//     return `/${item.toLowerCase()}`;
//   };

//   return (
//     <>
//       {/* MAIN HEADER - Hidden on scroll for desktop, always sticky on mobile */}
//       <header className={`shadow-lg bg-white transition-all duration-300 ${isScrolled ? 'lg:hidden' : ''} sticky lg:relative top-0 z-40`}>
//         <div className="mx-auto flex h-16 lg:h-30 max-w-7xl items-center justify-between px-4">

//           {/* LEFT */}
//           <div className="flex items-center gap-4 flex-1">
//             {/* Mobile Menu Icon */}
//             <button
//               onClick={() => setOpenMenu(true)}
//               className="text-black lg:hidden"
//               aria-label="Open menu"
//             >
//               <IoIosMenu className="h-6 w-6" />
//             </button>

//             {/* Desktop Search */}
//             <div className="hidden lg:flex items-center gap-6 ml-10">
//               <div className="flex items-center gap-2 cursor-pointer font-semibold">
//                 <span className="text-sm">Search</span>
//                 <FaSearch className="h-4 w-4" />
//               </div>
//             </div>
//           </div>

//           {/* CENTER LOGO */}
//           <div className="flex items-center justify-center flex-shrink-0">
//             <Link href='/' title='Read More About - Home page'>
//             <div className="relative text-4xl sm:text-5xl lg:text-8xl font-bold text-red-600 font-serif">
//               ReadM
//               <span className="relative inline-block">
//                 <span className="absolute top-0 left-7 lg:top-3 lg:left-27 text-[10px] lg:text-base font-bold not-italic text-black">
//                   About
//                 </span>
//                 ore
//               </span>
//             </div>
//             </Link>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-4 flex-1 justify-end">
//             {/* Mobile Search Icon */}
//             <button className="lg:hidden" aria-label="Search">
//               <FaSearch className="h-5 w-5 cursor-pointer" />
//             </button>

//             {/* Desktop Date + Subscribe */}
//             <div className="hidden lg:flex items-center gap-6">
//               <div className="flex flex-col items-end">
//                 <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{currentDate.day}</span>
//                 <span className="text-sm font-bold text-black">{currentDate.date}</span>
//               </div>

//               <button 
//                 onClick={() => setShowModal(true)}
//                 className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition cursor-pointer"
//               >
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* DESKTOP NAV */}
//         <nav className="hidden lg:block border-t border-gray-200">
//           <ul className="flex justify-center gap-8 py-4">
//             {navItems.map((item) => (
//               <Link key={item} href={getHref(item)} title={`${item} - Latest news and articles`}>
//               <li
//                 className={`text-sm font-semibold cursor-pointer ${
//                   isActiveLink(item)
//                     ? "text-red-600"
//                     : "text-black hover:text-red-600"
//                 }`}
//               >
//                 {item}
//               </li>
//               </Link>
//             ))}
//           </ul>
//         </nav>
//       </header>

//       {/* SCROLLED HEADER - Only shows on desktop when scrolled */}
//       <header className={`hidden lg:block shadow-lg bg-white fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
//       }`}>
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 border-b border-gray-200">
          
//           {/* LEFT - Logo (smaller) */}
//           <div className="flex items-center">
//             <Link href='/' title='Read More About - Home page'>
//             <div className="relative text-3xl font-bold text-red-600 font-serif">
//               ReadM
//               <span className="relative inline-block">
//                 <span className="absolute top-0 left-7 text-[8px] font-bold not-italic text-black">
//                   About
//                 </span>
//                 ore
//               </span>
//             </div>
//             </Link>
//           </div>

//           {/* RIGHT - Actions */}
//           <div className="flex items-center gap-4">
//              <nav className="flex-1 mx-8">
//             <ul className="flex justify-center gap-6">
//               {navItems.map((item) => (
//                 <Link key={item} href={getHref(item)} title={`${item} - Latest news and articles`}>
//                 <li
//                   className={`text-xs font-semibold cursor-pointer ${
//                     isActiveLink(item)
//                       ? "text-red-600"
//                       : "text-black hover:text-red-600"
//                   }`}
//                 >
//                   {item}
//                 </li>
//                 </Link>
//               ))}
//             </ul>
//           </nav>
//           </div>
//         </div>
//       </header>

//       {/* SUBSCRIPTION MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
//           <div className="relative bg-white shadow-2xl max-w-2xl w-full h-auto max-h-[33rem] overflow-hidden rounded-lg">
//             {/* Close Button */}
//             <button
//               onClick={handleCloseModal}
//               className="absolute right-4 top-4 z-10 text-gray-400 hover:text-red-600 transition cursor-pointer"
//               aria-label="Close modal"
//             >
//               <IoClose className="h-6 w-6" />
//             </button>

//             <div className="h-full overflow-y-auto p-6 md:p-8">
//               {/* Header Section */}
//               <div className="text-center mb-6">
//                 <div className="inline-block mb-3">
//                   <div className="relative text-4xl font-bold text-red-600 font-serif">
//                     NewsWee
//                     <span className="relative inline-block">
//                       k
//                       <span className="absolute top-1 left-5 text-[10px] font-bold not-italic text-black">
//                         PRO
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                   Stay Informed, Stay Ahead
//                 </h2>
//                 <p className="text-gray-600 text-base">
//                   Subscribe to get the latest news delivered to your inbox
//                 </p>
//               </div>

//               {/* Benefits Section */}
//               <div className="mb-6 space-y-2">
//                 <div className="flex items-start gap-2">
//                   <div className="mt-0.5">
//                     <IoCheckmarkCircle className="h-4 w-4 text-green-500" />
//                   </div>
//                   <p className="text-gray-700 text-sm">Breaking news alerts delivered instantly</p>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="mt-0.5">
//                     <IoCheckmarkCircle className="h-4 w-4 text-green-500" />
//                   </div>
//                   <p className="text-gray-700 text-sm">Exclusive articles and in-depth analysis</p>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="mt-0.5">
//                     <IoCheckmarkCircle className="h-4 w-4 text-green-500" />
//                   </div>
//                   <p className="text-gray-700 text-sm">Weekly newsletter with curated content</p>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="mt-0.5">
//                     <IoCheckmarkCircle className="h-4 w-4 text-green-500" />
//                   </div>
//                   <p className="text-gray-700 text-sm">Ad-free reading experience</p>
//                 </div>
//               </div>

//               {/* Email Input Section */}
//               <div className="mb-5">
//                 <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   placeholder="your.email@example.com"
//                   className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition text-gray-900"
//                 />
                
//                 {/* Success Message */}
//                 {showSuccess && (
//                   <div className="flex items-center gap-2 mt-2">
//                     <IoCheckmarkCircle className="h-5 w-5 text-green-500" />
//                     <span className="text-green-600 font-medium text-sm">Email submitted successfully!</span>
//                   </div>
//                 )}
//               </div>

//               {/* Subscribe Button */}
//               <button
//                 onClick={handleSubscribe}
//                 disabled={!isEmailValid}
//                 className={`w-full py-2.5 rounded-lg font-semibold text-white transition ${
//                   isEmailValid
//                     ? 'bg-red-600 hover:bg-red-700 cursor-pointer'
//                     : 'bg-gray-300 cursor-not-allowed'
//                 }`}
//               >
//                 SUBSCRIBE NOW
//               </button>

//               {/* Footer Text */}
//               <p className="text-center text-xs text-gray-500 mt-4">
//                 By subscribing, you agree to our Terms of Service and Privacy Policy.
//                 <br />
//                 You can unsubscribe at any time.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* MOBILE SLIDE MENU */}
//       {openMenu && (
//         <div className="fixed inset-0 z-50 bg-black/70">
//           <div className="absolute left-0 top-0 h-full w-full text-white p-6">

//             {/* Close */}
//             <button
//               onClick={() => setOpenMenu(false)}
//               className="absolute right-4 top-4 text-xl"
//               aria-label="Close menu"
//             >
//               ✕
//             </button>

          
//             <h2 className="mb-6 text-lg font-semibold text-center mt-10 font-serif">
//               <span className="text-red-600">ReadM</span>
//               <span className="relative inline-block text-red-600">
//                 <span className="absolute top-0 left-3 text-[6px] font-bold text-black">
//                   About
//                 </span>
//                 ore
//               </span>
//             </h2>

//             <ul className="space-y-4 text-lg font-semibold">
//               {navItems.map((item) => (
//                 <Link key={item} href={getHref(item)} title={`${item} - Latest news and articles`}>
//                 <li
//                   className={`cursor-pointer ${
//                     isActiveLink(item)
//                       ? "text-red-500"
//                       : "hover:text-red-500"
//                   }`}
//                 >
//                   {item}
//                 </li>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Header

"use client";
import React from 'react'
import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CategoryData from '../public/data/articles.json'

// ✅ SEO FIX: Extract nav items OUTSIDE the component as a static constant.
// This ensures nav links are available at module-load time and are not hidden
// behind a useEffect / JS execution cycle, making them crawlable by search engines.
const categories = Object.keys(CategoryData).map(
  (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
);
const NAV_ITEMS = ['Home', ...categories];

// Helper functions also moved outside to avoid re-creation on each render
const getHref = (item) => (item === 'Home' ? '/' : `/${item.toLowerCase()}`);

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState({ day: '', date: '' });
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const pathname = usePathname();

  // ✅ Removed the navItems useEffect entirely — now using the static NAV_ITEMS constant above.

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    setCurrentDate({
      day: days[now.getDay()],
      date: `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
    });
  }, []);

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setIsEmailValid(validateEmail(val));
    setShowSuccess(false);
  };

  const handleSubscribe = () => {
    if (isEmailValid) setShowSuccess(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail('');
    setIsEmailValid(false);
    setShowSuccess(false);
  };

  const isActiveLink = (item) =>
    item === 'Home' ? pathname === '/' : pathname === `/${item.toLowerCase()}`;

  return (
    <>
      {/* MAIN HEADER */}
      <header
        className={`shadow-lg bg-white transition-all duration-300 ${isScrolled ? 'lg:hidden' : ''} sticky lg:relative top-0 z-40`}
      >
        <div className="mx-auto flex h-16 lg:h-30 max-w-7xl items-center justify-between px-4">

          {/* LEFT */}
          <div className="flex items-center gap-4 flex-1">
            {/* ✅ Mobile menu button — aria-expanded improves accessibility signals for crawlers */}
            <button
              onClick={() => setOpenMenu(true)}
              className="text-black lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={openMenu}
              aria-controls="mobile-nav"
            >
              <IoIosMenu className="h-6 w-6" />
            </button>

            <div className="hidden lg:flex items-center gap-6 ml-10">
              <div className="flex items-center gap-2 cursor-pointer font-semibold">
                <span className="text-sm">Search</span>
                <FaSearch className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="flex items-center justify-center flex-shrink-0">
            {/* ✅ Descriptive title attribute for the logo link */}
            <Link href="/" title="ReadMoreAbout - Latest News & Articles">
              <div className="relative text-4xl sm:text-5xl lg:text-8xl font-bold text-red-600 font-serif">
                ReadM
                <span className="relative inline-block">
                  <span className="absolute top-0 left-7 lg:top-3 lg:left-27 text-[10px] lg:text-base font-bold not-italic text-black">
                    About
                  </span>
                  ore
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <button className="lg:hidden" aria-label="Search articles">
              <FaSearch className="h-5 w-5 cursor-pointer" />
            </button>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{currentDate.day}</span>
                <span className="text-sm font-bold text-black">{currentDate.date}</span>
              </div>

              {/* ✅ type="button" explicitly set — prevents accidental form submission if ever wrapped in a form */}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition cursor-pointer"
                aria-haspopup="dialog"
                aria-label="Open newsletter subscription modal"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* ✅ DESKTOP NAV — Uses static NAV_ITEMS, rendered on first paint, fully crawlable */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:block border-t border-gray-200"
        >
          <ul className="flex justify-center gap-8 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                {/* ✅ Descriptive, unique title per nav link instead of generic template */}
                <Link
                  href={getHref(item)}
                  title={`${item} - Read the latest ${item === 'Home' ? 'news and articles' : item.toLowerCase() + ' news'}`}
                  className={`text-sm font-semibold cursor-pointer ${
                    isActiveLink(item) ? 'text-red-600' : 'text-black hover:text-red-600'
                  }`}
                  // ✅ aria-current helps screen readers & crawlers identify the active page
                  aria-current={isActiveLink(item) ? 'page' : undefined}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* SCROLLED STICKY HEADER — Desktop only */}
      <header
        className={`hidden lg:block shadow-lg bg-white fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        // ✅ aria-hidden hides the duplicate header from assistive tech & avoids duplicate nav confusion
        aria-hidden={!isScrolled}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 border-b border-gray-200">
          <div className="flex items-center">
            <Link href="/" title="ReadMoreAbout - Home">
              <div className="relative text-3xl font-bold text-red-600 font-serif">
                ReadM
                <span className="relative inline-block">
                  <span className="absolute top-0 left-7 text-[8px] font-bold not-italic text-black">
                    About
                  </span>
                  ore
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* ✅ tabIndex="-1" on scrolled nav so keyboard users don't tab into the hidden duplicate */}
            <nav aria-label="Sticky navigation" aria-hidden={!isScrolled} className="flex-1 mx-8">
              <ul className="flex justify-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <Link
                      href={getHref(item)}
                      title={`${item} - Read the latest ${item === 'Home' ? 'news and articles' : item.toLowerCase() + ' news'}`}
                      className={`text-xs font-semibold cursor-pointer ${
                        isActiveLink(item) ? 'text-red-600' : 'text-black hover:text-red-600'
                      }`}
                      aria-current={isActiveLink(item) ? 'page' : undefined}
                      tabIndex={isScrolled ? 0 : -1}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* SUBSCRIPTION MODAL */}
      {showModal && (
        // ✅ role="dialog" + aria-modal + aria-labelledby for proper modal semantics
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative bg-white shadow-2xl max-w-2xl w-full h-auto max-h-[33rem] overflow-hidden rounded-lg">
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-4 top-4 z-10 text-gray-400 hover:text-red-600 transition cursor-pointer"
              aria-label="Close subscription modal"
            >
              <IoClose className="h-6 w-6" />
            </button>

            <div className="h-full overflow-y-auto p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="inline-block mb-3">
                  <div className="relative text-4xl font-bold text-red-600 font-serif">
                    NewsWee
                    <span className="relative inline-block">
                      k
                      <span className="absolute top-1 left-5 text-[10px] font-bold not-italic text-black">
                        PRO
                      </span>
                    </span>
                  </div>
                </div>
                {/* ✅ id matches aria-labelledby on the dialog */}
                <h2 id="modal-title" className="text-2xl font-bold text-gray-900 mb-2">
                  Stay Informed, Stay Ahead
                </h2>
                <p className="text-gray-600 text-base">
                  Subscribe to get the latest news delivered to your inbox
                </p>
              </div>

              <div className="mb-6 space-y-2">
                {[
                  'Breaking news alerts delivered instantly',
                  'Exclusive articles and in-depth analysis',
                  'Weekly newsletter with curated content',
                  'Ad-free reading experience',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2">
                    <IoCheckmarkCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition text-gray-900"
                  // ✅ aria-describedby links input to success/error messages
                  aria-describedby={showSuccess ? 'email-success' : undefined}
                  aria-invalid={email.length > 0 && !isEmailValid}
                />
                {showSuccess && (
                  <div id="email-success" className="flex items-center gap-2 mt-2" role="status">
                    <IoCheckmarkCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-medium text-sm">Email submitted successfully!</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubscribe}
                disabled={!isEmailValid}
                className={`w-full py-2.5 rounded-lg font-semibold text-white transition ${
                  isEmailValid ? 'bg-red-600 hover:bg-red-700 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'
                }`}
                aria-disabled={!isEmailValid}
              >
                SUBSCRIBE NOW
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
                <br />
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE SLIDE MENU */}
      {openMenu && (
        <div className="fixed inset-0 z-50 bg-black/70">
          {/* ✅ Proper nav landmark with id matching aria-controls on the hamburger button */}
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="absolute left-0 top-0 h-full w-full text-white p-6"
          >
            <button
              type="button"
              onClick={() => setOpenMenu(false)}
              className="absolute right-4 top-4 text-xl"
              aria-label="Close navigation menu"
            >
              ✕
            </button>

            <div className="mb-6 text-center mt-10">
              <Link href="/" onClick={() => setOpenMenu(false)} title="ReadMoreAbout - Home">
                <span className="text-lg font-semibold font-serif">
                  <span className="text-red-600">ReadM</span>
                  <span className="relative inline-block text-red-600">
                    <span className="absolute top-0 left-3 text-[6px] font-bold text-black">About</span>
                    ore
                  </span>
                </span>
              </Link>
            </div>

            {/* ✅ Mobile nav uses the same static NAV_ITEMS — crawlable without JS */}
            <ul className="space-y-4 text-lg font-semibold">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <Link
                    href={getHref(item)}
                    title={`${item} - Read the latest ${item === 'Home' ? 'news and articles' : item.toLowerCase() + ' news'}`}
                    onClick={() => setOpenMenu(false)}
                    className={`block cursor-pointer ${isActiveLink(item) ? 'text-red-500' : 'hover:text-red-500'}`}
                    aria-current={isActiveLink(item) ? 'page' : undefined}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;

