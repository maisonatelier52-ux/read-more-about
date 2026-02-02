import React from 'react';

export default function TermsAndConditions() {
  const lastUpdated = "February 1, 2026";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-zinc-900 text-white border-b-4 border-red-600">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="inline-block border-l-4 border-red-600 pl-4 mb-6">
            <p className="text-red-600 font-semibold tracking-wider text-sm uppercase">Legal</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: 'Georgia, serif'}}>
            Terms & Conditions
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
            Welcome to our newspaper website. These Terms and Conditions outline the rules and regulations for the use of our website and services.
          </p>
          <div className="bg-zinc-50 border-l-4 border-zinc-900 p-6">
            <p className="text-sm text-zinc-600 leading-relaxed">
              <strong className="text-zinc-900">Agreement to Terms:</strong> By accessing this website, you accept these terms and conditions in full. Do not continue to use this website if you do not accept all of the terms and conditions stated on this page.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">1</span>
            License to Use Website
          </h2>
          
          <div className="ml-14 space-y-6">
            <p className="text-zinc-700 leading-relaxed">
              Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from our website for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900" style={{fontFamily: 'Georgia, serif'}}>
                You must not:
              </h3>
              <div className="space-y-3">
                {[
                  "Republish material from this website without proper attribution",
                  "Sell, rent, or sub-license material from the website",
                  "Reproduce, duplicate, or copy material from the website for commercial purposes",
                  "Redistribute content from this website unless specifically permitted",
                  "Use automated systems or software to extract data from this website (scraping)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-red-50 p-4">
                    <span className="text-red-600 mr-3 mt-1">✕</span>
                    <span className="text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 text-white p-6">
              <p className="text-sm leading-relaxed">
                <strong>Copyright Notice:</strong> All content, including articles, photographs, graphics, video, and audio, is protected by copyright law and owned by us or our licensors. Unauthorized use may result in legal action.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">2</span>
            User Accounts and Subscriptions
          </h2>
          
          <div className="ml-14 space-y-6">
            <div className="border-l-2 border-red-600 pl-6">
              <h3 className="font-bold text-zinc-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                Account Creation
              </h3>
              <p className="text-zinc-700 leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p className="text-zinc-700 leading-relaxed">
                You are responsible for safeguarding the password and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <h3 className="font-bold text-zinc-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                Subscription Terms
              </h3>
              <p className="text-zinc-700 leading-relaxed mb-3">
                Paid subscriptions provide access to premium content and features. Subscription fees are billed in advance on a recurring basis (monthly or annually).
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span className="text-zinc-700">Subscriptions automatically renew unless canceled before the renewal date</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span className="text-zinc-700">You may cancel your subscription at any time through your account settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span className="text-zinc-700">Refunds are provided only as required by law or at our sole discretion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 mt-1">•</span>
                  <span className="text-zinc-700">We reserve the right to modify subscription prices with 30 days notice</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">3</span>
            User-Generated Content
          </h2>
          
          <div className="ml-14 space-y-6">
            <p className="text-zinc-700 leading-relaxed">
              Parts of this website offer users the opportunity to post and exchange opinions, information, and material. We do not filter, edit, publish or review comments prior to their presence on the website. Comments reflect the views and opinions of the person who posts them, not ours.
            </p>

            <div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900" style={{fontFamily: 'Georgia, serif'}}>
                Content Standards
              </h3>
              <p className="text-zinc-700 leading-relaxed mb-4">
                You warrant and represent that your comments and content:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Are not defamatory or libelous",
                  "Do not infringe any intellectual property rights",
                  "Do not contain viruses or malicious code",
                  "Are not used for commercial solicitation",
                  "Do not violate any applicable laws",
                  "Are not obscene, offensive, or harmful",
                  "Do not harass or invade privacy",
                  "Are factually accurate to your knowledge"
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-zinc-50 p-4">
                    <span className="text-red-600 mr-3 font-bold">✓</span>
                    <span className="text-zinc-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Content Removal:</strong> We reserve the right to monitor, edit, or remove any content that violates these terms or that we deem inappropriate, offensive, or otherwise harmful to our website or users.
              </p>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <h3 className="font-bold text-zinc-900 mb-3" style={{fontFamily: 'Georgia, serif'}}>
                License Grant
              </h3>
              <p className="text-zinc-700 leading-relaxed">
                By posting content on our website, you grant us a non-exclusive, worldwide, royalty-free, perpetual license to use, reproduce, modify, publish, and distribute your content in any media format for the purpose of operating and promoting our website.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">4</span>
            Prohibited Uses
          </h2>
          
          <div className="ml-14 space-y-4">
            <p className="text-zinc-700 leading-relaxed">
              In addition to other prohibitions set forth in these Terms, you are prohibited from using the website or its content:
            </p>
            
            <div className="space-y-3">
              {[
                "For any unlawful purpose or to solicit others to perform unlawful acts",
                "To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
                "To infringe upon or violate our intellectual property rights or the intellectual property rights of others",
                "To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate",
                "To submit false or misleading information",
                "To upload or transmit viruses or any other type of malicious code",
                "To collect or track personal information of others",
                "To spam, phish, pharm, pretext, spider, crawl, or scrape",
                "For any obscene or immoral purpose",
                "To interfere with or circumvent security features of the website"
              ].map((item, index) => (
                <div key={index} className="flex items-start border-l-4 border-red-600 pl-4 py-2">
                  <span className="text-red-600 mr-3 font-bold">{index + 1}.</span>
                  <span className="text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">5</span>
            Disclaimer of Warranties
          </h2>
          
          <div className="ml-14 space-y-6">
            <div className="bg-zinc-900 text-white p-8">
              <p className="leading-relaxed mb-4">
                This website is provided "as is" and "as available" without any representations or warranties, express or implied. We make no representations or warranties in relation to this website or the information and materials provided on this website.
              </p>
              <p className="leading-relaxed text-sm">
                We do not warrant that the website will be available at all times, uninterrupted, error-free, or free from viruses or other harmful components. Your use of the website is at your own risk.
              </p>
            </div>

            <p className="text-zinc-700 leading-relaxed">
              While we strive to provide accurate and up-to-date information, we make no representations or warranties regarding the accuracy, completeness, or reliability of any content on this website. Any reliance you place on such information is strictly at your own risk.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">6</span>
            Limitation of Liability
          </h2>
          
          <div className="ml-14 space-y-6">
            <p className="text-zinc-700 leading-relaxed">
              To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Your access to or use of (or inability to access or use) the website",
                "Any conduct or content of any third party on the website",
                "Any content obtained from the website",
                "Unauthorized access, use, or alteration of your transmissions or content"
              ].map((item, index) => (
                <div key={index} className="bg-red-50 p-4 border-l-2 border-red-600">
                  <p className="text-zinc-700 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-zinc-50 border-l-4 border-zinc-900 p-6">
              <p className="text-sm text-zinc-600 leading-relaxed">
                <strong className="text-zinc-900">Maximum Liability:</strong> In any event, our total liability to you for all damages, losses, and causes of action shall not exceed the amount you have paid us in the past twelve (12) months, or one hundred dollars ($100), whichever is greater.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">7</span>
            Indemnification
          </h2>
          
          <div className="ml-14">
            <p className="text-zinc-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless our company, its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the website.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">8</span>
            Governing Law and Jurisdiction
          </h2>
          
          <div className="ml-14 space-y-4">
            <p className="text-zinc-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without regard to its conflict of law provisions.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Any disputes relating to these Terms or use of the website shall be subject to the exclusive jurisdiction of the courts located in our registered jurisdiction.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">9</span>
            Termination
          </h2>
          
          <div className="ml-14 space-y-4">
            <p className="text-zinc-700 leading-relaxed">
              We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Upon termination, your right to use the website will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">10</span>
            Changes to Terms
          </h2>
          
          <div className="ml-14">
            <p className="text-zinc-700 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              By continuing to access or use our website after revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the website.
            </p>
          </div>
        </section>

        {/* Section 11 */}
        <section className="mb-12 pb-12 border-b border-zinc-200">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">11</span>
            Severability
          </h2>
          
          <div className="ml-14">
            <p className="text-zinc-700 leading-relaxed">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center" style={{fontFamily: 'Georgia, serif'}}>
            <span className="bg-red-600 text-white px-3 py-1 mr-4 text-lg">12</span>
            Contact Information
          </h2>
          
          <div className="ml-14">
            <p className="text-zinc-700 leading-relaxed mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            
            <div className="bg-zinc-900 text-white p-8">
              <div className="space-y-3">
                <p className="font-bold text-lg" style={{fontFamily: 'Georgia, serif'}}>Legal Department</p>
                <p>Email: legal@newspaper.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 News Street, Media City, MC 12345</p>
              </div>
            </div>
          </div>
        </section>

        {/* Acknowledgment */}
        <div className="bg-zinc-50 border-l-4 border-red-600 p-6 mt-12">
          <p className="text-sm text-zinc-600 leading-relaxed mb-3">
            <strong className="text-zinc-900">Acknowledgment:</strong> By using this website, you acknowledge that you have read these Terms and Conditions and agree to be bound by them.
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Last updated: <strong>{lastUpdated}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}