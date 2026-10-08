/**
 * Sri Durgaa Clinical Laboratory - Complete Bilingual Translation Engine (English & Tamil)
 * Provides comprehensive translations for all elements, dynamic tests, modals, and forms.
 */

const translations = {
  en: {
    // Top Notice Bar
    topbar_address: 'Ponneri, Tamil Nadu',
    topbar_timing: 'Mon – Sat: 7:00 AM – 8:30 PM | Sun: 7:00 AM – 1:30 PM',
    topbar_home_collection: 'Home Sample Collection Available',

    // Header & Navigation
    brand_name: 'Sri Durgaa Clinical Laboratory',
    brand_tagline: 'Clinical Laboratory & Diagnostic Centre',
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_tests: 'Tests',
    nav_packages: 'Health Packages',
    nav_services: 'Services',
    nav_contact: 'Contact',
    nav_book_test: 'Book a Test',
    search_label: 'Search Tests & Services',

    // Mobile Navigation Drawer
    mobile_lab_name: 'Sri Durgaa Lab',
    mobile_lab_loc: 'Ponneri, Tamil Nadu',
    mobile_call_1: 'Call: +91 98436 96625',
    mobile_call_2: 'Call: +91 87783 17824',
    mobile_wa: 'WhatsApp: 98436 96625',
    mobile_lang_prompt: 'Language / மொழி:',

    // Hero Section
    hero_badge: 'Trusted Diagnostic Laboratory',
    hero_title_1: 'Accurate Diagnostics.',
    hero_title_accent: 'Better Health.',
    hero_desc: 'With 25+ years of experience, Sri Durgaa Clinical Laboratory provides reliable diagnostic testing with a commitment to accuracy, quality and patient care.',
    hero_btn_tests: 'View Tests',
    hero_btn_contact: 'Contact Us',
    hero_trust_years: '25+ Years of Experience',
    hero_trust_desc: "Ponneri's Trusted Medical Diagnostic Care Since 1999",

    // Hero Floating Cards
    floating_1_title: 'Accurate Reports',
    floating_1_desc: '99% Quality Verified',
    floating_2_title: 'Experienced Team',
    floating_2_desc: 'Certified Lab Technicians',
    floating_3_title: 'Quality Testing',
    floating_3_desc: 'Advanced Auto-Analyzers',

    // Key Highlights (Trust Section)
    trust_card1_num: '25+',
    trust_card1_label: 'Years of Experience',
    trust_card2_num: '11+',
    trust_card2_label: 'Major Test Categories',
    trust_card3_num: 'Accurate',
    trust_card3_label: 'Diagnostic Testing',
    trust_card4_num: 'Patient',
    trust_card4_label: 'Focused Care',

    // About Us Section
    about_label: 'ABOUT US',
    about_heading: '25 Years of Trust in Diagnostic Care',
    about_lead: 'Sri Durgaa Clinical Laboratory has been serving patients with reliable diagnostic testing for over 25 years. Our focus is on accurate testing, quality laboratory practices, timely reports and dependable patient service.',
    about_exp_years: '25',
    about_exp_title: 'Years of Trust',
    about_exp_sub: 'Diagnostic Excellence in Ponneri',
    about_check1: 'Experienced laboratory team',
    about_check2: 'Reliable diagnostic testing',
    about_check3: 'Quality-focused laboratory practices',
    about_check4: 'Timely and accurate reports',
    about_btn: 'Learn More',

    // Diagnostic Tests Section
    tests_label: 'DIAGNOSTIC EXCELLENCE',
    tests_heading: 'Diagnostic Tests',
    tests_sub: 'Comprehensive laboratory testing for your healthcare needs.',
    tests_search_placeholder: 'Search tests (e.g., CBC, Sugar, Thyroid, ECG)...',
    tab_all: 'All Tests (11)',
    tab_blood: 'Blood & Pathology',
    tab_organ: 'Organ Profiles',
    tab_imaging: 'Imaging & Cardiac',
    tab_specialized: 'Specialized Screenings',
    btn_learn_more: 'Learn More',
    btn_book_test: 'Book Test',
    btn_reset_search: 'Reset Search',
    btn_view_all_tests: 'View All Tests',
    no_tests_found: 'No diagnostic tests found matching your criteria.',

    // Test Cards Content
    test_cbc_title: 'CBC – Complete Blood Count',
    test_cbc_desc: 'Evaluates overall health and detects a wide range of disorders including anemia, infection, and platelet counts.',
    test_cbc_meta1: 'Turnaround: 4-6 Hours',
    test_cbc_meta2: 'Fasting: No',

    test_kft_title: 'KFT – Kidney Function Test',
    test_kft_desc: 'Assesses renal performance through Urea, Creatinine, Electrolytes, and Uric Acid parameters.',
    test_kft_meta1: 'Same Day Report',
    test_kft_meta2: 'Fasting: 8-10 Hrs',

    test_lft_title: 'LFT – Liver Function Test',
    test_lft_desc: 'Measures Bilirubin, SGOT/AST, SGPT/ALT, Alkaline Phosphatase, and Protein levels to monitor liver health.',
    test_lft_meta1: 'Same Day Report',
    test_lft_meta2: 'Fasting: 10-12 Hrs',

    test_lipid_title: 'Lipid Profile',
    test_lipid_desc: 'Comprehensive cholesterol breakdown including Total Cholesterol, HDL, LDL, VLDL, and Triglycerides.',
    test_lipid_meta1: 'Same Day Report',
    test_lipid_meta2: 'Fasting: 12 Hrs',

    test_sugar_title: 'Blood Sugar Test',
    test_sugar_desc: 'Fasting (FBS), Postprandial (PPBS), and Glycated Hemoglobin (HbA1c) tests for diabetes management.',
    test_sugar_meta1: 'Turnaround: 2-3 Hours',
    test_sugar_meta2: 'Fasting & Post-Meal',

    test_thyroid_title: 'Thyroid Profile',
    test_thyroid_desc: 'Quantitative assessment of T3, T4, and TSH hormones to evaluate thyroid gland functioning.',
    test_thyroid_meta1: 'Same Day Evening',
    test_thyroid_meta2: 'Morning Fasting Pref.',

    test_urinary_title: 'Urine & Stool Test',
    test_urinary_desc: 'Routine and microscopic examination to screen for urinary infections, renal disorders, and digestive health.',
    test_urinary_meta1: 'Turnaround: 3-5 Hours',
    test_urinary_meta2: 'Sterile Morning Sample',

    test_ecg_title: 'ECG',
    test_ecg_desc: 'Standard 12-lead Electrocardiogram measuring electrical activity and rhythm of the heart.',
    test_ecg_meta1: 'Instant Report',
    test_ecg_meta2: 'Fasting: No',

    test_xray_title: 'Digital X-Ray',
    test_xray_desc: 'High-resolution digital radiography for bone structure, chest lungs, and orthopedic evaluations with minimal radiation.',
    test_xray_meta1: '30-45 Mins Report',
    test_xray_meta2: 'Low Radiation Dose',

    test_hiv_title: 'HIV Test',
    test_hiv_desc: 'Confidential screening for Human Immunodeficiency Virus antibodies with stringent privacy protocols.',
    test_hiv_meta1: 'Turnaround: 4-6 Hours',
    test_hiv_meta2: '100% Confidential',

    test_preg_title: 'Pregnancy Test',
    test_preg_desc: 'Rapid and accurate qualitative/quantitative Beta-hCG detection for early pregnancy confirmation.',
    test_preg_meta1: 'Rapid Report: 30 Mins',
    test_preg_meta2: 'Morning Sample Best',

    // Health Packages Section
    packages_label: 'PREVENTIVE CARE',
    packages_heading: 'Complete Health Checkups',
    packages_sub: 'Regular health checkups can help you monitor important health parameters and support early detection of potential health concerns.',
    pkg_btn: 'Inquire / Book Package',
    pkg_key_incl: 'Key Investigations Included:',

    pkg1_badge: 'Essential Wellness',
    pkg1_name: 'Basic Health Checkup',
    pkg1_summary: 'Routine health parameter check designed for preventive monitoring and baseline health screening.',
    pkg1_item1: 'Complete Blood Count (CBC - 14 Parameters)',
    pkg1_item2: 'Fasting Blood Sugar (Glucose Level)',
    pkg1_item3: 'Urine Routine & Microscopic Examination',
    pkg1_item4: 'Blood Pressure & Physical Vitals',
    pkg1_item5: 'Doctor Consultation & Report Review',
    pkg1_note: 'Fasting required: 8-10 Hours',

    pkg2_popular: 'Most Recommended',
    pkg2_badge: 'Full Body Profile',
    pkg2_name: 'Complete Health Checkup',
    pkg2_summary: 'Comprehensive multi-organ evaluation for heart, liver, kidneys, and metabolic wellness.',
    pkg2_item1: 'Complete Blood Count (CBC) with ESR',
    pkg2_item2: 'Liver Function Test (LFT - 8 Parameters)',
    pkg2_item3: 'Kidney Function Test (KFT - Urea, Creatinine)',
    pkg2_item4: 'Complete Lipid Profile (Cholesterol & Lipids)',
    pkg2_item5: 'Fasting Blood Sugar + HbA1c (3-Month Avg)',
    pkg2_item6: '12-Lead Resting ECG',
    pkg2_item7: 'Urine & Stool Microscopic Analysis',
    pkg2_note: 'Overnight fasting required: 10-12 Hours',

    pkg3_badge: 'Executive Screening',
    pkg3_name: 'Advanced Health Checkup',
    pkg3_summary: 'In-depth clinical diagnostic evaluation including hormones, chest imaging, and specialized markers.',
    pkg3_item1: 'All Inclusions in Complete Health Checkup',
    pkg3_item2: 'Thyroid Profile (Total T3, Total T4, TSH)',
    pkg3_item3: 'Digital Chest X-Ray (PA View)',
    pkg3_item4: 'Serum Calcium & Uric Acid Analysis',
    pkg3_item5: 'Cardiac Risk Evaluation & Electrolytes',
    pkg3_item6: 'Priority Report & Free Home Collection',
    pkg3_note: 'Overnight fasting: 12 Hours',

    // Why Choose Us Section
    why_label: 'OUR COMMITMENT',
    why_heading: 'Why Choose Us',
    why_sub: 'Dedicated to clinical precision, high testing standards, and compassionate patient care.',
    why1_title: '25+ Years Experience',
    why1_desc: 'Experienced diagnostic service with a long-standing presence.',
    why2_title: 'Accurate Testing',
    why2_desc: 'Focus on reliable and quality laboratory testing.',
    why3_title: 'Timely Reports',
    why3_desc: 'Designed around convenient and timely reporting.',
    why4_title: 'Patient Care',
    why4_desc: 'Friendly and patient-focused service.',

    // Services Section
    services_label: 'CLINICAL DISCIPLINES',
    services_heading: 'Our Diagnostic Services',
    services_sub: 'Broad-spectrum diagnostic capabilities under one roof with calibrated medical technology.',
    serv1_title: 'Blood Tests',
    serv1_desc: 'Hematology, complete cell counts, clotting profiles, and blood grouping with automated cell counters.',
    serv2_title: 'Hormone Tests',
    serv2_desc: 'Accurate chemiluminescence assays for thyroid, fertility, pituitary, and reproductive hormone panels.',
    serv3_title: 'Diabetes Testing',
    serv3_desc: 'Fasting blood sugar, postprandial glucose, HbA1c glycemic monitoring, and urine microalbumin screens.',
    serv4_title: 'Liver & Kidney Testing',
    serv4_desc: 'Renal and hepatic bio-chemistry assays assessing metabolic filtration, enzymes, proteins, and electrolytes.',
    serv5_title: 'Infection Screening',
    serv5_desc: 'Serological tests for typhoid (Widal), dengue, malaria, viral markers, and systemic bacterial infections.',
    serv6_title: 'Pregnancy Testing',
    serv6_desc: 'Rapid urine Beta-hCG detection and precision quantitative blood serum assays for early confirmation.',
    serv7_title: 'ECG',
    serv7_desc: 'High-precision 12-lead Electrocardiography recording cardiac rhythm and conduction performance.',
    serv8_title: 'Digital X-Ray',
    serv8_desc: 'High-definition digital imaging for chest, spine, and joints with reduced radiation exposure.',
    serv9_title: 'Health Checkups',
    serv9_desc: 'Custom preventative wellness packages for individuals, seniors, and corporate executive health.',

    // Process Section (How It Works)
    process_label: 'SIMPLE PATIENT JOURNEY',
    process_heading: 'How It Works',
    process_sub: 'A seamless four-step process engineered for comfort, hygiene, and fast turnaround.',
    step1_title: 'Book / Visit',
    step1_desc: 'Schedule your test online, request home sample collection, or walk directly into our Ponneri laboratory.',
    step2_title: 'Sample Collection',
    step2_desc: 'Hygienic collection by certified phlebotomists using sterilized, vacuum-sealed disposable equipment.',
    step3_title: 'Laboratory Testing',
    step3_desc: 'Precision processing on automated clinical analyzers with rigorous internal quality control.',
    step4_title: 'Receive Your Report',
    step4_desc: 'Obtain verified physical printed reports at our clinic or get digital copies via WhatsApp and Email.',

    // CTA Banner
    cta_heading: 'Your Health Deserves Accurate Diagnostics',
    cta_text: 'Visit Sri Durgaa Clinical Laboratory for reliable diagnostic testing and healthcare support.',
    cta_btn_contact: 'Contact Us',
    cta_btn_directions: 'Get Directions',

    // Contact Section
    contact_label: 'GET IN TOUCH',
    contact_heading: 'Contact & Visit Our Centre',
    contact_sub: 'We are conveniently located in Ponneri to serve all your pathology and diagnostic needs.',
    card_addr_title: 'Clinic Address',
    card_addr_text: '<strong>Sri Durgaa Clinical Laboratory</strong><br>Near Old Bus Stand / Railway Station Road,<br>Ponneri, Tiruvallur District,<br>Tamil Nadu - 601204, India',
    card_phone_title: 'Phone Numbers',
    card_phone_mob1: 'Mobile 1:',
    card_phone_mob2: 'Mobile 2:',
    card_phone_wa: 'WhatsApp:',
    card_email_title: 'Email Address',
    card_email_lab: 'Lab Mail:',
    card_email_sub: 'Send prescriptions & report inquiries',
    card_hours_title: 'Working Hours',
    card_hours_mf: '<strong>Monday – Saturday:</strong> 7:00 AM – 8:30 PM',
    card_hours_sun: '<strong>Sunday:</strong> 7:00 AM – 1:30 PM',
    card_hours_fasting: 'Fasting sample collection starts 7:00 AM daily',
    footer_address_full: 'Sri Durgaa Clinical Laboratory, Ponneri, Tamil Nadu - 601204',

    // Contact Form
    form_inquiry_title: 'Quick Inquiry & Support',
    form_inquiry_desc: 'Have questions regarding test preparation, fasting, or home sample collection? Send us a message and our team will assist you promptly.',
    label_full_name: 'Full Name *',
    ph_full_name: 'e.g. Ramesh Kumar',
    label_phone: 'Phone Number *',
    ph_phone: 'e.g. 9876543210',
    label_email: 'Email Address (Optional)',
    ph_email: 'e.g. ramesh@example.com',
    label_service: 'Service / Test Interested In',
    opt_general: 'General Inquiry',
    opt_home_col: 'Home Sample Collection Request',
    opt_cbc: 'CBC / Blood Test',
    opt_checkup: 'Complete Health Checkup',
    opt_ecg_xray: 'ECG / Digital X-Ray',
    opt_other: 'Other Diagnostic Testing',
    label_message: 'Your Message or Query *',
    ph_message: 'Specify your requirements or test details...',
    btn_send_message: 'Send Message',

    // Footer
    footer_desc: '"Accurate Tests. Trusted Care. Better Health."<br>Providing patient-centric clinical laboratory investigations with uncompromised quality, precision auto-analyzers, and compassionate care.',
    footer_exp: '25+ Years of Trusted Diagnostic Care',
    footer_quick_links: 'Quick Links',
    footer_key_tests: 'Key Tests',
    footer_contact_info: 'Contact Info',
    footer_rights: '© 2026 Sri Durgaa Clinical Laboratory. All rights reserved.',
    footer_motto: 'Accurate Tests. Trusted Care. Better Health. Ponneri, Tamil Nadu.',

    // Modals - Test Details Modal
    modal_test_title: 'Diagnostic Test Specifications',
    modal_param_tested: 'Parameters Tested:',
    modal_prep: 'Preparation',
    modal_sample: 'Sample Type',
    modal_turnaround: 'Report Turnaround',
    modal_care: 'Clinical Care',
    modal_care_desc: 'Certified Pathologist Verification',
    modal_close: 'Close',
    modal_book_this: 'Book This Test',

    // Modals - Book a Test Modal
    book_modal_title: 'Schedule a Diagnostic Test',
    book_modal_sub: 'Choose whether you wish to visit our Ponneri diagnostic centre or request convenient home sample collection.',
    book_wa_notice: '<strong>Automated WhatsApp Booking:</strong> Submitting this form will automatically prepare and send your booking confirmation directly to our lab WhatsApp (<a href="https://wa.me/919843696625" target="_blank" rel="noopener" style="color: #1b5e20; font-weight: 700; text-decoration: underline;">+91 98436 96625</a>) for immediate verification.',
    book_label_pref: 'Service Preference *',
    book_radio_lab_title: 'Lab Visit',
    book_radio_lab_sub: 'Ponneri Centre',
    book_radio_home_title: 'Home Collection',
    book_radio_home_sub: 'At your doorstep',
    book_label_select: 'Select Test or Health Package *',
    book_optgroup_tests: 'Diagnostic Tests',
    book_optgroup_pkgs: 'Health Checkup Packages',
    book_label_date: 'Preferred Date *',
    book_label_time: 'Preferred Time Slot *',
    slot_fasting: '07:00 AM - 08:30 AM (Fasting Slot)',
    slot_morning: '08:30 AM - 10:00 AM',
    slot_midday: '10:00 AM - 12:00 PM',
    slot_evening: '04:00 PM - 06:00 PM',
    slot_night: '06:00 PM - 08:00 PM',
    book_label_patient: 'Patient Name *',
    book_ph_patient: "Patient's Full Name",
    book_label_phone: 'Phone Number *',
    book_ph_phone: '10-digit mobile number',
    book_label_addr: 'Residential Address (for Home Collection in Ponneri area) *',
    book_ph_addr: 'House/Flat number, Street name, Landmark, Ponneri',
    book_btn_submit: 'Confirm & Send to WhatsApp',

    // Modals - Confirmation Dialog
    conf_title: 'Booking Dispatched to WhatsApp!',
    conf_sub: 'Thank you, <strong>{name}</strong>. Your appointment token has been generated and pre-filled for our lab on WhatsApp.',
    conf_token: 'Booking Token:',
    conf_patient: 'Patient Name:',
    conf_phone: 'Patient Phone:',
    conf_test: 'Selected Test:',
    conf_datetime: 'Date & Time:',
    conf_service: 'Service Preference:',
    conf_address: 'Address:',
    conf_btn_wa: 'Open / Resend on WhatsApp (+91 98436 96625)',
    conf_btn_wa2: 'Send to Alternate Number (+91 87783 17824)',
    conf_call1: 'Call: 98436 96625',
    conf_call2: 'Call: 87783 17824',
    conf_done: 'Done',

    // Search Overlay
    search_ph: 'Type test name (e.g. CBC, KFT, LFT, ECG, Sugar)...',
    search_default_hint: 'Type to search any diagnostic test, service, or health package...',
    search_no_match: 'No tests matching "<strong>{query}</strong>". Please contact clinic for specialized tests.',
    search_btn_view: 'View',

    // Floating WhatsApp Button
    floating_wa_label: 'Book on WhatsApp',
    floating_wa_title: 'Chat with us on WhatsApp (+91 98436 96625)'
  },

  ta: {
    // Top Notice Bar
    topbar_address: 'பொன்னேரி, தமிழ்நாடு',
    topbar_timing: 'திங்கள் – சனி: காலை 7:00 – இரவு 8:30 | ஞாயிறு: காலை 7:00 – மதியம் 1:30',
    topbar_home_collection: 'வீட்டிற்கே வந்து மாதிரி எடுக்கும் வசதி உள்ளது',

    // Header & Navigation
    brand_name: 'ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி',
    brand_tagline: 'மருத்துவ ஆய்வகம் & பரிசோதனை மையம்',
    nav_home: 'முகப்பு',
    nav_about: 'எங்களைப் பற்றி',
    nav_tests: 'பரிசோதனைகள்',
    nav_packages: 'முழு உடல் பரிசோதனை',
    nav_services: 'சேவைகள்',
    nav_contact: 'தொடர்புக்கு',
    nav_book_test: 'பரிசோதனை பதிவு செய்க',
    search_label: 'பரிசோதனைகளைத் தேடவும்',

    // Mobile Navigation Drawer
    mobile_lab_name: 'ஸ்ரீ துர்கா லேப்',
    mobile_lab_loc: 'பொன்னேரி, தமிழ்நாடு',
    mobile_call_1: 'அழைக்க: +91 98436 96625',
    mobile_call_2: 'அழைக்க: +91 87783 17824',
    mobile_wa: 'வாட்ஸ்அப்: 98436 96625',
    mobile_lang_prompt: 'மொழியைத் தேர்ந்தெடுக்கவும் / Language:',

    // Hero Section
    hero_badge: 'நம்பகமான மருத்துவப் பரிசோதனை ஆய்வகம்',
    hero_title_1: 'துல்லியமான பரிசோதனைகள்.',
    hero_title_accent: 'சிறந்த நல்வாழ்வு.',
    hero_desc: '25+ வருட அனுபவத்துடன், ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி துல்லியம், தரம் மற்றும் சிறந்த நோயாளிகள் கவனிப்புடன் நம்பகமான மருத்துவப் பரிசோதனைகளை வழங்குகிறது.',
    hero_btn_tests: 'பரிசோதனைகளைக் காண்க',
    hero_btn_contact: 'எங்களைத் தொடர்பு கொள்ள',
    hero_trust_years: '25+ வருட அனுபவம்',
    hero_trust_desc: '1999 முதல் பொன்னேரியின் நம்பிக்கையான மருத்துவப் பரிசோதனை மையம்',

    // Hero Floating Cards
    floating_1_title: 'துல்லியமான முடிவுகள்',
    floating_1_desc: '100% தரம் சரிபார்க்கப்பட்டது',
    floating_2_title: 'அனுபவம் வாய்ந்த குழு',
    floating_2_desc: 'சான்றிதழ் பெற்ற ஆய்வக வல்லுநர்கள்',
    floating_3_title: 'தரமான பரிசோதனை',
    floating_3_desc: 'நவீன தானியங்கி பகுப்பாய்விகள்',

    // Key Highlights (Trust Section)
    trust_card1_num: '25+',
    trust_card1_label: 'வருட மருத்துவ அனுபவம்',
    trust_card2_num: '11+',
    trust_card2_label: 'முக்கிய பரிசோதனை பிரிவுகள்',
    trust_card3_num: 'துல்லியமான',
    trust_card3_label: 'மருத்துவ பரிசோதனைகள்',
    trust_card4_num: 'நோயாளிகள் நலன்',
    trust_card4_label: 'முக்கிய அர்ப்பணிப்பு',

    // About Us Section
    about_label: 'எங்களைப் பற்றி',
    about_heading: '25 வருடங்களாக நம்பிக்கையான மருத்துவப் பரிசோதனை சேவை',
    about_lead: 'ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி 25 ஆண்டுகளுக்கும் மேலாக மக்களுக்கு நம்பகமான மருத்துவப் பரிசோதனைகளை வழங்கி வருகிறது. துல்லியமான முடிவுகள், தரமான ஆய்வக நடைமுறைகள், விரைவான அறிக்கைகள் மற்றும் அன்பான சேவை எங்கள் அடையாளம்.',
    about_exp_years: '25',
    about_exp_title: 'வருட நம்பிக்கை',
    about_exp_sub: 'பொன்னேரியில் சிறந்த ஆய்வக சேவை',
    about_check1: 'அனுபவமிக்க ஆய்வக நிபுணர்கள் குழு',
    about_check2: 'நம்பகமான துல்லியமான பரிசோதனைகள்',
    about_check3: 'உயர்தர சர்வதேச ஆய்வக நடைமுறைகள்',
    about_check4: 'சரியான நேரத்தில் துல்லியமான முடிவுகள்',
    about_btn: 'மேலும் அறிய',

    // Diagnostic Tests Section
    tests_label: 'சிறந்த மருத்துவ பரிசோதனைகள்',
    tests_heading: 'ஆய்வகப் பரிசோதனைகள்',
    tests_sub: 'உங்கள் உடல்நல தேவைகளுக்கான விரிவான ஆய்வகப் பரிசோதனைகள்.',
    tests_search_placeholder: 'பரிசோதனைகளைத் தேடவும் (உதா: CBC, சர்க்கரை, தைராய்டு, ECG)...',
    tab_all: 'அனைத்துப் பரிசோதனைகள் (11)',
    tab_blood: 'இரத்தம் & நோயியல்',
    tab_organ: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    tab_imaging: 'இதயம் & ஸ்கேன்/எக்ஸ்-ரே',
    tab_specialized: 'சிறப்பு பரிசோதனைகள்',
    btn_learn_more: 'விவரங்கள் அறிய',
    btn_book_test: 'பதிவு செய்க',
    btn_reset_search: 'தேடலை மீட்டமைக்க',
    btn_view_all_tests: 'அனைத்துப் பரிசோதனைகளையும் காண்க',
    no_tests_found: 'நீங்கள் தேடிய பெயரில் பரிசோதனைகள் எதுவும் கிடைக்கவில்லை.',

    // Test Cards Content
    test_cbc_title: 'CBC – முழு இரத்த அணுக்கள் பரிசோதனை',
    test_cbc_desc: 'இரத்த சோகை, தொற்றுநோய்கள் மற்றும் பிளேட்லெட் எண்ணிக்கையைக் கண்டறிந்து உடலின் ஒட்டுமொத்த நலனைத் தெரிவிக்கும் பரிசோதனை.',
    test_cbc_meta1: 'முடிவு வழங்கும் நேரம்: 4-6 மணி நேரம்',
    test_cbc_meta2: 'வெறும் வயிறு: தேவையில்லை',

    test_kft_title: 'KFT – சிறுநீரக செயல்பாட்டு பரிசோதனை',
    test_kft_desc: 'யூரியா, கிரியேட்டினின், எலக்ட்ரோலைட்டுகள் மற்றும் யூரிக் அமிலம் மூலம் சிறுநீரகத்தின் இயக்கத்தை மதிப்பிடுகிறது.',
    test_kft_meta1: 'அன்றே அறிக்கை வழங்கப்படும்',
    test_kft_meta2: 'வெறும் வயிறு: 8-10 மணி நேரம்',

    test_lft_title: 'LFT – கல்லீரல் செயல்பாட்டு பரிசோதனை',
    test_lft_desc: 'பிலிரூபின், SGOT, SGPT மற்றும் புரோட்டீன் அளவுகளை அளவிட்டு கல்லீரலின் ஆரோக்கியத்தைக் கண்காணிக்கிறது.',
    test_lft_meta1: 'அன்றே அறிக்கை வழங்கப்படும்',
    test_lft_meta2: 'வெறும் வயிறு: 10-12 மணி நேரம்',

    test_lipid_title: 'கொலஸ்ட்ரால் / கொழுப்பு பரிசோதனை (Lipid Profile)',
    test_lipid_desc: 'நல்ல கொழுப்பு (HDL), கெட்ட கொழுப்பு (LDL) மற்றும் ட்ரைகிளிசரைடு அளவுகளைத் துல்லியமாக அறியும் இதய நலப் பரிசோதனை.',
    test_lipid_meta1: 'அன்றே அறிக்கை வழங்கப்படும்',
    test_lipid_meta2: 'வெறும் வயிறு: 12 மணி நேரம்',

    test_sugar_title: 'இரத்த சர்க்கரை அளவு பரிசோதனை',
    test_sugar_desc: 'சர்க்கரை நோயைக் கண்காணிக்க வெறும் வயிறு (FBS), உணவுக்குப் பின் (PPBS) மற்றும் 3 மாத சராசரி சர்க்கரை (HbA1c) பரிசோதனைகள்.',
    test_sugar_meta1: 'முடிவு வழங்கும் நேரம்: 2-3 மணி நேரம்',
    test_sugar_meta2: 'வெறும் வயிறு & உணவுக்குப் பின்',

    test_thyroid_title: 'தைராய்டு பரிசோதனை (Thyroid Profile)',
    test_thyroid_desc: 'உடல் எடை, சோர்வு மற்றும் வளர்சிதை மாற்றத்தைக் கட்டுப்படுத்தும் T3, T4, TSH ஹார்மோன் அளவீடுகளை மதிப்பிடும் பரிசோதனை.',
    test_thyroid_meta1: 'அன்றே மாலை அறிக்கை',
    test_thyroid_meta2: 'காலை வெறும் வயிறு சிறந்தது',

    test_urinary_title: 'சிறுநீர் & மலம் வழக்கமான பரிசோதனை',
    test_urinary_desc: 'சிறுநீரகத் தொற்று, சர்க்கரை வெளியேற்றம் மற்றும் செரிமானக் கோளாறுகளைக் கண்டறியும் வழக்கமான நுண்ணோக்கிப் பரிசோதனை.',
    test_urinary_meta1: 'முடிவு வழங்கும் நேரம்: 3-5 மணி நேரம்',
    test_urinary_meta2: 'காலை தூய மாதிரி சிறந்தது',

    test_ecg_title: 'ECG',
    test_ecg_desc: 'இதயத் துடிப்பு சீரான இயக்கம், மாரடைப்பு அபாயம் மற்றும் இதய நலம் குறித்த நிலையான 12-Lead ECG பரிசோதனை.',
    test_ecg_meta1: 'உடனடி அறிக்கை',
    test_ecg_meta2: 'வெறும் வயிறு: தேவையில்லை',

    test_xray_title: 'டிஜிட்டல் எக்ஸ்-ரே (Digital X-Ray)',
    test_xray_desc: 'எலும்பு முறிவுகள், நெஞ்சு சளி மற்றும் மூட்டு வலிகளுக்கான அதிநவீன குறைந்த கதிர்வீச்சு டிஜிட்டல் எக்ஸ்-ரே.',
    test_xray_meta1: '30-45 நிமிடங்களில் அறிக்கை',
    test_xray_meta2: 'குறைந்த கதிர்வீச்சு முறை',

    test_hiv_title: 'HIV பரிசோதனை',
    test_hiv_desc: 'முழுமையான ரகசியத்தன்மையுடன் மருத்துவ வழிகாட்டுதல்களின்படி செய்யப்படும் துல்லியமான HIV பரிசோதனை.',
    test_hiv_meta1: 'முடிவு வழங்கும் நேரம்: 4-6 மணி நேரம்',
    test_hiv_meta2: '100% ரகசியமானது',

    test_preg_title: 'கர்ப்பப் பரிசோதனை',
    test_preg_desc: 'ஆரம்பகால கருவுறுதலைத் துல்லியமாக உறுதி செய்யும் விரைவான சிறுநீர் மற்றும் இரத்த Beta-hCG பரிசோதனை.',
    test_preg_meta1: 'விரைவான அறிக்கை: 30 நிமிடம்',
    test_preg_meta2: 'காலை மாதிரி சிறந்தது',

    // Health Packages Section
    packages_label: 'நோய் தடுப்பு நல்வாழ்வு',
    packages_heading: 'முழு உடல் பரிசோதனை தொகுப்புகள்',
    packages_sub: 'வழக்கமான முழு உடல் பரிசோதனை மூலம் உடல்நல குறைபாடுகளை ஆரம்பத்திலேயே கண்டறிந்து தற்காத்துக் கொள்ளலாம்.',
    pkg_btn: 'தொகுப்பை பதிவு செய்க',
    pkg_key_incl: 'உள்ளடக்கிய முக்கிய பரிசோதனைகள்:',

    pkg1_badge: 'அத்தியாவசிய நலன்',
    pkg1_name: 'அடிப்படை உடல் பரிசோதனை',
    pkg1_summary: 'ஆரம்ப நிலை உடல்நலக் கண்காணிப்புக்கான வழக்கமான அடிப்படை மருத்துவப் பரிசோதனைகள்.',
    pkg1_item1: 'முழு இரத்த அணுக்கள் பரிசோதனை (CBC - 14 அளவீடுகள்)',
    pkg1_item2: 'வெறும் வயிற்று இரத்த சர்க்கரை அளவு (Glucose Level)',
    pkg1_item3: 'முழு சிறுநீர் நுண்ணோக்கி பரிசோதனை',
    pkg1_item4: 'இரத்த அழுத்தம் & முக்கிய உடலியல் அளவீடுகள்',
    pkg1_item5: 'மருத்துவர் ஆலோசனை & அறிக்கை விளக்கம்',
    pkg1_note: 'வெறும் வயிற்றில் இருக்க வேண்டிய நேரம்: 8-10 மணி நேரம்',

    pkg2_popular: 'அதிகம் பரிந்துரைக்கப்படுவது',
    pkg2_badge: 'முழு உடல் பரிசோதனை',
    pkg2_name: 'முழு உடல் நல்வாழ்வு பரிசோதனை',
    pkg2_summary: 'இதயம், கல்லீரல், சிறுநீரகம் மற்றும் சர்க்கரை நலனை விரிவாக ஆராயும் சிறப்பு தொகுப்பு.',
    pkg2_item1: 'முழு இரத்த அணுக்கள் பரிசோதனை (CBC + ESR)',
    pkg2_item2: 'கல்லீரல் செயல்பாட்டு பரிசோதனை (LFT - 8 அளவீடுகள்)',
    pkg2_item3: 'சிறுநீரக செயல்பாட்டு பரிசோதனை (KFT - யூரியா, கிரியேட்டினின்)',
    pkg2_item4: 'முழு கொழுப்பு/கொலஸ்ட்ரால் பரிசோதனை (Lipid Profile)',
    pkg2_item5: 'இரத்த சர்க்கரை + 3 மாத சராசரி சர்க்கரை (HbA1c)',
    pkg2_item6: '12-Lead இதய மின் துடிப்பு பரிசோதனை (ECG)',
    pkg2_item7: 'சிறுநீர் மற்றும் மலம் நுண்ணோக்கி பரிசோதனை',
    pkg2_note: 'இரவு முழுவதும் வெறும் வயிறு தேவை: 10-12 மணி நேரம்',

    pkg3_badge: 'முழுமையான சிறப்பு தொகுப்பு',
    pkg3_name: 'மேம்பட்ட முழு உடல் பரிசோதனை',
    pkg3_summary: 'ஹார்மோன்கள், நெஞ்சு எக்ஸ்-ரே மற்றும் சிறப்பு அளவீடுகள் உள்ளிட்ட விரிவான பரிசோதனை.',
    pkg3_item1: 'முழு உடல் பரிசோதனையின் அனைத்து சோதனைகளும்',
    pkg3_item2: 'முழு தைராய்டு பரிசோதனை (Total T3, Total T4, TSH)',
    pkg3_item3: 'டிஜிட்டல் நெஞ்சு எக்ஸ்-ரே (Digital Chest X-Ray)',
    pkg3_item4: 'கால்சியம் மற்றும் யூரிக் அமில பரிசோதனை',
    pkg3_item5: 'இதய அபாய மதிப்பீடு & எலக்ட்ரோலைட்டுகள்',
    pkg3_item6: 'முன்னுரிமை அறிக்கை & இலவச வீட்டிற்கே வந்து மாதிரி எடுத்தல்',
    pkg3_note: 'வெறும் வயிற்றில் இருக்க வேண்டிய நேரம்: 12 மணி நேரம்',

    // Why Choose Us Section
    why_label: 'எங்கள் உறுதிமொழி',
    why_heading: 'ஏன் எங்களைத் தேர்ந்தெடுக்க வேண்டும்?',
    why_sub: 'துல்லியமான முடிவுகள், சர்வதேச தரநிலைகள் மற்றும் அன்பான நோயாளி கவனிப்பில் அர்ப்பணிப்புடன் இயங்குகிறோம்.',
    why1_title: '25+ வருட அனுபவம்',
    why1_desc: 'பொன்னேரி வட்டாரத்தில் பல வருடங்களாக நீடிக்கும் நம்பிக்கையான பரிசோதனை சேவை.',
    why2_title: 'துல்லியமான பரிசோதனைகள்',
    why2_desc: 'அதிநவீன கருவிகள் மூலம் 100% நம்பகமான தரமான மருத்துவப் பரிசோதனைகள்.',
    why3_title: 'சரியான நேரத்தில் அறிக்கைகள்',
    why3_desc: 'விரைவான அதே சமயம் துல்லியமான அறிக்கைகள் நேரிலும் வாட்ஸ்அப்பிலும்.',
    why4_title: 'அன்பான கவனிப்பு',
    why4_desc: 'நோயாளிகளை இன்முகத்தோடு அணுகி கனிவான முறையில் சேவை வழங்கும் குழு.',

    // Services Section
    services_label: 'மருத்துவ பிரிவுகள்',
    services_heading: 'எங்கள் ஆய்வகச் சேவைகள்',
    services_sub: 'அனைத்து விதமான மருத்துவப் பரிசோதனைகளும் ஒரே கூரையின் கீழ் நவீன தொழில்நுட்பத்துடன்.',
    serv1_title: 'இரத்தப் பரிசோதனைகள்',
    serv1_desc: 'முழு இரத்த அணுக்கள், இரத்தம் உறைதல் மற்றும் இரத்த வகை கண்டறிதல் தானியங்கி கருவிகள் மூலம் செய்யப்படுகிறது.',
    serv2_title: 'ஹார்மோன் பரிசோதனைகள்',
    serv2_desc: 'தைராய்டு, கருவுறுதல் மற்றும் நாளமில்லா சுரப்பிகள் தொடர்பான துல்லியமான ஹார்மோன் பரிசோதனைகள்.',
    serv3_title: 'சர்க்கரை நோய் பரிசோதனை',
    serv3_desc: 'வெறும் வயிறு (FBS), உணவுக்குப் பின் (PPBS) மற்றும் 3 மாத சராசரி சர்க்கரை (HbA1c) பரிசோதனைகள்.',
    serv4_title: 'கல்லீரல் & சிறுநீரக பரிசோதனை',
    serv4_desc: 'யூரியா, கிரியேட்டினின், பிலிரூபின், என்சைம்கள் மற்றும் புரோட்டீன் அளவுகளை அளவிடும் பயோ-கெமிஸ்ட்ரி சோதனைகள்.',
    serv5_title: 'தொற்றுநோய் பரிசோதனைகள்',
    serv5_desc: 'டெங்கு, டைபாய்டு (Widal), மலேரியா மற்றும் பிற வைரஸ் காய்ச்சல்களுக்கான உடனடி சீராலஜி சோதனைகள்.',
    serv6_title: 'கர்ப்ப பரிசோதனை',
    serv6_desc: 'ஆரம்பகால கருவுறுதலை உறுதிப்படுத்தும் நம்பகமான சிறுநீர் மற்றும் இரத்த Beta-hCG ஹார்மோன் சோதனைகள்.',
    serv7_title: 'ECG இதயப் பரிசோதனை',
    serv7_desc: 'இதயத் துடிப்பை உடனுக்குடன் பதிவு செய்து மருத்துவ துல்லியத்துடன் வழங்கப்படும் 12-Lead ECG சேவை.',
    serv8_title: 'டிஜிட்டல் எக்ஸ்-ரே',
    serv8_desc: 'குறைந்த கதிர்வீச்சுடன் எடுக்கப்படும் தெளிவான மார்பக, எலும்பு மற்றும் மூட்டு டிஜிட்டல் எக்ஸ்-ரே.',
    serv9_title: 'முழு உடல் நலப் பரிசோதனை',
    serv9_desc: 'அனைத்து வயதினருக்குமான நோய் தடுப்பு முழு உடல் பரிசோதனை சிறப்பு தொகுப்புகள்.',

    // Process Section (How It Works)
    process_label: 'எளிய நோயாளி நடைமுறை',
    process_heading: 'எங்கள் நடைமுறை',
    process_sub: 'ஆறுதல், சுகாதாரம் மற்றும் விரைவான முடிவுகளுக்காக வடிவமைக்கப்பட்ட எளிய நான்கு படிகள்.',
    step1_title: 'முன்பதிவு / நேரடி வருகை',
    step1_desc: 'இணையதளம் மூலம் முன்பதிவு செய்யலாம், வீட்டிற்கே வந்து மாதிரி எடுக்க கோரலாம் அல்லது நேரடியாக மையத்திற்கு வரலாம்.',
    step2_title: 'மாதிரி சேகரிப்பு',
    step2_desc: 'தூய்மைப்படுத்தப்பட்ட உபகரணங்கள் மூலம் தகுதிவாய்ந்த ஊழியர்களால் சுகாதாரமான முறையில் மாதிரி சேகரிக்கப்படுகிறது.',
    step3_title: 'ஆய்வகப் பரிசோதனை',
    step3_desc: 'முழுமையான தரக்கட்டுப்பாட்டுடன் கூடிய அதிநவீன தானியங்கி ஆய்வகக் கருவிகளில் துல்லியமாக பரிசோதிக்கப்படுகிறது.',
    step4_title: 'அறிக்கையைப் பெறுங்கள்',
    step4_desc: 'சரிபார்க்கப்பட்ட அச்சிடப்பட்ட அறிக்கையை நேரிலோ அல்லது வாட்ஸ்அப் / இமெயில் மூலமாகவோ உடனடியாகப் பெறலாம்.',

    // CTA Banner
    cta_heading: 'உங்கள் நல்வாழ்வுக்கு துல்லியமான பரிசோதனையே அடிப்படை',
    cta_text: 'நம்பகமான மருத்துவப் பரிசோதனைகள் மற்றும் சுகாதார வழிகாட்டுதலுக்கு ஸ்ரீ துர்கா ஆய்வகத்தை அணுகுங்கள்.',
    cta_btn_contact: 'தொடர்பு கொள்க',
    cta_btn_directions: 'வழிகாட்டுதல் பெறுக (Map)',

    // Contact Section
    contact_label: 'தொடர்புக்கு',
    contact_heading: 'எங்கள் மையத்தைத் தொடர்பு கொள்ளவும்',
    contact_sub: 'பொன்னேரி மையப்பகுதியில் உங்கள் அனைத்து மருத்துவ ஆய்வகத் தேவைகளுக்கும் அமைந்துள்ளோம்.',
    card_addr_title: 'மைய முகவரி',
    card_addr_text: '<strong>ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி</strong><br>பழைய பேருந்து நிலையம் / இரயில்வே நிலைய சாலை அருகில்,<br>பொன்னேரி, திருவள்ளூர் மாவட்டம்,<br>தமிழ்நாடு - 601204',
    card_phone_title: 'தொலைபேசி எண்கள்',
    card_phone_mob1: 'கைபேசி 1:',
    card_phone_mob2: 'கைபேசி 2:',
    card_phone_wa: 'வாட்ஸ்அப்:',
    card_email_title: 'மின்னஞ்சல் முகவரி',
    card_email_lab: 'ஆய்வக மின்னஞ்சல்:',
    card_email_sub: 'மருத்துவர் சீட்டு & அறிக்கை விவரங்களை அனுப்பலாம்',
    card_hours_title: 'பணி நேரம்',
    card_hours_mf: '<strong>திங்கள் – சனி:</strong> காலை 7:00 – இரவு 8:30',
    card_hours_sun: '<strong>ஞாயிறு:</strong> காலை 7:00 – மதியம் 1:30',
    card_hours_fasting: 'வெறும் வயிற்று மாதிரி எடுத்தல் தினமும் காலை 7:00 மணிக்குத் தொடங்கும்',
    footer_address_full: 'ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி, பொன்னேரி, தமிழ்நாடு - 601204',

    // Contact Form
    form_inquiry_title: 'விரைவு உதவி & தகவல்கள்',
    form_inquiry_desc: 'பரிசோதனைக்குத் தயாராவது, உணவுக் கட்டுப்பாடு அல்லது வீட்டிற்கே வந்து மாதிரி எடுத்தல் பற்றிய கேள்விகள் உள்ளதா? உங்கள் செய்தியை அனுப்பவும்.',
    label_full_name: 'முழு பெயர் *',
    ph_full_name: 'உதா: ரமேஷ் குமார்',
    label_phone: 'தொலைபேசி எண் *',
    ph_phone: 'உதா: 9876543210',
    label_email: 'மின்னஞ்சல் முகவரி (விருப்பப்பட்டால்)',
    ph_email: 'உதா: ramesh@example.com',
    label_service: 'தேவைப்படும் சேவை / பரிசோதனை',
    opt_general: 'பொதுவான தகவல்கள்',
    opt_home_col: 'வீட்டிற்கே வந்து மாதிரி எடுக்க கோரிக்கை',
    opt_cbc: 'CBC / இரத்தப் பரிசோதனை',
    opt_checkup: 'முழு உடல் பரிசோதனை',
    opt_ecg_xray: 'ECG / டிஜிட்டல் எக்ஸ்-ரே',
    opt_other: 'இதர மருத்துவப் பரிசோதனைகள்',
    label_message: 'உங்கள் செய்தி அல்லது கேள்வி *',
    ph_message: 'உங்கள் தேவை அல்லது பரிசோதனை விவரங்களைக் குறிப்பிடவும்...',
    btn_send_message: 'செய்தி அனுப்புக',

    // Footer
    footer_desc: '"துல்லியமான பரிசோதனைகள். சிறந்த நல்வாழ்வு."<br>உயர்தர தானியங்கி கருவிகள் மற்றும் அர்ப்பணிப்புடன் கூடிய கவனிப்புடன் நோயாளிகளுக்கான சிறந்த ஆய்வக சேவைகளை வழங்குகிறோம்.',
    footer_exp: '25+ வருடங்களாக நம்பகமான ஆய்வகச் சேவை',
    footer_quick_links: 'முக்கிய இணைப்புகள்',
    footer_key_tests: 'முக்கிய பரிசோதனைகள்',
    footer_contact_info: 'தொடர்பு விவரங்கள்',
    footer_rights: '© 2026 ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    footer_motto: 'துல்லியமான பரிசோதனைகள். சிறந்த நல்வாழ்வு. பொன்னேரி, தமிழ்நாடு.',

    // Modals - Test Details Modal
    modal_test_title: 'மருத்துவப் பரிசோதனை விவரங்கள்',
    modal_param_tested: 'பரிசோதிக்கப்படும் அளவீடுகள்:',
    modal_prep: 'முன்னேற்பாடுகள்',
    modal_sample: 'மாதிரி வகை',
    modal_turnaround: 'அறிக்கை வழங்கும் நேரம்',
    modal_care: 'மருத்துவ வழிகாட்டுதல்',
    modal_care_desc: 'சான்றளிக்கப்பட்ட மருத்துவ வல்லுநர் சரிபார்ப்பு',
    modal_close: 'மூடுக',
    modal_book_this: 'இந்த பரிசோதனையை பதிவு செய்க',

    // Modals - Book a Test Modal
    book_modal_title: 'மருத்துவப் பரிசோதனை முன்பதிவு',
    book_modal_sub: 'பொன்னேரி மையத்திற்கு நேரில் வர விரும்புகிறீர்களா அல்லது வீட்டிற்கே வந்து மாதிரி எடுக்க விரும்புகிறீர்களா என்பதைத் தேர்ந்தெடுக்கவும்.',
    book_wa_notice: '<strong>தானியங்கி வாட்ஸ்அப் முன்பதிவு:</strong> இந்தப் படிவத்தை சமர்ப்பித்ததும் உங்கள் முன்பதிவு விவரங்கள் உடனடியாக எங்கள் ஆய்வக வாட்ஸ்அப்பிற்கு (<a href="https://wa.me/919843696625" target="_blank" rel="noopener" style="color: #1b5e20; font-weight: 700; text-decoration: underline;">+91 98436 96625</a>) உறுதிப்படுத்தலுக்காக அனுப்பப்படும்.',
    book_label_pref: 'சேவை விருப்பம் *',
    book_radio_lab_title: 'நேரடி வருகை',
    book_radio_lab_sub: 'பொன்னேரி மையம்',
    book_radio_home_title: 'வீட்டிற்கே வந்து மாதிரி எடுத்தல்',
    book_radio_home_sub: 'உங்கள் இருப்பிடத்திற்கே',
    book_label_select: 'பரிசோதனை அல்லது முழு உடல் தொகுப்பைத் தேர்ந்தெடுக்கவும் *',
    book_optgroup_tests: 'ஆய்வகப் பரிசோதனைகள்',
    book_optgroup_pkgs: 'முழு உடல் பரிசோதனை தொகுப்புகள்',
    book_label_date: 'தேவையான தேதி *',
    book_label_time: 'தேவையான நேரம் *',
    slot_fasting: 'காலை 07:00 - காலை 08:30 (வெறும் வயிறு நேரம்)',
    slot_morning: 'காலை 08:30 - காலை 10:00',
    slot_midday: 'காலை 10:00 - மதியம் 12:00',
    slot_evening: 'மாலை 04:00 - மாலை 06:00',
    slot_night: 'மாலை 06:00 - இரவு 08:00',
    book_label_patient: 'நோயாளி பெயர் *',
    book_ph_patient: 'நோயாளியின் முழு பெயர்',
    book_label_phone: 'தொலைபேசி எண் *',
    book_ph_phone: '10 இலக்க கைபேசி எண்',
    book_label_addr: 'வீட்டு முகவரி (பொன்னேரி மற்றும் சுற்றுவட்டாரத்திற்கு மட்டும்) *',
    book_ph_addr: 'வீட்டு எண், தெரு பெயர், முக்கிய அடையாளம், பொன்னேரி',
    book_btn_submit: 'உறுதிசெய்து வாட்ஸ்அப்பில் அனுப்புக',

    // Modals - Confirmation Dialog
    conf_title: 'முன்பதிவு வாட்ஸ்அப்பில் அனுப்பப்பட்டது!',
    conf_sub: 'நன்றி, <strong>{name}</strong>. உங்கள் முன்பதிவு டோக்கன் உருவாக்கப்பட்டு ஆய்வக வாட்ஸ்அப்பிற்குத் தயார் செய்யப்பட்டுள்ளது.',
    conf_token: 'முன்பதிவு டோக்கன்:',
    conf_patient: 'நோயாளி பெயர்:',
    conf_phone: 'தொலைபேசி எண்:',
    conf_test: 'தேர்ந்தெடுத்த பரிசோதனை:',
    conf_datetime: 'தேதி & நேரம்:',
    conf_service: 'சேவை விருப்பம்:',
    conf_address: 'முகவரி:',
    conf_btn_wa: 'வாட்ஸ்அப்பில் திறந்து அனுப்பவும் (+91 98436 96625)',
    conf_btn_wa2: 'மாற்று எண்ணிற்கு வாட்ஸ்அப்பில் அனுப்பவும் (+91 87783 17824)',
    conf_call1: 'அழைக்க: 98436 96625',
    conf_call2: 'அழைக்க: 87783 17824',
    conf_done: 'முடிந்தது',

    // Search Overlay
    search_ph: 'பரிசோதனை பெயரைத் தட்டச்சு செய்யவும் (உதா: CBC, சர்க்கரை, ECG)...',
    search_default_hint: 'எந்தவொரு மருத்துவப் பரிசோதனை அல்லது தொகுப்பையும் தேட தட்டச்சு செய்யவும்...',
    search_no_match: '"<strong>{query}</strong>" என்ற பெயரில் சோதனைகள் இல்லை. சிறப்புப் பரிசோதனைகளுக்கு ஆய்வகத்தைத் தொடர்பு கொள்ளவும்.',
    search_btn_view: 'காண்க',

    // Floating WhatsApp Button
    floating_wa_label: 'வாட்ஸ்அப் முன்பதிவு',
    floating_wa_title: 'வாட்ஸ்அப்பில் தொடர்பு கொள்ளவும் (+91 98436 96625)'
  }
};

