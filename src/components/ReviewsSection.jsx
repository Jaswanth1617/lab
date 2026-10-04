import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { reviewsData } from '../data/reviewsData';

function buildMarqueeTrack(items, minBaseCount = 5) {
  if (!items || items.length === 0) return [];
  let base = [...items];
  while (base.length < minBaseCount) {
    base = base.concat(items);
  }
  // Repeat 3 times for seamless 0% to -33.33333% CSS animation
  return [...base, ...base, ...base];
}

export default function ReviewsSection({ reviews = reviewsData, onOpenWriteReview }) {
  const { lang, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isPaused, setIsPaused] = useState(false);

  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  const filteredReviews = reviews.filter((rev) => {
    if (selectedFilter === 'all') return true;
    return rev.category === selectedFilter;
  });

  // Split into two sets for the dual horizontal animated tracks
  const row1Items = filteredReviews.filter((_, idx) => idx % 2 === 0);
  const row2Items = filteredReviews.filter((_, idx) => idx % 2 !== 0);

  const displayRow1 = row1Items.length > 0 ? row1Items : filteredReviews;
  const displayRow2 = row2Items.length > 0 ? row2Items : filteredReviews;

  // Build dense tracks that fill wide screens and loop without gaps
  const marqueeRow1 = buildMarqueeTrack(displayRow1, 5);
  const marqueeRow2 = buildMarqueeTrack(displayRow2, 5);

  const handleScrollManual = (direction) => {
    const scrollAmount = direction === 'left' ? -380 : 380;
    if (track1Ref.current) {
      track1Ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    if (track2Ref.current) {
      track2Ref.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section reviews-section" id="reviews" aria-label="Patient Reviews and Testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '24px' }}>
          <span className="section-label">{t('reviews_label')}</span>
          <h2 className="section-title">{t('reviews_heading')}</h2>
          <p className="section-subtitle">{t('reviews_sub')}</p>
        </div>

        {/* Rating Summary & Action Header Banner */}
        <div className="reviews-summary-bar">
          <div className="reviews-rating-badge">
            <div className="rating-score-box">
              <span className="rating-score-val">4.9</span>
              <span className="rating-score-max">/ 5</span>
            </div>
            <div className="rating-stars-col">
              <div className="rating-stars-row">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="star-gold">{s}</span>
                ))}
              </div>
              <span className="rating-google-source">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '4px' }}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm1-14C7.03 3 3 7.03 3 12c0 2.12.74 4.07 1.97 5.61L9.4 13.2c-.25-.37-.4-.82-.4-1.2 0-1.38 1.12-2.5 2.5-2.5.4 0 .78.1 1.11.27l3.81-3.81C15.01 4.54 13.58 3 12 3z"/>
                </svg>
                {t('reviews_google_rating')}
              </span>
            </div>
          </div>

          <div className="reviews-trust-stat">
            <div className="stat-pill-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <strong>{t('reviews_count')}</strong>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {lang === 'ta' ? 'பொன்னேரி & திருவள்ளூர் பகுதி மக்கள்' : 'From Ponneri & Surrounding Towns'}
              </span>
            </div>
          </div>

          <div className="reviews-actions-group">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onOpenWriteReview}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              <span>{t('reviews_btn_write')}</span>
            </button>
          </div>
        </div>

        {/* Filter Pills & Interactive Animation Controls */}
        <div className="reviews-controls-bar">
          <div className="reviews-filters" role="tablist" aria-label="Review Categories">
            <button
              type="button"
              className={`reviews-filter-pill ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              {t('reviews_filter_all')}
            </button>
            <button
              type="button"
              className={`reviews-filter-pill ${selectedFilter === 'home' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('home')}
            >
              {t('reviews_filter_home')}
            </button>
            <button
              type="button"
              className={`reviews-filter-pill ${selectedFilter === 'packages' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('packages')}
            >
              {t('reviews_filter_packages')}
            </button>
            <button
              type="button"
              className={`reviews-filter-pill ${selectedFilter === 'accuracy' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('accuracy')}
            >
              {t('reviews_filter_accuracy')}
            </button>
          </div>

          <div className="reviews-animation-toggles">
            <span className="reviews-hint-text">
              {t('reviews_pause_hint')}
            </span>

            <div className="reviews-nav-buttons">
              <button
                type="button"
                className="reviews-nav-btn"
                onClick={() => handleScrollManual('left')}
                title="Scroll Left"
                aria-label="Scroll reviews left"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className={`reviews-nav-btn ${isPaused ? 'active' : ''}`}
                onClick={() => setIsPaused(!isPaused)}
                title={isPaused ? 'Resume Animation' : 'Pause Animation'}
                aria-label={isPaused ? 'Resume Animation' : 'Pause Animation'}
              >
                {isPaused ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                className="reviews-nav-btn"
                onClick={() => handleScrollManual('right')}
                title="Scroll Right"
                aria-label="Scroll reviews right"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed Horizontal Animated Marquee Area */}
      <div className="reviews-marquee-viewport">
        {/* Subtle gradient edge masks for infinite depth */}
        <div className="marquee-edge-fade-left" />
        <div className="marquee-edge-fade-right" />

        {/* Row 1: Scrolling Left */}
        <div
          ref={track1Ref}
          className={`reviews-marquee-track ${isPaused ? 'paused' : ''}`}
        >
          {marqueeRow1.map((rev, idx) => (
            <ReviewCard key={`r1-${rev.id}-${idx}`} review={rev} lang={lang} t={t} />
          ))}
        </div>

        {/* Row 2: Scrolling Right (Reverse) */}
        <div
          ref={track2Ref}
          className={`reviews-marquee-track reverse ${isPaused ? 'paused' : ''}`}
        >
          {marqueeRow2.map((rev, idx) => (
            <ReviewCard key={`r2-${rev.id}-${idx}`} review={rev} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, lang, t }) {
  const commentText = review.comment[lang] || review.comment.en;
  const testTitle = review.test[lang] || review.test.en;
  const dateText = review.date[lang] || review.date.en;

  return (
    <article className="review-card">
      <div className="review-card-top">
        <div className="review-patient-profile">
          <div className="review-avatar" style={{ background: review.avatarGradient }}>
            {review.initials}
          </div>
          <div>
            <div className="review-patient-name-wrap">
              <strong className="review-patient-name">{review.name}</strong>
              {review.verified && (
                <span className="review-verified-badge" title={t('reviews_verified')}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              )}
            </div>
            <span className="review-location">{review.location}</span>
          </div>
        </div>

        <div className="review-stars-group">
          {'★'.repeat(review.rating)}
        </div>
      </div>

      <div className="review-test-pill">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>{testTitle}</span>
      </div>

      <p className="review-comment-text">
        "{commentText}"
      </p>

      <div className="review-card-footer">
        <span className="review-verified-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          {t('reviews_verified')}
        </span>
        <span className="review-date-text">{dateText}</span>
      </div>
    </article>
  );
}
