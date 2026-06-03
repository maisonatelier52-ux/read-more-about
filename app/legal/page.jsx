import React from 'react';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Legal & Terms — Read More About",
  description:
    "Read More About's legal policies including copyright, content reuse, complaints process, formal notices, and limitations of liability.",
  keywords: [
    "legal policy",
    "read more about legal",
    "terms of use",
    "copyright policy",
    "content reuse",
    "legal complaints",
    "formal notices",
    "website terms",
    "limitation of liability"
  ],
  alternates: { canonical: `${SITE_URL}/legal` },
  openGraph: {
    title: "Legal & Terms — Read More About",
    description: "Legal information, copyright terms, and formal notice procedures for Read More About.",
    url: `${SITE_URL}/legal`,
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/read-more-about-logo.webp`, width: 1200, height: 630, alt: "Legal Policy - Read More About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal & Terms — Read More About",
    description: "Legal information, copyright terms, and formal notice procedures.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
  },
  robots: { index: true, follow: true },
};

export default function LegalPage() {
  const lastUpdated = "June 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Legal & Terms — Read More About",
    "url": `${SITE_URL}/legal`,
    "description": "Read More About's legal policies, copyright terms, complaint procedures, and formal notice information.",
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
      { "@type": "ListItem", "position": 2, "name": "Legal", "item": `${SITE_URL}/legal` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="min-h-screen bg-white">
        <div className="sr-only">
          <h1>Legal & Terms — Read More About</h1>
          <p>Read More About's legal policies covering copyright, content reuse, complaints, formal notices, and limitations of liability.</p>
        </div>

        {/* Hero */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
              <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Legal Information</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Legal &amp; Terms
            </h1>
            <p className="text-zinc-400 text-base">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

          {/* Intro */}
          <div className="mb-12 pb-12 border-b border-zinc-200">
            <p className="text-xl leading-relaxed text-zinc-700" style={{ fontFamily: 'Georgia, serif' }}>
              This page provides an overview of legal and compliance topics relevant to Read More About's
              publishing, reader use of site content, complaints, permissions, and formal requests.
            </p>
          </div>

          {/* Informational use */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Informational Use of Content
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About publishes journalism, analysis, and explanatory material for general
              informational purposes. Our articles are edited to professional newsroom standards,
              but they should not be treated as legal, financial, tax, medical, or other professional
              advice tailored to an individual reader's situation.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Where a story touches on legal, regulatory, or financial matters, we aim to use precise
              sourcing and qualified language. Readers remain responsible for seeking appropriate
              professional advice when they need it for personal decision-making.
            </p>
          </section>

          {/* Copyright and reuse */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Copyright, Quotation, and Reuse
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              All content published on Read More About — including articles, images, graphics, and
              multimedia — is protected by copyright law. Readers may link to our reporting and may
              quote brief excerpts with clear attribution where applicable law permits (such as fair
              use or fair dealing).
            </p>
            <div className="space-y-3 mt-6">
              {[
                "Republishing full articles requires prior written permission",
                "Bulk reproduction, scraping for republication, or systematic copying is not permitted",
                "Commercial reuse, translation, or archival redistribution requires a license",
                "AI training or data mining using our content is not permitted without explicit agreement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">✱</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-700 leading-relaxed mt-4">
              If you want to syndicate, reproduce, translate, archive commercially, or otherwise reuse
              substantial Read More About content, contact the newsroom before doing so.
            </p>
          </section>

          {/* Complaints */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Complaints About Accuracy, Rights, or Fairness
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              If you believe a Read More About article contains a material factual error, omits critical
              context, infringes your legal rights, or raises a serious concern, contact the newsroom
              promptly with the following information:
            </p>
            <div className="bg-zinc-50 p-6 mb-4">
              <ul className="space-y-2">
                {[
                  "The specific URL or headline of the content at issue",
                  "The exact material you are challenging (quote, figure, image, video, etc.)",
                  "The basis for your concern (factual, legal, ethical, etc.)",
                  "Supporting documentation where available",
                  "Your contact information for follow-up",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-700">
                    <span className="text-red-600 mt-1 text-sm">◎</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              Different complaints may be handled under different processes. A factual dispute may be
              reviewed under the corrections or right-of-reply process, while a copyright, privacy,
              defamation, or other rights complaint may require separate legal review.
            </p>
          </section>

          {/* Removal and update requests */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Removal, Restriction, and Update Requests
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About reviews serious requests for correction, clarification, update, removal,
              or restricted display. Submission of a request does not by itself guarantee removal of
              accurate reporting or immediate republication.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our standard is to evaluate each request against the public record, editorial standards,
              applicable law, and the public interest. In many cases, the appropriate response may be
              a correction, clarification, update note, or follow-up article rather than removal.
              Removal is generally considered only when required by law or when the original reporting
              is found to be materially inaccurate beyond correction.
            </p>
          </section>

          {/* Links to third-party material */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Links to Third-Party Material
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About may link to third-party websites, official records, social platforms,
              public databases, and outside documents for sourcing, verification, and reader context.
              These third-party properties are governed by their own terms, policies, and accuracy
              practices.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              A link to a third-party source does not necessarily mean Read More About endorses every
              statement, claim, or policy on that external site. We provide links as a service to readers,
              but we do not control the content of linked pages.
            </p>
          </section>

          {/* Limitation of liability */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Limitation of Liability
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Read More About and its contributors, editors,
              and affiliates shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from your access to or use of our content. This includes
              loss of profits, data, reputation, or other intangible losses, even if we have been
              advised of the possibility of such damages.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our total liability to you for any claim arising from your use of the site shall not
              exceed the amount you have paid to Read More About in the past twelve months, if anything.
              Some jurisdictions do not allow certain liability limitations, so this provision may not
              apply in full to all readers.
            </p>
          </section>

          {/* Governing law */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Governing Law and Dispute Resolution
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              These terms and any dispute arising from your use of Read More About shall be governed by
              the laws of the jurisdiction in which our primary publishing operation is based, without
              regard to conflict of law principles.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Where feasible, we prefer to resolve disputes through direct communication and informal
              negotiation before pursuing formal legal action. Contact our editorial team if you believe
              a resolution is possible without litigation.
            </p>
          </section>

          {/* Changes to this policy */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Changes to This Legal Policy
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Read More About may update this legal policy from time to time to reflect changes in our
              practices, legal requirements, or operational circumstances. When we make material changes,
              we will update the "Last Updated" date at the top of this page.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              We encourage readers to review this page periodically. Continued use of the site after
              changes constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Contact */}
          <div className="bg-zinc-50 border border-zinc-200 p-8">
            <h3 className="font-bold text-zinc-900 mb-4 text-lg" style={{ fontFamily: 'Georgia, serif' }}>Formal Notices and Requests</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">General Legal Contact</p>
                <a href="mailto:legal@read-more-about.com" className="text-red-600 hover:underline">
                  legal@read-more-about.com
                </a>
              </div>
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Editorial & Complaints</p>
                <a href="mailto:editorial@read-more-about.com" className="text-red-600 hover:underline">
                  editorial@read-more-about.com
                </a>
              </div>
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Corrections & Factual Concerns</p>
                <a href="mailto:corrections@read-more-about.com" className="text-red-600 hover:underline">
                  corrections@read-more-about.com
                </a>
              </div>
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Permissions & Syndication</p>
                <a href="mailto:legal@read-more-about.com" className="text-red-600 hover:underline">
                  legal@read-more-about.com
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