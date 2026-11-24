/* ==========================================================================
   NAROWAL INTERACTIVE CROP LIBRARY — PART 2 (CROPS 11 TO 19 + 12-MONTH CALENDAR)
   Primary Source: Regenerative Farming Handbook (District Narowal, Punjab)
   STRICT ACCURACY RULE: Only verified handbook figures are stated as facts.
   Unspecified varieties, sowing dates, seed rates, spacing, fertilizer doses,
   and irrigation schedules are explicitly marked unverified.
   ========================================================================== */

export const CROPS_11_TO_19 = [
  {
    id: 'mustard',
    num: 11,
    nameEn: 'Mustard',
    nameUr: 'سرسوں',
    scientificName: 'Brassica juncea',
    seasonClass: 'rabi',
    seasonClassEn: 'Rabi (Winter Oilseed & Cover Strip)',
    seasonClassUr: 'ربیع (سردیوں کی تیل دار فصل)',
    photo: './images/crop-stages-oilseeds-veg.jpg',
    photoGroup: 'oilseeds',
    diagramType: 'oilseed',
    stageCaptions: {
      en: [
        'Stage 1 — Rabi Break Strip (Oct–Nov): Sow in winter strip on lighter soil or rainfed Shakargarh belt.',
        'Stage 2 — Yellow Blossom Habitat: Flowers nourish pollinators and Beneficial Insects like hoverflies and bees.',
        'Stage 3 — Pod Maturity & Oilseed Break: Breaks rice–wheat weed and disease cycles before summer crops.'
      ],
      ur: [
        'مرحلہ 1 — ربیع بوائی (اکتوبر–نومبر): ہلکی زمین یا بارانی شکرگڑھ میں سردیوں کی وقفہ فصل۔',
        'مرحلہ 2 — زرد پھول: پھول شہد کی مکھیوں اور فائدہ مند حشرات کو خوراک دیتے ہیں۔',
        'مرحلہ 3 — پھلیاں اور ہیر پھیر: چاول گندم کی بیماریوں اور جڑی بوٹیوں کا چکر توڑتی ہے۔'
      ]
    },
    suitableSeason: {
      en: 'Rabi winter cover and break crop (starter plan notes Oct–Nov Rabi sowing strip alongside wheat; fits lighter soils and rainfed Shakargarh). Unverified in handbook: exact sowing cut-off dates and improved mustard varieties — confirm with the Punjab Agriculture Department.',
      ur: 'سردیوں (ربیع) کی بہترین وقفہ اور تیل دار فصل (اکتوبر–نومبر میں گندم کے ساتھ پٹی، ہلکی اور شکرگڑھ بارانی زمین کے لیے موزوں)۔ غیر تصدیق شدہ: حتمی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Reduce ploughing passes and avoid working wet soil; on Shakargarh slopes, sow across the slope with contour grass strips.',
      ur: 'غیر ضروری ہل کم کریں اور گیلی مٹی میں کام نہ کریں؛ شکرگڑھ کی ڈھلوانوں پر آڑ میں بوائی کریں۔'
    },
    seedSowing: {
      en: 'Plant on part of wheat land (`Wheat → Mustard/Canola`) or in strips to spread income risk and shelter beneficial predators. Unverified in handbook: exact seed rate (kg/acre) and variety names — verify with the Punjab Agriculture Department.',
      ur: 'گندم کی زمین کے ایک حصے پر یا پٹی میں بوئیں تاکہ خطرہ بٹے اور دوست حشرات کو پناہ ملے۔ غیر تصدیق شدہ: بیج کی مقدار اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact row-to-row and plant-to-plant spacing are NOT verified in the handbook. Verify thinning and drill spacing with the Punjab Agriculture Department.',
      ur: 'قطار اور پودے کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Fits lighter soils and rainfed belts well. Unverified in handbook: exact irrigation schedule and critical water stages.',
      ur: 'ہلکی زمینوں اور بارانی علاقوں میں خوب چلتی ہے۔ غیر تصدیق شدہ: آبپاشی کے حتمی مراحل اور شیڈول۔'
    },
    nutrients: {
      en: 'Base fertilizer and sulphur/phosphorus additions on Punjab Soil Lab results alongside compost. Unverified: exact NPK and sulphur rates.',
      ur: 'مٹی ٹیسٹ کے مطابق کھاد اور کمپوسٹ ڈالیں۔ غیر تصدیق شدہ: کیمیائی کھاد اور سلفر کی حتمی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Breaks grassy wheat weed cycles (such as Phalaris/wild weeds). Watch for aphids: protect ladybirds (`Coccinellidae`) and lacewings, use yellow sticky traps, and avoid spraying during flowering so honeybees are safe. Unverified: exact aphid threshold and spray doses.',
      ur: 'گندم کی جڑی بوٹیوں کا چکر توڑتی ہے۔ تیلے کے لیے لیڈی برڈ کی حفاظت کریں، زرد کارڈ لگائیں اور پھول آنے پر سپرے سے بچیں تاکہ شہد کی مکھیاں محفوظ رہیں۔ غیر تصدیق شدہ: کیمیائی دوا کی شرح۔'
    },
    harvestStorage: {
      en: 'Clean seed for oil/market; support beekeeping value-addition (`honey` mentioned in handbook diversification). Unverified: exact harvest pod moisture & oil extraction storage metrics.',
      ur: 'تیل یا منڈی کے لیے بیج صاف کریں؛ شہد کی مکھیوں (شہد کی اضافی آمدنی) کے لیے بھی مفید ہے۔ غیر تصدیق شدہ: کٹائی پر نمی کی حتمی شرح۔'
    },
    regenerativeRole: {
      en: 'Vital winter cover and break crop: breaks rice–wheat monoculture, feeds pollinators and beneficial insects with winter pollen, and diversifies farm income.',
      ur: 'چاول گندم کی یک فصلی کاشت توڑنے، سردیوں میں دوست حشرات و مکھیوں کو خوراک دینے اور آمدنی بانٹنے میں اہم کردار ادا کرتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Spraying insecticides during flowering (kills honeybees and ladybirds).',
        'Growing 100% wheat on every kanal instead of reserving a strip for mustard or legumes.',
        'Neglecting soil testing before applying fertilizer.'
      ],
      ur: [
        'پھول آنے کے وقت زہر کا سپرے کرنا (شہد کی مکھیاں اور لیڈی برڈ مر جاتے ہیں)۔',
        'پوری زمین پر صرف گندم لگا کر سرسوں یا دال کی پٹی نہ چھوڑنا۔',
        'مٹی کے ٹیسٹ کے بغیر کھاد ڈالنا۔'
      ]
    },
    summary: {
      en: 'Winter break and cover crop ideal for lighter Narowal soils and Shakargarh; breaks cereal pests, supports bees/ladybirds, and diversifies risk.',
      ur: 'ہلکی اور بارانی زمینوں کے لیے سردیوں کی بہترین وقفہ فصل جو بیماریوں کا چکر توڑتی اور فائدہ مند حشرات کو سہارا دیتی ہے۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Exact sowing dates, mustard varieties, seed rate (kg/acre), row/plant spacing, NPK/sulphur rates, and irrigation timing — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی تاریخیں، اقسام، بیج کی مقدار، فاصلہ، کھاد اور آبپاشی کا شیڈول — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [9, 10, 11, 0, 1, 2],
    nextRotationIds: [
      {
        targetId: 'sesbania',
        badgeEn: 'Spring/Summer Green Manure',
        badgeUr: 'سبز کھاد تیاری',
        reasonEn: 'After mustard harvest, sow Sesbania before Basmati rice for nitrogen and organic matter.',
        reasonUr: 'سرسوں کے بعد چاول سے پہلے سنبھالو سبز کھاد بو کر نائٹروجن بنائیں۔'
      },
      {
        targetId: 'basmati-rice',
        badgeEn: 'Clean Seedbed',
        badgeUr: 'صاف کھیت',
        reasonEn: 'Winter break crop reduces cereal weed carryover into Kharif.',
        reasonUr: 'سردیوں کی وقفہ فصل سے خریف میں جڑی بوٹیوں کا دباؤ کم ہوتا ہے۔'
      }
    ]
  },

  {
    id: 'canola',
    num: 12,
    nameEn: 'Canola',
    nameUr: 'کینولا',
    scientificName: 'Brassica napus',
    seasonClass: 'rabi',
    seasonClassEn: 'Rabi (Winter Oilseed Break Crop)',
    seasonClassUr: 'ربیع (سردیوں کی تیل دار فصل)',
    photo: './images/crop-stages-oilseeds-veg.jpg',
    photoGroup: 'oilseeds',
    diagramType: 'oilseed',
    stageCaptions: {
      en: [
        'Stage 1 — Rabi Establishment: Fits lighter soils as a winter break crop on part of wheat land.',
        'Stage 2 — Flowering Canopy: Supports beneficial predators; avoid spraying during bloom.',
        'Stage 3 — Pod Harvest: Diversifies edible-oil income and breaks wheat weed cycles.'
      ],
      ur: [
        'مرحلہ 1 — ربیع اگاؤ: ہلکی زمینوں پر گندم کے ساتھ سردیوں کی وقفہ فصل کے طور پر موزوں۔',
        'مرحلہ 2 — پھول کا مرحلہ: دوست حشرات کو سہارا دیتی ہے؛ پھول پر سپرے نہ کریں۔',
        'مرحلہ 3 — کٹائی: تیل دار آمدنی اور گندم کی جڑی بوٹیوں کا توڑ۔'
      ]
    },
    suitableSeason: {
      en: 'Rabi winter break crop noted in the handbook (`Wheat → Mustard/Canola`) especially suited to lighter soils. Unverified in handbook: exact sowing dates and approved canola hybrids/varieties — confirm with the Punjab Agriculture Department.',
      ur: 'ہلکی زمینوں پر سردیوں (ربیع) کی بہترین وقفہ فصل۔ غیر تصدیق شدہ: بوائی کی تاریخیں اور منظور شدہ کینولا اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Keep tillage light and avoid working wet soil; precision levelling helps uniform germination.',
      ur: 'ہلکا ہل رکھیں، گیلی مٹی میں کام نہ کریں اور ہموار زمین پر کاشت کریں۔'
    },
    seedSowing: {
      en: 'Sow certified canola seed on part of wheat acreage to spread market and weather risk. Unverified in handbook: exact seed rate (kg/acre) and variety names — confirm with the Punjab Agriculture Department.',
      ur: 'تصدیق شدہ بیج گندم کے رقبے کے ایک حصے پر بوئیں۔ غیر تصدیق شدہ: فی ایکڑ بیج کی مقدار اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact row and plant spacing are NOT verified in the handbook. Confirm drill row spacing and plant thinning distance with the Punjab Agriculture Department.',
      ur: 'قطار اور پودے کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Performs well on lighter, well-drained Narowal soils; avoid Waterlogging. Unverified in handbook: exact irrigation dates and stages.',
      ur: 'نکاسی والی ہلکی زمینوں میں خوب چلتی ہے؛ پانی کھڑا نہ ہونے دیں۔ غیر تصدیق شدہ: آبپاشی کا شیڈول۔'
    },
    nutrients: {
      en: 'Apply compost before sowing and base chemical inputs on soil lab testing. Unverified: exact NPK/sulphur doses.',
      ur: 'بوائی سے پہلے کمپوسٹ اور مٹی ٹیسٹ کے مطابق متوازن کھاد دیں۔ غیر تصدیق شدہ: کیمیائی کھاد کی حتمی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Breaks cereal weed/disease cycles; monitor twice weekly for aphids, protect ladybirds and lacewings, use yellow sticky traps, and never spray during flowering. Unverified: specific pesticide rates.',
      ur: 'اجناس کی بیماریوں کا چکر توڑتی ہے؛ ہفتہ وار معائنہ کریں، لیڈی برڈ کی حفاظت کریں اور پھول کے وقت سپرے نہ کریں۔ غیر تصدیق شدہ: سپرے کی مقدار۔'
    },
    harvestStorage: {
      en: 'Harvest cleanly and keep seed dry to protect oil quality. Unverified in handbook: exact pod shattering moisture % and storage specs.',
      ur: 'صفائی سے کٹائی کر کے دانہ خشک رکھیں۔ غیر تصدیق شدہ: کٹائی کے وقت نمی کی حتمی شرح۔'
    },
    regenerativeRole: {
      en: 'Reduces over-reliance on wheat monoculture, feeds beneficial insects and honeybees in winter, and diversifies farm income.',
      ur: 'گندم کی یک فصلی کاشت کم کرتی ہے، سردیوں میں شہد کی مکھیوں و دوست حشرات کو سہارا دیتی ہے اور آمدنی بڑھاتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Spraying broad-spectrum poisons while yellow blooms are open.',
        'Planting on waterlogged heavy pockets.',
        'Skipping soil testing before fertilization.'
      ],
      ur: [
        'زرد پھولوں کے وقت تیز زہر کا سپرے کرنا۔',
        'پانی کھڑا رہنے والی بھاری چکنی مٹی میں لگانا۔',
        'بغیر مٹی ٹیسٹ کے کھاد ڈالنا۔'
      ]
    },
    summary: {
      en: 'Recommended Rabi oilseed break crop for lighter Narowal soils that breaks wheat disease/weed cycles and spreads farm risk.',
      ur: 'ہلکی زمینوں کے لیے ربیع کی مفید تیل دار وقفہ فصل جو گندم کی بیماریاں توڑتی اور منڈی کا خطرہ بانٹتی ہے۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Sowing dates, approved canola varieties, seed rate (kg/acre), row spacing, fertilizer doses, and irrigation schedule — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی تاریخیں، اقسام، بیج کی مقدار، فاصلہ، کھاد اور آبپاشی کا شیڈول — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [9, 10, 11, 0, 1, 2],
    nextRotationIds: [
      {
        targetId: 'mung-bean',
        badgeEn: 'Summer Legume',
        badgeUr: 'گرمائی دال',
        reasonEn: 'Short legume crop restores soil nitrogen before Kharif rice or maize.',
        reasonUr: 'خریف چاول یا مکئی سے پہلے زمین میں نائٹروجن بحال کرتی ہے۔'
      },
      {
        targetId: 'basmati-rice',
        badgeEn: 'Kharif Staple',
        badgeUr: 'خریف چاول',
        reasonEn: 'Diversified winter break leaves cleaner soil for Kharif Basmati.',
        reasonUr: 'سردیوں کی وقفہ فصل کے بعد باسمتی میں جڑی بوٹیاں کم ہوتی ہیں۔'
      }
    ]
  },

  {
    id: 'cowpea',
    num: 13,
    nameEn: 'Cowpea',
    nameUr: 'لوبیا',
    scientificName: 'Vigna unguiculata',
    seasonClass: 'kharif',
    seasonClassEn: 'Kharif / Pre-Rice Cover & Mixed Fodder',
    seasonClassUr: 'خریف / کور کراپ اور ملا جلا چارہ',
    photo: './images/crop-stages-pulses-fodder.jpg',
    photoGroup: 'pulses',
    diagramType: 'pulses',
    stageCaptions: {
      en: [
        'Stage 1 — Pre-Rice Cover or Fodder Mix: Sow before rice or mixed with sorghum (`Sorghum + Cowpea`).',
        'Stage 2 — Dense Living Canopy: Shades topsoil from 50–60°C heat and fixes nitrogen.',
        'Stage 3 — Fodder Cut / Green Cover: Feeds dairy animals or returns Soil Organic Matter.'
      ],
      ur: [
        'مرحلہ 1 — چاول سے پہلے کور یا چارہ: چاول سے پہلے یا جوار کے ساتھ ملا کر بوائی۔',
        'مرحلہ 2 — گھنا سبز ڈھکاؤ: مٹی کو تپش سے بچاتا اور نائٹروجن بناتا ہے۔',
        'مرحلہ 3 — چارہ یا سبز کھاد: مویشیوں کے لیے عمدہ خوراک یا زمین کے لیے نامیاتی مادہ۔'
      ]
    },
    suitableSeason: {
      en: 'Recommended in handbook as a warm-season cover crop before rice (alongside sesbania) and as Kharif mixed fodder with sorghum. Unverified in handbook: exact sowing dates and variety names — confirm with the Punjab Agriculture Department.',
      ur: 'چاول سے پہلے کور کراپ اور خریف میں جوار کے ساتھ ملا جلا چارہ کے طور پر تجویز کردہ۔ غیر تصدیق شدہ: بوائی کی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Minimal tillage after wheat or prepared alongside sorghum on well-drained plains or Shakargarh slopes.',
      ur: 'گندم کے بعد کم ہل کے ساتھ یا شکرگڑھ میں جوار کے ساتھ ڈھلوان کے آر پار کاشت کریں۔'
    },
    seedSowing: {
      en: 'Can be sown pure as pre-rice cover/pulse or mixed with sorghum (`Sorghum bicolor` + `Vigna unguiculata`); apply Rhizobium inoculant for strong nitrogen fixation. Unverified in handbook: exact seed rate (kg/acre) and mixture ratio — verify with the Punjab Agriculture Department.',
      ur: 'اکیلا یا جوار کے ساتھ ملا کر بویا جا سکتا ہے؛ نائٹروجن کے لیے Rhizobium ٹیکہ لگائیں۔ غیر تصدیق شدہ: بیج کی مقدار اور جوار/لوبیا کا تناسب — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact row and plant spacing are NOT specified in the handbook. Verify fodder vs. grain spacing with the Punjab Agriculture Department.',
      ur: 'قطار اور پودے کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Fast ground cover cuts evaporation from summer soil. Unverified in handbook: exact irrigation schedule.',
      ur: 'تیزی سے زمین ڈھانپ کر گرمی میں بخارات کم کرتا ہے۔ غیر تصدیق شدہ: آبپاشی کا حتمی شیڈول۔'
    },
    nutrients: {
      en: 'Fixes nitrogen and counts toward the >= 25% annual legume goal; mixing with sorghum enriches livestock fodder protein. Unverified: exact starter fertilizer rates.',
      ur: 'نائٹروجن بناتا اور سالانہ 25% دال کے ہدف میں شامل ہے؛ جوار کے ساتھ مل کر چارے کی غذائیت بڑھاتا ہے۔ غیر تصدیق شدہ: کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Broad leaves rapidly smother summer weeds; monitor twice weekly (10 plants/spot) and protect ladybirds and lacewings. Unverified: exact aphid/pod-borer chemical rates.',
      ur: 'چوڑے پتے جڑی بوٹیاں دباتے ہیں؛ ہفتہ وار معائنہ اور لیڈی برڈ کی حفاظت کریں۔ غیر تصدیق شدہ: کیمیائی دوا کی شرح۔'
    },
    harvestStorage: {
      en: 'Cut mixed with sorghum for high-protein livestock fodder, roll into soil as green cover before rice, or harvest dry pods. Unverified: exact harvest days.',
      ur: 'جوار کے ساتھ بطور چارہ کاٹیں، چاول سے پہلے زمین میں ملا دیں یا پھلیاں اتار لیں۔ غیر تصدیق شدہ: کٹائی کے حتمی دن۔'
    },
    regenerativeRole: {
      en: 'Protects summer soil from 50–60°C heat, fixes free nitrogen, cuts dairy feed bills when mixed with sorghum, and feeds Soil Organic Matter.',
      ur: 'گرمی میں مٹی کو تپش سے بچاتا ہے، مفت نائٹروجن بناتا ہے اور جوار کے ساتھ مل کر دودھ والے جانوروں کی فیڈ بچاتا ہے۔'
    },
    commonMistakes: {
      en: [
        'Leaving wheat fields bare through May–June heat.',
        'Growing sole cereal fodder without mixing cowpea.',
        'Skipping fresh Rhizobium inoculant.'
      ],
      ur: [
        'مئی–جون میں گندم کے بعد زمین خالی چھوڑنا۔',
        'بغیر لوبیا ملائے صرف جوار اگانا۔',
        'تازہ رائزوبیم ٹیکہ نہ لگانا۔'
      ]
    },
    summary: {
      en: 'Versatile warm-season legume used as pre-rice soil cover or mixed fodder with sorghum to fix nitrogen and shade hot soil.',
      ur: 'مئی–خریف کی کثیر المقاصد دال جو چاول سے پہلے مٹی ڈھانپتی اور جوار کے ساتھ بہترین چارہ دیتی ہے۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Sowing dates, variety names, exact seed rates (sole vs. sorghum mix), spacing, fertilizer rates, and irrigation intervals — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: بوائی کی تاریخیں، اقسام، بیج کی مقدار، فاصلہ، کھاد اور آبپاشی کا وقفہ — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [4, 5, 6, 7, 8],
    nextRotationIds: [
      {
        targetId: 'basmati-rice',
        badgeEn: 'Pre-Rice Cover',
        badgeUr: 'چاول سے پہلے کور',
        reasonEn: 'Handbook mentions cowpea before rice to protect soil and leave natural nitrogen.',
        reasonUr: 'چاول سے پہلے مٹی ڈھانپنے اور نائٹروجن دینے کے لیے مفید۔'
      },
      {
        targetId: 'wheat',
        badgeEn: 'Rabi Cereal',
        badgeUr: 'ربیع گندم',
        reasonEn: 'Zero-till wheat follows smoothly after Kharif fodder harvest.',
        reasonUr: 'خریف چارے کے بعد زیرو ٹل گندم آسانی سے بوئی جا سکتی ہے۔'
      }
    ]
  },

  {
    id: 'sesbania',
    num: 14,
    nameEn: 'Sesbania / Dhaincha',
    nameUr: 'سنبھالو / ڈھینچا',
    scientificName: 'Sesbania bispinosa',
    seasonClass: 'zaid',
    seasonClassEn: 'Zaid / Pre-Rice Green Manure',
    seasonClassUr: 'زائد / چاول سے پہلے سبز کھاد',
    photo: './images/crop-stages-pulses-fodder.jpg',
    photoGroup: 'pulses',
    diagramType: 'sesbania',
    stageCaptions: {
      en: [
        'Stage 1 — Sow After Wheat (20–25 kg/acre): Sow when irrigation is available in May–June.',
        'Stage 2 — Rapid Biomass & Salinity Aid: Fast stem/root growth fixes nitrogen and loosens light salinity.',
        'Stage 3 — Roll Down at 45–55 Days: Roll or incorporate at flowering, 1–2 weeks before transplanting rice.'
      ],
      ur: [
        'مرحلہ 1 — گندم کے بعد بوائی (20–25 kg/acre): مئی–جون میں پانی دستیاب ہونے پر بوئیں۔',
        'مرحلہ 2 — تیز بڑھوتری اور شوریت کا علاج: نائٹروجن بناتی اور ہلکی شوریت کم کرتی ہے۔',
        'مرحلہ 3 — 45–55 دن پر دبانا: پھول آنے پر چاول کی منتقلی سے 1–2 ہفتے پہلے زمین میں دبا دیں۔'
      ]
    },
    suitableSeason: {
      en: 'Zaid green-manure window (May–June in starter plan): sown right after wheat harvest when irrigation is available, rolled down at 45 to 55 days at flowering, 1 to 2 weeks before rice transplanting. Unverified: specific variety names.',
      ur: 'گندم کی کٹائی کے بعد مئی–جون میں آبپاشی دستیاب ہونے پر بوئی جاتی ہے، اور پھول آنے پر یعنی 45 سے 55 دن میں چاول کی منتقلی سے 1 سے 2 ہفتے پہلے دبا دی جاتی ہے۔ غیر تصدیق شدہ: اقسام کے نام۔'
    },
    landPrep: {
      en: 'Minimal preparation after wheat harvest; also paired with gypsum and improved drainage on white salt crust patches (test EC and pH first).',
      ur: 'گندم کے بعد کم تیاری کے ساتھ؛ سفید نمک والے کھیتوں میں جپسم اور بہتر نکاسی کے ساتھ استعمال کریں (پہلے EC اور pH ٹیسٹ کروائیں)۔'
    },
    seedSowing: {
      en: 'VERIFIED HANDBOOK RATE: Sow 20 to 25 kg/acre after wheat harvest when irrigation is available. Inoculate with Rhizobium if needed. Unverified in handbook: exact approved variety names.',
      ur: 'ہینڈ بک سے تصدیق شدہ مقدار: آبپاشی دستیاب ہو تو گندم کے بعد 20 سے 25 کلوگرام فی ایکڑ (20–25 kg/acre) بوئیں۔ غیر تصدیق شدہ: مخصوص اقسام کے نام۔'
    },
    spacing: {
      en: 'Sown densely for green manure biomass; exact row or drill spacing is NOT specified in the handbook.',
      ur: 'سبز کھاد کے لیے گھنی بوائی کی جاتی ہے؛ قطار کا کوئی درست فاصلہ ہینڈ بک میں درج نہیں۔'
    },
    irrigation: {
      en: 'Requires available irrigation after wheat harvest (May–June) to establish and reach 45–55 days biomass; helps reclaim light salinity alongside drainage. Unverified: exact number of irrigations during those 45–55 days.',
      ur: 'گندم کے بعد مئی–جون میں اگاؤ کے لیے آبپاشی درکار ہوتی ہے اور ہلکی شوریت میں مددگار ہے۔ غیر تصدیق شدہ: 45–55 دن میں پانی کی حتمی تعداد۔'
    },
    nutrients: {
      en: 'Incorporating or rolling down at 45–55 days at flowering (1–2 weeks before rice) adds rich natural nitrogen and Soil Organic Matter, helping support a 10–25% urea reduction on trial plots once compost and straw return are active. Unverified: exact nitrogen kg equivalent per acre.',
      ur: '45–55 دن میں پھول آنے پر دبانے سے زمین کو بھرپور نائٹروجن اور نامیاتی مادہ ملتا ہے، جس سے تجرباتی قطعے پر یوریا 10–25% کم کرنے میں مدد ملتی ہے۔ غیر تصدیق شدہ: نائٹروجن کی حتمی کلو مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Dense canopy rapidly suppresses summer weeds and cools topsoil; rolling down before seeding prevents it from competing with transplanted rice.',
      ur: 'گھنی بڑھوتری گرمیوں کی جڑی بوٹیاں دباتی ہے اور مٹی کو ٹھنڈا رکھتی ہے؛ چاول سے پہلے دبانے سے کوئی مقابلہ نہیں رہتا۔'
    },
    harvestStorage: {
      en: 'Not harvested for grain in rice rotation—incorporate or roll down at 45 to 55 days (flowering), 1 to 2 weeks before transplanting rice so it decomposes smoothly. Unverified: seed-production harvest dates.',
      ur: 'چاول کی ترتیب میں دانے کے لیے نہیں کٹتی—45 سے 55 دن (پھول آنے) پر چاول سے 1–2 ہفتے پہلے زمین میں دبا دیں یا بیلن پھیر دیں۔ غیر تصدیق شدہ: بیج کے لیے کٹائی کا وقت۔'
    },
    regenerativeRole: {
      en: 'One of Narowal’s fastest Soil Organic Matter and nitrogen builders—reclaims light salinity, feeds soil microbes before puddling/AWD rice, and shields bare May–June soil from 50–60°C surface heat.',
      ur: 'نارووال میں نامیاتی مادہ اور نائٹروجن بنانے کا تیز ترین ذریعہ—ہلکی شوریت دور کرتی اور مئی–جون میں مٹی کو 50–60°C گرمی سے بچاتی ہے۔'
    },
    commonMistakes: {
      en: [
        'Waiting too long past flowering so stems turn woody before rice transplanting.',
        'Transplanting rice immediately the same day instead of waiting 1–2 weeks after rolling down.',
        'Using less than clean water/drainage on heavily saline soils without an EC/pH lab test.'
      ],
      ur: [
        'پھول آنے کے بہت بعد تک کھڑا رکھنا جس سے تنے سخت لکڑی بن جائیں۔',
        'دبانے کے فوراً اسی دن چاول لگانا (1 سے 2 ہفتے کا وقفہ ضروری ہے)۔',
        'زیادہ شور زمین میں EC/pH ٹیسٹ اور نکاسی کے بغیر صرف ڈھینچا لگانا۔'
      ]
    },
    summary: {
      en: 'Verified handbook green manure: sow 20–25 kg/acre after wheat, roll down at 45–55 days (flowering), wait 1–2 weeks before rice to build organic matter, nitrogen, and reclaim light salinity.',
      ur: 'تصدیق شدہ سبز کھاد: گندم کے بعد 20–25 kg/acre بوئیں، 45–55 دن پر پھول آنے پر چاول سے 1–2 ہفتے پہلے دبا دیں—نائٹروجن اور نامیاتی مادہ بڑھاتی ہے۔'
    },
    unverifiedNotice: {
      en: 'Verified in handbook: 20–25 kg/acre rate & 45–55 day / 1–2 week timing. Unverified: exact variety names, irrigation count, and seed-crop spacing — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں تصدیق شدہ: 20–25 kg/acre اور 45–55 دن / 1–2 ہفتے کا وقت۔ غیر تصدیق شدہ: اقسام کے نام، آبپاشی کی تعداد اور بیج والی فصل کا فاصلہ — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [3, 4, 5],
    nextRotationIds: [
      {
        targetId: 'basmati-rice',
        badgeEn: '1–2 Weeks After Roll-Down',
        badgeUr: 'دبانے کے 1–2 ہفتے بعد',
        reasonEn: 'Handbook method: incorporate Sesbania at 45–55 days, wait 1–2 weeks, then transplant Basmati rice.',
        reasonUr: 'ہینڈ بک کا طریقہ: 45–55 دن پر دبا کر 1–2 ہفتے بعد باسمتی چاول منتقل کریں۔'
      },
      {
        targetId: 'maize',
        badgeEn: 'Light-Soil Cycle',
        badgeUr: 'ہلکی زمین کا چکر',
        reasonEn: 'Follows `Maize → Berseem/Wheat → Sesbania` on lighter soils.',
        reasonUr: 'ہلکی زمینوں پر مکئی ← برسیم/گندم ← سنبھالو ترتیب مکمل کرتی ہے۔'
      }
    ]
  },

  {
    id: 'vegetables',
    num: 15,
    nameEn: 'Vegetables (Onion & Kitchen/Market Crops)',
    nameUr: 'سبزیاں (پیاز اور موسمی سبزیاں)',
    scientificName: 'Seasonal vegetables (e.g. Allium cepa — onion)',
    seasonClass: 'multi',
    seasonClassEn: 'Kharif, Rabi & Zaid (Seasonal)',
    seasonClassUr: 'خریف، ربیع اور زائد (موسم کے مطابق)',
    photo: './images/crop-stages-oilseeds-veg.jpg',
    photoGroup: 'oilseeds',
    diagramType: 'vegetables',
    stageCaptions: {
      en: [
        'Stage 1 — Raised Beds & Compost: Prepare permanent raised beds with well-rotted compost (never fresh raw manure).',
        'Stage 2 — Mulch, Drip/Furrow & Marigold: Mulch beds, water by furrow/drip, and plant marigold trap crops.',
        'Stage 3 — Clean Harvest & Waiting Periods: Observe spray waiting periods; wash and grade produce for higher income.'
      ],
      ur: [
        'مرحلہ 1 — اونچے بیڈ اور کمپوسٹ: اونچے بیڈ پر گلی سڑی کمپوسٹ ڈالیں (تازہ گوبر ہرگز نہ لگائیں)۔',
        'مرحلہ 2 — ملچ، ڈرپ/کھال اور گیندا: ملچنگ کریں، کھال یا ڈرپ سے پانی دیں اور گیندا لگائیں۔',
        'مرحلہ 3 — صاف کٹائی اور انتظاری وقت: سپرے کا انتظاری وقت پورا کریں اور صاف سبزیاں بیچیں۔'
      ]
    },
    suitableSeason: {
      en: 'Year-round seasonal rotation in Narowal (including onion/vegetable intercrops in young sugarcane & orchards, plus women-led kitchen gardens). Unverified in handbook: sowing dates and approved varieties for individual vegetable crops — confirm with the Punjab Agriculture Department.',
      ur: 'نارووال میں موسم کے مطابق پورا سال (بشمول نئے گنے و باغات میں پیاز/سبزیاں اور خواتین کے کچن گارڈن)۔ غیر تصدیق شدہ: ہر سبزی کی الگ بوائی کی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Use PERMANENT RAISED BEDS or ridges (`Section 4 & 10.5`) so roots never sit in standing water during rain and soil compaction stays in wheel/walking furrows.',
      ur: 'سبزیوں کے لیے مستقل اونچے بیڈ یا ڈولیاں بنائیں تاکہ بارش میں جڑیں پانی میں نہ ڈوبیں اور چلنے سے بیڈ سخت نہ ہوں۔'
    },
    seedSowing: {
      en: 'Use clean seed, strict crop rotation between vegetable families, and intercrop onion/vegetables early in sugarcane or young orchards. Unverified in handbook: crop-specific vegetable seed rates and nursery/transplanting dates — confirm with the Punjab Agriculture Department.',
      ur: 'صاف بیج اور فصلی ہیر پھیر اپنائیں؛ نئے گنے اور باغات میں پیاز/سبزیاں بین الفصلی لگائیں۔ غیر تصدیق شدہ: ہر سبزی کی بیج کی مقدار اور تاریخیں۔'
    },
    spacing: {
      en: 'Exact bed width, row spacing, and plant-to-plant distances for individual vegetables are NOT verified in the handbook. Verify with the Punjab Agriculture Department.',
      ur: 'ہر سبزی کے بیڈ کی چوڑائی اور پودوں کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Use DRIP OR FURROW IRRIGATION on raised beds combined with straw mulching to cut evaporation and prevent Waterlogging.',
      ur: 'اونچے بیڈ پر ڈرپ یا کھال کی آبپاشی اور ملچنگ استعمال کریں تاکہ پانی بچے اور جڑوں میں پانی کھڑا نہ ہو۔'
    },
    nutrients: {
      en: 'Apply well-rotted compost before planting. CRITICAL SAFETY RULE (`Section 6.2`): Do NOT apply fresh manure on standing crops where it touches leaves or edible parts of vegetables. Unverified: vegetable-specific NPK rates.',
      ur: 'بوائی سے پہلے اچھی گلی سڑی کمپوسٹ ڈالیں۔ اہم احتیاط: کھڑی فصل پر تازہ کچا گوبر ہرگز نہ ڈالیں جہاں وہ سبزیوں کے پتوں یا کھانے کے قابل حصوں سے لگے۔ غیر تصدیق شدہ: کیمیائی کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Mulch beds to suppress weeds; include Marigold (`Tagetes`) and trap crops around beds; protect ladybirds, lacewings, and birds; use yellow sticky/pheromone traps, or homemade neem spray (~1 kg neem seed/leaves in 10 L water soaked overnight + soap, tested on a few plants first, sprayed in evening). Observe chemical waiting periods strictly! Unverified: crop-specific chemical doses.',
      ur: 'جڑی بوٹیوں کے لیے ملچنگ کریں؛ کیڑوں کے کنٹرول کے لیے گیندا (Tagetes) اور ٹریپ فصلیں لگائیں؛ زرد کارڈ یا نیم کا سپرے شام کو استعمال کریں۔ کٹائی سے پہلے دوا کے انتظاری وقت کی سختی سے پابندی کریں۔ غیر تصدیق شدہ: کیمیائی دوا کی مقدار۔'
    },
    harvestStorage: {
      en: 'Fresh, clean vegetables earn higher market value than raw bulk commodities and improve household nutrition (especially via women-led kitchen gardens). Unverified: post-harvest cold-storage specs.',
      ur: 'تازہ اور صاف سبزیاں بہتر منافع اور گھر کی غذائیت بڑھاتی ہیں۔ غیر تصدیق شدہ: کولڈ سٹوریج کی حتمی شرائط۔'
    },
    regenerativeRole: {
      en: 'High-value farm diversification, household nutrition via women’s kitchen gardens, zero-waste use of kitchen/garden compost, and low-pesticide safe food for families.',
      ur: 'زیادہ آمدنی، خواتین کے کچن گارڈن سے گھریلو غذائیت، کمپوسٹ کا بہترین استعمال اور زہر سے محفوظ خوراک۔'
    },
    commonMistakes: {
      en: [
        'Applying fresh raw dung directly onto standing leafy or edible vegetables.',
        'Picking vegetables before the pesticide waiting period ends.',
        'Growing the same vegetable family in the same bed every season without rotation.',
        'Flooding flat beds instead of using raised beds with furrow/drip irrigation.'
      ],
      ur: [
        'کھڑی سبزیوں پر تازہ کچا گوبر ڈالنا جو پتوں یا کھانے کے حصے پر لگے۔',
        'سپرے کا انتظاری وقت پورا ہونے سے پہلے سبزی توڑ لینا۔',
        'ایک ہی جگہ مسلسل ایک جیسی سبزی لگا کر ہیر پھیر نہ کرنا۔',
        'اونچے بیڈ اور کھال/ڈرپ کے بجائے کھلا پانی بھرنا۔'
      ]
    },
    summary: {
      en: 'Grow on raised beds with furrow/drip irrigation, straw mulch, compost (never fresh dung on edible parts), crop rotation, and marigold trap crops.',
      ur: 'اونچے بیڈ، ڈرپ/کھال کی آبپاشی، ملچ، گلی سڑی کمپوسٹ (تازہ گوبر نہیں)، ہیر پھیر اور گیندے کی ٹریپ فصل کے ساتھ کاشت کریں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Specific sowing dates, varieties, seed rates, spacing, fertilizer doses, and pest sprays for each individual vegetable — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: ہر سبزی کی الگ تاریخِ کاشت، اقسام، بیج کی مقدار، فاصلہ، کھاد اور سپرے — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    nextRotationIds: [
      {
        targetId: 'mung-bean',
        badgeEn: 'Legume Bed Restorer',
        badgeUr: 'دال سے بحالی',
        reasonEn: 'Rotate vegetable beds with a short pulse like mung bean to break root diseases and restore nitrogen.',
        reasonUr: 'سبزیوں کے بیڈ میں دال گھمانے سے جڑوں کی بیماریاں رکتی اور نائٹروجن بحال ہوتی ہے۔'
      },
      {
        targetId: 'maize',
        badgeEn: 'Raised-Bed Companion',
        badgeUr: 'بیڈ پر اگلی فصل',
        reasonEn: 'Maize thrives on existing raised vegetable beds.',
        reasonUr: 'سبزیوں کے بنے ہوئے اونچے بیڈ پر مکئی آسانی سے اگتی ہے۔'
      }
    ]
  },

  {
    id: 'citrus',
    num: 16,
    nameEn: 'Citrus (Kinnow & Malta)',
    nameUr: 'ترشاوہ باغات (کینو اور مالٹا)',
    scientificName: 'Citrus reticulata',
    seasonClass: 'orchard',
    seasonClassEn: 'Perennial Orchard (Kinnow / Citrus)',
    seasonClassUr: 'باغات / سدا بہار پھل',
    photo: './images/crop-stages-orchards.jpg',
    photoGroup: 'orchards',
    diagramType: 'orchard',
    stageCaptions: {
      en: [
        'Stage 1 — Spring Blossom & Basin Mulch: Keep tree basins covered with straw mulch; avoid fresh wounds on bark.',
        'Stage 2 — Developing Green Fruit & Intercrop: Plant legume/fodder cover between rows; apply compost twice a year.',
        'Stage 3 — Ripe Kinnow/Citrus Harvest: Clean orchard floor and nursery/fruit diversification boost income.'
      ],
      ur: [
        'مرحلہ 1 — بہار کے پھول اور تھالے کی ملچنگ: درخت کے تھالے پر ملچ بچھائیں اور تنے کو زخمی نہ کریں۔',
        'مرحلہ 2 — کچا پھل اور بین الفصلی کور: قطاروں میں دال یا چارہ لگائیں اور سال میں دو بار کمپوسٹ دیں۔',
        'مرحلہ 3 — پکا کینو/مالٹا: باغات سے متنوع آمدنی اور صحت مند مٹی۔'
      ]
    },
    suitableSeason: {
      en: 'Perennial orchard tree thriving in Narowal (`Section 10.6`: Kinnow and citrus thrive in the region; also planted along boundaries/canals). Unverified in handbook: exact transplanting months, rootstocks/varieties, and fruit-harvest dates — confirm with the Punjab Agriculture Department.',
      ur: 'نارووال کے علاقے میں خوب پھلنے والا سدا بہار باغ (کینو اور مالٹا؛ حدود اور کھالوں کے کنارے بھی موزوں)۔ غیر تصدیق شدہ: پودے لگانے کے حتمی مہینے، اقسام اور کٹائی کا وقت — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Ensure good drainage (citrus dislikes Waterlogging); plant along field boundaries/canals at wide spacing near cropland so trees do not shade or drain adjacent wheat.',
      ur: 'اچھی نکاسی یقینی بنائیں (پانی کھڑا نہ ہو)؛ اگر فصل کے کنارے لگائیں تو کھلا فاصلہ رکھیں تاکہ سایہ یا جڑیں فصل کو متاثر نہ کریں۔'
    },
    seedSowing: {
      en: 'Obtain healthy certified nursery saplings; intercrop young orchard alleys with legumes, fodder, or vegetables for early household income. Unverified in handbook: exact nursery propagation/grafting dates.',
      ur: 'صحت مند تصدیق شدہ نرسری کے پودے لگائیں؛ نئے باغ کی قطاروں میں دال، چارہ یا سبزیاں اگائیں۔ غیر تصدیق شدہ: پیوندکاری اور نرسری کے حتمی اوقات۔'
    },
    spacing: {
      en: 'Handbook advises keeping "wide spacing near cropland" for boundary trees, but exact orchard tree-to-tree spacing (feet/meters) and pit sizes are NOT verified in the handbook — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک کھیت کے قریب کھلا فاصلہ رکھنے کا مشورہ دیتی ہے، تاہم باغ میں درختوں کا درست فاصلہ (فٹ/میٹر) اور گڑھے کا سائز درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Mulch the tree basin heavily to retain soil moisture and cool roots; avoid standing water touching tree trunks. Unverified in handbook: exact seasonal orchard irrigation intervals.',
      ur: 'درخت کے تھالے میں ملچ بچھا کر نمی بچائیں اور تنے کے ساتھ پانی کھڑا نہ ہونے دیں۔ غیر تصدیق شدہ: باغ کی آبپاشی کا حتمی شیڈول۔'
    },
    nutrients: {
      en: 'VERIFIED HANDBOOK PRACTICE: Apply Compost twice a year, mulch the tree basin, and plant legume/fodder cover between rows to build Soil Organic Matter. Unverified: exact macro/micronutrient fertilizer grams per tree age.',
      ur: 'ہینڈ بک کا طریقہ: سال میں دو بار کمپوسٹ ڈالیں، تھالے میں ملچ بچھائیں اور قطاروں کے درمیان دال یا چارے کی کور کراپ لگائیں۔ غیر تصدیق شدہ: درخت کی عمر کے مطابق کیمیائی کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'AVOID TRUNK WOUNDS from tractors/machinery (wounds let disease in). Cover between-row soil with legumes/fodder to suppress weeds; install bird perches and protect ladybirds and lacewings against citrus psylla/aphids. Unverified: exact fungicide/fruit-fly chemical sprays.',
      ur: 'مشینری اور ٹریکٹر سے تنے کو زخم لگنے سے بچائیں۔ قطاروں میں دال/چارے سے جڑی بوٹیاں دبائیں اور لیڈی برڈ کی حفاظت کریں۔ غیر تصدیق شدہ: پھل کی مکھی یا سٹریس سائلہ کی دوا کی مقدار۔'
    },
    harvestStorage: {
      en: 'Diversifies farm income across seasons; orchard/nursery plants can also provide value-added income. Unverified: exact harvest TSS/acid maturity and wax/cold-store standards.',
      ur: 'مختلف موسموں میں آمدنی بانٹتا ہے؛ نرسری کے پودے اور صاف پھل اضافی منافع دیتے ہیں۔ غیر تصدیق شدہ: کٹائی کی مٹھاس اور سٹوریج کا معیار۔'
    },
    regenerativeRole: {
      en: 'Long-term carbon storage, permanent living roots, windbreak shelter for birds that eat crop pests, and resilient household orchard income.',
      ur: 'مستقل زندہ جڑیں، ہوا کی روک، کیڑے کھانے والے پرندوں کی پناہ گاہ اور خاندان کے لیے پائیدار آمدنی۔'
    },
    commonMistakes: {
      en: [
        'Wounding citrus trunks with rotavators or implements during weeding.',
        'Leaving tree basins bare and baked under summer sun instead of mulching.',
        'Deep ploughing between mature orchard rows (cuts surface feeder roots).'
      ],
      ur: [
        'گوڈی یا ٹریکٹر کے دوران درخت کے تنے کو زخمی کرنا۔',
        'تھالے کو ملچ کیے بغیر تپتی دھوپ میں ننگا چھوڑنا۔',
        'بڑے باغ کی قطاروں میں گہرا ہل چلا کر اوپری جڑیں کاٹ دینا۔'
      ]
    },
    summary: {
      en: 'Thrives in Narowal; mulch tree basins, grow legume/fodder cover between rows, apply compost twice yearly, intercrop young orchards, and protect trunks from machinery wounds.',
      ur: 'نارووال میں خوب پھلتا ہے؛ تھالے میں ملچ بچھائیں، قطاروں میں دال/چارہ لگائیں، سال میں دو بار کمپوسٹ دیں اور تنے کو مشینری کے زخم سے بچائیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Exact tree spacing (feet/m), rootstock/variety names, pruning calendar, NPK doses per tree age, and fruit-fly/citrus-psylla sprays — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: درختوں کا درست فاصلہ، اقسام، کانٹ چھانٹ کا وقت، کھاد کی مقدار اور کیڑوں کے سپرے — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    nextRotationIds: [
      {
        targetId: 'mung-bean',
        badgeEn: 'Orchard Intercrop',
        badgeUr: 'باغ میں بین الفصلی',
        reasonEn: 'Handbook recommends legume cover crops between young orchard rows for income and nitrogen.',
        reasonUr: 'نئے باغ کی قطاروں میں مونگ نقد آمدنی اور نائٹروجن دیتی ہے۔'
      },
      {
        targetId: 'berseem',
        badgeEn: 'Winter Alley Cover',
        badgeUr: 'سردیوں کا کور کراپ',
        reasonEn: 'Winter legume fodder between young rows suppresses weeds and feeds dairy livestock.',
        reasonUr: 'سردیوں میں قطاروں کے درمیان برسیم چارہ اور نائٹروجن دیتا ہے۔'
      }
    ]
  },

  {
    id: 'guava',
    num: 17,
    nameEn: 'Guava',
    nameUr: 'امرود',
    scientificName: 'Psidium guajava',
    seasonClass: 'orchard',
    seasonClassEn: 'Perennial Orchard / Boundary Fruit',
    seasonClassUr: 'باغات اور حدبندی کا پھل',
    photo: './images/crop-stages-orchards.jpg',
    photoGroup: 'orchards',
    diagramType: 'orchard',
    stageCaptions: {
      en: [
        'Stage 1 — Boundary or Orchard Planting: Mulch the tree basin and keep wide spacing near crops.',
        'Stage 2 — Cover Cropped Alleys: Plant legumes/fodder between rows; apply compost twice a year.',
        'Stage 3 — Fruit Harvest: Protect trunks from machinery; shelters insect-eating farm birds.'
      ],
      ur: [
        'مرحلہ 1 — باغ یا حدبندی پر کاشت: تھالے میں ملچ بچھائیں اور فصلوں کے قریب کھلا فاصلہ رکھیں۔',
        'مرحلہ 2 — قطاروں میں کور کراپ: دال یا چارہ اگائیں اور سال میں دو بار کمپوسٹ دیں۔',
        'مرحلہ 3 — پھل کی کٹائی: تنے کو زخم سے بچائیں؛ کیڑے کھانے والے پرندوں کو پناہ دیتا ہے۔'
      ]
    },
    suitableSeason: {
      en: 'Perennial fruit tree thriving in Narowal orchards and recommended along field boundaries, canals, and low corners (`Section 5.3 & 10.6`). Unverified: exact winter vs. summer crop-flush pruning dates & varieties.',
      ur: 'نارووال کے باغات، کھیتوں کی حدود اور نہروں پر خوب چلنے والا درخت۔ غیر تصدیق شدہ: گرمی و سردی کی فصلوں کے لیے کانٹ چھانٹ کی تاریخیں اور اقسام — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Avoid Waterlogging in low corners; keep wide spacing near adjacent cropland so shade and roots do not hurt neighbouring crops.',
      ur: 'نشیبی کونوں میں پانی کھڑا نہ ہونے دیں اور کھیت کی فصل کے قریب کھلا فاصلہ رکھیں۔'
    },
    seedSowing: {
      en: 'Use healthy certified orchard saplings; intercrop young orchards with legumes, fodder, or vegetables for early income. Unverified: exact nursery budding/propagation method.',
      ur: 'تصدیق شدہ صحت مند پودے لگائیں اور نئے باغ میں بین الفصلی کاشت کریں۔ غیر تصدیق شدہ: نرسری تیاری اور اقسام۔'
    },
    spacing: {
      en: 'Exact tree-to-tree spacing and pit dimensions are NOT verified in the handbook — confirm with the Punjab Agriculture Department.',
      ur: 'درختوں کا درست فاصلہ اور گڑھے کا سائز ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Mulch tree basins to retain moisture and cut evaporation. Unverified in handbook: exact seasonal irrigation intervals.',
      ur: 'تھالے میں ملچنگ سے نمی محفوظ رہتی ہے۔ غیر تصدیق شدہ: آبپاشی کا حتمی شیڈول۔'
    },
    nutrients: {
      en: 'Apply compost twice a year, keep basins mulched, and grow legume/fodder cover between rows. Unverified: exact fertilizer doses per tree age.',
      ur: 'سال میں دو بار کمپوسٹ دیں، تھالے میں ملچ بچھائیں اور قطاروں میں دال یا چارہ اگائیں۔ غیر تصدیق شدہ: کیمیائی کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Avoid trunk wounds from tractors/machinery; use traps/sanitation (pheromone traps mentioned in IPM Section 8). Unverified: exact fruit-fly trap spacing and spray rates — confirm with the Punjab Agriculture Department.',
      ur: 'مشینری سے تنے کو زخم نہ لگنے دیں اور فیرومون ٹریپ و صفائی اپنائیں۔ غیر تصدیق شدہ: پھل کی مکھی کے ٹریپ/سپرے کی حتمی مقدار۔'
    },
    harvestStorage: {
      en: 'Fresh orchard fruit diversifies family diet and income across seasons. Unverified: exact picking maturity and cold storage terms.',
      ur: 'تازہ امرود خاندان کی غذائیت اور موسمی آمدنی بڑھاتا ہے۔ غیر تصدیق شدہ: چنائی اور ذخیرے کے حتمی پیمانے۔'
    },
    regenerativeRole: {
      en: 'Combines permanent living roots, windbreak shade, bird habitat for natural pest control, and year-round soil protection under mulch.',
      ur: 'مستقل زندہ جڑیں، سایہ و ہوا کی روک، پرندوں کی پناہ گاہ اور ملچنگ کے ساتھ زمین کی حفاظت۔'
    },
    commonMistakes: {
      en: [
        'Hitting tree trunks with weeding implements or tractor blades.',
        'Leaving tree basins bare without mulch.',
        'Planting densely right on crop borders without local spacing advice.'
      ],
      ur: [
        'گوڈی یا مشینری سے تنے کو زخم لگانا۔',
        'درخت کے تھالے کو بغیر ملچ ننگا چھوڑنا۔',
        'مشورے کے بغیر فصل کے بالکل قریب گھنے درخت لگانا۔'
      ]
    },
    summary: {
      en: 'Ideal for Narowal orchards and boundaries; keep basins mulched, plant alley legumes/fodder, apply compost twice yearly, and protect trunks.',
      ur: 'نارووال کے باغات اور حدود کے لیے بہترین؛ تھالے میں ملچ، قطاروں میں دال/چارہ، سال میں دو بار کمپوسٹ اور تنے کی حفاظت اپنائیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Varieties, planting months, tree spacing, pruning dates, fertilizer doses, and fruit-fly control rates — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: اقسام، لگانے کے مہینے، درختوں کا فاصلہ، کانٹ چھانٹ، کھاد اور پھل کی مکھی کے علاج کی مقدار — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    nextRotationIds: [
      {
        targetId: 'vegetables',
        badgeEn: 'Young Orchard Alley',
        badgeUr: 'نئے باغ میں سبزیاں',
        reasonEn: 'Intercrop young guava rows with vegetables for steady early cash flow.',
        reasonUr: 'نئے امرود کے باغ میں سبزیاں لگا کر ابتدائی آمدنی حاصل کریں۔'
      },
      {
        targetId: 'cowpea',
        badgeEn: 'Alley Legume Cover',
        badgeUr: 'دال دار کور',
        reasonEn: 'Builds Soil Organic Matter and nitrogen between tree rows.',
        reasonUr: 'قطاروں کے درمیان نائٹروجن اور نامیاتی مادہ بڑھاتی ہے۔'
      }
    ]
  },

  {
    id: 'mango',
    num: 18,
    nameEn: 'Mango',
    nameUr: 'آم',
    scientificName: 'Mangifera indica',
    seasonClass: 'orchard',
    seasonClassEn: 'Perennial Orchard',
    seasonClassUr: 'باغات / سدا بہار پھل',
    photo: './images/crop-stages-orchards.jpg',
    photoGroup: 'orchards',
    diagramType: 'orchard',
    stageCaptions: {
      en: [
        'Stage 1 — Mulched Basin & Young Intercrop: Protect young trees from frost; mulch basin and intercrop alleys.',
        'Stage 2 — Flowering & Canopy Care: Avoid spraying during bloom; protect pollinators and birds.',
        'Stage 3 — Summer Fruit Harvest: Apply compost twice a year and prevent trunk wounds.'
      ],
      ur: [
        'مرحلہ 1 — تھالے کی ملچنگ اور بین الفصلی: سردیوں کے کورے سے بچاؤ، ملچنگ اور نئے باغ میں بین الفصلی کاشت۔',
        'مرحلہ 2 — پھول اور دیکھ بھال: پھول آنے پر سپرے نہ کریں؛ مکھیوں و پرندوں کی حفاظت کریں۔',
        'مرحلہ 3 — گرمائی پھل: سال میں دو بار کمپوسٹ دیں اور تنے کو مشینری کے زخم سے بچائیں۔'
      ]
    },
    suitableSeason: {
      en: 'Perennial orchard tree thriving in Narowal (`Section 10.6`); note Narowal has cool winters with occasional frost, so protect young saplings carefully. Unverified: exact local varieties and planting months — confirm with the Punjab Agriculture Department.',
      ur: 'نارووال کے باغات میں کامیاب (چونکہ نارووال میں سردی اور کبھی کبھار کورا پڑتا ہے، چھوٹے پودوں کی حفاظت ضروری ہے)۔ غیر تصدیق شدہ: مقامی اقسام اور لگانے کے مہینے — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Choose well-drained loam sites without Waterlogging; intercrop young orchards for early income while trees establish.',
      ur: 'پانی کھڑا نہ ہونے والی میرا زمین چنیں اور نئے باغ میں بین الفصلی کاشت کریں۔'
    },
    seedSowing: {
      en: 'Plant healthy grafted saplings from reliable nurseries. Unverified in handbook: approved Narowal mango cultivars and pit mixtures — confirm with the Punjab Agriculture Department.',
      ur: 'معتبر نرسری سے صحت مند پیوندی پودے لگائیں۔ غیر تصدیق شدہ: منظور شدہ اقسام اور گڑھے کی تیاری — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    spacing: {
      en: 'Exact orchard tree-to-tree spacing is NOT verified in the handbook — confirm wide orchard spacing with the Punjab Agriculture Department.',
      ur: 'باغ میں درختوں کا درست فاصلہ ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Mulch tree basins to preserve moisture during May–June >40°C heatwaves. Unverified in handbook: exact orchard irrigation intervals.',
      ur: 'مئی–جون کی 40°C سے زیادہ گرمی میں تھالے پر ملچنگ سے نمی محفوظ رکھیں۔ غیر تصدیق شدہ: آبپاشی کا حتمی شیڈول۔'
    },
    nutrients: {
      en: 'Apply compost twice a year, keep basins mulched, and grow legume or fodder cover between rows. Unverified: exact nutrient doses per tree age.',
      ur: 'سال میں دو بار کمپوسٹ ڈالیں، تھالے ڈھانپیں اور قطاروں میں دال یا چارہ لگائیں۔ غیر تصدیق شدہ: درخت کی عمر کے لحاظ سے کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Avoid trunk wounds from machinery; suppress weeds with alley legume cover; protect Beneficial Insects and birds, and avoid spraying during bloom. Unverified: exact hopper/mealybug/anthracnose chemical controls.',
      ur: 'مشینری سے تنے کو زخم سے بچائیں؛ قطاروں میں دال یا چارے سے جڑی بوٹیاں دبائیں اور پھول کے وقت سپرے نہ کریں۔ غیر تصدیق شدہ: تیلے، گدھیڑی یا بیماریوں کی دوا کی مقدار۔'
    },
    harvestStorage: {
      en: 'Adds high-value summer fruit income alongside nursery/value-add diversification. Unverified: exact harvest maturity and ripening protocols.',
      ur: 'گرمیوں میں اعلیٰ قدر والی آمدنی دیتا ہے۔ غیر تصدیق شدہ: پھل پکنے اور ذخیرہ کرنے کے پیمانے۔'
    },
    regenerativeRole: {
      en: 'Deep permanent roots cycle deep subsoil nutrients, shade crops/livestock along orchard edges, and anchor perennial Soil Organic Matter.',
      ur: 'گہری مستقل جڑیں زمین کے نیچے سے غذائیت اوپر لاتی ہیں، سایہ دیتی ہیں اور مستقل نامیاتی مادہ بناتی ہیں۔'
    },
    commonMistakes: {
      en: [
        'Damaging bark/trunks with tractor cultivators.',
        'Leaving tree basins unmulched under 50–60°C surface heat.',
        'Failing to cover young saplings during Narowal winter frost.'
      ],
      ur: [
        'ٹریکٹر کے آلات سے تنے کو زخمی کرنا۔',
        'گرمیوں میں تھالے کو بغیر ملچ ننگا چھوڑنا۔',
        'سردیوں کے کورے سے چھوٹے پودوں کو نہ بچانا۔'
      ]
    },
    summary: {
      en: 'Perennial Narowal orchard crop; keep tree basins mulched, grow legume/fodder alley cover, apply compost twice a year, and prevent trunk wounds.',
      ur: 'نارووال کا قیمتی باغ؛ تھالے میں ملچ، قطاروں میں دال/چارہ، سال میں دو بار کمپوسٹ اور تنے کو زخم سے بچانا بنیادی اصول ہیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Cultivars/varieties, planting dates, tree spacing, winter frost-cover schedules, NPK rates, and hopper/mealybug spray doses — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: اقسام، لگانے کا وقت، فاصلہ، کھاد اور کیڑوں کے سپرے کی مقدار — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    nextRotationIds: [
      {
        targetId: 'chickpea',
        badgeEn: 'Rabi Alley Legume',
        badgeUr: 'ربیع بین الفصلی دال',
        reasonEn: 'Young mango alleys benefit from winter legumes like chickpea or berseem.',
        reasonUr: 'نئے آم کے باغ کی قطاروں میں چنا یا برسیم زمین اور آمدنی دونوں بڑھاتے ہیں۔'
      },
      {
        targetId: 'mung-bean',
        badgeEn: 'Summer Alley Legume',
        badgeUr: 'گرمائی بین الفصلی',
        reasonEn: 'Keeps alley soil covered in May–June while earning pulse income.',
        reasonUr: 'مئی–جون میں زمین ڈھانپنے اور آمدنی کے لیے بہترین۔'
      }
    ]
  },

  {
    id: 'jujube',
    num: 19,
    nameEn: 'Jujube (Ber)',
    nameUr: 'بیر',
    scientificName: 'Ziziphus mauritiana',
    seasonClass: 'orchard',
    seasonClassEn: 'Perennial Orchard / Hardy Tree',
    seasonClassUr: 'باغات / سخت جان پھل دار درخت',
    photo: './images/crop-stages-orchards.jpg',
    photoGroup: 'orchards',
    diagramType: 'orchard',
    stageCaptions: {
      en: [
        'Stage 1 — Hardy Establishment: Thrives across Narowal including drier pockets; mulch tree basin.',
        'Stage 2 — Intercrop & Compost: Grow legumes/fodder between rows; apply compost twice yearly.',
        'Stage 3 — Fruit Harvest & Biodiversity: Provides resilient fruit income and shelters insect-eating birds.'
      ],
      ur: [
        'مرحلہ 1 — مضبوط اگاؤ: نارووال سمیت خشک حصوں میں خوب پھلتا ہے؛ تھالے میں ملچ بچھائیں۔',
        'مرحلہ 2 — بین الفصلی اور کمپوسٹ: قطاروں میں دال/چارہ لگائیں اور سال میں دو بار کمپوسٹ دیں۔',
        'مرحلہ 3 — پھل اور ماحول: پائیدار آمدنی اور کیڑے کھانے والے پرندوں کی پناہ گاہ۔'
      ]
    },
    suitableSeason: {
      en: 'Perennial hardy orchard tree listed in handbook (`Section 10.6`: Kinnow, citrus, guava, mango and jujube thrive in the region). Unverified: exact grafted varieties, pruning months, and harvest dates — confirm with the Punjab Agriculture Department.',
      ur: 'نارووال کے علاقے میں کامیاب سخت جان پھل دار درخت۔ غیر تصدیق شدہ: پیوندی اقسام، کانٹ چھانٹ کے مہینے اور کٹائی کا وقت — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    landPrep: {
      en: 'Suited even to lighter or drier upland pockets; protect young basins with bunds and straw mulch to capture monsoon rain.',
      ur: 'ہلکی اور خشک زمینوں میں بھی کامیاب؛ بارش روکنے کے لیے تھالے پر بند اور ملچ بنائیں۔'
    },
    seedSowing: {
      en: 'Use certified grafted nursery saplings and intercrop young orchards with legumes, fodder, or vegetables. Unverified: exact grafting/budding schedule and cultivar names.',
      ur: 'تصدیق شدہ پیوندی پودے لگائیں اور نئے باغ میں دال یا چارہ کاشت کریں۔ غیر تصدیق شدہ: پیوندکاری کا وقت اور اقسام۔'
    },
    spacing: {
      en: 'Exact tree-to-tree spacing and pit sizes are NOT verified in the handbook — confirm with the Punjab Agriculture Department.',
      ur: 'درختوں کا درست فاصلہ اور گڑھے کا سائز ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    irrigation: {
      en: 'Deep roots handle drier spells well; basin mulching cuts evaporation further. Unverified: exact seasonal irrigation timing.',
      ur: 'گہری جڑیں خشک موسم برداشت کرتی ہیں اور تھالے کی ملچنگ پانی بچاتی ہے۔ غیر تصدیق شدہ: آبپاشی کا شیڈول۔'
    },
    nutrients: {
      en: 'Apply compost twice a year, mulch tree basins, and grow legume/fodder cover between rows. Unverified: exact fertilizer grams per tree age.',
      ur: 'سال میں دو بار کمپوسٹ ڈالیں، تھالے میں ملچ بچھائیں اور قطاروں میں دال یا چارہ اگائیں۔ غیر تصدیق شدہ: کیمیائی کھاد کی مقدار۔'
    },
    pestsWeedsDiseases: {
      en: 'Avoid trunk wounds from machinery; keep weeds down via alley cover crops; protect Beneficial Insects and insect-eating birds. Unverified: exact fruit-fly or powdery mildew control rates.',
      ur: 'مشینری سے تنے کو زخم سے بچائیں؛ قطاروں میں کور کراپ سے جڑی بوٹیاں دبائیں اور پرندوں و دوست حشرات کی حفاظت کریں۔ غیر تصدیق شدہ: پھل کی مکھی یا سفوفی پھپھوندی کا علاج۔'
    },
    harvestStorage: {
      en: 'Provides resilient winter/early-spring fruit diversification for smallholders. Unverified: exact picking stage and post-harvest handling.',
      ur: 'چھوٹے کسانوں کے لیے سردیوں کے آخر اور بہار میں پائیدار آمدنی کا ذریعہ ہے۔ غیر تصدیق شدہ: چنائی اور ذخیرے کے پیمانے۔'
    },
    regenerativeRole: {
      en: 'Climate-hardy tree crop that anchors soil against erosion, shelters pest-eating birds, and thrives on lighter soils with minimal water.',
      ur: 'موسمیاتی تبدیلی کے خلاف سخت جان درخت جو مٹی کو کٹاؤ سے بچاتا، پرندوں کو پناہ دیتا اور کم پانی میں اگتا ہے۔'
    },
    commonMistakes: {
      en: [
        'Leaving tree basins bare without straw mulch.',
        'Wounding bark with tractors or weeding tools.',
        'Growing zero cover crops between widely spaced young trees.'
      ],
      ur: [
        'تھالے کو بغیر ملچ ننگا چھوڑنا۔',
        'ٹریکٹر یا آلات سے تنے کو زخمی کرنا۔',
        'نئے باغ کی خالی قطاروں میں دال یا چارہ نہ اگانا۔'
      ]
    },
    summary: {
      en: 'Hardy orchard tree thriving across Narowal; mulch basins, plant alley legume/fodder cover, apply compost twice a year, and guard trunks.',
      ur: 'نارووال کا سخت جان پھل دار درخت؛ تھالے میں ملچ، قطاروں میں دال/چارہ، سال میں دو بار کمپوسٹ اور تنے کی حفاظت اپنائیں۔'
    },
    unverifiedNotice: {
      en: 'Unverified in handbook: Varieties, pruning months, tree spacing, fertilizer doses, and fruit-fly/mildew chemical rates — confirm with the Punjab Agriculture Department.',
      ur: 'ہینڈ بک میں غیر تصدیق شدہ: اقسام، کانٹ چھانٹ کا وقت، فاصلہ، کھاد اور بیماریوں کے سپرے کی مقدار — محکمہ زراعت پنجاب سے تصدیق کریں۔'
    },
    activeMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    nextRotationIds: [
      {
        targetId: 'sorghum',
        badgeEn: 'Dryland Alley Fodder',
        badgeUr: 'بارانی باغ میں چارہ',
        reasonEn: 'Young jujube orchards on lighter soils pair well with sorghum + cowpea fodder alleys.',
        reasonUr: 'ہلکی زمین کے نئے بیر باغ میں جوار اور لوبیا کا چارہ خوب چلتا ہے۔'
      },
      {
        targetId: 'lentil',
        badgeEn: 'Winter Alley Pulse',
        badgeUr: 'سردیوں کی دال',
        reasonEn: 'Adds winter legume cover and household food in young orchard alleys.',
        reasonUr: 'سردیوں میں نئے باغ کی قطاروں میں مسور زمین اور خوراک دونوں دیتا ہے۔'
      }
    ]
  }
];

/* 12-Month Visual Narowal Farming Calendar (Strictly Handbook-Aligned) */
export const NAROWAL_MONTHS = [
  {
    idx: 0,
    shortEn: 'Jan',
    shortUr: 'جنوری',
    nameEn: 'January',
    nameUr: 'جنوری',
    seasonEn: 'Rabi (Cool Winter · Frost Risk)',
    seasonUr: 'ربیع (سرد موسم · کورے کا خدشہ)',
    climateEn: 'Cool Narowal winter with occasional frost; critical Rabi growth & fodder cuts.',
    climateUr: 'نارووال کی ٹھنڈی سردیاں اور کبھی کبھار کورا؛ ربیع فصلوں کی بڑھوتری اور چارے کی کٹائی۔',
    activitiesEn: [
      'Irrigate wheat strictly at critical stages (tillering/jointing) rather than by fixed calendar.',
      'Protect young mango/orchard saplings from occasional frost and keep tree basins mulched.',
      'Harvest berseem green cuttings for dairy livestock; keep compost heap damp and turn every 2–3 weeks.',
      'Scout winter crops and protect ladybirds (`Coccinellidae`) and bees on flowering mustard/canola.'
    ],
    activitiesUr: [
      'گندم کو مقررہ کیلنڈر کے بجائے اہم مراحل (پھوٹ) پر آبپاشی کریں۔',
      'آم اور نئے باغات کے پودوں کو کورے سے بچائیں اور تھالے میں ملچ رکھیں۔',
      'مویشیوں کے لیے برسیم کی کٹائی کریں اور کمپوسٹ کا ڈھیر ہر 2–3 ہفتے بعد پلٹیں۔',
      'فصلوں کا معائنہ کریں اور سرسوں کے پھولوں پر لیڈی برڈ و شہد کی مکھیوں کی حفاظت کریں۔'
    ],
    activeCropIds: ['wheat', 'berseem', 'chickpea', 'lentil', 'mustard', 'canola', 'vegetables', 'citrus', 'guava', 'jujube'],
    verifyNoteEn: 'Exact variety-specific irrigation or frost sprays unverified in handbook — confirm with Punjab Agriculture Department.',
    verifyNoteUr: 'آبپاشی کی حتمی تاریخیں یا کورے کے حفاظتی سپرے ہینڈ بک میں درج نہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
  },
  {
    idx: 1,
    shortEn: 'Feb',
    shortUr: 'فروری',
    nameEn: 'February',
    nameUr: 'فروری',
    seasonEn: 'Rabi (Late Winter · Flowering)',
    seasonUr: 'ربیع (پھول اور پھوٹ کا وقت)',
    climateEn: 'Mild late winter; wheat & oilseed flowering, early orchard blossoms.',
    climateUr: 'خوشگوار موسم؛ گندم و سرسوں کے پھول اور باغات میں بہار۔',
    activitiesEn: [
      'Wheat flowering stage: check critical moisture and avoid late excess nitrogen.',
      'Prepare mature compost (ready in 2–3 months when dark, crumbly, and earthy-smelling).',
      'Do NOT spray insecticides on flowering mustard, canola, or orchards where bees are active.',
      'Verify spring sugarcane or maize planting windows with the Punjab Agriculture Department.'
    ],
    activitiesUr: [
      'گندم کے پھول کا مرحلہ: اہم نمی چیک کریں اور دیر سے زیادہ نائٹروجن نہ دیں۔',
      'تیار شدہ گلی سڑی کمپوسٹ سنبھالیں (گہری بھربھری مٹی جیسی خوشبو پر تیار)۔',
      'پھول آنے کے وقت سرسوں، کینولا یا باغات پر سپرے نہ کریں تاکہ شہد کی مکھیاں محفوظ رہیں۔',
      'بہاریہ گنے یا مکئی کی بوائی کے اوقات محکمہ زراعت پنجاب سے تصدیق کروائیں۔'
    ],
    activeCropIds: ['wheat', 'berseem', 'chickpea', 'lentil', 'mustard', 'canola', 'sugarcane', 'maize', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Exact sugarcane/maize spring sowing dates are unverified in the handbook — check district extension office.',
    verifyNoteUr: 'بہاریہ گنے اور مکئی کی حتمی تاریخیں ہینڈ بک میں درج نہیں — مقامی زرعی دفتر سے تصدیق کریں۔'
  },
  {
    idx: 2,
    shortEn: 'Mar',
    shortUr: 'مارچ',
    nameEn: 'March',
    nameUr: 'مارچ',
    seasonEn: 'Rabi Grain Filling',
    seasonUr: 'ربیع (دانہ بھرنے کا وقت)',
    climateEn: 'Warming temperatures; wheat grain filling and orchard spring flush.',
    climateUr: 'موسم گرم ہونا؛ گندم میں دانہ بھرنے اور باغات کے پھوٹ کا وقت۔',
    activitiesEn: [
      'Wheat grain-filling stage: timely November sowing protects grain before April heat.',
      'Let one extra berseem cutting go back into the soil as green manure if fodder is surplus.',
      'Apply first of twice-yearly orchard compost and check tree basin mulch before summer heat.',
      'Harvest ripe mustard/canola cleanly; scout early sugarcane/maize plots twice weekly.'
    ],
    activitiesUr: [
      'گندم کا دانہ بھرنے کا مرحلہ: نومبر کی بروقت بوائی اپریل کی گرمی سے بچاتی ہے۔',
      'اگر برسیم فالتو ہو تو ایک کٹائی زمین میں واپس ملا کر سبز کھاد بنائیں۔',
      'گرمی سے پہلے باغات میں سال کی پہلی کمپوسٹ ڈالیں اور تھالے میں ملچ مضبوط کریں۔',
      'سرسوں/کینولا کی صفائی سے کٹائی اور نئے گنے یا مکئی کا ہفتہ وار معائنہ کریں۔'
    ],
    activeCropIds: ['wheat', 'berseem', 'chickpea', 'lentil', 'mustard', 'canola', 'sugarcane', 'maize', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Exact harvest dates depend on variety and rainfall — confirm local advisories.',
    verifyNoteUr: 'کٹائی کی تاریخیں قسم اور موسم پر منحصر ہیں — مقامی ایڈوائزری دیکھیں۔'
  },
  {
    idx: 3,
    shortEn: 'Apr',
    shortUr: 'اپریل',
    nameEn: 'April',
    nameUr: 'اپریل',
    seasonEn: 'Rabi Harvest → Zaid Opens',
    seasonUr: 'ربیع کی کٹائی ← زائد کا آغاز',
    climateEn: 'Rising heat stress during late wheat grain filling; Zaid sowing window opens after wheat harvest.',
    climateUr: 'گرمی میں اضافہ؛ گندم کی کٹائی کے ساتھ زائد (اپریل–مئی) بوائی کا آغاز۔',
    activitiesEn: [
      'Harvest wheat, chickpea, and lentil; save clean seed & fodder reserves and keep straw (bhoosa) as feed or 3–5 cm mulch—DO NOT BURN.',
      'Zaid window begins: sow Mung Bean (55–65 day cash legume) with fresh Rhizobium inoculant after wheat.',
      'Prepare soil lab samples (10–15 spots, 0–15 cm) or plan a 2–4 kanal trial plot with your farmer group.',
      'Trash-mulch between sugarcane rows to hold moisture as temperatures climb.'
    ],
    activitiesUr: [
      'گندم، چنا اور مسور کی کٹائی؛ بیج و بھوسہ محفوظ کریں، باقیات جلائیں نہیں۔',
      'زائد کا آغاز: گندم کے بعد تازہ رائزوبیم کے ساتھ 55–65 دن کی مونگ بوئیں۔',
      'مٹی کے لیبارٹری ٹیسٹ (10–15 جگہوں سے 0–15 cm) اور کسان گروپ کے ساتھ 2–4 کنال تجرباتی قطعہ طے کریں۔',
      'گرمی بڑھنے پر گنے کی قطاروں میں پتیوں کی ملچنگ کریں۔'
    ],
    activeCropIds: ['wheat', 'mung-bean', 'sesbania', 'sugarcane', 'maize', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Confirm Punjab-approved mung bean varieties and seed rates with the Punjab Agriculture Department.',
    verifyNoteUr: 'مونگ کی منظور شدہ اقسام اور بیج کی مقدار محکمہ زراعت پنجاب سے تصدیق کریں۔'
  },
  {
    idx: 4,
    shortEn: 'May',
    shortUr: 'مئی',
    nameEn: 'May',
    nameUr: 'مئی',
    seasonEn: 'Zaid & Pre-Kharif (Peak Heat >40°C)',
    seasonUr: 'زائد اور خریف تیاری (شدید گرمی >40°C)',
    climateEn: 'Hot Narowal summer often >40°C; bare soil surface hits 50–60°C without mulch or cover crops.',
    climateUr: 'شدید گرمی اکثر 40°C سے اوپر؛ کھلی مٹی کی سطح 50–60°C تک گرم ہو جاتی ہے۔',
    activitiesEn: [
      'Starter Plan Kharif Prep: Sow Sesbania / Dhaincha green manure (20–25 kg/acre) after wheat if irrigation is available.',
      'Also sow Mung Bean or Cowpea so soil stays shaded below 50–60°C surface heat.',
      'Laser-level rice fields with neighbour groups (saves ~20–30% water) and start a shaded compost heap near water.',
      'Prepare healthy Basmati rice nursery beds enriched with compost; clear monsoon drains early.'
    ],
    activitiesUr: [
      'خریف تیاری: آبپاشی ہو تو گندم کے بعد 20–25 kg/acre سنبھالو (ڈھینچا) سبز کھاد بوئیں۔',
      'مونگ یا لوبیا سے زمین ڈھانپیں تاکہ سطح 50–60°C تپش سے بچی رہے۔',
      'پڑوسیوں کے ساتھ مل کر لیزر لیولنگ کروائیں (20–30% پانی بچتا ہے) اور سایہ میں کمپوسٹ ڈھیر شروع کریں۔',
      'باسمتی پنیری کی کیاریوں میں کمپوسٹ ڈالیں اور مون سون سے پہلے نالیاں صاف کرنا شروع کریں۔'
    ],
    activeCropIds: ['basmati-rice', 'mung-bean', 'sesbania', 'cowpea', 'sugarcane', 'sorghum', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Exact Basmati nursery sowing dates and recommended varieties require verification from the Punjab Agriculture Department.',
    verifyNoteUr: 'باسمتی پنیری کی حتمی تاریخیں اور اقسام محکمہ زراعت پنجاب سے تصدیق کروائیں۔'
  },
  {
    idx: 5,
    shortEn: 'Jun',
    shortUr: 'جون',
    nameEn: 'June',
    nameUr: 'جون',
    seasonEn: 'Kharif Sowing & Pre-Monsoon',
    seasonUr: 'خریف بوائی اور پری مون سون',
    climateEn: 'Very hot (>40°C) until pre-monsoon showers arrive; prepare bunds and drains before July rain.',
    climateUr: 'جولائی کی بارشوں سے پہلے سخت گرمی (>40°C)؛ نالیوں اور بندوں کی صفائی کا آخری موقع۔',
    activitiesEn: [
      'Roll down or incorporate 45–55 day flowering Sesbania green manure 1–2 weeks before transplanting rice.',
      'Harvest Zaid Mung Bean (55–65 days) and leave residue as soil cover.',
      'Install 15 cm perforated AWD pipe on rice trial plot; prepare bunds & recharge pits to harvest rain.',
      'Clear drains & nullahs before July monsoon; sow Sorghum + Cowpea across slopes in Shakargarh.'
    ],
    activitiesUr: [
      '45–55 دن کی پھولوں پر آئی سنبھالو سبز کھاد چاول کی منتقلی سے 1–2 ہفتے پہلے زمین میں دبا دیں۔',
      '55–65 دن کی زائد مونگ کی کٹائی کریں اور باقیات زمین پر رہنے دیں۔',
      'تجرباتی قطعے پر چاول کے لیے 15 cm اے ڈبلیو ڈی پائپ لگائیں؛ بارش روکنے کو بند مضبوط کریں۔',
      'جولائی سے پہلے نکاسی کی نالیاں صاف کریں؛ شکرگڑھ میں جوار+لوبیا ڈھلوان کے آر پار بوئیں۔'
    ],
    activeCropIds: ['basmati-rice', 'mung-bean', 'sesbania', 'cowpea', 'sorghum', 'maize', 'sugarcane', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Confirm exact district rice transplanting dates and DSR recommendations with the Punjab Agriculture Department.',
    verifyNoteUr: 'چاول کی منتقلی کی حتمی تاریخیں اور ڈی ایس آر سفارشات محکمہ زراعت پنجاب سے تصدیق کریں۔'
  },
  {
    idx: 6,
    shortEn: 'Jul',
    shortUr: 'جولائی',
    nameEn: 'July',
    nameUr: 'جولائی',
    seasonEn: 'Kharif · Monsoon Begins',
    seasonUr: 'خریف · مون سون کا آغاز',
    climateEn: 'July–September monsoon brings main rain (higher than southern Punjab, but uneven with flood/waterlogging risk along Ravi & Deg/Basantar).',
    climateUr: 'جولائی–ستمبر مون سون کی بارشیں (راوی اور ڈیک/بسنتر کے ساتھ سیلاب یا پانی کھڑا ہونے کا خطرہ)۔',
    activitiesEn: [
      'Plant boundary & orchard trees (Shisham, Kikar, Neem, Jand, Mulberry, Guava, Citrus) with monsoon moisture.',
      'Run 15 cm AWD pipe checks in transplanted Basmati; keep drains clear against Waterlogging.',
      'Scout twice weekly (10 plants/spot) for stem borer, leaf folder, and maize Fall Armyworm; install T-perches & traps.',
      'Never run heavy tractors on wet waterlogged fields.'
    ],
    activitiesUr: [
      'مون سون کی نمی میں کھیت کی حدود پر شیشم، کیکر، نیم، جنڈ، شہتوت، امرود اور کینو لگائیں۔',
      'باسمتی میں 15 cm اے ڈبلیو ڈی پائپ کی نگرانی اور پانی کھڑا ہونے سے بچاؤ کے لیے نالیاں کھلی رکھیں۔',
      'ہفتے میں دو بار 10 پودوں کا معائنہ کریں (تنا چھید سنڈی، فال آرمی ورم)؛ پرندوں کے ڈنڈے اور ٹریپ لگائیں۔',
      'گیلی زمین میں بھاری مشینری ہرگز نہ چلائیں۔'
    ],
    activeCropIds: ['basmati-rice', 'mash-bean', 'sorghum', 'cowpea', 'maize', 'sugarcane', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Exact variety transplanting cut-offs and kharif pulse sowing windows require local verification.',
    verifyNoteUr: 'خریف دالوں اور منتقلی کی حتمی تاریخیں مقامی زرعی دفتر سے تصدیق کریں۔'
  },
  {
    idx: 7,
    shortEn: 'Aug',
    shortUr: 'اگست',
    nameEn: 'August',
    nameUr: 'اگست',
    seasonEn: 'Kharif · Peak Monsoon',
    seasonUr: 'خریف · بھرپور مون سون',
    climateEn: 'Peak monsoon showers; flood vigilance near Ravi and local nullahs, high humidity for pests.',
    climateUr: 'بھرپور مون سون؛ راوی اور مقامی نالوں میں طغیانی کا خطرہ اور نمی میں کیڑوں کا دباؤ۔',
    activitiesEn: [
      'Continue twice-weekly field scouting (10 plants/spot); release Trichogramma chilonis cards in rice & sugarcane.',
      'Protect ladybirds, lacewings, spiders, and dragonflies; use homemade neem spray (~1 kg/10 L) only when needed.',
      'Avoid excess nitrogen in Basmati rice and late nitrogen in sugarcane.',
      'Weed channels and bunds early before monsoon weeds set seed; turn compost every 2–3 weeks.'
    ],
    activitiesUr: [
      'ہفتہ وار دو بار معائنہ جاری رکھیں؛ چاول اور گنے میں ٹرائیکوگراما کارڈ باندھیں۔',
      'فائدہ مند حشرات کی حفاظت کریں اور صرف ضرورت پر شام کو نیم کا سپرے استعمال کریں۔',
      'باسمتی اور گنے میں زیادہ یا دیر سے نائٹروجن دینے سے بچیں۔',
      'نالیوں اور مینڈھوں پر جڑی بوٹیاں بیج بننے سے پہلے صاف کریں اور کمپوسٹ پلٹتے رہیں۔'
    ],
    activeCropIds: ['basmati-rice', 'mash-bean', 'sorghum', 'cowpea', 'maize', 'sugarcane', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Confirm biological product availability (Trichogramma/Bt) and emergency flood advisories with Narowal Extension Office.',
    verifyNoteUr: 'ٹرائیکوگراما/بی ٹی کی دستیابی اور سیلابی احتیاطی تدابیر ضلعی زرعی دفتر سے معلوم کریں۔'
  },
  {
    idx: 8,
    shortEn: 'Sep',
    shortUr: 'ستمبر',
    nameEn: 'September',
    nameUr: 'ستمبر',
    seasonEn: 'Late Kharif · Pre-Rabi Planning',
    seasonUr: 'آخری خریف · ربیع کی تیاری',
    climateEn: 'Monsoon tapers off; rice flowering approaches, post-flood recovery where water stood.',
    climateUr: 'مون سون کا اختتام؛ چاول کے پھول آنے کا وقت اور سیلاب زدہ زمین کی بحالی۔',
    activitiesEn: [
      'IMPORTANT in AWD Rice: keep shallow standing water during flowering stage.',
      'If any field flooded, wait until soil is crumbly before machinery enters; plan compost & green manure recovery.',
      'Arrange Happy Seeder / Zero-Till drill and combine straw-chopper booking with your 5–10 neighbour group.',
      'Check EC/pH if white salt crust appears after drying; plan Rabi legume/oilseed strips.'
    ],
    activitiesUr: [
      'چاول میں ضروری ہدایت: پھول آنے کے وقت کھیت میں ہلکا پانی کھڑا رکھیں۔',
      'اگر کھیت میں سیلاب آیا ہو تو مٹی بھربھری ہونے سے پہلے ٹریکٹر نہ اتاریں۔',
      '5–10 پڑوسیوں کے گروپ کے ساتھ ہیپی سیڈر، زیرو ٹل ڈرل اور اسٹرا چوپر کی بکنگ کریں۔',
      'سفید نمک نظر آئے تو EC/pH ٹیسٹ کروائیں اور ربیع کے لیے دال یا سرسوں کا منصوبہ بنائیں۔'
    ],
    activeCropIds: ['basmati-rice', 'mash-bean', 'sorghum', 'cowpea', 'maize', 'sugarcane', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Exact autumn sugarcane/canola/berseem sowing dates are unverified in handbook — confirm locally.',
    verifyNoteUr: 'ستمبر کاشت گنا، کینولا یا برسیم کی حتمی تاریخیں محکمہ زراعت پنجاب سے تصدیق کریں۔'
  },
  {
    idx: 9,
    shortEn: 'Oct',
    shortUr: 'اکتوبر',
    nameEn: 'October',
    nameUr: 'اکتوبر',
    seasonEn: 'Kharif Harvest → Rabi Sowing Begins',
    seasonUr: 'خریف کٹائی ← ربیع بوائی کا آغاز',
    climateEn: 'Dry autumn weather; high smog risk if rice straw is burned; Oct–Nov Rabi sowing begins.',
    climateUr: 'خشک خزاں؛ پرالی جلانے سے سموگ کا شدید خطرہ؛ اکتوبر–نومبر ربیع بوائی کا آغاز۔',
    activitiesEn: [
      'Harvest early rice with straw chopper/mulcher—NEVER BURN RICE STRAW (1 kanal straw returned = real organic wealth).',
      'Starter Plan Oct–Nov: Sow Rabi Berseem, Mustard/Canola, Chickpea, or Lentil strips (aim for 25% annual legume share).',
      'Apply compost (2–4 tonnes/acre / 1 trolley per kanal) before Rabi sowing; use Rhizobium on winter pulses.',
      'Test soil (10–15 spots, 0–15 cm) before setting Rabi fertilizer doses.'
    ],
    activitiesUr: [
      'چاول کی کٹائی پر کمبائن میں اسٹرا چوپر لگوائیں—پرالی ہرگز نہ جلائیں۔',
      'اکتوبر–نومبر میں برسیم، سرسوں/کینولا، چنا اور مسور کی کاشت شروع کریں (25% دال کا ہدف)۔',
      'بوائی سے پہلے 2–4 tonnes/acre کمپوسٹ ڈالیں اور دالوں پر رائزوبیم ٹیکہ لگائیں۔',
      'ربیع کھاد کی مقدار طے کرنے سے پہلے مٹی کا لیبارٹری ٹیسٹ کروائیں۔'
    ],
    activeCropIds: ['basmati-rice', 'wheat', 'berseem', 'chickpea', 'lentil', 'mustard', 'canola', 'sugarcane', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Confirm exact district Rabi sowing windows for chickpea, lentil, mustard, canola & berseem.',
    verifyNoteUr: 'چنا، مسور، سرسوں، کینولا اور برسیم کی حتمی تاریخیں محکمہ زراعت پنجاب سے تصدیق کریں۔'
  },
  {
    idx: 10,
    shortEn: 'Nov',
    shortUr: 'نومبر',
    nameEn: 'November',
    nameUr: 'نومبر',
    seasonEn: 'Peak Wheat Zero-Till Sowing',
    seasonUr: 'گندم کی زیرو ٹل بوائی کا عروج',
    climateEn: 'Cool autumn; critical timely wheat window (first half of November) and clean-air harvest finish.',
    climateUr: 'خوشگوار خنکی؛ گندم کی بروقت بوائی (نومبر کا پہلا نصف) اور سموگ سے پاک کھیت۔',
    activitiesEn: [
      'Sow Zero-Till / Happy Seeder wheat directly into 3–5 cm chopped rice straw (timely sowing in FIRST HALF OF NOVEMBER avoids April heat stress).',
      'Use certified, treated recommended wheat seed; reduce tillage passes from 6–8 down to 2–3 or direct 1 pass.',
      'Apply compost before sowing, put base fertilizer near roots based on soil test, and plan 2–3 split nitrogen doses.',
      'Sell clean, graded Basmati collectively through your 5–10 farmer group for better prices.'
    ],
    activitiesUr: [
      'نومبر کے پہلے نصف میں 3–5 cm پرالی کے اندر ہیپی سیڈر / زیرو ٹل ڈرل سے گندم بوئیں تاکہ اپریل کی گرمی سے بچا جا سکے۔',
      'تصدیق شدہ دوا لگا بیج استعمال کریں اور 6–8 ہل کے بجائے 2–3 یا براہِ راست بوائی کریں۔',
      'کمپوسٹ اور مٹی ٹیسٹ کے مطابق کھاد جڑوں کے قریب دیں اور نائٹروجن 2–3 قسطوں میں رکھیں۔',
      'کسان گروپ کے ساتھ مل کر صاف اور درجہ بند باسمتی بہتر قیمت پر بیچیں۔'
    ],
    activeCropIds: ['basmati-rice', 'wheat', 'berseem', 'chickpea', 'lentil', 'mustard', 'canola', 'sugarcane', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Verify approved wheat varieties, exact seed rates, and NPK doses with the Punjab Agriculture Department.',
    verifyNoteUr: 'گندم کی منظور شدہ اقسام، بیج کی مقدار اور کھاد کی شرح محکمہ زراعت پنجاب سے تصدیق کریں۔'
  },
  {
    idx: 11,
    shortEn: 'Dec',
    shortUr: 'دسمبر',
    nameEn: 'December',
    nameUr: 'دسمبر',
    seasonEn: 'Rabi Establishment · Critical Wheat Water',
    seasonUr: 'ربیع کا استحکام · گندم کا پہلا اہم پانی',
    climateEn: 'Cold winter starts; wheat crown root initiation & first orchard compost cycle.',
    climateUr: 'سردی کی شدت؛ گندم کی جڑیں بننے کا مرحلہ اور باغات میں دوسری کمپوسٹ۔',
    activitiesEn: [
      'Starter Plan Dec–Mar: Give wheat critical irrigation at crown root initiation (saves 1–2 irrigations total under straw mulch).',
      'Apply split nitrogen near roots; apply second yearly orchard compost & protect tender young trees from cold/frost.',
      'Harvest first finished compost batch (from summer/autumn heaps) and review notebook input vs. yield records.',
      'Hold monthly farmer field day on a neighbour’s Zero-Till wheat trial plot.'
    ],
    activitiesUr: [
      'دسمبر تا مارچ: گندم کو جڑیں بننے کے اہم مرحلے پر پانی دیں (ملچنگ کی وجہ سے مجموعی 1–2 پانی بچتے ہیں)۔',
      'قسطوں میں نائٹروجن جڑوں کے قریب دیں اور باغات میں سال کی دوسری کمپوسٹ و سردی سے بچاؤ کریں۔',
      'تیار شدہ کمپوسٹ استعمال کریں اور تجرباتی و عام قطعے کے اخراجات کا ریکارڈ لکھیں۔',
      'پڑوسی کے زیرو ٹل گندم کے کھیت پر ماہانہ فیلڈ ڈے منعقد کریں۔'
    ],
    activeCropIds: ['wheat', 'berseem', 'chickpea', 'lentil', 'mustard', 'canola', 'sugarcane', 'vegetables', 'citrus', 'guava', 'mango', 'jujube'],
    verifyNoteEn: 'Exact first-irrigation days after sowing vary by rain and soil — verify with the Punjab Agriculture Department.',
    verifyNoteUr: 'بوائی کے بعد پہلے پانی کے دن بارش اور مٹی کے مطابق بدلتے ہیں — محکمہ زراعت پنجاب سے تصدیق کریں۔'
  }
];
