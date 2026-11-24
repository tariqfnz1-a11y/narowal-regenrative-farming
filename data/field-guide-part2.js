/* ==========================================================================
   FIELD IDENTIFICATION GUIDE — PART 2
   LIBRARY C: BIRDS (7 entries separated into insectivore, crop-damage, biodiversity)
   LIBRARY D: HERBS, WEEDS & USEFUL PLANTS (9 entries: weeds, wild plants, herbs, cover crops)
   + GUIDED IDENTIFIER TREE ("What did you see in your field?")
   ========================================================================== */

export const FIELD_GUIDE_PART_2 = [
  /* ------------------------------------------------------------------------
     LIBRARY C: BIRDS (Separated by ecological role)
     ------------------------------------------------------------------------ */
  {
    id: 'fg-black-drongo',
    library: 'C',
    category: 'bird',
    categoryEn: 'Farm Bird · Helps Control Insects',
    categoryUr: 'کھیت کا پرندہ · کیڑے کھانے والا دوست',
    subRole: 'insectivore',
    subRoleEn: 'Helps Control Insects',
    subRoleUr: 'کیڑے کھانے والے پرندے',
    nameEn: 'Black Drongo (Kotwal / Bhanga)',
    nameUr: 'کالا بھنگا / کوٹوال',
    scientificName: 'Dicrurus macrocercus',
    photo: './images/field-guide-birds.jpg',
    photoCrop: 'quad-tl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Dicrurus macrocercus on T-Perch)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Glossy jet-black bird (~28 cm) with a distinctive deep forked tail; perches upright on wooden T-perches, electric wires, and dry stakes above fields.',
      ur: 'چمکدار سیاہ پرندہ جس کی دم دو شاخوں (قینچی جیسی) میں بٹی ہوتی ہے؛ کھیت میں لگائے گئے ڈنڈوں یا تاروں پر سیدھا بیٹھ کر نگرانی کرتا ہے۔'
    },
    appearance: {
      en: 'Sleek black plumage with slight blue-green sheen, sharp dark bill, unmistakable long forked tail tip.',
      ur: 'پورا جسم چمکدار سیاہ، تیز چونچ اور لمبی دو شاخہ دم اس کی واضح پہچان ہے۔'
    },
    roleText: {
      en: 'Top daytime insect hunter in Narowal! Swoops down continuously to catch rice moths, stem borer adults, leaf folder caterpillars, grasshoppers, and crickets.',
      ur: 'نارووال کے کھیتوں کا بہترین شکاری پرندہ! دن بھر ڈنڈے سے اڑ کر چاول کے پتنگے، سنڈیاں، ٹڈے اور جھینگر پکڑتا ہے۔'
    },
    farmBenefit: {
      en: 'Protects rice, wheat, maize, sugarcane, and vegetables naturally—even chases larger grain-eating birds away from its perch territory.',
      ur: 'چاول، گندم، مکئی، گنے اور سبزیوں کو سنڈیوں سے بچاتا ہے اور فصل کھانے والے دیگر پرندوں کو بھی بھگاتا ہے۔'
    },
    action: {
      en: 'WELCOME IT: Place 5–6 bamboo/wooden T-shaped bird perches per acre across rice, pulse, and vegetable fields. Protect boundary nesting trees.',
      ur: 'خوش آمدید کہیں: چاول، دالوں اور سبزیوں میں فی ایکڑ 5–6 بانس یا لکڑی کے T شکل کے ڈنڈے (برڈ پرچ) لگائیں اور گھونسلے والے درخت بچائیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Young drongos show pale white spotting underneath; Asian Koel is larger with a rounded un-forked tail and red eyes.',
      ur: 'شناخت کی احتیاط: نئے بچے بھنگے کے پیٹ پر ہلکے سفید دھبے ہو سکتے ہیں؛ کوئل کا جسم بڑا اور دم گول ہوتی ہے، دو شاخہ نہیں۔'
    },
    lookAlikes: {
      en: ['Male Asian Koel (no forked tail, ruby-red eye, stays inside dense trees)', 'Ashy Drongo (slimmer grey-slate plumage, rare winter visitor)'],
      ur: ['نر کوئل (دم دو شاخہ نہیں، سرخ آنکھ)', 'سرمئی بھنگا (سلیٹی رنگت، شاذ و نادر)']
    }
  },
  {
    id: 'fg-cattle-egret',
    library: 'C',
    category: 'bird',
    categoryEn: 'Farm Bird · Helps Control Insects',
    categoryUr: 'کھیت کا پرندہ · کیڑے کھانے والا دوست',
    subRole: 'insectivore',
    subRoleEn: 'Helps Control Insects',
    subRoleUr: 'کیڑے کھانے والے پرندے',
    nameEn: 'Cattle Egret',
    nameUr: 'سفید بگلا / گائے بگلا',
    scientificName: 'Bubulcus ibis',
    photo: './images/field-guide-birds.jpg',
    photoCrop: 'quad-tr',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Bubulcus ibis & Buffalo)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Compact white heron with a yellow-orange dagger bill that walks closely behind tractors, grazing buffaloes, and irrigated fields.',
      ur: 'سفید رنگ کا درمیانے قد کا بگلا جس کی چونچ پیلی نارنجی ہوتی ہے؛ ٹریکٹر، ہل اور چرتے ہوئے بھینس گائے کے پیچھے پیچھے چلتا ہے۔'
    },
    appearance: {
      en: 'Pure white outside breeding season; develops warm buff-orange crown/back plumes during summer monsoon breeding.',
      ur: 'عام دنوں میں خالص سفید اور برسات کے موسم میں سر اور کمر پر سنہری بادامی پروں کا سایہ آ جاتا ہے۔'
    },
    roleText: {
      en: 'Follows irrigation water, buffaloes, and stubble to snap up grasshoppers, cutworms, white grubs, crickets, and cattle ticks.',
      ur: 'آبپاشی کے پانی اور مویشیوں کے ساتھ چل کر ٹڈے، کٹروا سنڈیاں، سفید سنڈیاں اور جانوروں کے چچڑ چن چن کر کھاتا ہے۔'
    },
    farmBenefit: {
      en: 'Cleans exposed soil pests during irrigation or light tillage and reduces flies/ticks bothering farm dairy animals.',
      ur: 'آبپاشی کے وقت مٹی سے نکلنے والے نقصان دہ کیڑے کھاتا اور مویشیوں کو مکھیوں و چچڑوں سے بچاتا ہے۔'
    },
    action: {
      en: 'PROTECT IT: Never chase away or poison egrets during irrigation; never leave chemical-treated baits in fields.',
      ur: 'حفاظت کریں: آبپاشی کے دوران بگلوں کو نہ بھگائیں اور کھیت میں کبھی زہر ملا دانہ نہ ڈالیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Little Egret has a black bill and black legs with yellow feet, feeding mostly in deep water—Cattle Egret has a yellow bill and stays on fields & pastures.',
      ur: 'شناخت کی احتیاط: چھوٹے پانی والے بگلے کی چونچ کالی ہوتی ہے، جبکہ گائے بگلے کی چونچ پیلی اور یہ کھیت میں رہتا ہے۔'
    },
    lookAlikes: {
      en: ['Little Egret (black bill, hunts fish/frogs along drains)', 'Pond Heron / Andha Bagla (brownish on back when perched, flashes white wings only in flight)'],
      ur: ['کالی چونچ والا چھوٹا بگلا', 'اندھا بگلا (بیٹھے وقت بھورا، اڑتے وقت سفید پر دکھاتا ہے)']
    }
  },
  {
    id: 'fg-common-myna',
    library: 'C',
    category: 'bird',
    categoryEn: 'Farm Bird · Helps Control Insects',
    categoryUr: 'کھیت کا پرندہ · کیڑے کھانے والا دوست',
    subRole: 'insectivore',
    subRoleEn: 'Helps Control Insects',
    subRoleUr: 'کیڑے کھانے والے پرندے',
    nameEn: 'Common Myna & Barn Swallow',
    nameUr: 'عام مینا / گٹار اور ابابیل',
    scientificName: 'Acridotheres tristis',
    photo: './images/field-guide-birds.jpg',
    photoCrop: 'quad-tl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Field Bird Perch)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Brown body, black head, bright yellow eye patch and yellow legs; hops actively across ploughed beds and grass (swallows sweep low skimming flying insects).',
      ur: 'بھورا جسم، کالا سر، آنکھ کے گرد پیلا حلقہ اور پیلی ٹانگیں؛ کھیتوں اور گھاس پر اچھل اچھل کر چلتے ہوئے کیڑے کھاتی ہے۔'
    },
    appearance: {
      en: 'Noisy social bird showing bold white wing patches in flight; pairs hunt caterpillars across stubble and orchards.',
      ur: 'اڑتے وقت پروں پر سفید دھبے واضح نظر آتے ہیں؛ جوڑوں کی شکل میں باغات اور کھیتوں میں سنڈیاں پکڑتی ہے۔'
    },
    roleText: {
      en: 'Eats large numbers of caterpillars, beetles, grasshoppers, and soil grubs—especially when feeding chicks in spring/summer.',
      ur: 'بہار اور گرمیوں میں بچوں کی پرورش کے لیے بڑی مقدار میں سنڈیاں، بھونرے اور ٹڈے کھاتی ہے (تھوڑے بہت پکے پھل یا دانے بھی کھا سکتی ہے)۔'
    },
    farmBenefit: {
      en: 'Active pest cleaner across maize, cotton/vegetables, fallow plots, and orchards.',
      ur: 'مکئی، سبزیوں، خالی زمین اور باغات میں سنڈیوں کی صفائی کا بڑا ذریعہ۔'
    },
    action: {
      en: 'MANAGE WITH BALANCE: Provide wooden T-perches and boundary Neem/Kikar trees; protect ripening fruit on small orchards with harmless reflective tape rather than harm.',
      ur: 'متوازن انتظام: ڈنڈے اور حدود پر نیم/کیکر لگائیں؛ اگر پکتے پھل پر آئیں تو نقصان پہنچائے بغیر چمکدار فیتے باندھیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Bank Myna looks slate-grey with a reddish-orange eye patch along rivers/nullahs—also helpful insect eaters.',
      ur: 'شناخت کی احتیاط: نالوں کے کنارے ملنے والی سرمئی مینا کی آنکھ کے پاس سرخی مائل رنگ ہوتا ہے—وہ بھی دوست پرندہ ہے۔'
    },
    lookAlikes: {
      en: ['Bank Myna (grey body, orange-red eye patch)', 'Common Starling / Tilyar (spotted dark plumage in winter flocks)'],
      ur: ['دریائی مینا (سرمئی رنگ، سرخ آنکھ کا حلقہ)', 'سردیوں کی تلیائر (نقطوں والی)']
    }
  },
  {
    id: 'fg-parakeet',
    library: 'C',
    category: 'bird',
    categoryEn: 'Farm Bird · May Damage Crops',
    categoryUr: 'کھیت کا پرندہ · فصل کو نقصان کا امکان',
    subRole: 'crop-damage',
    subRoleEn: 'May Damage Crops',
    subRoleUr: 'فصل کو نقصان پہنچانے والے پرندے',
    nameEn: 'Rose-ringed Parakeet',
    nameUr: 'سبز طوطا (کاٹھا طوطا)',
    scientificName: 'Psittacula krameri',
    photo: './images/field-guide-birds.jpg',
    photoCrop: 'quad-bl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Psittacula krameri on Guava)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Bright leaf-green parrot with a hooked red upper beak and long pointed tail; adult male shows a pink-and-black neck ring.',
      ur: 'شوخ سبز رنگ کا طوطا جس کی اوپری چونچ سرخ مڑی ہوئی اور دم لمبی نوکیلی ہوتی ہے؛ نر کے گلے میں گلابی اور کالی طوق (ہنسلی) ہوتی ہے۔'
    },
    appearance: {
      en: 'Loud high-pitched screeching flocks (~40 cm including tail) flying swiftly between trees and orchards.',
      ur: 'تیز آواز میں چہچہاتے ہوئے غول کی شکل میں درختوں اور باغات کے درمیان اڑتے ہیں۔'
    },
    roleText: {
      en: 'Feeds on ripening fruits, seeds, and grains—causes noticeable wastage by biting and dropping half-eaten guavas, mangoes, jujube, maize cobs, and mustard/sunflower.',
      ur: 'پکتے پھل، بیج اور دانے کھاتا ہے—امرود، آم، بیر، مکئی کے بھٹے اور سرسوں/سورج مکھی کو کتر کر ضائع کر دیتا ہے۔'
    },
    farmBenefit: {
      en: 'Part of natural woodland seed dispersal, though flocks must be deterred around ripening high-value fruit and maize.',
      ur: 'قدرتی جنگلاتی ماحول کا حصہ ہے، لیکن پکتے پھلوں اور مکئی کی کٹائی کے وقت انسانی اور غیر زہریلے طریقے سے دور رکھنا ضروری ہے۔'
    },
    action: {
      en: 'HUMANE DETERRENCE (NEVER poison!): Use shiny reflective scare ribbons, sound/rattle lines, morning-evening watch at ripening, or net individual high-value guava/fruit trees cleanly. Harvest mature crops promptly.',
      ur: 'بغیر نقصان کے بچاؤ (زہر ہرگز نہ ڈالیں!): چمکدار فیتے، کھڑکنے والی رسی، صبح و شام نگرانی یا قیمتی امرود کے پودوں پر جالی لگائیں اور پکی فصل وقت پر توڑیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Alexandrine Parakeet (larger with red shoulder patch) visits tall orchard trees too; both are managed with the same humane scaring/netting methods.',
      ur: 'شناخت کی احتیاط: بڑا پہاڑی طوطا (کندھے پر سرخ دھبہ) بھی باغات میں آ سکتا ہے؛ دونوں کا بچاؤ چمکدار فیتوں اور جالی سے ہی کیا جاتا ہے۔'
    },
    lookAlikes: {
      en: ['Alexandrine Parakeet (bigger, maroon patch on wing)', 'Green Bee-eater (much smaller, thin needle bill, eats flying insects ONLY—friend!)'],
      ur: ['پہاڑی طوطا (بڑا سائز، پر پر سرخ دھبہ)', 'سبز پترنگا / مکھی خور (بہت چھوٹا، پتلی سوئی جیسی چونچ—یہ صرف کیڑے کھاتا ہے اور دوست ہے!)']
    }
  },
  {
    id: 'fg-house-sparrow',
    library: 'C',
    category: 'bird',
    categoryEn: 'Farm Bird · May Damage Crops (Dual Role)',
    categoryUr: 'کھیت کا پرندہ · دوہرا کردار (نقصان و فائدہ)',
    subRole: 'crop-damage',
    subRoleEn: 'May Damage Crops',
    subRoleUr: 'فصل کو نقصان پہنچانے والے پرندے',
    nameEn: 'House Sparrow & Baya Weaver Flocks',
    nameUr: 'گھریلو چڑیا اور بیا',
    scientificName: 'Passer domesticus',
    photo: './images/field-guide-birds.jpg',
    photoCrop: 'quad-bl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Small Orchard & Grain Birds)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Small brown-streaked seed-eating birds (~15 cm) with short thick cone-shaped beaks; males have grey crown and black throat bib.',
      ur: 'چھوٹی بھوری دھاری دار چڑیا جس کی چونچ چھوٹی اور تکونی مضبوط ہوتی ہے؛ نر کے سر پر سرمئی رنگ اور گلے میں سیاہ دھبہ ہوتا ہے۔'
    },
    appearance: {
      en: 'Gather in chattering flocks near grain stores, ripening sorghum/millet/wheat edges, and hedgerows.',
      ur: 'غلے کے گوداموں، پکتی جوار، باجرہ اور گندم کے کناروں پر غول کی شکل میں نظر آتی ہیں۔'
    },
    roleText: {
      en: 'DUAL ROLE: Feed thousands of soft caterpillars and aphids to their chicks in spring/summer (beneficial!), but dense flocks can peck ripening milky-stage millet, sorghum, or edge wheat.',
      ur: 'دوہرا کردار: بہار و گرمی میں اپنے بچوں کو کھلانے کے لیے ہزاروں سنڈیاں اور تیلا پکڑتی ہیں (فائدہ!)، مگر پکنے پر جوار، باجرہ اور کنارے کی گندم کے دانے بھی چگ لیتی ہیں۔'
    },
    farmBenefit: {
      en: 'Helps suppress insect surges during nesting months; keep grain threshing clean rather than wiping out local sparrows (whose numbers have already declined).',
      ur: 'بچے پالنے کے موسم میں کیڑوں کی آبادی کم رکھتی ہیں؛ انہیں ختم کرنے کے بجائے صرف پکنے کے دنوں میں فصل کا بچاؤ کریں۔'
    },
    action: {
      en: 'HUMANE EDGE PROTECTION: Sow sorghum/millet in larger blocks rather than tiny isolated rows; hang reflective strips along field borders during the 2-week grain-ripening window; keep seed stores sealed.',
      ur: 'انسانی بچاؤ: جوار/باجرہ بہت چھوٹی اکیلی قطار کے بجائے اکٹھے رقبے میں بوئیں؛ دانہ پکنے کے 2 ہفتوں میں کناروں پر چمکدار فیتے باندھیں اور گودام بند رکھیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Sparrows near grain are different from insect-eating warblers/wagtails (thin slender beaks) patrolling fields—never mistake thin-billed insectivores for grain-eaters!',
      ur: 'شناخت کی احتیاط: موٹی چونچ والی چڑیا کو باریک پتلی چونچ والے کیڑے خور پرندوں (ممولا وغیرہ) سے الگ پہچانیں—وہ صرف کیڑے کھاتے ہیں۔'
    },
    lookAlikes: {
      en: ['Baya Weaver / Scaly-breasted Munia (flock grain-eaters near marsh/reeds)', 'Wagtails & Warblers (thin needle beaks—purely beneficial insect hunters)'],
      ur: ['بیا اور لال منیا (دھان/جوار کے کنارے غول)', 'ممولا و واربلر (پتلی چونچ—خالص دوست کیڑے خور)']
    }
  },
  {
    id: 'fg-spotted-owlet',
    library: 'C',
    category: 'bird',
    categoryEn: 'Farm Bird · Biodiversity & Night Hunter',
    categoryUr: 'کھیت کا پرندہ · حیاتیاتی تنوع اور رات کا محافظ',
    subRole: 'biodiversity',
    subRoleEn: 'Contributes to Biodiversity',
    subRoleUr: 'حیاتیاتی تنوع بڑھانے والے پرندے',
    nameEn: 'Spotted Owlet & Barn Owl',
    nameUr: 'چتکبرا اُلّو (مصفّی اُلّو)',
    scientificName: 'Athene brama',
    photo: './images/field-guide-birds.jpg',
    photoCrop: 'quad-br',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Athene brama in Neem Tree)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Small chunky grey-brown owl (~21 cm) covered in white spots with bright golden-yellow forward-facing eyes; sits quietly inside neem, shisham, or kikar shade by day.',
      ur: 'چھوٹا گول مٹول بھورا اُلّو جس پر سفید دھبے اور آگے کی طرف دیکھتی چمکدار پیلی آنکھیں ہوتی ہیں؛ دن میں نیم، شیشم یا کیکر کے سائے میں بیٹھتا ہے۔'
    },
    appearance: {
      en: 'Round head with no ear tufts, white eyebrow markings, silent swift flight at dusk.',
      ur: 'گول سر، سفید ابرو نما نشان اور شام کے اندھیرے میں بغیر آواز کے اڑان۔'
    },
    roleText: {
      en: 'Night-shift guardian! Hunts field rats, mice, large beetles, mole crickets, and night-flying moths while farmers sleep.',
      ur: 'رات کا چوکیدار! رات کے وقت کھیت کے چوہے، بڑے بھونرے، کرکٹ اور نقصان دہ پتنگے شکار کر کے فطری توازن برقرار رکھتا ہے۔'
    },
    farmBenefit: {
      en: 'Significantly reduces rat damage to wheat, rice bunds, sugarcane, and grain stores—and indicates healthy tree & farm biodiversity.',
      ur: 'گندم، چاول کی مینڈھوں، گنے اور غلے میں چوہوں کا نقصان کم کرتا ہے اور صحت مند ماحول کی علامت ہے۔'
    },
    action: {
      en: 'PROTECT OLD TREES & STOP RAT POISONING WHERE POSSIBLE: Preserve hollow mature trees (Neem, Shisham, Jand) along boundaries; avoid secondary rodenticide poisoning that kills owls when they eat poisoned rats.',
      ur: 'پرانے درخت بچائیں: کھیت کی حدود پر پرانے نیم، شیشم اور جنڈ کے درخت نہ کاٹیں اور چوہوں کے زہر سے پرہیز کریں کیونکہ زہر آلود چوہے کھانے سے اُلّو مر جاتے ہیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Owls are completely harmless to crops and farmers—old myths about owls bringing bad luck harm helpful rat-control allies.',
      ur: 'شناخت کی احتیاط: اُلّو فصل اور انسان کے لیے بالکل بے ضرر اور چوہوں کا بہترین قدرتی کنٹرول ہے۔'
    },
    lookAlikes: {
      en: ['Barn Owl (larger, white heart-shaped face, super rodent hunter)', 'Indian Nightjar (crouches on dry earth tracks by day, eats night moths)'],
      ur: ['سفید چہرے والا اُلّو (چوہوں کا بہت بڑا شکاری)', 'رات کا شب چر (زمینی پگڈنڈی پر بیٹھتا اور رات کے پتنگے کھاتا ہے)']
    }
  },
  {
    id: 'fg-lapwing',
    library: 'C',
    category: 'bird',
    categoryEn: 'Farm Bird · Biodiversity & Ground Guard',
    categoryUr: 'کھیت کا پرندہ · حیاتیاتی تنوع کا نشان',
    subRole: 'biodiversity',
    subRoleEn: 'Contributes to Biodiversity',
    subRoleUr: 'حیاتیاتی تنوع بڑھانے والے پرندے',
    nameEn: 'Red-wattled Lapwing & Indian Roller',
    nameUr: 'ٹٹیہری اور نیل کنٹھ',
    scientificName: 'Vanellus indicus',
    photo: './images/field-guide-birds.jpg',
    photoCrop: 'quad-tr',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Wetland & Farmland Margin)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Lapwing: long-legged brown-and-white wading bird with black head, bright red patch in front of eye, and loud "did-he-do-it" alarm call along bunds & drains.',
      ur: 'ٹٹیہری: لمبی پیلی ٹانگوں والا بھورا سفید پرندہ جس کا سر کالا اور آنکھ کے آگے سرخ گوشت جیسا نشان ہوتا ہے؛ خطرے پر اونچی آواز میں بولتی ہے۔'
    },
    appearance: {
      en: 'Lapwing walks on field bunds and harvested plots; Indian Roller flashes brilliant sky-blue wings when flying between boundary trees.',
      ur: 'ٹٹیہری مینڈھوں اور نالوں پر چلتی ہے جبکہ نیل کنٹھ اڑتے وقت چمکدار نیلے پر دکھاتا ہے۔'
    },
    roleText: {
      en: 'Lapwings and Rollers feed on soil beetles, grasshoppers, snails, cutworms, and ants, signalling healthy farm biodiversity.',
      ur: 'ٹٹیہری اور نیل کنٹھ مٹی کے بھونرے، ٹڈے، کٹروا سنڈیاں، گھونگھے اور چیونٹیاں کھا کر حیاتیاتی تنوع سلامت رکھتے ہیں۔'
    },
    farmBenefit: {
      en: 'Alerts farmers to intruders/predators and keeps ground insects balanced along Narowal watercourses and rainfed fields.',
      ur: 'نارووال کے کھالوں اور بارانی زمینوں میں زمینی کیڑوں کا توازن رکھتی اور ماحول کو زندہ رکھتی ہیں۔'
    },
    action: {
      en: 'PROTECT NESTING SCRAPES & TREE PERCHES: Avoid crushing lapwing nests laid on fallow bunds in spring; preserve boundary Shisham & Kikar trees for Rollers.',
      ur: 'حفاظت کریں: بہار میں خالی مینڈھوں پر ٹٹیہری کے انڈوں کو ٹریکٹر سے بچائیں اور نیل کنٹھ کے بیٹھنے کے لیے حدود کے درخت محفوظ رکھیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Both species are strictly beneficial wildlife indicators—zero threat to rice, wheat, or orchards.',
      ur: 'شناخت کی احتیاط: دونوں پرندے چاول، گندم اور باغات کے لیے سو فیصد بے ضرر اور مفید ہیں۔'
    },
    lookAlikes: {
      en: ['Black-winged Stilt (very long thin pink legs, feeds inside shallow water)', 'Indian Roller (stocky turquoise-blue wings, sits on wires & dry branches)'],
      ur: ['لمبی گلابی ٹانگوں والا پرندہ', 'نیل کنٹھ (نیلے پر، تاروں اور درختوں پر بیٹھتا ہے)']
    }
  },

  /* ------------------------------------------------------------------------
     LIBRARY D: HERBS, WEEDS AND USEFUL PLANTS
     Split cleanly into 'weed' and 'useful-plant' for top-level gallery filters
     ------------------------------------------------------------------------ */
  {
    id: 'fg-phalaris',
    library: 'D',
    category: 'weed',
    categoryEn: 'Common Field Weed',
    categoryUr: 'کھیت کی نقصان دہ جڑی بوٹی',
    subRole: 'weed',
    subRoleEn: 'Rabi Wheat Grass Weed',
    subRoleUr: 'گندم کی گھاس نما جڑی بوٹی',
    nameEn: 'Little Seed Canary Grass (Sitti / Dumbi Sitti)',
    nameUr: 'دُمبی سٹی / سٹی',
    scientificName: 'Phalaris minor',
    photo: './images/field-guide-plants.jpg',
    photoCrop: 'quad-tl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Grassy Weeds in Wheat)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Resembles young wheat closely at seedling stage, but stem base often has a slight pinkish-red tint, leaves feel slightly lighter green, and late spikes form short oval dense foxtail heads.',
      ur: 'شروع میں بالکل گندم کے پودے جیسی لگتی ہے، مگر تنے کی جڑ کے پاس ہلکا گلابی رنگ اور پتوں کا رنگ کچھ ہلکا ہوتا ہے؛ بعد میں گول چھوٹا گیند جیسا سٹہ نکلتا ہے۔'
    },
    roleText: {
      en: 'HARMFUL COMPETITOR: Competes aggressively with wheat for water, nitrogen, and light—especially severe in continuous Rice → Wheat fields without crop rotation.',
      ur: 'نقصان دہ جڑی بوٹی: گندم کے ساتھ پانی، کھاد اور روشنی کا مقابلہ کر کے پیداوار گھٹاتی ہے—خاص طور پر مسلسل چاول ← گندم والے کھیتوں میں زیادہ ہوتی ہے۔'
    },
    farmBenefit: {
      en: 'Young pulled plants can be fed to livestock or composted before seedheads form (never compost once ripe seeds form!).',
      ur: 'بیج بننے سے پہلے اکھاڑ کر جانوروں کو چارے یا کمپوسٹ میں استعمال کیا جا سکتا ہے (بیج بننے کے بعد کمپوسٹ میں نہ ڈالیں)۔'
    },
    action: {
      en: 'MANAGEMENT ADVICE: 1) Break Rice–Wheat with Crop Rotation (Berseem, Mustard, Canola, or Chickpea on part of farm); 2) Leave 3–5 cm rice straw Mulching with Happy Seeder wheat (shades out germinating weed seeds!); 3) Pull/hoe early BEFORE seeds ripen and never let plants seed on bunds; 4) Consult Narowal Agriculture Extension if herbicide resistance is suspected.',
      ur: 'انتظام: 1) گندم کے ساتھ برسیم، سرسوں/کینولا یا چنا کی ادل بدل کریں؛ 2) ہیپی سیڈر سے 3–5 cm پرالی کی ملچنگ میں بوائی کریں تاکہ جڑی بوٹی نہ اگے؛ 3) بیج پکنے سے پہلے نکالیں اور مینڈھوں پر بیج نہ بننے دیں؛ 4) دوا کے خلاف مزاحمت پر محکمہ زراعت سے مشورہ کریں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: At the 2–3 leaf stage, Dumbi Sitti looks nearly identical to young wheat and wild oat (Javi). Gently wash roots to check the seed coat (canary grass seed is tiny & shiny; wild oat is long with a bent awn) or ask Extension staff.',
      ur: 'شناخت کی احتیاط: 2–3 پتوں کی حالت میں دُمبی سٹی، گندم اور جنگلی جئی (جوی) ایک جیسی لگتی ہیں—پودا اکھاڑ کر بیج کا سائز دیکھیں یا زرعی ماہر سے تصدیق کریں۔'
    },
    lookAlikes: {
      en: ['Young Wheat seedlings (never pull/spray blindly without checking row line & base tint)', 'Wild Oat / Javi (Avena fatua—taller, drooping loose oat panicles with twisted awns)'],
      ur: ['گندم کے نئے پودے (قطار دیکھ کر فرق کریں)', 'جنگلی جئی / جوی (اونچا پودا اور لٹکتے ہوئے لمبے دانے)']
    }
  },
  {
    id: 'fg-barnyard-grass',
    library: 'D',
    category: 'weed',
    categoryEn: 'Common Field Weed',
    categoryUr: 'کھیت کی نقصان دہ جڑی بوٹی',
    subRole: 'weed',
    subRoleEn: 'Kharif Rice Grass Weed',
    subRoleUr: 'چاول کی گھاس نما جڑی بوٹی',
    nameEn: 'Barnyard Grass / Swanki',
    nameUr: 'سوانکی / دھان گھاس',
    scientificName: 'Echinochloa crus-galli',
    photo: './images/field-guide-plants.jpg',
    photoCrop: 'quad-tl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Grassy Field Weed)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Grows alongside rice seedlings; lacks the papery collar flap (ligule) found where rice leaf meets stem, often has a purplish-red flat stem base, and forms branched greenish-purple seed panicles.',
      ur: 'دھان کے پودوں کے ساتھ اگتی ہے؛ دھان کے برعکس پتے اور تنے کے جوڑ پر سفید جھلی (لیگیول) نہیں ہوتی، نچلا تنا چپٹا اور ہلکا جامنی ہوتا ہے۔'
    },
    roleText: {
      en: 'HARMFUL COMPETITOR: Major competitor in Kharif rice (especially Direct Seeded Rice and nurseries) and along moist watercourse edges.',
      ur: 'نقصان دہ جڑی بوٹی: خریف میں چاول (خاص طور پر پنیری اور براہِ راست کاشت DSR) میں خوراک اور جگہ گھیرتی ہے۔'
    },
    farmBenefit: {
      en: 'Tender pre-seed cuts are eaten eagerly by buffalo/cattle, though never allow plants to drop seeds into paddy.',
      ur: 'بیج پکنے سے پہلے کاٹی جائے تو مویشی شوق سے کھاتے ہیں، مگر کھیت میں بیج ہرگز نہ گرنے دیں۔'
    },
    action: {
      en: 'MANAGEMENT ADVICE: 1) Always use clean certified rice seed (weed seeds often spread inside farm-saved seed!); 2) Hand-weed rice nurseries cleanly before transplanting; 3) Laser-level fields so standing water depth is even; 4) Cut bund/channel weeds before flowering; 5) Confirm local weed control guidance with Punjab Agriculture Extension.',
      ur: 'انتظام: 1) صاف تصدیق شدہ بیج استعمال کریں؛ 2) پنیری سے منتقلی کے وقت سوانکی کے پودے الگ کر دیں؛ 3) لیزر لیولنگ کروائیں تاکہ کھیت ہموار رہے؛ 4) کھالوں و مینڈھوں سے پھول آنے سے پہلے کاٹ لیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Very easily mistaken for Basmati rice seedlings until you inspect the leaf-stem joint (collar) for a papery ligule (present in rice, absent in Swanki).',
      ur: 'شناخت کی احتیاط: شروع میں بالکل چاول کا پودا لگتی ہے—صرف پتے کے جوڑ پر سفید جھلی دیکھ کر فرق یقینی بنائیں (چاول میں ہوتی ہے، سوانکی میں نہیں)۔'
    },
    lookAlikes: {
      en: ['Young Rice seedlings (have clear papery ligule flap at leaf collar)', 'Jungle Rice / Swanki Bhooti (Echinochloa colona—shorter, purple-banded leaves, also weed)'],
      ur: ['چاول کی پنیری (جوڑ پر سفید جھلی موجود ہوتی ہے)', 'جنگلی سوانکی (پتوں پر جامنی دھاریاں)']
    }
  },
  {
    id: 'fg-nutgrass',
    library: 'D',
    category: 'weed',
    categoryEn: 'Common Field Weed',
    categoryUr: 'کھیت کی سخت جڑی بوٹی',
    subRole: 'weed',
    subRoleEn: 'Perennial Sedge Weed',
    subRoleUr: 'گٹھیلی جڑ والی جڑی بوٹی',
    nameEn: 'Purple Nutgrass / Deela',
    nameUr: 'ڈیلا / موتھا',
    scientificName: 'Cyperus rotundus',
    photo: './images/crop-stages-cereals.jpg',
    photoCrop: 'stage-0',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Soil Plate',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Three-sided triangular dark shiny green stem ("sedges have edges") rising from chains of hard dark underground nut-like tubers; reddish-brown umbrella seed head.',
      ur: 'تین کونوں والا چمکدار گہرا سبز تنا جو مٹی کے نیچے کالی گٹھیلی گرہوں کے جال سے نکلتا ہے؛ اوپر سرخ بھوری چھتری جیسا پھول۔'
    },
    roleText: {
      en: 'HARMFUL PERENNIAL WEED: Spreads rapidly via underground tubers when rotavators chop them into pieces; thrives in compacted, wet, or sunny bare pockets.',
      ur: 'سخت جان جڑی بوٹی: روٹاویٹر چلانے سے اس کی زیرِ زمین گرہیں کٹ کر مزید پھیل جاتی ہیں؛ ننگی دھوپ اور سخت تہہ والی زمین میں زیادہ پھیلتی ہے۔'
    },
    farmBenefit: {
      en: 'Underground tubers hold some soil on erosion edges, though dense patches must be shaded out of crop zones.',
      ur: 'فصل کے کھیتوں میں پیداوار کم کرتی ہے، اس لیے سایہ دار فصلوں سے دبانا ضروری ہے۔'
    },
    action: {
      en: 'MANAGEMENT ADVICE: 1) Do NOT keep chopping wet fields with a rotavator (multiplies tubers!); 2) Deela hates deep shade—smother patches using dense tall Sesbania (dhaincha), Cowpea, or Sorghum + Cowpea cover crops plus 3–5 cm Mulching; 3) Relieve Waterlogging and break hard pans with a chisel plough.',
      ur: 'انتظام: 1) بار بار روٹاویٹر چلانے سے پرہیز کریں ورنہ گرہیں زیادہ پھیلیں گی؛ 2) ڈیلا گہرے سائے میں مر جاتا ہے—سنبھالو، لوبیا یا جوار+لوبیا اور 3–5 cm ملچنگ سے اسے دبائیں؛ 3) نکاسی بہتر بنائیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Roll the stem between two fingers—a sharp 3-cornered triangle confirms a sedge (Deela), whereas grasses have round/flat stems. Yellow nutsedge looks similar.',
      ur: 'شناخت کی احتیاط: تنا انگلیوں میں گھما کر دیکھیں—تکونا تنا ڈیلا ہونے کی نشانی ہے جبکہ عام گھاس گول یا چپٹی ہوتی ہے۔'
    },
    lookAlikes: {
      en: ['Bermuda grass / Khabbal (Cynodon dactylon—creeping round stems, not triangular)', 'Rice flatsedge (annual paddy sedge without hard nut chains)'],
      ur: ['کھبل گھاس (گول پھیلنے والی ڈنڈیاں، گرہیں نہیں)', 'چھتری ڈیلا (دھان میں اگنے والی سالانہ قسم)']
    }
  },
  {
    id: 'fg-bathu',
    library: 'D',
    category: 'useful-plant',
    categoryEn: 'Useful Wild Plant (Dual Role)',
    categoryUr: 'مفید جنگلی پودا (دوہرا کردار)',
    subRole: 'wild',
    subRoleEn: 'Useful Wild Plant & Edible Greens',
    subRoleUr: 'مفید جنگلی پودا / ساگ',
    nameEn: 'Bathu (Lamb’s Quarters)',
    nameUr: 'باتھو',
    scientificName: 'Chenopodium album',
    photo: './images/field-guide-plants.jpg',
    photoCrop: 'quad-bl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Bathu & Raised Vegetable Edge)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Soft upright winter plant with diamond/goosefoot-shaped leaves dusted with a silvery-white powdery bloom on young center shoots.',
      ur: 'سردیوں کا نرم سیدھا پودا جس کے پتے تکونے کٹاؤ والے اور اوپر کی نئی کونپل پر سفید آٹے جیسی ہلکی تہہ (چمک) ہوتی ہے۔'
    },
    roleText: {
      en: 'USEFUL WILD PLANT (WITH CARE): Young Bathu leaves are prized in Punjab as nutritious winter saag and green fodder, AND deep taproots bring up soil minerals—yet dense stands left unpulled inside wheat will compete for nutrients.',
      ur: 'مفید جنگلی پودا: پنجاب میں نرم باتھو غذائیت سے بھرپور ساگ اور مویشیوں کے چارے کے کام آتا ہے، لیکن اگر گندم کے اندر زیادہ گنجان ہو جائے تو خوراک میں شریک ہو جاتا ہے۔'
    },
    farmBenefit: {
      en: 'Provides free winter household greens, cattle/goat fodder, and nitrogen-rich green compost material when harvested early.',
      ur: 'مفت سردیوں کا ساگ، بکری/بھینس کا چارہ اور بیج سے پہلے کاٹ کر بہترین کمپوسٹ بناتا ہے۔'
    },
    action: {
      en: 'WISE USE & MANAGEMENT: Hand-harvest tender Bathu from wheat/vegetable edges for household food, livestock fodder, or compost BEFORE it flowers and sheds thousands of tiny black seeds. Never burn.',
      ur: 'سمجھدار انتظام: پھول اور سیاہ بیج بننے سے پہلے ہاتھ سے نکال کر ساگ، چارے یا کمپوسٹ میں استعمال کریں—ہرگز جلائیں نہیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Do not confuse edible Bathu with spiny Amaranthus (Chulai) or toxic Datura seedlings. Confirm wild greens locally before eating, and never harvest greens from recently sprayed fields.',
      ur: 'شناخت کی احتیاط: کھانے کے لیے صرف صاف، بغیر سپرے والے کھیت سے باتھو لیں اور زہریلے دھتورے یا کانٹے دار جڑی بوٹیوں سے الگ پہچانیں۔'
    },
    lookAlikes: {
      en: ['Krund / Nettleleaf Goosefoot (darker smelly leaves, less tender)', 'Spiny Pigweed / Chulai (distinct prickly spines or reddish stem)'],
      ur: ['کرنڈ (گہرے تیز بو والے پتے)', 'چلائی (سرخی مائل تنا یا کانٹے)']
    }
  },
  {
    id: 'fg-itsit',
    library: 'D',
    category: 'useful-plant',
    categoryEn: 'Useful Wild Plant (Cover & Forage)',
    categoryUr: 'مفید جنگلی پودا (زمینی ڈھانپ و چارہ)',
    subRole: 'wild',
    subRoleEn: 'Useful Wild Plant',
    subRoleUr: 'مفید جنگلی پودا',
    nameEn: 'Itsit / Horse Purslane',
    nameUr: 'اٹ سٹ',
    scientificName: 'Trianthema portulacastrum',
    photo: './images/soil-healthy.jpg',
    photoCrop: 'full',
    creditEn: 'Local Archive · Regenerative Farming Hub Living Soil Cover',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز (مٹی کا ڈھانپ)',
    clues: {
      en: 'Spreading fleshy ground-hugging summer herb with smooth oval green leaves often rimmed in red and tiny pink/white cup-shaped flowers nestled in leaf joints.',
      ur: 'گرمیوں میں زمین پر پھیلنے والی گودے دار جڑی بوٹی جس کے گول ہموار پتوں کے کناروں پر ہلکی سرخی اور جوڑ میں ننھے گلابی/سفید پھول ہوتے ہیں۔'
    },
    roleText: {
      en: 'DUAL ROLE WILD PLANT: On fallow margins it cools bare summer soil below 50–60°C and shelters ground predators, while inside spring maize/sugarcane/vegetables early dense mats must be hoed before smothering seedlings.',
      ur: 'دوہرا کردار: خالی زمین پر مٹی کو 50–60°C گرمی سے بچاتی ہے، لیکن مکئی، گنے اور سبزیوں کے بیچ زیادہ پھیل جائے تو ابتدائی گوڈی ضروری ہوتی ہے۔'
    },
    farmBenefit: {
      en: 'Soft fleshy green stems decompose very fast in Compost heaps (counts as a lush "green" nitrogen layer in the 2:1 dry-to-green compost mix!).',
      ur: 'اس کی نرم ہری شاخیں گلی سڑی نامیاتی کھاد / کمپوسٹ کے ڈھیر میں بہت تیزی سے گلتیں اور بہترین سبز تہہ بناتی ہیں۔'
    },
    action: {
      en: 'MANAGEMENT ADVICE: Hoe young plants out of maize/vegetable crop rows early and feed directly into your Compost heap before seed capsules open. Use dense sorghum + cowpea or straw mulch to suppress it naturally.',
      ur: 'انتظام: مکئی اور سبزیوں کی قطاروں سے شروع میں کھرپے سے نکال کر بیج بننے سے پہلے کمپوسٹ کے ڈھیر میں ڈالیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Resembles edible Kulfa / Purslane (Portulaca oleracea—thick wedge leaves, yellow flowers). Note that Itsit accumulates oxalates/nitrates when stressed, so prefer composting it rather than heavy feeding.',
      ur: 'شناخت کی احتیاط: کلفہ ساگ (پیلے پھول) سے مشابہت رکھتی ہے؛ اٹ سٹ کو کھانے کے بجائے کمپوسٹ بنانا زیادہ محفوظ ہے۔'
    },
    lookAlikes: {
      en: ['Kulfa / Common Purslane (Portulaca oleracea—yellow flowers, wedge-shaped leaves)', 'Biskhapra / Punarnava (Boerhavia—deeper woody root, used in traditional medicine)'],
      ur: ['کلفہ (پیلے پھول)', 'بسکھپرا / پنرنوا (گہری لکڑی دار جڑ)']
    }
  },
  {
    id: 'fg-neem',
    library: 'D',
    category: 'useful-plant',
    categoryEn: 'Useful Plant · Medicinal & Bio-Pest Tree',
    categoryUr: 'مفید پودا · طبی و قدرتی کیڑے مار درخت',
    subRole: 'herb',
    subRoleEn: 'Medicinal & Pest-Control Tree',
    subRoleUr: 'طبی اور کیڑے مار مفید درخت',
    nameEn: 'Neem Tree',
    nameUr: 'نیم کا درخت',
    scientificName: 'Azadirachta indica',
    photo: './images/field-guide-plants.jpg',
    photoCrop: 'quad-br',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Azadirachta indica Branch)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Evergreen shady Punjab boundary tree with compound leaves made of 9–15 curved, saw-toothed narrow green leaflets and olive-shaped yellow berries in summer.',
      ur: 'پنجاب کا سدا بہار گھنا درخت جس کی ٹہنی پر آری کی طرح دندانے دار مڑے ہوئے سبز پتے اور گرمیوں میں زیتون جیسے پیلے پھل (نمولیاں) لگتے ہیں۔'
    },
    roleText: {
      en: 'HANDBOOK ESSENTIAL USEFUL PLANT: Medicinal tree, boundary windbreak, bird shelter, AND core source of safe homemade bio-pesticide spray.',
      ur: 'ہینڈ بک کا نہایت اہم مفید درخت: طبی فوائد، کھیت کی حد پر ہوا کی روک، پرندوں کی پناہ گاہ اور گھر میں محفوظ کیڑے مار سپرے کا ذریعہ۔'
    },
    farmBenefit: {
      en: 'Homemade Neem Spray recipe (Handbook): crush ~1 kg neem seed kernels or leaves in 10 L water, soak overnight, strain through cloth, add a pinch of mild soap, and spray in the evening to deter caterpillars & sucking pests while keeping Beneficial Insects safer.',
      ur: 'ہینڈ بک نسخہ: 1 kg نیم کے بیج یا پتے کوٹ کر 10 L پانی میں رات بھر بھگوئیں، کپڑے سے چھان کر تھوڑا صابن ملائیں اور شام کو سپرے کریں۔'
    },
    action: {
      en: 'PLANT & USE: Plant Neem trees along Narowal field boundaries, homesteads, and windbreaks (consult local advice on wide spacing near crops). Dry and store summer neem berries for pest-control spray year-round.',
      ur: 'لگائیں اور استعمال کریں: کھیت کی حدود اور ڈیرے پر نیم کے درخت لگائیں اور گرمیوں میں نمولیاں سکھا کر محفوظ کریں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Bakain / Chinaberry (Melia azedarach) looks very similar with doubly-compound leaves and purple flowers—true Neem has singly-pinnate curved leaves and white fragrant flowers.',
      ur: 'شناخت کی احتیاط: بکائن (دھریک) کے پتے بھی ملتے جلتے مگر دوہری شاخوں اور جامنی پھولوں والے ہوتے ہیں—اصلی نیم کے پھول سفید ہوتے ہیں۔'
    },
    lookAlikes: {
      en: ['Bakain / Dharek (Melia azedarach—lilac-purple flowers; berries toxic to swallow)', 'Curry leaf tree (much smaller shrub, aromatic culinary leaves)'],
      ur: ['بکائن / دھریک (جامنی پھول، پھل زہریلا)', 'کڑی پتا (چھوٹا خوشبودار پودا)']
    }
  },
  {
    id: 'fg-marigold-mint',
    library: 'D',
    category: 'useful-plant',
    categoryEn: 'Useful Plant · Herb & Trap Crop',
    categoryUr: 'مفید پودا · جڑی بوٹی اور ٹریپ فصل',
    subRole: 'herb',
    subRoleEn: 'Medicinal / Culinary Herb & Trap Border',
    subRoleUr: 'طبی/کھانے کی جڑی بوٹی اور ٹریپ فصل',
    nameEn: 'Marigold, Mint & Coriander',
    nameUr: 'گیندا، پودینہ اور دھنیا',
    scientificName: 'Tagetes / Mentha spp.',
    photo: './images/field-guide-plants.jpg',
    photoCrop: 'quad-bl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Marigold Trap & Herbs)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Marigold: bright orange-yellow pom-pom blossoms with strong-scented lacy leaves. Mint: square stems with aromatic crinkled leaves. Coriander: feathery umbels of tiny white flowers.',
      ur: 'گیندا: شوخ نارنجی/پیلے پھول اور تیز خوشبودار کٹے پتے۔ پودینہ: چوکور ڈنڈی اور خوشبودار پتے۔ دھنیا: باریک سفید پھولوں کی چھتری۔'
    },
    roleText: {
      en: 'USEFUL HERBS & HANDBOOK TRAP CROPS: Marigold around tomato/okra/vegetables attracts fruit-borer moths away from the crop AND releases root compounds helpful against nematodes; Mint & Coriander give kitchen income and feed hoverflies & parasitic wasps!',
      ur: 'مفید جڑی بوٹیاں اور ٹریپ فصل: سبزیوں کے گرد گیندا نقصان دہ کیڑوں کو کھینچ کر اصل فصل بچاتا ہے اور جڑوں کے کیڑے کم کرتا ہے؛ دھنیا و پودینہ گھریلو آمدنی اور دوست بھڑ و ہور فلائی کو خوراک دیتے ہیں۔'
    },
    farmBenefit: {
      en: 'Boosts vegetable bed pollination, shelters Beneficial Insects, adds kitchen cash income, and lowers pesticide need.',
      ur: 'سبزیوں میں پولینیشن اور فائدہ مند حشرات بڑھاتی ہیں، باورچی خانے اور منڈی سے آمدنی دیتی ہیں اور سپرے کی ضرورت گھٹاتی ہیں۔'
    },
    action: {
      en: 'PLANT ON BEDS & BUNDS: Border raised vegetable plots with Marigold (Tagetes) strips and small pockets of flowering coriander or fennel; never spray insecticides over flowering trap herbs.',
      ur: 'بیڈ اور مینڈھوں پر لگائیں: سبزیوں کے اونچے بیڈ کے گرد گیندا اور دھنیا کی پٹیاں لگائیں اور ان کے پھولوں پر زہر سپرے نہ کریں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Keep Mint in contained bed edges (its underground runners spread quickly). Check local vegetable extension calendars for seasonal marigold/coriander dates.',
      ur: 'شناخت کی احتیاط: پودینہ پھیلنے والا پودا ہے اس لیے اسے کنارے کی الگ کیاری میں رکھیں۔'
    },
    lookAlikes: {
      en: ['Wild Parthenium / Gajar Booti (tiny dull white button flowers, ferny leaf—harmful allergenic weed, pull with gloves before flowering!)', 'Wild chamomile / carrot weeds'],
      ur: ['گاجر بوٹی / کانگریس گھاس (ننھے پھیکے سفید پھول—انتہائی نقصان دہ الرجی والی بوٹی، دستانے پہن کر پھول سے پہلے اکھاڑیں!)']
    }
  },
  {
    id: 'fg-sesbania',
    library: 'D',
    category: 'useful-plant',
    categoryEn: 'Useful Plant · Cover & Green Manure',
    categoryUr: 'مفید پودا · کور کراپ اور سبز کھاد',
    subRole: 'cover',
    subRoleEn: 'Green Manure Plant',
    subRoleUr: 'سبز کھاد کی فصل',
    nameEn: 'Dhaincha / Sesbania (Sanbhalu)',
    nameUr: 'سنبھالو / ڈھینچا',
    scientificName: 'Sesbania bispinosa',
    photo: './images/field-guide-plants.jpg',
    photoCrop: 'quad-tr',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Sesbania bispinosa Green Manure)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Fast-growing tall upright summer legume with feathery paired leaflets along slender green stems, pink-nodule roots, and yellow flowers around 45–55 days.',
      ur: 'گرمیوں میں تیزی سے اگنے والی لمبی دال دار فصل جس کے پتوں کی قطاریں باریک پنکھ جیسی ہوتی ہیں، جڑوں پر گلابی نائٹروجن گانٹھیں اور 45–55 دن میں پیلے پھول آتے ہیں۔'
    },
    roleText: {
      en: 'HANDBOOK TOP GREEN MANURE: Shades summer soil below 50–60°C, smothers Nutgrass (Deela) weeds, adds tons of Soil Organic Matter, captures nitrogen from air, and helps reclaim light salinity/sodicity.',
      ur: 'ہینڈ بک کی بہترین سبز کھاد: گرمیوں میں مٹی کو 50–60°C تپش سے بچاتی ہے، ڈیلا جڑی بوٹی دباتی ہے، نامیاتی مادہ اور نائٹروجن بڑھاتی ہے اور ہلکی شوریت کم کرتی ہے۔'
    },
    farmBenefit: {
      en: 'Lets farmers safely reduce synthetic urea on the following rice crop while improving water soak and soil softness.',
      ur: 'اس کے بعد لگنے والے چاول میں یوریا کھاد کا خرچ کم کرنے اور مٹی کو نرم و زرخیز بنانے کا بہترین ذریعہ۔'
    },
    action: {
      en: 'HANDBOOK METHOD: Sow at 20–25 kg/acre after wheat harvest when moisture/irrigation allows. Roll down or plough into soil at 45–55 days (around early flowering), 1–2 weeks before transplanting Basmati rice.',
      ur: 'ہینڈ بک کا طریقہ: گندم کی کٹائی کے بعد 20–25 kg/acre بوئیں۔ 45–55 دن کی عمر (پھول شروع ہونے) پر چاول کی منتقلی سے 1–2 ہفتے پہلے زمین میں دبا دیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Do not delay incorporation past woody maturity (55+ days), otherwise hard woody stems take longer to rot before rice transplanting.',
      ur: 'شناخت کی احتیاط: 55 دن سے زیادہ دیر نہ کریں ورنہ تنا لکڑی جیسا سخت ہو کر چاول سے پہلے گلنے میں زیادہ وقت لے گا۔'
    },
    lookAlikes: {
      en: ['Jantar (Sesbania sesban—perennial woody shrub variety)', 'Sunhemp / San (Crotalaria juncea—simple broad hairy leaves, bright yellow upright flowers)'],
      ur: ['جنتر (کثیر سالہ جھاڑی دار قسم)', 'سن / سنی (سادہ بڑے پتے، روشن پیلے پھول)']
    }
  },
  {
    id: 'fg-berseem-cowpea',
    library: 'D',
    category: 'useful-plant',
    categoryEn: 'Useful Plant · Living Cover & Fodder',
    categoryUr: 'مفید پودا · زندہ کور کراپ اور چارہ',
    subRole: 'cover',
    subRoleEn: 'Cover Crop & Legume Fodder',
    subRoleUr: 'کور کراپ اور دال دار چارہ',
    nameEn: 'Berseem Clover & Cowpea Cover',
    nameUr: 'برسیم اور لوبیا (کور کراپ)',
    scientificName: 'Trifolium alexandrinum',
    photo: './images/field-guide-plants.jpg',
    photoCrop: 'quad-br',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Berseem Clover Carpet)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Berseem (Rabi): dense carpet of three-leaflet shamrock clovers with creamy-white round flower heads in spring. Cowpea (Kharif): broad three-leaflet trailing/bushy vine.',
      ur: 'برسیم (ربیع): تین پتوں والی گھنی ہری قالین جیسی فصل اور بہار میں سفید گول پھول۔ لوبیا (خریف): تین چوڑے پتوں والی پھیلنے والی بیل۔'
    },
    roleText: {
      en: 'REGENERATIVE SOIL BUILDER: Keeps soil covered, feeds dairy buffaloes/cattle, breaks Rice–Wheat grass weeds like Dumbi Sitti, and leaves Rhizobium nitrogen.',
      ur: 'احیائی زمین ساز: مٹی کو ڈھانپ کر رکھتے ہیں، دودھ دینے والے جانوروں کا بہترین چارہ بنتے ہیں، دُمبی سٹی کا چکر توڑتے اور نائٹروجن چھوڑتے ہیں۔'
    },
    farmBenefit: {
      en: 'Helps hit the Handbook target of ≥ 25% land under legumes yearly; one final spring cut of Berseem can be turned in as Green Manure.',
      ur: 'سالانہ 25% رقبے پر دال والی فصلوں کا ہدف پورا کرتے ہیں؛ برسیم کی آخری بہار کٹائی زمین میں دبا کر سبز کھاد بنائی جا سکتی ہے۔'
    },
    action: {
      en: 'PLANT IN ROTATION & ORCHARD ALLEYS: Sow Berseem in Oct–Nov for winter cuttings or between young Citrus/Guava rows; mix Cowpea with Sorghum in Kharif monsoon. Verify seed rates with Narowal Extension.',
      ur: 'ادل بدل اور باغات میں لگائیں: اکتوبر–نومبر میں برسیم بوئیں یا کینو/امرود کے نئے باغ کی قطاروں میں لگائیں؛ خریف میں جوار کے ساتھ لوبیا ملائیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Shaftal / Persian Clover (Trifolium resupinatum) looks similar to Berseem with pinkish-purple flowers and hollow stems—also a winter fodder legume.',
      ur: 'شناخت کی احتیاط: شفتل بھی برسیم جیسا ہوتا ہے مگر اس کے پھول ہلکے گلابی جامنی اور ڈنڈی کھوکھلی ہوتی ہے—وہ بھی چارے کی دال دار فصل ہے۔'
    },
    lookAlikes: {
      en: ['Shaftal / Persian Clover (pink-purple flowers, hollow stems)', 'Lucerne / Alfalfa (deeper-rooted, purple flowers, multi-year fodder)'],
      ur: ['شفتل (گلابی پھول)', 'لوسن (جامنی پھول، کثیر سالہ)']
    }
  }
];

