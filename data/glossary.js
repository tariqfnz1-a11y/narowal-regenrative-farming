export const COMPARISON_ROWS = [
  {
    aspectEn: 'Soil feel (1 spade deep)',
    aspectUr: 'کدال سے کھودنے پر مٹی',
    healthyEn: 'Crumbly, dark (high Soil Organic Matter), earthworms present',
    healthyUr: 'بھربھری، گہری رنگت (زیادہ نامیاتی مادہ)، کینچوے موجود',
    warningEn: 'Hard, pale, cloddy, no earthworms',
    warningUr: 'سخت، پھیکی، ڈھیلوں والی، کینچوے نہیں'
  },
  {
    aspectEn: 'Water soak & Waterlogging',
    aspectUr: 'بارش کا پانی جذب ہونا',
    healthyEn: 'Soaks in within minutes; no Waterlogging',
    healthyUr: 'چند منٹ میں جذب؛ زمین میں پانی کا کھڑا ہونا نہیں',
    warningEn: 'Pools on surface (Waterlogging) or runs off',
    warningUr: 'سطح پر پانی کھڑا رہتا ہے یا بہہ جاتا ہے'
  },
  {
    aspectEn: 'White salt crust',
    aspectUr: 'سفید نمک کی تہہ',
    healthyEn: 'None visible',
    healthyUr: 'کوئی سفید دھبے نہیں',
    warningEn: 'White patches in summer (high EC)',
    warningUr: 'گرمیوں میں سفید نمک کے دھبے (زیادہ EC)'
  },
  {
    aspectEn: 'Crop roots',
    aspectUr: 'فصل کی جڑیں',
    healthyEn: 'Deep, wide, branching',
    healthyUr: 'گہری اور پھیلی ہوئی',
    warningEn: 'Short, stunted, shallow',
    warningUr: 'چھوٹی اور اوپری سطح تک محدود'
  },
  {
    aspectEn: 'Beneficial Insects',
    aspectUr: 'فائدہ مند حشرات',
    healthyEn: 'Ladybirds, spiders, dragonflies seen',
    healthyUr: 'لیڈی برڈ، مکڑیاں اور ڈریگن فلائی موجود',
    warningEn: 'Rarely seen after heavy sprays',
    warningUr: 'زیادہ سپرے کی وجہ سے شاذ و نادر'
  }
];

