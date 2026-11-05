import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { HomeKitchensPage } from './pages/HomeKitchensPage';
import { BookACookPage } from './pages/BookACookPage';
import { PartnersPage } from './pages/PartnersPage';
import { DownloadPage } from './pages/DownloadPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { BlogPage } from './pages/BlogPage';
import { CareersPage } from './pages/CareersPage';
import { AudioPlayerProvider } from './context/AudioPlayerContext';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.hash.replace('#', '') || '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.replace('#', '') || '/';
      setCurrentRoute(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: string) => {
    if (route === '/' || route === '') {
      if (window.location.hash) {
        history.pushState(null, '', window.location.pathname + window.location.search);
      }
      setCurrentRoute('/');
    } else {
      window.location.hash = route;
      setCurrentRoute(route);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage navigate={navigate} />;
      case '/our-story':
        return <OurStoryPage navigate={navigate} />;
      case '/discover':
        return <DiscoverPage navigate={navigate} />;
      case '/home-kitchens':
        return <HomeKitchensPage navigate={navigate} />;
      case '/book-a-cook':
        return <BookACookPage />;
      case '/partners':
        return <PartnersPage />;
      case '/download':
        return <DownloadPage navigate={navigate} />;
      case '/blog':
        return <BlogPage navigate={navigate} />;
      case '/business-signup':
        return <PartnersPage />;
      case '/careers':
        return <CareersPage navigate={navigate} />;
      case '/kitchen-verification':
        return <HomePage navigate={navigate} />;
      case '/faq':
        return <FAQPage navigate={navigate} />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <LegalPage type="privacy" />;
      case '/terms':
        return <LegalPage type="terms" />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <AudioPlayerProvider>
      <div className="feazto-app-root">
        <Header currentRoute={currentRoute} navigate={navigate} />
        {renderCurrentPage()}
        <Footer navigate={navigate} />
      </div>
    </AudioPlayerProvider>
  );
}

export default App;
