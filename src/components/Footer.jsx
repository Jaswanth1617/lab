import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinicInfo';

export default function Footer({ onOpenTestDetails, onOpenAdminPortal }) {
  const { lang, t } = useLanguage();

  const handleTestLink = (e, testId) => {
    e.preventDefault();
    onOpenTestDetails(testId);
  };

  return (
    <footer className="main-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Tagline */}
          <div className="footer-brand">
            <a href="#home" className="brand-logo" aria-label="Sri Durgaa Clinical Laboratory Footer Logo">
              <div className="brand-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">{t('brand_name')}</span>
                <span className="brand-tagline">{t('topbar_address')}</span>
              </div>
            </a>
            <p className="footer-desc">
              {lang === 'ta' ? (
                <>
                  "துல்லியமான சோதனைகள். சிறந்த பராமரிப்பு. நல்வாழ்வு."<br />
                  உயர்தர தானியங்கி இயந்திரங்கள் மற்றும் அன்பான சேவையுடன் பொன்னேரி மக்களுக்கு சிறந்த மருத்துவப் பரிசோதனைகள்.
                </>
              ) : (
                <>
                  "Accurate Tests. Trusted Care. Better Health."<br />
                  Providing patient-centric clinical laboratory investigations with uncompromised quality, precision auto-analyzers, and compassionate care.
                </>
              )}
            </p>
            <div className="footer-experience-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              <span>{t('footer_exp')}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>{t('footer_quick_links')}</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>{' '}
                  <span>{t('nav_home')}</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>{' '}
                  <span>{t('nav_about')}</span>
                </a>
              </li>
              <li>
                <a href="#tests">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>{' '}
                  <span>{t('nav_tests')}</span>
                </a>
              </li>
              <li>
                <a href="#packages">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>{' '}
                  <span>{t('nav_packages')}</span>
                </a>
              </li>
              <li>
                <a href="#services">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>{' '}
                  <span>{t('nav_services')}</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>{' '}
                  <span>{t('nav_contact')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Diagnostic Categories */}
          <div className="footer-col">
            <h4>{t('footer_key_tests')}</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#tests" onClick={(e) => handleTestLink(e, 'cbc')}>
                  {t('test_cbc_title')}
                </a>
              </li>
              <li>
                <a href="#tests" onClick={(e) => handleTestLink(e, 'kft')}>
                  {t('test_kft_title')}
                </a>
              </li>
              <li>
                <a href="#tests" onClick={(e) => handleTestLink(e, 'lft')}>
                  {t('test_lft_title')}
                </a>
              </li>
              <li>
                <a href="#tests" onClick={(e) => handleTestLink(e, 'lipid')}>
                  {t('test_lipid_title')}
                </a>
              </li>
              <li>
                <a href="#tests" onClick={(e) => handleTestLink(e, 'sugar')}>
                  {t('test_sugar_title')}
                </a>
              </li>
              <li>
                <a href="#tests" onClick={(e) => handleTestLink(e, 'ecg')}>
                  {t('test_ecg_title')}
                </a>
              </li>
              <li>
                <a href="#tests" onClick={(e) => handleTestLink(e, 'xray')}>
                  {t('test_xray_title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="footer-col">
            <h4>{t('footer_contact_info')}</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href={CLINIC_INFO.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  title="View on Google Maps"
                >
                  {t('footer_address_full')}
                </a>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  <a href="tel:+919843696625" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98436 96625</a> /{' '}
                  <a href="tel:+918778317824" style={{ color: 'inherit', textDecoration: 'none' }}>+91 87783 17824</a>
                </span>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>
                  <a href="mailto:durgalab.ponneri@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    durgalab.ponneri@gmail.com
                  </a>
                </span>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{t('topbar_timing')}</span>
              </li>
            </ul>

            <div className="social-links" aria-label="Social media connections">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919843696625"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Chat on WhatsApp (+91 98436 96625)"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
              {/* Phone Direct 1 */}
              <a
                href="tel:+919843696625"
                className="social-btn"
                title="Call Laboratory (+91 98436 96625)"
                aria-label="Call +91 98436 96625"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              {/* Phone Direct 2 */}
              <a
                href="tel:+918778317824"
                className="social-btn"
                title="Call Laboratory (+91 87783 17824)"
                aria-label="Call +91 87783 17824"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              {/* Location Pin */}
              <a
                href={CLINIC_INFO.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Find us on Google Maps"
                aria-label="Google Maps Location"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Copyright */}
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <span>{t('footer_rights')}</span>
          <button
            type="button"
            onClick={onOpenAdminPortal}
            style={{
              background: 'rgba(13, 148, 136, 0.2)',
              border: '1px solid rgba(13, 148, 136, 0.5)',
              color: '#5eead4',
              padding: '6px 14px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(13, 148, 136, 0.35)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(13, 148, 136, 0.2)'; }}
          >
            <span>🗄️ Database & Staff Portal</span>
          </button>
          <span>{t('footer_motto')}</span>
        </div>
      </div>
    </footer>
  );
}
