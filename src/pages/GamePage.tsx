import { useEffect, useState, useRef } from 'react';
import { Game, getGameById } from '../data/games';
import { ArrowLeft, Star, Play, Share2 } from 'lucide-react';

interface GamePageProps {
  gameId: string;
  onBack: () => void;
}

export default function GamePage({ gameId, onBack }: GamePageProps) {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadGame();
  }, [gameId]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowDescription(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function loadGame() {
    try {
      const gameData = getGameById(gameId);
      setGame(gameData || null);
    } catch (error) {
      console.error('Error loading game:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 dark:border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-white font-semibold">Loading game...</p>
        </div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-white font-semibold mb-4">Game not found</p>
          <button
            onClick={onBack}
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-purple-700 dark:via-purple-800 dark:to-purple-900 py-6 shadow-lg">
        <div className="container mx-auto px-4 animate-fade-in">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-all mb-4 hover:gap-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Games</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                {game.title}
              </h1>
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  <span className="font-bold">{game.rating}</span>
                </div>
                <span className="font-semibold">{game.plays} plays</span>
                <span className="font-semibold">By {game.creator}</span>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-3">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-bold text-white">
                {game.category}
              </span>
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black dark:bg-gray-950 rounded-2xl overflow-hidden shadow-2xl mb-8 animate-scale-in border-4 border-gray-800 dark:border-gray-700 mx-auto" style={{ width: '888px', maxWidth: '100%' }}>
            <div className="relative">
              <iframe
                src={game.game_url}
                className="w-full"
                scrolling="no"
                style={{ border: 0, width: '888px', height: '498px', maxWidth: '100%' }}
                title={game.title}
                allowFullScreen
                allow="accelerometer *; autoplay *; clipboard-write *; encrypted-media *; fullscreen *; gamepad *; gyroscope *; hid *; magnetometer *; microphone *; midi *; payment *; picture-in-picture *; publickey-credentials-get *; screen-wake-lock *; serial *; usb *; web-share *; xr-spatial-tracking *"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-popups-to-escape-sandbox"
                referrerPolicy="no-referrer-when-downgrade"
                loading="eager"
              />
            </div>
          </div>

          <div
            ref={descriptionRef}
            className={`bg-white dark:bg-white/10 dark:backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-purple-400/30 transition-all duration-500 ${
              showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-3xl font-black text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
              <Play className="w-8 h-8 text-orange-500" />
              <span>About This Game</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {game.description}
            </p>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Category</p>
                  <p className="font-bold text-gray-800 dark:text-white">{game.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Developer</p>
                  <p className="font-bold text-gray-800 dark:text-white">{game.creator}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Rating</p>
                  <p className="font-bold text-gray-800 dark:text-white">{game.rating} / 5.0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Total Plays</p>
                  <p className="font-bold text-gray-800 dark:text-white">{game.plays}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
