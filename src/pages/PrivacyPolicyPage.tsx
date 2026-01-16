import { Shield, ExternalLink } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-950 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your privacy is of extreme importance to us. This Privacy Policy explains how OrryGames collects, uses, and protects your information.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            <strong>Effective Date:</strong> January 16, 2026 | <strong>Last Updated:</strong> January 16, 2026
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              1. Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              At OrryGames (<a href="https://orrygames.com" className="text-blue-600 hover:underline">https://orrygames.com</a>),
              accessible from https://orrygames.com, the privacy of our visitors is of extreme importance to us. This Privacy Policy
              document contains the types of information that are collected and recorded by OrryGames and how we use it.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              This Privacy Policy applies to all information collected through our website and any related services, sales,
              marketing, or events. By using OrryGames, you hereby consent to this Privacy Policy and agree to its terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              2. Google AdSense & DoubleClick Cookie
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              OrryGames uses Google AdSense, a third-party advertising service, to serve advertisements on our website.
              Google, as a third-party vendor, uses cookies to serve ads on https://orrygames.com based on your prior visits
              to our website and other websites on the Internet.
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
              DART Cookie Usage
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Google's use of the DART cookie and DoubleClick cookie enables it to serve ads to our users based on their visit
              to https://orrygames.com and other sites across the Internet. The DART cookie is used by Google for advertising
              purposes and helps deliver targeted advertisements that may be relevant to you and your interests.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-5 mt-5 rounded">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                How to Opt-Out of DART Cookie
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                You may opt out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy at:
              </p>
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Google Ads Settings & Privacy Policy
                <ExternalLink size={16} />
              </a>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                Additionally, you can opt out of personalized advertising by visiting: <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  www.aboutads.info/choices
                </a>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              3. Third-Party Ad Networks
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Some of our advertising partners may use cookies, web beacons, and JavaScript on our site. Our advertising partners include:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2 ml-4">
              <li>Google AdSense</li>
              <li>Other third-party ad servers or ad networks as applicable</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              These third-party ad servers or ad networks use technologies like cookies, JavaScript, or web beacons in their
              respective advertisements and links that appear on OrryGames, which are sent directly to your browser. They
              automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness
              of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-semibold">
              Please note that OrryGames has no access to or control over these cookies that are used by third-party advertisers.
              We do not control the data collection or use practices of these third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              4. Log Files
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              OrryGames follows a standard procedure of using log files. These files log visitors when they visit websites.
              All hosting companies do this as part of hosting services' analytics. The information collected by log files includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2 ml-4">
              <li><strong>IP addresses:</strong> Used for security and analytics purposes</li>
              <li><strong>Browser type:</strong> Information about your web browser</li>
              <li><strong>Internet Service Provider (ISP):</strong> Your network provider</li>
              <li><strong>Date and time stamp:</strong> When you visited our website</li>
              <li><strong>Referring/exit pages:</strong> Which pages you visited on our site</li>
              <li><strong>Number of clicks:</strong> Your interaction with our site content</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              This information is not linked to any personally identifiable information. The purpose of this data is to analyze
              trends, administer the site, track users' movement on the website, and gather demographic information for internal use only.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              5. Cookies and Web Beacons
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Like most websites, OrryGames uses cookies. Cookies are small text files stored on your device to help us improve
              your experience, analyze site traffic, and deliver personalized content. You can choose to disable cookies through
              your browser settings. However, this may affect your ability to use certain features of our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              6. User Data Rights (GDPR, CCPA, LGPD)
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
              6.1 European Users (GDPR)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you are located in the European Economic Area (EEA), you have certain data protection rights under the
              General Data Protection Regulation (GDPR). OrryGames aims to take reasonable steps to allow you to correct,
              amend, delete, or limit the use of your personal data. You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete personal data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data (right to be forgotten)</li>
              <li><strong>Restrict Processing:</strong> Request restriction of processing of your personal data</li>
              <li><strong>Data Portability:</strong> Receive your personal data in a structured, machine-readable format</li>
              <li><strong>Object:</strong> Object to the processing of your personal data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where we relied on consent</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
              6.2 California Users (CCPA/CPRA)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA)
              and California Privacy Rights Act (CPRA). These rights include:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2 ml-4">
              <li><strong>Right to Know:</strong> You have the right to request information about the personal data we collect,
              use, disclose, and sell</li>
              <li><strong>Right to Delete:</strong> You have the right to request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> You have the right to opt-out of the sale of your personal information</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
            </ul>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 mt-5 rounded">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                Do Not Sell My Personal Information
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                OrryGames does not sell personal information to third parties. However, we do allow third-party advertising
                partners to collect information through cookies for advertising purposes. You can opt-out of personalized
                advertising as described in Section 2.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
              6.3 Brazilian Users (LGPD)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you are located in Brazil, you have rights under the Lei Geral de Proteção de Dados (LGPD), including the
              right to access, correct, delete, and port your personal data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              7. Children's Information (COPPA Compliance)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Protecting children's privacy is extremely important to us. OrryGames does not knowingly collect any personally
              identifiable information from children under the age of 13. If you are under 13 years of age, please do not
              provide any personal information through our website.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              If you are a parent or guardian and you believe that your child under the age of 13 has provided personal
              information to us, please contact us immediately. We will take steps to remove such information from our servers
              and terminate the child's account if applicable.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              We comply with the Children's Online Privacy Protection Act (COPPA) and do not intentionally collect or maintain
              information from children under 13 without verifiable parental consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              8. Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We collect information to provide better services to our users. The types of information we collect include:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2 ml-4">
              <li><strong>Usage Data:</strong> Games played, session duration, and interaction patterns</li>
              <li><strong>Device Information:</strong> Browser type, operating system, screen resolution, and device identifiers</li>
              <li><strong>Performance Metrics:</strong> Loading times, error reports, and technical diagnostics</li>
              <li><strong>Analytics Data:</strong> Aggregated, anonymized data to improve user experience</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              9. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2 ml-4">
              <li>To provide and maintain our gaming services</li>
              <li>To improve game performance and user experience</li>
              <li>To analyze usage patterns and develop new features</li>
              <li>To send important updates and service notifications (if applicable)</li>
              <li>To ensure platform security and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              10. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2 ml-4">
              <li>Encryption for data transmission using SSL/TLS protocols</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Strict access controls and authentication measures</li>
              <li>Secure data storage with automated backups</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              11. Third-Party Privacy Policies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              OrryGames's Privacy Policy does not apply to other advertisers or websites. We advise you to consult the
              respective Privacy Policies of these third-party ad servers for more detailed information. It may include their
              practices and instructions about how to opt-out of certain options.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are
              advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
              13. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please
              contact us at:
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg mt-4">
              <p className="text-gray-900 dark:text-white font-semibold">OrryGames</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Email:</strong> <a href="mailto:contact.orrygames@gmail.com" className="text-blue-600 hover:underline">contact.orrygames@gmail.com</a>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                <strong>Website:</strong> <a href="https://orrygames.com" className="text-blue-600 hover:underline">https://orrygames.com</a>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              We will respond to your inquiry within 30 days of receipt.
            </p>
          </section>

          <section className="mb-10">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 pb-2 inline-block">
    14. Consent
  </h2>

  <div className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 border-2 border-orange-400 p-6 rounded-lg mt-4">
    <p className="text-gray-900 dark:text-white font-bold text-lg mb-2">
      Your Consent
    </p>

    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      By using our website (https://orrygames.com), you hereby consent to our Privacy Policy and agree to its terms.
      If you do not agree with this Privacy Policy, please do not use our website. Your continued use of the website
      following the posting of changes to this policy will be deemed your acceptance of those changes.
    </p>
    
  </div>
</section>


        </div>

        <div className="text-center space-x-4 mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
          >
            Return to Home
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
          >
            Contact Us
          </button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This Privacy Policy is compliant with GDPR, CCPA, and COPPA.
          </p>
        </div>
      </div>
    </div>
  );
}
