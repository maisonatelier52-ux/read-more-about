import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="relative bg-black text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block border-2 border-white px-4 py-1 mb-6 text-xs tracking-widest font-semibold">
            EST. 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            About Our Publication
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto font-light">
            Delivering truth, context, and perspective to readers worldwide since our founding.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Our Mission
            </h2>
            <div className="h-1 w-20 bg-red-600 mb-8"></div>
            <p className="text-lg text-zinc-700 leading-relaxed mb-6">
              We are committed to delivering high-quality journalism that informs, investigates, and inspires. Our mission is to provide our readers with accurate, unbiased news coverage and thoughtful analysis of the events shaping our world.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              In an era of information overload, we believe in the power of careful reporting, fact-checking, and ethical journalism to serve the public interest and strengthen democratic discourse.
            </p>
          </div>
          <div className="bg-zinc-900 text-white p-10">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Our Values
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1 text-xl">▪</span>
                <div>
                  <strong className="block mb-1">Integrity</strong>
                  <span className="text-zinc-400 text-sm">Unwavering commitment to truth and accuracy</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1 text-xl">▪</span>
                <div>
                  <strong className="block mb-1">Independence</strong>
                  <span className="text-zinc-400 text-sm">Free from political and commercial influence</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1 text-xl">▪</span>
                <div>
                  <strong className="block mb-1">Excellence</strong>
                  <span className="text-zinc-400 text-sm">Setting the highest standards in journalism</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1 text-xl">▪</span>
                <div>
                  <strong className="block mb-1">Accountability</strong>
                  <span className="text-zinc-400 text-sm">Transparent about our methods and mistakes</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-white border-y border-zinc-200 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-zinc-700 leading-relaxed mb-6">
              Founded in 2024, our publication emerged from a vision to create a news platform that combines traditional journalistic values with modern digital innovation. What began as a small team of passionate journalists has grown into a comprehensive news organization serving millions of readers globally.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Throughout our journey, we've remained dedicated to our core principles: delivering news that matters, investigating stories that need telling, and giving voice to communities that deserve to be heard. Our newsroom operates around the clock, bringing you breaking news, in-depth analysis, and compelling storytelling across politics, business, technology, culture, and beyond.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Today, we continue to evolve and adapt to meet the changing needs of our audience while staying true to the fundamental values that have guided us from the beginning. Our commitment to quality journalism remains unwavering as we look toward the future.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Team */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-zinc-900 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Editorial Leadership
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-32 h-32 bg-zinc-900 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold transition-transform group-hover:scale-105">
              ES
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-1">Editor-in-Chief</h3>
            <p className="text-zinc-600 text-sm mb-3">Editorial Strategy</p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Leading our newsroom with 20+ years of award-winning journalism experience.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-32 h-32 bg-zinc-900 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold transition-transform group-hover:scale-105">
              MD
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-1">Managing Director</h3>
            <p className="text-zinc-600 text-sm mb-3">Operations</p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Overseeing daily operations and ensuring journalistic excellence across all platforms.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-32 h-32 bg-zinc-900 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold transition-transform group-hover:scale-105">
              DI
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-1">Digital Innovation Director</h3>
            <p className="text-zinc-600 text-sm mb-3">Technology & Growth</p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Driving digital transformation and expanding our reach to new audiences.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-zinc-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Get in Touch
          </h2>
          <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
            Have a story tip? Questions about our coverage? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:editorial@newspaper.com" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold transition-colors">
              Contact Editorial
            </a>
            <Link href="/privacy-policy" className="bg-transparent border-2 border-white hover:bg-white hover:text-zinc-900 text-white px-8 py-3 font-semibold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}