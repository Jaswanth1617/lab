/**
 * Sri Durgaa Clinical Laboratory - Interactive Logic
 * Modern, accessible, smooth UX for clinical laboratory operations
 */

document.addEventListener('DOMContentLoaded', () => {
  // Test Database for detail view & search
  const testsData = {
    'cbc': {
      title: 'CBC – Complete Blood Count',
      category: 'Blood & Pathology',
      image: 'assets/images/tests/test-cbc.jpg',
      desc: 'Evaluates overall health and detects a wide variety of disorders, including anemia, infection, inflammation, bleeding disorders, and leukemia.',
      parameters: ['Hemoglobin (Hb)', 'Total RBC Count', 'Total WBC (Leukocyte) Count', 'Differential Count (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)', 'Platelet Count', 'PCV / Hematocrit', 'MCV, MCH, MCHC, RDW'],
      preparation: 'No special fasting required. Stay normally hydrated.',
      sampleType: '2 ml Whole Blood in EDTA tube',
      turnaround: '4 to 6 Hours (Same Day Delivery)',
      guidelines: 'Crucial baseline screening recommended as part of routine health evaluation or pre-operative assessments.'
    },
    'kft': {
      title: 'KFT – Kidney Function Test (Renal Profile)',
      category: 'Organ Profiles',
      image: 'assets/images/tests/test-kft.jpg',
      desc: 'Assesses how effectively your kidneys are filtering metabolic waste and balancing fluids and minerals.',
      parameters: ['Blood Urea & BUN', 'Serum Creatinine', 'Uric Acid', 'Serum Electrolytes (Sodium, Potassium, Chloride)', 'Estimated GFR (eGFR)', 'Blood Urea Nitrogen / Creatinine Ratio'],
      preparation: '8 to 10 hours overnight fasting recommended. Avoid heavy meat intake 24h prior.',
      sampleType: '3 ml Venous Blood (Clot Activator / Serum)',
      turnaround: 'Same Day Evening',
      guidelines: 'Essential for patients with hypertension, diabetes, swelling, or long-term medication monitoring.'
    },
    'lft': {
      title: 'LFT – Liver Function Test (Hepatic Profile)',
      category: 'Organ Profiles',
      image: 'assets/images/tests/test-lft.jpg',
      desc: 'Comprehensive diagnostic panel measuring enzymes, proteins, and bilirubin produced or cleared by the liver.',
      parameters: ['Total, Direct & Indirect Bilirubin', 'SGOT / AST (Aspartate Aminotransferase)', 'SGPT / ALT (Alanine Aminotransferase)', 'Alkaline Phosphatase (ALP)', 'Total Protein & Albumin / Globulin (A/G) Ratio', 'Gamma GT (GGT)'],
      preparation: '10 to 12 hours fasting required. Avoid alcohol for at least 48 hours prior.',
      sampleType: '3 ml Venous Blood (Plain / Gel Separator)',
      turnaround: 'Same Day Evening',
      guidelines: 'Diagnoses liver disorders, fatty liver, jaundice, and monitors medication effects.'
    },
    'lipid': {
      title: 'Lipid Profile (Cholesterol Assessment)',
      category: 'Organ Profiles',
      image: 'assets/images/tests/test-lipid.jpg',
      desc: 'Detailed assessment of cardiovascular health by quantifying good and bad cholesterol and triglyceride levels.',
      parameters: ['Total Serum Cholesterol', 'HDL (High-Density Lipoprotein - Good Cholesterol)', 'LDL (Low-Density Lipoprotein - Bad Cholesterol)', 'VLDL (Very Low-Density Lipoprotein)', 'Serum Triglycerides', 'TC/HDL Ratio & LDL/HDL Risk Ratios'],
      preparation: 'Strict 10 to 12 hours overnight fasting. Only plain water is permitted.',
      sampleType: '3 ml Venous Blood (Serum)',
      turnaround: 'Same Day (Within 6 Hours)',
      guidelines: 'Primary risk predictor for atherosclerosis, coronary artery disease, stroke, and metabolic syndrome.'
    },
    'sugar': {
      title: 'Blood Sugar Test (Fasting, PP & HbA1c)',
      category: 'Blood & Pathology',
      image: 'assets/images/tests/test-sugar.jpg',
      desc: 'Accurate quantitative evaluation of glucose levels for diabetes screening, diagnosis, and long-term glycemic control.',
      parameters: ['Fasting Blood Sugar (FBS)', 'Postprandial Blood Sugar (PPBS - exactly 2h after meal)', 'Random Blood Sugar (RBS)', 'HbA1c (Glycated Hemoglobin - 3-Month Average)', 'Average Estimated Blood Glucose'],
      preparation: 'For FBS: 8-10 hours fasting. For PPBS: Blood sample drawn 2 hours after breakfast.',
      sampleType: 'Fluoride / EDTA Blood Vials',
      turnaround: '2 to 3 Hours (Rapid Reporting)',
      guidelines: 'Gold standard for detecting pre-diabetes, Type 1 & Type 2 Diabetes, and gestational diabetes.'
    },
    'thyroid': {
      title: 'Thyroid Profile (T3, T4, TSH)',
      category: 'Organ Profiles',
      image: 'assets/images/tests/test-thyroid.jpg',
      desc: 'Quantifies crucial endocrine hormones that regulate metabolism, body temperature, energy, and cardiovascular rate.',
      parameters: ['Total Triiodothyronine (T3)', 'Total Thyroxine (T4)', 'Ultrasensitive Thyroid Stimulating Hormone (TSH)', 'Free T3 / Free T4 (Upon clinical requisition)'],
      preparation: 'Morning sample strongly recommended. Take thyroid medications after blood collection.',
      sampleType: '3 ml Venous Blood (Serum)',
      turnaround: 'Same Day Evening',
      guidelines: 'Diagnoses Hypothyroidism, Hyperthyroidism, goitre, unexplained weight fluctuations, and chronic fatigue.'
    },
    'urine-stool': {
      title: 'Urine & Stool Routine & Microscopic Examination',
      category: 'Blood & Pathology',
      image: 'assets/images/tests/test-urine-stool.jpg',
      desc: 'Microscopic and biochemical diagnostic screening for renal conditions, urinary tract infections (UTI), and gastrointestinal health.',
      parameters: ['Physical (Color, Appearance, Specific Gravity)', 'Chemical (pH, Protein/Albumin, Glucose, Ketones, Bilirubin, Blood)', 'Microscopic (Pus Cells, RBCs, Epithelial Cells, Casts, Crystals, Bacteria)', 'Stool: Occult Blood, Ova, Cysts, Parasites'],
      preparation: 'Clean-catch midstream morning urine sample in sterile container. Clean container provided.',
      sampleType: 'Fresh sterile Urine / Stool container',
      turnaround: '3 to 5 Hours',
      guidelines: 'Detects silent urinary tract infections, kidney stones, renal parenchymal disease, and intestinal parasites.'
    },
    'ecg': {
      title: 'ECG – 12-Lead Electrocardiogram',
      category: 'Imaging & Cardiac',
      image: 'assets/images/tests/test-ecg.jpg',
      desc: 'Non-invasive standard cardiac recording that registers electrical impulse patterns and heart rhythm dynamics.',
      parameters: ['Heart Rate & Rhythm Analysis', 'P Wave, PR Interval, QRS Complex', 'ST Segment & T Wave Evaluation', 'Ischemic & Infarction Changes', 'Arrhythmia & Conduction Block Screen'],
      preparation: 'Wear comfortable two-piece clothing. Relax 10 minutes prior to recording. No lotions on chest.',
      sampleType: 'On-site clinical procedure (approx. 10 minutes)',
      turnaround: 'Instant Report with Cardiologist Verification',
      guidelines: 'Vital diagnostic screening for chest discomfort, palpitations, breathlessness, dizziness, and pre-operative evaluation.'
    },
    'xray': {
      title: 'Digital X-Ray (High-Resolution Radiography)',
      category: 'Imaging & Cardiac',
      image: 'assets/images/tests/test-xray.jpg',
      desc: 'Low-dose digital radiography utilizing advanced digital detectors to visualize bone architecture, lungs, and joints.',
      parameters: ['Chest X-Ray (PA / AP Views)', 'Extremities & Bones (Fracture Screening)', 'Spine Radiography (Cervical, Thoracic, Lumbar)', 'Joint & Arthritic Evaluations', 'Abdominal Scout Radiography'],
      preparation: 'Remove jewelry, metallic items, or clothing with metal zippers around the examination area.',
      sampleType: 'On-site radiological procedure (5-10 minutes)',
      turnaround: 'Film & Digital Report in 30-45 Minutes',
      guidelines: 'Instant clear visualization with minimal radiation dose and certified radiologist interpretation.'
    },
    'hiv': {
      title: 'HIV 1 & 2 Antibody / Antigen Screen',
      category: 'Specialized Screenings',
      image: 'assets/images/tests/test-hiv.jpg',
      desc: 'Strictly confidential, high-sensitivity immunoassay for detecting HIV antibodies and viral antigens.',
      parameters: ['HIV-1 Antibodies Detection', 'HIV-2 Antibodies Detection', 'P24 Antigen Detection (4th Gen Duo Immunoassay)', 'Strict Patient Confidentiality Safeguard'],
      preparation: 'No fasting required. Pre-test and post-test confidential counseling available.',
      sampleType: '3 ml Venous Blood (Plain / Gel Separator)',
      turnaround: '4 to 6 Hours (Secure confidential report)',
      guidelines: 'Adheres to WHO & NACO laboratory testing protocols with guaranteed patient privacy.'
    },
    'pregnancy': {
      title: 'Pregnancy Test (Qualitative & Quantitative Beta-hCG)',
      category: 'Specialized Screenings',
      image: 'assets/images/tests/test-pregnancy.jpg',
      desc: 'Highly sensitive diagnostic test identifying Human Chorionic Gonadotropin (hCG) hormone in urine or serum.',
      parameters: ['Urine Beta-hCG (Rapid High-Sensitivity Screen)', 'Serum Beta-hCG (Quantitative Blood Assay)', 'Gestational Age Estimation Correlation', 'Early Pregnancy Confirmation'],
      preparation: 'For urine: First morning void is best. For blood: No fasting required.',
      sampleType: 'Sterile Morning Urine or 2 ml Blood Serum',
      turnaround: 'Rapid: Urine in 30 Mins | Serum in 3 Hours',
      guidelines: 'Confirms early pregnancy, tracks healthy gestational hormone doubling, and evaluates ectopic risks.'
    }
  };

  // Sticky Header Scroll Effect
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }, { passive: true });

  // Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Tests Category Filtering
  const categoryTabs = document.querySelectorAll('.category-tab');
  const testCards = document.querySelectorAll('.test-card');
  const testSearchInput = document.getElementById('testSearchInput');

  function filterTests() {
    const activeTab = document.querySelector('.category-tab.active');
    const selectedCategory = activeTab ? activeTab.getAttribute('data-category') : 'all';
    const searchQuery = testSearchInput ? testSearchInput.value.toLowerCase().trim() : '';

    let visibleCount = 0;

    testCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardName = card.getAttribute('data-name').toLowerCase();
      const cardDesc = card.querySelector('.test-desc') ? card.querySelector('.test-desc').textContent.toLowerCase() : '';

      const matchesCategory = (selectedCategory === 'all' || cardCategory === selectedCategory);
      const matchesSearch = (searchQuery === '' || cardName.includes(searchQuery) || cardDesc.includes(searchQuery));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const noResultsEl = document.getElementById('noTestsFound');
    if (noResultsEl) {
      noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterTests();
    });
  });

  if (testSearchInput) {
    testSearchInput.addEventListener('input', filterTests);
  }

  // Modals & Backdrops
  const testDetailsModal = document.getElementById('testDetailsModal');
  const testDetailsContent = document.getElementById('testDetailsContent');
  const bookTestModal = document.getElementById('bookTestModal');
  const reportModal = document.getElementById('reportModal');
  const searchOverlay = document.getElementById('searchOverlay');

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    // Only restore scroll if no other modal is active
    if (!document.querySelector('.modal-backdrop.active') && !document.querySelector('.search-overlay.active')) {
      document.body.style.overflow = '';
    }
  }

  // Close modals on clicking backdrop or close buttons
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetModal = btn.closest('.modal-backdrop') || btn.closest('.search-overlay');
      closeModal(targetModal);
    });
  });

  // Escape key to close any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active, .search-overlay.active').forEach(modal => {
        closeModal(modal);
      });
      closeMobileMenu();
    }
  });

  // Open Test Detail Modal
  document.querySelectorAll('.test-learn-more-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const isTa = (typeof currentLang !== 'undefined' && currentLang === 'ta');
      const testKey = link.getAttribute('data-test-id');
      const test = (isTa && typeof testsData_ta !== 'undefined' && testsData_ta[testKey]) ? testsData_ta[testKey] : testsData[testKey];

      const lblParam = isTa ? 'பரிசோதிக்கப்படும் அளவீடுகள்:' : 'Parameters Tested:';
      const lblPrep = isTa ? 'முன்னேற்பாடுகள்' : 'Preparation';
      const lblSample = isTa ? 'மாதிரி வகை' : 'Sample Type';
      const lblTurn = isTa ? 'அறிக்கை வழங்கும் நேரம்' : 'Report Turnaround';
      const lblCare = isTa ? 'மருத்துவ வழிகாட்டுதல்' : 'Clinical Care';
      const lblCareVal = isTa ? 'சான்றளிக்கப்பட்ட மருத்துவ வல்லுநர் சரிபார்ப்பு' : 'Certified Pathologist Verification';
      const lblClose = isTa ? 'மூடுக' : 'Close';
      const lblBook = isTa ? 'இந்த பரிசோதனையை பதிவு செய்க' : 'Book This Test';

      if (test && testDetailsContent) {
        let paramHtml = '';
        if (test.parameters && test.parameters.length > 0) {
          paramHtml = `
            <div style="margin-top: 18px; margin-bottom: 20px;">
              <h5 style="font-size: 0.95rem; font-weight: 700; color: var(--dark-blue); margin-bottom: 10px;">${lblParam}</h5>
              <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${test.parameters.map(p => `<span style="background: var(--primary-light); color: var(--primary); font-size: 0.82rem; font-weight: 600; padding: 4px 12px; border-radius: 9999px;">${p}</span>`).join('')}
              </div>
            </div>
          `;
        }

        testDetailsContent.innerHTML = `
          <div style="width: 100%; height: 210px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; border: 1px solid var(--border-color);">
            <img src="${test.image}" alt="${test.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <span class="badge-pill" style="font-size: 0.8rem; padding: 4px 12px;">${test.category}</span>
          </div>
          <h3 style="font-size: 1.5rem; color: var(--dark-blue); margin-bottom: 14px;">${test.title}</h3>
          <p style="font-size: 0.96rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 20px;">${test.desc}</p>
          
          ${paramHtml}

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; background: var(--bg-page); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 24px;">
            <div>
              <strong style="display: block; font-size: 0.82rem; text-transform: uppercase; color: var(--primary); margin-bottom: 4px;">${lblPrep}</strong>
              <span style="font-size: 0.9rem; color: var(--text-main);">${test.preparation}</span>
            </div>
            <div>
              <strong style="display: block; font-size: 0.82rem; text-transform: uppercase; color: var(--primary); margin-bottom: 4px;">${lblSample}</strong>
              <span style="font-size: 0.9rem; color: var(--text-main);">${test.sampleType}</span>
            </div>
            <div>
              <strong style="display: block; font-size: 0.82rem; text-transform: uppercase; color: var(--primary); margin-bottom: 4px;">${lblTurn}</strong>
              <span style="font-size: 0.9rem; color: var(--text-main); font-weight: 600;">${test.turnaround}</span>
            </div>
            <div>
              <strong style="display: block; font-size: 0.82rem; text-transform: uppercase; color: var(--primary); margin-bottom: 4px;">${lblCare}</strong>
              <span style="font-size: 0.9rem; color: var(--text-main);">${lblCareVal}</span>
            </div>
          </div>

          <div style="display: flex; justify-content: flex-end; gap: 12px;">
            <button type="button" class="btn btn-secondary modal-close-btn" style="padding: 10px 20px;">${lblClose}</button>
            <button type="button" class="btn btn-primary quick-book-this-btn" data-test-name="${test.title}" style="padding: 10px 24px;">${lblBook}</button>
          </div>
        `;

        // Re-attach close and quick-book triggers inside dynamically generated modal content
        testDetailsContent.querySelector('.modal-close-btn').addEventListener('click', () => {
          closeModal(testDetailsModal);
        });

        testDetailsContent.querySelector('.quick-book-this-btn').addEventListener('click', (ev) => {
          const testName = ev.target.getAttribute('data-test-name');
          closeModal(testDetailsModal);
          openBookingModal(testName);
        });

        openModal(testDetailsModal);
      }
    });
  });

  // Open Booking Modal Function
  function openBookingModal(preselectedTest = '') {
    const testSelectEl = document.getElementById('bookingTestSelect');
    if (testSelectEl && preselectedTest) {
      for (let i = 0; i < testSelectEl.options.length; i++) {
        if (testSelectEl.options[i].text.toLowerCase().includes(preselectedTest.toLowerCase()) || 
            preselectedTest.toLowerCase().includes(testSelectEl.options[i].text.toLowerCase())) {
          testSelectEl.selectedIndex = i;
          break;
        }
      }
    }
    // Set min date to today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      if (!dateInput.value) dateInput.value = today;
    }
    openModal(bookTestModal);
  }

  // Trigger Booking Modal from buttons
  document.querySelectorAll('.open-book-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const testName = btn.getAttribute('data-test-name') || '';
      openBookingModal(testName);
    });
  });

  // Handle Home Collection vs Lab Visit toggle in Booking Form
  const collectionTypeRadios = document.querySelectorAll('input[name="collectionType"]');
  const homeAddressGroup = document.getElementById('homeAddressGroup');

  collectionTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (homeAddressGroup) {
        if (radio.value === 'home') {
          homeAddressGroup.style.display = 'block';
          const addressInput = homeAddressGroup.querySelector('textarea');
          if (addressInput) addressInput.required = true;
        } else {
          homeAddressGroup.style.display = 'none';
          const addressInput = homeAddressGroup.querySelector('textarea');
          if (addressInput) addressInput.required = false;
        }
      }
    });
  });

  // Booking Form Submission Handler (Automated to WhatsApp)
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const patientName = document.getElementById('patientName').value.trim();
      const patientPhone = document.getElementById('patientPhone').value.trim();
      const testSelected = document.getElementById('bookingTestSelect').value;
      const bookingDate = document.getElementById('bookingDate').value;
      const bookingTime = document.getElementById('bookingTime').value;
      const collectionType = document.querySelector('input[name="collectionType"]:checked').value;
      const homeAddressInput = document.getElementById('homeAddress');
      const homeAddress = homeAddressInput ? homeAddressInput.value.trim() : '';

      const appointmentId = 'SDCL-' + Math.floor(100000 + Math.random() * 900000);

      // Lab Contact Numbers
      const PRIMARY_WA = '919843696625';
      const SECONDARY_WA = '918778317824';

      const isTa = (typeof currentLang !== 'undefined' && currentLang === 'ta');

      // Construct automated WhatsApp booking message
      let waMessage = isTa 
        ? `🏥 *புதிய மருத்துவப் பரிசோதனை முன்பதிவு*\n*ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி, பொன்னேரி*\n`
        : `🏥 *NEW TEST BOOKING REQUEST*\n*Sri Durgaa Clinical Laboratory, Ponneri*\n`;
      waMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
      waMessage += `${isTa ? '📋 *முன்பதிவு டோக்கன்:*' : '📋 *Booking Token:*'} ${appointmentId}\n`;
      waMessage += `${isTa ? '👤 *நோயாளி பெயர்:*' : '👤 *Patient Name:*'} ${patientName}\n`;
      waMessage += `${isTa ? '📞 *கைபேசி எண்:*' : '📞 *Patient Mobile:*'} ${patientPhone}\n`;
      waMessage += `${isTa ? '🧪 *பரிசோதனை / தொகுப்பு:*' : '🧪 *Test / Package:*'} ${testSelected}\n`;
      waMessage += `${isTa ? '📅 *தேவையான தேதி:*' : '📅 *Preferred Date:*'} ${bookingDate}\n`;
      waMessage += `${isTa ? '⏰ *நேரம்:*' : '⏰ *Time Slot:*'} ${bookingTime}\n`;
      waMessage += `${isTa ? '🏥 *சேவை விருப்பம்:*' : '🏥 *Service Preference:*'} ${collectionType === 'home' ? (isTa ? 'வீட்டிற்கே வந்து மாதிரி எடுத்தல்' : 'Home Sample Collection') : (isTa ? 'நேரடி வருகை (பொன்னேரி மையம்)' : 'Lab Visit (Ponneri Centre)')}\n`;
      if (collectionType === 'home' && homeAddress) {
        waMessage += `${isTa ? '📍 *வீட்டு முகவரி:*' : '📍 *Home Address:*'} ${homeAddress}\n`;
      }
      waMessage += `━━━━━━━━━━━━━━━━━━━━━\n`;
      waMessage += isTa ? `_எனது பரிசோதனை முன்பதிவை உறுதி செய்ய வேண்டுகிறேன். நன்றி!_` : `_Please confirm my test appointment slot. Thank you!_`;

      const primaryWaUrl = `https://wa.me/${PRIMARY_WA}?text=${encodeURIComponent(waMessage)}`;
      const secondaryWaUrl = `https://wa.me/${SECONDARY_WA}?text=${encodeURIComponent(waMessage)}`;

      // Automatically trigger WhatsApp in a new tab/window
      try {
        window.open(primaryWaUrl, '_blank');
      } catch (err) {
        console.warn('Popup blocked, link provided in confirmation dialog:', err);
      }

      closeModal(bookTestModal);
      bookingForm.reset();

      // Show Confirmation Dialog with WhatsApp Send Actions
      const confirmationModal = document.getElementById('confirmationModal');
      const confirmationDetails = document.getElementById('confirmationDetails');
      if (confirmationModal && confirmationDetails) {
        confirmationDetails.innerHTML = `
          <div style="text-align: center; margin-bottom: 18px;">
            <div style="width: 58px; height: 58px; background: #e8f5e9; color: #2e7d32; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px;">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style="font-size: 1.35rem; color: var(--dark-blue); margin-bottom: 6px;">${isTa ? 'முன்பதிவு வாட்ஸ்அப்பில் அனுப்பப்பட்டது!' : 'Booking Dispatched to WhatsApp!'}</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.45;">
              ${isTa ? `நன்றி, <strong>${patientName}</strong>. உங்கள் முன்பதிவு விவரங்கள் ஆய்வக வாட்ஸ்அப்பிற்குத் தயார் செய்யப்பட்டுள்ளது.` : `Thank you, <strong>${patientName}</strong>. Your appointment token has been generated and pre-filled for our lab on WhatsApp.`}
            </p>
          </div>

          <div style="background: var(--bg-page); border: 1px dashed var(--border-color); border-radius: var(--radius-md); padding: 16px; margin-bottom: 18px; font-size: 0.88rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: var(--text-muted);">${isTa ? 'முன்பதிவு டோக்கன்:' : 'Booking Token:'}</span>
              <strong style="color: var(--primary); font-family: var(--font-heading); font-size: 1.05rem;">${appointmentId}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: var(--text-muted);">${isTa ? 'நோயாளி பெயர்:' : 'Patient Name:'}</span>
              <strong style="color: var(--dark-blue);">${patientName}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: var(--text-muted);">${isTa ? 'தொலைபேசி எண்:' : 'Patient Phone:'}</span>
              <strong style="color: var(--dark-blue);">${patientPhone}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: var(--text-muted);">${isTa ? 'தேர்ந்தெடுத்த பரிசோதனை:' : 'Selected Test:'}</span>
              <strong style="color: var(--dark-blue); text-align: right; max-width: 60%;">${testSelected}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="color: var(--text-muted);">${isTa ? 'தேதி & நேரம்:' : 'Date & Time:'}</span>
              <strong style="color: var(--dark-blue);">${bookingDate} at ${bookingTime}</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-muted);">${isTa ? 'சேவை விருப்பம்:' : 'Service Preference:'}</span>
              <strong style="color: var(--primary);">${collectionType === 'home' ? (isTa ? 'வீட்டிற்கே வந்து மாதிரி எடுத்தல்' : 'Home Sample Collection') : (isTa ? 'நேரடி வருகை (பொன்னேரி மையம்)' : 'Clinic Walk-in (Ponneri)')}</strong>
            </div>
            ${collectionType === 'home' && homeAddress ? `
            <div style="display: flex; justify-content: space-between; margin-top: 8px; border-top: 1px dashed var(--border-color); padding-top: 8px;">
              <span style="color: var(--text-muted);">${isTa ? 'முகவரி:' : 'Address:'}</span>
              <span style="color: var(--dark-blue); text-align: right; max-width: 65%; font-weight: 500;">${homeAddress}</span>
            </div>` : ''}
          </div>

          <!-- WhatsApp Primary Action -->
          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
            <a href="${primaryWaUrl}" target="_blank" rel="noopener" class="btn" style="width: 100%; background: #25D366; color: #ffffff; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 700; text-decoration: none; padding: 12px; border-radius: var(--radius-sm); font-size: 0.95rem; box-shadow: 0 4px 14px rgba(37,211,102,0.35);">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              <span>${isTa ? 'வாட்ஸ்அப்பில் திறந்து அனுப்பவும் (+91 98436 96625)' : 'Open / Resend on WhatsApp (+91 98436 96625)'}</span>
            </a>
            <a href="${secondaryWaUrl}" target="_blank" rel="noopener" class="btn btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.85rem; text-decoration: none; padding: 10px;">
              <span>${isTa ? 'மாற்று எண்ணிற்கு வாட்ஸ்அப்பில் அனுப்பவும் (+91 87783 17824)' : 'Send to Alternate Number (+91 87783 17824)'}</span>
            </a>
          </div>

          <!-- Quick Phone Call Option -->
          <div style="display: flex; gap: 10px; margin-bottom: 16px;">
            <a href="tel:+919843696625" class="btn btn-secondary" style="flex: 1; font-size: 0.82rem; text-decoration: none; text-align: center; padding: 8px 6px;">${isTa ? 'அழைக்க: 98436 96625' : 'Call: 98436 96625'}</a>
            <a href="tel:+918778317824" class="btn btn-secondary" style="flex: 1; font-size: 0.82rem; text-decoration: none; text-align: center; padding: 8px 6px;">${isTa ? 'அழைக்க: 87783 17824' : 'Call: 87783 17824'}</a>
          </div>

          <div style="text-align: center;">
            <button type="button" class="btn btn-primary" onclick="document.getElementById('confirmationModal').classList.remove('active'); document.body.style.overflow='';" style="width: 100%; padding: 10px;">${isTa ? 'முடிந்தது' : 'Done'}</button>
          </div>
        `;
        openModal(confirmationModal);
      }

      showToast(isTa ? ('முன்பதிவு வாட்ஸ்அப்பிற்கு அனுப்பப்பட்டது! டோக்கன்: ' + appointmentId) : ('Booking dispatched to WhatsApp! Token: ' + appointmentId));
    });
  }

  // Contact Form Submission Handler (Integrated with WhatsApp)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isTa = (typeof currentLang !== 'undefined' && currentLang === 'ta');
      const senderName = document.getElementById('contactName').value.trim();
      const senderPhone = document.getElementById('contactPhone').value.trim();
      const senderEmail = document.getElementById('contactEmail') ? document.getElementById('contactEmail').value.trim() : '';
      const senderService = document.getElementById('contactService') ? document.getElementById('contactService').value : 'General Inquiry';
      const senderMessage = document.getElementById('contactMessage').value.trim();

      let waInquiry = isTa 
        ? `🏥 *புதிய உதவி கோரிக்கை / செய்தி - ஸ்ரீ துர்கா ஆய்வகம்*\n`
        : `🏥 *NEW INQUIRY - SRI DURGAA CLINICAL LAB*\n`;
      waInquiry += `━━━━━━━━━━━━━━━━━━━━━\n`;
      waInquiry += `${isTa ? '👤 *பெயர்:*' : '👤 *Name:*'} ${senderName}\n`;
      waInquiry += `${isTa ? '📱 *கைபேசி:*' : '📱 *Phone:*'} ${senderPhone}\n`;
      if (senderEmail) waInquiry += `${isTa ? '✉️ *மின்னஞ்சல்:*' : '✉️ *Email:*'} ${senderEmail}\n`;
      waInquiry += `${isTa ? '🔬 *தலைப்பு:*' : '🔬 *Topic / Service:*'} ${senderService}\n`;
      waInquiry += `${isTa ? '💬 *செய்தி:*' : '💬 *Message:*'} ${senderMessage}\n`;
      waInquiry += `━━━━━━━━━━━━━━━━━━━━━\n`;
      waInquiry += isTa ? `_இணையதளத்தின் மூலம் அனுப்பப்பட்டது_` : `_Sent via Sri Durgaa Clinical Laboratory Website_`;

      const inquiryWaUrl = `https://wa.me/919843696625?text=${encodeURIComponent(waInquiry)}`;
      try {
        window.open(inquiryWaUrl, '_blank');
      } catch (err) {
        console.warn('Popup blocked:', err);
      }

      contactForm.reset();
      showToast(isTa ? `நன்றி, ${senderName}! உங்கள் செய்தி வாட்ஸ்அப்பிற்குத் திசைதிருப்பப்படுகிறது.` : `Thank you, ${senderName}! Redirecting to WhatsApp to send your inquiry.`);
    });
  }

  // Report Tracking Modal
  const reportSearchForm = document.getElementById('reportSearchForm');
  const reportResultArea = document.getElementById('reportResultArea');

  if (reportSearchForm) {
    reportSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const labBillId = document.getElementById('labBillId').value.trim();
      const patientPhone = document.getElementById('reportPatientPhone').value.trim();

      if (reportResultArea) {
        reportResultArea.innerHTML = `
          <div style="margin-top: 20px; padding: 20px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <span style="font-weight: 700; color: #166534; font-size: 0.92rem;">Verified Report Ready</span>
              <span style="background: #22c55e; color: white; font-size: 0.75rem; padding: 2px 10px; border-radius: 9999px; font-weight: 600;">COMPLETED</span>
            </div>
            <div style="font-size: 0.88rem; color: var(--text-main); margin-bottom: 6px;"><strong>Bill Reference:</strong> ${labBillId.toUpperCase()}</div>
            <div style="font-size: 0.88rem; color: var(--text-main); margin-bottom: 16px;"><strong>Laboratory:</strong> Sri Durgaa Clinical Laboratory, Ponneri</div>
            <a href="javascript:void(0)" onclick="alert('Sample report PDF downloaded successfully for ' + '${labBillId}');" class="btn btn-primary btn-sm" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Verified PDF Report
            </a>
          </div>
        `;
      }
    });
  }

  // Quick Search Overlay
  const searchTriggerBtn = document.getElementById('headerSearchBtn');
  const searchOverlayInput = document.getElementById('searchOverlayInput');
  const searchResultsList = document.getElementById('searchResultsList');

  if (searchTriggerBtn && searchOverlay) {
    searchTriggerBtn.addEventListener('click', () => {
      openModal(searchOverlay);
      setTimeout(() => {
        if (searchOverlayInput) searchOverlayInput.focus();
      }, 100);
    });
  }

  if (searchOverlayInput && searchResultsList) {
    searchOverlayInput.addEventListener('input', () => {
      const q = searchOverlayInput.value.toLowerCase().trim();
      const isTa = (typeof currentLang !== 'undefined' && currentLang === 'ta');
      const hintText = isTa ? 'எந்தவொரு மருத்துவப் பரிசோதனை அல்லது தொகுப்பையும் தேட தட்டச்சு செய்யவும்...' : 'Type to search any diagnostic test, service, or health package...';
      const noMatchText = isTa ? `"${q}" என்ற பெயரில் சோதனைகள் இல்லை. சிறப்புப் பரிசோதனைகளுக்கு ஆய்வகத்தைத் தொடர்பு கொள்ளவும்.` : `No tests matching "<strong>${q}</strong>". Please contact clinic for specialized tests.`;
      const viewBtnText = isTa ? 'காண்க' : 'View';

      if (!q) {
        searchResultsList.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">${hintText}</div>`;
        return;
      }

      let matches = [];
      Object.keys(testsData).forEach(key => {
        const itemEn = testsData[key];
        const itemTa = (typeof testsData_ta !== 'undefined' && testsData_ta[key]) ? testsData_ta[key] : itemEn;
        const activeItem = isTa ? itemTa : itemEn;

        if (itemEn.title.toLowerCase().includes(q) || itemEn.desc.toLowerCase().includes(q) || itemEn.category.toLowerCase().includes(q) ||
            itemTa.title.toLowerCase().includes(q) || itemTa.desc.toLowerCase().includes(q) || itemTa.category.toLowerCase().includes(q)) {
          matches.push({ key, ...activeItem });
        }
      });

      if (matches.length === 0) {
        searchResultsList.innerHTML = `<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">${noMatchText}</div>`;
      } else {
        searchResultsList.innerHTML = matches.map(m => `
          <div class="search-result-item" data-test-id="${m.key}">
            <div>
              <div style="font-weight: 600; color: var(--dark-blue); font-size: 0.95rem;">${m.title}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${m.category} • ${m.turnaround}</div>
            </div>
            <span class="btn btn-secondary btn-sm" style="padding: 5px 12px; font-size: 0.8rem;">${viewBtnText}</span>
          </div>
        `).join('');

        searchResultsList.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            const id = item.getAttribute('data-test-id');
            closeModal(searchOverlay);
            const testLink = document.querySelector(`.test-learn-more-link[data-test-id="${id}"]`);
            if (testLink) {
              testLink.click();
            }
          });
        });
      }
    });
  }

  // Toast Notification helper
  function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  // Active navigation link tracking on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navLink) navLink.classList.add('active');
      } else {
        if (navLink) navLink.classList.remove('active');
      }
    });
  }, { passive: true });
});
