import { TRANSLATIONS, AGRI_TERMS } from './data/translations.js';
import { LEARNING_SECTIONS } from './data/sections.js';
import { COURSE_CHAPTERS } from './data/course.js';
import { CROP_LIBRARY, NAROWAL_MONTHS } from './data/crop-library.js';
import { FIELD_GUIDE_ENTRIES, GUIDED_ID_SCENARIOS } from './data/field-guide.js';
import { HOME_FARM_LAB_TESTS } from './data/home-farm-lab.js';
import {
  ROTATION_CROPS,
  WHEAT_IRRIGATION_STAGES,
  SIMULATION_MODULES,
  VIDEO_LIBRARY,
  CENTRE_QUIZZES
} from './data/learning-centre.js';
import {
  COMPARISON_ROWS,
  INSECTS_DATA,
  QUIZ_QUESTIONS,
  GLOSSARY_TERMS
} from './data/glossary.js';

const STORAGE_KEYS = {
  lang: 'nrf_lang_v1',
  completed: 'nrf_completed_v1',
  courseDone: 'nrf_course_done_v1',
  farmPlan: 'nrf_farm_plan_v1',
  labSoilRecords: 'nrf_lab_soil_records_v1',
  labCosts: 'nrf_lab_costs_v1',
  labIrrigations: 'nrf_lab_irrigation_v1',
  labCompare: 'nrf_lab_income_compare_v1'
};

const SCIENTIFIC_NAMES = [
  'Sesbania bispinosa',
  'Vigna radiata',
  'Vigna mungo',
  'Vigna unguiculata',
  'Trifolium alexandrinum',
  'Azadirachta indica',
  'Oryza sativa',
  'Triticum aestivum',
  'Saccharum officinarum',
  'Zea mays',
  'Cicer arietinum',
  'Lens culinaris',
  'Brassica juncea',
  'Brassica napus',
  'Brassica spp.',
  'Sorghum bicolor',
  'Allium cepa',
  'Citrus reticulata',
  'Psidium guajava',
  'Mangifera indica',
  'Ziziphus mauritiana',
  'Dalbergia sissoo',
  'Vachellia nilotica',
  'Coccinellidae',
  'Chrysoperla carnea',
  'Trichogramma chilonis',
  'Scirpophaga incertulas',
  'Spodoptera frugiperda',
  'Cnaphalocrocis medinalis',
  'Bacillus thuringiensis',
  'Rhizobium',
  'Tagetes',
  'Odonata',
  'Araneae',
  'Syrphidae',
  'Carabidae',
  'Aphididae',
  'Bemisia tabaci',
  'Helicoverpa armigera',
  'Dicrurus macrocercus',
  'Bubulcus ibis',
  'Acridotheres tristis',
  'Psittacula krameri',
  'Passer domesticus',
  'Athene brama',
  'Vanellus indicus',
  'Coracias benghalensis',
  'Phalaris minor',
  'Echinochloa crus-galli',
  'Echinochloa colona',
  'Cyperus rotundus',
  'Chenopodium album',
  'Trianthema portulacastrum',
  'Melia azedarach',
  'Avena fatua',
  'Cynodon dactylon',
  'Trifolium resupinatum',
  'Apis spp.',
  'Mentha spp.'
];

const state = {
  lang: loadLanguage(),
  currentSectionId: null,
  currentChapterNum: null,
  currentCropId: null,
  currentFieldGuideId: null,
  currentLabTestId: null,
  searchQuery: '',
  completedIds: loadCompletedIds(),
  courseDoneNums: loadCourseDoneNums(),
  chapterQuizAnswers: {},
  farmPlan: loadFarmPlan(),
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: null,
  miniGameIndex: 0,
  miniGameScore: 0,
  miniGameFeedback: null,
  cropFilter: 'all',
  cropLibTab: 'cards',
  cropLibFilter: 'all',
  cropLibSearch: '',
  selectedMonthIdx: new Date().getMonth(),
  compareCropA: 'basmati-rice',
  compareCropB: 'wheat',
  rotationCropId: 'basmati-rice',
  cropStageIdx: 0,
  fgTab: 'gallery',
  fgFilter: 'all',
  fgBirdSubFilter: 'all',
  fgPlantSubFilter: 'all',
  fgSearch: '',
  fgGuidedGroup: 'insect-pest-or-ally',
  fgGuidedContext: 'on-aphids-or-flowers',
  fgGuidedClue: 'spotted-dome-or-spiny',
  labTab: 'tests',
  labFilter: 'all',
  labToolTab: 'A',
  labDemoStep: 0,
  labDemoPlaying: false,
  labSoilRecords: loadJsonStorage(STORAGE_KEYS.labSoilRecords, []),
  labCompostInput: { lengthFt: 8, widthFt: 4, heightFt: 3, dryKg: 200, greenKg: 100, kanals: 2 },
  labAreaInput: { val: 2, unit: 'kanal' },
  labWeightInput: { val: 40, unit: 'maund', harvestMaund: 84, harvestKanals: 16 },
  labCostKanals: 8,
  labCosts: loadJsonStorage(STORAGE_KEYS.labCosts, defaultLabCosts()),
  labIrrigations: loadJsonStorage(STORAGE_KEYS.labIrrigations, []),
  labIncomeCompare: loadJsonStorage(STORAGE_KEYS.labCompare, defaultLabCompare()),
  insectFilter: 'all',
  awdState: 'safe',
  videoWalkthroughStep: { spade: 0, compost: 0 },
  spadeAnswers: { feel: 'good', soak: 'good', salt: 'good', roots: 'good', insects: 'good' },
  mulchCm: 4,
  awdKanals: 8,
  tubewellRate: 1200,
  lcTab: 'sims',
  lcSimId: 'soil-cover',
  simSoilWeather: 'heat',
  simMulchCm: 4,
  simRotationSlots: ['rice', 'wheat', 'mung', 'rice'],
  simWaterRiceStage: 'veg',
  simWaterDepthCm: 4,
  simWheatStageId: 'cri',
  simInsectWeek: 4,
  simCompost: { dry: 'wheat', green: 'grass', manure: 'dung', water: 'sponge', stage: 2, turns: 2 },
  simEcon: {
    conv: { kanals: 8, seed: 5500, fertilizer: 22000, labour: 8000, diesel: 12000, water: 11000, other: 5500, yield: 40, price: 3900, straw: 4000 },
    regen: { kanals: 8, seed: 5500, fertilizer: 12500, labour: 7500, diesel: 4500, water: 7500, other: 2000, yield: 42, price: 3900, straw: 4000 }
  },
  vidCatFilter: 'all',
  vidPlayingIds: {},
  vidCaptionsOpen: {},
  qzMode: 'all',
  qzIdx: 0,
  qzScore: 0,
  qzAnswered: null,
  qzComplete: false
};

function loadLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.lang);
    return saved === 'ur' ? 'ur' : 'en';
  } catch {
    return 'en';
  }
}

function saveLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEYS.lang, lang);
  } catch {
    // Ignore storage restriction
  }
}

function loadCompletedIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.completed);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCompletedIds(ids) {
  try {
    localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(ids));
  } catch {
    // Ignore storage restriction
  }
}

function loadCourseDoneNums() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.courseDone);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCourseDoneNums(nums) {
  try {
    localStorage.setItem(STORAGE_KEYS.courseDone, JSON.stringify(nums));
  } catch {
    // Ignore storage restriction
  }
}

function defaultFarmPlan() {
  return {
    farmerName: '',
    village: '',
    trialKanals: '2',
    checklist: Array(10).fill(false),
    trialCost: '',
    trialYield: '',
    normalCost: '',
    normalYield: '',
    notes: ''
  };
}

function loadFarmPlan() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.farmPlan);
    if (!raw) return defaultFarmPlan();
    return { ...defaultFarmPlan(), ...JSON.parse(raw) };
  } catch {
    return defaultFarmPlan();
  }
}

function saveFarmPlan() {
  try {
    localStorage.setItem(STORAGE_KEYS.farmPlan, JSON.stringify(state.farmPlan));
  } catch {
    // Ignore storage restriction
  }
}

function defaultLabCosts() {
  return [
    { id: 'c1', name: 'Zero-Till Drill / Land Prep', cost: 4500 },
    { id: 'c2', name: 'Seed & Germination Test', cost: 6500 },
    { id: 'c3', name: 'Irrigation / Tubewell Hours', cost: 5000 }
  ];
}

function defaultLabCompare() {
  return {
    aKanals: 8,
    aExpense: 38000,
    aYield: 42,
    aPrice: 3900,
    aStraw: 4000,
    bKanals: 8,
    bExpense: 48000,
    bYield: 40,
    bPrice: 3900,
    bStraw: 4000
  };
}

function loadJsonStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJsonStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage restriction
  }
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Central dictionary lookup with optional {placeholder} replacement */
function tr(key, vars = {}) {
  const dict = TRANSLATIONS[state.lang] || TRANSLATIONS.en;
  let value = dict[key] ?? TRANSLATIONS.en[key] ?? key;
  if (typeof value === 'string') {
    for (const [k, v] of Object.entries(vars)) {
      value = value.replaceAll(`{${k}}`, String(v));
    }
  }
  return value;
}

/** Field-level bilingual picker for dataset records */
function t(en, ur) {
  return state.lang === 'ur' ? ur : en;
}

/** Escapes HTML and wraps scientific names & technical measurements in LTR-isolated spans */
function formatRichText(str) {
  let out = escapeHtml(str);
  for (const sci of SCIENTIFIC_NAMES) {
    out = out.replaceAll(sci, `<span class="sci-name" lang="la" dir="ltr">${sci}</span>`);
  }
  // Keep technical measurements & ratios cleanly LTR-isolated inside Urdu prose
  out = out.replace(
    /(\b\d+(?:[–-]\d+)?(?:\.\d+)?\s?(?:cm|kg\/acre|tonnes\/acre|kg|t|L|°C|%|acre|kanal|marla|maund|hrs|PKR)\b|\b(?:EC|pH|AWD)\b)/g,
    '<span class="ltr-isolate" dir="ltr">$1</span>'
  );
  return out;
}

function getIconSvg(name) {
  const paths = {
    soil: '<path d="M3 17h18M5 13c2.5-3 5.5-4.5 7-4.5s4.5 1.5 7 4.5M12 8.5V4M9 6l3-2 3 2"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="3" y1="11" x2="21" y2="11"/>',
    seedling: '<path d="M12 21V11"/><path d="M12 14c-4.5 0-7-3-7-7 4.5 0 7 2.5 7 7Z"/><path d="M12 11c4.5 0 7-3 7-7-4.5 0-7 2.5-7 7Z"/>',
    water: '<path d="M12 3s6 6.8 6 11a6 6 0 1 1-12 0c0-4.2 6-11 6-11Z"/>',
    bug: '<rect x="8" y="7" width="8" height="11" rx="4"/><path d="M12 7V4M5 10l3 2M19 10l-3 2M4 15h4M16 15h4M6 19l2-2M18 19l-2-2"/>',
    tree: '<path d="M12 21v-7"/><circle cx="12" cy="9" r="5"/><path d="M8 13a4 4 0 0 1 0-6"/><path d="M16 13a4 4 0 0 0 0-6"/>',
    leaf: '<path d="M19 5c-6.5 0-12 4.5-12 11 0 1.5.5 3 1 4 1 .5 2.5 1 4 1 6.5 0 11-5.5 11-12V5h-4Z"/><path d="M7 19l8-8"/>',
    compost: '<path d="M4 19h16"/><path d="M6 19l3-7h6l3 7"/><path d="M9 12l3-6 3 6"/>',
    tools: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3Z"/>',
    test: '<path d="M9 3h6M10 3v6l-4.5 8A2 2 0 0 0 7.2 20h9.6a2 2 0 0 0 1.7-3L14 9V3"/>',
    sliders: '<line x1="4" y1="7" x2="20" y2="7"/><circle cx="9" cy="7" r="2.2"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="15" cy="12" r="2.2"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="11" cy="17" r="2.2"/>',
    video: '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="M17 10l4-2.5v9L17 14v-4Z"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 0 1 4.8 1c0 1.6-2.3 2-2.3 3.5"/><circle cx="12" cy="17" r="0.8" fill="currentColor"/>',
    plan: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>'
  };
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.leaf}</svg>`;
}

/* ==========================================================================
   LANGUAGE & CHROME SYNC
   ========================================================================== */

function applyLanguageChrome() {
  const htmlEl = document.documentElement;
  const isUrdu = state.lang === 'ur';
  htmlEl.lang = isUrdu ? 'ur' : 'en';
  htmlEl.dir = isUrdu ? 'rtl' : 'ltr';
  document.title = tr('docTitle');

  const btnEn = document.getElementById('btn-lang-en');
  const btnUr = document.getElementById('btn-lang-ur');
  btnEn.classList.toggle('is-active', !isUrdu);
  btnUr.classList.toggle('is-active', isUrdu);
  btnEn.setAttribute('aria-pressed', String(!isUrdu));
  btnUr.setAttribute('aria-pressed', String(isUrdu));

  document.getElementById('skip-link').textContent = tr('skipToContent');
  document.getElementById('lang-switch-group').setAttribute('aria-label', tr('langSwitchLabel'));
  document.getElementById('mobile-menu-toggle').setAttribute('aria-label', tr('menuOpenLabel'));

  document.getElementById('brand-title').textContent = tr('brandTitle');
  document.getElementById('nav-home').textContent = tr('navHome');
  document.getElementById('nav-crops').textContent = tr('navCropLib');
  document.getElementById('nav-field-guide').textContent = tr('navFieldGuide');
  document.getElementById('nav-sim-centre').textContent = tr('navSimCentre');
  document.getElementById('nav-course').textContent = tr('navCourse');
  document.getElementById('nav-plan').textContent = tr('navPlan');

  document.getElementById('m-nav-home').textContent = tr('navHome');
  document.getElementById('m-nav-crops').textContent = tr('navCropLib');
  document.getElementById('m-nav-field-guide').textContent = tr('navFieldGuide');
  document.getElementById('m-nav-sim-centre').textContent = tr('navSimCentre');
  document.getElementById('m-nav-course').textContent = tr('navCourse');
  document.getElementById('m-nav-plan').textContent = tr('navPlan');

  document.getElementById('hero-kicker').textContent = tr('heroKicker');
  document.getElementById('hero-subtitle').textContent = tr('heroSubtitle');
  document.getElementById('hero-cta-crops').textContent = tr('heroCtaCropLib');
  document.getElementById('hero-cta-field-guide').textContent = tr('heroCtaFieldGuide');
  document.getElementById('hero-cta-lab').textContent = tr('heroCtaLab');
  document.getElementById('hero-cta-centre').textContent = tr('heroCtaCentre');
  document.getElementById('hero-cta-course').textContent = tr('navCourse');
  document.getElementById('hero-cta-primary').textContent = tr('heroCtaPrimary');
  document.getElementById('hero-cta-secondary').textContent = tr('heroCtaSecondary');

  document.getElementById('search-label').textContent = tr('searchLabel');
  document.getElementById('hub-search-input').placeholder = tr('searchPlaceholder');
  document.getElementById('hub-search-clear').textContent = tr('searchClear');

  document.getElementById('progress-title').textContent = tr('progressTitle');
  document.getElementById('course-progress-title').textContent = tr('courseProgressTitle');
  document.getElementById('progress-action').textContent = tr('progressAction');

  document.getElementById('crop-lib-heading').textContent = tr('cropLibHeading');
  document.getElementById('crop-lib-subheading').textContent = tr('cropLibSubheading');

  document.getElementById('fg-heading').textContent = tr('fgHeading');
  document.getElementById('fg-subheading').textContent = tr('fgSubheading');

  document.getElementById('lab-heading').textContent = tr('labHeading');
  document.getElementById('lab-subheading').textContent = tr('labSubheading');

  document.getElementById('lc-heading').textContent = tr('lcHeading');
  document.getElementById('lc-subheading').textContent = tr('lcSubheading');

  document.getElementById('course-heading').textContent = tr('courseHeading');
  document.getElementById('course-subheading').textContent = tr('courseSubheading');

  document.getElementById('topics-heading').textContent = tr('topicsHeading');
  document.getElementById('topics-subheading').textContent = tr('topicsSubheading');

  document.getElementById('comparison-heading').textContent = tr('comparisonHeading');
  document.getElementById('comparison-subheading').textContent = tr('comparisonSubheading');
  document.getElementById('th-healthy').textContent = tr('comparisonHealthyTitle');
  document.getElementById('th-warning').textContent = tr('comparisonWarningTitle');
  document.getElementById('th-check').textContent = tr('thCheck');
  document.getElementById('comparison-healthy-caption').textContent = tr('comparisonHealthyCaption');
  document.getElementById('comparison-healthy-sub').textContent = tr('comparisonHealthySub');

  document.getElementById('handbook-title').textContent = tr('handbookBannerTitle');
  document.getElementById('handbook-desc').textContent = tr('handbookBannerDesc');
  document.getElementById('handbook-link').textContent = tr('handbookDownload');

  document.getElementById('footer-note').textContent = tr('footerNote');
  document.getElementById('footer-advice').textContent = tr('footerAdvice');
  document.getElementById('footer-link-home').textContent = tr('navHome');
  document.getElementById('footer-link-fg').textContent = tr('navFieldGuide');
  document.getElementById('footer-link-lab').textContent = tr('navFarmLab');
  document.getElementById('footer-link-sim').textContent = tr('navSimulations');
  document.getElementById('footer-link-plan').textContent = tr('navPlan');
  document.getElementById('footer-link-pdf').textContent = tr('handbookDownload');

  const heroImgEl = document.querySelector('.hero-img');
  if (heroImgEl) {
    heroImgEl.alt = t(
      'Healthy regenerative farm in Narowal, Punjab with green rice and wheat fields, trees, and irrigation channel',
      'نارووال، پنجاب کا ہرا بھرا احیائی کھیت، چاول اور گندم کی فصلیں، درخت اور آبپاشی کا کھال'
    );
  }
  const compImgEl = document.querySelector('.comparison-img');
  if (compImgEl) {
    compImgEl.alt = t(
      'Farmer hands holding dark crumbly loamy soil with an earthworm and straw mulch',
      'کسان کے ہاتھوں میں کینچوے اور بھوسے کی ملچنگ والی گہری بھربھری میرا مٹی'
    );
  }
}

/* ==========================================================================
   HOMEPAGE RENDERERS
   ========================================================================== */

function renderProgress() {
  const count = state.completedIds.length;
  const pct = Math.round((count / LEARNING_SECTIONS.length) * 100);
  document.getElementById('progress-count').textContent = `${count} / ${LEARNING_SECTIONS.length} ${tr('progressCompleted')}`;
  document.getElementById('progress-fill').style.width = `${pct}%`;
  document.getElementById('progress-track').setAttribute('aria-valuenow', String(count));

  const cCount = state.courseDoneNums.length;
  const cPct = Math.round((cCount / COURSE_CHAPTERS.length) * 100);
  document.getElementById('course-progress-count').textContent = `${cCount} / ${COURSE_CHAPTERS.length} ${tr('courseCompletedUnit')}`;
  document.getElementById('course-progress-fill').style.width = `${cPct}%`;
  document.getElementById('course-progress-track').setAttribute('aria-valuenow', String(cCount));
}

function renderCourseCards() {
  const grid = document.getElementById('course-grid');
  grid.innerHTML = COURSE_CHAPTERS.map((ch) => {
    const primary = state.lang === 'ur' ? ch.titleUr : ch.titleEn;
    const alt = state.lang === 'ur' ? ch.titleEn : ch.titleUr;
    const sub = state.lang === 'ur' ? ch.subtitleUr : ch.subtitleEn;
    const isDone = state.courseDoneNums.includes(ch.num);

    return `
      <button type="button" class="course-card" data-open-chapter="${ch.num}">
        <div>
          <div class="course-card-head">
            <span class="tabular-nums">${escapeHtml(tr('courseChapterWord'))} ${ch.num} ${escapeHtml(tr('courseOf17'))}</span>
            ${isDone ? `<span class="course-card-done">✓ ${escapeHtml(tr('markedCompleted'))}</span>` : ''}
          </div>
          <h3 class="course-card-title">${escapeHtml(primary)}</h3>
          <p class="course-card-alt" lang="${state.lang === 'ur' ? 'en' : 'ur'}" dir="${state.lang === 'ur' ? 'ltr' : 'rtl'}">${escapeHtml(alt)}</p>
          <p class="course-card-sub">${formatRichText(sub)}</p>
        </div>
        <div class="course-card-foot">
          ${escapeHtml(tr('courseOpenChapter'))} <span class="dir-flip">→</span>
        </div>
      </button>
    `;
  }).join('');

  grid.querySelectorAll('[data-open-chapter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToChapter(Number(btn.getAttribute('data-open-chapter')));
    });
  });
}

function renderTopicCards() {
  const grid = document.getElementById('topics-grid');

  grid.innerHTML = LEARNING_SECTIONS.map((sec) => {
    const primaryTitle = state.lang === 'ur' ? sec.titleUr : sec.titleEn;
    const altTitle = state.lang === 'ur' ? sec.titleEn : sec.titleUr;
    const summary = state.lang === 'ur' ? sec.summaryUr : sec.summaryEn;
    const isDone = state.completedIds.includes(sec.id);
    const statusHtml = isDone
      ? `✓ ${escapeHtml(tr('markedCompleted'))}`
      : `${escapeHtml(tr('openSection'))} <span class="dir-flip">→</span>`;

    return `
      <button type="button" class="topic-card theme-${sec.theme}" data-open-section="${sec.id}">
        <div>
          <div class="topic-card-top">
            <span class="topic-icon-box">${getIconSvg(sec.icon)}</span>
            <span class="topic-meta-line tabular-nums">${sec.num} / 15</span>
          </div>
          <h3 class="topic-card-title">${escapeHtml(primaryTitle)}</h3>
          <p class="topic-card-alt-title" lang="${state.lang === 'ur' ? 'en' : 'ur'}" dir="${state.lang === 'ur' ? 'ltr' : 'rtl'}">${escapeHtml(altTitle)}</p>
          <p class="topic-card-summary">${formatRichText(summary)}</p>
        </div>
        <div class="topic-card-footer">
          <span>${statusHtml}</span>
        </div>
      </button>
    `;
  }).join('');

  grid.querySelectorAll('[data-open-section]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToSection(btn.getAttribute('data-open-section'));
    });
  });
}

function renderComparisonTable() {
  const tbody = document.getElementById('comparison-tbody');
  tbody.innerHTML = COMPARISON_ROWS.map((row) => `
    <tr>
      <td><strong>${formatRichText(t(row.aspectEn, row.aspectUr))}</strong></td>
      <td class="cell-healthy">✓ ${formatRichText(t(row.healthyEn, row.healthyUr))}</td>
      <td class="cell-warning">! ${formatRichText(t(row.warningEn, row.warningUr))}</td>
    </tr>
  `).join('');
}

function renderSearchResults() {
  const box = document.getElementById('search-results-box');
  const clearBtn = document.getElementById('hub-search-clear');
  const q = state.searchQuery.trim().toLowerCase();

  clearBtn.hidden = q.length === 0;
  if (!q) {
    box.hidden = true;
    box.innerHTML = '';
    return;
  }

  const matches = [];

  for (const cr of CROP_LIBRARY) {
    const haystack = `${cr.nameEn} ${cr.nameUr} ${cr.scientificName} ${cr.seasonClassEn} ${cr.seasonClassUr} ${cr.summary.en} ${cr.summary.ur}`.toLowerCase();
    if (haystack.includes(q)) {
      matches.push({
        cropId: cr.id,
        title: `${t(cr.nameEn, cr.nameUr)} (${cr.scientificName})`,
        meta: `${t(cr.seasonClassEn, cr.seasonClassUr)} · ${t(cr.summary.en, cr.summary.ur)}`
      });
    }
  }

  for (const lb of HOME_FARM_LAB_TESTS) {
    const haystack = `${lb.titleEn} ${lb.titleUr} ${lb.subtitleEn} ${lb.subtitleUr} ${lb.objective.en} ${lb.objective.ur}`.toLowerCase();
    if (haystack.includes(q)) {
      matches.push({
        labTestId: lb.id,
        title: `${tr('labTestWord')} ${lb.num}: ${t(lb.titleEn, lb.titleUr)}`,
        meta: t(lb.subtitleEn, lb.subtitleUr)
      });
    }
  }

  for (const fg of FIELD_GUIDE_ENTRIES) {
    const haystack = `${fg.nameEn} ${fg.nameUr} ${fg.scientificName} ${fg.categoryEn} ${fg.categoryUr} ${fg.clues.en} ${fg.clues.ur}`.toLowerCase();
    if (haystack.includes(q)) {
      matches.push({
        fieldGuideId: fg.id,
        title: `${t(fg.nameEn, fg.nameUr)} (${fg.scientificName})`,
        meta: `${t(fg.categoryEn, fg.categoryUr)} · ${t(fg.clues.en, fg.clues.ur)}`
      });
    }
  }

  for (const ch of COURSE_CHAPTERS) {
    const haystack = `${ch.titleEn} ${ch.titleUr} ${ch.subtitleEn} ${ch.subtitleUr} ${ch.partA.en} ${ch.partA.ur}`.toLowerCase();
    if (haystack.includes(q)) {
      matches.push({
        chapterNum: ch.num,
        title: `${tr('courseChapterWord')} ${ch.num}: ${t(ch.titleEn, ch.titleUr)}`,
        meta: t(ch.subtitleEn, ch.subtitleUr)
      });
    }
  }

  for (const sec of LEARNING_SECTIONS) {
    const haystack = `${sec.titleEn} ${sec.titleUr} ${sec.summaryEn} ${sec.summaryUr} ${sec.keywords}`.toLowerCase();
    if (haystack.includes(q)) {
      matches.push({
        sectionId: sec.id,
        title: `${sec.num}. ${t(sec.titleEn, sec.titleUr)}`,
        meta: t(sec.summaryEn, sec.summaryUr)
      });
    }
  }

  for (const ins of INSECTS_DATA) {
    const haystack = `${ins.nameEn} ${ins.nameUr} ${ins.targetEn} ${ins.targetUr}`.toLowerCase();
    if (haystack.includes(q)) {
      matches.push({
        sectionId: 'insects-friends-foes',
        title: `${t(ins.nameEn, ins.nameUr)} (${ins.role === 'friend' ? tr('friendTag') : tr('foeTag')})`,
        meta: t(ins.targetEn, ins.targetUr)
      });
    }
  }

  for (const term of GLOSSARY_TERMS) {
    const haystack = `${term.termEn} ${term.termUr} ${term.defEn} ${term.defUr}`.toLowerCase();
    if (haystack.includes(q)) {
      matches.push({
        sectionId: 'summaries-glossary',
        title: t(term.termEn, term.termUr),
        meta: t(term.defEn, term.defUr)
      });
    }
  }

  box.hidden = false;
  if (matches.length === 0) {
    box.innerHTML = `<p class="search-results-heading">${escapeHtml(tr('searchEmpty'))}</p>`;
    return;
  }

  const topMatches = matches.slice(0, 8);
  box.innerHTML = `
    <p class="search-results-heading">${escapeHtml(tr('searchResultsTitle'))} <span class="tabular-nums">(${matches.length})</span></p>
    <div class="search-result-list">
      ${topMatches
        .map((m) => {
          const attr = m.cropId
            ? `data-search-crop="${m.cropId}"`
            : m.labTestId
              ? `data-search-lab="${m.labTestId}"`
              : m.fieldGuideId
                ? `data-search-fg="${m.fieldGuideId}"`
                : m.chapterNum
                  ? `data-search-chapter="${m.chapterNum}"`
                  : `data-search-target="${m.sectionId}"`;
          return `
            <button type="button" class="search-result-item" ${attr}>
              <span class="search-result-title">${formatRichText(m.title)}</span>
              <span class="search-result-meta">${formatRichText(m.meta)}</span>
            </button>
          `;
        })
        .join('')}
    </div>
  `;

  box.querySelectorAll('[data-search-crop]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToCrop(btn.getAttribute('data-search-crop'));
    });
  });

  box.querySelectorAll('[data-search-lab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToLabTest(btn.getAttribute('data-search-lab'));
    });
  });

  box.querySelectorAll('[data-search-fg]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToFieldGuide(btn.getAttribute('data-search-fg'));
    });
  });

  box.querySelectorAll('[data-search-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToSection(btn.getAttribute('data-search-target'));
    });
  });

  box.querySelectorAll('[data-search-chapter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToChapter(Number(btn.getAttribute('data-search-chapter')));
    });
  });
}

/* ==========================================================================
   DETAIL SECTION RENDERER & INTERACTIVE MODULES
   ========================================================================== */

function renderSectionDetail(sectionId) {
  const index = LEARNING_SECTIONS.findIndex((s) => s.id === sectionId);
  const sec = LEARNING_SECTIONS[index] || LEARNING_SECTIONS[0];
  const isDone = state.completedIds.includes(sec.id);

  const primaryTitle = state.lang === 'ur' ? sec.titleUr : sec.titleEn;
  const altTitle = state.lang === 'ur' ? sec.titleEn : sec.titleUr;
  const summary = state.lang === 'ur' ? sec.summaryUr : sec.summaryEn;
  const principles = state.lang === 'ur' ? sec.principlesUr : sec.principlesEn;
  const tip = state.lang === 'ur' ? sec.tipUr : sec.tipEn;
  const warning = state.lang === 'ur' ? sec.warningUr : sec.warningEn;

  const prevSec = index > 0 ? LEARNING_SECTIONS[index - 1] : null;
  const nextSec = index < LEARNING_SECTIONS.length - 1 ? LEARNING_SECTIONS[index + 1] : null;

  const container = document.getElementById('detail-container');
  container.innerHTML = `
    <div class="detail-topbar">
      <button type="button" class="btn btn-outline" id="btn-back-home">
        <span class="dir-flip">←</span> ${escapeHtml(tr('backToHome'))}
      </button>
      <button type="button" class="btn ${isDone ? 'btn-primary' : 'btn-outline'}" id="btn-toggle-complete">
        ${isDone ? `✓ ${escapeHtml(tr('markedCompleted'))}` : escapeHtml(tr('markCompleted'))}
      </button>
    </div>

    <div class="detail-hero-box">
      <div class="detail-hero-grid ${sec.image ? 'has-image' : ''}">
        <div class="detail-hero-body">
          <p class="detail-kicker">${escapeHtml(tr('topicWord'))} <span class="tabular-nums">${sec.num} ${tr('ofTotal')}</span></p>
          <h1 class="detail-title">${escapeHtml(primaryTitle)}</h1>
          <p class="detail-alt-title" lang="${state.lang === 'ur' ? 'en' : 'ur'}" dir="${state.lang === 'ur' ? 'ltr' : 'rtl'}">${escapeHtml(altTitle)}</p>
          <p class="detail-summary">${formatRichText(summary)}</p>
        </div>
        ${
          sec.image
            ? `<img src="${sec.image}" alt="${escapeHtml(t(sec.titleEn, sec.titleUr))}" class="detail-hero-img" referrerpolicy="no-referrer" />`
            : ''
        }
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-card full-span">
        <h3>${escapeHtml(tr('keyGuidanceHeading'))}</h3>
        <ul class="principles-list">
          ${principles.map((p) => `<li>${formatRichText(p)}</li>`).join('')}
        </ul>
      </div>

      <div class="detail-card full-span" id="interactive-module-host"></div>

      <div class="callout-box callout-tip">
        <p class="callout-title">${escapeHtml(tr('practicalTipTitle'))}</p>
        <p class="callout-text">${formatRichText(tip)}</p>
      </div>

      <div class="callout-box callout-warning">
        <p class="callout-title">${escapeHtml(tr('fieldWarningTitle'))}</p>
        <p class="callout-text">${formatRichText(warning)}</p>
      </div>
    </div>

    <div class="detail-footer-nav">
      ${
        prevSec
          ? `<button type="button" class="btn btn-outline" id="btn-prev-topic"><span class="dir-flip">←</span> ${escapeHtml(tr('previousTopic'))}: ${escapeHtml(t(prevSec.titleEn, prevSec.titleUr))}</button>`
          : '<span></span>'
      }
      ${
        nextSec
          ? `<button type="button" class="btn btn-primary" id="btn-next-topic">${escapeHtml(tr('nextTopic'))}: ${escapeHtml(t(nextSec.titleEn, nextSec.titleUr))} <span class="dir-flip">→</span></button>`
          : `<button type="button" class="btn btn-primary" id="btn-finish-home">${escapeHtml(tr('backToHome'))}</button>`
      }
    </div>
  `;

  document.getElementById('btn-back-home').addEventListener('click', navigateToHome);
  document.getElementById('btn-toggle-complete').addEventListener('click', () => {
    toggleSectionCompleted(sec.id);
    renderSectionDetail(sec.id);
    renderProgress();
    renderTopicCards();
  });

  if (prevSec) {
    document.getElementById('btn-prev-topic').addEventListener('click', () => navigateToSection(prevSec.id));
  }
  if (nextSec) {
    document.getElementById('btn-next-topic').addEventListener('click', () => navigateToSection(nextSec.id));
  } else {
    document.getElementById('btn-finish-home').addEventListener('click', navigateToHome);
  }

  mountInteractiveModule(sec, document.getElementById('interactive-module-host'));
}

/* ==========================================================================
   INTERACTIVE MODULE DISPATCHER (ALL 15 SECTIONS WORKING)
   ========================================================================== */

function mountInteractiveModule(sec, host) {
  switch (sec.interactiveType) {
    case 'unit-converter':
      mountUnitConverter(host);
      break;
    case 'crop-calendar':
      mountCropCalendar(host);
      break;
    case 'sowing-comparison':
      mountSowingComparison(host);
      break;
    case 'awd-diagram':
      mountAwdDiagram(host);
      break;
    case 'insects-filter':
      mountInsectsFilter(host);
      break;
    case 'biodiversity-cards':
      mountBiodiversityCards(host);
      break;
    case 'cover-crops-table':
      mountCoverCropsTable(host);
      break;
    case 'compost-calculator':
      mountCompostCalculator(host);
      break;
    case 'tools-directory':
      mountToolsDirectory(host);
      break;
    case 'spade-tester':
      mountSpadeTester(host);
      break;
    case 'simulations-lab':
      mountSimulationsLab(host);
      break;
    case 'video-walkthroughs':
      mountVideoWalkthroughs(host);
      break;
    case 'quiz-and-game':
      mountQuizAndGame(host);
      break;
    case 'farm-planner':
      mountFarmPlanner(host);
      break;
    case 'glossary-view':
      mountGlossaryView(host);
      break;
    default:
      host.innerHTML = '';
  }
}

/* 1. Narowal Land & Weight Converter */
function mountUnitConverter(host) {
  host.innerHTML = `
    <h3>${escapeHtml(tr('unitConvTitle'))}</h3>
    <div class="form-grid">
      <div>
        <label for="conv-kanal" class="field-label">${formatRichText(tr('unitKanalLabel'))}</label>
        <input type="number" id="conv-kanal" class="field-input" min="0" step="0.5" value="2" />
      </div>
      <div>
        <label for="conv-maund" class="field-label">${formatRichText(tr('unitMaundLabel'))}</label>
        <input type="number" id="conv-maund" class="field-input" min="0" step="1" value="40" />
      </div>
    </div>
    <div class="metric-strip" id="conv-output"></div>
  `;

  const kanalEl = document.getElementById('conv-kanal');
  const maundEl = document.getElementById('conv-maund');
  const outEl = document.getElementById('conv-output');

  function update() {
    const k = Math.max(0, Number(kanalEl.value) || 0);
    const m = Math.max(0, Number(maundEl.value) || 0);
    outEl.innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('unitAcres'))}</span><span class="metric-value tabular-nums">${(k / 8).toFixed(2)}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('unitMarlas'))}</span><span class="metric-value tabular-nums">${(k * 20).toFixed(0)}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('unitKg'))}</span><span class="metric-value tabular-nums">${(m * 40).toLocaleString()} kg</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('unitTonnes'))}</span><span class="metric-value tabular-nums">${((m * 40) / 1000).toFixed(2)} t</span></div>
    `;
  }
  kanalEl.addEventListener('input', update);
  maundEl.addEventListener('input', update);
  update();
}

