import type { FoodItem, KitchenStory, FAQItem } from '../types';

export const REGIONAL_FOODS: FoodItem[] = [
  {
    id: 'biryani-hyderabadi',
    name: 'Dum Biryani with Mirchi ka Salan',
    region: 'Deccani Heritage',
    originState: 'Telangana',
    category: 'Curry & Rice',
    description: 'Slow-cooked in dough-sealed handis with fragrant seeraga samba & long-grain rice, whole spices, and caramelized shallots.',
    storyNote: 'Passed down through 3 generations of slow-fire dum specialists.',
    image: '/brand/plate-biryani.png',
    tags: ['Dum Cooked', 'Slow Food', 'Aromatic Spices'],
    prepTime: '45 min',
    calories: '580 kcal',
    protein: '24g protein'
  },
  {
    id: 'thali-traditional',
    name: 'Sattvic Maharashtrian & South Thali',
    region: 'Western & Southern Ghats',
    originState: 'Maharashtra / Tamil Nadu',
    category: 'Curry & Rice',
    description: 'An elemental platter balancing six tastes (shadrasa): kootu, rasam, freshly pressed ghee, warm puran poli, and seasonal greens.',
    storyNote: 'Cooked strictly with cold-pressed oils, mortar-pestle ground masalas, and zero artificial coloring.',
    image: '/brand/plate-thali.png',
    tags: ['Six Tastes', 'Zero Preservatives', 'Heritage Grains'],
    prepTime: '30 min',
    calories: '520 kcal',
    protein: '18g protein'
  },
  {
    id: 'idli-vada-combo',
    name: 'Malli Poo Idli & Medu Vada',
    region: 'Kongu Nadu & Thanjavur',
    originState: 'Tamil Nadu',
    category: 'Breakfast',
    description: 'Stone-ground fermented black gram batter steamed into jasmine-soft idlis, paired with freshly ground coconut-chutney and drumstick sambar.',
    storyNote: 'Fermented naturally for 14 hours using stone-grinders to preserve probiotic cultures.',
    image: '/brand/plate-idli.png',
    tags: ['Naturally Fermented', 'Stone Ground', 'Steamed'],
    prepTime: '20 min',
    calories: '340 kcal',
    protein: '14g protein'
  },
  {
    id: 'samosa-potli',
    name: 'Spiced Potato & Pea Potli Samosa',
    region: 'Awadhi & Old Delhi',
    originState: 'Uttar Pradesh',
    category: 'Snacks & Sweets',
    description: 'Flaky ajwain pastry stuffed with roasted cumin, hing-tempered potatoes, garden peas, and sweet tamarind-saunth chutney.',
    storyNote: 'Crisped in pure groundnut oil at controlled low temperature for prolonged crispness.',
    image: '/brand/plate-samosa.png',
    tags: ['Hand Rolled', 'Fresh Tamarind', 'Evening Tradition'],
    prepTime: '25 min',
    calories: '390 kcal',
    protein: '9g protein'
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
