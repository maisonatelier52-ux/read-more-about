
"use client";
import React from 'react'
import { useState, useEffect, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import CategoryData from '../public/data/articles.json'

// ✅ SEO FIX: Extract nav items OUTSIDE the component as a static constant.
const categories = Object.keys(CategoryData).map(
  (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
);
const NAV_ITEMS = ['Home', ...categories];

// Helper functions also moved outside to avoid re-creation on each render
const getHref = (item) => (item === 'Home' ? '/' : `/${item.toLowerCase()}`);

// ✅ Build a flat searchable list of all articles from every category
const ALL_ARTICLES = Object.entries(CategoryData).flatMap(([category, articles]) =>
  articles.map((article) => ({
    title: article.title,
    slug: article.slug,
    category: category,
    excerpt: article.excerpt || '',
  }))
);

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState({ day: '', date: '' });
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ── Search state ──────────────────────────────────────────────────────────
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  // ─────────────────────────────────────────────────────────────────────────

  const pathname = usePathname();
  const router = useRouter();

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

  // ── Focus input when search opens ────────────────────────────────────────
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // ── Close search on outside click ────────────────────────────────────────
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        closeSearch();
      }
    };
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  // ── Close search on route change ─────────────────────────────────────────
  useEffect(() => {
    closeSearch();
  }, [pathname]);

  // ── Live search filter ────────────────────────────────────────────────────
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length < 2) {
      setSearchResults([]);
      return;
    }

    const lower = query.toLowerCase();
    const filtered = ALL_ARTICLES.filter(
      (article) =>
        article.title.toLowerCase().includes(lower) ||
        article.excerpt.toLowerCase().includes(lower)
    ).slice(0, 8); // Max 8 results

    setSearchResults(filtered);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Escape') closeSearch();
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleArticleClick = (category, slug) => {
    // Close overlay first, then navigate on next tick so the
    // unmount doesn't swallow the touch/click event on mobile
    closeSearch();
    setTimeout(() => {
      router.push(`/${category}/${slug}`);
    }, 10);
  };

  // Highlight matching text in results
  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-red-100 text-red-700 rounded px-0.5 font-semibold not-italic">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };
  // ─────────────────────────────────────────────────────────────────────────

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
            <button
              onClick={() => setOpenMenu(true)}
              className="text-black lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={openMenu}
              aria-controls="mobile-nav"
            >
              <IoIosMenu className="h-6 w-6" />
            </button>

            {/* ── DESKTOP SEARCH ── */}
            <div className="hidden lg:flex items-center gap-6 ml-10 relative" ref={searchContainerRef}>
              {!searchOpen ? (
                /* Search trigger button */
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center gap-2 cursor-pointer font-semibold text-black hover:text-red-600 transition-colors group"
                  aria-label="Open search"
                >
                  <span className="text-sm">Search</span>
                  <FaSearch className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </button>
              ) : (
                /* Expanded search input + results */
                <div className="flex flex-col">
                  {/* Input row */}
                  <div className="flex items-center gap-2 border-b-2 border-red-600 pb-1 w-72">
                    <FaSearch className="h-4 w-4 text-red-600 flex-shrink-0" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onKeyDown={handleSearchKeyDown}
                      placeholder="Search articles..."
                      className="flex-1 text-sm outline-none bg-transparent text-black placeholder-gray-400"
                      aria-label="Search articles"
                      aria-autocomplete="list"
                      aria-expanded={searchResults.length > 0}
                    />
                    <button
                      type="button"
                      onClick={closeSearch}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      aria-label="Close search"
                    >
                      <IoClose className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Results dropdown */}
                  {searchResults.length > 0 && (
                    <div
                      className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden z-50"
                      role="listbox"
                      aria-label="Search results"
                    >
                      {searchResults.map((article, idx) => (
                        <button
                          key={`${article.category}-${article.slug}`}
                          type="button"
                          onClick={() => handleArticleClick(article.category, article.slug)}
                          className="w-full text-left px-4 py-3 hover:bg-red-50 transition-colors border-b border-gray-50 last:border-0 group"
                          role="option"
                        >
                          <div className="flex items-start gap-3">
                            {/* Category pill */}
                            <span className="mt-0.5 flex-shrink-0 text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded">
                              {article.category}
                            </span>
                            {/* Title with highlight */}
                            <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2">
                              {highlightMatch(article.title, searchQuery)}
                            </span>
                          </div>
                        </button>
                      ))}

                      {/* Footer hint */}
                      <div className="px-4 py-2 bg-gray-50 text-xs text-gray-400">
                        {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                      </div>
                    </div>
                  )}

                  {/* No results state */}
                  {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                    <div className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-lg shadow-2xl border border-gray-100 px-4 py-6 z-50 text-center">
                      <p className="text-sm text-gray-500">No articles found for <span className="font-semibold text-gray-700">"{searchQuery}"</span></p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="flex items-center justify-center flex-shrink-0">
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
            {/* ── MOBILE SEARCH ICON ── */}
            <button
              className="lg:hidden"
              aria-label="Search articles"
              onClick={() => setSearchOpen(true)}
            >
              <FaSearch className="h-5 w-5 cursor-pointer" />
            </button>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{currentDate.day}</span>
                <span className="text-sm font-bold text-black">{currentDate.date}</span>
              </div>

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

        {/* DESKTOP NAV */}
        <nav aria-label="Main navigation" className="hidden lg:block border-t border-gray-200">
          <ul className="flex justify-center gap-8 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <Link
                  href={getHref(item)}
                  title={`${item} - Read the latest ${item === 'Home' ? 'news and articles' : item.toLowerCase() + ' news'}`}
                  className={`text-sm font-semibold cursor-pointer ${
                    isActiveLink(item) ? 'text-red-600' : 'text-black hover:text-red-600'
                  }`}
                  aria-current={isActiveLink(item) ? 'page' : undefined}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ── MOBILE SEARCH OVERLAY ── */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 flex flex-col">
          <div className="bg-white px-4 pt-4 pb-3 shadow-lg">
            <div className="flex items-center gap-3 border-b-2 border-red-600 pb-2">
              <FaSearch className="h-4 w-4 text-red-600 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search articles..."
                autoFocus
                className="flex-1 text-base outline-none bg-transparent text-black placeholder-gray-400"
                aria-label="Search articles"
              />
              <button
                type="button"
                onClick={closeSearch}
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Close search"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile results list */}
          <div className="bg-white overflow-y-auto flex-1">
            {searchResults.length > 0 && (
              <>
                {searchResults.map((article) => (
                  <button
                    key={`${article.category}-${article.slug}`}
                    type="button"
                    onTouchStart={() => handleArticleClick(article.category, article.slug)}
                    onClick={() => handleArticleClick(article.category, article.slug)}
                    className="w-full text-left px-4 py-4 active:bg-red-50 border-b border-gray-100 group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <span className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors leading-snug">
                        {highlightMatch(article.title, searchQuery)}
                      </span>
                    </div>
                  </button>
                ))}
                <p className="px-4 py-3 text-xs text-gray-400 bg-gray-50">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                </p>
              </>
            )}

            {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
              <div className="px-4 py-10 text-center">
                <p className="text-sm text-gray-500">
                  No articles found for <span className="font-semibold text-gray-700">"{searchQuery}"</span>
                </p>
              </div>
            )}

            {searchQuery.trim().length < 2 && (
              <div className="px-4 py-10 text-center">
                <p className="text-sm text-gray-400">Type at least 2 characters to search…</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SCROLLED STICKY HEADER — Desktop only */}
      <header
        className={`hidden lg:block shadow-lg bg-white fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
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
                  <div className="relative text-3xl font-bold text-red-600 font-serif">
                    ReadM
                    <span className="relative inline-block">
                      <span className="absolute top-0 left-7 text-[8px] font-bold not-italic text-black">
                        About
                      </span>
                      ore
                    </span>
                  </div>
                </div>
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