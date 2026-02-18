import React from 'react';

const SITE_URL = "https://www.read-more-about.com";
const SITE_NAME = "Read More About";

export const metadata = {
  title: "Privacy Policy — Read More About News",
  description:
    "Read More About Privacy Policy: Learn how we collect, use, protect, and handle your information on our independent news platform. Updated February 2026.",
  keywords: [
    "privacy policy",
    "read more about privacy",
    "news privacy policy",
    "data protection",
    "user privacy",
    "cookie policy",
    "breaking news privacy",
    "world news data protection"
  ],
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy — Read More About News",
    description:
      "Learn how Read More About protects your privacy and manages information including cookies, analytics, and data usage on our breaking news platform.",
    url: `${SITE_URL}/privacy-policy`,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/read-more-about-logo.webp`,
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Read More About News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Read More About News",
    description:
      "Understand how Read More About collects, uses, and safeguards user information across our breaking news platform.",
    images: [`${SITE_URL}/images/read-more-about-logo.webp`],
    creator: "@readmoreabout",
    site: "@readmoreabout",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "February 16, 2026";

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy — Read More About",
            "url": `${SITE_URL}/privacy-policy`,
            "description": "Privacy Policy for Read More About - Independent breaking news and world headlines platform",
            "publisher": {
              "@type": "NewsMediaOrganization",
              "name": SITE_NAME,
              "url": SITE_URL,
              "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/images/read-more-about-logo.webp`
              }
            },
            "dateModified": "2026-02-16",
            "inLanguage": "en-US"
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Privacy Policy",
                "item": `${SITE_URL}/privacy-policy`
              }
            ]
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* SEO Content */}
        <div className="sr-only">
          <h2>Privacy Policy for Read More About - Breaking News and World Headlines</h2>
          <p>
            Read More About is committed to protecting your privacy on our breaking news platform. 
            This privacy policy explains how we collect, use, and protect your information when you 
            read our world headlines, breaking news stories, and access our independent news coverage.
          </p>
        </div>
        

        {/* Header */}
        <div className="bg-zinc-900 text-white border-b-4 border-red-600">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
            <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
              <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Legal</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Privacy Policy
            </h1>
            <p className="text-zinc-300 text-lg">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {/* Introduction */}
          <div className="mb-12 pb-12 border-b border-zinc-200">
            <p className="text-xl leading-relaxed text-zinc-700 mb-6" style={{fontFamily: 'Georgia, serif'}}>
              Your privacy is paramount to us at <strong>Read More About</strong>, your trusted source for breaking news, 
              world headlines, and independent journalism. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our news website and use our services. Please read this privacy 
              policy carefully.
            </p>
            <div className="bg-zinc-50 border-l-4 border-zinc-900 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                <strong className="text-zinc-900">Note:</strong> If you do not agree with the terms of this privacy policy, 
                please do not access our breaking news site or use our world headlines services.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">1</span>
              Information We Collect
            </h2>
            
            <div className="space-y-6 ml-14">
              <div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900" style={{fontFamily: 'Georgia, serif'}}>
                  Personal Information
                </h3>
                <p className="text-zinc-700 leading-relaxed mb-4">
                  When you read our breaking news, subscribe to world headlines, or interact with Read More About, 
                  we may collect personally identifiable information that you voluntarily provide when you:
                </p>
                <ul className="space-y-2 text-zinc-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Register for an account or subscribe to our breaking news newsletter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Make a purchase or donation to support independent news</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Submit comments or engage with our news content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 mt-1">•</span>
                    <span>Contact us via email or contact forms about our world headlines</span>
                  </li>
                </ul>
                <p className="text-zinc-700 leading-relaxed mt-4">
                  This information may include your name, email address, postal address, phone number, payment information, 
                  and any other information you choose to provide while accessing our breaking news platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900" style={{fontFamily: 'Georgia, serif'}}>
                  Automatically Collected Information
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  When you visit our breaking news website to read world headlines, we automatically collect certain 
                  information about your device, including your IP address, browser type, operating system, access times, 
                  and the news pages you have viewed directly before and after accessing our site. We may also collect 
                  information about your location to provide relevant local news and world headlines.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900" style={{fontFamily: 'Georgia, serif'}}>
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  We use cookies, web beacons, tracking pixels, and other tracking technologies on our breaking news 
                  platform to help customize the site and improve your experience reading world headlines. These technologies 
                  help us understand user behavior, determine which news stories are most popular, and analyze advertising 
                  effectiveness.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">2</span>
              How We Use Your Information
            </h2>
            
            <div className="ml-14 space-y-6">
              <p className="text-zinc-700 leading-relaxed">
                We use the information we collect from our breaking news readers to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Deliver breaking news and world headlines",
                  "Process your transactions and news subscriptions",
                  "Send you newsletters and breaking news updates",
                  "Respond to your comments and questions about news",
                  "Monitor and analyze usage and trends of news content",
                  "Detect, prevent, and address technical issues",
                  "Personalize your news reading experience",
                  "Comply with legal obligations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-zinc-50 p-4">
                    <span className="text-red-600 mr-3 font-bold">✓</span>
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">3</span>
              Disclosure of Your Information
            </h2>
            
            <div className="ml-14">
              <p className="text-zinc-700 leading-relaxed mb-6">
                Read More About may share information we have collected about our news readers in certain situations. 
                Your information may be disclosed as follows:
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-red-600 pl-6">
                  <h3 className="font-bold text-zinc-900 mb-2">By Law or to Protect Rights</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    If we believe the release of information is necessary to comply with legal process, enforce our 
                    policies, or protect ours or others' rights, property, or safety in relation to our breaking news services.
                  </p>
                </div>
                
                <div className="border-l-2 border-red-600 pl-6">
                  <h3 className="font-bold text-zinc-900 mb-2">Third-Party Service Providers</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    We may share your information with third parties that perform services for our breaking news platform, 
                    such as payment processing, data analysis, email delivery of world headlines, hosting services, and 
                    customer service.
                  </p>
                </div>
                
                <div className="border-l-2 border-red-600 pl-6">
                  <h3 className="font-bold text-zinc-900 mb-2">Marketing Communications</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    With your consent, we may share your information with third parties for marketing purposes related to 
                    breaking news and world headlines.
                  </p>
                </div>
                
                <div className="border-l-2 border-red-600 pl-6">
                  <h3 className="font-bold text-zinc-900 mb-2">Business Transfers</h3>
                  <p className="text-zinc-700 leading-relaxed">
                    We may share or transfer your information in connection with a merger, sale, acquisition, divestiture, 
                    restructuring, reorganization, dissolution, or other business transaction involving Read More About.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">4</span>
              Data Security
            </h2>
            
            <div className="ml-14">
              <p className="text-zinc-700 leading-relaxed mb-6">
                Read More About uses administrative, technical, and physical security measures to protect your personal 
                information on our breaking news platform. While we have taken reasonable steps to secure the personal 
                information you provide to us, please be aware that no security measures are perfect or impenetrable.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <p className="text-sm text-amber-900 leading-relaxed">
                  <strong>Important:</strong> Any transmission of personal information while accessing our world headlines 
                  is at your own risk. We are not responsible for circumvention of any privacy settings or security measures 
                  contained on the breaking news website.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">5</span>
              Your Privacy Rights
            </h2>
            
            <div className="ml-14 space-y-6">
              <p className="text-zinc-700 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information 
                collected through our breaking news platform:
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Access and Portability",
                    description: "Request a copy of the personal information we hold about you from Read More About"
                  },
                  {
                    title: "Correction",
                    description: "Request that we correct any inaccurate or incomplete information in your news account"
                  },
                  {
                    title: "Deletion",
                    description: "Request deletion of your personal information, subject to certain exceptions"
                  },
                  {
                    title: "Opt-Out",
                    description: "Opt-out of marketing communications and certain data processing activities related to breaking news"
                  },
                  {
                    title: "Object",
                    description: "Object to our processing of your personal information in certain circumstances"
                  }
                ].map((right, index) => (
                  <div key={index} className="bg-zinc-50 p-5">
                    <h3 className="font-bold text-zinc-900 mb-2">{right.title}</h3>
                    <p className="text-zinc-700">{right.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-zinc-700 leading-relaxed mt-6">
                To exercise these rights regarding your Read More About news account, please contact us using the 
                information provided below. We may need to verify your identity before processing your request.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">6</span>
              Children's Privacy
            </h2>
            
            <div className="ml-14">
              <p className="text-zinc-700 leading-relaxed mb-4">
                Our breaking news services are not intended for children under the age of 13. Read More About does not 
                knowingly collect personal information from children under 13. If you are a parent or guardian and believe 
                your child has provided us with personal information while accessing our world headlines, please contact us 
                immediately.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                If we become aware that we have collected personal information from children without verification of 
                parental consent, we will take steps to remove that information from our servers.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">7</span>
              Third-Party Websites
            </h2>
            
            <div className="ml-14">
              <p className="text-zinc-700 leading-relaxed">
                Our breaking news website may contain links to third-party websites and applications. Read More About is 
                not responsible for the privacy practices of these external sites. We encourage you to read the privacy 
                statements of every website you visit. This privacy policy applies only to information collected by our 
                world headlines website.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">8</span>
              International Data Transfers
            </h2>
            
            <div className="ml-14">
              <p className="text-zinc-700 leading-relaxed">
                Your information may be transferred to and maintained on computers located outside of your state, province, 
                country, or other governmental jurisdiction where data protection laws may differ. By using our breaking news 
                services, you consent to the transfer of your information to our facilities and to those third parties with 
                whom we share it as described in this policy.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12 pb-12 border-b border-zinc-200">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">9</span>
              Changes to This Privacy Policy
            </h2>
            
            <div className="ml-14">
              <p className="text-zinc-700 leading-relaxed mb-4">
                Read More About may update this privacy policy from time to time to reflect changes to our practices or for 
                other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new privacy 
                policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy 
                are effective when they are posted on this breaking news page.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
              <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">10</span>
              Contact Us
            </h2>
            
            <div className="ml-14">
              <p className="text-zinc-700 leading-relaxed mb-6">
                If you have questions or comments about this privacy policy for Read More About breaking news and 
                world headlines, please contact us at:
              </p>
              
              <div className="bg-zinc-900 text-white p-8">
                <div className="space-y-3">
                  <p className="font-bold text-lg" style={{fontFamily: 'Georgia, serif'}}>Privacy Department</p>
                  <p className="font-bold text-lg" style={{fontFamily: 'Georgia, serif'}}>Read More About</p>
                  <p>Email: privacy@read-more-about.com</p>
                  <p>Editorial Email: editorial@read-more-about.com</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="bg-zinc-50 border-l-4 border-red-600 p-6 mt-12">
            <p className="text-sm text-zinc-600 leading-relaxed">
              This privacy policy for Read More About breaking news and world headlines was last updated on <strong>{lastUpdated}</strong>. 
              We encourage you to review it regularly to stay informed about how we are protecting your information on our 
              independent news platform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}