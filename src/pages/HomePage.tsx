import { useEffect, useState, memo } from 'react';
import { Game, getGamesByFeaturedSection } from '../data/games';
import GameCard from '../components/GameCard';
import GameCardSkeleton from '../components/GameCardSkeleton';
import Hero from '../components/Hero';
import { ChevronRight } from 'lucide-react';

interface HomePageProps {
  onGameClick: (gameId: string) => void;
  onNavigate: (page: string) => void;
}

export default function HomePage({ onGameClick, onNavigate }: HomePageProps) {
  const [newGames, setNewGames] = useState<Game[]>([]);
  const [weeklyGames, setWeeklyGames] = useState<Game[]>([]);
  const [hotGames, setHotGames] = useState<Game[]>([]);
  const [bestGames, setBestGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGames();
  }, []);

  function loadGames() {
    try {
      setNewGames(getGamesByFeaturedSection('new', 7));
      setWeeklyGames(getGamesByFeaturedSection('weekly', 7));
      setHotGames(getGamesByFeaturedSection('hot', 7));
      setBestGames(getGamesByFeaturedSection('best', 7));
    } catch (error) {
      console.error('Error loading games:', error);
    } finally {
      setLoading(false);
    }
  }

  const GameSection = memo(({ title, games, isLoading }: { title: string; games: Game[]; isLoading?: boolean }) => (
    <section className="mb-16 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400">
          {title}
        </h2>
        <button
          onClick={() => onNavigate('games')}
          className="flex items-center space-x-1 text-cyan-500 dark:text-cyan-400 font-bold hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:gap-2"
        >
          <span>More</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {isLoading ? (
          Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <GameCardSkeleton />
            </div>
          ))
        ) : (
          games.map((game, index) => (
            <div key={game.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <GameCard
                title={game.title}
                category={game.category}
                rating={game.rating}
                plays={game.plays}
                creator={game.creator}
                thumbnailUrl={game.thumbnail_url}
                onClick={() => onGameClick(game.id)}
              />
            </div>
          ))
        )}
      </div>
    </section>
  ));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 dark:border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-white font-semibold">Loading games...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero onNavigate={onNavigate} />

      <main className="container mx-auto px-4 py-12">
        <GameSection title="NEW Games" games={newGames} isLoading={loading} />
        <GameSection title="Weekly Picks" games={weeklyGames} isLoading={loading} />
        <GameSection title="HOT Games" games={hotGames} isLoading={loading} />
        <GameSection title="BEST Games" games={bestGames} isLoading={loading} />

        <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-purple-400 dark:via-purple-500 dark:to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl animate-fade-in">
          <h2 className="text-4xl font-black mb-4">Ready to Start Playing?</h2>
          <p className="text-xl font-semibold mb-8 text-white/90">
            Join millions of players worldwide and discover your next favorite game!
          </p>
          <button
            onClick={() => onNavigate('games')}
            className="bg-white text-orange-600 dark:text-purple-600 px-10 py-4 rounded-full font-black text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Explore All Games
          </button>
        </section>
      </main>
    </div>
  );
}