export const CROP_CALENDAR = [
  {
    season: 'kharif',
    seasonEn: 'Kharif (May – Oct)',
    seasonUr: 'خریف (مئی تا اکتوبر)',
    cropEn: 'Basmati & Other Rice (Oryza sativa)',
    cropUr: 'باسمتی اور دیگر چاول (Oryza sativa)',
    windowEn: 'Nursery May–Jun · Transplant Jun–Jul · Harvest Oct–Nov',
    windowUr: 'پنیری مئی تا جون · منتقلی جون تا جولائی · کٹائی اکتوبر تا نومبر',
    tipEn: 'Incorporate Green Manure Sesbania (Sesbania bispinosa) 1–2 weeks before transplanting and practice 15 cm AWD.',
    tipUr: 'پنیری لگانے سے 1–2 ہفتے پہلے سبز کھاد سنبھالو (Sesbania bispinosa) دبا دیں اور 15 cm AWD اپنائیں۔'
  },
  {
    season: 'rabi',
    seasonEn: 'Rabi (Nov – Apr)',
    seasonUr: 'ربیع (نومبر تا اپریل)',
    cropEn: 'Wheat (Triticum aestivum)',
    cropUr: 'گندم (Triticum aestivum)',
    windowEn: 'Timely sowing Nov 1–15 · Harvest Apr',
    windowUr: 'بروقت بوائی 1–15 نومبر · کٹائی اپریل',
    tipEn: 'Use Zero Tillage (Happy Seeder) directly into rice straw Mulching to save diesel, water, and avoid April heat stress.',
    tipUr: 'بغیر ہل چلائے کاشت (Happy Seeder) سے پرالی کی ملچنگ میں بوائی کریں تاکہ ڈیزل اور پانی بچے۔'
  },
  {
    season: 'zaid',
    seasonEn: 'Zaid / Summer Gap (Apr – Jun)',
    seasonUr: 'زائد / درمیانی موسم (اپریل تا جون)',
    cropEn: 'Mung Bean (Vigna radiata)',
    cropUr: 'مونگ (Vigna radiata)',
    windowEn: '55–65 days after wheat harvest',
    windowUr: 'گندم کی کٹائی کے بعد 55–65 دن کی فصل',
    tipEn: 'Key Crop Rotation legume: earns cash and leaves natural nitrogen before rice transplanting.',
    tipUr: 'فصلوں کی ادل بدل کے لیے بہترین دال: نقد آمدنی دیتی ہے اور چاول سے پہلے نائٹروجن چھوڑتی ہے۔'
  },
  {
    season: 'kharif',
    seasonEn: 'Kharif / Annual',
    seasonUr: 'خریف / سالانہ',
    cropEn: 'Sugarcane (Saccharum officinarum)',
    cropUr: 'گنا (Saccharum officinarum)',
    windowEn: 'Feb–Mar or Sep planting · Trench/Ridge method',
    windowUr: 'فروری–مارچ یا ستمبر کاشت · خندق یا ڈولی طریقہ',
    tipEn: 'Leave cane trash as Mulching between rows, intercrop mung or onion, and tie Trichogramma chilonis cards against borers.',
    tipUr: 'قطاروں میں گنے کی پتیوں کی ملچنگ کریں، شروع میں مونگ یا پیاز لگائیں اور سنڈی کے لیے Trichogramma chilonis کارڈ باندھیں۔'
  },
  {
    season: 'rabi',
    seasonEn: 'Rabi (Oct – Apr)',
    seasonUr: 'ربیع (اکتوبر تا اپریل)',
    cropEn: 'Berseem (Trifolium alexandrinum), Mustard & Chickpea',
    cropUr: 'برسیم (Trifolium alexandrinum)، سرسوں اور چنا',
    windowEn: 'Oct–Nov sowing · Winter fodder & break crop',
    windowUr: 'اکتوبر–نومبر بوائی · سردیوں کا چارہ اور وقفہ فصل',
    tipEn: 'Put a legume on at least 25% of land yearly. Chickpea (Cicer arietinum) and mustard thrive in rainfed Shakargarh.',
    tipUr: 'ہر سال کم از کم 25% زمین پر دال والی فصل لگائیں۔ بارانی شکرگڑھ میں چنا (Cicer arietinum) اور سرسوں خوب چلتے ہیں۔'
  },
  {
    season: 'kharif',
    seasonEn: 'Kharif (Jun – Oct)',
    seasonUr: 'خریف (جون تا اکتوبر)',
    cropEn: 'Sorghum (Sorghum bicolor) + Cowpea / Pearl Millet',
    cropUr: 'جوار (Sorghum bicolor) + لوبیا / باجرہ',
    windowEn: 'Monsoon rainfed & fodder sowing Jun–Jul',
    windowUr: 'مون سون بارانی اور چارے کی بوائی جون–جولائی',
    tipEn: 'Mixed sorghum and cowpea makes rich fodder while deep roots hold rainfed Shakargarh slopes.',
    tipUr: 'جوار کے ساتھ لوبیا ملا کر چارہ اگائیں، گہری جڑیں بارانی شکرگڑھ کی ڈھلوان کو کٹاؤ سے بچاتی ہیں۔'
  }
];

