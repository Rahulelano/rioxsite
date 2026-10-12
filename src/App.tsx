import React, { useState, useEffect, useCallback } from 'react';
import { PAGE_SEO, RoutePath } from './data/rionxtData';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { QualityCapabilitiesPage } from './pages/QualityCapabilitiesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

function normalizePath(rawPath: string): RoutePath {
  const cleaned = rawPath.replace(/\/+$/, '') || '/';
  if (cleaned in PAGE_SEO) {
    return cleaned as RoutePath;
  }
  return '/';
}

export function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    typeof window !== 'undefined' ? normalizePath(window.location.pathname) : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((path: RoutePath, sectionId?: string) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
      setCurrentPath(path);

      if (sectionId) {
        setTimeout(() => {
          const targetEl = document.getElementById(sectionId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutPage onNavigate={handleNavigate} />;
      case '/services':
        return <ServicesOverviewPage onNavigate={handleNavigate} />;
      case '/services/pcb-assembly':
      case '/services/smt-tht-ems':
      case '/services/embedded-firmware':
      case '/services/iot-iiot':
      case '/services/industrial-automation':
        return <ServiceDetailPage serviceRoute={currentPath} onNavigate={handleNavigate} />;
      case '/quality-capabilities':
        return <QualityCapabilitiesPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101820]">
      <SEOHead currentPath={currentPath} />
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