/* 2. Interactive Crop Library Explorer (mounted both in Topic #2 and Homepage) */
function mountCropCalendar(host) {
  renderCropLibraryWorkbench(host);
}

/* 3. Sowing Methods Visual Comparison */
function mountSowingComparison(host) {
  const convBullets = tr('sowingConvBullets');
  const regenBullets = tr('sowingRegenBullets');
  host.innerHTML = `
    <h3>${escapeHtml(tr('sowingCompTitle'))}</h3>
    <div class="mini-cards-grid">
      <div class="mini-card is-foe">
        <strong>${formatRichText(tr('sowingConvTitle'))}</strong>
        <ul style="margin:8px 0 0;padding-inline-start:18px;font-size:0.9rem">
          ${convBullets.map((b) => `<li>${formatRichText(b)}</li>`).join('')}
        </ul>
      </div>
      <div class="mini-card is-friend">
        <strong>${formatRichText(tr('sowingRegenTitle'))}</strong>
        <ul style="margin:8px 0 0;padding-inline-start:18px;font-size:0.9rem">
          ${regenBullets.map((b) => `<li>${formatRichText(b)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

/* 4. AWD 15cm Perforated Pipe Diagram */
function mountAwdDiagram(host) {
  const levels = {
    flooded: { y: 46, msg: tr('awdMsgFlooded'), badge: 'leaf' },
    safe: { y: 105, msg: tr('awdMsgSafe'), badge: 'water' },
    irrigate: { y: 145, msg: tr('awdMsgIrrigate'), badge: 'warning' },
    flowering: { y: 50, msg: tr('awdMsgFlowering'), badge: 'tip' }
  };
  const current = levels[state.awdState];

  host.innerHTML = `
    <h3>${formatRichText(tr('awdTitle'))}</h3>
    <div class="control-row">
      <button type="button" class="tab-btn ${state.awdState === 'flooded' ? 'is-active' : ''}" data-awd="flooded">${formatRichText(tr('awdBtnFlooded'))}</button>
      <button type="button" class="tab-btn ${state.awdState === 'safe' ? 'is-active' : ''}" data-awd="safe">${formatRichText(tr('awdBtnSafe'))}</button>
      <button type="button" class="tab-btn ${state.awdState === 'irrigate' ? 'is-active' : ''}" data-awd="irrigate">${formatRichText(tr('awdBtnIrrigate'))}</button>
      <button type="button" class="tab-btn ${state.awdState === 'flowering' ? 'is-active' : ''}" data-awd="flowering">${formatRichText(tr('awdBtnFlowering'))}</button>
    </div>
    <svg viewBox="0 0 500 185" class="sim-canvas" role="img" aria-label="${escapeHtml(tr('awdTitle'))}">
      <rect x="0" y="0" width="500" height="62" fill="#e8f5e9"/>
      <rect x="0" y="62" width="500" height="123" fill="#6d4c41"/>
      <line x1="0" y1="62" x2="500" y2="62" stroke="#3e2723" stroke-width="3"/>
      <path d="M90 62 L85 24 M90 62 L97 22 M140 62 L134 20 M140 62 L147 26 M360 62 L354 22 M360 62 L368 25" stroke="#2e7d32" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="220" y="34" width="60" height="132" rx="6" fill="#eceff1" stroke="#455a64" stroke-width="3"/>
      <rect x="223" y="${current.y}" width="54" height="${164 - current.y}" fill="#0288d1" opacity="0.82"/>
      <circle cx="235" cy="95" r="3" fill="#37474f"/><circle cx="265" cy="115" r="3" fill="#37474f"/><circle cx="235" cy="135" r="3" fill="#37474f"/>
      <line x1="205" y1="145" x2="295" y2="145" stroke="#fde047" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="302" y="149" fill="#ffffff" font-size="12" font-weight="bold">15 cm</text>
      <text x="20" y="54" fill="#1b4d3e" font-size="12" font-weight="bold">${escapeHtml(tr('awdSoilSurface'))}</text>
    </svg>
    <div class="callout-box ${current.badge === 'warning' ? 'callout-warning' : 'callout-tip'}">
      <p class="callout-text"><strong>${formatRichText(current.msg)}</strong></p>
    </div>
  `;

  host.querySelectorAll('[data-awd]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.awdState = btn.getAttribute('data-awd');
      mountAwdDiagram(host);
    });
  });
}

