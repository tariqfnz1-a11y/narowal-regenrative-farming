/* ==========================================================================
   HOME FARM LAB DATASET (10 PRACTICAL FIELD TESTS + INTERACTIVE DEMO FRAMES)
   District Narowal, Punjab, Pakistan — Educational Screening Only
   All tests use inexpensive household or farm materials.
   NOTE: Home tests do NOT measure pH, EC, NPK nutrients, or Soil Organic Matter %.
   Always recommend Punjab Agriculture Soil Testing Lab analysis for those.
   ========================================================================== */

export const HOME_FARM_LAB_TESTS = [
  {
    id: 'soil-texture-feel',
    num: '01',
    category: 'soil',
    photo: './images/lab-soil-feel.jpg',
    diagramType: 'texture',
    titleEn: 'Soil Texture by Hand-Feel Test',
    titleUr: 'ہاتھ سے مٹی کی ساخت (ریت، بھل، چکنی مٹی) کا ٹیسٹ',
    subtitleEn: 'Check whether your topsoil feels sandy, loamy, or heavy clay using clean water and your fingers.',
    subtitleUr: 'صاف پانی اور انگلیوں کی مدد سے چیک کریں کہ اوپری مٹی ریتلی، میرا (بھل والی) یا چکنی ہے۔',
    objective: {
      en: 'Estimate the rough balance of sand, silt, and clay in the top 0–15 cm of soil so you can adjust irrigation timing and mulching thickness.',
      ur: 'اوپری 0–15 cm مٹی میں ریت، بھل (سلٹ) اور چکنی مٹی کے تناسب کا عمومی اندازہ لگانا تاکہ آبپاشی کا وقفہ اور ملچنگ بہتر بنائی جا سکے۔'
    },
    materials: {
      en: [
        '1 handful of topsoil (0–15 cm depth, free of stones and roots)',
        'Clean water in a small cup or plastic bottle',
        'A clean cloth or paper to wipe hands afterward'
      ],
      ur: [
        'اوپری مٹی کی 1 مٹھی (0–15 cm گہرائی سے، کنکر اور جڑوں کے بغیر)',
        'چھوٹے کپ یا پلاسٹک بوتل میں صاف پانی',
        'بعد میں ہاتھ صاف کرنے کے لیے کپڑا یا کاغذ'
      ]
    },
    steps: {
      en: [
        'Remove dry leaves and crush soil lumps gently in your palm.',
        'Add clean water drop by drop until the soil feels like smooth dough (moist, not dripping wet).',
        'Roll the soil into a ball between your palms, then press it upward between your thumb and forefinger to push out a flat ribbon.',
        'Rub a small pinch with extra water on your palm to feel grit (sand), floury smoothness (silt), or stickiness (clay).'
      ],
      ur: [
        'سوکھے پتے ہٹا کر ہاتھ میں مٹی کے ڈھیلے نرمی سے توڑ لیں۔',
        'قطرہ قطرہ صاف پانی ملائیں جب تک مٹی گوندھے ہوئے آٹے جیسی نم نہ ہو جائے (زیادہ گیلی نہ ہو)۔',
        'ہتھیلیوں کے درمیان گولا بنائیں، پھر انگوٹھے اور شہادت کی انگلی سے دبا کر چپٹی پٹی (Ribbon) بنانے کی کوشش کریں۔',
        'ہتھیلی پر تھوڑی سی مٹی میں زیادہ پانی ملا کر رگڑیں: دانے دار احساس ریت، آٹے جیسا ملائم احساس بھل، اور چپچپاہٹ چکنی مٹی دکھاتی ہے۔'
      ]
    },
    observe: {
      en: [
        'Does the ball crumble right away and feel gritty like sugar or coarse sand?',
        'Does the ball hold together and form a short 2–4 cm ribbon that breaks easily (balanced loam)?',
        'Does it form a shiny, sticky ribbon longer than 5 cm without breaking (clay-heavy soil)?'
      ],
      ur: [
        'کیا گولا فوراً ٹوٹ جاتا ہے اور ہاتھ میں ریت کے دانے محسوس ہوتے ہیں؟',
        'کیا گولا جڑ جاتا ہے اور 2–4 cm کی مختصر پٹی بن کر ٹوٹ جاتی ہے (متوازن میرا زمین)؟',
        'کیا 5 cm سے لمبی چکنی اور چپکنے والی پٹی آسانی سے بن جاتی ہے (بھاری چکنی مٹی)؟'
      ]
    },
    meaning: {
      en: [
        'Gritty / no ball (Sandy): Water and nutrients drain fast; benefits strongly from Compost and straw Mulching.',
        'Soft 2–4 cm ribbon (Loam — common around Narowal): Holds both air and water well; protect structure with Zero Tillage.',
        'Sticky 5+ cm ribbon (Clay): Holds water longer and hardens when dry; avoid working wet soil and watch for Waterlogging.'
      ],
      ur: [
        'ریتلی (گولا نہ بنے): پانی اور غذائیت جلدی نیچے چلی جاتی ہے؛ کمپوسٹ اور ملچنگ سے بہت فائدہ ہوتا ہے۔',
        'میرا / متوازن (2–4 cm پٹی): نارووال کی عام زرخیز ساخت جو ہوا اور پانی دونوں سنبھالتی ہے؛ بغیر ہل چلائے کاشت سے اسے بچائیں۔',
        'چکنی مٹی (5+ cm لمبی پٹی): پانی دیر تک روکتی اور سوکھ کر سخت ہو جاتی ہے؛ گیلی زمین میں ہل نہ چلائیں اور پانی کھڑا ہونے سے بچائیں۔'
      ]
    },
    limitations: {
      en: 'Hand-feel only gives a rough texture impression and varies slightly by person. It does NOT measure soil pH, EC (salinity), Soil Organic Matter %, or NPK nutrients — send mixed field samples to the Punjab Agriculture Soil Testing Lab for accurate measurements.',
      ur: 'ہاتھ کا ٹیسٹ صرف ساخت کا عمومی اندازہ دیتا ہے جو شخص کے لحاظ سے تھوڑا بدل سکتا ہے۔ یہ ٹیسٹ pH، EC (نمکیات)، نامیاتی مادے کی شرح یا NPK غذائی اجزا بالکل نہیں ماپتا — درست پیمائش کے لیے مٹی کا نمونہ محکمہ زراعت پنجاب کی لیبارٹری بھیجیں۔'
    },
    safety: {
      en: [
        'Check soil by eye first for sharp glass, thorns, or metal pieces before squeezing.',
        'Wash hands thoroughly with soap and clean water after finishing; avoid touching eyes or food with muddy hands.'
      ],
      ur: [
        'مٹی ہاتھ میں لینے سے پہلے کانچ، کانٹے یا لوہے کے تیز ٹکڑے دیکھ کر الگ کر لیں۔',
        'ٹیسٹ کے بعد صابن اور صاف پانی سے ہاتھ اچھی طرح دھوئیں؛ گندے ہاتھ آنکھوں یا کھانے کو نہ لگائیں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Crush & Remove Debris',
        labelUr: 'مرحلہ 1 · ڈھیلے توڑ کر صاف کریں',
        captionEn: 'Take 1 handful of 0–15 cm topsoil and remove roots or stones.',
        captionUr: '0–15 cm گہرائی سے مٹی کی 1 مٹھی لے کر جڑیں اور کنکر نکال دیں۔'
      },
      {
        labelEn: 'Step 2 · Moisten to Dough Feel',
        labelUr: 'مرحلہ 2 · ہلکا پانی ملائیں',
        captionEn: 'Add clean water drop by drop until soil holds shape without dripping.',
        captionUr: 'قطرہ قطرہ پانی ڈالیں تاکہ مٹی آٹے جیسی بن جائے، پانی نہ ٹپکے۔'
      },
      {
        labelEn: 'Step 3 · Push Thumb Ribbon',
        labelUr: 'مرحلہ 3 · انگوٹھے سے پٹی بنائیں',
        captionEn: 'Press soil past thumb tip: gritty = sand, 2–4 cm = loam, >5 cm sticky = clay.',
        captionUr: 'انگوٹھے سے آگے دبائیں: ریتلی بکھرے، میرا 2–4 cm، چکنی 5 cm سے لمبی پٹی۔'
      }
    ]
  },
  {
    id: 'soil-infiltration',
    num: '02',
    category: 'soil',
    photo: './images/lab-infiltration-spade.jpg',
    diagramType: 'infiltration',
    titleEn: 'Soil Infiltration Test',
    titleUr: 'مٹی میں پانی جذب ہونے کا ٹیسٹ',
    subtitleEn: 'Time how quickly measured water soaks into your field using a cut bottle ring and stopwatch.',
    subtitleUr: 'کٹی ہوئی پلاسٹک بوتل کے رنگ اور گھڑی کی مدد سے دیکھیں کہ کھیت میں پانی کتنی جلدی جذب ہوتا ہے۔',
    objective: {
      en: 'Check whether rainwater and irrigation soak smoothly into root depth or stay trapped on top because of surface crusting or a hard pan.',
      ur: 'یہ جانچنا کہ بارش اور آبپاشی کا پانی جڑوں تک آسانی سے جذب ہوتا ہے یا اوپری کھرنڈ / سخت تہہ کی وجہ سے اوپر کھڑا رہتا ہے۔'
    },
    materials: {
      en: [
        '1 large empty plastic bottle (2 L) or open-ended tin can, cut at top and bottom into a 12–15 cm cylinder',
        'Clean water in a 500 mL measuring cup or marked bottle',
        'A small wooden board + stone or mallet to press the ring gently into soil',
        'Phone clock or wristwatch for timing, plus notebook & pen'
      ],
      ur: [
        '2 لیٹر خالی پلاسٹک بوتل یا دونوں طرف سے کھلا ٹن کا ڈبہ (12–15 cm اونچا گول رنگ)',
        '500 mL ناپے ہوئے صاف پانی کا برتن یا نشان والی بوتل',
        'رنگ کو مٹی میں دبانے کے لیے لکڑی کی پھٹی اور پتھر یا ہتھوڑی',
        'وقت دیکھنے کے لیے موبائل گھڑی اور نوٹ بک'
      ]
    },
    steps: {
      en: [
        'Clear loose weeds gently without digging or disturbing soil pores, leaving natural straw cover as-is.',
        'Place the wooden board over the bottle ring and push or tap it 4–5 cm straight down into moist soil so water cannot leak sideways.',
        'Pour ~2.5 cm depth (or 300–400 mL) of water gently onto a small plastic sheet or palm inside the ring, then lift the sheet and start your timer.',
        'Record how many minutes it takes until the soil surface inside the ring looks wet and shiny with no standing puddle. Repeat at 2–3 spots in the field.'
      ],
      ur: [
        'مٹی کھودے بغیر صرف بڑی گھاس نرمی سے ہٹائیں اور قدرتی بھوسہ اپنی جگہ رہنے دیں۔',
        'لکڑی کی پھٹی رنگ کے اوپر رکھ کر اسے نم مٹی میں 4–5 cm سیدھا دبائیں تاکہ پانی اطراف سے نہ نکلے۔',
        'رنگ کے اندر تقریباً 2.5 cm گہرا پانی (300–400 mL) ہتھیلی یا پلاسٹک شیٹ پر نرمی سے ڈال کر وقت نوٹ کرنا شروع کریں۔',
        'نوٹ کریں کہ کھڑا پانی ختم ہو کر مٹی صرف چمکدار نم رہنے میں کتنے منٹ لگتے ہیں۔ کھیت میں 2–3 جگہ دہرائیں۔'
      ]
    },
    observe: {
      en: [
        'Notice whether water leaks out around the outer edge of the ring (if so, reset cleanly a step away).',
        'Compare soak time between a wheel-track / bare spot and a covered, less-tilled spot.'
      ],
      ur: [
        'دیکھیں کہ پانی رنگ کے باہر سے رس تو نہیں رہا (ایسا ہو تو ایک قدم آگے دوبارہ لگائیں)۔',
        'ٹریکٹر کے پہیے والی جگہ اور ملچنگ یا کم ہل والی جگہ کے جذب ہونے کا وقت آپس میں موازنہ کریں۔'
      ]
    },
    meaning: {
      en: [
        'Fast soak (few minutes): Open pores, good earthworm/root channels, low runoff risk during monsoon.',
        'Slow soak (20–60+ minutes or standing puddle): May point to surface crusting, compaction, plough hard pan, or sodium/Waterlogging issues.',
        'If slow everywhere, test a lab sample for EC/pH and consider Mulching, Green Manure, or deep Chisel Plough where advised.'
      ],
      ur: [
        'تیزی سے جذب (چند منٹ): کھلے مسام، جڑوں اور کینچوؤں کے راستے موجود، بارش کا پانی ضائع نہیں ہوتا۔',
        'سست جذب (20–60+ منٹ یا پانی کھڑا رہنا): اوپری کھرنڈ، دباؤ، ہل کی سخت تہہ یا نمکیات / سیم کی نشانی ہو سکتی ہے۔',
        'اگر ہر جگہ سست ہو تو لیبارٹری میں EC اور pH چیک کروائیں اور ملچنگ، سبز کھاد یا مشورے سے چیزل ہل پر غور کریں۔'
      ]
    },
    limitations: {
      en: 'A single ring can let water spread sideways below ground, making rates look faster than deep-field soaking during heavy rain. Always test 2–3 spots when soil has similar starting moisture. This does NOT measure salinity (EC), sodicity, or chemical infiltration hazards — consult the Punjab Soil Testing Lab.',
      ur: 'ایک رنگ سے پانی نیچے جا کر اطراف میں بھی پھیل سکتا ہے، اس لیے نتیجہ اصل تیز بارش سے کچھ تیز لگ سکتا ہے۔ ہمیشہ ایک جیسی نمی پر 2–3 جگہ ٹیسٹ کریں۔ یہ ٹیسٹ EC یا کیمیائی خرابی نہیں بتاتا — درست تشخیص کے لیے پنجاب سوائل ٹیسٹنگ لیب سے چیک کروائیں۔'
    },
    safety: {
      en: [
        'Smooth sharp cut edges of plastic or tin cans with tape or thick cloth before pressing with hands.',
        'Use a flat wooden block on top when tapping the ring so fingers are never pinched.'
      ],
      ur: [
        'کٹی ہوئی بوتل یا ٹن کے تیز کناروں پر ٹیپ یا کپڑا لپیٹ لیں تاکہ ہاتھ نہ کٹیں۔',
        'رنگ دباتے وقت اوپر لکڑی کی پھٹی رکھیں تاکہ انگلیاں نہ دبیں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Press Ring 4–5 cm',
        labelUr: 'مرحلہ 1 · رنگ کو 4–5 cm دبائیں',
        captionEn: 'Push the open bottle cylinder straight down into undisturbed soil.',
        captionUr: 'کھلی بوتل کا رنگ سیدھا مٹی میں 4–5 cm نیچے دبائیں۔'
      },
      {
        labelEn: 'Step 2 · Pour Water & Start Clock',
        labelUr: 'مرحلہ 2 · پانی ڈال کر وقت نوٹ کریں',
        captionEn: 'Pour 2.5 cm of clean water gently and begin timing.',
        captionUr: '2.5 cm صاف پانی نرمی سے ڈالیں اور گھڑی شروع کریں۔'
      },
      {
        labelEn: 'Step 3 · Compare Soak Speed',
        labelUr: 'مرحلہ 3 · جذب ہونے کا موازنہ',
        captionEn: 'Healthy porous soil absorbs water in minutes; compacted soil pools.',
        captionUr: 'صحت مند بھربھری مٹی چند منٹ میں پانی پی لیتی ہے؛ سخت مٹی پر کھڑا رہتا ہے۔'
      }
    ]
  },
  {
    id: 'soil-moisture-squeeze',
    num: '03',
    category: 'soil',
    photo: './images/lab-soil-feel.jpg',
    diagramType: 'moisture',
    titleEn: 'Soil Moisture Squeeze Test',
    titleUr: 'ہاتھ سے دبا کر مٹی کی نمی کا ٹیسٹ',
    subtitleEn: 'Squeeze soil from root depth (10–15 cm) to avoid unnecessary tubewell pumping or crop wilt.',
    subtitleUr: 'جڑوں کی گہرائی (10–15 cm) سے مٹی دبا کر دیکھیں کہ آبپاشی کی واقعی ضرورت ہے یا نہیں۔',
    objective: {
      en: 'Check moisture right in the root zone (not just the dry top crust) before running a tubewell, saving water and diesel.',
      ur: 'صرف اوپری خشک تہہ دیکھنے کے بجائے جڑوں کے زون میں نمی چیک کرنا تاکہ غیر ضروری ٹیوب ویل اور ڈیزل کی بچت ہو۔'
    },
    materials: {
      en: [
        'Small hand trowel, khurpa, or spade to reach 10–15 cm depth',
        'Your hands and a clean cloth',
        'Notebook to log moisture before irrigation'
      ],
      ur: [
        '10–15 cm گہرائی تک پہنچنے کے لیے کھرپا یا بیلچہ',
        'آپ کے ہاتھ اور صاف کپڑا',
        'آبپاشی سے پہلے مشاہدہ لکھنے کے لیے کاپی'
      ]
    },
    steps: {
      en: [
        'Scrape away the top 2–3 cm crust or straw mulch.',
        'Take a handful of soil from 10–15 cm deep (root zone) with a khurpa or spade.',
        'Squeeze the handful firmly into a ball, then open your hand and tap the ball gently with your thumb.',
        'Look at your palm for water marks or free droplets, then re-cover the spot with straw.'
      ],
      ur: [
        'اوپر کی 2–3 cm خشک تہہ یا ملچنگ ایک طرف ہٹائیں۔',
        'کھرپے یا بیلچے سے 10–15 cm گہرائی (جڑوں کی جگہ) سے مٹی کی ایک مٹھی نکالیں۔',
        'مٹھی میں زور سے دبا کر گولا بنائیں، پھر ہاتھ کھول کر انگوٹھے سے ہلکی تھپکی دیں۔',
        'ہتھیلی پر نمی یا پانی کے قطرے دیکھیں اور گڑھے پر دوبارہ بھوسہ ڈھانپ دیں۔'
      ]
    },
    observe: {
      en: [
        'Dry / Dusty: Soil will not form a ball or falls apart immediately with dust.',
        'Ideal / Adequate: Forms a firm ball that breaks cleanly when tapped, leaving a light cool moisture film on your palm.',
        'Saturated / Too Wet: Free water glistens or drips between fingers and leaves mud sticking heavily to skin.'
      ],
      ur: [
        'خشک / گرد آلود: مٹی کا گولا نہیں بنتا یا فوراً گرد بن کر بکھر جاتا ہے۔',
        'موزوں نمی: مضبوط گولا بنتا ہے جو تھپکی سے ٹوٹ جائے، اور ہتھیلی پر ہلکی ٹھنڈی نمی کا نشان رہے۔',
        'بہت زیادہ گیلی: انگلیوں کے درمیان پانی چمکے یا ٹپکے اور ہتھیلی پر گاڑھی کیچڑ چپکے۔'
      ]
    },
    meaning: {
      en: [
        'Adequate ball in root zone: You can usually wait and re-check in 2–3 days instead of irrigating early.',
        'Dry crumble at 10–15 cm: Plan timely irrigation (especially at crown-root, flowering, or grain-fill stages).',
        'Saturated water-dripping soil: Hold off irrigation and check field drains to prevent root suffocation (Waterlogging).'
      ],
      ur: [
        'مناسب گولا بنے: ابھی آبپاشی کی جلدی نہیں، 2–3 دن بعد دوبارہ چیک کریں۔',
        '10–15 cm پر خشک بکھری مٹی: خاص طور پر حساس مراحل (تاج کی جڑیں، پھول، دانہ بھرائی) پر وقت پر پانی لگائیں۔',
        'پانی ٹپکتا ہو: آبپاشی روکیں اور نکاسی آب کی نالیاں صاف کریں تاکہ جڑیں نہ گلیں (Waterlogging)۔'
      ]
    },
    limitations: {
      en: 'Sand holds much less moisture than clay at the same squeeze feel, and shallow-rooted seedlings need moisture closer to the surface than 15 cm. This test does NOT measure salt concentration (EC) in irrigation water or soil — use a soil/water lab test for salinity.',
      ur: 'ریتلی اور چکنی مٹی کا ایک جیسا دباؤ مختلف پانی کی مقدار ظاہر کرتا ہے، اور نئے اُگے پودوں کو 15 cm سے اوپر نمی چاہیے ہوتی ہے۔ یہ ٹیسٹ زمین یا ٹیوب ویل کے پانی کی نمکیات (EC) نہیں ماپتا — اس کے لیے لیبارٹری ٹیسٹ ضروری ہے۔'
    },
    safety: {
      en: [
        'If testing in a recently sprayed neighbour field or thorny stubble, use a khurpa rather than bare fingers initially.',
        'Wash hands after handling wet field soil.'
      ],
      ur: [
        'اگر قریب کسی کھیت میں سپرے ہوا ہو یا کانٹے دار مڈھ ہوں تو مٹی نکالنے کے لیے کھرپا استعمال کریں۔',
        'گیلی مٹی چھونے کے بعد ہاتھ اچھی طرح دھوئیں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Sample 10–15 cm Deep',
        labelUr: 'مرحلہ 1 · 10–15 cm گہرائی سے مٹی لیں',
        captionEn: 'Always check root-zone soil, not the sun-dried top 2 cm crust.',
        captionUr: 'ہمیشہ جڑوں کی گہرائی سے مٹی چیک کریں، اوپری خشک پرت سے دھوکہ نہ کھائیں۔'
      },
      {
        labelEn: 'Step 2 · Firm Hand Squeeze',
        labelUr: 'مرحلہ 2 · مٹھی میں دبائیں',
        captionEn: 'Squeeze firmly and open palm to see if a stable moist ball forms.',
        captionUr: 'مضبوطی سے دبا کر ہتھیلی کھولیں اور دیکھیں کہ گولا کیسا بنتا ہے۔'
      },
      {
        labelEn: 'Step 3 · Decide Irrigation Timing',
        labelUr: 'مرحلہ 3 · آبپاشی کا فیصلہ',
        captionEn: 'Cool damp ball = wait; dry dust = irrigate soon; dripping = hold water.',
        captionUr: 'ٹھنڈا نم گولا = انتظار؛ خشک گرد = آبپاشی؛ ٹپکتا پانی = پانی روکیں۔'
      }
    ]
  },
  {
    id: 'spade-soil-structure',
    num: '04',
    category: 'soil',
    photo: './images/lab-infiltration-spade.jpg',
    diagramType: 'spade',
    titleEn: 'Spade Test for Soil Structure',
    titleUr: 'مٹی کی ساخت کے لیے 30 cm بیلچے کا ٹیسٹ',
    subtitleEn: 'Lift a 30 cm moist soil cube to inspect crumbs, hard pans, root depth, and earthy smell.',
    subtitleUr: '30 cm گہرا مٹی کا ٹکڑا نکال کر بھربھرا پن، سخت تہہ، جڑوں کی گہرائی اور خوشبو چیک کریں۔',
    objective: {
      en: 'See beneath the surface how well soil forms crumbly pores (aggregates), whether a plough hard pan is blocking roots, and whether air is reaching root depth.',
      ur: 'سطح کے نیچے دیکھنا کہ مٹی بھربھری اور مسام دار ہے یا ہل کی سخت تہہ جڑوں کو روک رہی ہے، اور کیا جڑوں تک ہوا پہنچ رہی ہے۔'
    },
    materials: {
      en: [
        '1 flat-blade farm spade (kassi / belcha)',
        'A plastic sack or cloth to lay the soil block on',
        'Notebook to compare the same spot across seasons'
      ],
      ur: [
        'چپٹے پھالے والا بیلچہ یا کسی',
        'مٹی کا ٹکڑا رکھنے کے لیے بوری یا کپڑا',
        'مختلف موسموں کا ریکارڈ لکھنے کے لیے کاپی'
      ]
    },
    steps: {
      en: [
        'Wait 1–2 days after rain or irrigation so the soil is moist enough to cut cleanly.',
        'Cut around a 20–30 cm square and dig down ~30 cm, lifting the block gently onto the sack.',
        'Break the block gently with both hands from bottom to top—notice where roots bend sideways or hit a tight layer.',
        'Smell the freshly broken soil inside, compare topsoil colour with deeper layers, then return the soil back into the hole.'
      ],
      ur: [
        'بارش یا آبپاشی کے 1–2 دن بعد کھیت میں جائیں جب مٹی اتنی نم ہو کہ صاف کٹ سکے۔',
        'تقریباً 20–30 cm چوکور نشان لگا کر 30 cm گہرا ٹکڑا احتیاط سے بوری پر نکالیں۔',
        'نیچے سے اوپر کی طرف ہاتھوں سے نرمی سے توڑیں — دیکھیں جڑیں سیدھی نیچے جا رہی ہیں یا کسی سخت تہہ پر مڑ رہی ہیں۔',
        'تازہ ٹوٹی اندرونی مٹی سونگھیں، اوپری اور نچلی رنگت کا موازنہ کریں، اور آخر میں مٹی واپس گڑھے میں رکھ دیں۔'
      ]
    },
    observe: {
      en: [
        'Crumbly chocolate-like aggregates vs. tight, plate-like clods or shiny compacted layer at 12–20 cm.',
        'Sweet, fresh earthy smell vs. sour, rotten-egg smell (lack of oxygen / Waterlogging).',
        'White branching roots growing deep vs. stunted, J-shaped or shallow roots.'
      ],
      ur: [
        'بھربھرے دانے دار ٹکڑے بمقابلہ 12–20 cm گہرائی پر سخت چپٹی تہہ یا اینٹ جیسے ڈھیلے۔',
        'تازہ میٹھی مٹی کی خوشبو بمقابلہ کھٹی یا گندی بو (آکسیجن کی کمی / Waterlogging)۔',
        'گہری پھیلی سفید جڑیں بمقابلہ مڑی ہوئی یا صرف اوپر رکی جڑیں۔'
      ]
    },
    meaning: {
      en: [
        'Crumbly block + deep roots + sweet smell: Living, well-aerated soil; maintain with Mulching and Zero Tillage.',
        'Tight layer at 12–20 cm with bent roots: Signs of tillage hard pan; reduce tractor passes and add deep-rooted crops like Sorghum or Dhaincha.',
        'Greyish blue streaks + sour smell: Poor drainage / Waterlogging; improve field levelling and drainage channels.'
      ],
      ur: [
        'بھربھری مٹی + گہری جڑیں + میٹھی خوشبو: صحت مند اور ہوادار زمین؛ ملچنگ اور بغیر ہل کاشت سے برقرار رکھیں۔',
        '12–20 cm پر سخت تہہ اور مڑی جڑیں: بار بار ہل چلانے کی سخت تہہ؛ ٹریکٹر چکر کم کریں اور جوار یا جنتر (ڈھینچا) جیسی گہری جڑوں والی فصلیں شامل کریں۔',
        'سرمئی/نیلگوں دھاریاں اور کھٹی بو: پانی کے کھڑا ہونے اور ہوا کی کمی کی علامت؛ ہمواری اور نکاسی بہتر بنائیں۔'
      ]
    },
    limitations: {
      en: 'Checking bone-dry clay or freshly flooded mud gives misleading results. This structural check does NOT determine pH, salinity (EC), available phosphorus, potassium, or exact Soil Organic Matter % — always send composite samples (10–15 spots) to the Punjab Soil Testing Lab.',
      ur: 'بالکل سوکھی چکنی مٹی یا کیچڑ میں بیلچہ ٹیسٹ غلط تاثر دیتا ہے۔ یہ ساخت کا معائنہ pH، EC، فاسفورس، پوٹاش یا نامیاتی مادے کا درست فیصد نہیں بتاتا — اس کے لیے 10–15 جگہوں کی ملی جلی مٹی پنجاب سوائل لیب بھیجیں۔'
    },
    safety: {
      en: [
        'Wear sturdy closed shoes or boots when stepping on a spade blade; keep feet clear of the cutting edge.',
        'Watch for buried roots, stones, or insects when lifting the block and bend at the knees, not your lower back.'
      ],
      ur: [
        'بیلچے پر پاؤں رکھتے وقت مضبوط جوتے پہنیں اور تیز دھار سے پاؤں دور رکھیں۔',
        'ٹکڑا اٹھاتے وقت کمر جھکانے کے بجائے گھٹنے موڑیں اور بچھو یا کیڑوں پر نظر رکھیں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Dig 30 cm Moist Block',
        labelUr: 'مرحلہ 1 · 30 cm نم ٹکڑا نکالیں',
        captionEn: 'Wait 1–2 days after water; dig a clean 30 cm cube onto a sack.',
        captionUr: 'پانی کے 1–2 دن بعد 30 cm گہرا صاف چوکور ٹکڑا بوری پر نکالیں۔'
      },
      {
        labelEn: 'Step 2 · Inspect Layers & Roots',
        labelUr: 'مرحلہ 2 · تہیں اور جڑیں دیکھیں',
        captionEn: 'Break gently by hand: check for crumbs vs. hard pan and bent roots.',
        captionUr: 'ہاتھ سے نرمی سے توڑ کر بھربھرا پن، سخت تہہ اور جڑوں کا رخ دیکھیں۔'
      },
      {
        labelEn: 'Step 3 · Check Smell & Restore',
        labelUr: 'مرحلہ 3 · بو سونگھیں اور مٹی واپس رکھیں',
        captionEn: 'Sweet smell = aerobic life; sour = Waterlogging. Place soil back neatly.',
        captionUr: 'میٹھی بو = زندہ مٹی؛ کھٹی بو = سیم۔ آخر میں مٹی واپس گڑھے میں رکھ دیں۔'
      }
    ]
  },
  {
    id: 'earthworm-observation',
    num: '05',
    category: 'biology',
    photo: './images/soil-healthy.jpg',
    diagramType: 'earthworms',
    titleEn: 'Earthworm Observation',
    titleUr: 'کینچوؤں کا مشاہدہ',
    subtitleEn: 'Count earthworms and fresh worm castings in cool moist topsoil as a living biology indicator.',
    subtitleUr: 'ٹھنڈی اور نم اوپری مٹی میں کینچوے اور ان کی مٹی کی گولیاں گن کر مٹی کی حیات کا اندازہ لگائیں۔',
    objective: {
      en: 'Track beneficial soil life over seasons—earthworms tunnel air and water deep into the root zone and leave nutrient-rich castings.',
      ur: 'موسم بہ موسم فائدہ مند زمینی حیات کا ریکارڈ رکھنا — کینچوے ہوا اور پانی کے راستے بناتے اور زرخیز مٹی چھوڑتے ہیں۔'
    },
    materials: {
      en: [
        '1 spade (kassi)',
        'A burlap sack or piece of cardboard to sort soil gently',
        'A plastic cup with a little damp soil to hold worms briefly while counting'
      ],
      ur: [
        '1 بیلچہ یا کسی',
        'مٹی پھیلا کر گننے کے لیے بوری یا گتے کا ٹکڑا',
        'گنتی کے دوران کینچوے رکھنے کے لیے نم مٹی والا پلاسٹک کپ'
      ]
    },
    steps: {
      en: [
        'Choose an early morning or cool overcast time 1–2 days after rain or irrigation (when earthworms stay near the top 20–30 cm).',
        'Dig one 30 × 30 cm block about 20–30 cm deep onto the sack.',
        'Sort gently through the soil and under straw residue by hand for 3–5 minutes without cutting worms.',
        'Count every earthworm, look for small round worm castings on the surface, then gently return soil and worms into the shade.'
      ],
      ur: [
        'بارش یا آبپاشی کے 1–2 دن بعد صبح سویرے یا ٹھنڈے وقت کھیت میں جائیں (تب کینچوے اوپری 20–30 cm میں ہوتے ہیں)۔',
        '30 × 30 cm چوکور اور 20–30 cm گہرا ٹکڑا بوری پر نکالیں۔',
        '3–5 منٹ تک ہاتھ سے نرمی سے مٹی اور بھوسے کے نیچے کینچوے تلاش کریں تاکہ وہ کٹیں نہیں۔',
        'کینچوے گنیں، سطح پر ان کی گول مٹی دیکھیں، اور فوراً کینچووں سمیت مٹی واپس گڑھے میں ڈھانپ دیں۔'
      ]
    },
    observe: {
      en: [
        'Total number of active earthworms in the 30 cm block (handbook benchmark: 5 or more shows healthy activity).',
        'Small granular worm castings on covered soil and round vertical burrow holes.'
      ],
      ur: [
        '30 cm کے ٹکڑے میں کینچوؤں کی کل تعداد (ہینڈ بک کے مطابق 5 یا زیادہ اچھی صحت کی علامت ہے)۔',
        'ملچنگ کے نیچے کینچوؤں کی چھوٹی گول مٹی اور زمین میں عمودی سوراخ۔'
      ]
    },
    meaning: {
      en: [
        '5+ earthworms in 30 cm cube: Strong Soil Organic Matter feeding soil life and good moisture/cover.',
        '1–4 earthworms: Soil life is recovering; keep Compost and straw Mulching going.',
        '0 earthworms in moist season: May happen after burning, heavy tillage, dry heat, or excess chemicals — check cover and soil lab salinity/pH.'
      ],
      ur: [
        '5 یا زیادہ کینچوے: بہتر نامیاتی مادہ، اچھی نمی اور زندہ مٹی کی علامت۔',
        '1–4 کینچوے: مٹی بحال ہو رہی ہے؛ کمپوسٹ اور ملچنگ جاری رکھیں۔',
        'نم موسم میں 0 کینچوے: پرالی جلانے، زیادہ ہل، خشک گرمی یا زیادہ کیمیائی دباؤ کی وجہ سے ہو سکتا ہے — زمین ڈھانپیں اور لیب سے pH/EC چیک کروائیں۔'
      ]
    },
    limitations: {
      en: 'Earthworms naturally burrow deeper during hot Punjab summers (May–June), very dry spells, or standing flooded rice fields, so finding none at noon in hot dry soil does NOT always mean dead soil. This count does not measure soil nutrients, pH, or EC.',
      ur: 'پنجاب کی سخت گرمی (مئی–جون)، خشک سالی یا کھڑے چاول کے پانی میں کینچوے گہرائی میں چلے جاتے ہیں، اس لیے دوپہر کی خشک گرمی میں کینچوے نہ ملنا ہمیشہ بنجر زمین نہیں ہوتا۔ یہ گنتی غذائی اجزا، pH یا EC نہیں ماپتی۔'
    },
    safety: {
      en: [
        'Look carefully before reaching under thick straw or damp mulch for snakes, scorpions, or biting ants.',
        'Never leave earthworms baking in sunlight; return them swiftly under moist soil.'
      ],
      ur: [
        'گھنے بھوسے یا نم ڈھانپے کے نیچے ہاتھ ڈالنے سے پہلے سانپ، بچھو یا کاٹنے والی چیونٹیوں سے احتیاط کریں۔',
        'کینچووں کو تیز دھوپ میں نہ چھوڑیں؛ گنتی کے فوراً بعد نم مٹی میں واپس رکھ دیں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Sample Cool Moist Morning',
        labelUr: 'مرحلہ 1 · صبح کے وقت نم مٹی',
        captionEn: 'Dig a 30 cm block in cool moist soil—worms retreat deep in midday heat.',
        captionUr: 'صبح ٹھنڈے وقت نم مٹی سے 30 cm ٹکڑا نکالیں، دوپہر کو کینچوے نیچے چلے جاتے ہیں۔'
      },
      {
        labelEn: 'Step 2 · Sort & Count Gently',
        labelUr: 'مرحلہ 2 · نرمی سے گنیں',
        captionEn: 'Handbook check: 5+ earthworms per block indicates active living soil.',
        captionUr: 'ہینڈ بک پیمانہ: ایک ٹکڑے میں 5 یا زیادہ کینچوے فعال زندہ مٹی دکھاتے ہیں۔'
      },
      {
        labelEn: 'Step 3 · Return Under Shade',
        labelUr: 'مرحلہ 3 · سائے میں واپس رکھیں',
        captionEn: 'Return worms immediately into the hole and cover with straw.',
        captionUr: 'گنتی کے فوراً بعد کینچوے واپس گڑھے میں رکھ کر بھوسے سے ڈھانپ دیں۔'
      }
    ]
  },
  {
    id: 'compost-maturity',
    num: '06',
    category: 'compost',
    photo: './images/lab-compost-tests.jpg',
    diagramType: 'compost-mature',
    titleEn: 'Compost Maturity Test',
    titleUr: 'کمپوسٹ (دیسی نامیاتی کھاد) کے پکنے کا ٹیسٹ',
    subtitleEn: 'Check colour, heap warmth, jar smell, and fast radish/wheat seed sprouting before spreading compost.',
    subtitleUr: 'کھیت میں ڈالنے سے پہلے رنگ، ڈھیر کی حرارت، بند جار کی بو اور بیج اگاؤ سے چیک کریں کہ کھاد پک چکی ہے۔',
    objective: {
      en: 'Confirm that Compost is fully decomposed and safe for young seedlings rather than still hot and immature (which can tie up nitrogen or burn roots).',
      ur: 'یقینی بنانا کہ کمپوسٹ مکمل گل سڑ چکی ہے اور فصل کے لیے محفوظ ہے، کیونکہ کچی یا گرم کھاد جڑوں کو نقصان اور نائٹروجن میں کمی لا سکتی ہے۔'
    },
    materials: {
      en: [
        '1 clean glass jar or clear plastic bottle with tight lid',
        'A small dish or cup + clean tissue/cloth + 10 fast seeds (mustard/canola or wheat)',
        'A long wooden stick or iron rod to probe inside the heap'
      ],
      ur: [
        'ڈھکن والا 1 صاف شیشے کا جار یا شفاف پلاسٹک بوتل',
        'چھوٹی پلیٹ یا کپ + صاف کپڑا + سرسوں یا گندم کے 10 بیج',
        'ڈھیر کے اندر حرارت دیکھنے کے لیے لکڑی یا لوہے کی لمبی سلاخ'
      ]
    },
    steps: {
      en: [
        'Look & Feel: Mature compost should be dark brown/black, crumbly, and show no recognizable straw or fresh dung.',
        'Stick Heat Check: Push a stick deep into the heap centre for 10 minutes, pull out, and touch carefully—mature compost is cool (near outdoor shade temperature).',
        '24-Hour Jar Smell Check: Put a damp handful in a clean sealed jar for 24 hours in shade, then open and sniff carefully: sweet forest-earth smell = ready; ammonia or rotten sour smell = needs more turning and time.',
        'Optional Sprout Check: Mix 1 part compost + 1 part clean sand in a cup, keep moist with 10 mustard/wheat seeds for 4–5 days; healthy green sprouts confirm readiness.'
      ],
      ur: [
        'رنگ اور ساخت: پکی کمپوسٹ گہری بھوری یا سیاہ اور بھربھری ہو، اس میں کچا بھوسہ یا تازہ گوبر پہچانا نہ جائے۔',
        'سلاخ سے حرارت: ڈھیر کے بیچ میں 10 منٹ کے لیے سلاخ گاڑ کر نکالیں اور احتیاط سے چھو کر دیکھیں — پکی کھاد ٹھنڈی (ماحول کے برابر) ہوتی ہے۔',
        '24 گھنٹے جار ٹیسٹ: نم کھاد کی مٹھی صاف بند جار میں 24 گھنٹے سائے میں رکھیں پھر سونگھیں: میٹھی مٹی کی خوشبو = تیار؛ تیز امونیا یا گندی بو = ابھی مزید پلٹائی اور وقت چاہیے۔',
        'بیج اگاؤ ٹیسٹ: آدھی کمپوسٹ اور آدھی صاف ریت کپ میں ملا کر 10 سرسوں یا گندم کے بیج 4–5 دن نم رکھیں؛ صحت مند سبز اگاؤ تیاری کی تصدیق کرتا ہے۔'
      ]
    },
    observe: {
      en: [
        'Colour & particle breakdown: Dark crumbly soil-like humus vs. recognizable yellow straw pieces.',
        'Stick warmth and jar odour after 24 hours.',
        'Whether at least 8 out of 10 test seeds sprout cleanly with white healthy roots.'
      ],
      ur: [
        'رنگ اور بکھراؤ: مٹی جیسا گہرا بھربھرا مواد یا ابھی نظر آنے والا زرد بھوسہ۔',
        'سلاخ کی گرمی اور 24 گھنٹے بعد جار کی بو۔',
        'آیا 10 میں سے کم از کم 8 بیج سفید صحت مند جڑوں کے ساتھ اگتے ہیں یا نہیں۔'
      ]
    },
    meaning: {
      en: [
        'Dark, cool, earthy smell, strong sprouts: Ready to apply (handbook reference: 0.5–1 trolley/kanal before sowing).',
        'Still warm inside or sour/ammonia jar smell: Turn heap again, check moisture (Test 07), and wait 3–4 more weeks.',
        'Seeds fail to sprout or turn brown: Immature compost or excess salts — cure longer and test soil/compost separately if needed.'
      ],
      ur: [
        'گہری، ٹھنڈی، میٹھی خوشبو اور اچھا اگاؤ: کھیت میں ڈالنے کے لیے تیار (ہینڈ بک حوالہ: بوائی سے پہلے 0.5–1 ٹرالی فی کنال)۔',
        'اندر سے گرم یا کھٹی/امونیا بو: ڈھیر دوبارہ پلٹیں، نمی چیک کریں (ٹیسٹ 07) اور مزید 3–4 ہفتے پکنے دیں۔',
        'بیج نہ اگیں یا جلیں: کھاد کچی یا زیادہ نمک والی ہو سکتی ہے — مزید وقت دیں۔'
      ]
    },
    limitations: {
      en: 'Home checks confirm physical stability and freedom from strong heating/ammonia, NOT exact NPK nutrient content, salinity (EC), or pathogen elimination. For commercial nutrient values, use a certified laboratory.',
      ur: 'گھریلو جانچ صرف کھاد کے ٹھنڈا اور مستحکم ہونے کا بتاتی ہے، یہ NPK غذائی اجزا، EC یا جراثیم کے خاتمے کی لیبارٹری تصدیق نہیں کرتی۔ درست غذائی تجزیے کے لیے لیب ٹیسٹ کروائیں۔'
    },
    safety: {
      en: [
        'Touch the metal/wood probe cautiously first—an active compost core can reach 55–65°C.',
        'Avoid breathing dust heavily when opening a dry heap or sniffing jars; hold jar a short distance from nose and waft air gently.'
      ],
      ur: [
        'ڈھیر سے نکالی سلاخ کو پہلے ہلکا چھو کر دیکھیں کیونکہ اندرونی درجہ حرارت 55–65°C تک گرم ہو سکتا ہے۔',
        'خشک ڈھیر یا جار سونگھتے وقت ناک بالکل قریب نہ لے جائیں بلکہ ہاتھ سے ہوا ہلا کر ہلکی بو محسوس کریں، اور ہاتھ دھوئیں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Probe Heap Heat',
        labelUr: 'مرحلہ 1 · ڈھیر کی حرارت دیکھیں',
        captionEn: 'Push stick into center for 10 min: cool = curing done; hot = keep turning.',
        captionUr: 'بیچ میں 10 منٹ سلاخ رکھیں: ٹھنڈی = تیار؛ گرم = مزید پلٹائی درکار۔'
      },
      {
        labelEn: 'Step 2 · 24-Hr Sealed Jar Sniff',
        labelUr: 'مرحلہ 2 · 24 گھنٹے بند جار چیک',
        captionEn: 'Damp compost in jar should smell earthy after 24 hrs, never sour or ammonia.',
        captionUr: '24 گھنٹے بعد جار سے میٹھی مٹی کی بو آنی چاہیے، کھٹی یا امونیا نہیں۔'
      },
      {
        labelEn: 'Step 3 · 10-Seed Sprout Check',
        labelUr: 'مرحلہ 3 · 10 بیجوں کا اگاؤ چیک',
        captionEn: 'Sow 10 seeds in 1:1 compost-sand cup; strong green sprouts confirm safety.',
        captionUr: 'آدھی کھاد اور آدھی ریت میں 10 بیج بوئیں؛ صحت مند اگاؤ تیاری کا ثبوت ہے۔'
      }
    ]
  },
  {
    id: 'compost-moisture',
    num: '07',
    category: 'compost',
    photo: './images/lab-compost-tests.jpg',
    diagramType: 'compost-moisture',
    titleEn: 'Compost Moisture Test',
    titleUr: 'کمپوسٹ میں نمی کا ٹیسٹ',
    subtitleEn: 'Use the simple fist-squeeze "damp sponge" check while building and turning your compost heap.',
    subtitleUr: 'کمپوسٹ بناتے اور پلٹتے وقت مٹھی سے دبا کر "نچوڑے ہوئے سپنج" جتنی نمی چیک کریں۔',
    objective: {
      en: 'Keep compost damp enough for beneficial microbes to break straw down quickly without drowning out air or rotting anaerobically.',
      ur: 'ڈھیر میں اتنی مناسب نمی رکھنا کہ مفید جراثیم بھوسہ جلدی گلا سکیں، مگر پانی زیادہ ہو کر ہوا بند نہ ہو اور سڑاند نہ پھیلے۔'
    },
    materials: {
      en: [
        'Hands (or simple farm gloves)',
        'Bucket of clean water or diluted dung slurry if heap is too dry',
        'Extra dry chopped straw or dry leaves if heap is too wet'
      ],
      ur: [
        'آپ کے ہاتھ (یا سادہ دستانے)',
        'اگر ڈھیر خشک ہو تو صاف پانی یا پتلی گوبر سلری کی بالٹی',
        'اگر ڈھیر زیادہ گیلا ہو تو خشک کٹا بھوسہ یا خشک پتے'
      ]
    },
    steps: {
      en: [
        'Reach ~15–20 cm inside the compost pile (not just the dry outer crust) and grab a handful.',
        'Squeeze your fist tightly over the pile for 3 seconds.',
        'Observe whether water drips out, stays as a light sheen between fingers, or falls dry when opened.',
        'Adjust immediately while turning: sprinkle water/slurry layer by layer if dry, or mix in dry straw if dripping wet.'
      ],
      ur: [
        'صرف اوپری خشک پرت کے بجائے ڈھیر کے 15–20 cm اندر سے ایک مٹھی مواد لیں۔',
        'ڈھیر کے اوپر مٹھی کو 3 سیکنڈ تک زور سے دبائیں۔',
        'دیکھیں کہ انگلیوں سے پانی ٹپکتا ہے، ہلکی نمی چمکتی ہے، یا ہاتھ کھولنے پر بھربھرا خشک گر جاتا ہے۔',
        'پلٹائی کے دوران فوراً اصلاح کریں: خشک ہو تو تہہ بہ تہہ پانی/سلری چھڑکیں؛ ٹپکتا ہو تو خشک بھوسہ یا پتے ملائیں۔'
      ]
    },
    observe: {
      en: [
        'Too Dry: Material crumbles dusty when fist opens, palm stays dry.',
        'Just Right (Damp Sponge): Holds loose shape, palm feels moist, at most 1–2 tiny drops glisten between knuckles without streaming.',
        'Too Wet: Water runs or drips steadily between fingers and material clumps tightly.'
      ],
      ur: [
        'زیادہ خشک: ہاتھ کھولنے پر مواد خشک بکھر جائے اور ہتھیلی خشک رہے۔',
        'بالکل درست (نچوڑا سپنج): مٹھی میں ہلکی شکل بنے، ہتھیلی نم ہو، زیادہ سے زیادہ 1–2 قطرے چمکیں مگر دھار نہ بہے۔',
        'زیادہ گیلا: انگلیوں سے پانی مسلسل ٹپکے اور مواد گاڑھا چپک جائے۔'
      ]
    },
    meaning: {
      en: [
        'Just right: Microbes work rapidly; expect good breakdown in 2–3 months with turning every 2–3 weeks.',
        'Too dry: Decomposition stalls—straw stays yellow for months unless moistened.',
        'Too wet: Air spaces fill with water, causing foul odour and nutrient loss—turn immediately with dry straw and keep under shade.'
      ],
      ur: [
        'بالکل درست: جراثیم تیزی سے کام کرتے ہیں؛ ہر 2–3 ہفتے پلٹائی سے 2–3 ماہ میں کھاد تیار ہو گی۔',
        'زیادہ خشک: گلنے کا عمل رک جاتا ہے اور بھوسہ مہینوں پیلا پڑا رہتا ہے۔',
        'زیادہ گیلا: ہوا ختم ہو کر بدبو آتی ہے اور غذائیت ضائع ہوتی ہے؛ فوراً خشک بھوسہ ملا کر پلٹیں اور سائے میں رکھیں۔'
      ]
    },
    limitations: {
      en: 'Squeeze moisture is a practical management check, not a laboratory moisture-percentage gauge or nutrient/pH test. Outer edges always dry faster in summer wind than the core.',
      ur: 'مٹھی ٹیسٹ صرف عملی دیکھ بھال کا پیمانہ ہے، لیبارٹری کا فیصد نمی میٹر یا pH/غذائی ٹیسٹ نہیں۔ گرمی کی ہوا میں ڈھیر کی اوپری تہہ ہمیشہ اندرونی حصے سے جلدی سوکھتی ہے۔'
    },
    safety: {
      en: [
        'Test heat carefully with a stick before plunging your bare hand deep into an active pile.',
        'Wear gloves or wash hands thoroughly with soap afterwards, and keep compost heaps away from drinking water handpumps or wells.'
      ],
      ur: [
        'اندر ہاتھ ڈالنے سے پہلے لکڑی سے گرمی چیک کریں کیونکہ فعال ڈھیر اندر سے کافی گرم ہو سکتا ہے۔',
        'دستانے پہنیں یا بعد میں صابن سے ہاتھ دھوئیں، اور کمپوسٹ کا ڈھیر پینے کے پانی کے نلکے یا کنویں سے دور رکھیں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Grab From 15–20 cm Inside',
        labelUr: 'مرحلہ 1 · 15–20 cm اندر سے مٹھی لیں',
        captionEn: 'Dig slightly past the dry outer shell to sample real heap moisture.',
        captionUr: 'اوپری خشک پرت ہٹا کر اندر سے اصل نمی والا مواد مٹھی میں لیں۔'
      },
      {
        labelEn: 'Step 2 · Squeeze Tightly',
        labelUr: 'مرحلہ 2 · زور سے نچوڑیں',
        captionEn: 'Aim for "damp sponge": palm wet, 0–2 drops only, no steady dripping.',
        captionUr: 'ہدف "نچوڑا سپنج": ہتھیلی نم رہے، 0–2 قطروں سے زیادہ پانی نہ ٹپکے۔'
      },
      {
        labelEn: 'Step 3 · Balance Water or Dry Straw',
        labelUr: 'مرحلہ 3 · پانی یا خشک بھوسہ متوازن کریں',
        captionEn: 'Sprinkle water if dusty; mix dry chopped straw if dripping.',
        captionUr: 'خشک ہو تو پانی چھڑکیں؛ ٹپکتا ہو تو خشک بھوسہ ملا کر پلٹیں۔'
      }
    ]
  },
  {
    id: 'soil-cover-comparison',
    num: '08',
    category: 'cover',
    photo: './images/lab-mulch-cover.jpg',
    diagramType: 'soil-cover',
    titleEn: 'Soil Cover Comparison',
    titleUr: 'ڈھکی ہوئی اور کھلی مٹی کا موازنہ',
    subtitleEn: 'Compare a bare sun-exposed strip beside a straw- or crop-covered strip in the same field.',
    subtitleUr: 'ایک ہی کھیت میں کھلی دھوپ والی پٹی اور بھوسے یا فصل سے ڈھکی پٹی کا آمنے سامنے موازنہ کریں۔',
    objective: {
      en: 'Observe directly in your own Narowal field how keeping soil covered protects moisture, lowers scorching surface heat, and reduces rain-splash crusting.',
      ur: 'نارووال کے اپنے کھیت میں خود دیکھنا کہ زمین کو ڈھانپ کر رکھنے سے نمی کیسے بچتی ہے، شدید گرمی کیسے کم ہوتی ہے اور بارش سے کھرنڈ کیسے نہیں بنتا۔'
    },
    materials: {
      en: [
        '2 adjacent 1 × 1 metre spots in the same field (1 bare, 1 covered with 3–5 cm wheat/rice straw or green cover)',
        '1 watering can or plastic bottle with pin-holes (to mimic a rain shower)',
        'Your palm (careful touch check) + khurpa to check dampness 5 cm deep'
      ],
      ur: [
        'ایک ہی کھیت میں ساتھ ساتھ 1 × 1 میٹر کے دو حصے (ایک کھلا، ایک 3–5 cm بھوسے یا سبز پودوں سے ڈھکا)',
        'بارش جیسا چھڑکاؤ کرنے کے لیے سوراخوں والی بوتل یا فوارہ',
        'گرمی اور 5 cm نیچے نمی دیکھنے کے لیے ہاتھ اور کھرپا'
      ]
    },
    steps: {
      en: [
        'At midday on a sunny day, hover and gently touch the bare soil surface, then lift a small patch of straw on the covered spot and touch the soil underneath.',
        'Dig 5 cm deep in both spots with a khurpa and compare moist coolness and any earthworm signs.',
        'Pour water slowly like rain from waist height onto both spots using the pin-holed bottle.',
        'Watch whether muddy water splashes and forms a slick crust on bare soil vs. soaking cleanly through the straw cover.'
      ],
      ur: [
        'دھوپ والے دن دوپہر کے قریب کھلی مٹی کی سطح چھو کر گرمی محسوس کریں، پھر ڈھکے حصے کا بھوسہ ہٹا کر نیچے کی مٹی کو چھوئیں۔',
        'کھرپے سے دونوں جگہ 5 cm نیچے کھود کر ٹھنڈک، نمی اور کینچوے دیکھیں۔',
        'سوراخوں والی بوتل سے کمر کی اونچائی سے دونوں حصوں پر بارش کی طرح آہستہ پانی گرائیں۔',
        'دیکھیں کہ کھلی مٹی پر گدلی کیچڑ اچھل کر چکنا کھرنڈ بناتی ہے یا بھوسے میں صاف جذب ہو جاتی ہے۔'
      ]
    },
    observe: {
      en: [
        'Temperature difference felt by hand between bare sun-baked crust and shaded covered soil.',
        'Clarity of runoff or pooling vs. clean absorption under straw.',
        'Whether bare surface dries into a hard crust that blocks sprouting seeds.'
      ],
      ur: [
        'کھلی دھوپ والی سطح اور بھوسے کے نیچے والی مٹی کے درجہ حرارت میں واضح فرق۔',
        'کھلی جگہ پر گدلا پانی بہنا بمقابلہ ڈھکی جگہ پر صاف جذب ہونا۔',
        'کیا کھلی سطح سوکھ کر سخت پاپڑی (کرست) بناتی ہے جو بیج کا اگاؤ روکتی ہے۔'
      ]
    },
    meaning: {
      en: [
        'Cooler, damper soil under straw: Cover shields soil life from 50–60°C summer surface heat and cuts evaporation.',
        'Muddy splash & crusting on bare soil: Raindrops shatter exposed aggregates—mulch acts like a cushion.',
        'Use this 1-metre comparison at farmer field days before scaling Mulching across whole kanals.'
      ],
      ur: [
        'بھوسے کے نیچے ٹھنڈی نم مٹی: ڈھانپ مٹی کو 50–60°C شدید گرمی سے بچا کر بخارات کا نقصان کم کرتی ہے۔',
        'کھلی جگہ پر کیچڑ اور کھرنڈ: بارش کے قطرے کھلی مٹی کے ذرات توڑ دیتے ہیں، جبکہ ملچنگ گدے کی طرح بچاتی ہے۔',
        'پورے کھیت میں پھیلانے سے پہلے کسان گروپ کے ساتھ یہ 1 میٹر کا موازنہ خود کر کے دیکھیں۔'
      ]
    },
    limitations: {
      en: 'Hand touch compares relative coolness, not an exact thermometer degree measurement, and does not measure Soil Organic Matter %, pH, or fertility. Thick wet straw in cool stagnant corners can shelter slugs/rodents—monitor edges.',
      ur: 'ہاتھ سے صرف ٹھنڈک اور گرمی کا تقابلی احساس ہوتا ہے، درست ڈگری تھرمامیٹر یا نامیاتی مادے / pH کا ٹیسٹ نہیں۔ بہت زیادہ گیلا بھوسہ سست کونوں میں چوہوں یا کیڑوں کو پناہ دے سکتا ہے، اس لیے کناروں کا معائنہ کرتے رہیں۔'
    },
    safety: {
      en: [
        'Test sun-heated bare soil gently with fingertips first—Punjab summer soil can be scorching hot.',
        'Lift straw carefully with a stick or khurpa before touching underneath in case insects or scorpions are hiding.'
      ],
      ur: [
        'پنجاب کی دوپہر میں کھلی مٹی بہت گرم ہو سکتی ہے، اس لیے پہلے ہلکے سے انگلی لگا کر چیک کریں۔',
        'بھوسے کے نیچے ہاتھ لگانے سے پہلے کھرپے یا چھڑی سے ہٹا کر دیکھیں تاکہ کوئی کیڑا یا بچھو نہ ہو۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Compare Sun vs. Shade',
        labelUr: 'مرحلہ 1 · دھوپ اور سائے کا موازنہ',
        captionEn: 'Feel bare crusted ground vs. cool damp soil protected under straw.',
        captionUr: 'کھلی تپتی زمین اور بھوسے کے نیچے ٹھنڈی نم مٹی کا فرق محسوس کریں۔'
      },
      {
        labelEn: 'Step 2 · Bottle Rain Splash Test',
        labelUr: 'مرحلہ 2 · بوتل سے بارش کا ٹیسٹ',
        captionEn: 'Sprinkle water from waist height: straw cushions drops; bare soil crusts.',
        captionUr: 'اوپر سے پانی چھڑکیں: بھوسہ قطروں کی مار روکتا ہے، کھلی مٹی پر کیچڑ اچھلتی ہے۔'
      },
      {
        labelEn: 'Step 3 · Check 5 cm Moisture',
        labelUr: 'مرحلہ 3 · 5 cm نیچے نمی دیکھیں',
        captionEn: 'Covered soil holds noticeably more dampness days after irrigation.',
        captionUr: 'آبپاشی کے کئی دن بعد بھی ڈھکی مٹی میں نمایاں نمی باقی رہتی ہے۔'
      }
    ]
  },
  {
    id: 'mulching-demonstration',
    num: '09',
    category: 'cover',
    photo: './images/lab-mulch-cover.jpg',
    diagramType: 'mulching',
    titleEn: 'Mulching Demonstration',
    titleUr: 'ملچنگ (زمین کو فصلوں کی باقیات سے ڈھانپنا) کا عملی مظاہرہ',
    subtitleEn: 'Build a 1 × 1 metre straw mulching trial around vegetables, orchard basins, or between wide rows.',
    subtitleUr: 'سبزیوں، باغات کے تنے کے گرد یا قطاروں کے درمیان 1 × 1 میٹر پرالی/بھوسے کی ملچنگ کا تجربہ کریں۔',
    objective: {
      en: 'Practice laying the right thickness of crop residue (3–5 cm) cleanly around stems so weeds drop and moisture lasts longer without smothering young sprouts.',
      ur: '3–5 cm مناسب موٹائی میں فصل کی باقیات بچھانے کی عملی مشق کرنا تاکہ جڑی بوٹیاں دبیں اور نمی بچے مگر پودوں کے تنے نہ گلیں۔'
    },
    materials: {
      en: [
        '1 armful/basket of chopped wheat straw, rice straw, or dried grass/leaves (free of mature weed seeds)',
        '1 simple ruler, hand-span, or marked stick (3–5 cm mark)',
        '4 corner pegs or stones to mark a 1 × 1 m trial plot'
      ],
      ur: [
        'پکے بیجوں والی گھاس کے بغیر گندم کا بھوسہ، کٹی پرالی یا خشک پتے (1 ٹوکرا)',
        '3–5 cm موٹائی ناپنے کے لیے سادہ فٹا، بالشت یا نشان لگی چھڑی',
        '1 × 1 میٹر کا ٹکڑا نشان زد کرنے کے لیے 4 کھونٹیاں یا پتھر'
      ]
    },
    steps: {
      en: [
        'Water the trial bed or plant basin first so you trap existing moisture underneath.',
        'Pull any tall growing weeds by hand before covering.',
        'Spread straw evenly 3–5 cm thick (about 2–3 fingers deep) across the bed, leaving a clear 5 cm air collar around delicate seedling stems.',
        'Check moisture and weed count after 7 days compared to an unmulched bed right next to it.'
      ],
      ur: [
        'پہلے تجرباتی کیاری یا پودے کے تنے کو پانی دیں تاکہ موجودہ نمی نیچے محفوظ ہو جائے۔',
        'ڈھانپنے سے پہلے بڑی اگتی جڑی بوٹیاں ہاتھ سے نکال دیں۔',
        'کیاری پر 3–5 cm (تقریباً 2–3 انگل) موٹی تہہ بچھائیں، لیکن نازک پودوں کے تنے کے گرد 5 cm جگہ خالی رکھیں۔',
        '7 دن بعد ساتھ والی کھلی کیاری کے مقابلے میں نمی اور جڑی بوٹیوں کی تعداد چیک کریں۔'
      ]
    },
    observe: {
      en: [
        'Is light completely blocked from hitting the ground between rows (to suppress weed sprouting)?',
        'Is there a 5 cm gap around tender vegetable or orchard trunks so bark does not stay soggy?',
        'Notice how much longer soil stays damp 5 days after watering compared to the bare control.'
      ],
      ur: [
        'کیا قطاروں کے درمیان دھوپ مکمل رک گئی ہے تاکہ جڑی بوٹیاں نہ اگیں؟',
        'کیا سبزی یا باغ کے تنے کے گرد 5 cm جگہ کھلی ہے تاکہ چھال نہ گلے؟',
        'پانی کے 5 دن بعد دیکھیں کہ کھلی کیاری کے مقابلے میں مٹی کتنی زیادہ نم رہتی ہے۔'
      ]
    },
    meaning: {
      en: [
        '3–5 cm clean straw + 5 cm stem gap: Cuts evaporation, shades out small weeds, and avoids collar rot on young stems.',
        'Too thin (<1 cm): Sunlight still wakes up weed seeds and heats soil.',
        'Too thick (>8–10 cm) against stems: Can trap excess dampness against trunks or block emerging seeds.'
      ],
      ur: [
        '3–5 cm تہہ + تنے کے گرد 5 cm وقفہ: بخارات کم کرتا ہے، جڑی بوٹیاں روکتا ہے اور تنے کو گلنے سے بچاتا ہے۔',
        'بہت پتلی تہہ (1 cm سے کم): دھوپ اندر پہنچتی ہے اور جڑی بوٹیاں دوبارہ اگ آتی ہیں۔',
        'بہت موٹی تہہ (8–10 cm) تنے سے جڑی ہوئی: تنے کے پاس زیادہ نمی روک کر گلنے یا اگاؤ رکنے کا خطرہ بڑھاتی ہے۔'
      ]
    },
    limitations: {
      en: 'Dry straw with leftover weed seeds can introduce weeds if taken from weedy field borders, and loose unanchored straw on windy open fields may blow unless pressed or watered lightly. Mulch alone does not replace lab-guided soil nutrient balancing.',
      ur: 'اگر کھیت کی منڈیروں کی پکی جڑی بوٹیوں والا بھوسہ استعمال ہو تو نئی جڑی بوٹیاں اگ سکتی ہیں، اور تیز ہوا میں ڈھیلا بھوسہ اڑ سکتا ہے جب تک ہلکا دبایا یا گیلا نہ کیا جائے۔ ملچنگ تنہا لیبارٹری رہنمائی میں غذائیت کے توازن کا متبادل نہیں۔'
    },
    safety: {
      en: [
        'Never burn leftover straw on borders—keep open flame or smoking completely away from dry mulch plots.',
        'Do not pile damp mulch directly touching citrus, guava, or mango trunks.'
      ],
      ur: [
        'بچی ہوئی پرالی ہرگز نہ جلائیں — خشک ملچنگ کے قریب آگ یا ماچس بالکل نہ لائیں۔',
        'کینو، امرود یا آم کے تنوں کے ساتھ گیلی ملچ ہرگز نہ لگائیں، 5 cm دور رکھیں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Water Soil First',
        labelUr: 'مرحلہ 1 · پہلے مٹی نم کریں',
        captionEn: 'Irrigate lightly and pull tall weeds before laying straw.',
        captionUr: 'بھوسہ بچھانے سے پہلے ہلکا پانی دیں اور بڑی جڑی بوٹیاں نکال دیں۔'
      },
      {
        labelEn: 'Step 2 · Lay 3–5 cm + Stem Collar',
        labelUr: 'مرحلہ 2 · 3–5 cm تہہ اور تنے سے وقفہ',
        captionEn: 'Spread 3–5 cm straw evenly while leaving 5 cm clear around stems.',
        captionUr: '3–5 cm بھوسہ بچھائیں مگر پودوں کے تنے کے گرد 5 cm جگہ خالی رکھیں۔'
      },
      {
        labelEn: 'Step 3 · Inspect After 7 Days',
        labelUr: 'مرحلہ 3 · 7 دن بعد معائنہ',
        captionEn: 'Compare fewer weeds and lasting root dampness against a bare bed.',
        captionUr: 'کھلی کیاری کے مقابلے میں کم جڑی بوٹیاں اور دیرپا نمی کا مشاہدہ کریں۔'
      }
    ]
  },
  {
    id: 'field-observation-checklist',
    num: '10',
    category: 'checklist',
    photo: './images/hero-narowal-farm.jpg',
    diagramType: 'checklist',
    titleEn: 'Field Observation Checklist',
    titleUr: 'کھیت کے معائنے کی عملی چیک لسٹ',
    subtitleEn: 'A weekly 15-minute diagonal field walk checking 8 practical signs with just a notebook and khurpa.',
    subtitleUr: 'ہفتہ وار 15 منٹ کا کھیت چکر: صرف کاپی اور کھرپے سے 8 عملی علامات کا منظم معائنہ۔',
    objective: {
      en: 'Spot early soil stress, Waterlogging, crop pests, and Beneficial Insects before small problems grow into costly crop losses.',
      ur: 'چھوٹے مسائل بڑا نقصان بننے سے پہلے مٹی کی کمزوری، پانی کھڑا ہونا، کیڑوں اور فائدہ مند حشرات کو بروقت دیکھنا۔'
    },
    materials: {
      en: [
        'Small pocket notebook & pen (or the Home Farm Lab Soil Observation Record below)',
        'Hand khurpa or spade',
        'Clean water bottle and cap/hat for sun protection'
      ],
      ur: [
        'جیب کی کاپی اور قلم (یا نیچے دیا گیا گھریلو فارم لیب کا مشاہداتی ریکارڈ)',
        'ہاتھ کا کھرپا یا بیلچہ',
        'پینے کے پانی کی بوتل اور دھوپ سے بچاؤ کے لیے ٹوپی/پگڑی'
      ]
    },
    steps: {
      en: [
        'Walk diagonally across your plot twice a week in early morning or late afternoon, stopping at 5–10 random plants (avoid checking only the field edge).',
        'Check Ground & Water: Note soil cover %, surface crusting/cracks, white salt patches, and any standing Waterlogging puddles.',
        'Check Moisture & Roots: Dig 10–15 cm beside a plant to verify moisture, root colour (white vs. brown/rot), and earthworms.',
        'Check Leaves & Insects: Look under leaves for aphids/whiteflies AND count Beneficial Insects (ladybirds, spiders, dragonflies) before making any management decision.'
      ],
      ur: [
        'ہفتے میں دو بار صبح یا شام ترچھے راستے پر کھیت میں چلیں اور صرف منڈیر کے بجائے اندر 5–10 پودوں پر رکیں۔',
        'زمین اور پانی چیک کریں: بھوسے کا ڈھانپ، کھرنڈ یا دراڑیں، سفید نمک کے دھبے اور پانی کھڑا ہونے (Waterlogging) کے حصے نوٹ کریں۔',
        'نمی اور جڑیں چیک کریں: پودے کے پاس 10–15 cm کھود کر نمی، سفید صحت مند جڑیں اور کینچوے دیکھیں۔',
        'پتے اور حشرات چیک کریں: پتوں کے نیچے سست تیلہ/سفید مکھی دیکھنے کے ساتھ لیڈی برڈ، مکڑیاں اور بھنبھیریاں بھی گنیں۔'
      ]
    },
    observe: {
      en: [
        '8 core checks: Soil cover, moisture at 10–15 cm, crust/Waterlogging, salt patches, root branching, weeds, pest symptoms, and Beneficial Insects.',
        'Changes week over week—look for trends rather than single isolated spots.'
      ],
      ur: [
        '8 بنیادی نکات: زمینی ڈھانپ، 10–15 cm نمی، کھرنڈ/سیم، نمک کے دھبے، جڑوں کا پھیلاؤ، جڑی بوٹیاں، کیڑوں کی علامات اور فائدہ مند حشرات۔',
        'ہر ہفتے کی تبدیلی — صرف ایک کنارے کے بجائے پورے کھیت کا رجحان دیکھیں۔'
      ]
    },
    meaning: {
      en: [
        'Mostly positive signs + Beneficial Insects active: Hold off spraying and keep regular weekly monitoring.',
        'Repeating salt patches, poor growth, or leaf yellowing: Collect a composite soil sample for the Punjab Soil Testing Lab instead of guessing fertilizers.',
        'Rising pest damage with few natural enemies: Consult the Punjab Agriculture Extension Office, Narowal for threshold-based Integrated Pest Management.'
      ],
      ur: [
        'زیادہ تر مثبت علامات اور فائدہ مند حشرات موجود: غیر ضروری سپرے سے بچیں اور ہفتہ وار نگرانی جاری رکھیں۔',
        'بار بار نمک کے دھبے یا پتے پیلے پڑنا: اندازے سے کھاد ڈالنے کے بجائے پنجاب سوائل ٹیسٹنگ لیب میں مٹی کا نمونہ بھیجیں۔',
        'کیڑوں کا نقصان بڑھتا ہوا نظر آئے: معاشی حد اور مربوط کنٹرول کے لیے ضلعی زرعی توسیعی دفتر نارووال سے مشورہ لیں۔'
      ]
    },
    limitations: {
      en: 'Visual scouting catches surface symptoms and field trends, NOT hidden soil pH, EC salinity levels, micronutrient deficiencies, or hidden nematode/lab diseases. Never treat an unverified symptom with blind sprays or fertilizer doses.',
      ur: 'آنکھ سے معائنہ ظاہری علامات اور کھیت کا رجحان بتاتا ہے، یہ چھپی ہوئی pH، EC، غذائی کمی یا لیب کی بیماریوں کی حتمی تشخیص نہیں کرتا۔ بغیر تصدیق کے اندازے سے کھاد یا زہر ہرگز نہ ڈالیں۔'
    },
    safety: {
      en: [
        'Do not enter fields within restricted intervals after any chemical application on your or a neighbour’s plot.',
        'Carry drinking water in hot weather and inspect tall grass or bunds carefully before stepping.'
      ],
      ur: [
        'اپنے یا پڑوسی کے کھیت میں کسی بھی کیمیکل سپرے کے فوراً بعد کھیت میں داخل نہ ہوں۔',
        'گرمی میں پینے کا پانی ساتھ رکھیں اور اونچی گھاس یا منڈیر پر پاؤں رکھنے سے پہلے احتیاط کریں۔'
      ]
    },
    demoFrames: [
      {
        labelEn: 'Step 1 · Walk Diagonal Pattern',
        labelUr: 'مرحلہ 1 · ترچھے راستے سے معائنہ',
        captionEn: 'Inspect 5–10 interior spots rather than judging only from the edge.',
        captionUr: 'صرف منڈیر سے فیصلہ کرنے کے بجائے کھیت کے اندر 5–10 جگہوں کا معائنہ کریں۔'
      },
      {
        labelEn: 'Step 2 · Check Soil, Roots & Under Leaves',
        labelUr: 'مرحلہ 2 · مٹی، جڑیں اور پتے دیکھیں',
        captionEn: 'Note cover, moisture, salt patches, pests, and beneficial predators.',
        captionUr: 'ڈھانپ، نمی، نمک، نقصان دہ کیڑے اور فائدہ مند شکاری حشرات نوٹ کریں۔'
      },
      {
        labelEn: 'Step 3 · Log & Verify Before Acting',
        labelUr: 'مرحلہ 3 · ریکارڈ لکھیں اور تصدیق کریں',
        captionEn: 'Save observations in Tool A and send lab samples for nutrient/pH doubts.',
        captionUr: 'مشاہدات ٹول A میں محفوظ کریں اور pH/غذائیت کے شک پر لیب ٹیسٹ کروائیں۔'
      }
    ]
  }
];