// Full Medical Details in Tamil for the Dynamic Test Specifications Modal
const testsData_ta = {
  'cbc': {
    title: 'CBC – முழு இரத்த அணுக்கள் பரிசோதனை',
    category: 'இரத்தம் & நோயியல்',
    image: 'assets/images/tests/test-cbc.jpg',
    desc: 'இரத்த சோகை, நோய்த்தொற்று, உடல் வீக்கம், இரத்த உறைதல் கோளாறுகள் மற்றும் இரத்தப் புற்றுநோய் உள்ளிட்ட பல்வேறு உடல்நலக் குறைபாடுகளைத் துல்லியமாக அறியும் முதன்மைப் பரிசோதனை.',
    parameters: ['ஹீமோகுளோபின் (Hb)', 'மொத்த RBC எண்ணிக்கை', 'மொத்த வெள்ளை இரத்த அணுக்கள் (WBC)', 'வேறுபட்ட அணுக்கள் (நியூட்ரோபில், லிம்போசைட், மோனோசைட், ஈசினோபில், பாசோபில்)', 'பிளேட்லெட் எண்ணிக்கை', 'PCV / ஹெமடோக்ரிட்', 'MCV, MCH, MCHC, RDW'],
    preparation: 'சிறப்பு உணவுக் கட்டுப்பாடு தேவையில்லை. வழக்கம்போல் நீர் அருந்தலாம்.',
    sampleType: '2 மிலி முழு இரத்தம் (EDTA குப்பி)',
    turnaround: '4 முதல் 6 மணி நேரம் (அன்றே அறிக்கை)',
    guidelines: 'வழக்கமான உடல்நலப் பரிசோதனை மற்றும் அறுவை சிகிச்சைக்கு முந்தைய மதிப்பீட்டிற்கு மிகவும் அவசியம்.'
  },
  'kft': {
    title: 'KFT – சிறுநீரக செயல்பாட்டு பரிசோதனை (Renal Profile)',
    category: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    image: 'assets/images/tests/test-kft.jpg',
    desc: 'சிறுநீரகங்கள் இரத்தத்தில் உள்ள கழிவுகளை எந்த அளவுக்குச் சரியாக வடிகட்டுகின்றன மற்றும் உடலின் தாது உப்புகளைச் சமநிலைப்படுத்துகின்றன என்பதை மதிப்பிடுகிறது.',
    parameters: ['இரத்த யூரியா & BUN', 'சீரம் கிரியேட்டினின்', 'யூரிக் அமிலம்', 'சீரம் எலக்ட்ரோலைட்டுகள் (சோடியம், பொட்டாசியம், குளோரைடு)', 'மதிப்பிடப்பட்ட GFR (eGFR)', 'யூரியா / கிரியேட்டினின் விகிதம்'],
    preparation: 'இரவு முழுவதும் 8 முதல் 10 மணி நேரம் வெறும் வயிற்றில் இருப்பது பரிந்துரைக்கப்படுகிறது.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: 'அன்றே மாலை அறிக்கை',
    guidelines: 'உயர் இரத்த அழுத்தம், சர்க்கரை நோய், உடல் வீக்கம் உள்ளவர்களுக்கும் மருந்து உண்பவர்களுக்கும் அவசியம்.'
  },
  'lft': {
    title: 'LFT – கல்லீரல் செயல்பாட்டு பரிசோதனை (Hepatic Profile)',
    category: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    image: 'assets/images/tests/test-lft.jpg',
    desc: 'கல்லீரலால் உற்பத்தி செய்யப்படும் என்சைம்கள், புரதங்கள் மற்றும் பிலிரூபின் அளவுகளைக் கணக்கிட்டு கல்லீரலின் இயக்கத்தை விரிவாக அறியும் பரிசோதனை.',
    parameters: ['மொத்த & நேரடி பிலிரூபின்', 'SGOT / AST', 'SGPT / ALT', 'ஆல்கலைன் பாஸ்பேடேஸ் (ALP)', 'மொத்த புரதம் & அல்புமின்/குளோபுலின் விகிதம்', 'காமா GT (GGT)'],
    preparation: '10 முதல் 12 மணி நேரம் வெறும் வயிறு தேவை. 48 மணி நேரத்திற்கு முன் மது அருந்தக் கூடாது.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: 'அன்றே மாலை அறிக்கை',
    guidelines: 'மஞ்சள் காமாலை, கொழுப்பு கல்லீரல் (Fatty Liver) மற்றும் கல்லீரல் பாதிப்புகளைக் கண்டறிய உதவும்.'
  },
  'lipid': {
    title: 'Lipid Profile – கொலஸ்ட்ரால் / கொழுப்பு பரிசோதனை',
    category: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    image: 'assets/images/tests/test-lipid.jpg',
    desc: 'நல்ல மற்றும் கெட்ட கொழுப்புகள் மற்றும் ட்ரைகிளிசரைடு அளவுகளை அளவிடுவதன் மூலம் இதய இரத்தக் குழாய் ஆரோக்கியத்தை விரிவாக மதிப்பிடுகிறது.',
    parameters: ['மொத்த சீரம் கொலஸ்ட்ரால்', 'HDL (நல்ல கொலஸ்ட்ரால்)', 'LDL (கெட்ட கொலஸ்ட்ரால்)', 'VLDL கொலஸ்ட்ரால்', 'சீரம் ட்ரைகிளிசரைடுகள்', 'TC/HDL விகிதம் & இதய அபாயக் காரணி'],
    preparation: 'கட்டாயம் 10 முதல் 12 மணி நேரம் இரவு வெறும் வயிறு தேவை. தண்ணீர் மட்டும் குடிக்கலாம்.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: 'அன்றே அறிக்கை (6 மணி நேரத்திற்குள்)',
    guidelines: 'மாரடைப்பு, இரத்தக் குழாய் அடைப்பு மற்றும் பக்கவாதம் ஏற்படும் அபாயத்தை முன்கூட்டியே எச்சரிக்கும்.'
  },
  'sugar': {
    title: 'இரத்த சர்க்கரை அளவு பரிசோதனை (FBS, PPBS & HbA1c)',
    category: 'இரத்தம் & நோயியல்',
    image: 'assets/images/tests/test-sugar.jpg',
    desc: 'சர்க்கரை நோய் கண்டறிதல், சிகிச்சை மற்றும் கடந்த 3 மாத கால இரத்த சர்க்கரை கட்டுப்பாட்டைத் துல்லியமாக அறியும் கோல்ட் ஸ்டாண்டர்ட் பரிசோதனை.',
    parameters: ['வெறும் வயிற்று சர்க்கரை (FBS)', 'உணவுக்குப் பின் 2 மணி நேர சர்க்கரை (PPBS)', 'ரேண்டம் சர்க்கரை (RBS)', 'HbA1c (3 மாத சராசரி சர்க்கரை அளவு)', 'சராசரி இரத்த குளுக்கோஸ் மதிப்பீடு'],
    preparation: 'FBS: 8-10 மணி நேரம் வெறும் வயிறு. PPBS: காலை உணவு முடிந்து சரியாக 2 மணி நேரத்தில் மாதிரி கொடுக்க வேண்டும்.',
    sampleType: 'புளோரைடு / EDTA இரத்த குப்பிகள்',
    turnaround: '2 முதல் 3 மணி நேரம் (விரைவு அறிக்கை)',
    guidelines: 'ப்ரீ-டயாபடீஸ் மற்றும் டைப் 1, டைப் 2 சர்க்கரை நோயை முறையாகக் கண்காணிக்க அவசியமானது.'
  },
  'thyroid': {
    title: 'தைராய்டு பரிசோதனை (T3, T4, TSH)',
    category: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    image: 'assets/images/tests/test-thyroid.jpg',
    desc: 'உடலின் வளர்சிதை மாற்றம், வெப்பநிலை, ஆற்றல் மற்றும் இதயத் துடிப்பைக் கட்டுப்படுத்தும் முக்கிய நாளமில்லா ஹார்மோன்களை அளவிடுகிறது.',
    parameters: ['மொத்த ட்ரையோடோதைரோனைன் (T3)', 'மொத்த தைராக்சின் (T4)', 'அதிஉணர்திறன் TSH (தைராய்டு தூண்டும் ஹார்மோன்)', 'Free T3 / Free T4 (மருத்துவர் பரிந்துரைப்படி)'],
    preparation: 'காலை நேர மாதிரி மிகவும் சிறந்தது. தைராய்டு மாத்திரைகளை இரத்த மாதிரி கொடுத்த பின்னரே உட்கொள்ள வேண்டும்.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: 'அன்றே மாலை அறிக்கை',
    guidelines: 'ஹைப்போதைராய்டிசம், ஹைப்பர்தைராய்டிசம், காரணமற்ற எடை மாற்றம் மற்றும் உடல் சோர்வைக் கண்டறியும்.'
  },
  'urine-stool': {
    title: 'சிறுநீர் & மலம் வழக்கமான மற்றும் நுண்ணோக்கி பரிசோதனை',
    category: 'இரத்தம் & நோயியல்',
    image: 'assets/images/tests/test-urine-stool.jpg',
    desc: 'சிறுநீரகக் கோளாறுகள், சிறுநீர்ப் பாதை நோய்த்தொற்றுகள் (UTI) மற்றும் இரைப்பை குடல் ஆரோக்கியத்தை அறியும் நுண்ணோக்கி ஆய்வு.',
    parameters: ['இயற்பியல் ஆய்வு (நிறம், தோற்றம், அடர்த்தி)', 'வேதியியல் ஆய்வு (pH, புரதம், குளுக்கோஸ், கீட்டோன்கள், இரத்தம்)', 'நுண்ணோக்கி ஆய்வு (சீழ் செல்கள், RBC, எபிதீலியல் செல்கள், பாக்டீரியா)', 'மலம்: மறைமுக இரத்தம், ஒட்டுண்ணிகள், முட்டைகள்'],
    preparation: 'காலை முதல் சிறுநீரை சுத்தமான கன்டெய்னரில் சேகரிக்க வேண்டும். மாதிரி குப்பி ஆய்வகத்தில் வழங்கப்படும்.',
    sampleType: 'சுத்தமான மலட்டு சிறுநீர் / மலம் குப்பி',
    turnaround: '3 முதல் 5 மணி நேரம்',
    guidelines: 'அறிகுறியற்ற சிறுநீர்த் தொற்று, சிறுநீரகக் கற்கள் மற்றும் குடல் புழுக்களைக் கண்டறிய உதவுகிறது.'
  },
  'ecg': {
    title: 'ECG – 12-Lead இதய மின் துடிப்புப் பரிசோதனை',
    category: 'இதயம் & ஸ்கேன்/எக்ஸ்-ரே',
    image: 'assets/images/tests/test-ecg.jpg',
    desc: 'இதயத் தசைகளின் மின் சமிக்ஞைகள் மற்றும் இதயத் துடிப்பின் சீரான இயக்கத்தைப் பதிவு செய்யும் பாதுகாப்பான பரிசோதனை.',
    parameters: ['இதயத் துடிப்பு & ரிதம் பகுப்பாய்வு', 'P அலை, PR இடைவெளி, QRS காம்ப்ளக்ஸ்', 'ST பிரிவு & T அலை மதிப்பீடு', 'இரத்த ஓட்டக் குறைவு & மாரடைப்பு மாற்றங்கள்', 'துடிப்பு ஒழுங்கின்மை (Arrhythmia) கண்டறிதல்'],
    preparation: 'வசதியான இருபகுதி ஆடைகளை அணியவும். பரிசோதனைக்கு 10 நிமிடங்களுக்கு முன் அமைதியாக ஓய்வெடுக்கவும்.',
    sampleType: 'மையத்தில் நேரடி மருத்துவப் பரிசோதனை (10 நிமிடம்)',
    turnaround: 'உடனடி அறிக்கை & மருத்துவர் சரிபார்ப்பு',
    guidelines: 'நெஞ்சு வலி, படபடப்பு, மூச்சுத் திணறல் மற்றும் மயக்கம் ஏற்படும் போது உடனடியாகச் செய்ய வேண்டிய சோதனை.'
  },
  'xray': {
    title: 'டிஜிட்டல் எக்ஸ்-ரே (High-Resolution Radiography)',
    category: 'இதயம் & ஸ்கேன்/எக்ஸ்-ரே',
    image: 'assets/images/tests/test-xray.jpg',
    desc: 'குறைந்த கதிர்வீச்சு டிஜிட்டல் டிடெக்டர்களைப் பயன்படுத்தி எலும்பு கட்டமைப்பு, நுரையீரல் மற்றும் மூட்டுகளைத் தெளிவாகப் படம்பிடிக்கும் முறை.',
    parameters: ['மார்பு எக்ஸ்-ரே (Chest PA / AP Views)', 'எலும்பு முறிவு பரிசோதனை (Fracture Screen)', 'முதுகெலும்பு எக்ஸ்-ரே (கழுத்து, முதுகு, இடுப்பு)', 'மூட்டு & தேய்மான மதிப்பீடு', 'வயிற்றுப் பகுதி எக்ஸ்-ரே'],
    preparation: 'பரிசோதனை செய்யப்படும் பகுதியில் உள்ள உலோக நகைகள் அல்லது ஜிப் உள்ள ஆடைகளை அகற்றவும்.',
    sampleType: 'மையத்தில் நேரடி கதிரியக்கப் பரிசோதனை (5-10 நிமிடம்)',
    turnaround: 'பிலிம் மற்றும் அறிக்கை 30-45 நிமிடங்களில்',
    guidelines: 'குறைந்த கதிர்வீச்சுடன் உடனடி துல்லியமான படம் மற்றும் சான்றிதழ் பெற்ற ரேடியாலஜிஸ்ட் சரிபார்ப்பு.'
  },
  'hiv': {
    title: 'HIV 1 & 2 ஆன்டிபாடி / ஆன்டிஜென் ஸ்கிரீன்',
    category: 'சிறப்பு பரிசோதனைகள்',
    image: 'assets/images/tests/test-hiv.jpg',
    desc: 'முழுமையான ரகசியத்தன்மையுடன் HIV ஆன்டிபாடிகள் மற்றும் வைரஸ் ஆன்டிஜென்களைக் கண்டறியும் உயர் உணர்திறன் கொண்ட ஆய்வு.',
    parameters: ['HIV-1 ஆன்டிபாடிகள் கண்டறிதல்', 'HIV-2 ஆன்டிபாடிகள் கண்டறிதல்', 'P24 ஆன்டிஜென் கண்டறிதல் (4th Gen Duo Immunoassay)', '100% நோயாளி ரகசியப் பாதுகாப்பு உறுதி'],
    preparation: 'உணவுக் கட்டுப்பாடு தேவையில்லை. பரிசோதனைக்கு முந்தைய மற்றும் பிந்தைய ரகசிய ஆலோசனை உண்டு.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: '4 முதல் 6 மணி நேரம் (பாதுகாப்பான ரகசிய அறிக்கை)',
    guidelines: 'WHO & NACO ஆய்வக நெறிமுறைகளின்படி முழுமையான தனியுரிமையுடன் செய்யப்படுகிறது.'
  },
  'pregnancy': {
    title: 'கர்ப்பப் பரிசோதனை (Beta-hCG சிறுநீர் & இரத்தம்)',
    category: 'சிறப்பு பரிசோதனைகள்',
    image: 'assets/images/tests/test-pregnancy.jpg',
    desc: 'சிறுநீர் அல்லது இரத்தத்தில் மனித கோரியானிக் கோனாடோட்ரோபின் (hCG) ஹார்மோனைக் கண்டறியும் நம்பகமான சோதனை.',
    parameters: ['சிறுநீர் Beta-hCG (உடனடி உயர் உணர்திறன் சோதனை)', 'சீரம் Beta-hCG (துல்லியமான இரத்த அளவு ஆய்வு)', 'கருவுற்ற கால அளவு மதிப்பீடு', 'ஆரம்ப கர்ப்ப உறுதிப்படுத்தல்'],
    preparation: 'சிறுநீருக்கு: காலை முதல் சிறுநீர் சிறந்தது. இரத்தத்திற்கு: வெறும் வயிறு தேவையில்லை.',
    sampleType: 'மலட்டு காலை சிறுநீர் அல்லது 2 மிலி இரத்த சீரம்',
    turnaround: 'சிறுநீர்: 30 நிமிடம் | இரத்தம்: 3 மணி நேரம்',
    guidelines: 'ஆரம்பகால கருவுறுதலை உறுதிப்படுத்தவும் ஆரோக்கியமான ஹார்மோன் இரட்டிப்பை கண்காணிக்கவும் உதவுகிறது.'
  }
};