/* 5. Insects Friends vs Foes Filter + Field Guide Deep Link */
function mountInsectsFilter(host) {
  const insectEntries = FIELD_GUIDE_ENTRIES.filter((e) => e.category === 'beneficial' || e.category === 'harmful');
  const items =
    state.insectFilter === 'all'
      ? insectEntries
      : state.insectFilter === 'friend'
        ? insectEntries.filter((e) => e.category === 'beneficial')
        : insectEntries.filter((e) => e.category === 'harmful');

  host.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px">
      <h3 style="margin:0">${escapeHtml(tr('insectsTitle'))}</h3>
      <button type="button" class="btn btn-outline" id="btn-open-fg-insects">${escapeHtml(tr('fgTabGuided'))}</button>
    </div>
    <div class="control-row">
      <button type="button" class="tab-btn ${state.insectFilter === 'all' ? 'is-active' : ''}" data-if="all">${escapeHtml(tr('insectsAll'))}</button>
      <button type="button" class="tab-btn ${state.insectFilter === 'friend' ? 'is-active' : ''}" data-if="friend">${escapeHtml(tr('insectsFriends'))}</button>
      <button type="button" class="tab-btn ${state.insectFilter === 'foe' ? 'is-active' : ''}" data-if="foe">${escapeHtml(tr('insectsFoes'))}</button>
    </div>
    <div class="mini-cards-grid">
      ${items
        .map(
          (i) => `
          <button type="button" class="mini-card ${i.category === 'beneficial' ? 'is-friend' : 'is-foe'}" style="text-align:start;cursor:pointer" data-ins-fg="${i.id}">
            <strong>${formatRichText(t(i.nameEn, i.nameUr))}</strong>
            <p style="margin:6px 0 4px;font-size:0.86rem">${formatRichText(t(i.clues.en, i.clues.ur))}</p>
            <p style="margin:0;font-size:0.84rem;font-weight:700">${escapeHtml(tr('fgOpenCard'))} <span class="dir-flip">→</span></p>
          </button>
        `
        )
        .join('')}
    </div>
  `;

  host.querySelector('#btn-open-fg-insects').addEventListener('click', () => {
    state.fgTab = 'guided';
    state.fgGuidedGroup = 'insect-pest-or-ally';
    navigateToHome();
    setTimeout(() => {
      renderFieldGuideWorkbench(document.getElementById('field-guide-workbench'));
      const el = document.getElementById('field-guide');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  });

  host.querySelectorAll('[data-ins-fg]').forEach((btn) => {
    btn.addEventListener('click', () => navigateToFieldGuide(btn.getAttribute('data-ins-fg')));
  });

  host.querySelectorAll('[data-if]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.insectFilter = btn.getAttribute('data-if');
      mountInsectsFilter(host);
    });
  });
}

/* 6. Birds, Trees & Livestock + Library C Bird Links */
function mountBiodiversityCards(host) {
  const birdEntries = FIELD_GUIDE_ENTRIES.filter((e) => e.category === 'bird');
  host.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px">
      <h3 style="margin:0">${escapeHtml(tr('bioTitle'))}</h3>
      <button type="button" class="btn btn-outline" id="btn-open-fg-birds">${escapeHtml(tr('fgFilterBird'))}</button>
    </div>
    <div class="mini-cards-grid" style="margin-bottom:16px">
      <div class="mini-card is-friend">
        <strong>${escapeHtml(tr('bioTreesTitle'))}</strong>
        <p style="margin:6px 0 0;font-size:0.9rem">${formatRichText(tr('bioTreesDesc'))}</p>
      </div>
      <div class="mini-card">
        <strong>${escapeHtml(tr('bioLivestockTitle'))}</strong>
        <p style="margin:6px 0 0;font-size:0.9rem">${formatRichText(tr('bioLivestockDesc'))}</p>
      </div>
      <div class="mini-card">
        <strong>${escapeHtml(tr('bioPoultryTitle'))}</strong>
        <p style="margin:6px 0 0;font-size:0.9rem">${formatRichText(tr('bioPoultryDesc'))}</p>
      </div>
    </div>
    <div class="mini-cards-grid">
      ${birdEntries
        .map(
          (b) => `
          <button type="button" class="mini-card ${b.subRole === 'crop-damage' ? 'is-foe' : 'is-friend'}" style="text-align:start;cursor:pointer" data-bio-fg="${b.id}">
            <span style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:3px">${escapeHtml(t(b.subRoleEn, b.subRoleUr))}</span>
            <strong>${formatRichText(t(b.nameEn, b.nameUr))}</strong>
            <p style="margin:6px 0 0;font-size:0.86rem">${formatRichText(t(b.clues.en, b.clues.ur))}</p>
          </button>
        `
        )
        .join('')}
    </div>
  `;

  host.querySelector('#btn-open-fg-birds').addEventListener('click', () => {
    state.fgTab = 'gallery';
    state.fgFilter = 'bird';
    navigateToHome();
    setTimeout(() => {
      renderFieldGuideWorkbench(document.getElementById('field-guide-workbench'));
      const el = document.getElementById('field-guide');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  });

  host.querySelectorAll('[data-bio-fg]').forEach((btn) => {
    btn.addEventListener('click', () => navigateToFieldGuide(btn.getAttribute('data-bio-fg')));
  });
}

/* 7. Herbs, Weeds & Useful Plants + Library D Links */
function mountCoverCropsTable(host) {
  const plantEntries = FIELD_GUIDE_ENTRIES.filter((e) => e.category === 'weed' || e.category === 'useful-plant');
  host.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px">
      <h3 style="margin:0">${escapeHtml(tr('coverTitle'))}</h3>
      <button type="button" class="btn btn-outline" id="btn-open-fg-plants">${escapeHtml(tr('fgOpenCard'))}</button>
    </div>
    <div class="mini-cards-grid">
      ${plantEntries
        .map(
          (p) => `
          <button type="button" class="mini-card ${p.category === 'weed' ? 'is-foe' : 'is-friend'}" style="text-align:start;cursor:pointer" data-pl-fg="${p.id}">
            <span style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:3px">${escapeHtml(t(p.categoryEn, p.categoryUr))}</span>
            <strong>${formatRichText(t(p.nameEn, p.nameUr))}</strong>
            <p style="margin:6px 0 0;font-size:0.86rem">${formatRichText(t(p.clues.en, p.clues.ur))}</p>
          </button>
        `
        )
        .join('')}
    </div>
  `;

  host.querySelector('#btn-open-fg-plants').addEventListener('click', () => {
    state.fgTab = 'gallery';
    state.fgFilter = 'useful-plant';
    navigateToHome();
    setTimeout(() => {
      renderFieldGuideWorkbench(document.getElementById('field-guide-workbench'));
      const el = document.getElementById('field-guide');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  });

  host.querySelectorAll('[data-pl-fg]').forEach((btn) => {
    btn.addEventListener('click', () => navigateToFieldGuide(btn.getAttribute('data-pl-fg')));
  });
}

/* 8. Compost Ratio & Trolley Calculator */
function mountCompostCalculator(host) {
  host.innerHTML = `
    <h3>${escapeHtml(tr('compTitle'))}</h3>
    <div class="form-grid">
      <div>
        <label for="comp-kanals" class="field-label">${escapeHtml(tr('compKanalsLabel'))}</label>
        <input type="number" id="comp-kanals" class="field-input" min="1" max="160" value="4" />
      </div>
      <div>
        <label for="comp-dry" class="field-label">${escapeHtml(tr('compDryLabel'))}</label>
        <input type="number" id="comp-dry" class="field-input" min="1" value="4" />
      </div>
    </div>
    <div class="metric-strip" id="comp-output"></div>
  `;

  const kEl = document.getElementById('comp-kanals');
  const dEl = document.getElementById('comp-dry');
  const outEl = document.getElementById('comp-output');

  function update() {
    const k = Math.max(1, Number(kEl.value) || 1);
    const d = Math.max(1, Number(dEl.value) || 1);
    const trolleysLow = (k * 0.5).toFixed(1);
    const trolleysHigh = (k * 1).toFixed(1);
    const greenNeeded = (d / 2).toFixed(1);
    outEl.innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('compRecommended'))}</span><span class="metric-value"><span class="tabular-nums">${trolleysLow}–${trolleysHigh}</span> ${escapeHtml(tr('compTrolleys'))}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('compGreenNeeded'))}</span><span class="metric-value"><span class="tabular-nums">${greenNeeded}</span> ${escapeHtml(tr('compParts'))}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('compReadyTime'))}</span><span class="metric-value"><span class="tabular-nums">2–3</span> ${escapeHtml(tr('compMonths'))}</span></div>
    `;
  }
  kEl.addEventListener('input', update);
  dEl.addEventListener('input', update);
  update();
}

/* 9. Farming Tools Directory */
function mountToolsDirectory(host) {
  const tools = [
    { nameEn: 'Happy Seeder / Zero-Till Drill', nameUr: 'ہیپی سیڈر / زیرو ٹل ڈرل', descEn: 'Zero Tillage drill: sows wheat directly into rice straw without burning.', descUr: 'بغیر ہل چلائے کاشت (Zero Tillage): پرالی جلائے بغیر چاول کے بعد گندم بوتا ہے۔' },
    { nameEn: 'Laser Land Leveller', nameUr: 'لیزر لینڈ لیولر', descEn: 'Saves 20–30% irrigation water and levels uneven fields.', descUr: '20–30% پانی بچاتا اور زمین ہموار کرتا ہے۔' },
    { nameEn: 'Chisel Plough', nameUr: 'چیزل ہل', descEn: 'Breaks deep compacted hard pan without flipping topsoil.', descUr: 'اوپری مٹی الٹے بغیر نیچے کی سخت تہہ توڑتا ہے۔' },
    { nameEn: 'Yellow Sticky & Pheromone Traps', nameUr: 'زرد چپکنے والے اور فیرومون ٹریپ', descEn: 'Low-cost monitoring and trapping for whitefly & borers.', descUr: 'سفید مکھی اور سنڈی کی نگرانی و کنٹرول کے سستے ٹریپ۔' }
  ];
  host.innerHTML = `
    <h3>${escapeHtml(tr('toolsTitle'))}</h3>
    <div class="mini-cards-grid">
      ${tools
        .map(
          (tl) => `
          <div class="mini-card">
            <strong>${formatRichText(t(tl.nameEn, tl.nameUr))}</strong>
            <p style="margin:6px 0 0;font-size:0.9rem">${formatRichText(t(tl.descEn, tl.descUr))}</p>
          </div>
        `
        )
        .join('')}
    </div>
  `;
}

/* 10. Interactive Spade & Field Assessment Tester */
function mountSpadeTester(host) {
  const questions = [
    { key: 'feel', qEn: '1. Soil feel (1 spade deep)', qUr: '1۔ بیلچے سے کھودنے پر مٹی', goodEn: 'Crumbly, dark, 5+ worms', goodUr: 'بھربھری، گہری، 5+ کینچوے', badEn: 'Hard, pale, no worms', badUr: 'سخت، پھیکی، کینچوے نہیں' },
    { key: 'soak', qEn: '2. Rainwater soak speed', qUr: '2۔ بارش کا پانی جذب ہونا', goodEn: 'Soaks in minutes', goodUr: 'چند منٹ میں جذب', badEn: 'Pools (Waterlogging)', badUr: 'پانی کھڑا رہتا ہے' },
    { key: 'salt', qEn: '3. White salt crust in summer', qUr: '3۔ گرمیوں میں سفید نمک', goodEn: 'None visible', goodUr: 'کوئی دھبے نہیں', badEn: 'White salt patches', badUr: 'سفید نمک کے دھبے' },
    { key: 'roots', qEn: '4. Plant root depth', qUr: '4۔ پودے کی جڑیں', goodEn: 'Deep & branching', goodUr: 'گہری اور پھیلی ہوئی', badEn: 'Short & shallow', badUr: 'چھوٹی اور اوپری سطح پر' },
    { key: 'insects', qEn: '5. Beneficial Insects seen', qUr: '5۔ فائدہ مند حشرات', goodEn: 'Ladybirds & spiders seen', goodUr: 'لیڈی برڈ اور مکڑیاں موجود', badEn: 'Rarely seen', badUr: 'شاذ و نادر' }
  ];

  const score = Object.values(state.spadeAnswers).filter((v) => v === 'good').length;
  let advice = tr('spadeAdviceHigh');
  if (score <= 2) advice = tr('spadeAdviceLow');
  else if (score <= 4) advice = tr('spadeAdviceMid');

  host.innerHTML = `
    <h3>${escapeHtml(tr('spadeTitle'))}</h3>
    <div style="display:grid;gap:10px;margin-bottom:14px">
      ${questions
        .map((q) => {
          const val = state.spadeAnswers[q.key];
          return `
            <div class="mini-card" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px">
              <strong>${escapeHtml(t(q.qEn, q.qUr))}</strong>
              <div class="control-row" style="margin:0">
                <button type="button" class="tab-btn ${val === 'good' ? 'is-active' : ''}" data-spade-q="${q.key}" data-spade-v="good">${formatRichText(t(q.goodEn, q.goodUr))}</button>
                <button type="button" class="tab-btn ${val === 'bad' ? 'is-active' : ''}" data-spade-q="${q.key}" data-spade-v="bad">${formatRichText(t(q.badEn, q.badUr))}</button>
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
    <div class="callout-box ${score <= 2 ? 'callout-warning' : 'callout-tip'}">
      <p class="callout-title">${escapeHtml(tr('spadeScoreLabel'))}: <span class="tabular-nums">${score} / 5</span></p>
      <p class="callout-text">${formatRichText(advice)}</p>
    </div>
    <div class="verify-box" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px">
      <div>
        <p class="callout-title">${escapeHtml(tr('labHeading'))}</p>
        <p class="callout-text">${escapeHtml(tr('labDisclaimerText'))}</p>
      </div>
      <button type="button" class="btn btn-primary" id="btn-topic-open-lab">${escapeHtml(tr('heroCtaLab'))}</button>
    </div>
  `;

  host.querySelector('#btn-topic-open-lab').addEventListener('click', () => navigateToHome('home-farm-lab'));

  host.querySelectorAll('[data-spade-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.spadeAnswers[btn.getAttribute('data-spade-q')] = btn.getAttribute('data-spade-v');
      mountSpadeTester(host);
    });
  });
}

/* ==========================================================================
   INTERACTIVE FARM SIMULATION & LEARNING CENTRE (MODULES 11-13 + WORKBENCH)
   ========================================================================== */

function downloadModuleSummaryTxt(mod) {
  const sum = mod.summary;
  const ptsEn = sum.fivePointsEn.map((p, i) => `  ${i + 1}. ${p}`).join('\n');
  const ptsUr = sum.fivePointsUr.map((p, i) => `  ${i + 1}. ${p}`).join('\n');
  const vocabTxt = sum.vocab.map((v) => `  - ${v.en} — ${v.ur}`).join('\n');
  const content = [
    'REGENERATIVE FARMING LEARNING HUB · NAROWAL, PUNJAB',
    'احیائی کاشتکاری کا تعلیمی مرکز · ضلع نارووال',
    '====================================================',
    `${mod.titleEn}`,
    `${mod.titleUr}`,
    '',
    '1. FIVE KEY POINTS (ENGLISH):',
    ptsEn,
    '',
    '1۔ پانچ اہم نکات (اردو):',
    ptsUr,
    '',
    '2. ONE-MINUTE REVISION:',
    `  EN: ${sum.oneMinEn}`,
    `  UR: ${sum.oneMinUr}`,
    '',
    '3. IMPORTANT VOCABULARY:',
    vocabTxt,
    '',
    '4. ONE PRACTICAL ACTION:',
    `  EN: ${sum.actionEn}`,
    `  UR: ${sum.actionUr}`,
    '====================================================',
    'Disclaimer: Educational reference only. Verify exact local dates, rates, and varieties with Punjab Agriculture Extension Narowal.'
  ].join('\n');

  const blob = new Blob(['\uFEFF' + content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `narowal-summary-${mod.id}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function renderModuleSummaryCard(mod) {
  const isUr = state.lang === 'ur';
  const s = mod.summary;
  const pts = isUr ? s.fivePointsUr : s.fivePointsEn;
  const oneMin = isUr ? s.oneMinUr : s.oneMinEn;
  const action = isUr ? s.actionUr : s.actionEn;

  return `
    <div class="mod-summary-box" data-summary-id="${mod.id}">
      <div class="mod-summary-head">
        <div>
          <strong style="color:var(--forest-dark);font-size:1.05rem">${escapeHtml(t(mod.titleEn, mod.titleUr))}</strong>
          <p style="margin:2px 0 0;font-size:0.84rem;color:var(--text-muted)" lang="${isUr ? 'en' : 'ur'}" dir="${isUr ? 'ltr' : 'rtl'}">${escapeHtml(isUr ? mod.titleEn : mod.titleUr)}</p>
        </div>
        <div class="control-row" style="margin:0">
          <button type="button" class="tab-btn" data-sum-print="${mod.id}">${escapeHtml(tr('sumPrintBtn'))}</button>
          <button type="button" class="tab-btn is-active" data-sum-dl="${mod.id}">${escapeHtml(tr('sumDownloadBtn'))}</button>
        </div>
      </div>

      <div class="mod-summary-grid">
        <div class="mod-summary-sub">
          <h4>${escapeHtml(tr('sum5Points'))}</h4>
          <ol class="principles-list">
            ${pts.map((pt) => `<li>${formatRichText(pt)}</li>`).join('')}
          </ol>
        </div>

        <div style="display:grid;gap:14px;align-content:start">
          <div class="mod-summary-sub">
            <h4>${escapeHtml(tr('sum1Min'))}</h4>
            <p style="margin:0;font-size:0.93rem">${formatRichText(oneMin)}</p>
          </div>

          <div class="mod-summary-sub">
            <h4>${escapeHtml(tr('sumVocab'))}</h4>
            <div class="mod-vocab-list">
              ${s.vocab
                .map(
                  (v) =>
                    `<div><strong>${escapeHtml(v.en)}</strong> — <span lang="ur" dir="rtl">${escapeHtml(v.ur)}</span></div>`
                )
                .join('')}
            </div>
          </div>

          <div class="callout-box callout-tip" style="margin:0">
            <p class="callout-title">${escapeHtml(tr('sumAction'))}</p>
            <p class="callout-text">${formatRichText(action)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function attachSummaryCardHandlers(container) {
  container.querySelectorAll('[data-sum-print]').forEach((btn) => {
    btn.addEventListener('click', () => window.print());
  });
  container.querySelectorAll('[data-sum-dl]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modId = btn.getAttribute('data-sum-dl');
      const mod = SIMULATION_MODULES.find((m) => m.id === modId);
      if (mod) downloadModuleSummaryTxt(mod);
    });
  });
}

/* Simulation 1: Bare Soil vs. Mulched Soil */
function renderSim1SoilCover(panel) {
  const weather = state.simSoilWeather;
  const cm = state.simMulchCm;

  const baseBareTemp = weather === 'heat' ? 56 : weather === 'rain' ? 32 : 24;
  const bareMoist = weather === 'heat' ? 18 : weather === 'rain' ? 48 : 38;
  const mulchCoolDrop = weather === 'heat' ? cm * 4 : weather === 'rain' ? cm * 0.6 : cm * 0.5;
  const mulchTemp = Math.max(16, Math.round(baseBareTemp - mulchCoolDrop));
  const mulchMoist = Math.min(90, Math.round(bareMoist + cm * (weather === 'rain' ? 6.5 : 10)));

  const rainWaves = weather === 'rain'
    ? '<path d="M40 12 L34 28 M95 14 L89 30 M155 10 L149 26 M215 15 L209 31 M275 12 L269 28" stroke="#0288d1" stroke-width="2.5" stroke-linecap="round"/>'
    : weather === 'heat'
      ? '<circle cx="275" cy="26" r="15" fill="#f59e0b"/><path d="M55 46 Q62 34 69 46 M115 46 Q122 34 129 46 M175 46 Q182 34 189 46" stroke="#dc2626" stroke-width="2" fill="none"/>'
      : '<circle cx="275" cy="26" r="12" fill="#fbbf24"/>';

  const bareRisk = weather === 'rain' || cm === 0 ? tr('scRiskHigh') : tr('scRiskMid');
  const mulchRisk = cm >= 3 ? tr('scRiskLow') : cm >= 1 ? tr('scRiskMid') : tr('scRiskHigh');

  panel.innerHTML = `
    <div class="control-row" style="align-items:center">
      <strong style="color:var(--forest-dark)">${escapeHtml(tr('scWeatherLabel'))}:</strong>
      <button type="button" class="tab-btn ${weather === 'heat' ? 'is-active' : ''}" data-sc-w="heat">${escapeHtml(tr('scWeatherHeat'))}</button>
      <button type="button" class="tab-btn ${weather === 'rain' ? 'is-active' : ''}" data-sc-w="rain">${escapeHtml(tr('scWeatherRain'))}</button>
      <button type="button" class="tab-btn ${weather === 'mild' ? 'is-active' : ''}" data-sc-w="mild">${escapeHtml(tr('scWeatherMild'))}</button>
    </div>

    <div style="margin:10px 0 14px">
      <label for="sc-mulch-range" class="field-label">
        ${escapeHtml(tr('scMulchCmLabel'))}: <span class="tabular-nums" id="sc-cm-val">${cm} cm</span>
      </label>
      <input type="range" id="sc-mulch-range" class="range-slider" min="0" max="6" step="1" value="${cm}" />
    </div>

    <div class="sim-split-grid">
      <div class="sim-panel-card is-bare">
        <strong style="display:block;margin-bottom:8px;color:var(--warning)">${escapeHtml(tr('scBareCol'))}</strong>
        <svg viewBox="0 0 320 145" class="sim-stage-svg" role="img" aria-label="Bare soil cross section">
          <rect x="0" y="0" width="320" height="58" fill="${weather === 'heat' ? '#fef2f2' : '#e0f2fe'}"/>
          ${rainWaves}
          <rect x="0" y="58" width="320" height="87" fill="#a1887f"/>
          <rect x="0" y="58" width="320" height="8" fill="#795548"/>
          <path d="M35 66 L50 84 M120 66 L108 86 M225 66 L238 82" stroke="#5d4037" stroke-width="2"/>
          <text x="160" y="128" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">0 cm Cover · Surface Crusting / High Heat</text>
        </svg>
        <div class="metric-strip" style="margin-top:0">
          <div class="metric-box"><span class="metric-label">${escapeHtml(tr('scTempLabel'))}</span><span class="metric-value tabular-nums" style="color:var(--warning)">~${baseBareTemp}°C</span></div>
          <div class="metric-box"><span class="metric-label">${escapeHtml(tr('scMoistLabel'))}</span><span class="metric-value tabular-nums">~${bareMoist}%</span></div>
          <div class="metric-box"><span class="metric-label">${escapeHtml(tr('scErosionLabel'))}</span><span class="metric-value" style="font-size:0.95rem;color:var(--warning)">${escapeHtml(bareRisk)}</span></div>
        </div>
      </div>

      <div class="sim-panel-card is-mulch">
        <strong style="display:block;margin-bottom:8px;color:var(--leaf-dark)">${escapeHtml(tr('scMulchCol', { cm }))}</strong>
        <svg viewBox="0 0 320 145" class="sim-stage-svg" role="img" aria-label="Mulched soil cross section">
          <rect x="0" y="0" width="320" height="58" fill="${weather === 'rain' ? '#e0f2fe' : '#f0fdf4'}"/>
          ${weather === 'rain' ? '<path d="M40 12 L34 28 M120 14 L114 30 M200 10 L194 26" stroke="#0288d1" stroke-width="2.5" stroke-linecap="round"/>' : '<circle cx="275" cy="26" r="14" fill="#f59e0b"/>'}
          <rect x="0" y="58" width="320" height="87" fill="#4e342e"/>
          ${cm > 0 ? `<rect x="0" y="${58 - cm * 3.5}" width="320" height="${cm * 3.5}" fill="#eab308"/>` : ''}
          ${cm >= 3 ? '<path d="M60 95 Q72 88 84 95 M160 102 Q172 95 184 102 M240 92 Q252 85 264 92" stroke="#f48fb1" stroke-width="3" fill="none" stroke-linecap="round"/>' : ''}
          <text x="160" y="128" text-anchor="middle" fill="#dcfce7" font-size="11" font-weight="bold">${cm} cm Straw Cushion · Cool &amp; Sponge-Like</text>
        </svg>
        <div class="metric-strip" style="margin-top:0">
          <div class="metric-box"><span class="metric-label">${escapeHtml(tr('scTempLabel'))}</span><span class="metric-value tabular-nums" style="color:var(--leaf-dark)">~${mulchTemp}°C</span></div>
          <div class="metric-box"><span class="metric-label">${escapeHtml(tr('scMoistLabel'))}</span><span class="metric-value tabular-nums" style="color:var(--water-dark)">~${mulchMoist}%</span></div>
          <div class="metric-box"><span class="metric-label">${escapeHtml(tr('scErosionLabel'))}</span><span class="metric-value" style="font-size:0.95rem;color:${cm >= 3 ? 'var(--leaf-dark)' : 'var(--brown-dark)'}">${escapeHtml(mulchRisk)}</span></div>
        </div>
      </div>
    </div>
  `;

  panel.querySelectorAll('[data-sc-w]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.simSoilWeather = btn.getAttribute('data-sc-w');
      renderSim1SoilCover(panel);
    });
  });

  panel.querySelector('#sc-mulch-range').addEventListener('input', (e) => {
    state.simMulchCm = Number(e.target.value);
    renderSim1SoilCover(panel);
  });
}

/* Simulation 2: Crop Rotation Builder */
function renderSim2CropRotation(panel) {
  const slots = state.simRotationSlots;
  const pickedCrops = slots.map((id) => ROTATION_CROPS.find((c) => c.id === id) || ROTATION_CROPS[0]);

  const avgCover = Math.round(pickedCrops.reduce((s, c) => s + c.coverScore, 0) / 4);
  const netN = pickedCrops.reduce((s, c) => s + c.nImpact, 0);
  const nScore = Math.max(10, Math.min(100, Math.round(55 + netN * 0.6)));
  const uniqueFamilies = new Set(pickedCrops.filter((c) => c.family !== 'bare').map((c) => c.family)).size;
  const distinctTags = new Set(pickedCrops.map((c) => c.pestBreakTag)).size;
  const pestScore = Math.min(100, uniqueFamilies * 25 + distinctTags * 6);
  const legumeCount = pickedCrops.filter((c) => c.family === 'legume').length;
  const legumePct = Math.round((legumeCount / 4) * 100);

  const slotLabels = [tr('rotSlot1'), tr('rotSlot2'), tr('rotSlot3'), tr('rotSlot4')];

  panel.innerHTML = `
    <div class="control-row">
      <button type="button" class="tab-btn" id="rot-btn-cont">${escapeHtml(tr('rotPresetCont'))}</button>
      <button type="button" class="tab-btn is-active" id="rot-btn-regen">${escapeHtml(tr('rotPresetRegen'))}</button>
    </div>

    <div class="rot-slots-grid">
      ${slots
        .map((selId, idx) => {
          const cropObj = pickedCrops[idx];
          return `
            <div class="rot-slot-card">
              <label for="rot-slot-${idx}" class="field-label">${escapeHtml(slotLabels[idx])}</label>
              <select id="rot-slot-${idx}" class="field-select" data-rot-idx="${idx}" style="margin-bottom:8px">
                ${ROTATION_CROPS.map(
                  (c) => `<option value="${c.id}" ${c.id === selId ? 'selected' : ''}>${escapeHtml(t(c.nameEn, c.nameUr))}</option>`
                ).join('')}
              </select>
              <p style="margin:0;font-size:0.84rem;color:var(--text-secondary)">${formatRichText(t(cropObj.noteEn, cropObj.noteUr))}</p>
            </div>
          `;
        })
        .join('')}
    </div>

    <div class="lab-bar-list" style="margin-top:16px">
      <div class="lab-bar-row">
        <div class="lab-bar-meta"><span>${escapeHtml(tr('rotIndCover'))}</span><span class="tabular-nums">${avgCover}%</span></div>
        <div class="lab-bar-track"><div class="lab-bar-fill is-leaf" style="width:${avgCover}%"></div></div>
      </div>
      <div class="lab-bar-row">
        <div class="lab-bar-meta"><span>${escapeHtml(tr('rotIndNutrient'))}</span><span class="tabular-nums">${nScore}%</span></div>
        <div class="lab-bar-track"><div class="lab-bar-fill" style="width:${nScore}%"></div></div>
      </div>
      <div class="lab-bar-row">
        <div class="lab-bar-meta"><span>${escapeHtml(tr('rotIndPest'))}</span><span class="tabular-nums">${pestScore}%</span></div>
        <div class="lab-bar-track"><div class="lab-bar-fill is-water" style="width:${pestScore}%"></div></div>
      </div>
    </div>

    <div class="callout-box ${legumePct >= 25 ? 'callout-tip' : 'callout-warning'}" style="margin-top:14px">
      <p class="callout-title">${escapeHtml(tr('rotIndLegume'))}: <span class="tabular-nums">${legumePct}%</span></p>
      <p class="callout-text">${formatRichText(tr('rotLegumeGoal'))}</p>
    </div>
  `;

  panel.querySelector('#rot-btn-cont').addEventListener('click', () => {
    state.simRotationSlots = ['rice', 'wheat', 'fallow', 'rice'];
    renderSim2CropRotation(panel);
  });
  panel.querySelector('#rot-btn-regen').addEventListener('click', () => {
    state.simRotationSlots = ['rice', 'wheat', 'mung', 'rice'];
    renderSim2CropRotation(panel);
  });
  panel.querySelectorAll('[data-rot-idx]').forEach((sel) => {
    sel.addEventListener('change', () => {
      const i = Number(sel.getAttribute('data-rot-idx'));
      state.simRotationSlots[i] = sel.value;
      renderSim2CropRotation(panel);
    });
  });
}

/* Simulation 3: Water Management (Rice AWD + Critical Wheat Stages) */
function renderSim3WaterManagement(panel) {
  const depth = state.simWaterDepthCm; // +5 (5cm above) to -20 (20cm below soil)
  const stage = state.simWaterRiceStage;
  const wheat = WHEAT_IRRIGATION_STAGES.find((w) => w.id === state.simWheatStageId) || WHEAT_IRRIGATION_STAGES[0];

  const pipeWaterY = 66 - depth * 3.5; // soil line at y=66
  const needsWater = stage === 'flowering' ? depth < 1 : stage === 'veg' ? depth <= -15 : false;

  let riceMsgEn = '';
  let riceMsgUr = '';
  if (stage === 'flowering') {
    riceMsgEn = depth >= 1
      ? 'Standing water maintained safely during flowering — panicles pollinate smoothly.'
      : 'WARNING: Flowering stage! Standing water dropped — irrigate immediately so grains do not stay empty.';
    riceMsgUr = depth >= 1
      ? 'پھول آنے پر ہلکا پانی موجود ہے — بالیوں میں دانے صحیح بھریں گے۔'
      : 'انتباہ: پھول آنے کا نازک مرحلہ ہے! پانی نیچے چلا گیا — فوراً ہلکا پانی لگائیں۔';
  } else if (stage === 'ripening') {
    riceMsgEn = 'Pre-harvest ripening stage — draining surface water slowly lets grains mature cleanly and supports timely wheat sowing.';
    riceMsgUr = 'کٹائی سے پہلے پختگی کا مرحلہ — کھیت بتدریج خشک ہونے دیں تاکہ دانہ پکے اور گندم کی بوائی وقت پر ہو سکے۔';
  } else if (depth > 0) {
    riceMsgEn = `Water is +${depth} cm above soil: Hold tubewell pump OFF.`;
    riceMsgUr = `پانی سطح سے +${depth} cm اوپر کھڑا ہے: ابھی ٹیوب ویل بند رکھیں۔`;
  } else if (depth > -15) {
    riceMsgEn = `Water at ${Math.abs(depth)} cm below surface: Safe moist root zone — hold pump OFF and save diesel.`;
    riceMsgUr = `پانی سطح سے ${Math.abs(depth)} cm نیچے: جڑوں کو ہوا اور نمی مل رہی ہے — ابھی پانی روکیں۔`;
  } else {
    riceMsgEn = `Water reached ${Math.abs(depth)} cm below surface (15 cm threshold crossed) — Irrigate now!`;
    riceMsgUr = `پانی ${Math.abs(depth)} cm نیچے چلا گیا (15 cm کی حد پوری) — اب آبپاشی کریں!`;
  }

  panel.innerHTML = `
    <h3 style="margin-top:0;color:var(--water-dark)">${escapeHtml(tr('wmRiceTitle'))}</h3>
    <div class="control-row" style="align-items:center">
      <strong style="font-size:0.9rem">${escapeHtml(tr('wmRiceStage'))}:</strong>
      <button type="button" class="tab-btn ${stage === 'veg' ? 'is-active' : ''}" data-wm-st="veg">${escapeHtml(tr('wmStageVeg'))}</button>
      <button type="button" class="tab-btn ${stage === 'flowering' ? 'is-active' : ''}" data-wm-st="flowering">${escapeHtml(tr('wmStageFlower'))}</button>
      <button type="button" class="tab-btn ${stage === 'ripening' ? 'is-active' : ''}" data-wm-st="ripening">${escapeHtml(tr('wmStageRipe'))}</button>
    </div>

    <div class="sim-split-grid">
      <div>
        <svg viewBox="0 0 360 170" class="sim-stage-svg" role="img" aria-label="Rice 15cm AWD water pipe simulator">
          <rect x="0" y="0" width="360" height="66" fill="#f0f9ff"/>
          <rect x="0" y="66" width="360" height="104" fill="#6d4c41"/>
          ${depth > 0 ? `<rect x="0" y="${66 - depth * 3.5}" width="360" height="${depth * 3.5}" fill="rgba(2,136,209,0.32)"/>` : ''}
          <!-- Rice tillers -->
          <path d="M55 66 L48 22 M55 66 L55 16 M55 66 L64 25 M105 66 L98 20 M105 66 L105 15 M105 66 L114 23" stroke="#2e7d32" stroke-width="3.2" stroke-linecap="round"/>
          <!-- Perforated 15cm AWD Pipe -->
          <rect x="210" y="34" width="54" height="114" rx="4" fill="#eceff1" stroke="#455a64" stroke-width="2.2"/>
          <rect x="212" y="${Math.min(144, Math.max(38, pipeWaterY))}" width="50" height="${Math.max(4, 148 - Math.min(144, Math.max(38, pipeWaterY)))}" fill="#0288d1"/>
          <!-- Soil horizon line across pipe -->
          <line x1="175" y1="66" x2="295" y2="66" stroke="#1b4d3e" stroke-width="2" stroke-dasharray="4 3"/>
          <!-- 15 cm threshold line -->
          <line x1="185" y1="118.5" x2="290" y2="118.5" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 3"/>
          <text x="295" y="70" fill="#1b4d3e" font-size="11" font-weight="bold">0 cm (Soil)</text>
          <text x="295" y="122" fill="#dc2626" font-size="11" font-weight="bold">-15 cm AWD</text>
        </svg>
      </div>
      <div>
        <div class="metric-box" style="margin-bottom:10px">
          <span class="metric-label">${escapeHtml(tr('wmWaterLevel'))}</span>
          <span class="metric-value tabular-nums">${depth >= 0 ? `+${depth}` : depth} cm</span>
        </div>
        <div class="callout-box ${needsWater ? 'callout-warning' : 'callout-tip'}" style="margin-bottom:12px">
          <p class="callout-text">${formatRichText(t(riceMsgEn, riceMsgUr))}</p>
        </div>
        <div class="control-row" style="margin-bottom:8px">
          <button type="button" class="tab-btn" id="wm-btn-dry">${escapeHtml(tr('wmBtnDay'))}</button>
          <button type="button" class="btn btn-primary" id="wm-btn-irr" style="min-height:44px;padding:8px 16px">${escapeHtml(tr('wmBtnIrrigate'))}</button>
          <button type="button" class="tab-btn" id="wm-btn-rst">${escapeHtml(tr('wmBtnReset'))}</button>
        </div>
        <p style="margin:6px 0 0;font-size:0.86rem;color:var(--text-secondary)">${formatRichText(tr('wmFloweringAlert'))}</p>
      </div>
    </div>

    <hr style="margin:22px 0;border:0;border-top:1px solid var(--border-hairline)" />

    <h3 style="margin-top:0;color:var(--brown-dark)">${escapeHtml(tr('wmWheatTitle'))}</h3>
    <p style="margin:0 0 10px;color:var(--text-secondary)">${formatRichText(tr('wmWheatSub'))}</p>
    <div class="wheat-stages-row">
      ${WHEAT_IRRIGATION_STAGES.map(
        (w) => `<button type="button" class="wheat-stage-btn ${w.id === wheat.id ? 'is-active' : ''}" data-wheat-st="${w.id}">${escapeHtml(t(w.stageEn, w.stageUr))}</button>`
      ).join('')}
    </div>

    <div class="mini-card">
      <div class="metric-strip" style="margin-top:0;margin-bottom:12px">
        <div class="metric-box"><span class="metric-label">${escapeHtml(tr('wmWheatPriority'))}</span><span class="metric-value" style="font-size:1rem">${escapeHtml(t(wheat.priorityEn, wheat.priorityUr))}</span></div>
        <div class="metric-box"><span class="metric-label">${escapeHtml(tr('wmWheatTiming'))}</span><span class="metric-value" style="font-size:0.95rem">${formatRichText(t(wheat.timingEn, wheat.timingUr))}</span></div>
        <div class="metric-box"><span class="metric-label">${escapeHtml(t('Est. Root Depth', 'جڑ کی گہرائی'))}</span><span class="metric-value tabular-nums">~${wheat.rootDepthCm} cm</span></div>
      </div>
      <p style="margin:0 0 8px"><strong>${escapeHtml(tr('wmWheatSkipImpact'))}:</strong> ${formatRichText(t(wheat.impactSkipEn, wheat.impactSkipUr))}</p>
      <p style="margin:0;color:var(--leaf-dark)"><strong>${escapeHtml(tr('wmWheatRegenTip'))}:</strong> ${formatRichText(t(wheat.regenNoteEn, wheat.regenNoteUr))}</p>
    </div>
  `;

  panel.querySelectorAll('[data-wm-st]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.simWaterRiceStage = btn.getAttribute('data-wm-st');
      renderSim3WaterManagement(panel);
    });
  });

  panel.querySelector('#wm-btn-dry').addEventListener('click', () => {
    state.simWaterDepthCm = Math.max(-20, state.simWaterDepthCm - 5);
    renderSim3WaterManagement(panel);
  });
  panel.querySelector('#wm-btn-irr').addEventListener('click', () => {
    state.simWaterDepthCm = 4;
    renderSim3WaterManagement(panel);
  });
  panel.querySelector('#wm-btn-rst').addEventListener('click', () => {
    state.simWaterRiceStage = 'veg';
    state.simWaterDepthCm = 4;
    renderSim3WaterManagement(panel);
  });

  panel.querySelectorAll('[data-wheat-st]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.simWheatStageId = btn.getAttribute('data-wheat-st');
      renderSim3WaterManagement(panel);
    });
  });
}

/* Simulation 4: Beneficial Insects vs. Blind Spraying */
function renderSim4BeneficialInsects(panel) {
  const wk = state.simInsectWeek; // 1..6
  // Illustrative relative population trajectories across weeks 1..6
  const safePredSeries = [45, 52, 62, 70, 74, 76];
  const safePestSeries = [50, 44, 34, 24, 18, 16];
  const sprayPredSeries = [45, 6, 8, 10, 14, 18];
  const sprayPestSeries = [50, 12, 34, 68, 88, 94];

  const i = wk - 1;
  const spPred = safePredSeries[i];
  const spPest = safePestSeries[i];
  const badPred = sprayPredSeries[i];
  const badPest = sprayPestSeries[i];

  const buildPolyline = (arr) =>
    arr
      .map((val, idx) => {
        const x = 35 + idx * 52;
        const y = 130 - val * 1.1;
        return `${x},${y.toFixed(1)}`;
      })
      .join(' ');

  const markerX = 35 + i * 52;

  panel.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('biTitle'))}</h3>
    <div style="margin-bottom:14px">
      <label for="bi-week-slider" class="field-label">
        ${escapeHtml(tr('biWeekLabel'))}: <span class="tabular-nums">${t(`Week ${wk} / 6`, `ہفتہ ${wk} / 6`)}</span>
      </label>
      <input type="range" id="bi-week-slider" class="range-slider" min="1" max="6" step="1" value="${wk}" />
    </div>

    <div class="sim-split-grid">
      <div class="sim-panel-card is-mulch">
        <strong style="display:block;margin-bottom:8px;color:var(--leaf-dark)">${escapeHtml(tr('biFieldSafe'))}</strong>
        <svg viewBox="0 0 330 148" class="sim-stage-svg" role="img" aria-label="Protected field predator-prey balance curve">
          <line x1="35" y1="20" x2="35" y2="132" stroke="#cbd5e1"/>
          <line x1="35" y1="132" x2="310" y2="132" stroke="#cbd5e1"/>
          <line x1="${markerX}" y1="18" x2="${markerX}" y2="132" stroke="#1b4d3e" stroke-dasharray="4 3"/>
          <polyline fill="none" stroke="#2e7d32" stroke-width="3" points="${buildPolyline(safePredSeries)}"/>
          <polyline fill="none" stroke="#d97706" stroke-width="2.5" stroke-dasharray="5 3" points="${buildPolyline(safePestSeries)}"/>
          <text x="45" y="18" fill="#2e7d32" font-size="11" font-weight="bold">Green = Beneficials · Amber = Pests</text>
          <text x="172" y="145" text-anchor="middle" fill="#64748b" font-size="10">Weeks 1 → 6 (Illustrative Ecological Balance)</text>
        </svg>
        <div class="lab-bar-list" style="margin-top:0">
          <div class="lab-bar-row">
            <div class="lab-bar-meta"><span>${escapeHtml(tr('biPredators'))}</span><span class="tabular-nums">${spPred}%</span></div>
            <div class="lab-bar-track"><div class="lab-bar-fill is-leaf" style="width:${spPred}%"></div></div>
          </div>
          <div class="lab-bar-row">
            <div class="lab-bar-meta"><span>${escapeHtml(tr('biPests'))}</span><span class="tabular-nums">${spPest}%</span></div>
            <div class="lab-bar-track"><div class="lab-bar-fill" style="width:${spPest}%;background:var(--tip-border)"></div></div>
          </div>
        </div>
      </div>

      <div class="sim-panel-card is-bare">
        <strong style="display:block;margin-bottom:8px;color:var(--warning)">${escapeHtml(tr('biFieldSpray'))}</strong>
        <svg viewBox="0 0 330 148" class="sim-stage-svg" role="img" aria-label="Indiscriminate spray pest resurgence curve">
          <line x1="35" y1="20" x2="35" y2="132" stroke="#cbd5e1"/>
          <line x1="35" y1="132" x2="310" y2="132" stroke="#cbd5e1"/>
          <line x1="${markerX}" y1="18" x2="${markerX}" y2="132" stroke="#991b1b" stroke-dasharray="4 3"/>
          <polyline fill="none" stroke="#2e7d32" stroke-width="2.5" points="${buildPolyline(sprayPredSeries)}"/>
          <polyline fill="none" stroke="#dc2626" stroke-width="3" points="${buildPolyline(sprayPestSeries)}"/>
          <text x="45" y="18" fill="#dc2626" font-size="11" font-weight="bold">Red = Pest Surge · Green = Predators Killed</text>
          <text x="172" y="145" text-anchor="middle" fill="#64748b" font-size="10">Weeks 1 → 6 (Spray Drops Predators First)</text>
        </svg>
        <div class="lab-bar-list" style="margin-top:0">
          <div class="lab-bar-row">
            <div class="lab-bar-meta"><span>${escapeHtml(tr('biPredators'))}</span><span class="tabular-nums">${badPred}%</span></div>
            <div class="lab-bar-track"><div class="lab-bar-fill is-leaf" style="width:${badPred}%"></div></div>
          </div>
          <div class="lab-bar-row">
            <div class="lab-bar-meta"><span>${escapeHtml(tr('biPests'))}</span><span class="tabular-nums" style="color:var(--warning)">${badPest}%</span></div>
            <div class="lab-bar-track"><div class="lab-bar-fill" style="width:${badPest}%;background:var(--warning)"></div></div>
          </div>
        </div>
      </div>
    </div>

    <div class="callout-box callout-warning" style="margin-top:14px">
      <p class="callout-text">${formatRichText(tr('biResurgenceAlert'))}</p>
    </div>
  `;

  panel.querySelector('#bi-week-slider').addEventListener('input', (e) => {
    state.simInsectWeek = Number(e.target.value);
    renderSim4BeneficialInsects(panel);
  });
}

/* Simulation 5: Compost Making Interactive Heap Builder */
function renderSim5CompostMaking(panel) {
  const c = state.simCompost;
  const hasGreen = c.green !== 'none';
  const hasManure = c.manure !== 'none';
  const balancedMix = hasGreen || hasManure;

  let cnStatus = t('Balanced ~2:1 Carbon-to-Green Mix', 'متوازن ~2:1 خشک و سبز ملاپ');
  if (!hasGreen && !hasManure) cnStatus = t('Too Much Dry Carbon — Add Dung or Fresh Grass', 'صرف خشک بھوسہ — گوبر یا سبز چارہ شامل کریں');
  else if (hasGreen && c.manure === 'mix') cnStatus = t('Rich Mix — Add Extra Chopped Straw Layer', 'نائیٹروجن زیادہ — تھوڑا خشک بھوسہ مزید شامل کریں');

  let tempZone = t('Ambient (Slow / Waiting)', 'کم گرمائش (عمل سست)');
  if (balancedMix && c.water === 'sponge' && c.stage === 2) {
    tempZone = t('Warm/Hot Thermophilic (~50–60°C Illustrative — Microbes Active)', 'گرم فعال مرحلہ (~50–60°C وضاحتی — جراثیم فعال)');
  } else if (balancedMix && c.water === 'sponge' && c.stage === 3) {
    tempZone = t('Cooled & Cured (~25–30°C Illustrative — Ready to Spread)', 'ٹھنڈی اور پکی کھاد (~25–30°C وضاحتی — استعمال کے لیے تیار)');
  } else if (c.water === 'dry') {
    tempZone = t('Too Dry — Microbes Paused', 'نمی کم — گلنے کا عمل رکا ہوا');
  } else if (c.water === 'wet') {
    tempZone = t('Waterlogged Cool/Sour Zone — Needs Dry Straw & Turning', 'پانی زیادہ اور ہوا بند — خشک بھوسہ ڈال کر پلٹیں');
  }

  const smellQuality =
    c.water === 'wet'
      ? t('Sour Anaerobic Odour — Squeeze Out Excess Water & Turn Now', 'کھٹی / بدبو — اضافی پانی سکھا کر فوراً ڈھیر پلٹیں')
      : c.water === 'dry'
        ? t('Dry Straw Smell — Sprinkle Water Evenly While Turning', 'صرف خشک بھوسے کی بو — پلٹتے ہوئے پانی چھڑکیں')
        : c.stage === 3 && balancedMix
          ? t('Sweet Earthy Forest Smell — Dark Crumbly Ready Compost!', 'میٹھی زرخیز مٹی جیسی خوشبو — بہترین بھربھری کھاد تیار!')
          : t('Warm Earthy Steam — Healthy Aerobic Decomposition', 'گرم بھاپ اور تازہ بو — صحت مند عمل جاری ہے');

  const heapColor = c.stage === 3 && balancedMix && c.water === 'sponge' ? '#3e2723' : c.stage === 2 ? '#5d4037' : '#8d6e63';

  panel.innerHTML = `
    <div class="form-grid">
      <div>
        <label for="cm-dry" class="field-label">${escapeHtml(tr('cmDryLabel'))}</label>
        <select id="cm-dry" class="field-select">
          <option value="wheat" ${c.dry === 'wheat' ? 'selected' : ''}>${escapeHtml(tr('cmDryWheat'))}</option>
          <option value="rice" ${c.dry === 'rice' ? 'selected' : ''}>${escapeHtml(tr('cmDryRice'))}</option>
          <option value="leaves" ${c.dry === 'leaves' ? 'selected' : ''}>${escapeHtml(tr('cmDryLeaves'))}</option>
        </select>
      </div>
      <div>
        <label for="cm-green" class="field-label">${escapeHtml(tr('cmGreenLabel'))}</label>
        <select id="cm-green" class="field-select">
          <option value="grass" ${c.green === 'grass' ? 'selected' : ''}>${escapeHtml(tr('cmGreenGrass'))}</option>
          <option value="veg" ${c.green === 'veg' ? 'selected' : ''}>${escapeHtml(tr('cmGreenVeg'))}</option>
          <option value="none" ${c.green === 'none' ? 'selected' : ''}>${escapeHtml(tr('cmGreenNone'))}</option>
        </select>
      </div>
      <div>
        <label for="cm-manure" class="field-label">${escapeHtml(tr('cmManureLabel'))}</label>
        <select id="cm-manure" class="field-select">
          <option value="dung" ${c.manure === 'dung' ? 'selected' : ''}>${escapeHtml(tr('cmManureDung'))}</option>
          <option value="mix" ${c.manure === 'mix' ? 'selected' : ''}>${escapeHtml(tr('cmManureMix'))}</option>
          <option value="none" ${c.manure === 'none' ? 'selected' : ''}>${escapeHtml(tr('cmManureNone'))}</option>
        </select>
      </div>
      <div>
        <label for="cm-water" class="field-label">${escapeHtml(tr('cmWaterLabel'))}</label>
        <select id="cm-water" class="field-select">
          <option value="dry" ${c.water === 'dry' ? 'selected' : ''}>${escapeHtml(tr('cmWaterDry'))}</option>
          <option value="sponge" ${c.water === 'sponge' ? 'selected' : ''}>${escapeHtml(tr('cmWaterSponge'))}</option>
          <option value="wet" ${c.water === 'wet' ? 'selected' : ''}>${escapeHtml(tr('cmWaterWet'))}</option>
        </select>
      </div>
      <div>
        <label for="cm-stage" class="field-label">${escapeHtml(tr('cmStageLabel'))}</label>
        <select id="cm-stage" class="field-select">
          <option value="1" ${c.stage === 1 ? 'selected' : ''}>${escapeHtml(tr('cmStage1'))}</option>
          <option value="2" ${c.stage === 2 ? 'selected' : ''}>${escapeHtml(tr('cmStage2'))}</option>
          <option value="3" ${c.stage === 3 ? 'selected' : ''}>${escapeHtml(tr('cmStage3'))}</option>
        </select>
      </div>
      <div style="display:flex;align-items:flex-end">
        <button type="button" class="btn btn-primary" id="cm-btn-turn" style="width:100%">
          ${escapeHtml(tr('cmBtnTurn'))} (<span class="tabular-nums">${c.turns}</span>)
        </button>
      </div>
    </div>

    <div class="sim-split-grid">
      <svg viewBox="0 0 360 175" class="sim-stage-svg" style="margin-bottom:0" role="img" aria-label="Compost heap cross section">
        <rect x="0" y="0" width="360" height="145" fill="#f0fdf4"/>
        <rect x="0" y="145" width="360" height="30" fill="#6d4c41"/>
        <!-- Tree shade canopy -->
        <ellipse cx="70" cy="18" rx="75" ry="20" fill="#2e7d32" opacity="0.22"/>
        <!-- Trapezoid compost pile -->
        <path d="M55 145 L105 58 L255 58 L305 145 Z" fill="${heapColor}"/>
        <!-- 5 layers visual -->
        ${c.stage === 1 ? '<line x1="72" y1="120" x2="288" y2="120" stroke="#eab308" stroke-width="5"/><line x1="85" y1="98" x2="275" y2="98" stroke="#66bb6a" stroke-width="5"/><line x1="97" y1="76" x2="263" y2="76" stroke="#eab308" stroke-width="5"/>' : ''}
        <!-- Core heating glow during stage 2 -->
        ${c.stage === 2 && balancedMix && c.water === 'sponge' ? '<ellipse cx="180" cy="105" rx="52" ry="24" fill="#f59e0b" opacity="0.38"/><path d="M150 50 Q145 35 155 24 M180 48 Q175 33 185 22 M210 50 Q205 35 215 24" stroke="#d97706" stroke-width="2.5" fill="none" stroke-linecap="round"/>' : ''}
        <text x="180" y="164" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">Turns: ${c.turns} · Shaded Heap Away from Drinking Wells</text>
      </svg>

      <div class="metric-strip" style="margin-top:0;grid-template-columns:1fr">
        <div class="metric-box"><span class="metric-label">${escapeHtml(tr('cmCnStatus'))}</span><span class="metric-value" style="font-size:1rem">${formatRichText(cnStatus)}</span></div>
        <div class="metric-box"><span class="metric-label">${escapeHtml(tr('cmTempZone'))}</span><span class="metric-value" style="font-size:1rem">${formatRichText(tempZone)}</span></div>
        <div class="metric-box"><span class="metric-label">${escapeHtml(tr('cmSmellLabel'))}</span><span class="metric-value" style="font-size:1rem">${formatRichText(smellQuality)}</span></div>
      </div>
    </div>
  `;

  panel.querySelector('#cm-dry').addEventListener('change', (e) => { c.dry = e.target.value; renderSim5CompostMaking(panel); });
  panel.querySelector('#cm-green').addEventListener('change', (e) => { c.green = e.target.value; renderSim5CompostMaking(panel); });
  panel.querySelector('#cm-manure').addEventListener('change', (e) => { c.manure = e.target.value; renderSim5CompostMaking(panel); });
  panel.querySelector('#cm-water').addEventListener('change', (e) => { c.water = e.target.value; renderSim5CompostMaking(panel); });
  panel.querySelector('#cm-stage').addEventListener('change', (e) => { c.stage = Number(e.target.value); renderSim5CompostMaking(panel); });
  panel.querySelector('#cm-btn-turn').addEventListener('click', () => {
    c.turns += 1;
    if (c.water === 'wet') c.water = 'sponge';
    renderSim5CompostMaking(panel);
  });
}

/* Simulation 6: Farm Economics (Conventional vs. Regenerative Detailed Plot Comparator) */
function renderSim6FarmEconomics(panel) {
  const conv = state.simEcon.conv;
  const reg = state.simEcon.regen;

  const fields = [
    ['kanals', 'feKanals', '0.5'],
    ['seed', 'feSeed', '100'],
    ['fertilizer', 'feFertilizer', '500'],
    ['labour', 'feLabour', '500'],
    ['diesel', 'feDiesel', '500'],
    ['water', 'feWater', '500'],
    ['other', 'feOther', '500'],
    ['yield', 'feYield', '1'],
    ['price', 'fePrice', '100'],
    ['straw', 'feStraw', '500']
  ];

  function renderColInputs(prefix, data) {
    return `
      <div class="form-grid" style="margin-bottom:10px">
        ${fields
          .map(
            ([k, lblKey, step]) => `
            <div>
              <label for="fe-${prefix}-${k}" class="field-label">${escapeHtml(tr(lblKey))}</label>
              <input type="number" id="fe-${prefix}-${k}" class="field-input" min="0" step="${step}" value="${data[k]}" data-fe-col="${prefix}" data-fe-key="${k}" />
            </div>
          `
          )
          .join('')}
      </div>
    `;
  }

  panel.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('feTitle'))}</h3>
    <div class="control-row">
      <button type="button" class="tab-btn is-active" id="fe-preset-wheat">${escapeHtml(tr('fePresetWheat'))}</button>
      <button type="button" class="tab-btn" id="fe-preset-rice">${escapeHtml(tr('fePresetRice'))}</button>
    </div>

    <div class="lab-compare-split">
      <div class="lab-compare-col">
        <strong style="display:block;margin-bottom:10px;color:var(--brown-dark)">${escapeHtml(tr('fePlotConv'))}</strong>
        ${renderColInputs('conv', conv)}
        <div class="metric-strip" id="fe-conv-metrics"></div>
      </div>

      <div class="lab-compare-col is-plot-a">
        <strong style="display:block;margin-bottom:10px;color:var(--leaf-dark)">${escapeHtml(tr('fePlotRegen'))}</strong>
        ${renderColInputs('regen', reg)}
        <div class="metric-strip" id="fe-regen-metrics"></div>
      </div>
    </div>

    <div id="fe-summary-diff" style="margin-top:14px"></div>
    <p class="fg-credit-text">${escapeHtml(tr('toolGNote'))}</p>
  `;

  function compute() {
    const calc = (d) => {
      const k = Math.max(0.5, Number(d.kanals) || 0.5);
      const cost =
        (Number(d.seed) || 0) +
        (Number(d.fertilizer) || 0) +
        (Number(d.labour) || 0) +
        (Number(d.diesel) || 0) +
        (Number(d.water) || 0) +
        (Number(d.other) || 0);
      const rev = (Number(d.yield) || 0) * (Number(d.price) || 0) + (Number(d.straw) || 0);
      const net = rev - cost;
      const netAcre = (net / k) * 8;
      return { cost, rev, net, netAcre };
    };

    const cRes = calc(conv);
    const rRes = calc(reg);

    panel.querySelector('#fe-conv-metrics').innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('feTotalCost'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(cRes.cost).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('feGrossRev'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(cRes.rev).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('feNetIncome'))}</span><span class="metric-value tabular-nums" style="color:${cRes.net >= 0 ? 'var(--brown-dark)' : 'var(--warning)'}">PKR ${Math.round(cRes.net).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('feNetAcre'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(cRes.netAcre).toLocaleString()}</span></div>
    `;

    panel.querySelector('#fe-regen-metrics').innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('feTotalCost'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(rRes.cost).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('feGrossRev'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(rRes.rev).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('feNetIncome'))}</span><span class="metric-value tabular-nums" style="color:${rRes.net >= 0 ? 'var(--leaf-dark)' : 'var(--warning)'}">PKR ${Math.round(rRes.net).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('feNetAcre'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(rRes.netAcre).toLocaleString()}</span></div>
    `;

    const netDiffAcre = rRes.netAcre - cRes.netAcre;
    const maxScale = Math.max(1, cRes.cost, rRes.cost, Math.abs(cRes.netAcre), Math.abs(rRes.netAcre));

    panel.querySelector('#fe-summary-diff').innerHTML = `
      <div class="callout-box ${netDiffAcre >= 0 ? 'callout-tip' : 'callout-warning'}">
        <p class="callout-title">${escapeHtml(tr('feNetAcre'))}: <span class="tabular-nums">${netDiffAcre >= 0 ? '+' : ''}PKR ${Math.round(netDiffAcre).toLocaleString()}</span></p>
        <div class="lab-bar-list">
          <div class="lab-bar-row">
            <div class="lab-bar-meta"><span>${escapeHtml(tr('fePlotRegen'))} (${escapeHtml(tr('feNetAcre'))})</span><span class="tabular-nums">PKR ${Math.round(rRes.netAcre).toLocaleString()}</span></div>
            <div class="lab-bar-track"><div class="lab-bar-fill is-leaf" style="width:${Math.max(0, Math.round((rRes.netAcre / maxScale) * 100))}%"></div></div>
          </div>
          <div class="lab-bar-row">
            <div class="lab-bar-meta"><span>${escapeHtml(tr('fePlotConv'))} (${escapeHtml(tr('feNetAcre'))})</span><span class="tabular-nums">PKR ${Math.round(cRes.netAcre).toLocaleString()}</span></div>
            <div class="lab-bar-track"><div class="lab-bar-fill" style="width:${Math.max(0, Math.round((cRes.netAcre / maxScale) * 100))}%"></div></div>
          </div>
        </div>
      </div>
    `;
  }

  panel.querySelectorAll('[data-fe-col]').forEach((inp) => {
    inp.addEventListener('input', () => {
      const col = inp.getAttribute('data-fe-col');
      const k = inp.getAttribute('data-fe-key');
      state.simEcon[col][k] = Math.max(0, Number(inp.value) || 0);
      compute();
    });
  });

  panel.querySelector('#fe-preset-wheat').addEventListener('click', () => {
    state.simEcon = {
      conv: { kanals: 8, seed: 5500, fertilizer: 22000, labour: 8000, diesel: 12000, water: 11000, other: 5500, yield: 40, price: 3900, straw: 4000 },
      regen: { kanals: 8, seed: 5500, fertilizer: 12500, labour: 7500, diesel: 4500, water: 7500, other: 2000, yield: 42, price: 3900, straw: 4000 }
    };
    renderSim6FarmEconomics(panel);
  });
  panel.querySelector('#fe-preset-rice').addEventListener('click', () => {
    state.simEcon = {
      conv: { kanals: 8, seed: 4200, fertilizer: 24000, labour: 12000, diesel: 9500, water: 24000, other: 7000, yield: 42, price: 4200, straw: 2000 },
      regen: { kanals: 8, seed: 4200, fertilizer: 15000, labour: 11000, diesel: 6500, water: 16500, other: 2500, yield: 43, price: 4200, straw: 2000 }
    };
    renderSim6FarmEconomics(panel);
  });

  compute();
}

function mountSimulationsHub(host, defaultSimId = null) {
  if (defaultSimId) state.lcSimId = defaultSimId;
  const activeId = state.lcSimId || 'soil-cover';
  const activeMod = SIMULATION_MODULES.find((m) => m.id === activeId) || SIMULATION_MODULES[0];

  const tabs = [
    ['soil-cover', tr('simTab1')],
    ['crop-rotation', tr('simTab2')],
    ['water-management', tr('simTab3')],
    ['beneficial-insects', tr('simTab4')],
    ['compost-making', tr('simTab5')],
    ['farm-economics', tr('simTab6')]
  ];

  host.innerHTML = `
    <div class="sim-illustrative-banner">
      <strong>${escapeHtml(tr('simIllustrativeBadge'))}</strong>
      <span>${formatRichText(tr('simIllustrativeNote'))}</span>
    </div>

    <div class="lab-subtool-row" role="tablist">
      ${tabs
        .map(
          ([id, lbl]) =>
            `<button type="button" role="tab" aria-selected="${id === activeId}" class="tab-btn ${id === activeId ? 'is-active' : ''}" data-sim-tab="${id}">${escapeHtml(lbl)}</button>`
        )
        .join('')}
    </div>

    <div class="lab-tool-panel" id="sim-stage-panel"></div>
    <div id="sim-summary-host">${renderModuleSummaryCard(activeMod)}</div>
  `;

  host.querySelectorAll('[data-sim-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.lcSimId = btn.getAttribute('data-sim-tab');
      mountSimulationsHub(host);
    });
  });

  const stage = host.querySelector('#sim-stage-panel');
  if (activeId === 'soil-cover') renderSim1SoilCover(stage);
  else if (activeId === 'crop-rotation') renderSim2CropRotation(stage);
  else if (activeId === 'water-management') renderSim3WaterManagement(stage);
  else if (activeId === 'beneficial-insects') renderSim4BeneficialInsects(stage);
  else if (activeId === 'compost-making') renderSim5CompostMaking(stage);
  else renderSim6FarmEconomics(stage);

  attachSummaryCardHandlers(host.querySelector('#sim-summary-host'));
}

/* 11. Topic 11 Mount */
function mountSimulationsLab(host) {
  mountSimulationsHub(host);
}

/* Video Learning Library (Verified URLs + Captions + Written Summaries) */
function mountVideoLibrary(host) {
  const cat = state.vidCatFilter || 'all';
  const categories = [
    ['all', tr('vidFilterAll')],
    ['soil-mulching', t('Soil & Mulching', 'مٹی اور ملچنگ')],
    ['water-awd', t('Water & Rice AWD', 'پانی اور چاول AWD')],
    ['zero-till', t('Zero Tillage & Wheat', 'زیرو ٹل اور گندم')],
    ['compost', t('Compost Making', 'کمپوسٹ سازی')],
    ['ipm-beneficials', t('Beneficial Insects & IPM', 'فائدہ مند حشرات اور IPM')]
  ];

  const list = cat === 'all' ? VIDEO_LIBRARY : VIDEO_LIBRARY.filter((v) => v.category === cat);

  host.innerHTML = `
    <div class="control-row" role="tablist">
      ${categories
        .map(
          ([k, lbl]) =>
            `<button type="button" class="tab-btn ${k === cat ? 'is-active' : ''}" data-vid-cat="${k}">${escapeHtml(lbl)}</button>`
        )
        .join('')}
    </div>

    <div class="vid-grid">
      ${list
        .map((v) => {
          const isPlaying = Boolean(state.vidPlayingIds[v.id]);
          const capOpen = Boolean(state.vidCaptionsOpen[v.id]);
          const captions = state.lang === 'ur' ? v.captionsUr : v.captionsEn;
          return `
            <article class="vid-card">
              <div class="vid-media-box">
                ${
                  isPlaying
                    ? `<iframe src="https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0" title="${escapeHtml(t(v.titleEn, v.titleUr))}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
                    : `<img src="${v.poster}" alt="${escapeHtml(t(v.titleEn, v.titleUr))}" referrerpolicy="no-referrer" />
                       <div class="vid-play-overlay">
                         <button type="button" class="btn btn-primary" data-vid-play="${v.id}">${escapeHtml(tr('vidLoadPlayer'))}</button>
                       </div>`
                }
              </div>
              <div class="vid-card-body">
                <div class="vid-meta-line">${escapeHtml(t(v.catEn, v.catUr))} · ${escapeHtml(t(v.durationLabelEn, v.durationLabelUr))}</div>
                <h3 style="margin:0;font-size:1.06rem;color:var(--forest-dark)">${escapeHtml(t(v.titleEn, v.titleUr))}</h3>
                <p style="margin:0;font-size:0.84rem;color:var(--text-muted)">${escapeHtml(v.channel)}</p>
                <div class="callout-box callout-tip" style="margin:0;padding:10px 12px">
                  <p class="callout-title" style="font-size:0.86rem">${escapeHtml(tr('vidSummaryTitle'))}</p>
                  <p class="callout-text" style="font-size:0.88rem">${formatRichText(t(v.summaryEn, v.summaryUr))}</p>
                </div>
                <div class="control-row" style="margin:0">
                  <button type="button" class="tab-btn ${capOpen ? 'is-active' : ''}" data-vid-cap="${v.id}">
                    ${escapeHtml(capOpen ? tr('vidHideCaptionsBtn') : tr('vidCaptionsBtn'))}
                  </button>
                  <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="min-height:44px;padding:8px 14px">${escapeHtml(tr('vidWatchYt'))} ↗</a>
                </div>
                ${
                  capOpen
                    ? `<div class="vid-captions-drawer">
                         <strong style="display:block;margin-bottom:6px;font-size:0.88rem;color:var(--forest-dark)">${escapeHtml(tr('vidCaptionsTitle'))}</strong>
                         <ul class="principles-list" style="font-size:0.88rem">
                           ${captions.map((line) => `<li>${formatRichText(line)}</li>`).join('')}
                         </ul>
                       </div>`
                    : ''
                }
              </div>
            </article>
          `;
        })
        .join('')}
    </div>
  `;

  host.querySelectorAll('[data-vid-cat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.vidCatFilter = btn.getAttribute('data-vid-cat');
      mountVideoLibrary(host);
    });
  });

  host.querySelectorAll('[data-vid-play]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.vidPlayingIds[btn.getAttribute('data-vid-play')] = true;
      mountVideoLibrary(host);
    });
  });

  host.querySelectorAll('[data-vid-cap]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-vid-cap');
      state.vidCaptionsOpen[id] = !state.vidCaptionsOpen[id];
      mountVideoLibrary(host);
    });
  });
}

