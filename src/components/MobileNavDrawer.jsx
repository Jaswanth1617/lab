import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function MobileNavDrawer({ isOpen, onClose, onOpenBooking }) {
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  const handleBookClick = () => {
    onClose();
    onOpenBooking('General Diagnostic Test');
  };

  return (
    <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`} id="mobileNavDrawer" aria-hidden={!isOpen}>
      <div className="mobile-nav-header">
        <div className="brand-text">
          <span className="brand-name" style={{ fontSize: '1.05rem' }}>{t('mobile_lab_name')}</span>
          <span className="brand-tagline">{t('mobile_lab_loc')}</span>
        </div>
        <button
          type="button"
          className="modal-close-btn"
          id="mobileDrawerClose"
          aria-label="Close navigation menu"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Language Switcher Box */}
      <div className="mobile-lang-box">
        <span className="mobile-lang-title">{t('mobile_lang_prompt')}</span>
        <div className="mobile-lang-pills">
          <button
            type="button"
            className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            English
          </button>
          <button
            type="button"
            className={`mobile-lang-btn ${lang === 'ta' ? 'active' : ''}`}
            onClick={() => setLang('ta')}
          >
            தமிழ்
          </button>
        </div>
      </div>

      <ul className="mobile-nav-links">
        <li>
          <a href="#home" className="mobile-nav-link" onClick={handleLinkClick}>
            {t('nav_home')}
          </a>
        </li>
        <li>
          <a href="#about" className="mobile-nav-link" onClick={handleLinkClick}>
            {t('nav_about')}
          </a>
        </li>
        <li>
          <a href="#tests" className="mobile-nav-link" onClick={handleLinkClick}>
            {t('tests_heading')}
          </a>
        </li>
        <li>
          <a href="#packages" className="mobile-nav-link" onClick={handleLinkClick}>
            {t('nav_packages')}
          </a>
        </li>
        <li>
          <a href="#services" className="mobile-nav-link" onClick={handleLinkClick}>
            {t('nav_services')}
          </a>
        </li>
        <li>
          <a href="#reviews" className="mobile-nav-link" onClick={handleLinkClick}>
            {t('nav_reviews')}
          </a>
        </li>
        <li>
          <a href="#contact" className="mobile-nav-link" onClick={handleLinkClick}>
            {t('nav_contact')}
          </a>
        </li>
      </ul>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          type="button"
          className="btn btn-primary open-book-modal-btn"
          style={{ width: '100%' }}
          onClick={handleBookClick}
        >
          {t('nav_book_test')}
        </button>
        <a href="tel:+919843696625" className="btn btn-secondary" style={{ width: '100%' }}>
          {t('mobile_call_1')}
        </a>
        <a href="tel:+918778317824" className="btn btn-secondary" style={{ width: '100%' }}>
          {t('mobile_call_2')}
        </a>
        <a
          href="https://wa.me/919843696625"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{ width: '100%', background: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>{t('mobile_wa')}</span>
        </a>
      </div>
    </div>
  );
}
