import { Gamepad2, Zap, Globe, Shield, Target, Mail, ExternalLink, Swords, Puzzle, Trophy, Clock } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  const genres = [
    {
      icon: Swords,
      title: 'Action & Adventure',
      description: 'Heart-pounding challenges and epic journeys.'
    },
    {
      icon: Puzzle,
      title: 'Puzzle & Logic',
      description: 'Brain-teasers to keep your mind sharp.'
    },
    {
      icon: Trophy,
      title: 'Sports & Racing',
      description: 'High-speed thrills and competitive gameplay.'
    },
    {
      icon: Clock,
      title: 'Casual Games',
      description: 'Perfect for a quick break during your day.'
    }
  ];

  const reasons = [
    {
      icon: Target,
      title: 'Originality & Quality',
      description: 'We don\'t just host any game. Our team manually tests and selects games that offer the best performance and engagement.'
    },
    {
      icon: Zap,
      title: 'No Downloads Required',
      description: 'All our games play directly in your browser (HTML5), meaning you can start playing in seconds without installing anything.'
    },
    {
      icon: Globe,
      title: 'Cross-Platform Play',
      description: 'Whether you are on a desktop, tablet, or smartphone, OrryGames is optimized to provide a smooth experience on all devices.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'We prioritize user safety. Our site is regularly updated to ensure a secure environment for our community.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 rounded-2xl shadow-lg">
              <Gamepad2 className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            About Us
          </h1>
          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 font-bold max-w-4xl mx-auto leading-relaxed mb-4">
            Welcome to OrryGames Your Ultimate Destination for Instant Fun!
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At OrryGames (<a href="https://orrygames.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">https://orrygames.com</a>), we believe that gaming should be accessible, high-quality, and, most importantly, free for everyone. Our mission is to provide a seamless browser-based gaming experience that brings joy to players of all ages, anywhere in the world.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Founded in 2025, OrryGames started as a small project by a team of passionate gamers and web developers. We noticed that many gaming sites were cluttered, slow, and difficult to navigate. We set out to build a platform that is fast, mobile-friendly, and focused on the player.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white text-center mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10 max-w-3xl mx-auto">
            Our library features a diverse range of genres to ensure there is something for everyone:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {genres.map((genre, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <genre.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                  {genre.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {genre.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white text-center mb-12">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">OrryGames?</span>
          </h2>
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-orange-500 hover:border-pink-500 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-3">
                      {index + 1}. {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-2xl">
          <h2 className="text-3xl font-black mb-6">Our Vision</h2>
          <p className="text-lg leading-relaxed opacity-95">
            Our goal is to become one of the leading web-based gaming portals globally. We are constantly working on adding new features, improving site speed, and expanding our game collection with high-quality titles from top developers.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            We love hearing from our community! Whether you have a game suggestion, technical feedback, or just want to say hello, feel free to reach out to us.
          </p>

          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Email</p>
                <a
                  href="mailto:contact.orrygames@gmail.com"
                  className="text-lg text-orange-500 hover:underline font-bold"
                >
                  contact.orrygames@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ExternalLink className="w-6 h-6 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Website</p>
                <a
                  href="https://orrygames.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-orange-500 hover:underline font-bold"
                >
                  https://orrygames.com/
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl p-8 text-center border border-orange-200 dark:border-orange-700">
            <p className="text-2xl font-black text-gray-900 dark:text-white mb-6">
              Thank you for choosing OrryGames. Let's play!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('games')}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-black text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Explore Games
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full font-black text-lg border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