/* 12. Topic 12 Mount */
function mountVideoWalkthroughs(host) {
  mountVideoLibrary(host);
}

/* Multi-Mode Bilingual Quiz Center (MCQs + Picture Identification + True/False) */
function mountMultiModeQuizCenter(host, { includeMiniGame = false } = {}) {
  const mode = state.qzMode || 'all';
  const pool = mode === 'all' ? CENTRE_QUIZZES : CENTRE_QUIZZES.filter((q) => q.mode === mode);
  const safeIdx = Math.min(state.qzIdx, Math.max(0, pool.length - 1));
  const q = pool[safeIdx];

  const modeBadge = q
    ? q.mode === 'picture'
      ? tr('qzModeBadgePic')
      : q.mode === 'tf'
        ? tr('qzModeBadgeTf')
        : tr('qzModeBadgeMcq')
    : '';

  let quizHtml = '';
  if (state.qzComplete) {
    const pct = Math.round((state.qzScore / Math.max(1, pool.length)) * 100);
    const perfMsg = pct >= 80 ? tr('qzPerfGreat') : pct >= 50 ? tr('qzPerfGood') : tr('qzPerfStudy');
    quizHtml = `
      <div class="qz-summary-card">
        <p style="margin:0 0 6px;font-weight:700;color:var(--forest-dark)">${escapeHtml(tr('qzCompleteTitle'))}</p>
        <p class="tabular-nums" style="margin:0 0 8px;font-size:2rem;font-weight:800;color:var(--forest)">${state.qzScore} / ${pool.length} (${pct}%)</p>
        <p style="margin:0 0 16px;color:var(--text-secondary)">${formatRichText(perfMsg)}</p>
        <button type="button" class="btn btn-primary" id="btn-qz-retry">${escapeHtml(tr('qzRetryBtn'))}</button>
      </div>
    `;
  } else if (q) {
    const options = state.lang === 'ur' ? q.optionsUr : q.optionsEn;
    quizHtml = `
      <p style="margin:0 0 8px;color:var(--text-muted);font-weight:600">
        <span>${escapeHtml(modeBadge)}</span>
        <span aria-hidden="true">·</span>
        ${escapeHtml(tr('quizQuestion'))} <span class="tabular-nums">${safeIdx + 1} / ${pool.length}</span>
        <span aria-hidden="true">·</span>
        ${escapeHtml(tr('quizScore'))}: <span class="tabular-nums">${state.qzScore}</span>
      </p>
      <p style="font-weight:700;font-size:1.08rem;margin:0 0 10px">${formatRichText(t(q.qEn, q.qUr))}</p>
      ${
        q.image
          ? `<div class="qz-photo-box">
               <img src="${q.image}" alt="${escapeHtml(t(q.imageAltEn || 'Quiz reference photo', q.imageAltUr || 'کوئز کی تصویری مثال'))}" referrerpolicy="no-referrer" />
             </div>`
          : ''
      }
      <div class="quiz-options">
        ${options
          .map((opt, idx) => {
            let cls = 'quiz-option-btn';
            if (state.qzAnswered !== null) {
              if (idx === q.answer) cls += ' is-correct';
              else if (idx === state.qzAnswered) cls += ' is-wrong';
            }
            return `<button type="button" class="${cls}" data-qz-opt="${idx}" ${state.qzAnswered !== null ? 'disabled' : ''}>${formatRichText(opt)}</button>`;
          })
          .join('')}
      </div>
      ${
        state.qzAnswered !== null
          ? `<div class="callout-box ${state.qzAnswered === q.answer ? 'callout-tip' : 'callout-warning'}" style="margin-bottom:12px">
               <p class="callout-text">${formatRichText(t(q.explainEn, q.explainUr))}</p>
             </div>
             <div class="control-row" style="margin:0">
               <button type="button" class="btn btn-primary" id="btn-qz-next">
                 ${safeIdx + 1 < pool.length ? `${escapeHtml(tr('quizNext'))} <span class="dir-flip">→</span>` : escapeHtml(tr('qzCompleteTitle'))}
               </button>
             </div>`
          : ''
      }
    `;
  }

  let miniGameHtml = '';
  if (includeMiniGame) {
    const gItem = INSECTS_DATA[state.miniGameIndex % INSECTS_DATA.length];
    miniGameHtml = `
      <hr style="margin:26px 0;border:0;border-top:1px solid var(--border-hairline)" />
      <h3>${escapeHtml(tr('quizPartBTitle'))}</h3>
      <div class="mini-card">
        <p style="margin:0 0 6px;font-size:0.88rem;color:var(--text-muted)">${escapeHtml(tr('gameScore'))}: <span class="tabular-nums">${state.miniGameScore}</span></p>
        <p style="margin:0 0 12px;font-size:1.1rem;font-weight:700">${formatRichText(t(gItem.nameEn, gItem.nameUr))}</p>
        <p style="margin:0 0 12px;font-size:0.92rem">${formatRichText(t(gItem.targetEn, gItem.targetUr))}</p>
        <div class="control-row">
          <button type="button" class="btn btn-primary" data-mg="friend">${escapeHtml(tr('gameBtnFriend'))}</button>
          <button type="button" class="btn btn-outline" data-mg="foe">${escapeHtml(tr('gameBtnFoe'))}</button>
        </div>
        ${state.miniGameFeedback ? `<p style="margin:6px 0 0;font-weight:700">${formatRichText(state.miniGameFeedback)}</p>` : ''}
      </div>
    `;
  }

  host.innerHTML = `
    <div class="control-row" role="tablist">
      <button type="button" class="tab-btn ${mode === 'all' ? 'is-active' : ''}" data-qz-mode="all">${escapeHtml(tr('qzModeAll'))}</button>
      <button type="button" class="tab-btn ${mode === 'mcq' ? 'is-active' : ''}" data-qz-mode="mcq">${escapeHtml(tr('qzModeMcq'))}</button>
      <button type="button" class="tab-btn ${mode === 'picture' ? 'is-active' : ''}" data-qz-mode="picture">${escapeHtml(tr('qzModePicture'))}</button>
      <button type="button" class="tab-btn ${mode === 'tf' ? 'is-active' : ''}" data-qz-mode="tf">${escapeHtml(tr('qzModeTf'))}</button>
    </div>
    ${quizHtml}
    ${miniGameHtml}
  `;

  host.querySelectorAll('[data-qz-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.qzMode = btn.getAttribute('data-qz-mode');
      state.qzIdx = 0;
      state.qzScore = 0;
      state.qzAnswered = null;
      state.qzComplete = false;
      mountMultiModeQuizCenter(host, { includeMiniGame });
    });
  });

  host.querySelectorAll('[data-qz-opt]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const picked = Number(btn.getAttribute('data-qz-opt'));
      state.qzAnswered = picked;
      if (q && picked === q.answer) state.qzScore += 1;
      mountMultiModeQuizCenter(host, { includeMiniGame });
    });
  });

  const nextBtn = host.querySelector('#btn-qz-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (safeIdx + 1 < pool.length) {
        state.qzIdx = safeIdx + 1;
        state.qzAnswered = null;
      } else {
        state.qzComplete = true;
      }
      mountMultiModeQuizCenter(host, { includeMiniGame });
    });
  }

  const retryBtn = host.querySelector('#btn-qz-retry');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      state.qzIdx = 0;
      state.qzScore = 0;
      state.qzAnswered = null;
      state.qzComplete = false;
      mountMultiModeQuizCenter(host, { includeMiniGame });
    });
  }

  host.querySelectorAll('[data-mg]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const gItem = INSECTS_DATA[state.miniGameIndex % INSECTS_DATA.length];
      const guess = btn.getAttribute('data-mg');
      const correct = guess === gItem.role;
      if (correct) state.miniGameScore += 1;
      state.miniGameFeedback = correct
        ? `${tr('gameCorrect')} ${t(gItem.actionEn, gItem.actionUr)}`
        : `${tr('gameWrong')} ${t(gItem.actionEn, gItem.actionUr)}`;
      state.miniGameIndex = (state.miniGameIndex + 1) % INSECTS_DATA.length;
      mountMultiModeQuizCenter(host, { includeMiniGame });
    });
  });
}

/* 13. Topic 13 Mount */
function mountQuizAndGame(host) {
  mountMultiModeQuizCenter(host, { includeMiniGame: true });
}

