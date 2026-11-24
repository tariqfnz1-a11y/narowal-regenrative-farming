/* ==========================================================================
   NAROWAL INTERACTIVE CROP LIBRARY — PART 1 (CROPS 1 TO 10)
   Primary Source: Regenerative Farming Handbook (District Narowal, Punjab)
   STRICT ACCURACY RULE: Only verified handbook figures are stated as facts.
   Unspecified varieties, sowing dates, seed rates, row/plant spacing,
   fertilizer doses, and irrigation schedules are explicitly marked unverified.
   ========================================================================== */

export const CROPS_1_TO_10 = [
  {
    id: 'basmati-rice',
    num: 1,
    nameEn: 'Basmati and Other Rice',
    nameUr: 'باسمتی اور دیگر چاول',
    scientificName: 'Oryza sativa',
    seasonClass: 'kharif',
    seasonClassEn: 'Kharif',
    seasonClassUr: 'خریف',
    photo: './images/crop-stages-cereals.jpg',
    photoGroup: 'cereals',
    diagramType: 'rice',
    stageCaptions: {
      en: [
        'Stage 1 — Nursery & Transplanting: Compost-enriched nursery; transplant healthy seedlings at proper age.',
        'Stage 2 — Tillering & 15 cm AWD: Let water drop 15 cm below surface in perforated pipe before re-irrigating.',
        'Stage 3 — Flowering & Harvest: Keep shallow standing water at flowering; chop straw at harvest instead of burning.'
      ],
      ur: [
        'مرحلہ 1 — پنیری اور منتقلی: کمپوسٹ والی صحت مند پنیری تیار کر کے مناسب عمر پر منتقل کریں۔',
        'مرحلہ 2 — پھوٹ اور 15 cm اے ڈبلیو ڈی: سوراخ دار پائپ میں پانی 15 cm نیچے جانے پر دوبارہ آبپاشی کریں۔',
        'مرحلہ 3 — پھول اور کٹائی: پھول آنے پر ہلکا پانی کھڑا رکھیں؛ کٹائی پر پرالی جلائیں نہیں بلکہ کتر کر پھیلائیں۔'
      ]
    },
    suitableSeason: {
      en: 'Kharif on Narowal irrigated plains between the Ravi river and Deg/Basantar nullahs. Starter plan sets green manure/nursery prep in May–June and main growing season in July–October. Exact district transplanting dates and recommended varieties are unverified in the handbook — confirm with the Punjab Agriculture Department.',
      ur: 'نارووال کے دریائے راوی اور ڈیک/بسنتر نالوں کے سیراب میدانوں کی اہم خریف فصل۔ ابتدائی منصوبے میں مئی–جون تیاری/پنیری اور جولائی–اکتوبر مرکزی موسم ہے، تاہم ضلع کے لیے حتمی تاریخیں اور اقسام ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Use laser or precision land levelling (saves roughly 20–30% water and improves crop evenness). Clear field drains and nullahs before the July–September monsoon to prevent flood/Waterlogging damage. For Direct Seeded Rice (DSR), test on a small 1–2 kanal plot first.',
      ur: 'لیزر یا درست لیولنگ کروائیں (تقریباً 20–30% پانی بچتا ہے اور فصل یکساں ہوتی ہے)۔ جولائی–ستمبر مون سون سے پہلے نالیاں صاف کریں تاکہ سیلاب یا زمین میں پانی کھڑا نہ ہو۔ براہِ راست کاشت (DSR) پہلے 1–2 کنال پر آزمائیں۔'
    },
    seedSowing: {
      en: 'Use certified seed of recommended Basmati varieties and healthy nurseries grown on compost-amended beds. Transplant at proper seedling age or trial DSR on suitable soils. Unverified in handbook: exact seed rate (kg/acre), nursery age in days, and approved variety names — verify with the Punjab Agriculture Department & Rice Research Institute (Kala Shah Kaku).',
      ur: 'منظور شدہ باسمتی اقسام کا تصدیق شدہ بیج اور کمپوسٹ سے بنی صحت مند پنیری استعمال کریں، یا موزوں زمین پر DSR آزمائیں۔ غیر تصدیق شدہ: فی ایکڑ بیج کی مقدار، پنیری کی عمر اور اقسام کے نام ہینڈ بک میں نہیں — محکمہ زراعت پنجاب اور رائس ریسرچ انسٹیٹیوٹ کالا شاہ کاکو سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Handbook states to transplant at "proper spacing" for healthy stands, but exact row-to-row and plant-to-plant distances (cm/inches) are NOT verified in the handbook. Confirm exact transplanting spacing with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں مناسب فاصلے پر پنیری لگانے کا ذکر ہے، لیکن قطاروں اور پودوں کا درست فاصلہ (cm/انچ) ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Practice Alternate Wetting and Drying (AWD): bury a perforated pipe and let water drop about 15 cm below the soil surface before re-irrigating. This saves substantial tubewell water and cuts methane. IMPORTANT: keep shallow standing water during the flowering stage. Unverified in handbook: exact total number of irrigations and day intervals.',
      ur: 'متبادل گیلا اور خشک (AWD) اپنائیں: زمین میں سوراخ دار پائپ دبائیں اور پانی سطح سے تقریباً 15 cm نیچے جانے پر آبپاشی کریں؛ اس سے پانی بچتا ہے اور میتھین کم ہوتی ہے۔ پھول آنے کے وقت کھیت میں ہلکا پانی کھڑا رکھیں۔ غیر تصدیق شدہ: کل آبپاشیوں کی تعداد اور دنوں کا وقفہ۔'
    },
    nutrients: {
      en: 'Incorporate Sesbania (dhaincha) green manure 1–2 weeks before transplanting, add compost to nursery beds and 2–4 tonnes/acre (4–8 trolleys) before sowing, and return rice straw instead of burning. Basmati quality depends on balanced nutrition: avoid excess nitrogen (which invites disease and lodging). Test soil (0–15 cm, 10–15 spots) and apply zinc where deficient. Unverified in handbook: exact NPK fertilizer bag doses per acre.',
      ur: 'منتقلی سے 1–2 ہفتے پہلے سنبھالو کی سبز کھاد دبا دیں، پنیری اور کھیت میں 2–4 tonnes/acre (4–8 ٹرالیاں) کمپوسٹ ڈالیں اور پرالی جلائے بغیر واپس ملائیں۔ باسمتی کا معیار متوازن غذائیت پر ہے: زیادہ نائٹروجن سے بیماری اور فصل گرنے کا خطرہ بڑھتا ہے۔ مٹی ٹیسٹ کروا کر زنک کی کمی پوری کریں۔ غیر تصدیق شدہ: فی ایکڑ کھاد کی حتمی بوریوں کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Watch for stem borer (Scirpophaga incertulas), leaf folder (Cnaphalocrocis medinalis), blast, and bacterial leaf blight. Follow 6-step IPM: scout twice weekly (10 plants/spot), protect ladybirds, spiders, dragonflies and birds (wooden perches), use light/pheromone traps, tie Trichogramma chilonis egg cards against borers, or use homemade neem spray (~1 kg per 10 L water). For DSR, manage weeds early. Unverified in handbook: exact chemical pesticide/herbicide product rates.',
      ur: 'تنا چھیدنے والی سنڈی (Scirpophaga incertulas)، پتا لپیٹ سنڈی (Cnaphalocrocis medinalis)، بلاسٹ اور بیکٹیریل لیف بلائٹ پر نظر رکھیں۔ ہفتے میں دو بار 10 پودوں کا معائنہ کریں، فائدہ مند حشرات اور پرندوں (ڈنڈے لگا کر) کی حفاظت کریں، ٹریپ اور Trichogramma chilonis کارڈ لگائیں۔ غیر تصدیق شدہ: کیمیائی زہر یا جڑی بوٹی مار دوا کی مقدار۔'
    },
    harvestStorage: {
      en: 'Fit a straw chopper or hire a mulcher on combine harvesters so chopped straw stays on the field for Happy Seeder wheat without burning. Clean and grade Basmati grain to earn better market prices. Unverified in handbook: exact harvest moisture percentage and storage fumigation protocols.',
      ur: 'کمبائن پر اسٹرا چوپر یا ملچر استعمال کریں تاکہ پرالی جلائے بغیر ہیپی سیڈر سے گندم بوئی جا سکے۔ صاف اور درجہ بند باسمتی بہتر قیمت دلاتی ہے۔ غیر تصدیق شدہ: کٹائی پر نمی کی حتمی شرح اور گودام حفاظت کی مقدار۔'
    },
    regenerativeRole: {
      en: 'Narowal’s flagship Kharif crop; when combined with Sesbania green manure, 15 cm AWD water saving, Trichogramma biocontrol, and straw retention (stopping autumn smog), rice fields rebuild Soil Organic Matter and cut tubewell diesel/electricity costs.',
      ur: 'نارووال کی مرکزی خریف فصل؛ جب سنبھالو سبز کھاد، 15 cm AWD، ٹرائیکوگراما اور پرالی بچاؤ (سموگ کے خاتمے) کے ساتھ کاشت کی جائے تو مٹی کا نامیاتی مادہ بحال ہوتا ہے اور ٹیوب ویل کا خرچ گرتا ہے۔'
    },
    commonMistakes: {
      en: [
        'Burning rice straw after harvest (destroys nutrients, soil microbes, and worsens smog).',
        'Applying excess nitrogen/urea (causes lodging, stem borer, and leaf folder attacks).',
        'Pumping continuously without checking the 15 cm AWD pipe.',
        'Spraying chemicals early without scouting Beneficial Insects first.'
      ],
      ur: [
        'کٹائی کے بعد پرالی جلانا (غذائیت اور مفید جراثیم ضائع ہوتے ہیں اور سموگ بڑھتی ہے)۔',
        'زیادہ نائٹروجن/یوریا ڈالنا (فصل گرنے اور سنڈیوں کا حملہ بڑھتا ہے)۔',
        '15 cm اے ڈبلیو ڈی پائپ دیکھے بغیر مسلسل ٹیوب ویل چلانا۔',
        'فائدہ مند حشرات اور معائنے کے بغیر فوری سپرے کر دینا۔'
      ]
    },
    summary: {
      en: 'Use certified Basmati nurseries with compost, incorporate Sesbania green manure, save water with laser levelling + 15 cm AWD, avoid excess nitrogen, and chop straw instead of burning.',
      ur: 'تصدیق شدہ بیج اور کمپوسٹ پنیری استعمال کریں، سنبھالو سبز کھاد ڈالیں، 15 cm اے ڈبلیو ڈی اور لیولنگ سے پانی بچائیں، زیادہ یوریا سے بچیں اور پرالی نہ جلائیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Exact transplanting dates, approved Basmati variety names, nursery/DSR seed rates, exact spacing (cm), fertilizer NPK doses, and chemical spray rates — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: منتقلی کی حتمی تاریخیں، منظور شدہ اقسام، بیج کی مقدار، قطار/پودے کا درست فاصلہ، کیمیائی کھاد اور سپرے کی مقدار — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [4, 5, 6, 7, 8, 9, 10],
    nextRotationIds: [
      {
        targetId: 'wheat',
        badgeEn: 'Direct Zero-Till',
        badgeUr: 'زیرو ٹل بوائی',
        reasonEn: 'Sow wheat directly through chopped rice straw with a Happy Seeder / Zero-Till drill to save diesel and 1–2 irrigations.',
        reasonUr: 'چاول کی کتری پرالی میں ہیپی سیڈر یا زیرو ٹل ڈرل سے براہِ راست گندم بوئیں تاکہ ڈیزل اور 1–2 پانی بچیں۔'
      },
      {
        targetId: 'berseem',
        badgeEn: 'Winter Legume Fodder',
        badgeUr: 'سردیوں کا دال دار چارہ',
        reasonEn: 'Provides winter livestock fodder, fixes nitrogen, and breaks rice–wheat monoculture on part of the farm.',
        reasonUr: 'سردیوں کا چارہ دیتا ہے، نائٹروجن بناتا ہے اور چاول گندم کی یک فصلی کاشت توڑتا ہے۔'
      },
      {
        targetId: 'mustard',
        badgeEn: 'Winter Break Crop',
        badgeUr: 'سردیوں کی وقفہ فصل',
        reasonEn: 'Breaks cereal pest and weed cycles while diversifying farm income.',
        reasonUr: 'اجناس کے کیڑوں اور جڑی بوٹیوں کا چکر توڑتی اور آمدنی میں تنوع لاتی ہے۔'
      }
    ]
  },

  {
    id: 'wheat',
    num: 2,
    nameEn: 'Wheat',
    nameUr: 'گندم',
    scientificName: 'Triticum aestivum',
    seasonClass: 'rabi',
    seasonClassEn: 'Rabi',
    seasonClassUr: 'ربیع',
    photo: './images/crop-stages-cereals.jpg',
    photoGroup: 'cereals',
    diagramType: 'cereal',
    stageCaptions: {
      en: [
        'Stage 1 — Zero-Till Sowing (Nov): Happy Seeder places seed directly under 3–5 cm rice straw mulch.',
        'Stage 2 — Crown Root & Tillering: Critical early irrigations and split nitrogen near roots.',
        'Stage 3 — Flowering & Grain Filling: Timely November sowing helps grains finish before April heat stress.'
      ],
      ur: [
        'مرحلہ 1 — زیرو ٹل بوائی (نومبر): ہیپی سیڈر 3–5 cm پرالی کی ملچنگ کے نیچے بیج ڈالتا ہے۔',
        'مرحلہ 2 — جڑیں بننا اور پھوٹ: اہم مراحل پر آبپاشی اور جڑوں کے قریب قسطوں میں نائٹروجن۔',
        'مرحلہ 3 — پھول اور دانہ بھرنا: نومبر میں بروقت بوائی سے دانے اپریل کی گرمی سے بچ جاتے ہیں۔'
      ]
    },
    suitableSeason: {
      en: 'Rabi staple crop across Narowal plains and Shakargarh. Handbook notes recommended sowing generally in November, with timely sowing in the first half of November to avoid April heat stress at grain filling (Dec–Mar growth, Zaid follows in Apr–May). Unverified: exact variety-specific cut-off dates.',
      ur: 'نارووال اور شکرگڑھ کی اہم ربیع فصل۔ ہینڈ بک کے مطابق بوائی عموماً نومبر (خاص طور پر پہلے نصف میں بروقت بوائی) میں کی جاتی ہے تاکہ دانہ بھرتے وقت گرمی کے دباؤ سے بچا جا سکے۔ غیر تصدیق شدہ: ہر قسم کی حتمی تاریخیں۔'
    },
    landPrep: {
      en: 'Stop unnecessary passes: move from 6–8 passes down to 2–3, or use Zero Tillage (Happy Seeder / Zero-Till drill) directly into 3–5 cm chopped rice straw. Use a chisel plough occasionally for hard pans instead of inverting soil. Never work wet soil. Expect the surface to look messier in Year 1; soil structure improves from Year 2 onward.',
      ur: 'غیر ضروری ہل بند کریں: 6–8 ہل چلانے کے بجائے 2–3 پر آئیں یا چاول کی 3–5 cm پرالی میں ہیپی سیڈر / زیرو ٹل ڈرل سے بغیر ہل چلائے کاشت کریں۔ سخت تہہ کبھی کبھار چیزل ہل سے توڑیں، گیلی مٹی میں ہل نہ چلائیں۔'
    },
    seedSowing: {
      en: 'Use certified, recommended variety and treated seed sown with Happy Seeder or Zero-Till drill after rice. Unverified in handbook: exact variety names, seed rate (kg/acre), and seed treatment chemical doses — verify with the Punjab Agriculture Department.',
      ur: 'تصدیق شدہ سفارش کردہ قسم اور دوا لگا بیج چاول کے بعد ہیپی سیڈر یا زیرو ٹل ڈرل سے بوئیں۔ غیر تصدیق شدہ: منظور شدہ اقسام کے نام، فی ایکڑ بیج کی مقدار اور بیج کو دوا لگانے کی شرح — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact drill row-to-row spacing and plant spacing are NOT specified in the handbook. Verify recommended drill spacing and sowing depth with the Punjab Agriculture Department.',
      ur: 'ڈرل کی قطاروں یا پودوں کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Irrigate at critical growth stages rather than on a fixed calendar: 1) Crown root initiation, 2) Tillering, 3) Flowering, and 4) Grain filling. Zero-till wheat in straw mulch often saves 1 to 2 irrigations. Unverified in handbook: exact calendar days between irrigations or water depth per stage.',
      ur: 'مقررہ کیلنڈر کے بجائے اہم مراحل پر پانی دیں: 1) جڑیں بننے، 2) پھوٹ، 3) پھول، اور 4) دانہ بھرنے پر۔ پرالی کی ملچنگ میں زیرو ٹل گندم سے اکثر 1–2 آبپاشیاں بچ جاتی ہیں۔ غیر تصدیق شدہ: پانی دینے کی حتمی تاریخیں یا گہرائی۔'
    },
    nutrients: {
      en: 'Apply compost (2–4 tonnes/acre or 1 trolley/kanal) before sowing, base chemical doses on a Punjab Soil Lab test, split nitrogen into 2–3 applications near roots, and trial a 10–25% urea reduction once compost, legumes, and straw return are established. Check zinc deficiency. Unverified: exact kg/bag DAP, urea, or potash rates.',
      ur: 'بوائی سے پہلے کمپوسٹ (2–4 tonnes/acre یا 1 ٹرالی فی کنال) ڈالیں، مٹی ٹیسٹ کے مطابق کھاد رکھیں، نائٹروجن 2–3 قسطوں میں جڑوں کے قریب دیں، اور کمپوسٹ و دالوں کے ساتھ یوریا میں 10–25% کمی آزمائیں۔ غیر تصدیق شدہ: کیمیائی کھاد کی حتمی بوریوں کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Zero-till straw mulching and occasional crop rotation with chickpea, mustard, or berseem help suppress winter weeds. Weed early before seed set, rotate herbicide modes if used, and protect ladybirds and lacewings against aphids by avoiding needless early sprays. Unverified: specific rust fungicides or herbicide doses.',
      ur: 'زیرو ٹل ملچنگ اور چنا، سرسوں یا برسیم کے ساتھ ہیر پھیر جڑی بوٹیاں دباتا ہے۔ بیج بننے سے پہلے گوڈی کریں، دوا استعمال کریں تو گروپ بدلیں اور تیلا کھانے والے لیڈی برڈ کی حفاظت کریں۔ غیر تصدیق شدہ: زہر یا جڑی بوٹی مار دوا کی مقدار۔'
    },
    harvestStorage: {
      en: 'Save wheat straw (bhoosa) as animal feed/bedding or leave 3–5 cm mulch for summer cooling; store grain/seed reserves safely for household food security. Unverified: exact harvest moisture percentage and grain storage chemical doses.',
      ur: 'بھوسہ چارے یا 3–5 cm گرمائی ملچنگ کے لیے استعمال کریں اور گھر کے لیے بیج و اناج کا محفوظ ذخیرہ رکھیں۔ غیر تصدیق شدہ: کٹائی کی حتمی نمی اور گودام کی ادویات۔'
    },
    regenerativeRole: {
      en: 'Shifting Narowal wheat to Happy Seeder Zero Tillage stops rice-stubble burning, saves diesel and 1–2 tubewell irrigations, protects earthworms, and builds Soil Organic Matter steadily from Year 2 onward.',
      ur: 'نارووال میں گندم کو ہیپی سیڈر زیرو ٹل پر لانے سے پرالی جلانا بند ہوتا ہے، ڈیزل اور 1–2 آبپاشی بچتی ہے اور دوسرے سال سے مٹی کا نامیاتی مادہ بڑھتا ہے۔'
    },
    commonMistakes: {
      en: [
        'Making 6–8 ploughing/rotavator passes before sowing (burns Soil Organic Matter and builds a hard pan).',
        'Ploughing wet soil after rice harvest.',
        'Sowing late past mid-November, exposing grain filling to April heat.',
        'Throwing all nitrogen in one heavy dose.'
      ],
      ur: [
        'بوائی سے پہلے 6–8 بار ہل یا روٹاویٹر چلانا (نامیاتی مادہ ضائع اور سخت تہہ بنتی ہے)۔',
        'گیلی زمین میں ہل چلانا۔',
        'نومبر کے نصف کے بعد تاخیر سے بوائی کرنا جس سے اپریل کی گرمی نقصان پہنچاتی ہے۔',
        'ساری نائٹروجن ایک ہی قسط میں ڈال دینا۔'
      ]
    },
    summary: {
      en: 'Sow recommended treated seed with Happy Seeder in the first half of November, apply compost before sowing, split nitrogen, irrigate at 4 critical stages, and rotate occasionally with legumes or mustard.',
      ur: 'نومبر کے پہلے نصف میں ہیپی سیڈر سے تصدیق شدہ بیج بوئیں، کمپوسٹ اور قسطوں میں نائٹروجن دیں، 4 اہم مراحل پر پانی لگائیں اور دال یا سرسوں کے ساتھ ہیر پھیر کریں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Approved wheat variety names, exact seed rate (kg/acre), drill row spacing, exact NPK doses, and herbicide/fungicide rates — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: منظور شدہ اقسام، فی ایکڑ بیج کی مقدار، قطار کا فاصلہ، کھاد اور سپرے کی حتمی مقدار — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [10, 11, 0, 1, 2, 3],
    nextRotationIds: [
      {
        targetId: 'mung-bean',
        badgeEn: '55–65 Day Cash Legume',
        badgeUr: '55–65 دن کی نقد دال',
        reasonEn: 'Sow in the Zaid gap (April–May) right after wheat to earn cash and leave natural nitrogen before Basmati rice.',
        reasonUr: 'گندم کے بعد اپریل–مئی میں بوئیں؛ نقد آمدنی دیتی ہے اور چاول سے پہلے نائٹروجن چھوڑتی ہے۔'
      },
      {
        targetId: 'sesbania',
        badgeEn: '45–55 Day Green Manure',
        badgeUr: '45–55 دن سبز کھاد',
        reasonEn: 'Sow 20–25 kg/acre after wheat when irrigation is available; roll down 1–2 weeks before transplanting rice.',
        reasonUr: 'گندم کے بعد 20–25 kg/acre بوئیں اور چاول کی منتقلی سے 1–2 ہفتے پہلے دبا دیں۔'
      },
      {
        targetId: 'mustard',
        badgeEn: 'Next-Rabi Break Strip',
        badgeUr: 'اگلے ربیع میں وقفہ',
        reasonEn: 'In the following Rabi, put part of wheat land into mustard, canola, or chickpea to break pest and weed cycles.',
        reasonUr: 'اگلے ربیع میں زمین کے ایک حصے پر سرسوں، کینولا یا چنا لگا کر بیماریوں کا چکر توڑیں۔'
      }
    ]
  },

  {
    id: 'sugarcane',
    num: 3,
    nameEn: 'Sugarcane',
    nameUr: 'گنا',
    scientificName: 'Saccharum officinarum',
    seasonClass: 'multi',
    seasonClassEn: 'Kharif / Annual (Long Duration)',
    seasonClassUr: 'خریف / سالانہ',
    photo: './images/crop-stages-cereals.jpg',
    photoGroup: 'cereals',
    diagramType: 'cane',
    stageCaptions: {
      en: [
        'Stage 1 — Trench Planting + Intercrop: Plant disease-free setts in trenches; intercrop mung, mash, or onion early.',
        'Stage 2 — Trash Mulching & Trichogramma: Leave cane trash between rows for moisture; tie Trichogramma egg cards.',
        'Stage 3 — Maturity & Ratoon Care: Avoid heavy late nitrogen; keep healthy trash cover on ratoon plots.'
      ],
      ur: [
        'مرحلہ 1 — خندق/ڈولی بوائی اور بین الفصلی: بیماری سے پاک ٹکڑے لگائیں اور شروع میں مونگ، ماش یا پیاز بوئیں۔',
        'مرحلہ 2 — ٹریش ملچنگ اور ٹرائیکوگراما: نمی کے لیے قطاروں میں پتیاں بچھائیں اور Trichogramma کارڈ لگائیں۔',
        'مرحلہ 3 — پختگی اور ریٹون: آخر میں زیادہ نائٹروجن سے بچیں اور ریٹون میں پرانی پتیاں صرف بیماری کے خدشے پر ہٹائیں۔'
      ]
    },
    suitableSeason: {
      en: 'Major cash crop on Narowal irrigated plains grown across the year (fresh planted and ratoon). Exact district spring/autumn planting dates and recommended cane varieties are NOT stated in the handbook — verify with the Punjab Agriculture Department.',
      ur: 'نارووال کے سیراب میدانوں کی اہم نقد فصل (تازہ اور ریٹون)۔ بہار یا خزاں کی حتمی تاریخیں اور منظور شدہ اقسام ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Use laser land levelling and prepare trenches or ridges (trench or ridge planting method) rather than flat flood beds. Break hard pans occasionally with a chisel plough if needed, and ensure monsoon drainage on low pockets.',
      ur: 'لیزر لیولنگ کروائیں اور ہموار کیاریوں کے بجائے خندق یا ڈولی کا طریقہ اپنائیں۔ سخت تہہ کبھی کبھار چیزل ہل سے توڑیں اور مون سون میں نکاسی کا بندوبست رکھیں۔'
    },
    seedSowing: {
      en: 'Plant healthy, disease-free setts using the trench or ridge method. Intercrop early between wide rows with mung bean, mash bean, onion, or short vegetables for extra cash and soil cover. Unverified in handbook: exact sett count/bud rate per acre, fungicide sett dip, and approved variety names.',
      ur: 'صحت مند، بیماری سے پاک ٹکڑے خندق یا ڈولی میں لگائیں۔ ابتدائی مہینوں میں قطاروں کے درمیان مونگ، ماش، پیاز یا سبزیاں لگائیں۔ غیر تصدیق شدہ: فی ایکڑ بیج/آنکھوں کی تعداد، دوا لگانے کا طریقہ اور اقسام۔'
    },
    spacing: {
      en: 'Exact trench/ridge width and row-to-row spacing are NOT verified in the handbook. Confirm local trench spacing with the Punjab Agriculture Department.',
      ur: 'خندق یا ڈولی کی چوڑائی اور قطار کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Trench/ridge layout and trash mulching (leaving cane leaves/trash between rows) sharply cut soil evaporation and conserve irrigation water. Unverified in handbook: exact seasonal irrigation intervals and water depths.',
      ur: 'خندق یا ڈولی اور قطاروں کے درمیان گنے کی پتیوں (ٹریش ملچنگ) سے نمی محفوظ رہتی اور پانی بچتا ہے۔ غیر تصدیق شدہ: آبپاشیوں کی حتمی تعداد اور دنوں کا وقفہ۔'
    },
    nutrients: {
      en: 'Leave cane trash as mulch to feed Soil Organic Matter, add compost (2–4 tonnes/acre) at land prep and in ratoon crops, and AVOID heavy nitrogen late in the season. Unverified in handbook: exact NPK fertilizer rates.',
      ur: 'گنے کی پتیوں کی ملچنگ سے زمین کو نامیاتی مادہ ملتا ہے۔ تازہ اور ریٹون فصل میں کمپوسٹ ڈالیں اور موسم کے آخر میں زیادہ نائٹروجن دینے سے بچیں۔ غیر تصدیق شدہ: کیمیائی کھاد کی حتمی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Release Trichogramma chilonis egg cards against sugarcane borers; monitor fields twice weekly (10 plants/spot); use early intercrops + trash mulching to suppress weeds. In ratoon crops, remove old trash ONLY where disease is a concern. Unverified: specific borer chemical doses or red-rot treatments.',
      ur: 'سنڈیوں کے لیے ٹرائیکوگراما (Trichogramma chilonis) کارڈ چھوڑیں، ہفتہ وار معائنہ کریں، اور جڑی بوٹیاں دبانے کے لیے ٹریش ملچنگ و بین الفصلی کاشت کریں۔ ریٹون میں پرانی پتیاں صرف بیماری کے خدشے پر ہٹائیں۔ غیر تصدیق شدہ: کیمیائی ادویات کی مقدار۔'
    },
    harvestStorage: {
      en: 'Handbook highlights adding value by making clean jaggery (gur) rather than selling raw cane only, and saving clean disease-free setts. Unverified: exact mill-delivery maturity Brix or gur processing hygiene standards.',
      ur: 'خام گنا بیچنے کے بجائے صاف اور معیاری گڑ بنا کر قدر بڑھائی جا سکتی ہے، اور بیماری سے پاک بیج محفوظ کیا جا سکتا ہے۔ غیر تصدیق شدہ: شوگر مل مٹھاس (برکس) کی مقررہ حد۔'
    },
    regenerativeRole: {
      en: 'Trash mulching keeps soil cool below summer heat (preventing 50–60°C bare-soil baking), while early legume intercropping (mung/mash) adds nitrogen and protects the soil surface.',
      ur: 'ٹریش ملچنگ گرمیوں میں مٹی کو ٹھنڈا رکھتی ہے اور ابتدائی دالوں (مونگ/ماش) کی بین الفصلی کاشت نائٹروجن اور زمین کا ڈھکاؤ فراہم کرتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Burning cane trash after harvest instead of mulching between rows.',
        'Applying heavy nitrogen late in the season (lowers quality and increases pest pressure).',
        'Leaving wide rows bare for months instead of intercropping mung, mash, or onion.',
        'Using diseased seed setts from infected fields.'
      ],
      ur: [
        'کٹائی کے بعد گنے کی پتیاں قطاروں میں بچھانے کے بجائے جلا دینا۔',
        'موسم کے آخر میں زیادہ نائٹروجن ڈالنا۔',
        'شروع کے مہینوں میں قطاروں کے درمیان زمین خالی چھوڑ دینا۔',
        'بیمار کھیت سے بیج کے ٹکڑے استعمال کرنا۔'
      ]
    },
    summary: {
      en: 'Plant disease-free setts in trenches/ridges, intercrop early with mung/mash/vegetables, mulch rows with cane trash, use Trichogramma for borers, and avoid late excess nitrogen.',
      ur: 'بیماری سے پاک ٹکڑے خندق/ڈولی میں لگائیں، شروع میں مونگ/ماش/سبزیاں کاشت کریں، پتیوں کی ملچنگ کریں، سنڈی کے لیے ٹرائیکوگراما استعمال کریں اور آخر میں زیادہ نائٹروجن سے بچیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Exact spring/autumn planting dates, cane varieties, sett rate/acre, trench width/spacing, NPK rates, and irrigation calendar — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی حتمی تاریخیں، منظور شدہ اقسام، بیج کی تعداد، خندق کا فاصلہ، کھاد اور آبپاشی کا کیلنڈر — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    nextRotationIds: [
      {
        targetId: 'mung-bean',
        badgeEn: 'Early Intercrop',
        badgeUr: 'ابتدائی بین الفصلی',
        reasonEn: 'Intercrop mung bean in young sugarcane rows for extra cash, nitrogen, and weed-suppressing soil cover.',
        reasonUr: 'نئے گنے کی قطاروں میں مونگ لگا کر اضافی آمدنی، نائٹروجن اور جڑی بوٹیوں پر قابو پائیں۔'
      },
      {
        targetId: 'mash-bean',
        badgeEn: 'Early Intercrop',
        badgeUr: 'ابتدائی بین الفصلی',
        reasonEn: 'Mash bean fits early cane rows, fixes nitrogen, and adds household pulse income.',
        reasonUr: 'ماش گنے کے ابتدائی مہینوں میں نائٹروجن اور دال کی آمدنی دیتا ہے۔'
      },
      {
        targetId: 'vegetables',
        badgeEn: 'Onion & Veg Intercrop',
        badgeUr: 'پیاز اور سبزی کاشت',
        reasonEn: 'Handbook recommends intercropping onion or quick vegetables in early sugarcane rows.',
        reasonUr: 'ہینڈ بک کے مطابق گنے کے شروع میں پیاز یا سبزیاں منافع بخش بین الفصلی کاشت ہیں۔'
      }
    ]
  },

  {
    id: 'maize',
    num: 4,
    nameEn: 'Maize',
    nameUr: 'مکئی',
    scientificName: 'Zea mays',
    seasonClass: 'kharif',
    seasonClassEn: 'Kharif / Seasonal',
    seasonClassUr: 'خریف / موسمی',
    photo: './images/crop-stages-cereals.jpg',
    photoGroup: 'cereals',
    diagramType: 'maize',
    stageCaptions: {
      en: [
        'Stage 1 — Ridge/Bed Emergence: Plant on permanent beds or ridges where water control is difficult.',
        'Stage 2 — Whorl Scouting: Scout twice weekly (10 plants/spot) for Fall Armyworm early.',
        'Stage 3 — Cob Maturity & Rotation: Follow maize with Berseem/Wheat and Sesbania green manure.'
      ],
      ur: [
        'مرحلہ 1 — ڈولی/بیڈ پر اگاؤ: جہاں پانی کا کنٹرول مشکل ہو وہاں مستقل بیڈ یا ڈولیوں پر بوئیں۔',
        'مرحلہ 2 — کونپل کا معائنہ: فال آرمی ورم کے لیے ہفتے میں دو بار 10 پودے دیکھیں۔',
        'مرحلہ 3 — چھلی اور ہیر پھیر: مکئی کے بعد برسیم/گندم اور سنبھالو سبز کھاد لگائیں۔'
      ]
    },
    suitableSeason: {
      en: 'Grown in Narowal (including lighter soils and fodder/grain belts). Exact spring and autumn sowing dates and hybrid/OPV varieties are NOT listed in the handbook — confirm with the Punjab Agriculture Department.',
      ur: 'نارووال کی ہلکی زمینوں اور چارہ/دانہ کاشت میں موزوں۔ بہار یا خریف کی حتمی تاریخیں اور اقسام ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Use permanent beds or ridges where water control or Waterlogging is an issue; reduce tillage passes and avoid working wet soil.',
      ur: 'جہاں پانی کھڑا ہونے یا آبپاشی کا مسئلہ ہو وہاں مستقل بیڈ یا ڈولیاں بنائیں؛ غیر ضروری ہل کم کریں اور گیلی مٹی میں کام نہ کریں۔'
    },
    seedSowing: {
      en: 'Sow clean certified seed on ridges/beds after compost preparation. Unverified in handbook: exact variety/hybrid selection, seed rate (kg/acre), and exact sowing dates — confirm with the Punjab Agriculture Department.',
      ur: 'کمپوسٹ والی تیاری کے بعد ڈولیوں یا بیڈ پر صاف تصدیق شدہ بیج بوئیں۔ غیر تصدیق شدہ: اقسام/ہائبرڈ، بیج کی مقدار اور تاریخیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact ridge width and plant-to-plant spacing are NOT specified in the handbook. Verify recommended maize spacing with the Punjab Agriculture Department.',
      ur: 'ڈولی اور پودوں کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Permanent beds or furrow irrigation prevent Waterlogging of young maize roots and improve drainage during monsoon showers. Unverified in handbook: exact irrigation schedule and critical day intervals.',
      ur: 'مستقل بیڈ یا کھال کی آبپاشی سے مکئی کی جڑوں کے پاس پانی کھڑا نہیں ہوتا اور مون سون میں نکاسی آسان رہتی ہے۔ غیر تصدیق شدہ: آبپاشی کا حتمی شیڈول۔'
    },
    nutrients: {
      en: 'Handbook highlights that maize responds strongly to compost (2–4 tonnes/acre) and legume Crop Rotation (`Maize → Berseem/Wheat → Sesbania green manure`). Split nitrogen based on soil lab tests. Unverified: exact NPK bag doses.',
      ur: 'ہینڈ بک کے مطابق مکئی کمپوسٹ (2–4 tonnes/acre) اور دالوں کے ہیر پھیر سے بہترین جواب دیتی ہے۔ مٹی ٹیسٹ کے مطابق نائٹروجن قسطوں میں دیں۔ غیر تصدیق شدہ: کیمیائی کھاد کی حتمی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Watch Fall Armyworm (Spodoptera frugiperda) early! Scout twice weekly (check 10 plants/spot), install pheromone traps, protect Beneficial Insects (ladybirds, lacewings, birds), and use targeted biological controls like neem extract or Bacillus thuringiensis (Bt) when needed. Unverified: exact registered chemical rates.',
      ur: 'فال آرمی ورم (Spodoptera frugiperda) پر شروع ہی سے نظر رکھیں! ہفتے میں دو بار 10 پودوں کا معائنہ کریں، فیرومون ٹریپ لگائیں، فائدہ مند حشرات بچائیں اور ضرورت پر نیم یا بیسیلس تھورنجنسس استعمال کریں۔ غیر تصدیق شدہ: کیمیائی سپرے کی مقدار۔'
    },
    harvestStorage: {
      en: 'Use maize stalks/stover as livestock feed and bedding, then compost and return to the soil instead of burning. Unverified: exact grain harvest moisture and storage treatment rates.',
      ur: 'مکئی کا ٹانڈہ جانوروں کے چارے اور بچھونے میں استعمال کر کے کمپوسٹ بنا کر واپس زمین میں ڈالیں۔ غیر تصدیق شدہ: دانہ ذخیرہ کرنے کی حتمی نمی و ادویات۔'
    },
    regenerativeRole: {
      en: 'Anchors diversified light-soil and fodder rotations (`Maize → Berseem/Wheat → Sesbania`) that break continuous rice–wheat monoculture and feed farm livestock.',
      ur: 'ہلکی زمینوں اور چارے کی متنوع ترتیب (مکئی ← برسیم/گندم ← سنبھالو) میں اہم کردار ادا کرتی ہے اور چاول گندم کی یک فصلی کاشت توڑتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Missing early Fall Armyworm damage inside young whorls by not scouting twice weekly.',
        'Planting flat in flood-prone or poorly drained plots instead of ridges/beds.',
        'Skipping compost and legume rotation.'
      ],
      ur: [
        'ہفتہ وار معائنہ نہ کرنے کی وجہ سے فال آرمی ورم کا حملہ تاخیر سے پکڑنا۔',
        'ناہموار یا نشیبی کھیت میں ڈولیوں کے بغیر بوائی کرنا۔',
        'کمپوسٹ اور دال والی فصل شامل نہ کرنا۔'
      ]
    },
    summary: {
      en: 'Grow on beds/ridges where drainage is tight, feed with compost and legume rotations, and scout twice weekly for Fall Armyworm using traps and targeted IPM.',
      ur: 'پانی کے کنٹرول کے لیے بیڈ/ڈولیوں پر لگائیں، کمپوسٹ اور دال کی ہیر پھیر استعمال کریں اور فال آرمی ورم کے لیے ہفتہ وار معائنہ و ٹریپ اپنائیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Exact spring/autumn sowing dates, hybrid/OPV varieties, seed rate, plant spacing, NPK doses, and registered insecticide rates — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی حتمی تاریخیں، اقسام، بیج کی مقدار، پودوں کا فاصلہ، کھاد اور کیڑے مار دوا کی شرح — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [2, 3, 4, 6, 7, 8, 9],
    nextRotationIds: [
      {
        targetId: 'berseem',
        badgeEn: 'Handbook Rotation',
        badgeUr: 'ہینڈ بک ترتیب',
        reasonEn: 'Recommended light-soil & fodder rotation: Maize → Berseem fixes nitrogen and supplies winter dairy fodder.',
        reasonUr: 'مکئی کے بعد برسیم ہلکی زمین اور سردیوں کے چارے کے لیے بہترین ہیر پھیر ہے۔'
      },
      {
        targetId: 'wheat',
        badgeEn: 'Rabi Cereal',
        badgeUr: 'ربیع اناج',
        reasonEn: 'Maize → Wheat → Sesbania green manure keeps roots active across seasons.',
        reasonUr: 'مکئی ← گندم ← سنبھالو سبز کھاد سال بھر جڑوں کو متحرک رکھتی ہے۔'
      },
      {
        targetId: 'chickpea',
        badgeEn: 'Winter Legume',
        badgeUr: 'سردیوں کی دال',
        reasonEn: 'Legume follow-up helps reach the 25% annual legume target.',
        reasonUr: 'سالانہ 25% دال والی فصلوں کا ہدف پورا کرنے میں مددگار ہے۔'
      }
    ]
  },

  {
    id: 'sorghum',
    num: 5,
    nameEn: 'Sorghum',
    nameUr: 'جوار',
    scientificName: 'Sorghum bicolor',
    seasonClass: 'kharif',
    seasonClassEn: 'Kharif (Rainfed & Fodder)',
    seasonClassUr: 'خریف (بارانی اور چارہ)',
    photo: './images/crop-stages-cereals.jpg',
    photoGroup: 'cereals',
    diagramType: 'cereal',
    stageCaptions: {
      en: [
        'Stage 1 — Across-Slope Sowing: Sow across slopes on Shakargarh rainfed land; mix with cowpea for richer fodder.',
        'Stage 2 — Deep Root Growth: Deep roots access moisture in dry periods and tolerate moderate soil salinity.',
        'Stage 3 — Fodder Cut / Grain Harvest: Feed livestock to reduce expensive feed purchases; follow with chickpea or lentil.'
      ],
      ur: [
        'مرحلہ 1 — ڈھلوان کے آر پار بوائی: شکرگڑھ کی بارانی زمین میں ڈھلوان کے آر پار بوئیں اور لوبیا ملائیں۔',
        'مرحلہ 2 — گہری جڑیں: گہری جڑیں خشک موسم میں نمی پکڑتی ہیں اور ہلکی شوریت برداشت کرتی ہیں۔',
        'مرحلہ 3 — چارہ یا دانہ کٹائی: مویشیوں کی مہنگی فیڈ کم کریں اور بعد میں چنا یا مسور لگائیں۔'
      ]
    },
    suitableSeason: {
      en: 'Kharif fodder and dryland crop especially valuable in Narowal’s northern rainfed Shakargarh belt and on moderately saline pockets. Unverified in handbook: exact sowing dates and local varieties — confirm with the Punjab Agriculture Department.',
      ur: 'شکرگڑھ کی بارانی پٹی اور ہلکی شور زمینوں کے لیے نہایت موزوں خریف چارہ و فصل۔ غیر تصدیق شدہ: بوائی کی حتمی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'On sloping rainfed land (Shakargarh belt), plough and sow ACROSS the slope, keep field bunds to harvest monsoon rain, and leave grass strips along contours to stop soil erosion.',
      ur: 'شکرگڑھ کی ڈھلوان بارانی زمین پر ہل اور بوائی ڈھلوان کے آر پار کریں، بارش روکنے کے لیے بند بنائیں اور کٹاؤ روکنے کو کنٹور پر گھاس کی پٹیاں رکھیں۔'
    },
    seedSowing: {
      en: 'Handbook recommends growing mixed fodder of Sorghum + Cowpea (`Sorghum bicolor` + `Vigna unguiculata`). Unverified in handbook: exact single or mixed seed rate (kg/acre) and variety names — verify with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک کے مطابق جوار کے ساتھ لوبیا ملا کر ملا جلا چارہ اگائیں۔ غیر تصدیق شدہ: بیج کی حتمی مقدار اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact row and plant spacing are NOT verified in the handbook. Confirm fodder vs. grain spacing with the Punjab Agriculture Department.',
      ur: 'قطاروں اور پودوں کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Deep roots handle dry rainfed spells well and tolerate moderately saline soils alongside proper drainage and gypsum (check EC/pH first; never irrigate with saline tubewell water without advice). Unverified: exact irrigation schedule for irrigated plots.',
      ur: 'گہری جڑیں خشک موسم اور درمیانی شوریت برداشت کر لیتی ہیں۔ اگر کھارا پن ہو تو EC اور pH ٹیسٹ کروائیں اور مشورے کے بغیر کھارا ٹیوب ویل نہ لگائیں۔ غیر تصدیق شدہ: آبپاشی کا حتمی شیڈول۔'
    },
    nutrients: {
      en: 'Mixing cowpea fixes natural nitrogen alongside farmyard manure/compost from livestock. Unverified: exact fertilizer rates per acre.',
      ur: 'ساتھ لوبیا ملانے سے قدرتی نائٹروجن بنتی ہے اور مویشیوں کی کھاد مٹی کو طاقت دیتی ہے۔ غیر تصدیق شدہ: کیمیائی کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Mixed sorghum + cowpea shades the soil and suppresses weeds; scout twice weekly (10 plants/spot) and protect Beneficial Insects. Unverified: exact stem borer/shoot fly controls or harvest days.',
      ur: 'جوار اور لوبیا کی مخلوط فصل زمین ڈھانپ کر جڑی بوٹیاں دباتی ہے؛ ہفتہ وار معائنہ اور فائدہ مند حشرات کی حفاظت کریں۔ غیر تصدیق شدہ: کیڑوں کی دوا کی مقدار۔'
    },
    harvestStorage: {
      en: 'Keep reserves of fodder and seed to protect livestock during droughts or floods. Unverified in handbook: exact prussic acid/cutting-stage safety timing and silage steps — confirm with the Punjab Agriculture Department and livestock officers.',
      ur: 'خشک سالی یا سیلاب کے لیے چارے اور بیج کا ذخیرہ رکھیں۔ غیر تصدیق شدہ: کٹائی کے مرحلے کی حفاظتی مدت — محکمہ زراعت و لائیو سٹاک سے تصدیق کریں۔'
    },
    regenerativeRole: {
      en: 'Essential anchor for rainfed Shakargarh erosion control, livestock fodder self-reliance (cutting feed bills), and moderately saline soil recovery.',
      ur: 'شکرگڑھ کی بارانی زمین کو کٹاؤ سے بچانے، مہنگی فیڈ کم کرنے اور ہلکی شور زمین کی بحالی میں بنیادی کردار ادا کرتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Ploughing up and down slopes in Shakargarh (causes severe rainwater gullying).',
        'Sowing sole fodder without mixing nitrogen-fixing cowpea.',
        'Irrigating saline patches blindly with saline tubewell water.'
      ],
      ur: [
        'شکرگڑھ میں ڈھلوان کے رخ ہل چلانا جس سے بارش مٹی بہا لے جاتی ہے۔',
        'بغیر لوبیا ملائے اکیلا چارہ بونا۔',
        'مشورے کے بغیر کھارے ٹیوب ویل سے آبپاشی کرنا۔'
      ]
    },
    summary: {
      en: 'Sow across slopes in rainfed Shakargarh, mix with cowpea for nutritious livestock fodder, and follow with winter chickpea, lentil, or mustard.',
      ur: 'بارانی شکرگڑھ میں ڈھلوان کے آر پار بوئیں، غذائیت کے لیے لوبیا ملائیں اور اس کے بعد چنا، مسور یا سرسوں لگائیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Exact sowing dates, fodder/grain varieties, seed rate (kg/acre), cutting-stage safety rules, and fertilizer rates — verify with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی تاریخیں، اقسام، بیج کی مقدار، کٹائی کی احتیاط اور کھاد کی شرح — محکمہ زراعت و لائیو سٹاک پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [5, 6, 7, 8, 9],
    nextRotationIds: [
      {
        targetId: 'chickpea',
        badgeEn: 'Shakargarh Rainfed',
        badgeUr: 'شکرگڑھ بارانی ترتیب',
        reasonEn: 'Handbook rainfed pattern: Sorghum → Chickpea uses deep residual moisture and adds legume nitrogen.',
        reasonUr: 'ہینڈ بک کی بارانی ترتیب: جوار ← چنا بچ جانے والی نمی استعمال کرتا اور نائٹروجن بناتا ہے۔'
      },
      {
        targetId: 'lentil',
        badgeEn: 'Rainfed Pulse',
        badgeUr: 'بارانی دال',
        reasonEn: 'Handbook rainfed pattern: Sorghum → Lentil suits drier soils and builds family nutrition.',
        reasonUr: 'جوار کے بعد مسور خشک زمین میں اچھا چلتا اور گھر کی غذائیت بڑھاتا ہے۔'
      },
      {
        targetId: 'mustard',
        badgeEn: 'Rainfed Oilseed',
        badgeUr: 'بارانی تیل دار',
        reasonEn: 'Mustard after sorghum thrives on lighter Shakargarh soils and diversifies income.',
        reasonUr: 'جوار کے بعد سرسوں ہلکی زمینوں میں خوب چلتی ہے۔'
      }
    ]
  },

  {
    id: 'berseem',
    num: 6,
    nameEn: 'Berseem',
    nameUr: 'برسیم',
    scientificName: 'Trifolium alexandrinum',
    seasonClass: 'rabi',
    seasonClassEn: 'Rabi (Winter Fodder & Cover Crop)',
    seasonClassUr: 'ربیع (سردیوں کا چارہ و کور کراپ)',
    photo: './images/crop-stages-pulses-fodder.jpg',
    photoGroup: 'pulses',
    diagramType: 'berseem',
    stageCaptions: {
      en: [
        'Stage 1 — Winter Emergence: Fixes nitrogen and covers bare soil through cool Narowal winters.',
        'Stage 2 — Multiple Fodder Cuts: Supplies lush green feed for buffalo, cattle, and goats.',
        'Stage 3 — Final Cut Green Manure: Let one extra cutting go back into the soil to raise Soil Organic Matter.'
      ],
      ur: [
        'مرحلہ 1 — سردیوں کا اگاؤ: زمین کو ڈھانپتا اور قدرتی نائٹروجن بناتا ہے۔',
        'مرحلہ 2 — چارے کی کٹائیاں: بھینس، گائے اور بکریوں کے لیے سبز چارہ فراہم کرتا ہے۔',
        'مرحلہ 3 — آخری کٹائی بطور سبز کھاد: اگر چارہ اضافی ہو تو ایک کٹائی زمین میں ملا دیں۔'
      ]
    },
    suitableSeason: {
      en: 'Rabi winter fodder and cover crop across Narowal (Handbook notes winter season & Oct–Nov Rabi sowing window). Unverified in handbook: exact sowing cut-off dates and certified varieties — verify with the Punjab Agriculture Department.',
      ur: 'نارووال میں سردیوں (ربیع) کا اہم چارہ اور کور کراپ۔ غیر تصدیق شدہ: بوائی کی حتمی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Level land cleanly for even shallow watering; fits smoothly after maize or as a rotational break after rice.',
      ur: 'یکساں پانی کے لیے زمین ہموار کریں؛ مکئی کے بعد یا چاول کے بعد ہیر پھیر میں خوب جمتا ہے۔'
    },
    seedSowing: {
      en: 'Use clean seed and apply fresh certified Rhizobium inoculant where needed for strong nitrogen fixation. Unverified in handbook: exact seed rate (kg/acre) and variety names — verify with the Punjab Agriculture Department.',
      ur: 'صاف بیج استعمال کریں اور نائٹروجن بنانے کے لیے تازہ Rhizobium ٹیکہ لگائیں۔ غیر تصدیق شدہ: فی ایکڑ بیج کی مقدار اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Typically sown densely as broadcast/fodder stand; exact spacing or seed-drill row spacing is NOT verified in the handbook.',
      ur: 'چارے کے لیے گھنی بوائی ہوتی ہے؛ قطار یا پودے کا کوئی درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Tolerates moderately saline soils as part of a reclamation plan alongside drainage and gypsum. Unverified in handbook: exact irrigation timing after sowing and between cuttings — verify with the Punjab Agriculture Department.',
      ur: 'بہتر نکاسی اور جپسم کے ساتھ درمیانی شور زمینوں میں بھی کامیاب ہے۔ غیر تصدیق شدہ: بوائی اور کٹائیوں کے درمیان آبپاشی کا وقفہ۔'
    },
    nutrients: {
      en: 'Berseem is a winter legume that fixes nitrogen naturally, cutting urea needs for the next crop. If fodder is surplus late in winter, plough/incorporate one cutting back into the soil as Green Manure. Unverified: exact phosphorus starter doses.',
      ur: 'برسیم قدرتی نائٹروجن بناتا ہے؛ اگر سردیوں کے آخر میں چارہ فالتو ہو تو ایک کٹائی زمین میں واپس ملا کر سبز کھاد بنا دیں۔ غیر تصدیق شدہ: فاسفورس کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Dense winter growth crowds out winter weeds; repeated cuts interrupt weed seed set. Scout twice weekly and protect Beneficial Insects. Unverified: specific clover pest/cuscuta controls.',
      ur: 'گھنی فصل سردیوں کی جڑی بوٹیوں کو دبا دیتی ہے اور کٹائیوں سے ان کا بیج نہیں بن پاتا۔ غیر تصدیق شدہ: مخصوص کیڑوں یا آکاس بیل کا علاج۔'
    },
    harvestStorage: {
      en: 'Provides multi-cut green winter fodder to reduce expensive purchased feed; excess cutting can go into soil or livestock bedding/compost loops. Unverified: exact number of cuttings or seed-crop harvest timing.',
      ur: 'متعدد کٹائیاں مہنگی فیڈ کا خرچ بچاتی ہیں؛ اضافی کٹائی زمین یا کمپوسٹ میں جا سکتی ہے۔ غیر تصدیق شدہ: کٹائیوں کی حتمی تعداد۔'
    },
    regenerativeRole: {
      en: 'Connects Narowal dairy livestock (buffalo/cattle/goats) to soil rebuilding: feeds animals, fixes nitrogen, suppresses weeds, and leaves rich organic matter when one cutting is turned in.',
      ur: 'نارووال کے مویشیوں کو مٹی بحالی سے جوڑتا ہے: چارہ دیتا ہے، نائٹروجن بناتا ہے اور ایک کٹائی زمین میں ملانے پر نامیاتی مادہ بڑھاتا ہے۔'
    },
    commonMistakes: {
      en: [
        'Leaving bare fallow instead of growing winter fodder/legume cover.',
        'Burning dung cakes from livestock fed on berseem instead of returning composted manure.',
        'Using expired or uncertified Rhizobium packs.'
      ],
      ur: [
        'سردیوں میں کھیت خالی چھوڑنا۔',
        'برسیم کھانے والے جانوروں کا سارا گوبر جلا کر کمپوسٹ نہ بنانا۔',
        'زائد المیعاد رائزوبیم ٹیکہ استعمال کرنا۔'
      ]
    },
    summary: {
      en: 'Winter legume fodder that cuts feed bills, fixes nitrogen, tolerates moderate salinity, and boosts soil fertility when one extra cutting is returned to the ground.',
      ur: 'سردیوں کا دال دار چارہ جو فیڈ کا خرچ کم کرتا ہے، نائٹروجن بناتا ہے اور اضافی کٹائی زمین میں ملانے پر زرخیزی بڑھاتا ہے۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Exact sowing dates, varieties, seed rate (kg/acre), cutting schedule, and phosphorus fertilizer rate — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی تاریخیں، اقسام، بیج کی مقدار، کٹائیوں کا وقفہ اور فاسفورس کی مقدار — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [9, 10, 11, 0, 1, 2, 3],
    nextRotationIds: [
      {
        targetId: 'sesbania',
        badgeEn: 'Summer Green Manure',
        badgeUr: 'گرمائی سبز کھاد',
        reasonEn: 'Handbook pattern (`Maize → Berseem → Sesbania`): keeps living roots active before rice or maize.',
        reasonUr: 'برسیم کے بعد سنبھالو سبز کھاد زمین میں نامیاتی مادہ مزید بڑھاتی ہے۔'
      },
      {
        targetId: 'basmati-rice',
        badgeEn: 'Lower Urea Rice',
        badgeUr: 'کم یوریا چاول',
        reasonEn: 'Ploughing the last berseem cutting under leaves nitrogen that helps reduce rice urea bills.',
        reasonUr: 'برسیم کی آخری کٹائی زمین میں دبانے سے چاول میں یوریا کی ضرورت کم ہو جاتی ہے۔'
      },
      {
        targetId: 'maize',
        badgeEn: 'Kharif Grain/Fodder',
        badgeUr: 'خریف مکئی',
        reasonEn: 'Maize thrives on the nitrogen and organic structure left by winter berseem.',
        reasonUr: 'برسیم کی چھوڑی ہوئی نائٹروجن اور نرم مٹی پر مکئی بہت اچھی ہوتی ہے۔'
      }
    ]
  },

  {
    id: 'mung-bean',
    num: 7,
    nameEn: 'Mung Bean',
    nameUr: 'مونگ',
    scientificName: 'Vigna radiata',
    seasonClass: 'zaid',
    seasonClassEn: 'Zaid / Summer Gap (also Kharif)',
    seasonClassUr: 'زائد / گرمائی خلا (اور خریف)',
    photo: './images/crop-stages-pulses-fodder.jpg',
    photoGroup: 'pulses',
    diagramType: 'pulses',
    stageCaptions: {
      en: [
        'Stage 1 — Post-Wheat Sowing (Apr–May): Short 55–65 day crop inoculated with Rhizobium.',
        'Stage 2 — Root Nodules & Canopy: Covers hot soil and fixes atmospheric nitrogen naturally.',
        'Stage 3 — Pod Harvest (Before Rice): Earns cash and leaves nitrogen + mulch behind for Basmati.'
      ],
      ur: [
        'مرحلہ 1 — گندم کے بعد بوائی (اپریل–مئی): رائزوبیم ٹیکے کے ساتھ 55–65 دن کی مختصر فصل۔',
        'مرحلہ 2 — جڑوں میں گانٹھیں اور ڈھکاؤ: گرمی میں مٹی ڈھانپتی اور نائٹروجن بناتی ہے۔',
        'مرحلہ 3 — پھلیوں کی کٹائی: نقد آمدنی دیتی ہے اور چاول سے پہلے نائٹروجن و باقیات چھوڑتی ہے۔'
      ]
    },
    suitableSeason: {
      en: 'Verified in handbook as a 55 to 65 day Zaid summer-gap crop sown in April–May right after wheat harvest before rice, OR as an early intercrop in sugarcane and young orchards. Pick varieties recommended for Punjab (specific variety names & Kharif dates unverified — confirm with Punjab Agriculture Department).',
      ur: 'ہینڈ بک کے مطابق گندم کی کٹائی کے بعد اپریل–مئی (زائد) میں 55 سے 65 دن کی فصل، یا گنے اور نئے باغات میں ابتدائی بین الفصلی کاشت۔ پنجاب کے لیے منظور شدہ اقسام محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Keep soil cover and minimal disturbance after wheat harvest; also fits easily between young sugarcane trenches/ridges.',
      ur: 'گندم کے بعد کم ہل اور باقیات کے ساتھ کاشت کریں؛ گنے کی خندقوں/ڈولیوں کے درمیان بھی باآسانی اگتی ہے۔'
    },
    seedSowing: {
      en: 'Pick varieties recommended for Punjab and treat seed with fresh, certified Rhizobium inoculant (within expiry date) to boost nitrogen fixation. Unverified in handbook: exact seed rate (kg/acre) and variety names — verify with the Punjab Agriculture Department.',
      ur: 'پنجاب کے لیے منظور شدہ اقسام چنیں اور نائٹروجن کے لیے تصدیق شدہ Rhizobium ٹیکہ تاریخِ تنسیخ کے اندر لگائیں۔ غیر تصدیق شدہ: فی ایکڑ بیج کی مقدار اور اقسام۔'
    },
    spacing: {
      en: 'Exact row-to-row and plant-to-plant spacing are NOT verified in the handbook. Verify recommended pulse spacing with the Punjab Agriculture Department.',
      ur: 'قطار اور پودوں کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Summer mung covers topsoil from 50–60°C heat and cuts evaporation. Unverified in handbook: exact irrigation timings during the 55–65 day Zaid window.',
      ur: 'گرمائی مونگ مٹی کو 50–60°C گرمی سے بچا کر بخارات کم کرتی ہے۔ غیر تصدیق شدہ: 55–65 دن کے دوران آبپاشی کی حتمی تاریخیں۔'
    },
    nutrients: {
      en: 'Fixes natural nitrogen via Rhizobium root nodules—helping achieve the 25% annual legume target and lowering urea needs for following rice. Unverified: exact basal phosphorus rate.',
      ur: 'رائزوبیم گانٹھوں سے قدرتی نائٹروجن بناتی ہے جو اگلی چاول کی فصل میں یوریا کم کرنے میں مدد دیتی ہے۔ غیر تصدیق شدہ: فاسفورس کی حتمی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Fast ground cover suppresses summer weeds; scout twice weekly (10 plants/spot), protect ladybirds/lacewings, use yellow sticky/pheromone traps, or homemade neem spray (~1 kg per 10 L water) if pests reach threshold. Unverified: chemical spray rates or yellow mosaic virus-resistant variety names.',
      ur: 'تیزی سے پھیل کر جڑی بوٹیاں دباتی ہے؛ ہفتہ وار 10 پودوں کا معائنہ کریں، فائدہ مند حشرات بچائیں اور ضرورت پر ٹریپ یا نیم کا سپرے استعمال کریں۔ غیر تصدیق شدہ: کیمیائی دوا کی مقدار اور وائرس سے محفوظ اقسام۔'
    },
    harvestStorage: {
      en: 'Clean, graded pulses earn higher market prices than raw ungraded grain; return mung residue to soil as mulch. Unverified: exact pod picking stages and bruchid storage protection.',
      ur: 'صاف اور درجہ بند مونگ خام جنس سے زیادہ منافع دیتی ہے؛ باقیات مٹی میں چھوڑ دیں۔ غیر تصدیق شدہ: چنائی اور گودام تحفظ کی حتمی مقدار۔'
    },
    regenerativeRole: {
      en: 'Turns a bare, sun-baked 2-month summer gap between wheat and rice into cash income, living roots, natural nitrogen, and soil cooling—and gives tenants fast payback.',
      ur: 'گندم اور چاول کے درمیان دو ماہ کی تپتی خالی زمین کو نقد آمدنی، زندہ جڑوں، قدرتی نائٹروجن اور مٹی کی ٹھنڈک میں بدل دیتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Leaving fields bare in May–June after wheat instead of planting mung or sesbania.',
        'Skipping fresh Rhizobium inoculation.',
        'Burning mung residue instead of keeping mulch before rice.'
      ],
      ur: [
        'گندم کے بعد مئی–جون میں کھیت خالی چھوڑنا۔',
        'تازہ رائزوبیم ٹیکہ نہ لگانا۔',
        'پھلیاں اتارنے کے بعد باقیات مٹی میں رکھنے کے بجائے جلا دینا۔'
      ]
    },
    summary: {
      en: 'A 55–65 day Zaid legume after wheat (or sugarcane intercrop) inoculated with Rhizobium that earns cash, cools soil, and leaves nitrogen for rice.',
      ur: 'گندم کے بعد 55–65 دن کی دال جو رائزوبیم کے ساتھ نقد آمدنی دیتی ہے، مٹی ٹھنڈی رکھتی ہے اور چاول کے لیے نائٹروجن چھوڑتی ہے۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Approved Punjab mung variety names, exact seed rate (kg/acre), row spacing, irrigation schedule, and fertilizer/pest spray rates — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: منظور شدہ اقسام، بیج کی مقدار، قطار کا فاصلہ، آبپاشی کا شیڈول اور کھاد/سپرے کی شرح — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [3, 4, 5, 6],
    nextRotationIds: [
      {
        targetId: 'basmati-rice',
        badgeEn: 'Core Narowal Rotation',
        badgeUr: 'نارووال کی بہترین ترتیب',
        reasonEn: 'Handbook sequence (`Basmati rice → Wheat → Mung bean`): rice benefits from residual mung nitrogen.',
        reasonUr: 'باسمتی چاول ← گندم ← مونگ کی ترتیب میں چاول کو مونگ کی چھوڑی نائٹروجن ملتی ہے۔'
      },
      {
        targetId: 'maize',
        badgeEn: 'Kharif Follow-up',
        badgeUr: 'خریف مکئی',
        reasonEn: 'Maize responds strongly when grown after a nitrogen-fixing pulse.',
        reasonUr: 'دال والی فصل کے بعد مکئی بہترین پیداوار دیتی ہے۔'
      }
    ]
  },

  {
    id: 'mash-bean',
    num: 8,
    nameEn: 'Mash Bean',
    nameUr: 'ماش',
    scientificName: 'Vigna mungo',
    seasonClass: 'kharif',
    seasonClassEn: 'Kharif / Intercrop',
    seasonClassUr: 'خریف / بین الفصلی',
    photo: './images/crop-stages-pulses-fodder.jpg',
    photoGroup: 'pulses',
    diagramType: 'pulses',
    stageCaptions: {
      en: [
        'Stage 1 — Kharif / Cane Intercrop: Sow with Rhizobium inoculation as sole crop or between young sugarcane rows.',
        'Stage 2 — Living Soil Cover: Broad leaves shade soil and build nitrogen nodules.',
        'Stage 3 — Pod Maturity: Harvest cash pulse and keep residue on field for Soil Organic Matter.'
      ],
      ur: [
        'مرحلہ 1 — خریف یا گنے میں کاشت: رائزوبیم ٹیکے کے ساتھ اکیلی یا گنے کی قطاروں میں بوائی۔',
        'مرحلہ 2 — مٹی کا ڈھکاؤ: پتے زمین ڈھانپتے اور جڑیں نائٹروجن بناتی ہیں۔',
        'مرحلہ 3 — پھلی کی کٹائی: نقد آمدنی اور مٹی کے نامیاتی مادے کے لیے باقیات۔'
      ]
    },
    suitableSeason: {
      en: 'Kharif pulse crop and early sugarcane intercrop in Narowal. Exact district sowing dates and approved varieties are NOT stated in the handbook — confirm with the Punjab Agriculture Department.',
      ur: 'نارووال کی خریف دال اور گنے کے شروع میں بہترین بین الفصلی فصل۔ حتمی تاریخیں اور اقسام ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Requires good drainage (use ridges/beds on low pockets to avoid Waterlogging) or plant between young sugarcane trenches.',
      ur: 'نشیبی زمینوں میں نکاسی یا ڈولیاں بنائیں تاکہ پانی کھڑا نہ ہو، یا نئے گنے کے درمیان بوئیں۔'
    },
    seedSowing: {
      en: 'Use clean seed inoculated with fresh certified Rhizobium bacteria. Unverified in handbook: exact seed rate (kg/acre), sowing dates, and variety names — verify with the Punjab Agriculture Department.',
      ur: 'صاف بیج کو تازہ تصدیق شدہ Rhizobium ٹیکہ لگا کر بوئیں۔ غیر تصدیق شدہ: بیج کی مقدار، بوائی کی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact row-to-row and plant spacing are NOT verified in the handbook. Verify with the Punjab Agriculture Department.',
      ur: 'قطار اور پودے کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Avoid Waterlogging during July–September monsoon rains; keep drains clear before monsoon. Unverified: exact irrigation intervals.',
      ur: 'جولائی–ستمبر مون سون میں زمین میں پانی کھڑا ہونے (Waterlogging) سے بچائیں اور نالیاں صاف رکھیں۔ غیر تصدیق شدہ: آبپاشی کا شیڈول۔'
    },
    nutrients: {
      en: 'Fixes nitrogen with Rhizobium inoculation and counts toward the >= 25% annual legume land goal. Unverified: exact starter phosphorus rates.',
      ur: 'رائزوبیم کے ذریعے نائٹروجن بناتی ہے اور زمین کے کم از کم 25% حصے پر دال کے ہدف میں شامل ہے۔ غیر تصدیق شدہ: کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Scout twice weekly (10 plants/spot), protect ladybirds and lacewings, use yellow sticky traps or neem spray where needed. Unverified: specific pesticide rates.',
      ur: 'ہفتہ وار 10 پودوں کا معائنہ کریں، فائدہ مند حشرات بچائیں اور ضرورت پر زرد کارڈ یا نیم استعمال کریں۔ غیر تصدیق شدہ: کیمیائی دوا کی شرح۔'
    },
    harvestStorage: {
      en: 'Clean and grade pulse grain for higher market returns; keep residue on soil. Unverified: exact harvest/storage moisture & beetle control.',
      ur: 'صاف اور درجہ بند دال بہتر قیمت دلاتی ہے؛ باقیات مٹی میں رہنے دیں۔ غیر تصدیق شدہ: ذخیرہ اندوزی کی حتمی شرائط۔'
    },
    regenerativeRole: {
      en: 'Adds nitrogen, spreads farm market risk, and gives cash + living mulch inside young sugarcane orchards/trenches.',
      ur: 'نائٹروجن بناتی ہے، منڈی کا خطرہ بانٹتی ہے اور گنے میں نقد آمدنی کے ساتھ مٹی ڈھانپتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Planting mash on poorly drained low clay pockets without ridges.',
        'Skipping Rhizobium inoculation.',
        'Spraying harsh chemicals early that kill beneficial predators.'
      ],
      ur: [
        'پانی کھڑا ہونے والی نشیبی زمین میں بغیر نکاسی بونا۔',
        'رائزوبیم ٹیکہ نہ لگانا۔',
        'ابتدائی مرحلے میں تیز زہر سے دوست حشرات مار دینا۔'
      ]
    },
    summary: {
      en: 'Valuable Kharif legume and sugarcane intercrop that builds soil with Rhizobium and earns pulse cash.',
      ur: 'خریف اور گنے کی بین الفصلی دال جو رائزوبیم سے زمین بناتی اور نقد آمدنی دیتی ہے۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Sowing dates, variety names, seed rate (kg/acre), row spacing, fertilizer doses, and pest spray rates — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی تاریخیں، اقسام، بیج کی مقدار، قطار کا فاصلہ اور کھاد/سپرے کی شرح — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [6, 7, 8, 9],
    nextRotationIds: [
      {
        targetId: 'wheat',
        badgeEn: 'Rabi Cereal',
        badgeUr: 'ربیع گندم',
        reasonEn: 'Wheat following a nitrogen-fixing legume benefits from improved soil health and lower disease carryover.',
        reasonUr: 'دال کے بعد گندم صحت مند زمین اور کم بیماری کے دباؤ کا فائدہ اٹھاتی ہے۔'
      },
      {
        targetId: 'mustard',
        badgeEn: 'Winter Oilseed',
        badgeUr: 'سردیوں کی سرسوں',
        reasonEn: 'Breaks cereal cycles completely on light or rainfed land.',
        reasonUr: 'ہلکی یا بارانی زمین پر اجناس کا چکر مکمل طور پر توڑتی ہے۔'
      }
    ]
  },

  {
    id: 'chickpea',
    num: 9,
    nameEn: 'Chickpea',
    nameUr: 'چنا',
    scientificName: 'Cicer arietinum',
    seasonClass: 'rabi',
    seasonClassEn: 'Rabi',
    seasonClassUr: 'ربیع',
    photo: './images/crop-stages-pulses-fodder.jpg',
    photoGroup: 'pulses',
    diagramType: 'pulses',
    stageCaptions: {
      en: [
        'Stage 1 — Rabi Sowing with Rhizobium: Thrives on rainfed Shakargarh belt after sorghum/millet or on part of wheat land.',
        'Stage 2 — Deep Taproot & Pods: Reaches deeper moisture and fixes winter nitrogen.',
        'Stage 3 — Harvest & Value Add: Clean graded pulses earn better prices; residue feeds soil.'
      ],
      ur: [
        'مرحلہ 1 — رائزوبیم کے ساتھ ربیع بوائی: بارانی شکرگڑھ میں جوار/باجرہ کے بعد یا گندم کے متبادل حصے پر۔',
        'مرحلہ 2 — گہری جڑیں اور پھلیاں: خشک موسم میں گہرائی سے نمی لیتی اور نائٹروجن بناتی ہے۔',
        'مرحلہ 3 — کٹائی اور درجہ بندی: صاف دال بہتر قیمت دلاتی ہے اور باقیات مٹی میں جاتی ہیں۔'
      ]
    },
    suitableSeason: {
      en: 'Rabi crop suited to lighter/rainfed Shakargarh soils (`Sorghum or pearl millet → Chickpea`) and as a partial rotation break with wheat (`Wheat → Chickpea`). Unverified in handbook: exact sowing dates and desi/kabuli variety names — verify with the Punjab Agriculture Department.',
      ur: 'ہلکی اور شکرگڑھ کی بارانی زمینوں (جوار/باجرہ کے بعد) اور گندم کے متبادل ربیع حصے کے لیے موزوں۔ غیر تصدیق شدہ: بوائی کی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'On sloping rainfed Shakargarh fields, plough and sow across the slope and hold rainwater with field bunds. Avoid Waterlogging—chickpea dislikes standing water.',
      ur: 'شکرگڑھ کی ڈھلوانوں پر بوائی ڈھلوان کے آر پار کریں اور بارش کے لیے بند بنائیں۔ پانی کھڑا نہ ہونے دیں۔'
    },
    seedSowing: {
      en: 'Use clean seed inoculated with fresh, certified Rhizobium inoculant (within expiry date). Unverified in handbook: exact seed rate (kg/acre) and variety selection — confirm with the Punjab Agriculture Department.',
      ur: 'تازہ تصدیق شدہ Rhizobium ٹیکے کے ساتھ صاف بیج بوئیں۔ غیر تصدیق شدہ: فی ایکڑ بیج کی مقدار اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact row and plant spacing are NOT verified in the handbook. Confirm with the Punjab Agriculture Department.',
      ur: 'قطاروں اور پودوں کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Deep-rooted crop well suited to dry rainfed seasons. Unverified in handbook: exact supplemental irrigation timing on irrigated fields.',
      ur: 'گہری جڑوں کی وجہ سے خشک بارانی موسم کے لیے نہایت موزوں ہے۔ غیر تصدیق شدہ: آبپاشی والے رقبے میں پانی کا حتمی شیڈول۔'
    },
    nutrients: {
      en: 'Fixes nitrogen with Rhizobium inoculation, builds Soil Organic Matter, and helps meet the 25% annual legume target. Unverified: exact starter phosphorus/zinc doses.',
      ur: 'رائزوبیم سے نائٹروجن بناتی اور نامیاتی مادہ بڑھاتی ہے۔ غیر تصدیق شدہ: فاسفورس کی حتمی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Breaks cereal disease and weed cycles when rotated with wheat; install bird perches for pod borers, scout twice weekly (10 plants/spot), and use pheromone traps or neem/Bt when needed. Unverified: exact blight/pod-borer chemical rates.',
      ur: 'گندم کے ساتھ ہیر پھیر سے اجناس کی بیماریاں اور جڑی بوٹیاں ٹوٹتی ہیں؛ پرندوں کے ڈنڈے، ٹریپ اور ہفتہ وار معائنہ کریں۔ غیر تصدیق شدہ: کیمیائی دوا کی مقدار۔'
    },
    harvestStorage: {
      en: 'Clean and grade harvested chickpea to earn higher market value; save healthy seed with farmer groups. Unverified: exact storage pest doses.',
      ur: 'صاف اور درجہ بند چنا زیادہ قیمت دیتا ہے؛ کسان گروپ کے ساتھ اچھا بیج محفوظ کریں۔ غیر تصدیق شدہ: گودام حفاظت کی ادویات۔'
    },
    regenerativeRole: {
      en: 'Core dryland legume for Shakargarh climate resilience, breaking rice–wheat monoculture and restoring nitrogen naturally.',
      ur: 'شکرگڑھ کی بارانی زمینوں میں موسمیاتی لچک، چاول گندم کی یک فصلی کاشت توڑنے اور قدرتی نائٹروجن کے لیے بنیادی فصل۔'
    },
    commonMistakes: {
      en: [
        'Planting chickpea in heavy waterlogged pockets.',
        'Omitting Rhizobium inoculation.',
        'Growing continuous cereal without a winter legume break crop.'
      ],
      ur: [
        'پانی کھڑا رہنے والی بھاری چکنی مٹی میں لگانا۔',
        'رائزوبیم ٹیکہ نہ لگانا۔',
        'مسلسل اناج اگا کر سردیوں کی دال شامل نہ کرنا۔'
      ]
    },
    summary: {
      en: 'Deep-rooted Rabi legume ideal for rainfed Shakargarh and wheat rotation breaks; inoculate with Rhizobium and avoid standing water.',
      ur: 'بارانی شکرگڑھ اور گندم کے متبادل رقبے کے لیے گہری جڑوں والی ربیع دال؛ رائزوبیم لگائیں اور پانی کھڑا نہ ہونے دیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Sowing dates, desi/kabuli varieties, seed rate (kg/acre), row spacing, fertilizer rates, and blight/borer chemical controls — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی تاریخیں، اقسام، بیج کی مقدار، قطار کا فاصلہ اور کھاد/سپرے کی شرح — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [9, 10, 11, 0, 1, 2, 3],
    nextRotationIds: [
      {
        targetId: 'sorghum',
        badgeEn: 'Shakargarh Cycle',
        badgeUr: 'شکرگڑھ بارانی چکر',
        reasonEn: 'Handbook rainfed pattern (`Sorghum or pearl millet → Chickpea`): sorghum uses the nitrogen left by chickpea.',
        reasonUr: 'شکرگڑھ میں چنے کے بعد جوار یا باجرہ چھوڑی ہوئی نائٹروجن سے خوب اگتا ہے۔'
      },
      {
        targetId: 'basmati-rice',
        badgeEn: 'Irrigated Break',
        badgeUr: 'سیراب رقبہ ہیر پھیر',
        reasonEn: 'Breaks wheat-weed pressure and lowers nitrogen demand on irrigated plots.',
        reasonUr: 'گندم کی جڑی بوٹیاں کم کر کے چاول کے لیے نائٹروجن بچاتی ہے۔'
      }
    ]
  },

  {
    id: 'lentil',
    num: 10,
    nameEn: 'Lentil',
    nameUr: 'مسور',
    scientificName: 'Lens culinaris',
    seasonClass: 'rabi',
    seasonClassEn: 'Rabi',
    seasonClassUr: 'ربیع',
    photo: './images/crop-stages-pulses-fodder.jpg',
    photoGroup: 'pulses',
    diagramType: 'pulses',
    stageCaptions: {
      en: [
        'Stage 1 — Rabi Establishment: Inoculate seed with Rhizobium; sow across slope on rainfed land.',
        'Stage 2 — Fine Canopy Cover: Protects lighter Shakargarh soils from wind and rain erosion.',
        'Stage 3 — Harvest & Grading: Clean graded lentil supports household protein and market income.'
      ],
      ur: [
        'مرحلہ 1 — ربیع اگاؤ: رائزوبیم ٹیکہ لگا کر بارانی زمین پر ڈھلوان کے آر پار بوئیں۔',
        'مرحلہ 2 — مٹی کا ڈھکاؤ: ہلکی زمین کو کٹاؤ سے بچاتی اور نائٹروجن بناتی ہے۔',
        'مرحلہ 3 — کٹائی اور صفائی: صاف مسور گھریلو غذائیت اور منڈی کی آمدنی بڑھاتا ہے۔'
      ]
    },
    suitableSeason: {
      en: 'Rabi winter pulse highlighted in handbook for rainfed Shakargarh rotations (`Sorghum or pearl millet → Chickpea/Lentil/Mustard`). Unverified in handbook: exact sowing dates and approved varieties — verify with the Punjab Agriculture Department.',
      ur: 'شکرگڑھ کے بارانی علاقے میں جوار یا باجرے کے بعد ربیع دال کے طور پر موزوں۔ غیر تصدیق شدہ: بوائی کی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Plough and sow across slopes on Shakargarh rainfed land; maintain field bunds to store monsoon moisture and prevent Waterlogging.',
      ur: 'بارانی ڈھلوانوں پر آڑ میں ہل اور بوائی کریں؛ نمی بچانے کو بند مضبوط رکھیں اور پانی کھڑا نہ ہونے دیں۔'
    },
    seedSowing: {
      en: 'Use clean seed treated with fresh certified Rhizobium inoculant (within stated date). Unverified in handbook: exact seed rate (kg/acre) and variety names — verify with the Punjab Agriculture Department.',
      ur: 'صاف بیج کو تازہ تصدیق شدہ Rhizobium ٹیکہ لگا کر بوئیں۔ غیر تصدیق شدہ: بیج کی مقدار اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact row and plant spacing are NOT specified in the handbook. Verify recommended drill/row spacing with the Punjab Agriculture Department.',
      ur: 'قطار اور پودے کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Suited to dry rainfed conditions; keep drains clear against heavy winter rains. Unverified in handbook: exact irrigation schedule on irrigated farms.',
      ur: 'خشک بارانی حالات کے لیے موزوں؛ سردیوں کی تیز بارش کے لیے نکاسی صاف رکھیں۔ غیر تصدیق شدہ: آبپاشی کا شیڈول۔'
    },
    nutrients: {
      en: 'Fixes nitrogen via Rhizobium, builds soil fertility, and contributes to the 25% annual legume goal. Unverified: exact phosphorus rates.',
      ur: 'رائزوبیم سے نائٹروجن بناتی اور سالانہ 25% دال کے ہدف میں شامل ہے۔ غیر تصدیق شدہ: فاسفورس کی حتمی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Weed early before seed set (hand weeding/hoeing); scout twice weekly (10 plants/spot) and protect ladybirds for aphids. Unverified: specific rust/blight treatments.',
      ur: 'بیج بننے سے پہلے گوڈی کریں، ہفتہ وار معائنہ کریں اور تیلا کھانے والے لیڈی برڈ کی حفاظت کریں۔ غیر تصدیق شدہ: بیماریوں کے سپرے کی مقدار۔'
    },
    harvestStorage: {
      en: 'Clean and grade lentils to capture higher value than raw mixed seed; return straw/chaff via livestock or mulch. Unverified: exact storage rates.',
      ur: 'صاف اور درجہ بند مسور زیادہ قیمت دلاتا ہے؛ بھوسہ جانوروں یا ملچنگ میں استعمال کریں۔ غیر تصدیق شدہ: گودام حفاظت کی مقدار۔'
    },
    regenerativeRole: {
      en: 'Supports soil nitrogen balance, family protein security, and crop diversity in Narowal’s drier northern belt.',
      ur: 'نارووال کے شمالی بارانی علاقے میں نائٹروجن توازن، خاندانی خوراک اور فصلی تنوع مضبوط کرتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Allowing weeds to overtake slow early seedlings and set seed.',
        'Skipping Rhizobium inoculation.',
        'Planting in waterlogged low pockets.'
      ],
      ur: [
        'شروع میں جڑی بوٹیاں بیج بنانے تک چھوڑ دینا۔',
        'رائزوبیم ٹیکہ نہ لگانا۔',
        'پانی کھڑا ہونے والی نشیبی زمین میں کاشت کرنا۔'
      ]
    },
    summary: {
      en: 'Low-input Rabi pulse for Shakargarh rainfed rotations; inoculate with Rhizobium, weed early, and grade grain for market value.',
      ur: 'بارانی شکرگڑھ کے لیے کم لاگت ربیع دال؛ رائزوبیم لگائیں، وقت پر گوڈی کریں اور صاف دانہ بیچیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Sowing dates, variety names, seed rate (kg/acre), row spacing, fertilizer rates, and irrigation timing — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی تاریخیں، اقسام، بیج کی مقدار، قطار کا فاصلہ، کھاد اور آبپاشی کا شیڈول — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [9, 10, 11, 0, 1, 2, 3],
    nextRotationIds: [
      {
        targetId: 'sorghum',
        badgeEn: 'Rainfed Follow-up',
        badgeUr: 'بارانی ہیر پھیر',
        reasonEn: 'Handbook rainfed pattern: follow winter lentil with Kharif sorghum or pearl millet.',
        reasonUr: 'مسور کے بعد خریف میں جوار یا باجرہ ہینڈ بک کی تجویز کردہ بارانی ترتیب ہے۔'
      },
      {
        targetId: 'maize',
        badgeEn: 'Soil-Nitrogen Boost',
        badgeUr: 'مکئی کا فائدہ',
        reasonEn: 'Maize benefits from residual legume nitrogen on lighter soils.',
        reasonUr: 'ہلکی زمین میں مکئی دال کی چھوڑی نائٹروجن سے بہتر اگتی ہے۔'
      }
    ]
  }
];
