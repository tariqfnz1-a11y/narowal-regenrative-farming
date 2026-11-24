export const ROTATION_CROPS = [
  {
    id: 'rice',
    nameEn: 'Basmati / Rice',
    nameUr: 'باسمتی / چاول',
    family: 'cereal',
    seasonTag: 'Kharif',
    seasonUr: 'خریف',
    coverScore: 65,
    nImpact: -25,
    pestBreakTag: 'paddy-host',
    noteEn: 'High water demand; leaves heavy straw residue — mulch or incorporate, never burn.',
    noteUr: 'زیادہ پانی والی فصل؛ پرالی جلانے کے بجائے ملچنگ یا زمین میں ملائیں۔'
  },
  {
    id: 'wheat',
    nameEn: 'Wheat',
    nameUr: 'گندم',
    family: 'cereal',
    seasonTag: 'Rabi',
    seasonUr: 'ربیع',
    coverScore: 70,
    nImpact: -22,
    pestBreakTag: 'wheat-host',
    noteEn: 'Best sown with Happy Seeder / Zero-Till into rice mulch; watch Phalaris minor if continuous.',
    noteUr: 'چاول کی پرالی میں ہیپی سیڈر سے بوائی بہترین؛ مسلسل گندم میں دُمبی سٹی بڑھتی ہے۔'
  },
  {
    id: 'mung',
    nameEn: 'Mung Bean (Legume)',
    nameUr: 'مونگ (دال)',
    family: 'legume',
    seasonTag: 'Zaid / Summer',
    seasonUr: 'زائد / گرما',
    coverScore: 80,
    nImpact: 32,
    pestBreakTag: 'legume-break',
    noteEn: '55–65 day short legume between wheat & rice; adds natural nitrogen & extra family income.',
    noteUr: 'گندم اور چاول کے درمیان 55–65 دن کی دال؛ قدرتی نائٹروجن اور اضافی آمدنی دیتی ہے۔'
  },
  {
    id: 'dhaincha',
    nameEn: 'Sesbania / Dhaincha',
    nameUr: 'سنبھالو / ڈھینچا',
    family: 'legume',
    seasonTag: 'Zaid Green Manure',
    seasonUr: 'زائد سبز کھاد',
    coverScore: 95,
    nImpact: 45,
    pestBreakTag: 'green-manure',
    noteEn: 'Fast summer cover & green manure (45–55 days); boosts organic matter and eases light salinity.',
    noteUr: '45–55 دن میں زبردست سبز کھاد؛ نامیاتی مادہ بڑھاتی اور ہلکی شوریت کم کرتی ہے۔'
  },
  {
    id: 'berseem',
    nameEn: 'Berseem Clover',
    nameUr: 'برسیم (چارہ و نائٹروجن)',
    family: 'legume',
    seasonTag: 'Rabi Fodder',
    seasonUr: 'ربیع چارہ',
    coverScore: 95,
    nImpact: 38,
    pestBreakTag: 'fodder-break',
    noteEn: 'Continuous living ground cover through winter; smothers wheat weeds like Phalaris minor.',
    noteUr: 'سردیوں بھر زمین ڈھکی رہتی ہے؛ دُمبی سٹی کا چکر توڑتی اور مویشیوں کو چارہ دیتی ہے۔'
  },
  {
    id: 'chickpea',
    nameEn: 'Chickpea / Lentil',
    nameUr: 'چنا / مسور',
    family: 'legume',
    seasonTag: 'Rabi Pulse',
    seasonUr: 'ربیع دال',
    coverScore: 72,
    nImpact: 28,
    pestBreakTag: 'legume-break',
    noteEn: 'Deep taproot breaks hard soil layers with very low irrigation need in barani / light loams.',
    noteUr: 'گہری جڑیں سخت تہہ توڑتی ہیں اور بارانی یا ہلکی میرا زمین میں کم پانی مانگتی ہے۔'
  },
  {
    id: 'mustard',
    nameEn: 'Mustard / Canola',
    nameUr: 'سرسوں / کینولا',
    family: 'oilseed',
    seasonTag: 'Rabi Oilseed',
    seasonUr: 'ربیع تیل دار',
    coverScore: 78,
    nImpact: -10,
    pestBreakTag: 'brassica-break',
    noteEn: 'Taproot opens subsoil and bright yellow flowers attract bees and hoverfly pollinators.',
    noteUr: 'گہری جڑ مٹی کھولتی ہے اور پیلے پھول شہد کی مکھیوں اور فائدہ مند حشرات کو بلاتے ہیں۔'
  },
  {
    id: 'maize',
    nameEn: 'Maize / Sorghum',
    nameUr: 'مکئی / جوار',
    family: 'cereal',
    seasonTag: 'Kharif / Spring',
    seasonUr: 'خریف / بہار',
    coverScore: 62,
    nImpact: -20,
    pestBreakTag: 'maize-host',
    noteEn: 'High biomass feeder; benefits strongly when rotated after Berseem, Mung, or Compost.',
    noteUr: 'زیادہ خوراک لینے والی فصل؛ برسیم، مونگ یا کمپوسٹ کے بعد بہترین نتیجہ دیتی ہے۔'
  },
  {
    id: 'fallow',
    nameEn: 'Bare Fallow (No Cover)',
    nameUr: 'خالی کھیت (بغیر ڈھانپ)',
    family: 'bare',
    seasonTag: 'Open Gap',
    seasonUr: 'خالی وقفہ',
    coverScore: 5,
    nImpact: -12,
    pestBreakTag: 'bare',
    noteEn: 'Leaving May–June topsoil completely bare heats surface to 50–60°C and starves soil microbes.',
    noteUr: 'مئی جون میں زمین ننگی چھوڑنے سے سطح 50–60°C گرم ہو کر مفید جراثیم مار دیتی ہے۔'
  }
];

export const WHEAT_IRRIGATION_STAGES = [
  {
    id: 'cri',
    stageEn: 'Stage 1: Crown Root Initiation (Pehla Pani)',
    stageUr: 'مرحلہ 1: تاج نما جڑیں نکلنا (پہلا پانی)',
    timingEn: 'Approx. 20–25 days after sowing (verify exact sowing-date window locally)',
    timingUr: 'بوائی کے تقریباً 20–25 دن بعد (مقامی تاریخ محکمہ زراعت سے تصدیق کریں)',
    rootDepthCm: 18,
    priorityEn: 'Highest Critical Stage',
    priorityUr: 'انتہائی حساس اور بنیادی مرحلہ',
    impactSkipEn:
      'Missing or delaying first irrigation weakens crown roots and reduces final fertile tillers sharply.',
    impactSkipUr:
      'پہلے پانی میں تاخیر سے بنیادی جڑیں کمزور رہتی ہیں اور شگوفوں کی تعداد میں واضح کمی آتی ہے۔',
    regenNoteEn:
      'With rice straw Mulching or Zero Tillage, soil holds initial moisture longer so seedlings stay cooler.',
    regenNoteUr:
      'پرالی کی ملچنگ یا بغیر ہل کاشت میں ابتدائی نمی زیادہ دیر برقرار رہتی ہے اور پودے مضبوط رہتے ہیں۔'
  },
  {
    id: 'tillering',
    stageEn: 'Stage 2: Active Tillering & Stem Jointing',
    stageUr: 'مرحلہ 2: شگوفے اور گانٹھ بننا',
    timingEn: 'Approx. 45–60 days after sowing (adjust for Narowal winter rain)',
    timingUr: 'بوائی کے تقریباً 45–60 دن بعد (نارووال کی سردیوں کی بارش دیکھ کر فیصلہ کریں)',
    rootDepthCm: 42,
    priorityEn: 'High Growth Support',
    priorityUr: 'اہم بڑھوتری کا مرحلہ',
    impactSkipEn:
      'Severe moisture stress stops side tillers; however, over-flooding during winter rains causes Waterlogging and yellowing.',
    impactSkipUr:
      'شدید خشکی سے شگوفے رک جاتے ہیں، لیکن اگر بارش ہو جائے تو اضافی پانی سیم و زردی پیدا کرتا ہے۔',
    regenNoteEn:
      'Check 10 cm soil squeeze moisture (Home Lab Test 03) before running the tubewell after winter showers.',
    regenNoteUr:
      'سردیوں کی بارش کے بعد ٹیوب ویل چلانے سے پہلے ہاتھ سے مٹی کی نمی (ٹیسٹ 03) ضرور چیک کریں۔'
  },
  {
    id: 'booting',
    stageEn: 'Stage 3: Booting, Heading & Flowering',
    stageUr: 'مرحلہ 3: گوبھ، سٹہ نکلنا اور پھول آنا',
    timingEn: 'Approx. 80–100 days after sowing (Feb–Mar)',
    timingUr: 'بوائی کے تقریباً 80–100 دن بعد (فروری تا مارچ)',
    rootDepthCm: 70,
    priorityEn: 'Critical Pollination Stage',
    priorityUr: 'پھول اور سٹہ بھرنے کا اہم وقت',
    impactSkipEn:
      'Dry stress during booting or flowering reduces grains per spike; apply light water on calm days to prevent lodging.',
    impactSkipUr:
      'گوبھ یا پھول کے وقت کمی سے سٹے میں دانے کم بنتے ہیں؛ تیز ہوا میں بھاری پانی نہ دیں ورنہ فصل گرے گی۔',
    regenNoteEn:
      'Avoid spraying during flowering so bees and hoverflies stay safe; keep wind speed low when irrigating.',
    regenNoteUr:
      'پھول کے وقت زہریلے سپرے سے بچیں اور تیز آندھی میں پانی لگانے سے گریز کریں۔'
  },
  {
    id: 'grainfill',
    stageEn: 'Stage 4: Milk & Dough Grain Filling',
    stageUr: 'مرحلہ 4: دودھیا اور گوندھیا دانہ بننا',
    timingEn: 'Approx. 105–125 days after sowing (Mar–early Apr)',
    timingUr: 'بوائی کے تقریباً 105–125 دن بعد (مارچ تا اپریل آغاز)',
    rootDepthCm: 85,
    priorityEn: 'Grain Weight Protection',
    priorityUr: 'دانے کے وزن کی حفاظت',
    impactSkipEn:
      'Early hot March winds shrink grain weight on bare hard fields; light timely moisture protects grain plumpness.',
    impactSkipUr:
      'مارچ کی گرم ہوا میں ننگی سخت زمین پر دانہ پچک جاتا ہے؛ ہلکی بروقت نمی دانہ موٹا رکھتی ہے۔',
    regenNoteEn:
      'Organic Matter & Mulching keep Narowal clay-loam cool during March heat spells, often saving the final irrigation.',
    regenNoteUr:
      'نامیاتی مادہ اور ملچنگ مارچ کی گرمی میں مٹی کو ٹھنڈا رکھتے ہیں جس سے آخری پانی کی بچت ممکن ہوتی ہے۔'
  }
];

