// app/advertising-policy/page.jsx
import React from 'react';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Advertising Policy | Read More About",
  description:
    "Learn how Read More About labels sponsored content, advertising, affiliate links, and commercial relationships.",
  keywords: [
    "advertising policy",
    "read more about advertising",
    "sponsored content policy",
    "native advertising disclosure",
    "affiliate links policy",
    "paid content labeling",
    "commercial relationships news",
    "editorial advertising separation"
  ],
  alternates: { canonical: `${SITE_URL}/advertising-policy` },
  openGraph: {
    title: "Advertising Policy | Read More About",
    description: "Learn how Read More About labels sponsored content, advertising, affiliate links, and commercial relationships.",
    url: `${SITE_URL}/advertising-policy`,
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/read-more-about-logo.webp`, width: 1200, height: 630, alt: "Advertising Policy - Read More About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertising Policy | Read More About",
    description: "Learn how Read More About labels sponsored content, advertising, affiliate links, and commercial relationships.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
  },
  robots: { index: true, follow: true },
};

export default function AdvertisingPolicy() {
  const lastUpdated = "June 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advertising Policy | Read More About",
    "url": `${SITE_URL}/advertising-policy`,
    "description": "Read More About's advertising and sponsored content policy for transparency and reader trust.",
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/read-more-about-logo.webp` },
    },
    "dateModified": "2026-06-01",
    "inLanguage": "en-US",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Advertising Policy", "item": `${SITE_URL}/advertising-policy` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-white">
        {/* SEO hidden content - no H1 tags here */}
        <div className="sr-only">
          <p>
            Read More About advertising policy explains sponsored content,
            affiliate disclosures, advertising transparency, and editorial independence.
          </p>
        </div>

        {/* Hero */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
              <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Transparency</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Read More About Advertising Policy
            </h1>
            <p className="text-zinc-400 text-base">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

          {/* Intro */}
          <div className="mb-12 pb-12 border-b border-zinc-200">
            <p className="text-xl leading-relaxed text-zinc-700" style={{ fontFamily: 'Georgia, serif' }}>
              Read More About separates commercial material from editorial reporting and aims to label
              advertising, sponsorships, affiliate links, and other paid relationships clearly and
              conspicuously for readers.
            </p>
          </div>

          {/* Editorial separation */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Editorial Separation
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Commercial relationships do not grant editorial control. Reporting decisions, headlines,
              source selection, framing, and publication timing are not sold as part of an advertising,
              affiliate, sponsorship, or partnership arrangement.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our standard is that journalism and advertising should remain distinguishable without
              guesswork. A reader should not have to infer whether content is paid-for, promotional,
              or independently reported.
            </p>
          </section>

          {/* How paid material is labeled */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              How Paid Material Is Labeled
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-6">
              When content is paid-for, sponsored, or published because of a commercial arrangement,
              the disclosure appears in a clear location using language ordinary readers can understand
              before they engage with the material.
            </p>
            <div className="space-y-3">
              {[
                "Clear labels may include: Advertisement, Ad, Sponsored, Paid Content, or Sponsored Advertising Content.",
                "The disclosure appears close enough to the content that a reader sees it before engaging, not only after scrolling deep into the page.",
                "Visual design, bylines, and page layout should not make paid material indistinguishable from independently reported journalism.",
                "Vague labels that could confuse readers should be avoided if they do not make the commercial nature obvious.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">✱</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Native, branded, partner content */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Native, Branded, and Partner Content
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              If Read More About publishes sponsored features, branded content, or partner-funded
              explainers, those pages carry a disclosure that is prominent, plain-language, and durable
              across desktop and mobile views.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              A sponsor may purchase a clearly labeled promotional package, but a sponsor does not buy
              the right to masquerade as the newsroom, to receive a deceptive byline, or to alter
              unrelated reporting.
            </p>
          </section>

          {/* Affiliate links */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Affiliate Links, Commerce, and Material Connections
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              If Read More About uses affiliate links, referral arrangements, or any other material
              connection that could result in compensation when a reader clicks or makes a purchase,
              that relationship is disclosed clearly in or near the affected content.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Commerce-related disclosures should be written for readers, not buried in legal shorthand.
              The point is to let readers understand when a recommendation, link, or product mention
              could generate revenue.
            </p>
            <div className="space-y-3">
              {[
                "Affiliate or referral disclosures are clear and conspicuous.",
                "A material connection is not hidden only in a general policy page if it affects a specific piece of content.",
                "Editorial recommendations are not conditioned on compensation alone.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">✱</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Political advertising */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Political and Issue Advertising
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              If Read More About accepts political, advocacy, or issue-based advertising, that material
              is clearly labeled as commercial content and is not presented as reported journalism or
              independent analysis.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Acceptance of an advertisement does not constitute endorsement of a campaign, candidate,
              issue position, organization, or claim contained in the advertisement.
            </p>
          </section>

          {/* Practices we avoid */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Practices Read More About Does Not Use
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <div className="space-y-3">
              {[
                "Selling editorial conclusions or offering favorable coverage in exchange for payment or access.",
                "Using a newsroom byline, headline style, or article layout to disguise paid material where the commercial nature is not obvious.",
                "Allowing an advertiser, sponsor, or affiliate partner to control unrelated reporting.",
                "Hiding a material connection in a place a reasonable reader would not notice.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700 bg-red-50 px-5 py-4">
                  <span className="text-red-600 font-bold text-sm mt-0.5">✕</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Questions */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Questions, Complaints, and Review Requests
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Readers, advertisers, and partners may contact Read More About if they believe commercial
              material was mislabeled or that the boundary between advertising and editorial work was
              not clear enough.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              When a disclosure issue is substantiated, the newsroom's expectation is that the label,
              placement, or page treatment is corrected promptly.
            </p>
          </section>

          {/* Contact */}
          <div className="bg-zinc-50 border border-zinc-200 p-8">
            <h3 className="font-bold text-zinc-900 mb-4 text-lg" style={{ fontFamily: 'Georgia, serif' }}>Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Advertising and Partnerships</p>
                <a 
                  href="mailto:editorial@read-more-about.com" 
                  title="Contact Read More About regarding advertising and partnerships"
                  className="text-red-600 hover:underline"
                >
                  editorial@read-more-about.com
                </a>
              </div>
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Reader Concerns</p>
                <a 
                  href="mailto:corrections@read-more-about.com" 
                  title="Report advertising disclosure concerns to Read More About"
                  className="text-red-600 hover:underline"
                >
                  corrections@read-more-about.com
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-400 text-right mt-6">Last Updated: {lastUpdated}</p>
        </div>
      </div>
    </>
  );
}