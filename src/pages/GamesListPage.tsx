import { useEffect, useState, useCallback, useRef } from 'react';
import { supabase, Game } from '../lib/supabase';
import GameCard from '../components/GameCard';
import GameCardSkeleton from '../components/GameCardSkeleton';
import { Filter, X, SlidersHorizontal, Search } from 'lucide-react';

interface GamesListPageProps {
  onGameClick: (gameId: string) => void;
}

const CATEGORIES = [
  'All',
  'Action',
  'Adventure',
  'Arcade',
  'Clicker',
  'Cooking',
  'Girls',
  'Hypercasual',
  'Multiplayer',
  'Puzzle',
  'Racing',
  'Shooting',
  'Sports'
];

export default function GamesListPage({ onGameClick }: GamesListPageProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    loadGames();
    setupIntersectionObserver();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    filterGames();
  }, [games, selectedCategory, searchQuery]);

  const setupIntersectionObserver = () => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            if (src && !loadedImages.has(src)) {
              img.src = src;
              setLoadedImages((prev) => new Set(prev).add(src));
              observerRef.current?.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01
      }
    );
  };

  async function loadGames() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('games')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) {
        setGames(data);
      }
    } catch (error) {
      console.error('Error loading games:', error);
    } finally {
      setLoading(false);
    }
  }

  const filterGames = useCallback(() => {
    let result = games;

    if (selectedCategory !== 'All') {
      result = result.filter((game) => game.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (game) =>
          game.title.toLowerCase().includes(query) ||
          game.category.toLowerCase().includes(query) ||
          game.description?.toLowerCase().includes(query)
      );
    }

    setFilteredGames(result);
  }, [games, selectedCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded-lg w-64 mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-lg w-96"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                <GameCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-purple-600 dark:via-purple-700 dark:to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-4 animate-fade-in">
            All Games
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-white/90 animate-fade-in">
            Discover and play from our collection of {games.length} amazing games
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
            <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search games by name, category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 dark:focus:border-purple-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
                  aria-label="Search games"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-3 bg-orange-500 dark:bg-purple-600 text-white rounded-xl font-bold hover:bg-orange-600 dark:hover:bg-purple-700 transition-colors"
                aria-label="Toggle filters"
                aria-expanded={showFilters}
              >
                <SlidersHorizontal className="w-5 h-5" />
                Filters
              </button>
            </div>

            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-purple-400 font-semibold transition-colors"
                aria-label="Clear all filters"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            )}
          </div>

          <div
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block transition-all`}
            role="region"
            aria-label="Category filters"
          >
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <h2 className="font-bold text-gray-800 dark:text-white">Categories</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 dark:focus:ring-purple-500 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 dark:from-purple-600 dark:to-purple-700 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  aria-pressed={selectedCategory === category}
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400 font-semibold">
            Showing {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {filteredGames.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">
              No games found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-orange-500 dark:bg-purple-600 text-white rounded-full font-bold hover:bg-orange-600 dark:hover:bg-purple-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            role="list"
            aria-label="Games list"
          >
            {filteredGames.map((game, index) => (
              <div
                key={game.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.02}s` }}
                role="listitem"
              >
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
