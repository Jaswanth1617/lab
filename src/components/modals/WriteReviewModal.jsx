import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function WriteReviewModal({ isOpen, onClose, onSubmitReview }) {
  const { lang, t } = useLanguage();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [area, setArea] = useState('');
  const [testName, setTestName] = useState('Complete Health Checkup');
  const [feedback, setFeedback] = useState('');

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

  const isTa = lang === 'ta';

  const handleSubmit = (e) => {
    e.preventDefault();

    let waReview = isTa
      ? `⭐ *நோயாளி நற்சான்று / கருத்து - ஸ்ரீ துர்கா ஆய்வகம் பொன்னேரி*\n`
      : `⭐ *PATIENT REVIEW & FEEDBACK - SRI DURGAA CLINICAL LAB*\n`;
    waReview += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waReview += `${isTa ? '⭐ *மதிப்பீடு:*' : '⭐ *Rating:*'} ${'★'.repeat(rating)} (${rating}/5)\n`;
    waReview += `${isTa ? '👤 *பெயர்:*' : '👤 *Patient Name:*'} ${name}\n`;
    if (area) {
      waReview += `${isTa ? '📍 *பகுதி / ஊர்:*' : '📍 *Locality:*'} ${area}\n`;
    }
    waReview += `${isTa ? '🧪 *பரிசோதனை:*' : '🧪 *Test / Service:*'} ${testName}\n`;
    waReview += `${isTa ? '💬 *கருத்து:*' : '💬 *Review:*'} ${feedback}\n`;
    waReview += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waReview += isTa ? `_இணையதளத்தின் மூலம் சமர்ப்பிக்கப்பட்டது_` : `_Submitted via Sri Durgaa Clinical Lab Website_`;

    const waUrl = `https://wa.me/919843696625?text=${encodeURIComponent(waReview)}`;

    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.warn('Popup blocked:', err);
    }

    const newReview = {
      id: 'rev-user-' + Date.now(),
      name,
      location: area || (isTa ? 'பொன்னேரி' : 'Ponneri'),
      rating,
      test: { en: testName, ta: testName },
      category: 'packages',
      date: { en: 'Just now', ta: 'சற்று முன்' },
      avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
      initials: name.slice(0, 2).toUpperCase(),
      verified: true,
      comment: { en: feedback, ta: feedback }
    };

    // Save to PostgreSQL database
    try {
      fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          location: area || (isTa ? 'பொன்னேரி' : 'Ponneri'),
          rating,
          testName,
          comment: feedback,
          category: 'packages'
        })
      }).catch((err) => console.warn('Database review save warning:', err));
    } catch (err) {
      console.warn('Database review save error:', err);
    }

    onSubmitReview(newReview);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-backdrop active"
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className="modal-container" style={{ maxWidth: '520px' }}>
        <div className="modal-header">
          <h3 className="modal-title">{t('write_review_title')}</h3>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close review modal"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
            {t('write_review_sub')}
          </p>

          <form onSubmit={handleSubmit}>
            {/* Star Rating Select */}
            <div className="form-group" style={{ textAlign: 'center', marginBottom: '18px' }}>
              <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>
                {t('write_review_rating')}
              </label>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1.9rem',
                      color: (hoverRating || rating) >= star ? '#f59e0b' : '#d1d5db',
                      transition: 'transform 0.15s ease, color 0.15s ease',
                      transform: (hoverRating || rating) >= star ? 'scale(1.15)' : 'scale(1)',
                      padding: '2px'
                    }}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                    aria-label={`${star} Stars`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600 }}>
                {rating} / 5 Stars
              </span>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">{t('write_review_name')}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={isTa ? 'உதா: ராஜேஷ் குமார்' : 'e.g. Rajesh Kumar'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t('write_review_area')}</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={isTa ? 'உதா: என்.ஜி.ஓ காலனி' : 'e.g. NGO Colony, Ponneri'}
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{t('write_review_test')}</label>
              <input
                type="text"
                className="form-control"
                placeholder={isTa ? 'உதா: இரத்த சர்க்கரை / முழு உடல் பரிசோதனை' : 'e.g. Blood Sugar / Complete Health Checkup'}
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">{t('write_review_feedback')}</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder={
                  isTa
                    ? 'ஆய்வக சேவை, வேகம் மற்றும் கனிவு பற்றிய உங்கள் எண்ணங்களை எழுதவும்...'
                    : 'Share your thoughts regarding testing speed, cleanliness, accuracy, and staff care...'
                }
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '10px'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>{t('write_review_submit')}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
