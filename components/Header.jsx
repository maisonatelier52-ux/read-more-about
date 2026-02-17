
// "use client";
// import React from 'react'
// import { useState, useEffect } from "react";
// import { IoIosMenu } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";
// import { LuUserRound } from "react-icons/lu";
// import { IoClose } from "react-icons/io5";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import CategoryData from '../public/data/articles.json'

// function Header() {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [currentDate, setCurrentDate] = useState({ day: '', date: '' });
//   const [navItems, setNavItems] = useState([]);
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
//           <div className="flex items-center gap-4">
//             {/* Mobile Menu Icon */}
//             <button
//               onClick={() => setOpenMenu(true)}
//               className="text-black lg:hidden"
//               aria-label="Open menu"
//             >
//               <IoIosMenu className="h-6 w-6" />
//             </button>

//             {/* Desktop MENU + Search */}
//             <div className="hidden lg:flex items-center gap-6">
//               <div className="flex items-center gap-2 cursor-pointer text-red-600 font-semibold">
//                 <span className="text-sm">MENU</span>
//                 <IoIosMenu className="h-5 w-5" />
//               </div>

//               <div className="flex items-center gap-2 cursor-pointer font-semibold">
//                 <span className="text-sm">Search</span>
//                 <FaSearch className="h-4 w-4" />
//               </div>
//             </div>
//           </div>

//           {/* CENTER LOGO */}
//           <div className="flex items-center">
//             <Link href='/' title='NewsWeek PRO - Home page'>
//             <div className="relative text-4xl sm:text-5xl lg:text-8xl font-bold text-red-600 font-serif">
//               NewsWee
//               <span className="relative inline-block">
//                 k
//                 <span className="absolute top-1 left-4 lg:top-4 lg:left-10 text-[10px] lg:text-xs font-bold not-italic text-black">
//                   PRO
//                 </span>
//               </span>
//             </div>
//             </Link>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-4">
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
//             <Link href='/' title='NewsWeek PRO - Home page'>
//             <div className="relative text-3xl font-bold text-red-600 font-serif">
//               NewsWee
//               <span className="relative inline-block">
//                 k
//                 <span className="absolute top-1 left-3 text-[8px] font-bold not-italic text-black">
//                   PRO
//                 </span>
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
//           <div className="relative bg-white shadow-2xl max-w-4xl w-full overflow-hidden">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute right-4 top-4 z-10 text-red-500 hover:text-black transition cursor-pointer"
//               aria-label="Close modal"
//             >
//               <IoClose className="h-8 w-8" />
//             </button>

//             <div className="flex flex-col md:flex-row p-6">
//               {/* LEFT SIDE - Red Section with Image and Text */}
//               <div className="bg-red-500 p-6 md:w-2/5 flex flex-col justify-center items-center text-white">
//                 <h2 className="text-xl font-bold mb-4 text-center">News Week <br /> Magazine PRO</h2>

//                 {/* Image */}
//                 <img
//                   src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
//                   alt="Magazine"
//                   className="w-68 h-58 object-cover shadow-lg mb-4"
//                 />

//                 <button className="bg-white text-xs text-red-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition mb-5">
//                   SUBSCRIBE NOW
//                 </button>
//               </div>

//               {/* RIGHT SIDE - White Section with Menu */}
//               <div className="p-10 md:w-3/5 flex flex-col justify-center">
//                 <h2 className="text-2xl font-bold mb-6 text-black">Company</h2>
//                 <nav className="space-y-4">
//                   <a
//                     href="#"
//                     title="About NewsWeek PRO"
//                     className="block text-md font-medium text-gray-800 hover:text-red-600 transition"
//                   >
//                     About
//                   </a>
//                   <a
                  
//                     href="#"
//                     title="Contact NewsWeek PRO"
//                     className="block text-md font-medium text-gray-800 hover:text-red-600 transition"
//                   >
//                     Contact us
//                   </a>
//                   <a
                  
