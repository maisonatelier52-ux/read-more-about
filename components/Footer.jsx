

"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaChevronUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import articleData from "../public/data/articles.json";
import authorData from '../public/data/authors.json';
import { useMemo } from 'react';

export default function Footer() {
  // Get unique categories from articles
  const categories = useMemo(() => {
    const allCategories = new Set();
    Object.keys(articleData).forEach(category => {
      if (Array.isArray(articleData[category]) && articleData[category].length > 0) {
        allCategories.add(category);
      }
    });
    return Array.from(allCategories);
  }, []);

  // Get latest 3 articles from different categories
  const latestArticles = useMemo(() => {
    const allArticles = [];
    
    // Flatten all articles with their category
    Object.entries(articleData).forEach(([category, articles]) => {
      if (Array.isArray(articles)) {
        articles.forEach(article => {
          allArticles.push({
            ...article,
            categoryName: category
          });
        });
      }
    });

    // Sort by date (newest first)
    allArticles.sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return dateB - dateA;
    });

    // Get latest 3 from different categories
    const selectedArticles = [];
    const usedCategories = new Set();

    for (const article of allArticles) {
      if (!usedCategories.has(article.categoryName) && selectedArticles.length < 3) {
        selectedArticles.push(article);
        usedCategories.add(article.categoryName);
      }
      if (selectedArticles.length === 3) break;
    }

    return selectedArticles;
  }, []);

  // Get all authors
  const authors = useMemo(() => {
    return authorData.categories.map(cat => cat.author);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#eaeaea] border-t border-gray-300 relative">
      {/* Logo and Navigation Bar */}
      <div className="px-7">
        <div className="border-b-2 border-black">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Logo */}
             <Link href="/" title="Read More About - Home page" className="text-4xl font-bold font-serif">
              <span>ReadM</span>
              <span className="relative inline-block">
                <span className="absolute top-0 left-7 text-xs font-bold not-italic text-black font-sans">
                  About
                </span>
                ore
              </span>
            </Link>

              {/* Navigation Links */}
              <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
                {categories.map((category) => (
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
              Read More About delivers comprehensive, fact-based journalism covering world events, politics, business, and culture. We're committed to keeping you informed with accurate, timely reporting you can trust.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                title="Follow us on Facebook"
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="#" 
                title="Follow us on Instagram"
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a 
                href="#" 
                title="Follow us on Twitter"
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaXTwitter size={16} />
              </a>
              <a 
                href="#" 
                title="Subscribe to our YouTube channel"
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" title="About NewsWeek PRO" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" title="Contact NewsWeek PRO" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" title="NewsWeek PRO Privacy Policy" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  Privacy-Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" title="NewsWeek PRO Terms and Conditions" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* The Latest Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">The latest</h3>
            <div className="space-y-4">
              {latestArticles.map((article) => (
                <div key={article.id}>
                  <Link 
                    href={`/${article.categoryName}/${article.slug}`}
                    title={article.title}
                    className="text-sm font-bold leading-tight hover:text-red-600 transition-colors block mb-1"
                  >
                    {article.title}
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="font-semibold uppercase">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Authors Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Our Authors</h3>
            <ul className="space-y-2">
              {authors.map((author) => (
                <li key={author.id}>
                  <Link
                    href={`/author/${author.name.toLowerCase().replace(/\s+/g, '-')}`}
                    title={`${author.name} - Author Profile`}
                    className="text-gray-700 hover:text-red-600 transition-colors text-sm"
                  >
                    {author.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-300 bg-[#eaeaea]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <p className="text-sm text-gray-700">
            © 2021 tagDiv. All Rights Reserved. Made with Newspaper Theme.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg z-50 cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={20} />
      </button>
    </footer>
  );
}