/**
 * i18n Controller Function
 */
let currentLang = 'en';

function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  try {
    localStorage.setItem('sdcl_lang', lang);
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }

  // Update HTML document language attribute
  document.documentElement.lang = lang;
  if (lang === 'ta') {
    document.body.classList.add('lang-tamil');
    document.title = 'ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி | மருத்துவ பரிசோதனை மையம், பொன்னேரி';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'ஸ்ரீ துர்கா கிளினிக்கல் லேபரேட்டரி, பொன்னேரி, தமிழ்நாடு. 25+ வருட அனுபவத்துடன் நம்பகமான மருத்துவப் பரிசோதனைகள், இரத்தப் பரிசோதனை, ECG, டிஜிட்டல் எக்ஸ்-ரே & முழு உடல் பரிசோதனை.');
  } else {
    document.body.classList.remove('lang-tamil');
    document.title = 'Sri Durgaa Clinical Laboratory | Diagnostic Centre in Ponneri';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Sri Durgaa Clinical Laboratory in Ponneri, Tamil Nadu. 25+ years of experience providing reliable diagnostic testing, pathology, blood tests, ECG, Digital X-Ray & health checkups.');
  }

  const dict = translations[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update input/textarea placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update title attributes with data-i18n-title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
    }
  });

  // Update aria-label attributes with data-i18n-aria
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key]) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  // Update state of all switcher buttons
  document.querySelectorAll('.lang-btn, .top-lang-btn, .mobile-lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Update dynamic test dropdown in Booking modal
  updateBookingDropdownLanguage(lang);

  // Update service dropdown in Contact form
  updateContactServiceDropdown(lang);

  // Update time slot dropdown in Booking modal
  updateTimeSlotDropdown(lang);
}

