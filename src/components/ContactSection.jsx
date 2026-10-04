import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactServiceOptions } from '../data/translations';
import ReviewsSection from './ReviewsSection';

export default function ContactSection({ reviews, onShowToast, onOpenWriteReview }) {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const services = contactServiceOptions[lang] || contactServiceOptions.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isTa = lang === 'ta';

    let waInquiry = isTa
      ? `🏥 *புதிய உதவி கோரிக்கை / செய்தி - ஸ்ரீ துர்கா ஆய்வகம்*\n`
      : `🏥 *NEW INQUIRY - SRI DURGAA CLINICAL LAB*\n`;
    waInquiry += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waInquiry += `${isTa ? '👤 *பெயர்:*' : '👤 *Name:*'} ${formData.name}\n`;
    waInquiry += `${isTa ? '📱 *கைபேசி:*' : '📱 *Phone:*'} ${formData.phone}\n`;
    if (formData.email) {
      waInquiry += `${isTa ? '✉️ *மின்னஞ்சல்:*' : '✉️ *Email:*'} ${formData.email}\n`;
    }
    waInquiry += `${isTa ? '🔬 *தலைப்பு:*' : '🔬 *Topic / Service:*'} ${formData.service}\n`;
    waInquiry += `${isTa ? '💬 *செய்தி:*' : '💬 *Message:*'} ${formData.message}\n`;
    waInquiry += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waInquiry += isTa
      ? `_இணையதளத்தின் மூலம் அனுப்பப்பட்டது_`
      : `_Sent via Sri Durgaa Clinical Laboratory Website_`;

    const inquiryWaUrl = `https://wa.me/919843696625?text=${encodeURIComponent(waInquiry)}`;

    try {
      window.open(inquiryWaUrl, '_blank');
    } catch (err) {
      console.warn('Popup blocked:', err);
    }

    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'General Inquiry',
      message: ''
    });

    onShowToast(
      isTa
        ? `நன்றி, ${formData.name}! உங்கள் செய்தி வாட்ஸ்அப்பிற்குத் திசைதிருப்பப்படுகிறது.`
        : `Thank you, ${formData.name}! Redirecting to WhatsApp to send your inquiry.`
    );
  };

  return (
    <section className="section contact-section" id="contact" style={{ paddingBottom: 0 }}>
      {/* Patient Reviews Section with Horizontal Animations */}
      <ReviewsSection reviews={reviews} onOpenWriteReview={onOpenWriteReview} />

      {/* Contact & Visit Details Container */}
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '90px' }}>
        <div className="section-header">
          <span className="section-label">{t('contact_label')}</span>
          <h2 className="section-title">{t('contact_heading')}</h2>
          <p className="section-subtitle">{t('contact_sub')}</p>
        </div>

        <div className="contact-layout-grid">
          {/* Left: Contact Details Cards */}
          <div className="contact-info-panel">
            {/* Address */}
            <div className="contact-card-box">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>{t('card_addr_title')}</h4>
                <p>
                  <strong>Sri Durgaa Clinical Laboratory</strong><br />
                  Near Old Bus Stand / Railway Station Road,<br />
                  Ponneri, Tiruvallur District,<br />
                  Tamil Nadu - 601204, India
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="contact-card-box">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>{t('card_phone_title')}</h4>
                <p>
                  <span>{t('card_phone_mob1')}</span> <a href="tel:+919843696625">+91 98436 96625</a><br />
                  <span>{t('card_phone_mob2')}</span> <a href="tel:+918778317824">+91 87783 17824</a><br />
                  <span>{t('card_phone_wa')}</span> <a href="https://wa.me/919843696625" target="_blank" rel="noopener noreferrer">+91 98436 96625</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-card-box">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>{t('card_email_title')}</h4>
                <p>
                  <span>{t('card_email_lab')}</span> <a href="mailto:durgalab.ponneri@gmail.com">durgalab.ponneri@gmail.com</a><br />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('card_email_sub')}</span>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="contact-card-box">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>{t('card_hours_title')}</h4>
                <p>
                  <span><strong>{lang === 'ta' ? 'திங்கள் – சனி:' : 'Monday – Saturday:'}</strong> {lang === 'ta' ? 'காலை 7:00 – இரவு 8:30' : '7:00 AM – 8:30 PM'}</span><br />
                  <span><strong>{lang === 'ta' ? 'ஞாயிறு:' : 'Sunday:'}</strong> {lang === 'ta' ? 'காலை 7:00 – மதியம் 1:30' : '7:00 AM – 1:30 PM'}</span><br />
                  <em style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>{t('card_hours_fasting')}</em>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Patient Query / Appointment Form */}
          <div className="contact-form-card">
            <h3>{t('form_inquiry_title')}</h3>
            <p>{t('form_inquiry_desc')}</p>

            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="contactName" className="form-label">{t('label_full_name')}</label>
                  <input
                    type="text"
                    id="contactName"
                    className="form-control"
                    placeholder={t('ph_full_name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactPhone" className="form-label">{t('label_phone')}</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    className="form-control"
                    placeholder={t('ph_phone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contactEmail" className="form-label">{t('label_email')}</label>
                <input
                  type="email"
                  id="contactEmail"
                  className="form-control"
                  placeholder={t('ph_email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactService" className="form-label">{t('label_service')}</label>
                <select
                  id="contactService"
                  className="form-control"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {services.map((s) => (
                    <option key={s.val} value={s.val}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contactMessage" className="form-label">{t('label_message')}</label>
                <textarea
                  id="contactMessage"
                  className="form-control"
                  placeholder={t('ph_message')}
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <span>{t('btn_send_message')}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Maps Section */}
        <div className="map-embed-container" aria-label="Google Map location of Sri Durgaa Clinical Laboratory in Ponneri">
          <iframe
            title="Sri Durgaa Clinical Laboratory Location Map Ponneri"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15535.53974416174!2d80.18342416327376!3d13.332304851221197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d81ec79f5f0b5%3A0xc3f60877960fc5a3!2sPonneri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
