import { Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Usage data: Games played, session duration, and interaction patterns',
        'Device information: Browser type, operating system, and screen resolution',
        'Performance metrics: Loading times and error reports for quality improvement',
        'Anonymous analytics: Aggregated data to improve user experience'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: UserCheck,
      content: [
        'Provide and maintain our gaming services',
        'Improve game performance and user experience',
        'Analyze usage patterns to develop new features',
        'Send important updates and service notifications',
        'Ensure platform security and prevent fraud'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'Industry-standard encryption for data transmission',
        'Regular security audits and vulnerability assessments',
        'Strict access controls and authentication measures',
        'Secure data storage with automated backups',
        'Compliance with international data protection standards'
      ]
    },
    {
      title: 'Your Privacy Rights',
      icon: Eye,
      content: [
        'Access your personal data at any time',
        'Request correction of inaccurate information',
        'Delete your account and associated data',
        'Opt-out of non-essential data collection',
        'Export your data in a portable format'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-blue-950 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-6">
            <Shield size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your privacy is important to us. Learn how we protect and manage your data.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last updated: January 10, 2026
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            At our gaming platform, we are committed to protecting your privacy and ensuring transparency
            in how we collect, use, and safeguard your personal information. This Privacy Policy outlines
            our practices and your rights regarding your data.
          </p>

          <div className="space-y-8 mt-8">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div key={idx} className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={24} className="text-blue-600 dark:text-blue-400" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <span className="text-blue-500 mt-1.5">•</span>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Contact Us About Privacy
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions or concerns about our privacy practices, please don't hesitate
              to contact us. We're here to help and ensure your privacy is protected.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="text-center space-x-4">
          <button
            onClick={() => onNavigate('quick-links')}
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            ← Back to Quick Links
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => onNavigate('home')}
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
