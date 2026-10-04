export const testsData = {
  cbc: {
    id: 'cbc',
    title: 'CBC – Complete Blood Count',
    category: 'Blood & Pathology',
    image: '/assets/images/tests/test-cbc-mindray.png',
    desc: 'Evaluates overall health and detects a wide variety of disorders, including anemia, infection, inflammation, bleeding disorders, and leukemia.',
    parameters: [
      'Hemoglobin (Hb)',
      'Total RBC Count',
      'Total WBC (Leukocyte) Count',
      'Differential Count (Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils)',
      'Platelet Count',
      'PCV / Hematocrit',
      'MCV, MCH, MCHC, RDW'
    ],
    preparation: 'No special fasting required. Stay normally hydrated.',
    sampleType: '2 ml Whole Blood in EDTA tube',
    turnaround: '4 to 6 Hours (Same Day Delivery)',
    guidelines: 'Crucial baseline screening recommended as part of routine health evaluation or pre-operative assessments.',
    meta1: 'Turnaround: 4-6 Hours',
    meta2: 'Fasting: No',
    iconType: 'blood'
  },
  kft: {
    id: 'kft',
    title: 'KFT – Kidney Function Test (Renal Profile)',
    category: 'Organ Profiles',
    image: '/assets/images/tests/test-kft-bench.png',
    desc: 'Assesses how effectively your kidneys are filtering metabolic waste and balancing fluids and minerals.',
    parameters: [
      'Blood Urea & BUN',
      'Serum Creatinine',
      'Uric Acid',
      'Serum Electrolytes (Sodium, Potassium, Chloride)',
      'Estimated GFR (eGFR)',
      'Blood Urea Nitrogen / Creatinine Ratio'
    ],
    preparation: '8 to 10 hours overnight fasting recommended. Avoid heavy meat intake 24h prior.',
    sampleType: '3 ml Venous Blood (Clot Activator / Serum)',
    turnaround: 'Same Day Evening',
    guidelines: 'Essential for patients with hypertension, diabetes, swelling, or long-term medication monitoring.',
    meta1: 'Same Day Report',
    meta2: 'Fasting: 8-10 Hrs',
    iconType: 'organ'
  },
  lft: {
    id: 'lft',
    title: 'LFT – Liver Function Test (Hepatic Profile)',
    category: 'Organ Profiles',
    image: '/assets/images/tests/test-lft-erba.png',
    desc: 'Comprehensive diagnostic panel measuring enzymes, proteins, and bilirubin produced or cleared by the liver.',
    parameters: [
      'Total, Direct & Indirect Bilirubin',
      'SGOT / AST (Aspartate Aminotransferase)',
      'SGPT / ALT (Alanine Aminotransferase)',
      'Alkaline Phosphatase (ALP)',
      'Total Protein & Albumin / Globulin (A/G) Ratio',
      'Gamma GT (GGT)'
    ],
    preparation: '10 to 12 hours fasting required. Avoid alcohol for at least 48 hours prior.',
    sampleType: '3 ml Venous Blood (Plain / Gel Separator)',
    turnaround: 'Same Day Evening',
    guidelines: 'Diagnoses liver disorders, fatty liver, jaundice, and monitors medication effects.',
    meta1: 'Same Day Report',
    meta2: 'Fasting: 10-12 Hrs',
    iconType: 'liver'
  },
  lipid: {
    id: 'lipid',
    title: 'Lipid Profile (Cholesterol Assessment)',
    category: 'Organ Profiles',
    image: '/assets/images/tests/test-lipid-tubes.png',
    desc: 'Detailed assessment of cardiovascular health by quantifying good and bad cholesterol and triglyceride levels.',
    parameters: [
      'Total Serum Cholesterol',
      'HDL (High-Density Lipoprotein - Good Cholesterol)',
      'LDL (Low-Density Lipoprotein - Bad Cholesterol)',
      'VLDL (Very Low-Density Lipoprotein)',
      'Serum Triglycerides',
      'TC/HDL Ratio & LDL/HDL Risk Ratios'
    ],
    preparation: 'Strict 10 to 12 hours overnight fasting. Only plain water is permitted.',
    sampleType: '3 ml Venous Blood (Serum)',
    turnaround: 'Same Day (Within 6 Hours)',
    guidelines: 'Primary risk predictor for atherosclerosis, coronary artery disease, stroke, and metabolic syndrome.',
    meta1: 'Same Day Report',
    meta2: 'Fasting: 12 Hrs',
    iconType: 'heart'
  },
  sugar: {
    id: 'sugar',
    title: 'Blood Sugar Test (Fasting, PP & HbA1c)',
    category: 'Blood & Pathology',
    image: '/assets/images/tests/test-sugar-analyzer.png',
    desc: 'Accurate quantitative evaluation of glucose levels for diabetes screening, diagnosis, and long-term glycemic control.',
    parameters: [
      'Fasting Blood Sugar (FBS)',
      'Postprandial Blood Sugar (PPBS - exactly 2h after meal)',
      'Random Blood Sugar (RBS)',
      'HbA1c (Glycated Hemoglobin - 3-Month Average)',
      'Average Estimated Blood Glucose'
    ],
    preparation: 'For FBS: 8-10 hours fasting. For PPBS: Blood sample drawn 2 hours after breakfast.',
    sampleType: 'Fluoride / EDTA Blood Vials',
    turnaround: '2 to 3 Hours (Rapid Reporting)',
    guidelines: 'Gold standard for detecting pre-diabetes, Type 1 & Type 2 Diabetes, and gestational diabetes.',
    meta1: 'Turnaround: 2-3 Hours',
    meta2: 'Fasting & Post-Meal',
    iconType: 'sugar'
  },
  thyroid: {
    id: 'thyroid',
    title: 'Thyroid Profile (T3, T4, TSH)',
    category: 'Organ Profiles',
    image: '/assets/images/tests/test-thyroid-pipettes.png',
    desc: 'Quantifies crucial endocrine hormones that regulate metabolism, body temperature, energy, and cardiovascular rate.',
    parameters: [
      'Total Triiodothyronine (T3)',
      'Total Thyroxine (T4)',
      'Ultrasensitive Thyroid Stimulating Hormone (TSH)',
      'Free T3 / Free T4 (Upon clinical requisition)'
    ],
    preparation: 'Morning sample strongly recommended. Take thyroid medications after blood collection.',
    sampleType: '3 ml Venous Blood (Serum)',
    turnaround: 'Same Day Evening',
    guidelines: 'Diagnoses Hypothyroidism, Hyperthyroidism, goitre, unexplained weight fluctuations, and chronic fatigue.',
    meta1: 'Same Day Evening',
    meta2: 'Morning Fasting Pref.',
    iconType: 'thyroid'
  },
  'urine-stool': {
    id: 'urine-stool',
    title: 'Urine & Stool Routine & Microscopic Examination',
    category: 'Blood & Pathology',
    image: '/assets/images/tests/test-urine-bench.png',
    desc: 'Microscopic and biochemical diagnostic screening for renal conditions, urinary tract infections (UTI), and gastrointestinal health.',
    parameters: [
      'Physical (Color, Appearance, Specific Gravity)',
      'Chemical (pH, Protein/Albumin, Glucose, Ketones, Bilirubin, Blood)',
      'Microscopic (Pus Cells, RBCs, Epithelial Cells, Casts, Crystals, Bacteria)',
      'Stool: Occult Blood, Ova, Cysts, Parasites'
    ],
    preparation: 'Clean-catch midstream morning urine sample in sterile container. Clean container provided.',
    sampleType: 'Fresh sterile Urine / Stool container',
    turnaround: '3 to 5 Hours',
    guidelines: 'Detects silent urinary tract infections, kidney stones, renal parenchymal disease, and intestinal parasites.',
    meta1: 'Turnaround: 3-5 Hours',
    meta2: 'Sterile Morning Sample',
    iconType: 'flask'
  },
  ecg: {
    id: 'ecg',
    title: 'ECG – 12-Lead Electrocardiogram',
    category: 'Imaging & Cardiac',
    image: '/assets/images/tests/test-ecg-machine.png',
    desc: 'Non-invasive standard cardiac recording that registers electrical impulse patterns and heart rhythm dynamics.',
    parameters: [
      'Heart Rate & Rhythm Analysis',
      'P Wave, PR Interval, QRS Complex',
      'ST Segment & T Wave Evaluation',
      'Ischemic & Infarction Changes',
      'Arrhythmia & Conduction Block Screen'
    ],
    preparation: 'Wear comfortable two-piece clothing. Relax 10 minutes prior to recording. No lotions on chest.',
    sampleType: 'On-site clinical procedure (approx. 10 minutes)',
    turnaround: 'Instant Report with Cardiologist Verification',
    guidelines: 'Vital diagnostic screening for chest discomfort, palpitations, breathlessness, dizziness, and pre-operative evaluation.',
    meta1: 'Instant Report',
    meta2: 'Fasting: No',
    iconType: 'ecg'
  },
  xray: {
    id: 'xray',
    title: 'Digital X-Ray (High-Resolution Radiography)',
    category: 'Imaging & Cardiac',
    image: '/assets/images/tests/test-xray-focused.png',
    desc: 'Low-dose digital radiography utilizing advanced digital detectors to visualize bone architecture, lungs, and joints.',
    parameters: [
      'Chest X-Ray (PA / AP Views)',
      'Extremities & Bones (Fracture Screening)',
      'Spine Radiography (Cervical, Thoracic, Lumbar)',
      'Joint & Arthritic Evaluations',
      'Abdominal Scout Radiography'
    ],
    preparation: 'Remove jewelry, metallic items, or clothing with metal zippers around the examination area.',
    sampleType: 'On-site radiological procedure (5-10 minutes)',
    turnaround: 'Film & Digital Report in 30-45 Minutes',
    guidelines: 'Instant clear visualization with minimal radiation dose and certified radiologist interpretation.',
    meta1: '30-45 Mins Report',
    meta2: 'Low Radiation Dose',
    iconType: 'xray'
  },
  hiv: {
    id: 'hiv',
    title: 'HIV 1 & 2 Antibody / Antigen Screen',
    category: 'Specialized Screenings',
    image: '/assets/images/tests/test-hiv-station.png',
    desc: 'Strictly confidential, high-sensitivity immunoassay for detecting HIV antibodies and viral antigens.',
    parameters: [
      'HIV-1 Antibodies Detection',
      'HIV-2 Antibodies Detection',
      'P24 Antigen Detection (4th Gen Duo Immunoassay)',
      'Strict Patient Confidentiality Safeguard'
    ],
    preparation: 'No fasting required. Pre-test and post-test confidential counseling available.',
    sampleType: '3 ml Venous Blood (Plain / Gel Separator)',
    turnaround: '4 to 6 Hours (Secure confidential report)',
    guidelines: 'Adheres to WHO & NACO laboratory testing protocols with guaranteed patient privacy.',
    meta1: 'Turnaround: 4-6 Hours',
    meta2: '100% Confidential',
    iconType: 'shield'
  },
  pregnancy: {
    id: 'pregnancy',
    title: 'Pregnancy Test (Qualitative & Quantitative Beta-hCG)',
    category: 'Specialized Screenings',
    image: '/assets/images/tests/test-pregnancy-station.png',
    desc: 'Highly sensitive diagnostic test identifying Human Chorionic Gonadotropin (hCG) hormone in urine or serum.',
    parameters: [
      'Urine Beta-hCG (Rapid High-Sensitivity Screen)',
      'Serum Beta-hCG (Quantitative Blood Assay)',
      'Gestational Age Estimation Correlation',
      'Early Pregnancy Confirmation'
    ],
    preparation: 'For urine: First morning void is best. For blood: No fasting required.',
    sampleType: 'Sterile Morning Urine or 2 ml Blood Serum',
    turnaround: 'Rapid: Urine in 30 Mins | Serum in 3 Hours',
    guidelines: 'Confirms early pregnancy, tracks healthy gestational hormone doubling, and evaluates ectopic risks.',
    meta1: 'Rapid Report: 30 Mins',
    meta2: 'Morning Sample Best',
    iconType: 'baby'
  }
};