function updateBookingDropdownLanguage(lang) {
  const select = document.getElementById('bookingTestSelect');
  if (!select) return;

  const currentVal = select.value;

  const tests_en = [
    { val: 'CBC – Complete Blood Count', text: 'CBC – Complete Blood Count' },
    { val: 'KFT – Kidney Function Test', text: 'KFT – Kidney Function Test' },
    { val: 'LFT – Liver Function Test', text: 'LFT – Liver Function Test' },
    { val: 'Lipid Profile', text: 'Lipid Profile' },
    { val: 'Blood Sugar Test', text: 'Blood Sugar Test' },
    { val: 'Thyroid Profile', text: 'Thyroid Profile' },
    { val: 'Urine & Stool Test', text: 'Urine & Stool Test' },
    { val: 'ECG', text: 'ECG' },
    { val: 'Digital X-Ray', text: 'Digital X-Ray' },
    { val: 'HIV Test', text: 'HIV Test' },
    { val: 'Pregnancy Test', text: 'Pregnancy Test' }
  ];

  const tests_ta = [
    { val: 'CBC – Complete Blood Count', text: 'CBC – முழு இரத்த அணுக்கள் பரிசோதனை' },
    { val: 'KFT – Kidney Function Test', text: 'KFT – சிறுநீரக செயல்பாட்டு பரிசோதனை' },
    { val: 'LFT – Liver Function Test', text: 'LFT – கல்லீரல் செயல்பாட்டு பரிசோதனை' },
    { val: 'Lipid Profile', text: 'Lipid Profile – கொலஸ்ட்ரால் பரிசோதனை' },
    { val: 'Blood Sugar Test', text: 'இரத்த சர்க்கரை அளவு பரிசோதனை' },
    { val: 'Thyroid Profile', text: 'தைராய்டு பரிசோதனை (T3, T4, TSH)' },
    { val: 'Urine & Stool Test', text: 'சிறுநீர் & மலம் வழக்கமான பரிசோதனை' },
    { val: 'ECG', text: 'ECG – இதய மின் துடிப்புப் பரிசோதனை' },
    { val: 'Digital X-Ray', text: 'டிஜிட்டல் எக்ஸ்-ரே (Digital X-Ray)' },
    { val: 'HIV Test', text: 'HIV 1 & 2 ஆன்டிபாடி பரிசோதனை' },
    { val: 'Pregnancy Test', text: 'கர்ப்பப் பரிசோதனை (Beta-hCG)' }
  ];

  const pkgs_en = [
    { val: 'Basic Health Checkup', text: 'Basic Health Checkup' },
    { val: 'Complete Health Checkup', text: 'Complete Health Checkup (Recommended)' },
    { val: 'Advanced Health Checkup', text: 'Advanced Health Checkup' }
  ];

  const pkgs_ta = [
    { val: 'Basic Health Checkup', text: 'அடிப்படை உடல் பரிசோதனை' },
    { val: 'Complete Health Checkup', text: 'முழு உடல் நல்வாழ்வு பரிசோதனை (பரிந்துரைக்கப்படுவது)' },
    { val: 'Advanced Health Checkup', text: 'மேம்பட்ட முழு உடல் பரிசோதனை' }
  ];

  const optTests = lang === 'ta' ? tests_ta : tests_en;
  const optPkgs = lang === 'ta' ? pkgs_ta : pkgs_en;
  const group1Label = lang === 'ta' ? 'ஆய்வகப் பரிசோதனைகள்' : 'Diagnostic Tests';
  const group2Label = lang === 'ta' ? 'முழு உடல் பரிசோதனை தொகுப்புகள்' : 'Health Checkup Packages';

  select.innerHTML = `
    <optgroup label="${group1Label}">
      ${optTests.map(t => `<option value="${t.val}">${t.text}</option>`).join('')}
    </optgroup>
    <optgroup label="${group2Label}">
      ${optPkgs.map(p => `<option value="${p.val}">${p.text}</option>`).join('')}
    </optgroup>
  `;

  if (currentVal) {
    select.value = currentVal;
  }
}

