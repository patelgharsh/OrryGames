import { FileText, CheckCircle, XCircle, AlertCircle, Scale } from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (page: string) => void;
}

export default function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing our platform, you agree to these Terms of Service',
        'You must be at least 13 years old to use our services',
        'You are responsible for maintaining account security',
        'These terms may be updated periodically with notice'
      ]
    },
    {
      title: 'Permitted Use',
      icon: CheckCircle,
      content: [
        'Access and play games for personal entertainment',
        'Share game links with friends and family',
        'Provide feedback and suggestions for improvement',
        'Use accessibility features as needed',
        'Report bugs and technical issues'
      ]
    },
    {
      title: 'Prohibited Activities',
      icon: XCircle,
      content: [
        'Attempting to hack, exploit, or manipulate games',
        'Using automated bots or scripts to play games',
        'Distributing malware or malicious code',
        'Impersonating other users or staff members',
        'Violating any applicable laws or regulations'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: Scale,
      content: [
        'All games and content are protected by copyright',
        'You may not copy, modify, or redistribute our games',
        'Game names and logos are registered trademarks',
        'User-generated content remains your property',
        'We respect third-party intellectual property rights'
      ]
    },
    {
      title: 'Disclaimer and Liability',
      icon: AlertCircle,
      content: [
        'Games are provided "as is" without warranties',
        'We are not liable for interruptions or data loss',
        'External links are provided for convenience only',
        'We do not guarantee specific game availability',
        'Maximum liability is limited by applicable law'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 dark:from-gray-900 dark:to-green-950 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
            <FileText size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Please read these terms carefully before using our gaming platform.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last updated: January 10, 2026
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Welcome to our gaming platform. These Terms of Service govern your use of our website and
            services. By accessing or using our platform, you agree to be bound by these terms and our
            Privacy Policy.
          </p>

          <div className="space-y-8 mt-8">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const isProhibited = section.title === 'Prohibited Activities';
              const borderColor = isProhibited ? 'border-red-500' : 'border-green-500';
              const iconColor = isProhibited ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400';

              return (
                <div key={idx} className={`border-l-4 ${borderColor} pl-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={24} className={iconColor} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <span className={`${iconColor} mt-1.5`}>•</span>
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

          <div className="mt-10 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Questions About Terms?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service or need clarification on any
              specific point, please reach out to our support team.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="text-center space-x-4">
          <button
            onClick={() => onNavigate('quick-links')}
            className="text-green-600 dark:text-green-400 hover:underline font-semibold"
          >
            ← Back to Quick Links
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => onNavigate('home')}
            className="text-green-600 dark:text-green-400 hover:underline font-semibold"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
