# Regenerative Farming Learning Hub (احیائی کاشتکاری کا تعلیمی مرکز)

**A Practical Digital Learning Resource for Farmers of District Narowal, Shakargarh & Punjab, Pakistan.**

A 100% static, frontend-only, mobile-first bilingual (**English** LTR + **اردو / Urdu** RTL) educational web application designed for reliable offline use on low-cost Android phones and free hosting on **GitHub Pages**.

---

## Key Features & Architecture

- **Zero Backend & Zero API Keys**: Pure HTML, CSS, and modular vanilla JavaScript (`index.html`, `style.css`, `app.js`, `data/`). No Node.js runtime server, no database, and no external API calls or keys required.
- **Complete Bilingual System (EN / اردو)**:
  - Instant top-bar toggle switching document direction (`ltr` ↔ `rtl`), Urdu typography (`Noto Nastaliq Urdu`), translated navigation, headings, tables, quizzes, calculators, buttons, and image `alt` descriptions.
  - Natural Pakistani Punjab agricultural terminology alongside technical terms (*Soil Organic Matter — نامیاتی مادہ*, *Compost — گلی سڑی نامیاتی کھاد / کمپوسٹ*, *Mulching — زمین کو فصلوں کی باقیات سے ڈھانپنا*, *Green Manure — سبز کھاد*, *Crop Rotation — فصلوں کی ادل بدل*, *Zero Tillage — بغیر ہل چلائے کاشت*, *Waterlogging — زمین میں پانی کا کھڑا ہونا*, *Beneficial Insects — فائدہ مند حشرات*).
- **Offline Ready & Local Persistence**:
  - Service Worker (`sw.js`) caches core HTML, CSS, JS modules, all 16 local compressed images, and the bilingual PDF handbook (`assets/handbook.pdf`) for offline field use after first visit.
  - User language (`nrf_lang_v1`), topic progress (`nrf_completed_v1`), course progress (`nrf_course_done_v1`), personal farm plan (`nrf_farm_plan_v1`), and Home Lab logs (`nrf_lab_soil_records_v1`, `nrf_lab_costs_v1`, `nrf_lab_irrigation_v1`, `nrf_lab_income_compare_v1`) persist locally in `localStorage`.
- **Main Learning Modules**:
  1. **19-Crop Library & Rotation Planner**: Illustrated crop cards (*Basmati & Rice, Wheat, Sugarcane, Maize, Sorghum, Berseem, Mung Bean, Mash Bean, Chickpea, Lentil, Mustard, Canola, Cowpea, Sesbania/Dhaincha, Vegetables, Citrus, Guava, Mango, Jujube*), interactive 12-month Narowal calendar, side-by-side comparison, and legume rotation planner.
  2. **Field Identification Guide (4 Libraries + Guided Identifier)**: Beneficial Insects, Harmful Pests, Farm Birds, and Weeds/Herbs/Useful Plants with safety verification guidance.
  3. **Interactive Home Farm Lab**: 10 low-cost household/farm screening tests (explicitly marked as educational screening tools, not laboratory replacements for Punjab Soil Testing Labs) + 7 calculators/logs (Soil record, Compost ratio calculator, Acre/Kanal/Marla converter, Maund/kg converter, Input cost calculator, Irrigation log, Expense & income comparison).
  4. **Interactive Farm Simulation & Learning Centre**: 6 browser-local simulations (Soil Cover, Crop Rotation, Water Management / Rice AWD & Critical Wheat Stages, Beneficial Insects vs. Indiscriminate Spray, Compost Making, Farm Economics), 7 curated farmer videos with bilingual offline caption drawers, 18-question 3-mode quizzes (MCQ, Picture ID, True/False) + sorting mini-game, and printable 5-part module summaries.
  5. **17-Chapter Farmer Education Course & 15 Practical Learning Sections**: Expandable bilingual handbook lessons with farmer analogies, Punjab examples, step-by-step activities, mini-quizzes, agricultural glossary, and `My Farm Plan`.

---

## Repository Structure

