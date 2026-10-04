import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingWhatsApp() {
  const { lang, t } = useLanguage();

  const waText =
    lang === 'ta'
      ? 'வணக்கம் ஸ்ரீ துர்கா ஆய்வகம், மருத்துவ பரிசோதனை பற்றி தெரிந்து கொள்ள விரும்புகிறேன்.'
      : 'Hello Sri Durgaa Clinical Laboratory, I would like to inquire about a diagnostic test.';

  const waUrl = `https://wa.me/919843696625?text=${encodeURIComponent(waText)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with Sri Durgaa Lab on WhatsApp"
      title={t('floating_wa_title')}
    >
      <span className="whatsapp-pulse" />
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      <span className="whatsapp-label">{t('floating_wa_label')}</span>
    </a>
  );
}