export const SIMULATION_MODULES = [
  {
    id: 'soil-cover',
    num: '01',
    titleEn: 'Simulation 1: Soil Cover (Bare vs. Mulched)',
    titleUr: 'تجربہ 1: زمین کا ڈھانپ (ننگی مٹی بمقابلہ ملچنگ)',
    summary: {
      fivePointsEn: [
        'Bare Punjab soil heated by May–June sun can reach 50–60°C at the surface, harming microbes and earthworms.',
        'Covering soil with 3–5 cm of wheat straw, rice straw, or crop residue shields topsoil from direct sun.',
        'Mulch breaks the impact of heavy Narowal monsoon raindrops, reducing soil crusting and muddy runoff.',
        'Covered soil loses far less moisture through evaporation, often cutting 1–2 irrigations in wheat or orchards.',
        'Over months, earthworms pull surface mulch downward, slowly raising Soil Organic Matter above Narowal’s typical <1%.'
      ],
      fivePointsUr: [
        'مئی جون کی دھوپ میں ننگی زمین کی سطح 50–60°C تک گرم ہو کر مفید جراثیم اور کینچوے مار دیتی ہے۔',
        'گندم کے بھوسے، پرالی یا باقیات کی 3–5 cm تہہ (ملچنگ) مٹی کو سیدھی تپش سے بچاتی ہے۔',
        'ملچنگ مون سون بارش کی تیز بوندوں کا زور توڑ کر کرنڈ اور مٹی کے بہاؤ کو کم کرتی ہے۔',
        'ڈھکی ہوئی زمین میں بخارات کم اڑتے ہیں، جس سے گندم یا باغات میں 1–2 پانی بچ سکتے ہیں۔',
        'وقت کے ساتھ کینچوے اوپری باقیات کو نیچے لے جا کر نامیاتی مادے کو 1% سے اوپر بڑھانے میں مدد دیتے ہیں۔'
      ],
      oneMinEn:
        'Never leave soil naked to sun or rain. Think of crop residue as a shady straw hat over your field: a 3–5 cm mulch layer keeps soil cool, moist, soft after rain, and alive with earthworms without costing cash.',
      oneMinUr:
        'مٹی کو کبھی دھوپ اور بارش میں ننگا نہ چھوڑیں۔ فصلوں کی باقیات کھیت کی پگڑی اور سایہ ہیں: 3–5 cm ملچنگ مٹی کو ٹھنڈا، نم، بارش کے بعد نرم اور کینچووں سے آباد رکھتی ہے۔',
      vocab: [
        { en: 'Mulching', ur: 'ملچنگ (زمین کو باقیات سے ڈھانپنا)' },
        { en: 'Soil Organic Matter', ur: 'نامیاتی مادہ' },
        { en: 'Soil Crusting / Erosion', ur: 'مٹی کا سخت پپڑی بننا اور کٹاؤ' }
      ],
      actionEn:
        'On a 1-kanal plot or orchard tree basins this week, spread 3–5 cm of chopped straw or dry leaves without burning a single handful.',
      actionUr:
        'اس ہفتے کم از کم 1 کنال رقبے یا باغ کے پودوں کے تالوں پر 3–5 cm کتری ہوئی پرالی یا خشک پتے بچھائیں اور کوئی باقیات نہ جلائیں۔'
    }
  },
  {
    id: 'crop-rotation',
    num: '02',
    titleEn: 'Simulation 2: Crop Rotation & Diversity',
    titleUr: 'تجربہ 2: فصلوں کی ادل بدل اور تنوع',
    summary: {
      fivePointsEn: [
        'Continuous Rice–Wheat without break crops exhausts the same root zone and builds up Phalaris minor (Dumbi Sitti) and stem borers.',
        'Legumes like Mung Bean, Mash Bean, Chickpea, Berseem, and Sesbania host Rhizobium bacteria that add natural nitrogen.',
        'The Narowal handbook targets dedicating roughly 25% of farm area each year to legumes or green manure crops.',
        'Winter Berseem gives livestock nutritious fodder while dense canopy cuts help smother grassy weeds naturally.',
        'Short 45–60 day Zaid windows (Apr–Jun) turn bare hot fields into productive Sesbania green manure or cash Mung Bean.'
      ],
      fivePointsUr: [
        'لگاتار چاول اور گندم بونے سے ایک ہی گہرائی کی طاقت ختم ہوتی ہے اور دُمبی سٹی و سنڈیوں کا حملہ بڑھتا ہے۔',
        'دال والی فصلیں مثلاً مونگ، ماش، چنا، برسیم اور سنبھالو جڑوں میں قدرتی نائٹروجن بناتی ہیں۔',
        'نارووال ہینڈ بک کا ہدف ہے کہ ہر سال رقبے کے تقریباً 25% حصے پر دال یا سبز کھاد ضرور لگائی جائے۔',
        'سردیوں کا برسیم مویشیوں کو چارہ دیتا ہے اور بار بار کٹائی سے گندم کی جڑی بوٹیاں ختم کرتا ہے۔',
        'اپریل تا جون کے 45–60 دن کے وقفے میں سنبھالو سبز کھاد یا مونگ لگا کر ننگی زمین سے فائدہ اٹھایا جا سکتا ہے۔'
      ],
      oneMinEn:
        'Growing the same cereal year after year invites the same pests, weeds, and nutrient hunger. Mixing cereals (Rice/Wheat) with legumes (Mung/Berseem/Sesbania) and oilseeds (Mustard) breaks pest cycles and feeds soil naturally.',
      oneMinUr:
        'ایک ہی فصل بار بار اگانے سے کیڑے، جڑی بوٹیاں اور غذائی کمی بڑھتی ہے۔ اناج کے ساتھ دالوں (مونگ، برسیم، سنبھالو) اور سرسوں کی ادل بدل سے کیڑوں کا چکر ٹوٹتا ہے اور زمین تروتازہ رہتی ہے۔',
      vocab: [
        { en: 'Crop Rotation', ur: 'فصلوں کی ادل بدل' },
        { en: 'Green Manure (Dhaincha)', ur: 'سبز کھاد (سنبھالو / ڈھینچا)' },
        { en: 'Rhizobium Root Nodules', ur: 'جڑوں کی نائٹروجن گانٹھیں' }
      ],
      actionEn:
        'Plan your next post-wheat 50-day window on 2 kanals: sow Mung Bean (for grain income) or Sesbania (for rice green manure).',
      actionUr:
        'گندم کے بعد 2 کنال پر 50 دن کا منصوبہ بنائیں: آمدنی کے لیے مونگ یا چاول سے پہلے سبز کھاد کے لیے سنبھالو بوئیں۔'
    }
  },
  {
    id: 'water-management',
    num: '03',
    titleEn: 'Simulation 3: Water Management (Rice AWD & Wheat Stages)',
    titleUr: 'تجربہ 3: پانی کا انتظام (چاول AWD اور گندم کے مراحل)',
    summary: {
      fivePointsEn: [
        'In Rice Alternate Wetting & Drying (AWD), bury a 15 cm perforated pipe; wait to irrigate until water drops 15 cm below soil.',
        'Critical Rule from Handbook: Maintain shallow standing water in rice during FLOWERING so panicles fill properly.',
        'Laser land levelling combined with AWD can cut tubewell diesel hours significantly without hurting yield.',
        'Wheat needs timely moisture most at Crown Root Initiation (~20–25 DAS) and again around Booting/Flowering and Milk stages.',
        'Never pump blindly during Narowal winter or monsoon rains — check root-zone soil moisture and keep field drains clear against Waterlogging.'
      ],
      fivePointsUr: [
        'چاول میں AWD کے لیے 15 cm سوراخ دار پائپ زمین میں دبائیں اور پانی 15 cm نیچے جانے پر ہی دوبارہ آبپاشی کریں۔',
        'ہینڈ بک کی اہم ہدایت: چاول میں پھول آنے (Flowering) کے وقت کھیت میں ہلکا پانی کھڑا رکھنا ضروری ہے۔',
        'لیزر لیولنگ اور AWD مل کر پیداوار گھٹائے بغیر ٹیوب ویل کا ڈیزل اور پانی کافی حد تک بچاتے ہیں۔',
        'گندم کو پہلا پانی تاج نما جڑیں نکلنے (تقریباً 20–25 دن) اور بعد میں گوبھ، پھول و دانہ بھرائی پر بروقت چاہیے۔',
        'بارش کے دنوں میں اندھا دھند ٹیوب ویل نہ چلائیں اور پانی کھڑا ہونے (سیم) سے بچنے کے لیے نکاسی نالیاں صاف رکھیں۔'
      ],
      oneMinEn:
        'Smart irrigation gives water exactly when the crop’s roots need it. Rice does NOT need flooded standing water every week — use the 15 cm AWD pipe except during flowering! In wheat, protect Crown Root Initiation and Flowering stages.',
      oneMinUr:
        'سمجھدار آبپاشی تب پانی دیتی ہے جب جڑوں کو واقعی ضرورت ہو۔ چاول میں ہر وقت پانی کھڑا رکھنا ضروری نہیں — صرف پھول کے وقت پانی کھڑا رکھیں اور باقی دن 15 cm پائپ سے چیک کریں۔',
      vocab: [
        { en: 'Alternate Wetting & Drying (AWD)', ur: 'متبادل گیلا اور خشک طریقہ' },
        { en: 'Crown Root Initiation (Wheat)', ur: 'تاج نما جڑوں کا مرحلہ (گندم)' },
        { en: 'Waterlogging', ur: 'زمین میں پانی کا کھڑا ہونا (سیم)' }
      ],
      actionEn:
        'Make a 30 cm perforated PVC/plastic bottle AWD pipe before rice transplanting and install it in one level 2-kanal paddy field.',
      actionUr:
        'چاول کی لوائي سے پہلے 30 cm سوراخ دار پائپ یا بوتل تیار کر کے 2 کنال ہموار کھیت میں 15 cm تک دبائیں۔'
    }
  },
  {
    id: 'beneficial-insects',
    num: '04',
    titleEn: 'Simulation 4: Beneficial Insects vs. Blind Spraying',
    titleUr: 'تجربہ 4: فائدہ مند حشرات بمقابلہ بے جا سپرے',
    summary: {
      fivePointsEn: [
        'Every healthy Narowal field holds farmer allies: ladybirds, green lacewings, spiders, dragonflies, and Trichogramma wasps.',
        'Indiscriminate broad-spectrum early spraying kills predators faster than pests, triggering rapid secondary pest outbreaks.',
        'Always inspect 10 plants across several spots weekly before deciding — never spray simply because one bug is seen.',
        'Plant flowering borders (marigold, mustard strips) and leave grassy field bunds so pollinators and predators shelter safely.',
        'If economic threshold is truly crossed, choose targeted neem/soap/Bt options or spray calmly in the evening away from blooms.'
      ],
      fivePointsUr: [
        'نارووال کے ہر صحت مند کھیت میں کسان کے دوست موجود ہیں: لیڈی برڈ، گرین لیس ونگ، مکڑیاں، ڈریگن فلائی اور ٹرائیکوگراما۔',
        'شروع ہی میں تیز کیمیائی زہر کے اندھا دھند سپرے سے دوست کیڑے مر جاتے ہیں اور نقصان دہ کیڑے دگنی تیزی سے لوٹتے ہیں۔',
        'محض ایک دو کیڑے دیکھ کر سپرے نہ کریں؛ ہفتے میں ایک دو بار 10 پودوں کا معائنہ کر کے معاشی حد دیکھیں۔',
        'کھیت کے کناروں پر گیندا، سرسوں اور گھاس کی پٹیاں رکھیں تاکہ فائدہ مند حشرات اور مکھیاں پناہ پا سکیں۔',
        'اگر انتہائی مجبوری میں سپرے کرنا پڑے تو نیم یا حیاتیاتی حل ترجیح دیں یا شام کو بغیر ہوا کے وقت پھول بچا کر سپرے کریں۔'
      ],
      oneMinEn:
        'Killing all insects with an early chemical spray removes your farm’s free security guard team. Protect ladybirds, lacewings, spiders, and birds on perches; scout 10 plants weekly and only treat when thresholds are genuinely reached.',
      oneMinUr:
        'شروع میں تیز زہر کا سپرے آپ کے کھیت کے مفت محافظوں کو ختم کر دیتا ہے۔ لیڈی برڈ، لیس ونگ، مکڑیوں اور پرندوں کو بچائیں، 10 پودے چیک کریں اور معاشی حد کے بغیر سپرے ہرگز نہ کریں۔',
      vocab: [
        { en: 'Beneficial Insects', ur: 'فائدہ مند حشرات' },
        { en: 'Secondary Pest Resurgence', ur: 'سپرے کے بعد کیڑوں کا دگنا لوٹ آنا' },
        { en: 'Integrated Pest Management (IPM)', ur: 'حشرات کا مربوط انسداد' }
      ],
      actionEn:
        'Place 8–10 T-shaped bird perches per acre in rice or vegetables and plant a row of marigolds along one field bund.',
      actionUr:
        'چاول یا سبزیوں میں فی ایکڑ 8–10 پرندوں کے ڈنڈے لگائیں اور ایک مینڈھ پر گیندے کے پودے لگائیں۔'
    }
  },
  {
    id: 'compost-making',
    num: '05',
    titleEn: 'Simulation 5: Compost Making Recipe & Heap Process',
    titleUr: 'تجربہ 5: گلی سڑی نامیاتی کھاد / کمپوسٹ سازی',
    summary: {
      fivePointsEn: [
        'Good Compost combines roughly 2 parts dry carbon (wheat/rice straw, dry leaves) with 1 part green/nitrogen (fresh grass, cattle dung).',
        'Keep moisture like a squeezed damp sponge — too dry halts microbes; soaking wet suffocates air and creates sour smell.',
        'Build the heap in light shade near water, never right next to family drinking-water handpumps or wells.',
        'Active microbes heat the middle of a balanced heap safely during weeks 2–4, helping kill weed seeds naturally.',
        'Turn the heap every 2–3 weeks; in 2–3 months it cools into dark, crumbly, sweet-earthy Compost ready at 0.5–1 trolley/kanal.'
      ],
      fivePointsUr: [
        'بہترین کمپوسٹ میں تقریباً 2 حصے خشک مواد (بھوسہ، پرالی، خشک پتے) اور 1 حصہ سبز چارہ یا تازہ گوبر ڈالا جاتا ہے۔',
        'ڈھیر کی نمی نچوڑے ہوئے سپنج جیسی رکھیں — بہت خشک ہو تو گلنے کا عمل رکتا ہے، زیادہ پانی سے بدبو آتی ہے۔',
        'ڈھیر درخت کے سائے میں پانی کے قریب بنائیں، لیکن پینے کے پانی کے نلکے یا کنویں سے دور رکھیں۔',
        'متوازن ڈھیر میں 2–4 ہفتے کے دوران قدرتی گرمائش پیدا ہوتی ہے جو جڑی بوٹیوں کے بیج ختم کرنے میں مدد دیتی ہے۔',
        'ہر 2–3 ہفتے بعد پلٹیں؛ 2–3 ماہ میں ٹھنڈی، گہری اور خوشبودار کھاد تیار ہو گی (مقدار: 0.5–1 ٹرالی فی کنال)۔'
      ],
      oneMinEn:
        'Fresh raw dung heaped in hot sun wastes nitrogen and breeds flies. Layer 2 parts dry straw to 1 part dung/greens in shade, wet like a squeezed sponge, and turn every 2–3 weeks for rich crumbly Compost in 2–3 months.',
      oneMinUr:
        'کچا گوبر دھوپ میں پھینکنے سے طاقت ضائع ہوتی ہے۔ سائے میں 2 حصے بھوسہ اور 1 حصہ گوبر تہہ در تہہ لگا کر نچوڑے سپنج جتنا نم رکھیں اور ہر 2–3 ہفتے پلٹیں۔',
      vocab: [
        { en: 'Compost (2:1 Carbon-to-Green)', ur: 'گلی سڑی نامیاتی کھاد / کمپوسٹ' },
        { en: 'Squeezed Sponge Moisture', ur: 'نچوڑے سپنج جتنی نمی' },
        { en: 'Aerobic Turning', ur: 'ہوا لگوانے کے لیے ڈھیر پلٹنا' }
      ],
      actionEn:
        'Start a small 4×4 ft shaded trial compost pile using chopped wheat/rice straw and fresh cattle dung, and mark turning dates.',
      actionUr:
        'سائے میں کتری پرالی یا بھوسے اور تازہ گوبر سے 4×4 فٹ کا ایک تجرباتی کمپوسٹ ڈھیر شروع کریں اور پلٹنے کی تاریخ لکھ لیں۔'
    }
  },
  {
    id: 'farm-economics',
    num: '06',
    titleEn: 'Simulation 6: Farm Economics (Conventional vs. Regenerative)',
    titleUr: 'تجربہ 6: کھیت کی معاشیات (روایتی بمقابلہ احیائی)',
    summary: {
      fivePointsEn: [
        'True farm success is measured by NET INCOME (Revenue minus Costs), not just total maunds harvested.',
        'Cutting repeated tractor passes, diesel tubewell pumping hours, and unnecessary chemical sprays keeps cash in the farmer’s pocket.',
        'Zero-Till Happy Seeder wheat sowing typically saves tillage diesel and often trims 1–2 irrigations while protecting timely sowing.',
        'Home-made Compost, Green Manure, and legume rotations gradually reduce bought urea/DAP dependency over 2–3 seasons.',
        'Always test regenerative methods on a 2–4 kanal Trial Plot alongside a Comparison Plot using your own Narowal mandi prices.'
      ],
      fivePointsUr: [
        'کامیاب کھیتی کی اصل پہچان صرف زیادہ من پیداوار نہیں بلکہ اخراجات نکال کر بچنے والا خالص منافع (Net Income) ہے۔',
        'بے جا ہل چلانے، اضافی ٹیوب ویل ڈیزل اور غیر ضروری سپرے بچانے سے پیسہ کسان کی جیب میں رہتا ہے۔',
        'ہیپی سیڈر سے بغیر ہل گندم بونے سے ٹریکٹر ڈیزل اور 1–2 پانی بچتے ہیں اور بوائی بھی بروقت ہوتی ہے۔',
        'گھریلو کمپوسٹ، سبز کھاد اور دالوں کی ادل بدل سے 2–3 فصلوں میں مہنگی کھادوں کا خرچ کم ہونے لگتا ہے۔',
        'ہمیشہ 2–4 کنال کے تجرباتی قطعے کا اپنے عام کھیت سے مقامی نارووال منڈی ریٹ پر تحریری موازنہ کریں۔'
      ],
      oneMinEn:
        'Even if two plots yield the exact same 42 maunds per acre, the plot that saved PKR 10,000–15,000 in tractor passes, diesel pumping, and sprays puts that entire saving straight into your family profit.',
      oneMinUr:
        'اگر دونوں کھیتوں میں پیداوار برابر بھی نکلے، تب بھی جو کھیت ہل، ڈیزل، ٹیوب ویل اور غیر ضروری سپرے کے ہزاروں روپے بچاتا ہے، وہی خاندان کو زیادہ خالص منافع دیتا ہے۔',
      vocab: [
        { en: 'Net Income (Profit)', ur: 'خالص آمدنی / منافع' },
        { en: 'Break-Even Yield', ur: 'اخراجات پورے کرنے کی پیداوار' },
        { en: 'Trial Plot (2–4 Kanal)', ur: 'تجرباتی قطعہ (2–4 کنال)' }
      ],
      actionEn:
        'Enter your actual last-season costs for 4 or 8 kanals into Simulation 6 today and identify your single biggest reducible expense.',
      actionUr:
        'آج تجربہ 6 میں اپنے پچھلے موسم کے 4 یا 8 کنال کے اصل اخراجات درج کریں اور دیکھیں سب سے بڑا غیر ضروری خرچ کہاں کم ہو سکتا ہے۔'
    }
  }
];

