import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header({ onOpenBooking, onOpenSearch, onToggleMobileMenu }) {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'tests', 'packages', 'services', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`} id="mainHeader">
      <div className="container nav-container">
        {/* Left: Logo & Name */}
        <a href="#home" className="brand-logo" aria-label="Sri Durgaa Clinical Laboratory Home">
          <div className="brand-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">{t('brand_name')}</span>
            <span className="brand-tagline">{t('brand_tagline')}</span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav aria-label="Primary Navigation">
          <ul className="nav-menu">
            <li>
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
                {t('nav_home')}
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                {t('nav_about')}
              </a>
            </li>
            <li>
              <a href="#tests" className={`nav-link ${activeSection === 'tests' ? 'active' : ''}`}>
                {t('nav_tests')}
              </a>
            </li>
            <li>
              <a href="#packages" className={`nav-link ${activeSection === 'packages' ? 'active' : ''}`}>
                {t('nav_packages')}
              </a>
            </li>
            <li>
              <a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>
                {t('nav_services')}
              </a>
            </li>
            <li>
              <a href="#reviews" className={`nav-link ${activeSection === 'reviews' ? 'active' : ''}`}>
                {t('nav_reviews')}
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                {t('nav_contact')}
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Header Actions */}
        <div className="header-actions">
          {/* Language Switcher Segmented Pill */}
          <div className="lang-switch-wrap" role="group" aria-label="Language Selector">
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="Switch to English"
              title="Switch to English"
            >
              <span className="lang-text-full">English</span>
              <span className="lang-text-short">EN</span>
            </button>
            <span className="lang-divider">|</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'ta' ? 'active' : ''}`}
              onClick={() => setLang('ta')}
              aria-label="தமிழுக்கு மாற்றவும்"
              title="தமிழுக்கு மாற்றவும்"
            >
              <span className="lang-text-full">தமிழ்</span>
              <span className="lang-text-short">தமிழ்</span>
            </button>
          </div>

          <button
            type="button"
            className="btn-search-trigger"
            id="headerSearchBtn"
            title={t('search_label')}
            aria-label={t('search_label')}
            onClick={onOpenSearch}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            type="button"
            className="btn btn-primary btn-sm open-book-modal-btn"
            onClick={() => onOpenBooking('General Diagnostic Test')}
          >
            {t('nav_book_test')}
          </button>

          <button
            type="button"
            className="mobile-toggle"
            id="mobileMenuToggle"
            aria-label="Open mobile navigation menu"
            onClick={onToggleMobileMenu}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