/* Module Summaries Workbench Tab */
function mountModuleSummariesTab(host) {
  host.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('sumHeading'))}</h3>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('sumSubheading'))}</p>
    ${SIMULATION_MODULES.map((mod) => renderModuleSummaryCard(mod)).join('')}
  `;
  attachSummaryCardHandlers(host);
}

/* Flagship Homepage Workbench: Interactive Farm Simulation & Learning Centre */
function renderLearningCentreWorkbench(host) {
  if (!host) return;
  const activeTab = state.lcTab || 'sims';

  host.innerHTML = `
    <div class="crop-lib-tabs" role="tablist">
      <button type="button" role="tab" aria-selected="${activeTab === 'sims'}" class="crop-lib-tab ${activeTab === 'sims' ? 'is-active' : ''}" data-lc-tab="sims">${escapeHtml(tr('lcTabSims'))}</button>
      <button type="button" role="tab" aria-selected="${activeTab === 'videos'}" class="crop-lib-tab ${activeTab === 'videos' ? 'is-active' : ''}" data-lc-tab="videos">${escapeHtml(tr('lcTabVideos'))}</button>
      <button type="button" role="tab" aria-selected="${activeTab === 'quizzes'}" class="crop-lib-tab ${activeTab === 'quizzes' ? 'is-active' : ''}" data-lc-tab="quizzes">${escapeHtml(tr('lcTabQuizzes'))}</button>
      <button type="button" role="tab" aria-selected="${activeTab === 'summaries'}" class="crop-lib-tab ${activeTab === 'summaries' ? 'is-active' : ''}" data-lc-tab="summaries">${escapeHtml(tr('lcTabSummaries'))}</button>
    </div>
    <div id="learning-centre-body"></div>
  `;

  host.querySelectorAll('[data-lc-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.lcTab = btn.getAttribute('data-lc-tab');
      renderLearningCentreWorkbench(host);
    });
  });

  const body = host.querySelector('#learning-centre-body');
  if (activeTab === 'sims') mountSimulationsHub(body);
  else if (activeTab === 'videos') mountVideoLibrary(body);
  else if (activeTab === 'quizzes') mountMultiModeQuizCenter(body, { includeMiniGame: true });
  else mountModuleSummariesTab(body);
}

/* 14. My Farm Plan (localStorage persisted) */
function mountFarmPlanner(host) {
  const checklistItems = [
    ['Soil tested and results recorded', 'مٹی کا ٹیسٹ کروا کر نتائج لکھ لیے'],
    ['No residue burning (Mulching instead)', 'باقیات نہیں جلائیں (زمین کو فصلوں کی باقیات سے ڈھانپا)'],
    ['Crop Rotation with legume or Green Manure', 'فصلوں کی ادل بدل میں کم از کم ایک دال یا سبز کھاد کی فصل'],
    ['Compost or farmyard manure applied yearly', 'ہر سال کچھ کھیتوں میں گلی سڑی نامیاتی کھاد / کمپوسٹ ڈالی'],
    ['Zero Tillage / reduced tillage on trial plot', 'تجرباتی قطعے پر بغیر ہل چلائے کاشت / کم ہل'],
    ['Pest scouting weekly & Beneficial Insects protected', 'ہفتہ وار کیڑوں کا معائنہ اور فائدہ مند حشرات کی حفاظت'],
    ['Rainwater harvested & Waterlogging drains cleared', 'بارش کا پانی محفوظ کیا اور پانی کھڑا ہونے سے بچاؤ کی نالیاں صاف کیں'],
    ['Trees planted on boundaries', 'حدوں پر درخت لگائے'],
    ['Records kept and compared with a normal plot', 'ریکارڈ رکھا اور عام قطعے سے موازنہ کیا'],
    ['Joined or formed a farmer group', 'کسان گروپ میں شامل ہوئے یا بنایا']
  ];

  const fp = state.farmPlan;
  host.innerHTML = `
    <h3>${escapeHtml(tr('planTitle'))}</h3>
    <div class="form-grid">
      <div>
        <label for="fp-name" class="field-label">${escapeHtml(tr('planFarmerName'))}</label>
        <input type="text" id="fp-name" class="field-input" value="${escapeHtml(fp.farmerName)}" placeholder="${escapeHtml(tr('planFarmerPlaceholder'))}" />
      </div>
      <div>
        <label for="fp-village" class="field-label">${escapeHtml(tr('planVillage'))}</label>
        <input type="text" id="fp-village" class="field-input" value="${escapeHtml(fp.village)}" placeholder="${escapeHtml(tr('planVillagePlaceholder'))}" />
      </div>
      <div>
        <label for="fp-kanals" class="field-label">${escapeHtml(tr('planKanals'))}</label>
        <input type="number" id="fp-kanals" class="field-input" min="1" max="40" value="${escapeHtml(fp.trialKanals)}" />
      </div>
    </div>

    <h3 style="margin-top:16px">${escapeHtml(tr('planChecklistTitle'))}</h3>
    <div style="margin-bottom:16px">
      ${checklistItems
        .map(
          (item, idx) => `
          <label class="checklist-item">
            <input type="checkbox" data-fp-check="${idx}" ${fp.checklist[idx] ? 'checked' : ''} />
            <span>${formatRichText(t(item[0], item[1]))}</span>
          </label>
        `
        )
        .join('')}
    </div>

    <h3>${escapeHtml(tr('planRecordTitle'))}</h3>
    <div class="form-grid">
      <div>
        <label for="fp-tcost" class="field-label">${formatRichText(tr('planTrialCost'))}</label>
        <input type="text" id="fp-tcost" class="field-input" value="${escapeHtml(fp.trialCost)}" />
      </div>
      <div>
        <label for="fp-tyield" class="field-label">${escapeHtml(tr('planTrialYield'))}</label>
        <input type="text" id="fp-tyield" class="field-input" value="${escapeHtml(fp.trialYield)}" />
      </div>
      <div>
        <label for="fp-ncost" class="field-label">${formatRichText(tr('planNormalCost'))}</label>
        <input type="text" id="fp-ncost" class="field-input" value="${escapeHtml(fp.normalCost)}" />
      </div>
      <div>
        <label for="fp-nyield" class="field-label">${escapeHtml(tr('planNormalYield'))}</label>
        <input type="text" id="fp-nyield" class="field-input" value="${escapeHtml(fp.normalYield)}" />
      </div>
    </div>
    <div>
      <label for="fp-notes" class="field-label">${escapeHtml(tr('planNotes'))}</label>
      <textarea id="fp-notes" class="field-textarea">${escapeHtml(fp.notes)}</textarea>
    </div>
    <div class="control-row" style="margin-top:12px">
      <button type="button" class="btn btn-primary" id="fp-print-btn">${escapeHtml(tr('planPrint'))}</button>
      <button type="button" class="btn btn-outline" id="fp-reset-btn">${escapeHtml(tr('planReset'))}</button>
      <span id="fp-saved-msg" style="align-self:center;font-size:0.88rem;color:var(--leaf-dark);font-weight:600"></span>
    </div>
  `;

  function showSaved() {
    saveFarmPlan();
    const el = document.getElementById('fp-saved-msg');
    if (el) el.textContent = tr('planSavedMsg');
  }

  const bindInput = (id, key) => {
    document.getElementById(id).addEventListener('input', (e) => {
      state.farmPlan[key] = e.target.value;
      showSaved();
    });
  };
  bindInput('fp-name', 'farmerName');
  bindInput('fp-village', 'village');
  bindInput('fp-kanals', 'trialKanals');
  bindInput('fp-tcost', 'trialCost');
  bindInput('fp-tyield', 'trialYield');
  bindInput('fp-ncost', 'normalCost');
  bindInput('fp-nyield', 'normalYield');
  bindInput('fp-notes', 'notes');

  host.querySelectorAll('[data-fp-check]').forEach((cb) => {
    cb.addEventListener('change', () => {
      const idx = Number(cb.getAttribute('data-fp-check'));
      state.farmPlan.checklist[idx] = cb.checked;
      showSaved();
    });
  });

  document.getElementById('fp-print-btn').addEventListener('click', () => window.print());
  document.getElementById('fp-reset-btn').addEventListener('click', () => {
    state.farmPlan = defaultFarmPlan();
    saveFarmPlan();
    mountFarmPlanner(host);
  });
}

/* 15. Searchable Glossary & Key Terminology */
function mountGlossaryView(host) {
  host.innerHTML = `
    <h3>${escapeHtml(tr('glossaryTitle'))}</h3>
    <div class="mini-card" style="margin-bottom:14px">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px;font-size:0.9rem">
        ${AGRI_TERMS.map(
          (item) => `<div><strong>${escapeHtml(item.en)}</strong> — <span lang="ur" dir="rtl">${escapeHtml(item.ur)}</span></div>`
        ).join('')}
      </div>
    </div>
    <div style="margin-bottom:14px">
      <label for="glossary-filter" class="field-label">${escapeHtml(tr('glossaryFilterLabel'))}</label>
      <input type="search" id="glossary-filter" class="field-input" placeholder="${escapeHtml(tr('glossaryFilterPlaceholder'))}" />
    </div>
    <div class="mini-cards-grid" id="glossary-list"></div>
    <div style="margin-top:18px">
      <a href="./assets/handbook.pdf" target="_blank" rel="noopener" class="btn btn-primary">${escapeHtml(tr('glossaryPdfBtn'))}</a>
    </div>
  `;

  const filterInput = document.getElementById('glossary-filter');
  const listEl = document.getElementById('glossary-list');

  function drawList() {
    const q = filterInput.value.trim().toLowerCase();
    const filtered = !q
      ? GLOSSARY_TERMS
      : GLOSSARY_TERMS.filter((g) => `${g.termEn} ${g.termUr} ${g.defEn} ${g.defUr}`.toLowerCase().includes(q));

    listEl.innerHTML =
      filtered.length === 0
        ? `<p>${escapeHtml(tr('glossaryNoMatch'))}</p>`
        : filtered
            .map(
              (g) => `
              <div class="mini-card">
                <strong>${formatRichText(t(g.termEn, g.termUr))}</strong>
                <p style="margin:4px 0 6px;font-size:0.84rem;color:var(--text-muted)" lang="${state.lang === 'ur' ? 'en' : 'ur'}" dir="${state.lang === 'ur' ? 'ltr' : 'rtl'}">${escapeHtml(state.lang === 'ur' ? g.termEn : g.termUr)}</p>
                <p style="margin:0;font-size:0.9rem">${formatRichText(t(g.defEn, g.defUr))}</p>
              </div>
            `
            )
            .join('');
  }

  filterInput.addEventListener('input', drawList);
  drawList();
}

/* ==========================================================================
   17-CHAPTER INTERACTIVE FARMER COURSE RENDERER (PARTS A–J)
   ========================================================================== */

function renderChapterDiagramSvg(type) {
  switch (type) {
    case 'spade-test':
      return `<svg viewBox="0 0 360 180" class="sim-canvas" role="img" aria-label="30 cm Spade Test diagram">
        <rect x="0" y="0" width="360" height="55" fill="#e8f5e9"/>
        <rect x="0" y="55" width="360" height="125" fill="#6d4c41"/>
        <rect x="120" y="55" width="120" height="90" fill="#4e342e" stroke="#fde047" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="180" y="105" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">30 cm × 30 cm</text>
        <text x="180" y="128" text-anchor="middle" fill="#dcfce7" font-size="12">5+ Earthworms = Good</text>
      </svg>`;
    case 'mulch-shield':
      return `<svg viewBox="0 0 360 180" class="sim-canvas" role="img" aria-label="Straw mulching cools soil diagram">
        <rect x="0" y="0" width="175" height="60" fill="#fef2f2"/><rect x="185" y="0" width="175" height="60" fill="#f0f9ff"/>
        <rect x="0" y="60" width="175" height="120" fill="#8d6e63"/><rect x="185" y="60" width="175" height="120" fill="#4e342e"/>
        <rect x="185" y="48" width="175" height="14" fill="#eab308"/>
        <text x="88" y="40" text-anchor="middle" fill="#b91c1c" font-size="13" font-weight="bold">Bare: 50–60°C</text>
        <text x="272" y="38" text-anchor="middle" fill="#1b4d3e" font-size="13" font-weight="bold">3–5 cm Mulch: Cool</text>
      </svg>`;
    case 'hard-pan':
      return `<svg viewBox="0 0 360 180" class="sim-canvas" role="img" aria-label="Hard pan vs healthy roots diagram">
        <rect x="0" y="0" width="360" height="45" fill="#e8f5e9"/>
        <rect x="0" y="45" width="360" height="135" fill="#6d4c41"/>
        <rect x="0" y="100" width="175" height="16" fill="#3e2723"/>
        <path d="M88 45 L88 96 M88 72 L68 95 M88 76 L108 95" stroke="#fde047" stroke-width="2.5"/>
        <path d="M270 45 L270 160 M270 80 L235 135 M270 85 L305 140" stroke="#81c784" stroke-width="2.8"/>
        <text x="88" y="140" text-anchor="middle" fill="#fecaca" font-size="12" font-weight="bold">Hard Pan Blocks Roots</text>
        <text x="270" y="170" text-anchor="middle" fill="#dcfce7" font-size="12" font-weight="bold">Zero-Till Deep Roots</text>
      </svg>`;
    case 'compost-layers':
      return `<svg viewBox="0 0 360 180" class="sim-canvas" role="img" aria-label="2 parts dry to 1 part green compost layers">
        <rect x="40" y="128" width="280" height="30" rx="4" fill="#d97706"/>
        <rect x="50" y="96" width="260" height="28" rx="4" fill="#2e7d32"/>
        <rect x="60" y="64" width="240" height="28" rx="4" fill="#d97706"/>
        <rect x="70" y="32" width="220" height="28" rx="4" fill="#5d4037"/>
        <text x="180" y="148" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">2 Parts Dry Straw / Leaves</text>
        <text x="180" y="114" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">1 Part Green Grass / Dung</text>
        <text x="180" y="50" text-anchor="middle" fill="#fde047" font-size="12" font-weight="bold">Turn every 2–3 weeks (2–3 months)</text>
      </svg>`;
    case 'awd-pipe':
      return `<svg viewBox="0 0 360 180" class="sim-canvas" role="img" aria-label="15 cm AWD perforated pipe">
        <rect x="0" y="0" width="360" height="54" fill="#e8f5e9"/>
        <rect x="0" y="54" width="360" height="126" fill="#6d4c41"/>
        <rect x="150" y="32" width="60" height="122" rx="6" fill="#eceff1" stroke="#455a64" stroke-width="3"/>
        <rect x="153" y="125" width="54" height="27" fill="#0288d1"/>
        <line x1="130" y1="125" x2="230" y2="125" stroke="#fde047" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="242" y="129" fill="#ffffff" font-size="12" font-weight="bold">15 cm → Irrigate</text>
      </svg>`;
    case 'ipm-ladder':
      return `<svg viewBox="0 0 360 180" class="sim-canvas" role="img" aria-label="6-step IPM pyramid">
        <rect x="40" y="142" width="280" height="26" rx="4" fill="#1b4d3e"/><text x="180" y="159" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">1. Prevent  ·  2. Monitor Weekly (10 Plants)</text>
        <rect x="65" y="110" width="230" height="26" rx="4" fill="#2e7d32"/><text x="180" y="127" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">3. Beneficial Insects  ·  4. Traps</text>
        <rect x="90" y="78" width="180" height="26" rx="4" fill="#d97706"/><text x="180" y="95" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">5. Neem / Trichogramma / Bt</text>
        <rect x="120" y="46" width="120" height="26" rx="4" fill="#c62828"/><text x="180" y="63" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">6. Chemical Last Resort</text>
      </svg>`;
    default:
      return `<svg viewBox="0 0 360 180" class="sim-canvas" role="img" aria-label="Narowal Regenerative Farming Cycle">
        <rect x="16" y="20" width="154" height="58" rx="8" fill="#edf7ed" stroke="#2e7d32"/><text x="93" y="53" text-anchor="middle" fill="#1b4d3e" font-size="12" font-weight="bold">1. Cover &amp; Less Tillage</text>
        <rect x="190" y="20" width="154" height="58" rx="8" fill="#f6efe9" stroke="#6d4c41"/><text x="267" y="53" text-anchor="middle" fill="#4e342e" font-size="12" font-weight="bold">2. Compost &amp; Legumes</text>
        <rect x="16" y="98" width="154" height="58" rx="8" fill="#eaf4fb" stroke="#0277bd"/><text x="93" y="131" text-anchor="middle" fill="#01579b" font-size="12" font-weight="bold">3. Smart Water (AWD)</text>
        <rect x="190" y="98" width="154" height="58" rx="8" fill="#fef9db" stroke="#b45309"/><text x="267" y="131" text-anchor="middle" fill="#5a3804" font-size="12" font-weight="bold">4. Farmer Groups &amp; IPM</text>
      </svg>`;
  }
}

function toggleChapterDone(num) {
  if (state.courseDoneNums.includes(num)) {
    state.courseDoneNums = state.courseDoneNums.filter((n) => n !== num);
  } else {
    state.courseDoneNums = [...state.courseDoneNums, num];
  }
  saveCourseDoneNums(state.courseDoneNums);
}

function renderCourseChapterDetail(chapterNum) {
  const idx = COURSE_CHAPTERS.findIndex((c) => c.num === chapterNum);
  const ch = COURSE_CHAPTERS[idx] || COURSE_CHAPTERS[0];
  const isUrdu = state.lang === 'ur';
  const isDone = state.courseDoneNums.includes(ch.num);

  const primaryTitle = isUrdu ? ch.titleUr : ch.titleEn;
  const altTitle = isUrdu ? ch.titleEn : ch.titleUr;
  const subtitle = isUrdu ? ch.subtitleUr : ch.subtitleEn;

  const partAText = isUrdu ? ch.partA.ur : ch.partA.en;
  const partBText = isUrdu ? ch.partA.en : ch.partA.ur;
  const partBLang = isUrdu ? 'en' : 'ur';
  const partBDir = isUrdu ? 'ltr' : 'rtl';

  const analogyText = isUrdu ? ch.analogy.ur : ch.analogy.en;
  const punjabText = isUrdu ? ch.punjabExample.ur : ch.punjabExample.en;
  const stepsList = isUrdu ? ch.steps.ur : ch.steps.en;
  const tryText = isUrdu ? ch.tryOnFarm.ur : ch.tryOnFarm.en;
  const verifyText = isUrdu ? ch.verifyNote.ur : ch.verifyNote.en;
  const summaryList = isUrdu ? ch.summary.ur : ch.summary.en;

  const prevCh = idx > 0 ? COURSE_CHAPTERS[idx - 1] : null;
  const nextCh = idx < COURSE_CHAPTERS.length - 1 ? COURSE_CHAPTERS[idx + 1] : null;

  const quizAnswers = state.chapterQuizAnswers[ch.num] || {};
  const answeredCount = Object.keys(quizAnswers).length;
  const correctCount = ch.quiz.filter((q, qIdx) => quizAnswers[qIdx] === q.ans).length;

  const container = document.getElementById('detail-container');
  container.innerHTML = `
    <div class="detail-topbar">
      <button type="button" class="btn btn-outline" id="btn-course-home">
        <span class="dir-flip">←</span> ${escapeHtml(tr('backToHome'))}
      </button>
      <div class="control-row" style="margin:0">
        <button type="button" class="btn btn-outline" id="btn-expand-all">${escapeHtml(tr('courseExpandAll'))}</button>
        <button type="button" class="btn ${isDone ? 'btn-primary' : 'btn-outline'}" id="btn-chapter-done">
          ${isDone ? `✓ ${escapeHtml(tr('courseMarkedDone'))}` : escapeHtml(tr('courseMarkDone'))}
        </button>
      </div>
    </div>

    <div class="detail-hero-box">
      <div class="detail-hero-body">
        <p class="detail-kicker">${escapeHtml(tr('courseChapterWord'))} <span class="tabular-nums">${ch.num} ${escapeHtml(tr('courseOf17'))}</span></p>
        <h1 class="detail-title">${escapeHtml(primaryTitle)}</h1>
        <p class="detail-alt-title" lang="${partBLang}" dir="${partBDir}">${escapeHtml(altTitle)}</p>
        <p class="detail-summary">${formatRichText(subtitle)}</p>
      </div>
    </div>

    <div class="lesson-acc-stack" id="chapter-accordions">
      <!-- A. Simple Explanation (open by default) -->
      <details class="lesson-acc" open>
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partALabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <p style="margin:0">${formatRichText(partAText)}</p>
        </div>
      </details>

      <!-- B. Explanation in Second Language -->
      <details class="lesson-acc">
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partBLabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body" lang="${partBLang}" dir="${partBDir}">
          <p style="margin:0">${formatRichText(partBText)}</p>
        </div>
      </details>

      <!-- C. Real-Life Analogy -->
      <details class="lesson-acc">
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partCLabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <p style="margin:0">${formatRichText(analogyText)}</p>
        </div>
      </details>

      <!-- D. Photograph & Illustrated Diagram (open by default) -->
      <details class="lesson-acc" open>
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partDLabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <div class="lesson-visual-grid">
            <img src="${ch.photo}" alt="${escapeHtml(t(ch.titleEn, ch.titleUr))}" class="lesson-photo" referrerpolicy="no-referrer" />
            <div>${renderChapterDiagramSvg(ch.diagram)}</div>
          </div>
        </div>
      </details>

      <!-- E. Practical Example from Punjab -->
      <details class="lesson-acc">
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partELabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <p style="margin:0">${formatRichText(punjabText)}</p>
        </div>
      </details>

      <!-- F. Step-by-Step Activity -->
      <details class="lesson-acc">
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partFLabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <ol class="principles-list">
            ${stepsList.map((s) => `<li>${formatRichText(s)}</li>`).join('')}
          </ol>
        </div>
      </details>

      <!-- G. Try It on Your Farm -->
      <details class="lesson-acc">
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partGLabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <p style="margin:0">${formatRichText(tryText)}</p>
          <div class="verify-box">
            <p class="callout-title">${escapeHtml(tr('verifyDeptTitle'))}</p>
            <p class="callout-text">${formatRichText(verifyText)}</p>
          </div>
        </div>
      </details>

      <!-- H. Important Terms -->
      <details class="lesson-acc">
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partHLabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <div class="mini-cards-grid">
            ${ch.terms
              .map(
                (tm) => `
                <div class="mini-card">
                  <strong>${formatRichText(t(tm.en, tm.ur))}</strong>
                  <p style="margin:2px 0 6px;font-size:0.84rem;color:var(--text-muted)">${escapeHtml(isUrdu ? tm.en : tm.ur)}</p>
                  <p style="margin:0;font-size:0.9rem">${formatRichText(t(tm.defEn, tm.defUr))}</p>
                </div>
              `
              )
              .join('')}
          </div>
        </div>
      </details>

      <!-- I. Short Summary (3 to 5 key points) -->
      <details class="lesson-acc">
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partILabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <ul class="principles-list">
            ${summaryList.map((pt) => `<li>${formatRichText(pt)}</li>`).join('')}
          </ul>
        </div>
      </details>

      <!-- J. 3-Question Knowledge Check -->
      <details class="lesson-acc" ${answeredCount > 0 ? 'open' : ''}>
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('partJLabel'))} (${answeredCount}/3)</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body">
          <p style="margin:0 0 12px;font-weight:700;color:var(--forest)">
            ${escapeHtml(tr('chapterQuizScoreLabel'))}: <span class="tabular-nums">${correctCount} / 3</span>
          </p>
          ${ch.quiz
            .map((q, qIdx) => {
              const picked = quizAnswers[qIdx];
              const opts = isUrdu ? q.optsUr : q.optsEn;
              return `
                <div class="mini-card" style="margin-bottom:12px">
                  <p style="margin:0 0 8px;font-weight:700">${qIdx + 1}. ${formatRichText(isUrdu ? q.qUr : q.qEn)}</p>
                  <div class="quiz-options" style="margin:8px 0">
                    ${opts
                      .map((opt, optIdx) => {
                        let cls = 'quiz-option-btn';
                        if (picked !== undefined) {
                          if (optIdx === q.ans) cls += ' is-correct';
                          else if (optIdx === picked) cls += ' is-wrong';
                        }
                        return `<button type="button" class="${cls}" data-cq-q="${qIdx}" data-cq-o="${optIdx}">${formatRichText(opt)}</button>`;
                      })
                      .join('')}
                  </div>
                  ${
                    picked !== undefined
                      ? `<p style="margin:6px 0 0;font-size:0.9rem;font-weight:600">
                           ${picked === q.ans ? escapeHtml(tr('chapterQuizCorrect')) : escapeHtml(tr('chapterQuizWrong'))}
                           ${formatRichText(isUrdu ? q.expUr : q.expEn)}
                         </p>`
                      : ''
                  }
                </div>
              `;
            })
            .join('')}
        </div>
      </details>
    </div>

    <div class="detail-footer-nav">
      ${
        prevCh
          ? `<button type="button" class="btn btn-outline" id="btn-prev-ch"><span class="dir-flip">←</span> ${escapeHtml(tr('coursePrevChapter'))}: ${prevCh.num}</button>`
          : '<span></span>'
      }
      ${
        nextCh
          ? `<button type="button" class="btn btn-primary" id="btn-next-ch">${escapeHtml(tr('courseNextChapter'))}: ${nextCh.num} <span class="dir-flip">→</span></button>`
          : `<button type="button" class="btn btn-primary" id="btn-finish-ch">${escapeHtml(tr('backToHome'))}</button>`
      }
    </div>
  `;

  document.getElementById('btn-course-home').addEventListener('click', navigateToHome);
  document.getElementById('btn-chapter-done').addEventListener('click', () => {
    toggleChapterDone(ch.num);
    renderCourseChapterDetail(ch.num);
    renderProgress();
    renderCourseCards();
  });

  let expandedAll = false;
  document.getElementById('btn-expand-all').addEventListener('click', (e) => {
    expandedAll = !expandedAll;
    document.querySelectorAll('#chapter-accordions details').forEach((d, i) => {
      d.open = expandedAll ? true : i === 0 || i === 3;
    });
    e.currentTarget.textContent = expandedAll ? tr('courseCollapseAll') : tr('courseExpandAll');
  });

  container.querySelectorAll('[data-cq-q]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qIdx = Number(btn.getAttribute('data-cq-q'));
      const oIdx = Number(btn.getAttribute('data-cq-o'));
      state.chapterQuizAnswers[ch.num] = { ...(state.chapterQuizAnswers[ch.num] || {}), [qIdx]: oIdx };
      renderCourseChapterDetail(ch.num);
    });
  });

  if (prevCh) {
    document.getElementById('btn-prev-ch').addEventListener('click', () => navigateToChapter(prevCh.num));
  }
  if (nextCh) {
    document.getElementById('btn-next-ch').addEventListener('click', () => navigateToChapter(nextCh.num));
  } else {
    document.getElementById('btn-finish-ch').addEventListener('click', navigateToHome);
  }
}

/* ==========================================================================
   INTERACTIVE CROP LIBRARY WORKBENCH (19 CROPS, 12-MONTH CALENDAR, COMPARE, ROTATION)
   ========================================================================== */

function renderCropStageSvg(crop, stageIdx) {
  const type = crop.diagramType || 'cereal';
  const soilFill = '#6d4c41';
  const skyFill = stageIdx === 2 ? '#fef9db' : '#edf7ed';
  const stageLabels = ['Stage 1', 'Stage 2', 'Stage 3'];

  let plantArt = '';
  if (type === 'orchard') {
    const canopyR = stageIdx === 0 ? 34 : stageIdx === 1 ? 42 : 46;
    const fruits =
      stageIdx === 0
        ? '<circle cx="165" cy="64" r="4" fill="#fff"/><circle cx="195" cy="58" r="4" fill="#fff"/><circle cx="180" cy="48" r="4" fill="#fff"/>'
        : stageIdx === 1
          ? '<circle cx="165" cy="66" r="5" fill="#66bb6a"/><circle cx="195" cy="60" r="5" fill="#66bb6a"/><circle cx="178" cy="48" r="5" fill="#66bb6a"/>'
          : '<circle cx="165" cy="66" r="6" fill="#f59e0b"/><circle cx="195" cy="60" r="6" fill="#f59e0b"/><circle cx="178" cy="48" r="6" fill="#f59e0b"/>';
    plantArt = `
      <rect x="130" y="114" width="100" height="10" rx="4" fill="#d97706"/>
      <rect x="172" y="76" width="16" height="44" fill="#5d4037"/>
      <circle cx="180" cy="58" r="${canopyR}" fill="#2e7d32"/>
      ${fruits}
      <text x="180" y="148" text-anchor="middle" fill="#dcfce7" font-size="11" font-weight="bold">Mulched Basin · Compost 2x/Year</text>
    `;
  } else if (type === 'pulses' || type === 'berseem' || type === 'sesbania') {
    const h = stageIdx === 0 ? 32 : stageIdx === 1 ? 64 : 80;
    const nodules = '<circle cx="168" cy="144" r="3" fill="#fde047"/><circle cx="192" cy="150" r="3" fill="#fde047"/><circle cx="180" cy="160" r="3" fill="#fde047"/>';
    const topDetail =
      stageIdx === 0
        ? '<ellipse cx="170" cy="92" rx="10" ry="5" fill="#4caf50"/><ellipse cx="190" cy="92" rx="10" ry="5" fill="#4caf50"/>'
        : stageIdx === 1
          ? '<circle cx="168" cy="64" r="5" fill="#fde047"/><circle cx="192" cy="58" r="5" fill="#fde047"/><ellipse cx="166" cy="76" rx="14" ry="7" fill="#2e7d32"/><ellipse cx="194" cy="72" rx="14" ry="7" fill="#2e7d32"/>'
          : '<path d="M166 56 Q156 76 168 88 M194 52 Q204 72 192 86" stroke="#b45309" stroke-width="4" fill="none" stroke-linecap="round"/>';
    plantArt = `
      <path d="M180 120 L180 166 M180 138 L164 156 M180 142 L196 158" stroke="#d7ccc8" stroke-width="2.2"/>
      ${nodules}
      <line x1="180" y1="120" x2="180" y2="${120 - h}" stroke="#2e7d32" stroke-width="4" stroke-linecap="round"/>
      ${topDetail}
      <text x="180" y="174" text-anchor="middle" fill="#fde047" font-size="11" font-weight="bold">Rhizobium Root Nodules Fix Nitrogen</text>
    `;
  } else if (type === 'vegetables' || type === 'oilseed') {
    const bloom =
      stageIdx === 0
        ? '<circle cx="145" cy="98" r="7" fill="#4caf50"/><circle cx="215" cy="98" r="7" fill="#4caf50"/>'
        : stageIdx === 1
          ? '<circle cx="145" cy="70" r="9" fill="#eab308"/><circle cx="180" cy="62" r="9" fill="#eab308"/><circle cx="215" cy="70" r="9" fill="#f97316"/>'
          : '<circle cx="145" cy="88" r="10" fill="#a16207"/><circle cx="180" cy="82" r="11" fill="#15803d"/><circle cx="215" cy="88" r="10" fill="#ea580c"/>';
    plantArt = `
      <path d="M90 120 L110 98 L250 98 L270 120 Z" fill="#5d4037"/>
      <rect x="110" y="94" width="140" height="6" fill="#eab308"/>
      <line x1="145" y1="98" x2="145" y2="74" stroke="#2e7d32" stroke-width="3"/>
      <line x1="180" y1="98" x2="180" y2="66" stroke="#2e7d32" stroke-width="3"/>
      <line x1="215" y1="98" x2="215" y2="74" stroke="#2e7d32" stroke-width="3"/>
      ${bloom}
      <text x="180" y="152" text-anchor="middle" fill="#dcfce7" font-size="11" font-weight="bold">${type === 'vegetables' ? 'Raised Bed + Mulch + Marigold Trap' : 'Winter Oilseed · Protect Bees at Bloom'}</text>
    `;
  } else {
    // Rice, Wheat, Cane, Maize, Sorghum
    const h = stageIdx === 0 ? 34 : stageIdx === 1 ? 66 : 82;
    const headFill = stageIdx === 2 ? '#eab308' : '#2e7d32';
    const awdWater =
      type === 'rice'
        ? `<rect x="275" y="108" width="28" height="60" rx="4" fill="#eceff1" stroke="#455a64" stroke-width="2"/><rect x="277" y="${stageIdx === 2 ? 112 : 142}" width="24" height="${stageIdx === 2 ? 54 : 24}" fill="#0288d1"/>`
        : '';
    plantArt = `
      <rect x="40" y="114" width="220" height="8" rx="3" fill="#eab308"/>
      <path d="M120 120 L120 ${120 - h} M160 120 L160 ${116 - h} M200 120 L200 ${120 - h}" stroke="${headFill}" stroke-width="4" stroke-linecap="round"/>
      ${stageIdx === 2 ? '<ellipse cx="120" cy="38" rx="6" ry="12" fill="#d97706"/><ellipse cx="160" cy="34" rx="6" ry="12" fill="#d97706"/><ellipse cx="200" cy="38" rx="6" ry="12" fill="#d97706"/>' : ''}
      ${awdWater}
      <text x="150" y="154" text-anchor="middle" fill="#dcfce7" font-size="11" font-weight="bold">${type === 'rice' ? '15 cm AWD + No Straw Burning' : 'Deep Roots Under 3–5 cm Mulch'}</text>
    `;
  }

  return `<svg viewBox="0 0 360 185" class="sim-canvas" style="margin-bottom:0" role="img" aria-label="${escapeHtml(crop.nameEn)} ${stageLabels[stageIdx]} diagram">
    <rect x="0" y="0" width="360" height="120" fill="${skyFill}"/>
    <rect x="0" y="120" width="360" height="65" fill="${soilFill}"/>
    <text x="14" y="22" fill="#1b4d3e" font-size="12" font-weight="bold">${escapeHtml(crop.nameEn)} · ${stageLabels[stageIdx]}</text>
    ${plantArt}
  </svg>`;
}

function renderCropLibraryWorkbench(host) {
  if (!host) return;
  const activeTab = state.cropLibTab || 'cards';

  host.innerHTML = `
    <div class="crop-lib-tabs" role="tablist">
      <button type="button" role="tab" aria-selected="${activeTab === 'cards'}" class="crop-lib-tab ${activeTab === 'cards' ? 'is-active' : ''}" data-cl-tab="cards">${escapeHtml(tr('cropTabCards'))}</button>
      <button type="button" role="tab" aria-selected="${activeTab === 'calendar'}" class="crop-lib-tab ${activeTab === 'calendar' ? 'is-active' : ''}" data-cl-tab="calendar">${escapeHtml(tr('cropTabCalendar'))}</button>
      <button type="button" role="tab" aria-selected="${activeTab === 'compare'}" class="crop-lib-tab ${activeTab === 'compare' ? 'is-active' : ''}" data-cl-tab="compare">${escapeHtml(tr('cropTabCompare'))}</button>
      <button type="button" role="tab" aria-selected="${activeTab === 'rotation'}" class="crop-lib-tab ${activeTab === 'rotation' ? 'is-active' : ''}" data-cl-tab="rotation">${escapeHtml(tr('cropTabRotation'))}</button>
    </div>
    <div id="crop-lib-body"></div>
  `;

  host.querySelectorAll('[data-cl-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.cropLibTab = btn.getAttribute('data-cl-tab');
      renderCropLibraryWorkbench(host);
    });
  });

  const body = host.querySelector('#crop-lib-body');
  if (activeTab === 'cards') renderCropCardsTab(body);
  else if (activeTab === 'calendar') renderCropCalendarTab(body);
  else if (activeTab === 'compare') renderCropCompareTab(body);
  else renderCropRotationTab(body);
}

function renderCropCardsTab(body) {
  const f = state.cropLibFilter;
  const q = state.cropLibSearch.trim().toLowerCase();

  body.innerHTML = `
    <div class="crop-toolbar">
      <div class="control-row" style="margin-bottom:0">
        <button type="button" class="tab-btn ${f === 'all' ? 'is-active' : ''}" data-clf="all">${escapeHtml(tr('cropFilterAll'))}</button>
        <button type="button" class="tab-btn ${f === 'kharif' ? 'is-active' : ''}" data-clf="kharif">${escapeHtml(tr('filterKharif'))}</button>
        <button type="button" class="tab-btn ${f === 'rabi' ? 'is-active' : ''}" data-clf="rabi">${escapeHtml(tr('filterRabi'))}</button>
        <button type="button" class="tab-btn ${f === 'zaid' ? 'is-active' : ''}" data-clf="zaid">${escapeHtml(tr('filterZaid'))}</button>
        <button type="button" class="tab-btn ${f === 'orchard' ? 'is-active' : ''}" data-clf="orchard">${escapeHtml(tr('cropFilterOrchard'))}</button>
        <button type="button" class="tab-btn ${f === 'multi' ? 'is-active' : ''}" data-clf="multi">${escapeHtml(tr('cropFilterMulti'))}</button>
      </div>
      <div>
        <label for="crop-lib-filter-input" class="field-label">${escapeHtml(tr('cropFilterLabel'))}</label>
        <input type="search" id="crop-lib-filter-input" class="field-input" value="${escapeHtml(state.cropLibSearch)}" placeholder="${escapeHtml(tr('cropFilterPlaceholder'))}" />
      </div>
    </div>
    <div class="crop-card-grid" id="crop-library-cards"></div>
  `;

  function paintCards() {
    const query = state.cropLibSearch.trim().toLowerCase();
    const filtered = CROP_LIBRARY.filter((c) => {
      const seasonMatch = state.cropLibFilter === 'all' || c.seasonClass === state.cropLibFilter;
      if (!seasonMatch) return false;
      if (!query) return true;
      const hay = `${c.nameEn} ${c.nameUr} ${c.scientificName} ${c.seasonClassEn} ${c.seasonClassUr} ${c.summary.en} ${c.summary.ur}`.toLowerCase();
      return hay.includes(query);
    });

    const cardsHost = body.querySelector('#crop-library-cards');
    if (filtered.length === 0) {
      cardsHost.innerHTML = `<p style="grid-column:1/-1;color:var(--text-muted)">${escapeHtml(tr('glossaryNoMatch'))}</p>`;
      return;
    }

    cardsHost.innerHTML = filtered
      .map((c) => {
        const primary = state.lang === 'ur' ? c.nameUr : c.nameEn;
        const alt = state.lang === 'ur' ? c.nameEn : c.nameUr;
        return `
          <button type="button" class="crop-card" data-open-crop="${c.id}">
            <div>
              <div class="crop-thumb-wrap">
                <img src="${c.photo}" alt="${escapeHtml(t(c.nameEn, c.nameUr))}" class="crop-thumb-img" referrerpolicy="no-referrer" />
              </div>
              <div class="crop-card-body">
                <div class="crop-meta-line">
                  <span class="tabular-nums">${c.num} / 19</span>
                  <span aria-hidden="true">·</span>
                  <span>${escapeHtml(t(c.seasonClassEn, c.seasonClassUr))}</span>
                </div>
                <h3 class="crop-card-title">${escapeHtml(primary)}</h3>
                <p class="crop-card-alt" lang="${state.lang === 'ur' ? 'en' : 'ur'}" dir="${state.lang === 'ur' ? 'ltr' : 'rtl'}">${escapeHtml(alt)}</p>
                <p class="crop-card-sci"><span class="sci-name" lang="la" dir="ltr">${escapeHtml(c.scientificName)}</span></p>
                <p class="crop-card-desc">${formatRichText(t(c.summary.en, c.summary.ur))}</p>
              </div>
            </div>
            <div class="crop-card-foot">
              ${escapeHtml(tr('cropOpenCard'))} <span class="dir-flip">→</span>
            </div>
          </button>
        `;
      })
      .join('');

    cardsHost.querySelectorAll('[data-open-crop]').forEach((btn) => {
      btn.addEventListener('click', () => {
        navigateToCrop(btn.getAttribute('data-open-crop'));
      });
    });
  }

  body.querySelectorAll('[data-clf]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.cropLibFilter = btn.getAttribute('data-clf');
      renderCropCardsTab(body);
    });
  });

  const inp = body.querySelector('#crop-lib-filter-input');
  inp.addEventListener('input', (e) => {
    state.cropLibSearch = e.target.value;
    paintCards();
  });

  paintCards();
}

function renderCropCalendarTab(body) {
  const month = NAROWAL_MONTHS[state.selectedMonthIdx] || NAROWAL_MONTHS[0];
  const activeCrops = month.activeCropIds.map((id) => CROP_LIBRARY.find((c) => c.id === id)).filter(Boolean);

  body.innerHTML = `
    <p style="margin:0 0 12px;font-weight:700;color:var(--forest-dark)">${escapeHtml(tr('calSelectMonth'))}</p>
    <div class="month-grid">
      ${NAROWAL_MONTHS.map(
        (m) => `
        <button type="button" class="month-btn ${m.idx === month.idx ? 'is-active' : ''}" data-month-idx="${m.idx}">
          ${escapeHtml(t(m.shortEn, m.shortUr))}
        </button>
      `
      ).join('')}
    </div>

    <div class="calendar-stage-box">
      <div class="crop-meta-line" style="font-size:0.9rem;margin-bottom:6px">
        <span>${escapeHtml(t(month.nameEn, month.nameUr))}</span>
        <span aria-hidden="true">·</span>
        <span>${formatRichText(t(month.seasonEn, month.seasonUr))}</span>
      </div>
      <h3 style="margin:0 0 6px;font-size:1.15rem;color:var(--forest-dark)">${escapeHtml(tr('calWeatherLabel'))}</h3>
      <p style="margin:0 0 14px">${formatRichText(t(month.climateEn, month.climateUr))}</p>

      <h4 style="margin:0 0 8px;font-size:1rem;color:var(--text-primary)">${escapeHtml(tr('calTasksLabel'))}</h4>
      <ul class="principles-list" style="margin-bottom:16px">
        ${(state.lang === 'ur' ? month.activitiesUr : month.activitiesEn).map((act) => `<li>${formatRichText(act)}</li>`).join('')}
      </ul>

      <h4 style="margin:0 0 6px;font-size:1rem;color:var(--text-primary)">${escapeHtml(tr('calActiveCropsLabel'))}</h4>
      <div class="active-crop-chips">
        ${activeCrops
          .map(
            (c) => `
            <button type="button" class="crop-jump-btn" data-cal-crop="${c.id}">
              ${escapeHtml(t(c.nameEn, c.nameUr))}
            </button>
          `
          )
          .join('')}
      </div>

      <div class="verify-box">
        <p class="callout-title">${escapeHtml(tr('verifyDeptTitle'))}</p>
        <p class="callout-text">${formatRichText(t(month.verifyNoteEn, month.verifyNoteUr))}</p>
      </div>
    </div>
  `;

  body.querySelectorAll('[data-month-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.selectedMonthIdx = Number(btn.getAttribute('data-month-idx'));
      renderCropCalendarTab(body);
    });
  });

  body.querySelectorAll('[data-cal-crop]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToCrop(btn.getAttribute('data-cal-crop'));
    });
  });
}

function renderCropCompareTab(body) {
  const cropA = CROP_LIBRARY.find((c) => c.id === state.compareCropA) || CROP_LIBRARY[0];
  const cropB = CROP_LIBRARY.find((c) => c.id === state.compareCropB) || CROP_LIBRARY[1];

  const optionsHtml = (selectedId) =>
    CROP_LIBRARY.map(
      (c) => `<option value="${c.id}" ${c.id === selectedId ? 'selected' : ''}>${escapeHtml(t(c.nameEn, c.nameUr))} (${escapeHtml(t(c.seasonClassEn, c.seasonClassUr))})</option>`
    ).join('');

  body.innerHTML = `
    <h3 style="margin:0 0 12px;color:var(--forest-dark)">${escapeHtml(tr('cmpTitle'))}</h3>
    <div class="control-row" style="align-items:center">
      <span style="font-size:0.86rem;font-weight:700;color:var(--text-muted)">${escapeHtml(tr('cmpPresetLabel'))}</span>
      <button type="button" class="tab-btn" data-cmp-pair="basmati-rice,wheat">${escapeHtml(t('Rice vs Wheat', 'چاول بمقابلہ گندم'))}</button>
      <button type="button" class="tab-btn" data-cmp-pair="sesbania,mung-bean">${escapeHtml(t('Sesbania vs Mung', 'سنبھالو بمقابلہ مونگ'))}</button>
      <button type="button" class="tab-btn" data-cmp-pair="chickpea,mustard">${escapeHtml(t('Chickpea vs Mustard', 'چنا بمقابلہ سرسوں'))}</button>
      <button type="button" class="tab-btn" data-cmp-pair="sugarcane,maize">${escapeHtml(t('Sugarcane vs Maize', 'گنا بمقابلہ مکئی'))}</button>
    </div>

    <div class="form-grid">
      <div>
        <label for="cmp-select-a" class="field-label">${escapeHtml(tr('cmpCropALabel'))}</label>
        <select id="cmp-select-a" class="field-select">${optionsHtml(cropA.id)}</select>
      </div>
      <div>
        <label for="cmp-select-b" class="field-label">${escapeHtml(tr('cmpCropBLabel'))}</label>
        <select id="cmp-select-b" class="field-select">${optionsHtml(cropB.id)}</select>
      </div>
    </div>

    <div class="comparison-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th>${escapeHtml(tr('cmpFieldHeader'))}</th>
            <th>${escapeHtml(t(cropA.nameEn, cropA.nameUr))}</th>
            <th>${escapeHtml(t(cropB.nameEn, cropB.nameUr))}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${escapeHtml(tr('cropF3Sci'))}</td>
            <td><span class="sci-name" lang="la" dir="ltr">${escapeHtml(cropA.scientificName)}</span></td>
            <td><span class="sci-name" lang="la" dir="ltr">${escapeHtml(cropB.scientificName)}</span></td>
          </tr>
          <tr>
            <td>${escapeHtml(tr('cropF4Class'))}</td>
            <td>${formatRichText(t(cropA.seasonClassEn, cropA.seasonClassUr))}</td>
            <td>${formatRichText(t(cropB.seasonClassEn, cropB.seasonClassUr))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tr('cropF5Season'))}</td>
            <td>${formatRichText(t(cropA.suitableSeason.en, cropA.suitableSeason.ur))}</td>
            <td>${formatRichText(t(cropB.suitableSeason.en, cropB.suitableSeason.ur))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tr('cropF6Land'))}</td>
            <td>${formatRichText(t(cropA.landPrep.en, cropA.landPrep.ur))}</td>
            <td>${formatRichText(t(cropB.landPrep.en, cropB.landPrep.ur))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tr('cropF9Water'))}</td>
            <td>${formatRichText(t(cropA.irrigation.en, cropA.irrigation.ur))}</td>
            <td>${formatRichText(t(cropB.irrigation.en, cropB.irrigation.ur))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tr('cropF10Nutrients'))}</td>
            <td>${formatRichText(t(cropA.nutrients.en, cropA.nutrients.ur))}</td>
            <td>${formatRichText(t(cropB.nutrients.en, cropB.nutrients.ur))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tr('cropF13Regen'))}</td>
            <td>${formatRichText(t(cropA.regenerativeRole.en, cropA.regenerativeRole.ur))}</td>
            <td>${formatRichText(t(cropB.regenerativeRole.en, cropB.regenerativeRole.ur))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tr('verifyDeptTitle'))}</td>
            <td>${formatRichText(t(cropA.unverifiedNotice.en, cropA.unverifiedNotice.ur))}</td>
            <td>${formatRichText(t(cropB.unverifiedNotice.en, cropB.unverifiedNotice.ur))}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  body.querySelector('#cmp-select-a').addEventListener('change', (e) => {
    state.compareCropA = e.target.value;
    renderCropCompareTab(body);
  });

  body.querySelector('#cmp-select-b').addEventListener('change', (e) => {
    state.compareCropB = e.target.value;
    renderCropCompareTab(body);
  });

  body.querySelectorAll('[data-cmp-pair]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const [a, b] = btn.getAttribute('data-cmp-pair').split(',');
      state.compareCropA = a;
      state.compareCropB = b;
      renderCropCompareTab(body);
    });
  });
}

function renderCropRotationTab(body) {
  const baseCrop = CROP_LIBRARY.find((c) => c.id === state.rotationCropId) || CROP_LIBRARY[0];
  const nextItems = (baseCrop.nextRotationIds || [])
    .map((item) => ({
      ...item,
      target: CROP_LIBRARY.find((c) => c.id === item.targetId)
    }))
    .filter((x) => x.target);

  body.innerHTML = `
    <h3 style="margin:0 0 8px;color:var(--forest-dark)">${escapeHtml(tr('rotTitle'))}</h3>
    <p style="margin:0 0 14px;font-size:0.92rem;color:var(--text-secondary)">${formatRichText(tr('rotLegumeGoal'))}</p>

    <div class="form-grid" style="max-width:460px">
      <div>
        <label for="rot-select" class="field-label">${escapeHtml(tr('rotSelectLabel'))}</label>
        <select id="rot-select" class="field-select">
          ${CROP_LIBRARY.map(
            (c) => `<option value="${c.id}" ${c.id === baseCrop.id ? 'selected' : ''}>${escapeHtml(t(c.nameEn, c.nameUr))} · ${escapeHtml(t(c.seasonClassEn, c.seasonClassUr))}</option>`
          ).join('')}
        </select>
      </div>
    </div>

    <div class="rotation-chain-banner">
      <span>${escapeHtml(t(baseCrop.nameEn, baseCrop.nameUr))}</span>
      <span class="dir-flip">→</span>
      <span>${nextItems.map((n) => escapeHtml(t(n.target.nameEn, n.target.nameUr))).join('  /  ')}</span>
    </div>

    <h4 style="margin:0 0 10px;color:var(--text-primary)">${escapeHtml(tr('rotNextHeading'))}</h4>
    <div class="mini-cards-grid">
      ${nextItems
        .map(
          (n) => `
          <div class="mini-card is-friend">
            <div class="crop-meta-line" style="margin-bottom:4px">
              <span>${escapeHtml(t(n.badgeEn, n.badgeUr))}</span>
            </div>
            <strong style="font-size:1.05rem">${escapeHtml(t(n.target.nameEn, n.target.nameUr))}</strong>
            <p style="margin:4px 0 6px;font-size:0.84rem;color:var(--text-muted)"><span class="sci-name" lang="la" dir="ltr">${escapeHtml(n.target.scientificName)}</span></p>
            <p style="margin:0 0 12px;font-size:0.9rem">${formatRichText(t(n.reasonEn, n.reasonUr))}</p>
            <button type="button" class="btn btn-outline" style="min-height:44px;padding:6px 14px" data-rot-open="${n.target.id}">
              ${escapeHtml(tr('rotOpenRecommended'))} <span class="dir-flip">→</span>
            </button>
          </div>
        `
        )
        .join('')}
    </div>
  `;

  body.querySelector('#rot-select').addEventListener('change', (e) => {
    state.rotationCropId = e.target.value;
    renderCropRotationTab(body);
  });

  body.querySelectorAll('[data-rot-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToCrop(btn.getAttribute('data-rot-open'));
    });
  });
}

/* ==========================================================================
   FULL 15-PART ILLUSTRATED BILINGUAL CROP CARD PAGE (#crop/<id>)
   ========================================================================== */

