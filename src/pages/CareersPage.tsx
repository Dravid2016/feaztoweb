import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Send,
  Coffee,
  Heart,
  Zap,
  TrendingUp,
  X
} from 'lucide-react';

interface CareersPageProps {
  navigate?: (route: string) => void;
}

interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  tagline: string;
  description: string;
  whatYoullDo: string[];
  whatYoullBring: string[];
  niceToHave: string[];
}

export const CareersPage: React.FC<CareersPageProps> = () => {
  const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    role: '',
    location: '',
    resumeLink: '',
    workLink: '',
    whyJoin: '',
    salaryExpectation: ''
  });

  const roles: JobRole[] = [
    {
      id: 'expansion-manager',
      title: 'City Expansion Manager',
      department: 'Sales & Expansion',
      location: 'Bengaluru / Kochi / Chennai',
      type: 'On-Field & Hybrid',
      tagline: 'Lead the 0-to-1 launch of FEAzTO neighborhood home-kitchen clusters across new cities.',
      description: 'We are looking for a relentless operator and ground launcher who thrives on turning unknown territories into vibrant FEAzTO ecosystems. Launching a new city is an intense, high-impact mission — and you will own it end-to-end.',
      whatYoullDo: [
        'Map out high-density residential and culinary zones to identify verified home cook clusters.',
        'Onboard anchor home chefs and certified FoodPreneurs with customized kitchen setup assistance.',
        'Oversee localized logistics and first-mile thermal packaging workflows.',
        'Collaborate with local culinary influencers, WhatsApp community leads, and regional media.'
      ],
      whatYoullBring: [
        '2–4 years of experience in 0-to-1 territory launches, hyperlocal delivery, or food-tech ops.',
        'Exceptional persuasion, empathy with home cooks, and ground-level street smarts.',
        'Fluency in regional languages (Tamil, Malayalam, Kannada, or Telugu) alongside English.',
        'Comfort working with metrics, daily targets, and CRM pipeline tracking.'
      ],
      niceToHave: [
        'Prior experience in city launch teams at Swiggy, Zomato, Blinkit, or FMCG brands.',
        'Existing personal network of culinary communities or home baker circles.'
      ]
    },
    {
      id: 'culinary-lead',
      title: 'Culinary Operations & Quality Lead',
      department: 'Kitchen Operations',
      location: 'Bengaluru / Kozhikode',
      type: 'Full-time',
      tagline: 'Safeguard authentic generational recipes and enforce commercial hygiene standards.',
      description: 'You will bridge authentic grandma kitchen techniques with calibrated hygiene SOPs. You will audit home kitchens, calibrate regional spice blends, and ensure zero palm oil compliance.',
      whatYoullDo: [
        'Conduct hygiene audits and assist home cooks with FSSAI licensing and food safety certifications.',
        'Taste and calibrate heirloom batches to preserve recipe provenance and authentic flavors.',
        'Set up cold-pressed oil and stone-ground spice procurement channels for home kitchens.',
        'Train home cooks on thermal tamper-evident packaging and delivery dispatch standards.'
      ],
      whatYoullBring: [
        'Degree in Culinary Arts, Food Technology, or 3+ years experience in commercial kitchen operations.',
        'Deep passion for South Indian regional heritage recipes, spice chemistries, and hygiene protocols.',
        'Detail-oriented auditor mindset with warm, respectful interpersonal skills.'
      ],
      niceToHave: [
        'FSSAI FoSTaC certified trainer or auditor experience.',
        'Hands-on experience in cloud kitchen management.'
      ]
    },
    {
      id: 'marketing-lead',
      title: 'Growth Marketing Lead (Content & Brand)',
      department: 'Marketing',
      location: 'Bengaluru / Remote',
      type: 'Hybrid',
      tagline: 'Tell heartwarming food stories and make FEAzTO a culturally beloved household name.',
      description: 'You are 50% creative storyteller and 50% analytical growth hacker. From shooting behind-the-scenes handi simmering videos to writing viral WhatsApp copy and running high-ROI localized ads.',
      whatYoullDo: [
        'Visit neighborhood home kitchens to capture cinematic, mouth-watering reels and cook stories.',
        'Craft witty, culturally resonant push notifications and email drops that people eagerly open.',
        'Manage Meta and Google Ads targeted at pin-code density around active home kitchens.',
        'Own community engagement and turn early foodies into passionate brand champions.'
      ],
      whatYoullBring: [
        'Deep understanding of social algorithms, meme culture, and viral food storytelling.',
        'Hands-on proficiency with mobile video editing (CapCut/VN/Premiere) and Meta Ads Manager.',
        'A genuine, unashamed love for regional food provenance and cultural culinary lore.'
      ],
      niceToHave: [
        'Experience scaling a food blog, creator channel, or D2C brand social presence from scratch.'
      ]
    },
    {
      id: 'fullstack-engineer',
      title: 'Full Stack Engineer (React / Mobile)',
      department: 'Engineering',
      location: 'Bengaluru / Remote',
      type: 'Full-time',
      tagline: 'Engineer hyper-responsive real-time dispatch, live tracking, and cook portals.',
      description: 'Build the foundational technology connecting hungry customers with verified home kitchens and temperature-controlled delivery riders in real-time.',
      whatYoullDo: [
        'Architect responsive web and mobile interfaces for the FEAzTO customer and partner apps.',
        'Implement real-time order routing, rider dispatch telemetry, and cook preparation timers.',
        'Optimize Core Web Vitals, app bundle sizes, and offline-first capabilities for low-bandwidth areas.'
      ],
      whatYoullBring: [
        '2+ years building high-traffic React/React Native or modern web applications.',
        'Solid foundation in TypeScript, component architecture, state management, and REST/WebSocket APIs.',
        'High ownership mindset with the desire to build products that touch daily human lives.'
      ],
      niceToHave: [
        'Experience with geolocation mapping, WebSockets, or food-delivery platforms.'
      ]
    },
    {
      id: 'customer-support-hero',
      title: 'Customer & Cook Happiness Specialist',
      department: 'Support & Experience',
      location: 'Work From Home (South India)',
      type: 'Remote',
      tagline: 'Be the empathetic voice turning delayed deliveries or order glitches into lifelong loyalty.',
      description: 'We do not employ robotic script-readers. We need empathetic problem-solvers who can calm a hungry customer, assist an elderly cook with an app setting, and bring genuine warmth to every conversation.',
      whatYoullDo: [
        'Handle inbound inquiries from customers, riders, and home cooks via chat, phone, and WhatsApp.',
        'Proactively resolve delivery bottlenecks and ensure every customer feels heard and valued.',
        'Relay recurring issues and app bugs directly to the founders and engineering leads.'
      ],
      whatYoullBring: [
        'Fluent spoken and written English and at least one South Indian regional language.',
        'High emotional intelligence, quick problem-solving capability, and patience.',
        'Reliable home workspace with stable internet connection.'
      ],
      niceToHave: [
        'Prior customer support experience in e-commerce, food-tech, or quick-commerce.'
      ]
    }
  ];

  const departments = ['All', 'Sales & Expansion', 'Kitchen Operations', 'Marketing', 'Engineering', 'Support & Experience'];

  const filteredRoles = activeFilter === 'All' 
    ? roles 
    : roles.filter((r) => r.department === activeFilter);

  const perks = [
    {
      icon: <Coffee size={24} fill="currentColor" />,
      title: 'Do the work. Keep the life.',
      desc: 'Flexible hours, generous PTO, and zero unnecessary micromanagement. Deliver impact and own your time.'
    },
    {
      icon: <Heart size={24} fill="currentColor" />,
      title: 'Real Cultural Impact',
      desc: 'Every order directly enriches a neighborhood home chef, preserves generational recipes, and celebrates culinary heritage.'
    },
    {
      icon: <Zap size={24} fill="currentColor" />,
      title: 'Rapid 0-to-1 Ownership',
      desc: 'No corporate bureaucracy. Run your experiments, test new launch models, and ship meaningful features fast.'
    },
    {
      icon: <TrendingUp size={24} fill="currentColor" />,
      title: 'Competitive Upside & Meals',
      desc: 'Competitive compensation, equity participation for key roles, and delicious authentic home tastings from day one.'
    }
  ];

  const handleApplyClick = (role: JobRole) => {
    setSelectedRole(role);
    setApplicationForm((prev) => ({ ...prev, role: role.title }));
    setTimeout(() => {
      const el = document.getElementById('application-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <div className="secondary-page careers-page">

      {/* ── 1. HERO BANNER CARD (Plenti-Inspired Rich Warm Yellow Aesthetic) ── */}
      <section className="careers-hero-container" style={{ padding: '40px 24px 20px 24px', display: 'flex', justifyContent: 'center' }}>
        <div 
          className="careers-banner-card"
          style={{
            maxWidth: '1120px',
            width: '100%',
            minHeight: '490px',
            borderRadius: '40px',
            background: 'linear-gradient(135deg, #FFDE59 0%, #FAC921 50%, #E5A800 100%)',
            padding: '68px 36px 72px 36px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 24px 60px rgba(248, 181, 4, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Radial Highlight */}
          <div 
            style={{
              position: 'absolute',
              top: '-20%',
              right: '-10%',
              width: '540px',
              height: '540px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} 
          />

          {/* Top Pill Badge */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 24px',
              borderRadius: '9999px',
              background: 'rgba(0, 0, 0, 0.18)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              fontSize: '0.74rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '32px'
            }}
          >
            <span>FOOD • CULTURE • CONNECT | TRUSTED BY 10,000+ FOODIES</span>
          </div>

          {/* Master Headline */}
          <h1 
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
              fontWeight: 900,
              color: '#181B20',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              margin: '0 0 22px 0',
              maxWidth: '840px'
            }}
          >
            Turn passion into<br />sustenance. Together.
          </h1>

          {/* Subtitle Description */}
          <p 
            style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              color: 'rgba(24, 27, 32, 0.90)',
              maxWidth: '700px',
              lineHeight: 1.6,
              margin: '0 0 36px 0',
              fontWeight: 500
            }}
          >
            We're building India's premier regional food ecosystem — empowering local FoodPreneurs 
            while making authentic, heirloom home dining accessible to everyone.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <a 
              href="#open-roles"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '13px 34px',
                borderRadius: '9999px',
                background: '#FFFFFF',
                color: '#181B20',
                fontSize: '0.94rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              View open roles
            </a>

            <button 
              type="button"
              onClick={() => {
                const el = document.getElementById('culture-perks-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 24px',
                borderRadius: '9999px',
                background: 'rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(0, 0, 0, 0.20)',
                color: '#FFFFFF',
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'background 0.2s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.25)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0, 0, 0, 0.15)'; }}
            >
              Explore our culture
            </button>
          </div>

        </div>
      </section>

      {/* ── 2. CULTURE & PERKS GRID ("The Feazto Upside") ── */}
      <section id="culture-perks-section" className="container" style={{ padding: '70px 24px 40px 24px', scrollMarginTop: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px auto' }}>
          <div className="badge-tag" style={{ display: 'inline-flex', marginBottom: '14px' }}>
            <Sparkles size={12} />
            <span>The Feazto Upside</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: 800, color: '#111827', margin: '0 0 14px 0', letterSpacing: '-0.025em' }}>
            Do the work. Keep the life.
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1rem', lineHeight: 1.6 }}>
            We believe in high autonomy, radical transparency, and human-first work culture. Here is how we build together.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {perks.map((p, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                padding: '32px 28px',
                borderRadius: '24px',
                boxShadow: '0 6px 22px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '14px', 
                background: '#FFF4D6', 
                color: '#B45309', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#111827', margin: 0 }}>
                {p.title}
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. OPEN POSITIONS DIRECTORY (Plenti-Style Department Filters & Detailed Cards) ── */}
      <section id="open-roles" className="container" style={{ padding: '20px 24px 80px 24px', scrollMarginTop: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
          <div>
            <div className="badge-tag" style={{ display: 'inline-flex', marginBottom: '10px' }}>
              <Briefcase size={12} />
              <span>Current Openings</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#111827', margin: 0, letterSpacing: '-0.025em' }}>
              Come build something good.
            </h2>
          </div>

          {/* Department Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setActiveFilter(dept)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeFilter === dept ? '#FAC921' : '#F3F4F6',
                  color: activeFilter === dept ? '#181B20' : '#4B5563',
                  boxShadow: activeFilter === dept ? '0 4px 12px rgba(248,181,4,0.3)' : 'none'
                }}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {filteredRoles.map((role) => (
            <div 
              key={role.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ 
                    background: '#FFF4D6', 
                    color: '#B45309', 
                    fontSize: '0.78rem', 
                    fontWeight: 700, 
                    padding: '4px 12px', 
                    borderRadius: '9999px' 
                  }}>
                    {role.department}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#9CA3AF', fontWeight: 600 }}>
                    {role.type}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                  {role.title}
                </h3>

                <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.55, margin: '0 0 16px 0' }}>
                  {role.tagline}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.82rem', color: '#6B7280', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} style={{ color: '#FAC921' }} /> {role.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} style={{ color: '#10B981' }} /> Immediate Start
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid #F3F4F6' }}>
                <button
                  type="button"
                  onClick={() => handleApplyClick(role)}
                  className="btn btn-yellow"
                  style={{ flex: 1, padding: '10px 18px', fontSize: '0.88rem', fontWeight: 700, justifyContent: 'center' }}
                >
                  Apply for this role
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '9999px',
                    border: '1px solid #E5E7EB',
                    background: '#FFFFFF',
                    color: '#374151',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. ROLE DETAILS MODAL (When clicked) ── */}
      {selectedRole && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelectedRole(null)}
        >
          <div 
            style={{
              background: '#FFFFFF',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '28px',
              padding: '36px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F3F4F6',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#4B5563'
              }}
            >
              <X size={18} />
            </button>

            <span style={{ 
              background: '#FFF4D6', 
              color: '#B45309', 
              fontSize: '0.78rem', 
              fontWeight: 700, 
              padding: '4px 12px', 
              borderRadius: '9999px',
              display: 'inline-block',
              marginBottom: '12px'
            }}>
              {selectedRole.department} • {selectedRole.type}
            </span>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#111827', margin: '0 0 10px 0' }}>
              {selectedRole.title}
            </h2>

            <p style={{ color: '#6B7280', fontSize: '0.92rem', marginBottom: '24px' }}>
              <MapPin size={14} style={{ display: 'inline', verticalAlign: 'text-bottom' }} /> {selectedRole.location}
            </p>

            <div style={{ marginBottom: '24px', lineHeight: 1.6, color: '#374151', fontSize: '0.96rem' }}>
              {selectedRole.description}
            </div>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', margin: '0 0 10px 0' }}>What you’ll do:</h4>
            <ul style={{ paddingLeft: '20px', color: '#4B5563', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedRole.whatYoullDo.map((item, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>{item}</li>
              ))}
            </ul>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', margin: '0 0 10px 0' }}>What you’ll bring:</h4>
            <ul style={{ paddingLeft: '20px', color: '#4B5563', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedRole.whatYoullBring.map((item, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>{item}</li>
              ))}
            </ul>

            <div style={{ paddingTop: '20px', borderTop: '1px solid #E5E7EB', display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => handleApplyClick(selectedRole)}
                className="btn btn-yellow"
                style={{ flex: 1, padding: '12px 24px', fontSize: '0.95rem', fontWeight: 700, justifyContent: 'center' }}
              >
                Apply for this role
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 5. APPLICATION FORM (Matching Plenti Direct Human Review Form) ── */}
      <section id="application-form-section" className="container" style={{ padding: '40px 24px 100px 24px', scrollMarginTop: '80px' }}>
        <div 
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: '32px',
            padding: '48px 40px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
            border: '1px solid rgba(0,0,0,0.06)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="badge-tag" style={{ display: 'inline-flex', marginBottom: '12px' }}>
              <Send size={12} />
              <span>Apply to Feazto</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#111827', margin: '0 0 12px 0' }}>
              Share the work you’re proud of.
            </h2>
            <p style={{ color: '#6B7280', fontSize: '0.95rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.55 }}>
              No résumé black holes — a real team member reviews every application with care. If it clicks, we’ll make time to talk.
            </p>
          </div>

          {applicationSubmitted ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px 20px', 
              background: '#F0FDF4', 
              borderRadius: '20px',
              border: '1px solid #BBF7D0'
            }}>
              <CheckCircle2 size={48} style={{ color: '#16A34A', margin: '0 auto 16px auto' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#166534', margin: '0 0 8px 0' }}>
                Application Received!
              </h3>
              <p style={{ color: '#15803D', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto' }}>
                Thank you for applying. Our talent team will review your submission and connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                    Role applied for *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. City Expansion Manager"
                    value={applicationForm.role}
                    onChange={(e) => setApplicationForm({ ...applicationForm, role: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                    Full name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Priya Sundaram"
                    value={applicationForm.fullName}
                    onChange={(e) => setApplicationForm({ ...applicationForm, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                    Mobile number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210"
                    value={applicationForm.mobile}
                    onChange={(e) => setApplicationForm({ ...applicationForm, mobile: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                    Email address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="priya@example.com"
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                    Resume link (Google Drive / Notion / LinkedIn) *
                  </label>
                  <input 
                    type="url" 
                    required
                    placeholder="https://drive.google.com/..."
                    value={applicationForm.resumeLink}
                    onChange={(e) => setApplicationForm({ ...applicationForm, resumeLink: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                    Location preference *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Bengaluru / Remote"
                    value={applicationForm.location}
                    onChange={(e) => setApplicationForm({ ...applicationForm, location: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.92rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                  Why do you want to join FEAzTO? *
                </label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell us what excites you about empowering local home cooks and our mission..."
                  value={applicationForm.whyJoin}
                  onChange={(e) => setApplicationForm({ ...applicationForm, whyJoin: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #D1D5DB',
                    fontSize: '0.92rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>
                  Salary expectation *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. ₹8 - ₹12 LPA"
                  value={applicationForm.salaryExpectation}
                  onChange={(e) => setApplicationForm({ ...applicationForm, salaryExpectation: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #D1D5DB',
                    fontSize: '0.92rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginTop: '12px' }}>
                <button
                  type="submit"
                  className="btn btn-yellow btn-full-width"
                  style={{ padding: '14px', fontSize: '1rem', fontWeight: 800, justifyContent: 'center' }}
                >
                  <span>Submit Application</span>
                  <ArrowRight size={18} />
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

    </div>
  );
};
