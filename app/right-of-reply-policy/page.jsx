import React from 'react';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Right of Reply Policy | Read More About",
  description:
    "Learn how Read More About handles reply requests, disputed claims, and response opportunities in news reporting.",
  keywords: [
    "right of reply",
    "read more about reply policy",
    "response policy",
    "fair opportunity to respond",
    "journalism fairness",
    "pre-publication response",
    "editorial accountability",
    "reply policy news"
  ],
  alternates: { canonical: `${SITE_URL}/right-of-reply` },
  openGraph: {
    title: "Right of Reply Policy | Read More About",
    description: "Learn how Read More About handles reply requests, disputed claims, and response opportunities in news reporting.",
    url: `${SITE_URL}/right-of-reply`,
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/images/read-more-about-logo.webp`, width: 1200, height: 630, alt: "Right of Reply Policy - Read More About" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Right of Reply Policy | Read More About",
    description: "Learn how Read More About handles reply requests, disputed claims, and response opportunities in news reporting.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
  },
  robots: { index: true, follow: true },
};

export default function RightOfReply() {
  const lastUpdated = "June 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Right of Reply Policy | Read More About",
    "url": `${SITE_URL}/right-of-reply`,
    "description": "Read More About's policy for offering fair response opportunities to individuals and organizations featured in our reporting.",
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
      { "@type": "ListItem", "position": 2, "name": "Right of Reply", "item": `${SITE_URL}/right-of-reply` },
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
            Read More About right of reply policy explains how individuals and
            organizations can respond to criticism, allegations, and disputed claims.
          </p>
        </div>

        {/* Hero */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
              <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Fairness</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Read More About Right of Reply Policy
            </h1>
            <p className="text-zinc-400 text-base">Last Updated: {lastUpdated}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">

          {/* Intro */}
          <div className="mb-12 pb-12 border-b border-zinc-200">
            <p className="text-xl leading-relaxed text-zinc-700" style={{ fontFamily: 'Georgia, serif' }}>
              Read More About believes in fairness. When our reporting includes criticism, allegations,
              or material factual disputes about an individual or organization, we aim to provide a
              genuine opportunity to respond before publication — and after, when circumstances warrant.
            </p>
          </div>

          {/* When we seek a response */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              When We Seek a Response
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              We seek comment before publication when a story includes specific allegations of wrongdoing,
              serious reputational harm, disputed factual claims, or material adverse characterizations
              about a person or institution. This applies whether the subject is a public figure, private
              individual, corporation, government body, or nonprofit organization.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              The goal of pre-publication outreach is not to surrender editorial control or grant approval
              rights. It is to test our reporting against rebuttal, correction, or contextual information
              that may alter how the story should be framed. A reasonable response may lead to adjustments
              in language, added context, or — if the response fundamentally undermines a central claim —
              reevaluation of whether to publish at all.
            </p>
          </section>

          {/* How outreach is handled */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              How Outreach Is Handled
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Our method and timing for outreach varies with the urgency of the story. We may contact a
              subject by email, phone, public contact channels, legal counsel, or other reasonable means
              depending on the nature of the allegations and the publication timeline.
            </p>
            <div className="space-y-3 mt-6">
              {[
                "Breaking news or public safety stories may require shorter response windows than investigative features.",
                "We document our outreach attempts in the newsroom record, including when a subject declines to comment or cannot be reached.",
                "A subject's refusal to respond does not automatically bar publication, but it is noted in the story when relevant.",
                "We do not cold-call vulnerable individuals without considering the potential for harm or distress.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">✱</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What to send for a reply request */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              What to Send If You Seek a Reply or Correction
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-6">
              If you are contacting Read More About in response to published or pending coverage, please
              include the following to help us review your request efficiently:
            </p>
            <div className="space-y-3">
              {[
                "The article URL or headline (if published) or a description of the pending coverage",
                "The specific claim, sentence, or allegation you dispute",
                "The factual basis for your objection, with specific references where possible",
                "Any supporting documents, records, or evidence you want the newsroom to review",
                "Your best contact information for follow-up questions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-zinc-50 px-5 py-4">
                  <span className="text-red-600 font-bold text-sm mt-0.5">✱</span>
                  <span className="text-zinc-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-sm mt-4 italic">
              General denials without specifics are harder for us to act on than direct identification
              of what is claimed to be wrong, incomplete, misleading, or outdated.
            </p>
          </section>

          {/* Post-publication responses */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Post-Publication Responses
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              After an article is published, a person or institution that believes content is missing
              or materially wrong may contact our newsroom. We take these requests seriously and evaluate
              them against the original reporting, available evidence, and the public interest.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              Depending on our review, a response may lead to:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "A correction notice in the original article",
                "A clarification adding missing context",
                "An update note reflecting new information",
                "Follow-up coverage addressing the dispute",
                "No change if the reporting remains supported",
              ].map((item) => (
                <div key={item} className="border border-zinc-200 p-3 bg-white">
                  <p className="text-zinc-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-zinc-700 leading-relaxed">
              Read More About may publish or summarize a substantive response when it materially helps
              readers understand a dispute or the editorial record. We do not typically publish personal
              attacks, irrelevant commentary, or responses that do not address the substance of the reporting.
            </p>
          </section>

          {/* What this policy does not guarantee */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              What This Policy Does Not Guarantee
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <div className="space-y-3">
              {[
                "Publication of a full, unedited statement regardless of length or relevance",
                "Removal of accurate reporting simply because a subject disagrees with it",
                "Advance approval of an article by the subject before publication",
                "The right to dictate headline language, framing, or placement",
                "A response opportunity in every conceivable situation — safety, legal, or logistical constraints may apply",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-zinc-700 bg-red-50 px-5 py-4">
                  <span className="text-red-600 font-bold text-sm mt-0.5">✕</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Urgent and sensitive matters */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              Urgent Matters and Legal Sensitivity
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <p className="text-zinc-700 leading-relaxed mb-4">
              Where a story concerns active legal proceedings, regulatory investigations, allegations of
              serious misconduct, or reputationally sensitive claims, Read More About handles outreach
              with particular care. We document the response process in the newsroom's working record,
              including attempts made, responses received, and editorial decisions that followed.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              A reply request should aim to improve factual accuracy or provide meaningful context.
              It should not become a backdoor to pressure the newsroom into weakening supported reporting
              or suppressing a story that serves the public interest.
            </p>
          </section>

          {/* What constitutes a good faith response */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-4 text-zinc-900" style={{ fontFamily: 'Georgia, serif' }}>
              What Makes a Good Faith Response
            </h2>
            <div className="w-10 h-0.5 bg-red-600 mb-6" />
            <ul className="space-y-3">
              {[
                "Specific identification of the disputed claim — not general outrage",
                "Evidence or reasoning that supports the objection",
                "Acknowledgment of facts that are not in dispute",
                "A willingness to engage with the newsroom's follow-up questions",
                "Respectful communication — threats or abuse will not accelerate a response",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-700">
                  <span className="text-red-600 mt-1 text-sm">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <div className="bg-zinc-50 border border-zinc-200 p-8">
            <h3 className="font-bold text-zinc-900 mb-4 text-lg" style={{ fontFamily: 'Georgia, serif' }}>Submit a Reply Request</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Editorial (Pre-Publication)</p>
                <a 
                  href="mailto:editorial@read-more-about.com" 
                  title="Submit a pre-publication reply request"
                  className="text-red-600 hover:underline"
                >
                  editorial@read-more-about.com
                </a>
              </div>
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Corrections (Post-Publication)</p>
                <a 
                  href="mailto:corrections@read-more-about.com" 
                  title="Submit a post-publication correction or response request"
                  className="text-red-600 hover:underline"
                >
                  corrections@read-more-about.com
                </a>
              </div>
              <div>
                <p className="text-zinc-500 uppercase tracking-wider text-xs font-semibold mb-1">Legal & Formal Notices</p>
                <a 
                  href="mailto:legal@read-more-about.com" 
                  title="Contact Read More About for legal and formal notices"
                  className="text-red-600 hover:underline"
                >
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