export const VIDEO_LIBRARY = [
  {
    id: 'vid-fao-soil',
    category: 'soil-mulching',
    catEn: 'Soil & Mulching',
    catUr: 'مٹی اور ملچنگ',
    youtubeId: 'M-ZlrNg0BjI',
    url: 'https://www.youtube.com/watch?v=M-ZlrNg0BjI',
    titleEn: 'Mission: Keep Soil Alive!',
    titleUr: 'مشن: مٹی کو زندہ رکھیں (FAO)',
    channel: 'Food and Agriculture Organization of the United Nations (FAO)',
    durationLabelEn: 'Short Training Clip · Official UN FAO',
    durationLabelUr: 'مختصر تعلیمی ویڈیو · اقوام متحدہ FAO',
    poster: './images/soil-healthy.jpg',
    summaryEn:
      'Explains why living soil microbes, fungi, and earthworms are the engine behind healthy crops and how cover and organic matter keep soil alive.',
    summaryUr:
      'وضاحت کرتی ہے کہ مٹی میں موجود کروڑوں جاندار، جراثیم اور کینچوے فصلوں کی اصل طاقت ہیں اور نامیاتی مادہ و ڈھانپ مٹی کو کیسے زندہ رکھتے ہیں۔',
    captionsEn: [
      '01 · Soil is not dead dirt — one handful of healthy soil contains billions of living microorganisms.',
      '02 · Roots, earthworms, and microbes build soft crumbly tunnels where air and rainwater move freely.',
      '03 · Bare soil, heavy tillage, and burning residues destroy soil life and dry out fields faster.',
      '04 · Feeding soil with compost, mulch, and diverse crops keeps living soil strong for future generations.'
    ],
    captionsUr: [
      '01 · مٹی بے جان گرد نہیں — صحت مند مٹی کی ایک مٹھی میں اربوں زندہ جاندار موجود ہوتے ہیں۔',
      '02 · جڑیں، کینچوے اور جراثیم بھربھرے سوراخ بناتے ہیں جن میں ہوا اور بارش کا پانی آسانی سے جذب ہوتا ہے۔',
      '03 · زمین ننگی چھوڑنا، بار بار ہل چلانا اور پرالی جلانا مٹی کی زندگی ختم کر کے کھیت کو جلدی خشک کرتا ہے۔',
      '04 · کمپوسٹ، ملچنگ اور متنوع فصلوں سے مٹی کو خوراک دینا آنے والی نسلوں کے لیے زمین کو زرخیز رکھتا ہے۔'
    ]
  },
  {
    id: 'vid-access-mulch',
    category: 'soil-mulching',
    catEn: 'Soil & Mulching',
    catUr: 'مٹی اور ملچنگ',
    youtubeId: 'L08qB1LHPMM',
    url: 'https://www.youtube.com/watch?v=L08qB1LHPMM',
    titleEn: 'Mulch for a Better Soil and Crop',
    titleUr: 'بہتر مٹی اور فصل کے لیے ملچنگ (Access Agriculture)',
    channel: 'Access Agriculture',
    durationLabelEn: 'Short Farmer Training Summary (~2 min format)',
    durationLabelUr: 'کسان تربیتی خلاصہ ویڈیو',
    poster: './images/lab-mulch-cover.jpg',
    summaryEn:
      'Farmer-to-farmer visual demonstration showing how spreading dry straw or leaf mulch cools topsoil, locks in moisture longer, and blocks weeds.',
    summaryUr:
      'کسانوں کا عملی مظاہرہ کہ خشک بھوسے یا پتوں کی تہہ بچھانے سے مٹی ٹھنڈی رہتی ہے، نمی دیر تک بچتی ہے اور جڑی بوٹیاں کم اگتی ہیں۔',
    captionsEn: [
      '01 · Collect dry grass, crop straw, or fallen leaves instead of burning or throwing them away.',
      '02 · Spread an even layer around plants or between rows after watering so moisture stays locked underneath.',
      '03 · Mulch blocks sunlight from reaching weed seeds and keeps soil temperatures gentle during hot weeks.',
      '04 · As mulch slowly rots from the bottom, it turns into natural humus that softens hard soil.'
    ],
    captionsUr: [
      '01 · خشک گھاس، فصل کا بھوسہ یا گرے پتے جلانے کے بجائے سنبھال کر کھیت میں استعمال کریں۔',
      '02 · پانی دینے کے بعد پودوں کے گرد یا قطاروں کے درمیان برابر تہہ بچھا دیں تاکہ نمی نیچے محفوظ رہے۔',
      '03 · ملچنگ دھوپ روک کر جڑی بوٹیوں کو دباتی ہے اور تیز گرمی میں مٹی کا درجہ حرارت کم رکھتی ہے۔',
      '04 · نیچے سے آہستہ آہستہ گل کر یہ ملچ قدرتی کھاد بن جاتی ہے اور سخت زمین کو نرم کرتی ہے۔'
    ]
  },
  {
    id: 'vid-irri-awd',
    category: 'water-awd',
    catEn: 'Water & Rice AWD',
    catUr: 'پانی اور چاول AWD',
    youtubeId: 'tfKWKfagfFs',
    url: 'https://www.youtube.com/watch?v=tfKWKfagfFs',
    titleEn: 'Alternate Wetting and Drying (AWD) — Using Less Water in Rice',
    titleUr: 'چاول میں متبادل گیلا اور خشک (AWD) آبپاشی (IRRI)',
    channel: 'International Rice Research Institute (IRRI)',
    durationLabelEn: 'Short Extension Guide · IRRI Official',
    durationLabelUr: 'مختصر رہنما ویڈیو · IRRI',
    poster: './images/crop-stages-cereals.jpg',
    summaryEn:
      'Shows how to make and install a perforated field water tube in paddy soil and irrigate only when water drops 15 cm below the surface (excluding flowering).',
    summaryUr:
      'سکھاتی ہے کہ چاول کے کھیت میں سوراخ دار پائپ کیسے نصب کریں اور صرف پانی 15 cm نیچے جانے پر آبپاشی کریں (پھول آنے کے وقت پانی کھڑا رکھیں)۔',
    captionsEn: [
      '01 · Cut a 30 cm perforated PVC pipe or recycled plastic bottle with small side holes.',
      '02 · Bury 15 cm of the pipe into the rice field so 15 cm remains above mud; scoop mud out inside the tube.',
      '03 · Watch the water inside the pipe: wait to pump until the water drops 15 cm below soil surface.',
      '04 · Keep shallow standing water during the critical flowering week, then resume safe AWD drying.'
    ],
    captionsUr: [
      '01 · تقریباً 30 cm لمبا پائپ یا پلاسٹک بوتل لیں اور اطراف میں چھوٹے سوراخ کریں۔',
      '02 · پائپ کو 15 cm زمین کے اندر دبائیں اور اندر کی کیچڑ صاف کر دیں تاکہ نیچے کا پانی نظر آئے۔',
      '03 · جب تک پائپ میں پانی سطح سے 15 cm نیچے نہ جائے، نیا پانی نہ لگائیں۔',
      '04 · چاول پر پھول آنے کے نازک ہفتے میں ہلکا پانی کھڑا رکھیں اور اس کے بعد دوبارہ AWD جاری رکھیں۔'
    ]
  },
  {
    id: 'vid-awd-punjabi',
    category: 'water-awd',
    catEn: 'Water & Rice AWD',
    catUr: 'پانی اور چاول AWD',
    youtubeId: 'HXh6Nx0ebig',
    url: 'https://www.youtube.com/watch?v=HXh6Nx0ebig',
    titleEn: 'Alternate Wetting and Drying (AWD) in Punjabi',
    titleUr: 'پنجابی زبان میں چاول AWD پانی بچت رہنمائی',
    channel: 'nurture farm / IRRI Punjabi Adaptation',
    durationLabelEn: 'Short Farmer Video · Punjabi Language',
    durationLabelUr: 'مختصر کسان ویڈیو · پنجابی زبان',
    poster: './images/lab-infiltration-spade.jpg',
    summaryEn:
      'Easy Punjabi-language walkthrough explaining how AWD saves diesel tubewell pumping, cuts root rot, and strengthens rice tillers.',
    summaryUr:
      'آسان پنجابی زبان میں وضاحت کہ AWD طریقہ کس طرح ڈیزل و ٹیوب ویل خرچ کم کرتا ہے، جڑوں کو ہوا دیتا ہے اور چاول کے شگوفے مضبوط کرتا ہے۔',
    captionsEn: [
      '01 · Continuous deep ponding wastes diesel and groundwater without increasing basmati yield.',
      '02 · Letting surface water soak down gently brings oxygen to rice roots and lowers lodging.',
      '03 · Use the 15 cm pipe visually so you never guess blindly whether soil below is dry or wet.'
    ],
    captionsUr: [
      '01 · ہر وقت گہرا پانی کھڑا رکھنے سے ڈیزل اور زیرِ زمین پانی ضائع ہوتا ہے اور پیداوار میں خاص اضافہ نہیں ہوتا۔',
      '02 · پانی آہستہ جذب ہونے سے جڑوں کو آکسیجن ملتی ہے اور فصل گرنے کا خطرہ کم ہوتا ہے۔',
      '03 · 15 cm پائپ کی مدد سے کسان کو خود نظر آتا ہے کہ زمین کے نیچے نمی موجود ہے یا پانی کی ضرورت ہے۔'
    ]
  },
  {
    id: 'vid-zerotill-pk',
    category: 'zero-till',
    catEn: 'Zero Tillage & Wheat',
    catUr: 'زیرو ٹل اور گندم',
    youtubeId: '0pyJRtJgF9Q',
    url: 'https://www.youtube.com/watch?v=0pyJRtJgF9Q',
    titleEn: 'Wheat Cultivation with Zero-Till / Happy Seeder in Pakistan',
    titleUr: 'پاکستان میں زیرو ٹل / ہیپی سیڈر سے گندم کی کاشت',
    channel: 'KISSAN PAKISTAN',
    durationLabelEn: 'Pakistan Field Demonstration Clip',
    durationLabelUr: 'پاکستان فیلڈ عملی ویڈیو',
    poster: './images/hero-narowal-farm.jpg',
    summaryEn:
      'Demonstrates sowing wheat directly into harvested rice residue without burning straw or running 6–8 costly tractor cultivations.',
    summaryUr:
      'دکھاتی ہے کہ دھان کی پرالی جلائے اور 6–8 مہنگے ہل چلائے بغیر ہیپی سیڈر یا زیرو ٹل ڈرل سے گندم کیسے کاشت کی جاتی ہے۔',
    captionsEn: [
      '01 · After rice harvest, avoid lighting matches to straw — spread or chop residue evenly.',
      '02 · Happy Seeder cuts narrow slits for wheat seed and places rice straw back as cooling mulch.',
      '03 · Sowing right on time in November avoids late-sowing yield penalty and saves 1–2 early irrigations.'
    ],
    captionsUr: [
      '01 · دھان کی کٹائی کے بعد پرالی کو آگ نہ لگائیں بلکہ کھیت میں برابر پھیلا دیں۔',
      '02 · ہیپی سیڈر صرف بیج کی باریک لکیر کھولتا ہے اور باقی پرالی کو زمین کے اوپر ملچ بنا کر چھوڑ دیتا ہے۔',
      '03 · نومبر میں بروقت بوائی ممکن ہوتی ہے، ٹریکٹر کا ڈیزل بچتا ہے اور 1–2 پانی کی بچت ہوتی ہے۔'
    ]
  },
  {
    id: 'vid-compost-farm',
    category: 'compost',
    catEn: 'Compost Making',
    catUr: 'کمپوسٹ سازی',
    youtubeId: 'JT0if45XyB0',
    url: 'https://www.youtube.com/watch?v=JT0if45XyB0',
    titleEn: 'Fast Farm Composting Using Dry & Green Leaves',
    titleUr: 'خشک و سبز پتوں اور باقیات سے تیز فارم کمپوسٹ',
    channel: 'Organic Mandya',
    durationLabelEn: 'Short Farm Compost Guide',
    durationLabelUr: 'مختصر فارم کمپوسٹ ویڈیو',
    poster: './images/compost-heap.jpg',
    summaryEn:
      'Step-by-step layering of dry carbon straw, green leaves, fresh dung slurry, and turning schedule to make dark, fertile compost on farm.',
    summaryUr:
      'خشک بھوسہ، سبز پتے، تازہ گوبر کا گھول اور پلٹائی کے مراحل دکھا کر فارم پر زرخیز کمپوسٹ بنانے کا آسان طریقہ۔',
    captionsEn: [
      '01 · Alternate dry brown layers (straw/leaves) with moist green leaves and cattle dung slurry.',
      '02 · Keep water moist like a wrung sponge — never waterlogged.',
      '03 · Turn every 2–3 weeks to feed oxygen to composting microbes until dark and sweet-smelling.'
    ],
    captionsUr: [
      '01 · خشک بھورے مواد (بھوسہ، پتے) کے بعد سبز پتے اور گوبر کی تہیں بچھائیں۔',
      '02 · پانی اتنا رکھیں جیسے نچوڑا ہوا سپنج — زیادہ کیچڑ نہ بننے دیں۔',
      '03 · ہر 2–3 ہفتے بعد ڈھیر پلٹیں تاکہ ہوا ملتی رہے اور گہری بھربھری کھاد تیار ہو جائے۔'
    ]
  },
  {
    id: 'vid-ipm-beneficials',
    category: 'ipm-beneficials',
    catEn: 'Beneficial Insects & IPM',
    catUr: 'فائدہ مند حشرات اور IPM',
    youtubeId: '_6h8DVELzlE',
    url: 'https://www.youtube.com/watch?v=_6h8DVELzlE',
    titleEn: 'Top Beneficial Insects Every Farmer Should Know (IPM)',
    titleUr: 'کسان کے اہم فائدہ مند حشرات اور مربوط انسداد (IPM)',
    channel: 'Discover Agriculture',
    durationLabelEn: 'Short IPM Visual Guide',
    durationLabelUr: 'مختصر IPM بصری رہنمائی',
    poster: './images/beneficial-ladybird.jpg',
    summaryEn:
      'Identifies key farm allies — ladybird beetles, lacewings, hoverflies, spiders, and parasitic wasps — and explains how conserving them cuts spray bills.',
    summaryUr:
      'لیڈی برڈ بھونرے، لیس ونگ، ہوور فلائی، مکڑیوں اور طفیلی بھڑوں کی پہچان اور بتاتی ہے کہ ان کی حفاظت سے سپرے کا خرچ کیسے کم ہوتا ہے۔',
    captionsEn: [
      '01 · Ladybird adults and spiky black-orange larvae devour dozens of soft-bodied aphids daily.',
      '02 · Green lacewings and predatory spiders patrol rice and vegetables without harming plants.',
      '03 · Avoid unnecessary broad-spectrum insecticides and leave flowering bund strips as predator homes.'
    ],
    captionsUr: [
      '01 · لیڈی برڈ اور اس کے چھوٹے سنڈی نما بچے روزانہ درجنوں سست تیلے کھا جاتے ہیں۔',
      '02 · گرین لیس ونگ اور شکاری مکڑیاں فصل کو نقصان پہنچائے بغیر کیڑوں کا شکار کرتی ہیں۔',
      '03 · بلا ضرورت تیز زہروں سے بچیں اور مینڈھوں پر پھولدار پودے رہنے دیں تاکہ دوست حشرات محفوظ رہیں۔'
    ]
  }
];