function renderCropDetail(cropId) {
  const idx = CROP_LIBRARY.findIndex((c) => c.id === cropId);
  const crop = CROP_LIBRARY[idx] || CROP_LIBRARY[0];
  const isUrdu = state.lang === 'ur';
  const stageIdx = state.cropStageIdx || 0;

  const primaryName = isUrdu ? crop.nameUr : crop.nameEn;
  const altName = isUrdu ? crop.nameEn : crop.nameUr;
  const stageCaptions = isUrdu ? crop.stageCaptions.ur : crop.stageCaptions.en;
  const mistakes = isUrdu ? crop.commonMistakes.ur : crop.commonMistakes.en;

  const prevCrop = idx > 0 ? CROP_LIBRARY[idx - 1] : null;
  const nextCrop = idx < CROP_LIBRARY.length - 1 ? CROP_LIBRARY[idx + 1] : null;

  const container = document.getElementById('detail-container');
  container.innerHTML = `
    <div class="detail-topbar">
      <button type="button" class="btn btn-outline" id="btn-crop-back">
        <span class="dir-flip">←</span> ${escapeHtml(tr('cropBackToLib'))}
      </button>
      <button type="button" class="btn btn-outline" id="btn-crop-home">
        ${escapeHtml(tr('backToHome'))}
      </button>
    </div>

    <!-- 1, 3, 4: Crop Name (EN + UR), Scientific Name, Classification -->
    <div class="detail-hero-box">
      <div class="detail-hero-body">
        <p class="detail-kicker tabular-nums">${crop.num} / 19 · ${escapeHtml(t(crop.seasonClassEn, crop.seasonClassUr))}</p>
        <h1 class="detail-title">${escapeHtml(primaryName)}</h1>
        <p class="detail-alt-title" lang="${isUrdu ? 'en' : 'ur'}" dir="${isUrdu ? 'ltr' : 'rtl'}">${escapeHtml(altName)}</p>
        <p style="margin:0 0 10px;font-size:0.95rem;color:var(--text-secondary)">
          <strong>${escapeHtml(tr('cropF3Sci'))}:</strong> <span class="sci-name" lang="la" dir="ltr">${escapeHtml(crop.scientificName)}</span>
        </p>
        <div class="verify-box" style="margin-top:8px">
          <p class="callout-title">${escapeHtml(tr('cropUnverifiedTitle'))}</p>
          <p class="callout-text">${formatRichText(t(crop.unverifiedNotice.en, crop.unverifiedNotice.ur))}</p>
        </div>
      </div>
    </div>

    <!-- 2: Photograph at Different Growth Stages + Botanical Illustration -->
    <div class="crop-stage-viewer">
      <h2 style="margin:0 0 10px;font-size:1.15rem;color:var(--forest-dark)">${escapeHtml(tr('cropF2Stages'))}</h2>
      <div class="control-row">
        <button type="button" class="tab-btn ${stageIdx === 0 ? 'is-active' : ''}" data-cstage="0">${escapeHtml(tr('cropStage1Btn'))}</button>
        <button type="button" class="tab-btn ${stageIdx === 1 ? 'is-active' : ''}" data-cstage="1">${escapeHtml(tr('cropStage2Btn'))}</button>
        <button type="button" class="tab-btn ${stageIdx === 2 ? 'is-active' : ''}" data-cstage="2">${escapeHtml(tr('cropStage3Btn'))}</button>
      </div>
      <div class="crop-stage-media-grid">
        <div class="crop-stage-photo-wrap">
          <img src="${crop.photo}" alt="${escapeHtml(t(crop.nameEn, crop.nameUr))} - ${escapeHtml(stageCaptions[stageIdx])}" class="crop-stage-photo stage-${stageIdx}" referrerpolicy="no-referrer" />
          <p class="crop-stage-caption">${formatRichText(stageCaptions[stageIdx])}</p>
        </div>
        <div>${renderCropStageSvg(crop, stageIdx)}</div>
      </div>
    </div>

    <!-- Fields 1–15 Complete Structured Profile -->
    <div class="crop-15-grid">
      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF1Name'))}</h3>
        <p style="margin:0"><strong>English:</strong> ${escapeHtml(crop.nameEn)}<br /><strong>اردو:</strong> <span lang="ur" dir="rtl">${escapeHtml(crop.nameUr)}</span></p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF4Class'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.seasonClassEn, crop.seasonClassUr))}</p>
      </div>

      <div class="detail-card full-span">
        <h3>${escapeHtml(tr('cropF5Season'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.suitableSeason.en, crop.suitableSeason.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF6Land'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.landPrep.en, crop.landPrep.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF7Seed'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.seedSowing.en, crop.seedSowing.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF8Spacing'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.spacing.en, crop.spacing.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF9Water'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.irrigation.en, crop.irrigation.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF10Nutrients'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.nutrients.en, crop.nutrients.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF11Pests'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.pestsWeedsDiseases.en, crop.pestsWeedsDiseases.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF12Harvest'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.harvestStorage.en, crop.harvestStorage.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('cropF13Regen'))}</h3>
        <p style="margin:0">${formatRichText(t(crop.regenerativeRole.en, crop.regenerativeRole.ur))}</p>
      </div>

      <div class="detail-card callout-warning" style="background:var(--warning-tint);border-color:#f3b7b7">
        <h3 style="color:var(--warning)">${escapeHtml(tr('cropF14Mistakes'))}</h3>
        <ul class="principles-list">
          ${mistakes.map((m) => `<li>${formatRichText(m)}</li>`).join('')}
        </ul>
      </div>

      <div class="detail-card" style="background:var(--leaf-tint);border-color:#b7deb9">
        <h3 style="color:var(--leaf-dark)">${escapeHtml(tr('cropF15Summary'))}</h3>
        <p style="margin:0;font-weight:600">${formatRichText(t(crop.summary.en, crop.summary.ur))}</p>
      </div>
    </div>

    <div class="detail-footer-nav">
      ${
        prevCrop
          ? `<button type="button" class="btn btn-outline" id="btn-prev-crop"><span class="dir-flip">←</span> ${escapeHtml(tr('cropPrevCrop'))}: ${escapeHtml(t(prevCrop.nameEn, prevCrop.nameUr))}</button>`
          : '<span></span>'
      }
      ${
        nextCrop
          ? `<button type="button" class="btn btn-primary" id="btn-next-crop">${escapeHtml(tr('cropNextCrop'))}: ${escapeHtml(t(nextCrop.nameEn, nextCrop.nameUr))} <span class="dir-flip">→</span></button>`
          : `<button type="button" class="btn btn-primary" id="btn-finish-crop">${escapeHtml(tr('cropBackToLib'))}</button>`
      }
    </div>
  `;

  document.getElementById('btn-crop-back').addEventListener('click', () => navigateToHome('crops-library'));
  document.getElementById('btn-crop-home').addEventListener('click', () => navigateToHome());

  container.querySelectorAll('[data-cstage]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.cropStageIdx = Number(btn.getAttribute('data-cstage'));
      renderCropDetail(crop.id);
    });
  });

  if (prevCrop) {
    document.getElementById('btn-prev-crop').addEventListener('click', () => navigateToCrop(prevCrop.id));
  }
  if (nextCrop) {
    document.getElementById('btn-next-crop').addEventListener('click', () => navigateToCrop(nextCrop.id));
  } else {
    document.getElementById('btn-finish-crop').addEventListener('click', () => navigateToHome('crops-library'));
  }
}

/* ==========================================================================
   ILLUSTRATED BILINGUAL FIELD IDENTIFICATION GUIDE (4 LIBRARIES + GUIDED ID)
   ========================================================================== */

function getFgSnippet(entry) {
  if (entry.library === 'A') return t(entry.farmBenefit.en, entry.farmBenefit.ur);
  if (entry.library === 'B') return t(entry.cropsAffected.en, entry.cropsAffected.ur);
  if (entry.library === 'C') return t(entry.roleText.en, entry.roleText.ur);
  return t(entry.roleText.en, entry.roleText.ur);
}

function renderFieldGuideWorkbench(host) {
  if (!host) return;
  const activeTab = state.fgTab || 'gallery';

  host.innerHTML = `
    <div class="fg-safety-banner">
      <p class="callout-title">${escapeHtml(tr('fgSafetyTitle'))}</p>
      <p class="callout-text">${formatRichText(tr('fgSafetyText'))}</p>
    </div>
    <div class="crop-lib-tabs" role="tablist">
      <button type="button" role="tab" aria-selected="${activeTab === 'gallery'}" class="crop-lib-tab ${activeTab === 'gallery' ? 'is-active' : ''}" data-fg-tab="gallery">${escapeHtml(tr('fgTabGallery'))}</button>
      <button type="button" role="tab" aria-selected="${activeTab === 'guided'}" class="crop-lib-tab ${activeTab === 'guided' ? 'is-active' : ''}" data-fg-tab="guided">${escapeHtml(tr('fgTabGuided'))}</button>
    </div>
    <div id="fg-workbench-body"></div>
  `;

  host.querySelectorAll('[data-fg-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.fgTab = btn.getAttribute('data-fg-tab');
      renderFieldGuideWorkbench(host);
    });
  });

  const body = host.querySelector('#fg-workbench-body');
  if (activeTab === 'guided') {
    renderFieldGuideGuidedTab(body);
  } else {
    renderFieldGuideGalleryTab(body);
  }
}

function renderFieldGuideGalleryTab(body) {
  const f = state.fgFilter || 'all';
  const showBirdSub = f === 'bird';
  const showPlantSub = f === 'useful-plant';

  body.innerHTML = `
    <div class="crop-toolbar">
      <div class="control-row" style="margin-bottom:0">
        <button type="button" class="tab-btn ${f === 'all' ? 'is-active' : ''}" data-fgf="all">${escapeHtml(tr('fgFilterAll'))}</button>
        <button type="button" class="tab-btn ${f === 'beneficial' ? 'is-active' : ''}" data-fgf="beneficial">${escapeHtml(tr('fgFilterBeneficial'))}</button>
        <button type="button" class="tab-btn ${f === 'harmful' ? 'is-active' : ''}" data-fgf="harmful">${escapeHtml(tr('fgFilterHarmful'))}</button>
        <button type="button" class="tab-btn ${f === 'bird' ? 'is-active' : ''}" data-fgf="bird">${escapeHtml(tr('fgFilterBird'))}</button>
        <button type="button" class="tab-btn ${f === 'weed' ? 'is-active' : ''}" data-fgf="weed">${escapeHtml(tr('fgFilterWeed'))}</button>
        <button type="button" class="tab-btn ${f === 'useful-plant' ? 'is-active' : ''}" data-fgf="useful-plant">${escapeHtml(tr('fgFilterUsefulPlant'))}</button>
      </div>
      <div>
        <label for="fg-filter-input" class="field-label">${escapeHtml(tr('fgSearchLabel'))}</label>
        <input type="search" id="fg-filter-input" class="field-input" value="${escapeHtml(state.fgSearch)}" placeholder="${escapeHtml(tr('fgSearchPlaceholder'))}" />
      </div>
    </div>
    ${
      showBirdSub
        ? `<div class="fg-subfilter-row">
            <button type="button" class="tab-btn ${state.fgBirdSubFilter === 'all' ? 'is-active' : ''}" data-fgb="all">${escapeHtml(tr('fgBirdAll'))}</button>
            <button type="button" class="tab-btn ${state.fgBirdSubFilter === 'insectivore' ? 'is-active' : ''}" data-fgb="insectivore">${escapeHtml(tr('fgBirdInsectivore'))}</button>
            <button type="button" class="tab-btn ${state.fgBirdSubFilter === 'crop-damage' ? 'is-active' : ''}" data-fgb="crop-damage">${escapeHtml(tr('fgBirdDamage'))}</button>
            <button type="button" class="tab-btn ${state.fgBirdSubFilter === 'biodiversity' ? 'is-active' : ''}" data-fgb="biodiversity">${escapeHtml(tr('fgBirdBio'))}</button>
          </div>`
        : ''
    }
    ${
      showPlantSub
        ? `<div class="fg-subfilter-row">
            <button type="button" class="tab-btn ${state.fgPlantSubFilter === 'all' ? 'is-active' : ''}" data-fgp="all">${escapeHtml(tr('fgPlantAll'))}</button>
            <button type="button" class="tab-btn ${state.fgPlantSubFilter === 'wild' ? 'is-active' : ''}" data-fgp="wild">${escapeHtml(tr('fgPlantWild'))}</button>
            <button type="button" class="tab-btn ${state.fgPlantSubFilter === 'herb' ? 'is-active' : ''}" data-fgp="herb">${escapeHtml(tr('fgPlantHerb'))}</button>
            <button type="button" class="tab-btn ${state.fgPlantSubFilter === 'cover' ? 'is-active' : ''}" data-fgp="cover">${escapeHtml(tr('fgPlantCover'))}</button>
          </div>`
        : ''
    }
    <div class="fg-card-grid" id="fg-cards-grid"></div>
  `;

  function paintGallery() {
    const q = state.fgSearch.trim().toLowerCase();
    const list = FIELD_GUIDE_ENTRIES.filter((e) => {
      if (f !== 'all' && e.category !== f) return false;
      if (f === 'bird' && state.fgBirdSubFilter !== 'all' && e.subRole !== state.fgBirdSubFilter) return false;
      if (f === 'useful-plant' && state.fgPlantSubFilter !== 'all' && e.subRole !== state.fgPlantSubFilter) return false;
      if (!q) return true;
      const hay = `${e.nameEn} ${e.nameUr} ${e.scientificName} ${e.categoryEn} ${e.categoryUr} ${e.clues.en} ${e.clues.ur} ${e.action.en} ${e.action.ur}`.toLowerCase();
      return hay.includes(q);
    });

    const grid = body.querySelector('#fg-cards-grid');
    if (list.length === 0) {
      grid.innerHTML = `<p style="grid-column:1/-1;color:var(--text-muted)">${escapeHtml(tr('fgNoMatch'))}</p>`;
      return;
    }

    grid.innerHTML = list
      .map((e) => {
        const primary = t(e.nameEn, e.nameUr);
        const alt = state.lang === 'ur' ? e.nameEn : e.nameUr;
        return `
          <button type="button" class="fg-card cat-${e.category}" data-open-fg="${e.id}">
            <div>
              <div class="fg-photo-frame">
                <img src="${e.photo}" alt="${escapeHtml(t(e.nameEn, e.nameUr))}" class="fg-photo-img ${e.photoCrop || 'full'}" referrerpolicy="no-referrer" />
              </div>
              <div class="crop-card-body">
                <div class="fg-cat-line is-${e.category}">
                  <span>${escapeHtml(t(e.categoryEn, e.categoryUr))}</span>
                </div>
                <h3 class="crop-card-title">${escapeHtml(primary)}</h3>
                <p class="crop-card-alt" lang="${state.lang === 'ur' ? 'en' : 'ur'}" dir="${state.lang === 'ur' ? 'ltr' : 'rtl'}">${escapeHtml(alt)}</p>
                <p class="crop-card-sci"><span class="sci-name" lang="la" dir="ltr">${escapeHtml(e.scientificName)}</span></p>
                <p class="fg-snippet"><strong>${escapeHtml(tr('fgCluesLabel'))}:</strong> ${formatRichText(t(e.clues.en, e.clues.ur))}</p>
                <p class="fg-snippet"><strong>${escapeHtml(tr('fgBenefitOrCropLabel'))}:</strong> ${formatRichText(getFgSnippet(e))}</p>
                <p class="fg-snippet"><strong>${escapeHtml(tr('fgActionLabel'))}:</strong> ${formatRichText(t(e.action.en, e.action.ur))}</p>
              </div>
            </div>
            <div class="crop-card-foot">
              ${escapeHtml(tr('fgOpenCard'))} <span class="dir-flip">→</span>
            </div>
          </button>
        `;
      })
      .join('');

    grid.querySelectorAll('[data-open-fg]').forEach((btn) => {
      btn.addEventListener('click', () => {
        navigateToFieldGuide(btn.getAttribute('data-open-fg'));
      });
    });
  }

  body.querySelectorAll('[data-fgf]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.fgFilter = btn.getAttribute('data-fgf');
      renderFieldGuideGalleryTab(body);
    });
  });

  body.querySelectorAll('[data-fgb]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.fgBirdSubFilter = btn.getAttribute('data-fgb');
      renderFieldGuideGalleryTab(body);
    });
  });

  body.querySelectorAll('[data-fgp]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.fgPlantSubFilter = btn.getAttribute('data-fgp');
      renderFieldGuideGalleryTab(body);
    });
  });

  body.querySelector('#fg-filter-input').addEventListener('input', (e) => {
    state.fgSearch = e.target.value;
    paintGallery();
  });

  paintGallery();
}

