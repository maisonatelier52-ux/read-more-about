import React from 'react';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Editorial Policy | Read More About",

  description:
    "Editorial policy covering newsroom standards, fact-checking, transparency, and ethical journalism.",

  keywords: [
    "editorial policy",
    "read more about editorial standards",
    "journalism ethics",
    "news accuracy",
    "editorial independence",
    "reporting standards",
    "fact checking policy",
    "newsroom ethics",
    "editorial policy newsroom standards"
  ],

  alternates: {
    canonical: `${SITE_URL}/editorial-policy`
  },

  openGraph: {
    title: "Editorial Policy | Read More About",

    description:
      "Editorial standards covering accuracy, transparency, independence, and newsroom ethics.",

    url: `${SITE_URL}/editorial-policy`,
    type: "website",
    siteName: SITE_NAME,

    images: [
      {
        url: `${SITE_URL}/images/read-more-about-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Editorial Policy - Read More About"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Editorial Policy | Read More About",

    description:
      "Editorial standards covering accuracy, transparency, and newsroom ethics.",

    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
  },

  robots: {
    index: true,
    follow: true
  },
};

export default function EditorialPolicy() {
  const lastUpdated = "June 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Editorial Policy | Read More About",
    "url": `${SITE_URL}/editorial-policy`,
    "description": "Read More About's editorial policy covering accuracy, independence, transparency, and journalistic ethics.",
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/read-more-about-logo.webp` },
      "ethicsPolicy": `${SITE_URL}/editorial-policy`,
    },
    "dateModified": "2026-06-01",
    "inLanguage": "en-US",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Editorial Policy", "item": `${SITE_URL}/editorial-policy` },
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
            Read More About editorial policy covering journalism ethics, accuracy, 
            editorial independence, transparency, fact-checking, and newsroom accountability. 
            Our newsroom standards ensure fair, independent, and factual reporting across 
            all coverage areas including politics, business, technology, and world news.
          </p>
        </div>

        {/* Hero */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
              <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Newsroom Standards</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Read More About Editorial Policy
            </h1>
            <p className="text-zinc-400 text-base">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

          {/* Intro */}
          <div className="mb-12 pb-12 border-b border-zinc-200">
            <p className="text-xl leading-relaxed text-zinc-700" style={{ fontFamily: 'Georgia, serif' }}>
              Read More About is an independent digital newsroom committed to factual, transparent, and
              accountable journalism. This editorial policy sets out how our newsroom decisions are made, 
              how our reporting is verified, and how we maintain the trust of our readers through consistent 
              ethical standards.
            </p>
          </div>

          {/* Section: Editorial Independence */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Editorial Independence
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              All editorial decisions at Read More About are made independently by our journalists and editors.
              We do not accept payment, gifts, or preferential treatment in exchange for coverage. No advertiser,
              sponsor, investor, or external organization has the right to influence our reporting decisions.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Commercial relationships — advertising, sponsorship, distribution partnerships — are handled
              separately from editorial operations. When a story touches on an entity with a commercial
              relationship to our publication, that fact is disclosed clearly within the coverage.
            </p>
          </section>

          {/* Section: Accuracy */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Accuracy and Verification
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Accuracy is the foundation of everything we publish. Reporters are expected to verify claims
              through primary documentation, direct sourcing, and independent corroboration before
              publication. Where information cannot be independently confirmed, that uncertainty is stated
              explicitly in the article.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              When we make errors, we correct them promptly and transparently. Corrections appear in the
              original article with clear labeling. For our full correction process, see our{' '}
              <a 
                href="/corrections-policy" 
                title="Read our Corrections Policy for error handling"
                className="text-red-600 underline hover:text-red-700"
              >
                Corrections Policy
              </a>.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Stories involving legal proceedings, allegations of wrongdoing, financial claims, or matters
              with reputational sensitivity require additional verification steps and, where appropriate,
              pre-publication outreach to the subjects involved.
            </p>
          </section>

          {/* Section: Fairness */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Fairness and Balance
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              We seek multiple perspectives on complex issues while exercising editorial judgment about
              which perspectives are substantiated by evidence. We do not treat false equivalence as
              balance: claims are evaluated on evidence and credibility, not ideological symmetry.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Individuals and organizations the subject of critical coverage have a reasonable opportunity
              to respond before publication where circumstances permit. Our approach to this is outlined
              in our{' '}
              <a 
                href="/right-of-reply-policy" 
                title="Read our Right of Reply Policy for response opportunities"
                className="text-red-600 underline hover:text-red-700"
              >
                Right of Reply Policy
              </a>.
            </p>
          </section>

          {/* Section: Transparency */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Transparency
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-6">
              Readers deserve to understand how our reporting decisions are made. We commit to the following practices:
            </p>
            <ul className="space-y-3">
              {[
                "Clearly distinguish between news reporting, opinion, and analysis",
                "Publish articles under the byline of the journalist responsible whenever possible",
                "Use a 'Read More About Staff' byline for collaborative or internally compiled reporting",
                "Label sponsored, paid, or partner-funded material so it is not mistaken for independent journalism",
                "Disclose when a story has been updated, corrected, or substantially revised after publication",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Disclosure & Labeling */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Disclosure and Labeling
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About is committed to disclosing material relationships that a reader would
              reasonably consider relevant to understanding a piece of coverage. Paid content, sponsored
              placements, affiliate links, or partner-funded material are labeled clearly and kept visually
              and editorially distinct from independent journalism.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              For a full explanation of how we handle advertising and commercial content, see our{' '}
              <a 
                href="/advertising-policy" 
                title="Read our Advertising Policy for commercial content disclosure"
                className="text-red-600 underline hover:text-red-700"
              >
                Advertising Policy
              </a>.
            </p>
          </section>

          {/* Section: Ethical Standards */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Ethical Standards
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <div className="space-y-6">
              {[
                {
                  title: "No undisclosed conflicts of interest",
                  body: "Journalists and editors disclose relevant personal, financial, or familial relationships when they may reasonably affect their coverage of a topic.",
                },
                {
                  title: "No hidden commercial content",
                  body: "All paid or sponsored material is clearly labeled and separated from independent news reporting. Readers should never have to guess whether content is commercially motivated.",
                },
                {
                  title: "Respect for privacy",
                  body: "We balance the public's right to know with the rights of private individuals to dignity and privacy. We do not publish private information unless it is directly relevant to a matter of legitimate public interest.",
                },
                {
                  title: "Protection of vulnerable subjects",
                  body: "Special care is taken in coverage involving minors, victims of crime, and individuals experiencing mental health crises. We follow established ethical guidelines for such reporting.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-4 border-zinc-200 pl-6">
                  <h3 className="font-bold text-zinc-900 mb-2">{title}</h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Reader Feedback */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Reader Feedback and Accountability
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-6">
              Journalism improves through dialogue. Readers are encouraged to contact our editorial team
              with feedback, corrections, or concerns about our coverage. We review all substantive
              communications and respond where appropriate.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 p-6 flex items-center gap-3">
              <span className="text-lg">✉</span>
              <a
                href="mailto:editorial@read-more-about.com"
                title="Contact the Read More About editorial team"
                className="text-zinc-800 font-medium hover:text-red-600 transition-colors text-sm"
              >
                editorial@read-more-about.com →
              </a>
            </div>
          </section>

          {/* Closing statement */}
          <div className="bg-zinc-900 text-white p-8 text-center">
            <p className="text-lg italic leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              "Our commitment is to independent, fact-based journalism — accountable to readers and guided by evidence."
            </p>
          </div>

          <p className="text-xs text-zinc-400 text-right mt-6">Last Updated: {lastUpdated}</p>
        </div>
      </div>
    </>
  );
}