//                     href="#"
//                     title="NewsWeek PRO Subscription Plans"
//                     className="block text-md font-medium text-gray-800 hover:text-red-600 transition"
//                   >
//                     Subscription Plans
//                   </a>
//                   <a
                  
//                     href="#"
//                     title="My NewsWeek PRO account"
//                     className="block text-md font-medium text-gray-800 hover:text-red-600 transition"
//                   >
//                     My account
//                   </a>
//                 </nav>
//               </div>
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

//             <h2 className="mb-6 text-lg font-semibold text-center mt-10 font-serif">NewsWeek</h2>

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
import { LuUserRound } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CategoryData from '../public/data/articles.json'

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState({ day: '', date: '' });
  const [navItems, setNavItems] = useState([]);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const pathname = usePathname();

  // Extract unique categories from articles.json and add Home at the beginning
  useEffect(() => {
    const categories = Object.keys(CategoryData);
    // Capitalize first letter of each category
    const formattedCategories = categories.map(cat => 
      cat.charAt(0).toUpperCase() + cat.slice(1)
    );
    // Add "Home" at the beginning
    setNavItems(['Home', ...formattedCategories]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      const dayName = days[now.getDay()];
      const monthName = months[now.getMonth()];
      const dayNumber = now.getDate();
      const year = now.getFullYear();
      
      setCurrentDate({
        day: dayName,
        date: `${monthName} ${dayNumber}, ${year}`
      });
    };

    updateDate();
  }, []);

  // Email validation function
  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
    setShowSuccess(false);
  };

  // Handle subscribe button click
  const handleSubscribe = () => {
    if (isEmailValid) {
      setShowSuccess(true);
    }
  };

  // Reset modal state when closed
  const handleCloseModal = () => {
    setShowModal(false);
    setEmail('');
    setIsEmailValid(false);
    setShowSuccess(false);
  };

  // Helper function to check if link is active
  const isActiveLink = (item) => {
    if (item === 'Home') {
      return pathname === '/';
    }
    return pathname === `/${item.toLowerCase()}`;
  };

  // Helper function to get the href for each item
  const getHref = (item) => {
    if (item === 'Home') {
      return '/';
    }
    return `/${item.toLowerCase()}`;
  };

  return (
    <>
      {/* MAIN HEADER - Hidden on scroll for desktop, always sticky on mobile */}
      <header className={`shadow-lg bg-white transition-all duration-300 ${isScrolled ? 'lg:hidden' : ''} sticky lg:relative top-0 z-40`}>
        <div className="mx-auto flex h-16 lg:h-30 max-w-7xl items-center justify-between px-4">

          {/* LEFT */}
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile Menu Icon */}
            <button
              onClick={() => setOpenMenu(true)}
              className="text-black lg:hidden"
              aria-label="Open menu"
            >
              <IoIosMenu className="h-6 w-6" />
            </button>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center gap-6 ml-10">
              <div className="flex items-center gap-2 cursor-pointer font-semibold">
                <span className="text-sm">Search</span>
                <FaSearch className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="flex items-center justify-center flex-shrink-0">
            <Link href='/' title='Read More About - Home page'>
            <div className="relative text-4xl sm:text-5xl lg:text-8xl font-bold text-red-600 font-serif">
              NewsWee
              <span className="relative inline-block">
                k
                <span className="absolute top-1 left-4 lg:top-4 lg:left-10 text-[10px] lg:text-xs font-bold not-italic text-black">
                  PRO
                </span>
              </span>
            </div>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Mobile Search Icon */}
            <button className="lg:hidden" aria-label="Search">
              <FaSearch className="h-5 w-5 cursor-pointer" />
            </button>

            {/* Desktop Date + Subscribe */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{currentDate.day}</span>
                <span className="text-sm font-bold text-black">{currentDate.date}</span>
              </div>

              <button 
                onClick={() => setShowModal(true)}
                className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block border-t border-gray-200">
          <ul className="flex justify-center gap-8 py-4">
            {navItems.map((item) => (
              <Link key={item} href={getHref(item)} title={`${item} - Latest news and articles`}>
              <li
                className={`text-sm font-semibold cursor-pointer ${
                  isActiveLink(item)
                    ? "text-red-600"
                    : "text-black hover:text-red-600"
                }`}
              >
                {item}
              </li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>

      {/* SCROLLED HEADER - Only shows on desktop when scrolled */}
      <header className={`hidden lg:block shadow-lg bg-white fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 border-b border-gray-200">
          
          {/* LEFT - Logo (smaller) */}
          <div className="flex items-center">
            <Link href='/' title='Read More About - Home page'>
            <div className="relative text-3xl font-bold text-red-600 font-serif">
              NewsWee
              <span className="relative inline-block">
                k
                <span className="absolute top-1 left-3 text-[8px] font-bold not-italic text-black">
                  PRO
                </span>
              </span>
            </div>
            </Link>
          </div>

          {/* RIGHT - Actions */}
          <div className="flex items-center gap-4">
             <nav className="flex-1 mx-8">
            <ul className="flex justify-center gap-6">
              {navItems.map((item) => (
                <Link key={item} href={getHref(item)} title={`${item} - Latest news and articles`}>
                <li
                  className={`text-xs font-semibold cursor-pointer ${
                    isActiveLink(item)
                      ? "text-red-600"
                      : "text-black hover:text-red-600"
                  }`}
                >
                  {item}
                </li>
                </Link>
              ))}
            </ul>
          </nav>
          </div>
        </div>
      </header>

      {/* SUBSCRIPTION MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative bg-white shadow-2xl max-w-2xl w-full h-auto max-h-[33rem] overflow-hidden rounded-lg">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 z-10 text-gray-400 hover:text-red-600 transition cursor-pointer"
              aria-label="Close modal"
            >
              <IoClose className="h-6 w-6" />
            </button>

            <div className="h-full overflow-y-auto p-6 md:p-8">
              {/* Header Section */}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Stay Informed, Stay Ahead
                </h2>
                <p className="text-gray-600 text-base">
                  Subscribe to get the latest news delivered to your inbox
                </p>
              </div>

              {/* Benefits Section */}
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    <IoCheckmarkCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-gray-700 text-sm">Breaking news alerts delivered instantly</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    <IoCheckmarkCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-gray-700 text-sm">Exclusive articles and in-depth analysis</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    <IoCheckmarkCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-gray-700 text-sm">Weekly newsletter with curated content</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-0.5">
                    <IoCheckmarkCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-gray-700 text-sm">Ad-free reading experience</p>
                </div>
              </div>

              {/* Email Input Section */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition text-gray-900"
                />
                
                {/* Success Message */}
                {showSuccess && (
                  <div className="flex items-center gap-2 mt-2">
                    <IoCheckmarkCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-medium text-sm">Email submitted successfully!</span>
                  </div>
                )}
              </div>

              {/* Subscribe Button */}
              <button
                onClick={handleSubscribe}
                disabled={!isEmailValid}
                className={`w-full py-2.5 rounded-lg font-semibold text-white transition ${
                  isEmailValid
                    ? 'bg-red-600 hover:bg-red-700 cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                SUBSCRIBE NOW
              </button>

              {/* Footer Text */}
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
          <div className="absolute left-0 top-0 h-full w-full text-white p-6">

            {/* Close */}
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute right-4 top-4 text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            <h2 className="mb-6 text-lg font-semibold text-center mt-10 font-serif">NewsWeek</h2>

            <ul className="space-y-4 text-lg font-semibold">
              {navItems.map((item) => (
                <Link key={item} href={getHref(item)} title={`${item} - Latest news and articles`}>
                <li
                  className={`cursor-pointer ${
                    isActiveLink(item)
                      ? "text-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  {item}
                </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