/* ==========================================================================
   GUIDED IDENTIFICATION TREE: "What did you see in your field?"
   Safety Rule: Shows POSSIBLE MATCHES + Confidence Limitations + IPM Caution.
   Never confirms 100% from one photo/clue alone, never recommends spraying solely on presence.
   ========================================================================== */

export const GUIDED_ID_SCENARIOS = [
  {
    id: 'insect-pest-or-ally',
    groupEn: 'Insect, Bug, or Caterpillar',
    groupUr: 'کیڑا، بھونرا، مکھی یا سنڈی',
    contexts: [
      {
        id: 'on-aphids-or-flowers',
        labelEn: 'Sitting on aphid colonies or visiting yellow flowers (looks helpful or hovering)',
        labelUr: 'تیلے کی بستی پر بیٹھا یا پھولوں کے گرد منڈلا رہا ہے',
        clues: [
          {
            id: 'spotted-dome-or-spiny',
            labelEn: 'Red/orange spotted round beetle OR dark spiny larva eating tiny aphids',
            labelUr: 'لال/نارنجی نقطوں والا گول بھونرا یا تیلا کھاتا سیاہ لاروا',
            matches: ['fg-ladybird', 'fg-lacewing'],
            cautionEn: 'Likely a Beneficial Insect! Do not confuse the spiny dark ladybird larva with a leaf pest. Wait and watch it eat aphids before considering any spray.',
            cautionUr: 'ممکنہ طور پر فائدہ مند حشرہ ہے! لیڈی برڈ کا سیاہ لاروا تیلا کھاتا ہے، اسے دشمن سمجھ کر سپرے نہ کریں۔'
          },
          {
            id: 'clear-wings-or-pollen',
            labelEn: 'Delicate pale-green net-winged bug, hovering helicopter dragonfly, OR golden bee/wasp-striped fly on mustard flowers',
            labelUr: 'ہلکی سبز جالی دار مکھی، دھان پر منڈلاتی ڈریگن فلائی یا پھولوں پر شہد کی مکھی/ہور فلائی',
            matches: ['fg-lacewing', 'fg-dragonfly', 'fg-pollinators', 'fg-parasitic-wasp'],
            cautionEn: 'Strong chance these are Beneficial Insects or Pollinators. Hoverflies imitate wasps cleanly and their larvae eat aphids; bees boost mustard & orchard yields.',
            cautionUr: 'زیادہ امکان فائدہ مند حشرات یا پولینیٹرز کا ہے۔ ہور فلائی بے ضرر دوست ہے اور پھولوں پر مکھیوں کے وقت سپرے سخت نقصان دہ ہے۔'
          },
          {
            id: 'puffed-tan-aphids',
            labelEn: 'Tiny green/black soft insects packed on stems (maybe with swollen tan dry shells mixed in)',
            labelUr: 'نرم شاخوں پر چپکے سبز/کالے باریک کیڑے (شاید کچھ بھورے پھولے دانے بھی ہوں)',
            matches: ['fg-aphids', 'fg-parasitic-wasp', 'fg-ladybird'],
            cautionEn: 'Possible Aphid (Tela) colony — check closely if swollen tan shells ("mummies") or ladybirds are already present! Never spray merely because a few aphids exist.',
            cautionUr: 'ممکنہ طور پر تیلا (Aphids) ہے—پہلے دیکھیں کہ لیڈی برڈ یا بھورے پھولے ممی دانے (طفیلی بھڑ کے شکار) موجود تو نہیں۔'
          }
        ]
      },
      {
        id: 'inside-rice-or-maize',
        labelEn: 'Inside rice stem/leaf or maize whorl (dried central shoot, folded leaf, or ragged whorl)',
        labelUr: 'چاول کے تنے، لپٹے پتے یا مکئی کی کونپل کے اندر',
        clues: [
          {
            id: 'dead-heart-white-head',
            labelEn: 'Dried central rice shoot ("dead heart"), empty white panicle, or straw-colored moth',
            labelUr: 'چاول کی درمیانی کونپل سوکھ گئی یا خالی سفید بالی اور بھوسے جیسا پتنگا',
            matches: ['fg-stem-borer', 'fg-parasitic-wasp'],
            cautionEn: 'Possible Rice Stem Borer — split 2–3 damaged stems to confirm larva/frass inside (rats or blast can look similar). Do not spray blindly; check Trichogramma cards & Narowal Extension.',
            cautionUr: 'چاول کی تنا چھیدنے والی سنڈی کا امکان ہے—تصدیق کے لیے تنا چیر کر اندر دیکھیں (چوہے یا بیماری بھی ہو سکتی ہے) اور ٹرائیکوگراما یا زرعی ماہر سے مشورہ کریں۔'
          },
          {
            id: 'folded-rice-leaf',
            labelEn: 'Rice leaf stitched into a tube with scraped white streaks OR pale caterpillars in maize whorl with sawdust frass',
            labelUr: 'چاول کا پتا لمبائی میں لپٹا ہوا یا مکئی کی کونپل میں برادے کے ساتھ دھاری دار سنڈی',
            matches: ['fg-leaf-folder', 'fg-fall-armyworm', 'fg-pod-borer'],
            cautionEn: 'Check head & rear markings (Fall Armyworm shows inverted "Y" on head + 4 square dots at rear). Scout 10 plants/spot; try T-perches, pheromone traps, neem or Bt early—confirm outbreaks locally.',
            cautionUr: 'مکئی میں سر پر الٹا Y اور دم پر 4 نقطے فال آرمی ورم کی نشانی ہیں۔ 10 پودوں کا معائنہ کر کے پرندوں کے ڈنڈے، نیم یا Bt استعمال کریں۔'
          },
          {
            id: 'hoppers-at-base',
            labelEn: 'Tiny jumping brown/white bugs at rice base near water OR crawling 8-legged spiders',
            labelUr: 'دھان کے تنے کے نیچے چھلانگ لگانے والے چھوٹے کیڑے یا 8 ٹانگوں والی مکڑی',
            matches: ['fg-rice-hoppers', 'fg-spiders'],
            cautionEn: 'CRITICAL DISTINCTION: 8-legged spiders are your allies eating hoppers! Early chemical sprays wipe out spiders and worsen "hopperburn". Check AWD 15 cm drainage & verify with Extension.',
            cautionUr: 'اہم فرق: 8 ٹانگوں والی مکڑیاں دوست ہیں اور ہاپر کھاتی ہیں! بے جا ابتدائی سپرے مکڑیوں کو مار کر حملہ بڑھا دیتا ہے۔'
          }
        ]
      },
      {
        id: 'under-leaves-or-pods',
        labelEn: 'Underside of vegetable/pulse leaves OR boring into green pods & tomatoes',
        labelUr: 'سبزیوں/دالوں کے پتوں کے نیچے یا پھلیوں و ٹماٹر میں سوراخ',
        clues: [
          {
            id: 'tiny-white-cloud',
            labelEn: 'Tiny white insects (1–2 mm) fluttering up like a white cloud when leaves are shaken',
            labelUr: 'پتا ہلانے پر 1–2 mm کی ننھی سفید مکھیاں اڑتی ہیں',
            matches: ['fg-whiteflies', 'fg-lacewing', 'fg-ladybird'],
            cautionEn: 'Possible Whitefly (check it actually flies rather than powdery mildew fungus). Start with yellow sticky traps, weed clearing, and neem; consult Narowal Extension if virus spread rises.',
            cautionUr: 'ممکنہ سفید مکھی ہے (پھپھوندی سے فرق کرنے کو پتا ہلا کر دیکھیں)۔ زرد چپکنے والے کارڈ اور نیم استعمال کریں اور وائرس بڑھنے پر زرعی دفتر سے رابطہ کریں۔'
          },
          {
            id: 'pod-borer-hole',
            labelEn: 'Stout caterpillar half-inside a green chickpea, mung, or tomato pod',
            labelUr: 'چنے، مونگ کی پھلی یا ٹماٹر میں آدھی گھسی ہوئی موٹی سنڈی',
            matches: ['fg-pod-borer', 'fg-ground-beetle'],
            cautionEn: 'Possible Pod Borer. Once caterpillars bore deep inside pods, contact sprays work poorly—scout early at flowering, use marigold traps, bird perches, or Bt on tiny young larvae.',
            cautionUr: 'ممکنہ پھلی کی سنڈی۔ پھلی میں گھسنے کے بعد سپرے کم اثر کرتا ہے—پھول کے وقت معائنہ، گیندا اور برڈ پرچ استعمال کریں۔'
          }
        ]
      }
    ]
  },
  {
    id: 'bird-spotted',
    groupEn: 'Wild Bird in Field or Orchard',
    groupUr: 'کھیت یا باغ میں پرندہ',
    contexts: [
      {
        id: 'perched-hunting',
        labelEn: 'Perched quietly on stakes/wires, following tractor/buffalo, or resting in shady tree',
        labelUr: 'ڈنڈے یا تار پر بیٹھا، ٹریکٹر/مویشی کے پیچھے یا درخت کے سائے میں',
        clues: [
          {
            id: 'black-forked-or-white-egret',
            labelEn: 'Glossy black with deep forked tail OR white long-legged bird walking behind buffalo/tractor',
            labelUr: 'چمکدار سیاہ اور دو شاخہ دم یا مویشی/ٹریکٹر کے پیچھے چلتا سفید بگلا',
            matches: ['fg-black-drongo', 'fg-cattle-egret', 'fg-common-myna'],
            cautionEn: 'Insect-controlling bird ally! Provide wooden T-perches (5–6 per acre) and never use poison baits.',
            cautionUr: 'کیڑے کھانے والا دوست پرندہ ہے! کھیت میں لکڑی کے T ڈنڈے لگائیں اور کبھی زہریلا دانہ نہ ڈالیں۔'
          },
          {
            id: 'owl-or-lapwing',
            labelEn: 'Round spotted owl in neem/shisham shade OR long-legged red-wattled plover calling on bunds',
            labelUr: 'درخت میں بیٹھا سفید دھبوں والا اُلّو یا مینڈھ پر اونچی آواز والی ٹٹیہری',
            matches: ['fg-spotted-owlet', 'fg-lapwing'],
            cautionEn: 'Biodiversity guardian! Owls eat field rats at night and lapwings eat ground insects—zero threat to crops.',
            cautionUr: 'حیاتیاتی تنوع کا محافظ! اُلّو رات کو کھیت کے چوہے کھاتا ہے اور ٹٹیہری زمینی کیڑے—فصل کو کوئی نقصان نہیں۔'
          }
        ]
      },
      {
        id: 'flocking-on-fruit-grain',
        labelEn: 'Gathering in noisy flocks around ripening guava, mango, maize cobs, or millet heads',
        labelUr: 'پکتے امرود، آم، مکئی کے بھٹوں یا جوار باجرہ پر غول کی شکل میں',
        clues: [
          {
            id: 'green-parakeet-or-sparrow',
            labelEn: 'Bright green screeching parrot with hooked red beak OR small brown seed-eating sparrow flock',
            labelUr: 'تیز آواز والا سبز طوطا یا پکتے سٹوں پر چھوٹی چڑیوں کا غول',
            matches: ['fg-parakeet', 'fg-house-sparrow'],
            cautionEn: 'Birds that may damage ripening crops—use HUMANE deterrence ONLY (reflective scare ribbons, rattle lines, netting on young trees, timely harvest). Never poison wildlife.',
            cautionUr: 'پکتی فصل کو نقصان کا امکان ہے—زہر کے بجائے چمکدار فیتے، شور کی رسی اور بروقت کٹائی جیسے بے ضرر طریقے اپنائیں۔'
          }
        ]
      }
    ]
  },
  {
    id: 'plant-weed-herb',
    groupEn: 'Field Weed, Wild Plant, Herb, or Cover Crop',
    groupUr: 'جڑی بوٹی، جنگلی پودا، جڑی بوٹی یا کور کراپ',
    contexts: [
      {
        id: 'grassy-or-sedge-weed',
        labelEn: 'Growing inside wheat/rice rows and competing with the crop',
        labelUr: 'گندم یا چاول کی قطاروں کے اندر اگ کر فصل کا مقابلہ کر رہی ہے',
        clues: [
          {
            id: 'wheat-or-rice-grass',
            labelEn: 'Looks just like young wheat (pinkish base, short oval spike) OR young rice (no leaf collar flap)',
            labelUr: 'گندم یا چاول کے پودے سے ملتی جلتی گھاس (دُمبی سٹی یا سوانکی)',
            matches: ['fg-phalaris', 'fg-barnyard-grass'],
            cautionEn: 'Possible grassy weed look-alike! Inspect stem collar / seed coat before pulling or deciding management. Break cycles using Crop Rotation, 3–5 cm Mulching & clean certified seed.',
            cautionUr: 'ممکنہ طور پر گھاس نما جڑی بوٹی ہے—تنے کا جوڑ اور بیج دیکھ کر گندم/چاول سے فرق یقینی بنائیں، اور فصلوں کی ادل بدل و ملچنگ اپنائیں۔'
          },
          {
            id: 'triangular-sedge-or-fleshy',
            labelEn: 'Sharp 3-sided triangular stem with underground nut-tubers OR fleshy low creeping herb',
            labelUr: 'تکونا تنا اور زمین کے نیچے کالی گرہیں (ڈیلا) یا زمین پر پھیلتی گودے دار بوٹی',
            matches: ['fg-nutgrass', 'fg-itsit'],
            cautionEn: 'Roll the stem to confirm triangular sedge (Deela). Avoid repeated rotavator passes that chop tubers; smother with dense Sesbania/Cowpea shade & Mulching.',
            cautionUr: 'تکونا تنا ڈیلا کی نشانی ہے۔ روٹاویٹر سے گرہیں مزید پھیلتی ہیں—سنبھالو/لوبیا کے گہرے سائے اور ملچنگ سے دبائیں۔'
          }
        ]
      },
      {
        id: 'useful-wild-herb-cover',
        labelEn: 'Broad-leaved winter plant, fragrant herb/tree, or nitrogen-fixing cover crop',
        labelUr: 'چوڑے پتوں والا پودا، خوشبودار جڑی بوٹی/درخت یا سبز کھاد کی فصل',
        clues: [
          {
            id: 'bathu-neem-marigold',
            labelEn: 'Silvery-dusted diamond-leaf Bathu OR orange Marigold / Neem branch',
            labelUr: 'سفید سفوف والا باتھو، نارنجی گیندا یا نیم کی ٹہنی',
            matches: ['fg-bathu', 'fg-neem', 'fg-marigold-mint'],
            cautionEn: 'Useful plant or herb! Verify wild greens are unsprayed and accurately identified before eating; harvest Bathu before it sheds seed in wheat.',
            cautionUr: 'مفید پودا یا جڑی بوٹی! کھانے کے لیے صاف اور تصدیق شدہ پودا ہی چنیں، اور باتھو کو بیج بننے سے پہلے کاٹ لیں۔'
          },
          {
            id: 'legume-cover-crop',
            labelEn: 'Tall feathery-leaved legume (45–55 days green manure) OR three-leaf clover/bean carpet',
            labelUr: 'لمبا پنکھ دار پتوں والا سبز کھاد پودا (سنبھالو) یا تین پتوں والا برسیم/لوبیا',
            matches: ['fg-sesbania', 'fg-berseem-cowpea'],
            cautionEn: 'Regenerative Green Manure / Cover Crop! Roll Sesbania 1–2 weeks before rice so stems rot smoothly; let Berseem feed livestock & fix nitrogen.',
            cautionUr: 'احیائی سبز کھاد یا کور کراپ! سنبھالو کو 45–55 دن پر چاول سے 1–2 ہفتے پہلے زمین میں دبا دیں۔'
          }
        ]
      }
    ]
  }
];
