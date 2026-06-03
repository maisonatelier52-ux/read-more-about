import React from 'react';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Ownership & Funding — Read More About",
  description:
    "Who controls editorial decisions at Read More About, how the publication is funded, and how we handle conflicts of interest and commercial relationships.",
  keywords: [
    "ownership and funding",
    "read more about ownership",
    "news funding transparency",
    "editorial independence",
    "newsroom funding",
    "commercial relationships",
    "media ownership disclosure",
    "journalism funding"
  ],
  alternates: { canonical: `${SITE_URL}/ownership-and-funding` },
  openGraph: {
    title: "Ownership & Funding — Read More About",
    description: "Transparency about who owns and funds Read More About and how that affects editorial decisions.",
    url: `${SITE_URL}/ownership-and-funding`,
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/read-more-about-logo.webp`, width: 1200, height: 630, alt: "Ownership & Funding - Read More About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ownership & Funding — Read More About",
    description: "Transparency about who owns and funds Read More About.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
  },
  robots: { index: true, follow: true },
};

export default function OwnershipAndFunding() {
  const lastUpdated = "June 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ownership & Funding — Read More About",
    "url": `${SITE_URL}/ownership-and-funding`,
    "description": "Transparency disclosure about the ownership, funding, and commercial relationships of Read More About.",
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
      { "@type": "ListItem", "position": 2, "name": "Ownership & Funding", "item": `${SITE_URL}/ownership-and-funding` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-white">
        <div className="sr-only">
          <h1>Ownership and Funding — Read More About</h1>
          <p>This page explains who controls editorial decisions at Read More About, how commercial support works, and how the newsroom handles conflicts of interest.</p>
        </div>

        {/* Hero */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
              <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Transparency</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Ownership &amp; Funding
            </h1>
            <p className="text-zinc-400 text-base">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

          {/* Intro */}
          <div className="mb-12 pb-12 border-b border-zinc-200">
            <p className="text-xl leading-relaxed text-zinc-700" style={{ fontFamily: 'Georgia, serif' }}>
              This page explains who controls editorial decisions at Read More About, how commercial
              support is separated from reporting, and how we handle conflicts of interest, material
              relationships, and future ownership or funding disclosures.
            </p>
          </div>

          {/* What this page covers */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              What This Page Covers
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About operates as an independent digital publication. This page is intended to
              help readers understand how editorial control, commercial support, and conflict disclosures
              are handled on the public site.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              This is a reader-facing explanation of how independence is protected and what kinds of
              material relationships we disclose. It is not a substitute for a corporate registry filing
              or a formal securities disclosure.
            </p>
          </section>

          {/* Editorial control */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Editorial Control and Decision-Making
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Editorial judgments at Read More About are made by editors and reporters. Coverage
              decisions, headline selection, source framing, and publication timing are not sold to
              advertisers, sponsors, political actors, governments, or commercial partners.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              A commercial relationship with Read More About does not create a right to favorable
              coverage, prior review of a reported article, or suppression of accurate reporting. If a
              proposed arrangement would blur those lines, the newsroom's standard is to reject the
              arrangement or remove the affected journalist from the assignment.
            </p>
          </section>

          {/* How we may be funded */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              How Read More About May Be Funded
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About may generate revenue through advertising, sponsorships, platform
              distribution, licensing, partnerships, and other ordinary publishing-related commercial
              arrangements. Any such revenue stream is expected to remain structurally separate from
              editorial decision-making.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              If Read More About enters into a material funding relationship, ownership change, or
              strategic arrangement that a reasonable reader would consider relevant to editorial
              independence, the newsroom's expectation is that the relationship is disclosed on this page,
              in affected coverage, or both.
            </p>
          </section>

          {/* Conflicts of interest */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Conflicts of Interest and Recusals
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Journalists and editors are expected to disclose personal, financial, political, or familial
              relationships that could reasonably call their impartiality into question on a relevant
              assignment. When necessary, the assignment may be moved, edited with explicit disclosure,
              or declined.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Read More About does not treat conflicts as a private housekeeping issue when reader trust
              is materially affected. If a relationship could alter how a reasonable reader interprets
              coverage, the newsroom's standard is disclosure, recusal, or both.
            </p>
            <div className="space-y-3">
              {[
                "Relevant personal or financial ties should be disclosed internally before publication.",
                "Gifts, favors, or special access that would compromise independence should not be accepted.",
                "Outside work, advocacy, or consulting that conflicts with newsroom independence should be disclosed and may require reassignment.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">✱</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Commercial support */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Commercial Support Does Not Buy Coverage
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About keeps a clear boundary between revenue activity and journalism. Advertising
              or sponsorship does not guarantee coverage, shape a reporter's conclusions, or entitle a
              commercial party to veto criticism.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Paid content, sponsored features, affiliate relationships, and other commercial material
              are labeled clearly enough that a reader does not have to guess whether they are reading
              journalism or advertising. For details, see our{' '}
              <a href="/advertising-policy" className="text-red-600 underline hover:text-red-700">Advertising Policy</a>.
            </p>
          </section>

          {/* Political influence */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Political, Governmental, and Advocacy Influence
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About does not present political, governmental, or advocacy messaging as
              independent reporting. If an external actor seeks to influence coverage through money,
              access, or pressure, the newsroom's standard is to preserve editorial control rather than
              trade independence for convenience.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              When a story concerns a subject with which Read More About has a material relationship,
              the relationship is disclosed in language a reader can understand.
            </p>
          </section>

          {/* Changes to ownership */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Changes to Ownership or Material Support
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Ownership, control, and funding arrangements can change over time. If Read More About
              undergoes a material ownership change, takes on a role that bears directly on editorial
              independence, or launches a funding structure that a reasonable reader should know about,
              this page will be updated accordingly.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Readers who believe a relevant ownership or funding relationship has not been disclosed
              may contact the newsroom and request a review of the omission.
            </p>
          </section>

          {/* Contact */}
          <div className="bg-zinc-50 border border-zinc-200 p-8">
            <h3 className="font-bold text-zinc-900 mb-4 text-lg" style={{ fontFamily: 'Georgia, serif' }}>Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Editorial</p>
                <a href="mailto:editorial@read-more-about.com" className="text-red-600 hover:underline">
                  editorial@read-more-about.com
                </a>
              </div>
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Corrections and Transparency</p>
                <a href="mailto:corrections@read-more-about.com" className="text-red-600 hover:underline">
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