import React from 'react';
import Link from 'next/link';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Contact Us — Read More About",
  description:
    "Get in touch with the Read More About newsroom. Submit story tips, corrections, press inquiries, or general editorial questions.",
  keywords: [
    "contact read more about",
    "news tips",
    "editorial contact",
    "corrections",
    "press inquiry",
    "story tip",
    "newsroom contact",
    "reader feedback"
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Us — Read More About",
    description: "Reach the Read More About newsroom for tips, corrections, media inquiries, and editorial questions.",
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/read-more-about-logo.webp`, width: 1200, height: 630, alt: "Contact Read More About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Read More About",
    description: "Reach the Read More About newsroom for tips, corrections, and editorial questions.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
  },
  robots: { index: true, follow: true },
};

const CONTACT_CARDS = [
  {
    icon: "✉",
    title: "Editorial & General Contact",
    description: "Questions about our reporting, feedback on coverage, or general editorial matters.",
  },
  {
    icon: "➤",
    title: "Confidential News Tips",
    description: "Share information you believe should be investigated. Submissions are handled with discretion.",
  },
  {
    icon: "↺",
    title: "Corrections & Clarifications",
    description: "If you believe we published an error, let us know. We review all correction requests carefully.",
  },
  {
    icon: "👤",
    title: "Media & Press Inquiries",
    description: "Journalists, researchers, and organizations seeking collaboration or official comment.",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Read More About",
    "url": `${SITE_URL}/contact`,
    "description": "Contact the Read More About newsroom for editorial inquiries, news tips, corrections, and press requests.",
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/read-more-about-logo.webp` },
      "contactPoint": [
        { "@type": "ContactPoint", "contactType": "Editorial", "email": "editorial@read-more-about.com" },
        { "@type": "ContactPoint", "contactType": "Customer Support", "email": "tips@read-more-about.com" },
      ],
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${SITE_URL}/contact` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-white">
        <div className="sr-only">
          <h1>Contact Read More About — Independent News Platform</h1>
          <p>Contact the Read More About newsroom for editorial questions, story tips, corrections, and press inquiries.</p>
        </div>

        {/* Hero */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-5" style={{ fontFamily: 'Georgia, serif' }}>
              Get in Touch
            </h1>
            <div className="w-12 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Read More About is an independent newsroom. We welcome tips, corrections, and
              communication from readers, journalists, organizations, and people responding to our coverage.
            </p>
          </div>
        </div>

        {/* Contact cards */}
        <div className="max-w-3xl mx-auto px-6 py-14">
          <div className="space-y-5">
            {CONTACT_CARDS.map(({ icon, title, description }) => (
              <div key={title} className="border border-zinc-200 bg-white p-6 flex items-start gap-5 hover:border-zinc-400 transition-colors">
                <span className="text-2xl mt-0.5 text-zinc-600">{icon}</span>
                <div>
                  <h2 className="font-bold text-zinc-900 text-lg mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                    {title}
                  </h2>
                  <p className="text-zinc-600 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email directory */}
        <div className="max-w-3xl mx-auto px-6 pb-14">
          <div className="bg-zinc-50 border border-zinc-200 p-8 text-center">
            <p className="text-zinc-700 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              Direct your message to the address that best fits your request. When reporting an error or
              challenging a claim, include the article URL, the specific issue, and any supporting details
              so we can route and respond quickly.
            </p>
            <div className="space-y-3 text-sm text-zinc-800">
              <p><span className="font-semibold">Editorial:</span>{' '}
                <a href="mailto:editorial@read-more-about.com" className="underline hover:text-red-600 transition-colors">
                  editorial@read-more-about.com
                </a>
              </p>
              <p><span className="font-semibold">Tips:</span>{' '}
                <a href="mailto:tips@read-more-about.com" className="underline hover:text-red-600 transition-colors">
                  tips@read-more-about.com
                </a>
              </p>
              <p><span className="font-semibold">Corrections:</span>{' '}
                <a href="mailto:corrections@read-more-about.com" className="underline hover:text-red-600 transition-colors">
                  corrections@read-more-about.com
                </a>
              </p>
              <p><span className="font-semibold">Rights, permissions & formal notices:</span>{' '}
                <a href="mailto:legal@read-more-about.com" className="underline hover:text-red-600 transition-colors">
                  legal@read-more-about.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Stay Connected */}
        <div className="border-t border-zinc-200 py-14 text-center">
          <h2 className="text-2xl font-bold mb-6 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
            Stay Connected
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-zinc-700">
            {[
              { label: "X (Twitter)", href: "https://x.com/More528Read" },
              { label: "Instagram", href: "https://www.instagram.com/read_more_about_26/" },
              { label: "Reddit", href: "https://www.reddit.com/user/read-more-about/" },
              { label: "Medium", href: "https://medium.com/@admin_14364" },
              { label: "Substack", href: "https://substack.com/@readmoredaily" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="bg-zinc-50 border-t border-zinc-200 py-8 text-center">
          <p className="text-sm text-zinc-500 italic max-w-xl mx-auto">
            Read More About is an independent digital publication. We are not affiliated with any political
            party, government body, or commercial interest.
          </p>
          <p className="text-xs text-zinc-400 mt-3">Last Updated: June 2026</p>
        </div>
      </div>
    </>
  );
}