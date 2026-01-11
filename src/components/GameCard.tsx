import { Play, Star } from 'lucide-react';

interface GameCardProps {
  title: string;
  category: string;
  rating: number;
  plays: string;
  creator: string;
  thumbnailUrl?: string;
  onClick: () => void;
}

export default function GameCard({ title, category, rating, plays, creator, thumbnailUrl, onClick }: GameCardProps) {
  const colors = [
    'from-blue-400 to-cyan-500',
    'from-green-400 to-emerald-500',
    'from-red-400 to-orange-500',
    'from-yellow-400 to-amber-500',
    'from-pink-400 to-rose-500',
    'from-violet-400 to-fuchsia-500',
    'from-slate-600 to-gray-700',
    'from-lime-400 to-green-500',
  ];

  const gradientIndex = title.charCodeAt(0) % colors.length;
  const gradient = colors[gradientIndex];

  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-white/10 dark:backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 border border-gray-100 dark:border-purple-400/30"
    >
      <div className={`h-40 ${thumbnailUrl ? 'bg-gray-100 dark:bg-gray-800' : `bg-gradient-to-br ${gradient}`} flex items-center justify-center relative overflow-hidden`}>
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="text-6xl">🎮</div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold text-gray-800">{rating}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button className="bg-white text-gray-800 rounded-full p-3 shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-yellow-300">
            <Play className="w-6 h-6 fill-current" />
          </button>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-black text-base text-gray-800 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors mb-1 truncate">
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-cyan-500 dark:text-cyan-400 font-bold">By {creator}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="px-2 py-1 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-orange-600 dark:text-orange-400 font-bold rounded-full">
            {category}
          </span>
          <span className="text-gray-500 dark:text-gray-400 font-semibold">{plays} plays</span>
        </div>
      </div>
    </div>
  );
}