```text
├── index.html                  # Main SPA entry point (GitHub Pages root compatible)
├── 404.html                    # Bilingual offline-friendly 404 page with hub shortcuts
├── sw.js                       # Service Worker pre-caching core assets for offline use
├── style.css                   # Responsive mobile-first & Urdu RTL stylesheet
├── app.js                      # Application state, hash router, UI & interactive logic
├── .nojekyll                   # Ensures GitHub Pages serves static folders cleanly
├── vite.config.ts              # Optional static bundle builder (copies data/images/videos/assets/sw.js)
├── .github/workflows/deploy.yml# Automated GitHub Actions deployment to GitHub Pages
├── data/                       # Modular ES data modules (translations, crops, field guide, lab, simulations, course, sections, glossary)
├── images/                     # 16 locally hosted, compressed field & crop images (3.2 MB total)
├── videos/                     # Reserved folder for optional offline 480p MP4 clips
└── assets/
    ├── favicon.svg             # Custom vector site icon
    └── handbook.pdf            # 21-page District Narowal Bilingual Regenerative Farming Handbook
```

---

## Image, Icon & Document Attribution

All raster photographs and composite plates in `/images/` were created and optimized locally for low-bandwidth mobile delivery, requiring zero external image CDNs at runtime:

| Asset File | Purpose & Attribution |
| :--- | :--- |
| `./images/hero-narowal-farm.jpg` | Homepage hero banner depicting Narowal irrigated farmland — Local Hub Archive (generated educational agricultural illustration). |
| `./images/soil-healthy.jpg` | Healthy living loamy soil with earthworm & straw mulch comparison — Local Hub Archive. |
| `./images/compost-heap.jpg` | Layered shaded farm compost pile (dry straw + manure) — Local Hub Archive. |
| `./images/beneficial-ladybird.jpg` | Beneficial *Coccinellidae* (ladybird beetle) feeding on aphids — Local Hub Archive. |
| `./images/crop-stages-cereals.jpg` | Cereal growth stages plate (Rice, Wheat, Sugarcane, Maize, Sorghum) — Local Hub Archive. |
| `./images/crop-stages-pulses-fodder.jpg` | Pulses & fodder plate (Berseem, Mung, Mash, Chickpea, Lentil, Cowpea, Sesbania) — Local Hub Archive. |
| `./images/crop-stages-oilseeds-veg.jpg` | Oilseeds & vegetables growth plate (Mustard, Canola, Mixed Vegetables) — Local Hub Archive. |
| `./images/crop-stages-orchards.jpg` | Orchard crops plate (Citrus, Guava, Mango, Jujube) — Local Hub Archive. |
| `./images/field-guide-beneficials.jpg` | Composite field plate A: Ladybird, Green Lacewing, Dragonfly, Parasitic Wasp, Pollinators — Local Hub Archive. |
| `./images/field-guide-pests.jpg` | Composite field plate B: Stem Borer, Leaf Folder, Fall Armyworm, Aphids, Whiteflies — Local Hub Archive. |
| `./images/field-guide-birds.jpg` | Composite field plate C: Black Drongo, Cattle Egret, Sparrow, Owl — Local Hub Archive. |
| `./images/field-guide-plants.jpg` | Composite field plate D: Farm Weeds, Herbs & Cover Crops (*Dhaincha*) — Local Hub Archive. |
| `./images/lab-soil-feel.jpg` | Home Farm Lab: Soil texture by hand-feel & moisture squeeze screening — Local Hub Archive. |
| `./images/lab-infiltration-spade.jpg` | Home Farm Lab: Tin-can water infiltration test & 30 cm spade soil block — Local Hub Archive. |
| `./images/lab-compost-tests.jpg` | Home Farm Lab: Compost maturity jar/sprout check & damp-sponge squeeze — Local Hub Archive. |
| `./images/lab-mulch-cover.jpg` | Home Farm Lab: Side-by-side bare soil vs. straw mulch cover comparison — Local Hub Archive. |
| `./assets/favicon.svg` | Custom inline geometric wheat/leaf SVG favicon created for the Hub. |
| `./assets/handbook.pdf` | Primary source handbook: *Regenerative Farming Handbook (District Narowal, Punjab)* bilingual PDF. |

