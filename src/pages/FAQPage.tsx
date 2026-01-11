import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'Do I need to create an account to play games?',
          a: 'No account is required! Simply visit our website and start playing any game instantly. All games are free and accessible without registration.'
        },
        {
          q: 'Are the games really free to play?',
          a: 'Yes, absolutely! All games on our platform are completely free with no hidden costs, subscriptions, or in-game purchases.'
        },
        {
          q: 'What devices are supported?',
          a: 'Our games work on all modern devices including desktops, laptops, tablets, and smartphones. We support all major browsers like Chrome, Firefox, Safari, and Edge.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'Why is a game not loading?',
          a: 'Try refreshing your browser, clearing your cache, or checking your internet connection. Make sure JavaScript is enabled in your browser settings. If the problem persists, contact our support team.'
        },
        {
          q: 'The game is lagging or running slowly. What should I do?',
          a: 'Close other browser tabs and applications to free up system resources. Ensure your browser is updated to the latest version. Lower graphics settings in the game if available.'
        },
        {
          q: 'Can I play games offline?',
          a: 'Currently, an internet connection is required to play our games. We are working on offline functionality for select games in future updates.'
        },
        {
          q: 'My game progress was lost. Can it be recovered?',
          a: 'Game progress is stored locally in your browser. If you cleared your browser data or switched devices, progress may be lost. We recommend not clearing browser cache for active games.'
        }
      ]
    },
    {
      category: 'Game Features',
      questions: [
        {
          q: 'How do I save my game progress?',
          a: 'Most games automatically save progress to your browser\'s local storage. Make sure not to clear your browser data if you want to keep your progress.'
        },
        {
          q: 'Can I play multiplayer games?',
          a: 'We currently offer single-player games. Multiplayer functionality is in development and will be available in future updates.'
        },
        {
          q: 'How often are new games added?',
          a: 'We regularly add new games to our platform. Check our homepage or follow us on social media to stay updated on new releases.'
        },
        {
          q: 'Can I request a specific game to be added?',
          a: 'Absolutely! We welcome game suggestions. Use our Contact Us page to submit your requests, and we\'ll do our best to add popular requested games.'
        }
      ]
    },
    {
      category: 'Privacy & Safety',
      questions: [
        {
          q: 'Is it safe for children to use this platform?',
          a: 'We strive to provide family-friendly content. However, we recommend parental supervision for younger children. Check our Privacy Policy for more information on data collection.'
        },
        {
          q: 'What data do you collect from users?',
          a: 'We collect minimal data for analytics purposes, such as browser type and game usage. No personal information is required or collected. See our Privacy Policy for complete details.'
        },
        {
          q: 'Do you use cookies?',
          a: 'Yes, we use cookies to enhance your experience and remember preferences. You can control cookie settings in your browser. Essential cookies are required for the platform to function.'
        }
      ]
    },
    {
      category: 'Account & Settings',
      questions: [
        {
          q: 'How do I enable dark mode?',
          a: 'Click the theme toggle button in the top right corner of the page. Your preference will be saved automatically for future visits.'
        },
        {
          q: 'Can I adjust game controls?',
          a: 'Control customization depends on the specific game. Most games display control instructions when you start playing. Check the settings menu within each game.'
        },
        {
          q: 'How do I report a bug or technical issue?',
          a: 'Use our Contact Us page to report bugs. Please include details about the issue, your browser type, and device. Screenshots are helpful if possible.'
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-gray-100 dark:from-gray-900 dark:to-purple-950 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full mb-6">
            <HelpCircle size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find quick answers to common questions about our gaming platform.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none transition-colors text-lg"
              aria-label="Search FAQ questions"
            />
          </div>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              No results found for "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredFaqs.map((category, catIdx) => (
              <div key={catIdx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-purple-500 pl-4">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIdx) => {
                    const globalIndex = catIdx * 100 + faqIdx;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={faqIdx}
                        className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-colors"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-gray-900 dark:text-white pr-4">
                            {faq.q}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-purple-600 dark:text-purple-400 flex-shrink-0 transition-transform ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-t-2 border-gray-200 dark:border-gray-700">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-lg mb-6 opacity-90">
            Can't find the answer you're looking for? Our support team is ready to help!
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Support
          </button>
        </div>

        <div className="mt-12 text-center space-x-4">
          <button
            onClick={() => onNavigate('quick-links')}
            className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
          >
            ← Back to Quick Links
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => onNavigate('home')}
            className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
