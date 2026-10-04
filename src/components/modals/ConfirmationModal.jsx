import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function ConfirmationModal({ bookingData, isOpen, onClose }) {
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

  if (!isOpen || !bookingData) return null;

  const isTa = lang === 'ta';
  const {
    appointmentId,
    patientName,
    patientPhone,
    selectedTest,
    bookingDate,
    bookingTime,
    collectionType,
    homeAddress,
    primaryWaUrl,
    secondaryWaUrl
  } = bookingData;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop active"
      id="confirmationModal"
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className="modal-container" style={{ maxWidth: '480px' }}>
        <div className="modal-body" id="confirmationDetails">
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <div
              style={{
                width: '58px',
                height: '58px',
                background: '#e8f5e9',
                color: '#2e7d32',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px'
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--dark-blue)', marginBottom: '6px' }}>
              {t('conf_title')}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.45' }}>
              {isTa ? (
                <>
                  நன்றி, <strong>{patientName}</strong>. உங்கள் முன்பதிவு விவரங்கள் ஆய்வக வாட்ஸ்அப்பிற்குத் தயார் செய்யப்பட்டுள்ளது.
                </>
              ) : (
                <>
                  Thank you, <strong>{patientName}</strong>. Your appointment token has been generated and pre-filled for our lab on WhatsApp.
                </>
              )}
            </p>
          </div>

          <div
            style={{
              background: 'var(--bg-page)',
              border: '1px dashed var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              marginBottom: '18px',
              fontSize: '0.88rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{t('conf_token')}</span>
              <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>
                {appointmentId}
              </strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{t('conf_patient')}</span>
              <strong style={{ color: 'var(--dark-blue)' }}>{patientName}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{t('conf_phone')}</span>
              <strong style={{ color: 'var(--dark-blue)' }}>{patientPhone}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{t('conf_test')}</span>
              <strong style={{ color: 'var(--dark-blue)', textAlign: 'right', maxWidth: '60%' }}>
                {selectedTest}
              </strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{t('conf_datetime')}</span>
              <strong style={{ color: 'var(--dark-blue)' }}>
                {bookingDate} at {bookingTime}
              </strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>{t('conf_service')}</span>
              <strong style={{ color: 'var(--primary)' }}>
                {collectionType === 'home'
                  ? isTa
                    ? 'வீட்டிற்கே வந்து மாதிரி எடுத்தல்'
                    : 'Home Sample Collection'
                  : isTa
                  ? 'நேரடி வருகை (பொன்னேரி மையம்)'
                  : 'Clinic Walk-in (Ponneri)'}
              </strong>
            </div>
            {collectionType === 'home' && homeAddress && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '8px',
                  borderTop: '1px dashed var(--border-color)',
                  paddingTop: '8px'
                }}
              >
                <span style={{ color: 'var(--text-muted)' }}>{t('conf_address')}</span>
                <span style={{ color: 'var(--dark-blue)', textAlign: 'right', maxWidth: '65%', fontWeight: 500 }}>
                  {homeAddress}
                </span>
              </div>
            )}
          </div>

          {/* WhatsApp Primary Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <a
              href={primaryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                width: '100%',
                background: '#25D366',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 700,
                textDecoration: 'none',
                padding: '12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.95rem',
                boxShadow: '0 4px 14px rgba(37,211,102,0.35)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>{t('conf_btn_wa')}</span>
            </a>

            <a
              href={secondaryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                textDecoration: 'none',
                padding: '10px'
              }}
            >
              <span>{t('conf_btn_wa2')}</span>
            </a>
          </div>

          {/* Quick Phone Call Option */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
            <a
              href="tel:+919843696625"
              className="btn btn-secondary"
              style={{ flex: 1, fontSize: '0.82rem', textDecoration: 'none', textAlign: 'center', padding: '8px 6px' }}
            >
              {t('conf_call1')}
            </a>
            <a
              href="tel:+918778317824"
              className="btn btn-secondary"
              style={{ flex: 1, fontSize: '0.82rem', textDecoration: 'none', textAlign: 'center', padding: '8px 6px' }}
            >
              {t('conf_call2')}
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onClose}
              style={{ width: '100%', padding: '10px' }}
            >
              {t('conf_done')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