export const INSECTS_DATA = [
  {
    id: 'ladybird',
    role: 'friend',
    nameEn: 'Ladybird Beetle (Coccinellidae)',
    nameUr: 'لیڈی برڈ بھونرا (Coccinellidae)',
    targetEn: 'Eats aphids, whiteflies & soft-bodied pests',
    targetUr: 'تیلا، سفید مکھی اور چھوٹے نقصان دہ کیڑے کھاتا ہے',
    actionEn: 'Protect Beneficial Insects! Avoid unnecessary early sprays so ladybirds multiply.',
    actionUr: 'فائدہ مند حشرات کی حفاظت کریں! بلا ضرورت ابتدائی سپرے نہ کریں۔'
  },
  {
    id: 'lacewing',
    role: 'friend',
    nameEn: 'Green Lacewing (Chrysoperla carnea)',
    nameUr: 'گرین لیس ونگ (Chrysoperla carnea)',
    targetEn: 'Larvae devour aphids, thrips & insect eggs',
    targetUr: 'اس کا لاروا تیلا، تھرپس اور کیڑوں کے انڈے کھاتا ہے',
    actionEn: 'Keep field margins flowering with mustard or marigold.',
    actionUr: 'کھیت کے کناروں پر سرسوں یا گیندے کے پھول لگائیں۔'
  },
  {
    id: 'dragonfly',
    role: 'friend',
    nameEn: 'Dragonfly & Spider (Odonata / Araneae)',
    nameUr: 'ڈریگن فلائی اور مکڑی (Odonata / Araneae)',
    targetEn: 'Catch moths, hoppers & flying rice pests daily',
    targetUr: 'چاول کے کھیت میں پتنگے اور رس چوسنے والے کیڑے پکڑتے ہیں',
    actionEn: 'Leave grass strips along bunds and avoid broad-spectrum poison.',
    actionUr: 'مینڈھوں پر گھاس کی پٹیاں رہنے دیں اور تیز زہر سے بچیں۔'
  },
  {
    id: 'trichogramma',
    role: 'friend',
    nameEn: 'Trichogramma Wasp (Trichogramma chilonis)',
    nameUr: 'ٹرائیکوگراما بھڑ (Trichogramma chilonis)',
    targetEn: 'Destroys stem borer eggs in rice & sugarcane',
    targetUr: 'چاول اور گنے میں تنا چھیدنے والی سنڈی کے انڈے ختم کرتی ہے',
    actionEn: 'Tie certified Trichogramma chilonis egg cards in cane & rice instead of spraying.',
    actionUr: 'سپرے کے بجائے گنے اور چاول میں Trichogramma chilonis کارڈ باندھیں۔'
  },
  {
    id: 'stem-borer',
    role: 'foe',
    nameEn: 'Stem Borer (Scirpophaga incertulas)',
    nameUr: 'تنا چھیدنے والی سنڈی (Scirpophaga incertulas)',
    targetEn: 'Causes dead hearts and white empty rice panicles',
    targetUr: 'پودے کا مرکزی شگوفہ سکھا دیتی ہے اور بالی خالی رہ جاتی ہے',
    actionEn: 'Use light/pheromone traps, Trichogramma chilonis cards, and balanced nitrogen.',
    actionUr: 'لائٹ یا فیرومون ٹریپ، Trichogramma chilonis کارڈ اور متوازن نائٹروجن استعمال کریں۔'
  },
  {
    id: 'fall-armyworm',
    role: 'foe',
    nameEn: 'Fall Armyworm (Spodoptera frugiperda)',
    nameUr: 'فال آرمی ورم (Spodoptera frugiperda)',
    targetEn: 'Chews young maize whorls and leaves rapidly',
    targetUr: 'مکئی کی کونپل اور پتے تیزی سے کھا جاتا ہے',
    actionEn: 'Scout weekly on 10 plants/spot; use pheromone traps, neem or Bacillus thuringiensis early.',
    actionUr: 'ہفتہ وار 10 پودوں کا معائنہ کریں؛ شروع میں ٹریپ، نیم یا Bacillus thuringiensis استعمال کریں۔'
  },
  {
    id: 'leaf-folder',
    role: 'foe',
    nameEn: 'Rice Leaf Folder (Cnaphalocrocis medinalis)',
    nameUr: 'پتا لپیٹ سنڈی (Cnaphalocrocis medinalis)',
    targetEn: 'Folds rice leaves lengthwise and scrapes green tissue',
    targetUr: 'چاول کے پتے لپیٹ کر سبز مادہ کھرچتی ہے',
    actionEn: 'Avoid excess urea; install bird perches so birds eat caterpillars.',
    actionUr: 'زیادہ یوریا سے بچیں اور پرندوں کے بیٹھنے کے لیے کھیت میں ڈنڈے لگائیں۔'
  }
];

