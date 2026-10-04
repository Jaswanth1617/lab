import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { testsData, testsData_ta } from '../../data/testsData';

export default function TestDetailsModal({ testId, isOpen, onClose, onBookThis }) {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !testId) return null;

  const activeDict = lang === 'ta' ? testsData_ta : testsData;
  const test = activeDict[testId] || testsData[testId];

  if (!test) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop active"
      id="testDetailsModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="testDetailsTitle"
      onClick={handleBackdropClick}
    >
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title" id="testDetailsTitle">
            {t('modal_test_title')}
          </h3>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close test details modal"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-body" id="testDetailsContent">
          <div className="test-modal-media">
            <img
              src={test.image}
              alt={test.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span className="badge-pill" style={{ fontSize: '0.8rem', padding: '4px 12px' }}>
              {test.category}
            </span>
          </div>

          <h3 style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', color: 'var(--dark-blue)', marginBottom: '14px' }}>
            {test.title}
          </h3>

          <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '20px' }}>
            {test.desc}
          </p>

          {test.parameters && test.parameters.length > 0 && (
            <div style={{ marginTop: '18px', marginBottom: '20px' }}>
              <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark-blue)', marginBottom: '10px' }}>
                {t('modal_label_params')}
              </h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {test.parameters.map((p, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--primary-light)',
                      color: 'var(--primary)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '9999px'
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="test-modal-info-grid">
            <div>
              <strong style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '4px' }}>
                {t('modal_label_prep')}
              </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                {test.preparation}
              </span>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '4px' }}>
                {t('modal_label_sample')}
              </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                {test.sampleType}
              </span>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '4px' }}>
                {t('modal_label_turnaround')}
              </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 600 }}>
                {test.turnaround}
              </span>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '4px' }}>
                {t('modal_label_care')}
              </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
                {t('modal_care_val')}
              </span>
            </div>
          </div>

          <div className="test-modal-actions">
            <button
              type="button"
              className="btn btn-secondary modal-close-btn"
              style={{ padding: '10px 20px' }}
              onClick={onClose}
            >
              {t('modal_btn_close')}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              style={{ padding: '10px 24px' }}
              onClick={() => {
                onClose();
                onBookThis(test.title);
              }}
            >
              {t('modal_btn_book_this')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
