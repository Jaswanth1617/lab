import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          {/* Left side */}
          <div className="hero-content">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>{t('hero_badge')}</span>
            </div>

            <h1 className="hero-title">
              <span>{t('hero_title_1')}</span><br />
              <span className="title-accent">{t('hero_title_accent')}</span>
            </h1>

            <p className="hero-desc">
              {t('hero_desc')}
            </p>

            <div className="hero-btn-group">
              <a href="#tests" className="btn btn-primary">
                <span>{t('hero_btn_tests')}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>{t('hero_btn_contact')}</span>
              </a>
            </div>

            {/* Small Trust Indicator */}
            <div className="hero-trust-indicator">
              <div className="trust-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <div className="trust-indicator-text">
                <strong>{t('hero_trust_years')}</strong>
                <span>{t('hero_trust_desc')}</span>
              </div>
            </div>
          </div>

          {/* Right side: Lab image with floating medical cards */}
          <div className="hero-media-wrapper">
            <div className="hero-image-frame">
              <img
                src="/assets/images/hero-lab.png"
                alt="Sri Durgaa Clinical Laboratory diagnostic workstation with auto-analyzers and testing equipment in Ponneri"
                width="600"
                height="480"
                loading="eager"
              />
            </div>

            {/* Floating Medical Card 1: Accurate Reports */}
            <div className="floating-card floating-card-1">
              <div className="floating-icon icon-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="floating-info">
                <h4>{t('floating_1_title')}</h4>
                <p>{t('floating_1_desc')}</p>
              </div>
            </div>

            {/* Floating Medical Card 2: Experienced Team */}
            <div className="floating-card floating-card-2">
              <div className="floating-icon icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="floating-info">
                <h4>{t('floating_2_title')}</h4>
                <p>{t('floating_2_desc')}</p>
              </div>
            </div>

            {/* Floating Medical Card 3: Quality Testing */}
            <div className="floating-card floating-card-3">
              <div className="floating-icon icon-cyan">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="floating-info">
                <h4>{t('floating_3_title')}</h4>
                <p>{t('floating_3_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
