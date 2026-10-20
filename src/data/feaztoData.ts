import type { FoodItem, KitchenStory, FAQItem } from '../types';

export const REGIONAL_FOODS: FoodItem[] = [
  // --- Top Layer Varieties (10 Distinct Dishes) ---
  {
    id: 'biryani-hyderabadi',
    name: 'Dum Biryani with Mirchi ka Salan',
    region: 'Deccani Heritage',
    originState: 'Telangana',
    category: 'Curry & Rice',
    description: 'Slow-cooked in dough-sealed handis with fragrant seeraga samba & long-grain rice, whole spices, and caramelized shallots.',
    storyNote: 'Passed down through 3 generations of slow-fire dum specialists.',
    tags: ['Dum Cooked', 'Slow Food', 'Aromatic Spices'],
    prepTime: '45 min',
    calories: '580 kcal',
    protein: '24g protein',
    image: '/brand/plate-biryani-new.png'
  },
  {
    id: 'thali-traditional',
    name: 'Sattvic Maharashtrian & South Thali',
    region: 'Western & Southern Ghats',
    originState: 'Maharashtra / Tamil Nadu',
    category: 'Curry & Rice',
    description: 'An elemental platter balancing six tastes (shadrasa): kootu, rasam, freshly pressed ghee, warm puran poli, and seasonal greens.',
    storyNote: 'Cooked strictly with cold-pressed oils, mortar-pestle ground masalas, and zero artificial coloring.',
    tags: ['Six Tastes', 'Zero Preservatives', 'Heritage Grains'],
    prepTime: '30 min',
    calories: '520 kcal',
    protein: '18g protein',
    image: '/brand/plate-thali-new.png'
  },
  {
    id: 'idli-vada-combo',
    name: 'Malli Poo Idli & Medu Vada',
    region: 'Kongu Nadu & Thanjavur',
    originState: 'Tamil Nadu',
    category: 'Breakfast',
    description: 'Stone-ground fermented black gram batter steamed into jasmine-soft idlis, paired with freshly ground coconut-chutney and drumstick sambar.',
    storyNote: 'Fermented naturally for 14 hours using stone-grinders to preserve probiotic cultures.',
    tags: ['Naturally Fermented', 'Stone Ground', 'Steamed'],
    prepTime: '20 min',
    calories: '340 kcal',
    protein: '14g protein',
    image: '/brand/plate-idli-new.png'
  },
  {
    id: 'samosa-potli',
    name: 'Spiced Potato & Pea Potli Samosa',
    region: 'Awadhi & Old Delhi',
    originState: 'Uttar Pradesh',
    category: 'Snacks & Sweets',
    description: 'Flaky ajwain pastry stuffed with roasted cumin, hing-tempered potatoes, garden peas, and sweet tamarind-saunth chutney.',
    storyNote: 'Crisped in pure groundnut oil at controlled low temperature for prolonged crispness.',
    tags: ['Hand Rolled', 'Fresh Tamarind', 'Evening Tradition'],
    prepTime: '25 min',
    calories: '390 kcal',
    protein: '9g protein',
    image: '/brand/plate-samosa-new.png'
  },
  {
    id: 'chettinad-kozhi',
    name: 'Chettinad Pepper Kozhi Curry',
    region: 'Karaikudi & Chettinad',
    originState: 'Tamil Nadu',
    category: 'Curry & Rice',
    description: 'Country chicken simmered in freshly roasted Kalpasi stone flower, star anise, Guntur chillies, and hand-ground Tellicherry peppercorns.',
    storyNote: 'Stone-ground masalas prepared in heavy stone aattukallu for depth of aroma.',
    tags: ['Stone Flower', 'Sun Dried Masala', 'Ancestral'],
    prepTime: '40 min',
    calories: '510 kcal',
    protein: '28g protein',
    image: '/brand/plate-chettinad-curry.png'
  },
  {
    id: 'amritsari-chole-kulche',
    name: 'Pindi Chole & Charred Kulcha',
    region: 'Majha Heritage',
    originState: 'Punjab',
    category: 'Breakfast',
    description: 'Tea-leaf infused kabuli chana simmered in cast iron with anardana, amchur, and carom seeds, served with soft clay-tandoor kulche.',
    storyNote: 'Slow-simmered overnight in black iron kadhais for authentic dark spice glaze.',
    tags: ['Iron Kadai', 'Anardana', 'Tandoor Fired'],
    prepTime: '35 min',
    calories: '560 kcal',
    protein: '19g protein',
    image: '/brand/plate-pindi-chole.png'
  },
  {
    id: 'malabar-fish-curry',
    name: 'Malabar Kudampuli Meen Curry',
    region: 'Malabar Coast',
    originState: 'Kerala',
    category: 'Curry & Rice',
    description: 'Fresh catch poached in clay meen chatti with smoked Malabar tamarind, coconut milk, curry leaves, and mustard seeds.',
    storyNote: 'Cured clay pot cooking preserves delicate coastal omega oils and smokiness.',
    tags: ['Kudampuli', 'Clay Pot', 'Cold Pressed Coconut'],
    prepTime: '30 min',
    calories: '440 kcal',
    protein: '26g protein',
    image: '/brand/plate-malabar-fish.png'
  },
  {
    id: 'litti-chokha-bihar',
    name: 'Desi Ghee Litti with Baingan Chokha',
    region: 'Bhojpur & Magadh',
    originState: 'Bihar',
    category: 'Bread & Gravy',
    description: 'Whole wheat dough rounds stuffed with spiced sattu and kalonji, roasted over cow dung embers and dipped in molten A2 cow ghee.',
    storyNote: 'Smoked over open embers using century-old agrarian harvest traditions.',
    tags: ['Sattu Stuffed', 'Ember Roasted', 'A2 Desi Ghee'],
    prepTime: '30 min',
    calories: '480 kcal',
    protein: '16g protein',
    image: '/brand/plate-litti-chokha.png'
  },
  {
    id: 'daal-baati-churma',
    name: 'Rajasthani Daal Baati Churma',
    region: 'Marwar Heritage',
    originState: 'Rajasthan',
    category: 'Bread & Gravy',
    description: 'Five-lentil panchmel dal slow-cooked with asafoetida, served alongside golden baked baatis and fragrant jaggery-cardamom churma.',
    storyNote: 'Baked in traditional clay ovens and soaked in pure Bikaneri cow ghee.',
    tags: ['Panchmel Dal', 'Clay Baked', 'Jaggery Churma'],
    prepTime: '45 min',
    calories: '610 kcal',
    protein: '21g protein',
    image: '/brand/plate-daal-baati.png'
  },
  {
    id: 'kashmiri-rogan-josh',
    name: 'Wazwan Mutton Rogan Josh',
    region: 'Kashmir Valley',
    originState: 'Jammu & Kashmir',
    category: 'Curry & Rice',
    description: 'Tender cuts slow-braised with Kashmiri cockscomb flower (maval), sun-dried ginger (saunth), fennel, and mild aromatic red chillies.',
    storyNote: 'Prepared without onions or garlic, relying on pure yogurt and saffron infusions.',
    tags: ['Wazwan Heritage', 'Kashmiri Chillies', 'Maval Extract'],
    prepTime: '50 min',
    calories: '590 kcal',
    protein: '31g protein',
    image: '/brand/plate-biryani-new.png'
  },

  // --- Bottom Layer Varieties (10 Distinct Dishes) ---
  {
    id: 'benne-dosa-davangere',
    name: 'Davangere Crispy Butter Benne Dosa',
    region: 'Central Karnataka',
    originState: 'Karnataka',
    category: 'Breakfast',
    description: 'Golden fermented rice batter roasted on cast-iron tava with generous white farm butter, paired with spicy potato palya and coconut relish.',
    storyNote: 'Roasted over firewood stoves to develop a honeycomb crust and soft interior.',
    tags: ['White Butter', 'Firewood Roasted', 'Cast Iron'],
    prepTime: '15 min',
    calories: '420 kcal',
    protein: '11g protein',
    image: '/dish-ghee-dosa.jpg'
  },
  {
    id: 'kolhapuri-tambda-pandhra',
    name: 'Kolhapuri Tambda & Pandhra Rassa',
    region: 'Deccan Plateau',
    originState: 'Maharashtra',
    category: 'Curry & Rice',
    description: 'Two legendary slow-boiled broths: a fiery red mutton broth infused with Lavangi chillies and a silky white coconut-almond soothing broth.',
    storyNote: 'Crafted with homemade Kolhapuri kanda-lasun masala roasted on cast iron.',
    tags: ['Lavangi Chilly', 'Dual Broth', 'Ancient Maratha'],
    prepTime: '40 min',
    calories: '530 kcal',
    protein: '27g protein',
    image: '/dish-capsule-curry.jpg'
  },
  {
    id: 'dhokla-khandvi-gujarat',
    name: 'Surati Khaman Dhokla & Khandvi',
    region: 'Kathiawar & Surat',
    originState: 'Gujarat',
    category: 'Snacks & Sweets',
    description: 'Steamed gram-flour savoury sponges tempered with curry leaves, mustard seeds, green chillies, and freshly grated coconut.',
    storyNote: 'Naturally fermented chana dal batter steamed in traditional multi-tier brass vessels.',
    tags: ['Steamed Savory', 'Cold Mustard Temper', 'Probiotic'],
    prepTime: '20 min',
    calories: '280 kcal',
    protein: '12g protein',
    image: '/brand/plate-idli.png'
  },
  {
    id: 'lucchi-kosha-mangsho',
    name: 'Kolkata Lucchi with Kosha Mangsho',
    region: 'Bengal Delta',
    originState: 'West Bengal',
    category: 'Bread & Gravy',
    description: 'Velvety mutton slow-cooked in its own juices with mustard oil, caramelized onions, and whole garam masala, served with puffed maida puris.',
    storyNote: 'Cooked in heavy copper handis for over two hours until the gravy turns rich mahogany.',
    tags: ['Slow Koshano', 'Cold Mustard Oil', 'Festive Puffed Puri'],
    prepTime: '55 min',
    calories: '640 kcal',
    protein: '29g protein',
    image: '/brand/plate-biryani.png'
  },
  {
    id: 'goan-prawn-balchao',
    name: 'Goan Prawn Curry with Toddy Vinegar',
    region: 'Konkan Coastline',
    originState: 'Goa',
    category: 'Curry & Rice',
    description: 'Juicy coastal prawns simmered in freshly extracted coconut milk, Kashmiri chillies, coriander seeds, and local fermented coconut vinegar.',
    storyNote: 'Blended with stone-ground recheado paste and simmered in terracotta chatti.',
    tags: ['Toddy Vinegar', 'Coastal Prawns', 'Terracotta Vessel'],
    prepTime: '30 min',
    calories: '460 kcal',
    protein: '25g protein',
    image: '/dish-coastal-curry.jpg'
  },
  {
    id: 'hyderabadi-haleem',
    name: 'Slow-Stewed Nizami Mutton Haleem',
    region: 'Deccani Nizam Heritage',
    originState: 'Telangana',
    category: 'Curry & Rice',
    description: 'Broken wheat, barley, tender mutton, and lentils pounded for 8 hours with pure ghee, rose petals, and whole warming spices.',
    storyNote: 'Hand-pounded with heavy wooden oars in large copper deghs for silky texture.',
    tags: ['8-Hour Pounding', 'Pure Ghee Stew', 'Nizami Royal'],
    prepTime: '60 min',
    calories: '620 kcal',
    protein: '34g protein',
    image: '/brand/plate-biryani-new.png'
  },
  {
    id: 'appam-stew-kerala',
    name: 'Fermented Palappam & Veg Ishtu',
    region: 'Central Travancore',
    originState: 'Kerala',
    category: 'Breakfast',
    description: 'Crispy lacy-edged coconut rice pancakes with soft spongy centres, paired with mild vegetable stew simmered in thick coconut cream.',
    storyNote: 'Fermented with fresh coconut toddy water overnight for natural leavening.',
    tags: ['Lacy Edge', 'Coconut Cream Stew', 'Natural Leaven'],
    prepTime: '20 min',
    calories: '310 kcal',
    protein: '8g protein',
    image: '/brand/plate-idli-new.png'
  },
  {
    id: 'gongura-pappu-charu',
    name: 'Andhra Gongura Mamsam & Pappu',
    region: 'Rayalaseema & Guntur',
    originState: 'Andhra Pradesh',
    category: 'Curry & Rice',
    description: 'Sour red sorrel leaves stone-ground with fiery Guntur teja chillies, garlic, and cumin, served over piping hot steamed sona masoori rice.',
    storyNote: 'Sorrel leaves harvested from non-irrigated black soil for intense natural tartness.',
    tags: ['Red Sorrel', 'Guntur Teja Chilly', 'Black Soil Harvest'],
    prepTime: '35 min',
    calories: '490 kcal',
    protein: '22g protein',
    image: '/dish-capsule-curry.jpg'
  },
  {
    id: 'kheema-ghotala-irani',
    name: 'Irani Cafe Mutton Kheema Pav',
    region: 'Old Bombay Irani Heritage',
    originState: 'Maharashtra',
    category: 'Snacks & Sweets',
    description: 'Minced spiced meat simmered with green peas, mint, and fresh cilantro, topped with a runny fried egg and toasted ladi pav.',
    storyNote: 'Legacy recipe stewed since 1953 in century-old Irani bakeries.',
    tags: ['Irani Heritage', 'Buttered Ladi Pav', 'Sunnyside Egg'],
    prepTime: '25 min',
    calories: '520 kcal',
    protein: '26g protein',
    image: '/brand/plate-samosa-new.png'
  },
  {
    id: 'payasam-palada-kerala',
    name: 'Ambalapuzha Palada Pradhaman',
    region: 'Travancore Heritage',
    originState: 'Kerala',
    category: 'Snacks & Sweets',
    description: 'Delicate rice crisps (ada) slow-reduced in concentrated whole milk, sweetened with pure jaggery and cardamom, topped with roasted cashews.',
    storyNote: 'Simmered in giant heavy bronze urulis for 4 hours until the milk turns pink.',
    tags: ['Bronze Uruli', 'Slow Milk Reduction', 'Temple Style'],
    prepTime: '40 min',
    calories: '360 kcal',
    protein: '9g protein',
    image: '/brand/plate-thali-new.png'
  }
];

