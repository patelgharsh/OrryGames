import { useState, useCallback, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GamesListPage from './pages/GamesListPage';
import GamePage from './pages/GamePage';
import QuickLinksPage from './pages/QuickLinksPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ContactUsPage from './pages/ContactUsPage';
import FAQPage from './pages/FAQPage';
import AboutUsPage from './pages/AboutUsPage';
import { useToast } from './hooks/useToast';
// import { DevToolsProtection } from './components/DevToolsProtection';

type Page = 'home' | 'games' | 'about' | 'contact' | 'quick-links' | 'privacy' | 'terms' | 'faq';

function AppContent() {
  const isMobile = window.innerWidth < 768;
  const [currentPage, setCurrentPage] = useState<Page>(isMobile ? 'games' : 'home');
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const { showToast, ToastContainer } = useToast();

  // Handle deep linking from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('game');
    if (gameId) {
      setSelectedGameId(gameId);
      setCurrentPage('games');
    }
  }, []);

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page as Page);
    setSelectedGameId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleGameClick = useCallback((gameId: string) => {
    setSelectedGameId(gameId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = useCallback(() => {
    setSelectedGameId(null);
    setCurrentPage('games');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleThemeChange = useCallback((theme: 'light' | 'dark') => {
    showToast({
      message: theme === 'light' ? 'Light mode activated' : 'Dark mode activated',
      type: theme === 'light' ? 'theme-light' : 'theme-dark',
      duration: 2000
    });
  }, [showToast]);

  return (
    <>
      {/* <DevToolsProtection /> */}
      <div className="min-h-screen">
        <Header onNavigate={handleNavigate} onThemeChange={handleThemeChange} />

        {selectedGameId ? (
          <GamePage gameId={selectedGameId} onBack={handleBackToHome} showToast={showToast} />
        ) : currentPage === 'home' ? (
          <HomePage onGameClick={handleGameClick} onNavigate={handleNavigate} />
        ) : currentPage === 'games' ? (
          <GamesListPage onGameClick={handleGameClick} />
        ) : currentPage === 'quick-links' ? (
          <QuickLinksPage onNavigate={handleNavigate} />
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicyPage onNavigate={handleNavigate} />
        ) : currentPage === 'terms' ? (
          <TermsOfServicePage onNavigate={handleNavigate} />
        ) : currentPage === 'contact' ? (
          <ContactUsPage onNavigate={handleNavigate} />
        ) : currentPage === 'faq' ? (
          <FAQPage onNavigate={handleNavigate} />
        ) : currentPage === 'about' ? (
          <AboutUsPage onNavigate={handleNavigate} />
        ) : null}

        <Footer onNavigate={handleNavigate} />
      </div>
      <ToastContainer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
