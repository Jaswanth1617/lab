import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { testsData, testsData_ta } from '../data/testsData';

function renderTestIcon(iconType) {
  switch (iconType) {
    case 'blood':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case 'organ':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4C8 4 4 7 4 12c0 4.5 3 8 8 8 2.5 0 4.5-1.5 4.5-4 0-1.8-1-3-2.5-3.5 2-.5 4-2 4-4.5 0-4.5-3.5-8-6-8z" />
        </svg>
      );
    case 'liver':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14c0 4 3 6 8 6s8-2 8-6-4-8-8-8-8 4-8 8z" />
          <path d="M12 6v14" />
        </svg>
      );
    case 'heart':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'sugar':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
    case 'thyroid':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <path d="M5 6c3 0 7 2 7 6-4 0-7-2-7-6z" />
          <path d="M19 6c-3 0-7 2-7 6 4 0 7-2 7-6z" />
        </svg>
      );
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
          <line x1="8.5" y1="2" x2="15.5" y2="2" />
        </svg>
      );
    case 'ecg':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case 'xray':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="9" x2="15" y2="15" />
          <line x1="15" y1="9" x2="9" y2="15" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'baby':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function TestsSection({ onOpenTestDetails, onOpenBooking }) {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const activeTestsDict = lang === 'ta' ? testsData_ta : testsData;
  const testKeys = Object.keys(testsData);

  const filteredKeys = testKeys.filter((key) => {
    const enItem = testsData[key];
    const currentItem = activeTestsDict[key] || enItem;

    const matchesCategory =
      selectedCategory === 'all' || enItem.category === selectedCategory;

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      currentItem.title.toLowerCase().includes(q) ||
      currentItem.desc.toLowerCase().includes(q) ||
      enItem.title.toLowerCase().includes(q) ||
      enItem.desc.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section tests-section" id="tests">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('tests_label')}</span>
          <h2 className="section-title">{t('tests_heading')}</h2>
          <p className="section-subtitle">{t('tests_sub')}</p>
        </div>

        {/* Real Clinic Diagnostic Equipment & Infrastructure Showcase */}
        <div className="lab-equipment-showcase" aria-label="Diagnostic Laboratory Equipment and Technology">
          <div className="equipment-showcase-header">
            <div>
              <span className="badge-pill" style={{ marginBottom: '8px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                <span className="status-dot-pulsing" />
                {lang === 'ta' ? 'அதிநவீன மருத்துவ உள்கட்டமைப்பு' : 'In-House Laboratory Technology'}
              </span>
              <h3 className="equipment-showcase-title">
                {lang === 'ta' 
                  ? 'ஸ்ரீ துர்கா லேப் – நவீன பரிசோதனைக் கருவிகள்' 
                  : 'Advanced Diagnostic Auto-Analyzers & Imaging Suite'}
              </h3>
            </div>
            <p className="equipment-showcase-note">
              {lang === 'ta'
                ? 'பொன்னேரியில் உலகத்தரம் வாய்ந்த துல்லியத்துடன் கூடிய தினசரி அளவீடு செய்யப்பட்ட தானியங்கி உபகரணங்கள்.'
                : 'Hospital-grade calibrated analyzers and high-frequency digital radiography for 100% dependable clinical results.'}
            </p>
          </div>

          <div className="equipment-cards-grid">
            {/* Card 1: Mindray BC-360 & Erba Analyzers */}
            <div className="equipment-card">
              <div className="equipment-card-media">
                <img
                  src="/assets/images/tests/lab-analyzers-mindray-erba.png"
                  alt="Mindray BC-360 Hematology and Erba Semi-Auto Biochemistry Analyzers at Sri Durgaa Clinical Laboratory"
                  loading="lazy"
                />
                <span className="equipment-tag">Hematology & Chemistry</span>
              </div>
              <div className="equipment-card-body">
                <h4>Mindray BC-360 & Erba Analyzers</h4>
                <p>
                  {lang === 'ta'
                    ? 'முழு தானியங்கி 3-பகுதி CBC இரத்த அணுக்கள் எண்ணும் கருவி மற்றும் துல்லியமான பயோகெமிஸ்ட்ரி பகுப்பாய்வு.'
                    : 'Automated 3-part differential cell counter & clinical chemistry analyzer for CBC, LFT, KFT & Glucose profiles.'}
                </p>
                <div className="equipment-card-foot">
                  <span className="equipment-used-for">
                    {lang === 'ta' ? 'பரிசோதனைகள்: CBC, LFT, KFT, சர்க்கரை' : 'Tests: CBC, LFT, KFT, Blood Sugar'}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Pathology Bench & Micropipettes */}
            <div className="equipment-card">
              <div className="equipment-card-media">
                <img
                  src="/assets/images/tests/lab-pathology-bench.png"
                  alt="Sterile Sample Preparation and Micropipetting Station at Sri Durgaa Clinical Laboratory"
                  loading="lazy"
                />
                <span className="equipment-tag">Specimen Processing</span>
              </div>
              <div className="equipment-card-body">
                <h4>Sample Preparation & Pipetting Station</h4>
                <p>
                  {lang === 'ta'
                    ? 'வண்ணக் குறியீட்டு மாதிரி குப்பிகள், துல்லியமான மைக்ரோபைப்பெட்டுகள் மற்றும் சுத்திகரிக்கப்பட்ட மையவிலக்கு கருவிகள்.'
                    : 'Color-coded vacutainer racks, precision variable volume micropipettes & centrifuges ensuring zero contamination.'}
                </p>
                <div className="equipment-card-foot">
                  <span className="equipment-used-for">
                    {lang === 'ta' ? 'பரிசோதனைகள்: தைராய்டு, லிப்பிட், சிறுநீர் ஆய்வு' : 'Tests: Thyroid, Lipid, Urine & Serology'}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: ORVEE Digital Radiography */}
            <div className="equipment-card">
              <div className="equipment-card-media">
                <img
                  src="/assets/images/tests/lab-xray-machine.png"
                  alt="ORVEE High-Frequency Digital Radiography System at Sri Durgaa Clinical Laboratory"
                  loading="lazy"
                />
                <span className="equipment-tag">Digital Radiography</span>
              </div>
              <div className="equipment-card-body">
                <h4>ORVEE Digital X-Ray Examination Suite</h4>
                <p>
                  {lang === 'ta'
                    ? 'குறைந்த கதிர்வீச்சுடன் எலும்பு முறிவு, மார்பு மற்றும் மூட்டுகளைத் தெளிவாகப் படம்பிடிக்கும் அதிநவீன டிஜிட்டல் எக்ஸ்-ரே.'
                    : 'Low-dose high-frequency digital radiography with ergonomic examination bed for chest, spine, and orthopedic views.'}
                </p>
                <div className="equipment-card-foot">
                  <span className="equipment-used-for">
                    {lang === 'ta' ? 'பரிசோதனைகள்: மார்பு, எலும்பு & மூட்டுகள்' : 'Tests: Chest X-Ray, Bone & Spine'}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: AGFA CR 30-X Laser Digitizer & Station */}
            <div className="equipment-card">
              <div className="equipment-card-media">
                <img
                  src="/assets/images/tests/lab-cr30x-digitizer.png"
                  alt="AGFA CR 30-X Digital Laser Scanner and Reporting Suite at Sri Durgaa Clinical Laboratory"
                  loading="lazy"
                />
                <span className="equipment-tag">Laser Digitizer & Reports</span>
              </div>
              <div className="equipment-card-body">
                <h4>AGFA CR 30-X Digitizer & ECG Station</h4>
                <p>
                  {lang === 'ta'
                    ? 'உயர் தெளிவுத்திறன் கொண்ட லேசர் டிஜிட்டல் படமாக்கல், ECG பதிவு மற்றும் உடனடி சரிபார்க்கப்பட்ட மருத்துவ அறிக்கைகள்.'
                    : 'Computed Radiography laser digitizer and reporting station providing instant high-contrast films and ECG recordings.'}
                </p>
                <div className="equipment-card-foot">
                  <span className="equipment-used-for">
                    {lang === 'ta' ? 'பரிசோதனைகள்: 12-Lead ECG, டிஜிட்டல் பிலிம்' : 'Tests: 12-Lead ECG, Digital Radiology'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="test-search-filter-bar">
          <div className="test-search-box">
            <svg className="test-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              id="testSearchInput"
              className="test-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('tests_search_placeholder')}
              aria-label="Search diagnostic tests"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="filter-categories" role="tablist">
            <button
              type="button"
              className={`category-tab ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {t('tab_all')}
            </button>
            <button
              type="button"
              className={`category-tab ${selectedCategory === 'Blood & Pathology' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Blood & Pathology')}
            >
              {t('tab_blood')}
            </button>
            <button
              type="button"
              className={`category-tab ${selectedCategory === 'Organ Profiles' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Organ Profiles')}
            >
              {t('tab_organ')}
            </button>
            <button
              type="button"
              className={`category-tab ${selectedCategory === 'Imaging & Cardiac' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Imaging & Cardiac')}
            >
              {t('tab_imaging')}
            </button>
            <button
              type="button"
              className={`category-tab ${selectedCategory === 'Specialized Screenings' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('Specialized Screenings')}
            >
              {t('tab_specialized')}
            </button>
          </div>
        </div>

        {/* The 11 Tests Grid */}
        <div className="tests-grid" id="testsGridContainer">
          {filteredKeys.map((key) => {
            const item = activeTestsDict[key] || testsData[key];
            const baseItem = testsData[key];

            return (
              <article
                key={key}
                className="test-card"
                data-category={baseItem.category}
                data-name={baseItem.title}
                style={{ display: 'flex' }}
              >
                <div className="test-card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="test-card-img"
                    loading="lazy"
                  />
                  <span className="test-card-media-tag">{item.category}</span>
                </div>
                <div className="test-card-body">
                  <div>
                    <div className="test-card-header">
                      <div className="test-card-icon">
                        {renderTestIcon(baseItem.iconType)}
                      </div>
                      <div className="test-card-titles">
                        <span className="test-category-tag">{item.category}</span>
                        <h3 className="test-title">{item.title}</h3>
                      </div>
                    </div>
                    <p className="test-desc">{item.desc}</p>
                    <div className="test-meta-info">
                      <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>{' '}
                        <span>{item.meta1}</span>
                      </span>
                      <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        </svg>{' '}
                        <span>{item.meta2}</span>
                      </span>
                    </div>
                  </div>
                  <div className="test-card-footer">
                    <button
                      type="button"
                      className="test-learn-more-link"
                      onClick={() => onOpenTestDetails(key)}
                    >
                      <span>{t('btn_learn_more')}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm open-book-modal-btn"
                      onClick={() => onOpenBooking(item.title)}
                    >
                      {t('btn_book_test')}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* No results message */}
        {filteredKeys.length === 0 && (
          <div
            id="noTestsFound"
            style={{
              textAlign: 'center',
              padding: '40px 20px',
              background: 'white',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              marginTop: '24px'
            }}
          >
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              {t('no_tests_found')}
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              {t('btn_reset_search')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
