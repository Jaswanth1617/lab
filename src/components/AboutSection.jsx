import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Professional Lab Image */}
          <div className="about-media-col">
            <div className="about-image-card">
              <img
                src="/assets/images/about-lab.png"
                alt="Medical Laboratory Technician conducting tests at Sri Durgaa Clinical Laboratory, Ponneri"
                width="1024"
                height="460"
                loading="lazy"
              />
            </div>
            <div className="about-floating-experience">
              <span className="exp-number">{t('about_exp_years')}</span>
              <div className="exp-text">
                <strong>{t('about_exp_title')}</strong><br />
                <span>{t('about_exp_sub')}</span>
              </div>
            </div>
          </div>

          {/* Right: About Details */}
          <div className="about-content-col">
            <span className="section-label">{t('about_label')}</span>
            <h2 className="about-heading">{t('about_heading')}</h2>
            <p className="about-lead-desc">
              {t('about_lead')}
            </p>

            <div className="about-checklist">
              <div className="about-check-item">
                <div className="check-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>{t('about_check1')}</span>
              </div>
              <div className="about-check-item">
                <div className="check-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>{t('about_check2')}</span>
              </div>
              <div className="about-check-item">
                <div className="check-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>{t('about_check3')}</span>
              </div>
              <div className="about-check-item">
                <div className="check-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>{t('about_check4')}</span>
              </div>
            </div>

            <a href="#services" className="btn btn-primary">
              {t('about_btn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