export const CENTRE_QUIZZES = [
  /* -------- MODE 1: MULTIPLE CHOICE (MCQ) -------- */
  {
    id: 'mcq-1',
    mode: 'mcq',
    qEn: 'During Rice Alternate Wetting and Drying (AWD), when is the critical time to maintain shallow standing water?',
    qUr: 'چاول میں متبادل گیلا اور خشک (AWD) طریقہ اپناتے وقت ہلکا پانی کھڑا رکھنا کس مرحلے پر لازمی ہے؟',
    optionsEn: [
      'Only on harvest day',
      'During flowering / heading stage',
      'Only before sowing the nursery',
      'Right after burning straw'
    ],
    optionsUr: [
      'صرف کٹائی کے دن',
      'پھول آنے (Flowering) کے مرحلے میں',
      'صرف پنیری بونے سے پہلے',
      'پرالی جلانے کے فوراً بعد'
    ],
    answer: 1,
    explainEn:
      'AWD allows water to drop 15 cm below the surface during vegetative growth, but shallow standing water must be kept during flowering so grains pollinate and fill properly.',
    explainUr:
      'AWD میں بڑھوتری کے دوران پانی 15 cm نیچے جانے تک انتظار کرتے ہیں، مگر پھول آنے پر ہلکا پانی کھڑا رکھنا ضروری ہے تاکہ دانے صحیح بھریں۔'
  },
  {
    id: 'mcq-2',
    mode: 'mcq',
    qEn: 'Which is the first critical wheat irrigation stage (~20–25 days after sowing) that drives strong root formation?',
    qUr: 'گندم کی وہ پہلی انتہائی حساس آبپاشی (بوائی کے تقریباً 20–25 دن بعد) کون سی ہے جو مضبوط جڑیں بناتی ہے؟',
    optionsEn: [
      'Crown Root Initiation (Pehla Pani)',
      'Dead ripe harvest stage',
      'Post-harvest fallow stage',
      'Mid-summer June irrigation'
    ],
    optionsUr: [
      'تاج نما جڑیں نکلنا (پہلا پانی)',
      'پکی کٹائی کا مرحلہ',
      'کٹائی کے بعد خالی کھیت',
      'جون کی گرمی کی آبپاشی'
    ],
    answer: 0,
    explainEn:
      'Crown Root Initiation (~20–25 DAS, verify sowing timing locally) sets the root foundation and tiller count for the whole wheat season.',
    explainUr:
      'تاج نما جڑیں نکلنے کا وقت (تقریباً 20–25 دن بعد) پورے موسم کے شگوفوں اور جڑوں کی مضبوطی کی بنیاد رکھتا ہے۔'
  },
  {
    id: 'mcq-3',
    mode: 'mcq',
    qEn: 'In the Narowal Regenerative Handbook, what yearly minimum share of farm land is targeted for legumes or green manure?',
    qUr: 'نارووال احیائی کاشتکاری ہینڈ بک میں ہر سال زمین کے کم از کم کتنے حصے پر دالوں یا سبز کھاد کا ہدف تجویز کیا گیا ہے؟',
    optionsEn: ['0% legumes', 'About 25% of farm area', '100% sugarcane only', 'Only 1 marla per farm'],
    optionsUr: ['0% دالیں', 'رقبے کا تقریباً 25% حصہ', 'صرف 100% گنا', 'فی فارم صرف 1 مرلہ'],
    answer: 1,
    explainEn:
      'Rotating about 25% of land through Mung, Mash, Berseem, Chickpea, Lentil, or Sesbania adds natural nitrogen and breaks continuous cereal weeds.',
    explainUr:
      'ہر سال تقریباً 25% رقبے پر مونگ، ماش، برسیم، چنا، مسور یا سنبھالو لگانے سے قدرتی نائٹروجن بنتی ہے اور جڑی بوٹیاں کم ہوتی ہیں۔'
  },
  {
    id: 'mcq-4',
    mode: 'mcq',
    qEn: 'Why does spreading 3–5 cm of straw Mulching protect Narowal topsoil in May–June?',
    qUr: 'مئی جون میں 3–5 cm بھوسے یا پرالی کی ملچنگ نارووال کی مٹی کو کیسے محفوظ رکھتی ہے؟',
    optionsEn: [
      'It heats bare soil above 60°C',
      'It shields soil from 50–60°C surface heat, slows evaporation, and feeds earthworms',
      'It removes all Soil Organic Matter',
      'It causes heavy monsoon runoff'
    ],
    optionsUr: [
      'یہ مٹی کو 60°C سے زیادہ گرم کرتی ہے',
      'یہ 50–60°C تپش سے بچاتی ہے، نمی روکتی ہے اور کینچووں کو خوراک دیتی ہے',
      'یہ نامیاتی مادہ ختم کر دیتی ہے',
      'یہ مٹی کے بہاؤ کو تیز کرتی ہے'
    ],
    answer: 1,
    explainEn:
      'Bare soil bakes at 50–60°C and loses moisture rapidly; 3–5 cm mulch acts like cooling shade and protects biological life.',
    explainUr:
      'ننگی مٹی 50–60°C پر تپ کر نمی کھو دیتی ہے؛ 3–5 cm ملچنگ سائے کی طرح ٹھنڈک اور جراثیمی زندگی محفوظ رکھتی ہے۔'
  },
  {
    id: 'mcq-5',
    mode: 'mcq',
    qEn: 'What happens when a farmer sprays a strong broad-spectrum chemical pesticide early in the season for just a few aphids?',
    qUr: 'فصل کے شروع میں چند سست تیلے دیکھ کر تیز زہر کا اندھا دھند سپرے کرنے کا کیا نتیجہ نکلتا ہے؟',
    optionsEn: [
      'Only pests die while ladybirds double immediately',
      'Beneficial predators die too, often allowing fast secondary pest resurgence',
      'Waterlogging disappears permanently',
      'Wheat grows without sunlight'
    ],
    optionsUr: [
      'صرف نقصان دہ کیڑے مرتے ہیں اور لیڈی برڈ فوراً بڑھ جاتی ہے',
      'فائدہ مند شکاری حشرات ختم ہو جاتے ہیں اور کیڑوں کا حملہ مزید تیزی سے لوٹتا ہے',
      'سیم مستقل ختم ہو جاتی ہے',
      'گندم بغیر دھوپ کے پک جاتی ہے'
    ],
    answer: 1,
    explainEn:
      'Predators like ladybirds, lacewings, and spiders reproduce slower than aphids. Wiping them out leaves pests unchecked.',
    explainUr:
      'لیڈی برڈ، لیس ونگ اور مکڑیاں سست تیلے کے مقابلے میں آہستہ بڑھتی ہیں؛ ان کے مرنے سے کیڑوں کی آبادی بے قابو ہو جاتی ہے۔'
  },
  {
    id: 'mcq-6',
    mode: 'mcq',
    qEn: 'What is the ideal balance of dry carbon materials to green/manure materials when building a Compost heap?',
    qUr: 'گلی سڑی نامیاتی کھاد / کمپوسٹ کا ڈھیر بناتے وقت خشک مواد اور سبز/گوبر کا بہترین تناسب کیا ہے؟',
    optionsEn: [
      '2 parts dry straw/leaves : 1 part green/fresh dung',
      'Dry straw only with zero moisture',
      '10 parts fresh dung underwater',
      'Ash and plastic waste mixed together'
    ],
    optionsUr: [
      '2 حصے خشک بھوسہ/پتے : 1 حصہ سبز چارہ یا تازہ گوبر',
      'بغیر پانی کے صرف خشک بھوسہ',
      'پانی میں ڈوبا ہوا صرف کچا گوبر',
      'راکھ اور پلاسٹک کا ملاپ'
    ],
    answer: 0,
    explainEn:
      'A 2:1 carbon-to-green mix kept damp like a squeezed sponge heats cleanly and turns into sweet-earthy Compost in 2–3 months.',
    explainUr:
      '2:1 کا تناسب اور نچوڑے سپنج جتنی نمی ڈھیر کو متوازن رکھتی ہے اور 2–3 ماہ میں بہترین کمپوسٹ تیار ہوتی ہے۔'
  },

  /* -------- MODE 2: PICTURE IDENTIFICATION (LOCAL /images/ ASSETS ONLY) -------- */
  {
    id: 'pic-1',
    mode: 'picture',
    image: './images/beneficial-ladybird.jpg',
    imageAltEn: 'Close-up photograph of a red spotted dome beetle eating aphids on a green leaf',
    imageAltUr: 'سبز پتے پر سست تیلے کھانے والے سرخ دھبے دار لیڈی برڈ بھونرے کی تصویر',
    qEn: 'Look closely at this insect on the leaf. How should a Narowal farmer respond when seeing it?',
    qUr: 'پتے پر موجود اس حشرے کو دیکھ کر نارووال کے کسان کو کیا فیصلہ کرنا چاہیے؟',
    optionsEn: [
      'Harmful Stem Borer — spray immediately',
      'Beneficial Ladybird Beetle (Coccinellidae) — protect it; it eats dozens of aphids daily',
      'Harmful Whitefly — burn crop residue',
      'Weedy grass seed head'
    ],
    optionsUr: [
      'نقصان دہ تنا سنڈی — فوراً زہر سپرے کریں',
      'فائدہ مند لیڈی برڈ بھونرا — حفاظت کریں؛ یہ روزانہ درجنوں سست تیلے کھاتی ہے',
      'نقصان دہ سفید مکھی — کھیت جلا دیں',
      'جڑی بوٹی کا سٹہ'
    ],
    answer: 1,
    explainEn:
      'This is a Ladybird Beetle (Coccinellidae). Both adult beetles and their dark spiky larvae are top natural enemies of aphids.',
    explainUr:
      'یہ فائدہ مند لیڈی برڈ بھونرا (Coccinellidae) ہے۔ اس کے بالغ بھونرے اور بچے سست تیلے اور چھوٹے کیڑے کھاتے ہیں۔'
  },
  {
    id: 'pic-2',
    mode: 'picture',
    image: './images/soil-healthy.jpg',
    imageAltEn: 'Dark crumbly soil in hands containing an active earthworm and golden straw mulch',
    imageAltUr: 'ہاتھوں میں گہری بھربھری مٹی، زندہ کینچوا اور سنہری بھوسے کی ملچنگ',
    qEn: 'What does this field photograph of dark, crumbly soil with straw and an earthworm indicate?',
    qUr: 'ہاتھوں میں موجود گہری بھربھری مٹی، کینچوا اور بھوسے کی یہ تصویر کس حالت کو ظاہر کرتی ہے؟',
    optionsEn: [
      'Dead saline soil with Waterlogging',
      'Healthy living Soil Organic Matter with active biology and mulch cover',
      'Compacted tractor hard pan',
      'Overheated 60°C bare dust'
    ],
    optionsUr: [
      'بنجر اور سیم زدہ مٹی',
      'زندہ نامیاتی مادے والی صحت مند مٹی جہاں ملچنگ اور کینچوے فعال ہیں',
      'ٹریکٹر سے دبی سخت تہہ (Hard Pan)',
      '60°C تپتی ہوئی ننگی گرد'
    ],
    answer: 1,
    explainEn:
      'Dark crumb structure, straw Mulching, and earthworms show active Soil Organic Matter that absorbs rainwater quickly and feeds roots.',
    explainUr:
      'بھربھری ساخت، بھوسے کی ملچنگ اور کینچوے زندہ نامیاتی مادے کی علامت ہیں جو بارش جذب کر کے جڑوں کو طاقت دیتے ہیں۔'
  },
  {
    id: 'pic-3',
    mode: 'picture',
    image: './images/compost-heap.jpg',
    imageAltEn: 'Layered compost pile built under tree shade using dry straw and organic farm manure',
    imageAltUr: 'درخت کے سائے میں خشک بھوسے اور گوبر کی تہوں سے بنا کمپوسٹ کا ڈھیر',
    qEn: 'Which regenerative practice is shown in this shaded farm photograph?',
    qUr: 'درخت کے سائے میں بنی اس تصویر میں کون سا احیائی طریقہ دکھایا گیا ہے؟',
    optionsEn: [
      'Flooding paddy continuously for 120 days',
      'Shaded 2:1 layered Compost heap decomposition',
      'Burning rice stubble before wheat sowing',
      'Dumping plastic into canal water'
    ],
    optionsUr: [
      'چاول میں 120 دن مسلسل گہرا پانی کھڑا رکھنا',
      'سائے میں 2:1 تہوں والا گلی سڑی نامیاتی کھاد / کمپوسٹ کا ڈھیر',
      'گندم سے پہلے پرالی جلانا',
      'نہر میں پلاسٹک پھینکنا'
    ],
    answer: 1,
    explainEn:
      'Building a shaded compost pile away from drinking wells turns dry straw and dung into valuable organic fertilizer in 2–3 months.',
    explainUr:
      'پینے کے کنویں سے دور سائے میں کمپوسٹ کا ڈھیر لگانے سے بھوسہ اور گوبر 2–3 ماہ میں قیمتی کھاد بن جاتے ہیں۔'
  },
  {
    id: 'pic-4',
    mode: 'picture',
    image: './images/lab-mulch-cover.jpg',
    imageAltEn: 'Side-by-side soil cover comparison showing bare dry cracked ground beside straw-mulched soil',
    imageAltUr: 'ننگی خشک پھٹی زمین اور بھوسے سے ڈھکی نم زمین کا آمنے سامنے موازنہ',
    qEn: 'In this visual Home Lab comparison, which half holds more moisture and stays cooler after afternoon sun?',
    qUr: 'اس گھریلو لیب موازنے میں دوپہر کی دھوپ کے بعد کون سا حصہ زیادہ ٹھنڈا اور نم رہتا ہے؟',
    optionsEn: [
      'The bare exposed side',
      'Neither side holds water',
      'The side protected by 3–5 cm crop residue mulch cover',
      'Only deeply ploughed clods'
    ],
    optionsUr: [
      'بغیر ڈھانپ والی ننگی مٹی',
      'دونوں طرف پانی نہیں رکتا',
      '3–5 cm فصل کی باقیات (ملچنگ) سے ڈھکا ہوا حصہ',
      'صرف گہرے ہل سے اکھڑے ڈھیلے'
    ],
    answer: 2,
    explainEn:
      'Crop residue cover insulates the soil surface from blazing heat and stops rapid water evaporation.',
    explainUr:
      'فصلوں کی باقیات زمین کی سطح کو تیز گرمی سے بچاتی ہیں اور نمی کو بخارات بن کر اڑنے سے روکتی ہیں۔'
  },
  {
    id: 'pic-5',
    mode: 'picture',
    image: './images/field-guide-birds.jpg',
    imageAltEn: 'Four common Narowal farmland birds including Black Drongo, Cattle Egret, Sparrow, and Owl',
    imageAltUr: 'نارووال کے کھیتوں کے چار عام پرندے: کالا بھنگا، بگلا، چڑیا اور اُلّو',
    qEn: 'Look at the Black Drongo and Barn/Spotted Owl shown in this field guide plate. What is their main farm role?',
    qUr: 'اس تصویر میں موجود کالا بھنگا (Black Drongo) اور اُلّو کھیت میں کیا اہم خدمت انجام دیتے ہیں؟',
    optionsEn: [
      'They destroy wheat grain harvests overnight',
      'They eat moths, caterpillars, grasshoppers, and field mice naturally',
      'They spread salinity in loam soil',
      'They block tubewell pipes'
    ],
    optionsUr: [
      'یہ راتوں رات گندم کی ساری فصل کھا جاتے ہیں',
      'یہ قدرتی طور پر پتنگے، سنڈیاں، ٹڈے اور کھیت کے چوہے کھاتے ہیں',
      'یہ میرا زمین میں کلر پھیلاتے ہیں',
      'یہ ٹیوب ویل کا پائپ بند کرتے ہیں'
    ],
    answer: 1,
    explainEn:
      'Insect-eating birds and nocturnal owls are free biological pest controllers; installing T-shaped perches invites them into fields.',
    explainUr:
      'کیڑے کھانے والے پرندے اور اُلّو قدرتی طور پر سنڈیوں اور چوہوں کو قابو کرتے ہیں؛ کھیت میں ڈنڈے لگانے سے یہ زیادہ آتے ہیں۔'
  },
  {
    id: 'pic-6',
    mode: 'picture',
    image: './images/lab-infiltration-spade.jpg',
    imageAltEn: 'Simple tin-can water infiltration cylinder and 30 cm spade soil block inspection',
    imageAltUr: 'ٹین کے ڈبے سے پانی جذب ہونے کا ٹیسٹ اور بیلچے سے 30 سینٹی میٹر مٹی کے ٹکڑے کا معائنہ',
    qEn: 'What does this simple tin-can and spade activity check on a Narowal farm?',
    qUr: 'ٹین کے ڈبے اور بیلچے کی یہ سادہ سرگرمی نارووال کے کھیت میں کیا جانچتی ہے؟',
    optionsEn: [
      'Exact laboratory pH and EC numbers',
      'How fast rainwater soaks in and whether soil is soft, earthy, and worm-rich',
      'Exact NPK chemical fertilizer percentage',
      'Market wheat rate per maund'
    ],
    optionsUr: [
      'لیبارٹری کے عین درست pH اور EC نمبر',
      'بارش کا پانی کتنی تیزی سے جذب ہوتا ہے اور مٹی نرم، خوشبودار اور کینچووں سے بھرپور ہے یا نہیں',
      'کھاد میں نائٹروجن کا درست فیصد',
      'منڈی میں گندم کا ریٹ'
    ],
    answer: 1,
    explainEn:
      'Home screening tests observe infiltration speed, structure, worms, and smell—while actual soil pH, EC, OM%, and nutrients must go to the Punjab Soil Lab.',
    explainUr:
      'گھریلو ٹیسٹ پانی جذب، ساخت، بو اور کینچوے دکھاتے ہیں؛ جبکہ درست pH، EC، نامیاتی مادہ اور غذائی اجزا پنجاب سوائل لیب سے معلوم ہوتے ہیں۔'
  },

  /* -------- MODE 3: TRUE / FALSE -------- */
  {
    id: 'tf-1',
    mode: 'tf',
    qEn: 'True or False: Home soil feel and infiltration tests can accurately replace a Punjab Soil Testing Laboratory for measuring pH, EC, and NPK.',
    qUr: 'صحیح یا غلط: ہاتھ سے مٹی چیک کرنے اور پانی جذب ہونے کے گھریلو ٹیسٹ لیبارٹری کی طرح درست pH، EC اور NPK ماپ سکتے ہیں۔',
    optionsEn: ['True', 'False'],
    optionsUr: ['صحیح', 'غلط'],
    answer: 1,
    explainEn:
      'FALSE. Home Farm Lab tests are educational screening observations only. Never claim they measure pH, EC, nutrients, or organic matter %—use Punjab Soil Labs for lab measurements.',
    explainUr:
      'غلط۔ گھریلو ٹیسٹ صرف ابتدائی مشاہدہ ہیں۔ درست pH، EC، غذائی اجزا اور نامیاتی مادے کا فیصد جاننے کے لیے ہمیشہ پنجاب سوائل لیبارٹری کا ٹیسٹ ضروری ہے۔'
  },
  {
    id: 'tf-2',
    mode: 'tf',
    qEn: 'True or False: Leaving rice or wheat straw as surface mulch or sowing through it with a Happy Seeder avoids smog and builds soil life.',
    qUr: 'صحیح یا غلط: چاول یا گندم کی باقیات جلائے بغیر سطح پر ملچنگ کرنا یا ہیپی سیڈر سے کاشت سموگ روکتی اور مٹی کو زندہ بناتی ہے۔',
    optionsEn: ['True', 'False'],
    optionsUr: ['صحیح', 'غلط'],
    answer: 0,
    explainEn:
      'TRUE. Burning straw destroys organic matter, kills beneficial bugs, and worsens winter smog across Narowal and Punjab.',
    explainUr:
      'صحیح۔ پرالی جلانے سے نامیاتی مادہ اور دوست کیڑے ختم ہوتے ہیں اور پنجاب میں سردیوں کی سموگ بڑھتی ہے۔'
  },
  {
    id: 'tf-3',
    mode: 'tf',
    qEn: 'True or False: In Rice AWD, you should keep the field completely bone-dry during the flowering week as well.',
    qUr: 'صحیح یا غلط: چاول کے AWD طریقے میں پھول آنے کے پورے ہفتے میں بھی کھیت کو بالکل خشک رکھنا چاہیے۔',
    optionsEn: ['True', 'False'],
    optionsUr: ['صحیح', 'غلط'],
    answer: 1,
    explainEn:
      'FALSE. The handbook stresses maintaining shallow standing water during the flowering stage of rice so pollination and grain setting succeed.',
    explainUr:
      'غلط۔ ہینڈ بک کے مطابق چاول پر پھول آنے کے وقت کھیت میں ہلکا پانی کھڑا رکھنا ضروری ہے تاکہ دانے خالی نہ رہیں۔'
  },
  {
    id: 'tf-4',
    mode: 'tf',
    qEn: 'True or False: Sowing Sesbania (Dhaincha) at 20–25 kg/acre after wheat and rolling it down at 45–55 days adds Green Manure before rice.',
    qUr: 'صحیح یا غلط: گندم کے بعد 20–25 kg/acre سنبھالو / ڈھینچا بو کر 45–55 دن میں زمین میں دبانے سے چاول سے پہلے بہترین سبز کھاد ملتی ہے۔',
    optionsEn: ['True', 'False'],
    optionsUr: ['صحیح', 'غلط'],
    answer: 0,
    explainEn:
      'TRUE. Incorporated 1–2 weeks before rice transplanting, Sesbania bispinosa boosts nitrogen, organic matter, and helps reclaim light salinity.',
    explainUr:
      'صحیح۔ چاول کی لوائي سے 1–2 ہفتے پہلے دبایا گیا سنبھالو نائٹروجن و نامیاتی مادہ بڑھاتا اور ہلکی شوریت کم کرتا ہے۔'
  },
  {
    id: 'tf-5',
    mode: 'tf',
    qEn: 'True or False: A farmer should immediately convert 100% of their family land to unfamiliar practices in Season 1.',
    qUr: 'صحیح یا غلط: کسان کو چاہیے کہ پہلے ہی موسم میں اپنی 100% زمین پر نئے غیر آزمودہ طریقے لاگو کر دے۔',
    optionsEn: ['True', 'False'],
    optionsUr: ['صحیح', 'غلط'],
    answer: 1,
    explainEn:
      'FALSE. The safest approach for Narowal families is testing first on a 2–4 kanal Trial Plot alongside a normal Comparison Plot, then expanding over 3–5 years.',
    explainUr:
      'غلط۔ سب سے محفوظ طریقہ پہلے 2–4 کنال کے تجرباتی قطعے پر آزما کر عام کھیت سے موازنہ کرنا اور پھر 3–5 سال میں پھیلانا ہے۔'
  },
  {
    id: 'tf-6',
    mode: 'tf',
    qEn: 'True or False: A squeezed compost handful should drip steady streams of muddy water to decompose properly.',
    qUr: 'صحیح یا غلط: کمپوسٹ کے ڈھیر کی مٹھی دبانے پر اس میں سے گدلے پانی کی دھاریں بہنی چاہئیں۔',
    optionsEn: ['True', 'False'],
    optionsUr: ['صحیح', 'غلط'],
    answer: 1,
    explainEn:
      'FALSE. Compost moisture should feel damp like a squeezed sponge with only 1–2 drops under firm squeezing. Dripping water drowns aerobic microbes and causes sour odour.',
    explainUr:
      'غلط۔ کمپوسٹ نچوڑے ہوئے سپنج کی طرح نم ہونی چاہیے (زور سے دبانے پر بمشکل 1–2 قطرے)؛ زیادہ پانی ہوا روک کر بدبو پیدا کرتا ہے۔'
  }
];