function updateContactServiceDropdown(lang) {
  const select = document.getElementById('contactService');
  if (!select) return;

  const currentVal = select.value;

  const opts_en = [
    { val: 'General Inquiry', text: 'General Inquiry' },
    { val: 'Home Sample Collection', text: 'Home Sample Collection Request' },
    { val: 'CBC / Blood Test', text: 'CBC / Blood Test' },
    { val: 'Complete Health Checkup', text: 'Complete Health Checkup' },
    { val: 'ECG / Digital X-Ray', text: 'ECG / Digital X-Ray' },
    { val: 'Other Diagnostic Testing', text: 'Other Diagnostic Testing' }
  ];

  const opts_ta = [
    { val: 'General Inquiry', text: 'பொதுவான தகவல்கள்' },
    { val: 'Home Sample Collection', text: 'வீட்டிற்கே வந்து மாதிரி எடுக்க கோரிக்கை' },
    { val: 'CBC / Blood Test', text: 'CBC / இரத்தப் பரிசோதனை' },
    { val: 'Complete Health Checkup', text: 'முழு உடல் பரிசோதனை' },
    { val: 'ECG / Digital X-Ray', text: 'ECG / டிஜிட்டல் எக்ஸ்-ரே' },
    { val: 'Other Diagnostic Testing', text: 'இதர மருத்துவப் பரிசோதனைகள்' }
  ];

  const opts = lang === 'ta' ? opts_ta : opts_en;
  select.innerHTML = opts.map(o => `<option value="${o.val}">${o.text}</option>`).join('');
  if (currentVal) select.value = currentVal;
}