function renderFieldGuideGuidedTab(body) {
  const group = GUIDED_ID_SCENARIOS.find((g) => g.id === state.fgGuidedGroup) || GUIDED_ID_SCENARIOS[0];
  const context = group.contexts.find((c) => c.id === state.fgGuidedContext) || group.contexts[0];
  const clue = context.clues.find((cl) => cl.id === state.fgGuidedClue) || context.clues[0];

  const matchedEntries = (clue.matches || [])
    .map((id) => FIELD_GUIDE_ENTRIES.find((e) => e.id === id))
    .filter(Boolean);

  body.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px">
      <h3 style="margin:0;color:var(--forest-dark)">${escapeHtml(tr('fgGuidedTitle'))}</h3>
      <button type="button" class="btn btn-outline" id="fg-guided-reset">${escapeHtml(tr('fgGuidedReset'))}</button>
    </div>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('fgGuidedIntro'))}</p>

    <div class="fg-guided-step-box">
      <strong style="display:block;color:var(--forest-dark)">${escapeHtml(tr('fgGuidedStep1'))}</strong>
      <div class="fg-guided-grid">
        ${GUIDED_ID_SCENARIOS.map(
          (g) => `
          <button type="button" class="fg-guided-choice ${g.id === group.id ? 'is-selected' : ''}" data-gg="${g.id}">
            ${escapeHtml(t(g.groupEn, g.groupUr))}
          </button>
        `
        ).join('')}
      </div>
    </div>

    <div class="fg-guided-step-box">
      <strong style="display:block;color:var(--forest-dark)">${escapeHtml(tr('fgGuidedStep2'))}</strong>
      <div class="fg-guided-grid">
        ${group.contexts
          .map(
            (c) => `
            <button type="button" class="fg-guided-choice ${c.id === context.id ? 'is-selected' : ''}" data-gc="${c.id}">
              ${formatRichText(t(c.labelEn, c.labelUr))}
            </button>
          `
          )
          .join('')}
      </div>
    </div>

    <div class="fg-guided-step-box">
      <strong style="display:block;color:var(--forest-dark)">${escapeHtml(tr('fgGuidedStep3'))}</strong>
      <div class="fg-guided-grid">
        ${context.clues
          .map(
            (cl) => `
            <button type="button" class="fg-guided-choice ${cl.id === clue.id ? 'is-selected' : ''}" data-gl="${cl.id}">
              ${formatRichText(t(cl.labelEn, cl.labelUr))}
            </button>
          `
          )
          .join('')}
      </div>
    </div>

    <div class="verify-box" style="margin-bottom:16px">
      <p class="callout-title">${escapeHtml(tr('fgGuidedResultTitle'))}</p>
      <p class="callout-text">${formatRichText(t(clue.cautionEn, clue.cautionUr))}</p>
    </div>

    <div class="fg-card-grid">
      ${matchedEntries
        .map(
          (e) => `
          <button type="button" class="fg-card cat-${e.category}" data-guided-open="${e.id}">
            <div>
              <div class="fg-photo-frame">
                <img src="${e.photo}" alt="${escapeHtml(t(e.nameEn, e.nameUr))}" class="fg-photo-img ${e.photoCrop || 'full'}" referrerpolicy="no-referrer" />
              </div>
              <div class="crop-card-body">
                <div class="fg-cat-line is-${e.category}">${escapeHtml(t(e.categoryEn, e.categoryUr))}</div>
                <h4 class="crop-card-title">${escapeHtml(t(e.nameEn, e.nameUr))}</h4>
                <p class="crop-card-sci"><span class="sci-name" lang="la" dir="ltr">${escapeHtml(e.scientificName)}</span></p>
                <p class="fg-snippet">${formatRichText(t(e.action.en, e.action.ur))}</p>
              </div>
            </div>
            <div class="crop-card-foot">
              ${escapeHtml(tr('fgOpenCard'))} <span class="dir-flip">→</span>
            </div>
          </button>
        `
        )
        .join('')}
    </div>
  `;

  body.querySelector('#fg-guided-reset').addEventListener('click', () => {
    state.fgGuidedGroup = GUIDED_ID_SCENARIOS[0].id;
    state.fgGuidedContext = GUIDED_ID_SCENARIOS[0].contexts[0].id;
    state.fgGuidedClue = GUIDED_ID_SCENARIOS[0].contexts[0].clues[0].id;
    renderFieldGuideGuidedTab(body);
  });

  body.querySelectorAll('[data-gg]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const gid = btn.getAttribute('data-gg');
      const g = GUIDED_ID_SCENARIOS.find((x) => x.id === gid) || GUIDED_ID_SCENARIOS[0];
      state.fgGuidedGroup = g.id;
      state.fgGuidedContext = g.contexts[0].id;
      state.fgGuidedClue = g.contexts[0].clues[0].id;
      renderFieldGuideGuidedTab(body);
    });
  });

  body.querySelectorAll('[data-gc]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cid = btn.getAttribute('data-gc');
      const c = group.contexts.find((x) => x.id === cid) || group.contexts[0];
      state.fgGuidedContext = c.id;
      state.fgGuidedClue = c.clues[0].id;
      renderFieldGuideGuidedTab(body);
    });
  });

  body.querySelectorAll('[data-gl]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.fgGuidedClue = btn.getAttribute('data-gl');
      renderFieldGuideGuidedTab(body);
    });
  });

  body.querySelectorAll('[data-guided-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigateToFieldGuide(btn.getAttribute('data-guided-open'));
    });
  });
}

function renderFieldGuideDetail(entryId) {
  const idx = FIELD_GUIDE_ENTRIES.findIndex((e) => e.id === entryId);
  const entry = FIELD_GUIDE_ENTRIES[idx] || FIELD_GUIDE_ENTRIES[0];
  const isUrdu = state.lang === 'ur';

  const primaryName = isUrdu ? entry.nameUr : entry.nameEn;
  const altName = isUrdu ? entry.nameEn : entry.nameUr;
  const lookAlikes = isUrdu ? entry.lookAlikes.ur : entry.lookAlikes.en;

  const prevEntry = idx > 0 ? FIELD_GUIDE_ENTRIES[idx - 1] : null;
  const nextEntry = idx < FIELD_GUIDE_ENTRIES.length - 1 ? FIELD_GUIDE_ENTRIES[idx + 1] : null;

  // Build library-specific fact cards so Libraries A, B, C, and D cover every requested detail
  let specificCards = '';
  if (entry.library === 'A') {
    specificCards = `
      <div class="detail-card"><h3>${escapeHtml(tr('fgAppearanceLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.appearance.en, entry.appearance.ur))}</p></div>
      <div class="detail-card"><h3>${escapeHtml(tr('fgEatsLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.eats.en, entry.eats.ur))}</p></div>
      <div class="detail-card"><h3>${escapeHtml(tr('fgBenefitsLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.farmBenefit.en, entry.farmBenefit.ur))}</p></div>
      <div class="detail-card"><h3>${escapeHtml(tr('fgHabitatLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.habitat.en, entry.habitat.ur))}</p></div>
    `;
  } else if (entry.library === 'B') {
    specificCards = `
      <div class="detail-card"><h3>${escapeHtml(tr('fgCropsAffectedLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.cropsAffected.en, entry.cropsAffected.ur))}</p></div>
      <div class="detail-card"><h3>${escapeHtml(tr('fgSymptomsLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.symptoms.en, entry.symptoms.ur))}</p></div>
      <div class="detail-card"><h3>${escapeHtml(tr('fgLifeCycleLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.lifeCycle.en, entry.lifeCycle.ur))}</p></div>
      <div class="detail-card"><h3>${escapeHtml(tr('fgMonitoringLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.monitoring.en, entry.monitoring.ur))}</p></div>
    `;
  } else if (entry.library === 'C') {
    specificCards = `
      <div class="detail-card"><h3>${escapeHtml(tr('fgAppearanceLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.appearance.en, entry.appearance.ur))}</p></div>
      <div class="detail-card"><h3>${escapeHtml(tr('fgBirdRoleLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.roleText.en, entry.roleText.ur))}</p></div>
      <div class="detail-card full-span"><h3>${escapeHtml(tr('fgBenefitsLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.farmBenefit.en, entry.farmBenefit.ur))}</p></div>
    `;
  } else {
    specificCards = `
      <div class="detail-card"><h3>${escapeHtml(tr('fgCluesLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.clues.en, entry.clues.ur))}</p></div>
      <div class="detail-card"><h3>${escapeHtml(tr('fgBenefitOrCropLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.roleText.en, entry.roleText.ur))}</p></div>
      <div class="detail-card full-span"><h3>${escapeHtml(tr('fgBenefitsLabel'))}</h3><p style="margin:0">${formatRichText(t(entry.farmBenefit.en, entry.farmBenefit.ur))}</p></div>
    `;
  }

  const container = document.getElementById('detail-container');
  container.innerHTML = `
    <div class="detail-topbar">
      <button type="button" class="btn btn-outline" id="btn-fg-back">
        <span class="dir-flip">←</span> ${escapeHtml(tr('fgBackToGuide'))}
      </button>
      <button type="button" class="btn btn-outline" id="btn-fg-home">${escapeHtml(tr('backToHome'))}</button>
    </div>

    <div class="detail-hero-box">
      <div class="detail-hero-grid has-image">
        <div class="detail-hero-body">
          <p class="detail-kicker">${escapeHtml(t(entry.categoryEn, entry.categoryUr))} · ${escapeHtml(t(entry.subRoleEn, entry.subRoleUr))}</p>
          <h1 class="detail-title">${escapeHtml(primaryName)}</h1>
          <p class="detail-alt-title" lang="${isUrdu ? 'en' : 'ur'}" dir="${isUrdu ? 'ltr' : 'rtl'}">${escapeHtml(altName)}</p>
          <p style="margin:0 0 10px;font-size:0.95rem;color:var(--text-secondary)">
            <strong>${escapeHtml(tr('cropF3Sci'))}:</strong> <span class="sci-name" lang="la" dir="ltr">${escapeHtml(entry.scientificName)}</span>
          </p>
          <p class="detail-summary">${formatRichText(t(entry.clues.en, entry.clues.ur))}</p>
          <p class="fg-credit-text"><strong>${escapeHtml(tr('fgSourceCreditLabel'))}:</strong> ${escapeHtml(t(entry.creditEn, entry.creditUr))}</p>
        </div>
        <div style="display:flex;align-items:center;justify-content:center;padding:18px;background:var(--bg-canvas)">
          <div class="fg-detail-photo-frame">
            <img src="${entry.photo}" alt="${escapeHtml(t(entry.nameEn, entry.nameUr))}" class="fg-photo-img ${entry.photoCrop || 'full'}" referrerpolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>

    <div class="fg-safety-banner">
      <p class="callout-title">${escapeHtml(tr('fgConfidenceTitle'))}</p>
      <p class="callout-text">${formatRichText(t(entry.confidenceNote.en, entry.confidenceNote.ur))}</p>
      <p class="callout-text" style="margin-top:8px;font-weight:600">${formatRichText(tr('fgSafetyText'))}</p>
    </div>

    <div class="crop-15-grid">
      ${specificCards}

      <div class="detail-card ${entry.category === 'harmful' || entry.category === 'weed' ? 'callout-warning' : ''}" style="${entry.category === 'harmful' || entry.category === 'weed' ? 'background:var(--warning-tint);border-color:#f3b7b7' : 'background:var(--leaf-tint);border-color:#b7deb9'}">
        <h3>${escapeHtml(tr('fgActionLabel'))}</h3>
        <p style="margin:0;font-weight:600">${formatRichText(t(entry.action.en, entry.action.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('fgLookAlikesLabel'))}</h3>
        <ul class="principles-list">
          ${lookAlikes.map((item) => `<li>${formatRichText(item)}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="detail-footer-nav">
      ${
        prevEntry
          ? `<button type="button" class="btn btn-outline" id="btn-prev-fg"><span class="dir-flip">←</span> ${escapeHtml(tr('fgPrevEntry'))}: ${escapeHtml(t(prevEntry.nameEn, prevEntry.nameUr))}</button>`
          : '<span></span>'
      }
      ${
        nextEntry
          ? `<button type="button" class="btn btn-primary" id="btn-next-fg">${escapeHtml(tr('fgNextEntry'))}: ${escapeHtml(t(nextEntry.nameEn, nextEntry.nameUr))} <span class="dir-flip">→</span></button>`
          : `<button type="button" class="btn btn-primary" id="btn-finish-fg">${escapeHtml(tr('fgBackToGuide'))}</button>`
      }
    </div>
  `;

  document.getElementById('btn-fg-back').addEventListener('click', () => navigateToHome('field-guide'));
  document.getElementById('btn-fg-home').addEventListener('click', () => navigateToHome());

  if (prevEntry) {
    document.getElementById('btn-prev-fg').addEventListener('click', () => navigateToFieldGuide(prevEntry.id));
  }
  if (nextEntry) {
    document.getElementById('btn-next-fg').addEventListener('click', () => navigateToFieldGuide(nextEntry.id));
  } else {
    document.getElementById('btn-finish-fg').addEventListener('click', () => navigateToHome('field-guide'));
  }
}

/* ==========================================================================
   INTERACTIVE HOME FARM LAB (10 TESTS + ANIMATED DEMO + 7 TOOLS A–G)
   ========================================================================== */

let labDemoInterval = null;

function stopLabDemoPlayer() {
  if (labDemoInterval) {
    clearInterval(labDemoInterval);
    labDemoInterval = null;
  }
  state.labDemoPlaying = false;
}

function renderHomeLabDemoSvg(test, stepIdx) {
  const s = Math.max(0, Math.min(2, stepIdx));
  const type = test.diagramType || 'spade';
  let art = '';

  if (type === 'texture') {
    const ballR = s === 0 ? 22 : s === 1 ? 26 : 16;
    const ribbon = s === 2 ? '<path d="M180 96 Q220 92 252 108 Q228 118 182 114 Z" fill="#6d4c41"/>' : '';
    const drops = s === 1 ? '<path d="M180 34 C186 44 186 52 180 56 C174 52 174 44 180 34Z" fill="#0288d1"/>' : '';
    art = `
      <circle cx="155" cy="96" r="${ballR}" fill="#8d6e63" stroke="#4e342e" stroke-width="2"/>
      ${drops}
      ${ribbon}
      <text x="180" y="156" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">${s === 0 ? 'Handful 0–15 cm' : s === 1 ? 'Add drops cleanly' : 'Sand = grit · Loam = 2–4 cm · Clay = 5+ cm'}</text>
    `;
  } else if (type === 'infiltration') {
    const waterH = s === 0 ? 0 : s === 1 ? 42 : 12;
    const soakArrows =
      s === 2
        ? '<path d="M160 120 v28 M180 120 v32 M200 120 v28" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>'
        : '';
    art = `
      <rect x="135" y="64" width="90" height="72" rx="4" fill="none" stroke="#1e293b" stroke-width="4"/>
      ${waterH > 0 ? `<rect x="138" y="${116 - waterH}" width="84" height="${waterH}" fill="#0288d1" opacity="0.8"/>` : ''}
      ${soakArrows}
      <circle cx="290" cy="64" r="24" fill="#ffffff" stroke="#1b4d3e" stroke-width="2.5"/>
      <path d="M290 64 V48 M290 64 L302 68" stroke="#1b4d3e" stroke-width="2.5" stroke-linecap="round"/>
      <text x="180" y="168" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">${s === 0 ? 'Press ring 4–5 cm' : s === 1 ? 'Pour ~2.5 cm water' : 'Time minutes until surface shines'}</text>
    `;
  } else if (type === 'moisture') {
    const palmColor = s === 0 ? '#a1887f' : s === 1 ? '#5d4037' : '#3e2723';
    const waterFilm = s >= 1 ? '<circle cx="180" cy="92" r="28" fill="#5d4037" stroke="#0288d1" stroke-width="2"/>' : '<circle cx="180" cy="92" r="26" fill="' + palmColor + '"/>';
    const drop = s === 2 ? '<path d="M180 124 L185 138 L175 138 Z" fill="#38bdf8"/>' : '';
    art = `
      ${waterFilm}
      ${drop}
      <text x="180" y="162" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">${s === 0 ? 'Dig 10–15 cm root zone' : s === 1 ? 'Squeeze firmly in palm' : 'Cool ball = wait · Dust = irrigate · Dripping = stop'}</text>
    `;
  } else if (type === 'spade' || type === 'earthworms') {
    const wormCount = s === 0 ? 1 : s === 1 ? 4 : 5;
    let worms = '';
    for (let i = 0; i < wormCount; i++) {
      const wx = 115 + i * 30;
      worms += `<path d="M${wx} 122 Q${wx + 8} 112 ${wx + 16} 124" fill="none" stroke="#f48fb1" stroke-width="3.5" stroke-linecap="round"/>`;
    }
    art = `
      <rect x="95" y="70" width="170" height="82" rx="6" fill="#4e342e" stroke="#2e7d32" stroke-width="2.5"/>
      <path d="M140 70 L132 34 M180 70 L180 28 M220 70 L228 34" stroke="#2e7d32" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M140 70 Q135 95 148 116 M180 70 Q176 105 186 128 M220 70 Q222 98 212 120" fill="none" stroke="#fef9db" stroke-width="2"/>
      ${worms}
      <text x="180" y="168" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">${type === 'earthworms' ? 'Count in cool moist 30 cm cube (5+ healthy)' : 'Check crumbs, root depth & sweet earthy smell'}</text>
    `;
  } else if (type === 'compost-mature' || type === 'compost-moisture') {
    art = `
      <path d="M55 135 L105 68 L225 68 L275 135 Z" fill="#4e342e"/>
      <line x1="165" y1="36" x2="165" y2="108" stroke="${s === 0 ? '#d97706' : '#facc15'}" stroke-width="4" stroke-linecap="round"/>
      <rect x="275" y="78" width="46" height="56" rx="6" fill="#e0f2fe" stroke="#0277bd" stroke-width="2.5"/>
      <rect x="279" y="100" width="38" height="30" rx="3" fill="#3e2723"/>
      <text x="180" y="162" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">${type === 'compost-mature' ? 'Dark, cool probe, earthy jar smell & sprouts' : 'Damp sponge feel: moist palm, no steady drip'}</text>
    `;
  } else if (type === 'soil-cover' || type === 'mulching') {
    const strawCover =
      s === 0
        ? '<rect x="185" y="106" width="145" height="8" fill="#eab308"/>'
        : '<rect x="185" y="96" width="145" height="18" rx="4" fill="#eab308"/><circle cx="255" cy="96" r="14" fill="none" stroke="#2e7d32" stroke-width="2" stroke-dasharray="3 2"/>';
    art = `
      <rect x="30" y="114" width="140" height="38" fill="#8d6e63"/>
      <rect x="185" y="114" width="145" height="38" fill="#4e342e"/>
      ${strawCover}
      <line x1="255" y1="114" x2="255" y2="62" stroke="#2e7d32" stroke-width="4" stroke-linecap="round"/>
      <text x="100" y="138" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">Bare (Hot & Crust)</text>
      <text x="257" y="138" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="bold">3–5 cm Straw (Cool)</text>
      <text x="180" y="168" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="bold">${type === 'mulching' ? 'Keep 5 cm open collar around plant stems' : 'Cover lowers heat & prevents rain splash crust'}</text>
    `;
  } else {
    // checklist
    art = `
      <rect x="75" y="34" width="210" height="114" rx="10" fill="#ffffff" stroke="#1b4d3e" stroke-width="2.5"/>
      <path d="M98 62 L106 70 L120 54" fill="none" stroke="#2e7d32" stroke-width="3" stroke-linecap="round"/>
      <line x1="132" y1="62" x2="258" y2="62" stroke="#617066" stroke-width="3"/>
      <path d="M98 92 L106 100 L120 84" fill="none" stroke="#2e7d32" stroke-width="3" stroke-linecap="round"/>
      <line x1="132" y1="92" x2="258" y2="92" stroke="#617066" stroke-width="3"/>
      <path d="M98 122 L106 130 L120 114" fill="none" stroke="${s >= 2 ? '#2e7d32' : '#d97706'}" stroke-width="3" stroke-linecap="round"/>
      <line x1="132" y1="122" x2="258" y2="122" stroke="#617066" stroke-width="3"/>
      <text x="180" y="168" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">Walk 5–10 interior spots · Record & verify with Lab</text>
    `;
  }

  const skyBg = s === 2 ? '#edf7ed' : '#eaf4fb';
  return `<svg viewBox="0 0 360 185" class="sim-canvas" style="margin-bottom:0" role="img" aria-label="${escapeHtml(test.titleEn)} demo">
    <rect x="0" y="0" width="360" height="114" fill="${skyBg}"/>
    <rect x="0" y="114" width="360" height="71" fill="#3e2723"/>
    <text x="14" y="22" fill="#1b4d3e" font-size="12" font-weight="bold">${escapeHtml(test.titleEn)} (${s + 1}/3)</text>
    ${art}
  </svg>`;
}

function renderHomeLabWorkbench(host) {
  if (!host) return;
  const activeTab = state.labTab || 'tests';

  host.innerHTML = `
    <div class="verify-box" style="margin-top:0;margin-bottom:18px">
      <p class="callout-title">${escapeHtml(tr('labDisclaimerTitle'))}</p>
      <p class="callout-text">${formatRichText(tr('labDisclaimerText'))}</p>
    </div>

    <div class="crop-lib-tabs" role="tablist">
      <button type="button" role="tab" aria-selected="${activeTab === 'tests'}" class="crop-lib-tab ${activeTab === 'tests' ? 'is-active' : ''}" data-lab-tab="tests">${escapeHtml(tr('labTabTests'))}</button>
      <button type="button" role="tab" aria-selected="${activeTab === 'tools'}" class="crop-lib-tab ${activeTab === 'tools' ? 'is-active' : ''}" data-lab-tab="tools">${escapeHtml(tr('labTabTools'))}</button>
    </div>
    <div id="home-lab-body"></div>
  `;

  host.querySelectorAll('[data-lab-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.labTab = btn.getAttribute('data-lab-tab');
      renderHomeLabWorkbench(host);
    });
  });

  const body = host.querySelector('#home-lab-body');
  if (activeTab === 'tests') {
    renderHomeLabTestsGrid(body);
  } else {
    renderHomeLabToolsTab(body);
  }
}

function renderHomeLabTestsGrid(body) {
  const f = state.labFilter || 'all';
  const filtered = HOME_FARM_LAB_TESTS.filter((item) => f === 'all' || item.category === f);

  body.innerHTML = `
    <div class="control-row">
      <button type="button" class="tab-btn ${f === 'all' ? 'is-active' : ''}" data-lf="all">${escapeHtml(tr('labFilterAll'))}</button>
      <button type="button" class="tab-btn ${f === 'soil' ? 'is-active' : ''}" data-lf="soil">${escapeHtml(tr('labFilterSoil'))}</button>
      <button type="button" class="tab-btn ${f === 'compost' ? 'is-active' : ''}" data-lf="compost">${escapeHtml(tr('labFilterCompost'))}</button>
      <button type="button" class="tab-btn ${f === 'cover' ? 'is-active' : ''}" data-lf="cover">${escapeHtml(tr('labFilterCover'))}</button>
      <button type="button" class="tab-btn ${f === 'biology' || f === 'checklist' ? 'is-active' : ''}" data-lf="bio">${escapeHtml(tr('labFilterBio'))}</button>
    </div>
    <div class="crop-card-grid" id="lab-test-cards">
      ${(f === 'bio'
        ? HOME_FARM_LAB_TESTS.filter((item) => item.category === 'biology' || item.category === 'checklist')
        : filtered
      )
        .map((item) => {
          const primary = state.lang === 'ur' ? item.titleUr : item.titleEn;
          const alt = state.lang === 'ur' ? item.titleEn : item.titleUr;
          const sub = state.lang === 'ur' ? item.subtitleUr : item.subtitleEn;
          return `
            <button type="button" class="crop-card" data-open-lab="${item.id}">
              <div>
                <div class="crop-thumb-wrap">
                  <img src="${item.photo}" alt="${escapeHtml(t(item.titleEn, item.titleUr))}" class="crop-thumb-img" referrerpolicy="no-referrer" />
                </div>
                <div class="crop-card-body">
                  <div class="crop-meta-line">
                    <span class="tabular-nums">${item.num} / 10</span>
                    <span aria-hidden="true">·</span>
                    <span>${escapeHtml(tr('labTestWord'))}</span>
                  </div>
                  <h3 class="crop-card-title">${escapeHtml(primary)}</h3>
                  <p class="crop-card-alt" lang="${state.lang === 'ur' ? 'en' : 'ur'}" dir="${state.lang === 'ur' ? 'ltr' : 'rtl'}">${escapeHtml(alt)}</p>
                  <p class="crop-card-desc">${formatRichText(sub)}</p>
                </div>
              </div>
              <div class="crop-card-foot">
                ${escapeHtml(tr('labOpenTest'))} <span class="dir-flip">→</span>
              </div>
            </button>
          `;
        })
        .join('')}
    </div>
  `;

  body.querySelectorAll('[data-lf]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.labFilter = btn.getAttribute('data-lf');
      renderHomeLabTestsGrid(body);
    });
  });

  body.querySelectorAll('[data-open-lab]').forEach((btn) => {
    btn.addEventListener('click', () => navigateToLabTest(btn.getAttribute('data-open-lab')));
  });
}

function renderHomeLabToolsTab(body) {
  const activeTool = state.labToolTab || 'A';
  const toolTabs = [
    ['A', tr('labToolATab')],
    ['B', tr('labToolBTab')],
    ['C', tr('labToolCTab')],
    ['D', tr('labToolDTab')],
    ['E', tr('labToolETab')],
    ['F', tr('labToolFTab')],
    ['G', tr('labToolGTab')]
  ];

  body.innerHTML = `
    <div class="lab-subtool-row" role="tablist">
      ${toolTabs
        .map(
          ([k, label]) =>
            `<button type="button" role="tab" aria-selected="${activeTool === k}" class="tab-btn ${activeTool === k ? 'is-active' : ''}" data-lab-tool="${k}">${escapeHtml(label)}</button>`
        )
        .join('')}
    </div>
    <div class="lab-tool-panel" id="lab-tool-host"></div>
  `;

  body.querySelectorAll('[data-lab-tool]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.labToolTab = btn.getAttribute('data-lab-tool');
      renderHomeLabToolsTab(body);
    });
  });

  const host = body.querySelector('#lab-tool-host');
  if (activeTool === 'A') mountLabToolA(host);
  else if (activeTool === 'B') mountLabToolB(host);
  else if (activeTool === 'C') mountLabToolC(host);
  else if (activeTool === 'D') mountLabToolD(host);
  else if (activeTool === 'E') mountLabToolE(host);
  else if (activeTool === 'F') mountLabToolF(host);
  else mountLabToolG(host);
}

/* Tool A: Soil Observation Record */
function mountLabToolA(host) {
  const today = new Date().toISOString().slice(0, 10);
  const records = state.labSoilRecords;

  host.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('toolATitle'))}</h3>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('toolASub'))}</p>
    <form id="lab-a-form">
      <div class="form-grid">
        <div>
          <label for="la-date" class="field-label">${escapeHtml(tr('toolADate'))}</label>
          <input type="date" id="la-date" class="field-input" value="${today}" required />
        </div>
        <div>
          <label for="la-plot" class="field-label">${escapeHtml(tr('toolAPlot'))}</label>
          <input type="text" id="la-plot" class="field-input" placeholder="${escapeHtml(tr('toolAPlotPh'))}" required />
        </div>
        <div>
          <label for="la-texture" class="field-label">${escapeHtml(tr('toolATexture'))}</label>
          <select id="la-texture" class="field-input">
            <option value="loam">${escapeHtml(tr('toolATexLoam'))}</option>
            <option value="sandy">${escapeHtml(tr('toolATexSandy'))}</option>
            <option value="clay">${escapeHtml(tr('toolATexClay'))}</option>
            <option value="uncertain">${escapeHtml(tr('toolATexUncertain'))}</option>
          </select>
        </div>
        <div>
          <label for="la-infil" class="field-label">${escapeHtml(tr('toolAInfil'))}</label>
          <input type="number" id="la-infil" class="field-input" min="0" step="1" value="8" />
        </div>
        <div>
          <label for="la-moisture" class="field-label">${escapeHtml(tr('toolAMoisture'))}</label>
          <select id="la-moisture" class="field-input">
            <option value="good">${escapeHtml(tr('toolAMoistGood'))}</option>
            <option value="dry">${escapeHtml(tr('toolAMoistDry'))}</option>
            <option value="wet">${escapeHtml(tr('toolAMoistWet'))}</option>
          </select>
        </div>
        <div>
          <label for="la-worms" class="field-label">${escapeHtml(tr('toolAWorms'))}</label>
          <input type="number" id="la-worms" class="field-input" min="0" step="1" value="5" />
        </div>
        <div>
          <label for="la-smell" class="field-label">${escapeHtml(tr('toolASmell'))}</label>
          <select id="la-smell" class="field-input">
            <option value="earth">${escapeHtml(tr('toolASmellEarth'))}</option>
            <option value="sour">${escapeHtml(tr('toolASmellSour'))}</option>
          </select>
        </div>
        <div>
          <label for="la-cover" class="field-label">${escapeHtml(tr('toolACover'))}</label>
          <input type="number" id="la-cover" class="field-input" min="0" max="100" step="5" value="70" />
        </div>
      </div>
      <div style="margin-bottom:12px">
        <label class="lab-check-inline">
          <input type="checkbox" id="la-lab" />
          <span>${formatRichText(tr('toolALabSent'))}</span>
        </label>
      </div>
      <div style="margin-bottom:14px">
        <label for="la-notes" class="field-label">${escapeHtml(tr('toolANotes'))}</label>
        <input type="text" id="la-notes" class="field-input" />
      </div>
      <button type="submit" class="btn btn-primary">${escapeHtml(tr('toolASave'))}</button>
    </form>
    <div id="la-table-host">
      ${
        records.length === 0
          ? `<p style="margin:16px 0 0;color:var(--text-muted)">${escapeHtml(tr('toolAEmpty'))}</p>`
          : `<div class="lab-table-wrap">
              <table class="lab-table">
                <thead>
                  <tr>
                    <th>${escapeHtml(tr('toolADate'))}</th>
                    <th>${escapeHtml(tr('toolAPlot'))}</th>
                    <th>${escapeHtml(tr('toolATexture'))}</th>
                    <th>${escapeHtml(tr('toolAInfil'))}</th>
                    <th>${escapeHtml(tr('toolAMoisture'))}</th>
                    <th>${escapeHtml(tr('toolAWorms'))}</th>
                    <th>${escapeHtml(tr('toolACover'))}</th>
                    <th>${escapeHtml(tr('toolANotes'))}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  ${records
                    .map((r) => {
                      const texMap = { sandy: tr('toolATexSandy'), loam: tr('toolATexLoam'), clay: tr('toolATexClay'), uncertain: tr('toolATexUncertain') };
                      const moistMap = { dry: tr('toolAMoistDry'), good: tr('toolAMoistGood'), wet: tr('toolAMoistWet') };
                      const smellText = r.smell === 'sour' ? tr('toolASmellSour') : tr('toolASmellEarth');
                      return `
                        <tr>
                          <td class="tabular-nums">${escapeHtml(r.date)}</td>
                          <td><strong>${escapeHtml(r.plot)}</strong><br><span style="font-size:0.82rem;color:var(--text-muted)">${escapeHtml(r.labSent ? tr('toolALabYes') : tr('toolALabNo'))}</span></td>
                          <td>${escapeHtml(texMap[r.texture] || r.texture)}<br><span style="font-size:0.82rem;color:var(--text-muted)">${escapeHtml(smellText)}</span></td>
                          <td class="tabular-nums">${escapeHtml(r.infil)} min</td>
                          <td>${escapeHtml(moistMap[r.moisture] || r.moisture)}</td>
                          <td class="tabular-nums">${escapeHtml(r.worms)}</td>
                          <td class="tabular-nums">${escapeHtml(r.cover)}%</td>
                          <td>${escapeHtml(r.notes || '—')}</td>
                          <td><button type="button" class="lab-del-btn" data-del-la="${escapeHtml(r.id)}">${escapeHtml(tr('toolADelete'))}</button></td>
                        </tr>
                      `;
                    })
                    .join('')}
                </tbody>
              </table>
            </div>`
      }
    </div>
  `;

  host.querySelector('#lab-a-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const rec = {
      id: `sr-${Date.now()}`,
      date: host.querySelector('#la-date').value || today,
      plot: host.querySelector('#la-plot').value.trim(),
      texture: host.querySelector('#la-texture').value,
      infil: Number(host.querySelector('#la-infil').value) || 0,
      moisture: host.querySelector('#la-moisture').value,
      worms: Number(host.querySelector('#la-worms').value) || 0,
      smell: host.querySelector('#la-smell').value,
      cover: Number(host.querySelector('#la-cover').value) || 0,
      labSent: host.querySelector('#la-lab').checked,
      notes: host.querySelector('#la-notes').value.trim()
    };
    state.labSoilRecords = [rec, ...state.labSoilRecords];
    saveJsonStorage(STORAGE_KEYS.labSoilRecords, state.labSoilRecords);
    mountLabToolA(host);
  });

  host.querySelectorAll('[data-del-la]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-del-la');
      state.labSoilRecords = state.labSoilRecords.filter((r) => r.id !== id);
      saveJsonStorage(STORAGE_KEYS.labSoilRecords, state.labSoilRecords);
      mountLabToolA(host);
    });
  });
}

/* Tool B: Compost Calculator Using Dimensions & Quantities */
function mountLabToolB(host) {
  const c = state.labCompostInput;
  host.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('toolBTitle'))}</h3>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('toolBSub'))}</p>
    <div class="form-grid">
      <div>
        <label for="lb-len" class="field-label">${escapeHtml(tr('toolBLength'))}</label>
        <input type="number" id="lb-len" class="field-input" min="1" step="0.5" value="${c.lengthFt}" />
      </div>
      <div>
        <label for="lb-wid" class="field-label">${escapeHtml(tr('toolBWidth'))}</label>
        <input type="number" id="lb-wid" class="field-input" min="1" step="0.5" value="${c.widthFt}" />
      </div>
      <div>
        <label for="lb-hei" class="field-label">${escapeHtml(tr('toolBHeight'))}</label>
        <input type="number" id="lb-hei" class="field-input" min="1" step="0.5" value="${c.heightFt}" />
      </div>
      <div>
        <label for="lb-dry" class="field-label">${escapeHtml(tr('toolBDryKg'))}</label>
        <input type="number" id="lb-dry" class="field-input" min="0" step="10" value="${c.dryKg}" />
      </div>
      <div>
        <label for="lb-green" class="field-label">${escapeHtml(tr('toolBGreenKg'))}</label>
        <input type="number" id="lb-green" class="field-input" min="0" step="10" value="${c.greenKg}" />
      </div>
      <div>
        <label for="lb-kan" class="field-label">${escapeHtml(tr('toolBKanals'))}</label>
        <input type="number" id="lb-kan" class="field-input" min="0.5" step="0.5" value="${c.kanals}" />
      </div>
    </div>
    <div class="metric-strip" id="lb-metrics"></div>
    <div class="callout-box callout-tip" style="margin-top:14px" id="lb-status"></div>
  `;

  function calc() {
    c.lengthFt = Math.max(0.5, Number(host.querySelector('#lb-len').value) || 0.5);
    c.widthFt = Math.max(0.5, Number(host.querySelector('#lb-wid').value) || 0.5);
    c.heightFt = Math.max(0.5, Number(host.querySelector('#lb-hei').value) || 0.5);
    c.dryKg = Math.max(0, Number(host.querySelector('#lb-dry').value) || 0);
    c.greenKg = Math.max(0, Number(host.querySelector('#lb-green').value) || 0);
    c.kanals = Math.max(0.5, Number(host.querySelector('#lb-kan').value) || 0.5);

    const volFt = c.lengthFt * c.widthFt * c.heightFt;
    const volM = volFt * 0.0283168;
    // Mature compost shrinks roughly to ~50% of fresh mixed mass
    const totalMassKg = c.dryKg + c.greenKg;
    const finishedKg = totalMassKg > 0 ? Math.round(totalMassKg * 0.55) : Math.round(volM * 450);
    const trolleys = (finishedKg / 400).toFixed(2);
    const ratio = c.greenKg > 0 ? c.dryKg / c.greenKg : 0;

    let ratioStatus = tr('toolBRatioGood');
    let boxCls = 'callout-tip';
    if (c.greenKg === 0 || ratio > 2.8) {
      ratioStatus = tr('toolBRatioDry');
      boxCls = 'callout-warning';
    } else if (ratio < 1.3) {
      ratioStatus = tr('toolBRatioWet');
      boxCls = 'callout-warning';
    }

    const reqLow = (c.kanals * 0.5).toFixed(1);
    const reqHigh = (c.kanals * 1.0).toFixed(1);

    host.querySelector('#lb-metrics').innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolBVolFt'))}</span><span class="metric-value tabular-nums">${volFt.toFixed(1)} cu ft</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolBVolM'))}</span><span class="metric-value tabular-nums">${volM.toFixed(2)} m³</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolBEstYield'))}</span><span class="metric-value"><span class="tabular-nums">${finishedKg.toLocaleString()} kg</span> (${trolleys} ${escapeHtml(tr('toolBTrolleys'))})</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolBCoverage'))}</span><span class="metric-value tabular-nums">${reqLow}–${reqHigh} trolleys</span></div>
    `;

    const statusEl = host.querySelector('#lb-status');
    statusEl.className = `callout-box ${boxCls}`;
    statusEl.innerHTML = `
      <p class="callout-title">${escapeHtml(tr('toolBRatioLabel'))}: <span class="tabular-nums">${ratio.toFixed(1)} : 1</span> — ${escapeHtml(ratioStatus)}</p>
      <p class="callout-text">${formatRichText(tr('toolBReadyNote'))}</p>
    `;
  }

  host.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', calc));
  calc();
}

/* Tool C: Acre / Kanal / Marla Converter */
function mountLabToolC(host) {
  const a = state.labAreaInput;
  host.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('toolCTitle'))}</h3>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('toolCSub'))}</p>
    <div class="form-grid">
      <div>
        <label for="lc-val" class="field-label">${escapeHtml(tr('toolCVal'))}</label>
        <input type="number" id="lc-val" class="field-input" min="0" step="0.25" value="${a.val}" />
      </div>
      <div>
        <label for="lc-unit" class="field-label">${escapeHtml(tr('toolCUnit'))}</label>
        <select id="lc-unit" class="field-input">
          <option value="acre" ${a.unit === 'acre' ? 'selected' : ''}>${escapeHtml(tr('toolCAcre'))}</option>
          <option value="kanal" ${a.unit === 'kanal' ? 'selected' : ''}>${escapeHtml(tr('toolCKanal'))}</option>
          <option value="marla" ${a.unit === 'marla' ? 'selected' : ''}>${escapeHtml(tr('toolCMarla'))}</option>
          <option value="sqft" ${a.unit === 'sqft' ? 'selected' : ''}>${escapeHtml(tr('toolCSqFt'))}</option>
          <option value="ha" ${a.unit === 'ha' ? 'selected' : ''}>${escapeHtml(tr('toolCHectare'))}</option>
        </select>
      </div>
    </div>
    <div class="metric-strip" id="lc-metrics"></div>
  `;

  function update() {
    a.val = Math.max(0, Number(host.querySelector('#lc-val').value) || 0);
    a.unit = host.querySelector('#lc-unit').value;
    let acres = a.val;
    if (a.unit === 'kanal') acres = a.val / 8;
    else if (a.unit === 'marla') acres = a.val / 160;
    else if (a.unit === 'sqft') acres = a.val / 43560;
    else if (a.unit === 'ha') acres = a.val * 2.47105;

    const kanals = acres * 8;
    const marlas = acres * 160;
    const sqft = acres * 43560;
    const ha = acres / 2.47105;

    host.querySelector('#lc-metrics').innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolCAcre'))}</span><span class="metric-value tabular-nums">${acres.toFixed(3)}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolCKanal'))}</span><span class="metric-value tabular-nums">${kanals.toFixed(2)}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolCMarla'))}</span><span class="metric-value tabular-nums">${marlas.toFixed(1)}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolCSqFt'))}</span><span class="metric-value tabular-nums">${Math.round(sqft).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolCHectare'))}</span><span class="metric-value tabular-nums">${ha.toFixed(3)}</span></div>
    `;
  }

  host.querySelector('#lc-val').addEventListener('input', update);
  host.querySelector('#lc-unit').addEventListener('change', update);
  update();
}

/* Tool D: Maund / Kilogram Converter */
function mountLabToolD(host) {
  const w = state.labWeightInput;
  host.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('toolDTitle'))}</h3>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('toolDSub'))}</p>
    <div class="form-grid">
      <div>
        <label for="ld-val" class="field-label">${escapeHtml(tr('toolDVal'))}</label>
        <input type="number" id="ld-val" class="field-input" min="0" step="0.5" value="${w.val}" />
      </div>
      <div>
        <label for="ld-unit" class="field-label">${escapeHtml(tr('toolDUnit'))}</label>
        <select id="ld-unit" class="field-input">
          <option value="maund" ${w.unit === 'maund' ? 'selected' : ''}>${escapeHtml(tr('toolDMaund'))}</option>
          <option value="kg" ${w.unit === 'kg' ? 'selected' : ''}>${escapeHtml(tr('toolDKg'))}</option>
          <option value="tonne" ${w.unit === 'tonne' ? 'selected' : ''}>${escapeHtml(tr('toolDTonne'))}</option>
          <option value="gram" ${w.unit === 'gram' ? 'selected' : ''}>${escapeHtml(tr('toolDGram'))}</option>
        </select>
      </div>
    </div>
    <div class="metric-strip" id="ld-metrics"></div>

    <hr style="margin:22px 0;border:0;border-top:1px solid var(--border-hairline)" />

    <h4>${escapeHtml(tr('toolDYieldCheckTitle'))}</h4>
    <div class="form-grid">
      <div>
        <label for="ld-ymaund" class="field-label">${escapeHtml(tr('toolDYieldTotalMaund'))}</label>
        <input type="number" id="ld-ymaund" class="field-input" min="0" step="1" value="${w.harvestMaund}" />
      </div>
      <div>
        <label for="ld-ykanals" class="field-label">${escapeHtml(tr('toolDYieldKanals'))}</label>
        <input type="number" id="ld-ykanals" class="field-input" min="0.5" step="0.5" value="${w.harvestKanals}" />
      </div>
    </div>
    <div class="metric-strip" id="ld-yield-metrics"></div>
  `;

  function update() {
    w.val = Math.max(0, Number(host.querySelector('#ld-val').value) || 0);
    w.unit = host.querySelector('#ld-unit').value;
    let kg = w.val;
    if (w.unit === 'maund') kg = w.val * 40;
    else if (w.unit === 'tonne') kg = w.val * 1000;
    else if (w.unit === 'gram') kg = w.val / 1000;

    const maunds = kg / 40;
    const tonnes = kg / 1000;
    const grams = kg * 1000;

    host.querySelector('#ld-metrics').innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolDMaund'))}</span><span class="metric-value tabular-nums">${maunds.toFixed(2)}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolDKg'))}</span><span class="metric-value tabular-nums">${kg.toLocaleString(undefined, { maximumFractionDigits: 2 })} kg</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolDTonne'))}</span><span class="metric-value tabular-nums">${tonnes.toFixed(3)} t</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolDGram'))}</span><span class="metric-value tabular-nums">${Math.round(grams).toLocaleString()} g</span></div>
    `;

    w.harvestMaund = Math.max(0, Number(host.querySelector('#ld-ymaund').value) || 0);
    w.harvestKanals = Math.max(0.5, Number(host.querySelector('#ld-ykanals').value) || 0.5);
    const acres = w.harvestKanals / 8;
    const perAcreMaund = w.harvestMaund / acres;
    const perAcreKg = perAcreMaund * 40;
    const perKanalMaund = w.harvestMaund / w.harvestKanals;

    host.querySelector('#ld-yield-metrics').innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolDYieldPerAcre'))}</span><span class="metric-value tabular-nums">${perAcreMaund.toFixed(1)} maunds (${Math.round(perAcreKg).toLocaleString()} kg)</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolDYieldPerKanal'))}</span><span class="metric-value tabular-nums">${perKanalMaund.toFixed(2)} maunds (${Math.round(perKanalMaund * 40)} kg)</span></div>
    `;
  }

  host.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', update));
  host.querySelector('#ld-unit').addEventListener('change', update);
  update();
}

/* Tool E: Farm Input Cost Calculator */
function getToolETotalCost() {
  return state.labCosts.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
}

function mountLabToolE(host) {
  const total = getToolETotalCost();
  const kanals = Math.max(0.5, Number(state.labCostKanals) || 8);
  const perKanal = total / kanals;
  const perAcre = perKanal * 8;

  host.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('toolETitle'))}</h3>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('toolESub'))}</p>
    <div class="form-grid" style="align-items:end">
      <div>
        <label for="le-kanals" class="field-label">${escapeHtml(tr('toolEPlotKanals'))}</label>
        <input type="number" id="le-kanals" class="field-input" min="0.5" step="0.5" value="${kanals}" />
      </div>
      <div>
        <button type="button" class="btn btn-outline" id="le-sample">${escapeHtml(tr('toolEResetDefaults'))}</button>
      </div>
    </div>

    <form id="le-form" class="form-grid" style="align-items:end">
      <div>
        <label for="le-name" class="field-label">${escapeHtml(tr('toolEItemName'))}</label>
        <input type="text" id="le-name" class="field-input" placeholder="${escapeHtml(tr('toolEItemPh'))}" required />
      </div>
      <div>
        <label for="le-cost" class="field-label">${escapeHtml(tr('toolECostPkr'))}</label>
        <input type="number" id="le-cost" class="field-input" min="0" step="100" required />
      </div>
      <div>
        <button type="submit" class="btn btn-primary">${escapeHtml(tr('toolEAddItem'))}</button>
      </div>
    </form>

    <div class="metric-strip">
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolETotalCost'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(total).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolECostPerKanal'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(perKanal).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolECostPerAcre'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(perAcre).toLocaleString()}</span></div>
    </div>

    ${
      state.labCosts.length === 0
        ? `<p style="margin:14px 0 0;color:var(--text-muted)">${escapeHtml(tr('toolEEmpty'))}</p>`
        : `<div class="lab-table-wrap">
            <table class="lab-table">
              <thead>
                <tr>
                  <th>${escapeHtml(tr('toolEItemName'))}</th>
                  <th>${escapeHtml(tr('toolECostPkr'))}</th>
                  <th>%</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${state.labCosts
                  .map((c) => {
                    const pct = total > 0 ? Math.round(((Number(c.cost) || 0) / total) * 100) : 0;
                    return `
                      <tr>
                        <td><strong>${escapeHtml(c.name)}</strong></td>
                        <td class="tabular-nums">PKR ${(Number(c.cost) || 0).toLocaleString()}</td>
                        <td class="tabular-nums">${pct}%</td>
                        <td><button type="button" class="lab-del-btn" data-del-le="${escapeHtml(c.id)}">${escapeHtml(tr('toolADelete'))}</button></td>
                      </tr>
                    `;
                  })
                  .join('')}
              </tbody>
            </table>
          </div>`
    }
  `;

  host.querySelector('#le-kanals').addEventListener('input', (e) => {
    state.labCostKanals = Math.max(0.5, Number(e.target.value) || 0.5);
    mountLabToolE(host);
  });

  host.querySelector('#le-sample').addEventListener('click', () => {
    state.labCosts = defaultLabCosts();
    saveJsonStorage(STORAGE_KEYS.labCosts, state.labCosts);
    mountLabToolE(host);
  });

  host.querySelector('#le-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = host.querySelector('#le-name').value.trim();
    const cost = Math.max(0, Number(host.querySelector('#le-cost').value) || 0);
    if (!name) return;
    state.labCosts = [...state.labCosts, { id: `lc-${Date.now()}`, name, cost }];
    saveJsonStorage(STORAGE_KEYS.labCosts, state.labCosts);
    mountLabToolE(host);
  });

  host.querySelectorAll('[data-del-le]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-del-le');
      state.labCosts = state.labCosts.filter((c) => c.id !== id);
      saveJsonStorage(STORAGE_KEYS.labCosts, state.labCosts);
      mountLabToolE(host);
    });
  });
}

/* Tool F: Irrigation Log */
function mountLabToolF(host) {
  const today = new Date().toISOString().slice(0, 10);
  const logs = state.labIrrigations;
  const totalHrs = logs.reduce((s, r) => s + (Number(r.hours) || 0), 0);
  const totalCost = logs.reduce((s, r) => s + (Number(r.cost) || 0), 0);

  host.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('toolFTitle'))}</h3>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('toolFSub'))}</p>
    <form id="lf-form">
      <div class="form-grid">
        <div>
          <label for="lf-date" class="field-label">${escapeHtml(tr('toolFDate'))}</label>
          <input type="date" id="lf-date" class="field-input" value="${today}" required />
        </div>
        <div>
          <label for="lf-plot" class="field-label">${escapeHtml(tr('toolFPlot'))}</label>
          <input type="text" id="lf-plot" class="field-input" placeholder="${escapeHtml(tr('toolFPlotPh'))}" required />
        </div>
        <div>
          <label for="lf-src" class="field-label">${escapeHtml(tr('toolFSource'))}</label>
          <select id="lf-src" class="field-input">
            <option value="tube">${escapeHtml(tr('toolFSrcTube'))}</option>
            <option value="canal">${escapeHtml(tr('toolFSrcCanal'))}</option>
            <option value="awd">${escapeHtml(tr('toolFSrcAwd'))}</option>
            <option value="rain">${escapeHtml(tr('toolFSrcRain'))}</option>
          </select>
        </div>
        <div>
          <label for="lf-hrs" class="field-label">${escapeHtml(tr('toolFHours'))}</label>
          <input type="number" id="lf-hrs" class="field-input" min="0" step="0.5" value="4" />
        </div>
        <div>
          <label for="lf-depth" class="field-label">${escapeHtml(tr('toolFAwdDepth'))}</label>
          <input type="number" id="lf-depth" class="field-input" min="0" step="1" value="15" />
        </div>
        <div>
          <label for="lf-cost" class="field-label">${escapeHtml(tr('toolFCost'))}</label>
          <input type="number" id="lf-cost" class="field-input" min="0" step="100" value="4800" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">${escapeHtml(tr('toolFAdd'))}</button>
    </form>

    <div class="metric-strip" style="margin-top:14px">
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolFCount'))}</span><span class="metric-value tabular-nums">${logs.length}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolFTotalHrs'))}</span><span class="metric-value tabular-nums">${totalHrs.toFixed(1)} hrs</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolFTotalCost'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(totalCost).toLocaleString()}</span></div>
    </div>

    ${
      logs.length === 0
        ? `<p style="margin:14px 0 0;color:var(--text-muted)">${escapeHtml(tr('toolFEmpty'))}</p>`
        : `<div class="lab-table-wrap">
            <table class="lab-table">
              <thead>
                <tr>
                  <th>${escapeHtml(tr('toolFDate'))}</th>
                  <th>${escapeHtml(tr('toolFPlot'))}</th>
                  <th>${escapeHtml(tr('toolFSource'))}</th>
                  <th>${escapeHtml(tr('toolFHours'))}</th>
                  <th>${escapeHtml(tr('toolFAwdDepth'))}</th>
                  <th>${escapeHtml(tr('toolFCost'))}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${logs
                  .map((r) => {
                    const srcMap = { tube: tr('toolFSrcTube'), canal: tr('toolFSrcCanal'), awd: tr('toolFSrcAwd'), rain: tr('toolFSrcRain') };
                    return `
                      <tr>
                        <td class="tabular-nums">${escapeHtml(r.date)}</td>
                        <td><strong>${escapeHtml(r.plot)}</strong></td>
                        <td>${escapeHtml(srcMap[r.source] || r.source)}</td>
                        <td class="tabular-nums">${escapeHtml(r.hours)} hrs</td>
                        <td class="tabular-nums">${escapeHtml(r.awdDepth)} cm</td>
                        <td class="tabular-nums">PKR ${(Number(r.cost) || 0).toLocaleString()}</td>
                        <td><button type="button" class="lab-del-btn" data-del-lf="${escapeHtml(r.id)}">${escapeHtml(tr('toolADelete'))}</button></td>
                      </tr>
                    `;
                  })
                  .join('')}
              </tbody>
            </table>
          </div>`
    }
  `;

  host.querySelector('#lf-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const entry = {
      id: `ir-${Date.now()}`,
      date: host.querySelector('#lf-date').value || today,
      plot: host.querySelector('#lf-plot').value.trim(),
      source: host.querySelector('#lf-src').value,
      hours: Number(host.querySelector('#lf-hrs').value) || 0,
      awdDepth: Number(host.querySelector('#lf-depth').value) || 0,
      cost: Number(host.querySelector('#lf-cost').value) || 0
    };
    state.labIrrigations = [entry, ...state.labIrrigations];
    saveJsonStorage(STORAGE_KEYS.labIrrigations, state.labIrrigations);
    mountLabToolF(host);
  });

  host.querySelectorAll('[data-del-lf]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-del-lf');
      state.labIrrigations = state.labIrrigations.filter((r) => r.id !== id);
      saveJsonStorage(STORAGE_KEYS.labIrrigations, state.labIrrigations);
      mountLabToolF(host);
    });
  });
}

/* Tool G: Crop Expense & Income Comparison */
function mountLabToolG(host) {
  const g = state.labIncomeCompare;

  host.innerHTML = `
    <h3 style="margin-top:0">${escapeHtml(tr('toolGTitle'))}</h3>
    <p style="margin:0 0 14px;color:var(--text-secondary)">${formatRichText(tr('toolGSub'))}</p>
    <div class="lab-compare-split">
      <div class="lab-compare-col is-plot-a">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px">
          <strong style="color:var(--leaf-dark)">${escapeHtml(tr('toolGLabelA'))}</strong>
          <button type="button" class="tab-btn" id="lg-pull-e">${escapeHtml(tr('toolGPullFromE'))}</button>
        </div>
        <div class="form-grid">
          <div>
            <label for="lg-a-k" class="field-label">${escapeHtml(tr('toolGKanals'))}</label>
            <input type="number" id="lg-a-k" class="field-input" min="0.5" step="0.5" value="${g.aKanals}" />
          </div>
          <div>
            <label for="lg-a-exp" class="field-label">${escapeHtml(tr('toolGExpense'))}</label>
            <input type="number" id="lg-a-exp" class="field-input" min="0" step="500" value="${g.aExpense}" />
          </div>
          <div>
            <label for="lg-a-y" class="field-label">${escapeHtml(tr('toolGYield'))}</label>
            <input type="number" id="lg-a-y" class="field-input" min="0" step="1" value="${g.aYield}" />
          </div>
          <div>
            <label for="lg-a-p" class="field-label">${escapeHtml(tr('toolGPrice'))}</label>
            <input type="number" id="lg-a-p" class="field-input" min="0" step="100" value="${g.aPrice}" />
          </div>
          <div>
            <label for="lg-a-s" class="field-label">${escapeHtml(tr('toolGStraw'))}</label>
            <input type="number" id="lg-a-s" class="field-input" min="0" step="500" value="${g.aStraw}" />
          </div>
        </div>
        <div class="metric-strip" id="lg-a-metrics"></div>
      </div>

      <div class="lab-compare-col">
        <div style="margin-bottom:10px">
          <strong style="color:var(--brown-dark)">${escapeHtml(tr('toolGLabelB'))}</strong>
        </div>
        <div class="form-grid">
          <div>
            <label for="lg-b-k" class="field-label">${escapeHtml(tr('toolGKanals'))}</label>
            <input type="number" id="lg-b-k" class="field-input" min="0.5" step="0.5" value="${g.bKanals}" />
          </div>
          <div>
            <label for="lg-b-exp" class="field-label">${escapeHtml(tr('toolGExpense'))}</label>
            <input type="number" id="lg-b-exp" class="field-input" min="0" step="500" value="${g.bExpense}" />
          </div>
          <div>
            <label for="lg-b-y" class="field-label">${escapeHtml(tr('toolGYield'))}</label>
            <input type="number" id="lg-b-y" class="field-input" min="0" step="1" value="${g.bYield}" />
          </div>
          <div>
            <label for="lg-b-p" class="field-label">${escapeHtml(tr('toolGPrice'))}</label>
            <input type="number" id="lg-b-p" class="field-input" min="0" step="100" value="${g.bPrice}" />
          </div>
          <div>
            <label for="lg-b-s" class="field-label">${escapeHtml(tr('toolGStraw'))}</label>
            <input type="number" id="lg-b-s" class="field-input" min="0" step="500" value="${g.bStraw}" />
          </div>
        </div>
        <div class="metric-strip" id="lg-b-metrics"></div>
      </div>
    </div>

    <div class="callout-box callout-tip" style="margin-top:16px" id="lg-diff-box"></div>
    <p class="fg-credit-text">${escapeHtml(tr('toolGNote'))}</p>
  `;

  function compute() {
    g.aKanals = Math.max(0.5, Number(host.querySelector('#lg-a-k').value) || 0.5);
    g.aExpense = Math.max(0, Number(host.querySelector('#lg-a-exp').value) || 0);
    g.aYield = Math.max(0, Number(host.querySelector('#lg-a-y').value) || 0);
    g.aPrice = Math.max(0, Number(host.querySelector('#lg-a-p').value) || 0);
    g.aStraw = Math.max(0, Number(host.querySelector('#lg-a-s').value) || 0);

    g.bKanals = Math.max(0.5, Number(host.querySelector('#lg-b-k').value) || 0.5);
    g.bExpense = Math.max(0, Number(host.querySelector('#lg-b-exp').value) || 0);
    g.bYield = Math.max(0, Number(host.querySelector('#lg-b-y').value) || 0);
    g.bPrice = Math.max(0, Number(host.querySelector('#lg-b-p').value) || 0);
    g.bStraw = Math.max(0, Number(host.querySelector('#lg-b-s').value) || 0);
    saveJsonStorage(STORAGE_KEYS.labCompare, g);

    const aGross = g.aYield * g.aPrice + g.aStraw;
    const aNet = aGross - g.aExpense;
    const aNetAcre = (aNet / g.aKanals) * 8;
    const aBreakEven = g.aPrice > 0 ? Math.max(0, (g.aExpense - g.aStraw) / g.aPrice) : 0;

    const bGross = g.bYield * g.bPrice + g.bStraw;
    const bNet = bGross - g.bExpense;
    const bNetAcre = (bNet / g.bKanals) * 8;
    const bBreakEven = g.bPrice > 0 ? Math.max(0, (g.bExpense - g.bStraw) / g.bPrice) : 0;

    host.querySelector('#lg-a-metrics').innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolGGross'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(aGross).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolGNet'))}</span><span class="metric-value tabular-nums" style="color:${aNet >= 0 ? 'var(--leaf-dark)' : 'var(--warning)'}">PKR ${Math.round(aNet).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolGNetPerAcre'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(aNetAcre).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolGBreakEven'))}</span><span class="metric-value tabular-nums">${aBreakEven.toFixed(1)} maunds</span></div>
    `;

    host.querySelector('#lg-b-metrics').innerHTML = `
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolGGross'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(bGross).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolGNet'))}</span><span class="metric-value tabular-nums" style="color:${bNet >= 0 ? 'var(--leaf-dark)' : 'var(--warning)'}">PKR ${Math.round(bNet).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolGNetPerAcre'))}</span><span class="metric-value tabular-nums">PKR ${Math.round(bNetAcre).toLocaleString()}</span></div>
      <div class="metric-box"><span class="metric-label">${escapeHtml(tr('toolGBreakEven'))}</span><span class="metric-value tabular-nums">${bBreakEven.toFixed(1)} maunds</span></div>
    `;

    const netAcreDiff = aNetAcre - bNetAcre;
    const expenseAcreA = (g.aExpense / g.aKanals) * 8;
    const expenseAcreB = (g.bExpense / g.bKanals) * 8;
    const maxVal = Math.max(1, aGross, bGross, g.aExpense, g.bExpense);

    const diffBox = host.querySelector('#lg-diff-box');
    diffBox.className = `callout-box ${netAcreDiff >= 0 ? 'callout-tip' : 'callout-warning'}`;
    diffBox.innerHTML = `
      <p class="callout-title">${escapeHtml(tr('toolGDiffBanner'))}</p>
      <p class="callout-text">
        <strong>${escapeHtml(tr('toolGNetPerAcre'))}:</strong>
        <span class="tabular-nums">${netAcreDiff >= 0 ? '+' : ''}PKR ${Math.round(netAcreDiff).toLocaleString()} / acre</span>
        ·
        <strong>${escapeHtml(tr('toolECostPerAcre'))}:</strong>
        <span class="tabular-nums">PKR ${Math.round(expenseAcreA).toLocaleString()}</span> vs <span class="tabular-nums">PKR ${Math.round(expenseAcreB).toLocaleString()}</span>
      </p>
      <div class="lab-bar-list">
        <div class="lab-bar-row">
          <div class="lab-bar-meta"><span>${escapeHtml(tr('toolGLabelA'))} (${escapeHtml(tr('toolGGross'))})</span><span class="tabular-nums">PKR ${Math.round(aGross).toLocaleString()}</span></div>
          <div class="lab-bar-track"><div class="lab-bar-fill is-leaf" style="width:${Math.round((aGross / maxVal) * 100)}%"></div></div>
        </div>
        <div class="lab-bar-row">
          <div class="lab-bar-meta"><span>${escapeHtml(tr('toolGLabelB'))} (${escapeHtml(tr('toolGGross'))})</span><span class="tabular-nums">PKR ${Math.round(bGross).toLocaleString()}</span></div>
          <div class="lab-bar-track"><div class="lab-bar-fill is-water" style="width:${Math.round((bGross / maxVal) * 100)}%"></div></div>
        </div>
      </div>
    `;
  }

  host.querySelector('#lg-pull-e').addEventListener('click', () => {
    host.querySelector('#lg-a-exp').value = String(Math.round(getToolETotalCost()));
    host.querySelector('#lg-a-k').value = String(state.labCostKanals || 8);
    compute();
  });

  host.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', compute));
  compute();
}

/* Full Detail View for Any of the 10 Home Farm Lab Activities (#lab/<id>) */
function renderLabTestDetail(testId) {
  const idx = HOME_FARM_LAB_TESTS.findIndex((item) => item.id === testId);
  const test = HOME_FARM_LAB_TESTS[idx] || HOME_FARM_LAB_TESTS[0];
  const prevTest = idx > 0 ? HOME_FARM_LAB_TESTS[idx - 1] : null;
  const nextTest = idx < HOME_FARM_LAB_TESTS.length - 1 ? HOME_FARM_LAB_TESTS[idx + 1] : null;

  const isUr = state.lang === 'ur';
  const primaryTitle = isUr ? test.titleUr : test.titleEn;
  const altTitle = isUr ? test.titleEn : test.titleUr;
  const sub = isUr ? test.subtitleUr : test.subtitleEn;
  const materials = isUr ? test.materials.ur : test.materials.en;
  const steps = isUr ? test.steps.ur : test.steps.en;
  const observe = isUr ? test.observe.ur : test.observe.en;
  const meaning = isUr ? test.meaning.ur : test.meaning.en;
  const safety = isUr ? test.safety.ur : test.safety.en;

  const stepIdx = state.labDemoStep % test.demoFrames.length;
  const activeFrame = test.demoFrames[stepIdx];

  const container = document.getElementById('detail-container');
  container.innerHTML = `
    <div class="detail-topbar">
      <button type="button" class="btn btn-outline" id="btn-lab-back">
        <span class="dir-flip">←</span> ${escapeHtml(tr('labBackToLab'))}
      </button>
      <button type="button" class="btn btn-primary" id="btn-lab-log-obs">
        ${escapeHtml(tr('labLogThisObservation'))}
      </button>
    </div>

    <div class="detail-hero-box">
      <div class="detail-hero-grid has-image">
        <div class="detail-hero-body">
          <p class="detail-kicker">${escapeHtml(tr('labTestWord'))} <span class="tabular-nums">${test.num} ${tr('labOf10')}</span></p>
          <h1 class="detail-title">${escapeHtml(primaryTitle)}</h1>
          <p class="detail-alt-title" lang="${isUr ? 'en' : 'ur'}" dir="${isUr ? 'ltr' : 'rtl'}">${escapeHtml(altTitle)}</p>
          <p class="detail-summary">${formatRichText(sub)}</p>
        </div>
        <img src="${test.photo}" alt="${escapeHtml(t(test.titleEn, test.titleUr))}" class="detail-hero-img" referrerpolicy="no-referrer" />
      </div>
    </div>

    <div class="verify-box" style="margin-top:0;margin-bottom:18px">
      <p class="callout-title">${escapeHtml(tr('labDisclaimerTitle'))}</p>
      <p class="callout-text">${formatRichText(tr('labDisclaimerText'))}</p>
    </div>

    <div class="detail-grid">
      <div class="detail-card full-span">
        <h3>${escapeHtml(tr('labObjectiveLabel'))}</h3>
        <p style="margin:0">${formatRichText(t(test.objective.en, test.objective.ur))}</p>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('labMaterialsLabel'))}</h3>
        <ul class="principles-list">
          ${materials.map((m) => `<li>${formatRichText(m)}</li>`).join('')}
        </ul>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('labStepsLabel'))}</h3>
        <ol class="principles-list">
          ${steps.map((st) => `<li>${formatRichText(st)}</li>`).join('')}
        </ol>
      </div>

      <div class="detail-card full-span">
        <h3>${escapeHtml(tr('labDemoLabel'))}</h3>
        <div class="lab-demo-panel">
          <div class="lab-demo-stage">
            <div id="lab-demo-svg-host">${renderHomeLabDemoSvg(test, stepIdx)}</div>
            <div>
              <p style="margin:0 0 6px;font-weight:700;color:var(--forest-dark)" id="lab-demo-title">${escapeHtml(t(activeFrame.labelEn, activeFrame.labelUr))}</p>
              <p style="margin:0 0 12px" id="lab-demo-caption">${formatRichText(t(activeFrame.captionEn, activeFrame.captionUr))}</p>
              <div class="lab-demo-step-dots">
                ${test.demoFrames
                  .map(
                    (fr, i) =>
                      `<button type="button" class="lab-step-btn ${i === stepIdx ? 'is-active' : ''}" data-lab-frame="${i}">${escapeHtml(tr('videoStepLabel'))} <span class="tabular-nums">${i + 1}</span></button>`
                  )
                  .join('')}
              </div>
            </div>
          </div>
          <div class="lab-demo-controls">
            <div class="control-row" style="margin:0">
              <button type="button" class="tab-btn" id="btn-demo-prev"><span class="dir-flip">←</span> ${escapeHtml(tr('labDemoPrev'))}</button>
              <button type="button" class="tab-btn is-active" id="btn-demo-play">${escapeHtml(state.labDemoPlaying ? tr('labDemoPause') : tr('labDemoPlay'))}</button>
              <button type="button" class="tab-btn" id="btn-demo-next">${escapeHtml(tr('labDemoNext'))} <span class="dir-flip">→</span></button>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('labObserveLabel'))}</h3>
        <ul class="principles-list">
          ${observe.map((o) => `<li>${formatRichText(o)}</li>`).join('')}
        </ul>
      </div>

      <div class="detail-card">
        <h3>${escapeHtml(tr('labMeaningLabel'))}</h3>
        <ul class="principles-list">
          ${meaning.map((m) => `<li>${formatRichText(m)}</li>`).join('')}
        </ul>
      </div>

      <div class="callout-box callout-tip full-span">
        <p class="callout-title">${escapeHtml(tr('labLimitationsLabel'))}</p>
        <p class="callout-text">${formatRichText(t(test.limitations.en, test.limitations.ur))}</p>
      </div>

      <div class="callout-box callout-warning full-span">
        <p class="callout-title">${escapeHtml(tr('labSafetyLabel'))}</p>
        <ul class="principles-list" style="margin-top:6px">
          ${safety.map((sf) => `<li>${formatRichText(sf)}</li>`).join('')}
        </ul>
      </div>

      <details class="lesson-acc full-span">
        <summary class="lesson-acc-summary">
          <span>${escapeHtml(tr('labBilingualAltLabel'))}</span>
          <span class="lesson-acc-chevron" aria-hidden="true"></span>
        </summary>
        <div class="lesson-acc-body" lang="${isUr ? 'en' : 'ur'}" dir="${isUr ? 'ltr' : 'rtl'}">
          <p><strong>${isUr ? 'Objective:' : 'مقصد:'}</strong> ${formatRichText(isUr ? test.objective.en : test.objective.ur)}</p>
          <p><strong>${isUr ? 'Steps:' : 'ہدایات:'}</strong></p>
          <ol class="principles-list">
            ${(isUr ? test.steps.en : test.steps.ur).map((s) => `<li>${formatRichText(s)}</li>`).join('')}
          </ol>
          <p style="margin-top:10px"><strong>${isUr ? 'Meaning:' : 'ممکنہ مطلب:'}</strong></p>
          <ul class="principles-list">
            ${(isUr ? test.meaning.en : test.meaning.ur).map((m) => `<li>${formatRichText(m)}</li>`).join('')}
          </ul>
          <p style="margin-top:10px"><strong>${isUr ? 'Limitations:' : 'حدود:'}</strong> ${formatRichText(isUr ? test.limitations.en : test.limitations.ur)}</p>
        </div>
      </details>
    </div>

    <div class="detail-footer-nav">
      ${
        prevTest
          ? `<button type="button" class="btn btn-outline" id="btn-prev-lab"><span class="dir-flip">←</span> ${escapeHtml(tr('labPrevTest'))}: ${escapeHtml(t(prevTest.titleEn, prevTest.titleUr))}</button>`
          : '<span></span>'
      }
      ${
        nextTest
          ? `<button type="button" class="btn btn-primary" id="btn-next-lab">${escapeHtml(tr('labNextTest'))}: ${escapeHtml(t(nextTest.titleEn, nextTest.titleUr))} <span class="dir-flip">→</span></button>`
          : `<button type="button" class="btn btn-primary" id="btn-finish-lab">${escapeHtml(tr('labBackToLab'))}</button>`
      }
    </div>
  `;

  function updateDemoFrame(newIdx) {
    state.labDemoStep = ((newIdx % test.demoFrames.length) + test.demoFrames.length) % test.demoFrames.length;
    const frame = test.demoFrames[state.labDemoStep];
    const svgHost = container.querySelector('#lab-demo-svg-host');
    const titleEl = container.querySelector('#lab-demo-title');
    const capEl = container.querySelector('#lab-demo-caption');
    if (svgHost) svgHost.innerHTML = renderHomeLabDemoSvg(test, state.labDemoStep);
    if (titleEl) titleEl.textContent = t(frame.labelEn, frame.labelUr);
    if (capEl) capEl.innerHTML = formatRichText(t(frame.captionEn, frame.captionUr));
    container.querySelectorAll('[data-lab-frame]').forEach((btn, i) => {
      btn.classList.toggle('is-active', i === state.labDemoStep);
    });
  }

  container.querySelector('#btn-lab-back').addEventListener('click', () => navigateToHome('home-farm-lab'));
  container.querySelector('#btn-lab-log-obs').addEventListener('click', () => {
    state.labTab = 'tools';
    state.labToolTab = 'A';
    renderHomeLabWorkbench(document.getElementById('home-lab-workbench'));
    navigateToHome('home-farm-lab');
  });

  container.querySelectorAll('[data-lab-frame]').forEach((btn) => {
    btn.addEventListener('click', () => {
      stopLabDemoPlayer();
      container.querySelector('#btn-demo-play').textContent = tr('labDemoPlay');
      updateDemoFrame(Number(btn.getAttribute('data-lab-frame')));
    });
  });

  container.querySelector('#btn-demo-prev').addEventListener('click', () => {
    stopLabDemoPlayer();
    container.querySelector('#btn-demo-play').textContent = tr('labDemoPlay');
    updateDemoFrame(state.labDemoStep - 1);
  });

  container.querySelector('#btn-demo-next').addEventListener('click', () => {
    stopLabDemoPlayer();
    container.querySelector('#btn-demo-play').textContent = tr('labDemoPlay');
    updateDemoFrame(state.labDemoStep + 1);
  });

  container.querySelector('#btn-demo-play').addEventListener('click', (e) => {
    if (state.labDemoPlaying) {
      stopLabDemoPlayer();
      e.currentTarget.textContent = tr('labDemoPlay');
    } else {
      state.labDemoPlaying = true;
      e.currentTarget.textContent = tr('labDemoPause');
      labDemoInterval = setInterval(() => {
        if (state.currentLabTestId !== test.id) {
          stopLabDemoPlayer();
          return;
        }
        updateDemoFrame(state.labDemoStep + 1);
      }, 2800);
    }
  });

  if (prevTest) {
    container.querySelector('#btn-prev-lab').addEventListener('click', () => navigateToLabTest(prevTest.id));
  }
  if (nextTest) {
    container.querySelector('#btn-next-lab').addEventListener('click', () => navigateToLabTest(nextTest.id));
  } else {
    container.querySelector('#btn-finish-lab').addEventListener('click', () => navigateToHome('home-farm-lab'));
  }
}

/* ==========================================================================
   NAVIGATION & STATE UPDATES
   ========================================================================== */

let lastRenderedRouteKey = null;
let lastRenderedViewKind = null;

function toggleSectionCompleted(sectionId) {
  if (state.completedIds.includes(sectionId)) {
    state.completedIds = state.completedIds.filter((id) => id !== sectionId);
  } else {
    state.completedIds = [...state.completedIds, sectionId];
  }
  saveCompletedIds(state.completedIds);
}

function safeDecodeSegment(segment) {
  const cleaned = String(segment || '').replace(/\/+$/, '').trim();
  try {
    return decodeURIComponent(cleaned);
  } catch {
    return cleaned;
  }
}

function parseRouteFromHash(rawHash) {
  const cleanHash = String(rawHash || '#home').trim() || '#home';

  if (cleanHash.startsWith('#lab/')) {
    const id = safeDecodeSegment(cleanHash.slice('#lab/'.length));
    const test = HOME_FARM_LAB_TESTS.find((tItem) => tItem.id === id);
    if (test) {
      return { key: `lab:${test.id}`, view: 'detail', kind: 'lab', id: test.id, navKey: 'home' };
    }
  }

  if (cleanHash.startsWith('#field-guide/')) {
    const id = safeDecodeSegment(cleanHash.slice('#field-guide/'.length));
    const entry = FIELD_GUIDE_ENTRIES.find((e) => e.id === id);
    if (entry) {
      return { key: `fg:${entry.id}`, view: 'detail', kind: 'field-guide', id: entry.id, navKey: 'field-guide' };
    }
  }

  if (cleanHash.startsWith('#crop/')) {
    const id = safeDecodeSegment(cleanHash.slice('#crop/'.length));
    const crop = CROP_LIBRARY.find((c) => c.id === id);
    if (crop) {
      return { key: `crop:${crop.id}`, view: 'detail', kind: 'crop', id: crop.id, navKey: 'crops' };
    }
  }

  if (cleanHash.startsWith('#course/')) {
    const num = Number.parseInt(safeDecodeSegment(cleanHash.slice('#course/'.length)), 10);
    const chapter = Number.isFinite(num) ? COURSE_CHAPTERS.find((c) => c.num === num) : null;
    if (chapter) {
      return { key: `course:${chapter.num}`, view: 'detail', kind: 'course', num: chapter.num, navKey: 'course' };
    }
  }

  if (cleanHash.startsWith('#section/')) {
    const id = safeDecodeSegment(cleanHash.slice('#section/'.length));
    const sec = LEARNING_SECTIONS.find((s) => s.id === id);
    if (sec) {
      return { key: `section:${sec.id}`, view: 'detail', kind: 'section', id: sec.id, navKey: sec.id };
    }
  }

  const anchorMap = {
    '#crops-library': { anchorId: 'crops-library', navKey: 'crops' },
    '#field-guide': { anchorId: 'field-guide', navKey: 'field-guide' },
    '#home-farm-lab': { anchorId: 'home-farm-lab', navKey: 'home' },
    '#learning-centre': { anchorId: 'learning-centre', navKey: 'learning-centre' },
    '#course': { anchorId: 'course', navKey: 'course' },
    '#topics': { anchorId: 'topics', navKey: 'home' }
  };

  if (anchorMap[cleanHash]) {
    const { anchorId, navKey } = anchorMap[cleanHash];
    return { key: `home:${anchorId}`, view: 'home', kind: 'home', anchorId, navKey };
  }

  return { key: 'home', view: 'home', kind: 'home', anchorId: null, navKey: 'home' };
}

function updateDocumentTitle() {
  const base = tr('docTitle');
  if (state.currentLabTestId) {
    const test = HOME_FARM_LAB_TESTS.find((tItem) => tItem.id === state.currentLabTestId);
    if (test) {
      document.title = `${t(test.titleEn, test.titleUr)} · ${base}`;
      return;
    }
  }
  if (state.currentFieldGuideId) {
    const entry = FIELD_GUIDE_ENTRIES.find((e) => e.id === state.currentFieldGuideId);
    if (entry) {
      document.title = `${t(entry.nameEn, entry.nameUr)} · ${base}`;
      return;
    }
  }
  if (state.currentCropId) {
    const crop = CROP_LIBRARY.find((c) => c.id === state.currentCropId);
    if (crop) {
      document.title = `${t(crop.nameEn, crop.nameUr)} · ${base}`;
      return;
    }
  }
  if (state.currentChapterNum) {
    const ch = COURSE_CHAPTERS.find((c) => c.num === state.currentChapterNum);
    if (ch) {
      document.title = `${t(ch.titleEn, ch.titleUr)} · ${base}`;
      return;
    }
  }
  if (state.currentSectionId) {
    const sec = LEARNING_SECTIONS.find((s) => s.id === state.currentSectionId);
    if (sec) {
      document.title = `${t(sec.titleEn, sec.titleUr)} · ${base}`;
      return;
    }
  }
  document.title = base;
}

function scrollToTarget(anchorId, { isInitialPaint = false, wasDetailView = false } = {}) {
  if (anchorId) {
    requestAnimationFrame(() => {
      const target = document.getElementById(anchorId);
      if (target) {
        target.scrollIntoView({ behavior: isInitialPaint ? 'auto' : 'smooth', block: 'start' });
      }
    });
    return;
  }

  if (wasDetailView || window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: isInitialPaint ? 'auto' : 'smooth' });
  }
}

function closeMobileNavDrawer() {
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  if (mobileDrawer && !mobileDrawer.hidden) {
    mobileDrawer.hidden = true;
  }
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
  }
}

function navigateToHash(targetHash, { anchorId = null } = {}) {
  if (window.location.hash !== targetHash) {
    window.location.hash = targetHash;
    syncRouteView();
  } else {
    scrollToTarget(anchorId);
  }
}

function navigateToHome(anchorId = null) {
  const validAnchor = typeof anchorId === 'string' && anchorId.length > 0 ? anchorId : null;
  const targetHash = validAnchor ? `#${validAnchor}` : '#home';
  navigateToHash(targetHash, { anchorId: validAnchor });
}

