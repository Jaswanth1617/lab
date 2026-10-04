import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TopNoticeBar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <aside className="top-notice-bar" aria-label="Quick contact and timing notice">
      <div className="container top-bar-inner">
        <div className="top-bar-contact">
          <span className="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{t('topbar_address')}</span>
          </span>
          <span className="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{t('topbar_timing')}</span>
          </span>
          <span className="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <a href="tel:+919843696625" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98436 96625</a> / <a href="tel:+918778317824" style={{ color: 'inherit', textDecoration: 'none' }}>+91 87783 17824</a>
          </span>
          <span className="top-bar-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:durgalab.ponneri@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>durgalab.ponneri@gmail.com</a>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="top-bar-badge">
            <span>{t('topbar_home_collection')}</span>
          </div>
          <div className="top-bar-lang" role="group" aria-label="Language">
            <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>🌐</span>
            <button
              type="button"
              className={`top-lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <span style={{ opacity: 0.4 }}>|</span>
            <button
              type="button"
              className={`top-lang-btn ${lang === 'ta' ? 'active' : ''}`}
              onClick={() => setLang('ta')}
            >
              தமிழ்
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
