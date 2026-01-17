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
    featured_section: 'best',
    created_at: '2026-01-16T00:00:00Z',
    updated_at: '2026-01-16T00:00:00Z'
  },
  {
    id: '3',
    title: 'Speed Car Racing',
    description: 'Experience high-speed racing action! Dodge traffic, collect power-ups, and become the ultimate speed champion. Fast-paced gameplay with stunning graphics and smooth controls.',
    category: 'Racing',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/1a048e5b83254ec990f9bb401e37b4cb/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/2048-cube-runner',
    creator: 'GameDistribution',
    rating: 4.6,
    plays: '1.8M',
    featured_section: 'hot',
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-01-15T00:00:00Z'
  },
  {
    id: '4',
    title: 'Sniper Mission',
    description: 'Become an elite sniper in this thrilling action game! Take down targets with precision, complete challenging missions, and rise through the ranks.',
    category: 'Shooting',
    thumbnail_url: '/mafia_sniper_crime_shooting-512x384.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/8c3e3e3cce1a42698d22e7f0ac4d31e9/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/mad-day-special',
    creator: 'GameDistribution',
    rating: 4.5,
    plays: '3.1M',
    featured_section: 'weekly',
    created_at: '2026-01-14T00:00:00Z',
    updated_at: '2026-01-14T00:00:00Z'
  },
  {
    id: '5',
    title: 'Puzzle Master 2048',
    description: 'Classic 2048 puzzle game with a twist! Combine numbered tiles to reach higher scores. Features smooth animations and addictive gameplay.',
    category: 'Puzzle',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/1a048e5b83254ec990f9bb401e37b4cb/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/2048-cube-runner',
    creator: 'Puzzle Studios',
    rating: 4.9,
    plays: '5.2M',
    featured_section: 'best',
    created_at: '2026-01-13T00:00:00Z',
    updated_at: '2026-01-13T00:00:00Z'
  },
  {
    id: '6',
    title: 'Action Racing Hero',
    description: 'Epic racing game with intense action! Battle enemies while racing through challenging tracks. Upgrade your vehicle and dominate the competition.',
    category: 'Action',
    thumbnail_url: '/mad_day_special-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/8c3e3e3cce1a42698d22e7f0ac4d31e9/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/mad-day-special',
    creator: 'Action Games Inc',
    rating: 4.7,
    plays: '4.3M',
    featured_section: 'hot',
    created_at: '2026-01-12T00:00:00Z',
    updated_at: '2026-01-12T00:00:00Z'
  },
  {
    id: '7',
    title: 'Speed Challenge',
    description: 'Test your racing skills in this high-speed challenge! Navigate through traffic, avoid obstacles, and set new speed records.',
    category: 'Racing',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/1a048e5b83254ec990f9bb401e37b4cb/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/2048-cube-runner',
    creator: 'Speed Games Co',
    rating: 4.8,
    plays: '2.9M',
    featured_section: 'new',
    created_at: '2026-01-11T00:00:00Z',
    updated_at: '2026-01-11T00:00:00Z'
  },
  {
    id: '8',
    title: 'Cube Runner Pro',
    description: 'Navigate through an endless tunnel of cubes! Test your reflexes in this fast-paced endless runner with stunning 3D graphics.',
    category: 'Arcade',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/1a048e5b83254ec990f9bb401e37b4cb/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/2048-cube-runner',
    creator: 'Runner Games',
    rating: 4.9,
    plays: '8.7M',
    featured_section: 'best',
    created_at: '2026-01-10T00:00:00Z',
    updated_at: '2026-01-10T00:00:00Z'
  },
  {
    id: '9',
    title: 'Racing Madness',
    description: 'Experience racing madness! Compete in thrilling races, perform stunts, and unlock powerful vehicles in this action-packed racing game.',
    category: 'Racing',
    thumbnail_url: '/mad_day_special-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/8c3e3e3cce1a42698d22e7f0ac4d31e9/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/mad-day-special',
    creator: 'Racing Games Ltd',
    rating: 4.6,
    plays: '3.4M',
    featured_section: 'weekly',
    created_at: '2026-01-09T00:00:00Z',
    updated_at: '2026-01-09T00:00:00Z'
  },
  {
    id: '10',
    title: 'Speed Demon',
    description: 'Become a speed demon! Race at breakneck speeds through challenging courses. Features multiple game modes and exciting power-ups.',
    category: 'Racing',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/1a048e5b83254ec990f9bb401e37b4cb/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/2048-cube-runner',
    creator: 'Speed Masters',
    rating: 4.7,
    plays: '2.1M',
    featured_section: 'hot',
    created_at: '2026-01-08T00:00:00Z',
    updated_at: '2026-01-08T00:00:00Z'
  },
  {
    id: '11',
    title: 'Target Shooter',
    description: 'Precision shooting game with challenging targets! Improve your aim and complete missions in this engaging shooter experience.',
    category: 'Shooting',
    thumbnail_url: '/mafia_sniper_crime_shooting-512x384.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/8c3e3e3cce1a42698d22e7f0ac4d31e9/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/mad-day-special',
    creator: 'Shooter Studios',
    rating: 4.5,
    plays: '1.9M',
    featured_section: 'new',
    created_at: '2026-01-07T00:00:00Z',
    updated_at: '2026-01-07T00:00:00Z'
  },
  {
    id: '12',
    title: 'Puzzle Quest',
    description: 'Embark on a puzzle adventure! Solve challenging puzzles, unlock new levels, and become the puzzle master.',
    category: 'Puzzle',
    thumbnail_url: '/2048_cube_runner_512x340_fixed.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/1a048e5b83254ec990f9bb401e37b4cb/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/2048-cube-runner',
    creator: 'Puzzle Games',
    rating: 4.8,
    plays: '6.2M',
    featured_section: 'weekly',
    created_at: '2026-01-06T00:00:00Z',
    updated_at: '2026-01-06T00:00:00Z'
  },
  {
    id: '13',
    title: 'Adventure Racer',
    description: 'Thrilling racing adventure! Drive through stunning landscapes, overcome obstacles, and discover hidden shortcuts.',
    category: 'Adventure',
    thumbnail_url: '/mad_day_special-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/8c3e3e3cce1a42698d22e7f0ac4d31e9/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/mad-day-special',
    creator: 'Adventure Games',
    rating: 4.7,
    plays: '3.8M',
    featured_section: 'hot',
    created_at: '2026-01-05T00:00:00Z',
    updated_at: '2026-01-05T00:00:00Z'
  },
  {
    id: '14',
    title: 'Turbo Race',
    description: 'Extreme turbo racing! Activate nitro boosts, drift around corners, and dominate the racetrack in this high-octane racing game.',
    category: 'Racing',
    thumbnail_url: '/speed_car_race_madness-512x340.jpg',
    game_url: 'https://html5.gamedistribution.com/rvvASMiM/1a048e5b83254ec990f9bb401e37b4cb/index.html?gd_sdk_referrer_url=https://gamedistribution.com/games/2048-cube-runner',
    creator: 'Turbo Games',
    rating: 4.9,
    plays: '7.5M',
    featured_section: 'best',
    created_at: '2026-01-04T00:00:00Z',
    updated_at: '2026-01-04T00:00:00Z'
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
