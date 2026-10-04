import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section className="section why-us-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('why_label')}</span>
          <h2 className="section-title">{t('why_heading')}</h2>
          <p className="section-subtitle">{t('why_sub')}</p>
        </div>

        <div className="why-us-grid">
          {/* Card 1: 25+ Years Experience */}
          <div className="why-us-card">
            <div className="why-us-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <h3 className="why-us-title">{t('why1_title')}</h3>
            <p className="why-us-desc">{t('why1_desc')}</p>
          </div>

          {/* Card 2: Accurate Testing */}
          <div className="why-us-card">
            <div className="why-us-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="2" r="2" />
              </svg>
            </div>
            <h3 className="why-us-title">{t('why2_title')}</h3>
            <p className="why-us-desc">{t('why2_desc')}</p>
          </div>

          {/* Card 3: Timely Reports */}
          <div className="why-us-card">
            <div className="why-us-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="why-us-title">{t('why3_title')}</h3>
            <p className="why-us-desc">{t('why3_desc')}</p>
          </div>

          {/* Card 4: Patient Care */}
          <div className="why-us-card">
            <div className="why-us-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="why-us-title">{t('why4_title')}</h3>
            <p className="why-us-desc">{t('why4_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
