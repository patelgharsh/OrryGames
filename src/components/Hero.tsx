import { Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 dark:from-purple-700 dark:via-purple-800 dark:to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMjRoNnYxMnptMCAwaC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />

      <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="font-bold text-sm">New Games Added Daily!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Play Amazing Games
            <span className="block text-yellow-300 mt-2">Absolutely Free!</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 font-semibold leading-relaxed">
            Discover thousands of exciting games across all genres. No downloads, no registration required. Just pure gaming fun!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate?.('games')}
              className="group bg-white dark:bg-gradient-to-r dark:from-orange-500 dark:to-pink-500 text-cyan-600 dark:text-white px-8 py-4 rounded-full font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              aria-label="Start playing games"
            >
              <span>Start Playing Now</span>
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-12 mb-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: '1000+', label: 'Games' },
              { number: '50+', label: 'Categories' },
              { number: '10M+', label: 'Players' },
              { number: '5★', label: 'Rating' }
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-black text-yellow-300 mb-1">{stat.number}</div>
                <div className="text-sm font-bold text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
