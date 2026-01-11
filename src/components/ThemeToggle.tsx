import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeToggleProps {
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

export default function ThemeToggle({ onThemeChange }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme();
    onThemeChange?.(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      className="relative p-2 rounded-lg bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 backdrop-blur-sm border border-white/30 dark:border-gray-700 group overflow-hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-purple-400"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      aria-pressed={theme === 'dark'}
      role="switch"
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-600 dark:to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="relative">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-white dark:text-gray-300 transform group-hover:rotate-12 transition-transform duration-300" />
        ) : (
          <Sun className="w-5 h-5 text-white dark:text-gray-300 transform group-hover:rotate-180 transition-transform duration-500" />
        )}
      </div>

      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-600 dark:to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
    </button>
  );
}
