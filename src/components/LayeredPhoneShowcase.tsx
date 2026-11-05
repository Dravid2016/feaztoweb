import React from 'react';
import { REGIONAL_FOODS } from '../data/feaztoData';
import { Clock, Flame, Leaf, MapPin, ArrowRight, Sparkles, ChefHat, HeartPulse, ShieldCheck, Coffee, Salad, Star } from 'lucide-react';
import type { FoodItem } from '../types';

interface LayeredPhoneShowcaseProps {
  navigate?: (route: string) => void;
}

// Mini Heritage Card styled exactly like the 1st image's yellow cultural cards
const StreamCulturalFoodCard: React.FC<{ dish: FoodItem }> = ({ dish }) => {
  return (
    <div className="stream-cultural-card">
      {/* Cultural Themed Kolam & Heritage Line-art Doodles Background */}
      <div className="stream-card-doodle-layer" aria-hidden="true">
        <svg className="stream-doodle-svg" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.16" stroke="#874700" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 20 C40 10, 50 40, 20 50 C10 35, 15 15, 35 15 C55 15, 65 45, 35 55" />
            <circle cx="28" cy="28" r="3" fill="#874700" />
            <circle cx="50" cy="50" r="2.5" fill="#874700" />
            <path d="M120 18 C145 10, 165 30, 155 55 C145 78, 115 82, 108 58 Z" />
            <path d="M190 25 Q210 5, 230 25 T270 25" />
            <path d="M190 32 Q210 16, 230 32 T270 32" strokeDasharray="3 3" />
          </g>
        </svg>
        <div className="stream-card-top-border" />
      </div>

      {/* Info Column */}
      <div className="stream-card-info">
        <div className="stream-tag-row">
          <span className="stream-category-badge">{dish.category}</span>
          <span className="stream-origin-badge">
            <MapPin size={10} /> {dish.originState}
          </span>
        </div>

        <h4 className="stream-card-title">{dish.name}</h4>
        <p className="stream-card-desc">{dish.description}</p>

        {/* Nutritional & Time Metrics Row */}
        <div className="stream-metrics-row">
          {dish.prepTime && (
            <div className="stream-metric-pill">
              <Clock size={12} className="metric-icon clock" />
              <span><strong>{dish.prepTime.replace(/[^0-9]/g, '')}</strong> min</span>
            </div>
          )}
          {dish.calories && (
            <div className="stream-metric-pill">
              <Flame size={12} className="metric-icon flame" />
              <span><strong>{dish.calories.replace(/[^0-9]/g, '')}</strong> kcal</span>
            </div>
          )}
          {dish.protein && (
            <div className="stream-metric-pill">
              <Leaf size={12} className="metric-icon leaf" />
              <span><strong>{dish.protein.replace(/[^0-9]/g, '')}</strong> protein</span>
            </div>
          )}
        </div>

        {/* Tradition Ribbon */}
        {dish.storyNote && (
          <div className="stream-tradition-box">
            <span className="tradition-spark">✦ Tradition:</span> {dish.storyNote}
          </div>
        )}
      </div>

      {/* Right Corner Oversized Half-Visible Rotating Plate (Exact layout from Image 1) */}
      <div className="stream-plate-anchor">
        <div className="stream-plate-circular-frame">
          <div className="stream-plate-spinning-wrapper">
            <img 
              src={dish.image || '/brand/plate-biryani-new.png'} 
              alt={dish.name} 
              className="stream-round-plate-img" 
              loading="lazy" 
            />
          </div>
        </div>
        {/* Cultural Dashed Orbit Aura Ring around plate edge */}
        <div className="stream-plate-aura-ring" />
      </div>
    </div>
  );
};

const STATEMENT_DISH_LOOP = [
  { name: 'Traditional South Indian Curry Bowl', img: '/dish-capsule-curry.jpg' },
  { name: 'Crispy Golden Ghee Podi Masala Dosa', img: '/brand/plate-benne-dosa.png' },
  { name: 'Slow Dum Cooked Fragrant Biryani', img: '/brand/plate-biryani-new.png' },
  { name: 'Steamed Stone Ground Soft Jasmine Idli', img: '/brand/plate-idli-new.png' },
  { name: 'Balanced Generational Sattvic Thali', img: '/brand/plate-thali-new.png' },
];