export const QUIZ_QUESTIONS = [
  {
    qEn: 'How many kanals make 1 acre in District Narowal?',
    qUr: 'ضلع نارووال میں 1 ایکڑ میں کتنے کنال ہوتے ہیں؟',
    optionsEn: ['4 kanal', '8 kanal', '10 kanal', '16 kanal'],
    optionsUr: ['4 کنال', '8 کنال', '10 کنال', '16 کنال'],
    answer: 1,
    explainEn: '1 acre = 8 kanal, 1 kanal = 20 marla, and 1 maund = 40 kg. Start new trials on 1–2 kanal first.',
    explainUr: '1 acre = 8 kanal، 1 kanal = 20 marla اور 1 maund = 40 kg۔ نیا تجربہ پہلے 1–2 کنال پر کریں۔'
  },
  {
    qEn: 'How hot can bare Punjab soil get on the surface without Mulching in summer?',
    qUr: 'گرمیوں میں زمین کو فصلوں کی باقیات سے ڈھانپے بغیر پنجاب کی مٹی کی سطح کتنی گرم ہو سکتی ہے؟',
    optionsEn: ['25–30°C', '35–38°C', '50–60°C', '15–20°C'],
    optionsUr: ['25–30°C', '35–38°C', '50–60°C', '15–20°C'],
    answer: 2,
    explainEn: 'Bare topsoil reaches 50–60°C, killing microbes. A 3–5 cm straw Mulching layer keeps soil cool.',
    explainUr: 'ننگی مٹی 50–60°C تک گرم ہو کر مفید جراثیم مار دیتی ہے۔ 3–5 cm ملچنگ مٹی کو ٹھنڈا رکھتی ہے۔'
  },
  {
    qEn: 'In Alternate Wetting and Drying (AWD) for rice, when do you re-irrigate?',
    qUr: 'چاول میں متبادل گیلا اور خشک (AWD) طریقے میں دوبارہ پانی کب لگاتے ہیں؟',
    optionsEn: [
      'Every single morning by calendar',
      'When water in the perforated pipe drops 15 cm below soil surface',
      'Only after deep cracks appear',
      'Never irrigate during flowering'
    ],
    optionsUr: [
      'کیلنڈر کے مطابق ہر صبح',
      'جب سوراخ دار پائپ میں پانی سطح سے 15 cm نیچے جائے',
      'صرف گہری دراڑیں پڑنے کے بعد',
      'پھول آنے پر پانی بالکل نہ دیں'
    ],
    answer: 1,
    explainEn: 'Re-irrigate when water drops 15 cm below soil surface in a buried perforated pipe (keep standing water during flowering).',
    explainUr: 'جب زمین میں دبی سوراخ دار پائپ میں پانی 15 cm نیچے جائے تب آبپاشی کریں (پھول آنے کے وقت پانی کھڑا رکھیں)۔'
  },
  {
    qEn: 'What is the ideal dry-to-green ratio when making Compost?',
    qUr: 'گلی سڑی نامیاتی کھاد / کمپوسٹ بناتے وقت خشک اور سبز مواد کا مناسب تناسب کیا ہے؟',
    optionsEn: ['2 parts dry to 1 part green', '100% fresh green grass only', 'Dry straw with no water', 'Fresh dung spread in hot sun'],
    optionsUr: ['2 حصے خشک اور 1 حصہ سبز', 'صرف تازہ سبز گھاس', 'بغیر پانی کے خشک بھوسہ', 'تیز دھوپ میں پھیلا تازہ گوبر'],
    answer: 0,
    explainEn: 'Layer 2 parts dry (straw, leaves) to 1 part green (grass, dung), keep damp like a squeezed sponge, and turn every 2–3 weeks.',
    explainUr: '2 حصے خشک مواد (بھوسہ، پتے) اور 1 حصہ سبز مواد (گھاس، گوبر) ملائیں، نم رکھیں اور ہر 2–3 ہفتے بعد پلٹیں۔'
  },
  {
    qEn: 'Which Zero Tillage machine sows wheat directly through rice straw without burning?',
    qUr: 'کون سی مشین چاول کی پرالی جلائے بغیر ہل چلائے کاشت (Zero Tillage) سے گندم بو دیتی ہے؟',
    optionsEn: ['Rotavator', 'Happy Seeder / Zero-Till Drill', 'Disc Plough', 'Mouldboard Plough'],
    optionsUr: ['روٹاویٹر', 'ہیپی سیڈر / زیرو ٹل ڈرل', 'ڈسک ہل', 'مٹی پلٹنے والا ہل'],
    answer: 1,
    explainEn: 'Happy Seeder or Zero-Till Drill sows wheat straight through chopped rice residue, saving diesel, time, and 1–2 irrigations.',
    explainUr: 'ہیپی سیڈر یا زیرو ٹل ڈرل پرالی میں براہِ راست گندم بوتی ہے جس سے ڈیزل، وقت اور 1–2 پانی بچتے ہیں۔'
  },
  {
    qEn: 'Which of these belongs to Beneficial Insects that eat crop pests?',
    qUr: 'ان میں سے کون سا فائدہ مند حشرہ (Beneficial Insect) ہے جو نقصان دہ کیڑے کھاتا ہے؟',
    optionsEn: ['Stem Borer', 'Fall Armyworm', 'Ladybird Beetle (Coccinellidae)', 'Leaf Folder'],
    optionsUr: ['تنا چھیدنے والی سنڈی', 'فال آرمی ورم', 'لیڈی برڈ بھونرا (Coccinellidae)', 'پتا لپیٹ سنڈی'],
    answer: 2,
    explainEn: 'Beneficial Insects like ladybirds, green lacewings, spiders, dragonflies, and Trichogramma chilonis eat pests naturally.',
    explainUr: 'لیڈی برڈ، گرین لیس ونگ، مکڑیاں، ڈریگن فلائی اور Trichogramma chilonis قدرتی طور پر نقصان دہ کیڑے ختم کرتے ہیں۔'
  },
  {
    qEn: 'What does Green Manure Sesbania (Sesbania bispinosa) add before rice?',
    qUr: 'چاول سے پہلے سبز کھاد سنبھالو / ڈھینچا (Sesbania bispinosa) زمین کو کیا فائدہ دیتی ہے؟',
    optionsEn: [
      'Adds nitrogen, Soil Organic Matter, and helps reclaim light salinity',
      'Creates a hard pan below soil',
      'Increases Waterlogging permanently',
      'Replaces all irrigation water'
    ],
    optionsUr: [
      'نائٹروجن اور نامیاتی مادہ دیتی ہے اور ہلکی شوریت کم کرتی ہے',
      'مٹی کے نیچے سخت تہہ بناتی ہے',
      'زمین میں پانی کا کھڑا ہونا بڑھاتی ہے',
      'پانی کی ضرورت بالکل ختم کر دیتی ہے'
    ],
    answer: 0,
    explainEn: 'Sow 20–25 kg/acre after wheat and roll down at 45–55 days (1–2 weeks before transplanting rice).',
    explainUr: 'گندم کے بعد 20–25 kg/acre بوئیں اور 45–55 دن میں چاول کی پنیری سے 1–2 ہفتے پہلے زمین میں دبا دیں۔'
  },
  {
    qEn: 'When using chemical pesticides as a last resort, when is the safest time to spray?',
    qUr: 'اگر آخری حربے کے طور پر کیمیائی زہر سپرے کرنا پڑے تو محفوظ ترین وقت کون سا ہے؟',
    optionsEn: [
      'In strong noon wind during flowering',
      'In the evening, away from flowering, with no wind and full safety gear',
      'Before checking the field',
      'Using empty food containers to mix'
    ],
    optionsUr: [
      'دوپہر کو تیز ہوا اور پھول کے وقت',
      'شام کے وقت، پھولوں سے بچا کر، بغیر ہوا کے اور حفاظتی لباس کے ساتھ',
      'کھیت کا معائنہ کیے بغیر',
      'کھانے پینے کے خالی ڈبوں میں گھول کر'
    ],
    answer: 1,
    explainEn: 'Spray only at economic threshold, in the calm evening away from flowering, wearing gloves, mask, and long clothes.',
    explainUr: 'صرف معاشی حد پر پہنچنے کے بعد، شام کو جب ہوا نہ ہو، دستانے، ماسک اور پورے کپڑے پہن کر سپرے کریں۔'
  }
];