Inline SVG diagrams (AWD 15 cm water-tube diagram, chapter diagrams, crop growth schematics, and simulation canvases) are original interactive SVG graphics embedded in `app.js`.

---

## Video Attribution

The Learning Centre embeds external training videos **only on explicit farmer click** (using `youtube-nocookie.com`) and provides complete **offline bilingual written summaries and captions** inside the page so every lesson works even without internet video streaming:

| Topic | Title & Source Organization | Link |
| :--- | :--- | :--- |
| Soil Life & Cover | *Mission: Keep soil alive!* — **Food and Agriculture Organization (FAO)** | https://www.youtube.com/watch?v=M-ZlrNg0BjI |
| Mulching | *Mulch for a Better Soil and Crop* — **Access Agriculture** | https://www.youtube.com/watch?v=L08qB1LHPMM |
| Rice AWD (English) | *Alternate Wetting and Drying (AWD) — Using Less Water to Grow Rice* — **International Rice Research Institute (IRRI)** | https://www.youtube.com/watch?v=tfKWKfagfFs |
| Rice AWD (Punjabi) | *Alternate Wetting and Drying (AWD) in Punjabi* — **nurture farm / IRRI Punjabi Adaptation** | https://www.youtube.com/watch?v=HXh6Nx0ebig |
| Zero Tillage Wheat | *Wheat Cultivation with Zero-Till / Happy Seeder in Pakistan* — **KISSAN PAKISTAN** | https://www.youtube.com/watch?v=0pyJRtJgF9Q |
| Farm Composting | *Fast Farm Composting Using Dry & Green Leaves* — **Organic Mandya** | https://www.youtube.com/watch?v=JT0if45XyB0 |
| Beneficial Insects (IPM) | *Top Beneficial Insects Every Farmer Should Know (IPM)* — **Discover Agriculture** | https://www.youtube.com/watch?v=_6h8DVELzlE |

---

## Local Development & GitHub Pages Deployment

### Option 1: Automated GitHub Actions Deployment (Recommended)

1. Push this repository to GitHub on the `main` branch.
2. In your GitHub repository settings, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` automatically sets `VITE_BASE_PATH="/<repo-name>/"`, runs `npm run lint` and `npm run build`, and publishes `./dist` (including `index.html`, `404.html`, `sw.js`, `.nojekyll`, `data/`, `images/`, `videos/`, `assets/`).

### Option 2: Direct Static GitHub Pages Hosting (No Build Step)

Because `index.html`, `404.html`, `sw.js`, `style.css`, `app.js`, `data/`, `images/`, `assets/`, and `.nojekyll` already live at the repository root using relative `./` paths, you can also set **Settings → Pages → Source: Deploy from a branch (`main` / `(root)`)** with zero build tooling required.

### Local Commands

```bash
npm install        # Install optional Vite & TypeScript build tools
npm run dev        # Start local dev server on port 3000
npm run lint       # Type-check project configuration
npm run build      # Generate production static bundle in ./dist
npm run preview    # Preview built ./dist bundle locally
```

---

## Technical Audit & Pre-Deployment Verification Checklist

- [x] Zero backend services, databases, server endpoints, or Gemini/external API key calls.
- [x] Offline Service Worker (`sw.js`) caches HTML, CSS, JS, data modules, all 16 local images, and `handbook.pdf`.
- [x] User language (`nrf_lang_v1`), course/topic progress, and all personal farm logs persist in `localStorage`.
- [x] Bilingual English (LTR) & Urdu (RTL with `Noto Nastaliq Urdu`) across navigation, headings, buttons, tools, simulations, quizzes, and `alt` attributes.
- [x] Every `<img>` element carries meaningful bilingual `alt` text and resolves to a local compressed asset under `images/`.
- [x] Dedicated bilingual responsive `404.html` page with direct links back to every major hub module.
- [x] Both root static structure (`index.html`) and Vite `dist/` bundle + `.github/workflows/deploy.yml` configured for GitHub Pages.
- [x] Unverified rates, local prices, and chemical soil metrics clearly prompt verification with **Punjab Agriculture Extension Office / Punjab Soil Testing Lab, Narowal**.
