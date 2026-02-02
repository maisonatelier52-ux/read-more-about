"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaChevronUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const latestArticles = [
    {
      id: 1,
      title: "Social Media Marketing for Franchises is Meant for Women",
      category: "MARKETING",
      date: "September 29, 2021",
    },
    {
      id: 2,
      title: "A Look at How Social Media & Mobile Gaming Can Increase Sales",
      category: "FINANCE",
      date: "September 29, 2021",
    },
    {
      id: 3,
      title: "Cover Girl Announces Star Shine Makeup Line is Due for Next December",
      category: "MAKE-UP",
      date: "September 29, 2021",
    },
  ];

  const navLinks = [
    "Music",
    "Celebrity",
    "Politics",
    "Finance",
    "Travel",
    "Food",
    "Marketing",
    "Tech",
    "Make-up",
  ];

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
         <div className=" border-b-2 border-black ">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="text-4xl font-bold italic font-serif">
              NewsWeek<span className="text-xs align-super not-italic font-sans">PRO</span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-red-600 transition-colors font-semibold"
                >
                  {link}
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
              Each template in our ever growing studio library can be added and moved around within any page effortlessly with one click.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaXTwitter size={16} />
              </a>
              <a 
                href="#" 
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
                <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
                  Privacy-Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-700 hover:text-red-600 transition-colors text-sm">
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
                    href="#" 
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

          {/* Subscribe Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Subscribe</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-red-600 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 font-bold text-sm hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
              >
                I WANT IN
                <span>→</span>
              </button>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-xs text-gray-600 cursor-pointer">
                  I've read and accept the{" "}
                  <Link href="/privacy" className="text-red-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </form>
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