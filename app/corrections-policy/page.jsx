import React from 'react';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Corrections Policy — Read More About",
  description:
    "How Read More About handles errors, issues corrections, and maintains transparency with readers about changes to published content.",
  keywords: [
    "corrections policy",
    "read more about corrections",
    "news corrections",
    "error correction",
    "journalism transparency",
    "factual errors",
    "editorial corrections",
    "update policy"
  ],
  alternates: { canonical: `${SITE_URL}/corrections-policy` },
  openGraph: {
    title: "Corrections Policy — Read More About",
    description: "How we handle errors and corrections in our independent news coverage.",
    url: `${SITE_URL}/corrections-policy`,
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/read-more-about-logo.webp`, width: 1200, height: 630, alt: "Corrections Policy - Read More About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy — Read More About",
    description: "How we handle errors and corrections in our independent news coverage.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
  },
  robots: { index: true, follow: true },
};

export default function CorrectionsPolicy() {
  const lastUpdated = "June 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Corrections Policy — Read More About",
    "url": `${SITE_URL}/corrections-policy`,
    "description": "Read More About's corrections policy for handling factual errors and maintaining journalistic integrity.",
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/read-more-about-logo.webp` },
      "correctionsPolicy": `${SITE_URL}/corrections-policy`,
    },
    "dateModified": "2026-06-01",
    "inLanguage": "en-US",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Corrections Policy", "item": `${SITE_URL}/corrections-policy` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-white">
        <div className="sr-only">
          <h1>Corrections Policy — Read More About</h1>
          <p>How Read More About identifies, corrects, and discloses errors in published news articles.</p>
        </div>

        {/* Hero */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
              <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Standards</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Corrections Policy
            </h1>
            <p className="text-zinc-400 text-base">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

          {/* Intro */}
          <div className="mb-12 pb-12 border-b border-zinc-200">
            <p className="text-xl leading-relaxed text-zinc-700" style={{ fontFamily: 'Georgia, serif' }}>
              Accuracy sits at the core of everything Read More About publishes. No newsroom is
              infallible — when we make mistakes, we correct them promptly, visibly, and without
              obscuring what was originally published.
            </p>
          </div>

          {/* How we handle mistakes */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              How We Handle Errors
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-2" />
            <p className="text-zinc-500 text-sm mb-8">Different types of errors require different responses:</p>

            <div className="space-y-6">
              {[
                {
                  icon: "✎",
                  title: "Minor errors",
                  body: "Spelling mistakes, grammatical issues, or typographical errors that do not affect the meaning or factual content of an article are corrected without a formal correction note.",
                },
                {
                  icon: "◎",
                  title: "Factual errors",
                  body: "Errors involving names, dates, figures, quotes, or material facts are corrected directly in the article. A clearly labeled correction note is added explaining what changed and why.",
                },
                {
                  icon: "◎",
                  title: "Developing stories",
                  body: "As events evolve, articles may be updated to incorporate newly verified information. Updates are timestamped so readers can track how coverage has changed over time.",
                },
                {
                  icon: "◉",
                  title: "Significant errors",
                  body: "Where an error materially affects the meaning, fairness, or accuracy of a story, the article is reviewed by a senior editor and a substantive correction or clarification note is published at the top of the piece.",
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <span className="text-zinc-400 text-lg mt-0.5">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-zinc-900 mb-1">{title}</h3>
                    <p className="text-zinc-700 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Where corrections appear */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Where Corrections Appear
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Corrections are made directly in the affected article — we do not remove errors silently or
              redirect readers elsewhere. If an error is identified after publication, the correction will
              appear in the same article, clearly labeled with the date it was issued.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Depending on the nature of the mistake, Read More About may use a correction note,
              clarification note, update note, or editor's note. Each serves a distinct purpose and is
              chosen based on what a reader most needs to understand what changed.
            </p>
          </section>

          {/* What a request should include */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              What a Correction Request Should Include
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-6">
              To help us review a request efficiently, please include the following when you contact us:
            </p>
            <div className="space-y-3">
              {[
                "The article URL or headline",
                "The specific sentence, figure, or claim you believe is incorrect",
                "The factual basis for your objection",
                "Any supporting documentation you want the newsroom to review",
                "Your contact details for follow-up if needed",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-zinc-50 px-5 py-4">
                  <span className="text-red-600 font-bold text-sm mt-0.5">✱</span>
                  <span className="text-zinc-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Reader submissions */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Reader Submissions
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-6">
              Readers are a critical part of our accuracy process. If you spot an error in any article,
              we want to hear from you. Our editorial team reviews every substantive correction request
              and responds where appropriate.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 p-5 flex items-center gap-3">
              <span className="text-lg">✉</span>
              <a
                href="mailto:corrections@read-more-about.com"
                className="text-zinc-800 font-medium hover:text-red-600 transition-colors text-sm"
              >
                corrections@read-more-about.com →
              </a>
            </div>
          </section>

          {/* Commitment to transparency */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Our Commitment to Transparency
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <ul className="space-y-3">
              {[
                "We do not remove errors without acknowledgment.",
                "Significant changes to published articles are disclosed clearly to readers.",
                "All correction requests are reviewed respectfully and given fair consideration.",
                "We do not silently alter the substance of a published article when a correction note is warranted.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">◎</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why it matters */}
          <div className="bg-zinc-900 text-white p-10 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Why This Matters
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-xl mx-auto">
              Trust is earned by acknowledging mistakes openly. By correcting errors clearly and
              promptly, we aim to produce journalism that readers can rely on — including when we fall short.
            </p>
          </div>

          <p className="text-xs text-zinc-400 text-right mt-6">Last Updated: {lastUpdated}</p>
        </div>
      </div>
    </>
  );
}