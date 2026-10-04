import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="section how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('process_label')}</span>
          <h2 className="section-title">{t('process_heading')}</h2>
          <p className="section-subtitle">{t('process_sub')}</p>
        </div>

        <div className="process-steps-container">
          {/* Step 01 */}
          <div className="step-card">
            <div className="step-number-bubble">01</div>
            <h3 className="step-title">{t('step1_title')}</h3>
            <p className="step-desc">{t('step1_desc')}</p>
          </div>

          {/* Step 02 */}
          <div className="step-card">
            <div className="step-number-bubble">02</div>
            <h3 className="step-title">{t('step2_title')}</h3>
            <p className="step-desc">{t('step2_desc')}</p>
          </div>

          {/* Step 03 */}
          <div className="step-card">
            <div className="step-number-bubble">03</div>
            <h3 className="step-title">{t('step3_title')}</h3>
            <p className="step-desc">{t('step3_desc')}</p>
          </div>

          {/* Step 04 */}
          <div className="step-card">
            <div className="step-number-bubble">04</div>
            <h3 className="step-title">{t('step4_title')}</h3>
            <p className="step-desc">{t('step4_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
