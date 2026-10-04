import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function PackagesSection({ onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('packages_label')}</span>
          <h2 className="section-title">{t('packages_heading')}</h2>
          <p className="section-subtitle">{t('packages_sub')}</p>
        </div>

        <div className="packages-grid">
          {/* Package 1: Basic Health Checkup */}
          <div className="package-card">
            <div>
              <div className="package-header">
                <span className="package-badge-type">{t('pkg1_badge')}</span>
                <h3 className="package-name">{t('pkg1_name')}</h3>
                <p className="package-summary">{t('pkg1_summary')}</p>
              </div>

              <div className="package-body">
                <h5>{t('pkg_key_incl')}</h5>
                <ul className="package-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg1_item1')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg1_item2')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg1_item3')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg1_item4')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg1_item5')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="package-footer">
              <button
                type="button"
                className="btn btn-secondary open-book-modal-btn"
                style={{ width: '100%' }}
                onClick={() => onOpenBooking('Basic Health Checkup')}
              >
                {t('pkg_btn')}
              </button>
              <div className="package-note">{t('pkg1_note')}</div>
            </div>
          </div>

          {/* Package 2: Complete Health Checkup (Popular) */}
          <div className="package-card popular-package">
            <div className="popular-badge-pill">{t('pkg2_popular')}</div>
            <div>
              <div className="package-header">
                <span className="package-badge-type">{t('pkg2_badge')}</span>
                <h3 className="package-name">{t('pkg2_name')}</h3>
                <p className="package-summary">{t('pkg2_summary')}</p>
              </div>

              <div className="package-body">
                <h5>{t('pkg_key_incl')}</h5>
                <ul className="package-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg2_item1')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg2_item2')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg2_item3')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg2_item4')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg2_item5')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg2_item6')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg2_item7')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="package-footer">
              <button
                type="button"
                className="btn btn-primary open-book-modal-btn"
                style={{ width: '100%' }}
                onClick={() => onOpenBooking('Complete Health Checkup')}
              >
                {t('pkg_btn')}
              </button>
              <div className="package-note">{t('pkg2_note')}</div>
            </div>
          </div>

          {/* Package 3: Advanced Health Checkup */}
          <div className="package-card">
            <div>
              <div className="package-header">
                <span className="package-badge-type">{t('pkg3_badge')}</span>
                <h3 className="package-name">{t('pkg3_name')}</h3>
                <p className="package-summary">{t('pkg3_summary')}</p>
              </div>

              <div className="package-body">
                <h5>{t('pkg_key_incl')}</h5>
                <ul className="package-features-list">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg3_item1')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg3_item2')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg3_item3')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg3_item4')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg3_item5')}</span>
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('pkg3_item6')}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="package-footer">
              <button
                type="button"
                className="btn btn-secondary open-book-modal-btn"
                style={{ width: '100%' }}
                onClick={() => onOpenBooking('Advanced Health Checkup')}
              >
                {t('pkg_btn')}
              </button>
              <div className="package-note">{t('pkg3_note')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
