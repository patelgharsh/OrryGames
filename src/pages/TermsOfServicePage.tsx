import { FileText, CheckCircle, XCircle, AlertCircle, Scale } from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (page: string) => void;
}

export default function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using OrryGames (https://orrygames.com), you agree to be bound by these Terms of Service, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.'
    },
    {
      title: '2. Use License',
      icon: Scale,
      content: 'Permission is granted to temporarily access the games and content on OrryGames for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:',
      list: [
        'Modify or copy the materials;',
        'Use the materials for any commercial purpose or public display;',
        'Attempt to decompile or reverse engineer any software contained on OrryGames;',
        'Remove any copyright or other proprietary notations from the materials.'
      ]
    },
    {
      title: '3. Intellectual Property Rights',
      icon: Scale,
      content: 'OrryGames acts as a platform for browser-based games. Most games hosted on this site are the property of their respective developers/owners. OrryGames claims no ownership over third-party games provided via iframe or API. If you are a copyright owner and believe your work has been uploaded without authorization, please contact us at contact.orrygames@gmail.com.'
    },
    {
      title: '4. User Conduct',
      icon: AlertCircle,
      content: 'Users agree to use the site for lawful purposes only. You are prohibited from:',
      list: [
        'Using scripts or bots to harvest data or interact with the site;',
        'Attempting to disrupt the website\'s servers or security;',
        'Engaging in any behavior that violates Google\'s Publisher Policies, including the use of software to "click-exchange" ads.'
      ]
    },
    {
      title: '5. Disclaimer & Limitation of Liability',
      icon: XCircle,
      content: 'The materials on OrryGames are provided on an \'as is\' basis. OrryGames makes no warranties, expressed or implied. In no event shall OrryGames or its suppliers be liable for any damages (including, without limitation, loss of data or profit) arising out of the use or inability to use the games on our platform.'
    },
    {
      title: '6. Advertisements and External Links',
      icon: AlertCircle,
      content: 'We use Google AdSense to serve advertisements. By using this site, you acknowledge that third-party vendors use cookies to serve ads based on your prior visits. We have no control over the content of external sites linked from our platform and are not responsible for their practices.'
    },
    {
      title: '7. Governing Law',
      icon: Scale,
      content: 'These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
    },
    {
      title: '8. Modifications',
      icon: CheckCircle,
      content: 'OrryGames may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms.'
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
            Last updated: January 16, 2026
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="space-y-8">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              const borderColor = 'border-green-500';
              const iconColor = 'text-green-600 dark:text-green-400';

              return (
                <div key={idx} className={`border-l-4 ${borderColor} pl-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={24} className={iconColor} />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-2 mt-3">
                      {section.list.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className={`${iconColor} mt-1.5`}>•</span>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
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