export const LayeredPhoneShowcase: React.FC<LayeredPhoneShowcaseProps> = ({ navigate }) => {
  const [activeTab, setActiveTab] = React.useState<'feazto' | 'book' | 'carefe'>('feazto');
  const [statementDishIdx, setStatementDishIdx] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setStatementDishIdx((prev) => (prev + 1) % STATEMENT_DISH_LOOP.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // Top Layer: 10 Distinct Cultural Dish Varieties
  const topLayerDishes = REGIONAL_FOODS.slice(0, 10);

  // Bottom Layer: 10 Completely Separate Cultural Dish Varieties
  const bottomLayerDishes = REGIONAL_FOODS.slice(10, 20);

  return (
    <section className="plenti-feazto-showcase-section">
      {/* Plenti-Style Grand Editorial Statement Header */}
      <div className="plenti-statement-container">
        <h2 className="plenti-statement-title">
          Every day authentic home chefs,{' '}
          <span 
            className="statement-dish-capsule" 
            title={STATEMENT_DISH_LOOP[statementDishIdx].name}
            onClick={() => setStatementDishIdx((prev) => (prev + 1) % STATEMENT_DISH_LOOP.length)}
          >
            {STATEMENT_DISH_LOOP.map((dish, idx) => (
              <img 
                key={dish.name}
                src={dish.img} 
                alt={dish.name} 
                className={`statement-inline-img ${idx === statementDishIdx ? 'is-active-dish' : 'is-hidden-dish'}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/dish-capsule-curry.jpg';
                }}
              />
            ))}
          </span>
          <br />
          regional foodpreneurs and cloud kitchens
          <br />
          prepare fresh generational recipes
          <br />
          as daily curated batches — and you enjoy real India
          <br />
          delivered straight to your table.
        </h2>

        <p className="plenti-statement-tagline">
          Good for your family. Better for authentic food culture.
        </p>

        {/* Plenti-Style Rounded Hashtag Pills Row */}
        <div className="plenti-tags-row">
          <span className="plenti-tag-pill">#Feazto</span>
          <span className="plenti-tag-pill">#HomeKitchens</span>
          <span className="plenti-tag-pill">#RegionalFood</span>
          <span className="plenti-tag-pill">#TasteRealIndia</span>
          <span className="plenti-tag-pill">#BookACook</span>
        </div>
      </div>

      {/* Showcase with Running Yellow Heritage Cards Stream Flanking the feazto Mobile Banner */}
      <div className="plenti-stage-showcase-wrapper">

        {/* 1. Upper Scrolling Carousel (10 distinct dish varieties running left behind phone) */}
        <div className="plenti-cards-stream stream-top">
          <div className="plenti-cards-track scroll-stream-left">
            {[...topLayerDishes, ...topLayerDishes].map((dish, idx) => (
              <StreamCulturalFoodCard key={`top-${dish.id}-${idx}`} dish={dish} />
            ))}
          </div>
        </div>

        {/* 2. Middle Interstitial Buttons Loop (All 20 Button-Style Dishes running continuously between the card streams) */}
        <div className="plenti-buttons-stream stream-middle">
          <div className="plenti-buttons-track scroll-buttons-right">
            {[
              { title: 'Dum Biryani Handi', subtitle: 'Slow Dum Cooking', img: '/brand/plate-biryani.png' },
              { title: 'Sattvic Thali', subtitle: 'Balanced Shadrasa', img: '/brand/plate-thali.png' },
              { title: 'Jasmine Idli & Sambar', subtitle: 'Stone Ground Batter', img: '/brand/plate-idli.png' },
              { title: 'Potli Samosa', subtitle: 'Hand-Rolled Ajwain Crust', img: '/brand/plate-samosa.png' },
              { title: 'Filter Kaapi & Chai', subtitle: 'Clay Pot Infusion', img: '/brand/doodle-chai.png' },
              { title: 'Davangere Benne Dosa', subtitle: 'Fresh Makkhan Roast', img: '/brand/plate-benne-dosa.png' },
              { title: 'Chettinad Kozhi Curry', subtitle: 'Stone-Pounded Spices', img: '/brand/plate-chettinad-curry.png' },
              { title: 'Dal Baati Churma', subtitle: 'Pure Ghee Baati', img: '/brand/plate-daal-baati.png' },
              { title: 'Malabar Fish Curry', subtitle: 'Kodampuli & Coconut', img: '/brand/plate-malabar-fish.png' },
              { title: 'Nizami Shahi Haleem', subtitle: '12-Hour Slow Simmer', img: '/brand/plate-nizami-haleem.png' },
              { title: 'Kashmiri Rogan Josh', subtitle: 'Ratanjot & Fennel Infusion', img: '/brand/plate-rogan-josh.png' },
              { title: 'Litti Chokha', subtitle: 'Charcoal Smoked Sattu', img: '/brand/plate-litti-chokha.png' },
              { title: 'Kolhapuri Tambda Rassa', subtitle: 'Fierce Nagli Spices', img: '/brand/plate-kolhapuri-rassa.png' },
              { title: 'Surati Khaman Dhokla', subtitle: 'Steamed Mustard Sponge', img: '/brand/plate-surati-dhokla.png' },
              { title: 'Amritsari Pindi Chole', subtitle: 'Anardana & Black Tea Boil', img: '/brand/plate-pindi-chole.png' },
              { title: 'Goan Prawn Balchão', subtitle: 'Toddy Vinegar Reduction', img: '/brand/plate-goan-prawn.png' },
              { title: 'Andhra Gongura Mamsam', subtitle: 'Tangy Sorrel Leaf Simmer', img: '/brand/plate-gongura-mamsam.png' },
              { title: 'Irani Kheema Pav', subtitle: 'Caramelized Onion Gravy', img: '/brand/plate-irani-kheema.png' },
              { title: 'Palada Pradhaman', subtitle: 'Condensed Cardamom Milk', img: '/brand/plate-palada-pradhaman.png' },
              { title: 'Palappam & Veg Stew', subtitle: 'Fermented Toddy Batter', img: '/brand/plate-palappam-stew.png' },
              { title: 'Dum Biryani Handi', subtitle: 'Slow Dum Cooking', img: '/brand/plate-biryani.png' },
              { title: 'Sattvic Thali', subtitle: 'Balanced Shadrasa', img: '/brand/plate-thali.png' },
              { title: 'Jasmine Idli & Sambar', subtitle: 'Stone Ground Batter', img: '/brand/plate-idli.png' },
              { title: 'Potli Samosa', subtitle: 'Hand-Rolled Ajwain Crust', img: '/brand/plate-samosa.png' },
              { title: 'Filter Kaapi & Chai', subtitle: 'Clay Pot Infusion', img: '/brand/doodle-chai.png' },
              { title: 'Davangere Benne Dosa', subtitle: 'Fresh Makkhan Roast', img: '/brand/plate-benne-dosa.png' },
              { title: 'Chettinad Kozhi Curry', subtitle: 'Stone-Pounded Spices', img: '/brand/plate-chettinad-curry.png' },
              { title: 'Dal Baati Churma', subtitle: 'Pure Ghee Baati', img: '/brand/plate-daal-baati.png' },
              { title: 'Malabar Fish Curry', subtitle: 'Kodampuli & Coconut', img: '/brand/plate-malabar-fish.png' },
              { title: 'Nizami Shahi Haleem', subtitle: '12-Hour Slow Simmer', img: '/brand/plate-nizami-haleem.png' },
              { title: 'Kashmiri Rogan Josh', subtitle: 'Ratanjot & Fennel Infusion', img: '/brand/plate-rogan-josh.png' },
              { title: 'Litti Chokha', subtitle: 'Charcoal Smoked Sattu', img: '/brand/plate-litti-chokha.png' },
              { title: 'Kolhapuri Tambda Rassa', subtitle: 'Fierce Nagli Spices', img: '/brand/plate-kolhapuri-rassa.png' },
              { title: 'Surati Khaman Dhokla', subtitle: 'Steamed Mustard Sponge', img: '/brand/plate-surati-dhokla.png' },
              { title: 'Amritsari Pindi Chole', subtitle: 'Anardana & Black Tea Boil', img: '/brand/plate-pindi-chole.png' },
              { title: 'Goan Prawn Balchão', subtitle: 'Toddy Vinegar Reduction', img: '/brand/plate-goan-prawn.png' },
              { title: 'Andhra Gongura Mamsam', subtitle: 'Tangy Sorrel Leaf Simmer', img: '/brand/plate-gongura-mamsam.png' },
              { title: 'Irani Kheema Pav', subtitle: 'Caramelized Onion Gravy', img: '/brand/plate-irani-kheema.png' },
              { title: 'Palada Pradhaman', subtitle: 'Condensed Cardamom Milk', img: '/brand/plate-palada-pradhaman.png' },
              { title: 'Palappam & Veg Stew', subtitle: 'Fermented Toddy Batter', img: '/brand/plate-palappam-stew.png' },
            ].map((btn, idx) => (
              <div key={`mid-btn-${idx}`} className="stream-dish-button-pill">
                <div className="stream-btn-img-box">
                  <img 
                    src={btn.img} 
                    alt={btn.title} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/brand/plate-thali.png';
                    }}
                  />
                </div>
                <div className="stream-btn-text">
                  <span className="stream-btn-name">{btn.title}</span>
                  <span className="stream-btn-desc">{btn.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {/* 3. Hero Showcase Split: Left Blank Rectangular Card + Right Anchored Phone Banner */}
        <div className="plenti-central-device-container">
          {/* Card Container with Hooked Tab on Top */}
          <div className="showcase-card-outer-wrapper">
            {/* Top Navigation Tabs hooking into card below */}
            <div className="app-mode-tabs-header">
              <button 
                type="button" 
                className={`mode-tab-item tab-pill tab-feazto-pill ${activeTab === 'feazto' ? 'is-pill-active' : ''}`}
                onClick={() => setActiveTab('feazto')}
              >
                <span className="mode-btn-brand-pill">FEAZTO</span>
              </button>
              
              <button 
                type="button" 
                className={`mode-tab-item tab-pill tab-book-pill ${activeTab === 'book' ? 'is-pill-active' : ''}`}
                onClick={() => setActiveTab('book')}
              >
                <span className="mode-btn-label mode-btn-label-desktop">Book a cook</span>
                <span className="mode-btn-label mode-btn-label-mobile">Cook</span>
              </button>

              <button 
                type="button" 
                className={`mode-tab-item tab-pill ${activeTab === 'carefe' ? 'is-pill-active' : ''}`}
                onClick={() => setActiveTab('carefe')}
              >
                <span className="mode-btn-label">Carefe</span>
                <span className="badge-new">NEW</span>
              </button>
            </div>

            {/* Rectangular Card Body below - dynamically switches theme (Yellow for FEAZTO, Rich Brown for Book a cook, Deep Forest Green for Carefe) */}
            <div className={`showcase-left-blank-card ${activeTab === 'feazto' ? 'is-yellow-theme' : ''} ${activeTab === 'book' ? 'is-brown-theme' : ''} ${activeTab === 'carefe' ? 'is-green-theme' : ''}`}>
              <div className="blank-card-inner-frame">
                {/* Dynamic spotlight header */}
                <div className="card-spotlight-tag">
                  {activeTab === 'carefe' ? (
                    <span>FEAZTO HEALTHY CAREFE MENU • 100% ORGANIC & COLD-PRESSED</span>
                  ) : activeTab === 'book' ? (
                    <span>FEAZTO BOOK A COOK • VERIFIED EXPERT HOME CHEFS</span>
                  ) : (
                    <span>CHEF'S SPECIAL SPOTLIGHT • HERITAGE REGIONAL RECIPES</span>
                  )}
                </div>

                {activeTab === 'carefe' ? (
                  <div className="showcase-tab-content carefe-tab-body">
                    <div className="tab-theme-kicker">
                      <span className="kicker-icon-glow">
                        <Leaf size={16} />
                      </span>
                      <span className="kicker-text">Conscious Living & Clean Wellness</span>
                    </div>
                    <h3 className="tab-card-main-title">What is Carefe? Pure Body Fuel</h3>
                    <p className="tab-card-subtitle">
                      <strong>The Goal:</strong> To eliminate refined sugars, artificial essences, and chemical preservatives from everyday beverage and snacking culture by offering doctor approved, nutrient intact vitality nourishment.
                    </p>

                    <div className="tab-section-block">
                      <span className="tab-section-label">✦ What Carefe Delivers:</span>
                      <div className="tab-highlights-grid">
                        <div className="tab-highlight-pill">
                          <HeartPulse size={14} className="highlight-icon" />
                          <span><strong>Zero Refined Sugar:</strong> Sweetened solely by wild honey and dates</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <Leaf size={14} className="highlight-icon" />
                          <span><strong>Cold Pressed Fresh:</strong> Hydraulic pressed daily without heat</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <Coffee size={14} className="highlight-icon" />
                          <span><strong>Artisanal Roasts:</strong> Single origin shade grown Arabica</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <Salad size={14} className="highlight-icon" />
                          <span><strong>Vitality Bowls:</strong> Superfood chia, oats, nuts and fresh greens</span>
                        </div>
                      </div>
                    </div>

                    <div className="tab-footer-row">
                      <div className="tab-benefit-callout">
                        <Sparkles size={13} className="sparkle-gold" />
                        <span>Sip clean energy without the afternoon crash or digestive distress.</span>
                      </div>
                      {navigate && (
                        <button 
                          type="button" 
                          className="tab-action-btn carefe-btn"
                          onClick={() => navigate('food')}
                        >
                          <span>Explore Carefe Menu</span>
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ) : activeTab === 'book' ? (
                  <div className="showcase-tab-content book-tab-body">
                    <div className="tab-theme-kicker">
                      <span className="kicker-icon-glow">
                        <ChefHat size={16} />
                      </span>
                      <span className="kicker-text">Private Master Chef at Your Doorstep</span>
                    </div>
                    <h3 className="tab-card-main-title">Master Cooks in Your Own Kitchen</h3>
                    <p className="tab-card-subtitle">
                      <strong>The Goal:</strong> Bring the warmth of personalized, hygienic home cooked meals into your life without the stress of grocery prep, cooking, or managing household cooks.
                    </p>

                    <div className="tab-section-block">
                      <span className="tab-section-label">✦ Core Benefits & In App Features:</span>
                      <div className="tab-highlights-grid">
                        <div className="tab-highlight-pill">
                          <ShieldCheck size={14} className="highlight-icon" />
                          <span><strong>Verified Chefs:</strong> Police and background checked master cooks</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <Clock size={14} className="highlight-icon" />
                          <span><strong>Cooks in Your Kitchen:</strong> Fresh ingredients, cooked before your eyes</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <Star size={14} className="highlight-icon" />
                          <span><strong>Custom Dietary Feasts:</strong> Zero spice, Jain, Sattvic, or Diabetic diets</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <Sparkles size={14} className="highlight-icon" />
                          <span><strong>Starts at ₹1200 / Meal:</strong> Perfect for parties, poojas and daily family meals</span>
                        </div>
                      </div>
                    </div>

                    <div className="tab-footer-row">
                      <div className="tab-benefit-callout">
                        <Sparkles size={13} className="sparkle-gold" />
                        <span>Save 3+ hours daily. Enjoy piping hot food cooked just the way your family likes it.</span>
                      </div>
                      {navigate && (
                        <button 
                          type="button" 
                          className="tab-action-btn book-btn"
                          onClick={() => navigate('cook')}
                        >
                          <span>Book Professional Cook</span>
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="showcase-tab-content feazto-tab-body">
                    <div className="tab-theme-kicker">
                      <span className="kicker-icon-glow">
                        <Sparkles size={16} />
                      </span>
                      <span className="kicker-text">Preserving Authentic Indian Food Culture</span>
                    </div>
                    <h3 className="tab-card-main-title">Real India, Delivered to Your Table</h3>
                    <p className="tab-card-subtitle">
                      <strong>The Goal:</strong> To champion India's culinary heritage by connecting genuine regional home cooks and micro foodpreneurs directly with food lovers who crave authentic non commercial flavors.
                    </p>

                    <div className="tab-section-block">
                      <span className="tab-section-label">✦ What's Inside the FEAZTO App:</span>
                      <div className="tab-highlights-grid">
                        <div className="tab-highlight-pill">
                          <Flame size={14} className="highlight-icon" />
                          <span><strong>Generational Recipes:</strong> Authentic stone ground and dum cooked dishes</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <Clock size={14} className="highlight-icon" />
                          <span><strong>Daily Curated Batches:</strong> Freshly crafted in limited quantity home batches</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <ShieldCheck size={14} className="highlight-icon" />
                          <span><strong>Clean Ingredients:</strong> Cold pressed oils, pure desi ghee, zero palm oil</span>
                        </div>
                        <div className="tab-highlight-pill">
                          <MapPin size={14} className="highlight-icon" />
                          <span><strong>Hyperlocal Discovery:</strong> Explore 20+ state cuisines right in your neighborhood</span>
                        </div>
                      </div>
                    </div>

                    <div className="tab-footer-row">
                      <div className="tab-benefit-callout">
                        <Sparkles size={13} className="sparkle-gold" />
                        <span>Wholesome home cooked taste that comforts your gut and nourishes your family.</span>
                      </div>
                      {navigate && (
                        <button 
                          type="button" 
                          className="tab-action-btn feazto-btn"
                          onClick={() => navigate('food')}
                        >
                          <span>Explore Today's Batches</span>
                          <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Mobile Phone Device - Smooth Transition Swap between FEAZTO, Book a cook, and Carefe Banner */}
          <div className="device-banner-card">
            {/* 1. FEAZTO Mobile Banner (Ghee Podi Masala Dosa) */}
            <img 
              src="/brand/feazto-dosa-mobile-banner.png" 
              alt="feazto Mobile App - Ghee Podi Masala Dosa" 
              className={`feazto-device-img feazto-dosa-banner ${activeTab === 'feazto' ? 'is-active-banner' : 'is-hidden-banner'}`}
            />

            {/* 2. Book a cook Mobile Banner (Chef Rajeshwari Ammsl - Tanjore Cuisine) */}
            <img 
              src="/brand/feazto-bookacook-mobile-banner.png" 
              alt="feazto Book a Cook Mobile App - Chef Rajeshwari Ammsl" 
              className={`feazto-device-img feazto-bookacook-banner ${activeTab === 'book' ? 'is-active-banner' : 'is-hidden-banner'}`}
            />

            {/* 3. Carefe Mobile Banner (Healthy Menu with Cold-Pressed Juice & Artisan Coffee) */}
            <img 
              src="/brand/feazto-carefe-mobile-banner.png" 
              alt="feazto Carefe Mobile App - Healthy Organic Juice & Artisanal Coffee" 
              className={`feazto-device-img feazto-carefe-banner ${activeTab === 'carefe' ? 'is-active-banner' : 'is-hidden-banner'}`}
            />

            {/* Ambient warmth backing the phone matching active theme (Golden Yellow, Rich Brown, or Forest Green) */}
            <div className={`device-backdrop-glow ${activeTab === 'carefe' ? 'glow-green' : activeTab === 'book' ? 'glow-brown' : 'glow-yellow'}`} />
          </div>
        </div>

        {/* 4. Lower Scrolling Carousel (10 completely separate dish varieties running right behind phone) */}
        <div className="plenti-cards-stream stream-bottom">
          <div className="plenti-cards-track scroll-stream-right">
            {[...bottomLayerDishes, ...bottomLayerDishes].map((dish, idx) => (
              <StreamCulturalFoodCard key={`bottom-${dish.id}-${idx}`} dish={dish} />
            ))}
          </div>
        </div>
      </div>

      {/* Plenti Reference App Download Banner Placed Directly Under FEAZTO, Book a Cook & Carefe Stage Layer */}
      <div className="plenti-download-cta-banner under-stage-placement">
        {/* Marketing Copy */}
        <p className="download-banner-headline">
          Download the Feazto app today and unlock unbeatable deals on delicious meals. Great food, big savings, just a tap away! 🍽️📱
        </p>

        {/* Dual Store Buttons: Download for iPhone + Get it on Android */}
        <div className="download-store-actions-row">
          <button 
            type="button" 
            className="store-action-btn apple-store-btn"
            onClick={() => {
              const el = document.getElementById('app-download');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else if (navigate) navigate('download');
            }}
          >
            <svg className="store-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.85.94-2.93-.93.04-2.07.63-2.73 1.4-.58.67-1.1 1.76-.96 2.81 1.04.08 2.12-.51 2.75-1.28z" />
            </svg>
            <span>Download for iPhone</span>
          </button>

          <button 
            type="button" 
            className="store-action-btn android-store-btn"
            onClick={() => {
              const el = document.getElementById('app-download');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else if (navigate) navigate('download');
            }}
          >
            <svg className="store-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5826 8.3546 13.8447 8.001 12 8.001c-1.8447 0-3.5826.3536-5.1378.9487L4.8399 5.4467a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 10.963 0 14.774 0 19.2h24c0-4.426-2.6889-8.237-6.1185-9.8786" />
            </svg>
            <span>Get it on Android</span>
          </button>
        </div>
      </div>

      <style>{`
        .plenti-feazto-showcase-section {
          padding: 90px 20px 100px 20px;
          background: transparent;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plenti-statement-container {
          max-width: 960px;
          margin: 0 auto 56px auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .plenti-statement-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          font-weight: 800;
          color: #1A1A1A;
          line-height: 1.34;
          letter-spacing: -0.025em;
          margin: 0 0 20px 0;
        }

        /* Transition Card / Capsule Image between the text - Pure Crystal Liquid Glass (Zero Yellow Borders) */
        .statement-dish-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          margin: 0 10px;
          width: 82px;
          height: 44px;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.12) 60%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1.5px solid rgba(255, 255, 255, 0.65);
          outline: none;
          box-shadow: 
            0 12px 28px rgba(0, 0, 0, 0.12),
            0 4px 10px rgba(0, 0, 0, 0.06),
            inset 0 2px 6px rgba(255, 255, 255, 0.8),
            inset 0 -2px 6px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transform: translateY(-2px);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          position: relative;
          cursor: pointer;
        }

        /* Liquid Glass Specular Reflection Highlight */
        .statement-dish-capsule::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 60%);
          pointer-events: none;
          z-index: 4;
        }

        /* Pure Crystal Inset Glass Refraction */
        .statement-dish-capsule::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.45);
          pointer-events: none;
          z-index: 3;
        }

        .statement-dish-capsule:hover {
          transform: translateY(-2px) scale(1.12);
          border-color: rgba(255, 255, 255, 0.95);
          outline: none;
          box-shadow: 
            0 18px 36px rgba(0, 0, 0, 0.18),
            0 6px 14px rgba(0, 0, 0, 0.08),
            inset 0 3px 8px rgba(255, 255, 255, 0.95);
        }

        .statement-inline-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.55s ease, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .statement-inline-img.is-active-dish {
          opacity: 1;
          transform: scale(1) rotate(0deg);
          z-index: 2;
        }

        .statement-inline-img.is-hidden-dish {
          opacity: 0;
          transform: scale(0.85) rotate(-6deg);
          z-index: 1;
          pointer-events: none;
        }

        .plenti-statement-tagline {
          font-size: clamp(1.05rem, 1.4vw, 1.25rem);
          font-weight: 500;
          color: #666666;
          margin: 0 0 24px 0;
        }

        /* ── Plenti Reference App Download Banner ── */
        .plenti-download-cta-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin: 12px auto 36px auto;
          max-width: 680px;
          width: 100%;
        }

        .plenti-download-cta-banner.under-stage-placement {
          margin-top: 60px;
          margin-bottom: 20px;
          position: relative;
          z-index: 5;
        }

        /* Rating Capsule Badge */
        .download-rating-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 9999px;
          padding: 6px 18px;
          font-size: 0.88rem;
          color: #2B2D42;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
          margin-bottom: 18px;
          user-select: none;
        }

        .rating-star-icon {
          color: #F59E0B;
          font-size: 1.05rem;
          line-height: 1;
        }

        .rating-score {
          font-weight: 700;
          color: #1F2937;
        }

        .rating-count {
          color: #4B5563;
          font-weight: 400;
        }

        /* Headline Copy matching reference image */
        .download-banner-headline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(1.08rem, 1.7vw, 1.35rem);
          line-height: 1.48;
          font-weight: 700;
          color: #374151;
          margin: 0 0 26px 0;
          max-width: 640px;
          letter-spacing: -0.015em;
        }

        /* Store Actions Row: iPhone & Android Buttons */
        .download-store-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          width: 100%;
        }

        .store-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 9999px;
          font-size: 0.96rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, opacity 0.2s ease;
          font-family: inherit;
          text-decoration: none;
          letter-spacing: -0.01em;
        }

        .store-action-btn .store-icon {
          flex-shrink: 0;
        }

        /* Black Pill Button: Download for iPhone with drop shadow */
        .apple-store-btn {
          background: #141414;
          color: #FFFFFF;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28), 0 2px 6px rgba(0, 0, 0, 0.12);
        }

        .apple-store-btn:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35), 0 4px 10px rgba(0, 0, 0, 0.16);
        }

        /* Light Grey Pill Button: Get it on Android */
        .android-store-btn {
          background: #E5E7EB;
          color: #111827;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .android-store-btn:hover {
          background: #D1D5DB;
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
        }

        .plenti-tags-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .plenti-tag-pill {
          background: #F1F3F5;
          color: #333333;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 7px 18px;
          border-radius: 9999px;
          letter-spacing: -0.01em;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .plenti-tag-pill:hover {
          background: #E5E8EC;
          transform: translateY(-1px);
        }

        /* Phone & Streaming Tracks Showcase */
        .plenti-stage-showcase-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 640px;
          overflow: visible;
        }



        .plenti-cards-stream {
          position: absolute;
          width: 100vw;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .stream-top {
          top: 10%;
        }

        .stream-bottom {
          bottom: 8%;
        }

        /* ── INTERSTITIAL BUTTONS STREAM (Between the 2 card loops) ── */
        .plenti-buttons-stream {
          position: absolute;
          width: 100vw;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
          pointer-events: none;
          z-index: 2; /* Sits right between the background cards and phone */
          top: 48%;
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }

        .plenti-buttons-track {
          display: flex;
          gap: 18px;
          width: max-content;
          align-items: center;
        }

        .scroll-buttons-right {
          animation: marqueeRight 68s linear infinite;
        }

        .plenti-buttons-track:hover {
          animation-play-state: paused;
        }

        /* Button-Style Dish Pill (Exact Aesthetic from Image 1) */
        .stream-dish-button-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #FFFFFF;
          padding: 8px 22px 8px 10px;
          border-radius: 9999px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1.5px solid rgba(245, 183, 0, 0.4);
          pointer-events: auto;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          user-select: none;
        }

        .stream-dish-button-pill:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 12px 30px rgba(245, 183, 0, 0.45);
          border-color: #F5B700;
        }

        .stream-btn-img-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFF9E6;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid #F5B700;
          box-shadow: 0 2px 8px rgba(245, 183, 0, 0.3);
        }

        .stream-btn-img-box img {
          width: 82%;
          height: 82%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .stream-dish-button-pill:hover .stream-btn-img-box img {
          transform: scale(1.12);
        }

        .stream-btn-text {
          display: flex;
          flex-direction: column;
        }

        .stream-btn-name {
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 800;
          color: #111111;
          line-height: 1.25;
        }

        .stream-btn-desc {
          font-size: 0.72rem;
          font-weight: 600;
          color: #777777;
        }

        /* Running Stream Cards Track */
        .plenti-cards-track {
          display: flex;
          gap: 28px;
          width: max-content;
          align-items: center;
        }

        .scroll-stream-left {
          animation: marqueeLeft 52s linear infinite;
        }

        .scroll-stream-right {
          animation: marqueeRight 52s linear infinite;
        }

        .plenti-cards-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* Running Stream Cultural Food Card (Exact layout & aesthetic from Image 1) */
        .stream-cultural-card {
          position: relative;
          background: linear-gradient(135deg, #FFDE59 0%, #FAC921 50%, #E5A800 100%);
          border-radius: 26px;
          border: none;
          box-shadow: 0 16px 36px rgba(135, 71, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: row;
          align-items: center;
          overflow: hidden;
          padding: 22px 24px;
          min-width: 450px;
          max-width: 450px;
          height: 205px;
          pointer-events: auto;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .stream-cultural-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 22px 46px rgba(135, 71, 0, 0.28);
        }

        /* Doodle watermark layer */
        .stream-card-doodle-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .stream-doodle-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .stream-card-top-border {
          display: none;
        }

        /* Information Column */
        .stream-card-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 2;
          min-width: 0;
          padding-right: 110px; /* Space reserved so text never touches the right-anchored half-plate */
        }

        .stream-tag-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .stream-category-badge {
          background: rgba(17, 17, 17, 0.92);
          color: #FFD233;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 9999px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .stream-origin-badge {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          color: #4A2800;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .stream-card-title {
          font-size: 1.08rem;
          font-weight: 900;
          color: #1A1103;
          line-height: 1.25;
          margin: 0 0 6px 0;
          letter-spacing: -0.015em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        .stream-card-desc {
          font-size: 0.74rem;
          color: #4E3205;
          line-height: 1.38;
          margin: 0 0 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 500;
        }

        .stream-metrics-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .stream-metric-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(4px);
          padding: 3px 8px;
          border-radius: 6px;
          border: none;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          font-size: 0.68rem;
          color: #4A2800;
        }

        .stream-metric-pill strong {
          color: #1A1103;
          font-size: 0.76rem;
        }

        .stream-metric-pill .clock { color: #2D2418; }
        .stream-metric-pill .flame { color: #D32F2F; }
        .stream-metric-pill .leaf { color: #1B5E20; }

        .stream-tradition-box {
          font-size: 0.68rem;
          color: #382103;
          background: rgba(255, 255, 255, 0.65);
          border: none;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          padding: 4px 8px;
          border-radius: 4px;
          line-height: 1.35;
          width: 100%;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tradition-spark {
          font-weight: 800;
          color: #874700;
        }

        /* Right Corner Oversized Half-Visible Rotating Plate (Exact Form Factor from Reference Image) */
        .stream-plate-anchor {
          position: absolute;
          right: -95px; /* Extends halfway outside right border like reference image */
          top: 50%;
          transform: translateY(-50%);
          width: 220px;
          height: 220px;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        .stream-plate-circular-frame {
          width: 205px;
          height: 205px;
          border-radius: 50%;
          overflow: hidden;
          background: #1A1103;
          border: 3.5px solid #FFFFFF;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(135, 71, 0, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          position: relative;
        }

        .stream-plate-spinning-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slowSpinPlate 80s linear infinite; /* Spin very very slowly */
          transform-origin: center center;
          will-change: transform;
        }

        .stream-round-plate-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .stream-plate-aura-ring {
          position: absolute;
          inset: -9px;
          border-radius: 50%;
          border: 2px dashed rgba(135, 71, 0, 0.38);
          pointer-events: none;
          z-index: 1;
          animation: spinAuraReverse 100s linear infinite; /* Counter-rotates very slowly */
        }

        @keyframes slowSpinPlate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spinAuraReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        /* Split Layout: Left Blank Rectangular Card + Right Anchored Phone Banner */
        .plenti-central-device-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1540px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 clamp(16px, 3vw, 48px);
          pointer-events: auto;
          box-sizing: border-box;
          gap: 48px;
          transform: translateY(-40px); /* Lifts the card and phone up */
        }

        /* Card Outer Wrapper holding Top Tabs and Main Card */
        .showcase-card-outer-wrapper {
          flex: 1.6;
          max-width: 960px;
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: -30px; /* Extra lift so top tabs clear the viewport and upper streams */
        }

        /* Top Header Tabs Row */
        .app-mode-tabs-header {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          padding-left: 20px;
          position: relative;
          z-index: 15;
          margin-bottom: -1px; /* Fuses tab bottom directly into card top border */
        }

        .mode-tab-item {
          border: none;
          outline: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }

        /* FEAZTO Tab: Seamlessly hooked into the yellow card below like in screenshot */
        .tab-feazto {
          background: #FFD233;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          padding: 14px 34px 12px 34px;
          border: 1.5px solid #E5B81C;
          border-bottom: 2px solid #FFD233; /* Fuses directly into card background */
          position: relative;
          box-shadow: 0 -4px 14px rgba(248, 181, 4, 0.15);
        }

        .tab-feazto:hover {
          background: #ffcc1a;
        }

        .tab-feazto.is-hooked-active {
          background: #FFD233;
          border-bottom-color: #FFD233;
          z-index: 3;
        }

        /* Unselected state if not active */
        .tab-feazto:not(.is-hooked-active) {
          background: #F4E8B8;
          border-bottom: 1.5px solid #E5B81C;
          opacity: 0.85;
        }

        /* Floating pill tabs matching Book a cook and Carefe */
        .tab-pill {
          background: #FFFFFF;
          border-radius: 9999px;
          padding: 10px 24px;
          border: none;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          margin-bottom: 6px;
        }

        .tab-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
        }

        .tab-pill.is-pill-active {
          border: none;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.14);
        }

        /* FEAZTO Pill: Vibrant signature yellow pill with dark italic lettering and zero black borders */
        .tab-feazto-pill {
          background: #FFD233;
          border: none;
          box-shadow: 0 4px 14px rgba(248, 181, 4, 0.35);
        }

        .tab-feazto-pill:hover {
          background: #ffcc1a;
          box-shadow: 0 6px 18px rgba(248, 181, 4, 0.45);
        }

        .tab-feazto-pill.is-pill-active {
          background: #FFD233;
          border: none;
          box-shadow: 0 6px 18px rgba(248, 181, 4, 0.45), 0 2px 6px rgba(0, 0, 0, 0.08);
        }

        .tab-feazto-pill:not(.is-pill-active) {
          background: #FFF3C4;
          border: none;
          opacity: 0.85;
        }

        /* Rectangular Card on the Left Side of the page */
        .showcase-left-blank-card {
          width: 100%;
          min-height: 520px;
          background: linear-gradient(145deg, #FFFDF8 0%, #FFF8E6 100%);
          border-radius: 28px;
          border: none;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08), 0 6px 18px rgba(0, 0, 0, 0.04);
          position: relative;
          display: flex;
          align-items: stretch;
          justify-content: stretch;
          padding: 28px;
          box-sizing: border-box;
          transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.4s ease;
        }

        .showcase-left-blank-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        /* 1. FEAZTO Gradient Theme (Warm Golden Saffron to Amber Glow) */
        .showcase-left-blank-card.is-yellow-theme {
          background: linear-gradient(140deg, #FFE466 0%, #FFD233 45%, #F0B800 100%);
          border: none;
          box-shadow: 0 28px 70px rgba(248, 181, 4, 0.32), 0 10px 28px rgba(181, 132, 0, 0.2);
        }

        .showcase-left-blank-card.is-yellow-theme .blank-card-inner-frame {
          background: linear-gradient(150deg, rgba(255, 250, 224, 0.72) 0%, rgba(255, 238, 168, 0.5) 100%);
          border: none;
          box-shadow: inset 0 2px 8px rgba(255, 255, 255, 0.6), 0 8px 24px rgba(181, 132, 0, 0.08);
        }

        /* 2. Book a cook Gradient Theme (Rich Spiced Cocoa & Dark Mahogony to Roasted Amber Brown) */
        .showcase-left-blank-card.is-brown-theme {
          background: linear-gradient(140deg, #5c0f06 0%, #460802 50%, #2f0400 100%);
          border: none;
          box-shadow: 0 28px 70px rgba(47, 4, 0, 0.45), 0 10px 28px rgba(78, 9, 2, 0.3);
        }

        .showcase-left-blank-card.is-brown-theme .blank-card-inner-frame {
          background: linear-gradient(150deg, rgba(110, 20, 10, 0.6) 0%, rgba(65, 8, 3, 0.7) 100%);
          border: none;
          box-shadow: inset 0 1px 4px rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        .showcase-left-blank-card.is-brown-theme .card-spotlight-tag {
          color: #FFD233;
        }

        /* 3. Carefe Gradient Theme (Lush Emerald to Deep Forest Botanical Pine) */
        .showcase-left-blank-card.is-green-theme {
          background: linear-gradient(140deg, #0d5437 0%, #063B26 50%, #032316 100%);
          border: none;
          box-shadow: 0 28px 70px rgba(3, 35, 22, 0.42), 0 10px 28px rgba(6, 59, 38, 0.28);
        }

        .showcase-left-blank-card.is-green-theme .blank-card-inner-frame {
          background: linear-gradient(150deg, rgba(14, 94, 62, 0.55) 0%, rgba(6, 54, 35, 0.7) 100%);
          border: none;
          box-shadow: inset 0 1px 4px rgba(255, 255, 255, 0.08), 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        .showcase-left-blank-card.is-green-theme .card-spotlight-tag {
          color: #A2DEB8;
        }

        /* Book a cook active pill styling matching brown theme */
        .tab-pill.is-pill-active:not(.tab-feazto-pill):not(:has(.badge-new)) {
          background: linear-gradient(135deg, #5c0f06 0%, #460802 100%);
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 14px rgba(70, 8, 2, 0.45);
        }
        .tab-pill.is-pill-active:not(.tab-feazto-pill):not(:has(.badge-new)) .mode-btn-label {
          color: #FFFFFF;
        }

        /* Carefe active pill styling matching the green theme */
        .tab-pill.is-pill-active:has(.badge-new) {
          background: linear-gradient(135deg, #0e5a3b 0%, #063B26 100%);
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 14px rgba(6, 59, 38, 0.45);
        }
        .tab-pill.is-pill-active:has(.badge-new) .mode-btn-label {
          color: #FFFFFF;
        }

        .blank-card-inner-frame {
          width: 100%;
          height: 100%;
          min-height: 440px;
          border: none;
          border-radius: 20px;
          background: rgba(255, 253, 247, 0.65);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 24px;
          box-sizing: border-box;
          transition: background 0.35s ease, border-color 0.35s ease;
        }

        .card-spotlight-tag {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #1a1a1a;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .mode-btn-brand-pill {
          font-family: inherit;
          font-style: normal;
          font-weight: 800;
          font-size: 1.02rem;
          letter-spacing: -0.01em;
          color: #1a1a1a;
        }

        .mode-btn-label {
          font-weight: 800;
          font-style: normal;
          font-size: 1.02rem;
          color: #1a1a1a;
          letter-spacing: -0.01em;
        }

        .mode-btn-label-mobile {
          display: none;
        }

        .mode-btn-label-desktop {
          display: inline;
        }

        .badge-new {
          background: #FF0015;
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 800;
          font-style: normal;
          letter-spacing: 0.03em;
          padding: 2px 7px;
          border-radius: 9999px;
          box-shadow: 0 2px 6px rgba(255, 0, 21, 0.4);
          line-height: 1.2;
        }

        /* Showcase Tab Dynamic Card Content */
        .showcase-tab-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          margin-top: 12px;
          animation: fadeInContent 0.35s ease forwards;
        }

        @keyframes fadeInContent {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Elegant Integrated Theme Kicker Header (replaces button-like pill) */
        .tab-theme-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          padding: 0;
          background: transparent;
        }

        .kicker-icon-glow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .carefe-tab-body .kicker-icon-glow {
          background: rgba(162, 222, 184, 0.22);
          color: #A2DEB8;
          fill: #A2DEB8;
          box-shadow: 0 4px 14px rgba(162, 222, 184, 0.35);
        }

        .carefe-tab-body .kicker-icon-glow svg {
          fill: #A2DEB8;
        }

        .feazto-tab-body .kicker-icon-glow {
          background: rgba(255, 255, 255, 0.7);
          color: #7A5700;
          fill: #7A5700;
          box-shadow: 0 4px 14px rgba(181, 132, 0, 0.25);
        }

        .feazto-tab-body .kicker-icon-glow svg {
          fill: #7A5700;
        }

        .book-tab-body .kicker-icon-glow {
          background: rgba(255, 210, 51, 0.25);
          color: #FFD233;
          fill: #FFD233;
          box-shadow: 0 4px 16px rgba(255, 210, 51, 0.4);
        }

        .book-tab-body .kicker-icon-glow svg {
          fill: #FFD233;
        }

        .kicker-text {
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .carefe-tab-body .kicker-text {
          color: #C3EFD3;
        }

        .feazto-tab-body .kicker-text {
          color: #5C4100;
        }

        .book-tab-body .kicker-text {
          color: #FFE58F;
        }

        .tab-card-main-title {
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 10px 0;
        }

        .carefe-tab-body .tab-card-main-title {
          color: #FFFFFF;
        }

        .book-tab-body .tab-card-main-title {
          color: #FFFFFF;
        }

        .feazto-tab-body .tab-card-main-title {
          color: #1A1A1A;
        }

        .tab-card-subtitle {
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0 0 20px 0;
          max-width: 480px;
        }

        .carefe-tab-body .tab-card-subtitle {
          color: rgba(255, 255, 255, 0.82);
        }

        .book-tab-body .tab-card-subtitle {
          color: rgba(255, 240, 225, 0.85);
        }

        .feazto-tab-body .tab-card-subtitle {
          color: #4A3A00;
        }

        .tab-highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          width: 100%;
          margin-bottom: 24px;
        }

        .tab-highlight-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 14px;
          font-size: 0.82rem;
          font-weight: 600;
          border: none;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .carefe-tab-body .tab-highlight-pill {
          background: rgba(3, 40, 25, 0.45);
          color: #E2F5EA;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .carefe-tab-body .highlight-icon {
          color: #A2DEB8;
          fill: #A2DEB8;
          filter: drop-shadow(0 2px 4px rgba(162, 222, 184, 0.4));
          flex-shrink: 0;
        }

        .feazto-tab-body .tab-highlight-pill {
          background: rgba(255, 255, 255, 0.65);
          color: #3A2B00;
          border: none;
          box-shadow: 0 2px 8px rgba(181, 132, 0, 0.08);
        }

        .feazto-tab-body .highlight-icon {
          color: #8C6500;
          fill: #8C6500;
          filter: drop-shadow(0 2px 4px rgba(140, 101, 0, 0.25));
          flex-shrink: 0;
        }

        .book-tab-body .tab-highlight-pill {
          background: rgba(45, 5, 1, 0.55);
          color: #FFF3E0;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .book-tab-body .highlight-icon {
          color: #FFD233;
          fill: #FFD233;
          filter: drop-shadow(0 2px 6px rgba(255, 210, 51, 0.5));
          flex-shrink: 0;
        }

        .tab-section-block {
          width: 100%;
          margin-bottom: 16px;
        }

        .tab-section-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .carefe-tab-body .tab-section-label {
          color: #A2DEB8;
        }

        .feazto-tab-body .tab-section-label {
          color: #6A4E00;
        }

        .book-tab-body .tab-section-label {
          color: #FFD233;
        }

        .tab-footer-row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: auto;
          padding-top: 14px;
        }

        .tab-benefit-callout {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.45;
          flex: 1 1 200px;
          min-width: 180px;
        }

        .sparkle-gold {
          color: #FFD233;
          fill: #FFD233;
          filter: drop-shadow(0 2px 8px rgba(255, 210, 51, 0.65));
          flex-shrink: 0;
        }

        .carefe-tab-body .sparkle-gold {
          color: #A2DEB8;
          fill: #A2DEB8;
          filter: drop-shadow(0 2px 8px rgba(162, 222, 184, 0.65));
        }

        .feazto-tab-body .sparkle-gold {
          color: #8C6500;
          fill: #8C6500;
          filter: drop-shadow(0 2px 6px rgba(140, 101, 0, 0.4));
        }

        .carefe-tab-body .tab-benefit-callout {
          color: #E2F5EA;
        }

        .feazto-tab-body .tab-benefit-callout {
          color: #3A2B00;
        }

        .book-tab-body .tab-benefit-callout {
          color: #FFF3E0;
        }

        .tab-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          border: none;
          outline: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
          flex-shrink: 0;
        }

        .tab-action-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.04);
        }

        .carefe-btn {
          background: linear-gradient(135deg, #A2DEB8 0%, #76caa0 100%);
          color: #032517;
          border: none;
          box-shadow: 0 6px 20px rgba(3, 35, 22, 0.45), 0 2px 6px rgba(162, 222, 184, 0.3);
        }

        .carefe-btn:hover {
          box-shadow: 0 8px 24px rgba(3, 35, 22, 0.55), 0 3px 8px rgba(162, 222, 184, 0.4);
        }

        .feazto-btn {
          background: linear-gradient(135deg, #1f1b14 0%, #0d0a06 100%);
          color: #FFD233;
          border: none;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 0 2px 6px rgba(248, 181, 4, 0.2);
        }

        .feazto-btn:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 3px 8px rgba(248, 181, 4, 0.3);
        }

        .book-btn {
          background: linear-gradient(135deg, #FFE066 0%, #FFD233 60%, #F5B800 100%);
          color: #3b0500;
          border: none;
          box-shadow: 0 6px 20px rgba(47, 4, 0, 0.5), 0 2px 6px rgba(255, 210, 51, 0.35);
        }

        .book-btn:hover {
          background: linear-gradient(135deg, #FFF099 0%, #FFE066 60%, #FFD233 100%);
          box-shadow: 0 8px 24px rgba(47, 4, 0, 0.6), 0 3px 8px rgba(255, 210, 51, 0.45);
        }

        /* Phone Device Container with Absolute Swappable Banners - Substantially Bigger */
        .device-banner-card {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          width: 500px;
          height: 720px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .device-banner-card:hover {
          transform: translateY(-8px) scale(1.025);
        }

        /* Swappable Phone Banners matched to identical physical device height & scale (Bigger & Impactful) */
        .feazto-device-img {
          position: absolute;
          inset: 0;
          margin: auto;
          height: 680px;
          max-height: 100%;
          width: auto;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.32)) drop-shadow(0 12px 24px rgba(0, 0, 0, 0.18));
          z-index: 2;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .feazto-dosa-banner {
          /* Dosa banner phone body alignment */
          transform-origin: center center;
        }

        .feazto-bookacook-banner {
          /* Book a Cook banner phone body alignment */
          transform-origin: center center;
        }

        .feazto-carefe-banner {
          /* Carefe banner has slight side coffee leaf flare - scale fine-tuned so phone screen & chassis matches 1:1 */
          transform-origin: center center;
        }

        .feazto-device-img.is-active-banner {
          opacity: 1;
          pointer-events: auto;
        }

        .feazto-dosa-banner.is-active-banner {
          transform: scale(1) translateY(0);
        }

        .feazto-bookacook-banner.is-active-banner {
          transform: scale(1) translateY(0);
        }

        .feazto-carefe-banner.is-active-banner {
          transform: scale(0.98) translateY(0);
        }

        .feazto-device-img.is-hidden-banner {
          opacity: 0;
          transform: scale(0.92) translateY(24px);
          pointer-events: none;
        }

        /* Ambient Glow shifting between Golden Yellow, Rich Brown, and Forest Green */
        .device-backdrop-glow {
          position: absolute;
          width: 380px;
          height: 620px;
          filter: blur(55px);
          z-index: 1;
          pointer-events: none;
          transition: background 0.5s ease, opacity 0.5s ease;
        }

        .device-backdrop-glow.glow-yellow {
          background: radial-gradient(circle, rgba(254, 209, 54, 0.38) 0%, rgba(255, 153, 0, 0.18) 50%, transparent 75%);
        }

        .device-backdrop-glow.glow-brown {
          background: radial-gradient(circle, rgba(120, 25, 10, 0.55) 0%, rgba(78, 9, 2, 0.3) 50%, transparent 75%);
        }

        .device-backdrop-glow.glow-green {
          background: radial-gradient(circle, rgba(14, 86, 56, 0.48) 0%, rgba(6, 59, 38, 0.24) 50%, transparent 75%);
        }

        @media (max-width: 768px) {
          .plenti-feazto-showcase-section {
            padding: 60px 16px 70px 16px;
          }

          .plenti-statement-title {
            font-size: 1.55rem;
            line-height: 1.35;
          }

          .statement-dish-capsule {
            width: 58px;
            height: 32px;
          }

          .plenti-stage-showcase-wrapper {
            min-height: auto;
            flex-direction: column;
            gap: 32px;
          }

          .feazto-dosa-device-img {
            max-width: 310px;
          }

          .plenti-cards-stream {
            position: relative;
            left: 0;
            transform: none;
            width: 100%;
          }

          /* Small food buttons loop: kept exclusively on web, hidden on mobile to avoid overlapping */
          .plenti-buttons-stream {
            display: none !important;
          }

          .plenti-central-device-container {
            flex-direction: column;
            gap: 28px;
            padding: 0 16px;
          }

          .showcase-left-blank-card {
            width: 100%;
            max-width: 100%;
            min-height: 280px;
            padding: 20px;
          }

          .blank-card-inner-frame {
            min-height: 240px;
          }

          .tab-footer-row {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
            width: 100%;
          }

          .tab-benefit-callout {
            max-width: 100%;
            width: 100%;
            font-size: 0.86rem;
            line-height: 1.45;
          }

          .tab-action-btn {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
            padding: 13px 20px;
          }

          /* On mobile view: show "Cook" instead of full "Book a cook" so it fits cleanly */
          .mode-btn-label-desktop {
            display: none !important;
          }

          .mode-btn-label-mobile {
            display: inline !important;
          }

          .app-mode-tabs-header {
            gap: 8px;
            padding-left: 12px;
          }

          .tab-pill {
            padding: 8px 18px;
          }
        }
      `}</style>
    </section>
  );
};

