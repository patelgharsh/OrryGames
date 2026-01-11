import { Gamepad2, Users, Sparkles, Target, Rocket, Heart } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  const features = [
    {
      icon: Gamepad2,
      title: 'Vast Game Library',
      description: 'Access hundreds of high-quality games across all genres, from action and adventure to puzzles and strategy.'
    },
    {
      icon: Sparkles,
      title: 'Premium Experience',
      description: 'Enjoy smooth gameplay, stunning graphics, and intuitive controls designed for maximum entertainment.'
    },
    {
      icon: Users,
      title: 'Thriving Community',
      description: 'Connect with fellow gamers, share achievements, and compete on leaderboards in a welcoming environment.'
    },
    {
      icon: Target,
      title: 'Always Free',
      description: 'No hidden fees, no subscriptions. Just pure gaming fun accessible to everyone, anytime, anywhere.'
    }
  ];

  const values = [
    {
      title: 'User-First Design',
      description: 'Every feature is crafted with your gaming experience in mind, ensuring intuitive navigation and seamless play.'
    },
    {
      title: 'Quality Curation',
      description: 'We handpick each game to guarantee entertainment value, playability, and technical excellence.'
    },
    {
      title: 'Continuous Innovation',
      description: 'We stay ahead of gaming trends, regularly updating our library with fresh titles and cutting-edge features.'
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">OrryGames</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where passion meets play, and every click opens a door to adventure
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            At OrryGames, we believe gaming should be accessible, enjoyable, and free for everyone. Our mission is to create the ultimate online gaming destination where players of all ages and skill levels can discover, play, and fall in love with amazing games.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We're passionate about bringing joy, excitement, and memorable experiences to millions of gamers worldwide. Whether you're looking for a quick gaming break or an immersive adventure, OrryGames is your home for endless entertainment.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white text-center mb-12">
            What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Special</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-2xl">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 mr-3" />
            <h2 className="text-3xl font-black">Our Community</h2>
          </div>
          <p className="text-lg leading-relaxed mb-4 opacity-95">
            OrryGames is more than just a gaming platform—it's a vibrant community of passionate players from around the globe. We foster an environment where gamers can connect, compete, and celebrate their love for gaming together.
          </p>
          <p className="text-lg leading-relaxed opacity-95">
            Join thousands of players who share tips, celebrate victories, and discover new favorite games every day. Whether you're climbing leaderboards or just playing for fun, you're part of our gaming family.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border-l-4 border-orange-500 hover:border-pink-500 transition-colors duration-300"
              >
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <Rocket className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">The Future of Gaming</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We're just getting started! Our roadmap includes exciting new features like advanced multiplayer capabilities, personalized game recommendations powered by AI, exclusive tournaments with prizes, and an ever-expanding library of premium titles.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            We're committed to staying at the forefront of online gaming technology, constantly innovating to bring you the best possible gaming experience. Your feedback shapes our future, and together, we're building something extraordinary.
          </p>

          <div className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl p-8 text-center border border-orange-200 dark:border-orange-700">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4">
              Ready to Join the Adventure?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Dive into a world of unlimited gaming possibilities. No sign-up required—just click and play!
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
                Get in Touch
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
