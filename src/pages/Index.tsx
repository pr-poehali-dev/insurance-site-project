import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import OsagoPage from '@/pages/OsagoPage';
import MortgagePage from '@/pages/MortgagePage';
import AboutPage from '@/pages/AboutPage';
import FaqPage from '@/pages/FaqPage';
import DocumentsPage from '@/pages/DocumentsPage';
import ContactsPage from '@/pages/ContactsPage';

type Page = 'home' | 'osago' | 'mortgage' | 'about' | 'faq' | 'documents' | 'contacts';

export default function Index() {
  const [activePage, setActivePage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setActivePage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'osago': return <OsagoPage />;
      case 'mortgage': return <MortgagePage />;
      case 'about': return <AboutPage />;
      case 'faq': return <FaqPage />;
      case 'documents': return <DocumentsPage />;
      case 'contacts': return <ContactsPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
