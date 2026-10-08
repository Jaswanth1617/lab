import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { bookingSelectOptions, timeSlotOptions } from '../../data/translations';

export default function BookTestModal({ isOpen, preselectedTest, onClose, onSuccess }) {
  const { lang, t } = useLanguage();

  const [collectionType, setCollectionType] = useState('lab');
  const [selectedTest, setSelectedTest] = useState('CBC – Complete Blood Count');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('07:00 AM - 08:30 AM (Fasting Slot)');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [homeAddress, setHomeAddress] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (isOpen) {
      setBookingDate(todayStr);
      if (preselectedTest) {
        // match options
        const opts = bookingSelectOptions.en;
        const allTests = [...opts.tests, ...opts.packages];
        const match = allTests.find(
          (item) =>
            item.val.toLowerCase().includes(preselectedTest.toLowerCase()) ||
            preselectedTest.toLowerCase().includes(item.val.toLowerCase())
        );
        if (match) {
          setSelectedTest(match.val);
        } else {
          setSelectedTest(preselectedTest);
        }
      }
    }
  }, [isOpen, preselectedTest]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentOpts = bookingSelectOptions[lang] || bookingSelectOptions.en;
  const currentSlots = timeSlotOptions[lang] || timeSlotOptions.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isTa = lang === 'ta';
    const appointmentId = 'SDCL-' + Math.floor(100000 + Math.random() * 900000);

    const PRIMARY_WA = '919843696625';
    const SECONDARY_WA = '918778317824';

    let waMessage = isTa
      ? `🏥 *புதிய மருத்துவப் பரிசோதனை முன்பதிவு*\n*ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி, பொன்னேரி*\n`
      : `🏥 *NEW TEST BOOKING REQUEST*\n*Sri Durgaa Clinical Laboratory, Ponneri*\n`;
    waMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waMessage += `${isTa ? '📋 *முன்பதிவு டோக்கன்:*' : '📋 *Booking Token:*'} ${appointmentId}\n`;
    waMessage += `${isTa ? '👤 *நோயாளி பெயர்:*' : '👤 *Patient Name:*'} ${patientName}\n`;
    waMessage += `${isTa ? '📞 *கைபேசி எண்:*' : '📞 *Patient Mobile:*'} ${patientPhone}\n`;
    waMessage += `${isTa ? '🧪 *பரிசோதனை / தொகுப்பு:*' : '🧪 *Test / Package:*'} ${selectedTest}\n`;
    waMessage += `${isTa ? '📅 *தேவையான தேதி:*' : '📅 *Preferred Date:*'} ${bookingDate}\n`;
    waMessage += `${isTa ? '⏰ *நேரம்:*' : '⏰ *Time Slot:*'} ${bookingTime}\n`;
    waMessage += `${isTa ? '🏥 *சேவை விருப்பம்:*' : '🏥 *Service Preference:*'} ${
      collectionType === 'home'
        ? isTa
          ? 'வீட்டிற்கே வந்து மாதிரி எடுத்தல்'
          : 'Home Sample Collection'
        : isTa
        ? 'நேரடி வருகை (பொன்னேரி மையம்)'
        : 'Lab Visit (Ponneri Centre)'
    }\n`;
    if (collectionType === 'home' && homeAddress) {
      waMessage += `${isTa ? '📍 *வீட்டு முகவரி:*' : '📍 *Home Address:*'} ${homeAddress}\n`;
    }
    waMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waMessage += isTa
      ? `_எனது பரிசோதனை முன்பதிவை உறுதி செய்ய வேண்டுகிறேன். நன்றி!_`
      : `_Please confirm my test appointment slot. Thank you!_`;

    const primaryWaUrl = `https://wa.me/${PRIMARY_WA}?text=${encodeURIComponent(waMessage)}`;
    const secondaryWaUrl = `https://wa.me/${SECONDARY_WA}?text=${encodeURIComponent(waMessage)}`;

    try {
      window.open(primaryWaUrl, '_blank');
    } catch (err) {
      console.warn('Popup blocked, link provided in confirmation dialog:', err);
    }

    const bookingData = {
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
    };

    // Save to PostgreSQL database
    try {
      fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      }).catch((err) => console.warn('Database booking save warning:', err));
    } catch (err) {
      console.warn('Database booking save error:', err);
    }

    onSuccess(bookingData);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop active"
      id="bookTestModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookTestTitle"
      onClick={handleBackdropClick}
    >
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title" id="bookTestTitle">
            {t('book_modal_title')}
          </h3>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close booking modal"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div
            style={{
              background: '#e8f5e9',
              border: '1px solid #c8e6c9',
              borderRadius: 'var(--radius-sm)',
              padding: '12px 14px',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px'
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e7d32"
              strokeWidth="2"
              style={{ flexShrink: 0, marginTop: '2px' }}
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <div style={{ fontSize: '0.85rem', color: '#1b5e20', lineHeight: 1.45 }}>
              <strong>{lang === 'ta' ? 'தானியங்கி வாட்ஸ்அப் முன்பதிவு:' : 'Automated WhatsApp Booking:'}</strong>{' '}
              {lang === 'ta'
                ? 'இந்தப் படிவத்தை சமர்ப்பிக்கும் போது, உங்கள் முன்பதிவு விவரங்கள் நேரடியாக எங்கள் ஆய்வக வாட்ஸ்அப்பிற்கு (+91 98436 96625) அனுப்பப்படும்.'
                : 'Submitting this form will automatically prepare and send your booking confirmation directly to our lab WhatsApp (+91 98436 96625) for immediate verification.'}
            </div>
          </div>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
            {t('book_modal_sub')}
          </p>

          <form id="bookingForm" onSubmit={handleSubmit}>
            {/* Visit Type Radio Selector */}
            <div className="form-group">
              <label className="form-label">{t('book_label_pref')}</label>
              <div className="booking-pref-grid">
                <label
                  style={{
                    border: `1px solid ${collectionType === 'lab' ? 'var(--primary)' : 'var(--border-color)'}`,
                    background: collectionType === 'lab' ? 'var(--primary-subtle)' : 'transparent',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="radio"
                    name="collectionType"
                    value="lab"
                    checked={collectionType === 'lab'}
                    onChange={() => setCollectionType('lab')}
                  />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--dark-blue)' }}>
                      {t('book_radio_lab_title')}
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {t('book_radio_lab_sub')}
                    </span>
                  </div>
                </label>

                <label
                  style={{
                    border: `1px solid ${collectionType === 'home' ? 'var(--primary)' : 'var(--border-color)'}`,
                    background: collectionType === 'home' ? 'var(--primary-subtle)' : 'transparent',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer'
                  }}
                >
                  <input
                    type="radio"
                    name="collectionType"
                    value="home"
                    checked={collectionType === 'home'}
                    onChange={() => setCollectionType('home')}
                  />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--primary)' }}>
                      {t('book_radio_home_title')}
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {t('book_radio_home_sub')}
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Select Test or Package */}
            <div className="form-group">
              <label htmlFor="bookingTestSelect" className="form-label">
                {t('book_label_select')}
              </label>
              <select
                id="bookingTestSelect"
                className="form-control"
                value={selectedTest}
                onChange={(e) => setSelectedTest(e.target.value)}
                required
              >
                <optgroup label={currentOpts.testsGroupLabel}>
                  {currentOpts.tests.map((tItem) => (
                    <option key={tItem.val} value={tItem.val}>
                      {tItem.label}
                    </option>
                  ))}
                </optgroup>
                <optgroup label={currentOpts.packagesGroupLabel}>
                  {currentOpts.packages.map((pItem) => (
                    <option key={pItem.val} value={pItem.val}>
                      {pItem.label}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Date & Time Slot */}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="bookingDate" className="form-label">
                  {t('book_label_date')}
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  className="form-control"
                  min={todayStr}
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bookingTime" className="form-label">
                  {t('book_label_time')}
                </label>
                <select
                  id="bookingTime"
                  className="form-control"
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  required
                >
                  {currentSlots.map((s) => (
                    <option key={s.val} value={s.val}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Patient Information */}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="patientName" className="form-label">
                  {t('book_label_patient')}
                </label>
                <input
                  type="text"
                  id="patientName"
                  className="form-control"
                  placeholder={t('book_ph_patient')}
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="patientPhone" className="form-label">
                  {t('book_label_phone')}
                </label>
                <input
                  type="tel"
                  id="patientPhone"
                  className="form-control"
                  placeholder={t('book_ph_phone')}
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Dynamic Home Address Field */}
            {collectionType === 'home' && (
              <div className="form-group" id="homeAddressGroup">
                <label htmlFor="homeAddress" className="form-label">
                  {t('book_label_addr')}
                </label>
                <textarea
                  id="homeAddress"
                  className="form-control"
                  placeholder={t('book_ph_addr')}
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  rows="3"
                  required
                />
              </div>
            )}

            <div style={{ marginTop: '12px' }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>{t('book_btn_submit')}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
