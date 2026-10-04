import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function TrustSection() {
  const { t } = useLanguage();

  return (
    <section className="trust-section" aria-label="Key Laboratory Highlights">
      <div className="container">
        <div className="trust-grid">
          {/* Card 1 */}
          <div className="trust-card">
            <div className="trust-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="trust-content">
              <span className="trust-number">{t('trust_card1_num')}</span>
              <span className="trust-label">{t('trust_card1_label')}</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="trust-card">
            <div className="trust-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                <line x1="8.5" y1="2" x2="15.5" y2="2" />
                <line x1="7" y1="16" x2="17" y2="16" />
              </svg>
            </div>
            <div className="trust-content">
              <span className="trust-number">{t('trust_card2_num')}</span>
              <span className="trust-label">{t('trust_card2_label')}</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="trust-card">
            <div className="trust-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="22" y1="12" x2="18" y2="12" />
                <line x1="6" y1="12" x2="2" y2="12" />
                <line x1="12" y1="6" x2="12" y2="2" />
                <line x1="12" y1="22" x2="12" y2="18" />
              </svg>
            </div>
            <div className="trust-content">
              <span className="trust-number">{t('trust_card3_num')}</span>
              <span className="trust-label">{t('trust_card3_label')}</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="trust-card">
            <div className="trust-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="trust-content">
              <span className="trust-number">{t('trust_card4_num')}</span>
              <span className="trust-label">{t('trust_card4_label')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
