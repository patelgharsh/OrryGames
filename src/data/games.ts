export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail_url: string;
  game_url: string;
  creator: string;
  rating: number;
  plays: string;
  featured_section: string;
  created_at: string;
  updated_at: string;
}

export const GAMES_DATA: Game[] = [
  {
    id: '1',
    title: '2048 Cube Runner',
    description: 'Merge cubes and reach 2048! Navigate through challenging obstacles while combining numbered cubes. Test your reflexes and strategic thinking in this addictive puzzle runner game.',
    category: 'Puzzle',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/1a048e5b83254ec990f9bb401e37b4cb/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/2048-cube-runner',
    creator: 'GameDistribution',
    rating: 4.7,
    plays: '1.2M',
    featured_section: 'new',
    created_at: '2026-01-17T00:00:00Z',
    updated_at: '2026-01-17T00:00:00Z'
  },
  {
    id: '2',
    title: 'Mad Day Special',
    description: 'Drive through apocalyptic landscapes in this action-packed racing game! Upgrade your vehicle, defeat enemies, and save your pet from aliens. Features intense combat and exciting upgrades.',
    category: 'Racing',
    thumbnail_url: '/mad_day_special-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/8c3e3e3cce1a42698d22e7f0ac4d31e9/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/mad-day-special',
    creator: 'GameDistribution',
    rating: 4.8,
    plays: '2.5M',
    featured_section: 'hot',
    created_at: '2026-01-16T00:00:00Z',
    updated_at: '2026-01-16T00:00:00Z'
  },
  {
    id: '3',
    title: 'Speed Car Race Madness',
    description: 'Experience high-speed racing action! Dodge traffic, collect power-ups, and become the ultimate speed champion. Fast-paced gameplay with stunning graphics and smooth controls.',
    category: 'Racing',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/f0cb9e1d4e2e4c3d9b8f7a6e5d4c3b2a/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/speed-car-race-madness',
    creator: 'GameDistribution',
    rating: 4.6,
    plays: '1.8M',
    featured_section: 'weekly',
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-01-15T00:00:00Z'
  },
  {
    id: '4',
    title: 'Mafia Sniper Crime Shooting',
    description: 'Become an elite sniper in this thrilling action game! Take down targets with precision, complete challenging missions, and rise through the criminal underworld ranks.',
    category: 'Shooting',
    thumbnail_url: '/mafia_sniper_crime_shooting-512x384.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/mafia-sniper-crime-shooting',
    creator: 'GameDistribution',
    rating: 4.5,
    plays: '3.1M',
    featured_section: 'best',
    created_at: '2026-01-14T00:00:00Z',
    updated_at: '2026-01-14T00:00:00Z'
  },
  {
    id: '5',
    title: 'Bubble Shooter Pro',
    description: 'Classic bubble shooter game with a modern twist! Match three or more bubbles of the same color to pop them. Features hundreds of levels with increasing difficulty.',
    category: 'Puzzle',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/bubble-shooter-pro/index.html',
    creator: 'Arcade Studios',
    rating: 4.9,
    plays: '5.2M',
    featured_section: 'best',
    created_at: '2026-01-13T00:00:00Z',
    updated_at: '2026-01-13T00:00:00Z'
  },
  {
    id: '6',
    title: 'Stickman Warriors',
    description: 'Epic stickman fighting game with intense combat! Master various fighting techniques, unlock new characters, and battle through challenging levels.',
    category: 'Action',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/stickman-warriors/index.html',
    creator: 'Action Games Inc',
    rating: 4.7,
    plays: '4.3M',
    featured_section: 'hot',
    created_at: '2026-01-12T00:00:00Z',
    updated_at: '2026-01-12T00:00:00Z'
  },
  {
    id: '7',
    title: 'Cooking Mama Deluxe',
    description: 'Cook delicious meals in this fun cooking simulation! Follow recipes, chop ingredients, and serve perfect dishes to happy customers.',
    category: 'Cooking',
    thumbnail_url: '/mad_day_special-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/cooking-mama/index.html',
    creator: 'Cooking Games Co',
    rating: 4.8,
    plays: '2.9M',
    featured_section: 'weekly',
    created_at: '2026-01-11T00:00:00Z',
    updated_at: '2026-01-11T00:00:00Z'
  },
  {
    id: '8',
    title: 'Subway Surfers',
    description: 'Run, jump, and surf through endless subway tracks! Dodge trains, collect coins, and unlock cool characters in this endless runner game.',
    category: 'Arcade',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/subway-surfers/index.html',
    creator: 'Runner Games',
    rating: 4.9,
    plays: '8.7M',
    featured_section: 'best',
    created_at: '2026-01-10T00:00:00Z',
    updated_at: '2026-01-10T00:00:00Z'
  },
  {
    id: '9',
    title: 'Soccer Stars Championship',
    description: 'Play table soccer with a twist! Flick your players to score goals, compete in tournaments, and become the ultimate champion.',
    category: 'Sports',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/soccer-stars/index.html',
    creator: 'Sports Games Ltd',
    rating: 4.6,
    plays: '3.4M',
    featured_section: 'new',
    created_at: '2026-01-09T00:00:00Z',
    updated_at: '2026-01-09T00:00:00Z'
  },
  {
    id: '10',
    title: 'Fashion Dress Up',
    description: 'Create stunning outfits and style your models! Mix and match clothes, accessories, and hairstyles to create the perfect look.',
    category: 'Girls',
    thumbnail_url: '/mad_day_special-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/fashion-dress-up/index.html',
    creator: 'Fashion Games',
    rating: 4.7,
    plays: '2.1M',
    featured_section: 'weekly',
    created_at: '2026-01-08T00:00:00Z',
    updated_at: '2026-01-08T00:00:00Z'
  },
  {
    id: '11',
    title: 'Tap Tap Clicker',
    description: 'Click your way to victory in this addictive idle game! Upgrade your clicking power and unlock automation to grow your empire.',
    category: 'Clicker',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/tap-tap-clicker/index.html',
    creator: 'Idle Games Studio',
    rating: 4.5,
    plays: '1.9M',
    featured_section: 'new',
    created_at: '2026-01-07T00:00:00Z',
    updated_at: '2026-01-07T00:00:00Z'
  },
  {
    id: '12',
    title: 'Zombie Apocalypse',
    description: 'Survive the zombie outbreak! Shoot, scavenge, and strategize to stay alive in this intense action shooter.',
    category: 'Shooting',
    thumbnail_url: '/mafia_sniper_crime_shooting-512x384.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/zombie-apocalypse/index.html',
    creator: 'Zombie Games',
    rating: 4.8,
    plays: '6.2M',
    featured_section: 'hot',
    created_at: '2026-01-06T00:00:00Z',
    updated_at: '2026-01-06T00:00:00Z'
  },
  {
    id: '13',
    title: 'Ninja Adventure',
    description: 'Become a ninja master! Jump, slash, and sneak through enemy territory in this exciting adventure platformer.',
    category: 'Adventure',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/ninja-adventure/index.html',
    creator: 'Adventure Games',
    rating: 4.7,
    plays: '3.8M',
    featured_section: 'hot',
    created_at: '2026-01-05T00:00:00Z',
    updated_at: '2026-01-05T00:00:00Z'
  },
  {
    id: '14',
    title: 'Multiplayer Battle Arena',
    description: 'Compete against players worldwide! Join epic battles, form alliances, and dominate the arena in this multiplayer extravaganza.',
    category: 'Multiplayer',
    thumbnail_url: '/mad_day_special-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/multiplayer-battle/index.html',
    creator: 'Online Games',
    rating: 4.9,
    plays: '7.5M',
    featured_section: 'best',
    created_at: '2026-01-04T00:00:00Z',
    updated_at: '2026-01-04T00:00:00Z'
  },
  {
    id: '15',
    title: 'Candy Crush Paradise',
    description: 'Match colorful candies in this sweet puzzle game! Complete challenging levels and unlock special power-ups.',
    category: 'Puzzle',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/candy-crush/index.html',
    creator: 'Puzzle Masters',
    rating: 4.8,
    plays: '9.1M',
    featured_section: 'best',
    created_at: '2026-01-03T00:00:00Z',
    updated_at: '2026-01-03T00:00:00Z'
  },
  {
    id: '16',
    title: 'Drift Racing 3D',
    description: 'Master the art of drifting! Race through stunning 3D tracks, customize your car, and compete for the best lap times.',
    category: 'Racing',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/drift-racing/index.html',
    creator: 'Racing Games Pro',
    rating: 4.7,
    plays: '4.6M',
    featured_section: 'hot',
    created_at: '2026-01-02T00:00:00Z',
    updated_at: '2026-01-02T00:00:00Z'
  },
  {
    id: '17',
    title: 'Fruit Slicer Mania',
    description: 'Slice fruits with precision! Swipe to cut flying fruits, avoid bombs, and achieve the highest score in this satisfying arcade game.',
    category: 'Arcade',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/fruit-slicer/index.html',
    creator: 'Arcade Masters',
    rating: 4.6,
    plays: '3.2M',
    featured_section: 'weekly',
    created_at: '2026-01-01T00:00:00Z',
    updated_at: '2026-01-01T00:00:00Z'
  },
  {
    id: '18',
    title: 'Basketball Legends',
    description: 'Shoot hoops like a pro! Play against AI or friends in this exciting basketball game with realistic physics.',
    category: 'Sports',
    thumbnail_url: '/mad_day_special-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/basketball-legends/index.html',
    creator: 'Sports Champions',
    rating: 4.8,
    plays: '5.4M',
    featured_section: 'weekly',
    created_at: '2025-12-31T00:00:00Z',
    updated_at: '2025-12-31T00:00:00Z'
  },
  {
    id: '19',
    title: 'Parkour Master',
    description: 'Run, jump, and flip through urban environments! Master parkour moves and complete challenging obstacle courses.',
    category: 'Action',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/parkour-master/index.html',
    creator: 'Extreme Sports',
    rating: 4.7,
    plays: '3.9M',
    featured_section: 'new',
    created_at: '2025-12-30T00:00:00Z',
    updated_at: '2025-12-30T00:00:00Z'
  },
  {
    id: '20',
    title: 'Pizza Maker Chef',
    description: 'Run your own pizzeria! Take orders, prepare delicious pizzas, and satisfy hungry customers in this fun cooking game.',
    category: 'Cooking',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/pizza-maker/index.html',
    creator: 'Cooking Masters',
    rating: 4.6,
    plays: '2.7M',
    featured_section: 'new',
    created_at: '2025-12-29T00:00:00Z',
    updated_at: '2025-12-29T00:00:00Z'
  },
  {
    id: '21',
    title: 'Castle Defense TD',
    description: 'Defend your castle from waves of enemies! Build towers, upgrade defenses, and protect your kingdom in this strategic tower defense game.',
    category: 'Action',
    thumbnail_url: '/mafia_sniper_crime_shooting-512x384.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/castle-defense/index.html',
    creator: 'Strategy Games',
    rating: 4.8,
    plays: '4.1M',
    featured_section: 'hot',
    created_at: '2025-12-28T00:00:00Z',
    updated_at: '2025-12-28T00:00:00Z'
  }
];

export const CATEGORIES = [
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

export function getGameById(id: string): Game | undefined {
  return GAMES_DATA.find(game => game.id === id);
}

export function getGamesByCategory(category: string): Game[] {
  if (category === 'All') return GAMES_DATA;
  return GAMES_DATA.filter(game => game.category === category);
}

export function getGamesByFeaturedSection(section: string, limit?: number): Game[] {
  const filtered = GAMES_DATA.filter(game => game.featured_section === section);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function searchGames(query: string): Game[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return GAMES_DATA;

  return GAMES_DATA.filter(game =>
    game.title.toLowerCase().includes(lowerQuery) ||
    game.category.toLowerCase().includes(lowerQuery) ||
    game.description.toLowerCase().includes(lowerQuery)
  );
}