export const KITCHEN_STORIES: KitchenStory[] = [
  {
    id: 'kitchen-padma',
    title: 'Padma Amma’s Clay Pot Kitchen',
    cookName: 'Padmavathi Rao',
    regionSpecialty: 'Coastal Andhra & Rayalaseema',
    experienceYears: 28,
    locationArea: 'BTM Layout, Bengaluru',
    signatureDish: 'Gongura Mamsam & Pappu Charu',
    quote: 'Cooking for others is not a business transaction; it is placing your heart on a banana leaf.',
    story: 'For almost three decades, Padmavathi prepared recipes taught by her grandmother in rural Guntur. Through FEAzTO’s cloud kitchen ecosystem, her authentic spice blends now feed homes across the city without compromising the slow hand-grinding process.'
  },
  {
    id: 'kitchen-farida',
    title: 'Dastarkhwan by Farida Begum',
    cookName: 'Farida Begum',
    regionSpecialty: 'Old Delhi & Rampuri Heritage',
    experienceYears: 22,
    locationArea: 'Frazer Town, Bengaluru',
    signatureDish: 'Awadhi Yakhni Pulao & Shahi Tukda',
    quote: 'True aroma cannot be manufactured by speed. It needs patience, whole spices, and genuine intentions.',
    story: 'Farida Begum brought century-old family heirloom spice ratios to Bengaluru. In FEAzTO, she found a tech-enabled partner that respects culinary heritage while providing state-of-the-art hygiene inspection and cold-chain precision.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'About',
    question: 'What is FEAzTO and what does the name stand for?',
    answer: 'FEAzTO is a regional food discovery and home-kitchen ecosystem built on the pillars of FOOD • CULTURE • CONNECT. Our mission is to bridge authentic regional culinary traditions and talented FoodPreneurs with modern cloud-kitchen precision, hygiene audits, and seamless delivery.'
  },
  {
    category: 'About',
    question: 'How is FEAzTO different from conventional food delivery apps?',
    answer: 'Unlike generic aggregator apps focused on industrial fast-food discounts, FEAzTO focuses on authentic regional provenance, heirloom home recipes, cultural storytelling, and certified FoodPreneurs. Every dish has a documented geographical and culinary origin.'
  },
  {
    category: 'Kitchens',
    question: 'Who are the FoodPreneurs in the FEAzTO ecosystem?',
    answer: 'FoodPreneurs are seasoned home cooks, regional culinary custodians, and independent kitchen creators who partner with FEAzTO. We provide them with commercial-grade cloud infrastructure, hygiene compliance support, supply-chain logistics, and digital reach.'
  },
  {
    category: 'Kitchens',
    question: 'How does FEAzTO ensure hygiene and food safety standards?',
    answer: 'Every participating kitchen undergoes strict safety and hygiene audits adhering to FSSAI guidelines. We combine traditional home-kitchen warmth with cloud-kitchen precision—clean batch monitoring, tamper-evident thermal packaging, and vetted ingredients.'
  },
  {
    category: 'App',
    question: 'Where can I download the FEAzTO mobile application?',
    answer: 'The FEAzTO Customer App, Cloud Kitchen App, and Rider ecosystem apps are currently in active pilot testing and staged rollout. You can register for early access and priority invitation on our Download page.'
  },
  {
    category: 'App',
    question: 'Is Book a Cook currently operational?',
    answer: 'Book a Cook is an upcoming curated offering currently in testing for select cultural festivals and small private home gatherings. Interested hosts can submit an interest inquiry through our dedicated Book a Cook page.'
  }
];