function updateTimeSlotDropdown(lang) {
  const select = document.getElementById('bookingTime');
  if (!select) return;

  const currentVal = select.value;

  const slots_en = [
    { val: '07:00 AM - 08:30 AM (Fasting Slot)', text: '07:00 AM - 08:30 AM (Fasting Slot)' },
    { val: '08:30 AM - 10:00 AM', text: '08:30 AM - 10:00 AM' },
    { val: '10:00 AM - 12:00 PM', text: '10:00 AM - 12:00 PM' },
    { val: '04:00 PM - 06:00 PM', text: '04:00 PM - 06:00 PM' },
    { val: '06:00 PM - 08:00 PM', text: '06:00 PM - 08:00 PM' }
  ];

  const slots_ta = [
    { val: '07:00 AM - 08:30 AM (Fasting Slot)', text: 'காலை 07:00 - காலை 08:30 (வெறும் வயிறு நேரம்)' },
    { val: '08:30 AM - 10:00 AM', text: 'காலை 08:30 - காலை 10:00' },
    { val: '10:00 AM - 12:00 PM', text: 'காலை 10:00 - மதியம் 12:00' },
    { val: '04:00 PM - 06:00 PM', text: 'மாலை 04:00 - மாலை 06:00' },
    { val: '06:00 PM - 08:00 PM', text: 'மாலை 06:00 - இரவு 08:00' }
  ];

  const slots = lang === 'ta' ? slots_ta : slots_en;
  select.innerHTML = slots.map(s => `<option value="${s.val}">${s.text}</option>`).join('');
  if (currentVal) select.value = currentVal;
}

// Initialise language immediately on load or script execution
function initI18n() {
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('sdcl_lang') || 'en';
  } catch (e) {
    savedLang = 'en';
  }
  applyLanguage(savedLang);

  // Attach click listeners to language switchers
  document.querySelectorAll('.lang-btn, .top-lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang);
      }
    });
  });
}

// Auto-run once DOM is ready or if already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
