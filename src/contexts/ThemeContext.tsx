import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedAnimations = localStorage.getItem('animations');

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    if (savedAnimations !== null) {
      setAnimationsEnabled(savedAnimations === 'true');
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem('theme', theme);

    const body = document.body;
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem('animations', String(animationsEnabled));
    document.documentElement.classList.toggle('reduce-motion', !animationsEnabled);
  }, [animationsEnabled, isLoaded]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, animationsEnabled, toggleAnimations }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
