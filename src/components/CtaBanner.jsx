import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinicInfo';

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="cta-banner-section" aria-label="Diagnostic Call to Action">
      <div className="container">
        <div className="cta-banner-inner">
          <div className="cta-content">
            <h2 className="cta-heading">{t('cta_heading')}</h2>
            <p className="cta-text">{t('cta_text')}</p>
          </div>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-white">
              {t('cta_btn_contact')}
            </a>
            <a
              href={CLINIC_INFO.maps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{t('cta_btn_directions')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