export const GLOSSARY_TERMS = [
  {
    termEn: 'Soil Organic Matter',
    termUr: 'نامیاتی مادہ',
    defEn: 'Decomposed plant and animal material in soil. Most Narowal soils are below 1%; raising it holds much more water and nutrients.',
    defUr: 'مٹی میں پودوں اور جانوروں کا گلا سڑا مادہ۔ نارووال کی اکثر زمینوں میں یہ 1% سے کم ہے، اسے بڑھانے سے پانی اور طاقت بڑھتی ہے۔'
  },
  {
    termEn: 'Compost',
    termUr: 'گلی سڑی نامیاتی کھاد / کمپوسٹ',
    defEn: 'Dark, crumbly, earthy-smelling decomposed organic fertilizer made from 2 parts dry straw/leaves and 1 part green/dung in 2–3 months.',
    defUr: '2 حصے خشک بھوسے اور 1 حصہ سبز مواد یا گوبر سے 2–3 ماہ میں تیار ہونے والی گلی سڑی نامیاتی کھاد۔'
  },
  {
    termEn: 'Mulching',
    termUr: 'زمین کو فصلوں کی باقیات سے ڈھانپنا (ملچنگ)',
    defEn: 'Spreading 3–5 cm of wheat straw, rice straw, or cane trash on soil to cool it from 50–60°C heat and cut evaporation.',
    defUr: 'مٹی پر 3–5 cm گندم کا بھوسہ، پرالی یا گنے کی پتیوں کی تہہ بچھانا جو مٹی کو ٹھنڈا اور نم رکھتی ہے۔'
  },
  {
    termEn: 'Green Manure',
    termUr: 'سبز کھاد',
    defEn: 'Growing fast legume crops like Dhaincha (Sesbania bispinosa) at 20–25 kg/acre and rolling them into soil at 45–55 days to add nitrogen.',
    defUr: 'سنبھالو / ڈھینچا (Sesbania bispinosa) جیسی فصل 20–25 kg/acre بو کر 45–55 دن میں زمین میں دبا دینا تاکہ نائٹروجن اور نامیاتی مادہ بڑھے۔'
  },
  {
    termEn: 'Crop Rotation',
    termUr: 'فصلوں کی ادل بدل',
    defEn: 'Alternating cereals with legumes (Mung Bean, Berseem, Chickpea) or oilseeds across seasons to break pest and weed cycles.',
    defUr: 'ایک ہی فصل بار بار اگانے کے بجائے دالوں (مونگ، برسیم، چنا) یا تیل دار فصلوں کے ساتھ ادل بدل کر کے مٹی کی طاقت بحال رکھنا۔'
  },
  {
    termEn: 'Zero Tillage',
    termUr: 'بغیر ہل چلائے کاشت (زیرو ٹلیج)',
    defEn: 'Sowing wheat directly into rice stubble with a Happy Seeder or Zero-Till Drill without repeated ploughing or residue burning.',
    defUr: 'بار بار ہل چلائے یا پرالی جلائے بغیر ہیپی سیڈر یا زیرو ٹل ڈرل سے براہِ راست اگلی فصل بونا۔'
  },
  {
    termEn: 'Waterlogging',
    termUr: 'زمین میں پانی کا کھڑا ہونا (سیم)',
    defEn: 'Excess standing water in root zones caused by poor drainage or hard pan, creating sour-smelling soil and stunted roots.',
    defUr: 'نکاسی نہ ہونے یا سخت تہہ کی وجہ سے جڑوں کے پاس پانی کھڑا رہنا، جس سے مٹی میں کھٹی بو آتی ہے اور جڑیں خراب ہوتی ہیں۔'
  },
  {
    termEn: 'Beneficial Insects',
    termUr: 'فائدہ مند حشرات (دوست کیڑے)',
    defEn: 'Natural farm allies—Ladybirds (Coccinellidae), Lacewings (Chrysoperla carnea), spiders, dragonflies, and Trichogramma chilonis—that eat crop pests.',
    defUr: 'کھیت کے قدرتی محافظ کیڑے مثلاً لیڈی برڈ، گرین لیس ونگ، مکڑیاں، ڈریگن فلائی اور Trichogramma chilonis جو نقصان دہ کیڑے کھاتے ہیں۔'
  },
  {
    termEn: 'Acre / Kanal / Marla / Maund',
    termUr: 'ایکڑ / کنال / مرلہ / من',
    defEn: 'Standard Narowal units: 1 acre = 8 kanal; 1 kanal = 20 marla; 1 maund = 40 kg.',
    defUr: 'نارووال کے مقامی پیمانے: 1 acre = 8 kanal؛ 1 kanal = 20 marla؛ 1 maund = 40 kg۔'
  },
  {
    termEn: 'AWD (Alternate Wetting & Drying)',
    termUr: 'اے ڈبلیو ڈی (متبادل گیلا اور خشک)',
    defEn: 'Rice water-saving method: let water drop 15 cm below surface in a perforated pipe before re-irrigating.',
    defUr: 'چاول میں پانی بچانے کا طریقہ: سوراخ دار پائپ میں پانی 15 cm نیچے جانے پر دوبارہ آبپاشی کریں۔'
  },
  {
    termEn: 'Rhizobium Inoculant',
    termUr: 'رائزوبیم ٹیکہ (Rhizobium)',
    defEn: 'Beneficial bacteria applied to mung, mash, chickpea, or lentil seed to capture nitrogen from air into soil.',
    defUr: 'مونگ، ماش، چنا اور مسور کے بیج کو لگایا جانے والا مفید جراثیمی ٹیکہ (Rhizobium) جو ہوا سے نائٹروجن زمین میں لاتا ہے۔'
  },
  {
    termEn: 'EC (Electrical Conductivity)',
    termUr: 'ای سی (EC · شوریت کی پیمائش)',
    defEn: 'Lab soil test value showing salt levels; high EC causes white salt crusts in summer.',
    defUr: 'مٹی میں نمکیات (شوریت) جانچنے کا لیبارٹری ٹیسٹ؛ زیادہ EC گرمیوں میں سفید نمک کے دھبوں سے ظاہر ہوتا ہے۔'
  }
];
