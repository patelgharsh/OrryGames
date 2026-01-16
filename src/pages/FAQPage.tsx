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
          a: 'No. OrryGames is an open platform. You can play all games instantly without registration. We do not require users to sign up or provide personal details just to access our content, ensuring a friction-free and private experience.'
        },
        {
          q: 'Are the games really free to play?',
          a: 'Yes. All games on OrryGames are 100% free. We sustain our platform through Google AdSense advertisements. These ads allow us to pay for hosting and continue bringing you high-quality games at no cost to you.'
        },
        {
          q: 'What devices are supported?',
          a: 'Our website is fully responsive and optimized for cross-platform play. You can enjoy our games on Windows, macOS, Linux, Android, and iOS. We recommend using modern browsers like Chrome, Firefox, or Safari for the best experience.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'Why is a game not loading?',
          a: 'Loading issues are typically caused by browser cache or network restrictions. Please try clearing your cache or checking if an Ad-Blocker is preventing the game script from executing. Note that some games require hardware acceleration to be enabled in your browser settings.'
        },
        {
          q: 'The game is lagging or running slowly. What should I do?',
          a: 'Since our games are browser-based, they rely on your device\'s RAM and CPU. To improve performance, close unnecessary background tabs and ensure your browser is updated to the latest version.'
        }
      ]
    },
    {
      category: 'Privacy & Safety',
      questions: [
        {
          q: 'Is it safe for children to use this platform?',
          a: 'Yes. We are committed to a safe gaming environment. We comply with COPPA (Children\'s Online Privacy Protection Act) standards and do not knowingly collect personal data from minors. Our games are curated to be family-friendly.'
        },
        {
          q: 'Do you use cookies and how do they affect me?',
          a: 'Yes, we use cookies to enhance site functionality and for personalized advertising. Google, as a third-party vendor, uses cookies to serve ads based on your interests. You can learn more or opt out by visiting our Privacy Policy and Google\'s Ad Settings.'
        },
        {
          q: 'How do I report a bug or a policy violation?',
          a: 'We take quality and safety seriously. If you find a game that is broken or contains inappropriate content, please contact us immediately at contact.orrygames@gmail.com. We review all reports within 24–48 hours.'
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 dark:from-gray-900 dark:to-orange-950 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6">
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
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none transition-colors text-lg"
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
              className="text-orange-600 dark:text-orange-400 hover:underline font-semibold"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredFaqs.map((category, catIdx) => (
              <div key={catIdx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-orange-500 pl-4">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIdx) => {
                    const globalIndex = catIdx * 100 + faqIdx;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={faqIdx}
                        className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-orange-500 transition-colors"
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
                            className={`text-orange-600 dark:text-orange-400 flex-shrink-0 transition-transform ${
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

        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-lg mb-6 opacity-90">
            Can't find the answer you're looking for? Our support team is ready to help!
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Support
          </button>
        </div>

        <div className="mt-12 text-center space-x-4">
          <button
            onClick={() => onNavigate('quick-links')}
            className="text-orange-600 dark:text-orange-400 hover:underline font-semibold"
          >
            ← Back to Quick Links
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => onNavigate('home')}
            className="text-orange-600 dark:text-orange-400 hover:underline font-semibold"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
