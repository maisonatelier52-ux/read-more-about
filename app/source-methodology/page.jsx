// app/source-methodology/page.jsx
import React from 'react';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Source Methodology | Read More About",
  description:
    "Learn how Read More About sources, verifies, attributes, and reviews information before publication.",
  keywords: [
    "source methodology",
    "read more about sources",
    "journalism sourcing",
    "news verification",
    "reporting methodology",
    "anonymous sources policy",
    "fact checking process",
    "newsroom transparency"
  ],
  alternates: { canonical: `${SITE_URL}/source-methodology` },
  openGraph: {
    title: "Source Methodology | Read More About",
    description: "Learn how Read More About sources, verifies, attributes, and reviews information before publication.",
    url: `${SITE_URL}/source-methodology`,
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/read-more-about-logo.webp`, width: 1200, height: 630, alt: "Source Methodology - Read More About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Source Methodology | Read More About",
    description: "Learn how Read More About sources, verifies, attributes, and reviews information before publication.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
  },
  robots: { index: true, follow: true },
};

export default function SourceMethodology() {
  const lastUpdated = "June 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Source Methodology | Read More About",
    "url": `${SITE_URL}/source-methodology`,
    "description": "Read More About's sourcing methodology and verification standards for journalism.",
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
      { "@type": "ListItem", "position": 2, "name": "Source Methodology", "item": `${SITE_URL}/source-methodology` },
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
            Read More About source methodology explains how reporting is sourced,
            verified, attributed, and reviewed before publication.
          </p>
        </div>

        {/* Hero */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
              <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Standards</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Read More About Source Methodology
            </h1>
            <p className="text-zinc-400 text-base">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

          {/* Intro */}
          <div className="mb-12 pb-12 border-b border-zinc-200">
            <p className="text-xl leading-relaxed text-zinc-700" style={{ fontFamily: 'Georgia, serif' }}>
              Read More About aims to show readers how articles are built: what is sourced directly,
              what comes from public records or official documents, what remains unverified, and
              where interpretation begins.
            </p>
          </div>

          {/* How reporting begins */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              How Reporting Begins
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Our journalists aim to start with verifiable material rather than recycled summaries.
              This may include official documents, court records, company filings, regulatory disclosures,
              direct interviews, public datasets, and original media that can itself be checked
              against the public record.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Where direct verification is incomplete, language in the article is tightened to reflect
              what is actually known. If a fact cannot be confirmed to the level the story would
              otherwise imply, we say so.
            </p>
          </section>

          {/* Source hierarchy */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Source Hierarchy and Verification
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-6">
              Primary documents and firsthand sources are preferred over aggregated summaries or tertiary
              reporting. Official records and direct statements are treated as stronger than rumor,
              speculation, or unattributed claims.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              A source's prominence does not substitute for verification. Claims from public officials,
              corporate representatives, and notable commentators are still subject to independent
              checking, context, and qualification where warranted.
            </p>
            <div className="space-y-3">
              {[
                "Primary documents and firsthand sourcing are preferred where available.",
                "Secondary reporting may be used but should not be presented as certainty when the underlying claim remains unsettled.",
                "Chronology, figures, or legal context that are central to a story are checked against original documents wherever feasible.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">✱</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Anonymous sources */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Anonymous Sources and Background Information
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Anonymity is not a default. Anonymous or background sourcing may be used when the
              information is in the public interest and cannot be responsibly put on the record. Before
              granting anonymity, the newsroom should understand the source's identity and evaluate
              their motive, access, and reliability.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              When anonymity is granted, the article should give readers as much truthful context as
              possible about why the source is being protected without exposing them. Vague references
              to "sources" are avoided in favor of description that helps readers assess the source's
              position and potential bias.
            </p>
          </section>

          {/* Documents, media, data */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Documents, Media, and Data
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Documents, audio, video, screenshots, and data extracts are reviewed for provenance,
              timing, authenticity, and whether a clip or excerpt may be misleading when taken out of
              broader context.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              A document's existence does not prove the broadest possible claim. Our standard is to
              describe what a record shows, what it does not show, and where interpretation begins.
            </p>
          </section>

          {/* Attribution and links */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Attribution, Source Notes, and Links
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Attribution should be specific enough for readers to understand where key information
              came from. For trust-sensitive reporting — finance, law, health, policy — Read More About
              may include source notes or primary links so readers can inspect the underlying record directly.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              When a story relies on official public records, formal statements, or direct institutional
              descriptions, we aim to signal that clearly rather than burying the sourcing logic in
              vague constructions.
            </p>
          </section>

          {/* Uncertainty */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              How We Treat Uncertainty and Change
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <ul className="space-y-3">
              {[
                "We do not convert uncertainty into certainty for headline effect.",
                "We distinguish analysis from assertion.",
                "We update wording when better sourcing becomes available or when a public record materially changes.",
                "If a claim is unresolved, contested, or incomplete, the article should say so rather than imply a settled conclusion.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">◎</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What this does not mean */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              What This Policy Does Not Mean
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Source transparency does not require revealing every confidential source or every reporting
              step in a way that would compromise safety, privacy, or legitimate journalistic work. It does
              mean giving readers an honest account of what kind of evidence supports a story.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              A source note is not a substitute for careful writing. The article itself should still
              describe evidence with precision and restraint.
            </p>
          </section>

          {/* Contact */}
          <div className="bg-zinc-50 border border-zinc-200 p-8">
            <h3 className="font-bold text-zinc-900 mb-4 text-lg" style={{ fontFamily: 'Georgia, serif' }}>Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Editorial</p>
                <a 
                  href="mailto:editorial@read-more-about.com" 
                  title="Contact the Read More About editorial team"
                  className="text-red-600 hover:underline"
                >
                  editorial@read-more-about.com
                </a>
              </div>
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Corrections</p>
                <a 
                  href="mailto:corrections@read-more-about.com" 
                  title="Submit a correction request to Read More About"
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