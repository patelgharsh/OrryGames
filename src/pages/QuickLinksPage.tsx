import { FileText, Shield, Mail, HelpCircle, ExternalLink } from 'lucide-react';

interface QuickLinksPageProps {
  onNavigate: (page: string) => void;
}

export default function QuickLinksPage({ onNavigate }: QuickLinksPageProps) {
  const links = [
    {
      category: 'Legal Information',
      items: [
        {
          title: 'Privacy Policy',
          description: 'Learn how we collect, use, and protect your personal information and data privacy rights.',
          icon: Shield,
          page: 'privacy',
          color: 'text-blue-600 dark:text-blue-400'
        },
        {
          title: 'Terms of Service',
          description: 'Review the terms and conditions that govern your use of our gaming platform and services.',
          icon: FileText,
          page: 'terms',
          color: 'text-green-600 dark:text-green-400'
        }
      ]
    },
    {
      category: 'Support & Help',
      items: [
        {
          title: 'Contact Us',
          description: 'Get in touch with our support team for assistance, feedback, or partnership inquiries.',
          icon: Mail,
          page: 'contact',
          color: 'text-orange-600 dark:text-orange-400'
        },
        {
          title: 'FAQ',
          description: 'Find answers to frequently asked questions about games, accounts, and technical issues.',
          icon: HelpCircle,
          page: 'faq',
          color: 'text-purple-600 dark:text-purple-400'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Quick Links
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Navigate easily to essential information and resources. Everything you need is just a click away.
          </p>
        </div>

        <div className="space-y-12">
          {links.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-l-4 border-orange-500 pl-4">
                {section.category}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {section.items.map((link, linkIdx) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={linkIdx}
                      onClick={() => onNavigate(link.page)}
                      className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-left border-2 border-transparent hover:border-orange-500"
                      aria-label={`Navigate to ${link.title}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`${link.color} p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={32} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                              {link.title}
                            </h3>
                            <ExternalLink
                              size={16}
                              className="text-gray-400 group-hover:text-orange-500 transition-colors opacity-0 group-hover:opacity-100"
                            />
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Need Additional Help?</h3>
          <p className="text-lg mb-6 opacity-90">
            Can't find what you're looking for? Our support team is here to assist you.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Contact support team"
          >
            Contact Support
          </button>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-orange-600 dark:text-orange-400 hover:underline font-semibold"
            aria-label="Return to home page"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
