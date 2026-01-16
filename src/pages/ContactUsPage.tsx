import { Mail, Globe, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { sendEmail, type EmailFormData } from '../services/emailService';

interface ContactUsPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactUsPage({ onNavigate }: ContactUsPageProps) {
  const [formData, setFormData] = useState<EmailFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: null, text: '' });

    const response = await sendEmail(formData);

    setIsLoading(false);

    if (response.success) {
      setStatusMessage({ type: 'success', text: response.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatusMessage({ type: 'error', text: response.message });
    }

    setTimeout(() => {
      setStatusMessage({ type: null, text: '' });
    }, 8000);
  };

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Send us an email for detailed inquiries',
      icon: Mail,
      info: 'contact.orrygames@gmail.com',
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      title: 'Social Media',
      description: 'Follow us for updates and news',
      icon: Globe,
      info: '@orrygames',
      color: 'text-blue-600 dark:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 dark:from-gray-900 dark:to-orange-950 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6">
            <Mail size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're here to help! Reach out with questions, feedback, or partnership inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {statusMessage.type && (
                <div
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    statusMessage.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm font-semibold">{statusMessage.text}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                  isLoading
                    ? 'bg-orange-400 cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600'
                } text-white`}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Other Ways to Reach Us
            </h2>
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${method.color} p-3 bg-gray-100 dark:bg-gray-700 rounded-lg`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {method.description}
                      </p>
                      <p className={`${method.color} font-semibold`}>
                        {method.info}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Business Inquiries</h3>
              <p className="mb-4 opacity-90">
                Interested in partnerships or advertising opportunities? We'd love to hear from you!
              </p>
              <p className="font-semibold">contact.orrygames@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="text-center space-x-4">
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
