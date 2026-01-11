import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import SettingsMenu from './SettingsMenu';

interface HeaderProps {
  onNavigate: (page: string) => void;
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

export default function Header({ onNavigate, onThemeChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { label: 'Home', page: 'home' },
    { label: 'Games', page: 'games' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
   <header className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="relative flex items-center h-20">

      {/* LEFT: LOGO + NAME */}
      <div
        className="flex items-center gap-2 group cursor-pointer"
        onClick={() => onNavigate('home')}
      >
        <img
          src="/pi7_tool_chatgpt_image_jan_11__2026__02_34_41_pm-removebg-preview.png"
          alt="OrryGames Logo"
          className="w-14 h-auto transform transition-transform duration-300 group-hover:scale-110"
        />

        <span className="flex items-center text-xl md:text-2xl font-black tracking-wide text-white transition-colors duration-300">
          Orry
          <span className="ml-1 text-yellow-300 group-hover:text-white">
            Games
          </span>
        </span>
      </div>

      {/* CENTER: NAVIGATION */}
      <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
        {menuItems.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className="font-bold text-sm hover:text-yellow-300 transition-colors relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
          </button>
        ))}
      </nav>

      {/* RIGHT: SETTINGS + THEME + MENU */}
      <div className="ml-auto flex items-center gap-3">
        <SettingsMenu />
        <ThemeToggle onThemeChange={onThemeChange} />

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

    </div>

    {/* MOBILE MENU */}
    {isMenuOpen && (
      <div className="md:hidden pb-4 space-y-3 animate-in fade-in slide-in-from-top-2">
        {menuItems.map((item) => (
          <button
            key={item.page}
            onClick={() => {
              onNavigate(item.page);
              setIsMenuOpen(false);
            }}
            className="block w-full text-left font-bold text-sm hover:text-yellow-300 transition-colors py-2"
          >
            {item.label}
          </button>
        ))}

        <div className="relative pt-2">
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:border-yellow-300 focus:bg-white/30 transition-all placeholder-white/70"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/70" />
        </div>
      </div>
    )}
  </div>
</header>
  );
}