function navigateToSection(sectionId) {
  navigateToHash(`#section/${encodeURIComponent(sectionId)}`);
}

function navigateToChapter(chapterNum) {
  navigateToHash(`#course/${chapterNum}`);
}

function navigateToCrop(cropId) {
  if (state.currentCropId !== cropId) {
    state.cropStageIdx = 0;
  }
  navigateToHash(`#crop/${encodeURIComponent(cropId)}`);
}

function navigateToFieldGuide(entryId) {
  navigateToHash(`#field-guide/${encodeURIComponent(entryId)}`);
}

function navigateToLabTest(testId) {
  if (state.currentLabTestId !== testId) {
    state.labDemoStep = 0;
  }
  navigateToHash(`#lab/${encodeURIComponent(testId)}`);
}

function syncRouteView() {
  const route = parseRouteFromHash(window.location.hash);
  if (route.key === lastRenderedRouteKey) {
    return;
  }

  stopLabDemoPlayer();
  const isInitialPaint = lastRenderedViewKind === null;
  const wasDetailView = lastRenderedViewKind === 'detail';
  lastRenderedRouteKey = route.key;
  lastRenderedViewKind = route.view;

  const homeView = document.getElementById('home-view');
  const detailView = document.getElementById('detail-view');
  closeMobileNavDrawer();

  if (route.view === 'detail') {
    homeView.hidden = true;
    detailView.hidden = false;

    if (route.kind === 'lab') {
      if (state.currentLabTestId !== route.id) {
        state.labDemoStep = 0;
      }
      state.currentLabTestId = route.id;
      state.currentFieldGuideId = null;
      state.currentCropId = null;
      state.currentChapterNum = null;
      state.currentSectionId = null;
      renderLabTestDetail(route.id);
    } else if (route.kind === 'field-guide') {
      state.currentFieldGuideId = route.id;
      state.currentLabTestId = null;
      state.currentCropId = null;
      state.currentChapterNum = null;
      state.currentSectionId = null;
      renderFieldGuideDetail(route.id);
    } else if (route.kind === 'crop') {
      if (state.currentCropId !== route.id) {
        state.cropStageIdx = 0;
      }
      state.currentCropId = route.id;
      state.currentLabTestId = null;
      state.currentChapterNum = null;
      state.currentSectionId = null;
      state.currentFieldGuideId = null;
      renderCropDetail(route.id);
    } else if (route.kind === 'course') {
      state.currentChapterNum = route.num;
      state.currentLabTestId = null;
      state.currentSectionId = null;
      state.currentCropId = null;
      state.currentFieldGuideId = null;
      renderCourseChapterDetail(route.num);
    } else if (route.kind === 'section') {
      state.currentSectionId = route.id;
      state.currentLabTestId = null;
      state.currentChapterNum = null;
      state.currentCropId = null;
      state.currentFieldGuideId = null;
      renderSectionDetail(route.id);
    }

    updateActiveNavLinks(route.navKey);
    updateDocumentTitle();
    if (!isInitialPaint) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  state.currentLabTestId = null;
  state.currentSectionId = null;
  state.currentChapterNum = null;
  state.currentCropId = null;
  state.currentFieldGuideId = null;
  homeView.hidden = false;
  detailView.hidden = true;
  updateActiveNavLinks(route.navKey);
  updateDocumentTitle();

  if (wasDetailView || (route.anchorId && !isInitialPaint) || (route.key === 'home' && !isInitialPaint)) {
    scrollToTarget(route.anchorId, { isInitialPaint, wasDetailView });
  } else if (isInitialPaint && route.anchorId) {
    scrollToTarget(route.anchorId, { isInitialPaint: true, wasDetailView: false });
  }
}

function updateActiveNavLinks(key) {
  const map = {
    home: 'home',
    crops: 'crops',
    'field-guide': 'field-guide',
    'learning-centre': 'learning-centre',
    course: 'course',
    'my-farm-plan': 'plan'
  };
  const activeNav = map[key] || '';
  document.querySelectorAll('[data-nav]').forEach((el) => {
    const isActive = el.getAttribute('data-nav') === activeNav;
    el.classList.toggle('is-active', isActive);
    if (isActive) {
      el.setAttribute('aria-current', 'page');
    } else {
      el.removeAttribute('aria-current');
    }
  });
}

function setLanguage(lang) {
  state.lang = lang === 'ur' ? 'ur' : 'en';
  saveLanguage(state.lang);
  applyLanguageChrome();
  renderProgress();
  renderCropLibraryWorkbench(document.getElementById('crop-lib-workbench'));
  renderFieldGuideWorkbench(document.getElementById('field-guide-workbench'));
  renderHomeLabWorkbench(document.getElementById('home-lab-workbench'));
  renderLearningCentreWorkbench(document.getElementById('learning-centre-workbench'));
  renderCourseCards();
  renderTopicCards();
  renderComparisonTable();
  renderSearchResults();
  if (state.currentLabTestId) {
    renderLabTestDetail(state.currentLabTestId);
  } else if (state.currentFieldGuideId) {
    renderFieldGuideDetail(state.currentFieldGuideId);
  } else if (state.currentCropId) {
    renderCropDetail(state.currentCropId);
  } else if (state.currentChapterNum) {
    renderCourseChapterDetail(state.currentChapterNum);
  } else if (state.currentSectionId) {
    renderSectionDetail(state.currentSectionId);
  }
  updateDocumentTitle();
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

function init() {
  applyLanguageChrome();
  renderProgress();
  renderCropLibraryWorkbench(document.getElementById('crop-lib-workbench'));
  renderFieldGuideWorkbench(document.getElementById('field-guide-workbench'));
  renderHomeLabWorkbench(document.getElementById('home-lab-workbench'));
  renderLearningCentreWorkbench(document.getElementById('learning-centre-workbench'));
  renderCourseCards();
  renderTopicCards();
  renderComparisonTable();

  document.getElementById('btn-lang-en').addEventListener('click', () => setLanguage('en'));
  document.getElementById('btn-lang-ur').addEventListener('click', () => setLanguage('ur'));

  const searchInput = document.getElementById('hub-search-input');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderSearchResults();
  });

  document.getElementById('hub-search-clear').addEventListener('click', () => {
    state.searchQuery = '';
    searchInput.value = '';
    renderSearchResults();
    searchInput.focus();
  });

  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  menuToggle.addEventListener('click', () => {
    const isOpen = !mobileDrawer.hidden;
    mobileDrawer.hidden = isOpen;
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  mobileDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('hashchange', syncRouteView);
  syncRouteView();

  if ('serviceWorker' in navigator && /^https?:$/.test(window.location.protocol)) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

init();
