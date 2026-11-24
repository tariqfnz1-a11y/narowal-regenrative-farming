/* ==========================================================================
   FIELD IDENTIFICATION GUIDE — PART 1
   LIBRARY A: BENEFICIAL INSECTS (7 entries)
   LIBRARY B: HARMFUL INSECTS & PESTS (7 entries)
   SAFETY RULE: Photo ID is never 100% certain; never spray merely on sighting;
   confirm uncertain or serious infestations with Punjab Agriculture Extension, Narowal.
   ========================================================================== */

export const FIELD_GUIDE_PART_1 = [
  /* ------------------------------------------------------------------------
     LIBRARY A: BENEFICIAL INSECTS
     ------------------------------------------------------------------------ */
  {
    id: 'fg-ladybird',
    library: 'A',
    category: 'beneficial',
    categoryEn: 'Beneficial Insect',
    categoryUr: 'فائدہ مند حشرہ',
    subRole: 'predator',
    subRoleEn: 'Predator Beetle',
    subRoleUr: 'شکاری بھونرا',
    nameEn: 'Ladybird Beetle',
    nameUr: 'لیڈی برڈ بھونرا (سنہری/لال ٹکیاں والا)',
    scientificName: 'Coccinellidae',
    photo: './images/field-guide-beneficials.jpg',
    photoCrop: 'quad-tl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Coccinellidae)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Small round dome-shaped beetle (orange, red, or yellow) with black spots; its dark alligator-shaped larva has orange spots and crawls fast on stems.',
      ur: 'چھوٹا گول گنبد نما بھونرا (نارنجی، لال یا پیلا) جس پر سیاہ نقطے ہوتے ہیں؛ اس کا کالا لاروا بھی چھوٹے مگرمچھ جیسا ہوتا ہے اور تیزی سے چلتا ہے۔'
    },
    appearance: {
      en: 'Adults are 4–8 mm shiny oval domes with black spots; young larvae look very different—spiny, dark slate-black with orange markings.',
      ur: 'بالغ بھونرا 4–8 mm چمکدار گول ہوتا ہے؛ یاد رہے کہ اس کا بچہ (لاروا) بھونرے جیسا نہیں بلکہ لمبا، سیاہ اور نارنجی دھاریوں والا نظر آتا ہے۔'
    },
    eats: {
      en: 'Both adults and larvae devour soft-bodied aphids (tela), whitefly nymphs, mealybugs, and mite eggs.',
      ur: 'بالغ اور لاروا دونوں تیلا، سفید مکھی کے بچے، ملی بگ اور جوؤں کے انڈے بڑی تعداد میں کھاتے ہیں۔'
    },
    farmBenefit: {
      en: 'Free, round-the-clock pest suppression in wheat, mustard, canola, berseem, vegetables, and citrus orchards.',
      ur: 'گندم، سرسوں، کینولا، برسیم، سبزیوں اور کینو کے باغات میں بغیر کسی خرچ کے تیلا اور رس چوسنے والے کیڑے کنٹرول کرتا ہے۔'
    },
    habitat: {
      en: 'Found inside aphid colonies on mustard, canola, wheat ears, berseem, and vegetable undersides.',
      ur: 'سرسوں، کینولا، گندم کے سٹوں، برسیم اور سبزیوں کے پتوں کے نیچے تیلے کی جگہوں پر آسانی سے ملتا ہے۔'
    },
    action: {
      en: 'PROTECT IT: Do not spray broad-spectrum insecticides when ladybirds and dark spiny larvae are present on aphids. Leave small flowering mustard or marigold strips on field bunds.',
      ur: 'اس کی حفاظت کریں: تیلے پر لیڈی برڈ یا اس کے سیاہ لاروے نظر آئیں تو تیز زہر کا سپرے نہ کریں۔ مینڈھوں پر سرسوں یا گیندے کے پھول لگائیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Do not confuse the spiny dark ladybird larva with a leaf-eating caterpillar, and avoid confusing shiny leaf beetles (pests) with spotted ladybirds—check leg count and antenna shape up close.',
      ur: 'شناخت کی احتیاط: لیڈی برڈ کے سیاہ کانٹے دار لاروے کو پتے کھانے والی سنڈی سمجھ کر تلف نہ کریں؛ نزدیک سے دیکھیں کہ یہ تیلے کی بستی کھا رہا ہے یا پتا۔'
    },
    lookAlikes: {
      en: ['Dark ladybird larva vs. young pest caterpillars', 'Hadda/epilachna beetle (dull orange, fuzzy shell, feeds on brinjal/gourd leaves rather than aphids)'],
      ur: ['لیڈی برڈ کا سیاہ لاروا بمقابلہ نقصان دہ سنڈی', 'ہڈا بھونرا (ہلکا روئیں دار نارنجی بھونرا جو بینگن/کدو کے پتے کھاتا ہے)']
    }
  },
  {
    id: 'fg-lacewing',
    library: 'A',
    category: 'beneficial',
    categoryEn: 'Beneficial Insect',
    categoryUr: 'فائدہ مند حشرہ',
    subRole: 'predator',
    subRoleEn: 'Predator ("Aphid Lion")',
    subRoleUr: 'شکاری کیڑا (تیلے کا دشمن)',
    nameEn: 'Green Lacewing',
    nameUr: 'گرین لیس ونگ (سبز جالی دار پروں والا)',
    scientificName: 'Chrysoperla carnea',
    photo: './images/field-guide-beneficials.jpg',
    photoCrop: 'quad-tr',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Chrysoperla carnea)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Slender pale-green body with golden eyes and four large transparent wings covered in fine net-like veins. Eggs sit on tiny white hair-like stalks.',
      ur: 'نازک ہلکا سبز جسم، سنہری آنکھیں اور چار بڑے شفاف پر جن پر جالی جیسی رگیں ہوتی ہیں۔ انڈے سفید باریک دھاگے کی نوک پر لگتے ہیں۔'
    },
    appearance: {
      en: 'Adult is ~1.2–1.5 cm long, delicate, holds wings tented over body; larva ("aphid lion") has curved pincer jaws and often carries dried insect skins on its back.',
      ur: 'بالغ کیڑا تقریباً 1.2–1.5 cm لمبا اور نازک ہوتا ہے؛ اس کے لاروے کے منہ پر قینچی جیسے جبڑے ہوتے ہیں جن سے یہ کیڑوں کا رس چوستا ہے۔'
    },
    eats: {
      en: 'Larvae aggressively hunt aphids, whiteflies, thrips, jassids, mites, and tiny moth eggs (adults feed mostly on nectar and pollen).',
      ur: 'اس کا لاروا تیلا، سفید مکھی، تھرپس، سست تیلا اور پتنگوں کے انڈے کھاتا ہے (جبکہ بالغ پھولوں کا رس پیتا ہے)۔'
    },
    farmBenefit: {
      en: 'One of Punjab’s strongest natural allies against early sucking pests in wheat, mustard, rice nurseries, cotton/vegetables, and citrus.',
      ur: 'گندم، سرسوں، چاول کی پنیری، سبزیوں اور کینو میں رس چوسنے والے کیڑوں کو روکنے کا طاقتور قدرتی محافظ۔'
    },
    habitat: {
      en: 'Rests in cool shady foliage, flowering field borders, orchards, berseem, and wheat/mustard strips.',
      ur: 'سایہ دار پتوں، کھیت کے کنارے پھولوں، باغات، برسیم اور سرسوں/گندم کی پٹیوں میں ملتا ہے۔'
    },
    action: {
      en: 'PROTECT IT: Keep flowering strips (coriander, fennel, mustard, marigold) so adults feed and lay stalked eggs. Avoid daytime broad-spectrum sprays.',
      ur: 'حفاظت کریں: کھیت کے کناروں پر دھنیا، سونف، سرسوں یا گیندا اگائیں تاکہ بالغ خوراک لے کر انڈے دیں۔ بے جا کیمیائی سپرے سے بچیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Several pale-green hoppers look greenish from a distance. Check for long clear net-veined wings held like a tent—never spray without checking close.',
      ur: 'شناخت کی احتیاط: دور سے ہرا سست تیلا بھی سبز لگ سکتا ہے؛ نزدیک سے جالی دار شفاف لمبے پر دیکھ کر پہچانیں۔'
    },
    lookAlikes: {
      en: ['Green leafhoppers (much smaller, wedge-shaped, jump quickly)', 'Brown lacewing (same helpful predator family, brownish colour)'],
      ur: ['ہرا سست تیلا (بہت چھوٹا اور چھلانگ لگانے والا)', 'بھورا لیس ونگ (یہ بھی فائدہ مند شکاری ہے)']
    }
  },
  {
    id: 'fg-dragonfly',
    library: 'A',
    category: 'beneficial',
    categoryEn: 'Beneficial Insect',
    categoryUr: 'فائدہ مند حشرہ',
    subRole: 'predator',
    subRoleEn: 'Aerial Hunter',
    subRoleUr: 'اڑنے والا شکاری',
    nameEn: 'Dragonfly & Damselfly',
    nameUr: 'ڈریگن فلائی اور ڈیمزل فلائی (بھنبھیری)',
    scientificName: 'Odonata',
    photo: './images/field-guide-beneficials.jpg',
    photoCrop: 'quad-bl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Odonata)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Long slender tail-like abdomen, huge wrap-around eyes, and two pairs of strong glassy wings. Hovers effortlessly above rice and water channels.',
      ur: 'لمبا پتلا جسم، بڑی گول آنکھیں اور دو جوڑے مضبوط شیشے جیسے پر۔ چاول کے کھیت اور کھالوں کے اوپر منڈلاتی نظر آتی ہے۔'
    },
    appearance: {
      en: 'Dragonflies hold wings flat open when resting; thinner damselflies fold wings along the back. Neither stings or harms any crop plant.',
      ur: 'ڈریگن فلائی بیٹھتے وقت پر کھلے رکھتی ہے جبکہ پتلی ڈیمزل فلائی پر پیچھے جوڑ لیتی ہے۔ یہ انسان یا فصل کو کوئی نقصان نہیں پہنچاتیں۔'
    },
    eats: {
      en: 'Catches adult stem borer moths, leaf folder moths, planthoppers, midges, and mosquitoes mid-air every day.',
      ur: 'روزانہ اڑتے ہوئے تنا چھیدنے والی سنڈی اور پتا لپیٹ کے پتنگے، چاول کے تیلے اور مچھر پکڑ کر کھاتی ہے۔'
    },
    farmBenefit: {
      en: 'Crucial patrol above Narowal Kharif Basmati fields—reduces egg-laying moths before caterpillars even hatch.',
      ur: 'نارووال کے باسمتی چاول کے کھیتوں میں پتنگوں کو انڈے دینے سے پہلے ہی ہوا میں شکار کر لیتی ہے۔'
    },
    habitat: {
      en: 'Paddy fields, irrigation watercourses (khala), bund grasses, and village ponds.',
      ur: 'دھان کے کھیت، آبپاشی کے کھالے، مینڈھوں کی گھاس اور جوہڑوں کے قریب۔'
    },
    action: {
      en: 'PROTECT IT: Leave short grass perches along paddy bunds and watercourses; avoid spraying pesticides across rice canopies where moths and dragonflies fly.',
      ur: 'حفاظت کریں: کھیت کی مینڈھوں اور کھالوں پر تھوڑی گھاس رہنے دیں جہاں یہ بیٹھ سکیں، اور بلا ضرورت سپرے سے بچیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Easy to recognize in flight; aquatic nymphs live harmlessly in paddy water hunting mosquito larvae and small hoppers.',
      ur: 'شناخت کی احتیاط: ہوا میں اڑتے وقت پہچان آسان ہے؛ اس کے پانی میں رہنے والے بچے بھی نقصان دہ کیڑے کھاتے ہیں۔'
    },
    lookAlikes: {
      en: ['Robber flies (smaller, single pair of wings, also beneficial hunters)', 'Damselfly (slimmer body, folds wings back—equally helpful)'],
      ur: ['رابر فلائی (ایک جوڑا پر، یہ بھی فائدہ مند شکاری ہے)', 'ڈیمزل فلائی (زیادہ پتلی، پر پیچھے جوڑتی ہے—یہ بھی دوست ہے)']
    }
  },
  {
    id: 'fg-parasitic-wasp',
    library: 'A',
    category: 'beneficial',
    categoryEn: 'Beneficial Insect',
    categoryUr: 'فائدہ مند حشرہ',
    subRole: 'parasitoid',
    subRoleEn: 'Egg & Larva Parasitoid',
    subRoleUr: 'کیڑوں کے انڈے ختم کرنے والی بھڑ',
    nameEn: 'Trichogramma & Parasitic Wasps',
    nameUr: 'ٹرائیکوگراما اور طفیلی بھڑ',
    scientificName: 'Trichogramma chilonis',
    photo: './images/field-guide-beneficials.jpg',
    photoCrop: 'quad-br',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Beneficial Habitat)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Pinhead-tiny wasps (often smaller than 1 mm) seen on flower umbels or emerging from parasitized borer eggs and swollen golden-brown aphid "mummies".',
      ur: 'انتہائی باریک بھڑ (اکثر 1 mm سے بھی چھوٹی) جو پھولوں پر یا سوجے ہوئے بھورے تیلے (ممی) اور سنڈی کے سیاہ انڈوں سے نکلتی ہے۔'
    },
    appearance: {
      en: 'Too tiny for bare eyes to detail clearly—often spotted first as blackened stem-borer egg masses or puffed tan aphid shells with a neat round exit hole.',
      ur: 'یہ اتنی باریک ہوتی ہے کہ عام آنکھ سے تفصیل مشکل ہوتی ہے؛ اس کی موجودگی سنڈی کے کالے شدہ انڈوں یا پھولے ہوئے بھورے تیلے سے پتا چلتی ہے۔'
    },
    eats: {
      en: 'Females lay eggs inside pest eggs (rice/sugarcane stem borers) or inside aphids/caterpillars—destroying the pest before it hatches or feeds.',
      ur: 'مادہ بھڑ چاول اور گنے کی تنا چھیدنے والی سنڈی کے انڈوں یا تیلے کے اندر اپنا انڈا دیتی ہے، جس سے سنڈی نکلنے سے پہلے ہی مر جاتی ہے۔'
    },
    farmBenefit: {
      en: 'Stops stem borers in Basmati rice and sugarcane when tied as certified Trichogramma chilonis cards at recommended times.',
      ur: 'باسمتی چاول اور گنے میں ٹرائیکوگراما کارڈ باندھنے سے تنا چھیدنے والی سنڈی کا قدرتی اور سستا تدارک ہوتا ہے۔'
    },
    habitat: {
      en: 'Flowering field borders (coriander, mustard, berseem), sugarcane fields, and unsprayed rice paddies.',
      ur: 'پھولوں والی مینڈھوں (دھنیا، سرسوں، برسیم)، گنے اور کم سپرے والے چاول کے کھیتوں میں۔'
    },
    action: {
      en: 'PROTECT & USE IPM: Obtain Trichogramma chilonis cards from Punjab Agriculture Extension / Research institutes and avoid chemical sprays right after release.',
      ur: 'حفاظت اور استعمال: محکمہ زراعت پنجاب سے تصدیق شدہ Trichogramma chilonis کارڈ لے کر لگائیں اور کارڈ لگانے کے بعد زہر سپرے نہ کریں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Because these wasps are tiny (< 1 mm), smartphone photos rarely resolve wing veins. Look for blackened egg masses or tan aphid "mummies" and ask Extension staff before spraying.',
      ur: 'شناخت کی احتیاط: انتہائی چھوٹے سائز کی وجہ سے موبائل تصویر میں پہچان مشکل ہوتی ہے؛ پھولے ہوئے بھورے تیلے دیکھ کر سپرے روکیں اور ماہرین سے تصدیق کریں۔'
    },
    lookAlikes: {
      en: ['Tiny midges or gnats (harmless)', 'Puffed brown aphid mummies (sign that parasitic wasps are already working!)'],
      ur: ['چھوٹے بے ضرر مچھر/پتنگے', 'سوجے ہوئے بھورے تیلے (یہ اس بات کی نشانی ہے کہ طفیلی بھڑ کام کر رہی ہے)']
    }
  },
  {
    id: 'fg-pollinators',
    library: 'A',
    category: 'beneficial',
    categoryEn: 'Beneficial Insect',
    categoryUr: 'فائدہ مند حشرہ',
    subRole: 'pollinator',
    subRoleEn: 'Pollinator & Aphid Hunter',
    subRoleUr: 'زیرہ پھیلانے والے حشرات',
    nameEn: 'Honeybees, Solitary Bees & Hoverflies',
    nameUr: 'شہد کی مکھیاں اور ہور فلائی',
    scientificName: 'Apis spp. / Syrphidae',
    photo: './images/field-guide-beneficials.jpg',
    photoCrop: 'quad-br',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Pollinators)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Furry golden-brown striped bees carrying yellow pollen baskets on hind legs; hoverflies look wasp-striped but have only 2 wings and hover still like tiny helicopters.',
      ur: 'شہد کی مکھی کے پچھلے پاؤں پر پیلے زردانے کی تھیلیاں ہوتی ہیں؛ ہور فلائی بھی بھڑ جیسی دھاری دار مگر صرف دو پروں والی ہوتی ہے اور ہوا میں ایک جگہ رکی رہتی ہے۔'
    },
    appearance: {
      en: 'Bees have 4 wings and long antennae; hoverflies have short stubby antennae, giant eyes, and 2 wings. Hoverfly maggots eat aphids.',
      ur: 'شہد کی مکھی کے 4 پر اور لمبے اینٹینا ہوتے ہیں جبکہ ہور فلائی کے 2 پر اور بڑی آنکھیں ہوتی ہیں۔ ہور فلائی کا لاروا تیلا کھاتا ہے۔'
    },
    eats: {
      en: 'Bees collect flower nectar and pollen; hoverfly larvae are fierce predators of mustard and vegetable aphids.',
      ur: 'مکھیاں پھولوں سے رس اور زردانہ جمع کرتی ہیں، اور ہور فلائی کے بچے سرسوں و سبزیوں پر لگے تیلے کو کھاتے ہیں۔'
    },
    farmBenefit: {
      en: 'Boost seed/fruit set in mustard, canola, citrus, guava, mango, jujube, and vegetables—plus honeybees offer value-added farm income.',
      ur: 'سرسوں، کینولا، کینو، امرود، آم، بیر اور سبزیوں میں پھل اور بیج بننے کا عمل بہتر کرتی ہیں اور شہد کی اضافی آمدنی بھی دیتی ہیں۔'
    },
    habitat: {
      en: 'Blossoming mustard, canola, berseem, orchard trees in spring, coriander, and marigold.',
      ur: 'پھولوں پر آئی سرسوں، کینولا، برسیم، بہار میں باغات، دھنیا اور گیندے پر۔'
    },
    action: {
      en: 'PROTECT IT: NEVER spray insecticides during crop flowering or midday heat. Keep clean water bowls and diverse flowering strips.',
      ur: 'حفاظت کریں: فصل پر پھول آنے کے دنوں میں یا دن کے وقت ہرگز زہر کا سپرے نہ کریں؛ صاف پانی اور پھولوں کی پٹیاں رکھیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Hoverflies imitate stinging wasps and bees to scare birds—never kill them! Bees are non-aggressive while foraging on flowers.',
      ur: 'شناخت کی احتیاط: ہور فلائی دیکھنے میں بھڑ جیسی لگتی ہے مگر ڈنک نہیں مارتی اور فصل کی بہترین دوست ہے۔'
    },
    lookAlikes: {
      en: ['Stinging paper wasps (narrow waist, folded wings, 4 wings)', 'Hoverflies (harmless 2-winged mimics whose larvae eat aphids)'],
      ur: ['کاٹنے والی عام بھڑ (پتلی کمر، 4 پر)', 'بے ضرر ہور فلائی (2 پر، لاروا تیلا کھاتا ہے)']
    }
  },
  {
    id: 'fg-spiders',
    library: 'A',
    category: 'beneficial',
    categoryEn: 'Beneficial Insect',
    categoryUr: 'فائدہ مند حشرہ',
    subRole: 'predator',
    subRoleEn: 'Field Arachnid Ally',
    subRoleUr: 'فصل کی محافظ مکڑی',
    nameEn: 'Field Spiders (Wolf & Orb-Weaver)',
    nameUr: 'کھیت کی مکڑیاں (ولف اور جالا بننے والی)',
    scientificName: 'Araneae',
    photo: './images/field-guide-beneficials.jpg',
    photoCrop: 'quad-bl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Rice Canopy Habitat)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: '8 legs and two body parts (not 6 legs like insects). Wolf spiders run across soil & rice bases; orb-weavers spin neat wheel webs between rice stems.',
      ur: '8 ٹانگیں اور جسم کے دو حصے (کیڑوں کی 6 ٹانگیں ہوتی ہیں)۔ ولف مکڑی زمین اور دھان کے تنے پر دوڑتی ہے جبکہ جالا مکڑی پودوں کے درمیان جالا بنتی ہے۔'
    },
    appearance: {
      en: 'Brown, grey, or green mottled bodies (4–15 mm), fast-moving across mulch and crop tillers.',
      ur: 'بھورے، سرمئی یا ہلکے سبز رنگ کی مکڑیاں (4–15 mm) جو ملچ اور پودوں کی جڑوں میں تیزی سے چلتی ہیں۔'
    },
    eats: {
      en: 'Planthoppers, leafhoppers, young moths, flies, and crawling caterpillars.',
      ur: 'چاول کا تیلہ، سست تیلا، چھوٹے پتنگے، مکھیاں اور رینگنے والی سنڈیاں کھاتی ہیں۔'
    },
    farmBenefit: {
      en: 'One of the earliest natural guards in rice and wheat fields—can eat several hoppers per spider daily.',
      ur: 'چاول اور گندم کے کھیتوں کی ابتدائی محافظ جو روزانہ کئی نقصان دہ تیلے اور پتنگے پکڑ لیتی ہیں۔'
    },
    habitat: {
      en: 'Under straw mulch, rice tiller bases above water, wheat stubble, and grassy field bunds.',
      ur: 'پرالی یا بھوسے کی ملچنگ کے نیچے، دھان کے شگوفوں پر اور گھاس والی مینڈھوں میں۔'
    },
    action: {
      en: 'PROTECT IT: Keep 3–5 cm Mulching and grass strips along bunds as spider shelter; avoid unnecessary early sprays that wipe out spiders before pests arrive.',
      ur: 'حفاظت کریں: کھیت میں 3–5 cm ملچنگ اور مینڈھوں پر گھاس رہنے دیں؛ ابتدائی غیر ضروری سپرے نہ کریں ورنہ مکڑیاں مر کر تیلے کا حملہ بڑھ جائے گا۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Do not mistake tiny red plant-feeding spider mites (under 0.5 mm, visible as dust/webbing damage) for beneficial 4–15 mm hunting spiders.',
      ur: 'شناخت کی احتیاط: بڑی شکاری مکڑیوں (4–15 mm) کو باریک نقصان دہ لال مائٹ (جو 0.5 mm سے بھی چھوٹی ہوتی ہے) نہ سمجھیں۔'
    },
    lookAlikes: {
      en: ['Red spider mites (< 0.5 mm sap-sucking pests)', 'Long-jawed orb weavers (slender green/brown spiders common in rice—helpful predators)'],
      ur: ['لال مائٹ (انتہائی باریک رس چوسنے والا کیڑا)', 'دھان کی لمبے جبڑوں والی مکڑی (یہ فائدہ مند شکاری ہے)']
    }
  },
  {
    id: 'fg-ground-beetle',
    library: 'A',
    category: 'beneficial',
    categoryEn: 'Beneficial Insect',
    categoryUr: 'فائدہ مند حشرہ',
    subRole: 'predator',
    subRoleEn: 'Soil Surface Hunter',
    subRoleUr: 'مٹی کی سطح کا شکاری بھونرا',
    nameEn: 'Ground Beetles & Rove Beetles',
    nameUr: 'زمینی اور روو بھونرے',
    scientificName: 'Carabidae',
    photo: './images/soil-healthy.jpg',
    photoCrop: 'full',
    creditEn: 'Local Archive · Regenerative Farming Hub Healthy Mulched Soil',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز (زندہ مٹی)',
    clues: {
      en: 'Fast-running shiny dark-black or metallic-brown flat beetles hiding under clods and straw mulch; active mainly at dusk and night.',
      ur: 'چمکدار سیاہ یا بھورے تیز دوڑنے والے چپٹے بھونرے جو بھوسے کی ملچنگ اور مٹی کے ڈھیلوں کے نیچے رہتے ہیں؛ شام اور رات کو زیادہ سرگرم ہوتے ہیں۔'
    },
    appearance: {
      en: 'Long sturdy running legs, prominent front jaws, hard grooved wing covers (1–2 cm).',
      ur: 'مضبوط لمبی ٹانگیں، آگے نمایاں جبڑے اور سخت لکیروں والے پر (1–2 cm)۔'
    },
    eats: {
      en: 'Soil-dwelling caterpillars (cutworms, armyworm pupae), slugs, and weed seeds.',
      ur: 'مٹی میں چھپی کترنے والی سنڈیاں، آرمی ورم کے کوئے (پیوپا) اور جڑی بوٹیوں کے بیج کھاتے ہیں۔'
    },
    farmBenefit: {
      en: 'Replaces lost soil predators when farmers switch from repeated ploughing & burning to Zero Tillage and straw Mulching.',
      ur: 'زیرو ٹلیج اور ملچنگ والے کھیتوں میں زمین پر رینگنے والی سنڈیوں اور جڑی بوٹیوں کے بیجوں کو قدرتی طور پر کم کرتے ہیں۔'
    },
    habitat: {
      en: 'Inside Zero-Till wheat straw cover, moist compost edges, and orchard basin mulch.',
      ur: 'زیرو ٹل گندم کی پرالی، کمپوسٹ ڈھیر کے کناروں اور باغات کی ملچ کے نیچے۔'
    },
    action: {
      en: 'PROTECT IT: Stop straw burning and cut unnecessary rotavator/deep plough passes so beetles survive under mulch.',
      ur: 'حفاظت کریں: پرالی جلانا بند کریں اور بے جا گہرا ہل کم کریں تاکہ یہ مفید بھونرے زندہ رہیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Several soil-surface darkling beetles also scavenge rotting straw harmlessly. Ground beetles move very fast when you lift mulch.',
      ur: 'شناخت کی احتیاط: ملچ اٹھانے پر تیز بھاگنے والے اکثر سیاہ بھونرے فائدہ مند یا گلی سڑی چیزیں کھانے والے ہوتے ہیں، فوری زہر نہ ڈالیں۔'
    },
    lookAlikes: {
      en: ['Cutworm moth larvae (C-shaped soft caterpillars that curl up—those are pests)', 'Scavenger darkling beetles (slower, harmless decomposers)'],
      ur: ['کٹروا سنڈی (نرم C شکل کی سنڈی جو گول مڑ جاتی ہے—وہ دشمن ہے)', 'نامیاتی مادہ توڑنے والے سست بھونرے (بے ضرر)']
    }
  },

  /* ------------------------------------------------------------------------
     LIBRARY B: HARMFUL INSECTS AND PESTS
     ------------------------------------------------------------------------ */
  {
    id: 'fg-stem-borer',
    library: 'B',
    category: 'harmful',
    categoryEn: 'Harmful Pest',
    categoryUr: 'نقصان دہ کیڑا',
    subRole: 'chewer-borer',
    subRoleEn: 'Rice Stem Borer',
    subRoleUr: 'تنا چھیدنے والی سنڈی',
    nameEn: 'Yellow / Rice Stem Borer',
    nameUr: 'چاول کی تنا چھیدنے والی سنڈی',
    scientificName: 'Scirpophaga incertulas',
    photo: './images/field-guide-pests.jpg',
    photoCrop: 'quad-tl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Stem Borer & Dead Heart)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Pale yellow-straw moth (female often has a tiny black dot on each front wing) resting on rice leaves; central shoot turns brown and pulls out easily ("dead heart").',
      ur: 'ہلکا پیلا یا بھوسے جیسا پتنگا (مادہ کے اگلے پروں پر عموماً ایک کالا نقطہ ہوتا ہے)؛ پودے کی درمیانی کونپل سوکھ جاتی ہے اور کھینچنے پر آسانی سے باہر نکل آتی ہے ("ڈیڈ ہارٹ")۔'
    },
    cropsAffected: {
      en: 'Basmati and other Rice (also related borers in Sugarcane).',
      ur: 'باسمتی اور دیگر چاول (نیز گنے میں اسی گروپ کی گڑواں سنڈیاں)۔'
    },
    symptoms: {
      en: 'Vegetative stage: central tiller wilts and dries ("Dead Heart"). Heading stage: panicles emerge empty and ghostly white ("White Head"). Tiny bore hole visible near stem base.',
      ur: 'بڑھوتری کے وقت مرکزی شگوفہ سوکھ جاتا ہے (ڈیڈ ہارٹ)۔ بالیاں نکلنے پر بالی خالی اور سفید کھڑی رہتی ہے (وائٹ ہیڈ) اور تنے کے نچلے حصے میں باریک سوراخ ملتا ہے۔'
    },
    lifeCycle: {
      en: 'Moth lays covered egg clusters on leaf tips → tiny cream/yellow caterpillar bores inside hollow stem → pupates near stem base (or survives in uncut tall stubble) → adult moth emerges.',
      ur: 'پتنگا پتوں پر انڈوں کا گچھا دیتا ہے ← باریک سنڈی تنے میں داخل ہو کر اندر سے کھاتی ہے ← پیوپا تنے کی جڑ کے قریب (یا کھڑے مڈھوں میں) رہتا ہے ← نیا پتنگا نکلتا ہے۔'
    },
    monitoring: {
      en: 'Scout twice weekly checking 10 plants per spot across different corners of the field; use pheromone or light traps to spot moth flights early.',
      ur: 'ہفتے میں دو بار کھیت کے مختلف کونوں میں 10 پودوں کا معائنہ کریں؛ پتنگوں کی آمد جلدی جانچنے کے لیے فیرومون یا لائٹ ٹریپ لگائیں۔'
    },
    action: {
      en: 'IPM (Do NOT spray merely for seeing one moth): 1) Avoid excess urea (soft sappy stems attract borers); 2) Protect dragonflies, spiders & Trichogramma wasps; 3) Tie Trichogramma chilonis cards; 4) Chop/incorporate stubble cleanly; 5) Consult Narowal Agriculture Extension before any threshold chemical action.',
      ur: 'آئی پی ایم (صرف ایک پتنگا دیکھ کر سپرے نہ کریں): 1) زیادہ یوریا سے بچیں؛ 2) ڈریگن فلائی اور مکڑیوں کی حفاظت کریں؛ 3) Trichogramma chilonis کارڈ باندھیں؛ 4) کٹائی کے بعد مڈھ جلائے بغیر کتر کر زمین میں ملائیں؛ 5) شدید حملے پر محکمہ زراعت نارووال سے مشورہ کریں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Dead hearts or white heads can also result from rat cuts, drought crack, or root rot—always split the stem carefully to check for feeding frass or larva inside, and confirm with Extension staff.',
      ur: 'شناخت کی احتیاط: پودا سوکھنا چوہوں کے کترنے یا جڑ کی بیماری سے بھی ہو سکتا ہے—تصدیق کے لیے تنا چیر کر اندر سنڈی یا برادہ دیکھیں اور زرعی ماہرین سے مشورہ کریں۔'
    },
    lookAlikes: {
      en: ['Rat damage (slanted 45° clean cut near base rather than borehole inside)', 'Whitehead rice borer vs. neck blast disease (blast leaves dark grey-brown lesion just below panicle)'],
      ur: ['چوہے کا نقصان (جڑ کے پاس سے ترچھا کٹاؤ)', 'بلاسٹ بیماری (بالی کے نیچے گہرا سرمئی بھورا داغ)']
    }
  },
  {
    id: 'fg-leaf-folder',
    library: 'B',
    category: 'harmful',
    categoryEn: 'Harmful Pest',
    categoryUr: 'نقصان دہ کیڑا',
    subRole: 'leaf-feeder',
    subRoleEn: 'Rice Leaf Caterpillar',
    subRoleUr: 'پتا لپیٹ سنڈی',
    nameEn: 'Rice Leaf Folder',
    nameUr: 'چاول کی پتا لپیٹ سنڈی',
    scientificName: 'Cnaphalocrocis medinalis',
    photo: './images/field-guide-pests.jpg',
    photoCrop: 'quad-tr',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Leaf Caterpillar & Whorl Damage)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Rice leaf edges stitched/folded into a long narrow tube; unrolling the leaf reveals a slender active green caterpillar and pale transparent white streaks where green tissue was scraped away.',
      ur: 'چاول کا پتا لمبائی کے رخ لپٹ کر نالی بن جاتا ہے؛ پتا کھولنے پر اندر ہری چست سنڈی اور کھرچا ہوا سفید شفاف داغ نظر آتا ہے۔'
    },
    cropsAffected: {
      en: 'Basmati and coarse Rice (especially lush, overly fertilized, shaded stands).',
      ur: 'باسمتی اور دیگر چاول (خاص طور پر جہاں یوریا زیادہ ڈالا گیا ہو یا سایہ ہو)۔'
    },
    symptoms: {
      en: 'White longitudinal papery streaks across folded leaves; scorched look across heavily infested patches.',
      ur: 'لپٹے ہوئے پتوں پر لمبی سفید کاغذ جیسی لکیریں؛ شدید حملے میں کھیت جھلسا ہوا سفید لگتا ہے۔'
    },
    lifeCycle: {
      en: 'Small golden-brown moth lays eggs near leaf midrib → slender pale-green larva folds leaf with silk and scrapes green chlorophyll → pupates inside fold → adult emerges.',
      ur: 'چھوٹا سنہری بھورا پتنگا پتوں پر انڈے دیتا ہے ← ہری سنڈی ریشم سے پتا لپیٹ کر سبز مادہ کھاتی ہے ← اندر ہی پیوپا بن کر پتنگا نکلتا ہے۔'
    },
    monitoring: {
      en: 'Scout 2× weekly (10 plants/spot). Note that healthy rice plants can tolerate minor early leaf folding without yield loss—check whether the flag leaf and panicle stage are actually threatened.',
      ur: 'ہفتے میں دو بار 10 پودوں کا معائنہ کریں۔ ابتدائی ہلکے حملے کو صحت مند چاول برداشت کر لیتا ہے، فلیگ لیف (آخری پتے) کے مرحلے پر خاص نظر رکھیں۔'
    },
    action: {
      en: 'IPM: Avoid excess nitrogen/urea; install wooden T-shaped bird perches so drongos & mynas pick larvae; pull a rope across paddy water gently only if advised locally; use neem (~1 kg/10 L) or Trichogramma early; never rush to spray.',
      ur: 'آئی پی ایم: زیادہ یوریا سے پرہیز کریں؛ پرندوں کے بیٹھنے کے لیے کھیت میں ڈنڈے (برڈ پرچ) لگائیں؛ ضرورت پر نیم کا سپرے یا ٹرائیکوگراما استعمال کریں۔ فوری زہر نہ چھڑکیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Dried white streaks can be confused with rice thrips or mechanical wind damage—always unroll 2–3 folded leaves to confirm live caterpillars before acting.',
      ur: 'شناخت کی احتیاط: پتوں پر سفیدی تھرپس یا تیز ہوا سے بھی آ سکتی ہے—تین چار لپٹے پتے کھول کر زندہ سنڈی ضرور دیکھیں۔'
    },
    lookAlikes: {
      en: ['Rice caseworm (cuts leaf tips into short floating cases on paddy water)', 'Rice hispa (scrapes white parallel lines without folding the whole leaf)'],
      ur: ['کیس ورم (پتے کاٹ کر پانی پر تیرتی نالیاں بناتا ہے)', 'رائس ہسپا (پتا لپیٹے بغیر سفید لکیریں کھاتا ہے)']
    }
  },
  {
    id: 'fg-rice-hoppers',
    library: 'B',
    category: 'harmful',
    categoryEn: 'Harmful Pest',
    categoryUr: 'نقصان دہ کیڑا',
    subRole: 'sap-sucker',
    subRoleEn: 'Rice Sap-Sucking Pest',
    subRoleUr: 'چاول کا رس چوسنے والا کیڑا',
    nameEn: 'Rice Planthoppers & Leafhoppers',
    nameUr: 'چاول کا بھورا/سفید پشت تیلہ (ہاپر)',
    scientificName: 'Delphacidae / Cicadellidae',
    photo: './images/field-guide-pests.jpg',
    photoCrop: 'quad-tl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Rice Stem Habitat)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Tiny brown, white-backed, or green wedge-shaped hoppers hiding right at the base of dense rice tillers near the waterline; jump sideways when tapped.',
      ur: 'چاول کے گنجان پودوں کی جڑ کے قریب پانی کی سطح کے پاس چھوٹے بھورے یا سبز کیڑے جو ہاتھ لگانے پر فوراً تِرچھا چھلانگ لگاتے ہیں۔'
    },
    cropsAffected: {
      en: 'Basmati and coarse Rice.',
      ur: 'باسمتی اور دیگر چاول۔'
    },
    symptoms: {
      en: 'Plants yellow from bottom upward and suddenly dry out in circular brown patches called "hopperburn". Often worsens AFTER unnecessary early chemical sprays kill spiders!',
      ur: 'پودے نیچے سے پیلے ہو کر گول دائرے میں سوکھ جاتے ہیں ("ہاپر برن")۔ یہ حملہ اکثر اس وقت بھڑکتا ہے جب ابتدائی زہر مکڑیاں مار دیتے ہیں!'
    },
    lifeCycle: {
      en: 'Eggs inserted in leaf sheath → tiny wingless nymphs suck sap at stem base → winged or short-winged adults multiply quickly in humid overgrown stands.',
      ur: 'پتوں کے غلاف میں انڈے ← بغیر پروں کے بچے جڑ کے قریب رس چوستے ہیں ← نم اور گھنی فصل میں تیزی سے بڑھتے ہیں۔'
    },
    monitoring: {
      en: 'Part the rice tillers and tap stems gently above water or a white plate (10 hills/spot); count both hoppers AND spiders/ladybirds.',
      ur: 'چاول کے شگوفے ہٹا کر پانی یا سفید پلیٹ کے اوپر ہلکا سا جھٹکیں (10 جگہوں پر) اور ہاپر کے ساتھ مکڑیوں کی تعداد بھی گنیں۔'
    },
    action: {
      en: 'IPM: Practice 15 cm AWD (reduces humidity at stem base); avoid excess urea and dense overcrowding; protect spiders & dragonflies; drain standing water for 2–3 days if non-flowering; consult Extension Office for threshold action.',
      ur: 'آئی پی ایم: 15 cm اے ڈبلیو ڈی سے کھیت میں اضافی نمی کم رکھیں؛ زیادہ یوریا سے بچیں؛ مکڑیوں اور ڈریگن فلائی کو بچائیں؛ سنگین حملے پر محکمہ زراعت سے مشورہ لیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Hopperburn circles resemble salinity, zinc deficiency, or water stress. Confirm live jumping insects at the stem base and verify with Narowal Extension staff.',
      ur: 'شناخت کی احتیاط: پودوں کا سوکھنا کلر یا زنک کی کمی سے بھی ہو سکتا ہے—جڑ کے قریب چھلانگ لگانے والے کیڑے خود چیک کریں اور تصدیق کرائیں۔'
    },
    lookAlikes: {
      en: ['Zinc deficiency or salinity yellowing (no jumping hoppers at tiller base)', 'Beneficial spiders hiding at stem base (8 legs, eat hoppers!)'],
      ur: ['زنک کی کمی یا کلر (کیڑے موجود نہیں ہوتے)', 'دوست مکڑیاں (8 ٹانگیں، تیلہ کھاتی ہیں)']
    }
  },
  {
    id: 'fg-fall-armyworm',
    library: 'B',
    category: 'harmful',
    categoryEn: 'Harmful Pest',
    categoryUr: 'نقصان دہ کیڑا',
    subRole: 'chewer-borer',
    subRoleEn: 'Maize & Fodder Whorl Pest',
    subRoleUr: 'مکئی کی کونپل کھانے والی سنڈی',
    nameEn: 'Fall Armyworm',
    nameUr: 'فال آرمی ورم (مکئی کی فوجی سنڈی)',
    scientificName: 'Spodoptera frugiperda',
    photo: './images/field-guide-pests.jpg',
    photoCrop: 'quad-tr',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Spodoptera frugiperda in Maize)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Greenish-brown striped caterpillar hiding deep inside maize whorls surrounded by wet sawdust-like frass; inverted pale "Y" on head and four dark spots arranged in a square on the rear end.',
      ur: 'سبز یا بھوری دھاری دار سنڈی جو مکئی کی درمیانی کونپل کے اندر گیلے برادے کے ساتھ چھپی رہتی ہے؛ سر پر الٹا سفید "Y" نشان اور پچھلے حصے پر مربع کی شکل میں چار سیاہ نقطے ہوتے ہیں۔'
    },
    cropsAffected: {
      en: 'Maize (primary host), sometimes Sorghum, Millet, and Sugarcane.',
      ur: 'مکئی (سب سے زیادہ)، بعض اوقات جوار، باجرہ اور گنا۔'
    },
    symptoms: {
      en: 'Early stage: tiny "windowpane" scraped patches on young leaves. Later: ragged holes in unfolding whorl leaves and moist yellowish-brown frass plugs.',
      ur: 'ابتدا میں پتوں پر باریک کھڑکی جیسے داغ؛ بعد میں نکلنے والی کونپل میں بڑے کٹے سوراخ اور گیلا بھورا برادہ بھرا ہوتا ہے۔'
    },
    lifeCycle: {
      en: 'Night-flying moth lays fuzzy egg batches on leaves → young caterpillars scatter by silk threads into whorls → pupates in soil → moth emerges in warm weather.',
      ur: 'رات کو اڑنے والا پتنگا پتوں پر روئیں دار انڈے دیتا ہے ← سنڈیاں مکئی کی کونپل میں گھس کر کھاتی ہیں ← مٹی میں پیوپا بنتا ہے۔'
    },
    monitoring: {
      en: 'Scout young maize TWICE weekly checking 10 plants/spot; look into fresh whorls for pinhole "windowpanes" and set up Fall Armyworm pheromone traps.',
      ur: 'ننھی مکئی میں ہفتے میں دو بار 10 پودوں کی کونپل کھول کر دیکھیں اور فیرومون ٹریپ لگائیں۔'
    },
    action: {
      en: 'IPM: Intercrop maize with cowpea or beans to shelter predators; keep bird perches; catch young larvae early with Bacillus thuringiensis (Bt) or homemade neem extract (~1 kg/10 L) directed into the whorl; consult Narowal Agriculture Extension for confirmed outbreaks.',
      ur: 'آئی پی ایم: مکئی میں لوبیا یا دال ملا کر بوئیں؛ پرندوں کے ڈنڈے لگائیں؛ چھوٹی سنڈی پر Bacillus thuringiensis (Bt) یا نیم کا عرق کونپل میں دیں؛ شدید حملے پر محکمہ زراعت سے رجوع کریں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Several armyworms and stem borers look similar when young. Check for the inverted "Y" on the head capsule and four square rear dots—confirm with Extension staff if unsure.',
      ur: 'شناخت کی احتیاط: ابتدائی عمر میں کئی سنڈیاں ملتی جلتی ہوتی ہیں—سر پر الٹا Y اور دم پر 4 نقطے چیک کریں یا ماہرین سے تصدیق کرائیں۔'
    },
    lookAlikes: {
      en: ['Maize stem borer (Chilo partellus—creamy with dark spots, bores stem rather than chewing outer ragged whorl holes)', 'Cotton/American bollworm (Helicoverpa—no clean square of 4 dots on rear)'],
      ur: ['مکئی کی گڑواں سنڈی (کریم رنگ، سیدھا تنا کھاتی ہے)', 'امریکن سنڈی (پیچھے 4 نقطوں کا چوکور نہیں ہوتا)']
    }
  },
  {
    id: 'fg-aphids',
    library: 'B',
    category: 'harmful',
    categoryEn: 'Harmful Pest',
    categoryUr: 'نقصان دہ کیڑا',
    subRole: 'sap-sucker',
    subRoleEn: 'Sap-Sucking Colony Pest',
    subRoleUr: 'رس چوسنے والا تیلا',
    nameEn: 'Aphids (Mustard & Wheat Tela)',
    nameUr: 'تیلا / سست تیلا (سرسوں اور گندم)',
    scientificName: 'Aphididae',
    photo: './images/field-guide-pests.jpg',
    photoCrop: 'quad-bl',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Aphid Colony)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Soft, tiny pear-shaped green, yellow, or black slow-moving insects packed tightly on tender shoots, flower stalks, and leaf undersides; sticky honeydew glistens below.',
      ur: 'نرم، باریک ناشپاتی نما سبز، پیلے یا کالے سست کیڑے جو نرم شاخوں، سرسوں کے پھولوں اور پتوں کے نیچے گچھوں میں بیٹھتے ہیں؛ نیچے چپچپا میٹھا مواد گرتا ہے۔'
    },
    cropsAffected: {
      en: 'Mustard, Canola, Wheat (winter/spring heads), Berseem, and Vegetables.',
      ur: 'سرسوں، کینولا، گندم (بہار کے سٹے)، برسیم اور سبزیاں۔'
    },
    symptoms: {
      en: 'Curled deformed young leaves, sticky shiny honeydew followed by black sooty mold, stunted pods or shrivelled grain when dense.',
      ur: 'نئے پتے مڑ جاتے ہیں، پتوں پر چپچپی لیس اور کالی پھپھوندی لگتی ہے، پھلیاں اور دانے کمزور رہ جاتے ہیں۔'
    },
    lifeCycle: {
      en: 'Females reproduce rapidly without mating in cool/cloudy spring weather; winged forms appear when colonies crowd and drift to nearby fields.',
      ur: 'ٹھنڈے اور ابر آلود موسم میں تیزی سے بچے پیدا کرتے ہیں؛ آبادی بڑھنے پر پر دار تیلا اڑ کر دوسرے کھیتوں میں جاتا ہے۔'
    },
    monitoring: {
      en: 'Scout edges first (aphids often arrive on field borders). Count ladybirds, lacewing larvae, and golden-brown parasitized aphid "mummies" before deciding anything.',
      ur: 'پہلے کھیت کے کناروں پر دیکھیں۔ کوئی فیصلہ کرنے سے پہلے لیڈی برڈ، لیس ونگ اور بھورے پھولے ہوئے ممی تیلے گنیں۔'
    },
    action: {
      en: 'IPM (Do NOT spray merely because a few aphids appear): 1) Timely sowing keeps wheat past soft stage before spring warmth; 2) Beneficial predators clear mild colonies for free; 3) Try neem + mild soap water spray in calm evening ONLY on hot-spot edges—never spray bees on flowering mustard; 4) Consult Narowal Extension for threshold decisions.',
      ur: 'آئی پی ایم (تھوڑا تیلا دیکھ کر فوراً سپرے نہ کریں): 1) گندم کی بروقت بوائی کریں؛ 2) لیڈی برڈ اور لیس ونگ ہلکا حملہ مفت صاف کر دیتے ہیں؛ 3) صرف کناروں پر شدید گچھے ہوں تو شام کو نیم کا سپرے کریں—پھولوں پر مکھیوں کے وقت سپرے ہرگز نہ کریں؛ 4) محکمہ زراعت سے مشورہ لیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Puffed, tan, immobile aphids in a colony are already dead ("mummies" parasitized by helpful wasps!)—never spray a colony full of mummies.',
      ur: 'شناخت کی احتیاط: اگر تیلے میں پھولے ہوئے بھورے دانے نظر آئیں تو یہ دوست بھڑ کے شکار ہو چکے ہیں—ان پر سپرے ہرگز نہ کریں!'
    },
    lookAlikes: {
      en: ['Parasitized aphid mummies (swollen tan spheres—signs of natural wasp control)', 'Tiny nymph whiteflies or thrips (flatter, not pear-shaped with two rear tubes)'],
      ur: ['طفیلی بھڑ کے شکار بھورے پھولے تیلے (یہ دوست بھڑ کی موجودگی کی علامت ہیں)', 'سفید مکھی کے بچے یا تھرپس (زیادہ چپٹے)']
    }
  },
  {
    id: 'fg-whiteflies',
    library: 'B',
    category: 'harmful',
    categoryEn: 'Harmful Pest',
    categoryUr: 'نقصان دہ کیڑا',
    subRole: 'sap-sucker',
    subRoleEn: 'Sap-Sucker & Virus Vector',
    subRoleUr: 'سفید مکھی (وائرس پھیلانے والی)',
    nameEn: 'Whitefly',
    nameUr: 'سفید مکھی',
    scientificName: 'Bemisia tabaci',
    photo: './images/field-guide-pests.jpg',
    photoCrop: 'quad-br',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Whiteflies on Leaf)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Tiny chalk-white moth-like flies (1–2 mm) resting underneath leaves that flutter up like a tiny white cloud when you brush the plant.',
      ur: '1–2 mm کی انتہائی چھوٹی چاک جیسی سفید مکھیاں جو پتوں کی نچلی سطح پر بیٹھتی ہیں اور پودا ہلانے پر چھوٹے سفید بادل کی طرح اڑتی ہیں۔'
    },
    cropsAffected: {
      en: 'Vegetables (okra, tomato, brinjal, chillies), Mung bean, Mash bean, Cowpea, and Citrus.',
      ur: 'سبزیاں (بھنڈی، ٹماٹر، بینگن، مرچ)، مونگ، ماش، لوبیا اور کینو۔'
    },
    symptoms: {
      en: 'Yellowing, leaf curl / mosaic viral diseases, sticky honeydew and black mold coating lower leaves.',
      ur: 'پتے پیلے پڑنا، پتا مروڑ وائرس پھیلنا، نیچے کے پتوں پر چپچپی لیس اور کالی پھپھوندی جم جانا۔'
    },
    lifeCycle: {
      en: 'Minute eggs laid under leaves → flat oval scale-like nymphs stay attached and suck sap → pupal stage → white winged adult.',
      ur: 'پتوں کے نیچے باریک انڈے ← چپٹے بچے پتے سے چپک کر رس چوستے ہیں ← سفید پروں والی مکھی بنتی ہے۔'
    },
    monitoring: {
      en: 'Check undersides of 10 leaves/spot twice weekly; hang Yellow Sticky Traps at crop height to monitor and catch adults early.',
      ur: 'ہفتے میں دو بار 10 پتوں کی نچلی سطح دیکھیں؛ فصل کی اونچائی پر زرد چپکنے والے کارڈ (Yellow Sticky Traps) لگائیں۔'
    },
    action: {
      en: 'IPM: Hang yellow sticky cards; remove weed reservoirs along bunds; protect ladybirds & green lacewings; apply neem extract early if rising; remove severely virus-curled plants; confirm any spray choice with Punjab Agriculture Extension.',
      ur: 'آئی پی ایم: زرد چپکنے والے کارڈ لگائیں؛ مینڈھوں سے میزبان جڑی بوٹیاں صاف رکھیں؛ لیڈی برڈ و لیس ونگ بچائیں؛ وائرس سے شدید مڑے پودے نکال دیں؛ سپرے کے لیے محکمہ زراعت سے تصدیق لیں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Whiteflies are tiny (1–2 mm) and can be confused with leafhopper cast skins or powdery mildew flecks in blurry photos—shake the leaf gently to see if adults fly, and verify locally.',
      ur: 'شناخت کی احتیاط: دھندلی تصویر میں سفید مکھی سفید پھپھوندی یا کینچلی جیسی لگ سکتی ہے—پتا ہلا کر اڑتی مکھی چیک کریں اور ماہرین سے تصدیق کرائیں۔'
    },
    lookAlikes: {
      en: ['Powdery mildew dust (chalky fungus spots that do NOT fly when touched)', 'White leafhopper cast skins (empty husks stuck on leaves)'],
      ur: ['سفید پھپھوندی (ہلانے پر نہیں اڑتی)', 'سست تیلے کی اتری ہوئی سفید کینچلی']
    }
  },
  {
    id: 'fg-pod-borer',
    library: 'B',
    category: 'harmful',
    categoryEn: 'Harmful Pest',
    categoryUr: 'نقصان دہ کیڑا',
    subRole: 'chewer-borer',
    subRoleEn: 'Pulse & Vegetable Fruit Borer',
    subRoleUr: 'پھلی اور پھل چھیدنے والی سنڈی',
    nameEn: 'Pod Borer & Chickpea/Vegetable Caterpillars',
    nameUr: 'پھلی / ٹینڈے کی سنڈی (چنا، مونگ، سبزیاں)',
    scientificName: 'Helicoverpa armigera',
    photo: './images/field-guide-pests.jpg',
    photoCrop: 'quad-tr',
    creditEn: 'Local Archive · Regenerative Farming Hub Field Plate (Caterpillar Example)',
    creditUr: 'مقامی ذخیرہ · احیائی کاشتکاری تعلیمی مرکز فیلڈ پلیٹ',
    clues: {
      en: 'Stout green, brown, or pinkish striped caterpillar feeding with its front half buried inside a chickpea, mung, or tomato pod while its rear half sticks outside.',
      ur: 'موٹی سبز، بھوری یا گلابی دھاری دار سنڈی جو اپنا آدھا اگلا جسم چنے، مونگ کی پھلی یا ٹماٹر کے اندر گھسا کر کھاتی ہے اور پچھلا حصہ باہر رہتا ہے۔'
    },
    cropsAffected: {
      en: 'Chickpea, Lentil, Mung Bean, Mash Bean, Tomato, and Okra.',
      ur: 'چنا، مسور، مونگ، ماش، ٹماٹر اور بھنڈی۔'
    },
    symptoms: {
      en: 'Clean round holes bored into green pods or fruits; chewed flower buds and hollowed seeds.',
      ur: 'ہری پھلیوں یا پھل میں گول سوراخ، پھولوں کی کلیاں کٹی ہوئی اور اندر کے دانے غائب۔'
    },
    lifeCycle: {
      en: 'Stout tan moth lays single pearly eggs on buds/flowers → caterpillars bore pods across instars → pupates in soil → moth emerges.',
      ur: 'موٹا بھورا پتنگا کلیوں پر ایک ایک انڈا دیتا ہے ← سنڈی پھلیوں میں سوراخ کر کے کھاتی ہے ← مٹی میں پیوپا بنتا ہے۔'
    },
    monitoring: {
      en: 'Scout bud and pod-formation stages 2× weekly (10 plants/spot); use pheromone traps and T-perches for drongos & mynas.',
      ur: 'پھول اور پھلی بننے کے وقت ہفتے میں دو بار 10 پودے چیک کریں؛ فیرومون ٹریپ اور پرندوں کے ڈنڈے لگائیں۔'
    },
    action: {
      en: 'IPM: Plant marigold trap rows around tomato/vegetables; install T-perches so birds eat caterpillars; apply neem or Bacillus thuringiensis (Bt) ONLY against young small larvae before they enter pods; consult Narowal Extension for threshold action.',
      ur: 'آئی پی ایم: ٹماٹر و سبزیوں کے گرد گیندے کی قطار لگائیں؛ پرندوں کے ڈنڈے لگائیں؛ چھوٹی سنڈی پھلی میں گھسنے سے پہلے Bt یا نیم استعمال کریں؛ شدید حملے پر محکمہ زراعت سے مشورہ کریں۔'
    },
    confidenceNote: {
      en: 'Photo confidence note: Colour varies from pale green to dark brown depending on what the caterpillar eats. Verify serious pod-boring attacks with Punjab Agriculture Extension staff.',
      ur: 'شناخت کی احتیاط: خوراک کے مطابق اس سنڈی کا رنگ ہرے سے بھورا بدل سکتا ہے—سنگین حملے کی تصدیق زرعی دفتر سے کروائیں۔'
    },
    lookAlikes: {
      en: ['Spodoptera / armyworm caterpillars', 'Plume moth / blue butterfly pod larvae (smaller flattened slug-like green larvae on pulses)'],
      ur: ['فوجی سنڈی', 'دالوں کی چھوٹی پھلی سنڈی']
    }
  }
];
