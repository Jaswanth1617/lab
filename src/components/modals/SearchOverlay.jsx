import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { testsData, testsData_ta } from '../../data/testsData';

export default function SearchOverlay({ isOpen, onClose, onSelectTest }) {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    }
  }, [isOpen]);

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
  const activeDict = isTa ? testsData_ta : testsData;
  const q = query.toLowerCase().trim();

  let matches = [];
  if (q) {
    Object.keys(testsData).forEach((key) => {
      const enItem = testsData[key];
      const taItem = testsData_ta[key] || enItem;
      const currentItem = activeDict[key] || enItem;

      if (
        enItem.title.toLowerCase().includes(q) ||
        enItem.desc.toLowerCase().includes(q) ||
        enItem.category.toLowerCase().includes(q) ||
        taItem.title.toLowerCase().includes(q) ||
        taItem.desc.toLowerCase().includes(q) ||
        taItem.category.toLowerCase().includes(q)
      ) {
        matches.push({ key, ...currentItem });
      }
    });
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSelect = (key) => {
    onClose();
    onSelectTest(key);
  };

  return (
    <div
      className="search-overlay active"
      id="searchOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="searchOverlayInput"
      onClick={handleBackdropClick}
    >
      <div className="search-overlay-box">
        <div className="search-overlay-input-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            id="searchOverlayInput"
            className="search-overlay-input"
            placeholder={t('search_ph')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search all lab tests"
          />
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close search overlay"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="search-results-list" id="searchResultsList">
          {!q && (
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t('search_default_hint')}
            </div>
          )}

          {q && matches.length === 0 && (
            <div style={{ padding: '16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {isTa ? (
                <>
                  "{q}" என்ற பெயரில் சோதனைகள் இல்லை. சிறப்புப் பரிசோதனைகளுக்கு ஆய்வகத்தைத் தொடர்பு கொள்ளவும்.
                </>
              ) : (
                <>
                  No tests matching "<strong>{q}</strong>". Please contact clinic for specialized tests.
                </>
              )}
            </div>
          )}

          {q &&
            matches.map((m) => (
              <div
                key={m.key}
                className="search-result-item"
                onClick={() => handleSelect(m.key)}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--dark-blue)', fontSize: '0.95rem' }}>
                    {m.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {m.category} • {m.turnaround}
                  </div>
                </div>
                <span className="btn btn-secondary btn-sm" style={{ padding: '5px 12px', fontSize: '0.8rem' }}>
                  {t('search_btn_view')}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
