import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('services_label')}</span>
          <h2 className="section-title">{t('services_heading')}</h2>
          <p className="section-subtitle">{t('services_sub')}</p>
        </div>

        <div className="services-grid">
          {/* 1. Blood Tests */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv1_title')}</h4>
              <p>{t('serv1_desc')}</p>
            </div>
          </div>

          {/* 2. Hormone Tests */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18" />
                <path d="M5 6c3 0 7 2 7 6-4 0-7-2-7-6z" />
                <path d="M19 6c-3 0-7 2-7 6 4 0 7-2 7-6z" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv2_title')}</h4>
              <p>{t('serv2_desc')}</p>
            </div>
          </div>

          {/* 3. Diabetes Testing */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv3_title')}</h4>
              <p>{t('serv3_desc')}</p>
            </div>
          </div>

          {/* 4. Liver & Kidney Testing */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv4_title')}</h4>
              <p>{t('serv4_desc')}</p>
            </div>
          </div>

          {/* 5. Infection Screening */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv5_title')}</h4>
              <p>{t('serv5_desc')}</p>
            </div>
          </div>

          {/* 6. Pregnancy Testing */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv6_title')}</h4>
              <p>{t('serv6_desc')}</p>
            </div>
          </div>

          {/* 7. ECG */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv7_title')}</h4>
              <p>{t('serv7_desc')}</p>
            </div>
          </div>

          {/* 8. Digital X-Ray */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="9" x2="15" y2="15" />
                <line x1="15" y1="9" x2="9" y2="15" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv8_title')}</h4>
              <p>{t('serv8_desc')}</p>
            </div>
          </div>

          {/* 9. Health Checkups */}
          <div className="service-card">
            <div className="service-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <polyline points="16 11 18 13 22 9" />
              </svg>
            </div>
            <div className="service-info">
              <h4>{t('serv9_title')}</h4>
              <p>{t('serv9_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