export const testsData_ta = {
  cbc: {
    id: 'cbc',
    title: 'CBC – முழு இரத்த அணுக்கள் பரிசோதனை',
    category: 'இரத்தம் & நோயியல்',
    image: '/assets/images/tests/test-cbc-mindray.png',
    desc: 'இரத்த சோகை, நோய்த்தொற்று, உடல் வீக்கம், இரத்த உறைதல் கோளாறுகள் மற்றும் இரத்தப் புற்றுநோய் உள்ளிட்ட பல்வேறு உடல்நலக் குறைபாடுகளைத் துல்லியமாக அறியும் முதன்மைப் பரிசோதனை.',
    parameters: [
      'ஹீமோகுளோபின் (Hb)',
      'மொத்த RBC எண்ணிக்கை',
      'மொத்த வெள்ளை இரத்த அணுக்கள் (WBC)',
      'வேறுபட்ட அணுக்கள் (நியூட்ரோபில், லிம்போசைட், மோனோசைட், ஈசினோபில், பாசோபில்)',
      'பிளேட்லெட் எண்ணிக்கை',
      'PCV / ஹெமடோக்ரிட்',
      'MCV, MCH, MCHC, RDW'
    ],
    preparation: 'சிறப்பு உணவுக் கட்டுப்பாடு தேவையில்லை. வழக்கம்போல் நீர் அருந்தலாம்.',
    sampleType: '2 மிலி முழு இரத்தம் (EDTA குப்பி)',
    turnaround: '4 முதல் 6 மணி நேரம் (அன்றே அறிக்கை)',
    guidelines: 'வழக்கமான உடல்நலப் பரிசோதனை மற்றும் அறுவை சிகிச்சைக்கு முந்தைய மதிப்பீட்டிற்கு மிகவும் அவசியம்.',
    meta1: 'முடிவு வழங்கும் நேரம்: 4-6 மணி நேரம்',
    meta2: 'வெறும் வயிறு: தேவையில்லை',
    iconType: 'blood'
  },
  kft: {
    id: 'kft',
    title: 'KFT – சிறுநீரக செயல்பாட்டு பரிசோதனை (Renal Profile)',
    category: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    image: '/assets/images/tests/test-kft-bench.png',
    desc: 'சிறுநீரகங்கள் இரத்தத்தில் உள்ள கழிவுகளை எந்த அளவுக்குச் சரியாக வடிகட்டுகின்றன மற்றும் உடலின் தாது உப்புகளைச் சமநிலைப்படுத்துகின்றன என்பதை மதிப்பிடுகிறது.',
    parameters: [
      'இரத்த யூரியா & BUN',
      'சீரம் கிரியேட்டினின்',
      'யூரிக் அமிலம்',
      'சீரம் எலக்ட்ரோலைட்டுகள் (சோடியம், பொட்டாசியம், குளோரைடு)',
      'மதிப்பிடப்பட்ட GFR (eGFR)',
      'யூரியா / கிரியேட்டினின் விகிதம்'
    ],
    preparation: 'இரவு முழுவதும் 8 முதல் 10 மணி நேரம் வெறும் வயிற்றில் இருப்பது பரிந்துரைக்கப்படுகிறது.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: 'அன்றே மாலை அறிக்கை',
    guidelines: 'உயர் இரத்த அழுத்தம், சர்க்கரை நோய், உடல் வீக்கம் உள்ளவர்களுக்கும் மருந்து உண்பவர்களுக்கும் அவசியம்.',
    meta1: 'அன்றே அறிக்கை வழங்கப்படும்',
    meta2: 'வெறும் வயிறு: 8-10 மணி நேரம்',
    iconType: 'organ'
  },
  lft: {
    id: 'lft',
    title: 'LFT – கல்லீரல் செயல்பாட்டு பரிசோதனை (Hepatic Profile)',
    category: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    image: '/assets/images/tests/test-lft-erba.png',
    desc: 'கல்லீரலால் உற்பத்தி செய்யப்படும் என்சைம்கள், புரதங்கள் மற்றும் பிலிரூபின் அளவுகளைக் கணக்கிட்டு கல்லீரலின் இயக்கத்தை விரிவாக அறியும் பரிசோதனை.',
    parameters: [
      'மொத்த & நேரடி பிலிரூபின்',
      'SGOT / AST',
      'SGPT / ALT',
      'ஆல்கலைன் பாஸ்பேடேஸ் (ALP)',
      'மொத்த புரதம் & அல்புமின்/குளோபுலின் விகிதம்',
      'காமா GT (GGT)'
    ],
    preparation: '10 முதல் 12 மணி நேரம் வெறும் வயிறு தேவை. 48 மணி நேரத்திற்கு முன் மது அருந்தக் கூடாது.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: 'அன்றே மாலை அறிக்கை',
    guidelines: 'மஞ்சள் காமாலை, கொழுப்பு கல்லீரல் (Fatty Liver) மற்றும் கல்லீரல் பாதிப்புகளைக் கண்டறிய உதவும்.',
    meta1: 'அன்றே அறிக்கை வழங்கப்படும்',
    meta2: 'வெறும் வயிறு: 10-12 மணி நேரம்',
    iconType: 'liver'
  },
  lipid: {
    id: 'lipid',
    title: 'Lipid Profile – கொலஸ்ட்ரால் / கொழுப்பு பரிசோதனை',
    category: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    image: '/assets/images/tests/test-lipid-tubes.png',
    desc: 'நல்ல மற்றும் கெட்ட கொழுப்புகள் மற்றும் ட்ரைகிளிசரைடு அளவுகளை அளவிடுவதன் மூலம் இதய இரத்தக் குழாய் ஆரோக்கியத்தை விரிவாக மதிப்பிடுகிறது.',
    parameters: [
      'மொத்த சீரம் கொலஸ்ட்ரால்',
      'HDL (நல்ல கொலஸ்ட்ரால்)',
      'LDL (கெட்ட கொலஸ்ட்ரால்)',
      'VLDL கொலஸ்ட்ரால்',
      'சீரம் ட்ரைகிளிசரைடுகள்',
      'TC/HDL விகிதம் & இதய அபாயக் காரணி'
    ],
    preparation: 'கட்டாயம் 10 முதல் 12 மணி நேரம் இரவு வெறும் வயிறு தேவை. தண்ணீர் மட்டும் குடிக்கலாம்.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: 'அன்றே அறிக்கை (6 மணி நேரத்திற்குள்)',
    guidelines: 'மாரடைப்பு, இரத்தக் குழாய் அடைப்பு மற்றும் பக்கவாதம் ஏற்படும் அபாயத்தை முன்கூட்டியே எச்சரிக்கும்.',
    meta1: 'அன்றே அறிக்கை வழங்கப்படும்',
    meta2: 'வெறும் வயிறு: 12 மணி நேரம்',
    iconType: 'heart'
  },
  sugar: {
    id: 'sugar',
    title: 'இரத்த சர்க்கரை அளவு பரிசோதனை (FBS, PPBS & HbA1c)',
    category: 'இரத்தம் & நோயியல்',
    image: '/assets/images/tests/test-sugar-analyzer.png',
    desc: 'சர்க்கரை நோய் கண்டறிதல், சிகிச்சை மற்றும் கடந்த 3 மாத கால இரத்த சர்க்கரை கட்டுப்பாட்டைத் துல்லியமாக அறியும் கோல்ட் ஸ்டாண்டர்ட் பரிசோதனை.',
    parameters: [
      'வெறும் வயிற்று சர்க்கரை (FBS)',
      'உணவுக்குப் பின் 2 மணி நேர சர்க்கரை (PPBS)',
      'ரேண்டம் சர்க்கரை (RBS)',
      'HbA1c (3 மாத சராசரி சர்க்கரை அளவு)',
      'சராசரி இரத்த குளுக்கோஸ் மதிப்பீடு'
    ],
    preparation: 'FBS: 8-10 மணி நேரம் வெறும் வயிறு. PPBS: காலை உணவு முடிந்து சரியாக 2 மணி நேரத்தில் மாதிரி கொடுக்க வேண்டும்.',
    sampleType: 'புளோரைடு / EDTA இரத்த குப்பிகள்',
    turnaround: '2 முதல் 3 மணி நேரம் (விரைவு அறிக்கை)',
    guidelines: 'ப்ரீ-டயாபடீஸ் மற்றும் டைப் 1, டைப் 2 சர்க்கரை நோயை முறையாகக் கண்காணிக்க அவசியமானது.',
    meta1: 'முடிவு வழங்கும் நேரம்: 2-3 மணி நேரம்',
    meta2: 'வெறும் வயிறு & உணவுக்குப் பின்',
    iconType: 'sugar'
  },
  thyroid: {
    id: 'thyroid',
    title: 'தைராய்டு பரிசோதனை (T3, T4, TSH)',
    category: 'உறுப்பு செயல்பாட்டுப் பரிசோதனைகள்',
    image: '/assets/images/tests/test-thyroid-pipettes.png',
    desc: 'உடலின் வளர்சிதை மாற்றம், வெப்பநிலை, ஆற்றல் மற்றும் இதயத் துடிப்பைக் கட்டுப்படுத்தும் முக்கிய நாளமில்லா ஹார்மோன்களை அளவிடுகிறது.',
    parameters: [
      'மொத்த ட்ரையோடோதைரோனைன் (T3)',
      'மொத்த தைராக்சின் (T4)',
      'அதிஉணர்திறன் TSH (தைராய்டு தூண்டும் ஹார்மோன்)',
      'Free T3 / Free T4 (மருத்துவர் பரிந்துரைப்படி)'
    ],
    preparation: 'காலை நேர மாதிரி மிகவும் சிறந்தது. தைராய்டு மாத்திரைகளை இரத்த மாதிரி கொடுத்த பின்னரே உட்கொள்ள வேண்டும்.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: 'அன்றே மாலை அறிக்கை',
    guidelines: 'ஹைப்போதைராய்டிசம், ஹைப்பர்தைராய்டிசம், காரணமற்ற எடை மாற்றம் மற்றும் உடல் சோர்வைக் கண்டறியும்.',
    meta1: 'அன்றே மாலை அறிக்கை',
    meta2: 'காலை வெறும் வயிறு சிறந்தது',
    iconType: 'thyroid'
  },
  'urine-stool': {
    id: 'urine-stool',
    title: 'சிறுநீர் & மலம் வழக்கமான மற்றும் நுண்ணோக்கி பரிசோதனை',
    category: 'இரத்தம் & நோயியல்',
    image: '/assets/images/tests/test-urine-bench.png',
    desc: 'சிறுநீரகக் கோளாறுகள், சிறுநீர்ப் பாதை நோய்த்தொற்றுகள் (UTI) மற்றும் இரைப்பை குடல் ஆரோக்கியத்தை அறியும் நுண்ணோக்கி ஆய்வு.',
    parameters: [
      'இயற்பியல் ஆய்வு (நிறம், தோற்றம், அடர்த்தி)',
      'வேதியியல் ஆய்வு (pH, புரதம், குளுக்கோஸ், கீட்டோன்கள், இரத்தம்)',
      'நுண்ணோக்கி ஆய்வு (சீழ் செல்கள், RBC, எபிதீலியல் செல்கள், பாக்டீரியா)',
      'மலம்: மறைமுக இரத்தம், ஒட்டுண்ணிகள், முட்டைகள்'
    ],
    preparation: 'காலை முதல் சிறுநீரை சுத்தமான கன்டெய்னரில் சேகரிக்க வேண்டும். மாதிரி குப்பி ஆய்வகத்தில் வழங்கப்படும்.',
    sampleType: 'சுத்தமான மலட்டு சிறுநீர் / மலம் குப்பி',
    turnaround: '3 முதல் 5 மணி நேரம்',
    guidelines: 'அறிகுறியற்ற சிறுநீர்த் தொற்று, சிறுநீரகக் கற்கள் மற்றும் குடல் புழுக்களைக் கண்டறிய உதவுகிறது.',
    meta1: 'முடிவு வழங்கும் நேரம்: 3-5 மணி நேரம்',
    meta2: 'காலை தூய மாதிரி சிறந்தது',
    iconType: 'flask'
  },
  ecg: {
    id: 'ecg',
    title: 'ECG – 12-Lead இதய மின் துடிப்புப் பரிசோதனை',
    category: 'இதயம் & ஸ்கேன்/எக்ஸ்-ரே',
    image: '/assets/images/tests/test-ecg-machine.png',
    desc: 'இதயத் தசைகளின் மின் சமிக்ஞைகள் மற்றும் இதயத் துடிப்பின் சீரான இயக்கத்தைப் பதிவு செய்யும் பாதுகாப்பான பரிசோதனை.',
    parameters: [
      'இதயத் துடிப்பு & ரிதம் பகுப்பாய்வு',
      'P அலை, PR இடைவெளி, QRS காம்ப்ளக்ஸ்',
      'ST பிரிவு & T அலை மதிப்பீடு',
      'இரத்த ஓட்டக் குறைவு & மாரடைப்பு மாற்றங்கள்',
      'துடிப்பு ஒழுங்கின்மை (Arrhythmia) கண்டறிதல்'
    ],
    preparation: 'வசதியான இருபகுதி ஆடைகளை அணியவும். பரிசோதனைக்கு 10 நிமிடங்களுக்கு முன் அமைதியாக ஓய்வெடுக்கவும்.',
    sampleType: 'மையத்தில் நேரடி மருத்துவப் பரிசோதனை (10 நிமிடம்)',
    turnaround: 'உடனடி அறிக்கை & மருத்துவர் சரிபார்ப்பு',
    guidelines: 'நெஞ்சு வலி, படபடப்பு, மூச்சுத் திணறல் மற்றும் மயக்கம் ஏற்படும் போது உடனடியாகச் செய்ய வேண்டிய சோதனை.',
    meta1: 'உடனடி அறிக்கை',
    meta2: 'வெறும் வயிறு: தேவையில்லை',
    iconType: 'ecg'
  },
  xray: {
    id: 'xray',
    title: 'டிஜிட்டல் எக்ஸ்-ரே (High-Resolution Radiography)',
    category: 'இதயம் & ஸ்கேன்/எக்ஸ்-ரே',
    image: '/assets/images/tests/test-xray-focused.png',
    desc: 'குறைந்த கதிர்வீச்சு டிஜிட்டல் டிடெக்டர்களைப் பயன்படுத்தி எலும்பு கட்டமைப்பு, நுரையீரல் மற்றும் மூட்டுகளைத் தெளிவாகப் படம்பிடிக்கும் முறை.',
    parameters: [
      'மார்பு எக்ஸ்-ரே (Chest PA / AP Views)',
      'எலும்பு முறிவு பரிசோதனை (Fracture Screen)',
      'முதுகெலும்பு எக்ஸ்-ரே (கழுத்து, முதுகு, இடுப்பு)',
      'மூட்டு & தேய்மான மதிப்பீடு',
      'வயிற்றுப் பகுதி எக்ஸ்-ரே'
    ],
    preparation: 'பரிசோதனை செய்யப்படும் பகுதியில் உள்ள உலோக நகைகள் அல்லது ஜிப் உள்ள ஆடைகளை அகற்றவும்.',
    sampleType: 'மையத்தில் நேரடி கதிரியக்கப் பரிசோதனை (5-10 நிமிடம்)',
    turnaround: 'பிலிம் மற்றும் அறிக்கை 30-45 நிமிடங்களில்',
    guidelines: 'குறைந்த கதிர்வீச்சுடன் உடனடி துல்லியமான படம் மற்றும் சான்றிதழ் பெற்ற ரேடியாலஜிஸ்ட் சரிபார்ப்பு.',
    meta1: '30-45 Mins Report',
    meta2: 'Low Radiation Dose',
    iconType: 'xray'
  },
  hiv: {
    id: 'hiv',
    title: 'HIV 1 & 2 ஆன்டிபாடி / ஆன்டிஜென் ஸ்கிரீன்',
    category: 'சிறப்பு பரிசோதனைகள்',
    image: '/assets/images/tests/test-hiv-station.png',
    desc: 'முழுமையான ரகசியத்தன்மையுடன் HIV ஆன்டிபாடிகள் மற்றும் வைரஸ் ஆன்டிஜென்களைக் கண்டறியும் உயர் உணர்திறன் கொண்ட ஆய்வு.',
    parameters: [
      'HIV-1 ஆன்டிபாடிகள் கண்டறிதல்',
      'HIV-2 ஆன்டிபாடிகள் கண்டறிதல்',
      'P24 ஆன்டிஜென் கண்டறிதல் (4th Gen Duo Immunoassay)',
      '100% நோயாளி ரகசியப் பாதுகாப்பு உறுதி'
    ],
    preparation: 'உணவுக் கட்டுப்பாடு தேவையில்லை. பரிசோதனைக்கு முந்தைய மற்றும் பிந்தைய ரகசிய ஆலோசனை உண்டு.',
    sampleType: '3 மிலி சிரை இரத்தம் (சீரம்)',
    turnaround: '4 முதல் 6 மணி நேரம் (பாதுகாப்பான ரகசிய அறிக்கை)',
    guidelines: 'WHO & NACO ஆய்வக நெறிமுறைகளின்படி முழுமையான தனியுரிமையுடன் செய்யப்படுகிறது.',
    meta1: 'Turnaround: 4-6 Hours',
    meta2: '100% Confidential',
    iconType: 'shield'
  },
  pregnancy: {
    id: 'pregnancy',
    title: 'கர்ப்பப் பரிசோதனை (Beta-hCG சிறுநீர் & இரத்தம்)',
    category: 'சிறப்பு பரிசோதனைகள்',
    image: '/assets/images/tests/test-pregnancy-station.png',
    desc: 'சிறுநீர் அல்லது இரத்தத்தில் மனித கோரியானிக் கோனாடோட்ரோபின் (hCG) ஹார்மோனைக் கண்டறியும் நம்பகமான சோதனை.',
    parameters: [
      'சிறுநீர் Beta-hCG (உடனடி உயர் உணர்திறன் சோதனை)',
      'சீரம் Beta-hCG (துல்லியமான இரத்த அளவு ஆய்வு)',
      'கருவுற்ற கால அளவு மதிப்பீடு',
      'ஆரம்ப கர்ப்ப உறுதிப்படுத்தல்'
    ],
    preparation: 'சிறுநீருக்கு: காலை முதல் சிறுநீர் சிறந்தது. இரத்தத்திற்கு: வெறும் வயிறு தேவையில்லை.',
    sampleType: 'மலட்டு காலை சிறுநீர் அல்லது 2 மிலி இரத்த சீரம்',
    turnaround: 'சிறுநீர்: 30 நிமிடம் | இரத்தம்: 3 மணி நேரம்',
    guidelines: 'ஆரம்பகால கருவுறுதலை உறுதிப்படுத்தவும் ஆரோக்கியமான ஹார்மோன் இரட்டிப்பை கண்காணிக்கவும் உதவுகிறது.',
    meta1: 'Rapid Report: 30 Mins',
    meta2: 'Morning Sample Best',
    iconType: 'baby'
  }
};
