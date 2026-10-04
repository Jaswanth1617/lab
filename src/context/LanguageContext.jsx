import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem('sdcl_lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang) => {
    if (newLang !== 'en' && newLang !== 'ta') newLang = 'en';
    setLangState(newLang);
    try {
      localStorage.setItem('sdcl_lang', newLang);
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'ta') {
      document.body.classList.add('lang-tamil');
      document.title = 'ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி | மருத்துவ பரிசோதனை மையம், பொன்னேரி';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி, பொன்னேரி, தமிழ்நாடு. 25+ வருட அனுபவத்துடன் நம்பகமான மருத்துவப் பரிசோதனைகள், இரத்தப் பரிசோதனை, ECG, டிஜிட்டல் எக்ஸ்-ரே & முழு உடல் பரிசோதனை.');
      }
    } else {
      document.body.classList.remove('lang-tamil');
      document.title = 'Sri Durgaa Clinical Laboratory | Diagnostic Centre in Ponneri';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Sri Durgaa Clinical Laboratory in Ponneri, Tamil Nadu. 25+ years of experience providing reliable diagnostic testing, pathology, blood tests, ECG, Digital X-Ray & health checkups.');
      }
    }
  }, [lang]);

  const t = (key) => {
    const dict = translations[lang] || translations.en;
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    return translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
